// POST /api/analyze { keyword, urls[] } → 크롤링 → 본문 정제 → 구조 분석
import { NextResponse } from 'next/server'
import { fetchHtml } from '@/lib/crawl'
import { extractArticle } from '@/lib/extract'
import { analyze } from '@/lib/analyze'
import type { AnalyzeResponse } from '@/lib/types'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 120

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as { keyword?: string; urls?: string[] }
    const keyword = String(body.keyword ?? '').trim()
    const urls = Array.from(new Set((body.urls ?? []).map((u) => String(u).trim()).filter((u) => /^https?:\/\//.test(u)))).slice(0, 8)
    if (!urls.length) return NextResponse.json({ error: '분석할 글 주소를 1개 이상 고르세요.' }, { status: 400 })

    const pages = await Promise.all(urls.map((u) => fetchHtml(u)))
    const extracts = pages.map((p) => (p.ok ? extractArticle(p.url, p.html) : { ...extractArticle(p.url, ''), error: p.error }))
    const summary = analyze(extracts)
    const out: AnalyzeResponse = {
      keyword,
      summary,
      perBlog: extracts.map((e) => ({
        url: e.url,
        title: e.metaTitle || e.title,
        description: e.metaDescription,
        length: e.text.replace(/\s+/g, '').length,
        headings: e.headings,
        ok: e.ok,
        error: e.error,
      })),
      sourceTexts: extracts.filter((e) => e.ok).map((e) => e.text),
    }
    return NextResponse.json(out)
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 500 })
  }
}
