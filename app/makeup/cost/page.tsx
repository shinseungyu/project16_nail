import type { Metadata } from 'next'
import RelatedQna from '@/components/RelatedQna'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '메이크업샵 창업비용 | 출장형 300만원부터 규모별 견적' },
  description: '메이크업샵 창업비용을 출장형 300~800만원, 공유샵 800~1,500만원, 매장형 1,500~2,500만원 3가지로 분해했습니다. 키트 구성과 숨은 비용까지 정리.',
  keywords: ['메이크업샵 창업비용', '메이크업 창업 비용', '출장 메이크업 창업', '메이크업 키트 비용', '소자본 메이크업 창업'],
  alternates: { canonical: '/makeup/cost' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: '메이크업샵 창업', item: `${SITE_URL}/makeup` },
    { '@type': 'ListItem', position: 3, name: '창업비용', item: `${SITE_URL}/makeup/cost` },
  ],
}

const caseRows = [
  ['보증금', '0원', '0~500만원', '500~3,000만원'],
  ['인테리어', '0원', '0~300만원', '300~2,000만원'],
  ['장비·기기', '30~150만원', '100~300만원', '200~800만원'],
  ['초기 재료비', '200~500만원', '250~600만원', '400~1,200만원'],
  ['간판·홍보물', '0~50만원', '0~100만원', '50~300만원'],
  ['가구·소품', '30~100만원', '100~250만원', '200~600만원'],
]

const materialRows = [
  ['베이스', '파운데이션 호수별 8~15종, 컨실러, 프라이머', '80~250만원'],
  ['색조', '아이섀도 팔레트, 립, 블러셔', '60~200만원'],
  ['브러시·툴', '브러시 세트, 퍼프, 스펀지', '40~150만원'],
  ['속눈썹·부자재', '인조속눈썹, 글루, 핀셋', '20~80만원'],
  ['위생용품', '소독제, 일회용 툴, 티슈', '15~40만원'],
  ['세팅·픽서', '세팅 스프레이, 파우더', '15~50만원'],
]

const equipRows = [
  ['메이크업 조명 (링라이트·패널)', '10~80만원', '필수'],
  ['대형 거울', '10~50만원', '필수'],
  ['메이크업 체어', '15~80만원', '매장형 필수'],
  ['이동용 키트 케이스', '10~40만원', '출장형 필수'],
  ['휴대용 조명', '10~30만원', '출장형 필수'],
  ['에어브러시 세트', '30~150만원', '선택'],
  ['스팀기·소독기', '10~40만원', '준필수'],
  ['브러시 세척·건조기', '5~20만원', '선택'],
]

const hiddenRows = [
  ['포트폴리오 촬영', '50~200만원', '창업 전 필수 투자. 대부분 예산에서 누락'],
  ['차량 유지비', '월 20~50만원', '출장형 필수. 유류비·주차비·보험'],
  ['위생교육비', '2~3만원', '영업 신고 전 이수'],
  ['배상책임 보험', '연 15~40만원', '웨딩 클레임 대비. 금액이 커서 권장'],
  ['재료 보충비', '월 30~80만원', '파운데이션·립은 소모가 빠름'],
  ['비수기 3개월 생활비', '400~800만원', '가장 많이 빠뜨리는 항목'],
]

const regionRows = [
  ['서울 주요 상권', '1,500~3,000만원', '120~250만원'],
  ['서울 주거지역 / 수도권', '700~1,500만원', '60~130만원'],
  ['광역시', '400~1,000만원', '40~90만원'],
  ['중소도시', '200~700만원', '25~60만원'],
]

export default function MakeupCostPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/makeup" className="hover:text-stone-700">메이크업샵</Link><span>›</span><span className="text-stone-600">창업비용</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업비용 가이드</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">메이크업샵 창업비용, 얼마나 들까?</h1>
      <p className="text-stone-500 mb-8">메이크업샵은 미용 업종 중 창업비용이 가장 낮습니다. 매장 없이 키트만으로 시작할 수 있기 때문입니다. 대신 재료비 비중이 가장 높습니다. 아래에서 규모별 실제 견적을 분해했습니다.</p>

      {/* 1. 규모별 3케이스 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">규모별 창업비용 3케이스</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
          <table className="w-full text-sm min-w-[640px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">항목</th>
                <th className="text-center px-4 py-3 font-bold">출장 전문<br /><span className="text-[11px] text-stone-400">매장 없음</span></th>
                <th className="text-center px-4 py-3 font-bold">공유샵·소형<br /><span className="text-[11px] text-stone-400">3~5평</span></th>
                <th className="text-center px-4 py-3 font-bold">일반 1인 매장<br /><span className="text-[11px] text-stone-400">8~15평</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {caseRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center">{r[1]}</td><td className="px-4 py-3 text-center">{r[2]}</td><td className="px-4 py-3 text-center">{r[3]}</td></tr>
              ))}
              <tr className="bg-stone-50 font-extrabold text-stone-900"><td className="px-4 py-3">합계</td><td className="px-4 py-3 text-center text-emerald-700">약 300~800만원</td><td className="px-4 py-3 text-center">약 800~1,500만원</td><td className="px-4 py-3 text-center text-amber-700">약 1,500~2,500만원</td></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-stone-50 border border-stone-100 rounded-2xl p-5 space-y-2 text-[13px] text-stone-600 leading-relaxed">
          <p>· 포트폴리오가 아직 없음, 고객 기반 없음 → <strong className="text-stone-900">출장 전문</strong>. 미용 업종 중 가장 낮은 리스크로 시작.</p>
          <p>· 웨딩 제휴처가 이미 있음 → <strong className="text-stone-900">공유샵</strong>. 리허설·상담 공간이 있으면 전환율이 올라갑니다.</p>
          <p>· 데일리·속눈썹 등 정기 고객 확보 계획 → <strong className="text-stone-900">일반 매장</strong>. 고정 고객에는 공간이 필요합니다.</p>
          <p className="text-stone-500">출장으로 시작해서 매장으로 넘어가는 것이 가장 안전한 경로입니다.</p>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 2-1. 재료비 (가장 큰 비중) */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-2">초기 재료비 — 150~1,200만원</h2>
        <p className="text-sm text-rose-600 font-bold mb-3">★ 가장 큰 비중 (창업비용의 25~30%)</p>
        <p className="text-[13px] text-stone-600 leading-relaxed mb-4">다른 업종과 달리 모든 피부톤·연령대에 대응할 제품군을 처음부터 갖춰야 하기 때문입니다.</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[540px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">카테고리</th><th className="text-left px-4 py-3 font-bold">필요 구성</th><th className="text-center px-4 py-3 font-bold">예산</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {materialRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td><td className="px-4 py-3 text-[13px]">{r[1]}</td><td className="px-4 py-3 text-center whitespace-nowrap">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[12px] text-green-700 bg-green-50 rounded-lg px-3 py-2 leading-relaxed mb-2">✓ 처음부터 프로 브랜드 풀라인을 갖추지 마세요. 자주 쓰는 호수 위주로 시작해 요청이 들어올 때 확장합니다. 아끼면 안 되는 것은 브러시와 위생용품입니다.</p>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg shrink-0 mt-0.5">⚠️</span>
          <p className="text-xs text-amber-800 leading-relaxed">화장품은 유통기한과 개봉 후 사용기한이 있습니다. 안 쓰는 제품을 대량 구매하면 그대로 손실입니다. 재고 회전을 기준으로 발주하세요.</p>
        </div>
      </section>

      {/* 2-2. 나머지 항목 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">항목별 상세</h2>
        <div className="space-y-4">
          {[
            { title: '보증금 — 0~3,000만원', body: '출장 전문이면 0원입니다. 이것이 메이크업 창업의 가장 큰 장점입니다. 매장을 얻는다면 1층일 필요가 없고, 오히려 주차와 접근성이 중요합니다. 신부·혼주 고객은 드레스나 정장 차림으로 이동하기 때문입니다.' },
            { title: '인테리어 — 0~2,000만원', body: '핵심은 조명 하나입니다. 자연광에 가까운 색온도의 메이크업 조명과 대형 거울이 필수입니다. 조명이 나쁘면 결과물 사진이 나쁘고, 사진이 나쁘면 예약이 안 옵니다. 포트폴리오 품질에 직결되는 유일한 인테리어 항목입니다.' },
            { title: '간판·홍보물 — 0~300만원', body: '출장형은 불필요합니다. 같은 돈을 포트폴리오 촬영에 쓰는 것이 회수가 훨씬 빠릅니다. 모델·스튜디오 대여 포함 1회 촬영에 30~80만원이면 30~50컷을 확보할 수 있고, 이것이 실제 예약으로 이어집니다.' },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-stone-900 mb-2">{item.title}</h3>
              <p className="text-[13px] text-stone-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 장비 리스트 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">메이크업샵 장비 리스트</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">장비</th><th className="text-center px-4 py-3 font-bold">신품가</th><th className="text-center px-4 py-3 font-bold">구분</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {equipRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td><td className="px-4 py-3 text-center">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 bg-stone-50 border border-stone-100 rounded-xl p-3 leading-relaxed"><strong>출장 전문 최소 구성:</strong> 키트 케이스 + 휴대용 조명 + 브러시 세트 = 약 50~150만원</p>
      </section>

      {/* 4. 숨은 비용 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">초보가 빠뜨리는 숨은 비용 6가지</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">항목</th><th className="text-center px-4 py-3 font-bold">예상 금액</th><th className="text-left px-4 py-3 font-bold">설명</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {hiddenRows.map((r) => (
                <tr key={r[0]} className={`hover:bg-stone-50/60 ${r[0].includes('생활비') || r[0].includes('포트폴리오') ? 'bg-amber-50/40 font-semibold' : ''}`}><td className="px-4 py-3 text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td><td className="px-4 py-3 text-[13px]">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg shrink-0 mt-0.5">⚠️</span>
          <p className="text-xs text-amber-800 leading-relaxed">메이크업은 1~2월과 7~8월에 매출이 절반 이하로 떨어집니다. 다른 업종의 오픈 초기 3개월과 달리 <strong>매년 반복되는 비수기</strong>가 있습니다. 창업 시점이 비수기 직전이면 자금이 먼저 마릅니다. <strong>3~4월 또는 9~10월 오픈을 권합니다.</strong></p>
        </div>
      </section>

      {/* 5. 지역별 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">지역별 임대 조건</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">지역</th><th className="text-center px-4 py-3 font-bold">보증금 (8~15평)</th><th className="text-center px-4 py-3 font-bold">월세</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {regionRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center">{r[1]}</td><td className="px-4 py-3 text-center">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed">메이크업샵은 유동인구가 거의 의미 없습니다. 예약제이고 목적 방문이기 때문입니다. 대신 <strong className="text-stone-700">웨딩홀·스튜디오·드레스샵이 가까운 곳</strong>의 가치가 훨씬 큽니다. 제휴와 소개가 실제 매출을 만듭니다.</p>
      </section>

      {/* 6. 지원금 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">창업 지원금·대출</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { name: '소상공인 정책자금', desc: '시설·운전자금 융자', where: '소상공인시장진흥공단' },
            { name: '청년 창업 지원 사업', desc: '자금 + 컨설팅', where: '중소벤처기업부·지자체' },
            { name: '내일배움카드', desc: '자격증 훈련비 지원', where: '고용노동부 HRD-Net' },
            { name: '1인 창조기업 지원', desc: '출장·프리랜서형 적용 여부 확인', where: '창업진흥원' },
          ].map((r) => (
            <div key={r.name} className="bg-white border border-stone-100 rounded-2xl p-4 shadow-sm"><p className="text-sm font-bold text-stone-800 mb-1">{r.name}</p><p className="text-xs text-stone-500">{r.desc}</p><p className="text-[11px] text-stone-400 mt-1">확인처: {r.where}</p></div>
          ))}
        </div>
        <p className="text-xs text-stone-500 mt-3 leading-relaxed">금액·금리·요건은 매년 변경됩니다. 대부분 <strong className="text-stone-700">사업자등록증과 미용사 면허증</strong>을 요구합니다.</p>
      </section>

      {/* 내부링크 */}
      <section>
        <h2 className="text-xl font-bold text-stone-900 mb-4">더 알아보기</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/makeup#calculator" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">직접 계산</p><p className="font-bold text-stone-900">창업비용 계산기 →</p></Link>
          <Link href="/makeup/revenue" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">회수 기간</p><p className="font-bold text-stone-900">예상 수익·손익분기점 →</p></Link>
          <Link href="/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">업종 비교</p><p className="font-bold text-stone-900">네일샵 창업비용과 비교 →</p></Link>
        </div>
      </section>
    <RelatedQna sections={['makeup-license']} offset={4} />

    </div>
  )
}
