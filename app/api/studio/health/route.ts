// GET /api/studio/health — 콘솔 "연결 확인" 용. 토큰이 맞는지 + 저장소가 어디로 잡혔는지.
import { handle, ok } from '@/lib/blog/api'
import { storageMode } from '@/lib/blog/repo'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  return handle(req, async () =>
    ok({
      storage: storageMode(),
      repo: process.env.GITHUB_REPO || 'shinseungyu/project16_nail',
      branch: process.env.GITHUB_BRANCH || 'master',
    })
  )
}
