import type { Metadata } from 'next'
import RelatedQna from '@/components/RelatedQna'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '바버샵 월수입 | 하루 고객수별 순수익 계산 2026' },
  description: '1인 바버샵 월 순수익을 하루 고객 6~14명 기준으로 계산했습니다. 시술별 시간당 수익, 고정비 분해, 1만원컷 대응 전략까지 정리.',
  keywords: ['바버샵 수익', '이용원 월수입', '이발소 매출', '바버샵 순수익', '남성 미용실 수익'],
  alternates: { canonical: '/hair/revenue' },
}

const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
  { '@type': 'ListItem', position: 2, name: '이용원·바버샵 창업', item: `${SITE_URL}/hair` },
  { '@type': 'ListItem', position: 3, name: '예상 수익', item: `${SITE_URL}/hair/revenue` },
] }

const perMenuRows = [
  ['두피 관리', '5.5만원', '45분', '약 6.5만원', true],
  ['염색 (새치 커버)', '8만원', '70분', '약 6.0만원', false],
  ['남성 펌', '10만원', '90분', '약 5.9만원', false],
  ['셰이빙 단독', '3만원', '30분', '약 5.7만원', true],
  ['커트 + 셰이빙', '6만원', '65분', '약 5.3만원', false],
  ['남성 커트', '3.5만원', '40분', '약 5.1만원', false],
  ['스타일링', '2만원', '20분', '약 4.5만원', false],
] as const

const comboRows = [
  ['커트 단독', '3.5만원', '40분', '5.1만원', false],
  ['커트 + 셰이빙', '6만원', '65분', '5.3만원', false],
  ['커트 + 두피 관리', '8.5만원', '80분', '6.4만원', true],
  ['커트 + 염색', '11만원', '105분', '6.0만원', false],
] as const

const simRows = [
  ['6명', '156명', '546만원', '220만원', '326만원'],
  ['8명', '208명', '728만원', '220만원', '508만원'],
  ['10명', '260명', '910만원', '220만원', '690만원'],
  ['12명', '312명', '1,092만원', '220만원', '872만원'],
  ['14명', '364명', '1,274만원', '220만원', '1,054만원'],
]

const priceRows = [
  ['3.0만원', '702만원', '482만원', '—'],
  ['3.5만원', '819만원', '599만원', '+117만원'],
  ['4.5만원', '1,053만원', '833만원', '+351만원'],
  ['5.5만원', '1,287만원', '1,067만원', '+585만원'],
]

const fixedRows = [
  ['월세', '80~180만원', '1층 선택 시 상단'],
  ['관리비', '10~25만원', ''],
  ['재료비', '20~50만원', '미용 업종 중 최저 (커트 원가율 3%)'],
  ['공과금', '12~30만원', ''],
  ['카드 수수료', '매출의 1~2%', ''],
  ['세탁·타월', '10~25만원', '회전이 빨라 수량 많음'],
  ['예약·POS', '5~15만원', '남성 고객은 앱 예약 선호'],
  ['보험', '2~4만원', ''],
  ['광고비', '0~40만원', '간판 효율이 높아 초기 이후 축소 가능'],
]

const cutStrategies = [
  ['셰이빙 도입', '저가 매장이 하지 않는 영역. 커트+셰이빙 패키지', '3.5만 → 6만원'],
  ['두피 관리 도입', '30~40대 탈모 관심층 타깃', '3.5만 → 8.5만원'],
  ['지정 예약제', '이 사람에게만 고객 확보. 단가 저항 사라짐', '+20~30%'],
  ['콘셉트 명확화', '공간 자체를 차별점으로. SNS 노출 유도', '광고비 절감'],
  ['소요 시간 차별화', '저가 매장 15분 vs 우리 40분. 시간을 가치로 판매', '—'],
]

export default function HairRevenuePage() {
  return (
    <div className="max-w-[900px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span><span className="text-stone-600">예상 수익</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">예상 수익</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">1인 바버샵, 월 얼마나 벌까?</h1>
      <p className="text-stone-500 mb-8">이용원 수익은 객단가가 낮은 대신 회전율과 재방문 주기가 압도적으로 유리합니다. 남성 커트는 3~4주마다 반드시 필요한 필수 소비라, 고정 고객이 쌓이면 매출이 자동으로 예측됩니다.</p>

      {/* 1. 공식 + 변수 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">수익 계산 공식</h2>
        <div className="bg-stone-900 text-stone-100 rounded-2xl p-5 text-sm leading-relaxed font-mono mb-4">
          <p>월 매출 = 하루 고객 수 × 평균 객단가 × 월 영업일</p>
          <p>월 고정비 = 월세 + 재료비 + 공과금 + 카드수수료 + 보험 + 광고비</p>
          <p className="text-emerald-400">월 순수익 = 월 매출 − 월 고정비</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">변수</th><th className="text-center px-4 py-3 font-bold">조절 난이도</th><th className="text-left px-4 py-3 font-bold">설명</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['하루 고객 수', '쉬움', '시술 시간이 짧아 상한이 높음 (최대 12~14명)'],
                ['평균 객단가', '보통', '셰이빙·두피 등 부가 메뉴로 조절'],
                ['월 영업일', '보통', '26일이 일반적'],
                ['고정비', '어려움', '1층 입지 선택 시 월세가 높음'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className={`px-4 py-3 text-center font-bold ${r[1] === '쉬움' ? 'text-emerald-600' : r[1] === '어려움' ? 'text-rose-600' : 'text-stone-500'}`}>{r[1]}</td><td className="px-4 py-3 text-[13px]">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p className="text-xs text-blue-800 leading-relaxed"><strong>다른 미용 업종과 반대입니다.</strong> 네일·피부·메이크업은 고객 수 상한이 낮아 객단가로 승부해야 하지만, 이용원은 고객 수를 늘리는 것이 더 쉽습니다. 커트가 30~50분이기 때문입니다.</p>
        </div>
      </section>

      {/* 2. 시술별 시간당 수익 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">시술별 단가·시간·시간당 수익</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-3 py-3 font-bold">시술</th><th className="text-center px-3 py-3 font-bold">단가</th><th className="text-center px-3 py-3 font-bold">소요시간</th><th className="text-center px-3 py-3 font-bold">시간당 수익</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {perMenuRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-3 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td><td className="px-3 py-3 text-center">{r[1]}</td><td className="px-3 py-3 text-center">{r[2]}</td><td className={`px-3 py-3 text-center font-bold ${r[4] ? 'text-rose-600' : 'text-stone-800'}`}>{r[3]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-stone-50 border border-stone-100 rounded-2xl p-5 text-[13px] text-stone-600 leading-relaxed space-y-1.5">
          <p>· <strong className="text-stone-900">두피 관리가 시간당 수익 1위(6.5만원)</strong>. 30~40대 남성 탈모 관심층 수요가 늘어 확장 가치가 큽니다.</p>
          <p>· <strong className="text-stone-900">셰이빙 단독이 5.7만원으로 커트보다 높습니다.</strong> 저가 매장이 제공하지 않는 영역입니다.</p>
          <p>· <strong className="text-stone-900">재료 원가가 압도적으로 낮습니다.</strong> 커트 원가율 3%로 미용 업종 중 최저. 커트만 파는 구조로는 수익 상한이 낮습니다.</p>
        </div>
      </section>

      {/* 커트에 무엇을 붙이느냐 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">커트에 무엇을 붙이느냐가 수익을 결정한다</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[440px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">구성</th><th className="text-center px-4 py-3 font-bold">단가</th><th className="text-center px-4 py-3 font-bold">시간</th><th className="text-center px-4 py-3 font-bold">시간당 수익</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {comboRows.map((r) => (
                <tr key={r[0]} className={`hover:bg-stone-50/60 ${r[4] ? 'bg-emerald-50/40' : ''}`}><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center">{r[1]}</td><td className="px-4 py-3 text-center">{r[2]}</td><td className={`px-4 py-3 text-center font-bold ${r[4] ? 'text-emerald-700' : 'text-stone-800'}`}>{r[3]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed"><strong className="text-stone-800">커트 단독 고객을 커트+두피로 전환하면 시간당 수익이 25% 올라갑니다.</strong></p>
      </section>

      <AdUnit slot="1591000951" />

      {/* 3. 시뮬레이션 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">하루 고객 수별 월 순수익 시뮬레이션</h2>
        <p className="text-xs text-stone-500 bg-stone-50 border border-stone-100 rounded-lg px-3 py-2 mb-4 inline-block">조건: 평균 객단가 3.5만원 · 월 영업일 26일 · 고정비 220만원</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">하루 고객</th><th className="text-center px-4 py-3 font-bold">월 고객 수</th><th className="text-center px-4 py-3 font-bold">월 매출</th><th className="text-center px-4 py-3 font-bold">고정비</th><th className="text-center px-4 py-3 font-bold">월 순수익</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {simRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center text-stone-500">{r[1]}</td><td className="px-4 py-3 text-center">{r[2]}</td><td className="px-4 py-3 text-center text-stone-500">{r[3]}</td><td className="px-4 py-3 text-center font-bold text-stone-900">{r[4]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg shrink-0 mt-0.5">⚠️</span>
          <p className="text-xs text-amber-800 leading-relaxed">커트 1건 40분 + 정리 5분이면 12명일 때 순수 근무 시간이 9시간입니다. <strong>하루 8~10명이 지속 가능한 현실 구간</strong>입니다.</p>
        </div>

        <h3 className="text-base font-extrabold text-stone-800 mt-8 mb-3">객단가를 올렸을 때 (하루 9명 고정)</h3>
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
        <p className="text-xs text-stone-500 leading-relaxed"><strong className="text-stone-800">객단가 1만원을 올리면 월 순수익이 234만원 늘어납니다.</strong> 셰이빙·두피 관리를 붙이는 것만으로 도달 가능한 수치입니다.</p>
      </section>

      {/* 4. 고정비 분해 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">고정비 상세 분해</h2>
        <p className="text-sm text-stone-500 mb-3">일반 2체어 1인샵(10~15평, 1층, 수도권) 기준입니다.</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">항목</th><th className="text-center px-4 py-3 font-bold">월 금액</th><th className="text-left px-4 py-3 font-bold">비고</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {fixedRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td><td className="px-4 py-3 text-[13px] text-stone-500">{r[2]}</td></tr>
              ))}
              <tr className="bg-stone-50 font-extrabold text-stone-900"><td className="px-4 py-3">합계</td><td className="px-4 py-3 text-center">약 180~300만원</td><td className="px-4 py-3"></td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed"><strong className="text-stone-700">재료비가 가장 낮은 업종입니다.</strong> 커트 중심이면 월 20만원대도 가능합니다. 대신 1층 월세가 높아 전체 고정비는 네일샵보다 큽니다.</p>
      </section>

      {/* 5. 손익분기 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">손익분기점</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { t: '케이스 A — 소형 1체어', cost: '창업비용 1,200만원', rows: [['하루 6명', '약 380만원', '4개월'], ['하루 8명', '약 560만원', '3개월']] },
            { t: '케이스 B — 일반 2체어', cost: '창업비용 2,500만원', rows: [['하루 6명', '326만원', '8개월'], ['하루 8명', '508만원', '5개월'], ['하루 10명', '690만원', '4개월']] },
            { t: '케이스 C — 바버샵 3체어+', cost: '창업비용 4,500만원', rows: [['하루 8명', '약 430만원', '11개월'], ['하루 12명', '약 800만원', '6개월']] },
          ].map((c) => (
            <div key={c.t} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-extrabold text-stone-800 mb-1">{c.t}</h3>
              <p className="text-xs text-stone-400 mb-3">{c.cost}</p>
              <div className="space-y-2">
                {c.rows.map((r) => (
                  <div key={r[0]} className="flex items-center justify-between text-xs border-b border-stone-50 pb-1.5"><span className="text-stone-500">{r[0]}</span><span className="text-stone-600">{r[1]}</span><span className="font-bold text-stone-900">{r[2]}</span></div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p className="text-xs text-blue-800 leading-relaxed"><strong>현실적인 기대치:</strong> 오픈 첫 3개월 하루 3~5명, 4~6개월차 6~8명, 안정기(7개월~) 8~10명. 일반 2체어의 실질 회수 기간은 <strong>8~14개월</strong>로, 재방문 주기가 3~4주로 짧아 다른 미용 업종보다 회수가 빠릅니다.</p>
        </div>
      </section>

      {/* 6. 1만원 컷 대응 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">1만원 컷 매장에 대응하는 법</h2>
        <p className="text-sm text-rose-600 font-bold mb-4">★ 이용원 창업의 가장 현실적인 고민</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">전략</th><th className="text-left px-4 py-3 font-bold">실행 방법</th><th className="text-center px-4 py-3 font-bold">객단가 효과</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {cutStrategies.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td><td className="px-4 py-3 text-[13px]">{r[1]}</td><td className="px-4 py-3 text-center font-semibold text-emerald-700 whitespace-nowrap">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs text-amber-800 leading-relaxed"><strong>가격 인하는 마지막까지 쓰지 마세요.</strong> 3.5만원을 2.5만원으로 낮추면 하루 9명 기준 월 순수익이 234만원 줄어듭니다. 같은 노력을 셰이빙 도입에 쓰면 오히려 234만원이 늘어납니다. 방향이 정반대입니다.</p>
        </div>
      </section>

      {/* 7. 수익 올리는 방법 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">수익을 올리는 실제 방법 5가지</h2>
        <div className="space-y-3">
          {[
            { n: '01', t: '커트 단독 고객을 줄인다', d: '커트만 받는 고객이 70%라면 수익 상한이 정해집니다. 셰이빙·두피·스타일링을 붙이는 비율을 관리 지표로 삼으세요.' },
            { n: '02', t: '회전 속도를 기술로 줄인다', d: '서두르는 것과 빠른 것은 다릅니다. 도구 배치와 동선을 정리하면 품질 유지하면서 5~10분을 줄일 수 있습니다. 1건당 5분 단축 = 하루 1명 추가 = 월 91만원.' },
            { n: '03', t: '재방문 주기를 관리한다', d: '남성 커트는 3~4주 주기입니다. 예약 시스템에 방문 이력을 남기고, 4주가 지난 고객에게 알림을 보내면 이탈을 막을 수 있습니다. 이 업종에서 가장 효과가 확실한 마케팅입니다.' },
            { n: '04', t: '정액권을 만든다', d: '월 정액 또는 5회권으로 재방문을 구조화합니다. 커트는 필수 소비라 정액권 저항이 낮습니다.' },
            { n: '05', t: '두피·탈모 관심층을 잡는다', d: '시간당 수익 1위 메뉴이고, 재방문이 확실하며, 30~40대 남성 수요가 계속 늘고 있습니다. 기기 투자(50~300만원)가 필요하지만 회수가 빠릅니다.' },
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
        <h2 className="text-xl font-bold text-stone-900 mb-4">1인 운영 vs 직원 고용</h2>
        <p className="text-xs text-stone-500 mb-3">조건: 3체어, 하루 총 고객 18명 목표</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">구분</th><th className="text-center px-4 py-3 font-bold">1인 운영</th><th className="text-center px-4 py-3 font-bold">직원 1명</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[['하루 소화 고객', '10명', '18명'], ['월 매출', '910만원', '1,638만원'], ['고정비', '300만원', '300만원'], ['인건비', '0원', '280~360만원'], ['월 순수익', '610만원', '978~1,058만원']].map((r, i) => (
                <tr key={r[0]} className={`hover:bg-stone-50/60 ${i === 4 ? 'bg-stone-50 font-extrabold text-stone-900' : ''}`}><td className="px-4 py-3">{r[0]}</td><td className="px-4 py-3 text-center">{r[1]}</td><td className="px-4 py-3 text-center">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed">이용원은 직원 고용 효과가 가장 명확한 미용 업종입니다. 커트 수요가 안정적이라 인건비를 채울 물량이 나옵니다. 4대 보험·퇴직금은 위 인건비에 미포함이며, 남성 고객은 불만을 말하지 않고 조용히 이탈하므로 <strong className="text-stone-700">직원 커트 품질 관리가 곧 매출 방어</strong>입니다. 본인 예약이 3개월 이상 꽉 차고 대기가 발생할 때 고용을 검토하세요.</p>
      </section>

      {/* 핵심 요약 */}
      <section className="mb-10">
        <div className="bg-stone-900 text-stone-100 rounded-2xl p-6">
          <h2 className="text-base font-bold text-white mb-3">핵심 요약</h2>
          <ul className="space-y-1.5 text-[13px] text-stone-300 leading-relaxed">
            <li>· 지속 가능한 현실 구간은 하루 8~10명, 월 순수익 500~690만원</li>
            <li>· 재료비가 미용 업종 중 최저 (커트 원가율 3%)</li>
            <li>· 시간당 수익 1위는 두피 관리(6.5만원), 숨은 강자는 셰이빙 단독(5.7만원)</li>
            <li>· 객단가 1만원 인상 = 월 순수익 +234만원</li>
            <li>· 1만원 컷에는 가격이 아니라 메뉴로 대응</li>
            <li>· 일반 2체어 실질 회수 기간 8~14개월 — 미용 업종 중 가장 빠른 편</li>
            <li>· 재방문 주기 3~4주 관리가 가장 효과적인 마케팅</li>
          </ul>
        </div>
      </section>

      {/* 내부링크 */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/hair/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">항목별 상세</p><p className="font-bold text-stone-900">창업비용 보기 →</p></Link>
          <Link href="/hair#calculator" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">직접 계산</p><p className="font-bold text-stone-900">창업비용 계산기 →</p></Link>
          <Link href="/revenue" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">업종 비교</p><p className="font-bold text-stone-900">네일샵 수익과 비교 →</p></Link>
        </div>
      </section>
    <RelatedQna sections={['hair-license']} offset={8} />

    </div>
  )
}
