// POST /api/studio/blog/posts/{id}/unpublish — 발행 취소·예약 취소 { version } → 초안으로 되돌림
import { handle, ok, readJson } from '@/lib/blog/api'
import { unpublishPost } from '@/lib/blog/service'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: Request, { params }: { params: { id: string } }) {
  return handle(req, async () => {
    const body = await readJson(req)
    return ok({ post: await unpublishPost(params.id, body.version) })
  })
}
