'use client'

import { useState } from 'react'

type Preset = { name: string; range: string; values: [number, number, number, number, number, number] }

const PRESETS: Preset[] = [
  { name: '출장 전문', range: '300~800만원', values: [0, 0, 80, 300, 0, 60] },
  { name: '공유샵·소형', range: '800~1,500만원', values: [200, 150, 200, 350, 50, 150] },
  { name: '일반 1인 매장', range: '1,500~2,500만원', values: [700, 500, 300, 450, 100, 300] },
]

export default function MakeupCalculatorWidget() {
  const [deposit, setDeposit] = useState(400)
  const [interior, setInterior] = useState(300)
  const [equipment, setEquipment] = useState(150)
  const [materials, setMaterials] = useState(400)
  const [signage, setSignage] = useState(50)
  const [furniture, setFurniture] = useState(200)

  const setAll = (v: [number, number, number, number, number, number]) => {
    setDeposit(v[0]); setInterior(v[1]); setEquipment(v[2]); setMaterials(v[3]); setSignage(v[4]); setFurniture(v[5])
  }

  const total = deposit + interior + equipment + materials + signage + furniture

  const level =
    total < 800 ? { label: '출장 전문', color: 'text-emerald-600', bg: 'bg-emerald-50', msg: '매장 없이 키트만으로 시작하는 규모입니다.' }
    : total < 1500 ? { label: '공유샵·소형', color: 'text-stone-700', bg: 'bg-stone-100', msg: '리허설·상담 공간을 갖춘 소형 규모입니다.' }
    : { label: '일반 1인 매장', color: 'text-amber-700', bg: 'bg-amber-50', msg: '고정 고객을 위한 매장형 규모입니다.' }

  const items = [
    { label: '보증금', value: deposit, set: setDeposit, min: 0, max: 3000, step: 50, hint: '출장형은 0원' },
    { label: '인테리어', value: interior, set: setInterior, min: 0, max: 2000, step: 50, hint: '조명이 핵심' },
    { label: '장비·기기', value: equipment, set: setEquipment, min: 30, max: 800, step: 10, hint: '조명·미러·키트' },
    { label: '초기 재료비', value: materials, set: setMaterials, min: 150, max: 1200, step: 50, hint: '색조 제품군 (가장 큰 비중)' },
    { label: '간판·홍보물', value: signage, set: setSignage, min: 0, max: 300, step: 10, hint: '포트폴리오 촬영에 투자' },
    { label: '가구·소품', value: furniture, set: setFurniture, min: 0, max: 600, step: 50, hint: '메이크업 체어·조명 스탠드' },
  ]

  return (
    <section id="calculator" className="mb-14 scroll-mt-20">
      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업비용 계산기</p>
      <h2 className="text-2xl font-bold text-stone-900 mb-2">메이크업샵 창업비용 계산기</h2>
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
            <a href="/makeup/revenue" className="mt-1 text-center text-sm text-stone-600 font-semibold hover:underline">수익·손익분기점까지 계산하기 →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
