// 채팅 AI 결과 붙여넣기 → 본문 / 메타(title·description·slug·category·tags) 분리 (순수 함수)
//  - 기본 형식: 본문 + ===META=== + ===CHECK===
//  - 형식이 흐트러져도 "제목:", "slug:" 같은 라벨 줄을 최대한 찾는다. 못 찾은 칸은 비워서 사람이 채운다.
import { CATEGORY_KEYS } from '@site/lib/blog/config'

export interface ParsedPaste {
  markdown: string
  title?: string
  description?: string
  slug?: string
  category?: string
  tags?: string[]
  titleCandidates: string[]
}

const META_RE = /^\s*[=＝]{3,}\s*META\s*[=＝]{3,}\s*$/im
const CHECK_RE = /^\s*[=＝]{3,}\s*CHECK\s*[=＝]{3,}\s*$/im
const LABEL = {
  title: /^\s*(?:[-*]\s*)?\**\s*(?:title|제목|최종\s*제목)\s*\**\s*[:：]\s*(.+)$/im,
  description: /^\s*(?:[-*]\s*)?\**\s*(?:description|meta\s*description|설명|메타\s*설명)\s*\**\s*[:：]\s*(.+)$/im,
  slug: /^\s*(?:[-*]\s*)?\**\s*(?:slug|슬러그|주소)\s*\**\s*[:：]\s*`?([A-Za-z0-9-]+)`?/im,
  category: /^\s*(?:[-*]\s*)?\**\s*(?:category|카테고리|분류)\s*\**\s*[:：]\s*(.+)$/im,
  tags: /^\s*(?:[-*]\s*)?\**\s*(?:tags|태그)\s*\**\s*[:：]\s*(.+)$/im,
}

const clean = (s?: string) =>
  s
    ?.replace(/^\s*["'“”「]+|["'“”」]+\s*$/g, '')
    .replace(/\*\*/g, '')
    .trim()

function stripFence(text: string): string {
  // 전체를 ```markdown … ``` 로 감싼 경우 벗긴다
  const m = text.match(/^\s*```(?:markdown|md)?\s*\n([\s\S]*?)\n```\s*$/i)
  return m ? m[1] : text
}

export function parsePasted(raw: string): ParsedPaste {
  const text = stripFence((raw ?? '').replace(/\r\n?/g, '\n').trim())
  if (!text) return { markdown: '', titleCandidates: [] }

  let body = text
  let meta = ''
  const mi = text.search(META_RE)
  if (mi >= 0) {
    body = text.slice(0, mi)
    meta = text.slice(mi).replace(META_RE, '')
  }
  const ci = meta.search(CHECK_RE)
  if (ci >= 0) meta = meta.slice(0, ci)
  const bci = body.search(CHECK_RE)
  if (bci >= 0) body = body.slice(0, bci)

  // META 구분선이 없으면 본문 끝에 붙은 라벨 줄들을 메타로 본다
  if (!meta) {
    const lines = body.split('\n')
    let end = lines.length
    const isMeta = (l: string) => Object.values(LABEL).some((re) => new RegExp(re.source, 'i').test(l)) || /^\s*(title_candidates|제목\s*후보)/i.test(l) || /^\s*\d+\.\s.+←/.test(l)
    while (end > 0 && (lines[end - 1].trim() === '' || isMeta(lines[end - 1]))) end--
    meta = lines.slice(end).join('\n')
    body = lines.slice(0, end).join('\n')
  }

  // 본문 앞뒤 ```로 감싼 블록 정리
  body = stripFence(body.trim()).trim()

  const pick = (re: RegExp) => clean(meta.match(re)?.[1])
  const title = pick(LABEL.title)
  const description = pick(LABEL.description)
  const slug = pick(LABEL.slug)?.toLowerCase()
  let category = pick(LABEL.category)
  if (category) category = CATEGORY_KEYS.find((k) => category!.replace(/\s/g, '').includes(k.replace(/\s/g, ''))) ?? category
  const tagsRaw = pick(LABEL.tags)
  const tags = tagsRaw
    ? tagsRaw
        .split(/[,，、#]/)
        .map((t) => t.replace(/^#/, '').trim())
        .filter(Boolean)
        .slice(0, 8)
    : undefined

  const cands: string[] = []
  const candBlock = meta.split(/title_candidates|제목\s*후보/i)[1] ?? ''
  for (const m of candBlock.matchAll(/^\s*\d+[.)]\s*(.+)$/gm)) cands.push(m[1].trim())

  return { markdown: body, title, description, slug, category, tags, titleCandidates: cands.slice(0, 5) }
}
