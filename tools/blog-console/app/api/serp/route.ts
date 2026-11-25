// POST /api/serp { keyword, provider: 'chrome' | 'dataforseo', fresh? } → 후보 목록
//  같은 키워드는 7일 캐시(공급자 무관). DataForSEO 는 꺼져 있거나 오늘 한도를 넘으면 오류.
import { NextResponse } from 'next/server'
import { readSerpCache, writeSerpCache } from '@/lib/serp/cache'
import { chromeGoogleSearch } from '@/lib/serp/chrome'
import { dataForSeoSearch, dfsSpentToday } from '@/lib/serp/dataforseo'
import { scoreCandidates } from '@/lib/serp/filter'
import { evaluateStrength } from '@/lib/strength'
import type { SerpFeatures, SerpProvider, SerpResponse, SerpResult } from '@/lib/types'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 300

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as { keyword?: string; provider?: SerpProvider; fresh?: boolean }
    const keyword = String(body.keyword ?? '').trim()
    if (!keyword) return NextResponse.json({ error: '키워드를 입력하세요.' }, { status: 400 })
    const provider: SerpProvider = body.provider === 'dataforseo' ? 'dataforseo' : 'chrome'

    const cached = body.fresh ? null : readSerpCache(keyword)
    if (cached) {
      const out: SerpResponse = {
        keyword,
        provider: cached.provider,
        fromCache: true,
        fetchedAt: new Date(cached.fetchedAt).toISOString(),
        candidates: scoreCandidates(cached.data, keyword),
        features: cached.features,
        strength: evaluateStrength(keyword, cached.data, cached.features),
      }
      return NextResponse.json(out)
    }

    let data: SerpResult[]
    let features: SerpFeatures
    let spentTodayUsd: number | undefined
    if (provider === 'dataforseo') {
      const r = await dataForSeoSearch(keyword, 10)
      data = r.data
      features = r.features
      spentTodayUsd = r.spentTodayUsd
    } else {
      const r = await chromeGoogleSearch(keyword, 10)
      data = r.results
      features = r.features
    }
    if (data.length) writeSerpCache(keyword, provider, data, features)
    const out: SerpResponse = {
      keyword,
      provider,
      fromCache: false,
      fetchedAt: new Date().toISOString(),
      candidates: scoreCandidates(data, keyword),
      features,
      strength: evaluateStrength(keyword, data, features),
      ...(spentTodayUsd !== undefined ? { spentTodayUsd } : {}),
    }
    return NextResponse.json(out)
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : String(e), dfs: dfsSpentToday() }, { status: 500 })
  }
}
