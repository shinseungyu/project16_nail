'use client'

import { usePathname } from 'next/navigation'
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal'
import LegalNoticeModal from '@/components/LegalNoticeModal'

/**
 * 사이트 푸터.
 *
 * 루트 레이아웃에 인라인으로 있던 한국어 푸터를 그대로 옮기고, /en 경로에서만
 * 영문 푸터를 렌더한다. 영문 페이지에 한국어 푸터가 붙으면 "번역 안 된 페이지"로
 * 보이고 내부링크도 한국어 쪽으로 새어나간다 — 기획서의 "영문은 영문끼리" 원칙.
 */
export default function SiteFooter() {
  const pathname = usePathname() || '/'
  if (pathname.startsWith('/en')) return <EnFooter />
  return <KoFooter />
}

function KoFooter() {
  return (
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
                <li><a href="/en" lang="en" className="hover:text-brand transition-colors">English</a></li>
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
  )
}

function EnFooter() {
  return (
    <footer className="bg-stone-950 text-stone-400 text-sm py-16 mt-20">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-stone-800 pb-10 mb-10">
          <div>
            <p className="font-bold text-white text-lg mb-4 tracking-tight">🇰🇷 Korea Beauty Guide</p>
            <p className="text-xs leading-relaxed max-w-xs text-stone-500">
              Prices and legal requirements on this site reflect the position as of August 2026 and change over time.
              Ranges are typical figures, not quotes — individual businesses sit outside them in both directions.
            </p>
            <div className="text-xs text-stone-600 mt-4 space-y-1 leading-relaxed">
              <p>Waya Media Inc.</p>
              <p>Business registration: 105-87-55780</p>
              <p>A429, 19 Guryong-gil, Mapo-gu, Seoul, Korea</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <p className="text-white font-semibold text-xs uppercase tracking-widest">Booking</p>
              <ul className="text-xs space-y-2">
                <li><a href="/en/nail-salon-korea" className="hover:text-brand transition-colors">Nail salons</a></li>
                <li><a href="/en/hair-salon-korea" className="hover:text-brand transition-colors">Hair salons</a></li>
                <li><a href="/en/waxing-korea" className="hover:text-brand transition-colors">Waxing</a></li>
                <li><a href="/en/eyelash-extensions-korea" className="hover:text-brand transition-colors">Lash extensions</a></li>
                <li><a href="/en/semi-permanent-makeup-korea" className="hover:text-brand transition-colors">Semi-permanent makeup</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-white font-semibold text-xs uppercase tracking-widest">Treatments</p>
              <ul className="text-xs space-y-2">
                <li><a href="/en/aqua-peel" className="hover:text-brand transition-colors">Aqua peel</a></li>
                <li><a href="/en/scalp-scaling" className="hover:text-brand transition-colors">Scalp scaling</a></li>
                <li><a href="/en/korean-perm-guide" className="hover:text-brand transition-colors">Perm types</a></li>
                <li><a href="/en/personal-color-korea" className="hover:text-brand transition-colors">Personal colour</a></li>
                <li><a href="/en/skin-clinic-vs-salon" className="hover:text-brand transition-colors">Clinic vs salon</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-white font-semibold text-xs uppercase tracking-widest">Site</p>
              <ul className="text-xs space-y-2">
                <li><a href="/en/beauty-license-korea" className="hover:text-brand transition-colors">Licensing</a></li>
                <li><a href="/en/about" className="hover:text-brand transition-colors">About this site</a></li>
                <li><a href="/en/privacy" className="hover:text-brand transition-colors">Privacy policy</a></li>
                <li><a href="/" lang="ko" className="hover:text-brand transition-colors">Korean</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-stone-500">
          © 2026 Korea Beauty Guide · nailstartup.com. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
