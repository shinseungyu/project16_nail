// ===========================================================================
//  내 PC 크롬으로 구글(한국) 상위글 가져오기 — 무료 (project15 chrome-serp.ts 이식, 한국판)
//  - 설치된 Chrome 을 playwright-core 로 띄워 google.com/search?hl=ko&gl=kr 결과를 읽는다.
//  - 프로필 폴더(.chrome-profile-serp)를 계속 써서 쿠키가 남는다 → 캡차가 덜 뜬다.
//  - 창 없이 먼저 시도, 캡차가 뜨면 창을 띄워 직접 풀 때까지 3분 기다린다.
//  - 한 번에 한 검색만, 페이지 사이 2~4초 쉰다 → 차단 방지.
//  ⚠️ 구글 화면 구조가 바뀌면 readResults 를 고쳐야 한다.
// ===========================================================================
import path from 'node:path'
import type { BrowserContext, Page } from 'playwright-core'
import type { SerpResult } from '../types'
import { env } from '../env'

const PROFILE_DIR = path.join(process.cwd(), '.chrome-profile-serp')
const CAPTCHA_WAIT_MS = 180_000
const NAV_TIMEOUT_MS = 30_000
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

let queue: Promise<unknown> = Promise.resolve()
function serialize<T>(fn: () => Promise<T>): Promise<T> {
  const run = queue.then(fn, fn)
  queue = run.catch(() => undefined)
  return run
}

async function openContext(headless: boolean): Promise<BrowserContext> {
  const { chromium } = await import('playwright-core')
  try {
    return await chromium.launchPersistentContext(PROFILE_DIR, {
      channel: 'chrome',
      headless,
      locale: 'ko-KR',
      timezoneId: 'Asia/Seoul',
      viewport: { width: 1280, height: 900 },
      args: ['--disable-blink-features=AutomationControlled'],
    })
  } catch (e) {
    const m = e instanceof Error ? e.message : String(e)
    if (/ProcessSingleton|already in use|lock/i.test(m)) throw new Error('검색용 크롬 창이 이미 열려 있어요. 그 창을 닫고 다시 하세요.')
    if (/chrome.*(not found|doesn't exist|executable)|Chromium distribution/i.test(m))
      throw new Error('이 PC 에서 크롬(Chrome)을 찾지 못했어요. 크롬을 설치하거나 "URL 직접 입력"을 쓰세요.')
    throw e
  }
}

function isCaptcha(page: Page): Promise<boolean> {
  if (/\/sorry\//.test(page.url())) return Promise.resolve(true)
  return page
    .locator("#captcha-form, form[action*='sorry'], iframe[src*='recaptcha']")
    .count()
    .then((n) => n > 0)
    .catch(() => false)
}

function searchUrl(keyword: string, start: number): string {
  const p = new URLSearchParams({ q: keyword, hl: 'ko', gl: 'kr', pws: '0' })
  if (start > 0) p.set('start', String(start))
  return `https://www.google.com/search?${p.toString()}`
}

async function readResults(page: Page): Promise<{ title: string; url: string }[]> {
  await page.waitForSelector('#search, #rso, #botstuff', { timeout: NAV_TIMEOUT_MS }).catch(() => undefined)
  return page.$$eval('#rso a:has(h3), #search a:has(h3)', (links) =>
    links.map((a) => ({ title: (a.querySelector('h3')?.textContent ?? '').trim(), url: (a as HTMLAnchorElement).href }))
  )
}

function cleanUrl(raw: string): string | null {
  try {
    const u = new URL(raw)
    if (/(^|\.)google\./.test(u.hostname)) {
      const q = u.searchParams.get('q') || u.searchParams.get('url')
      if (u.pathname === '/url' && q && /^https?:/.test(q)) return q
      return null
    }
    if (!/^https?:$/.test(u.protocol)) return null
    u.hash = ''
    return u.toString()
  } catch {
    return null
  }
}

async function waitCaptchaSolved(page: Page) {
  const until = Date.now() + CAPTCHA_WAIT_MS
  while (Date.now() < until) {
    await sleep(1500)
    if (page.isClosed()) throw new Error('캡차 창이 닫혔어요. 다시 하세요.')
    if (!(await isCaptcha(page))) return
  }
  throw new Error('구글 캡차(로봇 확인)를 3분 안에 풀지 않아 멈췄어요. 잠시 뒤 다시 하세요.')
}

class CaptchaError extends Error {}

async function searchOnce(keyword: string, depth: number, headless: boolean): Promise<SerpResult[]> {
  const ctx = await openContext(headless)
  try {
    const page = ctx.pages()[0] ?? (await ctx.newPage())
    page.setDefaultTimeout(NAV_TIMEOUT_MS)
    const out: SerpResult[] = []
    const seen = new Set<string>()
    for (let p = 0; p < Math.max(1, Math.ceil(depth / 10)); p++) {
      if (p > 0) await sleep(2000 + Math.random() * 2000)
      await page.goto(searchUrl(keyword, p * 10), { waitUntil: 'domcontentloaded' })
      if (await isCaptcha(page)) {
        if (headless) throw new CaptchaError('captcha')
        await page.bringToFront().catch(() => undefined)
        await waitCaptchaSolved(page)
        await page.waitForLoadState('domcontentloaded').catch(() => undefined)
      }
      for (const r of await readResults(page)) {
        const url = cleanUrl(r.url)
        if (!url || !r.title || seen.has(url)) continue
        seen.add(url)
        out.push({ position: out.length + 1, title: r.title, url })
      }
    }
    if (!out.length) throw new Error('구글 결과를 하나도 읽지 못했어요(화면 구조가 바뀌었을 수 있음). "URL 직접 입력"을 쓰세요.')
    return out.slice(0, depth)
  } finally {
    await ctx.close().catch(() => undefined)
  }
}

export function chromeGoogleSearch(keyword: string, depth = 10): Promise<SerpResult[]> {
  return serialize(async () => {
    const headless = env.chromeHeadless
    try {
      return await searchOnce(keyword, depth, headless)
    } catch (e) {
      if (e instanceof CaptchaError) return searchOnce(keyword, depth, false)
      throw e
    }
  })
}
