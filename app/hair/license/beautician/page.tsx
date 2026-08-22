import type { Metadata } from 'next'
import RelatedQna from '@/components/RelatedQna'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import HairCta from '@/components/HairCta'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '미용사(일반) 자격증 | 필기·실기 구성과 취득 방법' },
  description:
    '미용사(일반) 자격증 취득 방법을 정리했습니다. 필기 60문항, 실기 작업형 구성과 학습 경로별 비용, 면허 신청 절차까지 확인하세요.',
  keywords: ['미용사 일반 자격증', '헤어 미용사 자격증', '미용사 자격증', '미용사 일반 실기', '미용사 일반 필기'],
  alternates: { canonical: '/hair/license/beautician' },
}

const overview = [
  ['자격명', '미용사(일반)'],
  ['등급', '기능사'],
  ['주관', '한국산업인력공단 (Q-Net)'],
  ['응시 자격', '제한 없음 (학력·나이·경력 무관)'],
  ['필기', '객관식 60문항 / 60분 / CBT / 60점 이상'],
  ['실기', '작업형 / 60점 이상'],
  ['필기 유효기간', '합격 후 2년간 실기 응시 가능'],
]

const canDo = [
  ['커트', true],
  ['펌', true],
  ['염색·탈색', true],
  ['머리피부(두피) 손질', true],
  ['머리감기', true],
  ['면도(쉐이빙)', false],
  ['피부관리·제모', false],
  ['네일', false],
  ['화장·분장', false],
]

const faqs = [
  { q: '응시 자격에 제한이 있나요?', a: '없습니다. 학력·나이·경력과 무관하게 응시할 수 있습니다.' },
  {
    q: '미용사 자격증이 몇 종류인가요?',
    a: '일반·피부·네일·메이크업 4종이며, 이용사가 별도로 있습니다.',
  },
  {
    q: '이걸로 바버샵을 열 수 있나요?',
    a: '면도를 하지 않는다면 미용업으로 신고 가능합니다. 면도를 포함하면 이용사가 필요합니다. 관할 구청 확인이 필수입니다.',
  },
  { q: '필기 합격 후 언제까지 실기를 봐야 하나요?', a: '2년입니다.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: '이용원 창업', item: `${SITE_URL}/hair` },
    { '@type': 'ListItem', position: 3, name: '자격증', item: `${SITE_URL}/hair/license` },
    { '@type': 'ListItem', position: 4, name: '미용사(일반)', item: `${SITE_URL}/hair/license/beautician` },
  ],
}

export default function BeauticianPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span>
        <Link href="/hair/license" className="hover:text-stone-700">자격증</Link><span>›</span>
        <span className="text-stone-600">미용사(일반)</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자격증</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">미용사(일반) 자격증, 어떻게 받나요?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          <strong className="text-amber-300">응시 자격에 제한이 없고</strong>, 필기 60문항 60분·실기 작업형으로
          구성됩니다. 미용실에서 커트·펌·염색을 하려면 이 자격이 필요합니다.{' '}
          <strong className="text-amber-300">면도(쉐이빙)를 하려면 이용사가 별도로 필요합니다.</strong>
        </p>
      </div>

      {/* 개요 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">자격 개요</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <dl className="divide-y divide-stone-50 text-sm">
            {overview.map(([k, v]) => (
              <div key={k} className="flex py-2.5">
                <dt className="w-32 shrink-0 text-stone-400 font-medium">{k}</dt>
                <dd className="text-stone-700 font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="text-[11px] text-stone-400 mt-2">
          문항 수·시험 시간·응시료·실기 과제는 연도별로 변경될 수 있습니다. 응시 전 Q-Net 공고를 확인하세요.
        </p>
      </section>

      {/* 업무 범위 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">이 자격으로 할 수 있는 것</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[360px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">업무</th>
                <th className="text-center px-4 py-3 font-bold">가능 여부</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {canDo.map((r) => (
                <tr key={r[0] as string} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td>
                  <td className={`px-4 py-3 text-center font-bold ${r[1] ? 'text-emerald-600' : 'text-rose-500'}`}>
                    {r[1] ? '가능' : '다른 면허 필요'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500">
          <Link href="/hair/license/difference" className="text-rose-700 font-semibold underline decoration-2 decoration-rose-300 underline-offset-2 hover:decoration-rose-600 transition-colors">
            미용사와 이용사 차이 자세히 보기
          </Link>
        </p>
      </section>

      <AdUnit slot="1591000951" />

      {/* 필기 전략 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">필기 공부 전략</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <p className="text-[13px] text-stone-700 font-semibold mb-3">
            공중위생관리학을 먼저 끝내세요. 출제 패턴이 안정적이라 단기간에 점수가 오르고, 다른 미용
            종목(피부·네일·메이크업)과 범위가 겹쳐 나중에 재활용됩니다.
          </p>
          <ol className="space-y-2 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li>공중위생관리학 (공중보건·소독·법규) — 점수 확보 구간</li>
            <li>화장품학 — 반복 출제 패턴 뚜렷</li>
            <li>모발·두피 이론 — 암기량 있음</li>
            <li>헤어 시술 이론 — 실기와 연결</li>
          </ol>
          <p className="text-xs text-stone-500 mt-3">
            <strong className="text-stone-700">60문항 중 36문항이면 합격</strong>입니다. 어려운 과목에서 완벽을
            노리기보다 쉬운 과목을 확실히 잡는 편이 유리합니다. 예상 준비 기간: 하루 2시간 기준 2~3개월.
          </p>
        </div>
      </section>

      {/* 실기 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">실기 — 자주 떨어지는 이유</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <ol className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li>
              <strong className="text-stone-800">시간 배분 실패</strong> — 과제가 여러 개라 하나에서 지체하면 전체가
              밀립니다. 타이머와 함께 전체를 통으로 연습하세요.
            </li>
            <li>
              <strong className="text-stone-800">위생 절차 누락</strong> — 손 소독, 도구 배치, 정리 순서에서 감점이
              누적됩니다.
            </li>
            <li>
              <strong className="text-stone-800">준비물 미비</strong> — 지참 준비물 하나만 빠져도 해당 과제가
              불가능합니다.
            </li>
            <li>
              <strong className="text-stone-800">모델 조건 미충족</strong> — 모델 동반이 필요한 경우 조건을 공고에서
              확인하세요.
            </li>
          </ol>
          <p className="text-xs text-stone-500 mt-3">예상 준비 기간: 주 2~3회 실습 기준 3~5개월</p>
        </div>
      </section>

      {/* 취득 후 절차 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">취득 후 절차</h2>
        <div className="space-y-3">
          {[
            { n: '①', t: '국가기술자격 취득', d: 'Q-Net 필기 + 실기 합격' },
            { n: '②', t: '미용사 면허 신청', d: '시장·군수·구청장에게 신청합니다. 자격증 사본, 사진, 건강진단 관련 서류 등이 필요하며 결격사유 규정이 있습니다.' },
            { n: '③', t: '미용업 신고', d: '관할 시·군·구청 위생과에 신고합니다. 면허증 사본 제출, 영업 전 위생교육 이수, 시설·설비 기준 충족이 필요합니다.' },
          ].map((s) => (
            <div key={s.n} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
              <span className="shrink-0 w-9 h-9 bg-stone-800 text-white rounded-full flex items-center justify-center text-sm font-extrabold">
                {s.n}
              </span>
              <div>
                <h3 className="text-sm font-extrabold text-stone-800 mb-1">{s.t}</h3>
                <p className="text-[13px] text-stone-500 leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs text-amber-900 leading-relaxed">
            면허증은 <strong>영업소 안에 게시</strong>해야 합니다. 무면허 개설·종사는 공중위생관리법 제8조 제1항 위반으로
            300만원 이하 벌금 대상입니다.{' '}
            <Link href="/hair/license/issuance" className="font-bold underline underline-offset-2">
              면허 발급 절차 자세히
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">자주 묻는 질문</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <div key={f.q} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-[14px] font-bold text-stone-800 mb-2 flex items-start gap-2">
                <span className="text-stone-500 font-extrabold shrink-0">Q.</span>
                {f.q}
              </h3>
              <p className="text-[13px] text-stone-600 leading-relaxed pl-5">
                <span className="font-bold">A.</span> {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 출처 */}
      <section className="mb-10">
        <h2 className="text-base font-bold text-stone-700 mb-3">출처</h2>
        <ul className="space-y-1.5 text-xs text-blue-700">
          <li>
            <a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer" className="hover:underline">
              국가자격 정보 — 한국산업인력공단 Q-Net ↗
            </a>
          </li>
        </ul>
        <p className="text-[11px] text-stone-400 mt-2">
          시험 일정·수수료·실기 공개문제·준비물은 연도별로 변경됩니다. 응시 전 Q-Net 공고를 확인하세요.
        </p>
      </section>

      <HairCta withAcademy />
    <RelatedQna sections={['hair-license']} offset={3} />

    </div>
  )
}
