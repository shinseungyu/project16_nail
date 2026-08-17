import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import { LawStatusBanner, SourcesAndDisclaimer, OtherCategories } from '@/components/SemiPermanentNotice'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '문신사법 임시등록 | 기존 종사자 유예 특례 정리' },
  description:
    '문신사법 시행 당시 활동 중이던 종사자는 2029년 10월 28일까지 임시 개설등록이 가능합니다. 특례 조건과 기간 안에 반드시 해야 할 일을 정리했습니다.',
  keywords: ['문신사법 임시등록', '문신사법 특례', '기존 종사자 유예', '문신업소 등록', '문신사 면허', '반영구화장 자격'],
  alternates: { canonical: '/semi-permanent/temp-registration' },
}

const faqs = [
  {
    q: '임시등록이란 무엇인가요?',
    a: '문신사법 시행 당시 이미 활동 중이던 종사자가 시행 후 2년 이내에 시장·군수·구청장에게 임시로 개설등록을 할 수 있게 한 경과 조치입니다.',
  },
  {
    q: '임시등록만 하면 계속 일할 수 있나요?',
    a: '아닙니다. 유예 기간 안에 면허를 취득하고 정식 등록을 마쳐야 효력이 유지됩니다. 임시등록은 영구 면제가 아닙니다.',
  },
  { q: '기간이 언제까지인가요?', a: '시행 후 2년, 즉 2029년 10월 28일까지입니다.' },
  {
    q: '2027년 10월 이후에 시작하면 특례를 받을 수 있나요?',
    a: '받을 수 없습니다. 시행 후 신규 진입자는 특례 대상이 아니며 정식 면허가 필요합니다.',
  },
  {
    q: '지금 무엇을 준비해야 하나요?',
    a: '활동 이력 정리, 사업장 주소·연락처 관리, 위생·안전 교육과 건강진단 이력 확보가 도움이 될 수 있습니다. 다만 임시등록의 구체적 제출 서류는 시행규칙에서 확정됩니다.',
  },
  {
    q: '경력을 어떻게 증빙하나요?',
    a: '증빙 방법은 아직 확정되지 않았습니다. 시행규칙에서 정해질 예정이므로 현재는 활동 기록을 남겨두는 정도가 현실적인 준비입니다.',
  },
  {
    q: '출장으로만 일해왔는데 어떻게 되나요?',
    a: '시행 후에는 등록된 업소 안에서만 시술이 가능하고 업소 외 시술은 금지됩니다. 출장 위주로 활동 중이라면 운영 방식을 바꿔야 합니다.',
  },
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
    { '@type': 'ListItem', position: 2, name: '반영구화장', item: `${SITE_URL}/semi-permanent` },
    { '@type': 'ListItem', position: 3, name: '임시등록 특례', item: `${SITE_URL}/semi-permanent/temp-registration` },
  ],
}

const steps = [
  {
    n: '①',
    t: '시행 (2027. 10. 29.)',
    d: '이 시점에 이미 활동 중이던 종사자가 특례 대상입니다. 이후 신규 진입자는 대상이 아닙니다.',
  },
  {
    n: '②',
    t: '임시 개설등록',
    d: '시장·군수·구청장에게 임시 개설등록을 신청합니다. 제출 서류와 시설 기준은 시행규칙에서 확정될 예정입니다.',
  },
  {
    n: '③',
    t: '면허 취득',
    d: '유예 기간 안에 국가시험에 합격해 문신사 면허를 취득해야 합니다. 시험 과목과 응시 자격은 아직 미확정입니다.',
  },
  {
    n: '④',
    t: '정식 등록 (~2029. 10. 28.)',
    d: '면허를 근거로 정식 개설등록을 마쳐야 효력이 유지됩니다. 기한을 넘기면 임시등록의 효력이 사라집니다.',
  },
]

const obligations = [
  '위생·안전 교육 이수',
  '건강진단',
  '시술기록 보관 (시술일자·사용 염료·부위 등)',
  '시술 전 서면 설명 및 동의서 작성',
  '책임보험 가입',
]

const prohibitions = [
  '보호자 동의 없는 미성년자 시술',
  '업소 외 장소 시술',
  '문신 제거 행위 — 의료행위 영역',
  '거짓·과장 광고, 비문신사 광고',
]

export default function TempRegistrationPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/semi-permanent" className="hover:text-stone-700">반영구화장</Link><span>›</span>
        <span className="text-stone-600">임시등록 특례</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">기존 종사자 특례</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">이미 일하고 있다면 어떻게 되나요?</h1>
      <p className="text-stone-500 mb-8">
        문신사법 시행 당시 활동 중이던 종사자에게는 시행 후 2년의 유예가 있습니다. 다만 조건이 있습니다. 그 조건을
        정리했습니다.
      </p>

      <LawStatusBanner compact />

      {/* 한 줄 답 */}
      <section className="mb-10">
        <div className="bg-stone-900 rounded-2xl p-6">
          <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
          <p className="text-[15px] text-white leading-relaxed">
            시행일에 이미 활동 중이었다면 <strong className="text-amber-300">2029년 10월 28일까지</strong> 임시 개설등록이
            가능합니다. 다만 <strong className="text-amber-300">그 기간 안에 면허를 취득하고 정식 등록을 마쳐야</strong>{' '}
            효력이 유지됩니다. 임시등록은 영구 면제가 아닙니다.
          </p>
        </div>
      </section>

      {/* 4단계 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">순서대로 보면</h2>
        <div className="space-y-3">
          {steps.map((s) => (
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
        <div className="mt-4 bg-rose-50 border border-rose-100 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg shrink-0 mt-0.5">⚠️</span>
          <p className="text-xs text-rose-800 leading-relaxed">
            <strong>가장 흔한 오해:</strong> “임시등록만 해두면 계속 일할 수 있다”가 아닙니다. 유예 기간은 면허를 딸
            시간을 준 것이고, <strong>기간 내 면허 취득과 정식 등록이 조건</strong>입니다.
          </p>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 대상 여부 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">내가 특례 대상인가</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
          <table className="w-full text-sm min-w-[460px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">상황</th>
                <th className="text-center px-4 py-3 font-bold">특례 대상</th>
                <th className="text-left px-4 py-3 font-bold">해야 할 일</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['2027.10.29. 시점에 이미 활동 중', '해당', '2년 내 임시등록 + 면허 취득 + 정식 등록'],
                ['2027.10.29. 이후 신규 시작', '해당 없음', '처음부터 정식 면허와 개설등록'],
                ['활동을 중단했다가 시행 후 재개', '확인 필요', '시행규칙 확정 후 관할 시·군·구청에 문의'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 text-[13px]">{r[0]}</td>
                  <td className={`px-4 py-3 text-center font-bold text-[13px] ${r[1] === '해당' ? 'text-emerald-700' : 'text-stone-500'}`}>
                    {r[1]}
                  </td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 mt-3">
          세 번째 경우처럼 경계에 있는 상황의 판단 기준은 시행규칙에서 정해집니다. 확정 전에는 단정할 수 없습니다.
        </p>
      </section>

      {/* 등록 후 의무 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">등록 후 매년 이행할 의무</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-extrabold text-stone-800 mb-3">해야 하는 것</h3>
            <ul className="space-y-2 text-[13px] text-stone-600 leading-relaxed">
              {obligations.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-emerald-500 shrink-0 font-bold">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-extrabold text-stone-800 mb-3">금지되는 것</h3>
            <ul className="space-y-2 text-[13px] text-stone-600 leading-relaxed">
              {prohibitions.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-rose-500 shrink-0 font-bold">✕</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 지금 할 일 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">시행 전에 해두면 좋은 것</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <ol className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li>
              <strong className="text-stone-800">활동 이력을 정리해두세요.</strong> 임시등록 시 경력 증빙에 쓰일
              가능성이 있습니다. 증빙 방식은 아직 확정되지 않았지만, 기록이 없으면 나중에 만들 수 없습니다.
            </li>
            <li>사업장 주소·연락처를 정확히 관리하세요.</li>
            <li>위생·안전 교육과 건강진단 이력을 미리 갖춰두면 유리합니다.</li>
            <li>
              시행령·시행규칙 발표를 주시하세요.{' '}
              <Link href="/semi-permanent/law-timeline" className="text-blue-700 font-semibold hover:underline">
                일정 확인
              </Link>
            </li>
            <li>
              출장 위주로 운영 중이라면 <strong className="text-stone-800">업소 확보를 미리 검토</strong>하세요. 시행 후
              업소 외 시술은 금지됩니다.
            </li>
          </ol>
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

      <SourcesAndDisclaimer />

      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/semi-permanent/legal" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">제도 전반</p>
            <p className="font-bold text-stone-900">자격과 문신사법 →</p>
          </Link>
          <Link href="/semi-permanent/law-timeline" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">일정</p>
            <p className="font-bold text-stone-900">시행 일정 총정리 →</p>
          </Link>
          <Link href="/semi-permanent" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">전체</p>
            <p className="font-bold text-stone-900">반영구화장 허브 →</p>
          </Link>
        </div>
      </section>

      <OtherCategories />
    </div>
  )
}
