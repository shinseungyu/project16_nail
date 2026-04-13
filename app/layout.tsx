import type { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
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
const DESC = '1인 네일샵 창업을 준비 중이신가요? 창업비용부터 미용사 자격증 취득 방법, 예상 수익까지 2026년 최신 기준으로 한번에 정리했습니다. 올댓뷰티 멘토가 카카오톡으로 무료 상담해드립니다.'
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
    images: [{ url: '/images/thumb.png', width: 1200, height: 630, alt: '네일샵 창업 총정리' }],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
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
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} strategy="afterInteractive" />
      </head>
      <body className={`${pretendard.className} antialiased`}>
        {/* 헤더 */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100/50">
          <div className="max-w-[1100px] mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="font-bold text-lg text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-xl">💅</span> 
              <span>네일아트 <span className="text-brand">창업</span></span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-[13px] text-stone-500 font-semibold uppercase tracking-wider">
              <a href="/cost" className="hover:text-brand transition-colors">창업비용</a>
              <a href="/guide" className="hover:text-brand transition-colors">창업가이드</a>
              <a href="/license" className="hover:text-brand transition-colors">자격증</a>
              <a href="/revenue" className="hover:text-brand transition-colors">예상수익</a>
              <a href="/calculator" className="hover:text-brand transition-colors">계산기</a>
              <a href="/qna" className="hover:text-brand transition-colors">Q&A</a>
              <a href="https://open.kakao.com/o/sIOxvlZh" target="_blank" rel="noopener noreferrer" className="bg-brand hover:bg-brand-dark text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all shadow-sm">무료 상담</a>
            </nav>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        {/* 푸터 */}
        <footer className="bg-stone-950 text-stone-400 text-sm py-16 mt-20">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-stone-800 pb-10 mb-10">
              <div>
                <p className="font-bold text-white text-lg mb-4 tracking-tight">💅 네일아트 창업</p>
                <p className="text-xs leading-relaxed max-w-xs text-stone-500">
                  본 사이트의 정보는 2026년 최신 창업 트렌드를 바탕으로 하며, 실제 창업 비용은 지역 및 규모에 따라 상이할 수 있습니다.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <p className="text-white font-semibold text-xs uppercase tracking-widest">창업 정보</p>
                  <ul className="text-xs space-y-2">
                    <li><a href="/cost" className="hover:text-brand transition-colors">창업비용 안내</a></li>
                    <li><a href="/guide" className="hover:text-brand transition-colors">단계별 가이드</a></li>
                    <li><a href="/license" className="hover:text-brand transition-colors">자격증 취득정보</a></li>
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
                    <li><a href="/privacy" className="hover:text-brand transition-colors">개인정보처리방침</a></li>
                    <li><a href="/terms" className="hover:text-brand transition-colors">이용약관</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-stone-600">© 2026 네일아트 창업. All rights reserved.</p>
          </div>
        </footer>

        {/* 플로팅 오픈챗 버튼 */}
        <a
          href="https://open.kakao.com/o/sIOxvlZh"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-[#FEE500] hover:bg-[#FADC00] hover:-translate-y-1 text-[#000000] font-bold text-sm px-6 py-3.5 rounded-full shadow-2xl transition-all flex items-center gap-3 active:scale-95"
        >
          <Image src="/images/kakao_logo.png" alt="카카오톡" width={20} height={20} />
          <span>멘토 1:1 무료 상담</span>
        </a>
      </body>
    </html>
  )
}
