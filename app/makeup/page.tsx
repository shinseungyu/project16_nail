import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import MakeupCalculatorWidget from '@/components/MakeupCalculatorWidget'
import { makeupServices } from '@/data/makeup-services'
import HubQuickLinks from '@/components/HubQuickLinks'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

const TITLE = '메이크업샵 창업 | 창업비용 300만원부터·자격증·수익 2026'
const DESC = '메이크업샵 창업비용 출장형 300~800만원, 매장형 1,000~2,500만원. 미용사(메이크업) 자격증 취득 절차와 월 순수익까지 2026년 기준으로 정리했습니다.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: ['메이크업샵 창업', '메이크업 창업비용', '1인 메이크업샵', '웨딩 메이크업 창업', '출장 메이크업 창업', '미용사 메이크업 자격증', '메이크업 아티스트 창업'],
  alternates: { canonical: '/makeup' },
  openGraph: { title: TITLE, description: DESC, url: '/makeup', images: [{ url: '/images/thumb.webp', width: 1200, height: 630, alt: '메이크업샵 창업 총정리' }] },
}

const makeupFaqs = [
  { q: '메이크업샵 창업 최소 자본금은 얼마인가요?', a: '출장 전문이면 300~800만원으로 시작할 수 있습니다. 매장 없이 키트와 재료만 갖추면 되기 때문입니다. 공유샵은 800~1,500만원, 일반 1인 매장은 1,500~2,500만원이 필요합니다. 미용 업종 중 초기 비용이 가장 낮습니다.' },
  { q: '자격증 없이 프리랜서 메이크업만 해도 되나요?', a: '안 됩니다. 대가를 받고 메이크업을 업으로 하면 미용업에 해당하며, 공중위생관리법 제8조 제1항에 따라 면허가 필요합니다. 위반 시 300만원 이하의 벌금 대상입니다. 출장 형태라도 마찬가지이며, 신고 방법은 관할 구청에 확인해야 합니다.' },
  { q: '미용사(메이크업) 실기가 어렵나요?', a: '4과제(뷰티·시대·캐릭터·속눈썹 익스텐션 및 수염)로 구성되어 미용 종목 중 준비 범위가 가장 넓습니다. 시간은 약 2시간 35분입니다. 뷰티 메이크업만 연습해서는 합격하기 어렵습니다.' },
  { q: '웨딩 없이도 운영이 되나요?', a: '가능하지만 매출 규모가 크게 줄어듭니다. 신부 메이크업이 30~80만원인 반면 데일리는 3~7만원입니다. 웨딩을 안 하려면 속눈썹 연장·촬영·클래스 등으로 볼륨을 채워야 합니다.' },
  { q: '메이크업샵과 네일샵 중 뭐가 나을까요?', a: '초기 비용은 메이크업(출장형 300만원~)이 가장 낮습니다. 다만 매출 편차가 커서 수입이 불규칙합니다. 네일샵은 초기 비용이 1,000~2,000만원이지만 매출이 훨씬 안정적입니다. 안정성을 원하면 네일, 최소 자본으로 시작하려면 메이크업입니다.' },
  { q: '속눈썹 연장도 같이 할 수 있나요?', a: '속눈썹 연장은 눈썹손질에 해당하는지 여부에 따라 신고 업종이 달라질 수 있습니다. 실무상 함께 운영하는 곳이 많지만, 업종 구분과 신고 요건은 관할 구청 위생과에 반드시 사전 확인하세요.' },
]

const prepSteps = [
  { step: '01', title: '자격증 취득 — 4~8개월', desc: '미용사(메이크업) 국가기술자격 취득 후 시장·군수·구청장에게 면허를 신청합니다. 실기가 4과제로 구성되어 준비 범위가 넓습니다.' },
  { step: '02', title: '포트폴리오 구축 — 자격증과 병행', desc: '메이크업은 포트폴리오가 곧 영업 자산입니다. 창업 전부터 지인 촬영, 협업 촬영으로 사진을 축적하세요. 다른 업종보다 이 단계의 중요도가 압도적으로 높습니다.' },
  { step: '03', title: '사업자 등록 + 미용업 신고 — 2~3주', desc: '홈택스에서 개인사업자를 등록한 뒤 관할 시·군·구청 위생과에 미용업 신고를 합니다. 면허증 사본이 필요하고, 영업 전 위생교육 이수가 요구됩니다. 출장 전문으로 운영할 경우 신고 방법이 달라질 수 있으므로 사전 확인이 필수입니다.' },
  { step: '04', title: '공간·장비 세팅 — 2주~1개월', desc: '조명이 결과물을 좌우합니다. 자연광에 가까운 색온도의 조명을 우선 확보하세요. 출장형이라면 휴대용 조명과 키트 구성이 이 단계입니다.' },
  { step: '05', title: '제휴처 확보 및 오픈 — 오픈 1개월 전', desc: '웨딩홀·스튜디오·드레스샵과의 제휴가 매출의 상당 부분을 만듭니다. 인스타그램과 네이버 플레이스도 오픈 전에 세팅하세요.' },
]

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: makeupFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
const howToJsonLd = { '@context': 'https://schema.org', '@type': 'HowTo', name: '메이크업샵 창업 준비 5단계', step: prepSteps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.desc })) }
const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
  { '@type': 'ListItem', position: 2, name: '메이크업샵 창업', item: `${SITE_URL}/makeup` },
] }

export default function MakeupHub() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* 히어로 */}
      <section className="relative py-28 border-b border-stone-200 overflow-hidden" style={{ background: 'linear-gradient(135deg, #fff1f2 0%, #fef3c7 50%, #faf5ff 100%)' }}>
        <div className="relative max-w-[1100px] mx-auto px-4">
          <nav className="text-xs text-stone-400 mb-5 flex items-center gap-1.5">
            <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span><span className="text-stone-600">메이크업샵 창업</span>
          </nav>
          <p className="inline-block bg-white text-stone-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase shadow-sm">2026 최신 기준</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4 leading-tight tracking-tight">
            메이크업샵 창업 비용·자격증·수익<br /><span className="text-stone-500">2026 최신 기준 총정리</span>
          </h1>
          <p className="text-sm text-stone-500 mb-6 max-w-xl leading-relaxed">출장형 300만원부터 시작하는 최소 자본 창업. 미용사(메이크업) 자격증 취득부터 예상 수익까지 정리했습니다.</p>
          <HubQuickLinks items={[
            { href: '/makeup/cost', label: '창업비용', icon: '💰' },
            { href: '/makeup/license', label: '자격증', icon: '📜' },
            { href: '/makeup/revenue', label: '예상수익', icon: '📈' },
            { href: '/makeup#calculator', label: '비용 계산기', icon: '🧮' },
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-3 tracking-tight">메이크업샵 창업, 자격증이 꼭 필요한가요?</h2>
          <p className="text-stone-500 text-sm mb-4 leading-relaxed">
            네, <strong className="text-stone-800">법적으로 반드시 필요합니다.</strong>{' '}
            <strong className="text-stone-800">공중위생관리법 제6조</strong>는 미용업에 종사하려는 사람이 미용사 면허를 받도록 정하고 있고, 같은 법 <strong className="text-stone-800">제8조 제1항</strong>은 면허 없이 미용업을 개설하거나 그 업무에 종사하는 것을 금지합니다. 같은 법 시행령 제4조는 미용업을 구분하며, <strong className="text-stone-800">화장·분장 미용업</strong>(얼굴 등 신체의 화장·분장 및 의료기기·의약품을 사용하지 않는 눈썹손질)을 영위하려면 <strong className="text-stone-800">미용사(메이크업) 면허</strong>가 필요합니다.
          </p>
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6">
            <p className="text-xs text-red-800 leading-relaxed flex items-start gap-2 mb-3">
              <span className="text-lg shrink-0">⚠️</span>
              <span><strong>주의:</strong> 프리랜서로 출장 메이크업만 하는 경우에도 대가를 받고 메이크업을 업으로 하면 미용업에 해당합니다. &ldquo;샵이 없으니 신고 안 해도 된다&rdquo;는 판단은 위험합니다.</span>
            </p>
            <div className="overflow-x-auto rounded-lg border border-red-100 bg-white">
              <table className="w-full text-xs min-w-[440px]">
                <thead className="bg-red-100/50 text-red-900"><tr><th className="text-left px-3 py-2 font-bold">위반 내용</th><th className="text-left px-3 py-2 font-bold">근거 조항</th><th className="text-left px-3 py-2 font-bold">벌칙</th></tr></thead>
                <tbody className="divide-y divide-red-50 text-stone-700">
                  <tr><td className="px-3 py-2">면허 없이 미용업 개설·종사</td><td className="px-3 py-2">제8조 제1항 위반</td><td className="px-3 py-2 font-bold">300만원 이하 벌금</td></tr>
                  <tr><td className="px-3 py-2">신고 없이 영업</td><td className="px-3 py-2">제3조 제1항 전단 위반</td><td className="px-3 py-2 font-bold">1년 이하 징역 또는 1천만원 이하 벌금</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-red-700 mt-2">영업 형태(출장·공유샵·자택)에 따라 신고 가능 여부와 기준이 달라지므로, 개업 전 관할 시·군·구청 위생과에 확인하는 것이 안전합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="bg-stone-50 border-2 border-stone-800 rounded-2xl p-6 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 bg-stone-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-lg">법적 필수</div>
              <div className="flex items-center gap-2 mb-2"><span className="text-2xl">🏛️</span><h3 className="text-lg font-extrabold text-stone-900">미용사(메이크업) 국가면허</h3></div>
              <ul className="space-y-1.5 text-sm text-stone-700 mt-3">
                <li className="flex gap-2"><span className="text-green-500 shrink-0">✓</span>한국산업인력공단(Q-Net) 주관 자격시험 합격</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">✓</span>시장·군수·구청장에게 미용사 면허 신청</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">✓</span>관할 구청 위생과에 미용업 신고 완료 후 영업 가능</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">✓</span><strong>공중위생관리법 제6조·제8조 제1항</strong> 근거</li>
              </ul>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm opacity-80">
              <div className="flex items-center gap-2 mb-2"><span className="text-2xl">📜</span><h3 className="text-lg font-extrabold text-stone-700">민간 자격증</h3></div>
              <ul className="space-y-1.5 text-sm text-stone-500 mt-3">
                <li className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>미용업 신고 서류로 인정 불가</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>이 자격증만으로는 합법적 메이크업샵 운영 불가</li>
                <li className="flex gap-2"><span className="text-stone-400 shrink-0">△</span>웨딩홀·스튜디오 제휴, 포트폴리오, 해외 활동 보완 용도</li>
              </ul>
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 flex items-start gap-3">
            <span className="text-lg shrink-0 mt-0.5">💡</span>
            <p className="text-xs text-orange-800 leading-relaxed">미용사(메이크업)는 2013년 이후 신설된 비교적 최근 종목입니다. 오래전부터 활동해온 아티스트 중 면허가 없는 경우가 있는데, <strong>현재 기준으로는 면허 없이 업으로 삼을 수 없습니다.</strong></p>
          </div>
          <div className="mt-4 text-right"><Link href="/makeup/license" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">자격증 취득 방법 자세히 보기 →</Link></div>
        </section>

        <AdUnit slot="1591000951" />

        {/* 2. 창업이란 */}
        <section id="services">
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">메이크업샵 창업</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">메이크업샵 창업이란?</h2>
          <p className="text-stone-500 text-sm mb-8">얼굴 등 신체의 화장·분장을 제공하는 미용 서비스업입니다. 미용 업종 중 초기 창업비용이 가장 낮고, 매장 없이 출장 형태로도 시작할 수 있다는 점이 가장 큰 특징입니다.</p>

          <h3 className="text-base font-extrabold text-stone-800 mb-3">주요 시술 종류</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {makeupServices.map((item) => (
              <Link key={item.id} href={`/makeup/service/${item.id}`} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm hover:border-stone-300 hover:shadow-md transition-all group">
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
                  { s: '신부 메이크업', price: '45만원', time: '150분', profit: '약 17.9만원', hl: true },
                  { s: '혼주 메이크업', price: '11만원', time: '50분', profit: '약 12.2만원', hl: false },
                  { s: '촬영·화보', price: '25만원', time: '90분', profit: '약 16.3만원', hl: false },
                  { s: '파티·행사', price: '9만원', time: '55분', profit: '약 9.1만원', hl: false },
                  { s: '데일리 메이크업', price: '5만원', time: '50분', profit: '약 5.4만원', hl: false },
                  { s: '속눈썹 연장', price: '5.5만원', time: '75분', profit: '약 3.8만원', hl: false },
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
            신부 메이크업이 시간당 17.9만원으로 전 업종 1위, 혼주는 신부 예약에 자동으로 2~4건 따라오는 숨은 강자입니다. 재료 원가율이 전 시술 5~10%로 미용 업종 중 가장 낮아 <strong className="text-stone-900">웨딩 1건은 45만원이 아니라 혼주 포함 실질 70만원</strong>으로 봐야 합니다.
          </div>

          <h3 className="text-base font-extrabold text-stone-800 mb-3">메이크업샵의 고객층</h3>
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm mb-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { age: '예비 신부', desc: '리허설 패키지, 소개 파급력 최대', color: 'bg-rose-50 text-rose-700' },
                { age: '혼주·하객', desc: '신부 예약에 딸려옴, 당일 집중', color: 'bg-violet-50 text-violet-700' },
                { age: '20~30대 직장인', desc: '면접·소개팅, 평일 저녁', color: 'bg-blue-50 text-blue-700' },
                { age: '촬영 클라이언트', desc: '스튜디오·기업 제휴', color: 'bg-emerald-50 text-emerald-700' },
                { age: '속눈썹 정기 고객', desc: '3~4주 주기 재방문', color: 'bg-amber-50 text-amber-700' },
              ].map((c) => (
                <div key={c.age} className={`${c.color} rounded-xl p-3 text-center`}><p className="text-xs font-extrabold mb-1">{c.age}</p><p className="text-[11px] leading-tight">{c.desc}</p></div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-base font-extrabold text-stone-800 mb-3">수익 구조</h3>
            <div className="space-y-3">
              {[
                { label: '매출', formula: '(행사 건수 × 행사 단가) + (일반 시술 수 × 일반 단가)', color: 'bg-amber-50 text-amber-800' },
                { label: '고정비', formula: '출장형 월 50~100만원 / 매장형 월 120~200만원', color: 'bg-stone-50 text-stone-600' },
                { label: '순수익', formula: '매출 − 고정비 (1인 운영 시 인건비 0원)', color: 'bg-emerald-50 text-emerald-800' },
              ].map((r) => (
                <div key={r.label} className={`${r.color} rounded-xl px-4 py-3 flex items-center gap-3`}><span className="text-xs font-extrabold w-14 shrink-0">{r.label}</span><span className="text-xs">{r.formula}</span></div>
              ))}
            </div>
            <div className="mt-3 bg-blue-50 border border-blue-100 rounded-xl p-3">
              <p className="text-[11px] text-blue-800 leading-relaxed"><strong>다른 업종과 결정적으로 다른 점:</strong> 메이크업은 매출이 특정 요일과 시즌에 몰립니다. 웨딩은 주말 오전, 3~5월·9~11월에 쏠려 <strong>평일과 비수기를 어떻게 채우느냐</strong>가 연 매출을 결정합니다.</p>
            </div>
          </div>
        </section>
      </div>

      {/* 3. 창업 적합도 */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
        <div className="relative max-w-[1100px] mx-auto px-4">
          <p className="text-xs font-semibold text-white/60 mb-2 uppercase tracking-widest">창업 적합도</p>
          <h2 className="text-2xl font-extrabold text-white mb-2">메이크업샵 창업, 나도 할 수 있을까?</h2>
          <p className="text-white/70 text-sm mb-8">아래 조건에 해당할수록 성공 가능성이 높습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-base font-extrabold text-emerald-400 mb-4">이런 분께 잘 맞아요</h3>
              <ul className="space-y-2.5">
                {['새벽 출근이 가능한 분 (신부 메이크업은 보통 새벽 4~6시 시작)', '주말에 일하는 것이 괜찮은 분', 'SNS 포트폴리오 관리를 꾸준히 할 수 있는 분', '웨딩홀·스튜디오와 관계를 만들어갈 수 있는 분', '초기 자금이 적어 최소 비용으로 시작하고 싶은 분'].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/90"><span className="text-emerald-400 font-bold shrink-0">✓</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-base font-extrabold text-red-400 mb-4">이런 분은 주의하세요</h3>
              <ul className="space-y-2.5">
                {['주말·새벽 근무가 어려운 경우 (웨딩 매출을 포기하는 것과 같습니다)', '수입이 매달 일정해야 하는 경우 (성수기·비수기 편차가 3배 이상)', 'SNS 노출에 거부감이 큰 경우 (포트폴리오가 곧 영업입니다)', '이동이 잦은 것을 싫어하는 경우 (출장형은 하루 2~3곳 이동)', '클레임 대응이 어려운 경우 (당일 결과물이라 즉시 해결이 필요합니다)'].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/90"><span className="text-red-400 font-bold shrink-0">✗</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-4 space-y-20 py-14">

        {/* 4. 계산기 */}
        <MakeupCalculatorWidget />
        <div className="-mt-14 text-right"><Link href="/makeup/cost" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">창업비용 항목별 상세 보기 →</Link></div>

        {/* 5. 준비 5단계 */}
        <section id="prep" className="scroll-mt-20">
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업 준비</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">메이크업샵 창업, 무엇을 준비해야 하나요?</h2>
          <p className="text-stone-500 text-sm mb-8">순서대로 따라가면 빠짐없이 준비할 수 있습니다.</p>
          <div className="space-y-3">
            {prepSteps.map((item) => (
              <div key={item.step} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
                <span className="shrink-0 w-9 h-9 bg-stone-800 text-white rounded-full flex items-center justify-center text-xs font-extrabold">{item.step}</span>
                <div><h3 className="text-sm font-extrabold text-stone-800 mb-1">{item.title}</h3><p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. 예상 수익 */}
        <section id="revenue" className="scroll-mt-20">
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">예상 수익</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">메이크업샵, 월 얼마나 벌까요?</h2>
          <p className="text-stone-500 text-sm mb-4">고객 수가 아니라 웨딩 건수와 계절이 수익을 결정합니다.</p>
          <p className="text-xs text-stone-500 bg-stone-50 border border-stone-100 rounded-lg px-3 py-2 mb-6 inline-block">계산 기준: 월 영업일 24일 · 매장형 고정비 150만원 · 웨딩 성수기 아닌 평월 기준</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { case: '보수적', icon: '🌱', line: '월 신부 2건 + 일반 하루 1건', monthly: '월 매출 약 470만원', net: '약 320만원', color: 'border-stone-200 bg-white' },
              { case: '평균', icon: '💄', line: '월 신부 4건 + 일반 하루 2건', monthly: '월 매출 약 890만원', net: '약 740만원', color: 'border-stone-800 bg-stone-50' },
              { case: '적극', icon: '🚀', line: '월 신부 7건 + 일반 하루 3건', monthly: '월 매출 약 1,400만원', net: '약 1,250만원', color: 'border-amber-200 bg-amber-50' },
            ].map((item) => (
              <div key={item.case} className={`border-2 ${item.color} rounded-2xl p-5 shadow-sm`}>
                <p className="text-xl mb-2">{item.icon}</p>
                <p className="text-xs font-bold text-stone-400 mb-3">{item.case} 케이스</p>
                <p className="text-xs text-stone-500 mb-2 leading-relaxed">{item.line}</p>
                <p className="text-xs text-stone-400">{item.monthly}</p>
                <p className="text-xs text-stone-400 mt-2">월 순수익</p>
                <p className="font-extrabold text-stone-800 text-lg">{item.net}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
            <span className="text-lg shrink-0 mt-0.5">⚠️</span>
            <p className="text-xs text-amber-800 leading-relaxed">위 수치는 평월 기준입니다. 성수기(3~5월, 9~11월)에는 1.5~2배까지 오르지만 비수기(1~2월, 7~8월)에는 절반 이하로 떨어집니다. <strong>연 단위로 평균을 내서 판단해야 합니다.</strong> 성수기 기준으로 고정비를 늘리면 비수기에 무너집니다.</p>
          </div>
          <div className="mt-4 text-right"><Link href="/makeup/revenue" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">웨딩 건수별 수익 계산 보기 →</Link></div>
        </section>

        {/* 7. 자격증 상세 */}
        <section>
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자격증</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">미용사(메이크업) 자격증이란?</h2>
          <p className="text-stone-500 text-sm mb-8">한국산업인력공단(Q-Net)이 주관하는 국가기술자격입니다. 응시 자격에 학력·나이·경력 제한이 없습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="text-sm font-extrabold text-stone-800">시험 구성</h3>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex gap-2"><span className="text-stone-400 shrink-0">·</span>필기: 객관식 60문항 / 60분 / 60점 이상 합격 (수수료 14,500원)</li>
                <li className="flex gap-2"><span className="text-stone-400 shrink-0">·</span>실기: 작업형 약 2시간 35분 / 60점 이상 (수수료 17,200원)</li>
                <li className="flex gap-2"><span className="text-stone-400 shrink-0">·</span>실기 <strong className="text-stone-800">4과제</strong>: ①뷰티 ②시대 ③캐릭터 ④속눈썹 익스텐션 및 수염</li>
                <li className="flex gap-2"><span className="text-stone-400 shrink-0">·</span>필기 합격은 2년간 유효</li>
              </ul>
              <p className="text-[11px] text-stone-400 leading-relaxed">실기가 4과제로 구성되어 미용 종목 중 준비 범위가 가장 넓습니다. 수수료·과제 구성은 연도별로 변경될 수 있으니 Q-Net 공고를 확인하세요.</p>
            </div>
            <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-extrabold text-stone-800 mb-4">면허 취득 절차 및 효과</h3>
              <ul className="space-y-2.5">
                {['① Q-Net 자격 취득 → ② 시장·군수·구청장에게 면허 신청 → ③ 구청에 미용업 신고', '면허증은 영업소 안에 게시', '무면허 개설·종사 시 300만원 이하 벌금', '웨딩홀·스튜디오 정식 제휴 시 사업자등록증·면허증 요구가 일반적', '소상공인 정책자금 신청 시 제출 요구'].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-xs text-stone-600"><span className="text-stone-400 shrink-0">✓</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 text-right"><Link href="/makeup/license" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">자격증 취득 방법 자세히 보기 →</Link></div>
        </section>

        {/* 8. 창업 현실 */}
        <section>
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업 현실</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">메이크업샵 운영, 현실은 어떤가요?</h2>
          <p className="text-stone-500 text-sm mb-8">장밋빛 기대만큼 현실도 알아야 제대로 준비할 수 있습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: '매출이 요일과 계절에 극단적으로 몰립니다', a: '토요일 오전에 하루 매출의 절반이 나오고, 1~2월에는 예약이 거의 없는 달도 있습니다. 성수기 수입을 기준으로 생활비를 설계하면 비수기에 반드시 문제가 생깁니다. 연 매출을 12로 나눠서 생각하세요.' },
              { q: '새벽 근무가 기본입니다', a: '본식 메이크업은 예식 3~4시간 전에 시작합니다. 오전 11시 예식이면 새벽 5~6시에 시작합니다. 이걸 감당할 수 없으면 웨딩 매출의 대부분을 포기해야 합니다.' },
              { q: '포트폴리오 없이는 시작이 안 됩니다', a: '고객은 사진을 보고 예약합니다. 기술이 좋아도 보여줄 결과물이 없으면 문의가 오지 않습니다. 창업 전 최소 30~50컷의 포트폴리오를 확보하세요.' },
              { q: '클레임이 즉시 발생합니다', a: '네일·피부는 시간이 지나며 문제가 드러나지만, 메이크업은 완성 직후 바로 평가받습니다. 되돌릴 수 없는 상황이 많아 사전 리허설과 시안 확인 절차를 반드시 만드세요.' },
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
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">메이크업샵 창업 성공 포인트 7가지</h2>
          <p className="text-stone-500 text-sm mb-8">오래 살아남는 메이크업샵에는 공통된 전략이 있습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { num: '01', title: '신부 1명이 아니라 하객 20명을 본다', desc: '신부 예약 1건에는 혼주·하객 메이크업이 따라옵니다. 신부 단가만 보면 안 됩니다.' },
              { num: '02', title: '제휴처가 광고비보다 강하다', desc: '웨딩홀·드레스샵·스튜디오 한 곳과의 관계가 인스타 광고 수백만원보다 낫습니다.' },
              { num: '03', title: '비수기 메뉴를 반드시 만든다', desc: '속눈썹 연장, 데일리 메이크업, 원데이 클래스. 1~2월을 버티게 해주는 것들입니다.' },
              { num: '04', title: '리허설을 유료 서비스로 만든다', desc: '무료 리허설은 시간만 뺏깁니다. 유료로 하되 본식 예약 시 차감해주는 구조가 낫습니다.' },
              { num: '05', title: '조명에 먼저 투자한다', desc: '같은 실력이어도 조명에 따라 결과물 사진이 완전히 달라집니다. 포트폴리오 품질이 곧 매출입니다.' },
              { num: '06', title: '출장 반경을 처음부터 정한다', desc: '이동 시간은 매출이 안 나오는 시간입니다. 왕복 2시간 출장은 시술 1건을 포기하는 것과 같습니다.' },
              { num: '07', title: '계약서를 쓴다', desc: '날짜·시간·인원·금액·취소 규정을 문서로 남기세요. 웨딩은 금액이 크고 취소 분쟁이 잦습니다.' },
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
          <h2 className="text-2xl font-extrabold text-stone-900 mb-8">메이크업샵 창업 Q&amp;A</h2>
          <div className="space-y-3">
            {makeupFaqs.map((item) => (
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
            <Link href="/" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">매출 안정성</p><p className="font-bold text-stone-900">네일샵 창업과 비교하기 →</p></Link>
            <Link href="/skincare" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">회원권 구조</p><p className="font-bold text-stone-900">피부관리샵 창업과 비교하기 →</p></Link>
            <Link href="/hair" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">재방문 주기 최단</p><p className="font-bold text-stone-900">이용원·바버샵 창업과 비교하기 →</p></Link>
          </div>
        </section>

        <AdUnit slot="3291145762" format="autorelaxed" responsive={false} />
      </div>
    </div>
  )
}
