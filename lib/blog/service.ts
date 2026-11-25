/**
 * 발행 API 의 글 작업 (서버 전용) — 콘텐츠 스튜디오(PGC)와 같은 흐름:
 *   만들기(초안) → 수정(version 확인, 옛 버전이면 409) → 발행/예약(검증 실패면 422) → 내리기
 *
 * 초안·예약 = content/blog/drafts/{id}.json, 발행본 = content/blog/posts/{id}.json
 */
import crypto from 'node:crypto'
import type { BlogContent, BlogPost, BlogPostSummary } from './types'
import { summarize } from './types'
import { blockingIssues, validatePost, SLUG_RE } from './validate'
import { CATEGORY_KEYS } from './config'
import { getBackend, type Backend } from './repo'

export const DRAFTS_DIR = 'content/blog/drafts'
export const POSTS_DIR = 'content/blog/posts'
export const MEDIA_DIR = 'public/images/blog'

export class BlogApiError extends Error {
  constructor(public status: number, message: string, public details?: unknown) {
    super(message)
  }
}

function be(): Backend {
  const b = getBackend()
  if (!b)
    throw new BlogApiError(
      503,
      '저장소가 설정되지 않았습니다. Vercel 환경변수 GITHUB_TOKEN 을 넣거나(운영), 내 PC 테스트면 BLOG_STORAGE=fs 로 실행하세요.'
    )
  return b
}

const now = () => new Date().toISOString()
const newId = () => `p${Date.now().toString(36)}${crypto.randomBytes(2).toString('hex')}`
const fileOf = (dir: string, id: string) => `${dir}/${id}.json`
const serialize = (p: BlogPost) => JSON.stringify(p, null, 2) + '\n'

function parse(text: string): BlogPost | null {
  try {
    const p = JSON.parse(text) as BlogPost
    return p && typeof p.id === 'string' ? p : null
  } catch {
    return null
  }
}

/** 원고 내용만 골라 정리(모르는 필드는 버린다) */
function cleanContent(raw: unknown, base?: BlogContent): BlogContent {
  const r = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>
  const s = (k: string) => (typeof r[k] === 'string' ? (r[k] as string) : undefined)
  const tags = Array.isArray(r.tags)
    ? Array.from(new Set((r.tags as unknown[]).map((t) => String(t).trim()).filter(Boolean))).slice(0, 10)
    : base?.tags ?? []
  let cover = base?.cover
  if (r.cover === null) cover = undefined
  else if (r.cover && typeof r.cover === 'object') {
    const c = r.cover as Record<string, unknown>
    cover = {
      src: String(c.src ?? ''),
      alt: String(c.alt ?? ''),
      ...(Number(c.width) > 0 ? { width: Number(c.width) } : {}),
      ...(Number(c.height) > 0 ? { height: Number(c.height) } : {}),
    }
  }
  return {
    title: (s('title') ?? base?.title ?? '').trim(),
    seoTitle: (s('seoTitle') ?? base?.seoTitle ?? '').trim() || undefined,
    description: (s('description') ?? base?.description ?? '').trim(),
    slug: (s('slug') ?? base?.slug ?? '').trim().toLowerCase(),
    category: (s('category') ?? base?.category ?? '').trim(),
    tags,
    keyword: (s('keyword') ?? base?.keyword ?? '').trim() || undefined,
    markdown: s('markdown') ?? base?.markdown ?? '',
    cover,
  }
}

/** 저장 최소 조건(초안도 이건 지켜야 함) — 나머지는 발행 때 검사 */
function checkDraft(c: BlogContent) {
  const issues: { field: string; message: string }[] = []
  if (!c.title) issues.push({ field: 'title', message: '제목이 필요합니다.' })
  if (!c.slug || !SLUG_RE.test(c.slug))
    issues.push({ field: 'slug', message: '주소(slug)는 영문 소문자·숫자·하이픈만 씁니다.' })
  if (c.category && !CATEGORY_KEYS.includes(c.category))
    issues.push({ field: 'category', message: `카테고리는 ${CATEGORY_KEYS.join(' / ')} 중 하나입니다.` })
  if (issues.length) throw new BlogApiError(400, '초안 저장 조건이 맞지 않습니다.', { issues })
}

async function loadAll(): Promise<{ post: BlogPost; dir: string }[]> {
  const b = be()
  const [drafts, posts] = await Promise.all([b.readDir(DRAFTS_DIR), b.readDir(POSTS_DIR)])
  const out: { post: BlogPost; dir: string }[] = []
  for (const f of drafts) {
    const p = parse(f.text)
    if (p) out.push({ post: p, dir: DRAFTS_DIR })
  }
  for (const f of posts) {
    const p = parse(f.text)
    if (p) out.push({ post: p, dir: POSTS_DIR })
  }
  return out
}

async function find(id: string): Promise<{ post: BlogPost; dir: string }> {
  if (!/^[a-z0-9]{6,40}$/.test(id)) throw new BlogApiError(404, '글을 찾을 수 없습니다.')
  const b = be()
  for (const dir of [POSTS_DIR, DRAFTS_DIR]) {
    const f = await b.read(fileOf(dir, id))
    const p = f ? parse(f.text) : null
    if (p) return { post: p, dir }
  }
  throw new BlogApiError(404, '글을 찾을 수 없습니다.')
}

function checkVersion(post: BlogPost, version: unknown) {
  if (Number(version) !== post.version)
    throw new BlogApiError(409, `다른 곳에서 먼저 수정됐습니다(현재 버전 ${post.version}). 새로 불러온 뒤 다시 저장하세요.`, {
      currentVersion: post.version,
    })
}

export async function listPosts(): Promise<BlogPostSummary[]> {
  const all = await loadAll()
  return all
    .map((x) => summarize(x.post))
    .sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || ''))
}

export async function getPost(id: string): Promise<BlogPost> {
  return (await find(id)).post
}

export async function createPost(rawContent: unknown): Promise<BlogPost> {
  const content = cleanContent(rawContent)
  checkDraft(content)
  const all = await loadAll()
  if (all.some((x) => x.post.slug === content.slug))
    throw new BlogApiError(409, `이미 같은 주소(slug)의 글이 있습니다: ${content.slug}`)
  const t = now()
  const post: BlogPost = { ...content, id: newId(), status: 'draft', version: 1, createdAt: t, updatedAt: t }
  await be().commit(`blog: 초안 저장 — ${post.title}`, [{ path: fileOf(DRAFTS_DIR, post.id), content: serialize(post) }])
  return post
}

export async function updatePost(id: string, version: unknown, rawContent: unknown): Promise<BlogPost> {
  const { post, dir } = await find(id)
  checkVersion(post, version)
  const content = cleanContent(rawContent, post)
  checkDraft(content)
  if (content.slug !== post.slug) {
    if (post.status === 'published')
      throw new BlogApiError(409, '발행된 글의 주소(slug)는 바꿀 수 없습니다. 주소가 바뀌면 기존 검색 노출이 끊깁니다.')
    const all = await loadAll()
    if (all.some((x) => x.post.id !== id && x.post.slug === content.slug))
      throw new BlogApiError(409, `이미 같은 주소(slug)의 글이 있습니다: ${content.slug}`)
  }
  // 발행본·예약본은 수정 후에도 발행 조건을 지켜야 한다(예약본은 시간이 되면 검사 없이 공개되므로)
  if (post.status !== 'draft') {
    const issues = blockingIssues(validatePost(content))
    if (issues.length) throw new BlogApiError(422, '발행·예약된 글은 발행 조건을 지켜야 저장됩니다.', { issues })
  }
  const next: BlogPost = { ...post, ...content, version: post.version + 1, updatedAt: now() }
  await be().commit(
    `blog: ${post.status === 'published' ? '발행글 수정' : '초안 수정'} — ${next.title}`,
    [{ path: fileOf(dir, id), content: serialize(next) }]
  )
  return next
}

export async function publishPost(id: string, version: unknown, scheduledAt?: string): Promise<BlogPost> {
  const { post, dir } = await find(id)
  checkVersion(post, version)
  if (post.status === 'published' && !scheduledAt) return post

  const all = await loadAll()
  const otherSlugs = all.filter((x) => x.post.id !== id && x.post.status === 'published').map((x) => x.post.slug)
  const issues = blockingIssues(validatePost(post, { otherSlugs }))
  if (issues.length) throw new BlogApiError(422, '발행 조건을 채우지 못했습니다.', { issues })

  const t = now()
  let when: Date | null = null
  if (scheduledAt) {
    when = new Date(scheduledAt)
    if (Number.isNaN(when.getTime())) throw new BlogApiError(400, '예약 시각 형식이 잘못됐습니다(ISO 8601).')
  }

  // 예약: 1분 넘게 남았을 때만. 초안 폴더에 그대로 두고 상태만 바꾼다(예약 발행 워크플로가 시간이 되면 옮긴다).
  if (when && when.getTime() > Date.now() + 60_000) {
    if (post.status === 'published') throw new BlogApiError(409, '이미 발행된 글입니다. 예약하려면 먼저 내리세요.')
    const next: BlogPost = { ...post, status: 'scheduled', scheduledAt: when.toISOString(), version: post.version + 1, updatedAt: t }
    await be().commit(`blog: 예약 — ${next.title} (${next.scheduledAt})`, [{ path: fileOf(DRAFTS_DIR, id), content: serialize(next) }])
    return next
  }

  const next: BlogPost = {
    ...post,
    status: 'published',
    scheduledAt: undefined,
    publishedAt: post.publishedAt ?? t,
    version: post.version + 1,
    updatedAt: t,
  }
  await be().commit(
    `blog: 발행 — ${next.title}`,
    [{ path: fileOf(POSTS_DIR, id), content: serialize(next) }],
    dir === DRAFTS_DIR ? [fileOf(DRAFTS_DIR, id)] : []
  )
  return next
}

export async function unpublishPost(id: string, version: unknown): Promise<BlogPost> {
  const { post, dir } = await find(id)
  checkVersion(post, version)
  if (post.status === 'draft') return post
  const next: BlogPost = { ...post, status: 'draft', scheduledAt: undefined, version: post.version + 1, updatedAt: now() }
  await be().commit(
    `blog: ${post.status === 'published' ? '발행 취소' : '예약 취소'} — ${next.title}`,
    [{ path: fileOf(DRAFTS_DIR, id), content: serialize(next) }],
    dir === POSTS_DIR ? [fileOf(POSTS_DIR, id)] : []
  )
  return next
}

const MEDIA_TYPES: Record<string, string> = {
  'image/webp': 'webp',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif',
  'image/avif': 'avif',
}
export const MEDIA_MAX_BYTES = 3 * 1024 * 1024

/**
 * 이미지 저장 — 파일명 = 내용 해시. 같은 이미지는 다시 안 올리고, 내용이 바뀌면 이름도 바뀐다
 * (next.config 의 /images 30일 캐시 규칙: "이미지를 바꿀 때는 파일명을 바꿀 것"을 자동으로 지킨다).
 */
export async function saveMedia(bytes: Buffer, contentType: string): Promise<{ url: string; existed: boolean }> {
  const ext = MEDIA_TYPES[contentType]
  if (!ext) throw new BlogApiError(415, 'webp·jpg·png·gif·avif 이미지만 올릴 수 있습니다.')
  if (bytes.length === 0) throw new BlogApiError(400, '빈 파일입니다.')
  if (bytes.length > MEDIA_MAX_BYTES) throw new BlogApiError(413, '이미지는 3MB 이하로 올리세요(콘솔이 webp 로 줄여서 보냅니다).')
  const hash = crypto.createHash('sha256').update(bytes).digest('hex').slice(0, 16)
  const year = new Date().getUTCFullYear()
  const rel = `${MEDIA_DIR}/${year}/${hash}.${ext}`
  const url = rel.replace(/^public/, '')
  const b = be()
  if (await b.exists(rel)) return { url, existed: true }
  await b.commit(`blog: 이미지 ${hash}.${ext}`, [{ path: rel, content: bytes }])
  return { url, existed: false }
}
