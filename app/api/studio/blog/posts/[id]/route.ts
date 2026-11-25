// GET /api/studio/blog/posts/{id} — 글 전체
// PUT /api/studio/blog/posts/{id} — 덮어쓰기 { version, content } (옛 version 이면 409, 발행글은 발행 조건 검사 422)
import { handle, ok, readJson } from '@/lib/blog/api'
import { getPost, updatePost } from '@/lib/blog/service'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  return handle(req, async () => ok({ post: await getPost(params.id) }))
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  return handle(req, async () => {
    const body = await readJson(req)
    const post = await updatePost(params.id, body.version, body.content)
    return ok({ post, ...(post.status === 'published' ? { publicPath: `/blog/${post.slug}` } : {}) })
  })
}
