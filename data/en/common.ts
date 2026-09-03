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

/**
 * 반영구 화장(microblading 등) 전용 고지.
 * 기획서 필수: 미국 다수 주에서 문신으로 규제되며, 미용사 면허만으로는 부족하다.
 * 금지: "cosmetology license is enough" / "semi-permanent so it's not a tattoo" /
 *       "completely fades away" / "risk-free" / "painless"
 */
export const PMU_TATTOO_NOTE =
  'General information, not medical or legal advice. In many US states microblading is regulated as tattooing, administered by health departments rather than cosmetology boards. A cosmetology or esthetics licence alone is generally not sufficient. Check both your state or county health department and your state board, and seek medical care for any sign of infection.'

/**
 * 브로우 라미네이션 전용 고지.
 * 기획서 필수: 패치테스트 24-48h, 6-8주 간격(과처리 방지), 눈 부위 반응은 병원.
 * 금지: "damage-free" / "완전 무해" / "수료증이 업무범위를 넓혀준다"
 */
export const BROW_CHEM_NOTE =
  'General information, not medical advice. Brow lamination is a chemical treatment applied near the eye. A patch test 24 to 48 hours beforehand is standard, sessions should be spaced at least six to eight weeks apart to avoid over-processing, and any swelling, persistent irritation or symptom involving the eye itself needs medical attention.'

/**
 * 모발 스무딩 시술(keratin treatment, Brazilian Blowout 등) 전용 고지.
 * 기획서 필수: 일부 제품이 포름알데하이드를 함유하거나 가열 시 방출한다는 사실을
 * 겁주지도, 감추지도 말고 정확히. 미국 OSHA가 살롱 대상 안내를 낸 바 있다.
 * 금지: "모든 제품이 안전" / "완전 무포름알데하이드 보장" / 특정 브랜드 지목 비난 /
 *       "straightens your hair"(스무딩이지 스트레이트닝이 아님)
 */
export const SMOOTHING_CHEM_NOTE =
  'General information, not medical or occupational safety advice. Some smoothing products contain formaldehyde or ingredients that release it when heated, which is why US workplace safety authorities have issued guidance for salons. Ask which product is being used, ask to see its safety data sheet, and ask how the space is ventilated. If you are pregnant, breastfeeding or have a respiratory condition, speak to your doctor first.'

/**
 * 미용학교·주 시험 페이지 전용 고지.
 * 기획서 필수: 특정 학교 추천 절대 금지 — 고르는 기준만 제공한다.
 * 시험 내용은 주 candidate bulletin 이 권위 있는 출처임을 항상 병기.
 */
export const SCHOOL_NOTE =
  'General information, not legal or educational advice. Required hours, fees and exam formats are set state by state and change over time. Verify programme approval on your state board of cosmetology website rather than the school website, and treat your state candidate bulletin as the authoritative source for what is tested.'

/**
 * 딥 파우더 전용 고지.
 * 기획서 필수: 고객 손가락을 공용 통에 담그는 전통 방식에 위생 문제가 지적되어 있고
 * 일부 주 위원회가 제한·금지한다. "pour, not dip" 이 이 클러스터의 최대 차별점.
 * 금지: "딥 파우더는 감염을 일으킨다" 같은 단정 · 특정 브랜드 비난
 */
export const DIP_HYGIENE_NOTE =
  'General information, not medical advice. Dipping a client’s finger into a shared powder jar has been raised as a hygiene concern, and some state boards restrict or prohibit it. Pouring the powder over the nail avoids the issue. Ask which method your salon uses, check your state board for the rule where you live, and see a doctor for any spreading redness, swelling, pus or pain around a nail.'

/**
 * 손톱 강화제·손톱 관리 전용 고지.
 * 기획서 필수: 손톱판은 죽은 조직이라 어떤 제품도 이미 생긴 손상을 되돌리지 못한다.
 * 금지: repairs / heals / regrows / cures / rebuilds
 * 쓸 것: reduces breakage / protects while it grows / improves flexibility
 */
export const NAIL_PLATE_NOTE =
  'General information, not medical advice. The nail plate is dead tissue, so no product repairs damage that has already happened — existing damage grows out over months. Products reduce breakage and improve flexibility while that happens. Persistent nail changes, discolouration, thickening or separation from the nail bed warrant a doctor’s opinion rather than a product.'

/**
 * 왁스 워머 전용 고지.
 * 기획서 필수: 화상이 이 주제의 주요 사고다. 온도를 단정적 숫자로만 제시하지 말 것
 * (제품·왁스 타입마다 다름). 손목 테스트를 모든 관련 페이지에 반복한다.
 */
export const WAX_BURN_NOTE =
  'General information, not medical advice. Safe wax temperature varies by product and wax type, so follow the range printed on your specific wax and test a small amount on your inner wrist before every application — displays can be inaccurate and wax heats unevenly. If you burn yourself, cool the area with cool running water, do not pull wax off burned skin, and seek medical attention for blistering, large areas, or burns to the face or intimate areas.'

/**
 * 립 블러시 전용 고지. PMU_TATTOO_NOTE 와 함께 쓴다.
 * 기획서 필수: 입술 문신은 헤르페스(HSV) 재활성화 위험이 이 시술 고유의 핵심 리스크다.
 * 금지: "semi-permanent so it's not a tattoo" / risk-free / painless / no downtime
 */
export const LIP_BLUSH_HSV_NOTE =
  'General information, not medical advice. Lip tattooing can reactivate the herpes simplex virus in people who carry it, and an outbreak during healing can affect both comfort and the result. If you have ever had a cold sore, raise it at consultation — your artist may ask you to discuss antiviral prophylaxis with your doctor beforehand. Contact a doctor for blistering, spreading redness, pus, fever or increasing pain.'

/**
 * 페이셜 스티머 전용 고지.
 * 기획서 필수: "모공을 연다"는 표현 금지 — 모공에는 근육이 없어 열리고 닫히지 않는다.
 * 금지: clears acne / removes blackheads / detoxifies / opens pores / shrinks pores
 */
export const STEAM_CLAIMS_NOTE =
  'General information, not medical advice. Steam softens the skin’s surface and the debris sitting in pores, which makes cleansing and extraction easier — it does not open pores (pores have no muscles), shrink them, detoxify skin, or treat acne. Heat can aggravate rosacea and inflamed or cystic acne, so check with a doctor or a licensed professional if either applies to you.'
