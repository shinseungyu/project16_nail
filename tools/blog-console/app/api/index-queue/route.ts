// GET /api/index-queue → 발행된 글 + 구글 색인 요청 여부 / POST {slug, done} → 체크 저장
//  구글 색인 요청은 API 로 못 한다 → Search Console URL 검사 화면으로 바로 가는 링크를 준다.
import { NextResponse } from 'next/server'
import { env } from '@/lib/env'
import { readIndexFlags, setIndexFlag } from '@/lib/history'
import { siteCall } from '@/lib/site'
import { PACING } from '@/lib/pacing'
import type { BlogPostSummary } from '@site/lib/blog/types'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const inspectUrl = (url: string) =>
  `https://search.google.com/search-console/inspect?resource_id=${encodeURIComponent(env.gscProperty)}&id=${encodeURIComponent(url)}`

export async function GET() {
  try {
    const { posts } = await siteCall<{ posts: BlogPostSummary[] }>('blog/posts')
    const flags = readIndexFlags()
    const now = Date.now()
    const items = posts
      .filter((p) => p.status === 'published' && p.publishedAt)
      .map((p) => {
        const url = `${env.siteUrl}/blog/${p.slug}`
        const ageDays = (now - Date.parse(p.publishedAt!)) / 86400000
        const requestedAt = flags[p.slug]?.requestedAt ?? null
        return { slug: p.slug, title: p.title, url, publishedAt: p.publishedAt!, ageDays, requestedAt, stale: !requestedAt && ageDays >= PACING.indexQueueStaleDays, inspectUrl: inspectUrl(url) }
      })
      .sort((a, b) => (!!a.requestedAt === !!b.requestedAt ? b.ageDays - a.ageDays : a.requestedAt ? 1 : -1))
    return NextResponse.json({ items, gscProperty: env.gscProperty, staleDays: PACING.indexQueueStaleDays })
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 502 })
  }
}

export async function POST(req: Request) {
  const b = (await req.json().catch(() => ({}))) as { slug?: string; done?: boolean }
  if (!b.slug || !/^[a-z0-9-]+$/.test(b.slug)) return NextResponse.json({ error: 'slug 필요' }, { status: 400 })
  setIndexFlag(b.slug, !!b.done)
  return NextResponse.json({ ok: true })
}
