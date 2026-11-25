// ===========================================================================
//  발행 페이싱 (project15 pacing.ts 의 한국판) — 순수 함수, 화면에서 실행
//  - 예약 시각을 고를 때: 다른 글과 너무 붙었는지, 이번 주 편수·같은 카테고리 편수가 넘는지 경고
//  - "추천 시각": 위 규칙을 다 지키는 가장 빠른 예약 슬롯(07·10·13·19시)
//  - 막지 않는다. 사람이 그대로 예약할 수 있다.
//  규칙은 config/publish-pacing.json (시간 계산은 전부 한국시간 기준)
// ===========================================================================
import P from '../config/publish-pacing.json'
import type { BlogPostSummary } from '@site/lib/blog/types'

const KST = 9 * 3600_000
const DAY = 24 * 3600_000

export const PACING = P

/** 한국시간 기준 그 주 월요일 0시(UTC ms) */
function weekStartKst(t: number): number {
  const k = new Date(t + KST)
  const dow = (k.getUTCDay() + 6) % 7 // 월=0
  return Date.UTC(k.getUTCFullYear(), k.getUTCMonth(), k.getUTCDate() - dow) - KST
}

/** 글의 공개(예정) 시각 */
export function postTime(p: BlogPostSummary): number | null {
  const s = p.status === 'published' ? p.publishedAt : p.status === 'scheduled' ? p.scheduledAt : undefined
  const t = s ? Date.parse(s) : NaN
  return Number.isFinite(t) ? t : null
}

/** 예약은 그 시각 이후 첫 슬롯(정각+5분)에 실제로 공개된다 */
export function effectiveSlot(t: number): number {
  const k = new Date(t + KST)
  for (let d = 0; d < 3; d++) {
    for (const h of [...P.slots].sort((a, b) => a - b)) {
      const s = Date.UTC(k.getUTCFullYear(), k.getUTCMonth(), k.getUTCDate() + d, h, 5) - KST
      if (s >= t) return s
    }
  }
  return t
}

export interface PacingCheck {
  ok: boolean
  warnings: string[]
}

export function checkPacing(when: number, category: string, posts: BlogPostSummary[], excludeId?: string): PacingCheck {
  const warnings: string[] = []
  const others = posts.filter((p) => p.id !== excludeId && (p.status === 'published' || p.status === 'scheduled'))
  const t = effectiveSlot(when)
  const near = others.filter((p) => {
    const pt = postTime(p)
    return pt !== null && Math.abs(pt - t) < P.minGapHours * 3600_000
  })
  if (near.length) warnings.push(`다른 글과 ${P.minGapHours}시간 안에 붙어 있습니다: ${near.map((p) => `"${p.title}"`).join(', ')}`)
  const ws = weekStartKst(t)
  const sameWeek = others.filter((p) => {
    const pt = postTime(p)
    return pt !== null && pt >= ws && pt < ws + 7 * DAY
  })
  if (sameWeek.length >= P.maxPerWeek) warnings.push(`그 주에 이미 ${sameWeek.length}편이 있습니다(주 ${P.maxPerWeek}편 이하 권장).`)
  const sameCat = sameWeek.filter((p) => p.category === category)
  if (category && sameCat.length >= P.maxPerCategoryPerWeek)
    warnings.push(`그 주에 "${category}" 글이 이미 ${sameCat.length}편입니다(같은 카테고리 주 ${P.maxPerCategoryPerWeek}편 이하 권장).`)
  return { ok: warnings.length === 0, warnings }
}

/** 규칙을 다 지키는 가장 빠른 예약 슬롯(정각 시각, ms). 60일 안에 없으면 null */
export function suggestSlot(category: string, posts: BlogPostSummary[], excludeId?: string, from = Date.now()): number | null {
  const start = from + 30 * 60_000
  const k0 = new Date(start + KST)
  for (let d = 0; d < 60; d++) {
    for (const h of P.preferredSlots) {
      const t = Date.UTC(k0.getUTCFullYear(), k0.getUTCMonth(), k0.getUTCDate() + d, h, 0) - KST
      if (t < start) continue
      if (checkPacing(t, category, posts, excludeId).ok) return t
    }
  }
  return null
}

/** <input type="datetime-local"> 값 (이 PC 시간대 기준) */
export function toLocalInput(t: number): string {
  const d = new Date(t)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}

export function fmtKst(t: number): string {
  const k = new Date(t + KST)
  const w = '일월화수목금토'[k.getUTCDay()]
  return `${k.getUTCMonth() + 1}/${k.getUTCDate()}(${w}) ${String(k.getUTCHours()).padStart(2, '0')}:${String(k.getUTCMinutes()).padStart(2, '0')}`
}

/** 캘린더: 이번 주부터 N주, 주별 글 목록 */
export function weekPlan(posts: BlogPostSummary[], weeks = P.weeksAhead, from = Date.now()) {
  const ws0 = weekStartKst(from)
  return Array.from({ length: weeks }, (_, i) => {
    const ws = ws0 + i * 7 * DAY
    const items = posts
      .map((p) => ({ p, t: postTime(p) }))
      .filter((x): x is { p: BlogPostSummary; t: number } => x.t !== null && x.t >= ws && x.t < ws + 7 * DAY)
      .sort((a, b) => a.t - b.t)
    const k = new Date(ws + KST)
    return { label: `${k.getUTCMonth() + 1}/${k.getUTCDate()} 주`, items, over: items.length > P.maxPerWeek }
  })
}
