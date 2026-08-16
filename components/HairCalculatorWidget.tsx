'use client'

import { useState } from 'react'

type Preset = { name: string; range: string; values: [number, number, number, number, number, number] }

const PRESETS: Preset[] = [
  { name: '소형 1체어', range: '800~1,500만원', values: [500, 300, 200, 80, 100, 120] },
  { name: '일반 1인샵 (2체어)', range: '1,500~3,000만원', values: [1000, 800, 400, 150, 200, 250] },
  { name: '바버샵 (3체어+)', range: '3,000~6,000만원', values: [2000, 1500, 800, 250, 300, 450] },
]

export default function HairCalculatorWidget() {
  const [deposit, setDeposit] = useState(1000)
  const [interior, setInterior] = useState(800)
  const [equipment, setEquipment] = useState(400)
  const [materials, setMaterials] = useState(150)
  const [signage, setSignage] = useState(200)
  const [furniture, setFurniture] = useState(250)

  const setAll = (v: [number, number, number, number, number, number]) => {
    setDeposit(v[0]); setInterior(v[1]); setEquipment(v[2]); setMaterials(v[3]); setSignage(v[4]); setFurniture(v[5])
  }

  const total = deposit + interior + equipment + materials + signage + furniture

  const level =
    total < 1500 ? { label: '소형 1체어', color: 'text-emerald-600', bg: 'bg-emerald-50', msg: '손실 규모가 작고 회수가 빠른 규모입니다.' }
    : total < 3200 ? { label: '일반 2체어', color: 'text-stone-700', bg: 'bg-stone-100', msg: '평균적인 1인 바버샵 창업 규모입니다.' }
    : { label: '바버샵 3체어+', color: 'text-amber-700', bg: 'bg-amber-50', msg: '콘셉트 바버샵·직원 고용을 염두에 둔 규모입니다.' }

  const items = [
    { label: '보증금', value: deposit, set: setDeposit, min: 0, max: 5000, step: 100, hint: '1층 선호도 높은 유일한 미용 업종' },
    { label: '인테리어', value: interior, set: setInterior, min: 0, max: 3500, step: 50, hint: '바버샵 콘셉트는 비중이 큼' },
    { label: '장비·기기', value: equipment, set: setEquipment, min: 100, max: 1500, step: 50, hint: '체어·샴푸대·클리퍼·소독기' },
    { label: '초기 재료비', value: materials, set: setMaterials, min: 50, max: 500, step: 10, hint: '염모제·펌제·스타일링 제품' },
    { label: '간판·홍보물', value: signage, set: setSignage, min: 30, max: 500, step: 10, hint: '워크인 유입 있어 간판 효율 높음' },
    { label: '가구·소품', value: furniture, set: setFurniture, min: 50, max: 800, step: 50, hint: '대기 의자·수납·거울' },
  ]

  return (
    <section id="calculator" className="mb-14 scroll-mt-20">
      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업비용 계산기</p>
      <h2 className="text-2xl font-bold text-stone-900 mb-2">이용원·바버샵 창업비용 계산기</h2>
      <p className="text-sm text-stone-400 mb-4">항목별 슬라이더를 조정해 예상 창업비용을 바로 확인하세요.</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {PRESETS.map((p) => (
          <button key={p.name} type="button" onClick={() => setAll(p.values)} className="text-left bg-white border border-stone-200 rounded-xl px-4 py-2 hover:border-stone-400 transition-colors">
            <span className="block text-sm font-bold text-stone-800">{p.name}</span>
            <span className="block text-xs text-stone-400">{p.range}</span>
          </button>
        ))}
      </div>

      <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            {items.map(({ label, value, set, min, max, step, hint }) => (
              <div key={label}>
                <div className="flex justify-between mb-1">
                  <div>
                    <span className="text-sm font-medium text-stone-700">{label}</span>
                    <span className="text-xs text-stone-300 ml-2">{hint}</span>
                  </div>
                  <span className="text-sm font-bold text-stone-700">{value.toLocaleString()}만원</span>
                </div>
                <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-800" />
                <div className="flex justify-between text-xs text-stone-300 mt-0.5"><span>{min.toLocaleString()}만원</span><span>{max.toLocaleString()}만원</span></div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center gap-3">
            {items.map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center py-1.5 border-b border-stone-50">
                <span className="text-sm text-stone-500">{label}</span>
                <span className="text-sm font-bold text-stone-700">{value.toLocaleString()}만원</span>
              </div>
            ))}
            <div className={`mt-2 rounded-xl p-5 ${level.bg}`}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-base font-bold text-stone-700">총 창업비용</span>
                <span className={`text-3xl font-extrabold ${level.color}`}>{total.toLocaleString()}만원</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-white ${level.color}`}>{level.label}</span>
                <span className="text-xs text-stone-400">{level.msg}</span>
              </div>
            </div>
            <a href="/hair/revenue" className="mt-1 text-center text-sm text-stone-600 font-semibold hover:underline">수익·손익분기점까지 계산하기 →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
