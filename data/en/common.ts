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
