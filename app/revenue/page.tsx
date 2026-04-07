import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '1인 네일샵 예상 수익 계산 2026 | 월 순수익 현실적으로 보기',
  description: '1인 네일샵 월 수익을 시술 단가와 고객 수 기준으로 계산해보세요. 손익분기점과 순수익 현실 가이드를 제공합니다.',
  alternates: { canonical: '/revenue' },
}

const OPEN_CHAT_URL = '#'

export default function RevenuePage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <p className="text-sm text-pink-500 font-bold mb-2">수익 가이드</p>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-3">1인 네일샵 예상 수익</h1>
      <p className="text-gray-500 mb-10">시술 단가와 하루 고객 수를 기준으로 현실적인 월 수익을 계산해드립니다.</p>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">시술별 평균 단가</h2>
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-pink-50 text-gray-600">
              <tr>
                <th className="text-left px-5 py-3 font-bold">시술 종류</th>
                <th className="text-center px-4 py-3 font-bold">소요 시간</th>
                <th className="text-center px-4 py-3 font-bold">평균 단가</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { type: '기본 젤네일 (단색)', time: '60~80분', price: '3~5만원' },
                { type: '젤네일 + 아트', time: '80~120분', price: '5~8만원' },
                { type: '아크릴 연장', time: '90~120분', price: '6~10만원' },
                { type: '젤 제거', time: '30~40분', price: '1~2만원' },
                { type: '손발 케어', time: '40~60분', price: '2~4만원' },
                { type: '풀 세트 (연장+아트)', time: '120~150분', price: '8~15만원' },
              ].map((row) => (
                <tr key={row.type} className="hover:bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-800">{row.type}</td>
                  <td className="px-4 py-3 text-center text-gray-600">{row.time}</td>
                  <td className="px-4 py-3 text-center font-bold text-pink-500">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">월 수익 시뮬레이션</h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { case: '보수적 케이스', customers: '하루 3명', daily: '15만원', monthly: '300만원', net: '150~200만원', color: 'border-gray-200' },
            { case: '평균 케이스', customers: '하루 5명', daily: '25만원', monthly: '500만원', net: '250~350만원', color: 'border-pink-200' },
            { case: '적극 케이스', customers: '하루 7명', daily: '35만원', monthly: '700만원', net: '400~500만원', color: 'border-yellow-200' },
          ].map((item) => (
            <div key={item.case} className={`bg-white border-2 ${item.color} rounded-2xl p-5 shadow-sm`}>
              <p className="text-xs font-bold text-gray-500 mb-3">{item.case}</p>
              <p className="text-xs text-gray-400">하루 고객 수</p>
              <p className="font-bold text-gray-800 mb-1">{item.customers}</p>
              <p className="text-xs text-gray-400">일 매출</p>
              <p className="font-bold text-gray-800 mb-1">{item.daily}</p>
              <p className="text-xs text-gray-400">월 매출 (20일 기준)</p>
              <p className="font-bold text-gray-800 mb-1">{item.monthly}</p>
              <p className="text-xs text-gray-400">월 순수익 (비용 제외)</p>
              <p className="font-extrabold text-pink-500 text-lg">{item.net}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">* 월세·재료비·보험 등 고정비 약 150~200만원 제외 기준</p>
      </section>

      <section className="bg-gradient-to-r from-pink-500 to-pink-400 rounded-3xl p-8 text-center text-white">
        <h2 className="text-xl font-extrabold mb-2">내 지역에서 실제로 가능한 수익이 궁금하다면?</h2>
        <p className="text-pink-100 mb-5 text-sm">실제 운영 중인 창업자가 직접 답변해드립니다.</p>
        <a href={OPEN_CHAT_URL} className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-full transition-all">
          💬 무료 창업 상담
        </a>
      </section>
    </div>
  )
}
