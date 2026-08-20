import Link from 'next/link'
import { QNA_ITEMS, QNA_SECTIONS, isPublished } from '@/data/qna'
import type { SectionKey } from '@/data/qna'

type Props = {
  /** 노출할 Q&A 섹션 (첫 번째 섹션이 "전체 보기" 앵커가 된다) */
  sections: SectionKey[]
  /** 최대 노출 개수 */
  limit?: number
  /**
   * 목록 회전 오프셋.
   * 같은 섹션을 쓰는 페이지가 여러 개일 때 서로 다른 질문이 걸리도록 분산시킨다.
   * FAQ 상세 90편이 /qna 클러스터 밖에서 내부링크를 하나도 못 받아
   * 색인이 밀리던 문제(GSC: 발견됨-색인 생성 안 됨)를 푸는 것이 목적이다.
   */
  offset?: number
  title?: string
}

/** 클러스터 페이지 → FAQ 상세로 되돌아가는 내부링크 블록 */
export default function RelatedQna({ sections, limit = 6, offset = 0, title = '자주 묻는 질문' }: Props) {
  // 섹션별로 나눠 담은 뒤 라운드로빈으로 뽑는다.
  // 그냥 이어붙이면 QNA_ITEMS가 섹션 순으로 정렬돼 있어 앞 섹션만 전부 차지한다.
  const buckets = sections
    .map((key) => {
      const items = QNA_ITEMS.filter((i) => i.section === key && isPublished(i.slug))
      if (items.length === 0) return items
      const start = ((offset % items.length) + items.length) % items.length
      return [...items.slice(start), ...items.slice(0, start)]
    })
    .filter((b) => b.length > 0)
  if (buckets.length === 0) return null

  const picked: typeof QNA_ITEMS = []
  for (let round = 0; picked.length < limit; round++) {
    const before = picked.length
    for (const b of buckets) {
      if (picked.length >= limit) break
      if (round < b.length) picked.push(b[round])
    }
    if (picked.length === before) break // 더 뽑을 게 없다
  }
  const anchor = sections[0]
  const sectionLabel = QNA_SECTIONS.find((s) => s.key === anchor)?.label ?? '자주 묻는 질문'

  return (
    <section className="mb-10">
      <div className="flex items-baseline justify-between gap-3 mb-3">
        <h2 className="text-base font-extrabold text-stone-800">{title}</h2>
        <Link
          href={`/qna#${anchor}`}
          aria-label={`${sectionLabel} 질문 전체 보기`}
          className="text-[13px] font-bold text-blue-700 hover:underline shrink-0"
        >
          전체 보기 →
        </Link>
      </div>
      <ul className="divide-y divide-stone-100 border-y border-stone-100">
        {picked.map((q) => (
          <li key={q.slug}>
            <Link
              href={`/qna/${q.slug}`}
              className="group flex items-center gap-3 py-3 hover:bg-stone-50 transition-colors"
            >
              <span className="text-stone-300 shrink-0 text-sm">Q</span>
              <span className="text-[14px] text-stone-700 font-medium leading-snug break-keep group-hover:text-stone-900">
                {q.question}
              </span>
              <span className="ml-auto shrink-0 text-stone-300 group-hover:text-stone-700 transition-colors">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
