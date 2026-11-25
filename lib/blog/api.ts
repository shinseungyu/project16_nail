/**
 * 발행 API 공통 — 토큰 인증 + 응답 모양(콘텐츠 스튜디오와 동일: 성공 { data }, 실패 { error, details? }).
 *
 * 토큰: Vercel 환경변수 BLOG_API_TOKEN. 비어 있으면 API 전체가 꺼진다(503).
 * 콘솔은 Authorization: Bearer <토큰> 으로 부른다. 토큰은 콘솔 서버에만 두고 브라우저로 보내지 않는다.
 */
import crypto from 'node:crypto'
import { NextResponse } from 'next/server'
import { BlogApiError } from './service'
import { GithubError } from './github'

const HEADERS = { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' }

export function ok(data: unknown, status = 200) {
  return NextResponse.json({ data }, { status, headers: HEADERS })
}

export function fail(status: number, error: string, details?: unknown) {
  return NextResponse.json({ error, ...(details ? { details } : {}) }, { status, headers: HEADERS })
}

const digest = (s: string) => crypto.createHash('sha256').update(s).digest()

/** 통과하면 null, 아니면 오류 응답 */
export function authorize(req: Request): NextResponse | null {
  const expected = process.env.BLOG_API_TOKEN ?? ''
  if (expected.length < 24) return fail(503, '발행 API 가 꺼져 있습니다(BLOG_API_TOKEN 미설정 또는 24자 미만).')
  const got = (req.headers.get('authorization') ?? '').replace(/^Bearer\s+/i, '')
  if (!got || !crypto.timingSafeEqual(digest(got), digest(expected))) return fail(401, '토큰이 맞지 않습니다.')
  return null
}

/** 인증 + 오류 처리 감싸기 */
export async function handle(req: Request, fn: () => Promise<NextResponse>): Promise<NextResponse> {
  const denied = authorize(req)
  if (denied) return denied
  try {
    return await fn()
  } catch (e) {
    if (e instanceof BlogApiError) return fail(e.status, e.message, e.details)
    if (e instanceof GithubError) return fail(502, e.message)
    console.error('[blog-api]', e)
    return fail(500, e instanceof Error ? e.message : String(e))
  }
}

export async function readJson(req: Request): Promise<Record<string, unknown>> {
  try {
    const b = await req.json()
    return b && typeof b === 'object' ? (b as Record<string, unknown>) : {}
  } catch {
    throw new BlogApiError(400, '요청 본문이 JSON 이 아닙니다.')
  }
}
