import type { Metadata } from 'next'
import Script from 'next/script'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { hreflang } from '@/lib/hreflang'
import './globals.css'

const pretendard = localFont({
  src: [
    { path: './fonts/Pretendard-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Pretendard-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Pretendard-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/Pretendard-Bold.woff2', weight: '700', style: 'normal' },
    { path: './fonts/Pretendard-ExtraBold.woff2', weight: '800', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-pretendard',
})

const SITE_NAME = '네일샵 창업'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'
const TITLE = '네일샵 창업 | 창업비용 1,480만원·자격증·수익 총정리 2026'
const DESC = '1인 네일샵 창업비용 800~2,000만원, 월 순수익 250~350만원. 미용사(네일) 자격증 취득 절차와 손익분기점까지 2026년 기준으로 정리했습니다.'
const KEYWORDS = '네일샵 창업, 네일샵 창업비용, 1인 네일샵 창업, 네일아트 창업, 네일 창업, 네일샵 차리는법, 소자본 창업 네일, 네일아트 창업비용, 네일 자격증 창업, 네일아트 창업 준비'

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESC,
  metadataBase: new URL(SITE_URL),
  // 홈은 영문 허브(/en)와 짝. x-default는 한국어를 가리킨다 — 이 사이트의 기본 언어이기 때문.
  alternates: { canonical: '/', languages: hreflang('/') },
  keywords: KEYWORDS.split(', '),
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'ko_KR',
    type: 'website',
    images: [{ url: '/images/thumb.webp', width: 1200, height: 630, alt: '네일샵 창업 총정리' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE_NAME,
    title: TITLE,
    description: DESC,
    images: ['/images/thumb.webp'],
  },
  verification: {
    other: { 'naver-site-verification': '59831489bb696d4bcf38c779cbd83b176bfc7f97' },
  },
  other: {
    'google-adsense-account': 'ca-pub-5378247298190063',
    'NaverBot': 'all',
    'Yeti': 'all',
    'googlebot': 'all',
    'subject': '네일샵 창업',
    'title': TITLE,
    'publisher': SITE_NAME,
    'author': SITE_NAME,
    'Other Agent': SITE_NAME,
    'location': 'South Korea',
    'distribution': 'global',
    'rating': 'general',
    'format-detection': 'telephone=no, date=no, address=no, email=no',
    // itemprop (schema.org microdata)
    'itemprop:name': TITLE,
    'itemprop:description': DESC,
    'itemprop:image': '/images/thumb.webp',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: '네일샵 창업',
        inLanguage: 'ko-KR',
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: '네일샵 창업',
        url: `${siteUrl}/`,
      },
      {
        '@type': 'Service',
        '@id': `${siteUrl}/#service`,
        name: '네일샵 창업',
        serviceType: '네일샵 창업 정보 및 상담 서비스',
        areaServed: { '@type': 'Country', name: 'KR' },
        provider: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: `${siteUrl}/`,
        name: TITLE,
        inLanguage: 'ko-KR',
        description: '네일샵 창업비용, 자격증, 준비물, 예상 수익까지 한번에 확인하세요.',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: ['네일샵 창업', '네일샵 창업비용', '1인 네일샵 창업', '네일샵 창업', '네일 자격증'],
        mainEntity: { '@id': `${siteUrl}/#service` },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#author`,
        name: '올댓뷰티 멘토',
        jobTitle: '네일샵 창업 컨설턴트',
        knowsAbout: ['네일샵창업', '네일샵 창업', '네일샵 창업 비용', '1인네일샵창업', '뷰티 소자본 창업', '미용업 자격증'],
        url: `${siteUrl}/about`,
      },
    ],
  }

  return (
    <html lang="ko">
      <head>
        <meta itemProp="name" content={TITLE} />
        <meta itemProp="description" content={DESC} />
        <meta itemProp="image" content="/images/thumb.webp" />
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} strategy="afterInteractive" />
        {/* Google AdSense 로더 — 사이트 전체에서 1번만 로드 (광고 단위는 <AdUnit />로 각 페이지 본문에 배치) */}
        <Script
          id="adsbygoogle-loader"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5378247298190063"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${pretendard.className} antialiased`}>
        {/* 헤더 (현재 업종에 맞춰 로고·네비 전환) */}
        <SiteHeader />

        <main className="min-h-screen">{children}</main>

        {/* 푸터 — /en 경로에서는 영문 푸터로 전환된다 */}
        <SiteFooter />

        <Analytics />
      </body>
    </html>
  )
}
