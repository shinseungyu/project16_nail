// GET /api/history → 발행 이력 / POST /api/history {entry} → 저장 (문투 중복 검사용)
import { NextResponse } from 'next/server'
import { readHistory, upsertHistory } from '@/lib/history'
import type { HistoryEntry } from '@/lib/style-review'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({ history: readHistory() })
}

export async function POST(req: Request) {
  const b = (await req.json().catch(() => ({}))) as Partial<HistoryEntry>
  if (!b.id || !b.slug) return NextResponse.json({ error: 'id·slug 필요' }, { status: 400 })
  const str = (v: unknown, n = 200) => String(v ?? '').slice(0, n)
  const arr = (v: unknown, n: number) => (Array.isArray(v) ? v.map((x) => str(x)).slice(0, n) : [])
  upsertHistory({
    id: str(b.id, 60),
    slug: str(b.slug, 120),
    keyword: str(b.keyword, 100),
    title: str(b.title),
    at: str(b.at, 40) || new Date().toISOString(),
    closingSentences: arr(b.closingSentences, 3),
    topPhrases: arr(b.topPhrases, 10),
  })
  return NextResponse.json({ ok: true })
}
