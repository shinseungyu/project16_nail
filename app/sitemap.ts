import { MetadataRoute } from 'next'
import { nailServices } from '@/data/services'
import { skincareServices } from '@/data/skincare-services'
import { makeupServices } from '@/data/makeup-services'
import { hairServices } from '@/data/hair-services'

const POST_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

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
    { url: `${baseUrl}/skincare`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/skincare/cost`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/skincare/license`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/skincare/revenue`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...skincareServicePaths,
    { url: `${baseUrl}/makeup`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/makeup/cost`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/makeup/license`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/makeup/revenue`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...makeupServicePaths,
    { url: `${baseUrl}/hair`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/hair/cost`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/hair/license`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/hair/revenue`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...hairServicePaths,
    ...boardPosts,
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
