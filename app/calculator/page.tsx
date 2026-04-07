'use client'

import { useState, useMemo } from 'react'

const OPEN_CHAT_URL = '#'

export default function CalculatorPage() {
  // ── 창업비용 계산기 ──
  const [deposit, setDeposit] = useState(300)
  const [interior, setInterior] = useState(500)
  const [equipment, setEquipment] = useState(300)
  const [materials, setMaterials] = useState(150)
  const [signage, setSignage] = useState(80)
  const [furniture, setFurniture] = useState(150)

  // ── 수익 계산기 ──
  const [dailyCustomers, setDailyCustomers] = useState(4)
  const [avgPrice, setAvgPrice] = useState(50000)
  const [workDays, setWorkDays] = useState(22)
  const [rent, setRent] = useState(700000)
  const [fixedMaterials, setFixedMaterials] = useState(400000)
  const [otherCosts, setOtherCosts] = useState(200000)

  const totalStartup = useMemo(
    () => deposit + interior + equipment + materials + signage + furniture,
    [deposit, interior, equipment, materials, signage, furniture]
  )

  const monthlyRevenue = useMemo(
    () => dailyCustomers * avgPrice * workDays,
    [dailyCustomers, avgPrice, workDays]
  )

  const totalFixed = useMemo(
    () => rent + fixedMaterials + otherCosts,
    [rent, fixedMaterials, otherCosts]
  )

  const monthlyNet = useMemo(() => monthlyRevenue - totalFixed, [monthlyRevenue, totalFixed])

  const breakEvenDays = useMemo(() => {
    const dailyRevenue = dailyCustomers * avgPrice
    if (dailyRevenue <= 0) return 0
    return Math.ceil(totalFixed / dailyRevenue)
  }, [dailyCustomers, avgPrice, totalFixed])

  const breakEvenMonths = useMemo(() => {
    if (monthlyNet <= 0) return null
    return Math.ceil((totalStartup * 10000) / monthlyNet)
  }, [totalStartup, monthlyNet])

  const fmt = (n: number) => n.toLocaleString('ko-KR')
  const fmtWon = (n: number) => {
    if (n >= 10000) return `${(n / 10000).toFixed(1)}만원`
    return `${n.toLocaleString()}원`
  }
  const fmtMon = (n: number) => {
    if (n >= 10000) return `${Math.round(n / 10000)}만원`
    return `${n.toLocaleString()}원`
  }

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <p className="text-sm text-pink-500 font-bold mb-2">창업 계산기</p>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-3">1인 네일샵 창업 계산기</h1>
      <p className="text-gray-500 mb-10">창업비용과 예상 수익을 직접 입력해서 손익분기점까지 한번에 계산해보세요.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ── 창업비용 ── */}
        <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-extrabold text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-7 h-7 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-extrabold">1</span>
            창업비용 계산
          </h2>

          <div className="space-y-4">
            {[
              { label: '보증금', unit: '만원', value: deposit, set: setDeposit, min: 0, max: 3000, step: 50 },
              { label: '인테리어', unit: '만원', value: interior, set: setInterior, min: 0, max: 3000, step: 50 },
              { label: '장비·기기', unit: '만원', value: equipment, set: setEquipment, min: 50, max: 1000, step: 50 },
              { label: '재료비 초기 구비', unit: '만원', value: materials, set: setMaterials, min: 30, max: 500, step: 10 },
              { label: '간판·홍보물', unit: '만원', value: signage, set: setSignage, min: 0, max: 300, step: 10 },
              { label: '가구·소품', unit: '만원', value: furniture, set: setFurniture, min: 0, max: 500, step: 50 },
            ].map(({ label, unit, value, set, min, max, step }) => (
              <div key={label}>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-sm text-gray-600 font-medium">{label}</label>
                  <span className="text-sm font-bold text-pink-500">{fmt(value)}{unit}</span>
                </div>
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={value}
                  onChange={(e) => set(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
                />
                <div className="flex justify-between text-xs text-gray-300 mt-0.5">
                  <span>{min}{unit}</span>
                  <span>{max}{unit}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-pink-50 rounded-xl p-4 flex items-center justify-between">
            <span className="text-sm font-bold text-gray-700">총 창업비용</span>
            <span className="text-2xl font-extrabold text-pink-500">{fmt(totalStartup)}만원</span>
          </div>
        </section>

        {/* ── 수익 계산 ── */}
        <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-extrabold text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-7 h-7 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-extrabold">2</span>
            월 수익 계산
          </h2>

          <div className="space-y-4">
            {[
              { label: '하루 고객 수', unit: '명', value: dailyCustomers, set: setDailyCustomers, min: 1, max: 10, step: 1 },
              { label: '월 영업일', unit: '일', value: workDays, set: setWorkDays, min: 10, max: 26, step: 1 },
            ].map(({ label, unit, value, set, min, max, step }) => (
              <div key={label}>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-sm text-gray-600 font-medium">{label}</label>
                  <span className="text-sm font-bold text-pink-500">{value}{unit}</span>
                </div>
                <input
                  type="range" min={min} max={max} step={step} value={value}
                  onChange={(e) => set(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
                />
                <div className="flex justify-between text-xs text-gray-300 mt-0.5">
                  <span>{min}{unit}</span><span>{max}{unit}</span>
                </div>
              </div>
            ))}

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm text-gray-600 font-medium">평균 시술 단가</label>
                <span className="text-sm font-bold text-pink-500">{fmtWon(avgPrice)}</span>
              </div>
              <input
                type="range" min={20000} max={150000} step={5000} value={avgPrice}
                onChange={(e) => setAvgPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
              />
              <div className="flex justify-between text-xs text-gray-300 mt-0.5">
                <span>2만원</span><span>15만원</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-gray-400 mb-3">월 고정비</p>
              {[
                { label: '월세', value: rent, set: setRent, min: 0, max: 3000000, step: 100000 },
                { label: '재료비', value: fixedMaterials, set: setFixedMaterials, min: 100000, max: 1000000, step: 50000 },
                { label: '기타 (보험·통신 등)', value: otherCosts, set: setOtherCosts, min: 0, max: 500000, step: 50000 },
              ].map(({ label, value, set, min, max, step }) => (
                <div key={label} className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-sm text-gray-600 font-medium">{label}</label>
                    <span className="text-sm font-bold text-gray-700">{fmtMon(value)}</span>
                  </div>
                  <input
                    type="range" min={min} max={max} step={step} value={value}
                    onChange={(e) => set(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-400"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center">
              <span className="text-sm text-gray-500">월 매출</span>
              <span className="font-bold text-gray-800">{fmtMon(monthlyRevenue)}</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center">
              <span className="text-sm text-gray-500">월 고정비 합계</span>
              <span className="font-bold text-red-400">-{fmtMon(totalFixed)}</span>
            </div>
            <div className={`rounded-xl p-4 flex justify-between items-center ${monthlyNet >= 0 ? 'bg-pink-50' : 'bg-red-50'}`}>
              <span className="text-sm font-bold text-gray-700">월 순수익</span>
              <span className={`text-2xl font-extrabold ${monthlyNet >= 0 ? 'text-pink-500' : 'text-red-500'}`}>
                {monthlyNet >= 0 ? '' : '-'}{fmtMon(Math.abs(monthlyNet))}
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* ── 손익분기점 ── */}
      <section className="mt-8 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-extrabold text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-7 h-7 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-extrabold">3</span>
          손익분기점 분석
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-xl p-5 text-center">
            <p className="text-xs text-gray-400 mb-2">월 손익분기 영업일</p>
            <p className="text-3xl font-extrabold text-gray-800">{breakEvenDays}일</p>
            <p className="text-xs text-gray-400 mt-1">이 일수 이상 영업해야 이익</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 text-center">
            <p className="text-xs text-gray-400 mb-2">창업비용 회수 기간</p>
            {monthlyNet > 0 ? (
              <>
                <p className="text-3xl font-extrabold text-pink-500">{breakEvenMonths}개월</p>
                <p className="text-xs text-gray-400 mt-1">순수익으로 초기비용 회수</p>
              </>
            ) : (
              <>
                <p className="text-3xl font-extrabold text-red-400">∞</p>
                <p className="text-xs text-red-300 mt-1">현재 구조로는 회수 불가</p>
              </>
            )}
          </div>
          <div className="bg-gray-50 rounded-xl p-5 text-center">
            <p className="text-xs text-gray-400 mb-2">연 예상 순수익</p>
            <p className={`text-3xl font-extrabold ${monthlyNet >= 0 ? 'text-gray-800' : 'text-red-400'}`}>
              {fmtMon(Math.abs(monthlyNet * 12))}
            </p>
            <p className="text-xs text-gray-400 mt-1">월 순수익 × 12개월</p>
          </div>
        </div>

        {monthlyNet < 0 && (
          <div className="mt-4 bg-red-50 border border-red-100 rounded-xl p-4 text-sm text-red-600">
            ⚠️ 현재 입력값 기준으로 월 적자가 예상됩니다. 고객 수 증가, 단가 상향, 또는 고정비 절감을 검토해보세요.
          </div>
        )}
        {monthlyNet >= 0 && monthlyNet < 1000000 && (
          <div className="mt-4 bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-sm text-yellow-700">
            💡 월 순수익이 100만원 미만입니다. 단가 조정이나 고객 수 확대로 수익성을 높여보세요.
          </div>
        )}
        {monthlyNet >= 1000000 && (
          <div className="mt-4 bg-green-50 border border-green-100 rounded-xl p-4 text-sm text-green-700">
            ✅ 안정적인 수익 구조입니다. 단골 고객 확보로 지속 성장을 목표로 하세요.
          </div>
        )}
      </section>

      <section className="mt-8 bg-gradient-to-r from-pink-500 to-pink-400 rounded-3xl p-8 text-center text-white">
        <h2 className="text-xl font-extrabold mb-2">계산 결과, 창업 가능성이 보이시나요?</h2>
        <p className="text-pink-100 mb-5 text-sm">실제 지역과 상황에 맞는 현실적인 계획을 같이 세워드립니다.</p>
        <a href={OPEN_CHAT_URL} className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-full transition-all">
          💬 무료 창업 상담
        </a>
      </section>
    </div>
  )
}
