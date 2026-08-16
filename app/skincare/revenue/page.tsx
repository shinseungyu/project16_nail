import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '피부관리샵 월수입 | 하루 고객수별 순수익 계산 2026' },
  description: '1인 피부관리샵 월 순수익을 하루 고객 2~7명 기준으로 계산했습니다. 관리별 시간당 수익, 고정비 분해, 손익분기점까지 실제 수치로 정리.',
  keywords: ['피부관리샵 수익', '피부관리사 월급', '피부관리실 매출', '1인 피부관리샵 순수익', '에스테틱 수익'],
  alternates: { canonical: '/skincare/revenue' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: '피부관리샵 창업', item: `${SITE_URL}/skincare` },
    { '@type': 'ListItem', position: 3, name: '예상 수익', item: `${SITE_URL}/skincare/revenue` },
  ],
}

const perMenuRows = [
  ['기본 피부관리', '7만원', '70분', '10%', '약 5.4만원', false],
  ['여드름 관리', '10만원', '80분', '12%', '약 6.6만원', false],
  ['리프팅·탄력', '15만원', '80분', '10%', '약 10.1만원', true],
  ['등 관리', '8만원', '60분', '11%', '약 7.1만원', false],
  ['바디 관리', '12만원', '80분', '12%', '약 7.9만원', false],
  ['제모(왁싱)', '4만원', '30분', '13%', '약 7.0만원', true],
] as const

const simRows = [
  ['2명', '48명', '432만원', '182만원'],
  ['3명', '72명', '648만원', '398만원'],
  ['4명', '96명', '864만원', '614만원'],
  ['5명', '120명', '1,080만원', '830만원'],
  ['6명', '144명', '1,296만원', '1,046만원'],
  ['7명', '168명', '1,512만원', '1,262만원'],
]

const priceRows = [
  ['7만원', '672만원', '422만원', '—'],
  ['9만원', '864만원', '614만원', '+192만원'],
  ['11만원', '1,056만원', '806만원', '+384만원'],
  ['13만원', '1,248만원', '998만원', '+576만원'],
]

const fixedRows = [
  ['월세', '80~180만원', '층수·지역에 따라 편차 큼'],
  ['관리비', '10~25만원', '평수 비례'],
  ['재료비', '40~90만원', '매출의 10~13%'],
  ['공과금 (전기·수도·가스)', '15~35만원', '온수 사용량이 많아 네일샵보다 높음'],
  ['카드 수수료', '매출의 1~2%', '회원권 선결제 비중 높으면 부담 증가'],
  ['세탁·린넨', '10~30만원', '자가 세탁 시 공과금으로 이동'],
  ['예약·POS 시스템', '3~10만원', ''],
  ['보험', '2~4만원', '연납액 월 환산'],
  ['광고비', '0~50만원', '초기 3개월은 필수 지출로 잡을 것'],
]

export default function SkincareRevenuePage() {
  return (
    <div className="max-w-[900px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/skincare" className="hover:text-stone-700">피부관리샵</Link><span>›</span>
        <span className="text-stone-600">예상 수익</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">예상 수익</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">1인 피부관리샵, 월 얼마나 벌까?</h1>
      <p className="text-stone-500 mb-8">피부관리샵 수익은 고객 수보다 객단가와 회원권 전환율이 결정합니다. 관리 1건에 60~90분이 걸려 하루 고객 수에 물리적 상한이 있기 때문입니다. 아래에서 실제 계산 과정을 공개합니다.</p>

      {/* 1. 공식 + 변수 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">수익 계산 공식</h2>
        <div className="bg-stone-900 text-stone-100 rounded-2xl p-5 text-sm leading-relaxed font-mono mb-4">
          <p>월 매출 = 하루 고객 수 × 평균 객단가 × 월 영업일</p>
          <p>월 고정비 = 월세 + 재료비 + 공과금 + 카드수수료 + 보험 + 광고비</p>
          <p className="text-emerald-400">월 순수익 = 월 매출 − 월 고정비</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">변수</th><th className="text-center px-4 py-3 font-bold">조절 난이도</th><th className="text-left px-4 py-3 font-bold">설명</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['하루 고객 수', '어려움', '관리 시간이 길어 상한 (최대 6~7명)'],
                ['평균 객단가', '쉬움', '메뉴 구성·업셀로 조절 가능. 수익 개선의 핵심'],
                ['월 영업일', '보통', '24~26일이 일반적. 무리하면 체력 문제'],
                ['고정비', '보통', '임대 계약 시점에 대부분 결정됨'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className={`px-4 py-3 text-center font-bold ${r[1] === '쉬움' ? 'text-emerald-600' : r[1] === '어려움' ? 'text-rose-600' : 'text-stone-500'}`}>{r[1]}</td><td className="px-4 py-3 text-[13px]">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. 관리별 시간당 수익 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">관리별 단가·시간·시간당 수익</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[560px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-3 py-3 font-bold">관리</th><th className="text-center px-3 py-3 font-bold">단가</th><th className="text-center px-3 py-3 font-bold">소요시간</th><th className="text-center px-3 py-3 font-bold">원가율</th><th className="text-center px-3 py-3 font-bold">시간당 수익</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {perMenuRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-3 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td><td className="px-3 py-3 text-center">{r[1]}</td><td className="px-3 py-3 text-center">{r[2]}</td><td className="px-3 py-3 text-center">{r[3]}</td><td className={`px-3 py-3 text-center font-bold ${r[5] ? 'text-rose-600' : 'text-stone-800'}`}>{r[4]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-stone-50 border border-stone-100 rounded-2xl p-5 text-[13px] text-stone-600 leading-relaxed space-y-1.5">
          <p>· <strong className="text-stone-900">리프팅·탄력이 시간당 수익 1위</strong>. 기기 투자가 필요하지만 회수 효율이 가장 좋습니다.</p>
          <p>· <strong className="text-stone-900">제모(왁싱)는 단가가 낮아도 시간당 수익 상위권</strong>. 30분이면 끝나 예약 공백 채우기에 최적입니다.</p>
          <p>· 기본 관리는 시간당 수익이 가장 낮아 <strong className="text-stone-900">회원권 유입용 미끼</strong>로 써야 합니다.</p>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 3. 시뮬레이션 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">하루 고객 수별 월 순수익 시뮬레이션</h2>
        <p className="text-xs text-stone-500 bg-stone-50 border border-stone-100 rounded-lg px-3 py-2 mb-4 inline-block">조건: 평균 객단가 9만원 · 월 영업일 24일 · 고정비 250만원</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">하루 고객</th><th className="text-center px-4 py-3 font-bold">월 고객 수</th><th className="text-center px-4 py-3 font-bold">월 매출</th><th className="text-center px-4 py-3 font-bold">월 순수익</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {simRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center text-stone-500">{r[1]}</td><td className="px-4 py-3 text-center">{r[2]}</td><td className="px-4 py-3 text-center font-bold text-stone-900">{r[3]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg shrink-0 mt-0.5">⚠️</span>
          <p className="text-xs text-amber-800 leading-relaxed">하루 5명 이상을 매일 유지하는 것은 현실적으로 어렵습니다. 관리 1건 70~80분 + 준비·정리 15분이면 6명일 때 순수 근무 시간만 9시간, 상담·청소·세탁·SNS까지 하면 11~12시간입니다. <strong>하루 3~4명 구간이 지속 가능한 현실 구간</strong>입니다.</p>
        </div>
      </section>

      {/* 4. 객단가 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">객단가를 올렸을 때 (하루 4명 고정)</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">평균 객단가</th><th className="text-center px-4 py-3 font-bold">월 매출</th><th className="text-center px-4 py-3 font-bold">월 순수익</th><th className="text-center px-4 py-3 font-bold">증가분</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {priceRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center">{r[1]}</td><td className="px-4 py-3 text-center font-bold text-stone-900">{r[2]}</td><td className="px-4 py-3 text-center text-emerald-700 font-semibold">{r[3]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed">같은 고객 수에서 <strong className="text-stone-800">객단가 2만원을 올리면 월 순수익이 192만원 늘어납니다.</strong> 고객을 하루 1명 더 받는 것(약 216만원)과 비슷한 효과인데 체력 부담은 전혀 없습니다.</p>
      </section>

      {/* 5. 고정비 분해 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">고정비 상세 분해</h2>
        <p className="text-sm text-stone-500 mb-3">일반 1인샵(10~15평, 수도권) 기준 월 고정비입니다.</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">항목</th><th className="text-center px-4 py-3 font-bold">월 금액</th><th className="text-left px-4 py-3 font-bold">비고</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {fixedRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td><td className="px-4 py-3 text-[13px] text-stone-500">{r[2]}</td></tr>
              ))}
              <tr className="bg-stone-50 font-extrabold text-stone-900"><td className="px-4 py-3">합계</td><td className="px-4 py-3 text-center">약 200~350만원</td><td className="px-4 py-3"></td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed"><strong className="text-stone-700">네일샵과 비교:</strong> 네일샵 고정비가 월 150~200만원인 반면 피부관리샵은 200~350만원입니다. 평수가 넓고 온수 사용량이 많기 때문입니다. 대신 객단가가 2~3배 높아 순수익 절대액은 더 큽니다.</p>
      </section>

      {/* 6. 손익분기점 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">손익분기점 계산</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { t: '케이스 A — 공유형·소형', cost: '창업비용 1,200만원', rows: [['하루 2명', '약 200만원', '6개월'], ['하루 3명', '약 400만원', '3개월']] },
            { t: '케이스 B — 일반 1인샵', cost: '창업비용 3,000만원', rows: [['하루 2명', '182만원', '17개월'], ['하루 3명', '398만원', '8개월'], ['하루 4명', '614만원', '5개월']] },
            { t: '케이스 C — 룸 2개 이상', cost: '창업비용 6,000만원', rows: [['하루 3명', '약 330만원', '19개월'], ['하루 5명', '약 760만원', '8개월']] },
          ].map((c) => (
            <div key={c.t} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-extrabold text-stone-800 mb-1">{c.t}</h3>
              <p className="text-xs text-stone-400 mb-3">{c.cost}</p>
              <div className="space-y-2">
                {c.rows.map((r) => (
                  <div key={r[0]} className="flex items-center justify-between text-xs border-b border-stone-50 pb-1.5">
                    <span className="text-stone-500">{r[0]}</span>
                    <span className="text-stone-600">{r[1]}</span>
                    <span className="font-bold text-stone-900">{r[2]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p className="text-xs text-blue-800 leading-relaxed"><strong>현실적인 기대치:</strong> 오픈 첫 3개월은 하루 1~2명, 4~6개월차 2~3명, 안정기(7개월~) 3~4명 수준으로 잡는 것이 안전합니다. 이 기준이면 일반 1인샵 실질 회수 기간은 <strong>12~18개월</strong>입니다.</p>
        </div>
      </section>

      {/* 7. 수익 올리는 방법 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">수익을 올리는 실제 방법 5가지</h2>
        <div className="space-y-3">
          {[
            { n: '01', t: '회원권 구조를 먼저 설계한다', d: '단건 결제만으로는 매달 처음부터 시작합니다. 단건 10만원 / 4회권 36만원(회당 9만원) / 10회권 85만원(회당 8.5만원). 할인율은 10~15% 이내로 유지하세요. 20%를 넘기면 단건 고객이 사라져 오히려 매출이 줄어듭니다. 선결제 회원권 중 미사용 회차는 부채이니 별도 장부로 관리하세요.' },
            { n: '02', t: '짧은 메뉴로 공백 시간을 채운다', d: '예약이 2시간 비었다면 제모(왁싱) 2건을 넣을 수 있습니다. 30분 메뉴는 시간당 수익이 7만원으로 기본 관리(5.4만원)보다 높습니다.' },
            { n: '03', t: '업셀은 관리 중이 아니라 상담 때 한다', d: '관리 중 추가 제안은 거부감이 생깁니다. 첫 상담에서 피부 상태를 함께 보며 관리 계획을 제시하는 방식이 전환율이 훨씬 높습니다.' },
            { n: '04', t: '홈케어 제품 판매를 붙인다', d: '관리 후 사용할 제품을 함께 파는 구조입니다. 마진율이 30~50%로 시술보다 높고 시간이 들지 않습니다. 다만 판매 압박이 심하면 재방문이 끊기므로 필요한 고객에게만 제안하세요.' },
            { n: '05', t: '비수기 메뉴를 미리 만든다', d: '등 관리는 5~8월에 몰립니다. 겨울에는 건조·진정 관리, 리프팅 수요가 오릅니다. 계절별 주력 메뉴를 미리 설계하면 매출 편차가 줄어듭니다.' },
          ].map((s) => (
            <div key={s.n} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
              <span className="shrink-0 w-8 h-8 bg-stone-800 text-white rounded-full flex items-center justify-center text-xs font-extrabold">{s.n}</span>
              <div><h3 className="text-sm font-extrabold text-stone-800 mb-1">{s.t}</h3><p className="text-[13px] text-stone-500 leading-relaxed">{s.d}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. 1인 vs 직원 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">1인 운영 vs 직원 고용 손익 비교</h2>
        <p className="text-xs text-stone-500 mb-3">조건: 20평 룸 2개, 하루 총 고객 7명 기준</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[440px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">구분</th><th className="text-center px-4 py-3 font-bold">1인 운영</th><th className="text-center px-4 py-3 font-bold">직원 1명 고용</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[['하루 소화 고객', '4명 (물리적 한계)', '7명'], ['월 매출', '864만원', '1,512만원'], ['고정비', '320만원', '320만원'], ['인건비', '0원', '260~340만원'], ['월 순수익', '544만원', '852~932만원']].map((r, i) => (
                <tr key={r[0]} className={`hover:bg-stone-50/60 ${i === 4 ? 'bg-stone-50 font-extrabold text-stone-900' : ''}`}><td className="px-4 py-3">{r[0]}</td><td className="px-4 py-3 text-center">{r[1]}</td><td className="px-4 py-3 text-center">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed">숫자만 보면 직원 고용이 유리하지만, 직원 고객 7명을 안정적으로 채울 수 있는지가 전제입니다. 예약이 5명이면 인건비만 나갑니다. 4대 보험·퇴직금·연차수당은 위 인건비에 포함되지 않았습니다. <strong className="text-stone-700">본인 혼자 하루 예약이 3개월 이상 꽉 찬 상태가 유지될 때 고용을 검토</strong>하세요.</p>
      </section>

      {/* 핵심 요약 */}
      <section className="mb-10">
        <div className="bg-stone-900 text-stone-100 rounded-2xl p-6">
          <h2 className="text-base font-bold text-white mb-3">핵심 요약</h2>
          <ul className="space-y-1.5 text-[13px] text-stone-300 leading-relaxed">
            <li>· 지속 가능한 현실 구간은 하루 3~4명, 월 순수익 400~600만원</li>
            <li>· 하루 고객 1명 늘리기(+216만원)보다 객단가 2만원 올리기(+192만원)가 훨씬 쉬움</li>
            <li>· 시간당 수익 1위는 리프팅·탄력(10.1만원), 숨은 강자는 제모(7.0만원)</li>
            <li>· 고정비 월 200~350만원 (네일샵보다 높지만 객단가 2~3배)</li>
            <li>· 일반 1인샵 실질 회수 기간 12~18개월</li>
            <li>· 회원권 선결제는 매출이 아니라 부채 — 별도 관리 필수</li>
          </ul>
        </div>
      </section>

      {/* 내부링크 */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/skincare/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">항목별 상세</p><p className="font-bold text-stone-900">창업비용 보기 →</p></Link>
          <Link href="/skincare#calculator" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">직접 계산</p><p className="font-bold text-stone-900">창업비용 계산기 →</p></Link>
          <Link href="/revenue" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">업종 비교</p><p className="font-bold text-stone-900">네일샵 수익과 비교 →</p></Link>
        </div>
      </section>
    </div>
  )
}
