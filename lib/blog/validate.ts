/**
 * 발행 조건 검사 — 발행 API(422)와 콘솔(발행 전 체크리스트)이 같은 규칙을 쓴다.
 *   block: 발행 불가 (API 가 422 로 거절)
 *   warn : 발행은 되지만 고치는 게 좋음 (콘솔에만 표시)
 *
 * ⚠️ 의존성 없이 유지 (콘솔이 레포 밖에서 import).
 */
import type { BlogContent } from './types'
import { parseArticle, type ParsedArticle } from './markdown'
import { ALLOWED_EXTERNAL_HOSTS, CATEGORY_KEYS } from './config'

export interface BlogIssue {
  level: 'block' | 'warn'
  field: string
  message: string
}

export const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

/** 사람이 확인해야 할 흔적 — AI 원고에 남기 쉬운 자리표시·출처 미확인 표기 */
const LEFTOVER_RE = /(\{\{[^}]*\}\}|\[\s*출처[^\]]*\]|출처\s*요\s*확인|확인\s*필요\]|TODO|TBD|○○|OO샵|XX원)/

export function validatePost(
  c: Partial<BlogContent>,
  opts: { otherSlugs?: string[]; parsed?: ParsedArticle } = {}
): BlogIssue[] {
  const issues: BlogIssue[] = []
  const block = (field: string, message: string) => issues.push({ level: 'block', field, message })
  const warn = (field: string, message: string) => issues.push({ level: 'warn', field, message })

  const title = (c.title ?? '').trim()
  const desc = (c.description ?? '').trim()
  const slug = (c.slug ?? '').trim()
  const md = c.markdown ?? ''

  // 제목
  if (!title) block('title', '제목이 비어 있습니다.')
  else if (title.length > 70) block('title', `제목이 너무 깁니다(${title.length}자). 70자 이내로 줄이세요.`)
  else if (title.length > 40) warn('title', `제목 ${title.length}자 — 구글 검색결과에서 잘릴 수 있습니다(40자 이내 권장).`)
  if (c.seoTitle && c.seoTitle.length > 70) block('seoTitle', 'SEO 제목은 70자 이내여야 합니다.')

  // 설명
  if (!desc) block('description', '설명(meta description)이 비어 있습니다.')
  else if (desc.length < 40) block('description', `설명이 너무 짧습니다(${desc.length}자). 80~150자를 권장합니다.`)
  else if (desc.length > 180) block('description', `설명이 너무 깁니다(${desc.length}자). 150자 안팎으로 줄이세요.`)
  else if (desc.length < 80 || desc.length > 160) warn('description', `설명 ${desc.length}자 — 80~150자가 검색결과에 가장 잘 보입니다.`)

  // 주소
  if (!slug) block('slug', '주소(slug)가 비어 있습니다.')
  else if (!SLUG_RE.test(slug)) block('slug', '주소는 영문 소문자·숫자·하이픈만 씁니다(예: nail-shop-startup-cost).')
  else if (slug.length > 80) block('slug', '주소가 너무 깁니다(80자 이내).')
  else if (opts.otherSlugs?.includes(slug)) block('slug', `이미 다른 글이 쓰는 주소입니다: /blog/${slug}`)

  // 분류·태그
  if (!c.category || !CATEGORY_KEYS.includes(c.category))
    block('category', `카테고리를 고르세요 (${CATEGORY_KEYS.join(' / ')}).`)
  if (!c.tags || c.tags.length === 0) warn('tags', '태그가 없습니다(3~5개 권장).')

  // 대표 이미지
  if (c.cover) {
    if (!c.cover.alt?.trim()) block('cover', '대표 이미지 대체텍스트(alt)를 입력하세요.')
    if (!/^\/images\/blog\//.test(c.cover.src) && !/^https:\/\//.test(c.cover.src))
      block('cover', '대표 이미지는 사이트에 올린 이미지(/images/blog/…) 또는 https 주소여야 합니다.')
  } else warn('cover', '대표 이미지가 없습니다 — 공유·검색 썸네일이 기본 이미지로 나갑니다.')

  // 본문
  if (!md.trim()) {
    block('markdown', '본문이 비어 있습니다.')
    return issues
  }
  const p = opts.parsed ?? parseArticle(md)

  if (p.sections.length < 3) block('markdown', `본문 소제목(##)이 ${p.sections.length}개뿐입니다. 3개 이상 필요합니다.`)
  else if (p.sections.length < 4) warn('markdown', '소제목(##)이 4개 미만입니다 — 검색 의도를 충분히 다뤘는지 확인하세요.')
  if (p.charCount < 1200) block('markdown', `본문이 너무 짧습니다(${p.charCount}자). 얇은 글은 애드센스·검색 모두 불리합니다.`)
  else if (p.charCount < 2500) warn('markdown', `본문 ${p.charCount}자 — 상위글 평균과 비교해 부족하지 않은지 확인하세요.`)

  const leftover = md.match(LEFTOVER_RE)
  if (leftover) block('markdown', `확인이 필요한 표시가 남아 있습니다: "${leftover[0]}"`)

  if (p.summary.length === 0) warn('markdown', '"## 핵심 요약" 목록이 없습니다 — 상단 요약 박스가 비어 보입니다.')
  if (p.faq.length === 0) warn('markdown', '"## 자주 묻는 질문"이 없습니다 — FAQ 리치결과를 못 받습니다.')
  else if (p.faq.length < 3) warn('markdown', `FAQ 가 ${p.faq.length}개입니다(3~5개 권장).`)
  if (p.tables === 0) warn('markdown', '표가 없습니다 — 비용·비교 정보는 표로 정리하면 체류시간이 늘어납니다.')
  if (p.markers.length > 0) warn('markdown', `이미지 자리표시 ${p.markers.length}곳이 남아 있습니다(발행 시 화면에는 안 보임).`)

  for (const im of p.images) {
    if (!im.alt.trim()) block('markdown', `본문 이미지에 대체텍스트(alt)가 없습니다: ${im.src}`)
  }

  const internal = p.links.filter((l) => l.href.startsWith('/'))
  if (internal.length < 2) warn('markdown', `내부 링크가 ${internal.length}개입니다 — 관련 허브·Q&A 로 2~4개 연결하세요.`)
  for (const l of p.links) {
    if (!l.href.startsWith('https://')) continue
    let host = ''
    try {
      host = new URL(l.href).hostname.toLowerCase()
    } catch {
      /* 무시 */
    }
    if (!ALLOWED_EXTERNAL_HOSTS.includes(host))
      block('markdown', `허용되지 않은 외부 링크: ${l.href} (공공기관만 허용 — lib/blog/config.ts)`)
  }

  const kw = (c.keyword ?? '').trim()
  if (kw) {
    const core = kw.replace(/\s+/g, '')
    const has = (s: string) => s.replace(/\s+/g, '').includes(core)
    if (!has(title)) warn('title', `제목에 목표 키워드("${kw}")가 없습니다.`)
    if (!has(desc)) warn('description', `설명에 목표 키워드("${kw}")가 없습니다.`)
  }

  return issues
}

export function blockingIssues(issues: BlogIssue[]): BlogIssue[] {
  return issues.filter((i) => i.level === 'block')
}
