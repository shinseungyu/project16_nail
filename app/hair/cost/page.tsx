import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '바버샵 창업비용 | 체어 수별 실제 견적 3가지 2026' },
  description: '이용원·바버샵 창업비용을 1체어 800만원, 2체어 2,500만원, 3체어 이상 4,500만원 기준으로 분해했습니다. 장비 가격표와 숨은 비용까지 정리.',
  keywords: ['바버샵 창업비용', '이용원 창업비용', '이발소 창업비용', '남성 미용실 창업비용', '소자본 바버샵 창업'],
  alternates: { canonical: '/hair/cost' },
}

const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
  { '@type': 'ListItem', position: 2, name: '이용원·바버샵 창업', item: `${SITE_URL}/hair` },
  { '@type': 'ListItem', position: 3, name: '창업비용', item: `${SITE_URL}/hair/cost` },
] }

const caseRows = [
  ['보증금', '300~1,000만원', '800~2,500만원', '2,000~5,000만원'],
  ['인테리어', '200~600만원', '600~1,800만원', '1,500~3,500만원'],
  ['장비·기기', '150~350만원', '350~700만원', '700~1,500만원'],
  ['초기 재료비', '50~120만원', '100~250만원', '200~500만원'],
  ['간판·홍보물', '50~150만원', '150~300만원', '250~500만원'],
  ['가구·소품', '80~200만원', '200~450만원', '400~800만원'],
]

const equipRows = [
  ['이발 체어 (유압식)', '50~250만원', '25~120만원', '필수'],
  ['샴푸대', '60~200만원', '30~100만원', '필수'],
  ['클리퍼 (바리캉)', '10~40만원', '—', '필수'],
  ['가위 세트', '20~100만원', '—', '필수'],
  ['드라이어·아이론', '10~40만원', '5~20만원', '필수'],
  ['자외선 소독기', '10~30만원', '5~15만원', '필수'],
  ['타월워머', '15~40만원', '8~20만원', '준필수'],
  ['셰이빙 도구 세트', '15~50만원', '—', '선택'],
  ['두피 관리 기기', '50~300만원', '25~150만원', '선택'],
  ['미러·조명', '20~80만원', '10~40만원', '필수'],
]

const hiddenRows = [
  ['샴푸대 급배수 공사', '100~400만원', '기존 미용업 자리가 아니면 반드시 발생'],
  ['위생교육비', '2~3만원', '영업 신고 전 이수'],
  ['화재·배상책임 보험', '연 15~40만원', '염색 관련 분쟁 대비'],
  ['카드 단말기·예약 시스템', '월 5~15만원', '남성 고객은 앱 예약 선호'],
  ['세탁·타월', '월 10~25만원', '회전이 빨라 수량이 많이 필요'],
  ['초기 3개월 운영자금', '500~800만원', '가장 많이 빠뜨리는 항목'],
]

const regionRows = [
  ['서울 오피스 상권', '2,000~5,000만원', '150~350만원'],
  ['서울 주거지역 / 수도권', '1,000~2,500만원', '80~180만원'],
  ['광역시', '600~1,500만원', '50~120만원'],
  ['중소도시', '300~1,000만원', '30~80만원'],
]

export default function HairCostPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span><span className="text-stone-600">창업비용</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업비용 가이드</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">이용원·바버샵 창업비용, 얼마나 들까?</h1>
      <p className="text-stone-500 mb-8">이용원 창업비용은 체어 수와 1층 여부에서 갈립니다. 다른 미용 업종과 달리 워크인 유입이 30~50%를 차지해, 입지에 쓴 돈이 실제 매출로 돌아오는 유일한 업종입니다.</p>

      {/* 1. 규모별 3케이스 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">규모별 창업비용 3케이스</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
          <table className="w-full text-sm min-w-[640px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">항목</th>
                <th className="text-center px-4 py-3 font-bold">소형 1체어<br /><span className="text-[11px] text-stone-400">5~8평</span></th>
                <th className="text-center px-4 py-3 font-bold">일반 2체어<br /><span className="text-[11px] text-stone-400">10~15평</span></th>
                <th className="text-center px-4 py-3 font-bold">바버샵 3체어+<br /><span className="text-[11px] text-stone-400">18~30평</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {caseRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center">{r[1]}</td><td className="px-4 py-3 text-center">{r[2]}</td><td className="px-4 py-3 text-center">{r[3]}</td></tr>
              ))}
              <tr className="bg-stone-50 font-extrabold text-stone-900"><td className="px-4 py-3">합계</td><td className="px-4 py-3 text-center text-emerald-700">약 800~1,500만원</td><td className="px-4 py-3 text-center">약 1,500~3,000만원</td><td className="px-4 py-3 text-center text-amber-700">약 3,000~6,000만원</td></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p className="text-xs text-blue-800 leading-relaxed"><strong>1층 vs 2층 판단:</strong> 이용원은 워크인이 30~50%입니다. 2층으로 가서 보증금 1,000만원을 아꼈는데 워크인이 사라지면, 월 30~50만원의 매출을 잃습니다. <strong>2년이면 아낀 돈보다 손실이 커집니다.</strong> 이 업종만큼은 1층을 우선 검토하세요.</p>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 2. 항목별 상세 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">항목별 상세</h2>
        <div className="space-y-4">
          {[
            { title: '보증금 — 300~5,000만원', badge: '★ 투자 가치가 가장 높은 항목', body: '다른 미용 업종에서는 층수 낮추면 아낄 수 있는 돈이지만, 이용원에서는 다릅니다. 남성 고객은 직장·집에서 도보 10분 이내를 선호합니다. 오피스 상권 또는 주거 밀집지역이 핵심이며, 아끼면 안 되는 부분은 1층 또는 눈에 띄는 위치입니다.' },
            { title: '인테리어 — 200~3,500만원', badge: '', body: '바버샵은 공간 자체가 마케팅 자산입니다. 콘셉트가 명확한 매장은 SNS에 노출되고 그것이 광고비를 대체합니다. 샴푸대 급배수·환기·조명이 필수이고, 기존 미용실·이용원 자리 인수 시 급배수 공사비 300~800만원을 절약할 수 있습니다. 환기는 아끼면 안 됩니다.' },
            { title: '초기 재료비 — 50~500만원', badge: '', body: '염모제, 펌제, 스타일링 제품, 셰이빙 용품. 다른 미용 업종보다 재료비 비중이 낮습니다. 커트가 주력이면 재료비가 거의 안 듭니다. 커트 중심으로 시작해 펌·염색은 수요 확인 후 확장하세요.' },
            { title: '간판·홍보물 — 30~500만원', badge: '★ 효율이 높은 유일한 업종', body: '네일·피부·메이크업은 예약제라 간판 효율이 낮지만, 이용원은 간판이 실제로 고객을 데려옵니다. 워크인 비중이 높기 때문입니다. 오픈 초기 3개월은 간판이 최고의 광고입니다.' },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-stone-900 mb-1">{item.title}</h3>
              {item.badge && <p className="text-xs text-rose-600 font-bold mb-2">{item.badge}</p>}
              <p className="text-[13px] text-stone-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 장비 리스트 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">필수 장비 리스트</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[560px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">장비</th><th className="text-center px-4 py-3 font-bold">신품가</th><th className="text-center px-4 py-3 font-bold">중고가</th><th className="text-center px-4 py-3 font-bold">구분</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {equipRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td><td className="px-4 py-3 text-center text-stone-500">{r[2]}</td><td className="px-4 py-3 text-center">{r[3]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 bg-stone-50 border border-stone-100 rounded-xl p-3 leading-relaxed"><strong>중고 비권장 — 가위·클리퍼:</strong> 날 상태가 기술 품질에 직결됩니다. 무딘 가위로는 아무리 실력이 좋아도 결과가 안 나옵니다. 체어·샴푸대·미러·소독기·타월워머는 중고 OK. <strong className="text-stone-700">최소 구성(1체어): 체어+샴푸대+클리퍼+가위+드라이어+소독기 = 약 150~350만원.</strong></p>
      </section>

      {/* 4. 숨은 비용 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">초보가 빠뜨리는 숨은 비용 6가지</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">항목</th><th className="text-center px-4 py-3 font-bold">예상 금액</th><th className="text-left px-4 py-3 font-bold">설명</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {hiddenRows.map((r) => (
                <tr key={r[0]} className={`hover:bg-stone-50/60 ${r[0].includes('운영자금') || r[0].includes('급배수') ? 'bg-amber-50/40 font-semibold' : ''}`}><td className="px-4 py-3 text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td><td className="px-4 py-3 text-[13px]">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg shrink-0 mt-0.5">⚠️</span>
          <p className="text-xs text-amber-800 leading-relaxed"><strong>급배수 공사를 예산에 안 넣는 경우가 가장 많습니다.</strong> 일반 상가에 샴푸대를 놓으려면 배관 공사가 필요하고, 건물에 따라 불가능한 경우도 있습니다. 임대차 계약 전에 급배수 가능 여부를 반드시 확인하세요.</p>
        </div>
      </section>

      {/* 5. 지역별 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">지역별 임대 조건</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">지역</th><th className="text-center px-4 py-3 font-bold">보증금 (10~15평, 1층)</th><th className="text-center px-4 py-3 font-bold">월세</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {regionRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center">{r[1]}</td><td className="px-4 py-3 text-center">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed"><strong className="text-stone-700">월세가 예상 월매출의 20%를 넘으면 위험</strong>합니다. 이용원은 그 동네 남자들이 얼마나 사는가가 핵심입니다. 유동인구가 많아도 대부분이 여성이거나 관광객이면 의미가 없습니다. 주거 인구의 성별·연령 구성을 확인하세요.</p>
      </section>

      {/* 6. 지원금 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">창업 지원금·대출</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { name: '소상공인 정책자금', desc: '시설·운전자금 융자', where: '소상공인시장진흥공단' },
            { name: '청년 창업 지원 사업', desc: '자금 + 컨설팅', where: '중소벤처기업부·지자체' },
            { name: '내일배움카드', desc: '이용사 자격증 훈련비 지원', where: '고용노동부 HRD-Net' },
            { name: '지자체 간판개선 사업', desc: '간판 교체 지원', where: '관할 시·군·구청' },
          ].map((r) => (
            <div key={r.name} className="bg-white border border-stone-100 rounded-2xl p-4 shadow-sm"><p className="text-sm font-bold text-stone-800 mb-1">{r.name}</p><p className="text-xs text-stone-500">{r.desc}</p><p className="text-[11px] text-stone-400 mt-1">확인처: {r.where}</p></div>
          ))}
        </div>
        <p className="text-xs text-stone-500 mt-3 leading-relaxed">금액·요건은 매년 변경됩니다. 대부분 <strong className="text-stone-700">사업자등록증과 이용사 면허증</strong>을 요구합니다. 학원비·국비지원 상세는 <a href="https://haircost.kr" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">haircost.kr ↗</a>에서 확인하세요.</p>
      </section>

      {/* 내부링크 */}
      <section>
        <h2 className="text-xl font-bold text-stone-900 mb-4">더 알아보기</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/hair#calculator" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">직접 계산</p><p className="font-bold text-stone-900">창업비용 계산기 →</p></Link>
          <Link href="/hair/revenue" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">회수 기간</p><p className="font-bold text-stone-900">예상 수익·손익분기점 →</p></Link>
          <Link href="/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">업종 비교</p><p className="font-bold text-stone-900">네일샵 창업비용과 비교 →</p></Link>
        </div>
      </section>
    </div>
  )
}
