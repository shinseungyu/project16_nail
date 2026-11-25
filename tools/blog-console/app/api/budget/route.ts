// GET /api/budget → DataForSEO 오늘 사용액·한도·켜짐 여부 + 발행 API 설정 여부
import { NextResponse } from 'next/server'
import { dfsSpentToday } from '@/lib/serp/dataforseo'
import { env } from '@/lib/env'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({
    dfs: dfsSpentToday(),
    site: { apiBase: env.apiBase, tokenSet: !!env.apiToken, siteUrl: env.siteUrl, previewImageBase: env.previewImageBase },
  })
}
