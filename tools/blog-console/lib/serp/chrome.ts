// ===========================================================================
//  내 PC 크롬으로 구글(한국) 상위글 가져오기 — 무료 (project15 chrome-serp.ts 이식, 한국판)
//  - 설치된 Chrome 을 playwright-core 로 띄워 google.com/search?hl=ko&gl=kr 결과를 읽는다.
//  - 프로필 폴더(.chrome-profile-serp)를 계속 써서 쿠키가 남는다 → 캡차가 덜 뜬다.
//  - 창 없이 먼저 시도, 캡차가 뜨면 창을 띄워 직접 풀 때까지 3분 기다린다.
//  - 한 번에 한 검색만, 페이지 사이 2~4초 쉰다 → 차단 방지.
//  - 1페이지에서 지면 특성(다른 사람들이 찾는 질문·관련 검색어·AI 개요·추천 스니펫)도 같이 읽는다.
//  - 구글이 결과 링크를 암호화된 경유 주소(/goto?url=…)로 주므로, 하나씩 따라가 실제 주소를 얻는다(30초~1분).
//  ⚠️ 구글 화면 구조가 바뀌면 readResults / readFeatures / resolveRedirect 를 고쳐야 한다.
// ===========================================================================
import path from 'node:path'
import type { BrowserContext, Page } from 'playwright-core'
import type { SerpFeatures, SerpFetch, SerpResult } from '../types'
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

/** 지면 특성 — 화면 구조가 자주 바뀌므로 여러 신호를 같이 보고, 못 읽으면 빈 값(검색 자체는 계속) */
async function readFeatures(page: Page): Promise<SerpFeatures> {
  return page
    .evaluate(() => {
      const txt = (el: Element | null) => (el?.textContent ?? '').replace(/\s+/g, ' ').trim()
      const paa = new Set<string>()
      document.querySelectorAll('[data-q]').forEach((el) => {
        const q = (el.getAttribute('data-q') ?? '').trim()
        if (q && q.length <= 80) paa.add(q)
      })
      document.querySelectorAll('.related-question-pair [role="button"], .related-question-pair').forEach((el) => {
        const q = txt(el)
        if (q && q.length <= 80 && /[?？]$|까요|나요|인가요|ㄹ까|는지|방법|얼마/.test(q)) paa.add(q)
      })
      const related = new Set<string>()
      document.querySelectorAll('#botstuff a[href*="/search?"], #bres a[href*="/search?"]').forEach((a) => {
        try {
          const u = new URL((a as HTMLAnchorElement).href)
          if (u.searchParams.has('start') || u.searchParams.has('tbm') || u.searchParams.has('udm')) return
          const t = txt(a)
          if (t.length >= 2 && t.length <= 40 && !/^\d+$|^(다음|이전|더보기)$/.test(t)) related.add(t)
        } catch {
          /* 무시 */
        }
      })
      const heads = Array.from(document.querySelectorAll('h1, h2, h3, [role="heading"]')).map(txt)
      return {
        hasAiOverview: heads.some((h) => /AI\s*개요|AI Overview/i.test(h)),
        hasFeaturedSnippet: heads.some((h) => /추천\s*스니펫|Featured snippet/i.test(h)) || !!document.querySelector('.xpdopen .kp-blk'),
        peopleAlsoAsk: Array.from(paa).slice(0, 10),
        relatedSearches: Array.from(related).slice(0, 12),
      }
    })
    .catch(() => ({ hasAiOverview: false, hasFeaturedSnippet: false, peopleAlsoAsk: [], relatedSearches: [] }))
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

/** 구글 경유 링크(/goto?url=… 암호화)인가 — 2026년 말부터 결과 링크가 전부 이 형태라 실제 주소가 화면에 없다 */
function isGoogleRedirect(raw: string): boolean {
  try {
    const u = new URL(raw)
    return /(^|\.)google\./.test(u.hostname) && (u.pathname === '/goto' || u.pathname === '/url') && (u.searchParams.has('url') || u.searchParams.has('q'))
  } catch {
    return false
  }
}

/**
 * 경유 링크 → 실제 주소. 같은 브라우저 세션으로 요청해 302 Location 을 읽는다.
 * 연달아 요청하면 구글이 "N초 뒤 이동" 대기 화면을 주는데, 그때는 N초 기다렸다가 안내된 주소를 다시 따라간다.
 */
async function resolveRedirect(ctx: BrowserContext, href: string): Promise<string | null> {
  let url = href
  for (let i = 0; i < 4; i++) {
    const res = await ctx.request.get(url, { maxRedirects: 0, failOnStatusCode: false, timeout: 15_000 }).catch(() => null)
    if (!res) return null
    const loc = res.headers()['location']
    if (loc) {
      const abs = new URL(loc, url).toString()
      if (!/(^|\.)google\./.test(new URL(abs).hostname)) return cleanUrl(abs)
      url = abs
      continue
    }
    const body = await res.text().catch(() => '')
    const m = body.match(/content="(\d+);\s*url=([^"]+)"/i)
    if (!m) return null
    await sleep(Math.min(10, Number(m[1])) * 1000 + 300)
    url = new URL(m[2].replace(/&amp;/g, '&'), url).toString()
  }
  return null
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

async function searchOnce(keyword: string, depth: number, headless: boolean): Promise<SerpFetch> {
  const ctx = await openContext(headless)
  try {
    const page = ctx.pages()[0] ?? (await ctx.newPage())
    page.setDefaultTimeout(NAV_TIMEOUT_MS)
    const out: SerpResult[] = []
    const seen = new Set<string>()
    let features: SerpFeatures | null = null
    for (let p = 0; p < Math.max(1, Math.ceil(depth / 10)); p++) {
      if (p > 0) await sleep(2000 + Math.random() * 2000)
      await page.goto(searchUrl(keyword, p * 10), { waitUntil: 'domcontentloaded' })
      if (await isCaptcha(page)) {
        if (headless) throw new CaptchaError('captcha')
        await page.bringToFront().catch(() => undefined)
        await waitCaptchaSolved(page)
        await page.waitForLoadState('domcontentloaded').catch(() => undefined)
      }
      if (p === 0) {
        features = await readFeatures(page)
        // data-q 에 검색어 자체가 들어오는 경우가 있다(AI 모드 질문) → 빼기
        const kw = keyword.replace(/\s+/g, '')
        features.peopleAlsoAsk = features.peopleAlsoAsk.filter((q) => q.replace(/[\s?？]+/g, '') !== kw)
      }
      let unresolved = 0
      for (const r of await readResults(page)) {
        if (!r.title || out.length >= depth) continue
        let url = cleanUrl(r.url)
        if (!url && isGoogleRedirect(r.url)) {
          url = await resolveRedirect(ctx, r.url)
          if (!url) unresolved++
          await sleep(400 + Math.random() * 400)
        }
        if (!url || seen.has(url)) continue
        seen.add(url)
        out.push({ position: out.length + 1, title: r.title, url })
      }
      if (unresolved) console.warn(`[chrome-serp] 실제 주소를 못 찾은 결과 ${unresolved}개는 뺐습니다`)
    }
    if (!out.length) throw new Error('구글 결과를 하나도 읽지 못했어요(화면 구조가 바뀌었을 수 있음). "URL 직접 입력"을 쓰세요.')
    return { results: out.slice(0, depth), features: features ?? { hasAiOverview: false, hasFeaturedSnippet: false, peopleAlsoAsk: [], relatedSearches: [] } }
  } finally {
    await ctx.close().catch(() => undefined)
  }
}

export function chromeGoogleSearch(keyword: string, depth = 10): Promise<SerpFetch> {
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
