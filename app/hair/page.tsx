import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import HairCalculatorWidget from '@/components/HairCalculatorWidget'
import { hairServices } from '@/data/hair-services'
import HubQuickLinks from '@/components/HubQuickLinks'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

const TITLE = '이용원·바버샵 창업 | 창업비용·이용사 자격증·수익 2026'
const DESC = '이용원 창업비용 1,500~4,000만원, 월 순수익 300~700만원. 이용사 자격증 취득 절차와 바버샵 수익 구조까지 2026년 기준으로 정리했습니다.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: ['이용원 창업', '바버샵 창업', '이용사 자격증', '남성 전문 미용실 창업', '이용원 창업비용', '바버샵 창업비용', '이발소 창업'],
  alternates: { canonical: '/hair' },
  openGraph: { title: TITLE, description: DESC, url: '/hair', images: [{ url: '/images/thumb.webp', width: 1200, height: 630, alt: '이용원·바버샵 창업 총정리' }] },
}

const hairFaqs = [
  { q: '미용사 자격증이 있는데 바버샵을 열 수 있나요?', a: '운영 형태에 따라 다릅니다. 공중위생관리법은 이용업과 미용업을 별개로 구분하며, 면도(셰이빙)를 포함한 이용업을 하려면 이용사 면허가 필요합니다. 커트·펌·염색 중심이면 미용업으로 신고할 수 있습니다. 창업 전 관할 구청 위생과에 신고 업종을 반드시 확인하세요.' },
  { q: '이용원 창업 최소 자본금은 얼마인가요?', a: '소형 1체어 기준 800~1,500만원, 일반 1인샵 1,500~3,000만원, 3체어 이상 바버샵은 3,000~6,000만원이 필요합니다. 1층 입지를 선택하면 보증금이 크게 올라갑니다.' },
  { q: '1인 이용원은 하루 몇 명까지 받나요?', a: '커트 1건에 30~50분이므로 하루 8~10명이 현실적입니다. 스타일링 같은 짧은 메뉴를 섞으면 12명까지 가능하지만 체력 부담이 큽니다.' },
  { q: '손익분기점은 언제인가요?', a: '창업비용 규모에 따라 다르지만 일반 1인샵 기준 오픈 후 6~12개월이 평균입니다. 남성 커트는 재방문 주기가 3~4주로 짧아 고정 고객이 빠르게 쌓입니다. 이 점에서 다른 미용 업종보다 회수가 빠른 편입니다.' },
  { q: '1만원 컷 매장과 어떻게 경쟁하나요?', a: '가격으로는 이길 수 없습니다. 셰이빙, 두피 관리, 지정 예약처럼 저가 매장이 제공하지 않는 서비스로 고객층 자체를 분리하는 것이 현실적인 전략입니다.' },
  { q: '이용사 학원비는 얼마인가요?', a: '학원 수강료와 국비지원 정보는 학원비 비교 사이트(haircost.kr)에서 확인할 수 있습니다. 이 페이지는 창업 정보만 다룹니다.' },
]

const prepSteps = [
  { step: '01', title: '이용사 자격증 취득 — 4~8개월', desc: '이용사 국가기술자격 취득 후 시장·군수·구청장에게 면허를 신청합니다. 미용사 자격증과 별개라는 점을 반드시 확인하세요. 학원비·국비지원 정보는 이용사 학원 수강료 비교 사이트에서 확인할 수 있습니다.' },
  { step: '02', title: '상권 분석 및 위치 선정 — 1~2개월', desc: '남성 고객은 직장이나 집에서 도보 10분 이내를 선호합니다. 오피스 상권 또는 주거 밀집지역이 유리하며, 1층 여부가 워크인 유입을 좌우합니다.' },
  { step: '03', title: '사업자 등록 + 이용업 신고 — 2~3주', desc: '홈택스에서 개인사업자를 등록한 뒤 관할 시·군·구청 위생과에 신고합니다. 이용업으로 신고할지 미용업으로 신고할지 사전 확인이 필수입니다. 면허증 사본과 위생교육 이수가 필요합니다.' },
  { step: '04', title: '인테리어 및 장비 세팅 — 1~2개월', desc: '샴푸대 급배수가 핵심 공사입니다. 체어 간격, 조명, 환기를 함께 설계하세요. 콘셉트가 명확할수록 SNS 노출에 유리합니다.' },
  { step: '05', title: '예약 시스템 및 오픈 준비 — 오픈 1개월 전', desc: '네이버 플레이스와 예약 앱 등록을 오픈 전에 마치세요. 남성 고객은 전화보다 앱 예약을 선호합니다.' },
]

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: hairFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
const howToJsonLd = { '@context': 'https://schema.org', '@type': 'HowTo', name: '이용원·바버샵 창업 준비 5단계', step: prepSteps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.desc })) }
const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
  { '@type': 'ListItem', position: 2, name: '이용원·바버샵 창업', item: `${SITE_URL}/hair` },
] }

export default function HairHub() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* 히어로 */}
      <section className="relative py-28 border-b border-stone-200 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f1f5f9 0%, #e7e5e4 50%, #f5f5f4 100%)' }}>
        <div className="relative max-w-[1100px] mx-auto px-4">
          <nav className="text-xs text-stone-400 mb-5 flex items-center gap-1.5">
            <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span><span className="text-stone-600">이용원·바버샵 창업</span>
          </nav>
          <p className="inline-block bg-white text-stone-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase shadow-sm">2026 최신 기준</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4 leading-tight tracking-tight">
            이용원·바버샵 창업<br /><span className="text-stone-500">비용·자격증·수익 총정리</span>
          </h1>
          <p className="text-sm text-stone-500 mb-6 max-w-xl leading-relaxed">재방문 주기가 가장 짧고 매출 예측이 쉬운 업종. 이용사 자격증부터 창업비용, 예상 수익까지 정리했습니다.</p>
          <HubQuickLinks items={[
            { href: '/hair/cost', label: '창업비용', icon: '💰' },
            { href: '/hair/license', label: '자격증', icon: '📜' },
            { href: '/hair/revenue', label: '예상수익', icon: '📈' },
            { href: '/hair#calculator', label: '비용 계산기', icon: '🧮' },
          ]} />
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-4 py-14 space-y-20">

        <AdUnit slot="7150499722" />

        {/* 1. 자격증 필수 */}
        <section>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-rose-50 text-rose-600 text-[10px] font-extrabold px-2 py-0.5 rounded tracking-widest uppercase border border-rose-100">가장 많이 묻는 질문 1위</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-3 tracking-tight">이용원 창업, 이용사 자격증이 꼭 필요한가요?</h2>
          <p className="text-stone-500 text-sm mb-4 leading-relaxed">
            네, <strong className="text-stone-800">법적으로 반드시 필요합니다.</strong> 그리고 <strong className="text-stone-800">미용사 면허로는 대체할 수 없습니다.</strong>{' '}
            공중위생관리법은 <strong className="text-stone-800">이용업</strong>과 <strong className="text-stone-800">미용업</strong>을 서로 다른 영업으로 구분합니다.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
            <table className="w-full text-sm min-w-[520px]">
              <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">구분</th><th className="text-left px-4 py-3 font-bold">정의</th><th className="text-center px-4 py-3 font-bold">필요 면허</th></tr></thead>
              <tbody className="divide-y divide-stone-50 text-stone-700">
                <tr><td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">이용업</td><td className="px-4 py-3 text-[13px]">머리카락 또는 수염을 깎거나 다듬는 등의 방법으로 용모를 단정하게 하는 영업</td><td className="px-4 py-3 text-center font-bold text-rose-600 whitespace-nowrap">이용사</td></tr>
                <tr><td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">미용업(일반)</td><td className="px-4 py-3 text-[13px]">파마·머리카락 자르기·모양내기·머리피부 손질·염색·머리감기 등</td><td className="px-4 py-3 text-center font-semibold text-stone-600 whitespace-nowrap">미용사(일반)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6">
            <p className="text-xs text-red-800 leading-relaxed flex items-start gap-2 mb-3">
              <span className="text-lg shrink-0">⚠️</span>
              <span><strong>가장 많이 하는 착각:</strong> 미용사 자격증이 있으니 바버샵을 열 수 있다고 생각하는 경우가 많은데, 이용업과 미용업은 별개의 영업입니다. 어떤 형태로 운영할지에 따라 필요한 면허와 신고 업종이 달라집니다.</span>
            </p>
            <div className="overflow-x-auto rounded-lg border border-red-100 bg-white">
              <table className="w-full text-xs min-w-[440px]">
                <thead className="bg-red-100/50 text-red-900"><tr><th className="text-left px-3 py-2 font-bold">위반 내용</th><th className="text-left px-3 py-2 font-bold">근거 조항</th><th className="text-left px-3 py-2 font-bold">벌칙</th></tr></thead>
                <tbody className="divide-y divide-red-50 text-stone-700">
                  <tr><td className="px-3 py-2">면허 없이 이용업·미용업 개설·종사</td><td className="px-3 py-2">제8조 제1항 위반</td><td className="px-3 py-2 font-bold">300만원 이하 벌금</td></tr>
                  <tr><td className="px-3 py-2">신고 없이 영업</td><td className="px-3 py-2">제3조 제1항 전단 위반</td><td className="px-3 py-2 font-bold">1년 이하 징역 또는 1천만원 이하 벌금</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-red-700 mt-2">창업 전에 관할 시·군·구청 위생과에 어떤 업종으로 신고할 것인지를 먼저 확인하세요. 운영 계획(면도 포함 여부, 펌·염색 취급 여부)에 따라 답이 달라집니다.</p>
          </div>
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-extrabold text-stone-800 mb-3">이용사 vs 미용사, 어느 쪽을 따야 하나</h3>
            <div className="space-y-2">
              {[
                { plan: '남성 커트 + 면도(셰이빙) 중심 바버샵', rec: '이용사', hl: true },
                { plan: '커트 + 펌 + 염색 중심, 남녀 모두', rec: '미용사(일반)', hl: false },
                { plan: '면도와 펌·염색을 모두 취급', rec: '관할 구청 신고 업종 확인 필수', hl: false },
              ].map((r) => (
                <div key={r.plan} className="flex items-center justify-between gap-3 text-[13px] border-b border-stone-50 pb-2">
                  <span className="text-stone-600">{r.plan}</span>
                  <span className={`shrink-0 font-bold ${r.hl ? 'text-rose-600' : 'text-stone-700'}`}>{r.rec}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-stone-400 mt-3">면도(셰이빙)는 바버샵의 핵심 서비스이자 차별점입니다. 메뉴에 넣을 계획이라면 이용사 면허를 기준으로 준비하는 것이 안전합니다.</p>
          </div>
          <div className="mt-4 text-right"><Link href="/hair/license" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">이용사 자격증 취득 방법 자세히 보기 →</Link></div>
        </section>

        <AdUnit slot="1591000951" />

        {/* 2. 창업이란 */}
        <section id="services">
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">이용원·바버샵 창업</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">이용원 창업이란?</h2>
          <p className="text-stone-500 text-sm mb-6">머리카락과 수염을 다듬어 용모를 단정하게 하는 서비스업입니다. 전통적인 이발소에서 남성 전문 그루밍 공간(바버샵)으로 시장이 재편되면서 단가와 고객층이 함께 올라갔습니다.</p>

          <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-8">
            <table className="w-full text-sm min-w-[480px]">
              <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">구분</th><th className="text-center px-4 py-3 font-bold">전통 이용원</th><th className="text-center px-4 py-3 font-bold">바버샵</th></tr></thead>
              <tbody className="divide-y divide-stone-50 text-stone-700">
                {[['주 고객', '50~70대', '20~40대'], ['커트 단가', '1~1.5만원', '3~5만원'], ['예약', '워크인', '예약제'], ['핵심 메뉴', '커트', '커트 + 셰이빙 + 스타일링'], ['재방문 주기', '4~6주', '3~4주']].map((r) => (
                  <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center text-stone-500">{r[1]}</td><td className="px-4 py-3 text-center font-semibold text-stone-800">{r[2]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-extrabold text-stone-800 mb-3">주요 시술 종류</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {hairServices.map((item) => (
              <Link key={item.id} href={`/hair/service/${item.id}`} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm hover:border-stone-300 hover:shadow-md transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-extrabold text-stone-800">{item.title}</h3>
                  <span className="text-[10px] bg-stone-100 text-stone-500 font-semibold px-2 py-0.5 rounded-full">{item.tag}</span>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed mb-3" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.summary}</p>
                <div className="flex items-center justify-between"><span className="text-xs font-bold text-stone-700">{item.price}</span><span className="text-xs text-stone-300 group-hover:text-stone-600 transition-colors">자세히 보기 →</span></div>
              </Link>
            ))}
          </div>

          <h3 className="text-base font-extrabold text-stone-800 mb-3">시술별 단가·시간·수익성 한눈에 보기</h3>
          <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
            <table className="w-full text-sm min-w-[520px]">
              <thead className="bg-stone-50 text-stone-600"><tr>{['시술', '단가', '소요시간', '시간당 수익'].map((h) => (<th key={h} className="px-3 py-3 font-bold text-center first:text-left whitespace-nowrap">{h}</th>))}</tr></thead>
              <tbody className="divide-y divide-stone-50 text-stone-700">
                {[
                  { s: '두피 관리', price: '5.5만원', time: '45분', profit: '약 6.5만원', hl: true },
                  { s: '염색 (새치)', price: '8만원', time: '70분', profit: '약 6.0만원', hl: false },
                  { s: '남성 펌', price: '10만원', time: '90분', profit: '약 5.9만원', hl: false },
                  { s: '셰이빙 단독', price: '3만원', time: '30분', profit: '약 5.7만원', hl: false },
                  { s: '남성 커트', price: '3.5만원', time: '40분', profit: '약 5.1만원', hl: false },
                  { s: '스타일링', price: '2만원', time: '20분', profit: '약 4.5만원', hl: false },
                ].map((r) => (
                  <tr key={r.s} className="hover:bg-stone-50/60">
                    <td className="px-3 py-3 text-left font-bold text-stone-800 whitespace-nowrap">{r.s}</td>
                    <td className="px-3 py-3 text-center whitespace-nowrap">{r.price}</td>
                    <td className="px-3 py-3 text-center whitespace-nowrap">{r.time}</td>
                    <td className={`px-3 py-3 text-center whitespace-nowrap font-bold ${r.hl ? 'text-rose-600' : 'text-stone-800'}`}>{r.profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-stone-50 border border-stone-100 rounded-2xl p-5 mb-8 text-[13px] text-stone-600 leading-relaxed">
            두피 관리가 시간당 수익 1위, 셰이빙 단독이 커트보다 높습니다. 재료 원가율이 커트 기준 3%로 미용 업종 중 가장 낮아 <strong className="text-stone-900">커트로 고객을 확보하고 셰이빙·두피 관리로 객단가를 올리는 것</strong>이 정석입니다.
          </div>

          <h3 className="text-base font-extrabold text-stone-800 mb-3">이용원의 고객층</h3>
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm mb-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { age: '20~30대 직장인', desc: '3~4주 주기 고정, 핵심층', color: 'bg-blue-50 text-blue-700' },
                { age: '30~40대', desc: '커트 + 펌·염색, 객단가 최고', color: 'bg-violet-50 text-violet-700' },
                { age: '40~50대', desc: '새치 염색 정기 방문', color: 'bg-emerald-50 text-emerald-700' },
                { age: '50대 이상', desc: '커트 중심, 단골 유지 김', color: 'bg-amber-50 text-amber-700' },
                { age: '학생', desc: '가격 민감, 방학 집중', color: 'bg-rose-50 text-rose-700' },
              ].map((c) => (
                <div key={c.age} className={`${c.color} rounded-xl p-3 text-center`}><p className="text-xs font-extrabold mb-1">{c.age}</p><p className="text-[11px] leading-tight">{c.desc}</p></div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-base font-extrabold text-stone-800 mb-3">수익 구조</h3>
            <div className="space-y-3">
              {[
                { label: '매출', formula: '하루 고객 수 × 평균 객단가 × 월 영업일', color: 'bg-amber-50 text-amber-800' },
                { label: '고정비', formula: '월세 + 재료비 + 공과금 + 카드수수료 + 기타 (월 180~300만원)', color: 'bg-stone-50 text-stone-600' },
                { label: '순수익', formula: '매출 − 고정비 (1인 운영 시 인건비 0원)', color: 'bg-emerald-50 text-emerald-800' },
              ].map((r) => (
                <div key={r.label} className={`${r.color} rounded-xl px-4 py-3 flex items-center gap-3`}><span className="text-xs font-extrabold w-14 shrink-0">{r.label}</span><span className="text-xs">{r.formula}</span></div>
              ))}
            </div>
            <div className="mt-3 bg-blue-50 border border-blue-100 rounded-xl p-3">
              <p className="text-[11px] text-blue-800 leading-relaxed"><strong>다른 미용 업종과 결정적으로 다른 점:</strong> 재방문 주기가 가장 짧고 예측 가능합니다. 남성 커트는 3~4주마다 반드시 필요한 <strong>필수 소비</strong>라, 고정 고객 100명이면 월 100~130건이 자동으로 발생합니다. 대신 객단가가 낮아 고객 수를 많이 확보해야 합니다.</p>
            </div>
          </div>
        </section>
      </div>

      {/* 3. 창업 적합도 */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1c1917 0%, #0c0a09 100%)' }}>
        <div className="relative max-w-[1100px] mx-auto px-4">
          <p className="text-xs font-semibold text-white/60 mb-2 uppercase tracking-widest">창업 적합도</p>
          <h2 className="text-2xl font-extrabold text-white mb-2">이용원 창업, 나도 할 수 있을까?</h2>
          <p className="text-white/70 text-sm mb-8">아래 조건에 해당할수록 성공 가능성이 높습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-base font-extrabold text-emerald-400 mb-4">이런 분께 잘 맞아요</h3>
              <ul className="space-y-2.5">
                {['짧은 시간에 많은 고객을 응대하는 것이 괜찮은 분', '서서 일하는 것에 무리가 없는 분', '남성 고객과의 대화가 편한 분', '안정적이고 예측 가능한 매출을 원하는 분', '기술 숙련도를 꾸준히 올릴 의지가 있는 분'].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/90"><span className="text-emerald-400 font-bold shrink-0">✓</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-base font-extrabold text-red-400 mb-4">이런 분은 주의하세요</h3>
              <ul className="space-y-2.5">
                {['하루 10명 이상 응대가 부담스러운 경우 (객단가가 낮아 회전이 필수)', '서서 하는 작업이 어려운 경우', '상권 분석 없이 시작하려는 경우 (남성 고객은 이동 반경이 짧음)', '가격을 낮춰 경쟁하려는 경우 (저가 경쟁이 가장 치열)', '기술 없이 인테리어만으로 승부하려는 경우'].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/90"><span className="text-red-400 font-bold shrink-0">✗</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-4 space-y-20 py-14">

        {/* 4. 계산기 */}
        <HairCalculatorWidget />
        <div className="-mt-14 text-right"><Link href="/hair/cost" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">창업비용 항목별 상세 보기 →</Link></div>

        {/* 5. 준비 5단계 */}
        <section id="prep" className="scroll-mt-20">
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업 준비</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">이용원 창업, 무엇을 준비해야 하나요?</h2>
          <p className="text-stone-500 text-sm mb-8">순서대로 따라가면 빠짐없이 준비할 수 있습니다.</p>
          <div className="space-y-3">
            {prepSteps.map((item) => (
              <div key={item.step} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
                <span className="shrink-0 w-9 h-9 bg-stone-800 text-white rounded-full flex items-center justify-center text-xs font-extrabold">{item.step}</span>
                <div><h3 className="text-sm font-extrabold text-stone-800 mb-1">{item.title}</h3><p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-stone-50 border border-stone-100 rounded-xl p-4 flex items-center justify-between gap-4">
            <p className="text-xs text-stone-500 leading-relaxed"><strong className="text-stone-700">이용사 학원비·국비지원</strong>이 궁금하신가요? 학원 수강료 비교는 별도 사이트에서 확인하세요.</p>
            <a href="https://haircost.kr" target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs font-bold text-blue-700 hover:underline">haircost.kr 바로가기 ↗</a>
          </div>
        </section>

        {/* 6. 예상 수익 */}
        <section id="revenue" className="scroll-mt-20">
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">예상 수익</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">1인 바버샵, 월 얼마나 벌까요?</h2>
          <p className="text-stone-500 text-sm mb-4">객단가가 낮은 대신 회전율과 재방문 주기가 압도적으로 유리합니다.</p>
          <p className="text-xs text-stone-500 bg-stone-50 border border-stone-100 rounded-lg px-3 py-2 mb-6 inline-block">계산 기준: 평균 객단가 3.5만원 · 월 영업일 26일 · 고정비 220만원</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { case: '보수적', icon: '🌱', customers: '하루 6명', monthly: '월 매출 546만원', net: '약 326만원', color: 'border-stone-200 bg-white' },
              { case: '평균', icon: '💈', customers: '하루 9명', monthly: '월 매출 819만원', net: '약 599만원', color: 'border-stone-800 bg-stone-50' },
              { case: '적극', icon: '🚀', customers: '하루 12명', monthly: '월 매출 1,092만원', net: '약 872만원', color: 'border-amber-200 bg-amber-50' },
            ].map((item) => (
              <div key={item.case} className={`border-2 ${item.color} rounded-2xl p-5 shadow-sm`}>
                <p className="text-xl mb-2">{item.icon}</p>
                <p className="text-xs font-bold text-stone-400 mb-3">{item.case} 케이스</p>
                <p className="text-xs text-stone-400">고객 수</p>
                <p className="font-bold text-stone-800 mb-1">{item.customers}</p>
                <p className="text-xs text-stone-400">{item.monthly} (26일)</p>
                <p className="text-xs text-stone-400 mt-2">월 순수익</p>
                <p className="font-extrabold text-stone-800 text-lg">{item.net}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
            <span className="text-lg shrink-0 mt-0.5">⚠️</span>
            <p className="text-xs text-amber-800 leading-relaxed">커트 1건이 30~50분이라 하루 12명이면 순수 시술 시간만 7~9시간입니다. 청소·정리까지 하면 10시간 이상입니다. <strong>하루 8~10명이 지속 가능한 현실 구간</strong>입니다. 다른 업종보다 고객 수 상한이 높은 대신 객단가가 낮아, 순수익 규모는 비슷하지만 매출이 훨씬 안정적입니다.</p>
          </div>
          <div className="mt-4 text-right"><Link href="/hair/revenue" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">시술 단가별 수익 계산 보기 →</Link></div>
        </section>

        {/* 7. 자격증 상세 */}
        <section>
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자격증</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">이용사 자격증이란?</h2>
          <p className="text-stone-500 text-sm mb-8">한국산업인력공단(Q-Net)이 주관하는 국가기술자격입니다. 응시 자격에 학력·나이·경력 제한이 없습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="text-sm font-extrabold text-stone-800">시험 구성</h3>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex gap-2"><span className="text-stone-400 shrink-0">·</span>필기: 객관식 / CBT / 100점 만점 60점 이상 합격</li>
                <li className="flex gap-2"><span className="text-stone-400 shrink-0">·</span>필기 출제 기준: <strong className="text-stone-800">2022년 1월 NCS 기반으로 개정</strong> (구 교재 주의)</li>
                <li className="flex gap-2"><span className="text-stone-400 shrink-0">·</span>실기: 작업형. 커트·정발 + <strong className="text-stone-800">기구 분해·소독, 오일 정비</strong> 포함</li>
                <li className="flex gap-2"><span className="text-stone-400 shrink-0">·</span>필기 합격은 2년간 유효</li>
              </ul>
              <p className="text-[11px] text-stone-400 leading-relaxed">문항 수·시험 시간·수수료·실기 과제 구성은 연도별로 변경됩니다. Q-Net 공고와 해당 연도 공개문제를 확인하세요.</p>
            </div>
            <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-extrabold text-stone-800 mb-4">면허 취득 절차 및 효과</h3>
              <ul className="space-y-2.5">
                {['① Q-Net 이용사 자격 취득 → ② 시장·군수·구청장에게 이용사 면허 신청 → ③ 구청에 영업 신고', '면허증은 영업소 안에 게시', '무면허 개설·종사 시 300만원 이하 벌금', '소상공인 정책자금·창업 지원금 신청 시 제출 요구', '미용사 면허로 대체 불가 — 이용업은 별개의 영업입니다'].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-xs text-stone-600"><span className="text-stone-400 shrink-0">✓</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 text-right"><Link href="/hair/license" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">이용사 자격증 취득 방법 자세히 보기 →</Link></div>
        </section>

        {/* 8. 창업 현실 */}
        <section>
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업 현실</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">이용원 운영, 현실은 어떤가요?</h2>
          <p className="text-stone-500 text-sm mb-8">장밋빛 기대만큼 현실도 알아야 제대로 준비할 수 있습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: '저가 경쟁이 가장 치열한 업종입니다', a: '1만원 컷 프랜차이즈가 상권마다 있습니다. 가격으로 맞서면 이길 수 없습니다. 셰이빙·두피 관리처럼 저가 매장이 하지 않는 메뉴로 차별화해야 합니다.' },
              { q: '객단가가 낮아 회전율이 곧 매출입니다', a: '평균 3.5만원짜리 서비스로 월 600만원을 벌려면 월 170건이 필요합니다. 커트 1건의 시간을 5분 줄이면 하루 1명을 더 받을 수 있습니다. 속도가 곧 수익인 유일한 미용 업종입니다.' },
              { q: '체력 소모 방식이 다릅니다', a: '네일·피부는 앉아서 손목을 쓰지만, 이용원은 서서 어깨와 허리를 씁니다. 하루 8~10시간 서 있는 일이라 신발과 매트 투자가 실제로 중요합니다.' },
              { q: '단골 이탈이 조용히 일어납니다', a: '남성 고객은 불만이 있어도 말하지 않고 그냥 안 옵니다. 3~4주 주기가 무너진 고객을 파악하려면 예약 시스템에 방문 이력을 남기고 주기적으로 확인해야 합니다.' },
            ].map((item) => (
              <div key={item.q} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
                <h3 className="text-sm font-extrabold text-stone-800 mb-2 flex items-start gap-2"><span className="text-amber-500 shrink-0">💡</span>{item.q}</h3>
                <p className="text-xs text-stone-500 leading-relaxed pl-5">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. 성공 포인트 */}
        <section>
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">전문가 가이드</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">이용원 창업 성공 포인트 7가지</h2>
          <p className="text-stone-500 text-sm mb-8">오래 살아남는 바버샵에는 공통된 전략이 있습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { num: '01', title: '셰이빙이 최고의 차별점이다', desc: '저가 프랜차이즈가 하지 않는 영역입니다. 커트+셰이빙 패키지로 객단가를 1.5배 올릴 수 있습니다.' },
              { num: '02', title: '회전 속도를 기술로 관리한다', desc: '서두르는 것과 빠른 것은 다릅니다. 동선과 도구 배치를 정리하면 품질을 유지하면서 5~10분을 줄일 수 있습니다.' },
              { num: '03', title: '1층과 간판에 투자한다', desc: '이 업종은 워크인 비중이 30~50%입니다. 예약제 업종의 논리를 그대로 가져오면 안 됩니다.' },
              { num: '04', title: '지정 예약제를 만든다', desc: '이 사람에게만 받겠다는 고객이 생기면 단가를 올려도 이탈하지 않습니다.' },
              { num: '05', title: '남성 고객의 이동 반경은 짧다', desc: '직장·집에서 도보 10분. 그 밖의 고객을 끌어오려 하기보다 반경 안에서 점유율을 높이세요.' },
              { num: '06', title: '두피·탈모 관심층을 잡는다', desc: '객단가가 높고 재방문이 확실한 영역입니다. 30~40대 남성 수요가 계속 늘고 있습니다.' },
              { num: '07', title: '콘셉트가 SNS 노출을 만든다', desc: '바버샵은 공간 자체가 콘텐츠가 됩니다. 명확한 콘셉트는 광고비를 줄여줍니다.' },
            ].map((item) => (
              <div key={item.num} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
                <span className="shrink-0 w-8 h-8 bg-stone-100 text-stone-600 rounded-full flex items-center justify-center text-xs font-extrabold">{item.num}</span>
                <div><h3 className="text-sm font-extrabold text-stone-800 mb-1">{item.title}</h3><p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* 10. FAQ */}
        <section id="faq" className="scroll-mt-20">
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자주 묻는 질문</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-8">이용원 창업 Q&amp;A</h2>
          <div className="space-y-3">
            {hairFaqs.map((item) => (
              <div key={item.q} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
                <h3 className="text-[14px] font-bold text-stone-800 mb-2 flex items-start gap-2"><span className="text-stone-500 font-extrabold shrink-0">Q.</span>{item.q}</h3>
                <p className="text-[13px] text-stone-600 leading-relaxed pl-5"><span className="font-bold">A.</span> {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 11. 다른 업종 */}
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-4">다른 미용 업종 창업과 비교하기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">소자본 시작</p><p className="font-bold text-stone-900">네일샵 창업과 비교하기 →</p></Link>
            <Link href="/skincare" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">객단가 높은</p><p className="font-bold text-stone-900">피부관리샵 창업과 비교하기 →</p></Link>
            <Link href="/makeup" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">최소 자본</p><p className="font-bold text-stone-900">메이크업샵 창업과 비교하기 →</p></Link>
          </div>
          <p className="text-xs text-stone-400 mt-4">이용사 학원 수강료·국비지원 비교는 외부 사이트 <a href="https://haircost.kr" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">haircost.kr ↗</a>에서 확인하세요.</p>
        </section>

        <AdUnit slot="3291145762" format="autorelaxed" responsive={false} />
      </div>
    </div>
  )
}
