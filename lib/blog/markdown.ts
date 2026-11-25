/**
 * 블로그 마크다운 → 정해진 틀(요약 박스·목차·본문 섹션·FAQ)로 분해 + 안전한 HTML 렌더.
 *
 * 사이트 템플릿(app/blog/[slug])과 콘솔 미리보기·발행 검증이 모두 이 함수 하나를 쓴다.
 * → 미리보기에서 본 모양 = 발행 모양.
 *
 * 정해진 틀(원고 계약):
 *   # 제목                    → 제목 필드가 우선. 본문에서는 뺀다
 *   ## 핵심 요약              → 목록 줄은 상단 요약 박스, 나머지 문단은 도입부
 *   (도입 문단)
 *   ## 본문 H2 … (### H3)    → 목차 + 섹션
 *   ## 자주 묻는 질문         → "### 질문" + 답 → 아코디언 + FAQPage 구조화 데이터
 *   ## 마치며                 → 일반 섹션
 *
 * 지원 문법: 제목(##~####), 문단, 목록(-, 1.), 표, > 인용(체크 포인트 박스), ---, 이미지, **굵게**, `코드`, [링크](주소)
 * 안전: 모든 텍스트를 이스케이프하고 허용한 태그만 만든다. 링크는 / 또는 https 만, 이미지는 /images/ 또는 https 만.
 * 사람용 표시 [이미지: 설명] 은 화면에 안 나가고 markers 로만 보고한다.
 *
 * ⚠️ 의존성 없이 유지 (콘솔이 레포 밖에서 import).
 */

export interface ArticleSection {
  id: string
  heading: string
  html: string
}

export interface ArticleFaq {
  q: string
  aHtml: string
  aText: string
}

export interface ParsedArticle {
  h1?: string
  summary: string[]
  introHtml: string
  sections: ArticleSection[]
  faq: ArticleFaq[]
  /** 공백 뺀 글자 수 (요약·도입·본문·FAQ) */
  charCount: number
  links: { href: string; text: string }[]
  images: { src: string; alt: string }[]
  /** 남아 있는 [이미지: …] 표시 (사람이 이미지를 아직 안 넣은 자리) */
  markers: string[]
  tables: number
}

const SUMMARY_RE = /^(핵심\s*요약|한눈에\s*보기|이\s*글의\s*핵심|3줄\s*요약|요약)\s*$/
const FAQ_RE = /(자주\s*묻는\s*질문|FAQ|Q\s*&\s*A|질문과\s*답변?)/i
const MARKER_RE = /^\s*\[\s*이미지\s*[:：][^\]]*\]\s*$/

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** 링크 주소 허용 여부: 내부(/로 시작, //는 제외) 또는 https */
export function isAllowedHref(href: string): boolean {
  return /^\/(?!\/)[^\s]*$/.test(href) || /^https:\/\/[^\s]+$/i.test(href)
}

/** 이미지 주소 허용 여부: 사이트 이미지 또는 https */
export function isAllowedImageSrc(src: string): boolean {
  return /^\/images\/[^\s]+$/.test(src) || /^https:\/\/[^\s]+$/i.test(src)
}

interface Ctx {
  links: { href: string; text: string }[]
  images: { src: string; alt: string }[]
  markers: string[]
  tables: number
}

/** 이스케이프된 문자열에서 원래 주소를 되살린다(속성 값으로 다시 이스케이프해서 쓴다) */
function unescapeAttr(s: string): string {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}

function inline(src: string, ctx: Ctx): string {
  let out = escapeHtml(src)
  // 이미지 (문장 안)
  out = out.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (_m, alt: string, raw: string) => {
    const s = unescapeAttr(raw)
    const a = unescapeAttr(alt)
    if (!isAllowedImageSrc(s)) return ''
    ctx.images.push({ src: s, alt: a })
    return `<img src="${escapeHtml(s)}" alt="${escapeHtml(a)}" loading="lazy" decoding="async" />`
  })
  // 링크
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, text: string, raw: string) => {
    const href = unescapeAttr(raw)
    if (!isAllowedHref(href)) return text
    ctx.links.push({ href, text: unescapeAttr(text) })
    const external = href.startsWith('https://')
    return external
      ? `<a href="${escapeHtml(href)}" target="_blank" rel="noopener nofollow">${text}</a>`
      : `<a href="${escapeHtml(href)}">${text}</a>`
  })
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>')
  return out
}

const isTableRow = (l: string) => /^\s*\|.*\|\s*$/.test(l)
const isTableSep = (l: string) => /^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/.test(l) && l.includes('-')
const splitRow = (l: string) =>
  l
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim())

/** 블록 렌더 (제목은 ### 이하만 들어온다 — ## 는 섹션 분할에서 처리) */
function renderBlocks(lines: string[], ctx: Ctx): string {
  const out: string[] = []
  let list: 'ul' | 'ol' | null = null
  const closeList = () => {
    if (list) {
      out.push(`</${list}>`)
      list = null
    }
  }
  let i = 0
  while (i < lines.length) {
    const line = lines[i].replace(/\s+$/, '')

    if (MARKER_RE.test(line)) {
      closeList()
      ctx.markers.push(line.trim())
      i++
      continue
    }

    // 표
    if (isTableRow(line) && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      closeList()
      const header = splitRow(line)
      i += 2
      const rows: string[][] = []
      while (i < lines.length && isTableRow(lines[i])) rows.push(splitRow(lines[i++]))
      ctx.tables++
      out.push(
        '<div class="blog-table"><table><thead><tr>' +
          header.map((h) => `<th>${inline(h, ctx)}</th>`).join('') +
          '</tr></thead><tbody>' +
          rows.map((r) => '<tr>' + r.map((c) => `<td>${inline(c, ctx)}</td>`).join('') + '</tr>').join('') +
          '</tbody></table></div>'
      )
      continue
    }

    // 인용 → 체크 포인트 박스
    if (/^\s*>/.test(line)) {
      closeList()
      const paras: string[] = []
      let cur: string[] = []
      while (i < lines.length && /^\s*>/.test(lines[i])) {
        const t = lines[i].replace(/^\s*>\s?/, '')
        if (t.trim() === '') {
          if (cur.length) paras.push(cur.join(' '))
          cur = []
        } else cur.push(t.trim())
        i++
      }
      if (cur.length) paras.push(cur.join(' '))
      out.push(`<blockquote>${paras.map((p) => `<p>${inline(p, ctx)}</p>`).join('')}</blockquote>`)
      continue
    }

    // 제목 (### ~ ######). # 와 ## 가 여기까지 오면 h3 로 낮춘다
    const h = line.match(/^(#{1,6})\s+(.*)$/)
    if (h) {
      closeList()
      const level = Math.min(Math.max(h[1].length, 3), 4)
      out.push(`<h${level}>${inline(h[2].trim(), ctx)}</h${level}>`)
      i++
      continue
    }

    // 단독 이미지 줄 → figure
    const img = line.match(/^\s*!\[([^\]]*)\]\(([^)\s]+)\)\s*$/)
    if (img) {
      closeList()
      const src = img[2]
      const alt = img[1]
      if (isAllowedImageSrc(src)) {
        ctx.images.push({ src, alt })
        out.push(
          `<figure><img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" />` +
            (alt.trim() ? `<figcaption>${escapeHtml(alt)}</figcaption>` : '') +
            '</figure>'
        )
      }
      i++
      continue
    }

    const ol = line.match(/^\s*\d+[.)]\s+(.*)$/)
    if (ol) {
      if (list !== 'ol') {
        closeList()
        out.push('<ol>')
        list = 'ol'
      }
      out.push(`<li>${inline(ol[1], ctx)}</li>`)
      i++
      continue
    }

    const ul = line.match(/^\s*[-*•]\s+(.*)$/)
    if (ul) {
      if (list !== 'ul') {
        closeList()
        out.push('<ul>')
        list = 'ul'
      }
      out.push(`<li>${inline(ul[1], ctx)}</li>`)
      i++
      continue
    }

    if (/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      closeList()
      out.push('<hr />')
      i++
      continue
    }

    if (line.trim() === '') {
      closeList()
      i++
      continue
    }

    closeList()
    out.push(`<p>${inline(line.trim(), ctx)}</p>`)
    i++
  }
  closeList()
  return out.join('\n')
}

function stripTags(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
}

/** 마크다운 기호를 떼고 순수 텍스트로 (FAQ 질문·요약 등 구조화 데이터용) */
export function plainText(md: string): string {
  return stripTags(inline(md, { links: [], images: [], markers: [], tables: 0 }))
}

function parseFaq(lines: string[], ctx: Ctx): ArticleFaq[] {
  const items: ArticleFaq[] = []
  let q: string | null = null
  let buf: string[] = []
  const flush = () => {
    if (q !== null) {
      const aHtml = renderBlocks(buf, ctx)
      const aText = stripTags(aHtml)
      if (q.trim() && aText) items.push({ q: plainText(q.replace(/^Q[.:：)]\s*/i, '')), aHtml, aText })
    }
    q = null
    buf = []
  }
  const hasH3 = lines.some((l) => /^#{3,6}\s+/.test(l))
  for (const raw of lines) {
    const line = raw.replace(/\s+$/, '')
    const h3 = line.match(/^#{3,6}\s+(.+)$/)
    // ### 질문 형식, 없으면 "Q. 질문" / "**Q. 질문**" 줄 형식
    const qLine = !hasH3 ? line.match(/^\s*\**\s*Q[.:：)]\s*(.+?)\**\s*$/i) : null
    if (h3 || qLine) {
      flush()
      q = (h3 ? h3[1] : qLine![1]).trim()
      continue
    }
    if (q === null) continue
    buf.push(line.replace(/^\s*\**\s*A[.:：)]\s*\**\s*/i, ''))
  }
  flush()
  return items
}

export function parseArticle(markdown: string): ParsedArticle {
  const ctx: Ctx = { links: [], images: [], markers: [], tables: 0 }
  const lines = (markdown ?? '').replace(/\r\n?/g, '\n').split('\n')

  // # 제목 (첫 번째 것만) 은 따로 빼고 본문에서 제외
  let h1: string | undefined
  const body: string[] = []
  for (const l of lines) {
    const m = l.match(/^#\s+(.+)$/)
    if (m && h1 === undefined) {
      h1 = plainText(m[1].trim())
      continue
    }
    body.push(l)
  }

  // ## 단위로 쪼갠다
  const chunks: { heading: string | null; lines: string[] }[] = [{ heading: null, lines: [] }]
  for (const l of body) {
    const m = l.match(/^##\s+(.+)$/)
    if (m) chunks.push({ heading: m[1].trim(), lines: [] })
    else chunks[chunks.length - 1].lines.push(l)
  }

  const summary: string[] = []
  const introParts: string[] = []
  const sections: ArticleSection[] = []
  let faq: ArticleFaq[] = []

  for (const c of chunks) {
    if (c.heading === null) {
      const html = renderBlocks(c.lines, ctx)
      if (html) introParts.push(html)
      continue
    }
    const headingText = plainText(c.heading)
    if (SUMMARY_RE.test(headingText) && summary.length === 0 && sections.length === 0) {
      const rest: string[] = []
      for (const l of c.lines) {
        const li = l.match(/^\s*(?:[-*•]|\d+[.)])\s+(.*)$/)
        if (li) summary.push(inline(li[1].trim(), ctx))
        else rest.push(l)
      }
      const html = renderBlocks(rest, ctx)
      if (html) introParts.push(html)
      continue
    }
    if (FAQ_RE.test(headingText) && faq.length === 0) {
      faq = parseFaq(c.lines, ctx)
      if (faq.length > 0) continue
    }
    sections.push({
      id: `s-${sections.length + 1}`,
      heading: inline(c.heading, ctx),
      html: renderBlocks(c.lines, ctx),
    })
  }

  const introHtml = introParts.join('\n')
  const text = [
    summary.map(stripTags).join(' '),
    stripTags(introHtml),
    ...sections.map((s) => stripTags(s.heading) + ' ' + stripTags(s.html)),
    ...faq.map((f) => f.q + ' ' + f.aText),
  ].join(' ')

  return {
    h1,
    summary,
    introHtml,
    sections,
    faq,
    charCount: text.replace(/\s+/g, '').length,
    links: ctx.links,
    images: ctx.images,
    markers: ctx.markers,
    tables: ctx.tables,
  }
}

/** 읽는 시간(분) — 한국어 분당 약 500자 기준 */
export function readingMinutes(charCount: number): number {
  return Math.max(1, Math.round(charCount / 500))
}

/** 'YYYY.MM.DD' (한국 시간) */
export function formatDate(iso?: string): string {
  if (!iso) return ''
  const t = new Date(iso).getTime()
  if (Number.isNaN(t)) return ''
  const d = new Date(t + 9 * 3600_000)
  return `${d.getUTCFullYear()}.${String(d.getUTCMonth() + 1).padStart(2, '0')}.${String(d.getUTCDate()).padStart(2, '0')}`
}
