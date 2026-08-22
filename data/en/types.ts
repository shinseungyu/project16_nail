/**
 * 영문(/en) 페이지 공통 콘텐츠 모델.
 *
 * 한국어 시술 페이지가 쓰는 블록 모델(NailService)과 같은 발상이지만,
 * 영문판은 "시술 상세"가 아니라 "가이드 아티클"이라 표/노트/FAQ 비중이 다르다.
 * 그래서 타입을 재사용하지 않고 별도로 둔다.
 */

export type EnBlock =
  | { t: 'h2'; text: string; id: string }
  | { t: 'h3'; text: string }
  | { t: 'p'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'table'; caption?: string; head: string[]; rows: string[][]; note?: string }
  | { t: 'note'; tone?: 'info' | 'warn'; title?: string; text: string }

export type EnFaq = { q: string; a: string }

export type EnRelated = { href: string; label: string }

export type EnPage = {
  /** '/en/...' 전체 경로. canonical·hreflang·JSON-LD가 전부 이 값에서 파생된다. */
  path: string
  /** <title>. 60자 안팎 */
  title: string
  h1: string
  description: string
  keywords: string[]
  /** 히어로 상단 카테고리 라벨 */
  category: string
  /** 'August 20, 2026' 형식 — 기획서 지정 */
  updated: string
  /** ISO. Article 스키마용 */
  updatedIso: string
  /** 리드 문단. 1~2문장으로 결론부터 */
  lead: string
  /**
   * 공개 단계. 생략하면 0(=즉시 공개).
   * 한 번에 수십 페이지를 사이트맵에 올리면 대량 생성 콘텐츠로 읽히므로
   * 원고는 미리 다 쓰되 공개는 EN_RELEASED_STAGE 로 나눠서 연다.
   * 미공개 페이지는 sitemap·허브에서 빠지고 noindex 가 붙는다.
   */
  stage?: number
  blocks: EnBlock[]
  faq: EnFaq[]
  related: EnRelated[]
}
