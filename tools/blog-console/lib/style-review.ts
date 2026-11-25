// ===========================================================================
//  문체·중복 검수 (project15 style-review.ts 중 한국 블로그에 맞는 것만) — 순수 함수, 화면에서 즉시 실행
//   1 FAQ 중복 질문            🟡 같은 질문을 말만 바꿔 두 번
//   2 완화 표현 중첩           🟡 "~할 수 있습니다" 류가 문장 대부분 → 아무 말도 안 하는 글
//   3 같은 표현 반복           🟡 한 글 안에서 같은 3어절 표현이 여러 번
//   4 지난 글과 결말 문투 중복  🟡 "## 마치며" 끝문장이 예전 글과 비슷 (발행 이력 필요)
//   5 지난 글과 공통 상투구     🟡 여러 글에 반복되는 표현 → 사이트 전체가 찍어낸 글처럼 보임
//   6 키워드 겹침(카니벌라이제이션) 🟡 같은 키워드·거의 같은 제목의 글이 이미 있음
//  막지 않고 표시만 한다(전부 🟡). 최종 판단은 사람.
// ===========================================================================
import type { BlogPostSummary } from '@site/lib/blog/types'
import type { ReviewFinding } from './review'

export interface HistoryEntry {
  id: string
  slug: string
  keyword: string
  title: string
  at: string
  closingSentences: string[]
  topPhrases: string[]
}

const HEDGES = ['수 있습니다', '수 있어요', '경우가 많습니다', '경우가 있습니다', '달라질 수', '다를 수', '편입니다', '것으로 보입니다', '라고 할 수', '좋습니다', '권장합니다']
/** 반복이 자연스러운 말(키워드·단위 등)은 상투구 집계에서 뺀다 */
const PHRASE_STOP = /^(만 원|원 정도|약 \d|수 있습니다|있습니다|합니다|입니다)$/
/** 기능어 — 3어절 중 2개 이상이 이것이면 "볼 수 있습니다" 같은 어미일 뿐이라 상투구로 안 센다 */
const FUNC = new Set(['수', '것', '등', '및', '더', '할', '볼', '알', '될', '있습니다', '없습니다', '합니다', '됩니다', '입니다', '있는', '하는', '되는', '있어', '때', '경우', '있고', '좋습니다', '같은', '이', '그', '위해'])

function plain(md: string): string {
  return md
    .replace(/^===META===[\s\S]*$/m, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^\s*\|.*\|\s*$/gm, '')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_`>]/g, '')
}

function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?。])\s+|\n+/)
    .map((s) => s.replace(/^[-•\d.)\s]+/, '').trim())
    .filter((s) => s.length >= 8)
}

function bigrams(s: string): Set<string> {
  const t = s.replace(/[^가-힣A-Za-z0-9]/g, '')
  const out = new Set<string>()
  for (let i = 0; i + 2 <= t.length; i++) out.add(t.slice(i, i + 2))
  return out
}

export function similarity(a: string, b: string): number {
  const A = bigrams(a)
  const B = bigrams(b)
  if (!A.size || !B.size) return 0
  let inter = 0
  for (const x of A) if (B.has(x)) inter++
  return inter / (A.size + B.size - inter)
}

function sectionBody(md: string, heading: RegExp): string {
  const lines = md.split(/\r?\n/)
  const i = lines.findIndex((l) => /^##\s+/.test(l) && heading.test(l))
  if (i < 0) return ''
  const out: string[] = []
  for (let j = i + 1; j < lines.length; j++) {
    if (/^##\s+/.test(lines[j]) || /^===/.test(lines[j])) break
    out.push(lines[j])
  }
  return out.join('\n')
}

/** "## 마치며" 마지막 2문장 — 발행 이력에도 이걸 저장한다 */
export function closingSentences(md: string): string[] {
  const sec = sectionBody(md, /마치며|마무리|결론/) || md.split(/\r?\n/).slice(-8).join('\n')
  return sentences(plain(sec)).slice(-2)
}

/** 이 글에서 많이 쓴 3어절 표현 상위 N개 — 발행 이력에 저장해 다음 글과 대조 */
export function topPhrases(md: string, keyword = '', n = 8): { phrase: string; count: number }[] {
  const kw = keyword.replace(/\s+/g, '')
  const counts = new Map<string, number>()
  for (const s of sentences(plain(md))) {
    const w = s.replace(/[^가-힣A-Za-z0-9\s~]/g, ' ').split(/\s+/).filter(Boolean)
    for (let i = 0; i + 3 <= w.length; i++) {
      const tri = w.slice(i, i + 3)
      const p = tri.join(' ')
      if (p.length < 7 || PHRASE_STOP.test(p) || /\d/.test(p)) continue
      if (tri.filter((t) => FUNC.has(t)).length >= 2) continue
      if (kw && p.replace(/\s+/g, '').includes(kw)) continue
      counts.set(p, (counts.get(p) ?? 0) + 1)
    }
  }
  return Array.from(counts.entries())
    .filter(([, c]) => c >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([phrase, count]) => ({ phrase, count }))
}

export function styleReview(
  input: { title: string; markdown: string; keyword?: string; faqQuestions: string[]; postId?: string },
  ctx: { history?: HistoryEntry[]; posts?: BlogPostSummary[] } = {}
): ReviewFinding[] {
  const out: ReviewFinding[] = []
  const md = input.markdown
  if (plain(md).replace(/\s/g, '').length < 300) return out

  // 1 FAQ 중복
  const qs = input.faqQuestions
  const dup: string[] = []
  for (let i = 0; i < qs.length; i++)
    for (let j = i + 1; j < qs.length; j++) if (similarity(qs[i], qs[j]) >= 0.55) dup.push(`"${qs[i]}" ↔ "${qs[j]}"`)
  if (dup.length) out.push({ level: 'warn', category: 'FAQ 중복', message: '비슷한 질문이 겹칩니다. 하나로 합치고 다른 질문을 넣으세요.', evidence: dup.slice(0, 2).join(' · ') })

  // 2 완화 표현 중첩
  const ss = sentences(plain(md))
  if (ss.length >= 15) {
    const hedged = ss.filter((s) => HEDGES.some((h) => s.includes(h))).length
    const ratio = hedged / ss.length
    if (ratio >= 0.45)
      out.push({
        level: 'warn',
        category: '완화 표현',
        message: `문장의 ${Math.round(ratio * 100)}%가 "~할 수 있습니다·~경우가 많습니다"로 끝납니다. 확실한 사실은 단정하세요(얼버무리는 글은 품질 평가에서 약합니다).`,
      })
  }

  // 3 같은 표현 반복 (한 글 안)
  const tops = topPhrases(md, input.keyword ?? '', 20)
  const over = tops.filter((t) => t.count >= 4).slice(0, 3)
  if (over.length) out.push({ level: 'warn', category: '표현 반복', message: '같은 표현이 여러 번 나옵니다. 일부를 다른 말로 바꾸세요.', evidence: over.map((t) => `"${t.phrase}" ${t.count}회`).join(' · ') })

  const history = (ctx.history ?? []).filter((h) => h.id !== input.postId)

  // 4 지난 글과 결말 문투
  const closing = closingSentences(md).join(' ')
  if (closing.length >= 20 && history.length) {
    let best = { s: 0, title: '' }
    for (const h of history) {
      const s = similarity(closing, h.closingSentences.join(' '))
      if (s > best.s) best = { s, title: h.title }
    }
    if (best.s >= 0.45)
      out.push({ level: 'warn', category: '결말 문투', message: `"마치며" 끝문장이 지난 글 "${best.title}"과 비슷합니다(${Math.round(best.s * 100)}%). 이 글에만 맞는 결론으로 바꾸세요.`, evidence: closing.slice(0, 70) })
  }

  // 5 지난 글과 공통 상투구
  if (history.length >= 2) {
    const mine = topPhrases(md, input.keyword ?? '', 10).map((t) => t.phrase)
    const common = mine.filter((p) => history.filter((h) => h.topPhrases.includes(p)).length >= 2)
    if (common.length)
      out.push({ level: 'warn', category: '공통 상투구', message: '지난 글 여러 편에 반복된 표현입니다. 사이트 전체가 같은 틀로 찍어낸 글처럼 보이지 않게 바꾸세요.', evidence: common.slice(0, 3).map((p) => `"${p}"`).join(' · ') })
  }

  // 6 키워드 겹침
  const kw = (input.keyword ?? '').replace(/\s+/g, '')
  const others = (ctx.posts ?? []).filter((p) => p.id !== input.postId)
  if (kw) {
    const same = others.filter((p) => (p.keyword ?? '').replace(/\s+/g, '') === kw)
    if (same.length)
      out.push({
        level: 'warn',
        category: '키워드 겹침',
        message: `같은 목표 키워드의 글이 이미 있습니다. 두 글이 서로 순위를 깎습니다(카니벌라이제이션) — 기존 글을 보강하거나 키워드를 더 구체적으로 바꾸세요.`,
        evidence: same.map((p) => `/blog/${p.slug} (${p.status})`).join(' · '),
      })
  }
  if (input.title.trim()) {
    const near = others.filter((p) => similarity(p.title, input.title) >= 0.6)
    if (near.length) out.push({ level: 'warn', category: '제목 겹침', message: '제목이 거의 같은 글이 있습니다.', evidence: near.map((p) => `"${p.title}"`).join(' · ') })
  }

  return out
}
