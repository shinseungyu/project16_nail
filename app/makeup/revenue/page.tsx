import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '메이크업 아티스트 수입 | 웨딩 건수별 월수익 계산' },
  description: '메이크업샵 월 순수익을 신부 2~7건 기준으로 계산했습니다. 시술별 시간당 수익, 성수기·비수기 편차, 손익분기점까지 실제 수치로 정리.',
  keywords: ['메이크업 아티스트 수입', '웨딩 메이크업 수익', '메이크업샵 매출', '메이크업 아티스트 월급', '신부 메이크업 단가'],
  alternates: { canonical: '/makeup/revenue' },
}

const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
  { '@type': 'ListItem', position: 2, name: '메이크업샵 창업', item: `${SITE_URL}/makeup` },
  { '@type': 'ListItem', position: 3, name: '예상 수익', item: `${SITE_URL}/makeup/revenue` },
] }

const perMenuRows = [
  ['신부 메이크업 (헤어 포함)', '45만원', '150분', '약 17.9만원', true],
  ['혼주 메이크업', '11만원', '50분', '약 12.2만원', false],
  ['촬영·화보', '25만원', '90분', '약 16.3만원', false],
  ['파티·행사', '9만원', '55분', '약 9.1만원', false],
  ['데일리 메이크업', '5만원', '50분', '약 5.4만원', false],
  ['속눈썹 연장', '5.5만원', '75분', '약 3.8만원', false],
] as const

const simRows = [
  ['2건', '24건', '140만원', '120만원', '260만원', '110만원'],
  ['3건', '30건', '210만원', '150만원', '360만원', '210만원'],
  ['4건', '40건', '280만원', '200만원', '480만원', '330만원'],
  ['6건', '48건', '420만원', '240만원', '660만원', '510만원'],
  ['8건', '55건', '560만원', '275만원', '835만원', '685만원'],
  ['10건', '60건', '700만원', '300만원', '1,000만원', '850만원'],
]

const seasonRows = [
  ['최성수기', '4~5월, 10~11월', '최대', '150~200', true],
  ['성수기', '3월, 9월, 12월', '높음', '110~130', false],
  ['평월', '6월', '보통', '100', false],
  ['비수기', '7~8월', '낮음', '60~75', false],
  ['최비수기', '1~2월', '최저', '40~55', true],
] as const

const yearRows = [
  ['최성수기', '4개월', '약 850만원', '3,400만원'],
  ['성수기', '3개월', '약 610만원', '1,830만원'],
  ['평월', '1개월', '510만원', '510만원'],
  ['비수기', '2개월', '약 345만원', '690만원'],
  ['최비수기', '2개월', '약 240만원', '480만원'],
]

export default function MakeupRevenuePage() {
  return (
    <div className="max-w-[900px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/makeup" className="hover:text-stone-700">메이크업샵</Link><span>›</span><span className="text-stone-600">예상 수익</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">예상 수익</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">메이크업샵, 월 얼마나 벌까?</h1>
      <p className="text-stone-500 mb-8">메이크업 수익은 고객 수가 아니라 웨딩 건수와 계절이 결정합니다. 신부 1건이 데일리 메이크업 10건과 맞먹기 때문입니다. 그리고 이 업종은 성수기와 비수기 매출 차이가 3배 가까이 납니다.</p>

      {/* 1. 공식 + 변수 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">수익 계산 공식</h2>
        <div className="bg-stone-900 text-stone-100 rounded-2xl p-5 text-sm leading-relaxed font-mono mb-4">
          <p>월 매출 = (웨딩 건수 × 웨딩 패키지 단가) + (일반 시술 수 × 일반 단가)</p>
          <p>월 고정비 = 월세 + 재료 보충비 + 교통비 + 공과금 + 광고비</p>
          <p className="text-emerald-400">월 순수익 = 월 매출 − 월 고정비</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">변수</th><th className="text-center px-4 py-3 font-bold">조절 난이도</th><th className="text-left px-4 py-3 font-bold">설명</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['웨딩 건수', '어려움', '주말 오전에 몰려 물리적 상한 (주말당 2~3건)'],
                ['웨딩 단가', '보통', '포트폴리오·경력에 비례. 시간이 필요'],
                ['일반 시술 수', '쉬움', '평일 공백을 채우는 것이 수익 개선의 핵심'],
                ['고정비', '쉬움', '출장형은 고정비 자체가 낮음'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className={`px-4 py-3 text-center font-bold ${r[1] === '쉬움' ? 'text-emerald-600' : r[1] === '어려움' ? 'text-rose-600' : 'text-stone-500'}`}>{r[1]}</td><td className="px-4 py-3 text-[13px]">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
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
          <p>· <strong className="text-stone-900">신부 메이크업이 시간당 17.9만원으로 압도적 1위</strong>. 미용 전 업종을 통틀어 가장 높습니다.</p>
          <p>· <strong className="text-stone-900">혼주 메이크업이 숨은 강자</strong>. 신부 예약 1건에 자동으로 2~4건이 따라옵니다. 신부 단가만 보면 실제 수익을 과소평가하게 됩니다.</p>
          <p>· 속눈썹 연장은 시간당 수익이 가장 낮지만 <strong className="text-stone-900">비수기와 평일을 메우는</strong> 매출 안정성 메뉴입니다.</p>
        </div>
      </section>

      {/* 웨딩 1건 실제 매출 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">웨딩 1건의 실제 매출</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">구성</th><th className="text-center px-4 py-3 font-bold">건수</th><th className="text-center px-4 py-3 font-bold">금액</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[['신부 (헤어 포함)', '1', '45만원'], ['혼주 (양가 어머니)', '2', '22만원'], ['하객·친인척', '0~2', '0~18만원']].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center">{r[1]}</td><td className="px-4 py-3 text-center">{r[2]}</td></tr>
              ))}
              <tr className="bg-stone-50 font-extrabold text-stone-900"><td className="px-4 py-3">합계</td><td className="px-4 py-3 text-center"></td><td className="px-4 py-3 text-center">67~85만원</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-stone-600 leading-relaxed"><strong className="text-stone-900">웨딩 1건은 45만원짜리가 아니라 실질 70만원 안팎의 매출입니다.</strong></p>
      </section>

      <AdUnit slot="1591000951" />

      {/* 3. 시뮬레이션 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">월 순수익 시뮬레이션</h2>
        <p className="text-xs text-stone-500 bg-stone-50 border border-stone-100 rounded-lg px-3 py-2 mb-4 inline-block">조건: 매장형 고정비 150만원 · 웨딩 1건당 실질 매출 70만원 · 평월 기준</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
          <table className="w-full text-sm min-w-[620px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-3 py-3 font-bold">월 웨딩</th><th className="text-center px-3 py-3 font-bold">일반 시술(월)</th><th className="text-center px-3 py-3 font-bold">웨딩 매출</th><th className="text-center px-3 py-3 font-bold">일반 매출</th><th className="text-center px-3 py-3 font-bold">총 매출</th><th className="text-center px-3 py-3 font-bold">월 순수익</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {simRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-3 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-3 py-3 text-center text-stone-500">{r[1]}</td><td className="px-3 py-3 text-center">{r[2]}</td><td className="px-3 py-3 text-center">{r[3]}</td><td className="px-3 py-3 text-center">{r[4]}</td><td className="px-3 py-3 text-center font-bold text-stone-900">{r[5]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg shrink-0 mt-0.5">⚠️</span>
          <p className="text-xs text-amber-800 leading-relaxed">월 10건 이상은 주말만으로는 불가능합니다. 웨딩은 토·일 오전에 집중되므로 <strong>월 8~9건(주말당 2건)이 1인 기준 상한</strong>에 가깝습니다. 그 이상은 평일 예식이나 어시스턴트 운영이 필요합니다.</p>
        </div>

        <h3 className="text-base font-extrabold text-stone-800 mt-8 mb-3">출장 전문일 때 (고정비 60만원)</h3>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[400px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">월 웨딩</th><th className="text-center px-4 py-3 font-bold">총 매출</th><th className="text-center px-4 py-3 font-bold">월 순수익</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[['3건', '360만원', '300만원'], ['6건', '660만원', '600만원'], ['8건', '835만원', '775만원']].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center">{r[1]}</td><td className="px-4 py-3 text-center font-bold text-stone-900">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed"><strong className="text-stone-800">출장형은 고정비가 낮아 같은 매출에서 순수익이 90~165만원 더 높습니다.</strong> 초기에 출장으로 시작하라고 권하는 이유입니다.</p>
      </section>

      {/* 4. 성수기/비수기 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">성수기·비수기 편차</h2>
        <p className="text-sm text-rose-600 font-bold mb-4">★ 이 업종의 핵심 — 미용 업종 중 계절 편차 최대</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-5">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">시기</th><th className="text-center px-4 py-3 font-bold">월</th><th className="text-center px-4 py-3 font-bold">웨딩 수요</th><th className="text-center px-4 py-3 font-bold">매출 지수</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {seasonRows.map((r) => (
                <tr key={r[0]} className={`hover:bg-stone-50/60 ${r[4] ? 'bg-stone-50 font-bold' : ''}`}><td className="px-4 py-3 text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center">{r[1]}</td><td className="px-4 py-3 text-center">{r[2]}</td><td className={`px-4 py-3 text-center font-bold ${r[0] === '최비수기' ? 'text-rose-600' : r[0] === '최성수기' ? 'text-emerald-600' : 'text-stone-700'}`}>{r[3]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-extrabold text-stone-800 mb-3">연 수익으로 환산하면 (월 웨딩 6건 아티스트)</h3>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[440px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">시기</th><th className="text-center px-4 py-3 font-bold">개월</th><th className="text-center px-4 py-3 font-bold">월 순수익</th><th className="text-center px-4 py-3 font-bold">소계</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {yearRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center">{r[1]}</td><td className="px-4 py-3 text-center">{r[2]}</td><td className="px-4 py-3 text-center">{r[3]}</td></tr>
              ))}
              <tr className="bg-stone-50 font-extrabold text-stone-900"><td className="px-4 py-3">연 합계</td><td className="px-4 py-3 text-center">12개월</td><td className="px-4 py-3 text-center"></td><td className="px-4 py-3 text-center">약 6,910만원</td></tr>
              <tr className="bg-stone-100 font-extrabold text-stone-900"><td className="px-4 py-3">월 평균</td><td className="px-4 py-3 text-center"></td><td className="px-4 py-3 text-center"></td><td className="px-4 py-3 text-center text-rose-600">약 576만원</td></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-800 leading-relaxed">4~5월에 850만원을 벌었다고 그 수준으로 생활비와 고정비를 설계하면, 1~2월에 240만원일 때 무너집니다. <strong>연 수익을 12로 나눈 576만원을 기준으로 재무 계획을 세우세요.</strong></p>
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-extrabold text-stone-800 mb-3">비수기 방어 전략 4가지</h3>
          <ol className="space-y-1.5 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li><strong className="text-stone-800">속눈썹 연장 운영</strong> — 계절과 무관하게 3~4주 주기로 재방문합니다</li>
            <li><strong className="text-stone-800">원데이 클래스·강의</strong> — 1~2월에 수요가 오히려 늘어납니다</li>
            <li><strong className="text-stone-800">졸업·입학 시즌 공략</strong> — 2월은 웨딩 비수기지만 졸업사진·입학 수요가 있습니다</li>
            <li><strong className="text-stone-800">여름 촬영 수요</strong> — 7~8월은 웨딩이 적지만 스튜디오 촬영은 이어집니다</li>
          </ol>
        </div>
      </section>

      {/* 5. 손익분기 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">손익분기점</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {[
            { t: '케이스 A — 출장 전문', cost: '창업비용 600만원', rows: [['월 웨딩 3건', '300만원', '2개월'], ['월 웨딩 6건', '600만원', '1개월']] },
            { t: '케이스 B — 일반 매장형', cost: '창업비용 2,000만원', rows: [['월 웨딩 3건', '210만원', '10개월'], ['월 웨딩 6건', '510만원', '4개월']] },
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
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p className="text-xs text-blue-800 leading-relaxed"><strong>현실적인 기대치:</strong> 오픈 첫해는 포트폴리오와 제휴처가 없어 웨딩 예약이 잘 들어오지 않습니다. 1년차 월 웨딩 2~3건, 2년차 5~6건 수준으로 잡는 것이 안전합니다. <strong>매장형 실질 회수 기간은 12~18개월</strong>입니다.</p>
        </div>
      </section>

      {/* 6. 수익 올리는 방법 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">수익을 올리는 실제 방법 5가지</h2>
        <div className="space-y-3">
          {[
            { n: '01', t: '웨딩을 "패키지"로 판다', d: '신부 단품 45만원보다 신부+혼주2인 패키지 62만원이 낫습니다. 어차피 따라올 예약을 미리 확정해 이탈을 막습니다.' },
            { n: '02', t: '평일 공백을 메우는 메뉴를 만든다', d: '주말은 이미 꽉 찹니다. 수익 증가분은 평일에서 나옵니다. 데일리 메이크업, 속눈썹, 원데이 클래스 중 최소 하나는 운영하세요.' },
            { n: '03', t: '제휴처를 3곳 이상 확보한다', d: '웨딩홀·스튜디오·드레스샵. 한 곳당 월 1~2건만 들어와도 월 3~6건이 안정적으로 확보됩니다. 광고비 0원으로 매출의 절반을 만드는 방법입니다.' },
            { n: '04', t: '리허설을 유료화하되 본식에서 차감한다', d: '무료 리허설은 시간만 소모하고 예약 확정률도 낮습니다. 5~10만원을 받되 본식 예약 시 전액 차감하면, 시간 낭비를 줄이면서 계약률은 오릅니다.' },
            { n: '05', t: '단가는 포트폴리오가 오를 때 올린다', d: '경력이 아니라 보여줄 수 있는 결과물이 단가를 정합니다. 분기마다 포트폴리오를 갱신하고, 갱신할 때마다 단가 조정을 검토하세요.' },
          ].map((s) => (
            <div key={s.n} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
              <span className="shrink-0 w-8 h-8 bg-stone-800 text-white rounded-full flex items-center justify-center text-xs font-extrabold">{s.n}</span>
              <div><h3 className="text-sm font-extrabold text-stone-800 mb-1">{s.t}</h3><p className="text-[13px] text-stone-500 leading-relaxed">{s.d}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. 1인 vs 어시스턴트 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">1인 운영 vs 어시스턴트 고용</h2>
        <p className="text-xs text-stone-500 mb-3">조건: 주말당 웨딩 3건 소화 목표</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[440px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">구분</th><th className="text-center px-4 py-3 font-bold">1인 운영</th><th className="text-center px-4 py-3 font-bold">어시스턴트 1명</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[['주말당 소화 건수', '2건', '3~4건'], ['월 웨딩 건수', '8건', '12~14건'], ['월 매출', '835만원', '1,150~1,300만원'], ['고정비', '150만원', '150만원'], ['인건비', '0원', '150~250만원 (주말 파트)'], ['월 순수익', '685만원', '750~900만원']].map((r, i) => (
                <tr key={r[0]} className={`hover:bg-stone-50/60 ${i === 5 ? 'bg-stone-50 font-extrabold text-stone-900' : ''}`}><td className="px-4 py-3">{r[0]}</td><td className="px-4 py-3 text-center">{r[1]}</td><td className="px-4 py-3 text-center">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed">메이크업은 파트타임 어시스턴트 고용이 가능한 업종입니다. 주말만 쓰면 인건비 부담이 낮습니다. 다만 비수기에는 일이 없어 인력 유지가 어려워 <strong className="text-stone-700">성수기 한정 계약</strong>이 현실적입니다. 어시스턴트가 혼주·하객을 맡고 본인이 신부에 집중하는 분업이 일반적입니다.</p>
      </section>

      {/* 핵심 요약 */}
      <section className="mb-10">
        <div className="bg-stone-900 text-stone-100 rounded-2xl p-6">
          <h2 className="text-base font-bold text-white mb-3">핵심 요약</h2>
          <ul className="space-y-1.5 text-[13px] text-stone-300 leading-relaxed">
            <li>· 신부 메이크업 시간당 17.9만원 — 미용 전 업종 중 1위</li>
            <li>· 웨딩 1건은 45만원이 아니라 혼주 포함 실질 70만원</li>
            <li>· 1인 기준 월 웨딩 8~9건이 상한 (주말 집중)</li>
            <li>· 성수기와 최비수기 매출 차이 3배 — 연 수익을 12로 나눠서 판단할 것</li>
            <li>· 출장형은 고정비가 낮아 같은 매출에서 순수익 90~165만원 더 높음</li>
            <li>· 출장형 회수 1~2개월 / 매장형 실질 12~18개월</li>
            <li>· 수익 개선의 핵심은 평일 공백 메우기</li>
          </ul>
        </div>
      </section>

      {/* 내부링크 */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/makeup/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">항목별 상세</p><p className="font-bold text-stone-900">창업비용 보기 →</p></Link>
          <Link href="/makeup#calculator" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">직접 계산</p><p className="font-bold text-stone-900">창업비용 계산기 →</p></Link>
          <Link href="/revenue" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">업종 비교</p><p className="font-bold text-stone-900">네일샵 수익과 비교 →</p></Link>
        </div>
      </section>
    </div>
  )
}
