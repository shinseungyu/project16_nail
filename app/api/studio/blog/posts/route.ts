// GET  /api/studio/blog/posts  — 글 목록(초안·예약·발행 전부, 최근 수정순)
// POST /api/studio/blog/posts  — 새 초안 { content: { title, slug, description, category, tags, keyword, markdown, cover } }
import { handle, ok, readJson } from '@/lib/blog/api'
import { createPost, listPosts } from '@/lib/blog/service'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  return handle(req, async () => ok({ posts: await listPosts() }))
}

export async function POST(req: Request) {
  return handle(req, async () => {
    const body = await readJson(req)
    const post = await createPost(body.content)
    return ok({ post }, 201)
  })
}
