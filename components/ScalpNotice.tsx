import Link from 'next/link'

/**
 * 두피 클러스터 공용 고지.
 * 원고 금지 표현: "탈모 치료", "발모 효과", "모발 재생 보장".
 * 미용실은 의료기관이 아니며 의료기기·의약품을 사용할 수 없다 — 전 페이지 명시 필수.
 */
export function MedicalScopeNotice({ variant = 'default' }: { variant?: 'default' | 'hairloss' }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
      <p className="text-xs font-extrabold text-amber-700 mb-2 tracking-wide">먼저 알아두세요</p>
      <p className="text-[13px] text-amber-900 leading-relaxed">
        <strong>미용실은 의료기관이 아닙니다.</strong> 의료기기·의약품을 사용할 수 없으며{' '}
        <strong>탈모를 치료하지 않습니다.</strong>{' '}
        {variant === 'hairloss'
          ? '이 페이지는 미용실이 할 수 있는 관리의 범위를 설명한 것이며, 의료적 판단을 대체하지 않습니다.'
          : '탈모가 진행 중이거나 두피에 염증·진물·심한 가려움이 있다면 피부과 진료가 먼저입니다.'}
      </p>
    </div>
  )
}

/** 하단 — 병원에 가야 할 신호. 원고 필수 항목. */
export function SeeDoctorSignals() {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-stone-900 mb-4">이런 신호가 있으면 병원으로</h2>
      <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
        <ul className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed">
          {[
            '머리를 감을 때 빠지는 양이 눈에 띄게 늘었다',
            '가르마나 정수리가 넓어 보인다',
            '앞머리 라인이 뒤로 밀린다',
            '원형으로 빠지는 부위가 있다',
            '두피에 염증·진물·심한 가려움이 있다',
          ].map((t) => (
            <li key={t} className="flex gap-2">
              <span className="text-rose-500 shrink-0 font-bold">!</span>
              {t}
            </li>
          ))}
        </ul>
        <p className="text-xs text-stone-500 mt-3 leading-relaxed">
          탈모는 진행 속도가 빠를수록 조기 대응이 중요합니다. 관리로 시간을 보내는 사이 진행될 수 있습니다.
        </p>
      </div>
    </section>
  )
}

/** 하단 CTA — 원고 지정: 이용사 자격증 · 미용실 창업비용 */
export function ScalpCta() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/hair/license" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
          <p className="text-xs font-semibold text-stone-400 mb-1">자격</p>
          <p className="font-bold text-stone-900">이용사 자격증 →</p>
        </Link>
        <Link href="/hair/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
          <p className="text-xs font-semibold text-stone-400 mb-1">초기 자금</p>
          <p className="font-bold text-stone-900">미용실 창업비용 →</p>
        </Link>
        <Link href="/hair/revenue" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
          <p className="text-xs font-semibold text-stone-400 mb-1">수익</p>
          <p className="font-bold text-stone-900">헤어 수익 구조 →</p>
        </Link>
      </div>
    </section>
  )
}
