// POST /api/studio/blog/posts/{id}/publish — 즉시 발행 { version } / 예약 { version, scheduledAt: ISO+오프셋 }
//  422 면 details.issues 에 발행 조건(제목·설명·소제목·분량·링크 등)이 온다.
//  즉시 발행 = 레포 커밋 → Vercel 재배포(1~3분) → IndexNow 워크플로가 새 주소를 제출.
import { handle, ok, readJson } from '@/lib/blog/api'
import { publishPost } from '@/lib/blog/service'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: Request, { params }: { params: { id: string } }) {
  return handle(req, async () => {
    const body = await readJson(req)
    const scheduledAt = typeof body.scheduledAt === 'string' && body.scheduledAt ? body.scheduledAt : undefined
    const post = await publishPost(params.id, body.version, scheduledAt)
    return ok({ post, status: post.status, scheduledAt: post.scheduledAt, publicPath: `/blog/${post.slug}` })
  })
}
