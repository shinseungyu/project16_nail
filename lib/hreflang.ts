/**
 * 한국어(ko) ↔ 영문(en) 페이지 짝 — 단일 소스.
 *
 * 여기만 고치면 각 페이지 metadata의 <link rel="alternate" hreflang>과
 * sitemap.xml의 xhtml:link 가 함께 갱신된다. 양쪽에 따로 하드코딩하면
 * 반드시 어긋나므로 매핑은 이 파일 밖으로 나가지 않게 한다.
 *
 * 원칙(기획서 기준):
 *  - 억지로 1:1을 만들지 않는다. 가장 가까운 한 쌍만 등록하고 나머지는 본문 내부링크로 처리.
 *  - x-default 는 항상 한국어를 가리킨다. 이 사이트의 기본 언어가 한국어이기 때문.
 *  - 짝이 없는 영문 페이지는 hreflang 자체를 넣지 않는다(1개짜리 hreflang 세트는 무의미).
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

/** ko 경로 → en 경로 */
export const KO_TO_EN: Record<string, string> = {
  '/': '/en',
  '/nail-art': '/en/nail-art-korea',
  '/skincare': '/en/skin-clinic-vs-salon',
  '/skincare/service/waxing': '/en/waxing-korea',
  '/makeup/service/eyelash': '/en/eyelash-extensions-korea',
  '/hair': '/en/hair-salon-korea',
  '/hair/service/perm': '/en/korean-perm-guide',
  '/hair/scalp': '/en/scalp-scaling',
  '/makeup/personal-color': '/en/personal-color-korea',
  '/semi-permanent': '/en/semi-permanent-makeup-korea',
  '/license': '/en/beauty-license-korea',
  '/cost': '/en/open-beauty-salon-korea',
  '/hair/career/how-to': '/en/work-beauty-industry-korea',
  '/privacy': '/en/privacy',
}

/** en 경로 → ko 경로 (역방향 자동 생성) */
export const EN_TO_KO: Record<string, string> = Object.fromEntries(
  Object.entries(KO_TO_EN).map(([ko, en]) => [en, ko])
)

type Languages = { ko: string; en: string; 'x-default': string }

/**
 * 홈은 canonical·sitemap <loc> 모두 트레일링 슬래시 없이 나간다.
 * hreflang만 '/'가 붙으면 Google이 같은 URL로 확실히 묶어주지 않으므로 표기를 맞춘다.
 */
const abs = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`

/**
 * 어느 쪽 경로를 넣든 그 페이지가 써야 할 hreflang 3종을 돌려준다.
 * 짝이 없으면 undefined — 호출부에서 그대로 alternates.languages 에 넘기면 된다.
 */
export function hreflang(path: string): Languages | undefined {
  const ko = path.startsWith('/en') ? EN_TO_KO[path] : path
  const en = path.startsWith('/en') ? path : KO_TO_EN[path]
  if (!ko || !en) return undefined
  return { ko: abs(ko), en: abs(en), 'x-default': abs(ko) }
}

/** sitemap 항목에 그대로 펼쳐 넣는 형태. 짝이 없으면 빈 객체라 스프레드해도 안전하다. */
export function sitemapAlternates(path: string): { alternates?: { languages: Languages } } {
  const languages = hreflang(path)
  return languages ? { alternates: { languages } } : {}
}
