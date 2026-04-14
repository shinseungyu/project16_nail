import type { Metadata } from 'next'
import KakaoButton from '@/components/KakaoButton'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '1인 네일샵 예상 수익 2026 | 월 순수익 현실적으로 보기',
  description: '1인 네일샵 월 수익을 시술 단가와 고객 수 기준으로 계산해보세요. 손익분기점, 고정비 내역, 수익 높이는 전략까지 네일샵 창업 수익 가이드를 제공합니다.',
  alternates: { canonical: '/revenue' },
}


export default function RevenuePage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">수익 가이드</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">1인 네일샵 예상 수익</h1>
      <p className="text-stone-500 mb-10">시술 단가와 하루 고객 수를 기준으로 현실적인 월 수익을 계산해드립니다. 손익분기점과 고정비 구조를 먼저 이해하면 창업 후 수익 관리가 훨씬 쉬워집니다.</p>

      {/* 시술별 단가 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">네일샵 시술별 평균 단가</h2>
        <div className="bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-5 py-3 font-bold">시술 종류</th>
                <th className="text-center px-4 py-3 font-bold">소요 시간</th>
                <th className="text-center px-4 py-3 font-bold">평균 단가</th>
                <th className="text-center px-4 py-3 font-bold">시간당 수익</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {[
                { type: '기본 젤네일 (단색)', time: '60~80분', price: '3~5만원', perHour: '약 3.5만원' },
                { type: '젤네일 + 아트', time: '80~120분', price: '5~8만원', perHour: '약 4.5만원' },
                { type: '아크릴 연장', time: '90~120분', price: '6~10만원', perHour: '약 5만원' },
                { type: '젤 제거', time: '30~40분', price: '1~2만원', perHour: '약 2.5만원' },
                { type: '손발 케어', time: '40~60분', price: '2~4만원', perHour: '약 3만원' },
                { type: '풀 세트 (연장+아트)', time: '120~150분', price: '8~15만원', perHour: '약 6만원' },
              ].map((row) => (
                <tr key={row.type} className="hover:bg-stone-50">
                  <td className="px-5 py-3 font-medium text-stone-800">{row.type}</td>
                  <td className="px-4 py-3 text-center text-stone-600">{row.time}</td>
                  <td className="px-4 py-3 text-center font-bold text-stone-800">{row.price}</td>
                  <td className="px-4 py-3 text-center text-stone-500 text-xs">{row.perHour}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-stone-400 mt-2">* 지역 및 숙련도에 따라 단가 차이가 있을 수 있습니다.</p>
      </section>

      {/* 월 수익 시뮬레이션 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">월 수익 시뮬레이션</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {[
            { case: '보수적 케이스', customers: '하루 3명', daily: '15만원', monthly: '300만원', net: '150~200만원', color: 'border-stone-200', desc: '초기 오픈 시 현실적인 목표입니다.' },
            { case: '평균 케이스', customers: '하루 5명', daily: '25만원', monthly: '500만원', net: '250~350만원', color: 'border-stone-800', desc: '단골층 형성 후 안정화 단계입니다.' },
            { case: '적극 케이스', customers: '하루 7명', daily: '35만원', monthly: '700만원', net: '400~500만원', color: 'border-amber-300', desc: '숙련도 향상 + 단가 최적화 시 가능합니다.' },
          ].map((item) => (
            <div key={item.case} className={`bg-white border-2 ${item.color} rounded-2xl p-5 shadow-sm`}>
              <p className="text-xs font-bold text-stone-500 mb-3">{item.case}</p>
              <div className="space-y-2 mb-3">
                <div><p className="text-xs text-stone-400">하루 고객 수</p><p className="font-bold text-stone-800">{item.customers}</p></div>
                <div><p className="text-xs text-stone-400">일 매출</p><p className="font-bold text-stone-800">{item.daily}</p></div>
                <div><p className="text-xs text-stone-400">월 매출 (20일 기준)</p><p className="font-bold text-stone-800">{item.monthly}</p></div>
                <div><p className="text-xs text-stone-400">월 순수익 (고정비 제외)</p><p className="font-extrabold text-stone-900 text-lg">{item.net}</p></div>
              </div>
              <p className="text-[11px] text-stone-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400">* 월세·재료비·보험 등 고정비 약 150~200만원 제외 기준</p>
      </section>

      {/* 고정비 내역 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">1인 네일샵 월 고정비 내역</h2>
        <div className="bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-5 py-3 font-bold">항목</th>
                <th className="text-center px-4 py-3 font-bold">최소</th>
                <th className="text-center px-4 py-3 font-bold">평균</th>
                <th className="text-left px-4 py-3 font-bold">절약 방법</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {[
                { item: '월세·자리세', min: '30만원', avg: '100만원', tip: '공유 작업실로 시작하면 30~80만원으로 낮출 수 있음' },
                { item: '재료비·소모품', min: '30만원', avg: '70만원', tip: '도매 구입 시 30~40% 절감 가능' },
                { item: '공과금 (전기·수도)', min: '5만원', avg: '15만원', tip: 'LED 조명, 절전 장비 사용으로 절감' },
                { item: '통신·마케팅', min: '5만원', avg: '15만원', tip: '인스타·네이버 플레이스는 무료 활용' },
                { item: '보험·기타', min: '5만원', avg: '10만원', tip: '소상공인 단체 보험 활용 시 저렴' },
              ].map((row) => (
                <tr key={row.item} className="hover:bg-stone-50">
                  <td className="px-5 py-3 font-medium text-stone-800">{row.item}</td>
                  <td className="px-4 py-3 text-center text-stone-600">{row.min}</td>
                  <td className="px-4 py-3 text-center font-bold text-stone-800">{row.avg}</td>
                  <td className="px-4 py-3 text-[12px] text-stone-500">{row.tip}</td>
                </tr>
              ))}
              <tr className="bg-stone-50 font-bold">
                <td className="px-5 py-3 text-stone-900">합계</td>
                <td className="px-4 py-3 text-center text-stone-700">75만원~</td>
                <td className="px-4 py-3 text-center text-stone-900">210만원~</td>
                <td className="px-4 py-3" />
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 손익분기점 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">네일샵 창업 손익분기점</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-stone-900 mb-3">공유 작업실 기준</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-stone-500">월 고정비</span><span className="font-bold">75~100만원</span></div>
              <div className="flex justify-between"><span className="text-stone-500">시술 단가 평균</span><span className="font-bold">5만원</span></div>
              <div className="flex justify-between border-t border-stone-100 pt-2 mt-2"><span className="text-stone-700 font-semibold">손익분기 시술 수</span><span className="font-extrabold text-stone-900">월 15~20건</span></div>
              <div className="flex justify-between"><span className="text-stone-700 font-semibold">하루 기준</span><span className="font-extrabold text-green-700">하루 1명만 해도 가능</span></div>
            </div>
          </div>
          <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-stone-900 mb-3">독립 매장 기준</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-stone-500">월 고정비</span><span className="font-bold">150~210만원</span></div>
              <div className="flex justify-between"><span className="text-stone-500">시술 단가 평균</span><span className="font-bold">5만원</span></div>
              <div className="flex justify-between border-t border-stone-100 pt-2 mt-2"><span className="text-stone-700 font-semibold">손익분기 시술 수</span><span className="font-extrabold text-stone-900">월 30~42건</span></div>
              <div className="flex justify-between"><span className="text-stone-700 font-semibold">하루 기준</span><span className="font-extrabold text-amber-700">하루 2명 이상 필요</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 수익 높이는 전략 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">네일샵 수익 높이는 5가지 전략</h2>
        <div className="space-y-3">
          {[
            { num: '01', title: '단가 최적화', desc: '기본 단색 시술보다 아트·연장 등 고단가 시술 비중을 높이면 같은 고객 수로도 매출이 30~50% 증가합니다. 시술 메뉴 구성에 프리미엄 옵션을 추가하세요.' },
            { num: '02', title: '단골 관리 프로그램', desc: '재방문 고객이 신규 고객보다 수익성이 2~3배 높습니다. 방문 10회 무료 시술권, 생일 할인 등 단골 특전을 만들어 재방문율을 높이세요.' },
            { num: '03', title: '인스타그램 포트폴리오', desc: '시술 전후 사진을 꾸준히 올리면 장기적으로 신규 고객 유입 비용이 0원에 가까워집니다. 해시태그는 지역명+네일 조합으로 설정하세요.' },
            { num: '04', title: '손·발 세트 판매', desc: '손 시술만 하는 고객에게 발 관리를 함께 제안하면 객단가를 1.5~2배로 높일 수 있습니다. 세트 할인가를 제시하면 수락률이 올라갑니다.' },
            { num: '05', title: '네이버 예약 시스템 활용', desc: '네이버 플레이스 예약 기능을 활성화하면 노쇼가 줄고 사전 예약이 늘어 하루 스케줄 관리가 쉬워집니다. 리뷰 관리도 함께 하세요.' },
          ].map((item) => (
            <div key={item.num} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4">
              <div className="shrink-0 w-9 h-9 bg-stone-800 text-white rounded-full flex items-center justify-center text-xs font-extrabold">{item.num}</div>
              <div>
                <h3 className="text-sm font-bold text-stone-900 mb-1">{item.title}</h3>
                <p className="text-[13px] text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 내부 링크 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">함께 확인하면 좋은 정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/calculator" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">직접 계산해보기</p>
            <p className="font-bold text-stone-900">네일샵 창업비용 계산기 →</p>
          </Link>
          <Link href="/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">초기 비용 파악</p>
            <p className="font-bold text-stone-900">네일샵 창업비용 총정리 →</p>
          </Link>
          <Link href="/guide" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">창업 절차</p>
            <p className="font-bold text-stone-900">네일샵 창업 단계별 가이드 →</p>
          </Link>
        </div>
      </section>

      <section className="bg-stone-900 rounded-3xl p-10 text-center text-white">
        <h2 className="text-xl font-extrabold mb-2">내 지역에서 실제로 가능한 수익이 궁금하다면?</h2>
        <p className="text-stone-400 mb-5 text-sm">실제 운영 중인 창업자가 직접 답변해드립니다.</p>
        <KakaoButton location="revenue" className="inline-flex items-center gap-2 bg-[#FEE500] hover:bg-[#FADC00] text-[#000000] font-bold px-8 py-3 rounded-full transition-all">
          무료 창업 상담
        </KakaoButton>
      </section>
    </div>
  )
}
