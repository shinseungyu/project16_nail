// POST /api/studio/blog/media — 이미지 올리기
//   JSON { dataUrl: "data:image/webp;base64,..." }  또는 multipart "file"
//   → { media: { url: "/images/blog/2026/<해시>.webp" } } 본문 ![](url)·대표이미지에 그대로 쓴다.
//   이미지 커밋만으로는 Vercel 빌드를 건너뛴다(vercel.json) — 글을 발행할 때 같이 배포된다.
import { handle, ok } from '@/lib/blog/api'
import { BlogApiError, saveMedia } from '@/lib/blog/service'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  return handle(req, async () => {
    let bytes: Buffer
    let type: string
    const ct = req.headers.get('content-type') ?? ''
    if (ct.includes('multipart/form-data')) {
      const form = await req.formData()
      const file = form.get('file')
      if (!(file instanceof Blob)) throw new BlogApiError(400, 'file 필드가 없습니다.')
      bytes = Buffer.from(await file.arrayBuffer())
      type = file.type
    } else {
      const body = (await req.json().catch(() => ({}))) as { dataUrl?: string }
      const m = String(body.dataUrl ?? '').match(/^data:([^;,]+);base64,(.+)$/)
      if (!m) throw new BlogApiError(400, 'dataUrl(data:image/…;base64,…) 형식이 아닙니다.')
      type = m[1]
      bytes = Buffer.from(m[2], 'base64')
    }
    const media = await saveMedia(bytes, type)
    return ok({ media }, media.existed ? 200 : 201)
  })
}
