/**
 * 블로그 글 데이터 계약 — 사이트(템플릿·발행 API)와 자동화 콘솔(tools/blog-console)이 같이 쓴다.
 *
 * 저장 위치(레포 안 JSON 파일, 글 1개 = 파일 1개):
 *   content/blog/drafts/{id}.json   초안·예약 (사이트에 안 나감, Vercel 빌드도 건너뜀)
 *   content/blog/posts/{id}.json    발행본 (빌드 때 정적 페이지로 만들어짐)
 *
 * ⚠️ 이 파일은 의존성 없이 유지한다. 콘솔이 레포 밖에서 import 한다.
 */

export type BlogStatus = 'draft' | 'scheduled' | 'published'

export interface BlogCover {
  /** /images/blog/... (사이트에 올린 이미지) 또는 https 주소 */
  src: string
  alt: string
  width?: number
  height?: number
}

/** 콘솔이 보내는 원고 내용(언어는 한국어 고정) */
export interface BlogContent {
  title: string
  /** <title> 용. 비우면 title 을 쓴다 */
  seoTitle?: string
  /** meta description = 목록 카드 요약 */
  description: string
  /** 영문 소문자-하이픈. URL = /blog/{slug} */
  slug: string
  category: string
  tags: string[]
  /** 목표 키워드(내부 관리용 — 화면에는 안 나감) */
  keyword?: string
  /** 본문 마크다운 (정해진 틀: ## 핵심 요약 / 본문 H2 / ## 자주 묻는 질문 / ## 마치며) */
  markdown: string
  cover?: BlogCover
}

export interface BlogPost extends BlogContent {
  id: string
  status: BlogStatus
  /** 저장할 때마다 +1. 옛 버전으로 덮어쓰려 하면 API 가 409 로 막는다 */
  version: number
  createdAt: string
  updatedAt: string
  publishedAt?: string
  scheduledAt?: string
}

/** 목록용 요약 */
export type BlogPostSummary = Pick<
  BlogPost,
  'id' | 'slug' | 'title' | 'status' | 'version' | 'category' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'scheduledAt'
>

export function summarize(p: BlogPost): BlogPostSummary {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    status: p.status,
    version: p.version,
    category: p.category,
    createdAt: p.createdAt,
    updatedAt: p.updatedAt,
    publishedAt: p.publishedAt,
    scheduledAt: p.scheduledAt,
  }
}
