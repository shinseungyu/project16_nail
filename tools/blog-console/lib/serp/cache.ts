// 검색 결과 파일 캐시 (7일). 같은 키워드를 다시 검색해도 크롬·DataForSEO 를 안 부른다.
import fs from 'node:fs'
import path from 'node:path'
import { DATA_DIR } from '../env'
import type { SerpProvider, SerpResult } from '../types'

const DIR = path.join(DATA_DIR, 'serp')
const TTL_MS = 7 * 24 * 3600_000

interface Entry {
  keyword: string
  provider: SerpProvider
  fetchedAt: number
  data: SerpResult[]
}

const file = (keyword: string) => path.join(DIR, Buffer.from(keyword.trim(), 'utf8').toString('hex') + '.json')

export function readSerpCache(keyword: string): Entry | null {
  try {
    const e = JSON.parse(fs.readFileSync(file(keyword), 'utf8')) as Entry
    return Date.now() - e.fetchedAt < TTL_MS ? e : null
  } catch {
    return null
  }
}

export function writeSerpCache(keyword: string, provider: SerpProvider, data: SerpResult[]) {
  try {
    fs.mkdirSync(DIR, { recursive: true })
    const e: Entry = { keyword: keyword.trim(), provider, fetchedAt: Date.now(), data }
    fs.writeFileSync(file(keyword), JSON.stringify(e), 'utf8')
  } catch {
    /* 캐시 실패는 무시 */
  }
}
