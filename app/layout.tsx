import type { Metadata } from 'next'
import Script from 'next/script'
import localFont from 'next/font/local'
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
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nailstartup.kr'
const TITLE = '네일샵 창업 | 1인 네일샵 창업비용·자격증·수익 총정리 2026'
const DESC = '네일샵 창업 준비 중이신가요? 네일샵 창업비용, 1인 네일샵 창업, 네일아트 창업, 네일 자격증, 소자본 창업 네일, 네일샵 차리는법까지 2026년 최신 정보를 한번에 확인하세요.'
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
    images: [{ url: '/images/thumb.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE_NAME,
    title: TITLE,
    description: DESC,
    images: ['/images/thumb.png'],
  },
  verification: {
    other: { 'naver-site-verification': '' },
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
    'itemprop:image': '/images/thumb.png',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nailstartup.kr'

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
        name: '네일아트 창업',
        serviceType: '네일샵 창업 정보 및 상담 서비스',
        areaServed: { '@type': 'Country', name: 'KR' },
        provider: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: `${siteUrl}/`,
        name: '네일샵 창업 | 1인 네일샵 창업비용·자격증·수익 총정리 2026',
        inLanguage: 'ko-KR',
        description: '네일샵 창업비용, 자격증, 준비물, 예상 수익까지 한번에 확인하세요.',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: ['네일샵 창업', '네일샵 창업비용', '1인 네일샵 창업', '네일아트 창업', '네일 자격증'],
        mainEntity: { '@id': `${siteUrl}/#service` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: '네일아트 창업비용은 얼마나 드나요?',
            acceptedAnswer: { '@type': 'Answer', text: '1인 네일샵 기준 최소 500만원~2,000만원 수준입니다. 인테리어, 장비, 재료비, 보증금 등에 따라 크게 달라집니다.' },
          },
          {
            '@type': 'Question',
            name: '네일아트 창업에 자격증이 필요한가요?',
            acceptedAnswer: { '@type': 'Answer', text: '법적 필수 자격증은 없지만 네일 미용사 자격증(국가기술자격) 취득을 권장합니다. 고객 신뢰도와 실력 검증에 도움이 됩니다.' },
          },
          {
            '@type': 'Question',
            name: '1인 네일샵 월 수익은 얼마나 되나요?',
            acceptedAnswer: { '@type': 'Answer', text: '입지와 시술 단가에 따라 다르지만, 평균 월 순수익 150만원~400만원 수준입니다. 단골 고객 확보가 핵심입니다.' },
          },
          {
            '@type': 'Question',
            name: '네일샵 창업 최소 자본금은 얼마인가요?',
            acceptedAnswer: { '@type': 'Answer', text: '공유 작업실 기준 200~400만원, 독립 점포 기준 보증금 포함 최소 500~700만원이 필요합니다.' },
          },
        ],
      },
    ],
  }

  return (
    <html lang="ko">
      <head>
        <meta itemProp="name" content={TITLE} />
        <meta itemProp="description" content={DESC} />
        <meta itemProp="image" content="/images/thumb.png" />
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} strategy="beforeInteractive" />
      </head>
      <body className={`${pretendard.className} bg-gray-50 text-gray-900`}>
        {/* 헤더 */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-[1100px] mx-auto px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-bold text-lg text-pink-600">💅 네일아트 창업</a>
            <nav className="flex items-center gap-5 text-sm text-gray-600 font-medium">
              <a href="/cost" className="hover:text-pink-500 transition-colors">창업비용</a>
              <a href="/guide" className="hover:text-pink-500 transition-colors">창업가이드</a>
              <a href="/license" className="hover:text-pink-500 transition-colors">자격증</a>
              <a href="/revenue" className="hover:text-pink-500 transition-colors">예상수익</a>
              <a href="/calculator" className="hover:text-pink-500 transition-colors text-pink-500 font-bold">계산기</a>
              <a href="/qna" className="hover:text-pink-500 transition-colors">Q&A</a>
            </nav>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        {/* 푸터 */}
        <footer className="bg-gray-800 text-gray-400 text-sm py-8 mt-16">
          <div className="max-w-[1100px] mx-auto px-4">
            <p className="font-bold text-white mb-1">네일아트 창업</p>
            <p className="text-xs mt-2">본 사이트의 정보는 참고용이며 실제 창업 비용은 지역·규모에 따라 다를 수 있습니다.</p>
            <div className="flex gap-4 mt-3 text-xs">
              <a href="/privacy" className="hover:text-white">개인정보처리방침</a>
              <a href="/terms" className="hover:text-white">이용약관</a>
            </div>
            <p className="text-xs mt-3">© 2026 네일아트 창업. All rights reserved.</p>
          </div>
        </footer>

        {/* 플로팅 오픈챗 버튼 */}
        <a
          href="https://open.kakao.com/o/sIOxvlZh"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-sm px-5 py-3 rounded-full shadow-lg transition-all flex items-center gap-2 animate-bounce"
        >
          💬 멘토 무료 상담
        </a>
      </body>
    </html>
  )
}
