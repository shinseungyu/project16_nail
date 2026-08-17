import Link from 'next/link'
import { DISCLAIMER, MEDICAL_NOTICE, officialSources } from '@/data/semi-permanent'

/**
 * 반영구화장 클러스터 공용 고지 블록.
 * 원고의 작성 원칙: 모든 페이지에 (1) 법 시점 명시 (2) 공식 확인처 (3) 의료기관 진료 안내.
 */

/** 상단 — 법적 지위 한 줄 요약. 모든 페이지 첫 화면에 배치한다. */
export function LawStatusBanner({ compact = false }: { compact?: boolean }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
      <p className="text-xs font-extrabold text-amber-700 mb-2 tracking-wide">2026년 8월 기준 · 제도 과도기</p>
      <p className="text-[13px] text-amber-900 leading-relaxed">
        2025년 5월 <strong>대법원 판례가 변경</strong>됐고, 2025년 10월 <strong>「문신사법」이 공포</strong>됐습니다.{' '}
        <strong>2027년 10월 29일</strong>부터 국가시험 면허를 받은 문신사만 시술할 수 있습니다. 다만{' '}
        <strong>시행 전인 지금은 종전 법령이 그대로 적용</strong>되며, 문신사법에 따른 면허·등록의 효력은 아직
        발생하지 않았습니다.
      </p>
      {!compact && (
        <p className="text-[13px] text-amber-900 leading-relaxed mt-2">
          자세한 내용은{' '}
          <Link href="/semi-permanent/legal" className="font-bold underline underline-offset-2">
            반영구화장 자격과 문신사법
          </Link>
          에서 정리했습니다.
        </p>
      )}
    </div>
  )
}

/** 하단 — 출처 + 면책 + 의료 안내. */
export function SourcesAndDisclaimer({ withSources = true }: { withSources?: boolean }) {
  return (
    <section className="mb-10">
      {withSources && (
        <>
          <h2 className="text-base font-bold text-stone-700 mb-3">출처</h2>
          <ul className="space-y-1.5 text-xs text-blue-700 mb-4">
            {officialSources.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
      <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-2">
        <p className="text-[11px] text-stone-500 leading-relaxed">{DISCLAIMER}</p>
        <p className="text-[11px] text-stone-500 leading-relaxed">{MEDICAL_NOTICE}</p>
      </div>
    </section>
  )
}

/** 하단 — 다른 업종으로 보내는 내부링크. 원고 CTA의 /eyelash·/waxing은 미개설이라 제외. */
export function OtherCategories() {
  return (
    <section>
      <p className="text-xs font-semibold text-stone-400 mb-3">공중위생관리법이 적용되는 미용업 창업도 함께 보세요</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/skincare"
          className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"
        >
          <p className="text-xs font-semibold text-stone-400 mb-1">미용사(피부) 면허</p>
          <p className="font-bold text-stone-900">피부관리샵 창업 →</p>
        </Link>
        <Link
          href="/makeup"
          className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"
        >
          <p className="text-xs font-semibold text-stone-400 mb-1">미용사(메이크업) 면허</p>
          <p className="font-bold text-stone-900">메이크업샵 창업 →</p>
        </Link>
        <Link
          href="/"
          className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"
        >
          <p className="text-xs font-semibold text-stone-400 mb-1">미용사(네일) 면허</p>
          <p className="font-bold text-stone-900">네일샵 창업 →</p>
        </Link>
      </div>
    </section>
  )
}
