import { MetadataRoute } from 'next'
import { nailServices } from '@/data/services'
import { skincareServices } from '@/data/skincare-services'
import { makeupServices } from '@/data/makeup-services'
import { hairServices } from '@/data/hair-services'
import posts from '@/data/posts.json'

// 하드코딩하면 글이 늘어날 때마다 누락된다. 데이터에서 직접 파생시킨다.
const POST_IDS = (posts as { id: number }[]).map((p) => p.id).sort((a, b) => a - b)

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

  const servicePaths = nailServices.map((s) => ({
    url: `${baseUrl}/service/${s.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const skincareServicePaths = skincareServices.map((s) => ({
    url: `${baseUrl}/skincare/service/${s.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const makeupServicePaths = makeupServices.map((s) => ({
    url: `${baseUrl}/makeup/service/${s.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const hairServicePaths = hairServices.map((s) => ({
    url: `${baseUrl}/hair/service/${s.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const boardPosts = POST_IDS.map((id) => ({
    url: `${baseUrl}/board/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/cost`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/guide`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/license`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/revenue`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/qna`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/board`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.7 },
    ...servicePaths,
    // 소비자 검색 유입로 — 창업 허브와 역할을 분리한 페이지들
    { url: `${baseUrl}/nail-art`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/skincare`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/skincare/guide`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/skincare/cost`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/skincare/license`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/skincare/revenue`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...skincareServicePaths,
    { url: `${baseUrl}/makeup`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/makeup/cost`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/makeup/license`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/makeup/revenue`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/makeup/personal-color`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...makeupServicePaths,
    { url: `${baseUrl}/hair`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/hair/scalp`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/hair/scalp/hairloss`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/hair/scalp/clinic`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    // 진로·연봉 — 광고 단가 최상 구간
    { url: `${baseUrl}/hair/career/salary`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/hair/career/reality`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hair/career/how-to`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/hair/career/freelance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // 자격증 세부
    { url: `${baseUrl}/hair/license/difference`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/hair/license/beautician`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/hair/license/written`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hair/license/practical`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hair/license/issuance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // 도구·장비
    { url: `${baseUrl}/hair/equipment/curling-iron`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/hair/equipment/clipper`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hair/equipment/scissors`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hair/equipment/salon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hair/cost`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/hair/license`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/hair/revenue`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...hairServicePaths,
    // 반영구화장 — 문신사법 적용 대상이라 cost/license/revenue 구조가 아닌 정보 클러스터
    { url: `${baseUrl}/semi-permanent`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/semi-permanent/legal`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/semi-permanent/law-timeline`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/semi-permanent/temp-registration`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/semi-permanent/eyebrow`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/semi-permanent/price`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/semi-permanent/aftercare`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/semi-permanent/removal`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...boardPosts,
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
