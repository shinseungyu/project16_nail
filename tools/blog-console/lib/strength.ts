// ===========================================================================
//  지면 강도 판정 (project15 serp-strength.ts 의 한국판) — 순수 함수
//  키워드를 쓰기 "전"에 이 검색 화면에서 이길 수 있는지 본다.
//  - 상위 결과를 지면 유형(공공·언론·위키·SNS·쇼핑·블로그·업체·개인)으로 나누고
//    약한 지면 비율 / 강한 지면 비율로 도전 가능·보통·어려움을 매긴다.
//  - 유료 도메인 지표(백링크)는 쓰지 않는다 → 유형 기반 잠정 판정. 막지 않고 표시만.
//  - 우리 사이트가 이미 상위에 있으면 "새 글 대신 기존 글 보강"을 먼저 권한다(카니벌라이제이션).
//  - 규칙은 config/serp-rules.json
// ===========================================================================
import rules from '../config/serp-rules.json'
import type { SerpFeatures, SerpResult } from './types'

type Strength = 'STRONG' | 'MID' | 'WEAK' | 'OWN'
export type Verdict = 'GO' | 'MAYBE' | 'HARD'

export interface StrengthRow {
  position: number
  host: string
  title: string
  url: string
  pageType: string
  label: string
  strength: Strength
  reason: string
}

export interface FeatureGuide {
  key: string
  label: string
  present: boolean
  tone: string
  meaning: string
  action: string
  prompt: string
}

export interface SerpStrength {
  verdict: Verdict
  verdictText: string
  rows: StrengthRow[]
  counts: Record<string, number>
  weakShare: number
  strongShare: number
  /** 우리 사이트가 걸린 순위(없으면 null) */
  ownPosition: number | null
  ownUrl: string | null
  /** 어려움일 때 대안 — 관련 검색어 중 더 구체적인 것 */
  altKeywords: string[]
  guides: FeatureGuide[]
}

type PT = { label: string; strength: Strength; domains?: string[]; titles?: string[] }
const R = rules as unknown as {
  ownDomain: string
  pageTypes: { domainOrder: string[]; titleOrder: string[] } & Record<string, PT>
  verdict: { goMinWeakShare: number; hardMinStrongShare: number }
  verdictText: Record<Verdict, string>
  serpFeatureGuide: {
    key: string
    label: string
    whenPresent: { tone: string; meaning: string; action: string; prompt: string }
    whenAbsent: { tone: string; meaning: string; action: string; prompt: string }
  }[]
}

export function hostOf(url: string): string {
  try {
    return new URL(url).hostname.toLowerCase().replace(/^www\./, '')
  } catch {
    return ''
  }
}

const hostMatches = (host: string, list: string[] = []) => list.find((d) => host === d || host.endsWith('.' + d)) ?? null

export function classify(host: string, title: string): { pageType: string; label: string; strength: Strength; reason: string } {
  const pt = R.pageTypes
  for (const type of pt.domainOrder) {
    const hit = hostMatches(host, pt[type]?.domains)
    if (hit) return { pageType: type, label: pt[type].label, strength: pt[type].strength, reason: `도메인 ${hit}` }
  }
  // 언론사 호스트는 목록에 다 넣을 수 없어서 news 가 들어간 호스트도 언론으로 본다
  if (/(^|\.)news\.|news\d*\./.test(host) || /^news/.test(host)) return { pageType: 'NEWS', label: pt.NEWS.label, strength: pt.NEWS.strength, reason: '호스트에 news' }
  for (const type of pt.titleOrder) {
    const hit = (pt[type]?.titles ?? []).find((k) => title.includes(k))
    if (hit) return { pageType: type, label: pt[type].label, strength: pt[type].strength, reason: `제목에 "${hit}"` }
  }
  return { pageType: 'OTHER', label: pt.OTHER.label, strength: pt.OTHER.strength, reason: '분류 신호 없음' }
}

export function buildFeatureGuides(f: SerpFeatures): FeatureGuide[] {
  return R.serpFeatureGuide.map((d) => {
    const v = (f as unknown as Record<string, unknown>)[d.key]
    const present = Array.isArray(v) ? v.length > 0 : !!v
    const g = present ? d.whenPresent : d.whenAbsent
    return { key: d.key, label: d.label, present, tone: g.tone, meaning: g.meaning, action: g.action, prompt: g.prompt }
  })
}

export function evaluateStrength(keyword: string, results: SerpResult[], features: SerpFeatures): SerpStrength {
  const rows: StrengthRow[] = results.map((r) => {
    const host = hostOf(r.url)
    return { position: r.position, host, title: r.title, url: r.url, ...classify(host, r.title) }
  })
  const counts: Record<string, number> = {}
  for (const r of rows) counts[r.pageType] = (counts[r.pageType] ?? 0) + 1

  const others = rows.filter((r) => r.strength !== 'OWN')
  const n = others.length || 1
  const weakShare = others.filter((r) => r.strength === 'WEAK').length / n
  const strongShare = others.filter((r) => r.strength === 'STRONG').length / n
  const verdict: Verdict =
    strongShare >= R.verdict.hardMinStrongShare ? 'HARD' : weakShare >= R.verdict.goMinWeakShare ? 'GO' : 'MAYBE'

  const own = rows.find((r) => r.strength === 'OWN') ?? null
  const kw = keyword.replace(/\s+/g, '')
  const altKeywords =
    verdict === 'HARD'
      ? features.relatedSearches.filter((s) => s.replace(/\s+/g, '').length > kw.length && s.replace(/\s+/g, '') !== kw).slice(0, 4)
      : []

  return {
    verdict,
    verdictText: R.verdictText[verdict],
    rows,
    counts,
    weakShare,
    strongShare,
    ownPosition: own?.position ?? null,
    ownUrl: own?.url ?? null,
    altKeywords,
    guides: buildFeatureGuides(features),
  }
}
