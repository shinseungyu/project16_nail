// 내부링크 후보 (서버 전용) — 허브 페이지 + 원고가 있는 Q&A + 이미 발행한 블로그 글.
// 키워드와 겹치는 단어가 많은 순으로 골라 프롬프트에 넣는다(AI 가 목록 밖 주소를 지어내지 않게).
import { QNA_ITEMS, PUBLISHED_SLUGS } from '@site/data/qna'
import type { BlogPostSummary } from '@site/lib/blog/types'
import type { InternalLink } from './types'
import { siteCall } from './site'

const HUBS: InternalLink[] = [
  { href: '/cost', label: '네일샵 창업비용 총정리', kind: 'hub' },
  { href: '/guide', label: '네일샵 창업 단계별 가이드', kind: 'hub' },
  { href: '/license', label: '미용사(네일) 자격증 취득 방법', kind: 'hub' },
  { href: '/revenue', label: '네일샵 예상 수익 분석', kind: 'hub' },
  { href: '/calculator', label: '네일샵 창업비용 계산기', kind: 'hub' },
  { href: '/nail-art', label: '네일아트 종류·가격 정리', kind: 'hub' },
  { href: '/qna', label: '뷰티 창업 자주 묻는 질문 모음', kind: 'hub' },
  { href: '/skincare', label: '피부관리샵 창업 정보', kind: 'hub' },
  { href: '/makeup', label: '메이크업샵 창업 정보', kind: 'hub' },
  { href: '/semi-permanent', label: '반영구화장 자격·법 정보', kind: 'hub' },
]

const tokens = (s: string) =>
  new Set(
    (s.match(/[가-힣A-Za-z0-9]{2,}/g) ?? []).map((t) => t.replace(/(은|는|이|가|을|를|에|의|로|와|과|도|만|나요|인가요|하나요)$/, ''))
  )

/** 키워드 단어마다: 그대로 들어 있으면 2점, 일부만 겹치면 1점 ("비용"만 겹치는 무관한 글이 끼지 않게 Q&A 는 2점 이상만) */
function score(label: string, kw: Set<string>): number {
  const t = Array.from(tokens(label))
  let s = 0
  for (const k of kw) {
    if (t.some((x) => x === k || x.includes(k))) s += 2
    else if (t.some((x) => x.length >= 2 && k.includes(x))) s += 1
  }
  return s
}

export async function internalLinks(keyword: string): Promise<{ links: InternalLink[]; blogError?: string }> {
  const kw = tokens(keyword)
  const published = new Set(PUBLISHED_SLUGS)
  const qna = QNA_ITEMS.filter((q) => published.has(q.slug))
    .map((q) => ({ link: { href: `/qna/${q.slug}`, label: q.question, kind: 'qna' as const }, s: score(q.question, kw) }))
    .filter((x) => x.s >= 2)
    .sort((a, b) => b.s - a.s)
    .slice(0, 8)
    .map((x) => x.link)

  let blog: InternalLink[] = []
  let blogError: string | undefined
  try {
    const { posts } = await siteCall<{ posts: BlogPostSummary[] }>('blog/posts')
    blog = posts
      .filter((p) => p.status === 'published')
      .map((p) => ({ link: { href: `/blog/${p.slug}`, label: p.title, kind: 'blog' as const }, s: score(p.title, kw) }))
      .sort((a, b) => b.s - a.s)
      .slice(0, 8)
      .map((x) => x.link)
  } catch (e) {
    blogError = e instanceof Error ? e.message : String(e)
  }

  const hubs = [...HUBS].sort((a, b) => score(b.label, kw) - score(a.label, kw))
  return { links: [...hubs, ...qna, ...blog], blogError }
}
