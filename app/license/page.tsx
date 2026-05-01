import type { Metadata } from 'next'
import KakaoButton from '@/components/KakaoButton'
import Link from 'next/link'
import FormSection from '../test/FormSection'

export const metadata: Metadata = {
  title: '네일샵 창업 자격증 취득 방법 2026 | 시험 일정·합격 팁 총정리',
  description: '네일샵 창업을 위한 미용사(네일) 국가기술자격증 취득 방법, 시험 일정, 합격률, 준비 기간까지 2026년 최신 기준으로 정리했습니다.',
  alternates: { canonical: '/license' },
}


export default function LicensePage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자격증 가이드</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">네일샵 창업 자격증 취득 방법</h1>
      <p className="text-stone-500 mb-8">네일샵 창업의 첫걸음은 미용사(네일) 국가기술자격증입니다. 구청에 미용업 신고를 하고 합법적으로 영업하려면 이 자격증이 100% 필요합니다. 2026년 기준 시험 정보와 합격 전략을 정리했습니다.</p>
      
      <div className="mb-14 animate-fade-in-up">
        <div className="flex justify-start mb-3">
          <span className="inline-block bg-[#FEE500] text-black text-sm font-extrabold px-4 py-1.5 rounded-full shadow-sm animate-bounce">간편 신청하기 👇</span>
        </div>
        <FormSection />
      </div>

      {/* 핵심 수치 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">미용사(네일) 자격증 핵심 정보</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: '시험 주관', value: 'Q-Net\n한국산업인력공단' },
            { label: '연간 시험 횟수', value: '4회\n(분기별 시행)' },
            { label: '필기 합격률', value: '약 60%\n기출 위주면 충분' },
            { label: '실기 합격률', value: '약 50%\n연습량이 핵심' },
          ].map((item) => (
            <div key={item.label} className="bg-white border border-stone-100 rounded-2xl p-5 text-center shadow-sm">
              <p className="text-xs text-stone-400 mb-2">{item.label}</p>
              <p className="text-sm font-bold text-stone-800 whitespace-pre-line leading-snug">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-stone-800 text-white rounded-2xl p-5 flex items-start gap-3">
          <span className="text-xl shrink-0">💡</span>
          <p className="text-sm leading-relaxed">
            <strong>노베이스도 가능합니다.</strong> 네일 경험이 전혀 없어도 전문 아카데미 커리큘럼을 따라가면 3~6개월 안에 자격증 취득 후 창업까지 연결됩니다. 올댓뷰티 멘토가 개인 일정에 맞는 플랜을 잡아드립니다.
          </p>
        </div>
      </section>

      {/* 국가 vs 민간 비교 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">국가 자격증 vs 민간 자격증 차이</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border-2 border-stone-800 rounded-2xl p-6 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 bg-stone-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-lg">창업 필수</div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏛️</span>
              <h3 className="text-lg font-extrabold text-stone-900">미용사(네일) 국가기술자격증</h3>
            </div>
            <p className="text-xs text-stone-400 font-semibold mb-3">한국산업인력공단 주관 | Q-Net 접수</p>
            <ul className="space-y-2 text-[13px] text-stone-700">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">✓</span>구청 미용업 신고 시 법적 효력 인정</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">✓</span>사업자 등록 및 독립 매장 오픈 가능</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">✓</span>고용보험·산재보험 요율 혜택</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">✓</span>국가 공인 자격이라 고객 신뢰도 높음</li>
            </ul>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm opacity-80">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📜</span>
              <h3 className="text-lg font-extrabold text-stone-700">민간 자격증</h3>
            </div>
            <p className="text-xs text-stone-400 font-semibold mb-3">각종 협회·아카데미 발급</p>
            <ul className="space-y-2 text-[13px] text-stone-500">
              <li className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>구청 미용업 신고에 법적 효력 없음</li>
              <li className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>이 자격증만으로는 네일샵 창업 불가</li>
              <li className="flex gap-2"><span className="text-stone-400 shrink-0">△</span>특정 기술(젤아트·드릴 등) 수료 증명용으로는 유용</li>
              <li className="flex gap-2"><span className="text-stone-400 shrink-0">△</span>포트폴리오 보완 목적으로 활용 가능</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 시험 과목 및 구성 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">시험 과목 및 합격 기준</h2>
        <div className="space-y-4">
          {[
            {
              title: '필기시험',
              tag: '4과목 60문항',
              desc: '네일 개론, 피부학, 공중보건학, 화장품학 4과목으로 구성됩니다. 객관식 60문항 중 60점(36문항) 이상이면 합격입니다.',
              tips: ['기출문제 3회분 반복이 가장 효과적입니다.', 'Q-Net 앱에서 무료 기출 문제를 풀 수 있습니다.', '독학 기준 2~4주 집중 준비로 합격 가능합니다.'],
            },
            {
              title: '실기시험',
              tag: '실무 시술 평가',
              desc: '젤 네일, 아크릴 연장, 네일 아트 등 실무 시술 능력을 평가합니다. 시험 시간은 약 3시간이며, 재료는 본인이 준비해야 합니다.',
              tips: ['학원 수강(30~50만원) 병행 시 합격률이 크게 높아집니다.', '연습은 한쪽 손이 아닌 양손 모두 익숙해져야 합니다.', '시험 전 3~5회 완전 모의 시험을 권장합니다.'],
            },
            {
              title: '응시 자격',
              tag: '제한 없음',
              desc: '학력·나이·경력 무관하게 누구나 응시할 수 있습니다. 필기 합격 후 2년 이내에 실기를 합격해야 최종 취득됩니다.',
              tips: ['필기 합격 유효기간(2년) 안에 실기 합격이 필요합니다.', '동일 시험 회차에 필기·실기 모두 응시 가능합니다.', '응시료: 필기 14,500원 / 실기 26,900원 (2026년 기준)'],
            },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-base font-bold text-stone-900">{item.title}</h3>
                <span className="text-[10px] bg-stone-100 text-stone-500 font-semibold px-2 py-0.5 rounded-full">{item.tag}</span>
              </div>
              <p className="text-[13px] text-stone-600 leading-relaxed mb-3">{item.desc}</p>
              <ul className="space-y-1.5">
                {item.tips.map((tip) => (
                  <li key={tip} className="text-[12px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5 leading-relaxed">✓ {tip}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 준비 타임라인 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">자격증 취득 → 창업까지 타임라인</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
          <div className="space-y-4">
            {[
              { period: '1~2개월', label: '필기 준비', desc: '기출문제 집중 학습, Q-Net 모의고사 반복' },
              { period: '2~4개월', label: '실기 준비', desc: '아카데미 등록, 젤네일·아크릴 기술 연습' },
              { period: '5~6개월', label: '자격증 취득', desc: '필기·실기 합격 완료, 자격증 수령' },
              { period: '6~8개월', label: '창업 준비', desc: '상권 분석, 사업자 등록, 위생교육, 공간 세팅' },
              { period: '8~10개월', label: '오픈', desc: 'SNS 마케팅 시작, 네이버 플레이스 등록, 오픈 이벤트' },
            ].map((item) => (
              <div key={item.period} className="flex gap-4 items-start">
                <div className="shrink-0 text-right w-20">
                  <p className="text-[11px] font-bold text-stone-400">{item.period}</p>
                </div>
                <div className="relative pl-4 border-l-2 border-stone-200 flex-1">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-stone-800" />
                  <p className="text-sm font-bold text-stone-900">{item.label}</p>
                  <p className="text-[12px] text-stone-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-stone-400 mt-4">* 개인 학습 속도와 시험 일정에 따라 달라질 수 있습니다. 아카데미 연계 시 단축 가능합니다.</p>
        </div>
      </section>

      {/* 내부 링크 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">자격증 취득 후 다음 단계</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/guide" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">창업 순서</p>
            <p className="font-bold text-stone-900">네일샵 창업 단계별 가이드 →</p>
          </Link>
          <Link href="/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">예산 계획</p>
            <p className="font-bold text-stone-900">네일샵 창업비용 총정리 →</p>
          </Link>
          <Link href="/qna" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">궁금한 것 해결</p>
            <p className="font-bold text-stone-900">네일샵 창업 Q&A →</p>
          </Link>
        </div>
      </section>

      <section className="bg-stone-900 rounded-3xl p-10 text-center text-white">
        <h2 className="text-xl font-extrabold mb-2">자격증부터 창업까지 한번에 상담받기</h2>
        <p className="text-stone-400 mb-5 text-sm">노베이스도 OK. 무료 상담으로 나에게 맞는 루트를 잡아드립니다.</p>
        <KakaoButton location="license" className="inline-flex items-center gap-2 bg-[#FEE500] hover:bg-[#FADC00] text-[#000000] font-bold px-8 py-3 rounded-full transition-all">
          무료 창업 상담
        </KakaoButton>
      </section>
    </div>
  )
}
