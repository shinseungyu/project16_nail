import type { Metadata } from 'next'
import RelatedQna from '@/components/RelatedQna'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '미용사(피부) 자격증 취득방법 | 시험구성·합격률·비용 2026' },
  description: '미용사(피부) 자격증 필기 60문항·실기 2시간 35분 시험 구성부터 학원·독학·국비지원 비용 비교, 면허 신청 절차까지 2026년 기준으로 정리했습니다.',
  keywords: ['미용사 피부 자격증', '피부미용사 자격증', '피부관리사 자격증', '미용사 피부 실기', '미용사 피부 필기', '피부미용 국비지원'],
  alternates: { canonical: '/skincare/license' },
}

const skincareLicenseFaqs = [
  { q: '미용사(피부) 자격증 응시 자격이 있나요?', a: '없습니다. 학력·나이·경력 제한 없이 누구나 응시할 수 있습니다. 관련 전공이 아니어도 상관없습니다.' },
  { q: '필기 합격하면 실기는 언제까지 봐야 하나요?', a: '필기 합격 후 2년간 실기 응시가 가능합니다. 이 기간을 넘기면 필기부터 다시 봐야 합니다. 연 4회 시행이므로 2년이면 여러 번 기회가 있습니다.' },
  { q: '미용사(일반) 자격증이 있으면 피부관리샵을 열 수 있나요?', a: '어렵습니다. 공중위생관리법 시행령은 미용업을 일반·피부·네일·화장분장·종합으로 구분하고, 각 업무 범위에 맞는 면허를 요구합니다. 피부미용업을 하려면 미용사(피부) 면허가 필요합니다. 여러 업무를 함께 하려는 경우 종합미용업 신고 요건을 관할 구청에 확인하세요.' },
  { q: '독학으로 실기까지 합격할 수 있나요?', a: '가능하지만 난이도가 높습니다. 베드·스티머·기기와 모델이 필요하고, 감점 차감제라 정확한 절차를 아는 것이 중요하기 때문입니다. 필기는 독학, 실기는 학원 실기반 병행을 권합니다.' },
  { q: '자격증만 따면 바로 개업할 수 있나요?', a: '아닙니다. 자격증 취득 → 면허 신청 → 미용업 신고, 3단계를 모두 마쳐야 합니다. 위생교육 이수와 시설 기준 충족도 필요합니다.' },
  { q: '나이가 많아도 취득할 수 있나요?', a: '나이 제한이 없어 가능합니다. 다만 실기가 체력을 요구하고, 창업 후에도 마사지 동작이 반복되는 업종이라는 점은 고려하는 것이 좋습니다.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: skincareLicenseFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: '피부관리샵 창업', item: `${SITE_URL}/skincare` },
    { '@type': 'ListItem', position: 3, name: '자격증', item: `${SITE_URL}/skincare/license` },
  ],
}

const subjectRows = [
  ['피부미용학', '중', '관리 이론. 실무와 연결되어 이해가 쉬움'],
  ['피부학', '상', '피부 구조·기능. 암기량이 많은 구간'],
  ['해부생리학', '상', '세포·조직·순환계. 비전공자가 가장 어려워함'],
  ['피부미용기기학', '중', '기기 원리와 적용. 실기와 연결'],
  ['공중위생관리학', '하', '공중보건·소독·법규. 점수 확보 구간'],
  ['화장품학', '중하', '성분과 분류. 반복 출제 패턴 뚜렷'],
]

const pathRows = [
  ['독학', '10~30만원', '6~12개월', '비용 최소', '실기 연습 공간·모델 확보가 어려움'],
  ['학원 (자비)', '150~400만원', '5~8개월', '실기 장비·모델 해결, 커리큘럼 관리', '비용 부담'],
  ['국비지원 (내일배움카드)', '자부담 0~30%', '5~8개월', '비용 대폭 절감', '요건 충족 필요, 정원 제한'],
  ['학점은행제 / 전문대', '300만원~', '1~2년', '학위 병행, 취업 시 유리', '기간이 김'],
]

export default function SkincareLicensePage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/skincare" className="hover:text-stone-700">피부관리샵</Link><span>›</span>
        <span className="text-stone-600">자격증</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자격증 가이드</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">미용사(피부) 자격증, 어떻게 따나요?</h1>
      <p className="text-stone-500 mb-8">피부관리샵을 열려면 미용사(피부) 국가기술자격이 반드시 필요합니다. 응시 자격에 학력·나이·경력 제한이 없어 누구나 도전할 수 있지만, 이론 과목이 있어 준비 기간은 6~10개월 정도로 잡는 것이 현실적입니다.</p>

      {/* 1. 개요 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">미용사(피부) 국가기술자격 개요</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <dl className="divide-y divide-stone-50 text-sm">
            {[
              ['자격명', '미용사(피부)'], ['등급', '기능사'], ['주관', '한국산업인력공단 (Q-Net)'],
              ['응시 자격', '제한 없음 (학력·나이·경력 무관)'], ['시행 횟수', '연 4회 (정기 기능사 일정 기준)'],
              ['필기 유효기간', '합격 후 2년간 실기 응시 가능'],
            ].map(([k, v]) => (
              <div key={k} className="flex py-2.5"><dt className="w-32 shrink-0 text-stone-400 font-medium">{k}</dt><dd className="text-stone-700 font-medium">{v}</dd></div>
            ))}
          </dl>
        </div>
        <p className="text-xs text-stone-500 bg-stone-50 border border-stone-100 rounded-xl p-3 mt-3 leading-relaxed">국가기술자격은 <strong className="text-stone-700">자격증</strong>이고, 영업에 필요한 것은 <strong className="text-stone-700">면허</strong>입니다. 자격증을 딴 뒤 별도로 면허를 신청해야 합니다.</p>
      </section>

      {/* 2. 필기 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">필기시험</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {[['형식', '객관식 4지'], ['문항 수', '60문항'], ['시험 시간', '60분 (CBT)'], ['합격 기준', '60점 이상']].map(([k, v]) => (
            <div key={k} className="bg-stone-50 rounded-xl p-3 text-center"><p className="text-xs text-stone-400 mb-1">{k}</p><p className="text-sm font-bold text-stone-800">{v}</p></div>
          ))}
        </div>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">과목</th><th className="text-center px-4 py-3 font-bold">체감 난이도</th><th className="text-left px-4 py-3 font-bold">특징</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {subjectRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className={`px-4 py-3 text-center font-bold ${r[1] === '상' ? 'text-rose-600' : 'text-stone-500'}`}>{r[1]}</td><td className="px-4 py-3 text-[13px]">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-extrabold text-stone-800 mb-3">공부 전략</h3>
          <ol className="space-y-2 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li>공중위생관리학과 화장품학을 먼저 끝내세요. 출제 패턴이 일정해 단기간에 점수가 오릅니다.</li>
            <li>해부생리학은 외우지 말고 그림으로 이해하세요. 세포 → 조직 → 기관 흐름을 그려가며 정리하면 암기량이 줄어듭니다.</li>
            <li>기출 5개년을 3회독하는 것이 가장 효율적입니다. CBT라 문제은행 반복 출제 비중이 높습니다.</li>
            <li>60문항 중 36문항만 맞히면 합격입니다. 어려운 과목의 완벽보다 쉬운 과목을 확실히 잡는 전략이 유리합니다.</li>
          </ol>
          <p className="text-xs text-stone-400 mt-3">예상 준비 기간: 하루 2시간 기준 2~3개월</p>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 3. 실기 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">실기시험</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {[['형식', '작업형'], ['시험 시간', '약 2시간 35분'], ['채점', '감점 차감제'], ['합격 기준', '60점 이상']].map(([k, v]) => (
            <div key={k} className="bg-stone-50 rounded-xl p-3 text-center"><p className="text-xs text-stone-400 mb-1">{k}</p><p className="text-sm font-bold text-stone-800">{v}</p></div>
          ))}
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-800 leading-relaxed"><strong>채점 방식이 중요한 이유:</strong> 미용사(피부) 실기는 잘한 것을 더하는 방식이 아니라 <strong>틀린 것을 빼는 방식</strong>입니다. 화려한 기술보다 정해진 순서와 위생 규정을 정확히 지키는 것이 합격을 좌우합니다.</p>
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-extrabold text-stone-800 mb-3">자주 떨어지는 이유 5가지</h3>
          <ol className="space-y-2 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li><strong className="text-stone-800">시간 초과</strong> — 가장 흔한 탈락 원인. 과제별 시간을 재며 연습하지 않으면 실전에서 밀립니다.</li>
            <li><strong className="text-stone-800">위생 절차 누락</strong> — 손 소독, 도구 배치, 정리 순서에서 감점이 누적됩니다.</li>
            <li><strong className="text-stone-800">준비물 미비</strong> — 요구 재료·도구를 빠뜨리면 해당 과제를 못 합니다. 체크리스트로 두 번 확인하세요.</li>
            <li><strong className="text-stone-800">동작 순서 오류</strong> — 순서가 바뀌면 감점. 손에 익을 때까지 같은 순서로 반복해야 합니다.</li>
            <li><strong className="text-stone-800">모델 준비 문제</strong> — 모델 조건(연령·피부 상태 등)을 충족하지 않으면 응시가 어려울 수 있습니다.</li>
          </ol>
          <p className="text-xs text-stone-400 mt-3">예상 준비 기간: 주 2~3회 실습 기준 3~5개월</p>
        </div>
        <p className="text-xs text-stone-500 mt-3 leading-relaxed">과제 구성·준비물·모델 조건은 연도별로 변경됩니다. 반드시 Q-Net 공개문제와 수험자 지참 준비물 목록을 확인하세요.</p>
      </section>

      {/* 4. 면허 절차 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">자격증 취득 후 — 면허 신청 절차</h2>
        <p className="text-sm text-stone-500 mb-4"><strong className="text-stone-800">자격증 ≠ 영업 가능.</strong> 아래 3단계를 모두 마쳐야 영업할 수 있습니다.</p>
        <div className="space-y-3">
          {[
            { n: '①', t: '국가기술자격 취득', d: 'Q-Net 필기 + 실기 합격 → 자격증 발급' },
            { n: '②', t: '미용사 면허 신청', d: '관할 시장·군수·구청장에게 면허를 신청합니다. 면허 신청서, 국가기술자격증(사본), 사진, 건강진단 관련 서류 등이 필요하며 통상 며칠~2주 소요됩니다. 결격사유(정신질환·감염병·마약류 중독 등)가 있으면 면허를 받을 수 없어 관할 구청 확인이 필요합니다.' },
            { n: '③', t: '미용업 신고', d: '사업장을 정한 뒤 관할 시·군·구청 위생과에 신고합니다. 면허증 사본 제출, 영업 전 위생교육 이수, 시설·설비 기준(공중위생관리법 시행규칙 [별표 1]) 충족이 필요합니다. 임대차 계약 전에 해당 물건지로 신고 가능한지 확인하는 것이 안전합니다.' },
          ].map((s) => (
            <div key={s.n} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
              <span className="shrink-0 w-9 h-9 bg-stone-800 text-white rounded-full flex items-center justify-center text-sm font-extrabold">{s.n}</span>
              <div><h3 className="text-sm font-extrabold text-stone-800 mb-1">{s.t}</h3><p className="text-[13px] text-stone-500 leading-relaxed">{s.d}</p></div>
            </div>
          ))}
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
          <p className="text-xs text-emerald-900 leading-relaxed"><strong>현실적인 추천:</strong> 필기는 독학, 실기는 학원. 필기는 기출 문제은행 방식이라 독학이 충분하지만, 실기는 베드·기기·모델이 필요합니다. 학원 실기반만 등록하면 비용을 절반 이하로 줄일 수 있습니다.</p>
        </div>
      </section>

      {/* 6. 민간 차이 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">민간 자격증과의 차이</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">구분</th><th className="text-center px-4 py-3 font-bold">국가기술자격 미용사(피부)</th><th className="text-center px-4 py-3 font-bold">민간 자격증</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[['발급', '한국산업인력공단', '협회·아카데미 등'], ['미용업 신고', '가능', '불가'], ['법적 효력', '있음', '없음'], ['활용처', '국내 영업 필수', '해외 취업·브랜드 제휴']].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td><td className="px-4 py-3 text-center font-semibold text-emerald-700">{r[1]}</td><td className="px-4 py-3 text-center text-stone-500">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed">CIDESCO, CIBTAC 같은 국제 자격은 해외 취업·브랜드 제휴에서 인정받지만, 국내에서 피부관리샵을 여는 데는 쓸 수 없습니다. 국내 영업이 목적이라면 국가기술자격이 먼저입니다.</p>
      </section>

      {/* 7. FAQ */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">자주 묻는 질문</h2>
        <div className="space-y-3">
          {skincareLicenseFaqs.map((f) => (
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
          <li><a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer" className="hover:underline">미용사(피부) 국가자격 정보 — 한국산업인력공단 Q-Net ↗</a></li>
          <li><a href="https://www.easylaw.go.kr" target="_blank" rel="noopener noreferrer" className="hover:underline">미용사(피부) 면허 취득 — 찾기쉬운 생활법령정보 ↗</a></li>
          <li><a href="https://www.law.go.kr" target="_blank" rel="noopener noreferrer" className="hover:underline">공중위생관리법 — 국가법령정보센터 ↗</a></li>
        </ul>
        <p className="text-[11px] text-stone-400 mt-2">시험 일정·응시료·실기 공개문제·준비물은 연도별로 변경됩니다. 응시 전 Q-Net 공고를 확인하세요.</p>
      </section>

      {/* 내부링크 */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/skincare/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">초기 자금</p><p className="font-bold text-stone-900">창업비용 얼마나 →</p></Link>
          <Link href="/skincare/revenue" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">취득 후</p><p className="font-bold text-stone-900">예상 수익 보기 →</p></Link>
          <Link href="/license" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">업종 비교</p><p className="font-bold text-stone-900">네일 자격증과 비교 →</p></Link>
        </div>
      </section>
    <RelatedQna sections={['skin-license']} offset={0} />

    </div>
  )
}
