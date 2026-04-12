import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '네일아트 창업 Q&A | 창업 전 궁금한 것 다 물어보세요',
  description: '네일아트 창업을 준비하면서 많이 묻는 질문과 답변을 정리했습니다. 비용, 자격증, 수익, 상권까지 실전 Q&A.',
  alternates: { canonical: '/qna' },
}

const OPEN_CHAT_URL = '#'

const qnaList = [
  {
    q: '네일아트 창업에 자격증이 꼭 필요한가요?',
    a: '법적으로는 필수가 아닙니다. 하지만 미용업 신고 시 자격증 사본을 제출하면 고객 신뢰도가 높아지고, 일부 공간 임차 시 요구하는 경우도 있습니다. 네일 미용사 국가기술자격증(Q-Net) 취득을 강력히 권장합니다.',
  },
  {
    q: '1인 네일샵 최소 창업비용은 얼마인가요?',
    a: '공유 작업실 이용 기준으로 최소 300~500만원으로도 시작 가능합니다. 독립 매장 기준으로는 보증금 + 인테리어 + 장비 + 재료비 합산 최소 680만원 이상이 필요합니다. 중고 장비 활용, 셀프 인테리어 시 비용을 크게 줄일 수 있습니다.',
  },
  {
    q: '네일 미용사 자격증 시험은 얼마나 자주 있나요?',
    a: '연간 4회(분기별) 시행됩니다. Q-Net(한국산업인력공단) 홈페이지에서 일정을 확인할 수 있습니다. 필기 합격 후 2년 내 실기 합격이 필요합니다.',
  },
  {
    q: '1인 네일샵 평균 월 수익은 어느 정도인가요?',
    a: '하루 고객 3~5명 기준, 월 매출 300~500만원, 고정비(월세·재료비 등) 약 150~200만원 제외 후 순수익 150~350만원 수준입니다. 입지와 단가 전략에 따라 크게 차이납니다.',
  },
  {
    q: '네일샵 창업 전 위생교육을 받아야 하나요?',
    a: '네, 미용업 개설 신고 전 8시간 위생교육이 의무입니다. 대한미용사회 또는 온라인 교육기관에서 이수할 수 있습니다. 교육 수료증은 미용업 신고 시 필요합니다.',
  },
  {
    q: '네일샵 창업 시 어떤 형태가 유리한가요? 독립 매장 vs 공유 작업실',
    a: '초기 자금이 부족하다면 공유 작업실(네일 공방)을 추천합니다. 보증금 없이 월 30~80만원 수준의 자리 임차료만 내면 시작 가능합니다. 고객층이 안정되고 수익이 확보된 후 독립 매장으로 확장하는 것이 리스크를 줄이는 방법입니다.',
  },
  {
    q: '사업자 등록은 어떻게 하나요?',
    a: '홈택스(hometax.go.kr)에서 온라인으로 신청하거나, 관할 세무서에 방문해 개인사업자 등록을 합니다. 이후 관할 구청 위생과에 미용업 신고를 별도로 해야 합니다.',
  },
  {
    q: '네일샵 마케팅은 어떻게 시작해야 하나요?',
    a: '인스타그램 계정 개설 후 시술 사진을 꾸준히 올리는 것이 가장 효과적입니다. 개업 전 네이버 플레이스에 등록하고, 오픈 초기에는 할인 이벤트로 첫 방문 고객을 확보하세요. 단골 고객 1명이 신규 고객 3명을 데려오는 효과를 기억하세요.',
  },
  {
    q: '네일샵 인테리어는 얼마나 투자해야 하나요?',
    a: '셀프 인테리어 시 70~200만원, 업체 의뢰 시 500~1,500만원 수준입니다. 조명, 환기 설비, 소독 시설에 우선 투자하고 나머지는 최소화하는 것을 권장합니다. 인테리어보다 기술과 마케팅이 수익에 훨씬 큰 영향을 줍니다.',
  },
  {
    q: '초기 재료비는 어느 정도 준비해야 하나요?',
    a: '젤 컬러(50~100색), 베이스·탑 코트, 팁, 파일 등 기본 세팅에 50~150만원이 필요합니다. 도매 구입 시 30~40% 절감 가능합니다. 처음에는 기본 색상과 기능 위주로 세팅하고, 수요에 따라 추가 구비하는 것을 권장합니다.',
  },
  {
    q: '네일샵 손익분기점은 어느 정도인가요?',
    a: '월세(50~150만원), 재료비(50~100만원), 보험·통신비 등 고정비 합산 약 150~200만원입니다. 시술 단가 5만원 기준으로 월 30~40건 이상 시술 시 손익분기점을 넘깁니다. 하루 2명 이상 고객이면 기본 유지가 가능합니다.',
  },
  {
    q: '네일샵 창업에서 가장 흔한 실패 원인은 무엇인가요?',
    a: '가장 흔한 실패 원인은 과도한 초기 투자(인테리어 과잉), 상권 분석 없는 입지 선택, 마케팅 포기, 가격 경쟁입니다. 최소 6개월치 생활비를 여유 자금으로 남겨두고, 오픈 전부터 SNS 활동을 시작하는 것이 중요합니다.',
  },
]

export default function QnaPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업 Q&A</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">네일아트 창업 Q&A</h1>
      <p className="text-stone-500 mb-10">창업 준비 중 가장 많이 묻는 질문과 답변을 모았습니다.</p>

      <section className="mb-12 space-y-4">
        {qnaList.map((item, i) => (
          <div key={i} className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
            <p className="flex items-start gap-3 font-bold text-stone-900 mb-3">
              <span className="shrink-0 w-6 h-6 bg-stone-800 text-white rounded-full flex items-center justify-center text-xs font-extrabold">Q</span>
              {item.q}
            </p>
            <p className="flex items-start gap-3 text-[13px] text-stone-600 leading-relaxed">
              <span className="shrink-0 w-6 h-6 bg-stone-100 text-stone-500 rounded-full flex items-center justify-center text-xs font-extrabold">A</span>
              {item.a}
            </p>
          </div>
        ))}
      </section>

      <section className="bg-stone-900 rounded-3xl p-10 text-center text-white">
        <h2 className="text-xl font-extrabold mb-2">더 궁금한 것이 있으신가요?</h2>
        <p className="text-stone-400 mb-5 text-sm">실제 운영 중인 창업자가 직접 답변해드립니다.</p>
        <a href={OPEN_CHAT_URL} className="inline-flex items-center gap-2 bg-[#FEE500] hover:bg-[#FADC00] text-[#000000] font-bold px-8 py-3 rounded-full transition-all">
          <Image src="/images/kakao_logo.png" alt="카카오톡" width={18} height={18} />무료 창업 상담
        </a>
      </section>
    </div>
  )
}
