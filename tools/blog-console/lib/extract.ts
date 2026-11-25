// 본문 정제 (project15 extract.ts 이식) — Readability 전에 제목·설명·소제목·구조화 데이터·FAQ 를 먼저 수집한다.
import { JSDOM, VirtualConsole } from 'jsdom'
import { Readability } from '@mozilla/readability'
import type { ExtractResult, FaqPair } from './types'

const empty = (url: string, error?: string): ExtractResult => ({
  url,
  ok: false,
  error,
  title: '',
  metaTitle: '',
  metaDescription: '',
  text: '',
  headings: [],
  schemaTypes: [],
  faq: [],
})

function parseJsonLd(doc: Document): { types: string[]; faq: FaqPair[] } {
  const types: string[] = []
  const faq: FaqPair[] = []
  doc.querySelectorAll('script[type="application/ld+json"]').forEach((s) => {
    let data: unknown
    try {
      data = JSON.parse(s.textContent || '')
    } catch {
      return
    }
    const walk = (o: unknown) => {
      if (!o || typeof o !== 'object') return
      if (Array.isArray(o)) return o.forEach(walk)
      const obj = o as Record<string, unknown>
      if (Array.isArray(obj['@graph'])) (obj['@graph'] as unknown[]).forEach(walk)
      const t = obj['@type']
      const ts = Array.isArray(t) ? t.map(String) : t ? [String(t)] : []
      types.push(...ts)
      if (ts.includes('Question') && typeof obj.name === 'string') {
        const ans = obj.acceptedAnswer as Record<string, unknown> | undefined
        faq.push({ q: obj.name.trim(), a: String(ans?.text ?? '').trim() })
      }
      if (Array.isArray(obj.mainEntity)) (obj.mainEntity as unknown[]).forEach(walk)
    }
    walk(data)
  })
  return { types: Array.from(new Set(types)), faq }
}

export function extractArticle(url: string, html: string): ExtractResult {
  if (!html) return empty(url, '내용 없음')
  try {
    const dom = new JSDOM(html, { url, virtualConsole: new VirtualConsole() })
    const doc = dom.window.document
    doc.querySelectorAll('script:not([type="application/ld+json"]), style, noscript, iframe').forEach((n) => n.remove())

    const metaTitle = (doc.querySelector('title')?.textContent ?? '').trim()
    const metaDescription = (
      doc.querySelector('meta[name="description"]')?.getAttribute('content') ??
      doc.querySelector('meta[property="og:description"]')?.getAttribute('content') ??
      ''
    ).trim()
    // 네이버 블로그(스마트에디터)는 소제목이 h2/h3 가 아니라 굵은 문단·인용구인 경우가 많다 → se 소제목 클래스도 본다
    const headings = Array.from(doc.querySelectorAll('h2, h3, .se-section-sectionTitle, .se-text-paragraph-align-center b'))
      .map((h) => (h.textContent ?? '').replace(/\s+/g, ' ').trim())
      .filter((t) => t.length >= 2 && t.length <= 80)
      .slice(0, 40)
    const ld = parseJsonLd(doc)
    const faq = ld.faq.length
      ? ld.faq
      : headings.filter((h) => /[?？]$/.test(h)).slice(0, 10).map((q) => ({ q, a: '' }))

    const parsed = new Readability(doc).parse()
    const text = (parsed?.textContent ?? '')
      .replace(/​/g, '')
      .replace(/[ \t]{2,}/g, ' ')
      .replace(/\s*\n\s*/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim()
    if (!text) return empty(url, '본문을 찾지 못함')
    return {
      url,
      ok: true,
      title: parsed?.title?.trim() || metaTitle,
      metaTitle,
      metaDescription,
      text,
      headings,
      schemaTypes: ld.types,
      faq,
    }
  } catch (e) {
    return empty(url, e instanceof Error ? e.message : String(e))
  }
}
