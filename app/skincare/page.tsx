import type { Metadata } from 'next'
import { hreflang } from '@/lib/hreflang'
import RelatedQna from '@/components/RelatedQna'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import SkincareCalculatorWidget from '@/components/SkincareCalculatorWidget'
import { skincareServices } from '@/data/skincare-services'
import HubQuickLinks from '@/components/HubQuickLinks'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

const TITLE = '피부관리샵 창업 | 창업비용·자격증·수익 총정리 2026'
const DESC = '피부관리샵 창업을 준비 중이신가요? 창업비용 2,000~3,500만원 기준부터 미용사(피부) 자격증 취득, 월 순수익까지 2026년 최신 기준으로 정리했습니다.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: ['피부관리샵 창업', '피부관리샵 창업비용', '1인 피부관리실 창업', '피부미용 창업', '에스테틱 창업', '피부관리실 차리는법', '소자본 피부관리샵', '미용사 피부 자격증'],
  alternates: { canonical: '/skincare', languages: hreflang('/skincare') },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: '/skincare',
    images: [{ url: '/images/thumb.webp', width: 1200, height: 630, alt: '피부관리샵 창업 총정리' }],
  },
}

const skincareFaqs = [
  { q: '피부관리샵 창업 최소 자본금은 얼마인가요?', a: '공유형·소형 기준 800~1,400만원, 일반 1인샵 기준 보증금 포함 2,000~3,500만원이 필요합니다. 네일샵보다 500~1,000만원 정도 더 드는데, 베드와 관리기기, 급배수 공사 때문입니다. 장비를 중고로 구성하면 초기 부담을 상당히 낮출 수 있습니다.' },
  { q: '미용사(피부) 자격증 없이 피부관리실을 열 수 있나요?', a: '불가능합니다. 공중위생관리법 제8조 제1항은 면허 없이 미용업을 개설하거나 그 업무에 종사하는 것을 금지하며, 위반 시 제20조에 따라 300만원 이하의 벌금 대상입니다. 미용업 신고 자체가 면허증 없이는 수리되지 않습니다. 민간 자격증은 법적 효력이 없습니다.' },
  { q: '1인 피부관리샵은 하루 몇 명까지 받을 수 있나요?', a: '관리 1건에 60~90분이 걸리고 준비·정리 시간까지 포함하면 하루 4~6명이 현실적입니다. 제모(왁싱) 같은 짧은 메뉴를 사이에 배치하면 6~7명까지 가능하지만 체력 부담이 큽니다. 고객 수를 늘리기보다 객단가를 높이는 방향이 수익성이 좋습니다.' },
  { q: '피부관리샵 손익분기점은 언제인가요?', a: '오픈 초기 3개월은 예약이 적다는 점까지 반영하면 일반 1인샵 기준 12~18개월이 현실적입니다. 안정기에 하루 4명을 채우면 이론상 5개월이지만, 그 상태에 도달하기까지 시간이 걸립니다. 네일샵(3~6개월)보다 긴 이유는 초기 투자금이 2배 가까이 크기 때문입니다.' },
  { q: '피부관리샵과 에스테틱, 뭐가 다른가요?', a: '법적으로는 같은 피부미용업입니다. 에스테틱은 법령 용어가 아니라 마케팅 명칭으로, 대체로 규모가 크고 바디 관리 비중이 높은 곳을 지칭합니다. 신고 절차와 필요 면허는 동일합니다.' },
  { q: '네일과 피부관리를 한 매장에서 같이 할 수 있나요?', a: '가능합니다. 다만 각 업종에 해당하는 면허가 필요하며, 여러 미용 업무를 함께 하는 경우 종합미용업으로 신고해야 할 수 있습니다. 신고 구분과 시설 기준은 관할 구청 위생과에서 사전 확인하는 것이 정확합니다.' },
]

const prepSteps = [
  { step: '01', title: '자격증 취득 — 6~10개월', desc: '미용사(피부) 국가기술자격 취득 후 시장·군수·구청장에게 면허를 신청합니다. 이론 과목(피부학·해부생리학) 비중이 있어 네일보다 준비 기간이 깁니다.' },
  { step: '02', title: '상권 분석 및 위치 선정 — 1~2개월', desc: '피부관리샵은 유동인구보다 재방문 동선이 중요합니다. 주거지 인근, 주차 가능 여부, 엘리베이터 유무가 실제 재방문율을 좌우합니다. 1층일 필요는 없어 임대료를 아낄 수 있습니다.' },
  { step: '03', title: '사업자 등록 + 미용업 신고 — 2~3주', desc: '홈택스에서 개인사업자를 등록한 뒤, 관할 시·군·구청 위생과에 미용업 신고를 합니다. 신고 시 면허증 사본이 필요하며, 영업 전 위생교육 이수가 요구됩니다. 시설·설비 기준(공중위생관리법 시행규칙 [별표 1])을 충족해야 신고가 수리됩니다.' },
  { step: '04', title: '인테리어 및 장비 세팅 — 1~2개월', desc: '급배수 설비와 환기가 최우선입니다. 관리룸 방음, 조도 조절, 타월 위생 동선을 먼저 설계한 뒤 기기를 배치합니다.' },
  { step: '05', title: 'SNS 개설 및 오픈 준비 — 오픈 1개월 전', desc: '네이버 플레이스 등록과 예약 시스템 세팅을 오픈 전에 끝냅니다. 피부관리는 후기 의존도가 높아 초기 체험가 이벤트로 후기를 확보하는 것이 중요합니다.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: skincareFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '피부관리샵 창업 준비 5단계',
  step: prepSteps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.desc })),
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: '피부관리샵 창업', item: `${SITE_URL}/skincare` },
  ],
}

export default function SkincareHub() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* 히어로 */}
      <section className="relative py-28 border-b border-stone-200 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #fdf2f8 50%, #ecfeff 100%)' }}>
        <div className="relative max-w-[1100px] mx-auto px-4">
          <nav className="text-xs text-stone-400 mb-5 flex items-center gap-1.5">
            <Link href="/" className="hover:text-stone-700">홈</Link>
            <span>›</span>
            <span className="text-stone-600">피부관리샵 창업</span>
          </nav>
          <p className="inline-block bg-white text-stone-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase shadow-sm">2026 최신 기준</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4 leading-tight tracking-tight">
            피부관리샵 창업 비용·자격증·수익<br />
            <span className="text-stone-500">2026 최신 기준 총정리</span>
          </h1>
          <p className="text-sm text-stone-500 mb-6 max-w-xl leading-relaxed">
            창업비용 2,000~3,500만원부터 미용사(피부) 자격증 취득, 예상 수익까지 1인 피부관리샵 창업의 모든 것을 정리했습니다.
          </p>
          <HubQuickLinks items={[
            { href: '/skincare/cost', label: '창업비용', icon: '💰' },
            { href: '/skincare/license', label: '자격증', icon: '📜' },
            { href: '/skincare/revenue', label: '예상수익', icon: '📈' },
            { href: '/skincare#calculator', label: '비용 계산기', icon: '🧮' },
          ]} />
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-4 py-14 space-y-20">

        {/* 광고 (hero-top) */}
        <AdUnit slot="7150499722" />

        {/* 1. 자격증 필수 안내 */}
        <section>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-rose-50 text-rose-600 text-[10px] font-extrabold px-2 py-0.5 rounded tracking-widest uppercase border border-rose-100">가장 많이 묻는 질문 1위</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-3 tracking-tight">피부관리샵 창업, 자격증이 꼭 필요한가요?</h2>
          <p className="text-stone-500 text-sm mb-4 leading-relaxed">
            네, <strong className="text-stone-800">법적으로 반드시 필요합니다.</strong>{' '}
            <strong className="text-stone-800">공중위생관리법 제6조</strong>는 미용업에 종사하려는 사람이 미용사 면허를 받도록 정하고 있으며, 같은 법 <strong className="text-stone-800">제8조 제1항</strong>은 면허를 받지 않은 사람이 미용업을 개설하거나 그 업무에 종사하는 것을 금지합니다. 같은 법 시행령 제4조는 미용업을 구분하며, <strong className="text-stone-800">피부미용업</strong>(의료기기·의약품을 사용하지 않는 피부상태 분석·피부관리·제모·눈썹손질)을 영위하려면 <strong className="text-stone-800">미용사(피부) 면허</strong>가 필요합니다.
          </p>
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6">
            <p className="text-xs text-red-800 leading-relaxed flex items-start gap-2 mb-3">
              <span className="text-lg shrink-0">⚠️</span>
              <span><strong>주의:</strong> 자격증 없이도 피부관리실을 열 수 있다는 정보는 잘못된 내용입니다. 위반 유형에 따라 처벌 수위가 다르므로 정확히 알아둘 필요가 있습니다.</span>
            </p>
            <div className="overflow-x-auto rounded-lg border border-red-100 bg-white">
              <table className="w-full text-xs min-w-[440px]">
                <thead className="bg-red-100/50 text-red-900">
                  <tr>
                    <th className="text-left px-3 py-2 font-bold">위반 내용</th>
                    <th className="text-left px-3 py-2 font-bold">근거 조항</th>
                    <th className="text-left px-3 py-2 font-bold">벌칙</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-50 text-stone-700">
                  <tr><td className="px-3 py-2">면허 없이 미용업 개설·종사</td><td className="px-3 py-2">제8조 제1항 위반</td><td className="px-3 py-2 font-bold">300만원 이하 벌금</td></tr>
                  <tr><td className="px-3 py-2">신고 없이 영업</td><td className="px-3 py-2">제3조 제1항 전단 위반</td><td className="px-3 py-2 font-bold">1년 이하 징역 또는 1천만원 이하 벌금</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-red-700 mt-2">무면허·미신고 상태로 영업하면 두 가지 모두 문제가 됩니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="bg-stone-50 border-2 border-stone-800 rounded-2xl p-6 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 bg-stone-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-lg">법적 필수</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🏛️</span>
                <h3 className="text-lg font-extrabold text-stone-900">미용사(피부) 국가면허</h3>
              </div>
              <p className="text-xs text-stone-500 font-semibold mb-3 tracking-wide">국가기술자격 취득 후 시장·군수·구청장 면허 신청</p>
              <ul className="space-y-1.5 text-sm text-stone-700">
                <li className="flex gap-2"><span className="text-green-500 shrink-0">✓</span>한국산업인력공단(Q-Net) 주관 자격시험 합격</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">✓</span>시장·군수·구청장에게 미용사 면허 신청</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">✓</span>관할 구청 위생과에 미용업 신고 완료 후 영업 가능</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">✓</span><strong>공중위생관리법 제6조·제8조 제1항</strong> 근거</li>
              </ul>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm opacity-80">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">📜</span>
                <h3 className="text-lg font-extrabold text-stone-700">민간 자격증</h3>
              </div>
              <p className="text-xs text-stone-400 font-semibold mb-3 tracking-wide">협회·아카데미 발급 (CIDESCO, CIBTAC 등)</p>
              <ul className="space-y-1.5 text-sm text-stone-500">
                <li className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>미용업 신고 서류로 인정되지 않음</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>이 자격증만으로는 합법적 피부관리샵 운영 불가</li>
                <li className="flex gap-2"><span className="text-stone-400 shrink-0">△</span>해외 취업·브랜드 제휴·포트폴리오 보완 용도로 활용</li>
              </ul>
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 flex items-start gap-3">
            <span className="text-lg shrink-0 mt-0.5">💡</span>
            <p className="text-xs text-orange-800 leading-relaxed">
              <strong>노베이스도 가능합니다:</strong> 피부미용은 이론 비중이 있어 네일보다 준비 기간이 조금 깁니다. 전공이 없어도 학원 커리큘럼을 따라가면 보통 6~10개월 안에 자격증 취득이 가능합니다.
            </p>
          </div>
          <div className="mt-4 text-right">
            <Link href="/skincare/license" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">자격증 취득 방법 자세히 보기 →</Link>
          </div>
        </section>

        {/* 광고 (article-mid) */}
        <AdUnit slot="1591000951" />

        {/* 2. 피부관리샵 창업이란 */}
        <section id="services">
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">피부관리샵 창업</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">피부관리샵 창업이란?</h2>
          <p className="text-stone-500 text-sm mb-8">의료기기나 의약품을 사용하지 않고 피부 상태를 분석·관리하는 미용 서비스업입니다. 시술 1건당 단가가 네일보다 높고, 정기 회원권 판매가 가능해 매출 예측이 쉽다는 점이 가장 큰 특징입니다.</p>

          {/* 관리 카드 */}
          <h3 className="text-base font-extrabold text-stone-800 mb-3">주요 관리 종류</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {skincareServices.map((item) => (
              <Link key={item.id} href={`/skincare/service/${item.id}`} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm hover:border-stone-300 hover:shadow-md transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-extrabold text-stone-800">{item.title}</h3>
                  <span className="text-[10px] bg-stone-100 text-stone-500 font-semibold px-2 py-0.5 rounded-full">{item.tag}</span>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed mb-3" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-700">{item.price}</span>
                  <span className="text-xs text-stone-300 group-hover:text-stone-600 transition-colors">자세히 보기 →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* 관리별 수익성 표 */}
          <h3 className="text-base font-extrabold text-stone-800 mb-3">관리별 단가·시간·수익성 한눈에 보기</h3>
          <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-stone-50 text-stone-600">
                <tr>
                  {['관리', '단가', '소요시간', '원가율', '시간당 수익'].map((h) => (
                    <th key={h} className="px-3 py-3 font-bold text-center first:text-left whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50 text-stone-700">
                {[
                  { s: '기본 피부관리', price: '7만원', time: '70분', cost: '10%', profit: '약 5.4만원', hl: false },
                  { s: '여드름 관리', price: '10만원', time: '80분', cost: '12%', profit: '약 6.6만원', hl: false },
                  { s: '리프팅·탄력', price: '15만원', time: '80분', cost: '10%', profit: '약 10.1만원', hl: true },
                  { s: '등 관리', price: '8만원', time: '60분', cost: '11%', profit: '약 7.1만원', hl: false },
                  { s: '바디 관리', price: '12만원', time: '80분', cost: '12%', profit: '약 7.9만원', hl: false },
                  { s: '제모(왁싱)', price: '4만원', time: '30분', cost: '13%', profit: '약 7.0만원', hl: false },
                ].map((r) => (
                  <tr key={r.s} className="hover:bg-stone-50/60">
                    <td className="px-3 py-3 text-left font-bold text-stone-800 whitespace-nowrap">{r.s}</td>
                    <td className="px-3 py-3 text-center whitespace-nowrap">{r.price}</td>
                    <td className="px-3 py-3 text-center whitespace-nowrap">{r.time}</td>
                    <td className="px-3 py-3 text-center whitespace-nowrap">{r.cost}</td>
                    <td className={`px-3 py-3 text-center whitespace-nowrap font-bold ${r.hl ? 'text-rose-600' : 'text-stone-800'}`}>{r.profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-stone-50 border border-stone-100 rounded-2xl p-5 mb-8">
            <p className="text-[13px] text-stone-600 leading-relaxed">리프팅·탄력이 시간당 수익 1위, 제모(왁싱)는 단가가 낮아도 시간당 수익이 상위권이라 예약 공백을 채우는 데 최적입니다. 재료 원가율이 전 메뉴 10~13%로 낮아 <strong className="text-stone-900">원가 절감보다 객단가·회원권 전환율이 수익을 결정</strong>합니다.</p>
          </div>

          {/* 고객층 */}
          <h3 className="text-base font-extrabold text-stone-800 mb-3">피부관리샵의 고객층</h3>
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm mb-6">
            <p className="text-xs text-stone-500 mb-4">네일보다 연령대가 높고 객단가가 큽니다. 회원권 구매로 이어지는 30~50대가 매출의 중심입니다.</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { age: '10~20대', desc: '여드름·모공, 단건 결제', color: 'bg-rose-50 text-rose-700' },
                { age: '20~30대 직장인', desc: '피부 톤·트러블, SNS 유입', color: 'bg-violet-50 text-violet-700' },
                { age: '30~40대 주부', desc: '회원권 전환율 1위', color: 'bg-blue-50 text-blue-700' },
                { age: '40~50대', desc: '리프팅·탄력, 객단가 최고', color: 'bg-emerald-50 text-emerald-700' },
                { age: '남성 고객', desc: '등·제모·기본관리 증가세', color: 'bg-amber-50 text-amber-700' },
              ].map((c) => (
                <div key={c.age} className={`${c.color} rounded-xl p-3 text-center`}>
                  <p className="text-xs font-extrabold mb-1">{c.age}</p>
                  <p className="text-[11px] leading-tight">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 수익 구조 */}
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-base font-extrabold text-stone-800 mb-3">수익 구조</h3>
            <div className="space-y-3">
              {[
                { label: '매출', formula: '(단건 매출) + (회원권 매출 ÷ 사용 회차)', color: 'bg-amber-50 text-amber-800' },
                { label: '고정비', formula: '월세 + 재료비 + 공과금 + 카드수수료 + 기타 (월 200~350만원)', color: 'bg-stone-50 text-stone-600' },
                { label: '순수익', formula: '매출 − 고정비 (1인 운영 시 인건비 0원)', color: 'bg-emerald-50 text-emerald-800' },
              ].map((r) => (
                <div key={r.label} className={`${r.color} rounded-xl px-4 py-3 flex items-center gap-3`}>
                  <span className="text-xs font-extrabold w-14 shrink-0">{r.label}</span>
                  <span className="text-xs">{r.formula}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 bg-blue-50 border border-blue-100 rounded-xl p-3">
              <p className="text-[11px] text-blue-800 leading-relaxed"><strong>네일샵과 결정적으로 다른 점:</strong> 회원권(10회권·정기권) 구조입니다. 선결제로 현금흐름이 확보되지만 <strong>미사용 회차는 부채</strong>라는 점을 반드시 인식해야 합니다.</p>
            </div>
          </div>
        </section>
      </div>

      {/* 3. 창업 적합도 (풀폭 배경) */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
        <div className="relative max-w-[1100px] mx-auto px-4">
          <p className="text-xs font-semibold text-white/60 mb-2 uppercase tracking-widest">창업 적합도</p>
          <h2 className="text-2xl font-extrabold text-white mb-2">피부관리샵 창업, 나도 할 수 있을까?</h2>
          <p className="text-white/70 text-sm mb-8">학력·나이 제한은 없습니다. 다만 아래 조건에 해당할수록 성공 가능성이 높습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-base font-extrabold text-emerald-400 mb-4">이런 분께 잘 맞아요</h3>
              <ul className="space-y-2.5">
                {[
                  '고객과 1시간 이상 대화하는 것이 부담스럽지 않은 분',
                  '피부 상태를 기록·추적하는 꼼꼼함이 있는 분',
                  '체력이 받쳐주는 분 (마사지 동작이 많아 손·어깨 부담이 큼)',
                  '회원권 상담·제안을 어색해하지 않는 분',
                  '초기 자금 1,500만원 이상을 준비할 수 있는 분',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/90"><span className="text-emerald-400 font-bold shrink-0">✓</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-base font-extrabold text-red-400 mb-4">이런 분은 주의하세요</h3>
              <ul className="space-y-2.5">
                {[
                  '판매·상담을 부담스러워하는 경우 (회원권 없이는 수익 구조가 안 나옵니다)',
                  '손목·어깨에 이미 통증이 있는 경우',
                  '자금이 부족해 중고 기기만으로 시작하려는 경우 (고장 시 영업 중단 리스크)',
                  '효과를 과장해서라도 팔아야 한다고 생각하는 경우 (광고 규제 대상)',
                  '관리 후 사후 관리·기록을 귀찮아하는 경우',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/90"><span className="text-red-400 font-bold shrink-0">✗</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-4 space-y-20 py-14">

        {/* 4. 창업비용 계산기 */}
        <SkincareCalculatorWidget />
        <div className="-mt-14 text-right">
          <Link href="/skincare/cost" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">창업비용 항목별 상세 보기 →</Link>
        </div>

        {/* 5. 창업 준비 5단계 */}
        <section id="prep" className="scroll-mt-20">
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업 준비</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">피부관리샵 창업, 무엇을 준비해야 하나요?</h2>
          <p className="text-stone-500 text-sm mb-8">순서대로 따라가면 빠짐없이 준비할 수 있습니다.</p>
          <div className="space-y-3">
            {prepSteps.map((item) => (
              <div key={item.step} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
                <span className="shrink-0 w-9 h-9 bg-stone-800 text-white rounded-full flex items-center justify-center text-xs font-extrabold">{item.step}</span>
                <div>
                  <h3 className="text-sm font-extrabold text-stone-800 mb-1">{item.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. 예상 수익 */}
        <section id="revenue" className="scroll-mt-20">
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">예상 수익</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">1인 피부관리샵 월 수익은 얼마나 될까요?</h2>
          <p className="text-stone-500 text-sm mb-4">하루 고객 수보다 객단가와 회원권 전환율이 수익을 결정합니다.</p>
          <p className="text-xs text-stone-500 bg-stone-50 border border-stone-100 rounded-lg px-3 py-2 mb-6 inline-block">계산 기준: 평균 객단가 9만원 · 월 영업일 24일 · 고정비 250만원</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { case: '보수적', icon: '🌱', customers: '하루 2명', monthly: '월 매출 432만원', net: '약 180만원', color: 'border-stone-200 bg-white' },
              { case: '평균', icon: '💆', customers: '하루 4명', monthly: '월 매출 864만원', net: '약 610만원', color: 'border-stone-800 bg-stone-50' },
              { case: '적극', icon: '🚀', customers: '하루 6명', monthly: '월 매출 1,296만원', net: '약 1,050만원', color: 'border-amber-200 bg-amber-50' },
            ].map((item) => (
              <div key={item.case} className={`border-2 ${item.color} rounded-2xl p-5 shadow-sm`}>
                <p className="text-xl mb-2">{item.icon}</p>
                <p className="text-xs font-bold text-stone-400 mb-3">{item.case} 케이스</p>
                <p className="text-xs text-stone-400">고객 수</p>
                <p className="font-bold text-stone-800 mb-1">{item.customers}</p>
                <p className="text-xs text-stone-400">{item.monthly} (24일)</p>
                <p className="text-xs text-stone-400 mt-2">월 순수익</p>
                <p className="font-extrabold text-stone-800 text-lg">{item.net}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
            <span className="text-lg shrink-0 mt-0.5">⚠️</span>
            <p className="text-xs text-amber-800 leading-relaxed">관리 1건에 60~90분이 걸려 하루 최대 6~7명이 한계입니다. 하루 5명 이상을 매일 유지하는 것은 체력상 어렵습니다. <strong>하루 3~4명이 지속 가능한 현실 구간</strong>이며, 대신 단가가 네일의 2~3배라 같은 고객 수에서 매출이 더 큽니다.</p>
          </div>
          <div className="mt-4 text-right">
            <Link href="/skincare/revenue" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">관리 단가별 수익 계산 보기 →</Link>
          </div>
        </section>

        {/* 7. 자격증 상세 */}
        <section>
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자격증</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">미용사(피부) 자격증이란?</h2>
          <p className="text-stone-500 text-sm mb-8">한국산업인력공단(Q-Net)이 주관하는 국가기술자격입니다. 응시 자격에 학력·경력 제한이 없어 누구나 응시할 수 있습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="text-sm font-extrabold text-stone-800">시험 구성</h3>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex gap-2"><span className="text-stone-400 shrink-0">·</span>필기: 객관식 60문항 / 60분 / CBT / 100점 만점 60점 이상 합격</li>
                <li className="flex gap-2"><span className="text-stone-400 shrink-0">·</span>필기 과목: 피부미용학·피부학·해부생리학·피부미용기기학·공중위생관리학·화장품학</li>
                <li className="flex gap-2"><span className="text-stone-400 shrink-0">·</span>실기: 작업형 약 2시간 35분 / 감점 차감제 / 60점 이상</li>
                <li className="flex gap-2"><span className="text-stone-400 shrink-0">·</span>필기 합격은 2년간 유효 (실기 응시 가능)</li>
              </ul>
              <p className="text-[11px] text-stone-400 leading-relaxed">합격률·응시료·일정은 회차별로 다르며 Q-Net 공식 사이트에서 확인해야 합니다.</p>
            </div>
            <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-extrabold text-stone-800 mb-4">면허 취득 절차 및 효과</h3>
              <ul className="space-y-2.5">
                {[
                  '① Q-Net 국가기술자격 합격 → ② 시장·군수·구청장에게 미용사 면허 신청 → ③ 구청 위생과에 미용업 신고',
                  '면허증은 영업소 안에 게시해야 합니다',
                  '무면허 개설·종사 시 300만원 이하 벌금 (공중위생관리법 제8조 제1항·제20조)',
                  '소상공인 정책자금·창업 지원금 신청 시 면허증 제출이 요구되는 경우가 많음',
                  '전문가용 화장품 브랜드 거래 계약 시 면허증을 요구하는 곳이 많음',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-xs text-stone-600"><span className="text-stone-400 shrink-0">✓</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 text-right">
            <Link href="/skincare/license" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">자격증 취득 방법 자세히 보기 →</Link>
          </div>
        </section>

        {/* 8. 창업 현실 */}
        <section>
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업 현실</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">피부관리샵 운영, 현실은 어떤가요?</h2>
          <p className="text-stone-500 text-sm mb-8">장밋빛 기대만큼 현실도 알아야 제대로 준비할 수 있습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: '첫 고객이 오기까지 네일보다 오래 걸립니다', a: '피부관리는 단가가 높아 고객이 신중하게 고릅니다. 후기 5~10건이 쌓이기 전까지는 신규 예약이 거의 없다고 보는 편이 안전합니다. 오픈 후 3개월치 생활비를 별도로 준비해야 합니다.' },
              { q: '회원권 선결제는 매출이 아니라 부채입니다', a: '10회권을 선결제 받으면 통장에 돈이 들어오지만, 남은 회차는 아직 제공하지 않은 서비스입니다. 이걸 순수익으로 착각해 지출하면 나중에 현금이 막힙니다. 미사용 회차를 별도로 관리하세요.' },
              { q: '체력 소모가 네일보다 큽니다', a: '마사지 동작이 반복되어 손목·엄지·어깨에 부담이 누적됩니다. 하루 5건 이상을 매일 소화하는 것은 장기적으로 어렵습니다. 기기 관리 비중을 늘려 손 부담을 분산하는 구성이 필요합니다.' },
              { q: '효과를 과장하면 법적 문제가 됩니다', a: '여드름 치료, 주름 개선 보장 같은 표현은 의료 행위를 연상시켜 규제 대상이 될 수 있습니다. 피부미용업은 의료기기·의약품을 사용할 수 없다는 점을 명확히 인지하고 광고 문구를 작성해야 합니다.' },
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
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">피부관리샵 창업 성공 포인트 7가지</h2>
          <p className="text-stone-500 text-sm mb-8">오래 살아남는 피부관리샵에는 공통된 전략이 있습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { num: '01', title: '회원권 설계가 곧 수익 구조', desc: '단건만 팔면 매달 처음부터 시작합니다. 4회·10회권으로 재방문을 구조화해야 매출이 예측 가능해집니다.' },
              { num: '02', title: '첫 상담 30분이 1년 매출을 정한다', desc: '피부 상태 분석과 관리 계획을 문서로 제시하면 신뢰가 생깁니다. 이 과정이 회원권 전환율을 좌우합니다.' },
              { num: '03', title: '관리 기록을 남기는 샵이 살아남는다', desc: '방문 회차별 피부 상태와 사용 제품을 기록하세요. 재방문 시 지난번과 비교한 상담이 가능해집니다.' },
              { num: '04', title: '1층을 고집할 필요가 없다', desc: '예약제 운영이라 워크인 비중이 낮습니다. 2~3층으로 가면 같은 예산으로 평수를 넓힐 수 있습니다.' },
              { num: '05', title: '기기 과투자는 초기 최대 실패 요인', desc: '고가 장비를 먼저 들이면 회수 기간이 길어집니다. 수요가 확인된 뒤 순차 도입하세요.' },
              { num: '06', title: '남성 고객 시장이 비어 있다', desc: '등 관리·제모·기본 관리는 남성 수요가 늘고 있지만 받아주는 샵이 적습니다. 차별화 포인트가 됩니다.' },
              { num: '07', title: '후기가 광고보다 강하다', desc: '고단가 서비스일수록 검색 후 후기를 확인하고 예약합니다. 네이버 플레이스 후기 관리가 광고비보다 효율이 좋습니다.' },
            ].map((item) => (
              <div key={item.num} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
                <span className="shrink-0 w-8 h-8 bg-stone-100 text-stone-600 rounded-full flex items-center justify-center text-xs font-extrabold">{item.num}</span>
                <div>
                  <h3 className="text-sm font-extrabold text-stone-800 mb-1">{item.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10. FAQ */}
        <section id="faq" className="scroll-mt-20">
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자주 묻는 질문</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-8">피부관리샵 창업 Q&amp;A</h2>
          <div className="space-y-3">
            {skincareFaqs.map((item) => (
              <div key={item.q} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
                <h3 className="text-[14px] font-bold text-stone-800 mb-2 flex items-start gap-2"><span className="text-stone-500 font-extrabold shrink-0">Q.</span>{item.q}</h3>
                <p className="text-[13px] text-stone-600 leading-relaxed pl-5"><span className="font-bold">A.</span> {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 11. 다른 업종 / 내부링크 */}
        <section>
          <h2 className="text-xl font-bold text-stone-900 mb-4">다른 미용 업종 창업과 비교하기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
              <p className="text-xs font-semibold text-stone-400 mb-1">초기 자금이 적다면</p>
              <p className="font-bold text-stone-900">네일샵 창업과 비교하기 →</p>
            </Link>
            <Link href="/makeup" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
              <p className="text-xs font-semibold text-stone-400 mb-1">최소 자본 창업</p>
              <p className="font-bold text-stone-900">메이크업샵 창업과 비교하기 →</p>
            </Link>
            <Link href="/hair" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
              <p className="text-xs font-semibold text-stone-400 mb-1">재방문 주기 최단</p>
              <p className="font-bold text-stone-900">이용원·바버샵 창업과 비교하기 →</p>
            </Link>
          </div>
        </section>

        {/* 멀티플렉스 광고 */}
        <RelatedQna sections={['skin-care', 'skin-license']} limit={8} />

        <AdUnit slot="3291145762" format="autorelaxed" responsive={false} />
      </div>
    </div>
  )
}
