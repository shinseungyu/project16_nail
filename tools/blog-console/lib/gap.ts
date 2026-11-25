// ===========================================================================
//  빈틈(GAP) 분석 (project15 gap.ts 의 한국판) — 순수 함수
//
//  상위글 공통 항목만 모으면 결과물이 "기존 글들의 평균"이 되고, 평균으로는 기존 글을 못 밀어낸다.
//  공통 항목(CORE·COMMON)은 통과 조건이고, 우위는 아무도 안 다룬 빈틈(GAP)에서 나온다.
//
//  빈틈 후보 = 3가지 근거를 합친다 (우선순위 순)
//   ① 구조적 결손: 검색 의도에 꼭 필요한데 상위글이 거의 안 다룬 것
//   ② 함께 찾는 질문·관련 검색어에는 있는데 상위글 소제목에는 없는 것 (수요는 있는데 공급이 없음)
//   ③ 상위글 1~2개만 다룬 소주제
//  사람이 화면에서 1~2개를 고르면 완성 프롬프트에 "이 글의 차별화 포인트"로 들어간다.
//  규칙·사전은 config/article-rules.json
// ===========================================================================
import rules from '../config/article-rules.json'
import type { ExtractResult, SerpFeatures } from './types'

export type Tier = 'CORE' | 'COMMON' | 'GAP'
export type GapSource = 'structural' | 'paa' | 'related' | 'heading_novel' | 'heading'

export interface GapTopic {
  key: string
  label: string
  coverage: number
  coverageTotal: number
  tier: Tier
  source: GapSource
  evidence: string[]
}

export interface GapAnalysis {
  core: GapTopic[]
  common: GapTopic[]
  gaps: GapTopic[]
  recommended: string | null
  coverageTotal: number
}

const AR = rules as unknown as {
  coverage: { coreMin: number; commonMin: number }
  topics: { key: string; signals: string[] }[]
  excludeFromGap: string[]
  demandStripWords: string[]
  demandGenericWords: string[]
  noiseHeadings: string[]
  noisePatterns: string[]
  novelHeading: { minLen: number; maxLen: number }
  aspectMarkers: string[]
  structuralGaps: { intent: string[]; requiredTopic: string; label: string }[]
}

export const SOURCE_LABEL: Record<GapSource, string> = {
  structural: '의도 대비 결손',
  paa: '함께 찾는 질문',
  related: '관련 검색어',
  heading_novel: '상위 1~2개만 다룸',
  heading: '상위 소수만 다룸',
}

export function normalizeHeading(h: string): string {
  return h
    // 앞 번호("1.", "2)", "03 ")·기호만 지운다. "1인 네일샵" 의 1 은 남긴다.
    .replace(/^\s*(?:\d{1,2}[.)]\s*|\d{1,2}\s+(?=\D)|[-•·■□▶▷●○◆◇★☆✔✅#]+\s*)+/, '')
    .replace(/[【】[\]()「」『』"'“”]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

const NOISE_RE = AR.noisePatterns
  .map((p) => {
    try {
      return new RegExp(p)
    } catch {
      return null
    }
  })
  .filter((r): r is RegExp => !!r)

function isNoise(h: string): boolean {
  const n = normalizeHeading(h)
  if (n.replace(/\s/g, '').length < 2 || n.length > 50) return true
  if (AR.noiseHeadings.some((w) => n.includes(w))) return true
  return NOISE_RE.some((re) => re.test(n))
}

export function keywordTokens(keyword: string): string[] {
  return Array.from(new Set(keyword.split(/\s+/).filter((t) => t.length >= 2)))
}

function novelOk(h: string, keyword: string): boolean {
  const n = normalizeHeading(h)
  if (n.length < AR.novelHeading.minLen || n.length > AR.novelHeading.maxLen) return false
  if (keywordTokens(keyword).some((t) => n.includes(t))) return true
  return AR.aspectMarkers.some((m) => n.includes(m))
}

export function topicOf(text: string): string | null {
  const n = normalizeHeading(text)
  for (const t of AR.topics) if (t.signals.some((s) => n.includes(s))) return t.key
  return null
}

function tierOf(covered: number, total: number): Tier {
  const ratio = total > 0 ? covered / total : 0
  if (ratio >= AR.coverage.coreMin / 10) return 'CORE'
  // 3~5개만 골라 분석하면 1개 글만 다뤄도 비율상 COMMON 이 된다 → 1개뿐이면 빈틈으로 본다
  if (covered < 2 && total >= 3) return 'GAP'
  if (ratio >= AR.coverage.commonMin / 10) return 'COMMON'
  return 'GAP'
}

export function runGapAnalysis(keyword: string, extracts: ExtractResult[], features: SerpFeatures): GapAnalysis {
  const ok = extracts.filter((e) => e.ok)
  const total = ok.length
  const buckets = new Map<string, { label: string; articles: Set<number>; evidence: Set<string>; novel: boolean }>()
  ok.forEach((e, idx) => {
    for (const raw of e.headings) {
      if (isNoise(raw)) continue
      const key = topicOf(raw)
      const novel = !key
      if (novel && !novelOk(raw, keyword)) continue
      const k = key ?? 'novel:' + normalizeHeading(raw).replace(/\s/g, '')
      const b = buckets.get(k) ?? { label: key ?? normalizeHeading(raw), articles: new Set(), evidence: new Set(), novel }
      b.articles.add(idx)
      b.evidence.add(normalizeHeading(raw))
      buckets.set(k, b)
    }
  })

  const topics: GapTopic[] = []
  const push = (key: string, label: string, covered: number, source: GapSource, evidence: string[]) =>
    topics.push({ key, label, coverage: covered, coverageTotal: total, tier: tierOf(covered, total), source, evidence: evidence.slice(0, 3) })

  for (const [k, b] of buckets) push(k, b.label, b.articles.size, b.novel ? 'heading_novel' : 'heading', Array.from(b.evidence))

  // ② 수요(질문·관련 검색어)는 있는데 상위글이 안 다룬 것
  const seen = new Set(topics.map((t) => t.key))
  const strip = (t: string) =>
    AR.demandStripWords
      .reduce((s, w) => s.split(w).join(' '), t)
      .replace(/\s+/g, ' ')
      .trim()
  const demand = [
    ...features.peopleAlsoAsk.map((t) => ({ text: t, source: 'paa' as GapSource })),
    ...features.relatedSearches.map((t) => ({ text: strip(t), source: 'related' as GapSource })),
  ].filter((d) => d.text)
  for (const d of demand) {
    const key = topicOf(d.text)
    if (key) {
      const ex = topics.find((t) => t.key === key)
      if (!ex) {
        push(key, key, 0, d.source, [d.text])
        seen.add(key)
      } else if (ex.tier === 'GAP' && (ex.source === 'heading' || ex.source === 'heading_novel')) {
        ex.source = d.source
        ex.evidence = [...ex.evidence, d.text].slice(0, 3)
      } else if (ex.source === d.source) {
        ex.evidence = Array.from(new Set([...ex.evidence, d.text])).slice(0, 3)
      }
    } else {
      // 키워드 그대로이거나, 일반어(네일샵·창업…)만 남는 관련 검색어는 빈틈이 아니다
      const flat = d.text.replace(/\s/g, '')
      if (flat === keyword.replace(/\s/g, '') || flat.length < 4) continue
      const generic = new Set([...keywordTokens(keyword), ...AR.demandGenericWords])
      if (d.text.split(/\s+/).every((w) => generic.has(w))) continue
      const k = 'demand:' + flat
      if (!seen.has(k)) {
        seen.add(k)
        push(k, d.text.trim(), 0, d.source, [d.text])
      }
    }
  }

  // ① 구조적 결손
  for (const sg of AR.structuralGaps) {
    const hit = sg.intent.find((i) => keyword.includes(i))
    if (!hit) continue
    const req = topics.find((t) => t.key === sg.requiredTopic)
    const covered = req?.coverage ?? 0
    if (tierOf(covered, total) !== 'GAP') continue
    const k = 'structural:' + sg.requiredTopic
    if (seen.has(k)) continue
    seen.add(k)
    // 같은 주제가 수요 근거로 따로 올라와 있으면 합친다
    const demandEv: string[] = []
    for (let i = topics.length - 1; i >= 0; i--) {
      const t = topics[i]
      if (t.key === sg.requiredTopic && (t.source === 'paa' || t.source === 'related')) {
        demandEv.push(...t.evidence)
        topics.splice(i, 1)
      }
    }
    const why = covered ? `상위 ${total}개 중 ${covered}개만 "${sg.requiredTopic}"을 다룸` : `상위 ${total}개 모두 "${sg.requiredTopic}"을 안 다룸`
    push(k, sg.label, covered, 'structural', [`"${hit}" 검색인데 ${why}`, ...demandEv])
  }

  const byCov = (a: GapTopic, b: GapTopic) => b.coverage - a.coverage
  const RANK: Record<GapSource, number> = { structural: 0, paa: 1, related: 2, heading_novel: 3, heading: 4 }
  const gaps = topics
    .filter((t) => t.tier === 'GAP' && !AR.excludeFromGap.includes(t.key))
    .sort((a, b) => RANK[a.source] - RANK[b.source] || a.coverage - b.coverage)
    .slice(0, 12)

  return {
    core: topics.filter((t) => t.tier === 'CORE').sort(byCov),
    common: topics.filter((t) => t.tier === 'COMMON').sort(byCov),
    gaps,
    recommended: gaps[0]?.key ?? null,
    coverageTotal: total,
  }
}
