// 콘솔 내부 계약 (서버·화면 공용, 의존성 없음)

export interface SerpResult {
  position: number
  title: string
  url: string
}

export interface Candidate extends SerpResult {
  score: number
  reasons: string[]
  recommended: boolean
  excluded: boolean
}

export type SerpProvider = 'chrome' | 'dataforseo'

export interface SerpResponse {
  keyword: string
  provider: SerpProvider
  fromCache: boolean
  fetchedAt: string
  candidates: Candidate[]
  /** DataForSEO 를 썼으면 오늘 누적 사용액 */
  spentTodayUsd?: number
}

export interface FaqPair {
  q: string
  a: string
}

export interface ExtractResult {
  url: string
  ok: boolean
  error?: string
  title: string
  metaTitle: string
  metaDescription: string
  text: string
  headings: string[]
  schemaTypes: string[]
  faq: FaqPair[]
}

export interface AnalysisSummary {
  /** 공백 뺀 평균 본문 글자 수 */
  avgLength: number
  commonHeadings: string[]
  topKeywords: { word: string; count: number }[]
  numberLists: string[]
  titlePattern: string
  topTitles: string[]
  comparisonTargets: string[]
  schemaSummary: string
  hasFaq: boolean
  faqQuestions: string[]
  faqThemes: string[]
}

export interface AnalyzeResponse {
  keyword: string
  summary: AnalysisSummary
  perBlog: { url: string; title: string; description: string; length: number; headings: string[]; ok: boolean; error?: string }[]
  /** 유사도 검사용 원문(화면 상태로만 들고 있다가 검수에 넘긴다) */
  sourceTexts: string[]
}

export interface InternalLink {
  href: string
  label: string
  kind: 'hub' | 'qna' | 'blog'
}
