// ===========================================================================
//  DataForSEO (유료) — 기본 꺼짐. 크롬 검색이 안 될 때만 쓰는 예비 수단.
//  - DATAFORSEO_ENABLED=true + 로그인/비밀번호가 있어야 동작.
//  - 하루(한국 날짜) 사용액 한도: DATAFORSEO_DAILY_BUDGET_USD (기본 $1).
//    호출 전에 "오늘 쓴 돈 + 이번 호출 예상액"이 한도를 넘으면 부르지 않는다.
//    호출 후에는 응답의 실제 cost 를 .data/dataforseo-spend.json 에 쌓는다.
//  - 결과는 7일 캐시(같은 키워드 재검색 무료). goto 주소 변환(추가 과금)은 하지 않는다.
// ===========================================================================
import fs from 'node:fs'
import path from 'node:path'
import { DATA_DIR, env, kstDate } from '../env'
import type { SerpResult } from '../types'

const LEDGER = path.join(DATA_DIR, 'dataforseo-spend.json')
/** Live Advanced 1페이지(10개) 실측 약 $0.002 — 여유 있게 잡는다 */
const ESTIMATE_PER_PAGE = 0.004

type Ledger = Record<string, { usd: number; calls: number }>

function readLedger(): Ledger {
  try {
    return JSON.parse(fs.readFileSync(LEDGER, 'utf8')) as Ledger
  } catch {
    return {}
  }
}

export function dfsSpentToday(): { date: string; usd: number; calls: number; budget: number; enabled: boolean } {
  const date = kstDate()
  const l = readLedger()[date] ?? { usd: 0, calls: 0 }
  return { date, ...l, budget: env.dfs.dailyBudgetUsd, enabled: env.dfs.enabled && !!env.dfs.login && !!env.dfs.password }
}

function addSpend(usd: number) {
  const date = kstDate()
  const l = readLedger()
  const cur = l[date] ?? { usd: 0, calls: 0 }
  l[date] = { usd: Math.round((cur.usd + usd) * 100000) / 100000, calls: cur.calls + 1 }
  fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(LEDGER, JSON.stringify(l, null, 2), 'utf8')
}

export async function dataForSeoSearch(keyword: string, depth = 10): Promise<{ data: SerpResult[]; spentTodayUsd: number }> {
  const s = dfsSpentToday()
  if (!s.enabled) throw new Error('DataForSEO 가 꺼져 있습니다(.env.local 의 DATAFORSEO_ENABLED=true 와 로그인 정보 필요). 크롬 검색을 쓰세요.')
  const estimate = ESTIMATE_PER_PAGE * Math.ceil(depth / 10)
  if (s.usd + estimate > s.budget)
    throw new Error(`오늘 DataForSEO 한도($${s.budget}) 도달 — 사용 $${s.usd.toFixed(3)}. 크롬 검색이나 URL 직접 입력을 쓰세요.`)

  const auth = Buffer.from(`${env.dfs.login}:${env.dfs.password}`).toString('base64')
  const res = await fetch('https://api.dataforseo.com/v3/serp/google/organic/live/advanced', {
    method: 'POST',
    headers: { Authorization: `Basic ${auth}`, 'Content-Type': 'application/json' },
    body: JSON.stringify([{ keyword, location_code: 2410, language_code: 'ko', device: 'desktop', depth }]),
  })
  const data = (await res.json().catch(() => ({}))) as {
    cost?: number
    tasks?: { status_code?: number; status_message?: string; cost?: number; result?: { items?: Record<string, unknown>[] }[] }[]
  }
  const task = data.tasks?.[0]
  // 실패해도 과금됐을 수 있으니 응답에 cost 가 있으면 무조건 기록
  const cost = Number(data.cost ?? task?.cost ?? (res.ok ? estimate : 0)) || 0
  if (cost > 0) addSpend(cost)
  if (!res.ok) throw new Error(`DataForSEO HTTP ${res.status}`)
  if (task?.status_code && task.status_code !== 20000) throw new Error(`DataForSEO 오류 ${task.status_code} ${task.status_message ?? ''}`)

  const items = task?.result?.[0]?.items ?? []
  const out: SerpResult[] = []
  for (const it of items) {
    const url = String(it.url ?? '')
    if (it.type !== 'organic' || !/^https?:\/\//.test(url) || /google\.[a-z.]+\/goto\?/.test(url)) continue
    out.push({ position: out.length + 1, title: String(it.title ?? ''), url })
  }
  return { data: out.slice(0, depth), spentTodayUsd: dfsSpentToday().usd }
}
