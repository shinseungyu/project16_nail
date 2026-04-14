import { NextResponse } from 'next/server'

const memStore: Record<string, number> = {}

async function incr(key: string): Promise<number> {
  if (process.env.KV_REST_API_URL) {
    const { kv } = await import('@vercel/kv')
    return await kv.incr(key)
  }
  memStore[key] = (memStore[key] || 0) + 1
  return memStore[key]
}

async function get(key: string): Promise<number> {
  if (process.env.KV_REST_API_URL) {
    const { kv } = await import('@vercel/kv')
    return (await kv.get<number>(key)) || 0
  }
  return memStore[key] || 0
}

async function keys(pattern: string): Promise<string[]> {
  if (process.env.KV_REST_API_URL) {
    const { kv } = await import('@vercel/kv')
    return await kv.keys(pattern)
  }
  return Object.keys(memStore).filter(k => k.startsWith(pattern.replace('*', '')))
}

export async function POST(request: Request) {
  const { location = 'unknown' } = await request.json().catch(() => ({}))
  const today = new Date().toISOString().slice(0, 10)
  
  // 동일 IP 중복 방지 로직
  const forwardedFor = request.headers.get('x-forwarded-for')
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown'
  
  // 해당 IP의 오늘 방문(클릭) 횟수 증가
  const ipCount = await incr(`kakao_click_ip_${today}_${ip}`)
  
  // 오늘 처음 클릭한 IP인 경우에만 카운트를 증가시킵니다
  if (ipCount === 1) {
    await incr('kakao_click_count')
    await incr(`kakao_click_${today}`)
    await incr(`kakao_loc_${location}`)
  }

  const total = await get('kakao_click_count')
  return NextResponse.json({ total, duplicated: ipCount > 1 })
}

export async function GET(request: Request) {
  const password = new URL(request.url).searchParams.get('pw')
  const adminPassword = process.env.ADMIN_PASSWORD || 'nail2026'

  if (password !== adminPassword) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const today = new Date().toISOString().slice(0, 10)
  const total = await get('kakao_click_count')
  const todayCount = await get(`kakao_click_${today}`)

  const locKeys = await keys('kakao_loc_*')
  const byLocation: Record<string, number> = {}
  for (const k of locKeys) {
    const loc = k.replace('kakao_loc_', '')
    byLocation[loc] = await get(k)
  }

  return NextResponse.json({ total, today: todayCount, byLocation })
}
