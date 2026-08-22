import Link from 'next/link'

/**
 * FAQ 내부링크 공용 부품.
 *
 * /qna 허브, /qna/[slug] 상세, RelatedQna 세 곳이 같은 마크업을 각자 복사해 쓰고 있었고,
 * 전부 stone-300~700 회색이라 "링크"로 읽히지 않았다. 여기로 모아 브랜드 색(rose)을 준다.
 *
 * 색 규칙 — 대비 때문에 정한 것이라 임의로 바꾸지 말 것:
 *   · 로즈는 **액센트**에만 쓴다 (배지 / 좌측바 / 화살표 / 테두리 / 밑줄).
 *   · 읽는 텍스트는 stone-800~900으로 둔다.
 *   · 로즈 **텍스트**는 흰 배경 위에서만 쓴다 (rose-600/#E11D48 on white = 4.70:1, AA 통과).
 *     rose-600을 rose-50(#FFF1F2) 위에 올리면 4.28:1로 AA에 미달한다.
 *   · 흰 글자는 rose-500이 아니라 rose-600(brand-dark) 위에만 (2.69:1 → 4.70:1).
 *
 * 색만으로 구분하지 않는다 — 굵기·화살표·호버 밑줄을 같이 쓴다.
 *
 * ─────────────────────────────────────────────────────────────
 * 본문 안에 들어가는 **인라인 텍스트 링크**는 여기가 아니라 각 페이지에 직접 쓰는데,
 * 색이 하나 다르다. 사이트 전체 규칙은 이렇다:
 *
 *   text-rose-700 font-semibold underline decoration-2 decoration-rose-300
 *   underline-offset-2 hover:decoration-rose-600 transition-colors
 *
 * brand-dark(rose-600)가 아니라 **rose-700**인 이유: 인라인 링크는 흰 배경뿐 아니라
 * stone-50·emerald-50 같은 콜아웃 박스 안에도 들어간다. rose-600은 그 배경들에서
 * 4.3~4.5:1로 AA 경계에 걸리고, rose-700은 4.63:1 이상으로 전부 통과한다.
 * 그리고 본문 링크는 **밑줄을 상시 노출**한다 — 문장 속에서는 색만으로 부족하다.
 * (2026-08 이전에는 text-blue-700 + hover:underline 이라 톤도 어긋나고 색 의존이었다.)
 */

/** 질문 한 줄 (Q 제목 → ). 허브에 93개가 깔리므로 행 높이를 키우지 않는다. */
export function QnaLinkRow({ href, question }: { href: string; question: string }) {
  return (
    <Link
      href={href}
      className="group relative flex items-center gap-3 py-3.5 px-2 hover:bg-brand-light transition-colors"
    >
      {/* 좌측 액센트바 — 호버 시에만 나타난다 */}
      <span
        className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity"
        aria-hidden
      />
      {/* 장식용 배지. 질문 텍스트가 바로 뒤에 오므로 스크린리더에서는 뺀다 */}
      <span
        className="shrink-0 w-5 h-5 rounded-full bg-brand-light text-brand-dark text-[11px] font-extrabold flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-colors"
        aria-hidden
      >
        Q
      </span>
      <span className="text-[14px] text-stone-800 font-semibold leading-snug break-keep group-hover:text-stone-900 group-hover:underline underline-offset-4 decoration-2 decoration-brand">
        {question}
      </span>
      <span
        className="ml-auto shrink-0 text-brand font-bold group-hover:text-brand-dark group-hover:translate-x-0.5 transition-all"
        aria-hidden
      >
        →
      </span>
    </Link>
  )
}

/** 원고 미작성분 — 링크를 걸면 404가 되므로 제목만 노출한다. */
export function QnaPendingRow({ question }: { question: string }) {
  return (
    <div className="flex items-center gap-3 py-3.5 px-2">
      <span
        className="shrink-0 w-5 h-5 rounded-full bg-stone-100 text-stone-400 text-[11px] font-extrabold flex items-center justify-center"
        aria-hidden
      >
        Q
      </span>
      <span className="text-[14px] text-stone-400 leading-snug break-keep">{question}</span>
      <span className="ml-auto shrink-0 text-[10px] font-bold text-stone-500 bg-stone-100 rounded-full px-2 py-0.5">
        준비 중
      </span>
    </div>
  )
}

/** 카드형 내부링크 (관련 정보 · 업종별 창업 정보 · 카테고리 바로가기) */
export function QnaCardLink({
  href,
  label,
  badge,
  icon,
  anchor = false,
}: {
  href: string
  label: string
  /** 우측에 숫자 등을 붙일 때. 없으면 화살표가 들어간다 */
  badge?: string | number
  icon?: string
  /** 같은 페이지 앵커(#)면 Link 대신 a 를 쓴다 */
  anchor?: boolean
}) {
  const cls =
    'group flex items-center justify-between gap-2 bg-white border border-stone-200 rounded-xl px-4 py-3.5 hover:border-brand hover:bg-brand-light transition-colors'
  const inner = (
    <>
      <span className="text-[13.5px] font-bold text-stone-800 group-hover:text-stone-900 flex items-center gap-2 break-keep">
        {icon ? <span aria-hidden>{icon}</span> : null}
        {label}
      </span>
      {badge !== undefined ? (
        <span className="shrink-0 text-[11px] font-extrabold text-white bg-brand-dark rounded-full min-w-[1.25rem] text-center px-1.5 py-0.5">
          {badge}
        </span>
      ) : (
        <span
          className="shrink-0 text-brand font-bold group-hover:text-brand-dark group-hover:translate-x-0.5 transition-all"
          aria-hidden
        >
          →
        </span>
      )}
    </>
  )

  if (anchor) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  )
}

/**
 * "전체 보기 →" 류의 텍스트 링크.
 * 기존에는 text-blue-700 이라 사이트 톤(rose)과 어긋나 있었다.
 * 흰 배경 위에서만 쓰므로 로즈 텍스트를 써도 대비가 확보된다.
 */
export function QnaSeeAllLink({
  href,
  label,
  className = '',
  ariaLabel,
}: {
  href: string
  label: string
  className?: string
  ariaLabel?: string
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`group inline-flex items-center gap-1 font-extrabold text-brand-dark underline decoration-2 decoration-brand/50 underline-offset-4 hover:decoration-brand-dark transition-colors ${className}`}
    >
      {label}
      <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden>
        →
      </span>
    </Link>
  )
}
