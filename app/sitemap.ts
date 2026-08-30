import { MetadataRoute } from 'next'
import { nailServices } from '@/data/services'
import { skincareServices } from '@/data/skincare-services'
import { makeupServices } from '@/data/makeup-services'
import { hairServices } from '@/data/hair-services'
import posts from '@/data/posts.json'
import { PUBLISHED_SLUGS, QNA_DETAILS } from '@/data/qna'
import { EN_PAGES } from '@/data/en'
import { sitemapAlternates } from '@/lib/hreflang'

// 하드코딩하면 글이 늘어날 때마다 누락된다. 데이터에서 직접 파생시킨다.
const POST_IDS = (posts as { id: number }[]).map((p) => p.id).sort((a, b) => a - b)

/**
 * 사이트 전체 lastmod 기준일. **콘텐츠가 실제로 바뀔 때만 손으로 올린다.**
 *
 * 예전에는 `new Date()` 를 58군데에서 썼는데, 사이트맵이 빌드 시점에 생성되므로
 * CSS 한 줄만 고쳐 배포해도 252개 URL 전부가 "방금 수정됨"으로 나갔다.
 * lastmod 가 매번 오늘이면 구글은 그 사이트의 lastmod 를 통째로 무시한다.
 * 색인을 밀어야 하는 상황에서 쓸 수 있는 신호 하나를 버리는 셈이라 상수로 고정한다.
 *
 * 자기 날짜를 가진 콘텐츠(EN 아티클의 updatedIso, QnA 의 updated)는 그 값을 쓰고,
 * 날짜 필드가 없는 구조 페이지만 이 상수를 쓴다.
 */
const SITE_UPDATED = new Date('2026-08-30')

/** QnA 원고의 'YYYY.MM.DD' 표기를 Date 로. 값이 없으면 사이트 기준일로 떨어진다. */
function qnaUpdated(slug: string): Date {
  const raw = QNA_DETAILS[slug]?.updated
  if (!raw) return SITE_UPDATED
  const d = new Date(raw.replace(/\./g, '-'))
  return Number.isNaN(d.getTime()) ? SITE_UPDATED : d
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

  const servicePaths = nailServices.map((s) => ({
    url: `${baseUrl}/service/${s.id}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const skincareServicePaths = skincareServices.map((s) => ({
    url: `${baseUrl}/skincare/service/${s.id}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const makeupServicePaths = makeupServices.map((s) => ({
    url: `${baseUrl}/makeup/service/${s.id}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const hairServicePaths = hairServices.map((s) => ({
    url: `${baseUrl}/hair/service/${s.id}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const boardPosts = POST_IDS.map((id) => ({
    url: `${baseUrl}/board/${id}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const koEntries: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: SITE_UPDATED, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/cost`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/guide`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/license`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/revenue`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/calculator`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/qna`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    // 상세는 원고가 작성된 것만 등록. QNA_DETAILS에 추가되면 자동 반영된다.
    ...PUBLISHED_SLUGS.map((slug) => ({
      url: `${baseUrl}/qna/${slug}`,
      lastModified: qnaUpdated(slug),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${baseUrl}/board`, lastModified: SITE_UPDATED, changeFrequency: 'daily', priority: 0.7 },
    ...servicePaths,
    // 소비자 검색 유입로 — 창업 허브와 역할을 분리한 페이지들
    { url: `${baseUrl}/nail-art`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/skincare`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/skincare/guide`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/skincare/cost`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/skincare/license`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/skincare/revenue`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    ...skincareServicePaths,
    { url: `${baseUrl}/makeup`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/makeup/cost`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/makeup/license`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/makeup/revenue`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/makeup/personal-color`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    ...makeupServicePaths,
    { url: `${baseUrl}/hair`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/hair/scalp`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/hair/scalp/hairloss`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/hair/scalp/clinic`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    // 진로·연봉 — 광고 단가 최상 구간
    { url: `${baseUrl}/hair/career/salary`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/hair/career/reality`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hair/career/how-to`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/hair/career/freelance`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    // 자격증 세부
    { url: `${baseUrl}/hair/license/difference`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/hair/license/beautician`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/hair/license/written`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hair/license/practical`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hair/license/issuance`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    // 도구·장비
    { url: `${baseUrl}/hair/equipment/curling-iron`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/hair/equipment/clipper`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hair/equipment/scissors`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hair/equipment/salon`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hair/cost`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/hair/license`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/hair/revenue`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    ...hairServicePaths,
    // 반영구화장 — 문신사법 적용 대상이라 cost/license/revenue 구조가 아닌 정보 클러스터
    { url: `${baseUrl}/semi-permanent`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/semi-permanent/legal`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/semi-permanent/law-timeline`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/semi-permanent/temp-registration`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/semi-permanent/eyebrow`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/semi-permanent/price`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/semi-permanent/aftercare`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/semi-permanent/removal`, lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    ...boardPosts,
    { url: `${baseUrl}/privacy`, lastModified: SITE_UPDATED, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: SITE_UPDATED, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // 영문판 — 아티클은 data/en/index.ts에서 파생시킨다. 페이지를 늘려도 여기는 안 고쳐도 된다.
  const enEntries: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/en`, lastModified: SITE_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    ...EN_PAGES.map((p) => ({
      url: `${baseUrl}${p.path}`,
      lastModified: new Date(p.updatedIso),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${baseUrl}/en/about`, lastModified: SITE_UPDATED, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/en/privacy`, lastModified: SITE_UPDATED, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // hreflang 은 항목마다 손으로 쓰지 않는다. lib/hreflang.ts의 짝 매핑에서 일괄 파생시켜야
  // HTML <link> 쪽과 sitemap 쪽이 어긋나지 않는다. 짝이 없는 경로는 아무것도 붙지 않는다.
  return [...koEntries, ...enEntries].map((entry) => ({
    ...entry,
    ...sitemapAlternates(entry.url.slice(baseUrl.length) || '/'),
  }))
}
