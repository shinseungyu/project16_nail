// GET /api/cache → 저장된 검색 캐시 목록 / DELETE /api/cache?keyword= → 그 키워드 캐시 삭제
import { NextResponse } from 'next/server'
import { deleteSerpCache, listSerpCache } from '@/lib/serp/cache'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({ items: listSerpCache() })
}

export async function DELETE(req: Request) {
  const keyword = new URL(req.url).searchParams.get('keyword') ?? ''
  if (!keyword.trim()) return NextResponse.json({ error: 'keyword 필요' }, { status: 400 })
  return NextResponse.json({ deleted: deleteSerpCache(keyword) })
}
