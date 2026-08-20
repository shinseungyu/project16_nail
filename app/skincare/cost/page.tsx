import type { Metadata } from 'next'
import RelatedQna from '@/components/RelatedQna'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '피부관리샵 창업비용 | 규모별 실제 견적 3가지 2026' },
  description: '피부관리샵 창업비용을 공유형 800만원, 1인샵 3,000만원, 룸2개 5,000만원 3가지 규모로 항목별 분해했습니다. 장비 가격표와 숨은 비용까지 정리.',
  keywords: ['피부관리샵 창업비용', '피부관리실 창업비용', '에스테틱 창업비용', '소자본 피부관리샵 창업', '1인 피부관리실 비용'],
  alternates: { canonical: '/skincare/cost' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: '피부관리샵 창업', item: `${SITE_URL}/skincare` },
    { '@type': 'ListItem', position: 3, name: '창업비용', item: `${SITE_URL}/skincare/cost` },
  ],
}

const caseRows = [
  ['보증금', '0~300만원', '500~2,000만원', '2,000~5,000만원'],
  ['인테리어', '0~200만원', '500~1,500만원', '1,500~4,000만원'],
  ['장비·기기', '200~500만원', '500~1,200만원', '1,200~3,000만원'],
  ['초기 재료비', '100~200만원', '200~400만원', '400~800만원'],
  ['간판·홍보물', '0~50만원', '50~150만원', '150~300만원'],
  ['가구·소품', '50~150만원', '150~350만원', '350~600만원'],
]

const equipRows = [
  ['관리 베드 (전동)', '80~250만원', '40~120만원', '필수'],
  ['스팀기(스티머)', '30~80만원', '15~40만원', '필수'],
  ['확대경 램프', '10~30만원', '5~15만원', '필수'],
  ['고주파 기기', '100~400만원', '50~200만원', '준필수'],
  ['초음파 스크러버', '30~100만원', '15~50만원', '준필수'],
  ['LED 마스크·조사기', '50~300만원', '25~150만원', '선택'],
  ['저주파·EMS', '80~250만원', '40~120만원', '선택'],
  ['타월워머', '15~40만원', '8~20만원', '필수'],
  ['자외선 소독기', '10~30만원', '5~15만원', '필수'],
  ['왁싱 워머', '5~20만원', '3~10만원', '선택'],
]

const hiddenRows = [
  ['위생교육비', '2~3만원', '영업 신고 전 이수 필요'],
  ['화재·배상책임 보험', '연 15~40만원', '시술 관련 분쟁 대비. 가입 권장'],
  ['카드 단말기·POS', '월 2~5만원', '회원권 관리 기능 포함 시 더 높음'],
  ['예약 시스템', '월 3~10만원', '네이버 예약 연동, 고객 관리(CRM)'],
  ['세탁·린넨', '월 10~30만원', '수건·가운 회전. 자가 세탁 시 세탁기·건조기 구매비'],
  ['초기 3개월 운영자금', '600~900만원', '가장 많이 빠뜨리는 항목'],
]

const regionRows = [
  ['서울 주요 상권', '2,000~5,000만원', '150~350만원'],
  ['서울 주거지역 / 수도권', '1,000~2,500만원', '80~180만원'],
  ['광역시', '500~1,500만원', '50~120만원'],
  ['중소도시', '300~1,000만원', '30~80만원'],
]

export default function SkincareCostPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/skincare" className="hover:text-stone-700">피부관리샵</Link><span>›</span>
        <span className="text-stone-600">창업비용</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업비용 가이드</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">피부관리샵 창업비용, 규모별로 얼마나 들까?</h1>
      <p className="text-stone-500 mb-8">피부관리샵 창업비용은 평수와 관리 기기 구성에서 갈립니다. 같은 1인샵이라도 800만원에 시작하는 경우와 4,000만원이 드는 경우가 함께 존재합니다. 아래에서 실제 견적을 규모별로 분해했습니다.</p>

      {/* 1. 규모별 3케이스 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">규모별 창업비용 3케이스</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
          <table className="w-full text-sm min-w-[640px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">항목</th>
                <th className="text-center px-4 py-3 font-bold">공유형·소형<br /><span className="text-[11px] text-stone-400">3~6평</span></th>
                <th className="text-center px-4 py-3 font-bold">일반 1인샵<br /><span className="text-[11px] text-stone-400">10~15평</span></th>
                <th className="text-center px-4 py-3 font-bold">룸 2개 이상<br /><span className="text-[11px] text-stone-400">20~30평</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {caseRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 text-center">{r[1]}</td>
                  <td className="px-4 py-3 text-center">{r[2]}</td>
                  <td className="px-4 py-3 text-center">{r[3]}</td>
                </tr>
              ))}
              <tr className="bg-stone-50 font-extrabold text-stone-900">
                <td className="px-4 py-3">합계</td>
                <td className="px-4 py-3 text-center text-emerald-700">약 800~1,400만원</td>
                <td className="px-4 py-3 text-center">약 2,000~3,500만원</td>
                <td className="px-4 py-3 text-center text-amber-700">약 5,000~9,000만원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-stone-50 border border-stone-100 rounded-2xl p-5 space-y-2 text-[13px] text-stone-600 leading-relaxed">
          <p>· 자격증을 막 딴 상태, 고객 기반 없음 → <strong className="text-stone-900">공유형</strong>. 실패해도 손실이 작습니다.</p>
          <p>· 기존 샵에서 근무하며 단골이 30명 이상 → <strong className="text-stone-900">일반 1인샵</strong>. 바로 회수 가능합니다.</p>
          <p>· 직원 고용 계획·회원권 중심 운영 → <strong className="text-stone-900">룸 2개 이상</strong>. 단, 손익분기점이 1년 이상으로 늘어납니다.</p>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 2. 항목별 상세 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">항목별 상세</h2>
        <div className="space-y-4">
          {[
            { title: '보증금 — 0~5,000만원', body: '피부관리샵은 1층일 필요가 없습니다. 예약제 운영이라 워크인 비중이 낮기 때문입니다. 2~3층을 선택하면 보증금과 월세를 30~50% 줄이면서 평수는 오히려 넓힐 수 있습니다.', tip: '아끼면 안 되는 부분은 주차입니다. 40~50대 고객 비중이 높아 주차 불가는 재방문율에 직접 영향을 줍니다.' },
            { title: '인테리어 — 0~4,000만원', body: '가장 편차가 큰 항목입니다. 핵심은 급배수와 환기입니다. 관리룸 구획, 세면 설비, 환기, 조도 조절 조명이 필수이고 샤워부스·파우더룸은 선택입니다.', tip: '배수·환기 공사는 아끼면 안 됩니다. 나중에 뜯어고치면 영업을 중단해야 합니다. 이전 임차인이 미용업이었다면 300~800만원 절약 가능.' },
            { title: '장비·기기 — 100~3,000만원', body: '피부관리샵 창업비용에서 네일샵과 가장 크게 벌어지는 항목입니다. 최소 구성으로 시작해 수요가 확인된 뒤 순차 도입하는 것이 안전합니다.', tip: '베드+스티머+확대경+소독기+타월워머 = 약 150~400만원으로 기본 관리 메뉴 운영이 가능합니다.' },
            { title: '재료비 — 50~800만원', body: '화장품 라인 구매가 대부분을 차지합니다. 전문가용 브랜드는 최소 발주 금액이 정해진 경우가 많아 계약 전 최소 발주량과 반품 조건을 반드시 확인해야 합니다.', tip: '초기엔 2개 브랜드 이내로 압축. 유통기한이 있어 대량 선구매는 손실로 이어집니다.' },
            { title: '간판·홍보물 — 0~300만원', body: '예약제·2층 이상 입지라면 간판 투자 효율이 낮습니다.', tip: '같은 돈을 네이버 플레이스 사진 촬영과 초기 체험 이벤트에 쓰는 편이 회수가 빠릅니다.' },
            { title: '가구·소품 — 0~600만원', body: '베드 침구, 수건, 가운, 타월워머, 소독기, 대기 의자, 스툴이 포함됩니다.', tip: '수건은 회전이 필요해 하루 예상 고객 수의 4~5배를 준비해야 세탁 주기가 돌아갑니다.' },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-stone-900 mb-2">{item.title}</h3>
              <p className="text-[13px] text-stone-600 leading-relaxed mb-2">{item.body}</p>
              <p className="text-[12px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5 leading-relaxed">✓ {item.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 필수 장비 리스트 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">피부관리샵 필수 장비 리스트</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[560px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr><th className="text-left px-4 py-3 font-bold">장비</th><th className="text-center px-4 py-3 font-bold">신품가</th><th className="text-center px-4 py-3 font-bold">중고가</th><th className="text-center px-4 py-3 font-bold">구분</th></tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {equipRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 text-center">{r[1]}</td>
                  <td className="px-4 py-3 text-center text-stone-500">{r[2]}</td>
                  <td className="px-4 py-3 text-center">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 bg-stone-50 border border-stone-100 rounded-xl p-3 leading-relaxed"><strong>중고 구매 시 확인:</strong> A/S 가능 여부, 부품 단종 여부, 제조사 정품 인증. 고주파·초음파 기기는 수리 불가 시 그대로 손실입니다. 저가 중고보다 A/S 되는 국내 브랜드가 장기적으로 저렴합니다.</p>
      </section>

      {/* 4. 숨은 비용 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">초보가 빠뜨리는 숨은 비용 6가지</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">항목</th><th className="text-center px-4 py-3 font-bold">예상 금액</th><th className="text-left px-4 py-3 font-bold">설명</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {hiddenRows.map((r) => (
                <tr key={r[0]} className={`hover:bg-stone-50/60 ${r[0].includes('운영자금') ? 'bg-amber-50/50 font-bold' : ''}`}>
                  <td className="px-4 py-3 text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg shrink-0 mt-0.5">⚠️</span>
          <p className="text-xs text-amber-800 leading-relaxed">창업비용만 계산하고 오픈 후 3개월 생활비와 월세를 준비하지 않는 것이 가장 흔한 실패 원인입니다. 피부관리샵은 고단가 업종이라 후기가 쌓이기 전까지 예약이 잘 들어오지 않습니다. 창업비용 외에 최소 3개월치 고정비를 별도로 확보하세요.</p>
        </div>
      </section>

      {/* 5. 지역별 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">지역별 보증금·월세 차이</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">지역</th><th className="text-center px-4 py-3 font-bold">보증금 (10~15평)</th><th className="text-center px-4 py-3 font-bold">월세</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {regionRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center">{r[1]}</td><td className="px-4 py-3 text-center">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed">실제 임대료는 층수·건물 연식·주차 여부에 따라 크게 달라집니다. 위 수치는 참고 범위이며, 계약 전 인근 3곳 이상을 비교하세요. <strong className="text-stone-700">월세가 예상 월매출의 15%를 넘으면 위험</strong>합니다.</p>
      </section>

      {/* 6. 지원금 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">창업 지원금·대출</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { name: '소상공인 정책자금', desc: '시설·운전자금 융자', where: '소상공인시장진흥공단' },
            { name: '청년 창업 지원 사업', desc: '자금 + 교육·컨설팅', where: '중소벤처기업부·지자체' },
            { name: '국민취업지원제도 / 내일배움카드', desc: '자격증 취득 훈련비 지원', where: '고용노동부 HRD-Net' },
            { name: '지자체 소상공인 지원', desc: '임차료·간판 개선 등', where: '관할 시·군·구청' },
          ].map((r) => (
            <div key={r.name} className="bg-white border border-stone-100 rounded-2xl p-4 shadow-sm">
              <p className="text-sm font-bold text-stone-800 mb-1">{r.name}</p>
              <p className="text-xs text-stone-500">{r.desc}</p>
              <p className="text-[11px] text-stone-400 mt-1">확인처: {r.where}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-500 mt-3 leading-relaxed">금액·금리·요건은 매년 변경되므로 반드시 공식 채널에서 확인하세요. 대부분의 지원 사업이 <strong className="text-stone-700">사업자등록증과 미용사 면허증</strong>을 요구합니다.</p>
      </section>

      {/* 내부링크 */}
      <section className="mb-4">
        <h2 className="text-xl font-bold text-stone-900 mb-4">더 알아보기</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/skincare#calculator" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">직접 계산</p><p className="font-bold text-stone-900">창업비용 계산기 →</p></Link>
          <Link href="/skincare/revenue" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">회수 기간</p><p className="font-bold text-stone-900">예상 수익·손익분기점 →</p></Link>
          <Link href="/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">업종 비교</p><p className="font-bold text-stone-900">네일샵 창업비용과 비교 →</p></Link>
        </div>
      </section>
    <RelatedQna sections={['skin-license']} offset={4} />

    </div>
  )
}
