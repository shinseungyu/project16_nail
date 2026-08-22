import Link from 'next/link'

/**
 * 헤어 클러스터 공용 하단 CTA.
 * 원고 규칙: 학원비·수강료 문의는 haircost.kr 외부링크로 넘긴다(자기잠식 방지).
 */
export default function HairCta({ withAcademy = false }: { withAcademy?: boolean }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
      {withAcademy && (
        <p className="text-xs text-stone-500">
          학원비·국비지원 비교는{' '}
          <a
            href="https://haircost.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-700 font-semibold underline decoration-2 decoration-rose-300 underline-offset-2 hover:decoration-rose-600 transition-colors"
          >
            haircost.kr ↗
          </a>
          에서 확인하세요.
        </p>
      )}
    </section>
  )
}
