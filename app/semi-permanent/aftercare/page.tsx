import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import { LawStatusBanner, SourcesAndDisclaimer, OtherCategories } from '@/components/SemiPermanentNotice'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '눈썹문신 후 관리 | 딱지·색 빠짐과 리터치 시기 정리' },
  description:
    '반영구화장 시술 후 딱지가 생기고 색이 옅어지는 과정은 정상입니다. 회복 단계별 관리와 피해야 할 것, 리터치 시기를 정리했습니다.',
  keywords: ['눈썹문신 후 관리', '반영구 딱지', '눈썹문신 색빠짐', '눈썹문신 리터치 시기', '반영구 회복'],
  alternates: { canonical: '/semi-permanent/aftercare' },
}

const stages = [
  {
    period: '시술 직후 ~ 2일',
    title: '붓기와 진한 색',
    body: '시술 직후에는 색이 의도한 것보다 진하게 보이고 약간의 붓기가 있을 수 있습니다. 이 시점의 색이 최종 색이 아닙니다.',
  },
  {
    period: '3일 ~ 7일',
    title: '딱지 생성과 탈락',
    body: '얇은 딱지가 생기고 떨어집니다. 억지로 떼면 색이 불균일하게 빠질 수 있습니다. 자연히 떨어지도록 두는 것이 권장됩니다.',
  },
  {
    period: '1주 ~ 4주',
    title: '색이 옅어지는 구간',
    body: '딱지가 떨어진 뒤 색이 눈에 띄게 옅어집니다. 정상적인 과정이며, 이 시기에 “실패했다”고 판단하기는 이릅니다.',
  },
  {
    period: '4주 ~ 8주',
    title: '색 정착',
    body: '색이 자리를 잡습니다. 이 시점의 상태를 기준으로 리터치 여부와 범위를 판단합니다.',
  },
  {
    period: '1~2개월 후',
    title: '리터치',
    body: '대부분 이 시기에 보정을 진행합니다. 기본 과정에 포함된 경우가 많으니 예약 시 포함 여부를 확인하세요.',
  },
]

const avoid = [
  '1~2주간 사우나·수영장·과도한 자외선 노출',
  '딱지를 손으로 떼거나 긁는 행동',
  '시술 부위에 자극적인 각질 제거·필링',
  '시술 부위를 문지르는 세안',
]

const faqs = [
  {
    q: '딱지가 떨어지고 색이 너무 옅어졌어요. 실패인가요?',
    a: '딱지 탈락 후 색이 옅어지는 것은 정상적인 과정입니다. 색은 보통 4~8주에 걸쳐 자리를 잡습니다. 이 시점의 상태를 기준으로 리터치 범위를 판단합니다.',
  },
  {
    q: '리터치는 언제 하나요?',
    a: '대부분 1~2개월 후에 진행합니다. 색이 정착한 뒤에 보정해야 결과를 예측할 수 있기 때문입니다.',
  },
  {
    q: '세수는 언제부터 해도 되나요?',
    a: '시술자의 안내를 따르는 것이 우선입니다. 일반적으로 시술 부위를 문지르지 않고 가볍게 관리하도록 안내되며, 구체적인 기간은 시술 방식에 따라 다릅니다.',
  },
  {
    q: '붓기가 계속되는데 괜찮나요?',
    a: '붓기·통증·진물이 지속되거나 심해지면 즉시 의료기관 진료를 받으세요. 자체 판단으로 방치하지 마세요.',
  },
  {
    q: '얼마나 유지되나요?',
    a: '종류에 따라 1~3년입니다. 피부 타입, 자외선 노출, 관리 습관에 따라 편차가 큽니다.',
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
    { '@type': 'ListItem', position: 3, name: '시술 후 관리', item: `${SITE_URL}/semi-permanent/aftercare` },
  ],
}

export default function AftercarePage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/semi-permanent" className="hover:text-stone-700">반영구화장</Link><span>›</span>
        <span className="text-stone-600">시술 후 관리</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">시술 후 관리</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">시술 후에 색이 왜 이렇게 변하나요?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          시술 직후 진하던 색은 <strong className="text-amber-300">딱지가 떨어지며 옅어지고</strong>,{' '}
          <strong className="text-amber-300">4~8주에 걸쳐 자리를 잡습니다.</strong> 대부분 1~2개월 후 리터치로 보정합니다.
          이 과정은 정상이며, 딱지 탈락 직후의 색으로 결과를 판단하기는 이릅니다.
        </p>
      </div>

      <LawStatusBanner />

      {/* 단계별 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">회복 단계</h2>
        <div className="space-y-3">
          {stages.map((s, i) => (
            <div key={s.period} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
              <span className="shrink-0 w-9 h-9 bg-stone-800 text-white rounded-full flex items-center justify-center text-sm font-extrabold">
                {i + 1}
              </span>
              <div>
                <p className="text-[11px] font-extrabold text-stone-400 mb-0.5">{s.period}</p>
                <h3 className="text-sm font-extrabold text-stone-800 mb-1">{s.title}</h3>
                <p className="text-[13px] text-stone-500 leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-stone-400 mt-3">
          기간은 일반적인 경과이며 개인차가 있습니다. 구체적인 관리 방법은 시술자의 안내를 우선하세요.
        </p>
      </section>

      <AdUnit slot="1591000951" />

      {/* 피해야 할 것 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">회복 중 피하는 것이 권장되는 것</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <ul className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed">
            {avoid.map((t) => (
              <li key={t} className="flex gap-2">
                <span className="text-rose-500 shrink-0 font-bold">✕</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 bg-rose-50 border border-rose-100 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg shrink-0 mt-0.5">⚠️</span>
          <p className="text-xs text-rose-800 leading-relaxed">
            <strong>이상 증상이 있으면 지체하지 마세요.</strong> 붓기·통증·진물이 지속되거나 심해지면 즉시 의료기관
            진료를 받으세요. 이 페이지는 일반적인 경과를 설명한 것이고, 의료적 판단을 대체하지 않습니다.
          </p>
        </div>
      </section>

      {/* 유지 기간 변수 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">유지 기간을 좌우하는 것</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">요인</th>
                <th className="text-left px-4 py-3 font-bold">영향</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['피부 타입', '지성 피부에서는 결 방식(엠보)이 번져 유지 기간이 짧아지는 경향이 있습니다.'],
                ['자외선 노출', '색소가 옅어지는 속도를 빠르게 합니다.'],
                ['시술 방식', '면으로 채우는 방식이 결 방식보다 대체로 오래 유지됩니다.'],
                ['각질 관리 습관', '시술 부위의 잦은 각질 제거는 색 유지에 불리합니다.'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

      <SourcesAndDisclaimer withSources={false} />

      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/semi-permanent/eyebrow" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">종류</p>
            <p className="font-bold text-stone-900">눈썹문신 종류 →</p>
          </Link>
          <Link href="/semi-permanent/removal" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">제거</p>
            <p className="font-bold text-stone-900">반영구 제거 →</p>
          </Link>
          <Link href="/semi-permanent/price" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">비용</p>
            <p className="font-bold text-stone-900">가격 정리 →</p>
          </Link>
        </div>
      </section>

      <OtherCategories />
    </div>
  )
}
