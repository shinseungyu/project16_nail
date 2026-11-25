// ===========================================================================
//  발행 이력 + 구글 색인 요청 대기열 (서버 전용, 이 PC 의 .data 폴더 — git 에 안 올라감)
//  - 발행 이력: 발행·예약할 때 결말 문장·자주 쓴 표현을 남겨, 다음 글이 같은 문투를 또 쓰는지 대조한다.
//  - 색인 대기열: 구글은 블로그 글 색인 "요청"을 API 로 받지 않는다(Indexing API 는 채용공고·라이브 영상 전용,
//    블로그에 쓰면 정책 위반). 그래서 사람이 Search Console 에서 "색인 생성 요청"을 누르고 여기 체크한다.
//    Bing·네이버 등은 사이트의 IndexNow 워크플로가 자동으로 보낸다.
// ===========================================================================
import fs from 'node:fs'
import path from 'node:path'
import { DATA_DIR } from './env'
import type { HistoryEntry } from './style-review'

const HISTORY = path.join(DATA_DIR, 'publish-history.json')
const INDEXQ = path.join(DATA_DIR, 'index-queue.json')
const MAX_HISTORY = 200

function readJson<T>(file: string, fallback: T): T {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8')) as T
  } catch {
    return fallback
  }
}

function writeJson(file: string, data: unknown) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8')
}

export function readHistory(): HistoryEntry[] {
  return readJson<HistoryEntry[]>(HISTORY, [])
}

/** 같은 글(id)은 덮어쓴다. 최신이 앞. */
export function upsertHistory(e: HistoryEntry) {
  const all = readHistory().filter((h) => h.id !== e.id)
  writeJson(HISTORY, [e, ...all].slice(0, MAX_HISTORY))
}

export type IndexFlags = Record<string, { requestedAt: string }>

export function readIndexFlags(): IndexFlags {
  return readJson<IndexFlags>(INDEXQ, {})
}

export function setIndexFlag(slug: string, done: boolean) {
  const all = readIndexFlags()
  if (done) all[slug] = { requestedAt: new Date().toISOString() }
  else delete all[slug]
  writeJson(INDEXQ, all)
}
