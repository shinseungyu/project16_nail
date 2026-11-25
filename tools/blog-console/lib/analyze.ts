// 구조 분석 (project15 analyze.ts 의 한국어판) — 상위글을 요약·패턴화만 한다(원문 복제 금지).
// 이 결과가 완성 프롬프트의 [상위글 데이터]로 들어간다.
import type { AnalysisSummary, ExtractResult } from './types'

const STOP = new Set(
  '있습니다 합니다 됩니다 입니다 있는 없는 하는 되는 같은 위해 대한 통해 때문 경우 그리고 하지만 또한 이런 그런 이렇게 정도 가장 많이 있어 있고 있다 한다 된다 것이 것은 것을 수도 하면 하고 해서 그래서 우리 여러분 오늘 이번 바로 정말 보다 더욱 함께 모든 각각 이상 이하 아래 위에 대해 관련 사용 확인 필요 가능 포스팅 블로그 댓글 공감 이웃 구독 클릭 사진 출처'.split(
    ' '
  )
)
const JOSA = /(으로|에서|까지|부터|이나|이라|에게|처럼|보다|하고|과는|와는|이며|이고|은|는|이|가|을|를|에|의|로|와|과|도|만)$/

function norm(h: string) {
  return h.replace(/^[\d.\s)]+/, '').replace(/\s+/g, ' ').trim()
}

function commonHeadings(ex: ExtractResult[]): string[] {
  const count = new Map<string, number>()
  for (const e of ex) for (const h of new Set(e.headings.map(norm).filter(Boolean))) count.set(h, (count.get(h) ?? 0) + 1)
  const sorted = Array.from(count.entries()).sort((a, b) => b[1] - a[1])
  const common = sorted.filter(([, c]) => c >= 2).map(([h]) => h)
  return (common.length ? common : sorted.map(([h]) => h)).slice(0, 15)
}

function topKeywords(ex: ExtractResult[]) {
  const counts = new Map<string, number>()
  for (const e of ex) {
    for (let tok of e.text.match(/[가-힣A-Za-z0-9]{2,}/g) ?? []) {
      if (tok.length > 3) tok = tok.replace(JOSA, '')
      if (tok.length < 2 || tok.length > 10 || STOP.has(tok) || /^\d+$/.test(tok)) continue
      counts.set(tok, (counts.get(tok) ?? 0) + 1)
    }
  }
  return Array.from(counts.entries())
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20)
}

function numberLists(ex: ExtractResult[]): string[] {
  const set = new Set<string>()
  for (const e of ex)
    for (const s of [e.metaTitle, ...e.headings])
      for (const m of s.match(/\d+\s*(가지|단계|개|곳|팁|방법|순서|체크리스트|원칙|포인트)/g) ?? []) set.add(m.replace(/\s+/g, ''))
  return Array.from(set).slice(0, 8)
}

function titlePattern(ex: ExtractResult[]): string {
  const titles = ex.map((e) => e.metaTitle).filter(Boolean)
  if (!titles.length) return '(제목 정보 없음)'
  const n = titles.length
  const q = titles.filter((t) => /[?？]/.test(t)).length
  const sum = titles.filter((t) => /총정리|정리|가이드|A to Z|모든 것/.test(t)).length
  const year = titles.filter((t) => /20\d\d/.test(t)).length
  const num = titles.filter((t) => /\d+\s*(가지|단계|개|만\s*원|원)/.test(t)).length
  const parts = [q >= Math.ceil(n / 2) ? `질문형 다수(${q}/${n})` : `서술형 위주(질문형 ${q}/${n})`]
  if (sum) parts.push(`"총정리·가이드"형 ${sum}/${n}`)
  if (year) parts.push(`연도 표기 ${year}/${n}`)
  if (num) parts.push(`숫자(금액·개수) 포함 ${num}/${n}`)
  return parts.join(', ')
}

function comparisonTargets(ex: ExtractResult[]): string[] {
  const W = '[가-힣A-Za-z0-9]{2,12}'
  const res = [
    new RegExp(`(${W})\\s*(?:vs|VS|대)\\s*(${W})`, 'g'),
    new RegExp(`(${W})(?:와|과|랑|이랑)\\s*(${W})\\s*(?:의\\s*)?(?:차이|비교)`, 'g'),
  ]
  const count = new Map<string, number>()
  for (const e of ex)
    for (const s of [e.metaTitle, ...e.headings])
      for (const re of res) {
        re.lastIndex = 0
        let m: RegExpExecArray | null
        while ((m = re.exec(s))) for (let i = 1; i < m.length; i++) if (m[i]) count.set(m[i], (count.get(m[i]) ?? 0) + 1)
      }
  return Array.from(count.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([w]) => w)
    .slice(0, 4)
}

const THEMES: { theme: string; s: string[] }[] = [
  { theme: '비용·예산', s: ['비용', '얼마', '예산', '가격', '돈'] },
  { theme: '자격증', s: ['자격증', '시험', '필기', '실기', '국가자격'] },
  { theme: '수입·수익', s: ['수입', '수익', '매출', '순수익', '벌'] },
  { theme: '기간·준비 순서', s: ['기간', '얼마나 걸', '순서', '절차', '준비'] },
  { theme: '상권·입지', s: ['상권', '입지', '위치', '임대', '월세', '보증금'] },
  { theme: '인테리어·장비', s: ['인테리어', '장비', '재료', '기계', '램프'] },
  { theme: '신고·위생교육·세금', s: ['신고', '위생교육', '사업자', '세금', '부가세', '종소세'] },
  { theme: '마케팅·고객', s: ['마케팅', '홍보', '고객', '단골', '플레이스', '리뷰'] },
  { theme: '1인샵·홈샵', s: ['1인', '홈샵', '혼자', '공유'] },
  { theme: '대출·지원금', s: ['대출', '지원금', '정책자금', '지원'] },
]

export function analyze(ex: ExtractResult[]): AnalysisSummary {
  const ok = ex.filter((e) => e.ok)
  const lengths = ok.map((e) => e.text.replace(/\s+/g, '').length)
  const faqQuestions = Array.from(new Set(ok.flatMap((e) => e.faq.map((f) => f.q)))).slice(0, 15)
  const themeSrc = [...faqQuestions, ...ok.flatMap((e) => e.headings)]
  const faqThemes = THEMES.filter((t) => themeSrc.some((q) => t.s.some((s) => q.includes(s)))).map((t) => t.theme)
  const faqN = ok.filter((e) => e.schemaTypes.some((t) => /FAQPage/i.test(t))).length
  const artN = ok.filter((e) => e.schemaTypes.some((t) => /Article|BlogPosting/i.test(t))).length
  return {
    avgLength: lengths.length ? Math.round(lengths.reduce((a, b) => a + b, 0) / lengths.length) : 0,
    commonHeadings: commonHeadings(ok),
    topKeywords: topKeywords(ok),
    numberLists: numberLists(ok),
    titlePattern: titlePattern(ok),
    topTitles: ok.map((e) => e.metaTitle || e.title).filter(Boolean).slice(0, 6),
    comparisonTargets: comparisonTargets(ok),
    schemaSummary: ok.length
      ? `상위 ${ok.length}개 중 Article/BlogPosting ${artN}개, FAQPage ${faqN}개`
      : '분석된 글 없음',
    hasFaq: faqQuestions.length > 0 || ok.some((e) => e.headings.some((h) => /자주\s*묻는|FAQ|Q&A/i.test(h))),
    faqQuestions,
    faqThemes,
  }
}
