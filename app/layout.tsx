import type { Metadata } from 'next'
import Script from 'next/script'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal'
import LegalNoticeModal from '@/components/LegalNoticeModal'
import SiteHeader from '@/components/SiteHeader'
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
  alternates: { canonical: '/' },
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

        {/* 푸터 */}
        <footer className="bg-stone-950 text-stone-400 text-sm py-16 mt-20">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-stone-800 pb-10 mb-10">
              <div>
                <p className="font-bold text-white text-lg mb-4 tracking-tight">💅 네일샵 창업</p>
                <p className="text-xs leading-relaxed max-w-xs text-stone-500">
                  본 사이트의 정보는 2026년 최신 창업 트렌드를 바탕으로 하며, 실제 창업 비용은 지역 및 규모에 따라 상이할 수 있습니다.
                </p>
                <div className="text-xs text-stone-600 mt-4 space-y-1 leading-relaxed">
                  <p>상호: 주식회사 와야미디어</p>
                  <p>사업자등록번호: 105-87-55780</p>
                  <p>업종: 광고대행, 광고물작성, 기타광고</p>
                  <p>주소: 서울특별시 마포구 구룡길 19, A429호</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <p className="text-white font-semibold text-xs uppercase tracking-widest">창업 정보</p>
                  <ul className="text-xs space-y-2">
                    <li><a href="/cost" className="hover:text-brand transition-colors">창업비용 안내</a></li>
                    <li><a href="/guide" className="hover:text-brand transition-colors">단계별 가이드</a></li>
                    <li><a href="/license" className="hover:text-brand transition-colors">자격증 취득정보</a></li>
                    <li><a href="/skincare" className="hover:text-brand transition-colors">피부관리샵 창업</a></li>
                    <li><a href="/makeup" className="hover:text-brand transition-colors">메이크업샵 창업</a></li>
                    <li><a href="/hair" className="hover:text-brand transition-colors">이용원·바버샵 창업</a></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-white font-semibold text-xs uppercase tracking-widest">데이터 센터</p>
                  <ul className="text-xs space-y-2">
                    <li><a href="/revenue" className="hover:text-brand transition-colors">예상 수익 분석</a></li>
                    <li><a href="/calculator" className="hover:text-brand transition-colors">비용 계산기</a></li>
                    <li><a href="/qna" className="hover:text-brand transition-colors">자주 묻는 질문</a></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-white font-semibold text-xs uppercase tracking-widest">법적 고지</p>
                  <ul className="text-xs space-y-2">
                    <li><PrivacyPolicyModal /></li>
                    <li><a href="/terms" className="hover:text-brand transition-colors">이용약관</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-stone-500 flex items-center gap-3">
              <span>© 2026 네일샵 창업. All rights reserved.</span>
              <PrivacyPolicyModal />
              <LegalNoticeModal />
            </p>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  )
}
