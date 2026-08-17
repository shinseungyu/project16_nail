/**
 * /qna 허브 + 상세 데이터
 * 출처: qna_구조_FAQ93_네이버기준 시트 + qna_허브원고.md + qna_상세원고_12편.md
 *
 * 구조: 허브 /qna 1개 + 상세 /qna/{slug} 93개
 * 섹션 안 정렬은 네이버 검색량 내림차순 — 시트 지정 순서를 그대로 유지한다.
 * 상세 원고가 있는 12편만 published. 나머지 81편은 허브에 제목만 노출(링크 없음)해
 * 죽은 링크를 만들지 않는다. 원고가 오면 QNA_DETAILS에 추가하면 자동 발행된다.
 */

export type SectionKey =
  | 'nail-care'
  | 'nail-license'
  | 'makeup-care'
  | 'makeup-license'
  | 'skin-care'
  | 'skin-license'
  | 'hair-style'
  | 'hair-license'

export interface QnaSectionMeta {
  key: SectionKey
  label: string
  icon: string
}

export const QNA_SECTIONS: QnaSectionMeta[] = [
  { key: 'nail-care', label: '네일 — 시술·관리', icon: '💅' },
  { key: 'nail-license', label: '네일 — 자격증·창업', icon: '📜' },
  { key: 'makeup-care', label: '메이크업 — 시술·관리', icon: '💄' },
  { key: 'makeup-license', label: '메이크업 — 자격증·창업', icon: '🎓' },
  { key: 'skin-care', label: '스킨케어·왁싱 — 시술·관리', icon: '✨' },
  { key: 'skin-license', label: '스킨케어·왁싱 — 자격증·창업', icon: '🧾' },
  { key: 'hair-style', label: '헤어·이용 — 시술·관리', icon: '💈' },
  { key: 'hair-license', label: '헤어·이용 — 자격증·창업', icon: '✂️' },
]

export interface QnaItem {
  slug: string
  question: string
  section: SectionKey
  tier: 'S' | 'A' | 'B' | 'C'
  naver: number
}

/** 93개 전체 목록. 섹션별 · 네이버 검색량 내림차순 (시트 배치 순서 그대로) */
export const QNA_ITEMS: QnaItem[] = [
  // 네일 — 시술·관리 (13)
  { slug: 'nail-nailart-types', question: '네일아트는 어떤 종류가 있나요? 시술 시간과 가격은?', section: 'nail-care', tier: 'S', naver: 70500 },
  { slug: 'nail-gel-nail-duration', question: '젤네일은 얼마나 유지되나요?', section: 'nail-care', tier: 'B', naver: 30030 },
  { slug: 'nail-pedicure-duration', question: '페디큐어는 얼마나 유지되나요?', section: 'nail-care', tier: 'B', naver: 22280 },
  { slug: 'nail-nail-tip-guide', question: '네일 팁은 어떻게 쓰나요? 종류와 지속기간은?', section: 'nail-care', tier: 'S', naver: 15080 },
  { slug: 'nail-french-nail', question: '프렌치 네일은 어떤 종류가 있나요?', section: 'nail-care', tier: 'B', naver: 9880 },
  { slug: 'nail-uv-vs-led-lamp', question: '네일 UV 램프와 LED 램프는 무엇이 다른가요?', section: 'nail-care', tier: 'S', naver: 8320 },
  { slug: 'nail-gradation-nail', question: '그라데이션 네일은 어떻게 하나요?', section: 'nail-care', tier: 'C', naver: 5200 },
  { slug: 'nail-design-guide', question: '네일 디자인은 어떻게 고르나요?', section: 'nail-care', tier: 'C', naver: 3990 },
  { slug: 'nail-self-nail-start', question: '셀프네일은 어떻게 시작하나요? 필요한 준비물은?', section: 'nail-care', tier: 'C', naver: 3800 },
  { slug: 'nail-nail-supplement', question: '손톱 영양제는 효과가 있나요?', section: 'nail-care', tier: 'C', naver: 3500 },
  { slug: 'nail-wedding-nail', question: '웨딩 네일은 언제 어떻게 준비하나요?', section: 'nail-care', tier: 'C', naver: 2100 },
  { slug: 'nail-materials-buying', question: '네일 재료는 어디서 어떻게 구입하나요?', section: 'nail-care', tier: 'A', naver: 1092 },
  { slug: 'nail-table-guide', question: '네일 시술 테이블은 어떤 것을 고르나요?', section: 'nail-care', tier: 'A', naver: 260 },

  // 네일 — 자격증·창업 (8)
  { slug: 'nail-nailart-certificates', question: '네일아트 자격증은 어떤 종류가 있나요?', section: 'nail-license', tier: 'S', naver: 2340 },
  { slug: 'nail-license-how-to', question: '네일 자격증은 어떻게 취득하나요?', section: 'nail-license', tier: 'A', naver: 1750 },
  { slug: 'nail-academy-choose', question: '네일아트 학원은 어떤 기준으로 고르나요?', section: 'nail-license', tier: 'A', naver: 1742 },
  { slug: 'nail-interior-cost', question: '네일샵 인테리어 비용은 얼마나 잡아야 하나요?', section: 'nail-license', tier: 'A', naver: 1092 },
  { slug: 'nail-academy-standard', question: '네일 학원은 어떤 기준으로 고르나요?', section: 'nail-license', tier: 'A', naver: 603 },
  { slug: 'nail-national-vs-private', question: '네일 국가자격증과 민간자격증은 무엇이 다른가요?', section: 'nail-license', tier: 'A', naver: 540 },
  { slug: 'nail-startup-steps', question: '네일샵 창업은 무엇부터 준비해야 하나요?', section: 'nail-license', tier: 'A', naver: 520 },
  { slug: 'nail-startup-cost', question: '네일샵 창업비용은 총 얼마인가요?', section: 'nail-license', tier: 'A', naver: 390 },

  // 메이크업 — 시술·관리 (5)
  { slug: 'makeup-personal-color-diagnosis', question: '퍼스널컬러 진단은 어디서 받고, 진단사 자격증도 있나요?', section: 'makeup-care', tier: 'S', naver: 51480 },
  { slug: 'makeup-eyelash-extension-license', question: '속눈썹 연장은 어떤 자격과 신고가 필요한가요?', section: 'makeup-care', tier: 'S', naver: 48160 },
  { slug: 'makeup-eyebrow-tattoo-license', question: '눈썹 문신(반영구)은 아무나 시술할 수 있나요?', section: 'makeup-care', tier: 'S', naver: 41990 },
  { slug: 'makeup-personal-color-tone', question: '퍼스널컬러 웜톤·쿨톤은 어떻게 구분하나요?', section: 'makeup-care', tier: 'B', naver: 18050 },
  { slug: 'makeup-mens-eyebrow', question: '남자 눈썹 정리는 어떻게 하나요?', section: 'makeup-care', tier: 'B', naver: 8400 },

  // 메이크업 — 자격증·창업 (9)
  { slug: 'makeup-artist-salary', question: '메이크업 아티스트 연봉은 얼마인가요?', section: 'makeup-license', tier: 'S', naver: 2613 },
  { slug: 'makeup-academy-choose', question: '메이크업 학원은 어떤 기준으로 고르나요?', section: 'makeup-license', tier: 'S', naver: 2144 },
  { slug: 'makeup-artist-reality', question: '메이크업 아티스트의 현실은 어떤가요?', section: 'makeup-license', tier: 'A', naver: 1407 },
  { slug: 'makeup-makeup-certificates', question: '메이크업 자격증은 어떤 것이 있고 무엇이 필요한가요?', section: 'makeup-license', tier: 'A', naver: 1400 },
  { slug: 'makeup-national-license', question: '미용사(메이크업) 국가자격증은 무엇인가요?', section: 'makeup-license', tier: 'A', naver: 1260 },
  { slug: 'makeup-become-artist', question: '메이크업 아티스트가 되려면 무엇부터 해야 하나요?', section: 'makeup-license', tier: 'A', naver: 1139 },
  { slug: 'makeup-beauty-academy', question: '뷰티 학원과 전문 아카데미는 무엇이 다른가요?', section: 'makeup-license', tier: 'A', naver: 335 },
  { slug: 'makeup-portfolio', question: '메이크업 포트폴리오는 어떻게 만드나요?', section: 'makeup-license', tier: 'A', naver: 335 },
  { slug: 'makeup-certificate-types', question: '메이크업 자격증 종류는 어떻게 되나요?', section: 'makeup-license', tier: 'A', naver: 300 },

  // 스킨케어·왁싱 — 시술·관리 (11)
  { slug: 'skin-brazilian-waxing', question: '브라질리언 왁싱은 얼마나 아픈가요? 주기는?', section: 'skin-care', tier: 'S', naver: 62920 },
  { slug: 'skin-waxing-guide', question: '왁싱은 부위별로 가격과 주기가 어떻게 되나요?', section: 'skin-care', tier: 'S', naver: 55200 },
  { slug: 'skin-aqua-peel', question: '아쿠아필은 어떤 관리인가요? 주기와 가격은?', section: 'skin-care', tier: 'B', naver: 30260 },
  { slug: 'skin-lymph-massage', question: '림프 마사지는 어떤 효과가 있고 어디서 배우나요?', section: 'skin-care', tier: 'S', naver: 12480 },
  { slug: 'skin-body-scrub', question: '바디 스크럽은 얼마나 자주 하나요?', section: 'skin-care', tier: 'B', naver: 12480 },
  { slug: 'skin-care-frequency', question: '피부관리는 얼마나 자주 받아야 하나요?', section: 'skin-care', tier: 'S', naver: 10500 },
  { slug: 'skin-lifting-types', question: '리프팅 관리는 어떤 종류가 있나요?', section: 'skin-care', tier: 'S', naver: 8870 },
  { slug: 'skin-rf-device', question: '피부관리 고주파 기기는 어떤 것을 고르나요?', section: 'skin-care', tier: 'A', naver: 884 },
  { slug: 'skin-ultrasound-device', question: '피부관리 초음파 기기는 어떤 효과가 있나요?', section: 'skin-care', tier: 'A', naver: 728 },
  { slug: 'skin-device-priority', question: '피부관리 기기는 무엇부터 갖춰야 하나요?', section: 'skin-care', tier: 'A', naver: 572 },
  { slug: 'skin-galvanic-device', question: '갈바닉 기기는 어떤 관리에 쓰나요?', section: 'skin-care', tier: 'C', naver: 468 },

  // 스킨케어·왁싱 — 자격증·창업 (9)
  { slug: 'skin-license-how-to', question: '피부미용사 자격증은 어떻게 취득하나요?', section: 'skin-license', tier: 'A', naver: 1920 },
  { slug: 'skin-esthetician-reality', question: '피부관리사의 현실은 어떤가요?', section: 'skin-license', tier: 'A', naver: 1139 },
  { slug: 'skin-esthetician-salary', question: '피부관리사 연봉은 얼마인가요?', section: 'skin-license', tier: 'A', naver: 737 },
  { slug: 'skin-waxing-license', question: '왁싱 자격증은 꼭 필요한가요?', section: 'skin-license', tier: 'A', naver: 660 },
  { slug: 'skin-clinic-coordinator', question: '피부과 코디네이터는 어떤 일을 하나요?', section: 'skin-license', tier: 'C', naver: 603 },
  { slug: 'skin-esthetician-job', question: '피부미용사는 어떤 일을 하나요? 자격은?', section: 'skin-license', tier: 'A', naver: 530 },
  { slug: 'skin-written-exam', question: '피부미용사 필기시험 과목과 공부법은?', section: 'skin-license', tier: 'A', naver: 420 },
  { slug: 'skin-spa-therapist', question: '스파 테라피스트는 어떻게 되나요?', section: 'skin-license', tier: 'C', naver: 335 },
  { slug: 'skin-national-license', question: '피부미용 국가자격증 취득 절차는?', section: 'skin-license', tier: 'A', naver: 300 },

  // 헤어·이용 — 시술·관리 (24)
  { slug: 'hair-mens-hairstyle', question: '남자 머리 스타일은 얼굴형별로 어떻게 고르나요?', section: 'hair-style', tier: 'S', naver: 63350 },
  { slug: 'hair-layered-cut', question: '레이어드컷은 어떤 얼굴형에 어울리나요?', section: 'hair-style', tier: 'S', naver: 58010 },
  { slug: 'hair-hippie-perm', question: '히피펌은 얼마나 유지되나요? 시술 시간과 가격은?', section: 'hair-style', tier: 'S', naver: 46340 },
  { slug: 'hair-volume-magic', question: '볼륨매직은 얼마나 유지되나요? 일반 매직과 차이는?', section: 'hair-style', tier: 'B', naver: 42720 },
  { slug: 'hair-hush-cut', question: '허쉬컷은 어떤 얼굴형에 어울리나요?', section: 'hair-style', tier: 'B', naver: 32720 },
  { slug: 'hair-shadow-perm', question: '쉐도우펌은 얼마나 유지되나요?', section: 'hair-style', tier: 'B', naver: 25280 },
  { slug: 'hair-curling-iron', question: '고데기는 어떤 것을 사야 하나요?', section: 'hair-style', tier: 'B', naver: 22790 },
  { slug: 'hair-down-perm', question: '다운펌은 얼마나 가나요? 남자 다운펌 주기는?', section: 'hair-style', tier: 'B', naver: 18100 },
  { slug: 'hair-scalp-scaling', question: '두피 스케일링은 얼마나 자주 받나요?', section: 'hair-style', tier: 'B', naver: 17900 },
  { slug: 'hair-crop-cut', question: '크롭컷은 어떤 스타일인가요? 관리는 어렵지 않나요?', section: 'hair-style', tier: 'B', naver: 15470 },
  { slug: 'hair-perm-types', question: '펌 종류에는 어떤 것들이 있나요?', section: 'hair-style', tier: 'B', naver: 15080 },
  { slug: 'hair-bleaching-damage', question: '탈색은 머리에 얼마나 손상을 주나요?', section: 'hair-style', tier: 'B', naver: 15080 },
  { slug: 'hair-mens-cut-cycle', question: '남자 커트 주기는 어느 정도가 적당한가요?', section: 'hair-style', tier: 'B', naver: 12480 },
  { slug: 'hair-lift-vs-down-perm', question: '리프펌과 다운펌은 무엇이 다른가요?', section: 'hair-style', tier: 'B', naver: 9990 },
  { slug: 'hair-clipper-guide', question: '바버샵 클리퍼는 어떤 것을 골라야 하나요?', section: 'hair-style', tier: 'S', naver: 9880 },
  { slug: 'hair-setting-perm', question: '셋팅펌과 일반펌은 무엇이 다른가요?', section: 'hair-style', tier: 'B', naver: 9880 },
  { slug: 'hair-side-part-perm', question: '가르마펌은 얼마나 가나요? 관리법은?', section: 'hair-style', tier: 'B', naver: 9470 },
  { slug: 'hair-hairdryer-guide', question: '드라이기는 어떤 기준으로 고르나요?', section: 'hair-style', tier: 'C', naver: 5200 },
  { slug: 'hair-scissors-guide', question: '미용 가위는 어떤 것을 사야 하나요? 입문용 가격대는?', section: 'hair-style', tier: 'S', naver: 4576 },
  { slug: 'hair-booking-system', question: '미용실 예약은 어떻게 관리하나요?', section: 'hair-style', tier: 'C', naver: 3500 },
  { slug: 'hair-barbershop-styles', question: '바버샵 스타일에는 어떤 종류가 있나요?', section: 'hair-style', tier: 'C', naver: 2730 },
  { slug: 'hair-wholesale', question: '미용 재료는 어디서 도매로 구입하나요?', section: 'hair-style', tier: 'A', naver: 1664 },
  { slug: 'hair-chair-shampoo-cost', question: '미용 의자와 샴푸대는 얼마나 드나요?', section: 'hair-style', tier: 'A', naver: 884 },
  { slug: 'hair-shampoo-plumbing', question: '샴푸대 설치와 배수 공사 비용은 얼마인가요?', section: 'hair-style', tier: 'A', naver: 728 },

  // 헤어·이용 — 자격증·창업 (14)
  { slug: 'hair-license-how-to', question: '이용사 자격증은 어떻게 취득하나요?', section: 'hair-license', tier: 'S', naver: 2180 },
  { slug: 'hair-freelance-designer', question: '프리랜서 헤어 디자이너는 어떻게 시작하나요?', section: 'hair-license', tier: 'A', naver: 1742 },
  { slug: 'hair-become-beautician', question: '미용사가 되려면 무엇부터 해야 하나요?', section: 'hair-license', tier: 'A', naver: 1710 },
  { slug: 'hair-solo-salon', question: '1인 미용실은 혼자서 운영이 가능한가요?', section: 'hair-license', tier: 'A', naver: 1638 },
  { slug: 'hair-designer-salary', question: '헤어 디자이너 연봉은 얼마인가요?', section: 'hair-license', tier: 'A', naver: 1139 },
  { slug: 'hair-designer-reality', question: '헤어 디자이너의 현실은 어떤가요?', section: 'hair-license', tier: 'A', naver: 737 },
  { slug: 'hair-study-abroad', question: '미용 유학은 어디로 가고 비용은 얼마인가요?', section: 'hair-license', tier: 'C', naver: 603 },
  { slug: 'hair-startup-cost', question: '미용실 창업비용은 얼마나 드나요?', section: 'hair-license', tier: 'A', naver: 546 },
  { slug: 'hair-written-exam', question: '이용사 필기시험 과목은 무엇인가요?', section: 'hair-license', tier: 'A', naver: 420 },
  { slug: 'hair-practical-exam', question: '이용사 실기시험 과제와 준비물은?', section: 'hair-license', tier: 'A', naver: 420 },
  { slug: 'hair-startup-steps', question: '미용실 창업은 무엇부터 준비해야 하나요?', section: 'hair-license', tier: 'A', naver: 390 },
  { slug: 'hair-become-designer', question: '헤어 디자이너가 되려면 무엇부터 해야 하나요?', section: 'hair-license', tier: 'A', naver: 335 },
  { slug: 'hair-scalp-certificate', question: '두피관리사 자격증은 어떤 도움이 되나요?', section: 'hair-license', tier: 'C', naver: 335 },
  { slug: 'hair-license-issue', question: '미용사 면허증은 어떻게 발급받나요?', section: 'hair-license', tier: 'A', naver: 300 },
]

// ─────────────────────────────────────────────────────────────
// 상세 페이지
// ─────────────────────────────────────────────────────────────

export type QnaBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }

export interface QnaBody {
  h2: string
  blocks: QnaBlock[]
}

export interface QnaDetail {
  metaTitle: string
  /** 리드 문단 = meta description 동일 텍스트 (PGC 방식) */
  lead: string
  h1: string
  bodies: QnaBody[]
  /** 같은 카테고리 안 관련 질문 4개 (slug) */
  relatedQuestions: string[]
  /** 사이트 내 다른 클러스터로 보내는 관련 정보 링크 */
  relatedInfo?: { href: string; label: string }[]
  disclaimer: string
  updated: string
}

/**
 * 원고가 작성된 12편만 등록. 여기 없는 slug는 허브에서 링크되지 않는다.
 * 나머지 81편 작성 규칙(원고 지시):
 *  ① 리드와 ③ 오해 반박은 절대 템플릿화 금지 — 이 둘이 고유해야 고유 페이지로 인정
 *  ② 표는 페이지당 최소 1개 (숫자 표가 AI 인용률을 올림)
 *  ③ meta description = 리드 문단 동일 텍스트
 *  ④ 관련 질문 4개는 같은 카테고리 안에서만
 *  ⑤ 법령·판례 인용 시 반드시 시점 명시
 */
export const QNA_DETAILS: Record<string, QnaDetail> = {
  'nail-nailart-types': {
    metaTitle: '네일아트 종류와 시술 시간·가격 총정리 | 자주 묻는 질문',
    lead: '네일아트는 크게 젤·아크릴·팁 세 가지 방식으로 나뉘고, 디자인은 원톤부터 3D까지 폭이 넓습니다. 종류별 시술 시간은 1~3시간, 가격은 3~15만원 선입니다.',
    h1: '네일아트는 어떤 종류가 있나요? 시술 시간과 가격은?',
    bodies: [
      {
        h2: '방식별 분류',
        blocks: [
          {
            type: 'table',
            headers: ['방식', '지속', '시술 시간', '가격대', '특징'],
            rows: [
              ['젤네일', '2~4주', '1~1.5시간', '3~8만원', '가장 수요가 많은 기본 시술'],
              ['아크릴 연장', '3~4주', '2~3시간', '6~10만원', '길이 연장. 난이도 높음'],
              ['팁 연장', '2~3주', '1.5~2시간', '5~9만원', '아크릴보다 빠름'],
              ['풀세트', '3~4주', '3시간~', '8~15만원', '연장 + 아트'],
            ],
          },
        ],
      },
      {
        h2: '“아트는 화려할수록 좋다”가 아닙니다',
        blocks: [
          { type: 'p', text: '디자인 사진만 보고 고르면 실제 손에 올렸을 때 어울리지 않는 경우가 많습니다. 손톱 길이, 손가락 굵기, 피부 톤에 따라 같은 디자인도 완전히 다르게 보입니다.' },
          { type: 'p', text: '특히 스톤·3D처럼 두께가 올라가는 아트는 일상생활에서 걸리는 일이 잦고, 그만큼 리프팅(들뜸)도 빨리 옵니다. 손을 많이 쓰는 직업이라면 화려한 아트보다 **원톤이나 프렌치처럼 표면이 평평한 디자인**이 훨씬 오래갑니다.' },
        ],
      },
      {
        h2: '디자인별 난이도와 추가 요금',
        blocks: [
          { type: 'p', text: '그라데이션·마블·오로라는 기본 젤 위에 올리는 작업이라 보통 1~3만원이 추가됩니다. 스톤 부착과 3D 조형은 개당 과금인 경우가 많아 사전에 확인하는 편이 좋습니다.' },
          { type: 'p', text: '네일리스트로 일하거나 창업을 준비 중이라면, 아트 난이도를 등급으로 나눠 가격표를 짜는 방식이 객단가 관리에 유리합니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/nail-art', label: '네일아트 디자인별 가격 자세히' },
      { href: '/service/nail-art', label: '창업자용 아트 수익성 분석' },
    ],
    relatedQuestions: ['nail-gel-nail-duration', 'nail-nail-tip-guide', 'nail-french-nail', 'nail-design-guide'],
    disclaimer: '가격과 지속 기간은 매장·손톱 상태에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'skin-waxing-guide': {
    metaTitle: '왁싱 부위별 가격과 주기 총정리 | 자주 묻는 질문',
    lead: '왁싱 주기는 부위와 무관하게 대체로 3~4주입니다. 가격은 눈썹·인중 1~2만원, 겨드랑이 2~3만원, 브라질리언 5~10만원 선입니다.',
    h1: '왁싱은 부위별로 가격과 주기가 어떻게 되나요?',
    bodies: [
      {
        h2: '부위별 가격과 소요 시간',
        blocks: [
          {
            type: 'table',
            headers: ['부위', '가격대', '소요 시간', '권장 주기'],
            rows: [
              ['눈썹·인중', '1~2만원', '10~15분', '3~4주'],
              ['겨드랑이', '2~3만원', '15~20분', '3~4주'],
              ['팔·다리 (반)', '3~5만원', '30~40분', '4~6주'],
              ['브라질리언', '5~10만원', '40~60분', '3~4주'],
              ['전신', '15~25만원', '2시간~', '4~6주'],
            ],
          },
        ],
      },
      {
        h2: '“털이 길어야 한다”는 반만 맞습니다',
        blocks: [
          { type: 'p', text: '왁싱은 털이 너무 짧으면 잡히지 않아 최소 5mm 정도는 자라 있어야 합니다. 여기까지는 맞습니다.' },
          { type: 'p', text: '문제는 반대 방향의 오해입니다. **길수록 잘 뽑히는 것은 아닙니다.** 1cm를 넘어가면 오히려 통증이 심해지고 중간에 끊어져 잔털이 남습니다. 5~10mm 구간이 가장 적당합니다.' },
          { type: 'p', text: '그리고 왁싱 직전 제모기·면도기로 정리하고 오시는 분들이 있는데, 이러면 모근 주기가 흐트러져 다음 왁싱 결과가 나빠집니다. 자란 그대로 오시는 게 맞습니다.' },
        ],
      },
      {
        h2: '주기를 지켜야 하는 이유',
        blocks: [
          { type: 'p', text: '왁싱은 모근째 제거하기 때문에 주기를 맞춰 반복하면 털이 가늘어지고 밀도가 낮아집니다. 반대로 중간에 면도로 정리하면 모주기가 다시 어긋나 처음부터 다시 시작하는 셈이 됩니다.' },
          { type: 'p', text: '관리사 입장에서는 이 설명이 곧 재방문 설계입니다. 첫 방문 때 다음 예약일을 함께 잡는 것이 리텐션에 가장 효과적입니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/service/waxing', label: '왁싱 시술 상세' },
      { href: '/skincare/guide', label: '피부관리 종류·가격 가이드' },
    ],
    relatedQuestions: ['skin-brazilian-waxing', 'skin-waxing-license', 'skin-care-frequency', 'skin-body-scrub'],
    disclaimer: '가격은 지역·매장에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'makeup-eyebrow-tattoo-license': {
    metaTitle: '눈썹 문신(반영구)은 아무나 시술할 수 있나요? | 자주 묻는 질문',
    lead: '2026년 5월 대법원이 34년 만에 판례를 바꿔, 비의료인의 문신·반영구화장 시술은 무면허 의료행위가 아니라고 판단했습니다. 다만 문신사법 시행 전이라 자격 기준은 아직 없는 과도기입니다.',
    h1: '눈썹 문신(반영구)은 아무나 시술할 수 있나요?',
    bodies: [
      {
        h2: '무엇이 바뀌었나',
        blocks: [
          {
            type: 'table',
            headers: ['시점', '내용'],
            rows: [
              ['1992년', '대법원, 비의료인 문신 시술을 무면허 의료행위로 판단'],
              ['2026.5.21', '대법원 전원합의체, 34년 만에 판례 변경'],
              ['2026.6.11', '대법원 3부, 눈썹문신·헤어라인 시술 미용사 무죄 확정'],
              ['2027.10 (예정)', '문신사법 시행 — 2025년 9월 국회 통과'],
            ],
          },
          { type: 'p', text: '2026년 6월 확정 판결은 일반 문신뿐 아니라 **눈썹 문신과 헤어라인 등 미용 문신 영역까지** 비의료인 시술을 인정한 첫 대법원 확정 사례입니다.' },
        ],
      },
      {
        h2: '“그럼 이제 아무나 해도 된다”는 아닙니다',
        blocks: [
          { type: 'p', text: '가장 위험한 오해입니다. 판례가 바뀐 것은 **형사처벌 대상이 아니게 되었다**는 의미이지, 자격 없이 영업해도 된다는 뜻이 아닙니다.' },
          {
            type: 'list',
            items: [
              '문신사법은 2027년 10월 시행 예정 — 아직 자격·위생 기준이 시행되지 않았습니다',
              '시행되면 자격 요건, 위생 기준, 영업 신고 절차가 새로 생깁니다',
              '지금 시작하시는 분은 시행 시점에 요건을 갖출 수 있는지를 먼저 확인해야 합니다',
            ],
          },
          { type: 'p', text: '또 하나. 시술 자체가 처벌 대상이 아니게 된 것과, 시술 부작용에 대한 **민사 책임**은 별개입니다. 감염·색소 알레르기 사고는 여전히 시술자 책임입니다.' },
        ],
      },
      {
        h2: '지금 준비한다면',
        blocks: [
          { type: 'p', text: '과도기이므로 다음 세 가지를 권합니다.' },
          {
            type: 'list',
            items: [
              '**위생 관리 기준을 미리 갖추세요.** 문신사법이 시행되면 위생이 가장 먼저 규제됩니다.',
              '**시술 기록을 남기세요.** 사용 색소, 시술 일자, 고객 동의서. 분쟁 시 유일한 방어 수단입니다.',
              '**법 시행 일정을 추적하세요.** 시행령·시행규칙이 나오면 자격 요건이 구체화됩니다.',
            ],
          },
          { type: 'p', text: '인터넷에 있는 대부분의 글은 판례 변경 전에 작성돼 “불법”이라고 적혀 있습니다. 정보를 찾으실 때 작성 시점을 꼭 확인하세요.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/semi-permanent/legal', label: '반영구화장 자격과 문신사법' },
      { href: '/semi-permanent/law-timeline', label: '문신사법 시행 일정' },
    ],
    relatedQuestions: ['makeup-eyelash-extension-license', 'makeup-makeup-certificates', 'makeup-national-license', 'makeup-personal-color-diagnosis'],
    disclaimer: '법령과 판례는 변경될 수 있습니다. 개별 사안은 반드시 전문가와 관할 기관에 확인하시기 바랍니다. 저희는 법률 자문을 제공하지 않습니다.',
    updated: '2026.08.17',
  },

  'makeup-personal-color-diagnosis': {
    metaTitle: '퍼스널컬러 진단은 어디서 받나요? 진단사 자격증도 있나요 | 자주 묻는 질문',
    lead: '퍼스널컬러 진단은 전문 스튜디오·뷰티샵에서 받으며 3~15만원 선입니다. 진단사 자격증은 전부 민간자격이라 국가자격은 없습니다.',
    h1: '퍼스널컬러 진단은 어디서 받고, 진단사 자격증도 있나요?',
    bodies: [
      {
        h2: '진단 방식과 가격대',
        blocks: [
          {
            type: 'table',
            headers: ['유형', '가격대', '소요', '내용'],
            rows: [
              ['간이 진단', '3~5만원', '30분', '드레이핑 위주, 사계절 분류'],
              ['정밀 진단', '8~15만원', '1~2시간', '세부 톤 분류 + 컬러 리포트'],
              ['메이크업 연계', '12~20만원', '2시간~', '진단 + 실제 메이크업 시연'],
            ],
          },
          { type: 'p', text: '자연광 확보 여부가 결과 정확도를 크게 좌우하므로, 예약 전 **진단 공간의 조명 조건**을 확인하는 편이 좋습니다.' },
        ],
      },
      {
        h2: '“한 번 진단받으면 평생 간다”는 오해입니다',
        blocks: [
          { type: 'p', text: '퍼스널컬러는 피부 톤·모발색·눈동자색을 종합해 판단하는데, 이 중 **모발색은 염색으로 자주 바뀌고 피부 톤도 계절과 나이에 따라 변합니다.**' },
          { type: 'p', text: '같은 사람이 다른 스튜디오에서 다른 결과를 받는 일도 흔합니다. 진단사마다 사용하는 분류 체계와 드레이프 세트가 다르기 때문입니다. 진단 결과를 절대적인 규칙으로 받아들이기보다 **어울리는 색의 방향을 알려주는 참고**로 쓰는 것이 맞습니다.' },
        ],
      },
      {
        h2: '진단사가 되려면',
        blocks: [
          { type: 'p', text: '퍼스널컬러 진단사에는 **국가자격이 없습니다.** 협회·아카데미가 발급하는 민간자격만 있으며, 자격증 자체보다 진단 경험과 포트폴리오가 실력의 기준이 됩니다.' },
          { type: 'p', text: '수요는 꾸준히 늘고 있어서, 메이크업이나 뷰티 관련 업을 이미 하고 계신다면 **부가 서비스로 붙이기 좋은 영역**입니다. 별도 시설 투자가 거의 필요 없고 객단가도 낮지 않습니다.' },
          { type: 'p', text: '민간자격을 등록하실 때는 한국직업능력연구원 민간자격정보서비스에서 등록 여부를 확인하세요.' },
        ],
      },
    ],
    relatedInfo: [{ href: '/makeup/personal-color', label: '퍼스널컬러 4계절 유형 정리' }],
    relatedQuestions: ['makeup-personal-color-tone', 'makeup-makeup-certificates', 'makeup-artist-salary', 'makeup-academy-choose'],
    disclaimer: '가격과 진단 체계는 업체에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'makeup-eyelash-extension-license': {
    metaTitle: '속눈썹 연장은 어떤 자격과 신고가 필요한가요? | 자주 묻는 질문',
    lead: '속눈썹 연장은 미용업에 해당해 미용사 면허와 미용업 영업신고가 필요합니다. 면허 없이 영업하면 처벌 대상입니다.',
    h1: '속눈썹 연장은 어떤 자격과 신고가 필요한가요?',
    bodies: [
      {
        h2: '필요한 것 세 가지',
        blocks: [
          {
            type: 'table',
            headers: ['순서', '항목', '발급처'],
            rows: [
              ['1', '미용사 국가기술자격 취득', '한국산업인력공단(Q-Net)'],
              ['2', '미용사 면허 발급', '관할 시·군·구청'],
              ['3', '미용업 영업신고', '관할 구청 위생과'],
            ],
          },
          { type: 'p', text: '영업신고 전에는 위생교육을 미리 이수해야 합니다(공중위생관리법 제17조제2항). 세부 업종 분류와 필요한 면허 종류는 지자체마다 안내가 조금씩 다르므로 **관할 구청 위생과에 직접 확인**하시는 것이 가장 확실합니다.' },
        ],
      },
      {
        h2: '“속눈썹은 문신이랑 같은 거 아닌가요”',
        blocks: [
          { type: 'p', text: '2026년 판례 변경으로 문신·반영구화장이 처벌 대상에서 벗어나면서, 속눈썹 연장도 같이 자유로워진 것으로 오해하는 경우가 생겼습니다.' },
          { type: 'p', text: '**다른 문제입니다.** 문신 판례는 의료법상 ‘의료행위’인지를 다툰 것이고, 속눈썹 연장은 애초에 의료행위 논란이 아니라 **공중위생관리법상 미용업**에 해당하는지의 문제였습니다. 미용업이므로 면허와 신고가 필요하다는 결론은 그대로입니다.' },
          { type: 'p', text: '면허 없이 영업하다 적발되면 **300만원 이하의 벌금**(공중위생관리법 제20조제3항), 영업신고까지 없었다면 **1년 이하의 징역 또는 1천만원 이하의 벌금**(같은 조 제1항)이 별도로 적용될 수 있습니다.' },
        ],
      },
      {
        h2: '시술 자체에 대해',
        blocks: [
          { type: 'p', text: '연장 모의 종류(실크·밍크·플랫), 컬, 굵기, 길이에 따라 결과가 크게 달라집니다. 유지 기간은 보통 3~4주이고, 2~3주 간격의 리터치로 관리합니다.' },
          { type: 'p', text: '부작용으로는 접착제 알레르기와 안구 자극이 가장 많습니다. 시술 전 패치 테스트와 동의서 확보는 분쟁을 막는 최소한의 장치입니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/makeup/service/eyelash', label: '속눈썹 연장 시술 상세' },
      { href: '/makeup/license', label: '미용사(메이크업) 자격증' },
    ],
    relatedQuestions: ['makeup-eyebrow-tattoo-license', 'makeup-national-license', 'makeup-makeup-certificates', 'makeup-become-artist'],
    disclaimer: '업종 분류와 신고 요건은 관할 지자체에 확인하시기 바랍니다.',
    updated: '2026.08.17',
  },

  'hair-layered-cut': {
    metaTitle: '레이어드컷은 어떤 얼굴형에 어울리나요? | 자주 묻는 질문',
    lead: '레이어드컷은 층을 내어 볼륨을 만드는 커트로, 둥근형·각진형에 특히 잘 맞습니다. 길이와 층의 높이를 조절해 대부분의 얼굴형에 응용할 수 있습니다.',
    h1: '레이어드컷은 어떤 얼굴형에 어울리나요?',
    bodies: [
      {
        h2: '얼굴형별 적용',
        blocks: [
          {
            type: 'table',
            headers: ['얼굴형', '권장', '이유'],
            rows: [
              ['둥근형', '턱선 아래부터 층', '세로 라인을 만들어 길어 보임'],
              ['각진형', '얼굴 옆 부드러운 층', '각을 완화'],
              ['긴형', '광대 높이부터 층', '가로 볼륨으로 균형'],
              ['역삼각형', '아래쪽 볼륨 중심', '좁은 턱선 보완'],
            ],
          },
        ],
      },
      {
        h2: '“레이어드컷은 관리가 편하다”는 절반만 맞습니다',
        blocks: [
          { type: 'p', text: '층이 있으면 드라이할 때 자연스럽게 자리를 잡아 편하다고들 하는데, 이건 **모발 상태가 좋을 때** 이야기입니다.' },
          { type: 'p', text: '숱이 적거나 손상모라면 층을 낸 끝부분이 더 부스스해 보입니다. 특히 곱슬기가 있으면 층마다 다르게 뻗쳐서 오히려 손이 더 갑니다. 이런 경우엔 층을 적게 내거나 매직·클리닉을 병행하는 편이 낫습니다.' },
          { type: 'p', text: '그리고 층은 자라면서 무너집니다. 형태를 유지하려면 **6~8주 주기**로 다듬어야 하는데, 이 비용까지 계산에 넣으셔야 합니다.' },
        ],
      },
      {
        h2: '시술 시간과 가격',
        blocks: [
          { type: 'p', text: '커트만 하면 30~50분, 3~5만원 선입니다. 펌이나 염색을 함께 하면 2~4시간으로 늘어납니다. 최근에는 히피펌·허쉬컷처럼 레이어드 기반 스타일이 함께 요청되는 경우가 많습니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/service/cut', label: '커트 가격·주기 상세' },
      { href: '/hair/scalp/clinic', label: '헤어 클리닉' },
    ],
    relatedQuestions: ['hair-hush-cut', 'hair-hippie-perm', 'hair-perm-types', 'hair-crop-cut'],
    disclaimer: '결과는 모발 상태와 시술자에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-hippie-perm': {
    metaTitle: '히피펌은 얼마나 유지되나요? 시술 시간과 가격 | 자주 묻는 질문',
    lead: '히피펌은 보통 3~5개월 유지됩니다. 시술은 2~3시간, 가격은 길이에 따라 8~20만원 선입니다.',
    h1: '히피펌은 얼마나 유지되나요? 시술 시간과 가격은?',
    bodies: [
      {
        h2: '길이별 시간과 가격',
        blocks: [
          {
            type: 'table',
            headers: ['길이', '시술 시간', '가격대', '유지'],
            rows: [
              ['단발', '2시간', '8~12만원', '3~4개월'],
              ['어깨', '2~2.5시간', '12~16만원', '3~5개월'],
              ['롱', '2.5~3시간', '15~20만원', '4~5개월'],
            ],
          },
          { type: 'p', text: '굵고 자연스러운 웨이브를 만드는 펌이라 컬이 풀려도 형태가 남는 편이고, 그래서 체감 유지 기간이 다른 펌보다 깁니다.' },
        ],
      },
      {
        h2: '“펌만 하면 그 모양이 나온다”가 아닙니다',
        blocks: [
          { type: 'p', text: '사진 속 히피펌은 대부분 **드라이와 스타일링이 들어간 상태**입니다. 시술 직후와 집에서 감고 말린 다음의 모습은 다릅니다.' },
          { type: 'p', text: '히피펌은 특히 **말리는 방법에 따라 결과가 크게 갈립니다.** 수건으로 눌러 물기를 뺀 뒤 손으로 컬을 쥐어가며 자연 건조하거나 디퓨저를 쓰면 사진에 가까워지고, 빗질을 하거나 뜨거운 바람으로 세게 말리면 부스스해집니다.' },
          { type: 'p', text: '에센스·컬크림 같은 제품도 사실상 필수입니다. 이 관리를 안 할 생각이면 히피펌은 만족도가 떨어집니다.' },
        ],
      },
      {
        h2: '손상과 재시술 간격',
        blocks: [
          { type: 'p', text: '굵은 로드를 쓰기 때문에 잔컬 펌보다 손상은 덜한 편이지만, 탈색모나 잦은 염색모라면 컬이 잘 안 나오거나 끊어질 수 있습니다. 재시술은 **최소 2~3개월** 간격을 두는 것이 안전하고, 그 사이 클리닉을 병행하면 다음 펌이 잘 나옵니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/service/perm', label: '펌 종류 총정리' },
      { href: '/hair/service/bleach', label: '탈색 손상도' },
    ],
    relatedQuestions: ['hair-perm-types', 'hair-shadow-perm', 'hair-volume-magic', 'hair-layered-cut'],
    disclaimer: '결과와 유지 기간은 모발 상태에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'skin-care-frequency': {
    metaTitle: '피부관리는 얼마나 자주 받아야 하나요? | 자주 묻는 질문',
    lead: '일반 관리는 2~4주에 한 번이 표준입니다. 여드름·색소처럼 개선 목적이라면 초기 4~8주는 주 1회로 집중하고 이후 간격을 늘립니다.',
    h1: '피부관리는 얼마나 자주 받아야 하나요?',
    bodies: [
      {
        h2: '목적별 권장 주기',
        blocks: [
          {
            type: 'table',
            headers: ['목적', '초기', '유지기'],
            rows: [
              ['기본 관리', '2~4주 1회', '4주 1회'],
              ['여드름', '주 1회 (4~8주)', '2~3주 1회'],
              ['모공·피지', '2주 1회', '4주 1회'],
              ['색소', '2~3주 1회', '4~6주 1회'],
              ['리프팅', '2주 1회', '4~8주 1회'],
            ],
          },
          { type: 'p', text: '기준은 **피부 턴오버 주기(약 28일)** 입니다. 이보다 훨씬 자주 받으면 각질층이 회복할 시간이 부족해집니다.' },
        ],
      },
      {
        h2: '“자주 받을수록 좋다”가 가장 흔한 오해입니다',
        blocks: [
          { type: 'p', text: '빨리 좋아지고 싶은 마음에 주 2~3회씩 받는 경우가 있습니다. 특히 딥클렌징·스케일링 계열을 과하게 받으면 **피부 장벽이 무너져 오히려 예민해지고 트러블이 늘어납니다.**' },
          { type: 'p', text: '관리 사이의 회복 기간이 관리 자체만큼 중요합니다. 그리고 관리실에서 하는 것보다 **집에서 매일 하는 홈케어가 결과의 더 큰 부분**을 차지합니다. 관리를 받는 날 하루보다 나머지 27일이 피부를 만듭니다.' },
          { type: 'p', text: '받는 횟수를 늘리는 대신 세안·보습·자외선 차단을 지키는 쪽이 비용 대비 효과가 훨씬 큽니다.' },
        ],
      },
      {
        h2: '관리실 선택 시 확인할 것',
        blocks: [
          {
            type: 'list',
            items: [
              '첫 방문에 피부 타입 진단을 하는지',
              '관리 후 홈케어 안내를 주는지',
              '회원권을 먼저 권하는지 (관리 계획보다 결제가 앞서면 신중하게)',
              '위생 관리 — 도구 소독, 일회용품 사용',
            ],
          },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/guide', label: '피부관리 종류·가격 가이드' },
      { href: '/skincare/license', label: '미용사(피부) 자격증' },
    ],
    relatedQuestions: ['skin-aqua-peel', 'skin-lifting-types', 'skin-lymph-massage', 'skin-body-scrub'],
    disclaimer: '피부 상태에 따라 적정 주기는 다릅니다. 질환이 의심되면 피부과 진료를 받으세요.',
    updated: '2026.08.17',
  },

  'hair-clipper-guide': {
    metaTitle: '바버샵 클리퍼는 어떤 것을 골라야 하나요? | 자주 묻는 질문',
    lead: '입문용은 10~20만원, 실무용은 25~50만원 선입니다. 모터 방식·날 규격·배터리 지속 시간 세 가지로 고르면 실패하지 않습니다.',
    h1: '바버샵 클리퍼는 어떤 것을 골라야 하나요?',
    bodies: [
      {
        h2: '선택 기준 세 가지',
        blocks: [
          {
            type: 'table',
            headers: ['기준', '확인할 것', '실무 기준'],
            rows: [
              ['모터', '로터리 / 마그네틱 / 피벗', '하루 종일 쓰려면 로터리'],
              ['날', '규격 호환, 교체 주기', '날을 따로 구할 수 있는 모델'],
              ['배터리', '연속 사용 시간, 유선 겸용', '최소 2시간 + 유선 겸용'],
            ],
          },
          { type: 'p', text: '**날을 따로 살 수 있는지**가 장기적으로 가장 중요합니다. 클리퍼 본체보다 날이 먼저 무뎌지는데, 전용 날이 단종되면 본체까지 못 씁니다.' },
        ],
      },
      {
        h2: '“비싼 걸 사면 잘 깎인다”가 아닙니다',
        blocks: [
          { type: 'p', text: '입문 단계에서 50만원짜리를 사는 경우가 있는데, 결과를 만드는 건 클리퍼 성능이 아니라 **날 관리와 손기술**입니다.' },
          { type: 'p', text: '무뎌진 날로 고급 클리퍼를 쓰는 것보다, 잘 관리된 날로 중급기를 쓰는 쪽이 훨씬 깔끔합니다. 날은 사용 후 매번 털어내고 오일을 발라야 하며, 사용 빈도에 따라 주기적으로 교체하거나 연마해야 합니다.' },
          { type: 'p', text: '그리고 클리퍼는 **한 대로 끝나지 않습니다.** 벌크용(면적을 빠르게), 디테일용(라인·귀 주변), 트리머까지 최소 2~3대 구성이 실무 표준입니다. 처음부터 한 대에 예산을 몰아넣기보다 역할을 나눠 구성하세요.' },
        ],
      },
      {
        h2: '창업 준비 중이라면',
        blocks: [
          { type: 'p', text: '바버샵 장비 예산에서 클리퍼류는 보통 50~150만원 선을 잡습니다. 여기에 가위, 이발 의자, 샴푸대가 별도로 들어갑니다.' },
          { type: 'p', text: '중고 시장이 형성돼 있지만 **클리퍼는 중고를 권하지 않습니다.** 모터 마모 상태를 겉으로 확인하기 어렵고, 위생 문제도 있습니다. 의자나 수납 같은 집기는 중고로 아끼고 클리퍼는 새것으로 가세요.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/equipment/clipper', label: '클리퍼 날 번호·관리법' },
      { href: '/hair/equipment/salon', label: '창업 장비 예산' },
    ],
    relatedQuestions: ['hair-scissors-guide', 'hair-wholesale', 'hair-chair-shampoo-cost', 'hair-shampoo-plumbing'],
    disclaimer: '가격은 브랜드와 사양에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-license-how-to': {
    metaTitle: '이용사 자격증은 어떻게 취득하나요? | 자주 묻는 질문',
    lead: '한국산업인력공단 Q-Net에서 필기와 실기를 치릅니다. 노베이스 기준 3~6개월이 걸리고, 합격 후 시·군·구청에서 면허를 발급받아야 영업할 수 있습니다.',
    h1: '이용사 자격증은 어떻게 취득하나요?',
    bodies: [
      {
        h2: '취득 절차',
        blocks: [
          {
            type: 'table',
            headers: ['단계', '내용', '기간'],
            rows: [
              ['1', 'Q-Net 필기 접수·응시', '준비 2~4주'],
              ['2', '실기 접수·응시', '준비 2~4개월'],
              ['3', '미용사(이용사) 면허 신청', '1~2주'],
              ['4', '위생교육 이수 → 영업신고', '개업 시'],
            ],
          },
          { type: 'p', text: '시험 일정은 회차별로 다르므로 **Q-Net 시행 공고**에서 직접 확인하세요. 접수 기간이 짧고 실기는 조기 마감되는 경우가 있습니다.' },
        ],
      },
      {
        h2: '“자격증만 따면 끝”이 아닙니다',
        blocks: [
          { type: 'p', text: '가장 자주 놓치는 부분입니다. 법이 요구하는 것은 자격증이 아니라 **면허**입니다.' },
          { type: 'p', text: '공중위생관리법 제8조제1항은 “이용사 또는 미용사의 면허를 받은 자가 아니면 이용업 또는 미용업을 개설하거나 그 업무에 종사할 수 없다”고 정하고 있습니다. 국가기술자격을 취득한 뒤 **관할 시·군·구청에 면허를 따로 신청**해야 하고, 이 면허증 사본이 있어야 영업신고가 됩니다.' },
          { type: 'p', text: '자격증을 딴 채로 면허 신청을 잊고 있다가 개업 직전에 발견하는 사례가 실제로 있습니다. 합격하면 바로 면허부터 신청하세요.' },
        ],
      },
      {
        h2: '이용사와 미용사, 무엇을 딸까',
        blocks: [
          { type: 'p', text: '두 자격은 다릅니다. 이용업(이용원·바버샵)을 하려면 이용사 면허, 미용업(미용실)을 하려면 미용사 면허가 필요합니다. 남성 전문 바버샵을 계획 중이라면 어느 업종으로 신고할지에 따라 필요한 면허가 달라지므로, **개업 형태를 먼저 정하고 자격을 고르는 순서**가 맞습니다.' },
          { type: 'p', text: '국비지원(내일배움카드)으로 학원 수강료를 상당 부분 지원받을 수 있습니다. 카드 발급 전에 낸 수강료는 소급되지 않으니 **카드부터 발급받고 학원을 등록**하세요.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/license/difference', label: '미용사와 이용사 차이' },
      { href: '/hair/license/issuance', label: '면허증 발급 절차' },
    ],
    relatedQuestions: ['hair-written-exam', 'hair-practical-exam', 'hair-become-beautician', 'hair-license-issue'],
    disclaimer: '시험 일정과 요건은 변경될 수 있습니다. Q-Net 공고를 확인하세요.',
    updated: '2026.08.17',
  },

  'nail-license-how-to': {
    metaTitle: '네일 자격증은 어떻게 취득하나요? | 자주 묻는 질문',
    lead: '미용사(네일) 국가기술자격을 Q-Net에서 취득한 뒤 시·군·구청에서 면허를 발급받습니다. 노베이스 기준 3~6개월이 걸립니다.',
    h1: '네일 자격증은 어떻게 취득하나요?',
    bodies: [
      {
        h2: '단계별 소요 기간',
        blocks: [
          {
            type: 'table',
            headers: ['단계', '기간', '내용'],
            rows: [
              ['필기 준비', '2~4주', '이론 위주. 독학 가능'],
              ['실기 준비', '2~4개월', '시술 숙련. 반복 연습 필수'],
              ['면허 신청', '1~2주', '관할 구청 접수'],
            ],
          },
          { type: 'p', text: '직장과 병행하며 주말반이면 6개월, 전일제로 집중하면 3개월 정도로 보시면 됩니다. 변수는 거의 전적으로 **실기 연습 시간 확보**입니다.' },
        ],
      },
      {
        h2: '“필기부터 붙고 실기 준비하자”가 오히려 늦습니다',
        blocks: [
          { type: 'p', text: '순서를 이렇게 잡는 분이 많은데, 전체 기간이 늘어납니다. 필기는 이론이라 병행이 가능하고 실기는 손에 익는 절대 시간이 필요하기 때문입니다.' },
          { type: 'p', text: '**실기 연습을 먼저 시작하고 필기를 그 사이에 끼워 넣는 순서**가 효율적입니다.' },
          { type: 'p', text: '그리고 민간자격증을 국가자격으로 착각하는 경우를 조심하세요. 협회·아카데미가 발급하는 자격증으로는 미용업 영업신고를 할 수 없습니다. 법적 효력이 있는 것은 Q-Net 국가기술자격을 근거로 발급받는 **미용사 면허**뿐입니다.' },
        ],
      },
      {
        h2: '창업까지 생각한다면',
        blocks: [
          { type: 'p', text: '자격증 취득 시점을 확정하지 않은 채 매장부터 계약하면, 면허가 없어 영업신고가 안 되는 동안 월세만 나갑니다.' },
          { type: 'p', text: '권장 순서는 **자격증 → 면허 발급 → 상권 탐색 → 계약 → 위생교육 → 영업신고 → 오픈**입니다. 자격증 준비 기간에 상권을 여유 있게 보는 편이 결과적으로 비용을 아낍니다.' },
          { type: 'p', text: '국비지원(내일배움카드)을 쓰실 계획이면 **카드 발급을 먼저** 하세요. 발급 전 결제분은 지원되지 않습니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/license', label: '미용사(네일) 자격증 상세' },
      { href: '/cost', label: '네일샵 창업비용' },
    ],
    relatedQuestions: ['nail-nailart-certificates', 'nail-national-vs-private', 'nail-academy-choose', 'nail-startup-steps'],
    disclaimer: '시험 일정과 요건은 Q-Net 공고를 확인하세요.',
    updated: '2026.08.17',
  },

  'nail-startup-steps': {
    metaTitle: '네일샵 창업은 무엇부터 준비해야 하나요? | 자주 묻는 질문',
    lead: '자격증·면허가 첫 단계입니다. 이후 상권 탐색, 계약, 위생교육, 영업신고, 사업자등록 순으로 진행하며 총 준비 기간은 4~8개월입니다.',
    h1: '네일샵 창업은 무엇부터 준비해야 하나요?',
    bodies: [
      {
        h2: '준비 순서',
        blocks: [
          {
            type: 'table',
            headers: ['순서', '항목', '소요', '비고'],
            rows: [
              ['1', '미용사(네일) 자격증', '3~6개월', '이게 없으면 다음이 안 됨'],
              ['2', '면허 발급', '1~2주', '관할 구청'],
              ['3', '상권 탐색·계약', '1~2개월', '건축물 용도 확인 필수'],
              ['4', '위생교육 이수', '3시간', '영업신고 전 사전 이수'],
              ['5', '미용업 영업신고', '1~2주', '구청 위생과'],
              ['6', '사업자등록', '며칠', '홈택스 또는 세무서'],
              ['7', '인테리어·장비·오픈 준비', '1~2개월', 'SNS는 이 시점에 이미 운영 중이어야 함'],
            ],
          },
        ],
      },
      {
        h2: '순서를 바꾸면 돈이 샙니다',
        blocks: [
          { type: 'p', text: '가장 흔한 실수가 **매장부터 계약하는 것**입니다. 좋은 자리가 나왔다고 먼저 계약하면, 면허가 없어 영업신고가 안 되는 동안 월세만 빠져나갑니다.' },
          { type: 'p', text: '두 번째로 흔한 실수는 **건축물 용도 확인을 건너뛰는 것**입니다. 주거용 건물이나 용도가 맞지 않는 공간은 미용업 신고 자체가 반려됩니다. 계약 전에 건축물대장상 용도를 확인하고, 해당 주소로 미용업 신고가 가능한지 관할 구청 위생과에 직접 문의하세요. 이 전화 한 통이 보증금을 지킵니다.' },
          { type: 'p', text: '세 번째는 **SNS를 오픈 후에 시작하는 것**입니다. 개업일에 팔로워 0명, 게시물 0개면 첫 고객까지 1~2개월이 더 밀립니다. 계약한 순간부터 준비 과정을 콘텐츠로 쌓으세요.' },
        ],
      },
      {
        h2: '자금은 창업비용 + 6개월',
        blocks: [
          { type: 'p', text: '독립 매장 기준 창업비용은 1,000~1,500만원, 공유 작업실이면 300~500만원 선입니다. 여기서 끝이 아닙니다.' },
          { type: 'p', text: '오픈 후 1~3개월은 고객이 거의 없는 구간이고, 그동안에도 월세·재료비·생활비는 나갑니다. **창업비용과 별도로 최소 6개월치 버티기 자금**이 필요합니다. 이 돈이 없어서 문을 닫는 경우가 기술이 부족해서 닫는 경우보다 훨씬 많습니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/cost', label: '네일샵 창업비용 상세' },
      { href: '/calculator', label: '창업비용 계산기' },
    ],
    relatedQuestions: ['nail-startup-cost', 'nail-interior-cost', 'nail-license-how-to', 'nail-materials-buying'],
    disclaimer: '비용과 절차는 지역·규모·관할에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  // ── 2차 원고 10편 ──────────────────────────────────────────

  'hair-mens-hairstyle': {
    metaTitle: '남자 머리 스타일 얼굴형별 추천 | 자주 묻는 질문',
    lead: '얼굴형에 따라 가르마 위치와 옆머리 길이를 조절하는 것이 핵심입니다. 둥근형은 위쪽 볼륨, 각진형은 부드러운 라인, 긴형은 옆 볼륨이 기본 원칙입니다.',
    h1: '남자 머리 스타일은 얼굴형별로 어떻게 고르나요?',
    bodies: [
      {
        h2: '얼굴형별 스타일',
        blocks: [
          {
            type: 'table',
            headers: ['얼굴형', '원칙', '어울리는 스타일'],
            rows: [
              ['둥근형', '위쪽 볼륨 + 옆 짧게', '크롭컷, 포마드, 사이드파트'],
              ['각진형', '각을 부드럽게', '가르마펌, 리프펌, 내추럴'],
              ['긴형', '옆 볼륨 + 앞머리', '시스루뱅, 애즈펌, 다운펌'],
              ['역삼각형', '아래쪽 무게감', '레이어드, 울프컷'],
              ['계란형', '대부분 가능', '자유'],
            ],
          },
        ],
      },
      {
        h2: '“얼굴형보다 중요한 게 있습니다”',
        blocks: [
          { type: 'p', text: '얼굴형 차트만 보고 고르면 실패합니다. 실제 결과를 더 크게 좌우하는 건 **모질과 두상**입니다.' },
          { type: 'p', text: '머리카락이 굵고 직모면 크롭컷처럼 짧은 스타일이 잘 서지만, 얇고 힘없는 모발이면 같은 컷이 납작하게 눌립니다. 이런 경우엔 커트만으로 안 되고 **가르마펌이나 다운펌 같은 시술이 사실상 필수**입니다.' },
          { type: 'p', text: '두상도 마찬가지입니다. 뒤통수가 납작하면 짧게 쳤을 때 그대로 드러나므로 뒤쪽에 길이를 남기는 편이 낫습니다.' },
          { type: 'p', text: '그래서 사진을 들고 가는 것보다 **“제 모질이랑 두상에 이 스타일이 나오나요”라고 물어보는 것**이 훨씬 정확합니다.' },
        ],
      },
      {
        h2: '유지 주기와 비용',
        blocks: [
          { type: 'p', text: '짧은 스타일일수록 자주 다듬어야 합니다. 크롭컷·투블럭은 3~4주, 중간 길이는 6~8주가 일반적입니다. 커트 2~3만원, 펌을 병행하면 8~15만원 선입니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/service/cut', label: '커트 가격·주기 상세' },
      { href: '/hair/service/perm', label: '펌 종류 총정리' },
    ],
    relatedQuestions: ['hair-crop-cut', 'hair-side-part-perm', 'hair-down-perm', 'hair-mens-cut-cycle'],
    disclaimer: '결과는 모질·두상·시술자에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-scissors-guide': {
    metaTitle: '미용 가위는 어떤 것을 사야 하나요? 입문용 가격대 | 자주 묻는 질문',
    lead: '입문용은 10~30만원, 실무용은 40~100만원 선입니다. 커트가위와 틴닝가위 2자루로 시작하고, 손 크기에 맞는 핸들 형태를 먼저 확인하세요.',
    h1: '미용 가위는 어떤 것을 사야 하나요? 입문용 가격대는?',
    bodies: [
      {
        h2: '종류와 가격대',
        blocks: [
          {
            type: 'table',
            headers: ['종류', '용도', '입문용', '실무용'],
            rows: [
              ['커트가위', '기본 커트', '10~25만원', '40~80만원'],
              ['틴닝가위', '숱치기', '8~20만원', '30~60만원'],
              ['블런트가위', '직선 라인', '15~30만원', '50~100만원'],
              ['세니뉴가위', '질감 표현', '—', '40~80만원'],
            ],
          },
          { type: 'p', text: '크기는 보통 5.0~6.5인치입니다. 손이 작으면 5.0~5.5인치, 남성 커트 위주라면 6.0인치 이상이 편합니다.' },
        ],
      },
      {
        h2: '“좋은 가위를 사면 실력이 는다”는 아닙니다',
        blocks: [
          { type: 'p', text: '학원 다니면서 100만원짜리 가위를 사는 경우가 있는데, 초보 단계에서 가위값과 결과물은 거의 상관이 없습니다. 오히려 **손에 안 맞는 고가 가위**가 자세를 망칩니다.' },
          { type: 'p', text: '먼저 확인할 것은 가격이 아니라 세 가지입니다.' },
          {
            type: 'list',
            items: [
              '**핸들 형태** — 오프셋이 손목 부담이 적습니다. 매장에서 직접 잡아보세요.',
              '**무게** — 하루 종일 쥐는 도구라 20g 차이도 손목에 옵니다.',
              '**날 형태** — 착강날은 정밀 커트, 합금날은 내구성.',
            ],
          },
          { type: 'p', text: '그리고 가위는 **연마**를 전제로 씁니다. 3~6개월마다 연마해야 하고, 연마를 맡길 곳이 있는 브랜드인지가 장기적으로 가격보다 중요합니다.' },
        ],
      },
      {
        h2: '관리와 교체',
        blocks: [
          { type: 'p', text: '사용 후 매번 마른 천으로 닦고 나사 부위에 오일을 넣으세요. 떨어뜨리면 날이 미세하게 틀어지는데, 눈으로는 안 보여도 커트 라인에서 바로 드러납니다.' },
          { type: 'p', text: '창업 준비 중이라면 가위류 예산은 보통 50~150만원입니다. 클리퍼·이발 의자·샴푸대가 별도로 들어갑니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/equipment/scissors', label: '미용 가위 발수·관리법' },
      { href: '/hair/equipment/salon', label: '창업 장비 예산' },
    ],
    relatedQuestions: ['hair-clipper-guide', 'hair-wholesale', 'hair-chair-shampoo-cost', 'hair-startup-cost'],
    disclaimer: '가격은 브랜드와 사양에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-volume-magic': {
    metaTitle: '볼륨매직은 얼마나 유지되나요? 일반 매직과 차이 | 자주 묻는 질문',
    lead: '볼륨매직은 3~6개월 유지됩니다. 뿌리에 볼륨을 주고 중간부터 펴는 시술이라, 전체를 곧게 펴는 일반 매직과 목적이 다릅니다.',
    h1: '볼륨매직은 얼마나 유지되나요? 일반 매직과 차이는?',
    bodies: [
      {
        h2: '두 시술 비교',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '볼륨매직', '일반 매직'],
            rows: [
              ['뿌리', '볼륨을 세움', '함께 펴짐'],
              ['결과', '자연스러운 실루엣', '직선적'],
              ['시술 시간', '3~4시간', '2~3시간'],
              ['가격', '12~25만원', '8~18만원'],
              ['유지', '3~6개월', '4~6개월'],
              ['적합', '뿌리가 눌리는 모발', '곱슬·부스스한 모발'],
            ],
          },
        ],
      },
      {
        h2: '“볼륨매직 하면 머리가 붕 뜬다”는 오해입니다',
        blocks: [
          { type: 'p', text: '이름 때문에 생기는 오해입니다. 볼륨매직은 머리를 부풀리는 시술이 아니라 **뿌리가 눌려서 납작해 보이는 것을 세워주는** 시술입니다. 결과적으로는 오히려 정돈돼 보입니다.' },
          { type: 'p', text: '반대로 실제로 조심해야 할 것은 **뿌리 손상**입니다. 뿌리에 열과 약을 집중적으로 쓰기 때문에, 두피에 너무 가깝게 시술하면 자극이 옵니다. 두피가 예민하거나 탈모가 진행 중이라면 시술 전에 말씀하셔야 합니다.' },
          { type: 'p', text: '그리고 새로 자란 뿌리는 시술 효과가 없으므로, 2~3개월 지나면 뿌리 부분만 눌리기 시작합니다. 이때는 전체 재시술이 아니라 **뿌리 리터치**로 처리하는 편이 손상과 비용 양쪽에서 낫습니다.' },
        ],
      },
      {
        h2: '시술 후 관리',
        blocks: [
          {
            type: 'list',
            items: [
              '48시간은 머리를 묶거나 귀 뒤로 넘기지 않기 (자국이 남습니다)',
              '첫 이틀은 감지 않는 편이 형태 고정에 유리합니다',
              '염색·탈색과 같은 날 진행은 손상이 겹치므로 2주 이상 간격 권장',
            ],
          },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/service/perm', label: '펌 종류 총정리' },
      { href: '/hair/scalp/clinic', label: '헤어 클리닉' },
    ],
    relatedQuestions: ['hair-perm-types', 'hair-hippie-perm', 'hair-shadow-perm', 'hair-bleaching-damage'],
    disclaimer: '결과와 유지 기간은 모발 상태에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'makeup-artist-salary': {
    metaTitle: '메이크업 아티스트 연봉은 얼마인가요? | 자주 묻는 질문',
    lead: '어시스트 시기는 월 150~200만원, 3~5년차 디자이너는 250~400만원 선입니다. 프리랜서·웨딩 성수기에는 편차가 크게 벌어집니다.',
    h1: '메이크업 아티스트 연봉은 얼마인가요?',
    bodies: [
      {
        h2: '경력별 수입 구간',
        blocks: [
          {
            type: 'table',
            headers: ['단계', '기간', '월 수입', '형태'],
            rows: [
              ['어시스트', '1~2년', '150~200만원', '급여'],
              ['주니어', '2~3년', '200~280만원', '급여 + 인센티브'],
              ['디자이너', '3~5년', '250~400만원', '급여 + 인센티브'],
              ['프리랜서', '5년~', '200~600만원', '건당 정산'],
              ['샵 운영', '—', '편차 큼', '매출 − 고정비'],
            ],
          },
        ],
      },
      {
        h2: '“어시스트 기간이 가장 큰 관문입니다”',
        blocks: [
          { type: 'p', text: '연봉표만 보고 진입했다가 가장 많이 이탈하는 구간이 초반 1~2년입니다. 이유는 금액 자체보다 **근무 형태**에 있습니다.' },
          { type: 'p', text: '웨딩 메이크업은 새벽 출근이 일상입니다. 예식이 오전에 몰려 있어 4~5시에 시작하는 날이 많고, 주말이 성수기라 평일에 쉽니다. 여기에 어시스트 시기에는 시술보다 준비·정리·이동이 대부분입니다.' },
          { type: 'p', text: '기술을 배우는 대가로 이 기간을 버티는 구조인데, **이 사실을 모르고 들어오면 6개월 안에 그만두게 됩니다.** 반대로 알고 시작하면 2년 뒤 수입 곡선이 꺾여 올라갑니다.' },
        ],
      },
      {
        h2: '수입을 올리는 경로',
        blocks: [
          { type: 'p', text: '급여만으로는 상한이 뚜렷합니다. 실제로 수입이 벌어지는 지점은 세 가지입니다.' },
          {
            type: 'list',
            items: [
              '**프리랜서 전환** — 건당 정산. 웨딩 1건 15~30만원. 대신 예약을 스스로 채워야 합니다',
              '**영역 확장** — 반영구·속눈썹·퍼스널컬러 진단을 붙이면 객단가와 비수기 방어가 동시에 됩니다',
              '**샵 운영** — 상한은 가장 높지만 고정비 리스크가 생깁니다',
            ],
          },
          { type: 'p', text: '어느 경로든 **포트폴리오와 제휴처(웨딩플래너·스튜디오)** 가 실질적인 자산입니다. 급여 받는 동안 이 둘을 쌓아두는 사람과 아닌 사람의 3년 뒤가 갈립니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/makeup/revenue', label: '메이크업샵 예상수익' },
      { href: '/makeup/personal-color', label: '퍼스널컬러 부가 메뉴' },
    ],
    relatedQuestions: ['makeup-artist-reality', 'makeup-become-artist', 'makeup-academy-choose', 'makeup-portfolio'],
    disclaimer: '수입은 지역·소속·개인 역량에 따라 크게 다릅니다.',
    updated: '2026.08.17',
  },

  'nail-nailart-certificates': {
    metaTitle: '네일아트 자격증 종류 총정리 | 자주 묻는 질문',
    lead: '창업·취업에 쓰이는 것은 미용사(네일) 국가기술자격 하나뿐입니다. 나머지 협회·아카데미 자격증은 민간자격으로 법적 효력이 없습니다.',
    h1: '네일아트 자격증은 어떤 종류가 있나요?',
    bodies: [
      {
        h2: '국가자격과 민간자격',
        blocks: [
          {
            type: 'table',
            headers: ['구분', '미용사(네일) 국가기술자격', '민간자격'],
            rows: [
              ['발급', '한국산업인력공단(Q-Net)', '협회·아카데미'],
              ['면허 연결', '가능 — 미용사 면허의 근거', '불가'],
              ['미용업 영업신고', '가능', '불가'],
              ['취업 시 인정', '사실상 표준', '참고 자료'],
              ['용도', '창업·취업 전반', '기술 수료 증명'],
            ],
          },
        ],
      },
      {
        h2: '“자격증이 많을수록 유리하다”는 아닙니다',
        blocks: [
          { type: 'p', text: '민간자격을 3~4개씩 모으는 경우가 있는데, 채용하는 쪽에서 보는 것은 자격증 개수가 아니라 **작업물**입니다. 국가자격 하나와 좋은 포트폴리오가, 민간자격 다섯 개보다 강합니다.' },
          { type: 'p', text: '더 위험한 경우는 민간자격만 믿고 창업을 준비하는 것입니다. 일부 발급 기관이 “이 자격증으로 창업 가능”이라고 안내하는데, **영업신고 단계에서 미용사 면허증 사본을 요구받습니다.** 이미 보증금과 인테리어비가 들어간 뒤에 알게 되면 최소 3개월이 밀립니다.' },
          { type: 'p', text: '민간자격을 등록하실 때는 한국직업능력연구원 민간자격정보서비스에서 등록 여부와 성격을 먼저 확인하세요.' },
        ],
      },
      {
        h2: '민간자격이 쓸모 있는 경우',
        blocks: [
          { type: 'p', text: '전혀 무의미하지는 않습니다. 특정 기법을 집중적으로 배웠다는 증명으로는 기능합니다.' },
          {
            type: 'list',
            items: ['3D·엠보 등 특수 기법 수료', '특정 브랜드 제품 교육 이수', '강사 과정 — 아카데미 강의를 하려면 요구되는 경우가 있습니다'],
          },
          { type: 'p', text: '순서는 명확합니다. **국가자격 먼저, 민간자격은 그 위에 얹는 것**입니다.' },
        ],
      },
    ],
    relatedInfo: [{ href: '/license', label: '미용사(네일) 자격증 상세' }],
    relatedQuestions: ['nail-license-how-to', 'nail-national-vs-private', 'nail-academy-choose', 'nail-startup-steps'],
    disclaimer: '자격 제도는 변경될 수 있습니다. Q-Net 공고를 확인하세요.',
    updated: '2026.08.17',
  },

  'nail-nail-tip-guide': {
    metaTitle: '네일 팁 종류와 지속기간, 사용법 | 자주 묻는 질문',
    lead: '네일 팁은 미리 성형된 인조손톱을 붙여 길이를 만드는 방식으로, 지속기간은 2~3주입니다. 아크릴 연장보다 시술이 빠르고 가격도 낮습니다.',
    h1: '네일 팁은 어떻게 쓰나요? 종류와 지속기간은?',
    bodies: [
      {
        h2: '팁 연장과 아크릴 연장 비교',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '팁 연장', '아크릴 연장'],
            rows: [
              ['지속', '2~3주', '3~4주'],
              ['시술 시간', '1.5~2시간', '2~3시간'],
              ['가격', '5~9만원', '6~10만원'],
              ['난이도', '중', '상'],
              ['자연스러움', '접착선이 보일 수 있음', '더 자연스러움'],
            ],
          },
          { type: 'p', text: '팁은 종류가 많습니다. 풀커버 팁은 손톱 전체를 덮고, 하프 팁은 끝부분만 붙여 자연 손톱을 살립니다. 최근에는 미리 아트가 된 **프렌치 팁·젤 팁**도 많이 쓰입니다.' },
        ],
      },
      {
        h2: '“팁은 손톱을 상하게 한다”는 절반만 맞습니다',
        blocks: [
          { type: 'p', text: '팁 자체가 손톱을 손상시키는 게 아니라, **제거 과정**이 문제입니다. 아세톤에 충분히 불리지 않고 억지로 뜯어내면 자연 손톱 표면이 같이 벗겨집니다.' },
          { type: 'p', text: '또 하나 흔한 오해는 접착제 문제입니다. 접착제보다 **팁 사이즈가 안 맞는 것**이 더 큰 원인입니다. 작은 팁을 억지로 붙이면 양옆이 눌려 들뜨고, 그 틈으로 습기가 들어가 곰팡이(그린네일)가 생깁니다.' },
          { type: 'p', text: '셀프로 하실 때는 사이즈부터 정확히 맞추세요. 큰 것을 골라 파일로 줄이는 편이 안전합니다.' },
        ],
      },
      {
        h2: '오래 쓰려면',
        blocks: [
          { type: 'p', text: '샤워나 설거지 직후 손톱이 불어 있을 때는 힘을 주지 마세요. 들뜨기 시작한 팁은 방치하면 그 틈에서 문제가 커지므로 바로 정리하는 편이 낫습니다.' },
          { type: 'p', text: '제거는 아세톤에 10~15분 불린 뒤 오렌지스틱으로 밀어내는 방식입니다. 뜯지 마세요.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/service/acrylic', label: '아크릴 연장 시술 상세' },
      { href: '/service/full-set', label: '풀세트' },
    ],
    relatedQuestions: ['nail-nailart-types', 'nail-gel-nail-duration', 'nail-self-nail-start', 'nail-nail-supplement'],
    disclaimer: '지속 기간은 손톱 상태와 생활 습관에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'nail-uv-vs-led-lamp': {
    metaTitle: '네일 UV 램프와 LED 램프 차이 | 자주 묻는 질문',
    lead: 'LED는 경화가 빠르고 수명이 길지만 호환되는 젤이 제한적이고, UV는 거의 모든 젤에 쓰이지만 느립니다. 실무에서는 겸용기를 씁니다.',
    h1: '네일 UV 램프와 LED 램프는 무엇이 다른가요?',
    bodies: [
      {
        h2: '비교',
        blocks: [
          {
            type: 'table',
            headers: ['항목', 'UV 램프', 'LED 램프'],
            rows: [
              ['경화 시간', '60~120초', '30~60초'],
              ['젤 호환', '대부분', 'LED 전용 젤만'],
              ['전구 수명', '소모품, 교체 필요', '반영구'],
              ['가격', '3~10만원', '5~20만원'],
              ['발열', '낮음', '순간 발열 있음'],
            ],
          },
        ],
      },
      {
        h2: '“LED가 무조건 낫다”가 아닙니다',
        blocks: [
          { type: 'p', text: '빠르고 전구 교체가 없어서 LED가 우위처럼 보이지만, **젤 호환이 발목을 잡습니다.** 도매에서 저렴하게 들여온 젤이 UV 전용이면 LED에서 경화가 안 되거나 겉만 굳고 속이 무릅니다.' },
          { type: 'p', text: '속경화 불량은 눈으로 잘 안 보입니다. 시술 직후엔 멀쩡한데 며칠 뒤 리프팅이 오거나, 미경화 젤이 피부에 닿아 알레르기를 유발합니다. **네일 알레르기의 상당수가 경화 부족에서 옵니다.**' },
          { type: 'p', text: '그래서 실무에서는 대부분 **UV/LED 겸용기**를 씁니다. 젤 종류를 가리지 않고, LED 젤은 빠르게 굳힐 수 있습니다. 처음 구매하신다면 겸용기 한 대로 시작하세요.' },
        ],
      },
      {
        h2: '구매 시 확인할 것',
        blocks: [
          {
            type: 'list',
            items: [
              '**와트수** — 36W 이상이 실무 기준. 48W면 충분합니다',
              '**겸용 여부** — UV/LED 듀얼',
              '**타이머** — 30/60/90초 프리셋',
              '**손 들어가는 크기** — 발까지 넣을 수 있으면 페디큐어에 유리합니다',
            ],
          },
          { type: 'p', text: '가격은 입문용 3~10만원, 실무용 15~30만원 선입니다. 램프는 중고를 사도 큰 문제가 없는 품목이지만, LED는 조사량이 떨어지면 경화 불량이 나므로 사용 이력을 확인하세요.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/service/gel-nail', label: '젤네일 시술 상세' },
      { href: '/cost', label: '네일샵 창업비용' },
    ],
    relatedQuestions: ['nail-gel-nail-duration', 'nail-materials-buying', 'nail-self-nail-start', 'nail-table-guide'],
    disclaimer: '제품 사양은 브랜드에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'skin-brazilian-waxing': {
    metaTitle: '브라질리언 왁싱은 얼마나 아픈가요? 주기와 준비사항 | 자주 묻는 질문',
    lead: '첫 시술이 가장 아프고 회를 거듭할수록 통증이 줄어듭니다. 주기는 3~4주이며 털 길이 5~10mm일 때 가장 깔끔하게 제거됩니다.',
    h1: '브라질리언 왁싱은 얼마나 아픈가요? 주기는?',
    bodies: [
      {
        h2: '회차별 통증과 변화',
        blocks: [
          {
            type: 'table',
            headers: ['회차', '통증', '변화'],
            rows: [
              ['1회', '가장 강함', '모근이 굵어 저항이 큼'],
              ['2~3회', '절반 수준', '털이 가늘어지기 시작'],
              ['4회 이상', '견딜 만함', '밀도 감소, 자라는 속도 느려짐'],
            ],
          },
          { type: 'p', text: '통증을 줄이려면 생리 전후 일주일은 피하고(이 시기 통각이 예민해집니다), 시술 30분 전 카페인을 피하는 편이 좋습니다. 관리실에 따라 마취 크림을 제공하기도 합니다.' },
        ],
      },
      {
        h2: '“면도로 정리하고 가면 편하다”가 가장 큰 실수입니다',
        blocks: [
          { type: 'p', text: '왁싱 전에 깔끔하게 하려고 면도하고 오시는 분이 많은데, 이러면 시술 자체가 불가능해집니다. 왁스가 잡을 털이 없기 때문입니다.' },
          { type: 'p', text: '더 큰 문제는 **모주기가 어긋난다**는 점입니다. 왁싱의 효과는 같은 주기로 반복해 모근을 약화시키는 데서 나옵니다. 중간에 면도를 끼워 넣으면 털이 자라는 시점이 제각각이 되어, 다음 왁싱에서 뽑히는 털과 남는 털이 섞입니다. 결과적으로 처음부터 다시 시작하는 셈입니다.' },
          { type: 'p', text: '적정 길이는 **5~10mm**입니다. 1cm를 넘으면 오히려 통증이 커지고 중간에 끊어집니다.' },
        ],
      },
      {
        h2: '시술 후 관리',
        blocks: [
          {
            type: 'list',
            items: [
              '24시간은 사우나·수영장·격한 운동 피하기',
              '48시간은 자극적인 바디제품 피하기',
              '3일 후부터 가벼운 각질 제거 — 인그로운 헤어 예방에 가장 효과적',
              '붉은기와 좁쌀 같은 돌기는 보통 1~2일이면 가라앉습니다',
            ],
          },
          { type: 'p', text: '가격은 5~10만원 선이고, 첫 방문 시 다음 예약을 함께 잡으면 주기를 지키기 쉽습니다.' },
        ],
      },
    ],
    relatedInfo: [{ href: '/skincare/service/waxing', label: '왁싱 시술 상세' }],
    relatedQuestions: ['skin-waxing-guide', 'skin-waxing-license', 'skin-care-frequency', 'skin-body-scrub'],
    disclaimer: '피부 질환이 있거나 약물 복용 중이라면 사전에 상담하세요.',
    updated: '2026.08.17',
  },

  'skin-lifting-types': {
    metaTitle: '리프팅 관리 종류와 차이 총정리 | 자주 묻는 질문',
    lead: '관리실 리프팅은 고주파·초음파·미세전류·수기 관리로 나뉩니다. 회당 5~20만원이며 2주 간격 4~6회를 한 코스로 봅니다.',
    h1: '리프팅 관리는 어떤 종류가 있나요?',
    bodies: [
      {
        h2: '방식별 비교',
        blocks: [
          {
            type: 'table',
            headers: ['방식', '원리', '회당 가격', '체감 시점'],
            rows: [
              ['고주파(RF)', '열로 진피 자극', '8~20만원', '3~4회차'],
              ['초음파', '진동으로 심부 자극', '7~15만원', '3~4회차'],
              ['미세전류', '근육·순환 자극', '5~12만원', '직후 + 누적'],
              ['수기 관리', '손 기술 리프팅', '5~10만원', '직후'],
            ],
          },
        ],
      },
      {
        h2: '“관리실 리프팅과 병원 리프팅은 다릅니다”',
        blocks: [
          { type: 'p', text: '가장 중요한 구분입니다. 검색하면 하이푸·써마지 같은 의료 장비 시술이 함께 나오는데, 이건 **의료기관에서만** 가능합니다.' },
          { type: 'p', text: '관리실 리프팅은 피부 표면과 얕은 층에 작용해 순환과 탄력을 돕는 관리이고, 병원 시술은 진피 심부나 근막층까지 작용합니다. 효과의 깊이와 지속 기간이 다릅니다.' },
          { type: 'p', text: '관리실에서 병원 시술 수준의 효과를 기대하면 실망하고, 반대로 관리실이 병원 시술처럼 광고하면 **의료법 문제**가 됩니다. 관리사 입장에서 이 경계를 정확히 설명하는 것이 클레임을 막는 가장 확실한 방법입니다.' },
        ],
      },
      {
        h2: '코스와 유지',
        blocks: [
          { type: 'p', text: '2주 간격 4~6회를 한 코스로 잡고, 이후 4~8주 간격으로 유지 관리합니다. 한 번 받고 판단하기보다 코스를 완주해야 변화가 보입니다.' },
          { type: 'p', text: '효과 유지에는 홈케어가 크게 작용합니다. 자외선 차단과 보습이 안 되면 관리 효과가 빠르게 상쇄됩니다.' },
        ],
      },
    ],
    relatedInfo: [{ href: '/skincare/service/lifting', label: '리프팅 관리 시술 상세' }],
    relatedQuestions: ['skin-care-frequency', 'skin-rf-device', 'skin-ultrasound-device', 'skin-aqua-peel'],
    disclaimer: '효과는 개인차가 있으며 의료 시술과는 구분됩니다.',
    updated: '2026.08.17',
  },

  'skin-lymph-massage': {
    metaTitle: '림프 마사지 효과와 배우는 방법 | 자주 묻는 질문',
    lead: '림프 마사지는 부종 완화와 노폐물 순환을 돕는 관리로 회당 5~12만원 선입니다. 국가자격은 없고 피부미용사 과정이나 전문 아카데미에서 배웁니다.',
    h1: '림프 마사지는 어떤 효과가 있고 어디서 배우나요?',
    bodies: [
      {
        h2: '부위별 관리와 가격',
        blocks: [
          {
            type: 'table',
            headers: ['부위', '소요', '가격대', '주요 목적'],
            rows: [
              ['얼굴', '30~40분', '5~8만원', '부기, 턱선 정리'],
              ['다리', '40~60분', '7~12만원', '하체 부종'],
              ['복부', '40~50분', '7~12만원', '순환'],
              ['전신', '90분~', '12~20만원', '종합'],
            ],
          },
          { type: 'p', text: '효과 체감은 시술 직후가 가장 크고, 유지하려면 주 1회 정도의 반복이 필요합니다.' },
        ],
      },
      {
        h2: '“림프 마사지로 살이 빠진다”는 아닙니다',
        blocks: [
          { type: 'p', text: '가장 자주 나오는 오해입니다. 시술 후 둘레가 줄어드는 것은 지방이 빠진 게 아니라 **정체돼 있던 체액이 이동한 결과**입니다. 그래서 체중계 숫자는 거의 변하지 않습니다.' },
          { type: 'p', text: '이걸 체중 감량으로 안내하면 고객 클레임으로 돌아옵니다. 관리사 입장에서는 “부기 완화와 순환”으로 정확히 설명하는 편이 오히려 재방문율에 좋습니다. 기대치를 정확히 잡은 고객이 만족도가 높기 때문입니다.' },
          { type: 'p', text: '또 하나. 심부전·신부전·급성 염증·악성 종양 이력이 있는 경우에는 권장되지 않습니다. 문진표에 반드시 포함하세요.' },
        ],
      },
      {
        h2: '배우려면',
        blocks: [
          { type: 'p', text: '국가자격은 없습니다. 경로는 크게 세 가지입니다.' },
          {
            type: 'list',
            items: [
              '**피부미용사 국가기술자격 과정** — 관리 전반의 기초. 창업까지 생각하면 이게 먼저입니다',
              '**전문 아카데미 과정** — 림프 전용 커리큘럼. 수료증은 민간자격',
              '**해외 자격 과정** — CIDESCO 등. 국내 영업 요건과는 무관합니다',
            ],
          },
          { type: 'p', text: '피부관리샵을 운영하려면 결국 **미용사(피부) 면허와 미용업 영업신고**가 필요합니다. 민간 수료증만으로는 영업할 수 없습니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/license', label: '미용사(피부) 자격증' },
      { href: '/skincare/service/body', label: '바디 관리 시술 상세' },
    ],
    relatedQuestions: ['skin-care-frequency', 'skin-lifting-types', 'skin-body-scrub', 'skin-aqua-peel'],
    disclaimer: '질환이 있거나 치료 중이라면 의료진과 상의하세요.',
    updated: '2026.08.17',
  },

  // ── 3차 원고 10편 ──────────────────────────────────────────

  'skin-aqua-peel': {
    metaTitle: '아쿠아필은 어떤 관리인가요? 주기와 가격 | 자주 묻는 질문',
    lead: '아쿠아필은 물과 흡입 압력으로 모공 노폐물을 제거하는 관리입니다. 회당 5~12만원이며 2~4주 간격이 일반적입니다.',
    h1: '아쿠아필은 어떤 관리인가요? 주기와 가격은?',
    bodies: [
      {
        h2: '관리 개요',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '내용'],
            rows: [
              ['소요 시간', '30~50분'],
              ['가격', '5~12만원 (부가 관리 포함 시 15만원~)'],
              ['주기', '2~4주'],
              ['주 대상', '모공 막힘, 블랙헤드, 각질, 피지'],
              ['다운타임', '거의 없음. 당일 화장 가능'],
            ],
          },
          { type: 'p', text: '물을 이용하기 때문에 스크럽이나 강한 필링보다 자극이 적고, 시술 직후 붉은기도 오래가지 않습니다.' },
        ],
      },
      {
        h2: '“한 번에 모공이 줄어든다”는 아닙니다',
        blocks: [
          { type: 'p', text: '가장 많은 기대와 가장 많은 실망이 여기서 나옵니다. 아쿠아필이 제거하는 것은 **모공을 채우고 있던 노폐물**이지 모공 크기 자체가 아닙니다.' },
          { type: 'p', text: '시술 직후 모공이 작아 보이는 이유는 안이 비워져서 그림자가 줄었기 때문입니다. 관리를 멈추고 피지가 다시 차면 원래대로 돌아옵니다. **모공 크기를 줄이는 것은 진피층에 작용하는 의료 시술의 영역**입니다.' },
          { type: 'p', text: '그래서 아쿠아필은 “개선”보다 **“유지 관리”**로 접근하는 게 맞습니다. 2~4주 주기로 비워주면서 피지 분비 자체를 잡는 홈케어를 병행하는 조합이 현실적입니다.' },
          { type: 'p', text: '관리사 입장에서도 이 설명을 먼저 하는 편이 낫습니다. 기대치를 정확히 잡은 고객이 재방문율이 높습니다.' },
        ],
      },
      {
        h2: '함께 받으면 좋은 관리',
        blocks: [
          { type: 'p', text: '아쿠아필로 노폐물을 비운 직후는 흡수율이 올라가는 시점이라, **진정·보습 관리나 LED**를 이어서 받는 구성이 많습니다. 반대로 같은 날 강한 필링을 겹치면 장벽이 손상됩니다.' },
          { type: 'p', text: '민감성 피부나 트러블이 심한 상태라면 흡입 강도를 낮추거나 시기를 미루는 편이 안전합니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/guide', label: '피부관리 종류·가격 가이드' },
      { href: '/skincare/service/basic', label: '기본 피부관리 상세' },
    ],
    relatedQuestions: ['skin-care-frequency', 'skin-lifting-types', 'skin-lymph-massage', 'skin-body-scrub'],
    disclaimer: '피부 상태에 따라 적합 여부가 다릅니다. 질환이 의심되면 피부과 진료를 받으세요.',
    updated: '2026.08.17',
  },

  'skin-license-how-to': {
    metaTitle: '피부미용사 자격증은 어떻게 취득하나요? | 자주 묻는 질문',
    lead: '한국산업인력공단 Q-Net에서 필기와 실기를 치릅니다. 노베이스 기준 4~6개월이 걸리며, 합격 후 시·군·구청에서 미용사 면허를 발급받아야 영업할 수 있습니다.',
    h1: '피부미용사 자격증은 어떻게 취득하나요?',
    bodies: [
      {
        h2: '단계와 소요 기간',
        blocks: [
          {
            type: 'table',
            headers: ['단계', '기간', '내용'],
            rows: [
              ['필기 준비', '3~5주', '피부학·해부생리·화장품학 등 이론'],
              ['실기 준비', '3~5개월', '관리 절차 숙련. 시간 배분이 관건'],
              ['면허 신청', '1~2주', '관할 시·군·구청'],
              ['위생교육 → 영업신고', '개업 시', '신고 전 사전 이수'],
            ],
          },
          { type: 'p', text: '실기는 정해진 시간 안에 정해진 절차를 끝내야 하는 방식이라, 기술보다 **시간 배분 연습**에서 당락이 갈리는 경우가 많습니다.' },
        ],
      },
      {
        h2: '“국제 자격증이 더 좋다”는 오해입니다',
        blocks: [
          { type: 'p', text: 'CIDESCO 같은 해외 자격을 국가자격보다 상위로 소개하는 곳이 있습니다. 전문성 증명으로는 의미가 있지만, **국내에서 피부관리샵을 여는 데는 아무 효력이 없습니다.**' },
          { type: 'p', text: '공중위생관리법이 요구하는 것은 미용사 면허이고, 그 면허의 근거는 Q-Net 국가기술자격뿐입니다. 국제 자격만 가지고 영업신고를 하려 하면 반려됩니다.' },
          { type: 'p', text: '순서는 하나입니다. **국가자격 먼저, 국제·민간 자격은 그 위에.** 반대로 하면 시간과 돈이 두 번 듭니다.' },
        ],
      },
      {
        h2: '취득 후 진로',
        blocks: [
          {
            type: 'list',
            items: [
              '**취업** — 에스테틱, 피부과 부속 관리실, 호텔 스파',
              '**창업** — 1인 피부관리샵, 왁싱샵. 면허 + 영업신고 필요',
              '**확장** — 왁싱, 속눈썹, 반영구 등을 얹어 객단가를 올리는 방식',
            ],
          },
          { type: 'p', text: '국비지원(내일배움카드)으로 수강료 상당 부분을 지원받을 수 있습니다. **카드를 먼저 발급**받고 학원을 등록하세요. 발급 전 결제분은 소급되지 않습니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/license', label: '미용사(피부) 자격증 상세' },
      { href: '/skincare/cost', label: '피부관리샵 창업비용' },
    ],
    relatedQuestions: ['skin-esthetician-reality', 'skin-esthetician-salary', 'skin-esthetician-job', 'skin-written-exam'],
    disclaimer: '시험 일정과 요건은 Q-Net 공고를 확인하세요.',
    updated: '2026.08.17',
  },

  'hair-hush-cut': {
    metaTitle: '허쉬컷은 어떤 얼굴형에 어울리나요? | 자주 묻는 질문',
    lead: '허쉬컷은 얼굴 옆 라인에 층을 내어 감싸는 커트로, 각진형과 긴형에 특히 잘 맞습니다. 커트만 3~6만원, 펌 병행 시 12~20만원 선입니다.',
    h1: '허쉬컷은 어떤 얼굴형에 어울리나요?',
    bodies: [
      {
        h2: '얼굴형별 적용',
        blocks: [
          {
            type: 'table',
            headers: ['얼굴형', '어울림', '조절 포인트'],
            rows: [
              ['각진형', '매우 좋음', '광대 옆부터 층을 시작'],
              ['긴형', '좋음', '옆 볼륨을 살려 가로 균형'],
              ['둥근형', '조절 필요', '층을 턱선 아래부터'],
              ['역삼각형', '좋음', '아래쪽 무게 유지'],
            ],
          },
          { type: 'p', text: '레이어드컷과 비슷해 보이지만 다릅니다. 레이어드는 전체에 층을 고르게 내고, **허쉬컷은 얼굴 주변과 뒷머리에 층을 몰아** 감싸는 실루엣을 만듭니다.' },
        ],
      },
      {
        h2: '“허쉬컷은 방치해도 예쁘다”는 오해입니다',
        blocks: [
          { type: 'p', text: '이름과 이미지 때문에 관리가 필요 없는 스타일로 알려져 있는데, 실제로는 그 반대입니다.' },
          { type: 'p', text: '허쉬컷의 자연스러운 느낌은 **의도적으로 만든 층**에서 나옵니다. 층이 자라 무너지면 그냥 정리 안 된 머리로 보입니다. 형태 유지에 **6~8주 주기** 커트가 필요하고, 이 비용을 계산에 넣으셔야 합니다.' },
          { type: 'p', text: '그리고 직모에는 층만으로 그 실루엣이 안 나옵니다. 사진 속 허쉬컷은 대부분 **펌이나 열기구 스타일링이 들어간 상태**입니다. 커트만 하고 사진과 다르다고 느끼는 경우가 여기서 나옵니다. 상담할 때 “커트만으로 이 느낌이 나오는지”를 꼭 물어보세요.' },
        ],
      },
      {
        h2: '함께 하면 좋은 시술',
        blocks: [
          { type: 'p', text: '곱슬기가 없으면 **히피펌이나 애즈펌**을 함께 하는 경우가 많습니다. 층과 컬이 만나야 그 실루엣이 완성되기 때문입니다.' },
          { type: 'p', text: '반대로 곱슬이 강하면 층을 많이 낼수록 부피가 커지므로, 층을 줄이거나 클리닉을 병행하는 편이 낫습니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/service/cut', label: '커트 가격·주기 상세' },
      { href: '/hair/scalp/clinic', label: '헤어 클리닉' },
    ],
    relatedQuestions: ['hair-layered-cut', 'hair-hippie-perm', 'hair-shadow-perm', 'hair-perm-types'],
    disclaimer: '결과는 모질·두상·시술자에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-shadow-perm': {
    metaTitle: '쉐도우펌은 얼마나 유지되나요? | 자주 묻는 질문',
    lead: '쉐도우펌은 보통 2~4개월 유지됩니다. 옆머리와 뒷머리를 얼굴 쪽으로 감싸주는 남성 펌으로, 시술 1~2시간에 8~15만원 선입니다.',
    h1: '쉐도우펌은 얼마나 유지되나요?',
    bodies: [
      {
        h2: '다른 남성 펌과 비교',
        blocks: [
          {
            type: 'table',
            headers: ['펌', '목적', '유지', '가격'],
            rows: [
              ['쉐도우펌', '옆·뒷머리를 안쪽으로', '2~4개월', '8~15만원'],
              ['다운펌', '뜨는 옆머리를 눌러줌', '1~3개월', '3~7만원'],
              ['가르마펌', '앞머리 가르마 고정', '2~3개월', '6~12만원'],
              ['리프펌', '앞머리에 볼륨', '2~3개월', '8~15만원'],
            ],
          },
          { type: 'p', text: '목적이 다릅니다. 옆머리가 **뜬다**면 다운펌, 옆머리가 **바깥으로 뻗는다**면 쉐도우펌입니다.' },
        ],
      },
      {
        h2: '“쉐도우펌이면 옆머리가 다 눌린다”가 아닙니다',
        blocks: [
          { type: 'p', text: '쉐도우펌과 다운펌을 같은 것으로 아는 분이 많습니다. 실제로는 방향이 다릅니다.' },
          { type: 'p', text: '다운펌은 뜬 머리를 **아래로 눌러** 붙이는 것이고, 쉐도우펌은 뻗치는 머리를 **안쪽으로 말아** 얼굴선을 감싸는 것입니다. 옆머리가 심하게 뜨는데 쉐도우펌만 하면 원하는 결과가 안 나옵니다.' },
          { type: 'p', text: '그래서 실제 상담에서는 **두 개를 같이 하는 경우**가 많습니다. 옆은 다운, 앞과 뒤는 쉐도우 식으로요. 본인 머리가 어떻게 뻗는지 사진으로 보여주고 상담하시는 게 가장 정확합니다.' },
          { type: 'p', text: '또 하나. 머리가 짧으면 컬이 잡힐 길이가 부족해 효과가 약합니다. 커트 직후보다 **2~3주 자란 상태**에서 하는 편이 결과가 좋습니다.' },
        ],
      },
      {
        h2: '관리와 재시술',
        blocks: [
          {
            type: 'list',
            items: [
              '시술 후 48시간은 감지 않기 — 형태 고정',
              '말릴 때 손으로 안쪽 방향을 잡아주며 건조',
              '재시술은 2~3개월 간격. 더 자주 하면 손상이 누적됩니다',
              '커트를 하면 컬 부분이 잘려나가 효과가 줄어드니, 커트와 펌 주기를 맞추세요',
            ],
          },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/service/perm', label: '펌 종류 총정리' },
      { href: '/hair/service/styling', label: '스타일링 시술 상세' },
    ],
    relatedQuestions: ['hair-down-perm', 'hair-side-part-perm', 'hair-lift-vs-down-perm', 'hair-mens-hairstyle'],
    disclaimer: '유지 기간은 모질과 관리 습관에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-solo-salon': {
    metaTitle: '1인 미용실은 혼자서 운영이 가능한가요? | 자주 묻는 질문',
    lead: '가능하지만 예약제 운영이 전제입니다. 하루 5~8명이 현실적인 상한이고, 시술 중 전화·응대를 어떻게 처리하느냐가 운영의 핵심입니다.',
    h1: '1인 미용실은 혼자서 운영이 가능한가요?',
    bodies: [
      {
        h2: '하루 소화량과 매출',
        blocks: [
          {
            type: 'table',
            headers: ['시술 구성', '하루 고객', '객단가', '월 매출(22일)'],
            rows: [
              ['커트 위주', '8~10명', '2~3만원', '400~600만원'],
              ['커트 + 펌·염색', '5~6명', '6~10만원', '700~1,200만원'],
              ['펌·염색 위주', '4~5명', '10~15만원', '900~1,500만원'],
            ],
          },
          { type: 'p', text: '펌·염색은 대기 시간이 길어 그 사이에 다른 고객을 겹쳐 받을 수 있습니다. 이 **겹치기 설계**가 1인 매장 매출을 좌우합니다.' },
        ],
      },
      {
        h2: '“혼자라 인건비가 안 든다”가 함정입니다',
        blocks: [
          { type: 'p', text: '1인 운영의 장점으로 인건비 0원을 꼽는데, 실제로는 **본인이 두 사람 몫을 합니다.** 시술자이면서 동시에 예약 관리자, 청소, 재고 발주, SNS 담당입니다.' },
          { type: 'p', text: '가장 자주 무너지는 지점은 **시술 중 전화**입니다. 염색약 바르는 중에 전화가 오면 못 받고, 못 받은 전화는 그대로 이탈입니다. 그래서 1인 매장은 예약 시스템이 선택이 아니라 필수입니다. 네이버 예약이나 예약 앱으로 전화 응대 자체를 없애야 합니다.' },
          { type: 'p', text: '두 번째는 **아플 때**입니다. 하루 문을 닫으면 그날 매출이 0이고 예약 고객까지 밀립니다. 대체 인력이 없다는 게 1인 운영의 실질적인 최대 리스크입니다.' },
        ],
      },
      {
        h2: '운영을 버티게 하는 세 가지',
        blocks: [
          {
            type: 'list',
            items: [
              '**예약제 전환** — 워크인을 받으면 스케줄이 무너집니다',
              '**시술 시간 표준화** — 메뉴별 소요 시간을 정해두고 그 단위로 예약을 받으세요',
              '**시술 간 정리 시간 확보** — 15분씩 비워두지 않으면 하루가 밀립니다',
            ],
          },
          { type: 'p', text: '창업비용은 규모에 따라 다르지만 소형 1인 매장 기준 보증금 포함 2,000~4,000만원 선입니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/cost', label: '미용실 창업비용' },
      { href: '/hair/revenue', label: '헤어 수익 구조' },
    ],
    relatedQuestions: ['hair-freelance-designer', 'hair-startup-cost', 'hair-startup-steps', 'hair-designer-reality'],
    disclaimer: '매출과 비용은 상권·규모에 따라 크게 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-freelance-designer': {
    metaTitle: '프리랜서 헤어 디자이너는 어떻게 시작하나요? | 자주 묻는 질문',
    lead: '셰어 살롱에 자리를 임차해 시작하는 방식이 일반적입니다. 월 자리 임차료 50~150만원 또는 매출의 30~50% 배분 구조이며, 고정 고객 확보가 전제입니다.',
    h1: '프리랜서 헤어 디자이너는 어떻게 시작하나요?',
    bodies: [
      {
        h2: '계약 형태 비교',
        blocks: [
          {
            type: 'table',
            headers: ['형태', '비용 구조', '장점', '리스크'],
            rows: [
              ['정액 임차', '월 50~150만원 고정', '매출 늘수록 유리', '비수기에도 고정비'],
              ['매출 배분', '매출의 30~50%', '매출 적어도 부담 적음', '성장해도 몫이 큼'],
              ['혼합', '낮은 정액 + 낮은 배분', '균형', '계약 조건 복잡'],
            ],
          },
          { type: 'p', text: '고객이 안정되기 전에는 **배분형**, 예약이 차기 시작하면 **정액형**이 유리합니다. 전환 조건을 계약에 넣어두면 좋습니다.' },
        ],
      },
      {
        h2: '“고객은 따라온다”가 가장 위험한 가정입니다',
        blocks: [
          { type: 'p', text: '독립을 결심하는 이유는 대개 “내 단골이 충분히 있다”입니다. 그런데 실제로 옮겨오는 비율은 생각보다 낮습니다.' },
          { type: 'p', text: '이유는 세 가지입니다. **거리** — 지하철 두 정거장만 멀어져도 이탈합니다. **가격** — 프리랜서 전환하며 단가를 올리면 이탈합니다. **연락 수단** — 매장 예약 시스템으로만 소통했다면 개인적으로 연락할 방법이 없습니다.' },
          { type: 'p', text: '그래서 독립 전에 해야 할 일은 인테리어 고민이 아니라 **개인 연락 채널을 만들어두는 것**입니다. 인스타 계정, 개인 예약 링크, 카카오 채널. 최소 6개월 전부터 준비하세요.' },
          { type: 'p', text: '현실적인 목표치는 **기존 단골의 30~50%**입니다. 이 숫자로 고정비를 감당할 수 있는지 계산하고 결정하세요.' },
        ],
      },
      {
        h2: '계약 전 확인할 것',
        blocks: [
          {
            type: 'list',
            items: [
              '자리 임차료에 포함된 것 (재료, 세탁, 수건, 예약 시스템, 전기·수도)',
              '영업신고 주체 — 셰어 살롱 운영자인지 본인인지',
              '사업자등록 필요 여부와 세금 처리 방식',
              '계약 기간과 해지 통보 기한',
              '다른 디자이너와의 고객 배정 규칙',
            ],
          },
          { type: 'p', text: '특히 두 번째는 반드시 문서로 확인하세요. 형태에 따라 본인이 별도로 미용업 신고를 해야 하는 경우가 있습니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/career/freelance', label: '프리랜서 배분 구조 상세' },
      { href: '/hair/career/salary', label: '헤어 디자이너 연봉' },
    ],
    relatedQuestions: ['hair-solo-salon', 'hair-designer-salary', 'hair-designer-reality', 'hair-startup-cost'],
    disclaimer: '계약 조건은 살롱마다 다릅니다. 반드시 서면으로 확인하세요.',
    updated: '2026.08.17',
  },

  'hair-become-beautician': {
    metaTitle: '미용사가 되려면 무엇부터 해야 하나요? | 자주 묻는 질문',
    lead: '미용사 국가기술자격 취득이 첫 단계이고, 이후 면허 발급과 현장 경력을 쌓습니다. 자격 취득까지 3~6개월, 디자이너 승급까지는 보통 2~4년이 걸립니다.',
    h1: '미용사가 되려면 무엇부터 해야 하나요?',
    bodies: [
      {
        h2: '전체 경로',
        blocks: [
          {
            type: 'table',
            headers: ['단계', '기간', '내용'],
            rows: [
              ['1. 자격 취득', '3~6개월', 'Q-Net 미용사(일반) 필기·실기'],
              ['2. 면허 발급', '1~2주', '관할 시·군·구청'],
              ['3. 스텝·인턴', '1~2년', '샴푸·와인딩·보조. 기술 습득기'],
              ['4. 디자이너 승급', '2~4년차', '자기 고객 보유 시작'],
              ['5. 창업', '5년차~', '1인샵 또는 프랜차이즈'],
            ],
          },
        ],
      },
      {
        h2: '“자격증만 따면 바로 머리를 자른다”가 아닙니다',
        blocks: [
          { type: 'p', text: '가장 큰 인식 차이가 여기서 생깁니다. 자격증은 **출발선에 설 자격**이지 실무 능력의 증명이 아닙니다.' },
          { type: 'p', text: '현장에 들어가면 최소 1~2년은 스텝으로 샴푸, 와인딩, 정리, 예약 응대를 합니다. 커트 가위를 잡는 시점은 그 뒤입니다. 급여도 이 기간이 가장 낮습니다.' },
          { type: 'p', text: '이 구간을 모르고 들어와서 6개월 안에 그만두는 경우가 많습니다. 반대로 알고 시작하면 승급 이후 수입 곡선이 확실히 꺾여 올라갑니다. **미용은 초반 2년을 버티는 사람이 남는 구조**입니다.' },
          { type: 'p', text: '빨리 가고 싶다면 스텝 기간에 자기 연습량을 따로 확보하세요. 승급 속도는 근속 연수가 아니라 연습량이 결정합니다.' },
        ],
      },
      {
        h2: '이용사와 미용사, 무엇을 딸까',
        blocks: [
          { type: 'p', text: '두 자격은 다릅니다. **미용사**는 미용업(미용실), **이용사**는 이용업(이용원·바버샵)에 필요합니다. 남성 전문 바버샵을 목표로 한다면 어느 업종으로 신고할지에 따라 필요한 면허가 달라지므로, 진로를 먼저 정하고 자격을 고르세요.' },
          { type: 'p', text: '국비지원(내일배움카드)으로 학원비 상당 부분을 지원받을 수 있습니다. 카드 발급이 먼저입니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/license/difference', label: '미용사와 이용사 차이' },
      { href: '/hair/career/how-to', label: '디자이너 되는법 로드맵' },
    ],
    relatedQuestions: ['hair-license-how-to', 'hair-become-designer', 'hair-designer-salary', 'hair-designer-reality'],
    disclaimer: '승급 기간과 급여는 매장·지역에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'makeup-academy-choose': {
    metaTitle: '메이크업 학원은 어떤 기준으로 고르나요? | 자주 묻는 질문',
    lead: '실습 비중과 1인당 실습 자리, 강사의 현업 경력 세 가지를 먼저 확인하세요. 수강료는 3~6개월 과정 기준 200~500만원 선이며 국비지원 대상 과정도 있습니다.',
    h1: '메이크업 학원은 어떤 기준으로 고르나요?',
    bodies: [
      {
        h2: '과정별 기간과 수강료',
        blocks: [
          {
            type: 'table',
            headers: ['과정', '기간', '수강료', '목표'],
            rows: [
              ['자격증 대비반', '2~3개월', '100~250만원', '미용사(메이크업) 취득'],
              ['실무 종합반', '4~6개월', '300~500만원', '취업·현장 투입'],
              ['웨딩 전문반', '2~3개월', '200~350만원', '웨딩샵 취업'],
              ['원데이·주말반', '1~4주', '20~80만원', '입문 체험'],
            ],
          },
        ],
      },
      {
        h2: '“커리큘럼표”는 학원 선택의 기준이 못 됩니다',
        blocks: [
          { type: 'p', text: '상담 갈 때 커리큘럼표를 받아보면 어디나 비슷합니다. 베이스, 아이, 립, 웨딩, 촬영… 목차만으로는 구분이 안 됩니다.' },
          { type: 'p', text: '실제로 결과를 가르는 건 목차가 아니라 **한 사람이 손을 몇 번 움직이느냐**입니다. 확인할 것은 이 세 가지입니다.' },
          {
            type: 'list',
            items: [
              '**1교시당 실습 시간 비중** — 이론 위주면 독학과 큰 차이가 없습니다',
              '**1인당 실습 자리와 모델 수급** — 반 인원이 많으면 시연만 보다 끝납니다',
              '**강사의 현업 여부** — 지금도 현장에 나가는 강사인지, 강의만 하는 강사인지',
            ],
          },
          { type: 'p', text: '특히 두 번째가 중요합니다. “소수정예”라고 써 있어도 실제 등록 인원을 물어보세요.' },
        ],
      },
      {
        h2: '국비지원을 쓸 계획이라면',
        blocks: [
          { type: 'p', text: 'HRD-Net에서 내일배움카드를 **먼저 발급**받고 등록하세요. 발급 전에 낸 수강료는 소급 지원되지 않습니다.' },
          { type: 'p', text: '지원 과정이라고 다 같지 않습니다. 같은 국비 과정이라도 실습 장비와 제품 수준 차이가 크고, 출석률 요건을 못 채우면 지원금이 환수됩니다. 직장과 병행하실 거면 **출석을 지킬 수 있는 시간대**부터 고르세요.' },
          { type: 'p', text: '수료 후 취업 연계가 있는지도 확인하시면 좋습니다. 다만 “취업률 100%” 같은 수치는 산정 기준을 함께 물어보셔야 합니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/makeup/license', label: '미용사(메이크업) 자격증' },
      { href: '/makeup/cost', label: '메이크업샵 창업비용' },
    ],
    relatedQuestions: ['makeup-artist-salary', 'makeup-artist-reality', 'makeup-makeup-certificates', 'makeup-beauty-academy'],
    disclaimer: '수강료와 지원 기준은 변경될 수 있습니다. HRD-Net에서 최신 기준을 확인하세요.',
    updated: '2026.08.17',
  },

  'makeup-makeup-certificates': {
    metaTitle: '메이크업 자격증 종류와 필요한 것 | 자주 묻는 질문',
    lead: '국가자격은 미용사(메이크업) 하나이고 나머지는 전부 민간자격입니다. 메이크업샵을 열려면 미용사 면허와 미용업 영업신고가 필요합니다.',
    h1: '메이크업 자격증은 어떤 것이 있고 무엇이 필요한가요?',
    bodies: [
      {
        h2: '자격 구분',
        blocks: [
          {
            type: 'table',
            headers: ['구분', '미용사(메이크업)', '민간자격'],
            rows: [
              ['발급', '한국산업인력공단(Q-Net)', '협회·아카데미'],
              ['면허 연결', '가능', '불가'],
              ['미용업 영업신고', '가능', '불가'],
              ['취업', '사실상 표준', '참고 자료'],
              ['예시', '—', '뷰티컬러리스트, 퍼스널컬러 진단사 등'],
            ],
          },
        ],
      },
      {
        h2: '“메이크업은 자격증 없어도 된다”는 절반만 맞습니다',
        blocks: [
          { type: 'p', text: '프리랜서로 출장을 다니거나 어시스트로 일하는 단계에서는 자격증을 안 물어보는 경우가 많습니다. 그래서 필요 없다고 생각하기 쉽습니다.' },
          { type: 'p', text: '문제는 **본인 매장을 여는 순간**입니다. 메이크업샵은 미용업에 해당하므로 영업신고가 필요하고, 그 서류에 미용사 면허증 사본이 들어갑니다. 면허 없이 영업하면 **300만원 이하의 벌금**(공중위생관리법 제20조제3항), 영업신고까지 없으면 **1년 이하 징역 또는 1천만원 이하 벌금**(같은 조 제1항)이 별도로 적용될 수 있습니다.' },
          { type: 'p', text: '출장 전문으로만 하실 계획이어도 안심할 수 없습니다. 영업소 외 장소에서의 미용 업무는 원칙적으로 제한되고 예외 사유가 정해져 있습니다. 사업 형태를 정하기 전에 관할 구청 위생과에 확인하세요.' },
        ],
      },
      {
        h2: '무엇부터 딸까',
        blocks: [
          { type: 'p', text: '순서는 명확합니다.' },
          {
            type: 'list',
            items: [
              '**미용사(메이크업) 국가기술자격** — Q-Net. 이게 없으면 나머지가 의미 없습니다',
              '**미용사 면허 발급** — 관할 시·군·구청',
              '필요하면 민간자격 추가 — 퍼스널컬러, 반영구, 속눈썹 등 영역 확장용',
            ],
          },
          { type: 'p', text: '민간자격은 등록 여부를 한국직업능력연구원 민간자격정보서비스에서 먼저 확인하세요. “이 자격증으로 창업 가능”이라는 안내는 사실이 아닙니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/makeup/license', label: '미용사(메이크업) 자격증 상세' },
      { href: '/makeup', label: '메이크업샵 창업' },
    ],
    relatedQuestions: ['makeup-national-license', 'makeup-certificate-types', 'makeup-academy-choose', 'makeup-become-artist'],
    disclaimer: '업종 분류와 신고 요건은 관할 지자체에 확인하시기 바랍니다.',
    updated: '2026.08.17',
  },

  'nail-academy-choose': {
    metaTitle: '네일아트 학원은 어떤 기준으로 고르나요? | 자주 묻는 질문',
    lead: '실기 연습 시간을 얼마나 확보해주는지가 전부입니다. 수강료는 자격증 과정 기준 100~250만원이며, 국비지원 대상 과정이 많습니다.',
    h1: '네일아트 학원은 어떤 기준으로 고르나요?',
    bodies: [
      {
        h2: '과정별 기간과 수강료',
        blocks: [
          {
            type: 'table',
            headers: ['과정', '기간', '수강료', '목표'],
            rows: [
              ['자격증반', '2~4개월', '100~250만원', '미용사(네일) 취득'],
              ['실무 종합반', '4~6개월', '250~450만원', '취업·창업'],
              ['아트 심화반', '1~2개월', '60~150만원', '3D·엠보 등 특수 기법'],
              ['창업반', '2~3개월', '200~400만원', '개업 준비 병행'],
            ],
          },
        ],
      },
      {
        h2: '“자격증 취득률”보다 봐야 할 숫자가 있습니다',
        blocks: [
          { type: 'p', text: '학원 상담에서 가장 많이 듣는 게 취득률입니다. 그런데 이 수치는 **중도 포기자를 어떻게 계산했는지**에 따라 얼마든지 달라집니다.' },
          { type: 'p', text: '네일은 실기 숙련이 전부인 종목입니다. 그래서 실제로 물어봐야 할 것은 이겁니다.' },
          {
            type: 'list',
            items: [
              '**자유 연습실을 쓸 수 있나요? 시간 제한은요?** — 수업 외 연습이 실력을 만듭니다',
              '**한 반에 몇 명이고 강사는 몇 명인가요?** — 피드백 받는 횟수가 갈립니다',
              '**재료비가 수강료에 포함인가요?** — 별도면 30~80만원이 더 듭니다',
              '**수료 후 연습실 이용이 가능한가요?** — 시험 준비 기간에 큰 차이가 납니다',
            ],
          },
          { type: 'p', text: '특히 첫 번째가 결정적입니다. 수업 시간만으로 실기 합격선에 도달하기는 어렵습니다.' },
        ],
      },
      {
        h2: '국비지원과 순서',
        blocks: [
          { type: 'p', text: '내일배움카드를 **먼저 발급**받고 등록하세요. 발급 전 결제분은 지원되지 않습니다. HRD-Net에서 ‘네일’ 또는 ‘미용’으로 검색하면 지원 과정이 나옵니다.' },
          { type: 'p', text: '그리고 창업까지 생각하신다면 순서를 지키세요. **자격증 → 면허 발급 → 상권 탐색 → 계약** 입니다. 학원 다니는 기간에 상권을 여유 있게 보는 편이 결과적으로 비용을 아낍니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/license', label: '미용사(네일) 자격증 상세' },
      { href: '/cost', label: '네일샵 창업비용' },
    ],
    relatedQuestions: ['nail-license-how-to', 'nail-nailart-certificates', 'nail-academy-standard', 'nail-startup-steps'],
    disclaimer: '수강료와 지원 기준은 학원·연도에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  // ── 4차 원고 10편 ──────────────────────────────────────────

  'nail-gel-nail-duration': {
    metaTitle: '젤네일은 얼마나 유지되나요? | 자주 묻는 질문',
    lead: '보통 2~4주 유지됩니다. 손톱이 자라면서 뿌리 쪽이 드러나기 때문에, 지속 기간보다 자라 나온 정도가 교체 시점을 결정합니다.',
    h1: '젤네일은 얼마나 유지되나요?',
    bodies: [
      {
        h2: '상황별 지속 기간',
        blocks: [
          {
            type: 'table',
            headers: ['조건', '지속'],
            rows: [
              ['사무직·손 사용 적음', '3~4주'],
              ['물 자주 닿는 직업', '2~3주'],
              ['손톱이 얇거나 유분 많음', '2주 내외'],
              ['아트·스톤 두께 있음', '2~3주 (걸림 많음)'],
              ['페디큐어(발)', '4~6주'],
            ],
          },
          { type: 'p', text: '발톱은 자라는 속도가 손톱의 절반 정도라 훨씬 오래갑니다.' },
        ],
      },
      {
        h2: '“오래 붙어 있으면 좋은 것”이 아닙니다',
        blocks: [
          { type: 'p', text: '4주가 넘어가면 뿌리 쪽에 자라 나온 공간이 생깁니다. 이 틈으로 습기가 들어가면 **그린네일(녹농균 감염)**이 생길 수 있습니다. 젤 밑에서 손톱이 초록색으로 변하는 그것입니다.' },
          { type: 'p', text: '그래서 아까워서 오래 두는 것보다 **3~4주 주기로 교체**하는 편이 손톱 건강에 낫습니다.' },
          { type: 'p', text: '그리고 들뜨기 시작한 부분을 손으로 뜯는 건 절대 하지 마세요. 젤이 떨어질 때 자연 손톱 표면이 같이 벗겨집니다. “젤네일 하면 손톱이 얇아진다”는 말의 실제 원인은 젤이 아니라 **잘못된 제거**입니다.' },
        ],
      },
      {
        h2: '오래 쓰는 방법',
        blocks: [
          {
            type: 'list',
            items: [
              '설거지·청소 시 고무장갑',
              '손톱을 도구처럼 쓰지 않기 (스티커 떼기, 캔 따기)',
              '큐티클 오일을 매일 발라 유연성 유지',
              '들뜬 부분은 방치하지 말고 바로 정리',
            ],
          },
          { type: 'p', text: '제거는 아세톤에 10~15분 불린 뒤 오렌지스틱으로 밀어내는 방식입니다. 셀프로 하실 때도 이 원칙은 같습니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/service/gel-nail', label: '젤네일 시술 상세' },
      { href: '/service/gel-removal', label: '젤 제거' },
    ],
    relatedQuestions: ['nail-nailart-types', 'nail-nail-tip-guide', 'nail-pedicure-duration', 'nail-self-nail-start'],
    disclaimer: '지속 기간은 손톱 상태와 생활 습관에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'nail-pedicure-duration': {
    metaTitle: '페디큐어는 얼마나 유지되나요? | 자주 묻는 질문',
    lead: '젤 페디큐어는 4~6주 유지됩니다. 발톱이 손톱보다 절반 정도 느리게 자라기 때문에 손보다 오래갑니다.',
    h1: '페디큐어는 얼마나 유지되나요?',
    bodies: [
      {
        h2: '종류별 지속 기간',
        blocks: [
          {
            type: 'table',
            headers: ['종류', '지속', '가격대'],
            rows: [
              ['젤 페디큐어', '4~6주', '4~7만원'],
              ['일반 폴리시', '1~2주', '2~4만원'],
              ['케어 + 젤', '4~6주', '6~9만원'],
              ['발 각질 케어만', '—', '2~4만원'],
            ],
          },
          { type: 'p', text: '여름 성수기에는 예약이 몰리므로 시즌 전에 미리 잡는 편이 좋습니다.' },
        ],
      },
      {
        h2: '“오래가니까 여름에만 하면 된다”는 오해입니다',
        blocks: [
          { type: 'p', text: '페디큐어를 여름 시즌 시술로만 생각하는 경우가 많은데, 겨울에 방치한 발이 여름에 더 큰 문제가 됩니다.' },
          { type: 'p', text: '양말과 부츠 안에서 각질과 굳은살이 쌓이고, 습기가 차면서 무좀이나 발톱 변형이 생기기 쉽습니다. 여름에 급하게 관리하려면 각질 제거부터 다시 해야 하고 시간과 비용이 더 듭니다.' },
          { type: 'p', text: '그리고 발톱은 **파고드는 문제(인그로운)**가 손톱보다 흔합니다. 발톱을 둥글게 깎으면 옆이 파고드는데, 이건 통증으로 이어집니다. **발톱은 일자로 깎는 것**이 원칙입니다.' },
        ],
      },
      {
        h2: '관리 팁',
        blocks: [
          {
            type: 'list',
            items: [
              '4~6주 주기로 교체. 오래 두면 들뜬 틈으로 습기가 들어갑니다',
              '시술 후 24시간은 꽉 끼는 신발 피하기',
              '각질 케어는 시술과 함께 받는 편이 효율적입니다',
              '발톱 변색·두꺼워짐이 있으면 관리 전에 피부과 확인이 필요합니다',
            ],
          },
          { type: 'p', text: '무좀이나 발톱 질환이 있는 상태에서 젤을 덮으면 상태가 악화될 수 있으니 시술 전에 말씀하세요.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/service/care', label: '네일 케어 시술 상세' },
      { href: '/nail-art', label: '네일아트 디자인별 가격' },
    ],
    relatedQuestions: ['nail-gel-nail-duration', 'nail-nailart-types', 'nail-nail-tip-guide', 'nail-nail-supplement'],
    disclaimer: '발톱 질환이 의심되면 피부과 진료를 받으세요.',
    updated: '2026.08.17',
  },

  'nail-materials-buying': {
    metaTitle: '네일 재료는 어디서 어떻게 구입하나요? | 자주 묻는 질문',
    lead: '초기 세팅은 오프라인 도매상가, 재주문은 온라인 도매몰이 일반적입니다. 사업자 단가를 적용받으면 소매 대비 30~40% 절감됩니다.',
    h1: '네일 재료는 어디서 어떻게 구입하나요?',
    bodies: [
      {
        h2: '초기 구비 목록과 예산',
        blocks: [
          {
            type: 'table',
            headers: ['품목', '초기 수량', '예산'],
            rows: [
              ['젤 컬러', '기본 20~30색', '30~60만원'],
              ['베이스·탑코트', '각 2~3개', '10~15만원'],
              ['팁·폼', '사이즈별 세트', '10~20만원'],
              ['파일·버퍼', '그릿별 다량', '5~10만원'],
              ['프라이머·본더', '각 2개', '5~10만원'],
              ['소모품 (알콜솜·오렌지스틱 등)', '—', '10만원'],
              ['합계', '', '70~125만원'],
            ],
          },
        ],
      },
      {
        h2: '젤 컬러 100색부터 사면 안 됩니다',
        blocks: [
          { type: 'p', text: '도매가가 싸다는 이유로 컬러를 대량으로 들이는 게 초기 자금이 새는 대표적인 경로입니다.' },
          { type: 'p', text: '실제로 잘 나가는 색은 **20색 안쪽**으로 수렴합니다. 누드·핑크·레드 계열과 시즌 컬러 몇 개가 매출의 대부분입니다. 나머지는 몇 달에 한 번 쓰이거나 아예 안 쓰입니다.' },
          { type: 'p', text: '게다가 젤은 **사용기한이 있습니다.** 오래 두면 분리되거나 굳어서, 안 쓰는 색은 그대로 손실입니다.' },
          { type: 'p', text: '기본 색상으로 시작하고 **고객 요청이 두 번 이상 나온 색만 추가**하세요. 어떤 색이 나가는지 데이터가 쌓이면 그때 대량 구매로 단가를 낮추면 됩니다.' },
        ],
      },
      {
        h2: '구매처 고를 때',
        blocks: [
          {
            type: 'list',
            items: [
              '**사업자 단가표**를 요구하세요. 사업자등록증이 있으면 별도 단가가 있습니다',
              '**색상 실물 확인** — 온라인 사진과 실제 발색은 다릅니다. 초기 세팅은 오프라인 권장',
              '**정품 여부** — 브랜드 젤은 유사품이 유통됩니다. 알레르기 클레임으로 이어집니다',
              '**거래처 2~3곳 유지** — 품절·단가 인상 대응',
            ],
          },
        ],
      },
    ],
    relatedInfo: [
      { href: '/cost', label: '네일샵 창업비용' },
      { href: '/calculator', label: '창업비용 계산기' },
    ],
    relatedQuestions: ['nail-uv-vs-led-lamp', 'nail-table-guide', 'nail-nailart-types', 'nail-self-nail-start'],
    disclaimer: '가격은 브랜드와 거래처에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'nail-interior-cost': {
    metaTitle: '네일샵 인테리어 비용은 얼마나 잡아야 하나요? | 자주 묻는 질문',
    lead: '셀프 시공 70~200만원, 업체 의뢰 500~1,500만원 선입니다. 조명·환기·소독에 먼저 쓰고 나머지는 최소화하는 것이 원칙입니다.',
    h1: '네일샵 인테리어 비용은 얼마나 잡아야 하나요?',
    bodies: [
      {
        h2: '우선순위별 예산 배분',
        blocks: [
          {
            type: 'table',
            headers: ['순위', '항목', '이유', '권장 비중'],
            rows: [
              ['1', '조명', '시술 정확도 + 사진 품질', '25%'],
              ['2', '환기·집진', '분진·냄새는 재방문율에 직결', '20%'],
              ['3', '소독·위생 설비', '법정 요건이자 신뢰 요소', '15%'],
              ['4', '시술 테이블·의자', '장시간 작업 피로도', '20%'],
              ['5', '벽·바닥·소품', '분위기. 후순위 가능', '20%'],
            ],
          },
        ],
      },
      {
        h2: '인테리어가 고객을 데려오지 않습니다',
        blocks: [
          { type: 'p', text: '창업 준비에서 돈이 가장 많이 새는 지점입니다. 감성적인 공간을 만들면 고객이 알아서 올 것 같지만, **오픈 초기에 고객이 없는 이유는 매장이 예쁘지 않아서가 아니라 존재를 모르기 때문**입니다.' },
          { type: 'p', text: '인테리어에 500만원을 더 쓰는 것보다, 그 돈으로 6개월을 더 버티며 리뷰와 SNS를 쌓는 쪽이 생존 확률이 훨씬 높습니다. 폐업 사례에서 가장 자주 나오는 원인이 초기 과잉 투자입니다.' },
          { type: 'p', text: '다만 **조명만은 예외**입니다. 조명이 나쁘면 시술 결과물 사진이 실물보다 못하게 나오고, 그 사진이 곧 신규 유입 경로입니다. 아낄 곳과 쓸 곳을 구분하세요.' },
        ],
      },
      {
        h2: '셀프로 가능한 것과 아닌 것',
        blocks: [
          { type: 'p', text: '**셀프 가능** — 페인팅, 시트지, 선반·소품 배치, 조명 기구 교체.' },
          { type: 'p', text: '**업체 필수** — 전기 증설, 배관, 환기 덕트. 안전 문제이고, 잘못 시공하면 재시공비가 처음부터 맡기는 것보다 큽니다.' },
          { type: 'p', text: '공유 작업실로 시작하면 이 항목이 통째로 빠집니다. 초기 자금이 빠듯하다면 인테리어를 줄이는 것보다 **인테리어가 필요 없는 형태로 시작**하는 편이 확실합니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/cost', label: '네일샵 창업비용 상세' },
      { href: '/board/8', label: '인테리어 비용 절감 사례' },
    ],
    relatedQuestions: ['nail-startup-cost', 'nail-startup-steps', 'nail-table-guide', 'nail-materials-buying'],
    disclaimer: '시공 비용은 평수·지역·자재에 따라 크게 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-curling-iron': {
    metaTitle: '고데기는 어떤 것을 사야 하나요? | 자주 묻는 질문',
    lead: '봉 굵기와 온도 조절 범위 두 가지로 고르면 됩니다. 단발은 25~32mm, 롱헤어는 32~38mm가 무난하고 가격은 3~15만원 선입니다.',
    h1: '고데기는 어떤 것을 사야 하나요?',
    bodies: [
      {
        h2: '종류와 용도',
        blocks: [
          {
            type: 'table',
            headers: ['종류', '굵기·형태', '용도'],
            rows: [
              ['봉고데기', '25~38mm', '웨이브, 컬'],
              ['판고데기', '판형', '스트레이트, C컬'],
              ['자동 고데기', '회전형', '초보자용'],
              ['볼륨 고데기', '집게형', '뿌리 볼륨'],
              ['미니 고데기', '소형', '앞머리, 휴대용'],
            ],
          },
          { type: 'p', text: '하나만 산다면 **32mm 봉고데기**가 가장 활용도가 높습니다. 웨이브도 되고 굵기를 조절해 다양하게 응용할 수 있습니다.' },
        ],
      },
      {
        h2: '“온도는 높을수록 잘 된다”가 손상의 원인입니다',
        blocks: [
          { type: 'p', text: '컬이 잘 안 잡히면 온도를 올리는 게 본능인데, 이게 모발 손상의 가장 큰 원인입니다.' },
          { type: 'p', text: '컬이 안 잡히는 진짜 이유는 온도가 아니라 대부분 **모발에 수분이 남아 있거나, 한 번에 잡는 머리 양이 너무 많아서**입니다. 완전히 말린 상태에서 얇게 나눠 잡으면 낮은 온도에서도 컬이 잡힙니다.' },
          { type: 'p', text: '권장 온도는 이렇습니다.' },
          {
            type: 'list',
            items: ['얇고 손상된 모발 — 120~150℃', '보통 모발 — 150~180℃', '굵고 뻣뻣한 모발 — 180~200℃'],
          },
          { type: 'p', text: '200℃를 넘기면 단백질 변성이 시작되고, 이건 회복되지 않습니다. **열보호제를 먼저 뿌리는 것**만으로도 체감 차이가 큽니다.' },
        ],
      },
      {
        h2: '구매 시 확인할 것',
        blocks: [
          {
            type: 'list',
            items: [
              '**온도 조절 단계** — 고정 온도 제품은 손상 관리가 안 됩니다',
              '**가열 시간** — 30초~1분이면 충분합니다',
              '**자동 전원 차단** — 안전 기능',
              '**코팅 재질** — 세라믹·토르말린이 마찰이 적습니다',
            ],
          },
          { type: 'p', text: '가격대는 3~15만원인데, 이 구간에서는 **온도 조절 기능 유무**가 가격보다 중요합니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/equipment/curling-iron', label: '고데기 굵기·소재 상세' },
      { href: '/hair/scalp/clinic', label: '헤어 클리닉' },
    ],
    relatedQuestions: ['hair-hairdryer-guide', 'hair-bleaching-damage', 'hair-perm-types', 'hair-layered-cut'],
    disclaimer: '적정 온도는 모발 상태에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-wholesale': {
    metaTitle: '미용 재료는 어디서 도매로 구입하나요? | 자주 묻는 질문',
    lead: '오프라인 도매상가, 온라인 도매몰, 브랜드 직거래 세 경로가 있습니다. 사업자등록증이 있으면 소매가 대비 30~50% 낮은 단가가 적용됩니다.',
    h1: '미용 재료는 어디서 도매로 구입하나요?',
    bodies: [
      {
        h2: '경로별 비교',
        blocks: [
          {
            type: 'table',
            headers: ['경로', '단가', '장점', '적합 시점'],
            rows: [
              ['오프라인 도매상가', '중', '실물 확인, 즉시 수령', '오픈 초기 세팅'],
              ['온라인 도매몰', '중~저', '가격 비교, 재주문 편리', '소모품 정기 발주'],
              ['브랜드 직거래', '최저', '신제품 우선, 교육 지원', '매출 안정 후'],
            ],
          },
          { type: 'p', text: '펌약·염색약처럼 유통기한이 있는 품목과 수건·호일 같은 소모품은 발주 주기를 다르게 가져가는 편이 재고 관리에 낫습니다.' },
        ],
      },
      {
        h2: '“싼 데서 대량으로”가 손해인 경우가 많습니다',
        blocks: [
          { type: 'p', text: '단가만 보고 대량 발주하면 두 가지가 걸립니다.' },
          { type: 'p', text: '**유통기한**입니다. 펌약과 염색약은 개봉 전에도 성능이 떨어집니다. 3개월 안에 소진할 양만 들이는 게 원칙입니다. 특히 오픈 초기에는 어떤 색이 나갈지 데이터가 없어서, 대량으로 들이면 안 쓰는 색에 돈이 묶입니다.' },
          { type: 'p', text: '**정품 여부**도 확인하셔야 합니다. 유명 브랜드 제품은 병행수입이나 유사품이 섞여 유통됩니다. 성분 문제는 고객 두피 트러블로 직결되고, 이건 매장 책임입니다.' },
          { type: 'p', text: '그리고 거래처는 **2~3곳을 유지**하세요. 한 곳에 몰면 품절이나 단가 인상에 대응할 수가 없습니다.' },
        ],
      },
      {
        h2: '거래 시작 시 확인할 것',
        blocks: [
          {
            type: 'list',
            items: [
              '사업자 전용 단가표 — 사업자등록증 제시하면 별도 단가가 있습니다',
              '최소 주문 금액과 배송비 무료 기준',
              '반품·교환 조건 (특히 색상 관련)',
              '결제 조건 — 선결제 / 월 정산',
              '브랜드 교육 지원 여부 — 직거래는 신제품 교육을 붙여주는 곳이 많습니다',
            ],
          },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/equipment/salon', label: '창업 장비·재료 예산' },
      { href: '/hair/cost', label: '미용실 창업비용' },
    ],
    relatedQuestions: ['hair-scissors-guide', 'hair-clipper-guide', 'hair-chair-shampoo-cost', 'hair-shampoo-plumbing'],
    disclaimer: '거래 조건은 업체마다 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-designer-salary': {
    metaTitle: '헤어 디자이너 연봉은 얼마인가요? | 자주 묻는 질문',
    lead: '스텝은 월 180~220만원, 디자이너 승급 후에는 250~450만원 선입니다. 인센티브 비중이 커서 지명 고객 수가 수입을 결정합니다.',
    h1: '헤어 디자이너 연봉은 얼마인가요?',
    bodies: [
      {
        h2: '단계별 수입',
        blocks: [
          {
            type: 'table',
            headers: ['단계', '기간', '월 수입', '구조'],
            rows: [
              ['스텝·인턴', '1~2년', '180~220만원', '기본급 위주'],
              ['주니어 디자이너', '2~3년차', '220~300만원', '기본급 + 인센티브'],
              ['디자이너', '3~5년차', '250~450만원', '인센티브 비중 확대'],
              ['실장·원장급', '5년차~', '400~700만원', '매출 배분'],
              ['1인샵 운영', '—', '편차 큼', '매출 − 고정비'],
            ],
          },
        ],
      },
      {
        h2: '“연봉”이라는 말이 오해를 만듭니다',
        blocks: [
          { type: 'p', text: '미용업은 대부분 **기본급 + 시술 인센티브** 구조입니다. 그래서 같은 매장 같은 연차 디자이너 둘의 수입이 두 배 차이 나기도 합니다.' },
          { type: 'p', text: '차이를 만드는 건 기술 차이보다 **지명 고객 수**입니다. 지명이 없으면 워크인 손님을 순번으로 받는데, 이건 매장 상황에 좌우됩니다. 지명 고객이 쌓이면 스케줄을 스스로 채울 수 있고 인센티브가 안정됩니다.' },
          { type: 'p', text: '그래서 급여 협상보다 중요한 게 **내 고객을 만들 수 있는 환경인가**입니다. 취업 상담 때 물어보세요.' },
          {
            type: 'list',
            items: ['인센티브 비율과 산정 기준', '지명 고객 배정 규칙', '재료비를 디자이너가 부담하는지', '승급 기준이 명문화되어 있는지'],
          },
          { type: 'p', text: '네 번째가 특히 중요합니다. “실력 되면 올려준다”는 곳은 기준이 없다는 뜻인 경우가 많습니다.' },
        ],
      },
      {
        h2: '수입 상한을 올리는 경로',
        blocks: [
          { type: 'p', text: '급여 형태로는 상한이 뚜렷합니다. 실제로 벌어지는 지점은 두 가지입니다.' },
          {
            type: 'list',
            items: [
              '**프리랜서 전환** — 셰어 살롱에 자리를 임차하고 매출을 직접 가져갑니다. 대신 고정비를 본인이 집니다',
              '**1인샵 창업** — 상한이 가장 높지만 초기 투자와 리스크가 생깁니다',
            ],
          },
          { type: 'p', text: '어느 쪽이든 **개인 고객 채널**이 전제입니다. 급여 받는 동안 인스타 계정과 개인 예약 링크를 만들어두는 사람과 아닌 사람의 5년 뒤가 갈립니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/career/salary', label: '헤어 디자이너 연봉 상세' },
      { href: '/hair/career/freelance', label: '프리랜서 배분 구조' },
    ],
    relatedQuestions: ['hair-designer-reality', 'hair-freelance-designer', 'hair-solo-salon', 'hair-become-beautician'],
    disclaimer: '급여는 지역·매장·개인 실적에 따라 크게 다릅니다.',
    updated: '2026.08.17',
  },

  'makeup-artist-reality': {
    metaTitle: '메이크업 아티스트의 현실은 어떤가요? | 자주 묻는 질문',
    lead: '새벽 출근과 주말 근무가 일상이고 어시스트 1~2년은 수입이 낮습니다. 대신 3년차 이후 프리랜서 전환으로 수입 구조가 크게 달라집니다.',
    h1: '메이크업 아티스트의 현실은 어떤가요?',
    bodies: [
      {
        h2: '실제 근무 조건',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '현실'],
            rows: [
              ['출근 시간', '웨딩은 새벽 4~6시. 예식이 오전에 몰림'],
              ['근무 요일', '주말이 성수기. 평일 휴무'],
              ['어시스트 기간', '1~2년. 시술보다 준비·정리·이동'],
              ['성수기', '봄·가을. 여름·겨울은 매출 절반 이하'],
              ['체력', '서서 대기하는 시간이 김'],
            ],
          },
        ],
      },
      {
        h2: '“화려한 직업”이라는 이미지가 가장 큰 함정입니다',
        blocks: [
          { type: 'p', text: 'SNS에 올라오는 것은 완성된 결과물과 촬영 현장입니다. 실제 시간의 대부분은 **이동, 세팅, 브러시 세척, 대기**입니다.' },
          { type: 'p', text: '특히 웨딩 분야는 새벽 스케줄이 고정입니다. 예식이 오전 11시면 신부 준비는 6시에 시작하고, 그러면 4~5시 출근입니다. 이게 주말마다 반복됩니다. 친구들과 생활 리듬이 어긋나는 게 실제로 이탈 사유 1위입니다.' },
          { type: 'p', text: '그리고 **비수기 편차**를 계산에 넣으셔야 합니다. 웨딩 성수기와 비수기 매출이 두 배 이상 벌어지므로, 프리랜서라면 성수기 수입으로 비수기를 버티는 자금 관리가 필수입니다.' },
        ],
      },
      {
        h2: '그럼에도 버틸 만한 이유',
        blocks: [
          {
            type: 'list',
            items: [
              '**초기 투자금이 작습니다.** 키트 위주라 매장 창업 대비 진입 비용이 낮습니다',
              '**경력이 곧 단가입니다.** 포트폴리오가 쌓이면 건당 단가가 올라갑니다',
              '**확장이 쉽습니다.** 반영구·속눈썹·퍼스널컬러를 붙여 비수기를 방어할 수 있습니다',
              '**정년이 없습니다.** 실력과 고객이 자산으로 남습니다',
            ],
          },
          { type: 'p', text: '핵심은 **어시스트 1~2년을 버틸 계획이 있는가**입니다. 이 기간에 포트폴리오와 제휴처를 쌓아둔 사람과 그냥 버틴 사람의 3년 뒤가 완전히 갈립니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/makeup/revenue', label: '메이크업샵 예상수익' },
      { href: '/makeup/service/bridal', label: '웨딩 메이크업 시술 상세' },
    ],
    relatedQuestions: ['makeup-artist-salary', 'makeup-become-artist', 'makeup-academy-choose', 'makeup-portfolio'],
    disclaimer: '근무 조건은 소속과 분야에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'makeup-national-license': {
    metaTitle: '미용사(메이크업) 국가자격증은 무엇인가요? | 자주 묻는 질문',
    lead: '한국산업인력공단이 시행하는 국가기술자격으로, 미용사 면허의 근거가 됩니다. 메이크업샵 영업신고에 반드시 필요한 유일한 자격입니다.',
    h1: '미용사(메이크업) 국가자격증은 무엇인가요?',
    bodies: [
      {
        h2: '시험 구성',
        blocks: [
          {
            type: 'table',
            headers: ['구분', '내용'],
            rows: [
              ['시행', '한국산업인력공단 (Q-Net)'],
              ['필기', '객관식. 메이크업 이론, 공중위생관리법규, 화장품학 등'],
              ['실기', '지정 과제 시술. 시간 내 완성'],
              ['준비 기간', '노베이스 기준 3~6개월'],
              ['이후 절차', '관할 시·군·구청에서 미용사 면허 발급'],
            ],
          },
          { type: 'p', text: '정확한 시행 일정과 과제는 회차마다 공개되므로 **Q-Net 시행 공고**에서 직접 확인하세요.' },
        ],
      },
      {
        h2: '자격증과 면허는 다릅니다',
        blocks: [
          { type: 'p', text: '가장 자주 놓치는 부분입니다. Q-Net에서 받는 것은 **국가기술자격증**이고, 영업에 필요한 것은 그것을 근거로 시·군·구청에서 발급받는 **미용사 면허**입니다.' },
          { type: 'p', text: '자격증만 있고 면허 신청을 안 한 상태로는 미용업 영업신고가 반려됩니다. 합격하셨다면 바로 면허부터 신청하세요.' },
          { type: 'p', text: '그리고 실기에서 가장 많이 떨어지는 이유는 기술 부족이 아니라 **시간 초과**입니다. 정해진 시간 안에 지정 과제를 끝내야 하는 방식이라, 연습 단계에서부터 타이머를 켜고 하는 습관이 필요합니다.' },
        ],
      },
      {
        h2: '이 자격이 필요한 경우와 아닌 경우',
        blocks: [
          { type: 'p', text: '**필요합니다** — 메이크업샵 개설, 미용업 영업신고, 대부분의 정식 채용' },
          { type: 'p', text: '**당장은 안 물어볼 수 있습니다** — 프리랜서 출장, 어시스트 단계, 개인 촬영 작업' },
          { type: 'p', text: '두 번째 경우 때문에 “메이크업은 자격증 없어도 된다”는 말이 돕니다. 하지만 본인 매장을 여는 순간 반드시 필요해지고, 그때 준비하면 최소 3~6개월이 밀립니다. 진로가 확실하다면 **일찍 따두는 편**이 시간을 아낍니다.' },
          { type: 'p', text: '국비지원(내일배움카드)으로 학원비 상당 부분을 지원받을 수 있습니다. 카드 발급이 먼저입니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/makeup/license', label: '미용사(메이크업) 자격증 상세' },
      { href: '/hair/license/issuance', label: '면허증 발급 절차' },
    ],
    relatedQuestions: ['makeup-makeup-certificates', 'makeup-certificate-types', 'makeup-academy-choose', 'makeup-become-artist'],
    disclaimer: '시험 일정과 과제는 Q-Net 공고를 확인하세요.',
    updated: '2026.08.17',
  },

  'skin-esthetician-reality': {
    metaTitle: '피부관리사의 현실은 어떤가요? | 자주 묻는 질문',
    lead: '초봉은 월 180~230만원 선이고 체력 소모가 큽니다. 대신 1인 창업 진입 장벽이 낮아 3~5년차에 독립하는 경로가 뚜렷합니다.',
    h1: '피부관리사의 현실은 어떤가요?',
    bodies: [
      {
        h2: '근무 환경',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '현실'],
            rows: [
              ['초봉', '월 180~230만원 + 인센티브'],
              ['3~5년차', '월 250~350만원'],
              ['하루 관리 건수', '4~7건'],
              ['체력', '손목·어깨·허리 부담. 서 있는 시간 김'],
              ['근무 요일', '주말 근무 잦음'],
              ['실적 압박', '회원권·제품 판매 목표가 있는 곳 많음'],
            ],
          },
        ],
      },
      {
        h2: '“관리만 하면 되는 줄 알았다”가 가장 흔한 오해입니다',
        blocks: [
          { type: 'p', text: '실제로 이직·이탈 사유 1위는 체력이 아니라 **판매 압박**입니다.' },
          { type: 'p', text: '많은 매장이 관리 매출보다 회원권과 홈케어 제품 판매에 목표를 걸어둡니다. 관리 도중 고객에게 상품을 권해야 하고, 목표 미달이면 인센티브가 깎입니다. 기술을 배우러 왔는데 영업을 하게 되는 구조에서 회의감이 생깁니다.' },
          { type: 'p', text: '취업 상담을 갈 때 **인센티브 산정 방식**을 반드시 물어보세요. “관리 건수 기준”인지 “판매 실적 기준”인지에 따라 일의 성격이 완전히 달라집니다.' },
          { type: 'p', text: '체력도 현실적인 문제입니다. 손목과 어깨에 부담이 누적되므로, 수기 위주 매장인지 기기 위주 매장인지도 확인해보시는 게 좋습니다.' },
        ],
      },
      {
        h2: '이 직업의 실질적인 장점',
        blocks: [
          {
            type: 'list',
            items: [
              '**창업 진입 장벽이 낮습니다.** 1인 관리샵은 소형 공간으로도 시작할 수 있습니다',
              '**단골 구조가 강합니다.** 관리는 반복 방문이 전제라 고객이 자산으로 쌓입니다',
              '**확장 폭이 넓습니다.** 왁싱, 속눈썹, 반영구를 얹어 객단가를 올릴 수 있습니다',
              '**경력이 오래갑니다.** 정년 개념이 없습니다',
            ],
          },
          { type: 'p', text: '급여를 목표로 하면 상한이 뚜렷하고, **독립을 목표로 하면 3~5년차가 분기점**입니다. 취업 단계에서부터 어느 쪽인지 정해두는 편이 좋습니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/revenue', label: '피부관리샵 예상수익' },
      { href: '/skincare/cost', label: '창업비용' },
    ],
    relatedQuestions: ['skin-esthetician-salary', 'skin-license-how-to', 'skin-esthetician-job', 'skin-clinic-coordinator'],
    disclaimer: '급여와 근무 조건은 지역·매장에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  // ── 5차 원고 10편 ──────────────────────────────────────────

  'hair-chair-shampoo-cost': {
    metaTitle: '미용 의자와 샴푸대는 얼마나 드나요? | 자주 묻는 질문',
    lead: '미용 의자는 대당 30~150만원, 샴푸대는 80~300만원 선입니다. 설치 공사비는 별도이며 샴푸대는 중고 구매를 권하지 않습니다.',
    h1: '미용 의자와 샴푸대는 얼마나 드나요?',
    bodies: [
      {
        h2: '품목별 가격대 (장비 구매비만)',
        blocks: [
          {
            type: 'table',
            headers: ['품목', '보급형', '중급', '고급'],
            rows: [
              ['미용 의자 (유압)', '30~50만원', '60~100만원', '120~150만원'],
              ['샴푸대', '80~130만원', '150~220만원', '250~300만원'],
              ['대형 거울·경대', '20~40만원', '50~90만원', '100만원~'],
              ['스타일링 왜건', '5~15만원', '20~40만원', '—'],
              ['대기 소파', '20~50만원', '60~120만원', '—'],
            ],
          },
          { type: 'p', text: '설치·배관 공사비는 여기 포함되지 않습니다. 별도 항목입니다.' },
        ],
      },
      {
        h2: '의자는 중고, 샴푸대는 새것이 원칙입니다',
        blocks: [
          { type: 'p', text: '초기 자금을 아끼려고 전부 중고로 맞추는 경우가 있는데, 품목을 구분하셔야 합니다.' },
          { type: 'p', text: '**미용 의자는 중고가 합리적입니다.** 유압 실린더 상태만 확인하면 됩니다. 앉아서 위아래로 몇 번 움직여보고, 시간이 지나도 높이가 유지되는지 보면 됩니다. 겉면 스크래치는 커버를 씌우면 해결됩니다.' },
          { type: 'p', text: '**샴푸대는 다릅니다.** 배수구 누수와 도기 균열이 겉으로 잘 안 보이고, 설치한 뒤에 문제가 드러납니다. 그러면 재공사비가 새 제품값을 넘어갑니다. 게다가 고객 머리가 직접 닿는 설비라 위생 문제도 있습니다.' },
          { type: 'p', text: '**의자는 중고로 아끼고, 샴푸대는 새것.** 이 원칙만 지켜도 예산과 리스크가 같이 잡힙니다.' },
        ],
      },
      {
        h2: '구매 전 확인할 것',
        blocks: [
          {
            type: 'list',
            items: [
              '**의자 회전 반경** — 좌석 간격이 좁으면 시술 동선이 막힙니다. 좌석당 최소 1.2~1.5m',
              '**샴푸대 높이와 목받침** — 고객 불편이 가장 많이 나오는 지점입니다',
              '**배수 방식** — 자연 배수인지 펌프가 필요한지. 자리에 따라 달라집니다',
              '**A/S 범위** — 유압 부품은 소모품입니다',
            ],
          },
          { type: 'p', text: '샴푸대는 제품값보다 **설치 조건**이 더 큰 변수입니다. 구매 전에 자리의 배수 가능 여부부터 확인하세요.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/equipment/salon', label: '창업 장비 예산 상세' },
      { href: '/hair/cost', label: '미용실 창업비용' },
    ],
    relatedQuestions: ['hair-shampoo-plumbing', 'hair-wholesale', 'hair-scissors-guide', 'hair-clipper-guide'],
    disclaimer: '가격은 브랜드와 사양에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-shampoo-plumbing': {
    metaTitle: '샴푸대 설치와 배수 공사 비용은 얼마인가요? | 자주 묻는 질문',
    lead: '배수관이 가까우면 50~150만원, 바닥 높임이나 배수 펌프가 필요하면 300~600만원까지 올라갑니다. 계약 전 현장 확인이 필수입니다.',
    h1: '샴푸대 설치와 배수 공사 비용은 얼마인가요?',
    bodies: [
      {
        h2: '조건별 공사비',
        blocks: [
          {
            type: 'table',
            headers: ['조건', '공사 내용', '비용'],
            rows: [
              ['배수관 인접', '배관 연결, 급수 분기', '50~150만원'],
              ['배수관 원거리', '배관 연장 + 경사 확보', '150~300만원'],
              ['경사 확보 불가', '바닥 높임(단 시공)', '250~450만원'],
              ['자연 배수 불가', '배수 펌프 설치', '300~600만원'],
              ['온수 부족', '온수기 증설', '+50~150만원'],
            ],
          },
        ],
      },
      {
        h2: '이 비용은 자리를 계약한 뒤에는 못 줄입니다',
        blocks: [
          { type: 'p', text: '창업 예산이 터지는 대표적인 지점입니다. 인테리어 견적서에는 보통 “샴푸대 설치” 한 줄로만 잡혀 있고, 실제 조건은 현장을 봐야 알 수 있습니다.' },
          { type: 'p', text: '문제는 순서입니다. 좋은 자리가 나와서 먼저 계약하고, 그다음에 인테리어 업체를 부르면 이미 늦습니다. **배수 조건은 자리가 결정하는 것이지 예산이 결정하는 게 아닙니다.**' },
          { type: 'p', text: '특히 조심할 자리는 이렇습니다.' },
          {
            type: 'list',
            items: [
              '**2층 이상** — 배수 경사 확보가 어렵고 아래층 누수 리스크',
              '**구축 상가** — 배관 노후, 위치 파악 자체가 어려움',
              '**원래 용도가 사무실이던 곳** — 급배수 설비가 아예 없는 경우',
            ],
          },
        ],
      },
      {
        h2: '계약 전에 반드시 할 것',
        blocks: [
          {
            type: 'list',
            items: [
              '**인테리어 업체와 함께 현장 방문** — 견적 전에 조건부터 확인',
              '**배수관 위치와 거리 확인** — 건물 관리소에 도면 요청',
              '**전기 용량 확인** — 드라이기·열기구 동시 사용 시 승압 필요 여부',
              '**온수 공급 방식** — 중앙난방인지 개별 온수기인지',
              '**아래층 업종 확인** — 누수 사고 시 배상 규모가 달라집니다',
            ],
          },
          { type: 'p', text: '이 확인에 드는 시간은 며칠이지만, 안 하면 수백만원입니다. 자리를 놓칠까 봐 서두르는 마음이 가장 비쌉니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/equipment/salon', label: '급배수 공사 포함 장비 예산' },
      { href: '/hair/cost', label: '미용실 창업비용' },
    ],
    relatedQuestions: ['hair-chair-shampoo-cost', 'hair-startup-cost', 'hair-startup-steps', 'hair-wholesale'],
    disclaimer: '공사비는 건물 조건에 따라 크게 다릅니다. 반드시 현장 견적을 받으세요.',
    updated: '2026.08.17',
  },

  'hair-startup-cost': {
    metaTitle: '미용실 창업비용은 얼마나 드나요? | 자주 묻는 질문',
    lead: '소형 1인 미용실은 보증금 포함 2,000~4,000만원, 3~4석 규모는 5,000만~1억원 선입니다. 배수·전기 공사가 예산을 가장 많이 흔듭니다.',
    h1: '미용실 창업비용은 얼마나 드나요?',
    bodies: [
      {
        h2: '항목별 비용',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '1인 (10평 내외)', '3~4석 (20평 내외)'],
            rows: [
              ['보증금', '1,000~2,000만원', '2,000~4,000만원'],
              ['권리금', '0~1,000만원', '1,000~3,000만원'],
              ['인테리어', '500~1,200만원', '1,500~3,000만원'],
              ['샴푸대·배수 공사', '300~600만원', '600~1,200만원'],
              ['미용 의자·거울', '200~500만원', '500~1,200만원'],
              ['기기·도구', '200~400만원', '400~800만원'],
              ['초기 재료', '100~200만원', '200~400만원'],
              ['간판·홍보', '100~300만원', '200~500만원'],
            ],
          },
        ],
      },
      {
        h2: '예산을 무너뜨리는 건 배수 공사입니다',
        blocks: [
          { type: 'p', text: '인테리어 견적만 보고 예산을 짰다가 초과하는 이유가 거의 여기 있습니다.' },
          { type: 'p', text: '샴푸대는 급수와 배수가 필요합니다. 그런데 상가 자리에 따라 배수관 위치가 멀거나 층 구조상 경사를 못 잡는 경우가 있고, 그러면 바닥을 높이거나 펌프를 넣는 추가 공사가 붙습니다. 수백만원이 예고 없이 늘어납니다.' },
          { type: 'p', text: '**계약 전에 배수 가능 여부와 위치를 반드시 확인하세요.** 인테리어 업체를 불러 현장을 한 번 보게 하는 편이 안전합니다. 전기 용량도 마찬가지입니다. 드라이기와 열기구를 동시에 쓰면 승압이 필요할 수 있습니다.' },
          { type: 'p', text: '이 두 가지를 확인 안 하고 계약하면, 자리가 아무리 좋아도 예산이 무너집니다.' },
        ],
      },
      {
        h2: '줄일 수 있는 것과 없는 것',
        blocks: [
          { type: 'p', text: '**줄일 수 있는 것** — 인테리어 마감, 소품, 대기 공간 집기, 미용 의자(중고 시장 활성).' },
          { type: 'p', text: '**줄이면 안 되는 것** — 배수·전기 공사, 조명, 환기. 나중에 고치면 영업을 멈춰야 합니다.' },
          { type: 'p', text: '그리고 창업비용과 **별도로 6개월치 고정비**를 확보하세요. 오픈 초기 고객이 붙기 전 구간을 버티는 자금이 없어서 닫는 경우가 가장 많습니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/cost', label: '미용실 창업비용 상세' },
      { href: '/hair/revenue', label: '헤어 수익 구조' },
    ],
    relatedQuestions: ['hair-startup-steps', 'hair-shampoo-plumbing', 'hair-chair-shampoo-cost', 'hair-solo-salon'],
    disclaimer: '비용은 지역·평수·자재에 따라 크게 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-designer-reality': {
    metaTitle: '헤어 디자이너의 현실은 어떤가요? | 자주 묻는 질문',
    lead: '스텝 기간 1~2년이 가장 큰 관문입니다. 서서 일하는 시간이 길고 주말 근무가 기본이지만, 디자이너 승급 후에는 수입과 자율성이 크게 달라집니다.',
    h1: '헤어 디자이너의 현실은 어떤가요?',
    bodies: [
      {
        h2: '실제 근무 조건',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '현실'],
            rows: [
              ['스텝 기간', '1~2년. 샴푸·와인딩·정리·응대'],
              ['근무 시간', '10~12시간. 마감 후 연습'],
              ['휴무', '주중 1~2일. 주말이 성수기'],
              ['체력', '손목·허리·다리. 서 있는 시간이 김'],
              ['스텝 급여', '월 180~220만원'],
              ['승급 후', '250~450만원. 지명 수에 좌우'],
            ],
          },
        ],
      },
      {
        h2: '그만두는 이유는 급여가 아닙니다',
        blocks: [
          { type: 'p', text: '스텝 급여가 낮은 건 다들 알고 들어옵니다. 그런데 실제 이탈 사유 1위는 **“언제 디자이너가 되는지 모르겠다”**입니다.' },
          { type: 'p', text: '승급 기준이 명문화된 매장이 많지 않습니다. “실력 되면”이라는 말만 듣고 2년, 3년이 지나면 버틸 이유가 사라집니다. 같이 시작한 동기가 다른 매장에서 먼저 승급했다는 소식을 들으면 그때 무너집니다.' },
          { type: 'p', text: '그래서 취업 상담에서 반드시 물어보셔야 할 게 이겁니다.' },
          {
            type: 'list',
            items: [
              '승급 기준이 문서로 있나요? (테스트 항목, 소요 기간)',
              '최근 승급한 스텝은 몇 년차였나요?',
              '마감 후 연습 시간과 모델 수급은 지원되나요?',
            ],
          },
          { type: 'p', text: '세 번째가 특히 중요합니다. 연습할 환경이 없으면 시간만 흐릅니다.' },
        ],
      },
      {
        h2: '버틸 만한 구조인 이유',
        blocks: [
          {
            type: 'list',
            items: [
              '**경력이 곧 자산입니다.** 지명 고객은 매장을 옮겨도 상당수 따라옵니다',
              '**독립 경로가 명확합니다.** 프리랜서 → 1인샵으로 이어지는 길이 열려 있습니다',
              '**정년이 없습니다.** 40대, 50대 현역이 흔합니다',
              '**초기 투자가 작습니다.** 자격증과 학원비 외에 큰 비용이 없습니다',
            ],
          },
          { type: 'p', text: '핵심은 **초반 2년입니다.** 이 구간을 설계하고 들어오면 남고, 막연히 들어오면 나갑니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/career/reality', label: '디자이너 현실 상세' },
      { href: '/hair/career/how-to', label: '되는법 로드맵' },
    ],
    relatedQuestions: ['hair-designer-salary', 'hair-become-beautician', 'hair-freelance-designer', 'hair-solo-salon'],
    disclaimer: '근무 조건은 매장과 지역에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'makeup-become-artist': {
    metaTitle: '메이크업 아티스트가 되려면 무엇부터 해야 하나요? | 자주 묻는 질문',
    lead: '미용사(메이크업) 국가자격 취득이 첫 단계이고, 이후 어시스트로 현장에 들어갑니다. 자격 취득 3~6개월, 독립까지는 보통 3~5년이 걸립니다.',
    h1: '메이크업 아티스트가 되려면 무엇부터 해야 하나요?',
    bodies: [
      {
        h2: '전체 경로',
        blocks: [
          {
            type: 'table',
            headers: ['단계', '기간', '내용'],
            rows: [
              ['1. 학원·자격 준비', '3~6개월', '미용사(메이크업) 필기·실기'],
              ['2. 면허 발급', '1~2주', '관할 시·군·구청'],
              ['3. 어시스트', '1~2년', '현장 투입. 준비·정리·보조'],
              ['4. 주니어 아티스트', '2~3년차', '직접 시술 시작'],
              ['5. 프리랜서·창업', '3~5년차', '건당 정산 또는 매장'],
            ],
          },
        ],
      },
      {
        h2: '“자격증 따고 바로 신부 화장을 한다”가 아닙니다',
        blocks: [
          { type: 'p', text: '가장 큰 인식 차이입니다. 자격증은 출발선에 설 자격이고, 현장에 들어가면 최소 1~2년은 어시스트입니다.' },
          { type: 'p', text: '어시스트가 하는 일은 브러시 세척, 제품 세팅, 헤어 보조, 드레스 정리, 이동 준비입니다. 직접 신부 얼굴에 손을 대는 건 그 뒤입니다. 이 기간에 급여도 가장 낮고 새벽 스케줄이 겹칩니다.' },
          { type: 'p', text: '이걸 모르고 들어와서 6개월 안에 그만두는 경우가 많습니다. 반대로 **이 기간을 어떻게 쓰느냐가 3년 뒤를 결정합니다.** 어시스트로 있는 동안 자기 포트폴리오를 따로 쌓은 사람과, 시키는 일만 한 사람의 독립 시점이 완전히 다릅니다.' },
        ],
      },
      {
        h2: '어시스트 기간에 반드시 해둘 것',
        blocks: [
          {
            type: 'list',
            items: [
              '**포트폴리오** — 지인 모델이라도 정기적으로 촬영해 쌓으세요. 독립할 때 유일한 영업 자료입니다',
              '**제휴처 관계** — 웨딩플래너, 스튜디오, 사진작가. 이 인맥이 프리랜서 예약을 채웁니다',
              '**개인 SNS** — 소속 계정 말고 본인 계정. 나갈 때 들고 갈 수 있는 자산입니다',
              '**영역 확장** — 반영구·속눈썹·퍼스널컬러를 붙여두면 비수기가 방어됩니다',
            ],
          },
          { type: 'p', text: '국비지원(내일배움카드)으로 학원비 상당 부분을 지원받을 수 있습니다. **카드 발급이 학원 등록보다 먼저**입니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/makeup/license', label: '미용사(메이크업) 자격증' },
      { href: '/makeup', label: '메이크업샵 창업' },
    ],
    relatedQuestions: ['makeup-artist-reality', 'makeup-artist-salary', 'makeup-academy-choose', 'makeup-portfolio'],
    disclaimer: '경로와 기간은 분야·소속에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'nail-national-vs-private': {
    metaTitle: '네일 국가자격증과 민간자격증은 무엇이 다른가요? | 자주 묻는 질문',
    lead: '창업 가능 여부가 갈립니다. 국가기술자격만 미용사 면허로 이어지고, 민간자격증으로는 미용업 영업신고를 할 수 없습니다.',
    h1: '네일 국가자격증과 민간자격증은 무엇이 다른가요?',
    bodies: [
      {
        h2: '항목별 비교',
        blocks: [
          {
            type: 'table',
            headers: ['구분', '미용사(네일) 국가기술자격', '민간자격증'],
            rows: [
              ['발급', '한국산업인력공단(Q-Net)', '협회·아카데미'],
              ['시험 관리', '국가 표준', '발급 기관 자체'],
              ['면허 연결', '가능', '불가'],
              ['미용업 영업신고', '가능', '불가'],
              ['취업 인정', '사실상 표준', '참고 자료'],
              ['취득 난이도', '필기 + 실기', '기관마다 상이'],
            ],
          },
        ],
      },
      {
        h2: '“민간자격증도 창업 가능”이라는 안내를 조심하세요',
        blocks: [
          { type: 'p', text: '일부 발급 기관이 이렇게 안내합니다. 사실이 아닙니다.' },
          { type: 'p', text: '공중위생관리법 제8조제1항은 미용사 면허를 받은 자가 아니면 미용업을 개설할 수 없다고 정하고 있고, 그 면허의 근거는 국가기술자격입니다. 민간자격증을 들고 구청에 가면 영업신고가 반려됩니다.' },
          { type: 'p', text: '문제는 **이 사실을 언제 아느냐**입니다. 보증금 걸고 인테리어까지 마친 뒤 신고 단계에서 알게 되는 경우가 실제로 있습니다. 그때부터 국가자격을 준비하면 최소 3~6개월, 그동안 월세는 계속 나갑니다.' },
          { type: 'p', text: '등록 전에 **한국직업능력연구원 민간자격정보서비스**에서 해당 자격의 등록 여부와 성격을 확인하세요.' },
        ],
      },
      {
        h2: '이미 민간자격증만 있다면',
        blocks: [
          { type: 'p', text: '버릴 필요 없습니다. 기술을 이미 익힌 상태라면 국가자격 실기 준비 기간이 크게 단축됩니다. 처음 시작하는 사람보다 유리합니다.' },
          { type: 'p', text: '민간자격이 실제로 기능하는 경우는 이렇습니다.' },
          {
            type: 'list',
            items: ['3D·엠보 등 특수 기법을 배웠다는 증명', '특정 브랜드 제품 교육 이수', '아카데미 강의를 하려는 경우 요구되기도 함'],
          },
          { type: 'p', text: '순서만 지키면 됩니다. **국가자격 먼저, 민간자격은 그 위에.**' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/license', label: '미용사(네일) 자격증 상세' },
      { href: '/cost', label: '네일샵 창업비용' },
    ],
    relatedQuestions: ['nail-license-how-to', 'nail-nailart-certificates', 'nail-academy-choose', 'nail-startup-steps'],
    disclaimer: '자격 제도는 변경될 수 있습니다. Q-Net 공고를 확인하세요.',
    updated: '2026.08.17',
  },

  'skin-esthetician-salary': {
    metaTitle: '피부관리사 연봉은 얼마인가요? | 자주 묻는 질문',
    lead: '초봉은 월 180~230만원, 3~5년차는 250~350만원 선입니다. 인센티브와 판매 수당 비중이 커서 매장 정책에 따라 편차가 큽니다.',
    h1: '피부관리사 연봉은 얼마인가요?',
    bodies: [
      {
        h2: '경력·업태별 수입',
        blocks: [
          {
            type: 'table',
            headers: ['구분', '월 수입', '비고'],
            rows: [
              ['신입 (에스테틱)', '180~230만원', '기본급 + 소액 인센티브'],
              ['3~5년차', '250~350만원', '인센티브 비중 확대'],
              ['피부과 부속 관리실', '220~300만원', '급여 안정, 인센티브 적음'],
              ['호텔·스파', '230~320만원', '근무 조건 양호'],
              ['1인샵 운영', '편차 큼', '매출 − 고정비'],
            ],
          },
        ],
      },
      {
        h2: '인센티브 구조가 급여보다 중요합니다',
        blocks: [
          { type: 'p', text: '공고에 적힌 기본급만 보고 결정하면 실제 수령액과 다를 수 있습니다. 확인해야 할 것은 **무엇으로 인센티브가 붙느냐**입니다.' },
          {
            type: 'list',
            items: ['**관리 건수 기준** — 관리에 집중할 수 있습니다', '**회원권·제품 판매 기준** — 영업 비중이 커집니다'],
          },
          { type: 'p', text: '두 번째 유형이 생각보다 많고, 목표 미달 시 인센티브가 깎이는 구조도 있습니다. 기술을 배우러 갔는데 판매 압박을 받는 상황이 여기서 생깁니다. 실제로 이 업계 이직 사유 상위권입니다.' },
          { type: 'p', text: '기본급이 조금 낮아도 관리 건수 기준인 매장이 장기적으로 낫습니다. 기술이 쌓이고, 그게 나중에 독립 자산이 됩니다.' },
        ],
      },
      {
        h2: '수입 상한을 올리는 길',
        blocks: [
          { type: 'p', text: '급여 형태의 상한은 뚜렷합니다. 실제로 벌어지는 건 두 가지입니다.' },
          { type: 'p', text: '**시술 영역 확장** — 왁싱, 속눈썹, 반영구를 얹으면 같은 시간에 객단가가 올라갑니다. 자격과 신고 요건을 확인하고 하나씩 붙이세요.' },
          { type: 'p', text: '**독립** — 1인 관리샵은 소형 공간으로도 시작할 수 있어 진입 장벽이 낮은 편입니다. 다만 미용사(피부) 면허와 미용업 영업신고가 전제입니다.' },
          { type: 'p', text: '3~5년차가 분기점입니다. 급여로 갈지 독립으로 갈지 이 시점에 갈립니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/revenue', label: '피부관리샵 예상수익' },
      { href: '/skincare/license', label: '미용사(피부) 자격증' },
    ],
    relatedQuestions: ['skin-esthetician-reality', 'skin-license-how-to', 'skin-esthetician-job', 'skin-waxing-license'],
    disclaimer: '급여는 지역·업태·개인 실적에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'skin-waxing-license': {
    metaTitle: '왁싱 자격증은 꼭 필요한가요? | 자주 묻는 질문',
    lead: '왁싱 전용 국가자격은 없지만, 왁싱샵을 열려면 미용업에 해당해 미용사 면허와 영업신고가 필요합니다. 민간 왁싱 자격증만으로는 개업할 수 없습니다.',
    h1: '왁싱 자격증은 꼭 필요한가요?',
    bodies: [
      {
        h2: '필요한 것 정리',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '필요 여부', '발급처'],
            rows: [
              ['왁싱 민간자격증', '선택 (기술 수료 증명)', '협회·아카데미'],
              ['미용사 면허', '필수', '관할 시·군·구청'],
              ['미용업 영업신고', '필수', '구청 위생과'],
              ['위생교육', '필수 (신고 전 이수)', '지정 교육기관'],
            ],
          },
          { type: 'p', text: '미용사 면허의 근거는 Q-Net 국가기술자격입니다. 왁싱 위주로 하실 계획이면 **미용사(피부)**를 취득하는 경로가 일반적입니다.' },
        ],
      },
      {
        h2: '“왁싱은 자격증 없이도 한다던데요”',
        blocks: [
          { type: 'p', text: '실제로 그렇게 운영하는 곳이 있어서 생기는 오해입니다. 단속이 상시적이지 않을 뿐, 적법한 것은 아닙니다.' },
          { type: 'p', text: '면허 없이 미용업을 개설하거나 종사하면 **300만원 이하의 벌금**(공중위생관리법 제20조제3항)이고, 영업신고까지 없으면 **1년 이하의 징역 또는 1천만원 이하의 벌금**(같은 조 제1항)이 별도로 적용될 수 있습니다.' },
          { type: 'p', text: '실질적인 리스크는 벌칙만이 아닙니다. 왁싱은 **화상과 피부 손상 클레임**이 상대적으로 잦은 시술입니다. 무면허 상태에서 사고가 나면 민사 책임에 더해 영업 자체가 문제가 됩니다. 보험 가입에도 제약이 생깁니다.' },
        ],
      },
      {
        h2: '민간 왁싱 자격증의 실제 쓸모',
        blocks: [
          { type: 'p', text: '법적 효력은 없지만 무의미하지도 않습니다.' },
          {
            type: 'list',
            items: [
              '브라질리언처럼 난이도가 있는 부위의 기술 습득',
              '제품·왁스 종류별 사용법',
              '위생 프로토콜 학습',
              '고객에게 보여줄 수료 증명',
            ],
          },
          { type: 'p', text: '순서는 명확합니다. **미용사 국가자격 → 면허 → 영업신고**가 뼈대이고, 민간 왁싱 과정은 그 위에 얹는 기술 교육입니다. 반대로 하면 개업 직전에 3~6개월이 밀립니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/license', label: '미용사(피부) 자격증' },
      { href: '/skincare/service/waxing', label: '왁싱 시술 상세' },
    ],
    relatedQuestions: ['skin-license-how-to', 'skin-esthetician-job', 'skin-waxing-guide', 'skin-esthetician-salary'],
    disclaimer: '업종 분류와 신고 요건은 관할 지자체에 확인하시기 바랍니다.',
    updated: '2026.08.17',
  },

  'skin-rf-device': {
    metaTitle: '피부관리 고주파 기기는 어떤 것을 고르나요? | 자주 묻는 질문',
    lead: '출력 조절 범위와 핸드피스 구성이 선택 기준입니다. 관리실용은 300~1,500만원 선이며, 의료기기와는 명확히 구분됩니다.',
    h1: '피부관리 고주파 기기는 어떤 것을 고르나요?',
    bodies: [
      {
        h2: '선택 기준',
        blocks: [
          {
            type: 'table',
            headers: ['기준', '확인할 것'],
            rows: [
              ['출력 조절', '단계가 촘촘할수록 부위별 대응이 쉬움'],
              ['핸드피스', '얼굴용·바디용 분리 여부'],
              ['방식', '모노폴라 / 바이폴라 / 멀티폴라'],
              ['A/S', '부품 수급, 출장 수리 가능 여부'],
              ['교육', '사용법 교육 제공 여부'],
            ],
          },
          { type: 'p', text: '가격대는 보급형 300~600만원, 중급 700~1,200만원, 고급 1,500만원 이상입니다. 렌탈은 월 15~40만원 선입니다.' },
        ],
      },
      {
        h2: '“병원 장비랑 같은 원리니까 효과도 같다”는 아닙니다',
        blocks: [
          { type: 'p', text: '고주파라는 원리는 같지만 **출력과 도달 깊이가 다릅니다.** 관리실용 기기는 표피와 얕은 진피에 작용하고, 병원 장비는 진피 심부나 근막층까지 갑니다.' },
          { type: 'p', text: '이걸 구분하지 않고 “써마지 같은 효과”라고 안내하면 두 가지 문제가 생깁니다. 고객 기대치가 안 맞아 클레임으로 돌아오고, **의료 시술처럼 광고하면 의료법 문제**가 됩니다.' },
          { type: 'p', text: '관리실 고주파의 정확한 포지션은 “순환과 탄력을 돕는 반복 관리”입니다. 2주 간격 4~6회를 한 코스로 잡고, 누적 효과를 설명하는 방식이 클레임도 적고 재방문율도 높습니다.' },
        ],
      },
      {
        h2: '구매와 렌탈, 무엇이 나을까',
        blocks: [
          {
            type: 'table',
            headers: ['구분', '유리한 경우'],
            rows: [
              ['구매', '이미 고객이 있고 가동률이 높을 때'],
              ['렌탈', '개업 초기, 수요 검증 전'],
            ],
          },
          { type: 'p', text: '개업 초기에는 **렌탈을 권합니다.** 기기를 먼저 지르고 고객이 안 붙으면 감가만 남습니다. 회당 단가와 예상 시술 건수로 월 매출을 계산해보고, 렌탈료의 3배 이상 나올 때 구매로 전환하는 방식이 안전합니다.' },
          { type: 'p', text: '중고는 출력 저하를 겉으로 확인하기 어려워서 신중하셔야 합니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/service/lifting', label: '리프팅 관리 시술 상세' },
      { href: '/skincare/cost', label: '피부관리샵 창업비용' },
    ],
    relatedQuestions: ['skin-ultrasound-device', 'skin-device-priority', 'skin-galvanic-device', 'skin-lifting-types'],
    disclaimer: '관리실 기기는 의료기기와 구분됩니다. 의료 효과를 표방할 수 없습니다.',
    updated: '2026.08.17',
  },

  'skin-ultrasound-device': {
    metaTitle: '피부관리 초음파 기기는 어떤 효과가 있나요? | 자주 묻는 질문',
    lead: '진동으로 각질 제거와 유효 성분 침투를 돕는 기기입니다. 관리실용은 100~600만원 선이며 고주파와 목적이 다릅니다.',
    h1: '피부관리 초음파 기기는 어떤 효과가 있나요?',
    bodies: [
      {
        h2: '고주파와 무엇이 다른가',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '초음파', '고주파'],
            rows: [
              ['원리', '진동', '열'],
              ['주 목적', '각질 제거, 성분 침투', '탄력, 순환'],
              ['체감', '시원함, 진동감', '따뜻함'],
              ['병용', '클렌징 단계', '마무리 단계'],
              ['가격', '100~600만원', '300~1,500만원'],
            ],
          },
          { type: 'p', text: '같은 관리 안에서 **초음파로 정리하고 고주파로 마무리**하는 순서로 함께 쓰는 경우가 많습니다. 둘 중 하나를 고르는 문제가 아닙니다.' },
        ],
      },
      {
        h2: '“기기가 있으면 관리 실력이 올라간다”가 아닙니다',
        blocks: [
          { type: 'p', text: '개업 준비 중 기기부터 알아보는 분이 많습니다. 그런데 기기는 관리를 **빠르고 균일하게** 만들어줄 뿐, 결과의 방향을 정하지는 않습니다.' },
          { type: 'p', text: '방향을 정하는 건 **피부 진단**입니다. 같은 초음파라도 지성 피부에 쓰는 방식과 민감성에 쓰는 방식이 다르고, 잘못 쓰면 장벽만 무너집니다. 특히 초음파 스케일링은 자극이 있어서 트러블이 올라온 상태에서 강하게 쓰면 악화됩니다.' },
          { type: 'p', text: '기기 예산을 정하기 전에 **어떤 고객층을 받을지**부터 정하세요. 여드름 관리 위주인지, 안티에이징 위주인지에 따라 필요한 기기 구성이 완전히 달라집니다.' },
        ],
      },
      {
        h2: '구매 시 확인할 것',
        blocks: [
          {
            type: 'list',
            items: [
              '**주파수 대역** — 얼굴용과 바디용이 다릅니다',
              '**핸드피스 종류** — 스케일러, 침투용 프로브 구성',
              '**방수·세척** — 위생 관리 편의성',
              '**소모품** — 젤 사용량과 단가',
            ],
          },
          { type: 'p', text: '초음파는 고주파보다 진입 가격이 낮아 **개업 초기에 먼저 갖추는 기기**로 많이 선택됩니다. 다만 기기 하나로 메뉴를 다 채울 수는 없으니, 전체 구성 계획을 세우고 순서를 정하세요.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/service/basic', label: '기본 피부관리 시술 상세' },
      { href: '/skincare/cost', label: '피부관리샵 창업비용' },
    ],
    relatedQuestions: ['skin-rf-device', 'skin-device-priority', 'skin-galvanic-device', 'skin-aqua-peel'],
    disclaimer: '관리실 기기는 의료기기와 구분됩니다.',
    updated: '2026.08.17',
  },

  // ── 6차 원고 10편 ─────────────────────────────────────────
  'hair-down-perm': {
    metaTitle: '다운펌은 얼마나 가나요? 남자 다운펌 주기 | 자주 묻는 질문',
    lead: '다운펌은 보통 1~3개월 유지됩니다. 뜨는 옆머리를 눌러주는 시술이라 커트 주기에 맞춰 함께 받는 경우가 많습니다.',
    h1: '다운펌은 얼마나 가나요? 남자 다운펌 주기는?',
    bodies: [
      {
        h2: '유지 기간과 비용',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '내용'],
            rows: [
              ['유지 기간', '1~3개월 (모질에 따라 편차 큼)'],
              ['시술 시간', '40분~1시간'],
              ['가격', '3~7만원 (커트 별도)'],
              ['권장 주기', '커트 2회당 1회'],
              ['적합', '옆머리가 뜨는 경우, 반곱슬'],
            ],
          },
          { type: 'p', text: '머리가 굵고 뻣뻣할수록 빨리 풀립니다. 반대로 얇은 모발은 3개월 이상 가기도 합니다.' },
        ],
      },
      {
        h2: '"다운펌 한 번이면 계속 눌린다"가 아닙니다',
        blocks: [
          { type: 'p', text: '다운펌은 **이미 자란 머리카락의 방향을 바꾸는** 시술입니다. 새로 자라는 머리에는 효과가 없습니다.' },
          { type: 'p', text: '그래서 시간이 지나면 뿌리 쪽 새로 자란 부분부터 다시 뜹니다. 겉으로는 "풀렸다"고 느끼지만 실제로는 시술받은 부분이 잘려나가거나 아래로 내려간 것입니다.' },
          { type: 'p', text: '이 원리 때문에 **커트와 함께 관리하는 게 효율적**입니다. 커트를 하면 다운펌 된 부분이 잘려나가므로, 커트 직후에 다운펌을 하는 순서가 맞습니다. 반대로 다운펌 후 며칠 뒤 커트하면 돈을 버리는 셈입니다.' },
        ],
      },
      {
        h2: '다운펌 vs 쉐도우펌 vs 리프펌',
        blocks: [
          { type: 'p', text: '자주 헷갈리는 세 가지입니다. 목적이 다릅니다.' },
          {
            type: 'table',
            headers: ['시술', '해결하는 문제'],
            rows: [
              ['다운펌', '옆머리가 위로 뜬다'],
              ['쉐도우펌', '옆·뒷머리가 바깥으로 뻗는다'],
              ['리프펌', '앞머리에 볼륨이 없다'],
            ],
          },
          { type: 'p', text: '옆머리가 뜨면서 동시에 뻗친다면 두 개를 같이 하는 경우도 있습니다. 본인 머리 사진을 보여주고 상담하는 게 가장 정확합니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/service/perm', label: '펌 종류 총정리' },
      { href: '/hair/service/cut', label: '커트 가격·주기 상세' },
    ],
    relatedQuestions: ['hair-lift-vs-down-perm', 'hair-shadow-perm', 'hair-side-part-perm', 'hair-mens-cut-cycle'],
    disclaimer: '유지 기간은 모질에 따라 크게 다릅니다.',
    updated: '2026.08.17',
  },

  'makeup-personal-color-tone': {
    metaTitle: '퍼스널컬러 웜톤·쿨톤은 어떻게 구분하나요? | 자주 묻는 질문',
    lead: '손목 혈관 색, 금·은 액세서리 대비, 흰 천과 아이보리 천 비교로 대략 판단할 수 있습니다. 다만 자가 진단은 조명에 크게 좌우됩니다.',
    h1: '퍼스널컬러 웜톤·쿨톤은 어떻게 구분하나요?',
    bodies: [
      {
        h2: '간이 자가 진단법',
        blocks: [
          {
            type: 'table',
            headers: ['방법', '웜톤', '쿨톤'],
            rows: [
              ['손목 혈관', '초록빛', '푸른빛'],
              ['금 / 은 액세서리', '금이 어울림', '은이 어울림'],
              ['흰 천 / 아이보리 천', '아이보리에서 화사', '순백에서 화사'],
              ['햇볕에 탈 때', '갈색으로 탐', '붉게 익음'],
              ['어울리는 립', '코랄, 오렌지', '핑크, 로즈'],
            ],
          },
          { type: 'p', text: '세 가지 이상이 같은 방향이면 그 톤일 가능성이 높습니다.' },
        ],
      },
      {
        h2: '자가 진단이 자주 틀리는 이유',
        blocks: [
          { type: 'p', text: '결과가 매번 다르게 나온다면 대부분 **조명 때문**입니다.' },
          { type: 'p', text: '형광등은 푸른빛, 백열등은 노란빛을 더합니다. 그 상태에서 천을 대보면 조명 색이 그대로 결과에 섞입니다. 자가 진단은 반드시 **낮 시간 창가 자연광**에서, 화장을 지우고, 머리를 넘긴 상태로 하셔야 합니다.' },
          { type: 'p', text: '또 하나 흔한 오해는 **피부가 하얀 사람은 쿨톤**이라는 생각입니다. 밝기와 언더톤은 별개입니다. 밝은 피부에도 웜톤이 있고 어두운 피부에도 쿨톤이 있습니다.' },
          { type: 'p', text: '그리고 사람이 딱 두 가지로 나뉘지도 않습니다. 어느 쪽에도 강하게 치우치지 않는 **뉴트럴**이 생각보다 많습니다. 이 경우 무리하게 한쪽으로 정하면 오히려 안 어울리는 색을 쓰게 됩니다.' },
        ],
      },
      {
        h2: '정확한 진단이 필요하다면',
        blocks: [
          { type: 'p', text: '전문 진단은 드레이프 천 세트를 이용해 사계절 또는 12타입으로 세분합니다. 3~15만원 선이고, 컬러 리포트를 함께 받는 경우가 많습니다.' },
          { type: 'p', text: '다만 진단 결과를 **규칙이 아니라 방향**으로 쓰시는 게 좋습니다. 모발색이 바뀌거나 나이가 들면 어울리는 색도 달라집니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/makeup/personal-color', label: '퍼스널컬러 4계절 유형 정리' },
      { href: '/makeup/service/daily', label: '데일리 메이크업 시술 상세' },
    ],
    relatedQuestions: ['makeup-personal-color-diagnosis', 'makeup-eyebrow-tattoo-license', 'makeup-eyelash-extension-license', 'makeup-mens-eyebrow'],
    disclaimer: '자가 진단은 참고용입니다.',
    updated: '2026.08.17',
  },

  'hair-scalp-scaling': {
    metaTitle: '두피 스케일링은 얼마나 자주 받나요? | 자주 묻는 질문',
    lead: '보통 2~4주에 한 번이 적정합니다. 지성 두피는 2주, 건성·민감성은 4~6주 간격이 권장되며 회당 2~5만원 선입니다.',
    h1: '두피 스케일링은 얼마나 자주 받나요?',
    bodies: [
      {
        h2: '두피 타입별 주기',
        blocks: [
          {
            type: 'table',
            headers: ['두피 타입', '권장 주기', '비고'],
            rows: [
              ['지성', '2~3주', '피지·각질 축적 빠름'],
              ['중성', '3~4주', '표준'],
              ['건성', '4~6주', '과하면 더 건조해짐'],
              ['민감성', '6주 이상', '자극 최소화'],
              ['비듬 동반', '상태 확인 후', '지루성 두피염이면 피부과 우선'],
            ],
          },
        ],
      },
      {
        h2: '"자주 할수록 두피가 좋아진다"가 아닙니다',
        blocks: [
          { type: 'p', text: '가장 흔한 오해이고, 실제로 두피를 나쁘게 만드는 경로이기도 합니다.' },
          { type: 'p', text: '두피에도 **보호막 역할을 하는 유분**이 있습니다. 스케일링을 과하게 하면 이 유분까지 걷어내고, 그러면 두피가 부족한 유분을 보충하려고 피지 분비를 늘립니다. 결과적으로 더 기름진 두피가 됩니다. "스케일링 받고 며칠은 좋다가 더 심해졌다"는 경험이 여기서 나옵니다.' },
          { type: 'p', text: '또 하나. 스케일링은 **비듬 치료가 아닙니다.** 흰 각질이 계속 떨어지고 가렵다면 지루성 두피염일 수 있고, 이건 관리가 아니라 진료 영역입니다. 이 상태에서 스케일링을 반복하면 증상이 악화됩니다.' },
        ],
      },
      {
        h2: '집에서 하는 관리가 더 큽니다',
        blocks: [
          { type: 'p', text: '관리실에서 한 달에 한 번 받는 것보다 **매일 하는 세정 습관**이 두피 상태를 결정합니다.' },
          {
            type: 'list',
            items: [
              '저녁에 감기 — 하루 동안 쌓인 피지·먼지를 제거하고 자는 게 낫습니다',
              '완전히 말리고 자기 — 젖은 두피는 세균 번식 환경입니다',
              '손톱이 아닌 지문으로 마사지하듯',
              '미온수 — 뜨거운 물은 유분을 과하게 제거합니다',
            ],
          },
          { type: 'p', text: '탈모가 걱정되어 스케일링을 받는 경우가 많은데, 스케일링은 **두피 환경 관리**이지 발모 시술이 아닙니다. 탈모가 진행 중이라면 피부과 진료가 먼저입니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/scalp', label: '두피관리 정보' },
      { href: '/hair/scalp/clinic', label: '헤어 클리닉' },
    ],
    relatedQuestions: ['hair-bleaching-damage', 'hair-perm-types', 'hair-curling-iron', 'hair-scalp-certificate'],
    disclaimer: '두피 질환이 의심되면 피부과 진료를 받으세요.',
    updated: '2026.08.17',
  },

  'hair-crop-cut': {
    metaTitle: '크롭컷은 어떤 스타일인가요? 관리는? | 자주 묻는 질문',
    lead: '앞머리를 짧게 내리고 옆을 페이드로 정리하는 남성 커트입니다. 스타일링은 쉽지만 2~4주 주기 관리가 필요합니다.',
    h1: '크롭컷은 어떤 스타일인가요? 관리는 어렵지 않나요?',
    bodies: [
      {
        h2: '기본 구성과 변형',
        blocks: [
          {
            type: 'table',
            headers: ['종류', '특징', '어울림'],
            rows: [
              ['클래식 크롭', '앞머리 짧게 내림', '대부분'],
              ['텍스처 크롭', '질감을 살려 자연스럽게', '직모·굵은 모발'],
              ['프렌치 크롭', '앞머리 라인이 일직선', '이마 넓은 편'],
              ['버즈 크롭', '전체를 더 짧게', '두상이 예쁜 경우'],
            ],
          },
          { type: 'p', text: '가격은 커트 2~4만원, 페이드가 정교할수록 올라갑니다.' },
        ],
      },
      {
        h2: '"짧으니까 관리가 편하다"는 절반만 맞습니다',
        blocks: [
          { type: 'p', text: '매일 아침 스타일링은 확실히 편합니다. 왁스를 조금 발라 앞으로 눌러주면 끝입니다. 여기까지는 맞습니다.' },
          { type: 'p', text: '문제는 **미용실 방문 주기**입니다. 크롭컷의 핵심은 옆머리 페이드인데, 이게 조금만 자라도 경계가 흐려지면서 그냥 덥수룩한 머리가 됩니다. **2~4주마다** 다듬어야 형태가 유지됩니다.' },
          { type: 'p', text: '긴 머리는 한 달 넘겨도 티가 안 나지만 크롭컷은 3주째부터 눈에 보입니다. 연간 커트 비용으로 따지면 오히려 더 들 수 있습니다. 이 주기를 감당할 수 있는지 먼저 판단하세요.' },
          { type: 'p', text: '두 번째로 확인할 것은 **두상**입니다. 짧은 커트는 두상을 그대로 드러냅니다. 뒤통수가 납작하면 뒤쪽에 길이를 조금 남기거나 로우 페이드로 조절하는 편이 낫습니다.' },
        ],
      },
      {
        h2: '스타일링 방법',
        blocks: [
          {
            type: 'list',
            items: [
              '머리를 살짝 적신 뒤 드라이로 앞 방향 정리',
              '매트한 왁스나 클레이를 소량 (광택 제품은 눌린 느낌)',
              '손가락으로 앞으로 쓸어내리고 끝만 살짝 흩뜨림',
            ],
          },
          { type: 'p', text: '제품을 많이 쓰면 뭉쳐서 더 짧고 납작해 보입니다. 소량으로 시작하세요.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/service/cut', label: '커트 가격·주기 상세' },
      { href: '/hair/equipment/clipper', label: '클리퍼 날 번호·관리법' },
    ],
    relatedQuestions: ['hair-mens-hairstyle', 'hair-barbershop-styles', 'hair-mens-cut-cycle', 'hair-down-perm'],
    disclaimer: '결과는 모질·두상·시술자에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-perm-types': {
    metaTitle: '펌 종류에는 어떤 것들이 있나요? | 자주 묻는 질문',
    lead: '열을 쓰는 열펌과 약으로만 하는 일반펌으로 크게 나뉩니다. 셋팅펌·볼륨매직은 열펌, 히피펌·애즈펌은 일반펌 계열입니다.',
    h1: '펌 종류에는 어떤 것들이 있나요?',
    bodies: [
      {
        h2: '계열별 정리',
        blocks: [
          {
            type: 'table',
            headers: ['계열', '종류', '컬 형태', '유지'],
            rows: [
              ['열펌', '셋팅펌, 디지털펌', '탄력 있는 컬. 마르면 살아남', '4~6개월'],
              ['열펌', '볼륨매직', '뿌리 볼륨 + 중간 스트레이트', '3~6개월'],
              ['일반펌', '히피펌, 애즈펌', '젖었을 때 컬이 살아남', '3~5개월'],
              ['일반펌', '쉐도우·다운·가르마펌', '방향 정리용', '1~3개월'],
              ['스트레이트', '매직', '곧게 폄', '4~6개월'],
            ],
          },
        ],
      },
      {
        h2: '열펌과 일반펌, 뭘 골라야 하나',
        blocks: [
          { type: 'p', text: '가장 실용적인 구분 기준은 **"머리를 어떻게 말리느냐"**입니다.' },
          { type: 'p', text: '**열펌**은 드라이로 말릴 때 컬이 살아납니다. 자연 건조하면 늘어져 보입니다. 아침에 드라이할 시간이 있는 분에게 맞습니다.' },
          { type: 'p', text: '**일반펌**은 반대입니다. 젖은 상태에서 컬이 가장 예쁘고, 자연 건조나 디퓨저로 말려야 합니다. 뜨거운 바람으로 세게 말리면 부스스해집니다.' },
          { type: 'p', text: '즉 "어떤 펌이 더 좋은가"가 아니라 **본인 아침 루틴에 맞는 게 어느 쪽인가**의 문제입니다. 드라이를 안 하실 거면 열펌은 돈이 아깝고, 자연 건조 습관이 없으면 히피펌이 실망스럽습니다.' },
          { type: 'p', text: '상담할 때 "아침에 드라이 하세요?"를 물어보는 디자이너가 실력 있는 디자이너입니다.' },
        ],
      },
      {
        h2: '손상과 간격',
        blocks: [
          { type: 'p', text: '열펌이 일반펌보다 손상이 큽니다. 탈색모라면 열펌은 끊어질 위험이 있어 권장되지 않습니다.' },
          { type: 'p', text: '재시술 간격은 최소 2~3개월이고, 염색과 같은 날 진행하면 손상이 겹칩니다. 2주 이상 간격을 두거나 클리닉을 병행하세요.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/service/perm', label: '펌 종류 총정리' },
      { href: '/hair/service/bleach', label: '탈색 손상도' },
    ],
    relatedQuestions: ['hair-hippie-perm', 'hair-volume-magic', 'hair-setting-perm', 'hair-shadow-perm'],
    disclaimer: '결과와 손상도는 모발 상태에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-bleaching-damage': {
    metaTitle: '탈색은 머리에 얼마나 손상을 주나요? | 자주 묻는 질문',
    lead: '탈색은 모발 내부 색소와 함께 단백질도 빠져나가는 시술로, 손상이 회복되지 않습니다. 1회당 레벨 2~3단계가 일반적이며 회차가 늘수록 손상이 누적됩니다.',
    h1: '탈색은 머리에 얼마나 손상을 주나요?',
    bodies: [
      {
        h2: '회차별 손상 정도',
        blocks: [
          {
            type: 'table',
            headers: ['회차', '밝기', '손상'],
            rows: [
              ['1회', '레벨 6~8', '푸석함, 관리로 커버 가능'],
              ['2회', '레벨 9~11', '끊어짐 시작, 클리닉 필수'],
              ['3회 이상', '레벨 12~', '심각. 모발 강도 크게 저하'],
            ],
          },
          { type: 'p', text: '원하는 색에 따라 필요한 회차가 다릅니다. 애쉬·실버 계열은 2~3회, 갈색 계열은 1회로 가능한 경우가 많습니다.' },
        ],
      },
      {
        h2: '"클리닉 받으면 원래대로 돌아온다"는 아닙니다',
        blocks: [
          { type: 'p', text: '가장 중요한 부분입니다. 탈색으로 빠져나간 단백질은 **다시 채워지지 않습니다.**' },
          { type: 'p', text: '클리닉이 하는 일은 비어 있는 공간을 성분으로 메워 **일시적으로 매끄럽게** 만드는 것입니다. 감으면 조금씩 빠져나가고, 그래서 주기적으로 받아야 유지됩니다. 손상 자체가 치료되는 게 아닙니다.' },
          { type: 'p', text: '진짜로 회복하는 방법은 하나뿐입니다. **자라난 건강한 머리로 교체되는 것.** 그래서 탈색모 관리의 목표는 "회복"이 아니라 "끊어지지 않게 버티기"입니다.' },
        ],
      },
      {
        h2: '손상을 줄이는 방법',
        blocks: [
          {
            type: 'list',
            items: [
              '**한 번에 무리하지 않기** — 2주 이상 간격을 두고 나눠서',
              '**뿌리부터 하지 않기** — 두피 열 때문에 뿌리가 먼저 밝아집니다. 순서를 지켜야 얼룩이 안 집니다',
              '**탈색 후 열기구 최소화** — 고데기·드라이 고온은 끊어짐을 가속합니다',
              '**단백질·유분 제품 병행** — 하나만 쓰면 뻣뻣하거나 늘어집니다',
              '**펌은 최소 1개월 이후** — 탈색모 열펌은 끊어질 수 있습니다',
            ],
          },
          { type: 'p', text: '이미 끊어짐이 시작됐다면 추가 탈색보다 **길이를 정리하는 편**이 현실적입니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/service/bleach', label: '탈색 손상도' },
      { href: '/hair/scalp/clinic', label: '헤어 클리닉' },
    ],
    relatedQuestions: ['hair-perm-types', 'hair-scalp-scaling', 'hair-curling-iron', 'hair-volume-magic'],
    disclaimer: '손상 정도는 모발 상태와 시술 방식에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-mens-cut-cycle': {
    metaTitle: '남자 커트 주기는 어느 정도가 적당한가요? | 자주 묻는 질문',
    lead: '스타일에 따라 2~8주로 갈립니다. 페이드나 크롭컷은 2~4주, 중간 길이 이상은 6~8주가 일반적입니다.',
    h1: '남자 커트 주기는 어느 정도가 적당한가요?',
    bodies: [
      {
        h2: '스타일별 주기',
        blocks: [
          {
            type: 'table',
            headers: ['스타일', '주기', '이유'],
            rows: [
              ['하이 페이드', '2~3주', '경계가 빨리 무너짐'],
              ['로우·미드 페이드', '3~4주', '경계가 빨리 무너짐'],
              ['크롭컷', '2~4주', '짧을수록 티가 남'],
              ['투블럭', '4~6주', '옆이 자라면 부해 보임'],
              ['포마드·슬릭백', '4~6주', '윗머리 길이 유지'],
              ['중간 길이 이상', '6~8주', '형태 여유 있음'],
            ],
          },
          { type: 'p', text: '머리카락은 한 달에 약 1cm 자랍니다. 짧은 스타일일수록 같은 1cm가 크게 보입니다.' },
        ],
      },
      {
        h2: '"짧게 자르면 오래 간다"가 반대입니다',
        blocks: [
          { type: 'p', text: '비용을 아끼려고 짧게 치는 분들이 있는데, 짧은 커트일수록 **더 자주** 가야 합니다.' },
          { type: 'p', text: '3cm 머리에서 1cm가 자라면 형태가 완전히 달라지지만, 10cm 머리에서 1cm는 거의 티가 안 납니다. 페이드처럼 그라데이션이 있는 스타일은 특히 그렇습니다. 2~3주만 지나도 경계가 흐려져 정리 안 된 인상이 됩니다.' },
          { type: 'p', text: '**연간 비용으로 계산해보세요.** 크롭컷을 3주마다 하면 연 17회, 중간 길이를 7주마다 하면 연 7회입니다. 커트비가 3만원이면 연간 51만원 대 21만원입니다.' },
          { type: 'p', text: '스타일을 고를 때 **감당할 방문 주기**를 먼저 정하는 게 현실적입니다.' },
        ],
      },
      {
        h2: '주기를 늘리는 방법',
        blocks: [
          {
            type: 'list',
            items: [
              '**자라도 형태가 유지되는 커트**를 요청하세요. 디자이너에게 "6주에 한 번 올 건데 그 사이에도 괜찮게" 라고 말하면 커트 방식이 달라집니다',
              '옆머리만 다듬는 **부분 정리**를 중간에 넣는 방법도 있습니다. 전체 커트보다 저렴한 곳이 많습니다',
              '다운펌이나 가르마펌을 병행하면 자란 상태에서도 정돈돼 보입니다',
            ],
          },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/service/cut', label: '커트 가격·주기 상세' },
      { href: '/hair/service/shaving', label: '셰이빙 시술 상세' },
    ],
    relatedQuestions: ['hair-mens-hairstyle', 'hair-crop-cut', 'hair-barbershop-styles', 'hair-down-perm'],
    disclaimer: '주기는 모발 성장 속도와 스타일에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-barbershop-styles': {
    metaTitle: '바버샵 스타일에는 어떤 종류가 있나요? | 자주 묻는 질문',
    lead: '페이드, 포마드, 크루컷, 슬릭백이 기본 네 가지입니다. 옆머리를 어느 높이까지 짧게 올리느냐가 스타일을 가릅니다.',
    h1: '바버샵 스타일에는 어떤 종류가 있나요?',
    bodies: [
      {
        h2: '기본 스타일',
        blocks: [
          {
            type: 'table',
            headers: ['스타일', '특징', '유지 주기'],
            rows: [
              ['로우 페이드', '귀 아래부터 그라데이션', '3~4주'],
              ['미드 페이드', '관자놀이 높이부터', '3~4주'],
              ['하이 페이드', '측두부 위쪽부터. 가장 강한 대비', '2~3주'],
              ['포마드', '윗머리를 넘겨 고정', '4~6주'],
              ['크루컷', '전체를 짧게. 관리 최소', '4~6주'],
              ['슬릭백', '전체를 뒤로 넘김', '4~6주'],
            ],
          },
          { type: 'p', text: '페이드는 스타일 이름이라기보다 **옆머리 처리 방식**입니다. 그래서 "미드 페이드 + 포마드"처럼 조합해서 부릅니다.' },
        ],
      },
      {
        h2: '"사진 들고 가면 그대로 된다"가 아닙니다',
        blocks: [
          { type: 'p', text: '바버샵은 특히 사진과 결과 차이가 큽니다. 이유가 세 가지입니다.' },
          { type: 'p', text: '**모질** — 사진 속 페이드는 대부분 직모이고 굵은 모발입니다. 얇거나 곱슬이면 그라데이션 경계가 흐려집니다.' },
          { type: 'p', text: '**두상** — 뒤통수가 납작하면 하이 페이드에서 그대로 드러납니다. 이 경우 로우나 미드가 낫습니다.' },
          { type: 'p', text: '**스타일링 제품** — 사진은 포마드나 왁스로 고정한 상태입니다. 커트만 하고 집에서 아무것도 안 바르면 다른 머리가 됩니다. 제품 사용이 사실상 스타일의 일부입니다.' },
          { type: 'p', text: '그래서 상담할 때 **"제 모질과 두상에 이게 나오나요"**와 **"집에서 어떤 제품을 써야 하나요"**를 같이 물어보시는 게 정확합니다.' },
        ],
      },
      {
        h2: '유지 주기와 비용',
        blocks: [
          { type: 'p', text: '페이드 계열은 옆머리가 조금만 자라도 경계가 무너져 **2~4주 주기**가 필요합니다. 크루컷이나 포마드는 4~6주로 여유가 있습니다.' },
          { type: 'p', text: '가격은 커트 기준 2~4만원, 셰이빙이나 스타일링을 포함하면 4~7만원 선입니다. 정기적으로 다니는 구조라 단골 비중이 높은 업종입니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/equipment/clipper', label: '클리퍼 날 번호·관리법' },
      { href: '/hair/service/shaving', label: '셰이빙 시술 상세' },
    ],
    relatedQuestions: ['hair-mens-hairstyle', 'hair-crop-cut', 'hair-mens-cut-cycle', 'hair-clipper-guide'],
    disclaimer: '결과는 모질·두상·시술자에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'skin-device-priority': {
    metaTitle: '피부관리 기기는 무엇부터 갖춰야 하나요? | 자주 묻는 질문',
    lead: '스티머와 확대경 같은 기본 장비가 먼저이고, 고가 기기는 메뉴가 정해진 뒤입니다. 개업 초기 기기 예산은 300~800만원이 현실적입니다.',
    h1: '피부관리 기기는 무엇부터 갖춰야 하나요?',
    bodies: [
      {
        h2: '구비 순서와 예산',
        blocks: [
          {
            type: 'table',
            headers: ['순위', '항목', '예산', '이유'],
            rows: [
              ['1', '관리 베드', '50~200만원', '없으면 관리 자체가 불가'],
              ['2', '스티머', '30~80만원', '거의 모든 관리의 전처리'],
              ['3', '확대경', '10~30만원', '진단 정확도'],
              ['4', '초음파', '100~600만원', '각질·침투. 활용도 높음'],
              ['5', '갈바닉', '50~200만원', '이온 침투'],
              ['6', '고주파', '300~1,500만원', '리프팅 메뉴 시작 시'],
            ],
          },
          { type: 'p', text: '1~3번은 필수, 4번부터는 **메뉴 구성에 따라** 선택입니다.' },
        ],
      },
      {
        h2: '기기부터 사면 예산이 먼저 마릅니다',
        blocks: [
          { type: 'p', text: '개업 준비에서 가장 흔한 순서 오류입니다. 박람회에서 기기를 보고 결정한 뒤에 메뉴를 짜는 식이죠.' },
          { type: 'p', text: '순서가 반대여야 합니다. **어떤 고객층을 받을지 → 어떤 메뉴를 팔지 → 그 메뉴에 필요한 기기**입니다.' },
          { type: 'p', text: '여드름 관리 위주라면 초음파와 스팀이 핵심이고 고주파는 후순위입니다. 안티에이징 위주라면 고주파가 먼저입니다. 왁싱을 주력으로 한다면 고가 기기 자체가 거의 필요 없습니다.' },
          { type: 'p', text: '기기를 다 갖추고 시작할 필요도 없습니다. 메뉴 3~4개로 시작해서 어떤 게 나가는지 보고 늘리는 편이 안전합니다. **팔리지 않는 메뉴의 기기가 창업 실패의 주요 원인**입니다.' },
        ],
      },
      {
        h2: '렌탈을 먼저 검토하세요',
        blocks: [
          { type: 'p', text: '고가 기기는 개업 초기에 렌탈로 돌리는 편이 합리적입니다. 월 15~40만원 선이고, 수요가 확인되면 구매로 전환하면 됩니다.' },
          { type: 'p', text: '판단 기준은 단순합니다. **해당 기기로 나오는 월 매출이 렌탈료의 3배를 넘으면 구매**를 검토하세요. 그 전에는 감가만 떠안습니다.' },
          { type: 'p', text: '중고는 출력 저하를 겉으로 확인하기 어려워 권하지 않습니다. 베드나 왜건 같은 가구류는 중고로 아끼셔도 됩니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/cost', label: '피부관리샵 창업비용' },
      { href: '/skincare/service/lifting', label: '리프팅 관리 시술 상세' },
    ],
    relatedQuestions: ['skin-rf-device', 'skin-ultrasound-device', 'skin-galvanic-device', 'skin-care-frequency'],
    disclaimer: '가격은 브랜드와 사양에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'skin-esthetician-job': {
    metaTitle: '피부미용사는 어떤 일을 하나요? 자격은? | 자주 묻는 질문',
    lead: '얼굴·바디 관리와 제모, 피부 진단을 담당합니다. 미용사(피부) 국가기술자격을 취득한 뒤 면허를 받아야 영업할 수 있습니다.',
    h1: '피부미용사는 어떤 일을 하나요? 자격은?',
    bodies: [
      {
        h2: '업무 범위',
        blocks: [
          {
            type: 'table',
            headers: ['영역', '내용'],
            rows: [
              ['피부 진단', '타입·상태 확인, 관리 계획 수립'],
              ['얼굴 관리', '클렌징, 각질, 팩, 마사지, 기기 관리'],
              ['바디 관리', '스크럽, 마사지, 순환 관리'],
              ['제모', '왁싱'],
              ['홈케어 안내', '제품 추천, 생활 습관 지도'],
            ],
          },
          { type: 'p', text: '근무처는 에스테틱, 피부과 부속 관리실, 호텔·스파, 왁싱 전문점 등입니다.' },
        ],
      },
      {
        h2: '할 수 없는 일이 더 중요합니다',
        blocks: [
          { type: 'p', text: '피부미용사와 의료 영역의 경계는 실무에서 반드시 알고 있어야 합니다. 모르고 넘으면 의료법 위반입니다.' },
          { type: 'p', text: '**할 수 없는 것**' },
          {
            type: 'list',
            items: [
              '진단명 붙이기 ("여드름균 감염입니다" 같은 표현)',
              '의료기기 사용 (레이저, 고강도 초음파 장비 등)',
              '약물 처방·주사',
              '압출 등 침습적 처치 (범위에 대한 해석이 갈리므로 특히 주의)',
              '의료 효과 표방 광고 ("치료", "시술 후 완치" 등)',
            ],
          },
          { type: 'p', text: '고객이 "이거 여드름이죠?"라고 물으면 진단을 내리는 대신 **"염증이 보이니 피부과 진료를 받아보시는 게 좋겠다"**고 안내하는 것이 맞습니다. 이 선을 지키는 것이 관리사 본인을 지키는 방법입니다.' },
        ],
      },
      {
        h2: '자격 취득 경로',
        blocks: [
          {
            type: 'list',
            items: [
              '**미용사(피부) 국가기술자격** — Q-Net. 노베이스 4~6개월',
              '**미용사 면허 발급** — 관할 시·군·구청',
              '**위생교육 이수 → 미용업 영업신고** — 개업 시',
            ],
          },
          { type: 'p', text: '국제 자격(CIDESCO 등)은 전문성 증명으로는 의미가 있지만 **국내 영업 요건과는 무관**합니다. 국가자격이 먼저입니다.' },
          { type: 'p', text: '국비지원(내일배움카드)으로 학원비 상당 부분을 지원받을 수 있습니다. 카드 발급이 학원 등록보다 먼저입니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/license', label: '미용사(피부) 자격증 상세' },
      { href: '/skincare/revenue', label: '피부관리샵 예상수익' },
    ],
    relatedQuestions: ['skin-license-how-to', 'skin-esthetician-reality', 'skin-esthetician-salary', 'skin-waxing-license'],
    disclaimer: '업무 범위의 세부 해석은 사안에 따라 다를 수 있습니다. 관할 기관에 확인하세요.',
    updated: '2026.08.17',
  },

  // ── 7차 원고 28편 · 네일 8편 ───────────────────────────────
  'nail-design-guide': {
    metaTitle: '네일 디자인은 어떻게 고르나요? | 자주 묻는 질문',
    lead: '손톱 길이와 손가락 형태, 직업 환경 세 가지로 좁히면 실패하지 않습니다. 사진과 다르게 나오는 이유는 대부분 손톱 조건이 다르기 때문입니다.',
    h1: '네일 디자인은 어떻게 고르나요?',
    bodies: [
      {
        h2: '조건별 추천',
        blocks: [
          {
            type: 'table',
            headers: ['조건', '추천', '피할 것'],
            rows: [
              ['손톱이 짧다', 'V 프렌치, 세로 그라데이션', '딥 프렌치, 큰 스톤'],
              ['손가락이 짧다', '세로 라인, 누드 계열', '가로 패턴, 짙은 색'],
              ['손을 많이 쓴다', '원톤, 마이크로 프렌치', '3D, 스톤'],
              ['오피스', '누드, 프렌치, 아이보리', '형광, 큰 아트'],
              ['행사·웨딩', '펄, 글리터, 포인트', '—'],
            ],
          },
        ],
      },
      {
        h2: '사진과 다르게 나오는 진짜 이유',
        blocks: [
          { type: 'p', text: '"인스타 사진 들고 갔는데 다르게 나왔다"는 경우, 시술자 실력 문제가 아닌 경우가 많습니다.' },
          { type: 'p', text: '**손톱 판의 크기와 곡률이 다릅니다.** 같은 디자인도 손톱이 넓고 평평하면 시원해 보이고, 좁고 둥글면 답답해 보입니다. 사진 속 모델은 대부분 손톱이 길고 판이 넓습니다.' },
          { type: 'p', text: '**길이가 다릅니다.** 마블이나 큰 아트는 일정 길이가 확보돼야 패턴이 보입니다. 짧은 손톱에 올리면 뭉개집니다.' },
          { type: 'p', text: '그래서 사진을 들고 가시되 **"제 손톱에 이대로 나오나요"**를 물어보는 게 정확합니다. 대부분 비율을 조정한 대안을 제시해줍니다.' },
        ],
      },
      {
        h2: '오래 예뻐 보이는 선택',
        blocks: [
          { type: 'p', text: '2~4주를 두고 쓰는 시술이라 **시술 직후보다 2주 뒤 모습**을 기준으로 고르는 편이 만족도가 높습니다.' },
          { type: 'p', text: '자란 티가 덜 나는 순서는 역프렌치 → 그라데이션 → 프렌치 → 원톤입니다. 짙은 원톤이 가장 경계가 도드라집니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/nail-art', label: '네일아트 디자인별 가격' },
      { href: '/service/gel-nail', label: '젤네일 시술 상세' },
    ],
    relatedQuestions: ['nail-nailart-types', 'nail-french-nail', 'nail-gradation-nail', 'nail-wedding-nail'],
    disclaimer: '결과는 손톱 상태와 시술자에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'nail-french-nail': {
    metaTitle: '프렌치 네일은 어떤 종류가 있나요? | 자주 묻는 질문',
    lead: '클래식 프렌치를 기본으로 딥·V·컬러·역프렌치 등으로 변형됩니다. 지속기간은 2~4주, 가격은 4~8만원 선입니다.',
    h1: '프렌치 네일은 어떤 종류가 있나요?',
    bodies: [
      {
        h2: '종류별 특징',
        blocks: [
          {
            type: 'table',
            headers: ['종류', '특징', '어울림'],
            rows: [
              ['클래식 프렌치', '끝단에 흰색 라인', '무난, 오피스'],
              ['딥 프렌치', '라인이 두꺼움', '손톱이 긴 편'],
              ['V 프렌치', 'V자 형태', '손가락이 길어 보임'],
              ['컬러 프렌치', '흰색 대신 컬러', '포인트'],
              ['역프렌치', '뿌리 쪽에 라인', '자란 티가 덜 남'],
              ['마이크로 프렌치', '아주 가는 라인', '자연스러움'],
            ],
          },
        ],
      },
      {
        h2: '프렌치가 오래 예뻐 보이는 이유는 따로 있습니다',
        blocks: [
          { type: 'p', text: '프렌치가 사무직에게 꾸준히 인기 있는 건 색이 무난해서만은 아닙니다. **자란 티가 덜 나기 때문**입니다.' },
          { type: 'p', text: '원톤은 뿌리 쪽에 자연 손톱이 드러나면 경계선이 바로 보입니다. 반면 프렌치는 시선이 손톱 끝 라인에 가 있어서 뿌리 부분 변화가 덜 눈에 띕니다. 같은 3주라도 프렌치가 더 깔끔해 보이는 이유입니다.' },
          { type: 'p', text: '특히 **역프렌치**는 이 원리를 극대화한 디자인입니다. 뿌리 쪽에 라인이 있어 자란 부분과 자연스럽게 이어집니다. 교체 주기를 늘리고 싶다면 고려해볼 만합니다.' },
          { type: 'p', text: '반대로 라인이 두꺼운 딥 프렌치는 손톱이 짧으면 답답해 보입니다. 길이가 확보된 상태에서 하세요.' },
        ],
      },
      {
        h2: '셀프로 할 때',
        blocks: [
          { type: 'p', text: '프렌치 라인이 균일하게 안 나오는 게 가장 흔한 문제입니다. 프렌치 전용 가이드 스티커를 쓰거나, 얇은 라이너 브러시로 한 번에 긋는 대신 **양쪽 끝에서 가운데로** 그으면 대칭이 잡힙니다.' },
          { type: 'p', text: '라인 그린 뒤 반드시 탑코트로 덮어야 경계가 매끄러워집니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/nail-art', label: '네일아트 디자인별 가격' },
      { href: '/service/gel-nail', label: '젤네일 시술 상세' },
    ],
    relatedQuestions: ['nail-nailart-types', 'nail-gradation-nail', 'nail-design-guide', 'nail-gel-nail-duration'],
    disclaimer: '지속 기간은 손톱 상태에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'nail-gradation-nail': {
    metaTitle: '그라데이션 네일은 어떻게 하나요? | 자주 묻는 질문',
    lead: '스펀지로 두 가지 색을 겹쳐 경계를 흐리는 방식입니다. 시술 시간은 기본 젤보다 20~30분 길고 가격은 5~9만원 선입니다.',
    h1: '그라데이션 네일은 어떻게 하나요?',
    bodies: [
      {
        h2: '방향별 종류',
        blocks: [
          {
            type: 'table',
            headers: ['종류', '방향', '특징'],
            rows: [
              ['세로 그라데이션', '뿌리 → 끝', '가장 일반적. 손이 길어 보임'],
              ['가로 그라데이션', '좌 → 우', '은은한 변화'],
              ['프렌치 그라데이션', '끝단만', '자연스러운 프렌치'],
              ['오로라 그라데이션', '펄 겹침', '각도에 따라 색이 변함'],
            ],
          },
        ],
      },
      {
        h2: '경계가 뭉치는 이유는 색이 아니라 두께입니다',
        blocks: [
          { type: 'p', text: '그라데이션이 지저분해 보이는 원인은 대부분 **한 번에 진하게 올렸기 때문**입니다.' },
          { type: 'p', text: '두 색을 스펀지에 묻혀 한 번 두드리면 경계가 뚜렷하게 남습니다. 제대로 나오려면 **아주 얇게 여러 번** 겹쳐야 합니다. 3~5회 두드리면서 조금씩 진하게 만드는 방식입니다.' },
          { type: 'p', text: '또 하나는 색 선택입니다. 명도 차이가 너무 큰 두 색(예: 흰색과 검정)은 경계를 흐리기 어렵습니다. **같은 계열에서 명도만 다른 두 색**으로 시작하면 실패 확률이 크게 줄어듭니다.' },
          { type: 'p', text: '그리고 그라데이션은 표면이 울퉁불퉁해지기 쉬워서 **탑코트를 두껍게 한 번 더** 올려야 매끄럽게 마무리됩니다.' },
        ],
      },
      {
        h2: '지속 기간과 관리',
        blocks: [
          { type: 'p', text: '기본 젤과 같은 2~4주입니다. 다만 겹쳐 올린 만큼 두께가 있어서, 끝부분부터 들뜨기 시작하면 진행이 빠른 편입니다.' },
          { type: 'p', text: '셀프로 하실 때는 전용 스펀지를 쓰고, 매번 새 스펀지를 쓰세요. 굳은 젤이 묻은 스펀지는 얼룩을 만듭니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/nail-art', label: '네일아트 디자인별 가격' },
      { href: '/service/gel-nail', label: '젤네일 시술 상세' },
    ],
    relatedQuestions: ['nail-french-nail', 'nail-nailart-types', 'nail-self-nail-start', 'nail-design-guide'],
    disclaimer: '결과는 제품과 시술자에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'nail-nail-supplement': {
    metaTitle: '손톱 영양제는 효과가 있나요? | 자주 묻는 질문',
    lead: '바르는 영양제는 표면 보호와 수분 유지에는 도움이 되지만 손톱을 두껍게 만들지는 않습니다. 실제 개선은 새로 자라는 손톱부터 나타납니다.',
    h1: '손톱 영양제는 효과가 있나요?',
    bodies: [
      {
        h2: '제품 유형별 기대치',
        blocks: [
          {
            type: 'table',
            headers: ['유형', '실제 효과', '기대하면 안 되는 것'],
            rows: [
              ['큐티클 오일', '주변 보습, 갈라짐 예방', '손톱 두께'],
              ['네일 강화제', '표면 코팅, 부러짐 완화', '근본 강화'],
              ['케라틴 트리트먼트', '표면 보강', '내부 재생'],
              ['경구 보충제 (비오틴 등)', '새로 자라는 손톱에 영향 가능', '즉각적 변화'],
            ],
          },
        ],
      },
      {
        h2: '손톱은 이미 죽은 조직입니다',
        blocks: [
          { type: 'p', text: '가장 중요한 사실입니다. 눈에 보이는 손톱판은 각질화된 **죽은 조직**입니다. 여기에 무엇을 발라도 그 부분이 살아나거나 두꺼워지지 않습니다.' },
          { type: 'p', text: '바르는 제품이 하는 일은 두 가지입니다. 표면에 막을 씌워 물리적으로 보호하는 것, 그리고 수분을 잡아 갈라짐을 줄이는 것. 이것만으로도 부러짐이 확실히 줄기 때문에 의미가 있습니다. 다만 **"약해진 손톱이 튼튼해진다"는 건 아닙니다.**' },
          { type: 'p', text: '진짜 개선은 손톱 뿌리(조모)에서 새로 만들어지는 부분부터 나타납니다. 손톱이 완전히 교체되는 데 **3~6개월**이 걸리므로, 효과 판단도 그 이후에 하셔야 합니다.' },
        ],
      },
      {
        h2: '실제로 도움이 되는 습관',
        blocks: [
          {
            type: 'list',
            items: [
              '**큐티클 오일 매일** — 가장 효과가 확실한 한 가지',
              '**고무장갑** — 물과 세제 접촉이 손톱을 약하게 만드는 주범',
              '**손톱을 도구로 쓰지 않기** — 스티커 떼기, 캔 따기',
              '**젤 제거는 아세톤으로 불려서** — 뜯으면 표면이 벗겨집니다',
              '**연속 시술 사이 휴식** — 2~3개월에 한 번은 쉬어주기',
            ],
          },
          { type: 'p', text: '손톱이 세로로 갈라지거나 색이 변하는 게 지속되면 영양제보다 **피부과 진료**가 먼저입니다. 갑상선이나 영양 상태 문제일 수 있습니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/service/care', label: '네일 케어 시술 상세' },
      { href: '/service/gel-removal', label: '젤 제거' },
    ],
    relatedQuestions: ['nail-gel-nail-duration', 'nail-pedicure-duration', 'nail-self-nail-start', 'nail-nail-tip-guide'],
    disclaimer: '증상이 지속되면 피부과 진료를 받으세요.',
    updated: '2026.08.17',
  },

  'nail-self-nail-start': {
    metaTitle: '셀프네일은 어떻게 시작하나요? 준비물 | 자주 묻는 질문',
    lead: '램프·베이스·탑·컬러·파일 다섯 가지면 시작할 수 있고 초기 비용은 5~15만원입니다. 첫 실패는 대부분 전처리를 건너뛰어서 생깁니다.',
    h1: '셀프네일은 어떻게 시작하나요? 필요한 준비물은?',
    bodies: [
      {
        h2: '최소 준비물',
        blocks: [
          {
            type: 'table',
            headers: ['품목', '가격대', '비고'],
            rows: [
              ['UV/LED 겸용 램프', '3~8만원', '겸용으로 사야 젤 종류 안 가림'],
              ['베이스코트', '1~2만원', '생략하면 착색·들뜸'],
              ['탑코트', '1~2만원', '광택과 지속력'],
              ['컬러 젤', '개당 5천~1.5만원', '3~4색으로 시작'],
              ['파일·버퍼', '5천~1만원', '표면 정리'],
              ['클렌저·와이프', '1만원', '미경화 젤 제거'],
            ],
          },
        ],
      },
      {
        h2: '하루 만에 들뜨는 이유는 전처리입니다',
        blocks: [
          { type: 'p', text: '셀프네일 첫 실패는 거의 예외 없이 **전처리 생략**에서 옵니다. 색부터 바르고 싶은 마음에 건너뛰는 단계들입니다.' },
          { type: 'p', text: '순서는 이렇습니다.' },
          {
            type: 'list',
            items: [
              '큐티클 정리 — 밀어 올리고 정리',
              '표면 샌딩 — 버퍼로 광을 없애 젤이 물리게',
              '**유분 제거** — 클렌저로 닦기. 이 단계가 가장 중요합니다',
              '베이스 → 컬러 → 탑, 각 단계마다 경화',
            ],
          },
          { type: 'p', text: '3번을 건너뛰면 손톱 표면 유분 때문에 젤이 뜹니다. 손을 씻은 직후도 안 됩니다. 물기와 유분이 남아 있으면 같은 결과입니다.' },
          { type: 'p', text: '그리고 **한 번에 두껍게 바르지 마세요.** 겉만 굳고 속이 미경화 상태로 남아, 며칠 뒤 통째로 벗겨지거나 알레르기를 유발합니다. 얇게 두 번이 정답입니다.' },
        ],
      },
      {
        h2: '제거는 절대 뜯지 마세요',
        blocks: [
          { type: 'p', text: '아세톤에 적신 솜을 올리고 포일로 감싸 10~15분 불린 뒤 오렌지스틱으로 밀어냅니다.' },
          { type: 'p', text: '뜯어내면 자연 손톱 표면이 같이 벗겨집니다. "셀프네일 하면 손톱이 얇아진다"는 말의 원인은 젤이 아니라 이 제거 방식입니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/service/gel-nail', label: '젤네일 시술 상세' },
      { href: '/service/gel-removal', label: '젤 제거' },
    ],
    relatedQuestions: ['nail-uv-vs-led-lamp', 'nail-gel-nail-duration', 'nail-nail-tip-guide', 'nail-gradation-nail'],
    disclaimer: '제품에 따라 사용법이 다를 수 있습니다.',
    updated: '2026.08.17',
  },

  'nail-startup-cost': {
    metaTitle: '네일샵 창업비용은 총 얼마인가요? | 자주 묻는 질문',
    lead: '공유 작업실 기준 300~500만원, 독립 매장 기준 1,000~1,500만원 수준입니다. 보증금과 인테리어가 전체의 절반 이상을 차지합니다.',
    h1: '네일샵 창업비용은 총 얼마인가요?',
    bodies: [
      {
        h2: '항목별 내역',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '일반', '절감 시'],
            rows: [
              ['보증금', '300만원', '0원 (공유 작업실)'],
              ['인테리어', '500만원', '100만원 이하 (셀프)'],
              ['장비·기기', '300만원', '150만원 (중고)'],
              ['초기 재료', '150만원', '50만원'],
              ['간판·홍보물', '80만원', '30만원'],
              ['가구·소품', '150만원', '70만원'],
              ['합계', '1,480만원', '400만원대'],
            ],
          },
        ],
      },
      {
        h2: '이 표에 없는 항목이 창업을 결정합니다',
        blocks: [
          { type: 'p', text: '창업비용만 맞춰놓고 시작하는 게 가장 흔한 실패 경로입니다. 위 표에는 **오픈 후 버티는 돈**이 빠져 있습니다.' },
          { type: 'p', text: '오픈 후 1~3개월은 고객이 거의 없습니다. 그동안에도 월세, 재료비, 생활비는 그대로 나갑니다. 월 고정비 100만원 + 생활비 150만원이면 6개월에 1,500만원입니다.' },
          { type: 'p', text: '전부 현금으로 갖고 시작하라는 뜻은 아니지만, **어떻게 메울지에 대한 답은 있어야 합니다.** 부업 병행, 배우자 소득, 예비 자금 중 무엇이든 계획이 필요합니다.' },
          { type: 'p', text: '준비 자금이 부족하다면 창업을 미루라는 게 아니라 **더 작게 시작하라**는 뜻입니다. 공유 작업실로 시작해 단골이 붙은 뒤 독립하는 경로가 리스크를 가장 크게 줄입니다.' },
        ],
      },
      {
        h2: '비용을 줄이는 세 가지',
        blocks: [
          {
            type: 'list',
            items: [
              '**공유 작업실** — 보증금과 인테리어가 통째로 빠집니다',
              '**중고 장비** — 램프·집진기는 중고 시장이 형성돼 있습니다',
              '**재료 단계적 구비** — 젤 100색이 아니라 기본 20색으로 시작',
            ],
          },
          { type: 'p', text: '소상공인 정책자금이나 지자체 청년창업 지원도 조합할 수 있습니다. 다만 대부분 면허와 사업자등록이 전제이므로 순서를 지키세요.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/cost', label: '네일샵 창업비용 상세' },
      { href: '/calculator', label: '창업비용 계산기' },
    ],
    relatedQuestions: ['nail-startup-steps', 'nail-interior-cost', 'nail-materials-buying', 'nail-table-guide'],
    disclaimer: '비용은 지역과 규모에 따라 크게 다릅니다.',
    updated: '2026.08.17',
  },

  'nail-table-guide': {
    metaTitle: '네일 시술 테이블은 어떤 것을 고르나요? | 자주 묻는 질문',
    lead: '집진기 내장 여부와 높이가 핵심입니다. 보급형 15~30만원, 집진기 일체형은 40~80만원 선입니다.',
    h1: '네일 시술 테이블은 어떤 것을 고르나요?',
    bodies: [
      {
        h2: '선택 기준',
        blocks: [
          {
            type: 'table',
            headers: ['기준', '권장', '이유'],
            rows: [
              ['높이', '70~75cm', '손목·허리 부담 좌우'],
              ['집진기', '내장형 권장', '분진 흡입 위치가 손 바로 아래'],
              ['폭', '90cm 이상', '도구 배치 공간'],
              ['수납', '서랍 3단 이상', '컬러·소모품 정리'],
              ['표면 재질', '아세톤 내성', '클렌저에 녹지 않아야 함'],
            ],
          },
        ],
      },
      {
        h2: '높이가 안 맞으면 6개월 뒤에 몸이 아픕니다',
        blocks: [
          { type: 'p', text: '테이블을 고를 때 디자인과 수납만 보고 높이를 안 따지는 경우가 많습니다. 그런데 네일은 **하루 5~6시간을 같은 자세로** 앉아 있는 작업입니다.' },
          { type: 'p', text: '테이블이 낮으면 등이 굽고, 높으면 어깨가 올라갑니다. 둘 다 몇 달이면 통증으로 돌아옵니다. 실제로 네일리스트 이직·폐업 사유에 손목과 허리 문제가 자주 등장합니다.' },
          { type: 'p', text: '기준은 **앉았을 때 팔꿈치가 90도**가 되는 높이입니다. 의자와 세트로 맞춰야 하므로 테이블만 따로 고르지 마시고, 가능하면 앉아보고 결정하세요.' },
          { type: 'p', text: '그리고 **집진기 위치**도 같은 맥락입니다. 별도 집진기를 옆에 두면 흡입이 약해 분진이 얼굴로 올라옵니다. 손 바로 아래에서 빨아들이는 일체형이 호흡기 건강에 훨씬 낫습니다.' },
        ],
      },
      {
        h2: '중고와 신품',
        blocks: [
          { type: 'p', text: '테이블 자체는 중고로 사도 무방합니다. 확인할 것은 표면 상태입니다. 아세톤에 오래 노출된 상판은 코팅이 녹아 끈적해지는데, 이건 복구가 안 됩니다.' },
          { type: 'p', text: '집진기 일체형 중고는 흡입력 저하를 확인하기 어려우니 주의하세요. 손을 대보고 흡입이 확실히 느껴지는지 봐야 합니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/cost', label: '네일샵 창업비용' },
      { href: '/calculator', label: '창업비용 계산기' },
    ],
    relatedQuestions: ['nail-materials-buying', 'nail-uv-vs-led-lamp', 'nail-interior-cost', 'nail-startup-cost'],
    disclaimer: '가격은 브랜드와 사양에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'nail-wedding-nail': {
    metaTitle: '웨딩 네일은 언제 어떻게 준비하나요? | 자주 묻는 질문',
    lead: '예식 3~5일 전 시술이 가장 안전합니다. 본식 촬영에서 반지와 부케에 손이 계속 잡히므로 디자인은 절제하는 편이 낫습니다.',
    h1: '웨딩 네일은 언제 어떻게 준비하나요?',
    bodies: [
      {
        h2: '일정과 가격',
        blocks: [
          {
            type: 'table',
            headers: ['시점', '할 일'],
            rows: [
              ['2~3개월 전', '손 관리 시작 (큐티클, 보습)'],
              ['1개월 전', '스튜디오 촬영용 네일'],
              ['2주 전', '디자인 상담·시안 확정'],
              ['3~5일 전', '본식 네일 시술'],
              ['전날', '시술 금지 — 문제 생기면 대응 불가'],
            ],
          },
          { type: 'p', text: '가격은 기본 8~15만원, 아트 추가 시 20만원 이상입니다.' },
        ],
      },
      {
        h2: '전날 시술이 가장 위험합니다',
        blocks: [
          { type: 'p', text: '"가장 깨끗한 상태로"라는 생각에 전날이나 당일 아침에 받는 경우가 있는데, 이게 사고가 나는 경로입니다.' },
          { type: 'p', text: '들뜸이나 색 불만족, 알레르기 반응이 생겼을 때 **고칠 시간이 없습니다.** 3~5일 전이면 문제가 생겨도 재방문해서 수정할 여유가 있고, 그 사이 손에 익어 자연스러워집니다.' },
          { type: 'p', text: '반대로 너무 일찍(2주 전) 하면 예식 때 뿌리 쪽이 자라 티가 납니다. **3~5일이 균형점**입니다.' },
        ],
      },
      {
        h2: '디자인을 절제해야 하는 이유',
        blocks: [
          { type: 'p', text: '본식과 촬영에서 손이 화면에 잡히는 순간은 대부분 **반지 교환, 부케, 손 클로즈업**입니다. 이때 손톱이 주인공이 되면 반지와 부케가 묻힙니다.' },
          { type: 'p', text: '실무적으로 권장되는 방향은 이렇습니다.' },
          {
            type: 'list',
            items: [
              '**누드·아이보리·연핑크 계열** 원톤 또는 마이크로 프렌치',
              '포인트는 한두 손가락에만',
              '스톤은 작게. 큰 스톤은 부케 리본과 드레스 레이스에 걸립니다',
              '길이는 중간. 너무 길면 반지가 어색해 보입니다',
            ],
          },
          { type: 'p', text: '한복이나 폐백이 있다면 그 의상 톤도 함께 고려하세요.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/nail-art', label: '네일아트 디자인별 가격' },
      { href: '/service/full-set', label: '풀세트 시술 상세' },
    ],
    relatedQuestions: ['nail-design-guide', 'nail-french-nail', 'nail-nailart-types', 'nail-nail-supplement'],
    disclaimer: '가격과 디자인은 매장에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  // ── 7차 · 메이크업 3편 ─────────────────────────────────────
  'makeup-mens-eyebrow': {
    metaTitle: '남자 눈썹 정리는 어떻게 하나요? | 자주 묻는 질문',
    lead: '눈썹 라인은 건드리지 말고 주변 잔털만 제거하는 것이 원칙입니다. 샵에서 받으면 1~2만원, 왁싱은 1.5~3만원 선입니다.',
    h1: '남자 눈썹 정리는 어떻게 하나요?',
    bodies: [
      {
        h2: '방법별 비교',
        blocks: [
          {
            type: 'table',
            headers: ['방법', '유지', '비용', '난이도'],
            rows: [
              ['셀프 (족집게·눈썹칼)', '1~2주', '1만원 이하', '실패 위험 있음'],
              ['샵 정리 (트리밍)', '2~3주', '1~2만원', '—'],
              ['왁싱', '3~4주', '1.5~3만원', '—'],
              ['반영구 (눈썹 문신)', '1~2년', '15~40만원', '—'],
            ],
          },
        ],
      },
      {
        h2: '셀프로 실패하는 이유는 하나입니다',
        blocks: [
          { type: 'p', text: '**라인을 만들려고 하기 때문**입니다.' },
          { type: 'p', text: '여성 눈썹처럼 아래 라인을 정리하고 각을 만들면, 남자 얼굴에서는 어색하고 인위적으로 보입니다. 게다가 한 번 밀어버린 부분은 다시 자라는 데 몇 주가 걸리고, 반복하면 아예 안 자라기도 합니다.' },
          { type: 'p', text: '원칙은 단순합니다.' },
          {
            type: 'list',
            items: [
              '**눈썹과 눈썹 사이(미간) 잔털** — 제거해도 됩니다',
              '**눈썹 위쪽으로 멀리 떨어진 잔털** — 제거해도 됩니다',
              '**눈썹 아래 라인** — 건드리지 마세요',
              '**눈썹 앞머리(눈썹산 안쪽)** — 절대 건드리지 마세요',
            ],
          },
          { type: 'p', text: '정리했는데 이상해 보인다면 대부분 아래 라인을 손댔기 때문입니다. 길이가 문제라면 뽑지 말고 **눈썹 빗으로 세워서 가위로 끝만 다듬으세요.**' },
        ],
      },
      {
        h2: '관리 주기',
        blocks: [
          { type: 'p', text: '잔털 제거는 2~3주에 한 번이면 충분합니다. 자주 할수록 좋은 게 아니라, 오히려 모근이 약해집니다.' },
          { type: 'p', text: '숱이 적거나 모양 자체를 바꾸고 싶다면 반영구를 고려하는 방법도 있습니다. 2026년 대법원 판례 변경으로 비의료인 시술이 처벌 대상에서 벗어났지만, 문신사법 시행 전 과도기라 시술자의 위생 관리와 경력을 확인하시는 게 좋습니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/semi-permanent/eyebrow', label: '눈썹 반영구 시술 상세' },
      { href: '/makeup/service/daily', label: '데일리 메이크업 시술 상세' },
    ],
    relatedQuestions: ['makeup-eyebrow-tattoo-license', 'makeup-personal-color-tone', 'makeup-eyelash-extension-license', 'makeup-personal-color-diagnosis'],
    disclaimer: '개인 눈썹 형태에 따라 방법이 다릅니다.',
    updated: '2026.08.17',
  },

  'makeup-beauty-academy': {
    metaTitle: '뷰티 학원과 전문 아카데미는 무엇이 다른가요? | 자주 묻는 질문',
    lead: '뷰티 학원은 자격증 취득 중심, 전문 아카데미는 실무·취업 중심인 경우가 많습니다. 다만 명칭에 법적 구분은 없어 커리큘럼으로 판단해야 합니다.',
    h1: '뷰티 학원과 전문 아카데미는 무엇이 다른가요?',
    bodies: [
      {
        h2: '일반적인 차이',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '뷰티 학원', '전문 아카데미'],
            rows: [
              ['중심', '국가자격 취득', '현장 실무'],
              ['기간', '2~4개월', '4~8개월'],
              ['수강료', '100~250만원', '300~600만원'],
              ['국비지원', '대상 과정 많음', '제한적'],
              ['취업 연계', '제한적', '제휴처 보유하는 곳 있음'],
            ],
          },
        ],
      },
      {
        h2: '이름으로 구분하면 안 됩니다',
        blocks: [
          { type: 'p', text: '가장 중요한 부분입니다. **"학원"과 "아카데미"는 법적으로 구분된 명칭이 아닙니다.** 아카데미라는 이름을 쓰면서 자격증 대비만 하는 곳도 있고, 학원이라는 이름으로 실무 위주 커리큘럼을 운영하는 곳도 있습니다.' },
          { type: 'p', text: '그래서 판단 기준을 이름이 아니라 **세 가지 사실**로 잡으세요.' },
          {
            type: 'list',
            items: [
              '**학원 등록 여부** — 정식 등록된 교육기관인지 (국비지원 가능 여부와 직결)',
              '**실습 비중** — 전체 시간 중 손을 움직이는 시간의 비율',
              '**강사의 현업 여부** — 지금도 현장에 나가는 강사인지',
            ],
          },
          { type: 'p', text: '특히 첫 번째가 중요합니다. 미등록 기관은 국비지원 대상이 아니고, 수강료 환불 규정 적용도 다를 수 있습니다.' },
        ],
      },
      {
        h2: '목적에 따른 선택',
        blocks: [
          { type: 'p', text: '**자격증이 목적이라면** — 국비지원 대상 학원이 비용 대비 효율적입니다. 자격 취득 후 현장에서 배우는 경로입니다.' },
          { type: 'p', text: '**빠른 취업이 목적이라면** — 제휴처가 있는 아카데미가 유리할 수 있습니다. 다만 "취업률 100%" 같은 수치는 산정 기준을 반드시 물어보세요.' },
          { type: 'p', text: '**둘 다 필요하다면** — 국비 학원으로 자격증을 먼저 따고, 필요한 심화 과정만 아카데미에서 짧게 듣는 조합이 비용 면에서 낫습니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/makeup/license', label: '미용사(메이크업) 자격증 상세' },
      { href: '/makeup', label: '메이크업샵 창업' },
    ],
    relatedQuestions: ['makeup-academy-choose', 'makeup-makeup-certificates', 'makeup-become-artist', 'makeup-national-license'],
    disclaimer: '과정 내용과 비용은 기관에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'makeup-portfolio': {
    metaTitle: '메이크업 포트폴리오는 어떻게 만드나요? | 자주 묻는 질문',
    lead: '콘셉트별 10~15컷을 같은 조명·구도로 촬영하는 것이 기본입니다. 장비보다 조명과 일관성이 완성도를 결정합니다.',
    h1: '메이크업 포트폴리오는 어떻게 만드나요?',
    bodies: [
      {
        h2: '구성 예시',
        blocks: [
          {
            type: 'table',
            headers: ['콘셉트', '컷 수', '목적'],
            rows: [
              ['웨딩 (내추럴)', '3~4컷', '가장 수요가 큰 영역'],
              ['웨딩 (로맨틱·글램)', '2~3컷', '스타일 폭 증명'],
              ['촬영·화보', '2~3컷', '표현력'],
              ['데일리·면접', '2컷', '실용 영역'],
              ['남성 그루밍', '1~2컷', '차별화'],
              ['비포·애프터', '2컷', '실력 증명에 가장 효과적'],
            ],
          },
        ],
      },
      {
        h2: '화려한 작업을 넣을수록 불리해질 수 있습니다',
        blocks: [
          { type: 'p', text: '포트폴리오를 만들 때 가장 흔한 실수가 **특수분장이나 아트 메이크업으로 채우는 것**입니다. 눈에 띄고 재미있어 보이니까요.' },
          { type: 'p', text: '그런데 이걸 보는 사람은 웨딩샵 실장이나 스튜디오 담당자입니다. 그들이 확인하려는 건 **"내일 신부 얼굴을 맡길 수 있는가"**입니다. 화려한 아트는 그 질문에 답하지 못합니다.' },
          { type: 'p', text: '실제로 채용에서 가장 크게 작용하는 건 **내추럴 웨딩 메이크업**입니다. 기교를 부릴 여지가 없어서 기본기가 그대로 드러나기 때문입니다. 피부 표현, 대칭, 톤 조절이 다 보입니다.' },
          { type: 'p', text: '포트폴리오의 60~70%를 웨딩과 데일리로 채우고, 나머지에 표현력을 보여주는 구성이 안전합니다.' },
        ],
      },
      {
        h2: '촬영 실무',
        blocks: [
          {
            type: 'list',
            items: [
              '**조명 통일** — 컷마다 조명이 다르면 아마추어로 보입니다. 같은 자리, 같은 시간대',
              '**배경 통일** — 무지 배경 하나로',
              '**구도 통일** — 정면, 45도, 클로즈업 세 가지를 모든 콘셉트에 반복',
              '**보정 최소화** — 피부 보정을 과하게 하면 메이크업 실력이 안 보입니다',
              '**모델** — 지인이어도 됩니다. 얼굴형이 다양하면 오히려 좋습니다',
            ],
          },
          { type: 'p', text: '스마트폰으로도 충분합니다. 카메라보다 **자연광과 반사판**이 결과를 좌우합니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/makeup/service/bridal', label: '웨딩 메이크업 시술 상세' },
      { href: '/makeup/revenue', label: '메이크업샵 예상수익' },
    ],
    relatedQuestions: ['makeup-become-artist', 'makeup-artist-reality', 'makeup-artist-salary', 'makeup-academy-choose'],
    disclaimer: '요구 사항은 지원처에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  // ── 7차 · 스킨케어·왁싱 5편 ────────────────────────────────
  'skin-body-scrub': {
    metaTitle: '바디 스크럽은 얼마나 자주 하나요? | 자주 묻는 질문',
    lead: '주 1회가 표준이고 건성·민감성은 2주에 한 번이 적당합니다. 관리실 기준 회당 4~10만원이며 왁싱 직전·직후는 피해야 합니다.',
    h1: '바디 스크럽은 얼마나 자주 하나요?',
    bodies: [
      {
        h2: '피부 타입별 주기',
        blocks: [
          {
            type: 'table',
            headers: ['타입', '주기', '비고'],
            rows: [
              ['지성·정상', '주 1회', '표준'],
              ['건성', '2주 1회', '이후 보습 필수'],
              ['민감성', '3~4주 1회', '저자극 제형'],
              ['등·팔 트러블', '주 1회', '자극 강한 제품 금지'],
            ],
          },
          { type: 'p', text: '관리실 스크럽은 4~10만원, 홈케어 제품은 1~3만원 선입니다.' },
        ],
      },
      {
        h2: '"각질을 벗길수록 매끈해진다"가 아닙니다',
        blocks: [
          { type: 'p', text: '자주 하면 좋다고 생각하기 쉬운데, 각질층은 수분을 잡아두고 외부 자극을 막는 **보호막**입니다. 과하게 벗기면 피부가 건조해지고 오히려 각질이 더 빨리 올라옵니다. 악순환이 여기서 시작됩니다.' },
          { type: 'p', text: '특히 스크럽 후 **보습을 안 하는 것**이 가장 흔한 실수입니다. 각질을 제거한 직후는 수분이 가장 빨리 날아가는 상태라, 이때 바디로션이나 오일을 바르지 않으면 안 한 것만 못합니다.' },
          { type: 'p', text: '그리고 **왁싱 전후 최소 3일**은 피하세요. 왁싱 직전 스크럽은 피부를 예민하게 만들어 통증과 자극을 키우고, 직후에는 상처가 될 수 있습니다. 인그로운 헤어 예방 목적이라면 왁싱 3일 **후**부터 가볍게 시작하는 게 맞습니다.' },
        ],
      },
      {
        h2: '방식별 차이',
        blocks: [
          {
            type: 'list',
            items: [
              '**물리적 스크럽** — 알갱이로 마찰. 효과가 즉각적이지만 자극이 큼',
              '**화학적 필링(AHA·BHA)** — 각질 결합을 녹임. 자극 적고 균일',
              '**바디 브러싱** — 건조한 상태에서 브러시. 순환 목적',
            ],
          },
          { type: 'p', text: '민감성이라면 물리적 스크럽보다 화학적 제품이 안전합니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/service/body', label: '바디 관리 시술 상세' },
      { href: '/skincare/guide', label: '피부관리 종류·가격 가이드' },
    ],
    relatedQuestions: ['skin-care-frequency', 'skin-waxing-guide', 'skin-brazilian-waxing', 'skin-aqua-peel'],
    disclaimer: '피부 상태에 따라 적정 주기는 다릅니다.',
    updated: '2026.08.17',
  },

  'skin-galvanic-device': {
    metaTitle: '갈바닉 기기는 어떤 관리에 쓰나요? | 자주 묻는 질문',
    lead: '미세 전류로 노폐물을 끌어내고 유효 성분을 밀어 넣는 기기입니다. 관리실용은 50~200만원 선이며 금속 시술 이력이 있으면 제한됩니다.',
    h1: '갈바닉 기기는 어떤 관리에 쓰나요?',
    bodies: [
      {
        h2: '두 가지 모드',
        blocks: [
          {
            type: 'table',
            headers: ['모드', '원리', '용도'],
            rows: [
              ['디스인크러스테이션 (−)', '노폐물을 끌어냄', '딥클렌징, 피지 제거'],
              ['이온토포레시스 (+)', '성분을 밀어 넣음', '앰플 침투'],
            ],
          },
          { type: 'p', text: '같은 관리 안에서 **먼저 비우고(−) 나중에 채우는(+)** 순서로 씁니다. 순서를 바꾸면 효과가 떨어집니다.' },
        ],
      },
      {
        h2: '모든 고객에게 쓸 수 있는 기기가 아닙니다',
        blocks: [
          { type: 'p', text: '갈바닉은 전류를 흘리는 기기라 **금기 사항이 명확합니다.** 다른 기기보다 문진이 중요합니다.' },
          {
            type: 'list',
            items: [
              '**체내 금속** — 심박조율기, 금속 보형물, 교정 장치',
              '**임신 중**',
              '**간질 병력**',
              '**피부 상처·염증 부위**',
              '**최근 시술 부위** — 필러·보톡스 직후',
            ],
          },
          { type: 'p', text: '특히 첫 번째는 반드시 확인하셔야 합니다. 문진표에 항목으로 넣어두고 구두로도 확인하는 게 안전합니다.' },
          { type: 'p', text: '그리고 앰플 선택도 중요합니다. 이온토포레시스는 **이온화되는 성분**이어야 침투가 됩니다. 아무 앰플이나 바르고 기기를 대면 전류만 흐르고 효과는 없습니다. 제조사가 갈바닉용으로 명시한 제품을 쓰세요.' },
        ],
      },
      {
        h2: '구매 시 확인할 것',
        blocks: [
          {
            type: 'list',
            items: [
              '두 모드 모두 지원하는지',
              '전류 세기 조절 단계',
              '프로브 종류 (얼굴용·바디용)',
              '전용 앰플 라인 유무와 단가',
            ],
          },
          { type: 'p', text: '가격이 50~200만원으로 다른 기기보다 낮아 **개업 초기에 갖추기 좋은 기기**입니다. 다만 단독으로 메뉴를 구성하기보다 다른 관리에 붙이는 방식이 일반적입니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/service/basic', label: '기본 피부관리 상세' },
      { href: '/skincare/cost', label: '피부관리샵 창업비용' },
    ],
    relatedQuestions: ['skin-device-priority', 'skin-rf-device', 'skin-ultrasound-device', 'skin-care-frequency'],
    disclaimer: '금기 사항이 있는 기기입니다. 시술 전 반드시 문진하세요.',
    updated: '2026.08.17',
  },

  'skin-clinic-coordinator': {
    metaTitle: '피부과 코디네이터는 어떤 일을 하나요? | 자주 묻는 질문',
    lead: '상담과 시술 안내, 예약·고객 관리를 담당합니다. 필수 자격은 없지만 피부미용사 자격이 있으면 상담 신뢰도와 급여에서 유리합니다.',
    h1: '피부과 코디네이터는 어떤 일을 하나요?',
    bodies: [
      {
        h2: '업무와 조건',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '내용'],
            rows: [
              ['주 업무', '상담, 시술 안내, 예약·수납, 사후 관리'],
              ['필수 자격', '없음'],
              ['우대', '피부미용사, 간호조무사, 상담 경력'],
              ['급여', '월 220~300만원 + 인센티브'],
              ['근무', '주 5~6일. 토요일 근무 많음'],
            ],
          },
        ],
      },
      {
        h2: '"관리사보다 편할 것"이라는 기대는 어긋납니다',
        blocks: [
          { type: 'p', text: '체력 소모가 적어 보여서 관리사에서 코디네이터로 전환을 고려하는 경우가 많은데, 성격이 완전히 다른 일입니다.' },
          { type: 'p', text: '코디네이터의 핵심 업무는 사실상 **상담과 매출**입니다. 고객에게 시술을 설명하고 결정을 이끌어내는 역할이라, 인센티브가 상담 실적에 연동되는 경우가 대부분입니다. 관리는 손으로 하지만 코디네이터는 말로 합니다. 이게 맞는 사람과 안 맞는 사람이 뚜렷하게 갈립니다.' },
          { type: 'p', text: '그리고 **의료기관 소속이라는 점**이 중요합니다. 시술 효과나 의학적 판단을 임의로 설명하면 안 되고, 의료진의 진료 범위를 넘는 안내는 문제가 됩니다. 관리실에서보다 발언 경계가 더 엄격합니다.' },
        ],
      },
      {
        h2: '준비하려면',
        blocks: [
          { type: 'p', text: '필수 자격은 없지만 실제 채용에서는 이런 배경이 유리합니다.' },
          {
            type: 'list',
            items: [
              '**피부미용사 자격** — 피부와 시술을 이해하고 상담하면 설득력이 다릅니다',
              '**상담·서비스 경력** — 업종 무관',
              '**CRM·엑셀** — 고객 관리 실무',
            ],
          },
          { type: 'p', text: '관리사 경력이 있다면 **상담 역량을 추가로 갖추는 방향**이 자연스러운 전환 경로입니다. 반대로 완전 미경험이라면 피부미용사 자격부터 취득하면서 업계 이해를 쌓는 편이 낫습니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/license', label: '미용사(피부) 자격증' },
      { href: '/skincare/revenue', label: '피부관리샵 예상수익' },
    ],
    relatedQuestions: ['skin-license-how-to', 'skin-esthetician-reality', 'skin-esthetician-salary', 'skin-spa-therapist'],
    disclaimer: '업무 범위와 급여는 병원에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'skin-spa-therapist': {
    metaTitle: '스파 테라피스트는 어떻게 되나요? | 자주 묻는 질문',
    lead: '피부미용사 자격을 기반으로 호텔·리조트 스파에 취업하는 경로가 일반적입니다. 어학 능력이 급여와 채용에 크게 작용합니다.',
    h1: '스파 테라피스트는 어떻게 되나요?',
    bodies: [
      {
        h2: '일반적인 진입 경로',
        blocks: [
          {
            type: 'table',
            headers: ['단계', '내용'],
            rows: [
              ['1', '미용사(피부) 국가기술자격 취득'],
              ['2', '에스테틱 실무 1~2년'],
              ['3', '바디·아로마 심화 과정'],
              ['4', '호텔·리조트 스파 지원'],
              ['5', '시니어 테라피스트 / 매니저'],
            ],
          },
          { type: 'p', text: '급여는 월 230~320만원 선이고, 호텔급은 복지와 근무 조건이 일반 에스테틱보다 나은 편입니다.' },
        ],
      },
      {
        h2: '자격증보다 어학이 갈랐습니다',
        blocks: [
          { type: 'p', text: '"어떤 자격증이 필요한가요"라는 질문을 많이 받는데, 호텔 스파 채용에서 실제로 당락을 가르는 건 **영어 회화**인 경우가 많습니다.' },
          { type: 'p', text: '고객의 상당수가 외국인 투숙객입니다. 관리 전 컨설테이션에서 피부 상태와 원하는 강도를 확인하고, 관리 중에도 소통해야 합니다. 기술이 좋아도 이 대화가 안 되면 배정이 제한됩니다.' },
          { type: 'p', text: 'CIDESCO 같은 국제 자격이 도움이 되긴 하지만, 그것도 **국내 취업 요건이 아니라 해외 근무나 신뢰도 측면**의 이야기입니다. 우선순위를 정하면 국가자격 → 실무 경력 → 어학 → 국제 자격 순입니다.' },
        ],
      },
      {
        h2: '일반 에스테틱과 다른 점',
        blocks: [
          {
            type: 'list',
            items: [
              '**바디 비중이 큽니다** — 얼굴 관리 위주였다면 체력 부담이 다릅니다',
              '**관리 시간이 깁니다** — 60~120분 코스가 기본',
              '**매뉴얼이 엄격합니다** — 브랜드 프로토콜을 그대로 따라야 합니다',
              '**판매 압박이 적은 편** — 일반 에스테틱 대비',
            ],
          },
          { type: 'p', text: '기술의 자율성은 낮지만 근무 환경과 안정성은 나은 편입니다. 어느 쪽을 중시하는지에 따라 선택이 갈립니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/license', label: '미용사(피부) 자격증' },
      { href: '/skincare/service/body', label: '바디 관리 시술 상세' },
    ],
    relatedQuestions: ['skin-license-how-to', 'skin-esthetician-salary', 'skin-esthetician-reality', 'skin-clinic-coordinator'],
    disclaimer: '채용 조건은 업장에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'skin-written-exam': {
    metaTitle: '피부미용사 필기시험 과목과 공부법은? | 자주 묻는 질문',
    lead: '피부학, 해부생리, 화장품학, 공중위생법규 등이 출제됩니다. 기출 중심으로 3~5주 준비하는 것이 일반적입니다.',
    h1: '피부미용사 필기시험 과목과 공부법은?',
    bodies: [
      {
        h2: '출제 영역',
        blocks: [
          {
            type: 'table',
            headers: ['영역', '주요 내용', '체감 난이도'],
            rows: [
              ['피부학', '피부 구조, 타입, 트러블', '중'],
              ['해부생리학', '세포, 골격, 근육, 순환', '상'],
              ['화장품학', '성분, 제형, 기능성', '중'],
              ['피부미용 이론', '관리 절차, 기기 원리', '하'],
              ['공중위생·소독', '감염병, 소독법', '하'],
              ['법규', '영업신고, 면허, 벌칙', '하'],
            ],
          },
        ],
      },
      {
        h2: '해부생리에서 막히는 게 정상입니다',
        blocks: [
          { type: 'p', text: '피부미용사 필기에서 대부분이 힘들어하는 구간이 해부생리학입니다. 용어가 낯설고 암기량이 많아서 여기서 진도가 멈춥니다.' },
          { type: 'p', text: '여기서 흔한 실수가 **해부생리를 완벽하게 끝내고 다음으로 넘어가려는 것**입니다. 문항 수 대비 투입 시간이 가장 비효율적인 영역이라, 여기에 3주를 쓰면 나머지를 못 봅니다.' },
          { type: 'p', text: '효율적인 순서는 이렇습니다.' },
          {
            type: 'list',
            items: [
              '**법규·소독·공중위생** 먼저 — 암기량 적고 확실한 점수',
              '**피부미용 이론** — 실기 준비와 겹쳐서 자연스럽게 익혀짐',
              '**화장품학·피부학** — 기출 반복',
              '**해부생리** — 기출에 나온 것만. 완벽 이해 포기',
            ],
          },
          { type: 'p', text: '전체를 이해하려 하지 말고 **합격선 넘기기**를 목표로 잡으세요.' },
        ],
      },
      {
        h2: '실기와 병행하는 게 빠릅니다',
        blocks: [
          { type: 'p', text: '필기 붙고 실기 시작하는 순서는 전체 기간을 늘립니다. 실기는 손에 익는 절대 시간이 필요하고, 필기는 이론이라 병행이 가능합니다.' },
          { type: 'p', text: '**실기 연습을 먼저 시작하고 필기를 그 사이에** 끼워 넣으세요. 게다가 실기 절차를 몸으로 익히면 피부미용 이론 파트가 저절로 이해됩니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/skincare/license', label: '미용사(피부) 자격증 상세' },
      { href: '/skincare/cost', label: '피부관리샵 창업비용' },
    ],
    relatedQuestions: ['skin-license-how-to', 'skin-esthetician-job', 'skin-esthetician-reality', 'skin-waxing-license'],
    disclaimer: '출제 기준은 변경될 수 있습니다. Q-Net 공고를 확인하세요.',
    updated: '2026.08.17',
  },

  // ── 7차 · 헤어 시술·관리 5편 ───────────────────────────────
  'hair-lift-vs-down-perm': {
    metaTitle: '리프펌과 다운펌은 무엇이 다른가요? | 자주 묻는 질문',
    lead: '리프펌은 앞머리에 볼륨을 세우고, 다운펌은 옆머리를 눌러 붙입니다. 방향이 정반대라 목적이 다릅니다.',
    h1: '리프펌과 다운펌은 무엇이 다른가요?',
    bodies: [
      {
        h2: '비교',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '리프펌', '다운펌'],
            rows: [
              ['방향', '위로 세움', '아래로 누름'],
              ['부위', '앞머리·정수리', '옆머리·구레나룻'],
              ['해결', '이마가 넓어 보임, 앞머리 처짐', '옆머리가 뜸'],
              ['유지', '2~3개월', '1~3개월'],
              ['가격', '8~15만원', '3~7만원'],
            ],
          },
        ],
      },
      {
        h2: '"둘 중 하나만 하면 된다"가 아닙니다',
        blocks: [
          { type: 'p', text: '많은 분이 하나를 고르는 문제로 생각하는데, **실제로는 같이 하는 경우가 더 많습니다.**' },
          { type: 'p', text: '앞머리는 볼륨이 없어 처지고, 옆머리는 위로 뜨는 조합이 흔하기 때문입니다. 이 경우 리프펌만 하면 옆이 그대로 붕 뜨고, 다운펌만 하면 앞이 여전히 납작합니다.' },
          { type: 'p', text: '디자이너에게 물어볼 때는 "리프펌 해주세요"가 아니라 **"앞은 볼륨이 없고 옆은 뜬다"**고 증상을 말하는 편이 정확합니다. 둘을 조합하거나, 부위별로 강도를 다르게 잡아줍니다.' },
          { type: 'p', text: '가격은 두 개를 함께 하면 12~20만원 선이지만, 각각 따로 받는 것보다 대체로 저렴합니다.' },
        ],
      },
      {
        h2: '시술 후 관리',
        blocks: [
          {
            type: 'list',
            items: [
              '48시간은 감지 않기 — 형태 고정',
              '리프펌은 말릴 때 뿌리를 세워가며 건조',
              '다운펌은 반대로 아래 방향으로 눌러가며 건조',
              '커트를 하면 펌 부분이 잘려나가므로 커트 → 펌 순서',
            ],
          },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/service/perm', label: '펌 종류 총정리' },
      { href: '/hair/service/cut', label: '커트 가격·주기 상세' },
    ],
    relatedQuestions: ['hair-down-perm', 'hair-shadow-perm', 'hair-side-part-perm', 'hair-perm-types'],
    disclaimer: '결과는 모질에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-setting-perm': {
    metaTitle: '셋팅펌과 일반펌은 무엇이 다른가요? | 자주 묻는 질문',
    lead: '셋팅펌은 열을 사용하는 열펌이라 말렸을 때 컬이 살아나고, 일반펌은 젖었을 때 컬이 가장 예쁩니다. 유지 기간도 셋팅펌이 깁니다.',
    h1: '셋팅펌과 일반펌은 무엇이 다른가요?',
    bodies: [
      {
        h2: '비교',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '셋팅펌 (열펌)', '일반펌 (콜드펌)'],
            rows: [
              ['컬이 살아나는 때', '말렸을 때', '젖었을 때'],
              ['유지', '4~6개월', '3~5개월'],
              ['시술 시간', '3~4시간', '2~3시간'],
              ['가격', '12~25만원', '8~18만원'],
              ['손상', '큼 (열 사용)', '상대적으로 적음'],
              ['적합', '탄력 있는 컬 원할 때', '자연스러운 웨이브'],
            ],
          },
        ],
      },
      {
        h2: '"셋팅펌이 더 좋은 펌"이 아닙니다',
        blocks: [
          { type: 'p', text: '가격이 비싸고 오래간다는 이유로 상위 시술로 여기는 경우가 많은데, **아침 루틴에 따라 정답이 갈립니다.**' },
          { type: 'p', text: '셋팅펌은 드라이로 말려야 컬이 살아납니다. 자연 건조하면 늘어져서 "펌이 풀렸다"고 느끼게 됩니다. 매일 아침 드라이할 시간이 없다면 비싼 돈을 주고 효과를 못 보는 셈입니다.' },
          { type: 'p', text: '반대로 일반펌은 젖은 상태에서 가장 예쁘고, 자연 건조나 디퓨저로 말려야 합니다. 뜨거운 바람으로 세게 말리는 습관이 있다면 부스스해집니다.' },
          { type: 'p', text: '**"아침에 드라이 하세요?"** 이 질문에 대한 답이 선택을 결정합니다.' },
        ],
      },
      {
        h2: '손상과 재시술',
        blocks: [
          { type: 'p', text: '셋팅펌은 열을 쓰기 때문에 손상이 큽니다. 탈색모라면 끊어질 위험이 있어 권장되지 않고, 염색과 같은 날 진행하는 것도 피해야 합니다.' },
          { type: 'p', text: '재시술은 최소 2~3개월 간격이며, 그 사이 클리닉을 병행하면 다음 펌이 잘 나옵니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/service/perm', label: '펌 종류 총정리' },
      { href: '/hair/service/bleach', label: '탈색 손상도' },
    ],
    relatedQuestions: ['hair-perm-types', 'hair-hippie-perm', 'hair-volume-magic', 'hair-bleaching-damage'],
    disclaimer: '결과와 손상도는 모발 상태에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-side-part-perm': {
    metaTitle: '가르마펌은 얼마나 가나요? 관리법 | 자주 묻는 질문',
    lead: '보통 2~3개월 유지됩니다. 앞머리 가르마를 고정하고 볼륨을 주는 남성 펌으로, 시술 1시간에 6~12만원 선입니다.',
    h1: '가르마펌은 얼마나 가나요? 관리법은?',
    bodies: [
      {
        h2: '기본 정보',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '내용'],
            rows: [
              ['유지', '2~3개월'],
              ['시술 시간', '1~1.5시간'],
              ['가격', '6~12만원'],
              ['필요 길이', '앞머리 7cm 이상'],
              ['궁합', '다운펌(옆머리)과 병행 많음'],
            ],
          },
        ],
      },
      {
        h2: '"가르마펌 하면 매일 세팅 안 해도 된다"는 오해입니다',
        blocks: [
          { type: 'p', text: '가르마 방향이 고정되니 손이 안 갈 거라 기대하는데, 실제로는 **드라이가 여전히 필요합니다.**' },
          { type: 'p', text: '가르마펌은 머리카락이 그 방향으로 눕도록 방향성을 잡아주는 시술이지, 볼륨까지 자동으로 만들어주지는 않습니다. 자고 일어나 눌린 상태 그대로 두면 납작합니다. 아침에 뿌리를 세워가며 드라이해야 시술 효과가 보입니다.' },
          { type: 'p', text: '대신 드라이 시간은 확실히 줄어듭니다. 펌 전에는 방향 잡는 데만 몇 분이 걸렸다면, 펌 후에는 뿌리만 세우면 알아서 자리를 잡습니다. **"안 해도 된다"가 아니라 "훨씬 빨라진다"**가 정확한 기대치입니다.' },
          { type: 'p', text: '그리고 앞머리 길이가 7cm 정도는 되어야 컬이 잡힙니다. 짧으면 효과가 거의 없으니, 커트 직후보다 조금 기른 뒤에 하세요.' },
        ],
      },
      {
        h2: '관리법',
        blocks: [
          {
            type: 'list',
            items: [
              '시술 후 48시간은 감지 않기',
              '말릴 때 가르마 반대 방향으로 한 번 넘겼다가 제자리로 — 뿌리가 섭니다',
              '매트한 왁스나 클레이 소량. 광택 제품은 눌린 느낌을 줍니다',
              '커트를 하면 펌 부분이 잘려나가므로 커트 → 펌 순서',
            ],
          },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/service/perm', label: '펌 종류 총정리' },
      { href: '/hair/service/styling', label: '스타일링 시술 상세' },
    ],
    relatedQuestions: ['hair-down-perm', 'hair-lift-vs-down-perm', 'hair-shadow-perm', 'hair-mens-hairstyle'],
    disclaimer: '유지 기간은 모질에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-hairdryer-guide': {
    metaTitle: '드라이기는 어떤 기준으로 고르나요? | 자주 묻는 질문',
    lead: '풍량과 냉풍 기능 두 가지가 핵심입니다. 가정용은 5~20만원, 미용실용은 15~40만원 선이며 와트수보다 풍량이 중요합니다.',
    h1: '드라이기는 어떤 기준으로 고르나요?',
    bodies: [
      {
        h2: '확인할 항목',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '기준', '이유'],
            rows: [
              ['풍량', '강할수록 빨리 마름', '열 노출 시간이 줄어듦'],
              ['냉풍', '독립 버튼 권장', '마무리 고정에 필수'],
              ['무게', '500g 내외', '미용실용은 하루 종일 듦'],
              ['노즐', '집중·디퓨저', '스타일에 따라'],
              ['소음', 'dB 표기 확인', '가정용은 체감 큼'],
            ],
          },
        ],
      },
      {
        h2: '"와트수가 높으면 좋다"가 아닙니다',
        blocks: [
          { type: 'p', text: '1,800W, 2,000W 같은 숫자를 비교하는 경우가 많은데, 와트는 **소비 전력**이지 성능이 아닙니다.' },
          { type: 'p', text: '실제로 머리를 빨리 말리는 건 **풍량**입니다. 같은 와트라도 모터와 팬 설계에 따라 풍량이 크게 다릅니다. 최근 고가 제품들이 와트수는 낮으면서 더 빨리 마르는 이유가 여기 있습니다.' },
          { type: 'p', text: '그리고 **온도가 높을수록 빨리 마른다는 것도 오해**입니다. 고온으로 말리면 표면만 마르고 속은 젖은 상태가 남습니다. 그 상태로 스타일링하면 모발 내부 수분이 급격히 증발하면서 손상됩니다.' },
          { type: 'p', text: '권장 순서는 이렇습니다. 수건으로 물기 제거 → 중온·강풍으로 80% 건조 → **냉풍으로 마무리**. 냉풍이 큐티클을 닫아 윤기와 형태를 잡아줍니다. 이 마지막 단계를 생략하는 분이 대부분인데, 체감 차이가 가장 큰 구간입니다.' },
        ],
      },
      {
        h2: '미용실용을 고를 때',
        blocks: [
          { type: 'p', text: '하루에 수십 번 드는 도구라 **무게와 코드 길이**가 실무 만족도를 좌우합니다. 3m 이상 코드, 500g 내외 무게, 걸이 고리를 확인하세요.' },
          { type: 'p', text: '내구성 문제로 필터 청소가 쉬운 구조인지도 봐야 합니다. 필터가 막히면 풍량이 떨어지고 모터가 과열됩니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/equipment/curling-iron', label: '고데기 굵기·소재 상세' },
      { href: '/hair/equipment/salon', label: '창업 장비 예산' },
    ],
    relatedQuestions: ['hair-curling-iron', 'hair-bleaching-damage', 'hair-wholesale', 'hair-scalp-scaling'],
    disclaimer: '성능은 제품과 모발 상태에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-booking-system': {
    metaTitle: '미용실 예약은 어떻게 관리하나요? | 자주 묻는 질문',
    lead: '네이버 예약이 국내 미용실 표준입니다. 전용 예약 앱은 월 3~10만원이며, 1인 매장일수록 예약 시스템이 필수입니다.',
    h1: '미용실 예약은 어떻게 관리하나요?',
    bodies: [
      {
        h2: '수단별 비교',
        blocks: [
          {
            type: 'table',
            headers: ['수단', '비용', '장점', '한계'],
            rows: [
              ['네이버 예약', '무료~수수료', '검색 유입과 직결', '커스텀 제한'],
              ['전용 예약 앱', '월 3~10만원', '고객 카드·매출 관리', '별도 유입 없음'],
              ['전화', '무료', '진입장벽 없음', '시술 중 응대 불가'],
              ['카카오 채널', '무료', '재방문 안내 편리', '자동화 약함'],
            ],
          },
          { type: 'p', text: '대부분 **네이버 예약 + 전용 앱** 조합으로 갑니다. 유입은 네이버, 관리는 앱입니다.' },
        ],
      },
      {
        h2: '1인 매장에서 전화를 받는 건 불가능합니다',
        blocks: [
          { type: 'p', text: '가장 자주 놓치는 부분입니다. 염색약을 바르는 중에 전화가 오면 못 받고, **못 받은 전화는 그대로 이탈**입니다. 다시 걸어오는 고객은 절반도 안 됩니다.' },
          { type: 'p', text: '그래서 1인 매장은 예약 시스템이 선택이 아니라 필수입니다. 전화 응대 자체를 없애고 온라인으로만 받는 구조로 만들어야 스케줄이 지켜집니다.' },
          { type: 'p', text: '두 번째로 중요한 게 **시술 시간 표준화**입니다. 커트 40분, 펌 2시간 30분 식으로 메뉴별 소요 시간을 정해두고 그 단위로만 예약을 받으세요. 이게 없으면 예약이 겹치거나 하루가 계속 밀립니다.' },
          { type: 'p', text: '시술 사이 **15분 정리 시간**도 미리 비워두셔야 합니다. 이걸 안 넣으면 오후부터 무너집니다.' },
        ],
      },
      {
        h2: '노쇼를 줄이는 방법',
        blocks: [
          {
            type: 'list',
            items: [
              '**전날 자동 알림** — 대부분의 노쇼는 잊어버려서 생깁니다',
              '**예약금** — 펌·염색처럼 시간이 긴 시술에만 적용',
              '**취소 기한 명시** — 예약 시점에 고지',
              '**반복 노쇼 고객 관리** — 예약 시스템에 메모 기능 활용',
            ],
          },
          { type: 'p', text: '시술 후 다음 예약을 그 자리에서 잡는 습관도 효과가 큽니다. 재방문 주기가 안정됩니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/revenue', label: '헤어 수익 구조' },
      { href: '/hair/cost', label: '미용실 창업비용' },
    ],
    relatedQuestions: ['hair-wholesale', 'hair-chair-shampoo-cost', 'hair-shampoo-plumbing', 'hair-scissors-guide'],
    disclaimer: '서비스 요금과 정책은 변경될 수 있습니다.',
    updated: '2026.08.17',
  },

  // ── 7차 · 헤어 자격증·창업 7편 ─────────────────────────────
  'hair-become-designer': {
    metaTitle: '헤어 디자이너가 되려면 무엇부터 해야 하나요? | 자주 묻는 질문',
    lead: '면허 취득 후 스텝으로 입사해 승급하는 경로가 표준입니다. 스텝 1~2년, 디자이너 승급까지 보통 2~4년이 걸립니다.',
    h1: '헤어 디자이너가 되려면 무엇부터 해야 하나요?',
    bodies: [
      {
        h2: '승급 단계',
        blocks: [
          {
            type: 'table',
            headers: ['단계', '하는 일', '기간'],
            rows: [
              ['스텝·인턴', '샴푸, 와인딩, 정리, 응대', '1~2년'],
              ['주니어', '간단한 시술 시작', '2~3년차'],
              ['디자이너', '지명 고객 보유', '3~4년차~'],
              ['실장', '팀 관리 + 시술', '5년차~'],
            ],
          },
        ],
      },
      {
        h2: '승급을 결정하는 건 근속 연수가 아닙니다',
        blocks: [
          { type: 'p', text: '"몇 년 하면 디자이너가 되나요"라는 질문을 많이 하는데, 시간이 채워진다고 자동으로 올라가지 않습니다.' },
          { type: 'p', text: '승급 테스트는 보통 커트·펌·염색 실기와 고객 응대를 봅니다. 그런데 **연습할 시간은 근무 시간 밖에 있습니다.** 마감 후 남아서 마네킹으로 연습하는 사람과, 퇴근하는 사람의 차이가 2년 뒤에 확연히 갈립니다.' },
          { type: 'p', text: '그래서 취업할 매장을 고를 때 급여만큼 중요한 게 이겁니다.' },
          {
            type: 'list',
            items: [
              '**승급 기준이 문서로 있는가** — "실력 되면"이라는 말만 있으면 기준이 없다는 뜻입니다',
              '**연습 환경 지원** — 마네킹, 연습 공간, 모델 수급',
              '**최근 승급 사례** — 마지막으로 승급한 스텝이 몇 년차였는지',
            ],
          },
          { type: 'p', text: '세 번째 질문에 답을 못 하는 매장이면 다시 생각해보세요.' },
        ],
      },
      {
        h2: '스텝 기간에 같이 쌓아야 할 것',
        blocks: [
          { type: 'p', text: '기술만 쌓으면 절반입니다. 디자이너가 된 뒤 수입을 결정하는 건 **지명 고객 수**인데, 이건 승급 후에 갑자기 생기지 않습니다.' },
          { type: 'p', text: '스텝 때부터 담당한 고객에게 인상을 남기고, 개인 SNS에 작업물을 올려두세요. 승급하는 날 시작 지점이 완전히 달라집니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/career/how-to', label: '디자이너 되는법 로드맵' },
      { href: '/hair/career/salary', label: '헤어 디자이너 연봉' },
    ],
    relatedQuestions: ['hair-become-beautician', 'hair-designer-reality', 'hair-designer-salary', 'hair-freelance-designer'],
    disclaimer: '승급 기준과 기간은 매장에 따라 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-license-issue': {
    metaTitle: '미용사 면허증은 어떻게 발급받나요? | 자주 묻는 질문',
    lead: '국가기술자격 취득 후 주소지 또는 사업장 관할 시·군·구청에 신청합니다. 자격증만으로는 영업할 수 없고 면허가 별도로 필요합니다.',
    h1: '미용사 면허증은 어떻게 발급받나요?',
    bodies: [
      {
        h2: '신청 절차',
        blocks: [
          {
            type: 'table',
            headers: ['단계', '내용'],
            rows: [
              ['1', '미용사(또는 이용사) 국가기술자격 취득'],
              ['2', '관할 시·군·구청 위생 담당 부서 방문'],
              ['3', '면허 신청서 + 구비서류 제출'],
              ['4', '심사 후 면허증 교부 (보통 1~2주)'],
            ],
          },
          { type: 'p', text: '일반적인 구비서류는 자격증 사본, 신분증, 사진, 건강진단서(또는 이에 준하는 서류)입니다. **관할마다 요구 서류가 조금씩 다르므로 방문 전 전화로 확인**하시는 게 확실합니다.' },
        ],
      },
      {
        h2: '자격증과 면허를 같은 것으로 아는 경우가 많습니다',
        blocks: [
          { type: 'p', text: '가장 흔하고, 가장 비싸게 치르는 오해입니다.' },
          { type: 'p', text: 'Q-Net에서 받는 것은 **국가기술자격증**이고, 영업에 필요한 것은 그것을 근거로 지자체가 발급하는 **미용사 면허**입니다. 둘은 발급 기관도 근거 법령도 다릅니다.' },
          { type: 'p', text: '자격증만 들고 구청에 영업신고를 하러 가면 반려됩니다. 이미 매장 계약과 인테리어를 끝낸 상태라면 면허 발급까지 1~2주를 그냥 기다려야 합니다.' },
          { type: 'p', text: '**합격하면 바로 면허부터 신청하세요.** 개업 계획이 없어도 마찬가지입니다. 나중에 필요할 때 서류를 다시 챙기는 것보다 훨씬 편합니다.' },
        ],
      },
      {
        h2: '분실·재발급과 게시 의무',
        blocks: [
          { type: 'p', text: '면허증을 분실했다면 같은 절차로 재발급 신청이 가능합니다.' },
          { type: 'p', text: '그리고 영업을 시작하면 **면허증을 영업소 안에 게시**해야 합니다. 위생 점검 항목이기도 하므로 원본을 잘 보관하세요.' },
          { type: 'p', text: '주소가 바뀌거나 개명한 경우에도 변경 신고가 필요할 수 있으니 관할 부서에 확인하시기 바랍니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/license/issuance', label: '면허증 발급 절차' },
      { href: '/hair/license/difference', label: '미용사와 이용사 차이' },
    ],
    relatedQuestions: ['hair-license-how-to', 'hair-become-beautician', 'hair-written-exam', 'hair-startup-steps'],
    disclaimer: '구비서류와 절차는 관할 지자체에 확인하시기 바랍니다.',
    updated: '2026.08.17',
  },

  'hair-written-exam': {
    metaTitle: '이용사 필기시험 과목은 무엇인가요? | 자주 묻는 질문',
    lead: '이용 이론, 공중보건, 소독, 피부·모발 과학, 공중위생법규가 출제 범위입니다. 객관식이며 준비 기간은 2~4주가 일반적입니다.',
    h1: '이용사 필기시험 과목은 무엇인가요?',
    bodies: [
      {
        h2: '출제 영역',
        blocks: [
          {
            type: 'table',
            headers: ['영역', '주요 내용'],
            rows: [
              ['이용 이론', '커트·펌·염색 원리, 도구, 시술 절차'],
              ['공중보건학', '감염병, 보건 행정, 환경위생'],
              ['소독학', '소독 방법, 소독약 종류와 특성'],
              ['피부·모발 과학', '피부 구조, 모발 구조와 성장'],
              ['공중위생관리법규', '영업신고, 면허, 위생교육, 벌칙'],
            ],
          },
          { type: 'p', text: '세부 출제 기준은 회차마다 공고되므로 **Q-Net 출제기준**을 먼저 내려받아 확인하세요.' },
        ],
      },
      {
        h2: '이론서를 처음부터 읽으면 오래 걸립니다',
        blocks: [
          { type: 'p', text: '필기는 이론서를 정독하는 방식보다 **기출문제부터 푸는 쪽**이 훨씬 빠릅니다.' },
          { type: 'p', text: '출제 범위가 넓어 보이지만 실제로 반복 출제되는 영역이 뚜렷합니다. 특히 **소독학과 법규**는 문항 수 대비 암기량이 적어 점수를 확보하기 좋은 구간입니다. 여기를 먼저 잡고 나머지를 채우는 순서가 효율적입니다.' },
          { type: 'p', text: '반대로 피부·모발 과학은 범위가 넓고 문항 수는 적어서, 처음부터 여기에 시간을 쏟으면 전체 진도가 밀립니다.' },
          { type: 'p', text: '기출 3~5회분을 먼저 풀어보고 **틀린 영역만 이론서로 보충**하세요. 이 방식이면 2~4주로 충분합니다.' },
        ],
      },
      {
        h2: '법규 파트는 실무에서도 씁니다',
        blocks: [
          { type: 'p', text: '공중위생관리법규는 시험을 위한 암기로만 끝나지 않습니다. 나중에 개업할 때 영업신고, 위생교육 주기, 면허 요건, 벌칙을 그대로 다시 봐야 합니다.' },
          { type: 'p', text: '특히 **제8조(면허 없이 개설 불가)**와 **제17조(위생교육)**, **제20조(벌칙)**는 실무 판단에 직결되므로 이해하고 넘어가시는 게 좋습니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/license/written', label: '이용사 필기 출제 영역 상세' },
      { href: '/hair/license/beautician', label: '미용사 자격증 정보' },
    ],
    relatedQuestions: ['hair-license-how-to', 'hair-practical-exam', 'hair-license-issue', 'hair-become-beautician'],
    disclaimer: '출제 기준은 변경될 수 있습니다. Q-Net 공고를 확인하세요.',
    updated: '2026.08.17',
  },

  'hair-practical-exam': {
    metaTitle: '이용사 실기시험 과제와 준비물은? | 자주 묻는 질문',
    lead: '커트, 퍼머넌트, 셰이빙 등이 과제로 출제되며 마네킹과 도구는 수험자가 지참합니다. 준비물 누락이 실격 사유가 되므로 공고 확인이 필수입니다.',
    h1: '이용사 실기시험 과제와 준비물은?',
    bodies: [
      {
        h2: '준비물 유형',
        blocks: [
          {
            type: 'table',
            headers: ['구분', '예시'],
            rows: [
              ['두상', '마네킹, 홀더'],
              ['커트 도구', '가위, 틴닝가위, 빗, 클리퍼'],
              ['펌 도구', '로드, 고무밴드, 엔드페이퍼'],
              ['셰이빙', '면도기, 브러시, 컵'],
              ['위생', '소독약, 타월, 위생복'],
            ],
          },
          { type: 'p', text: '**정확한 규격과 수량은 회차별 공개 문제와 지참 준비물 목록에 명시됩니다.** 반드시 Q-Net에서 해당 회차 자료를 내려받아 확인하세요. 규격이 다르면 사용이 제한될 수 있습니다.' },
        ],
      },
      {
        h2: '떨어지는 이유는 기술보다 시간과 위생입니다',
        blocks: [
          { type: 'p', text: '실기에서 탈락하는 분들의 이야기를 들어보면 "기술이 부족해서"가 아닌 경우가 많습니다.' },
          { type: 'p', text: '**시간 초과**가 첫 번째입니다. 정해진 시간 안에 과제를 끝내야 하는데, 연습할 때 타이머 없이 하면 실제 시험에서 무조건 밀립니다. 처음부터 시간을 재고 연습하세요.' },
          { type: 'p', text: '**위생 감점**이 두 번째입니다. 도구 소독, 바닥에 떨어진 머리카락 정리, 위생복 착용 상태까지 채점 대상입니다. 기술이 좋아도 여기서 깎이면 합격선을 못 넘습니다.' },
          { type: 'p', text: '**준비물 누락**이 세 번째입니다. 이건 아예 실격이 될 수 있습니다. 전날 목록을 보며 하나씩 체크하세요.' },
        ],
      },
      {
        h2: '연습 방법',
        blocks: [
          {
            type: 'list',
            items: [
              '마네킹은 시험 규격과 같은 것으로 연습',
              '**타이머 필수** — 과제별 목표 시간을 정해두고 반복',
              '위생 절차를 시술 과정에 통째로 붙여서 몸에 익히기',
              '학원이라면 수업 외 자유 연습실을 쓸 수 있는지 확인',
            ],
          },
          { type: 'p', text: '기술은 반복이 해결하지만 시간 배분과 위생 습관은 의식적으로 만들어야 합니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/license/practical', label: '이용사 실기 과제 상세' },
      { href: '/hair/equipment/scissors', label: '미용 가위 발수·관리법' },
    ],
    relatedQuestions: ['hair-license-how-to', 'hair-written-exam', 'hair-license-issue', 'hair-become-designer'],
    disclaimer: '과제와 준비물은 회차마다 변경됩니다. Q-Net 공고를 확인하세요.',
    updated: '2026.08.17',
  },

  'hair-startup-steps': {
    metaTitle: '미용실 창업은 무엇부터 준비해야 하나요? | 자주 묻는 질문',
    lead: '면허 확보가 첫 단계이고, 자리를 계약하기 전 배수·전기 조건 확인이 가장 중요합니다. 준비 기간은 보통 3~6개월입니다.',
    h1: '미용실 창업은 무엇부터 준비해야 하나요?',
    bodies: [
      {
        h2: '준비 순서',
        blocks: [
          {
            type: 'table',
            headers: ['순서', '항목', '소요'],
            rows: [
              ['1', '미용사(또는 이용사) 면허 확보', '이미 보유 시 생략'],
              ['2', '상권 탐색', '1~2개월'],
              ['3', '배수·전기 조건 확인', '계약 전 필수'],
              ['4', '임대차 계약', '—'],
              ['5', '위생교육 이수', '3시간'],
              ['6', '인테리어·설비 공사', '3~6주'],
              ['7', '미용업(이용업) 영업신고', '1~2주'],
              ['8', '사업자등록', '며칠'],
              ['9', '네이버 플레이스·SNS', '공사 기간 중 병행'],
            ],
          },
        ],
      },
      {
        h2: '3번을 건너뛰면 예산이 무너집니다',
        blocks: [
          { type: 'p', text: '미용실 창업이 다른 업종과 다른 지점이 여기입니다. **샴푸대 때문에 급배수가 필요합니다.**' },
          { type: 'p', text: '자리에 따라 배수관이 멀거나 경사를 못 잡으면 바닥을 높이거나 펌프를 넣어야 하고, 수백만원이 예고 없이 붙습니다. 전기도 마찬가지입니다. 드라이기와 열기구를 동시에 쓰면 승압이 필요할 수 있습니다.' },
          { type: 'p', text: '**계약 전에 인테리어 업체를 데리고 현장을 한 번 보게 하세요.** 며칠 늦어지는 것보다 훨씬 낫습니다. 좋은 자리를 놓칠까 봐 서두르는 마음이 가장 비쌉니다.' },
          { type: 'p', text: '특히 2층 이상, 구축 상가, 원래 사무실이던 자리는 반드시 확인하셔야 합니다.' },
        ],
      },
      {
        h2: '자금은 창업비용 + 6개월',
        blocks: [
          { type: 'p', text: '소형 1인 매장은 보증금 포함 2,000~4,000만원, 3~4석은 5,000만~1억원 선입니다.' },
          { type: 'p', text: '여기에 **별도로 6개월치 고정비와 생활비**를 확보하세요. 오픈 초기 고객이 붙기 전 구간이 있고, 이 자금이 없어서 닫는 경우가 가장 많습니다.' },
          { type: 'p', text: 'SNS와 네이버 플레이스는 공사 기간 중에 이미 돌아가고 있어야 합니다. 개업일에 팔로워 0명이면 첫 고객까지 한두 달이 더 밀립니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/cost', label: '미용실 창업비용' },
      { href: '/hair/equipment/salon', label: '창업 장비 예산' },
    ],
    relatedQuestions: ['hair-startup-cost', 'hair-solo-salon', 'hair-become-beautician', 'hair-license-issue'],
    disclaimer: '절차와 요건은 관할 지자체에 확인하시기 바랍니다.',
    updated: '2026.08.17',
  },

  'hair-study-abroad': {
    metaTitle: '미용 유학은 어디로 가고 비용은 얼마인가요? | 자주 묻는 질문',
    lead: '영국·일본·미국이 주요 행선지이며 1년 과정 기준 총 3,000만~6,000만원 선입니다. 국내 영업에는 미용사 면허가 별도로 필요합니다.',
    h1: '미용 유학은 어디로 가고 비용은 얼마인가요?',
    bodies: [
      {
        h2: '국가별 개요',
        blocks: [
          {
            type: 'table',
            headers: ['국가', '특징', '1년 총비용'],
            rows: [
              ['영국', '커트 이론 체계로 유명', '4,000만~6,000만원'],
              ['일본', '섬세한 시술·서비스', '3,000만~4,500만원'],
              ['미국', '규모·다양성', '4,000만~6,000만원'],
              ['호주', '워홀 병행 가능', '3,000만~5,000만원'],
            ],
          },
          { type: 'p', text: '학비, 체류비, 항공, 비자를 모두 합친 추정치입니다. 도시와 과정에 따라 편차가 큽니다.' },
        ],
      },
      {
        h2: '해외 자격은 국내 영업 요건이 아닙니다',
        blocks: [
          { type: 'p', text: '가장 자주 오해하는 부분입니다. 해외에서 미용 과정을 수료하고 현지 자격을 받아도, **한국에서 미용실을 열려면 미용사 면허가 따로 필요합니다.**' },
          { type: 'p', text: '공중위생관리법이 요구하는 면허의 근거는 국내 국가기술자격입니다. 유학 경력은 이 요건을 대체하지 않습니다.' },
          { type: 'p', text: '그래서 순서를 이렇게 잡는 분들이 많습니다. **국내 자격·면허를 먼저 확보하고, 그다음에 기술 심화를 위해 유학.** 반대로 하면 귀국 후 다시 몇 개월을 자격 준비에 써야 합니다.' },
          { type: 'p', text: '또 하나. 유학이 국내 취업에서 결정적인 스펙이 되지는 않습니다. 미용실 채용은 **실기 테스트와 포트폴리오**로 판단하는 경우가 대부분입니다. 유학 자체보다 그곳에서 무엇을 익혔는지가 중요합니다.' },
        ],
      },
      {
        h2: '유학이 실제로 유리한 경우',
        blocks: [
          {
            type: 'list',
            items: [
              '**해외 취업이 목표** — 현지 자격과 비자 경로가 연결됩니다',
              '**특정 기술 체계를 배우고 싶을 때** — 영국식 커트 이론 등',
              '**어학을 함께 얻고 싶을 때** — 호텔·글로벌 브랜드 취업에 작용',
            ],
          },
          { type: 'p', text: '단순히 "경력을 화려하게"가 목적이라면 비용 대비 효율이 낮습니다. 같은 예산으로 국내에서 심화 과정을 여러 개 듣는 편이 나을 수 있습니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/license/beautician', label: '미용사 자격증 정보' },
      { href: '/hair/career/how-to', label: '디자이너 되는법 로드맵' },
    ],
    relatedQuestions: ['hair-become-beautician', 'hair-license-how-to', 'hair-become-designer', 'hair-scalp-certificate'],
    disclaimer: '비용과 비자 요건은 국가·연도에 따라 크게 다릅니다.',
    updated: '2026.08.17',
  },

  'hair-scalp-certificate': {
    metaTitle: '두피관리사 자격증은 어떤 도움이 되나요? | 자주 묻는 질문',
    lead: '국가자격이 아닌 민간자격입니다. 단독으로 개업할 수는 없지만 미용실 부가 메뉴로 객단가를 올리는 데 활용됩니다.',
    h1: '두피관리사 자격증은 어떤 도움이 되나요?',
    bodies: [
      {
        h2: '자격 성격',
        blocks: [
          {
            type: 'table',
            headers: ['항목', '내용'],
            rows: [
              ['구분', '민간자격 (국가자격 아님)'],
              ['발급', '협회·아카데미'],
              ['취득 기간', '1~3개월'],
              ['비용', '30~100만원'],
              ['단독 개업', '불가 — 미용사 면허 필요'],
              ['실제 용도', '미용실 부가 메뉴, 전문성 증명'],
            ],
          },
        ],
      },
      {
        h2: '"두피관리샵을 열 수 있다"는 오해입니다',
        blocks: [
          { type: 'p', text: '민간자격증 하나로 두피 전문점을 열 수 있다고 안내하는 경우가 있는데, 사실이 아닙니다.' },
          { type: 'p', text: '두피 관리는 미용업 범위에 해당합니다. 따라서 **미용사 면허와 미용업 영업신고**가 필요하고, 민간 두피관리사 자격증은 신고 서류로 인정되지 않습니다.' },
          { type: 'p', text: '더 중요한 경계가 하나 더 있습니다. **탈모는 의료 영역입니다.** 두피 관리는 두피 환경을 정돈하는 것이지 탈모를 치료하는 것이 아닙니다. "발모", "치료", "탈모 개선" 같은 표현을 쓰면 의료법 문제가 됩니다.' },
          { type: 'p', text: '고객이 탈모를 호소하면 관리로 해결하려 하지 말고 **피부과 진료를 먼저 권하는 것**이 맞습니다. 이 선을 지키는 게 본인을 보호합니다.' },
        ],
      },
      {
        h2: '그럼에도 취득할 만한 경우',
        blocks: [
          { type: 'p', text: '**이미 미용사 면허가 있다면** 실용성이 있습니다.' },
          {
            type: 'list',
            items: [
              '커트·펌 고객에게 **두피 스케일링을 붙여** 객단가를 올릴 수 있습니다',
              '재방문 주기를 만들기 좋은 메뉴입니다 (2~4주)',
              '두피·모발 지식이 있으면 시술 상담의 설득력이 달라집니다',
            ],
          },
          { type: 'p', text: '반대로 면허가 없는 상태에서 이것부터 따는 건 순서가 잘못됐습니다. **미용사 국가자격 → 면허 → 그 위에 두피 과정**입니다.' },
        ],
      },
    ],
    relatedInfo: [
      { href: '/hair/scalp', label: '두피관리 정보' },
      { href: '/hair/scalp/hairloss', label: '탈모 관리와 진료 경계' },
    ],
    relatedQuestions: ['hair-license-how-to', 'hair-become-beautician', 'hair-study-abroad', 'hair-license-issue'],
    disclaimer: '자격의 효력과 업무 범위는 관할 기관에 확인하시기 바랍니다.',
    updated: '2026.08.17',
  },
}

/** 발행된 상세 slug 목록 (사이트맵·허브 링크 판단용) */
export const PUBLISHED_SLUGS = Object.keys(QNA_DETAILS)

export const isPublished = (slug: string) => slug in QNA_DETAILS

export const itemsBySection = (key: SectionKey) => QNA_ITEMS.filter((i) => i.section === key)

export const findItem = (slug: string) => QNA_ITEMS.find((i) => i.slug === slug)
