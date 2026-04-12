import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '네일 자격증 취득 방법 2026 | 시험 일정·합격 팁 총정리',
  description: '네일 미용사 국가기술자격증 취득 방법, 시험 일정, 합격률, 준비 기간까지 2026년 최신 기준으로 정리했습니다.',
  alternates: { canonical: '/license' },
}

const OPEN_CHAT_URL = '#'

export default function LicensePage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자격증 가이드</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">네일 자격증 취득 방법</h1>
      <p className="text-stone-500 mb-10">네일아트 창업을 위한 자격증 정보를 2026년 기준으로 정리했습니다.</p>

      <section className="grid grid-cols-3 gap-4 mb-12">
        {[
          { label: '시험 주관', value: 'Q-Net (한국산업인력공단)' },
          { label: '연간 시험 횟수', value: '4회 (분기별)' },
          { label: '평균 합격률', value: '필기 60% / 실기 50%' },
        ].map((item) => (
          <div key={item.label} className="bg-white border border-stone-100 rounded-2xl p-5 text-center shadow-sm">
            <p className="text-xs text-stone-400 mb-2">{item.label}</p>
            <p className="text-sm font-bold text-stone-800">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="mb-12 space-y-4">
        {[
          { title: '필기시험', desc: '네일 개론, 피부학, 공중보건학, 화장품학 등 4과목. 객관식 60문항, 60점 이상 합격. 기출문제 위주로 2~4주 준비하면 충분합니다.' },
          { title: '실기시험', desc: '젤 네일, 아크릴, 네일 아트 등 실무 시술 능력을 평가합니다. 준비 기간은 1~3개월이며, 학원 수강(30~50만원)을 병행하면 합격률이 높아집니다.' },
          { title: '응시 자격', desc: '제한 없음. 누구나 응시 가능합니다. 학력·나이·경력 무관.' },
          { title: '자격증 취득 후', desc: '미용업 개설 신고 시 자격증 사본 제출 필요. 고객 응대 시 신뢰도 상승 효과가 크며, 직원 채용 시에도 유리합니다.' },
        ].map((item) => (
          <div key={item.title} className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-stone-900 mb-2">{item.title}</h3>
            <p className="text-[13px] text-stone-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-stone-900 rounded-3xl p-10 text-center text-white">
        <h2 className="text-xl font-extrabold mb-2">자격증부터 창업까지 한번에 상담받기</h2>
        <p className="text-stone-400 mb-5 text-sm">무료 상담으로 나에게 맞는 루트를 알아보세요.</p>
        <a href={OPEN_CHAT_URL} className="inline-flex items-center gap-2 bg-[#FEE500] hover:bg-[#FADC00] text-[#000000] font-bold px-8 py-3 rounded-full transition-all">
          <Image src="/images/kakao_logo.png" alt="카카오톡" width={18} height={18} />무료 창업 상담
        </a>
      </section>
    </div>
  )
}
