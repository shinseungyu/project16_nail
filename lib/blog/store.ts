/**
 * 발행본 읽기 (빌드 시점, 서버 전용) — content/blog/posts/*.json
 * 페이지·사이트맵·헤더 메뉴가 쓴다. 초안 폴더는 절대 읽지 않는다.
 */
import fs from 'node:fs'
import path from 'node:path'
import type { BlogPost } from './types'

const DIR = path.join(process.cwd(), 'content', 'blog', 'posts')
let cache: BlogPost[] | null = null

function readAll(): BlogPost[] {
  let files: string[] = []
  try {
    files = fs.readdirSync(DIR).filter((f) => f.endsWith('.json'))
  } catch {
    return []
  }
  const posts: BlogPost[] = []
  for (const f of files) {
    try {
      const p = JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8')) as BlogPost
      if (p?.status === 'published' && p.slug && p.title) posts.push(p)
    } catch {
      console.warn(`[blog] 읽을 수 없는 글 파일: ${f}`)
    }
  }
  return posts.sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''))
}

/** 발행일 최신순 */
export function getPublishedPosts(): BlogPost[] {
  if (process.env.NODE_ENV !== 'production') return readAll()
  return (cache ??= readAll())
}

export function getPublishedPost(slug: string): BlogPost | undefined {
  return getPublishedPosts().find((p) => p.slug === slug)
}

/** 같은 카테고리 먼저, 모자라면 최신글로 채운다 */
export function relatedPosts(post: BlogPost, n = 4): BlogPost[] {
  const others = getPublishedPosts().filter((p) => p.id !== post.id)
  const same = others.filter((p) => p.category === post.category)
  const rest = others.filter((p) => p.category !== post.category)
  return [...same, ...rest].slice(0, n)
}
