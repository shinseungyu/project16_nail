import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import { LawStatusBanner, SourcesAndDisclaimer, OtherCategories } from '@/components/SemiPermanentNotice'
import { afterEnforcement, undecidedItems, lawTimeline } from '@/data/semi-permanent'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '반영구화장 자격 | 문신사법 시행 일정과 면허 총정리' },
  description:
    '문신사법이 2025년 10월 공포돼 2027년 10월 29일 시행됩니다. 반영구화장 면허 제도와 기존 종사자 임시등록 특례, 지금 무엇을 준비해야 하는지 정리했습니다.',
  keywords: ['반영구화장 자격', '문신사법', '문신사 면허', '반영구 합법화', '반영구화장 자격증', '문신사법 시행일'],
  alternates: { canonical: '/semi-permanent/legal' },
}

const faqs = [
  {
    q: '지금 반영구 시술을 해도 되나요?',
    a: '2025년 5월 대법원 판례 변경으로 비의료인의 통상적 문신이 무면허 의료행위가 아니라는 판단이 나왔습니다. 다만 문신사법 시행(2027. 10. 29.) 전까지는 종전 법령이 적용되며, 면허·등록 제도는 아직 시행되지 않았습니다. 개별 사안은 전문가 상담을 권합니다.',
  },
  { q: '문신사법은 언제 시행되나요?', a: '2025년 10월 28일 공포됐고, 2027년 10월 29일 정식 시행됩니다.' },
  {
    q: '반영구화장도 문신사법 적용을 받나요?',
    a: '네. 미용문신(반영구화장)과 서화문신을 모두 ‘문신행위’로 통합 규정합니다.',
  },
  {
    q: '기존에 일하던 사람은 어떻게 되나요?',
    a: '시행 후 2년 이내(~2029. 10. 28.) 임시 개설등록이 가능합니다. 다만 그 기간 안에 면허를 취득하고 정식 등록을 마쳐야 합니다.',
  },
  {
    q: '시험 과목이 뭔가요?',
    a: '아직 확정되지 않았습니다. 대통령령으로 정할 예정이며 한국보건의료인국가시험원이 출제기준을 개발 중입니다.',
  },
  {
    q: '출장 시술은 계속할 수 있나요?',
    a: '시행 후에는 등록된 업소 안에서만 시술이 가능하며 업소 외 시술은 금지됩니다.',
  },
  {
    q: '미용사 자격증이 있으면 유리한가요?',
    a: '문신사 면허와는 별개 체계입니다. 다만 위생 관련 지식은 겹치는 부분이 있을 수 있습니다.',
  },
  { q: '문신 제거도 할 수 있나요?', a: '문신 제거는 의료행위 영역으로 문신사의 업무 범위에서 제외됩니다.' },
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
    { '@type': 'ListItem', position: 3, name: '자격과 법', item: `${SITE_URL}/semi-permanent/legal` },
  ],
}

const licenseCompare = [
  ['미용사 자격증으로 반영구를 할 수 있나요?', '아닙니다. 반영구화장은 문신행위로 규정되어 별도의 문신사 면허 체계입니다.'],
  ['그럼 미용사 자격증은 쓸모없나요?', '반영구 자체에는 직접 쓰이지 않습니다. 다만 눈썹 손질·피부관리 등 인접 업무에는 여전히 필요합니다.'],
  ['민간 반영구 자격증은요?', '국가 면허가 아닙니다. 시행 후에는 국가시험 면허가 기준이 됩니다.'],
]

export default function SemiPermanentLegalPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/semi-permanent" className="hover:text-stone-700">반영구화장</Link><span>›</span>
        <span className="text-stone-600">자격과 법</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자격·법령</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">반영구화장, 지금 자격이 어떻게 되나요?</h1>
      <p className="text-stone-500 mb-8">
        반영구화장은 2025년 10월 「문신사법」 공포로 미용업이 아닌 문신사법의 적용 대상이 됐습니다. 미용사 면허
        체계와는 별개입니다. 시점별로 무엇이 달라지는지 정리했습니다.
      </p>

      <LawStatusBanner compact />

      {/* 1. 시간순 정리 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">시간순으로 정리하면</h2>
        <div className="space-y-3">
          {lawTimeline.map((t) => (
            <div
              key={t.when}
              className={`rounded-2xl p-5 border shadow-sm ${
                t.tone === 'key' ? 'bg-white border-stone-300' : 'bg-stone-50 border-stone-100'
              }`}
            >
              <div className="flex items-baseline gap-3 mb-1.5 flex-wrap">
                <span className="text-xs font-extrabold text-stone-400 shrink-0">{t.when}</span>
                <h3 className={`text-sm font-extrabold ${t.tone === 'key' ? 'text-stone-900' : 'text-stone-600'}`}>
                  {t.label}
                </h3>
              </div>
              <p className="text-[13px] text-stone-600 leading-relaxed">{t.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-rose-50 border border-rose-100 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg shrink-0 mt-0.5">⚠️</span>
          <p className="text-xs text-rose-800 leading-relaxed">
            <strong>지금(시행 전)은 어떻게 되나요?</strong> 시행일 전까지는 종전 법령이 그대로 적용됩니다. 문신사법에
            따른 면허나 등록의 효력은 아직 발생하지 않았습니다. <strong>“법이 통과됐으니 이제 마음대로 해도 된다”는
            해석은 위험합니다.</strong>
          </p>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 2. 시행 후 달라지는 것 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">시행 후 무엇이 달라지나</h2>
        <p className="text-sm text-stone-500 mb-4">2027년 10월 29일부터 적용되는 5가지</p>
        <div className="space-y-3">
          {afterEnforcement.map((s, i) => (
            <div key={s.title} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
              <span className="shrink-0 w-9 h-9 bg-stone-800 text-white rounded-full flex items-center justify-center text-sm font-extrabold">
                {i + 1}
              </span>
              <div>
                <h3 className="text-sm font-extrabold text-stone-800 mb-1">{s.title}</h3>
                <p className="text-[13px] text-stone-500 leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-500 mt-3">
          기존 종사자 특례는 별도로 정리했습니다 —{' '}
          <Link href="/semi-permanent/temp-registration" className="text-rose-700 font-semibold underline decoration-2 decoration-rose-300 underline-offset-2 hover:decoration-rose-600 transition-colors">
            임시등록 특례 자세히 보기
          </Link>
        </p>
      </section>

      {/* 3. 미확정 사항 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">아직 안 정해진 것</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">항목</th>
                <th className="text-left px-4 py-3 font-bold">상태</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {undecidedItems.map((r) => (
                <tr key={r.item} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r.item}</td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs text-amber-900 leading-relaxed">
            한국보건의료인국가시험원이 출제기준 개발과 전산시스템 구축을 진행 중입니다. 즉{' '}
            <strong>“무엇을 공부해야 하는지”는 아직 아무도 모릅니다.</strong> 지금 “문신사 국가시험 대비반”을
            홍보하는 곳이 있다면 근거를 확인하세요.
          </p>
        </div>
      </section>

      {/* 4. 미용사 자격증과의 관계 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">미용사 자격증과의 관계</h2>
        <div className="space-y-3">
          {licenseCompare.map(([q, a]) => (
            <div key={q} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-[14px] font-bold text-stone-800 mb-2">{q}</h3>
              <p className="text-[13px] text-stone-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 지금 준비할 수 있는 것 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">지금 준비할 수 있는 것</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-extrabold text-stone-800 mb-3">이미 종사 중이라면</h3>
            <ol className="space-y-2 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
              <li><strong className="text-stone-800">활동 이력을 정리해두세요</strong> — 임시등록 시 경력 증빙에 쓰일 가능성이 있습니다.</li>
              <li>사업장 주소·연락처를 정확히 관리하세요.</li>
              <li>시행령·시행규칙 발표를 주시하세요.</li>
              <li>위생·안전 교육, 건강진단 이력을 미리 갖춰두면 유리합니다.</li>
            </ol>
          </div>
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-extrabold text-stone-800 mb-3">이제 시작하려 한다면</h3>
            <ol className="space-y-2 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
              <li><strong className="text-stone-800">시험 과목이 확정될 때까지 기다리는 것도 방법입니다.</strong> 지금 어떤 커리큘럼도 국가시험 기준에 맞춰져 있지 않습니다.</li>
              <li>기술 교육을 받되, “국가자격 보장” 같은 표현은 근거가 없으니 주의하세요.</li>
              <li>2027년 10월 이후 신규 진입자는 <strong className="text-stone-800">임시등록 특례 대상이 아닙니다.</strong> 정식 면허가 필요합니다.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
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

      {/* 내부링크 */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/semi-permanent/law-timeline" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">일정</p>
            <p className="font-bold text-stone-900">시행 일정 총정리 →</p>
          </Link>
          <Link href="/semi-permanent/temp-registration" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">기존 종사자</p>
            <p className="font-bold text-stone-900">임시등록 특례 →</p>
          </Link>
          <Link href="/semi-permanent/price" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">비용</p>
            <p className="font-bold text-stone-900">눈썹문신 가격 →</p>
          </Link>
        </div>
      </section>

      <OtherCategories />
    </div>
  )
}
