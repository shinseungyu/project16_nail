/**
 * 발행 API 의 저장 백엔드 선택 (서버 전용).
 *   - github : 운영(Vercel). GITHUB_TOKEN 이 있으면 자동 선택.
 *   - fs     : 내 PC 테스트. BLOG_STORAGE=fs 일 때만, Vercel 에서는 금지(읽기 전용 파일시스템).
 *              레포 폴더에 바로 쓰므로 확인 후 직접 커밋·푸시하면 된다.
 */
import fs from 'node:fs'
import path from 'node:path'
import { ghCommit, ghExists, ghRead, ghReadDir, githubConfigured } from './github'

export interface Backend {
  name: 'github' | 'fs'
  read(p: string): Promise<{ text: string } | null>
  readDir(dir: string): Promise<{ path: string; text: string }[]>
  exists(p: string): Promise<boolean>
  commit(message: string, puts: { path: string; content: Buffer | string }[], dels?: string[]): Promise<void>
}

const root = () => process.cwd()

const fsBackend: Backend = {
  name: 'fs',
  async read(p) {
    try {
      return { text: fs.readFileSync(path.join(root(), p), 'utf8') }
    } catch {
      return null
    }
  },
  async readDir(dir) {
    const abs = path.join(root(), dir)
    if (!fs.existsSync(abs)) return []
    return fs
      .readdirSync(abs)
      .filter((f) => f.endsWith('.json'))
      .map((f) => ({ path: `${dir}/${f}`, text: fs.readFileSync(path.join(abs, f), 'utf8') }))
  },
  async exists(p) {
    return fs.existsSync(path.join(root(), p))
  },
  async commit(_message, puts, dels = []) {
    for (const p of puts) {
      const abs = path.join(root(), p.path)
      fs.mkdirSync(path.dirname(abs), { recursive: true })
      fs.writeFileSync(abs, p.content)
    }
    for (const d of dels) {
      try {
        fs.unlinkSync(path.join(root(), d))
      } catch {
        /* 이미 없음 */
      }
    }
  },
}

const githubBackend: Backend = {
  name: 'github',
  read: ghRead,
  readDir: ghReadDir,
  exists: ghExists,
  async commit(message, puts, dels = []) {
    await ghCommit(message, puts, dels)
  },
}

export function storageMode(): 'github' | 'fs' | null {
  const mode = (process.env.BLOG_STORAGE ?? '').toLowerCase()
  if (mode === 'fs') return process.env.VERCEL ? null : 'fs'
  if (mode === 'github' || (!mode && githubConfigured())) return githubConfigured() ? 'github' : null
  return null
}

export function getBackend(): Backend | null {
  const m = storageMode()
  return m === 'fs' ? fsBackend : m === 'github' ? githubBackend : null
}
