/**
 * 블로그 고정값 — 카테고리, 카테고리별 "함께 보면 좋은 정보"(허브 내부링크), 면책 문구.
 * 사이트 템플릿·발행 검증·콘솔 프롬프트가 같이 쓴다. (의존성 없음)
 */

export const SITE_URL = 'https://www.nailstartup.com'
export const BLOG_PATH = '/blog'

export interface BlogCategory {
  key: string
  /** 칩 색 (tailwind 클래스) */
  color: string
  /** 이 카테고리 글 하단에 붙는 허브 링크 */
  hubs: { href: string; label: string }[]
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    key: '창업 준비',
    color: 'bg-stone-100 text-stone-700',
    hubs: [
      { href: '/guide', label: '네일샵 창업 단계별 가이드' },
      { href: '/cost', label: '네일샵 창업비용 총정리' },
      { href: '/license', label: '미용사(네일) 자격증 취득 방법' },
    ],
  },
  {
    key: '창업비용',
    color: 'bg-orange-100 text-orange-700',
    hubs: [
      { href: '/cost', label: '네일샵 창업비용 총정리' },
      { href: '/calculator', label: '창업비용 계산기' },
      { href: '/revenue', label: '네일샵 예상 수익 분석' },
    ],
  },
  {
    key: '자격증',
    color: 'bg-blue-100 text-blue-700',
    hubs: [
      { href: '/license', label: '미용사(네일) 자격증 취득 방법' },
      { href: '/qna', label: '자격증·창업 자주 묻는 질문' },
      { href: '/guide', label: '네일샵 창업 단계별 가이드' },
    ],
  },
  {
    key: '수익·운영',
    color: 'bg-emerald-100 text-emerald-700',
    hubs: [
      { href: '/revenue', label: '네일샵 예상 수익 분석' },
      { href: '/calculator', label: '창업비용·손익 계산기' },
      { href: '/cost', label: '네일샵 창업비용 총정리' },
    ],
  },
  {
    key: '마케팅',
    color: 'bg-violet-100 text-violet-700',
    hubs: [
      { href: '/guide', label: '네일샵 창업 단계별 가이드' },
      { href: '/revenue', label: '네일샵 예상 수익 분석' },
      { href: '/qna', label: '자주 묻는 질문' },
    ],
  },
  {
    key: '시술·트렌드',
    color: 'bg-rose-100 text-rose-700',
    hubs: [
      { href: '/nail-art', label: '네일아트 종류·가격 정리' },
      { href: '/qna#nail-care', label: '네일 시술 자주 묻는 질문' },
      { href: '/license', label: '미용사(네일) 자격증 취득 방법' },
    ],
  },
]

export const CATEGORY_KEYS = BLOG_CATEGORIES.map((c) => c.key)

export function categoryOf(key: string): BlogCategory {
  return BLOG_CATEGORIES.find((c) => c.key === key) ?? BLOG_CATEGORIES[0]
}

/** 모든 글 하단 공통 면책 — 비용·수익 수치가 실제와 다를 수 있음을 밝힌다(애드센스·신뢰도) */
export const BLOG_DISCLAIMER =
  '이 글의 비용·수익·기간 등 수치는 작성 시점의 일반적인 범위를 정리한 참고 정보이며, 지역·매장 규모·운영 방식에 따라 달라질 수 있습니다. 인허가·세무·자격 요건은 관할 구청, 국세청, 한국산업인력공단(큐넷) 등 공식 기관에서 최종 확인하세요.'

/** 본문에 허용하는 외부 링크(공공기관 등). 그 밖의 외부 링크는 발행 검증에서 막는다. */
export const ALLOWED_EXTERNAL_HOSTS = [
  'q-net.or.kr',
  'www.q-net.or.kr',
  'hometax.go.kr',
  'www.hometax.go.kr',
  'law.go.kr',
  'www.law.go.kr',
  'semas.or.kr',
  'www.semas.or.kr',
  'sbiz.or.kr',
  'www.sbiz.or.kr',
  'gov.kr',
  'www.gov.kr',
  'mohw.go.kr',
  'www.mohw.go.kr',
  'nts.go.kr',
  'www.nts.go.kr',
]
