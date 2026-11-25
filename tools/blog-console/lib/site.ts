// 사이트 발행 API 호출 (서버 전용 — 토큰은 여기서만 붙인다)
import { env } from './env'

export class SiteError extends Error {
  constructor(message: string, public status: number, public details?: unknown) {
    super(message)
  }
}

export async function siteCall<T>(path: string, init: RequestInit = {}): Promise<T> {
  if (!env.apiToken) throw new SiteError('.env.local 에 BLOG_API_TOKEN 이 없습니다.', 400)
  const res = await fetch(`${env.apiBase}/${path.replace(/^\/+/, '')}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${env.apiToken}`,
      ...(init.body && typeof init.body === 'string' ? { 'Content-Type': 'application/json' } : {}),
    },
    cache: 'no-store',
    signal: AbortSignal.timeout(60_000),
  })
  const body = (await res.json().catch(() => ({}))) as { data?: T; error?: string; details?: unknown }
  if (!res.ok) throw new SiteError(body.error ?? `사이트 API 오류 ${res.status}`, res.status, body.details)
  return body.data as T
}
