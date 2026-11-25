// ===========================================================================
//  지배적 검색 의도 판정 (project15 search-intent.ts 의 한국판) — 순수 함수
//  방법·절차형 / 비용형 / 비교·선택형 / 현실·판단형
//  키워드에 의도어가 없어도 함께 찾는 질문·관련 검색어·상위 제목을 근거로 판정한다.
//  가중치·신호어는 config/article-rules.json
// ===========================================================================
import rules from '../config/article-rules.json'
import type { SerpFeatures } from './types'

interface IntentType {
  key: string
  label: string
  desc: string
  guide: string
  signals: string[]
}

export interface SearchIntent {
  dominant: string
  label: string
  desc: string
  guide: string
  confidence: number
  mixed: boolean
  scores: { key: string; label: string; score: number }[]
  evidence: { text: string; source: string }[]
  /** 화면·프롬프트에 그대로 쓰는 한 줄 */
  summary: string
  /** 프롬프트용 지시 */
  promptLine: string
}

const SI = (rules as unknown as { searchIntent: { weights: Record<string, number>; minConfidence: number; fallback: string; types: IntentType[] } }).searchIntent

export function detectSearchIntent(keyword: string, features: SerpFeatures, top: { title: string; description: string }[]): SearchIntent {
  const W = SI.weights
  const pieces = [
    { text: keyword, weight: W.keyword, source: '키워드' },
    ...features.peopleAlsoAsk.map((t) => ({ text: t, weight: W.paa, source: '함께 찾는 질문' })),
    ...features.relatedSearches.map((t) => ({ text: t, weight: W.related, source: '관련 검색어' })),
    ...top.map((t) => ({ text: t.title, weight: W.title, source: '상위 제목' })),
    ...top.map((t) => ({ text: t.description, weight: W.description, source: '상위 설명' })),
  ]
  const scores: Record<string, number> = {}
  const evidence: Record<string, { text: string; source: string }[]> = {}
  for (const t of SI.types) {
    scores[t.key] = 0
    evidence[t.key] = []
  }
  for (const p of pieces) {
    if (!p.text) continue
    for (const t of SI.types) {
      const hit = t.signals.find((s) => p.text.includes(s))
      if (!hit) continue
      scores[t.key] += p.weight
      if (evidence[t.key].length < 3) evidence[t.key].push({ text: `"${hit}" ${p.text}`.slice(0, 60), source: p.source })
    }
  }
  const total = Object.values(scores).reduce((a, b) => a + b, 0)
  const ranked = SI.types.map((t) => ({ t, score: scores[t.key] })).sort((a, b) => b.score - a.score)
  const fallback = SI.types.find((t) => t.key === SI.fallback) ?? SI.types[0]
  const topT = ranked[0]?.score > 0 ? ranked[0].t : fallback
  const confidence = total > 0 ? scores[topT.key] / total : 0
  const mixed = total > 0 && confidence < SI.minConfidence
  const second = ranked.filter((r) => r.score > 0).slice(0, 2).map((r) => r.t)

  const summary =
    total === 0
      ? `판정 근거가 부족합니다. ${fallback.label}으로 가정합니다.`
      : mixed
        ? `의도가 섞여 있습니다 — ${second.map((t) => t.label).join(' + ')} (1위 비중 ${Math.round(confidence * 100)}%). 한쪽으로 강하게 밀지 마세요.`
        : `지배적 의도는 ${topT.label}입니다 (비중 ${Math.round(confidence * 100)}%) — ${topT.desc}.`
  const promptLine =
    mixed && second.length > 1
      ? `검색 의도가 섞여 있다(${second.map((t) => t.label).join(' + ')}). 두 의도에 모두 답하되 한쪽으로 치우치지 않는다. 앞쪽은 ${second[0].label} 기준: ${second[0].guide}`
      : `이 검색의 지배적 의도는 [${topT.label}] — ${topT.desc}. ${topT.guide}`

  return {
    dominant: topT.key,
    label: topT.label,
    desc: topT.desc,
    guide: topT.guide,
    confidence,
    mixed,
    scores: ranked.map((r) => ({ key: r.t.key, label: r.t.label, score: Math.round(r.score * 10) / 10 })),
    evidence: evidence[topT.key] ?? [],
    summary,
    promptLine,
  }
}
