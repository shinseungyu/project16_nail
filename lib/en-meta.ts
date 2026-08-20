import type { Metadata } from 'next'
import { hreflang } from '@/lib/hreflang'
import type { EnPage } from '@/data/en/types'

/**
 * 영문 페이지 metadata 생성기.
 *
 * canonical은 항상 자기 자신(교차 canonical 금지), hreflang은 lib/hreflang.ts의
 * 짝 매핑에서만 나온다. 페이지마다 손으로 쓰면 반드시 어긋나므로 여기로 모은다.
 */
export function enMetadata(page: EnPage): Metadata {
  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: page.path,
      languages: hreflang(page.path),
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      siteName: 'Korea Beauty Guide',
      locale: 'en_US',
      type: 'article',
      images: [{ url: '/images/thumb.webp', width: 1200, height: 630, alt: page.h1 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: ['/images/thumb.webp'],
    },
    robots: { index: true, follow: true },
  }
}
