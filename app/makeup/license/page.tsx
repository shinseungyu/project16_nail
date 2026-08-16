import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '미용사(메이크업) 자격증 | 실기 4과제·합격률·비용 2026' },
  description: '미용사(메이크업) 자격증 필기 60문항, 실기 4과제 2시간 35분. 시험 구성과 학원·독학·국비지원 비용 비교, 면허 신청 절차까지 정리했습니다.',
  keywords: ['미용사 메이크업 자격증', '메이크업 자격증', '메이크업 국가자격증', '메이크업 실기 과제', '메이크업 자격증 국비지원'],
  alternates: { canonical: '/makeup/license' },
}

const makeupLicenseFaqs = [
  { q: '미용사(메이크업) 실기가 왜 어렵다고 하나요?', a: '4과제(뷰티·시대·캐릭터·속눈썹 익스텐션 및 수염)를 약 2시간 35분 안에 마쳐야 하기 때문입니다. 각 과제의 성격이 완전히 달라 실무 경험이 있어도 별도 준비가 필요합니다.' },
  { q: '현업에서 일하고 있는데 자격증이 꼭 필요한가요?', a: '필요합니다. 공중위생관리법 제8조 제1항은 면허 없이 미용업에 종사하는 것을 금지하며, 위반 시 300만원 이하 벌금 대상입니다. 경력과 무관하게 적용됩니다.' },
  { q: '필기 합격 후 실기는 언제까지 봐야 하나요?', a: '필기 합격 후 2년간 실기 응시가 가능합니다. 이 기간이 지나면 필기부터 다시 봐야 합니다.' },
  { q: '다른 미용사 자격증이 있으면 메이크업샵을 열 수 있나요?', a: '어렵습니다. 시행령은 미용업을 일반·피부·네일·화장분장·종합으로 구분하고 업무 범위에 맞는 면허를 요구합니다. 화장·분장 미용업을 하려면 미용사(메이크업) 면허가 필요합니다. 여러 업무를 함께 하려면 종합미용업 요건을 관할 구청에 확인하세요.' },
  { q: '독학으로 실기 합격이 가능한가요?', a: '가능하지만 미용 종목 중 난이도가 가장 높습니다. 4과제 재료와 모델을 스스로 준비해야 하고, 시대·캐릭터 메이크업은 피드백 없이 기준을 맞추기 어렵습니다. 필기 독학 + 실기 학원 병행을 권합니다.' },
  { q: '응시료는 얼마인가요?', a: '필기 14,500원, 실기 17,200원입니다. 다만 수수료는 변경될 수 있으니 응시 전 Q-Net 공고를 확인하세요.' },
]

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: makeupLicenseFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
  { '@type': 'ListItem', position: 2, name: '메이크업샵 창업', item: `${SITE_URL}/makeup` },
  { '@type': 'ListItem', position: 3, name: '자격증', item: `${SITE_URL}/makeup/license` },
] }

const subjectRows = [
  ['메이크업 개론·색채', '중', '색채 이론이 낯설면 초반 부담'],
  ['피부·모발 기초', '중상', '암기량 있음'],
  ['화장품학', '중하', '성분·분류. 반복 출제 패턴 뚜렷'],
  ['공중위생관리학', '하', '공중보건·소독·법규. 점수 확보 구간'],
]

const taskRows = [
  ['1과제', '뷰티 메이크업', '중'],
  ['2과제', '시대 메이크업', '상'],
  ['3과제', '캐릭터 메이크업', '상'],
  ['4과제', '속눈썹 익스텐션 및 수염', '상'],
]

const pathRows = [
  ['독학', '15~40만원', '8~14개월', '비용 최소', '실기 4과제를 혼자 준비하기 매우 어려움'],
  ['학원 (자비)', '150~400만원', '5~9개월', '4과제 커리큘럼, 모델·재료 해결', '비용 부담'],
  ['국비지원 (내일배움카드)', '자부담 0~30%', '5~9개월', '비용 대폭 절감', '요건 충족 필요, 정원 제한'],
  ['학점은행제 / 전문대', '300만원~', '1~2년', '학위 병행', '기간이 김'],
]

export default function MakeupLicensePage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/makeup" className="hover:text-stone-700">메이크업샵</Link><span>›</span><span className="text-stone-600">자격증</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자격증 가이드</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">미용사(메이크업) 자격증, 어떻게 따나요?</h1>
      <p className="text-stone-500 mb-8">메이크업샵을 열거나 프리랜서로 메이크업을 업으로 하려면 미용사(메이크업) 국가기술자격이 필요합니다. 응시 자격에 제한은 없지만, 실기가 4과제로 구성되어 미용 종목 중 준비 범위가 가장 넓습니다.</p>

      {/* 1. 개요 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">자격 개요</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <dl className="divide-y divide-stone-50 text-sm">
            {[['자격명', '미용사(메이크업)'], ['등급', '기능사'], ['주관', '한국산업인력공단 (Q-Net)'], ['응시 자격', '제한 없음 (학력·나이·경력 무관)'], ['신설 시기', '2013년 이후 신설된 비교적 최근 종목'], ['필기 유효기간', '합격 후 2년간 실기 응시 가능']].map(([k, v]) => (
              <div key={k} className="flex py-2.5"><dt className="w-32 shrink-0 text-stone-400 font-medium">{k}</dt><dd className="text-stone-700 font-medium">{v}</dd></div>
            ))}
          </dl>
        </div>
        <p className="text-xs text-stone-500 bg-stone-50 border border-stone-100 rounded-xl p-3 mt-3 leading-relaxed">국가기술자격을 취득한 뒤 <strong className="text-stone-700">별도로 미용사 면허를 신청</strong>해야 영업할 수 있습니다.</p>
      </section>

      {/* 2. 필기 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">필기시험</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {[['문항 수', '60문항'], ['시험 시간', '60분'], ['합격 기준', '60점 이상'], ['수수료', '14,500원']].map(([k, v]) => (
            <div key={k} className="bg-stone-50 rounded-xl p-3 text-center"><p className="text-xs text-stone-400 mb-1">{k}</p><p className="text-sm font-bold text-stone-800">{v}</p></div>
          ))}
        </div>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">영역</th><th className="text-center px-4 py-3 font-bold">체감 난이도</th><th className="text-left px-4 py-3 font-bold">특징</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {subjectRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center font-bold text-stone-500">{r[1]}</td><td className="px-4 py-3 text-[13px]">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-extrabold text-stone-800 mb-3">공부 전략</h3>
          <ol className="space-y-2 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li>공중위생관리학을 가장 먼저 끝내세요. 출제 패턴이 고정적이라 단기간에 점수가 오릅니다. 다른 미용 종목과 공통 범위라 재활용됩니다.</li>
            <li>색채 이론은 표로 정리하세요. 보색·명도·채도 관계는 글로 외우면 헷갈립니다.</li>
            <li>기출 5개년 3회독이 가장 효율적입니다. 문제은행 방식이라 반복 출제 비중이 높습니다.</li>
            <li>60문항 중 36문항이면 합격입니다. 완벽을 노리기보다 확실한 영역을 확보하세요.</li>
          </ol>
          <p className="text-xs text-stone-400 mt-3">예상 준비 기간: 하루 2시간 기준 1.5~3개월</p>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 3. 실기 4과제 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">실기시험</h2>
        <p className="text-sm text-rose-600 font-bold mb-4">★ 핵심 — 4과제, 미용 종목 중 준비 범위 최대</p>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[['형식', '작업형'], ['시험 시간', '약 2시간 35분'], ['수수료', '17,200원']].map(([k, v]) => (
            <div key={k} className="bg-stone-50 rounded-xl p-3 text-center"><p className="text-xs text-stone-400 mb-1">{k}</p><p className="text-sm font-bold text-stone-800">{v}</p></div>
          ))}
        </div>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">과제</th><th className="text-left px-4 py-3 font-bold">내용</th><th className="text-center px-4 py-3 font-bold">준비 부담</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {taskRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-bold text-stone-800">{r[0]}</td><td className="px-4 py-3">{r[1]}</td><td className={`px-4 py-3 text-center font-bold ${r[2] === '상' ? 'text-rose-600' : 'text-stone-500'}`}>{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-800 leading-relaxed"><strong>왜 준비 범위가 가장 넓은가:</strong> 다른 미용 종목은 한 가지 기술 계열을 깊게 파면 되지만, 메이크업 실기는 성격이 전혀 다른 4개 영역(뷰티·시대·캐릭터·속눈썹/수염)을 모두 다룹니다. <strong>평소 실무의 뷰티 메이크업만 잘해서는 합격할 수 없습니다.</strong> 현업 아티스트가 실기에서 떨어지는 이유입니다.</p>
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-extrabold text-stone-800 mb-3">자주 떨어지는 이유 5가지</h3>
          <ol className="space-y-2 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li><strong className="text-stone-800">시간 배분 실패</strong> — 4과제를 2시간 35분 안에. 한 과제에서 지체하면 뒤가 전부 무너집니다. 타이머를 켜고 전체 흐름을 통으로 연습하세요.</li>
            <li><strong className="text-stone-800">뷰티만 연습</strong> — 가장 흔한 실수. 시대·캐릭터·수염 배점을 무시하면 60점을 넘기 어렵습니다.</li>
            <li><strong className="text-stone-800">준비물 미비</strong> — 과제별 요구 재료가 많습니다. 하나만 빠져도 해당 과제를 못 합니다.</li>
            <li><strong className="text-stone-800">위생 절차 누락</strong> — 손 소독, 도구 정리, 일회용품 사용에서 감점이 누적됩니다.</li>
            <li><strong className="text-stone-800">모델 조건 미충족</strong> — 모델 동반이 필요한 경우 조건을 공고에서 확인하세요.</li>
          </ol>
          <p className="text-xs text-stone-400 mt-3">예상 준비 기간: 주 2~3회 실습 기준 3~6개월</p>
        </div>
      </section>

      {/* 4. 면허 절차 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">자격증 취득 후 — 면허 신청 절차</h2>
        <div className="space-y-3">
          {[
            { n: '①', t: '국가기술자격 취득', d: 'Q-Net 필기 + 실기 합격' },
            { n: '②', t: '미용사 면허 신청', d: '관할 시장·군수·구청장에게 신청합니다. 면허 신청서, 국가기술자격증 사본, 사진, 건강진단 관련 서류 등이 필요하며, 결격사유 규정이 있으므로 해당 여부는 관할 구청에 확인해야 합니다.' },
            { n: '③', t: '미용업 신고', d: '관할 시·군·구청 위생과에 화장·분장 미용업으로 신고합니다. 면허증 사본 제출, 영업 전 위생교육 이수, 시설·설비 기준 충족이 필요합니다.' },
          ].map((s) => (
            <div key={s.n} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
              <span className="shrink-0 w-9 h-9 bg-stone-800 text-white rounded-full flex items-center justify-center text-sm font-extrabold">{s.n}</span>
              <div><h3 className="text-sm font-extrabold text-stone-800 mb-1">{s.t}</h3><p className="text-[13px] text-stone-500 leading-relaxed">{s.d}</p></div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg shrink-0 mt-0.5">⚠️</span>
          <p className="text-xs text-amber-800 leading-relaxed"><strong>출장 전문으로 운영할 계획이라면 특히 중요합니다.</strong> 매장 없이 출장만 하는 경우의 신고 방법과 요건은 지자체 운영에 따라 달라질 수 있습니다. 영업 시작 전 관할 구청 위생과에 반드시 문의하세요. 신고 없이 프리랜서로 활동하면 제3조 제1항 위반으로 1년 이하 징역 또는 1천만원 이하 벌금 대상이 될 수 있습니다.</p>
        </div>
      </section>

      {/* 5. 학습 경로 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">학습 경로 4가지 비교</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[620px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-3 py-3 font-bold">경로</th><th className="text-center px-3 py-3 font-bold">총 비용</th><th className="text-center px-3 py-3 font-bold">소요 기간</th><th className="text-left px-3 py-3 font-bold">장점</th><th className="text-left px-3 py-3 font-bold">단점</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {pathRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-3 py-3 font-bold text-stone-800">{r[0]}</td><td className="px-3 py-3 text-center whitespace-nowrap">{r[1]}</td><td className="px-3 py-3 text-center whitespace-nowrap">{r[2]}</td><td className="px-3 py-3 text-[12px]">{r[3]}</td><td className="px-3 py-3 text-[12px] text-stone-500">{r[4]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
          <p className="text-xs text-emerald-900 leading-relaxed"><strong>현실적인 추천:</strong> 필기는 독학, 실기는 학원. 특히 메이크업은 실기 독학 난이도가 미용 종목 중 가장 높습니다. 시대·캐릭터 메이크업은 참고 자료와 피드백 없이는 방향을 잡기 어렵고, 4과제 시간 배분은 실전 형태로 연습해야 익혀집니다.</p>
        </div>
      </section>

      {/* 6. 민간 차이 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">민간 자격증과의 차이</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">구분</th><th className="text-center px-4 py-3 font-bold">국가기술자격 미용사(메이크업)</th><th className="text-center px-4 py-3 font-bold">민간 자격증</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[['발급', '한국산업인력공단', '협회·아카데미'], ['미용업 신고', '가능', '불가'], ['법적 효력', '있음', '없음'], ['활용처', '국내 영업 필수', '포트폴리오, 해외 활동']].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center font-semibold text-emerald-700">{r[1]}</td><td className="px-4 py-3 text-center text-stone-500">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed">메이크업 분야는 민간 자격증 종류가 특히 많습니다. 국내에서 대가를 받고 메이크업을 업으로 하려면 국가기술자격이 먼저입니다.</p>
      </section>

      {/* 7. FAQ */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">자주 묻는 질문</h2>
        <div className="space-y-3">
          {makeupLicenseFaqs.map((f) => (
            <div key={f.q} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-[14px] font-bold text-stone-800 mb-2 flex items-start gap-2"><span className="text-stone-500 font-extrabold shrink-0">Q.</span>{f.q}</h3>
              <p className="text-[13px] text-stone-600 leading-relaxed pl-5"><span className="font-bold">A.</span> {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 출처 */}
      <section className="mb-10">
        <h2 className="text-base font-bold text-stone-700 mb-3">출처</h2>
        <ul className="space-y-1.5 text-xs text-blue-700">
          <li><a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer" className="hover:underline">미용사(메이크업) 국가자격 정보 — 한국산업인력공단 Q-Net ↗</a></li>
          <li><a href="https://www.easylaw.go.kr" target="_blank" rel="noopener noreferrer" className="hover:underline">메이크업 면허취득 자격요건 — 찾기쉬운 생활법령정보 ↗</a></li>
        </ul>
        <p className="text-[11px] text-stone-400 mt-2">시험 일정·수수료·실기 공개문제·준비물은 연도별로 변경됩니다. 응시 전 Q-Net 공고를 확인하세요.</p>
      </section>

      {/* 내부링크 */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/makeup/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">초기 자금</p><p className="font-bold text-stone-900">창업비용 얼마나 →</p></Link>
          <Link href="/makeup/revenue" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">취득 후</p><p className="font-bold text-stone-900">예상 수익 보기 →</p></Link>
          <Link href="/license" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">업종 비교</p><p className="font-bold text-stone-900">네일 자격증과 비교 →</p></Link>
        </div>
      </section>
    </div>
  )
}
