// /api/site/* → 사이트 발행 API(/api/studio/*) 중계. 토큰을 브라우저에 두지 않으려고 콘솔 서버를 거친다.
//  허용 경로: health, blog/posts, blog/posts/{id}, blog/posts/{id}/publish|unpublish, blog/media
import { NextResponse } from 'next/server'
import { siteCall, SiteError } from '@/lib/site'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const ALLOWED = /^(health|blog\/posts|blog\/posts\/[a-z0-9]+|blog\/posts\/[a-z0-9]+\/(publish|unpublish)|blog\/media)$/

async function forward(req: Request, path: string[], method: string) {
  const p = path.join('/')
  if (!ALLOWED.test(p)) return NextResponse.json({ error: '허용되지 않은 경로' }, { status: 404 })
  try {
    const body = method === 'GET' ? undefined : await req.text()
    const data = await siteCall(p, { method, ...(body ? { body } : {}) })
    return NextResponse.json({ data })
  } catch (e) {
    if (e instanceof SiteError) return NextResponse.json({ error: e.message, details: e.details }, { status: e.status })
    return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 502 })
  }
}

type Ctx = { params: { path: string[] } }
export const GET = (req: Request, { params }: Ctx) => forward(req, params.path, 'GET')
export const POST = (req: Request, { params }: Ctx) => forward(req, params.path, 'POST')
export const PUT = (req: Request, { params }: Ctx) => forward(req, params.path, 'PUT')
