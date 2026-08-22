import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import { LawStatusBanner, SourcesAndDisclaimer, OtherCategories } from '@/components/SemiPermanentNotice'
import { lawTimeline, undecidedItems } from '@/data/semi-permanent'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '문신사법 시행일 | 공포부터 유예 기간까지 일정 총정리' },
  description:
    '문신사법은 2025년 10월 28일 공포, 2027년 10월 29일 시행됩니다. 대법원 판례 변경부터 기존 종사자 유예 종료(2029년 10월)까지 시점별로 정리했습니다.',
  keywords: ['문신사법 시행일', '문신사법', '문신사법 언제', '반영구 합법화', '문신사 국가시험', '문신사법 유예'],
  alternates: { canonical: '/semi-permanent/law-timeline' },
}

const faqs = [
  { q: '문신사법은 언제 공포됐나요?', a: '2025년 10월 28일 공포됐습니다. 법률 제21070호입니다.' },
  { q: '언제부터 시행되나요?', a: '2027년 10월 29일부터 정식 시행됩니다. 공포 후 2년의 준비 기간을 둔 것입니다.' },
  {
    q: '시행일 전까지는 어떤 법이 적용되나요?',
    a: '종전 법령이 그대로 적용됩니다. 문신사법에 따른 면허나 등록의 효력은 아직 발생하지 않았습니다.',
  },
  {
    q: '왜 2년이나 미뤘나요?',
    a: '시행령·시행규칙 제정과 국가시험 출제기준 개발, 전산시스템 구축에 시간이 필요하기 때문입니다.',
  },
  {
    q: '첫 국가시험은 언제인가요?',
    a: '2027년 말로 예정되어 있습니다. 다만 시험 과목과 응시 자격은 아직 확정되지 않았습니다.',
  },
  {
    q: '기존 종사자 유예는 언제 끝나나요?',
    a: '시행 후 2년, 즉 2029년 10월 28일까지입니다. 그 기간 안에 면허를 취득하고 정식 등록을 마쳐야 합니다.',
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
    { '@type': 'ListItem', position: 3, name: '시행 일정', item: `${SITE_URL}/semi-permanent/law-timeline` },
  ],
}

const toneStyle: Record<string, string> = {
  past: 'border-stone-200 bg-stone-50',
  key: 'border-stone-800 bg-white',
  now: 'border-amber-300 bg-amber-50',
  future: 'border-stone-200 bg-white',
}

export default function LawTimelinePage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/semi-permanent" className="hover:text-stone-700">반영구화장</Link><span>›</span>
        <span className="text-stone-600">시행 일정</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">시행 일정</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">문신사법, 언제 무엇이 바뀌나요?</h1>
      <p className="text-stone-500 mb-8">
        2025년 5월 판례 변경부터 2029년 10월 유예 종료까지, 반영구화장 종사자에게 실제로 영향을 주는 시점만 골라
        정리했습니다.
      </p>

      <LawStatusBanner compact />

      {/* 핵심 3개 날짜 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">먼저 외울 날짜 3개</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { d: '2025. 10. 28.', t: '공포', s: '법률 제21070호' },
            { d: '2027. 10. 29.', t: '시행', s: '면허·등록 제도 작동' },
            { d: '2029. 10. 28.', t: '유예 종료', s: '기존 종사자 특례 마감' },
          ].map((x) => (
            <div key={x.d} className="bg-stone-900 rounded-2xl p-5 text-center">
              <p className="text-[11px] text-white/50 mb-1">{x.t}</p>
              <p className="text-base font-extrabold text-white mb-1 whitespace-nowrap">{x.d}</p>
              <p className="text-[11px] text-white/60 leading-relaxed">{x.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 전체 타임라인 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">전체 흐름</h2>
        <div className="space-y-3">
          {lawTimeline.map((t) => (
            <div key={t.when} className={`rounded-2xl p-5 border shadow-sm ${toneStyle[t.tone] ?? 'bg-white border-stone-100'}`}>
              <div className="flex items-baseline gap-3 mb-1.5 flex-wrap">
                <span className="text-xs font-extrabold text-stone-400 shrink-0">{t.when}</span>
                <h3 className="text-sm font-extrabold text-stone-900">{t.label}</h3>
                {t.tone === 'now' && (
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-100 rounded-full px-2 py-0.5">
                    지금 이 단계
                  </span>
                )}
              </div>
              <p className="text-[13px] text-stone-600 leading-relaxed">{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 시점별 내 상황 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">시점별로 내 상황은</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[560px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">시점</th>
                <th className="text-left px-4 py-3 font-bold">이미 종사 중이라면</th>
                <th className="text-left px-4 py-3 font-bold">신규 진입이라면</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['지금 ~ 2027.10.28.', '종전 법령 적용. 활동 이력·교육·건강진단 기록을 정리해두는 준비 기간', '시험 과목이 미확정이라 기다리는 것도 선택지'],
                ['2027.10.29. 이후', '2년 내 임시 개설등록 가능. 그 안에 면허 취득 필요', '임시등록 특례 대상 아님. 정식 면허 필요'],
                ['2029.10.29. 이후', '면허·정식 등록을 마치지 않으면 효력 상실', '동일하게 정식 면허 필요'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap text-[13px]">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500">
          기존 종사자 특례는 조건이 까다롭습니다 —{' '}
          <Link href="/semi-permanent/temp-registration" className="text-rose-700 font-semibold underline decoration-2 decoration-rose-300 underline-offset-2 hover:decoration-rose-600 transition-colors">
            임시등록 특례 자세히 보기
          </Link>
        </p>
      </section>

      {/* 미확정 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">아직 날짜가 안 잡힌 것</h2>
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
            시행령·시행규칙이 확정되면 시험 과목과 응시 자격, 시설·장비 기준이 정해집니다.{' '}
            <strong>확정 전까지는 “국가시험 대비” 커리큘럼의 근거를 확인하세요.</strong>
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

      <SourcesAndDisclaimer />

      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/semi-permanent/legal" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">제도 전반</p>
            <p className="font-bold text-stone-900">자격과 문신사법 →</p>
          </Link>
          <Link href="/semi-permanent/temp-registration" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">기존 종사자</p>
            <p className="font-bold text-stone-900">임시등록 특례 →</p>
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
