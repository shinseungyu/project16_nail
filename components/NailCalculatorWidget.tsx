'use client'

import { useState } from 'react'

export default function NailCalculatorWidget() {
  const [deposit, setDeposit] = useState(300)
  const [interior, setInterior] = useState(500)
  const [equipment, setEquipment] = useState(300)
  const [materials, setMaterials] = useState(150)
  const [signage, setSignage] = useState(80)
  const [furniture, setFurniture] = useState(150)

  const total = deposit + interior + equipment + materials + signage + furniture

  const level =
    total < 800 ? { label: '소규모 시작', color: 'text-emerald-600', bg: 'bg-emerald-50', msg: '공유 작업실 또는 소형 독립샵 수준입니다.' }
    : total < 1500 ? { label: '일반 1인샵', color: 'text-stone-700', bg: 'bg-stone-100', msg: '평균적인 1인 네일샵 창업 규모입니다.' }
    : { label: '풀 인테리어샵', color: 'text-amber-700', bg: 'bg-amber-50', msg: '인테리어와 장비에 충분히 투자하는 규모입니다.' }

  const items = [
    { label: '보증금', value: deposit, set: setDeposit, min: 0, max: 2000, step: 50, hint: '공유작업실은 0원도 가능' },
    { label: '인테리어', value: interior, set: setInterior, min: 0, max: 2000, step: 50, hint: '셀프 시 100만원 이하도 가능' },
    { label: '장비·기기', value: equipment, set: setEquipment, min: 50, max: 800, step: 50, hint: '중고 활용 시 절반 이하' },
    { label: '재료비 초기 구비', value: materials, set: setMaterials, min: 30, max: 400, step: 10, hint: '젤·팁·소모품' },
    { label: '간판·홍보물', value: signage, set: setSignage, min: 0, max: 200, step: 10, hint: '초기엔 최소화 추천' },
    { label: '가구·소품', value: furniture, set: setFurniture, min: 0, max: 400, step: 50, hint: '테이블·의자·소독기' },
  ]

  return (
    <section className="mb-14">
      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업비용 계산기</p>
      <h2 className="text-2xl font-bold text-stone-900 mb-2">네일샵 창업비용 계산기</h2>
      <p className="text-sm text-stone-400 mb-6">항목별 슬라이더를 조정해 예상 창업비용을 바로 확인하세요.</p>

      <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* 슬라이더 */}
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
                <input
                  type="range" min={min} max={max} step={step} value={value}
                  onChange={(e) => set(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-800"
                />
                <div className="flex justify-between text-xs text-stone-300 mt-0.5">
                  <span>{min}만원</span><span>{max}만원</span>
                </div>
              </div>
            ))}
          </div>

          {/* 결과 */}
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

            <a
              href="/calculator"
              className="mt-1 text-center text-sm text-stone-600 font-semibold hover:underline"
            >
              수익·손익분기점까지 계산하기 →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
