import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '네일아트 창업 준비 단계별 가이드 2026 | 사업자 등록부터 오픈까지',
  description: '네일샵 창업 준비 순서를 단계별로 안내합니다. 사업자 등록, 위치 선정, 장비 구매, SNS 마케팅까지 한번에 정리.',
  alternates: { canonical: '/guide' },
}

const OPEN_CHAT_URL = '#'

export default function GuidePage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <p className="text-sm text-pink-500 font-bold mb-2">창업 가이드</p>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-3">네일아트 창업 준비 단계별 가이드</h1>
      <p className="text-gray-500 mb-10">처음 창업하는 분도 이 순서대로만 따라가면 됩니다.</p>

      <section className="mb-12">
        <div className="space-y-6">
          {[
            { step: '01', title: '창업 목표 및 예산 설정', desc: '월 목표 수익, 초기 투자 가능 금액, 운영 형태(1인/직원 고용)를 먼저 결정하세요. 예산에 따라 규모와 위치가 달라집니다. 최소 6개월치 운영비(월세+생활비)는 여유 자금으로 남겨두어야 합니다.' },
            { step: '02', title: '자격증 취득', desc: '법적 필수는 아니지만 네일 미용사 국가기술자격증을 먼저 취득하는 것을 권장합니다. 필기+실기 합격까지 약 3~6개월이 소요되며, 고객 신뢰도에 직접적인 영향을 줍니다.' },
            { step: '03', title: '상권 분석 및 위치 선정', desc: '목표 고객층(직장인·대학생·주부)에 맞는 상권을 분석하세요. 임대료와 유동인구의 균형이 중요하며, 주차 가능 여부와 대중교통 접근성도 확인해야 합니다.' },
            { step: '04', title: '사업자 등록 및 행정 처리', desc: '개인사업자로 등록(세무서 또는 온라인) 후, 미용업 신고를 관할 구청에 해야 합니다. 위생교육 이수(8시간)가 필수이며, 개설 전 시설 검사를 받아야 합니다.' },
            { step: '05', title: '인테리어 및 장비 세팅', desc: '네일샵은 청결하고 밝은 이미지가 핵심입니다. 조명(자연광 느낌), 환기 설비, 소독 시설에 집중 투자하세요. 장비는 중고로 시작해도 충분합니다.' },
            { step: '06', title: 'SNS 마케팅 및 오픈 준비', desc: '오픈 전 인스타그램 계정 개설 후 시술 사진을 꾸준히 올리세요. 네이버 블로그·플레이스 등록은 필수입니다. 오픈 이벤트(첫 달 할인)로 초기 고객을 확보하는 것이 중요합니다.' },
          ].map((item) => (
            <div key={item.step} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex gap-5">
              <div className="shrink-0 w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center">
                <span className="text-pink-500 font-extrabold text-sm">{item.step}</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-pink-500 to-pink-400 rounded-3xl p-8 text-center text-white">
        <h2 className="text-xl font-extrabold mb-2">창업 준비, 혼자 하지 마세요</h2>
        <p className="text-pink-100 mb-5 text-sm">단계별 맞춤 상담을 무료로 받아보세요.</p>
        <a href={OPEN_CHAT_URL} className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-full transition-all">
          💬 무료 창업 상담
        </a>
      </section>
    </div>
  )
}
