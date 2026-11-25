// 상위 결과 → 후보 점수(블로그·칼럼일수록 높게). 규칙은 config/filter-rules.json
import rules from '../../config/filter-rules.json'
import type { Candidate, SerpResult } from '../types'

const host = (u: string) => {
  try {
    return new URL(u).hostname.toLowerCase()
  } catch {
    return ''
  }
}
const pathOf = (u: string) => {
  try {
    return new URL(u).pathname.toLowerCase()
  } catch {
    return ''
  }
}

export function scoreCandidates(results: SerpResult[], keyword: string): Candidate[] {
  const kwTokens = keyword.split(/\s+/).filter((t) => t.length >= 2)
  return results.map((r) => {
    const h = host(r.url)
    const p = pathOf(r.url)
    const reasons: string[] = []
    const ex = rules.excludeDomains.find((d) => h.includes(d))
    if (ex) return { ...r, score: -99, reasons: [`제외 도메인(${ex})`], recommended: false, excluded: true }

    let score = 0
    if (rules.blogDomains.some((d) => h === d || h.endsWith('.' + d) || h.endsWith(d))) {
      score += 2
      reasons.push('블로그 플랫폼')
    }
    const up = rules.urlPositive.find((x) => p.includes(x))
    if (up) {
      score += 1
      reasons.push(`경로 ${up}`)
    }
    const un = rules.urlNegative.find((x) => p.includes(x))
    if (un) {
      score -= 2
      reasons.push(`상품·예약 경로 ${un}`)
    }
    if (rules.titlePositive.some((x) => r.title.includes(x))) {
      score += 1
      reasons.push('정보성 제목')
    }
    if (rules.titleNegative.some((x) => r.title.includes(x))) {
      score -= 1
      reasons.push('거래성 제목')
    }
    const kwHits = kwTokens.filter((t) => r.title.replace(/\s+/g, '').includes(t)).length
    if (kwTokens.length && kwHits === kwTokens.length) {
      score += 1
      reasons.push('제목에 키워드')
    }
    if (p === '/' || p === '') {
      score -= 1
      reasons.push('메인 페이지')
    }
    return { ...r, score, reasons, recommended: score >= 2, excluded: false }
  })
}
