// ===========================================================================
//  내용 검수 (project15 review.ts 의 애드센스·한국 창업 정보판) — 순수 함수, 화면에서 즉시 실행
//  - 발행 조건(제목·설명·소제목·링크 등)은 사이트와 같은 validatePost 가 따로 본다.
//  - 여기서는 "표현" 위험을 본다: 수익 보장·과장·광고 클릭 유도·의료 표현·경험담 날조·출처 날조·키워드 남용·상위글 복제.
//  - 통과 못 해도 저장은 막지 않는다. 🔴(block)이 있으면 발행 버튼만 잠근다.
// ===========================================================================
import { parseArticle, type ParsedArticle } from '@site/lib/blog/markdown'

export interface ReviewFinding {
  level: 'block' | 'warn'
  category: string
  message: string
  evidence?: string
}

interface Rule {
  level: 'block' | 'warn'
  category: string
  re: RegExp
  message: string
}

const RULES: Rule[] = [
  { level: 'block', category: '수익 보장', re: /(수익|매출|순수익|소득|원금|성공)\s*(?:을|를|이|가)?\s*(?:100%\s*)?보장/g, message: '수익·성공을 보장하는 표현은 애드센스·광고 심사에서 위험합니다.' },
  { level: 'block', category: '수익 보장', re: /월\s*[\d,.]+\s*만\s*원?\s*(?:이상\s*)?(?:보장|확정|무조건)/g, message: '특정 월수입을 확정하는 표현입니다. 범위+조건으로 바꾸세요.' },
  { level: 'block', category: '수익 보장', re: /(무조건|100%|반드시|절대)\s*(성공|돈을?\s*벌|수익|망하지|실패하지|손해\s*없)/g, message: '결과를 단정하는 표현입니다.' },
  { level: 'block', category: '수익 보장', re: /누구나\s*(쉽게\s*)?(월\s*[\d,]+|억대|고수익|큰\s*돈)/g, message: '"누구나 ○○ 번다"류 표현은 과장 광고로 봅니다.' },
  { level: 'block', category: '광고 클릭 유도', re: /(광고|배너)\s*(를|을)?\s*(클릭|눌러|터치)|아래\s*광고를?\s*(보|확인)/g, message: '광고를 언급하거나 클릭을 유도하면 애드센스 정책 위반입니다.' },
  { level: 'block', category: '의료 표현', re: /(완치|처방해|치료해\s*드|치료\s*효과\s*보장)/g, message: '의료 효과를 단정하는 표현입니다. 미용 영역을 벗어납니다.' },
  { level: 'warn', category: '의료 표현', re: /(치료|진단|부작용\s*없|통증\s*없|100%\s*안전)/g, message: '의료 표현으로 읽힐 수 있습니다. "전문의 상담"으로 안내하세요.' },
  { level: 'warn', category: '과장', re: /(최고의|업계\s*1위|국내\s*1위|유일한|완벽한|완벽하게|압도적|역대급|기적|단언컨대|최저가)/g, message: '최상급·과장 표현입니다. 근거 없이 쓰지 마세요.' },
  { level: 'warn', category: '경험담', re: /(제가\s*직접\s*(운영|해\s*보|창업)|저희\s*(샵|매장|가게)|제\s*경험상|실제로\s*운영해\s*보니|저도\s*처음엔)/g, message: '정보 사이트에서 겪지 않은 경험을 쓰면 신뢰도(E-E-A-T) 위험이 큽니다. 실제 경험이 아니면 지우세요.' },
  { level: 'warn', category: '출처 확인', re: /(조사에\s*따르면|통계에\s*따르면|연구에\s*따르면|발표에\s*따르면|논문)/g, message: '출처가 실제로 있는지 확인하세요(AI 가 지어내기 쉬운 부분).' },
  { level: 'warn', category: '출처 확인', re: /\d+(?:\.\d+)?\s*%/g, message: '퍼센트 수치 — 근거가 확실한지 확인하세요.' },
]

const MAX_EVIDENCE = 3

/** 상위글과 겹치는 비율(공백 뺀 10글자 조각 기준) */
export function similarityRatio(text: string, sources: string[]): number {
  const N = 10
  const strip = (s: string) => s.replace(/^#{1,6}\s+/gm, '').replace(/[*_`>#|\-[\]()!]/g, '').replace(/\s+/g, '')
  const gen = strip(text)
  if (gen.length < N || sources.length === 0) return 0
  const src = new Set<string>()
  for (const s of sources) {
    const t = strip(s)
    for (let i = 0; i + N <= t.length; i++) src.add(t.slice(i, i + N))
  }
  let hit = 0
  let total = 0
  for (let i = 0; i + N <= gen.length; i += 2) {
    total++
    if (src.has(gen.slice(i, i + N))) hit++
  }
  return total ? hit / total : 0
}

export function reviewContent(
  input: { title: string; description: string; markdown: string; keyword?: string },
  sources: string[] = [],
  parsed?: ParsedArticle
): { findings: ReviewFinding[]; similarity: number } {
  const findings: ReviewFinding[] = []
  const all = `${input.title}\n${input.description}\n${input.markdown}`

  for (const r of RULES) {
    const hits = Array.from(new Set((all.match(r.re) ?? []).map((h) => h.trim())))
    if (!hits.length) continue
    findings.push({ level: r.level, category: r.category, message: r.message, evidence: hits.slice(0, MAX_EVIDENCE).join(' · ') })
  }

  // 지난 연도를 제목에 박아 두면 금방 낡아 보인다
  const thisYear = new Date().getFullYear()
  const years = (input.title.match(/20\d\d/g) ?? []).map(Number).filter((y) => y < thisYear)
  if (years.length) findings.push({ level: 'warn', category: '연도', message: `제목에 지난 연도(${years.join(', ')})가 있습니다.` })

  const p = parsed ?? parseArticle(input.markdown)
  const kw = (input.keyword ?? '').trim()
  if (kw) {
    const core = kw.replace(/\s+/g, '')
    const flat = input.markdown.replace(/\s+/g, '')
    const count = flat.split(core).length - 1
    const per1000 = p.charCount ? (count / p.charCount) * 1000 : 0
    if (per1000 > 12)
      findings.push({ level: 'warn', category: '키워드 남용', message: `키워드가 1,000자당 ${per1000.toFixed(1)}번 나옵니다(${count}회). 억지 반복은 감점 요인입니다.` })
    if (count === 0) findings.push({ level: 'warn', category: '키워드', message: '본문에 키워드가 한 번도 없습니다.' })
    const firstText = (p.summary[0] ?? '') + p.introHtml
    if (count > 0 && !firstText.replace(/\s+/g, '').includes(core))
      findings.push({ level: 'warn', category: '키워드', message: '핵심 요약 첫 줄·도입 문단에 키워드가 없습니다.' })
    const h2With = p.sections.filter((s) => s.heading.replace(/<[^>]+>|\s+/g, '').includes(core.slice(0, Math.max(2, Math.ceil(core.length / 2))))).length
    if (p.sections.length >= 3 && h2With / p.sections.length < 0.3)
      findings.push({ level: 'warn', category: '키워드', message: `소제목 ${p.sections.length}개 중 키워드가 들어간 것이 ${h2With}개입니다(1/3~1/2 권장).` })
  }

  const similarity = similarityRatio(input.markdown, sources)
  if (similarity >= 0.3)
    findings.push({ level: 'block', category: '상위글 복제', message: `상위글과 ${Math.round(similarity * 100)}% 겹칩니다. 복제 의심 — 문장을 새로 쓰세요.` })
  else if (similarity >= 0.12)
    findings.push({ level: 'warn', category: '상위글 유사', message: `상위글과 ${Math.round(similarity * 100)}% 겹칩니다. 겹치는 문장을 고쳐 쓰세요.` })

  return { findings, similarity }
}
