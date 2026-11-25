/**
 * GitHub 레포를 블로그 저장소로 쓰는 최소 클라이언트 (서버 전용).
 *
 * 왜 DB 가 아니라 레포인가:
 *   - 글이 레포에 커밋되면 Vercel 이 정적 페이지로 다시 빌드한다 → 가장 빠르고 애드센스·SEO 에 유리.
 *   - 사이트맵·IndexNow 워크플로가 이미 "레포 데이터 → 사이트맵 lastmod → 푸시 시 제출"로 돌고 있어 그대로 탄다.
 *   - 추가 서비스·요금 없음. 글 이력은 git 이력으로 남는다.
 *
 * 필요한 환경변수 (Vercel > Settings > Environment Variables):
 *   GITHUB_TOKEN   fine-grained PAT — 이 레포 하나만, Contents: Read and write
 *   GITHUB_REPO    기본 shinseungyu/project16_nail
 *   GITHUB_BRANCH  기본 master
 *
 * 여러 파일을 커밋 1개로 묶는다(Git Data API) → 배포도 1번.
 */

const API = 'https://api.github.com'

export class GithubError extends Error {
  constructor(message: string, public status: number) {
    super(message)
  }
}

function cfg() {
  const token = process.env.GITHUB_TOKEN ?? ''
  const repo = process.env.GITHUB_REPO || 'shinseungyu/project16_nail'
  const branch = process.env.GITHUB_BRANCH || 'master'
  const [owner, name] = repo.split('/')
  return { token, repo, owner, name, branch }
}

export function githubConfigured(): boolean {
  return !!cfg().token
}

async function gh<T>(path: string, init: RequestInit = {}): Promise<T> {
  const { token } = cfg()
  const res = await fetch(path.startsWith('http') ? path : API + path, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'nailstartup-blog-studio',
      ...(init.body ? { 'Content-Type': 'application/json' } : {}),
    },
    cache: 'no-store',
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    const hint =
      res.status === 401
        ? ' (GITHUB_TOKEN 만료·오타)'
        : res.status === 403 || res.status === 404
          ? ' (토큰에 이 레포 Contents 쓰기 권한이 있는지 확인)'
          : ''
    throw new GithubError(`GitHub ${res.status} ${path}${hint} ${body.slice(0, 200)}`, res.status)
  }
  return (res.status === 204 ? null : await res.json()) as T
}

const enc = (p: string) => p.split('/').map(encodeURIComponent).join('/')

/** 파일 1개 (없으면 null) */
export async function ghRead(path: string): Promise<{ text: string; sha: string } | null> {
  const { repo, branch } = cfg()
  try {
    const data = await gh<{ content: string; sha: string; encoding: string }>(
      `/repos/${repo}/contents/${enc(path)}?ref=${encodeURIComponent(branch)}`
    )
    return { text: Buffer.from(data.content, 'base64').toString('utf8'), sha: data.sha }
  } catch (e) {
    if (e instanceof GithubError && e.status === 404) return null
    throw e
  }
}

export async function ghExists(path: string): Promise<boolean> {
  const { repo, branch } = cfg()
  try {
    await gh(`/repos/${repo}/contents/${enc(path)}?ref=${encodeURIComponent(branch)}`, { method: 'GET' })
    return true
  } catch (e) {
    if (e instanceof GithubError && e.status === 404) return false
    throw e
  }
}

/** 폴더 안 .json 파일 전부(내용 포함). GraphQL 1번, 실패하면 REST 로 하나씩. */
export async function ghReadDir(dir: string): Promise<{ path: string; text: string }[]> {
  const { owner, name, branch, repo } = cfg()
  try {
    const data = await gh<{
      data?: {
        repository?: {
          object?: { entries?: { name: string; type: string; object?: { text?: string | null; isTruncated?: boolean } }[] } | null
        }
      }
      errors?: unknown[]
    }>('/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: `query($owner:String!,$name:String!,$expr:String!){repository(owner:$owner,name:$name){object(expression:$expr){... on Tree{entries{name type object{... on Blob{text isTruncated}}}}}}}`,
        variables: { owner, name, expr: `${branch}:${dir}` },
      }),
    })
    if (data.errors?.length) throw new Error('graphql errors')
    const entries = data.data?.repository?.object?.entries ?? []
    const out: { path: string; text: string }[] = []
    for (const e of entries) {
      if (e.type !== 'blob' || !e.name.endsWith('.json')) continue
      const path = `${dir}/${e.name}`
      if (typeof e.object?.text === 'string' && !e.object.isTruncated) out.push({ path, text: e.object.text })
      else {
        const f = await ghRead(path)
        if (f) out.push({ path, text: f.text })
      }
    }
    return out
  } catch {
    // REST 폴백
    let list: { name: string; path: string; type: string }[] = []
    try {
      list = await gh(`/repos/${repo}/contents/${enc(dir)}?ref=${encodeURIComponent(branch)}`)
    } catch (e) {
      if (e instanceof GithubError && e.status === 404) return []
      throw e
    }
    const files = list.filter((f) => f.type === 'file' && f.name.endsWith('.json'))
    const out: { path: string; text: string }[] = []
    for (const f of files) {
      const r = await ghRead(f.path)
      if (r) out.push({ path: f.path, text: r.text })
    }
    return out
  }
}

/**
 * 여러 파일 쓰기·지우기를 커밋 1개로. 그 사이 다른 커밋이 끼어들면(fast-forward 실패) 1번 다시 시도.
 * 커밋 작성자는 토큰 주인(=레포 주인)이 된다 → Vercel 이 배포를 막지 않는다.
 */
export async function ghCommit(
  message: string,
  puts: { path: string; content: Buffer | string }[],
  dels: string[] = []
): Promise<string> {
  const { repo, branch } = cfg()
  for (let attempt = 0; attempt < 2; attempt++) {
    const ref = await gh<{ object: { sha: string } }>(`/repos/${repo}/git/ref/heads/${encodeURIComponent(branch)}`)
    const parent = ref.object.sha
    const parentCommit = await gh<{ tree: { sha: string } }>(`/repos/${repo}/git/commits/${parent}`)

    const tree: { path: string; mode: '100644'; type: 'blob'; sha: string | null }[] = []
    for (const p of puts) {
      const buf = typeof p.content === 'string' ? Buffer.from(p.content, 'utf8') : p.content
      const blob = await gh<{ sha: string }>(`/repos/${repo}/git/blobs`, {
        method: 'POST',
        body: JSON.stringify({ content: buf.toString('base64'), encoding: 'base64' }),
      })
      tree.push({ path: p.path, mode: '100644', type: 'blob', sha: blob.sha })
    }
    for (const d of dels) tree.push({ path: d, mode: '100644', type: 'blob', sha: null })

    const newTree = await gh<{ sha: string }>(`/repos/${repo}/git/trees`, {
      method: 'POST',
      body: JSON.stringify({ base_tree: parentCommit.tree.sha, tree }),
    })
    const commit = await gh<{ sha: string }>(`/repos/${repo}/git/commits`, {
      method: 'POST',
      body: JSON.stringify({ message, tree: newTree.sha, parents: [parent] }),
    })
    try {
      await gh(`/repos/${repo}/git/refs/heads/${encodeURIComponent(branch)}`, {
        method: 'PATCH',
        body: JSON.stringify({ sha: commit.sha, force: false }),
      })
      return commit.sha
    } catch (e) {
      if (attempt === 0 && e instanceof GithubError && (e.status === 422 || e.status === 409)) continue
      throw e
    }
  }
  throw new GithubError('커밋 충돌이 계속됩니다. 잠시 후 다시 시도하세요.', 409)
}
