/** 영문 페이지 공통 상수. 날짜·환율 문구를 페이지마다 흩어놓지 않는다. */

export const EN_UPDATED = 'August 20, 2026'
export const EN_UPDATED_ISO = '2026-08-20'

/**
 * 기획서 지정: 원화 기준 + 달러 근사치 병기.
 * 환율은 계속 움직이므로 "가정한 환산율"을 명시하고, 달러값은 어림수라고 못 박는다.
 */
export const FX_NOTE =
  'Won amounts are what you actually pay. US dollar figures are rough conversions at roughly **1,400 KRW = 1 USD** and move with the exchange rate — treat them as a ballpark, not a quote.'

/** 여러 페이지에서 반복 인용되는 한국 법령 사실. 표현이 갈리지 않게 한 곳에서 관리. */
export const LAW_LICENCE_REQUIRED =
  'Under the Public Health Control Act, Article 8(1), performing beauty services without the national licence is prohibited, and Article 20 sets a fine of up to 3 million KRW. Operating a shop without filing the business report under Article 3(1) carries up to 1 year imprisonment or a 10 million KRW fine.'


/**
 * 미국 대상 페이지 공통.
 * 기획서 필수 항목: 주(state)별 상이 명시 + 주 미용위원회 확인 안내 + 법률 조언 아님.
 */
export const US_STATE_NOTE =
  'Licensing rules, required training hours and fees are set state by state and change over time. Confirm current requirements with your state board of cosmetology. This page is general information, not legal advice.'

/** 급여 수치는 단일 숫자 단정 금지 — 범위 + 출처 유형을 항상 병기한다. */
export const US_PAY_NOTE =
  'Figures reflect wage aggregator data as of August 2026 and change frequently. They are given as ranges because sources measure different things — some count base wage only, others include tips and commission.'

/**
 * 지금까지 공개한 단계. 이 값 이하의 stage 를 가진 페이지만
 * sitemap·허브에 노출되고 색인이 허용된다.
 * 원고를 더 쓰는 것과 공개하는 것을 분리하기 위한 스위치다.
 * 기획서 지정 페이스: 주 10~15페이지를 넘기지 말 것.
 */
export const EN_RELEASED_STAGE = 5

/**
 * 의료 인접 시술(microneedling, chemical peel 등) 공통 고지.
 * 기획서 필수: 의료 조언 아님 + 면허 시술자 상담 + 주별 상이.
 * 금지 표현: treats / cures / removes scars / guaranteed / safe for everyone
 */
export const MED_DISCLAIMER =
  'This is general information, not medical advice. Who may perform this treatment, and at what depth, varies by state. Consult a licensed provider about your own skin, and follow the instructions they give you over anything you read here.'

/** 시술자 스코프가 쟁점인 페이지용 */
export const MED_STATE_SCOPE =
  'General information, not legal advice. Scope of practice is set by your state board, and in some cases your state medical board as well. Verify with both before offering or booking a treatment.'
