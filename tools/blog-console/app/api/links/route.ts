// GET /api/links?keyword= → 프롬프트에 넣을 내부링크 후보(허브 + Q&A + 발행된 블로그 글)
import { NextResponse } from 'next/server'
import { internalLinks } from '@/lib/links'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const keyword = new URL(req.url).searchParams.get('keyword') ?? ''
  try {
    return NextResponse.json(await internalLinks(keyword))
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 500 })
  }
}
