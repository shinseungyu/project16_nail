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

/** 지면 특성 — 상위 목록 말고 검색 화면에 같이 뜨는 것들 (검색의도·빈틈 판정 근거) */
export interface SerpFeatures {
  hasAiOverview: boolean
  hasFeaturedSnippet: boolean
  /** 다른 사람들이 함께 찾는 질문(PAA) */
  peopleAlsoAsk: string[]
  /** 관련 검색어 */
  relatedSearches: string[]
}

export const EMPTY_FEATURES: SerpFeatures = { hasAiOverview: false, hasFeaturedSnippet: false, peopleAlsoAsk: [], relatedSearches: [] }

/** 검색 1회 결과 = 상위 목록 + 지면 특성 */
export interface SerpFetch {
  results: SerpResult[]
  features: SerpFeatures
}

export interface SerpResponse {
  keyword: string
  provider: SerpProvider
  fromCache: boolean
  fetchedAt: string
  candidates: Candidate[]
  features: SerpFeatures
  /** 지면 강도(이 키워드로 이길 수 있나) — 상위 목록 전체 기준 */
  strength: import('./strength').SerpStrength
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
  /** 지배적 검색 의도 */
  intent: import('./intent').SearchIntent
  /** 공통 주제 / 빈틈(차별화 후보) */
  gap: import('./gap').GapAnalysis
  perBlog: { url: string; title: string; description: string; length: number; headings: string[]; ok: boolean; error?: string }[]
  /** 유사도 검사용 원문(화면 상태로만 들고 있다가 검수에 넘긴다) */
  sourceTexts: string[]
}

export interface InternalLink {
  href: string
  label: string
  kind: 'hub' | 'qna' | 'blog'
}
