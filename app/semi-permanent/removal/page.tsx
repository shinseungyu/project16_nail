import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import { LawStatusBanner, SourcesAndDisclaimer, OtherCategories } from '@/components/SemiPermanentNotice'
import { removalCost } from '@/data/semi-permanent'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '눈썹문신 제거 | 레이저 비용·횟수와 한계 정리' },
  description:
    '반영구화장 제거는 레이저로 3~8회, 총 50~200만원 이상이 들 수 있고 완전한 복구가 어려울 수 있습니다. 제거가 시술보다 어려운 이유를 정리했습니다.',
  keywords: ['눈썹문신 제거', '반영구 제거', '반영구 제거 비용', '눈썹문신 레이저', '반영구 지우기'],
  alternates: { canonical: '/semi-permanent/removal' },
}

const faqs = [
  {
    q: '반영구 제거는 어디서 받나요?',
    a: '문신 제거는 의료행위 영역입니다. 문신사법에서도 문신 제거는 문신사의 업무 범위에서 제외됩니다. 의료기관에서 상담받으세요.',
  },
  {
    q: '몇 번 받아야 지워지나요?',
    a: '색소 종류와 주입 깊이에 따라 3~8회가 필요할 수 있습니다. 회차와 결과는 개인차가 크며 사전에 단정할 수 없습니다.',
  },
  {
    q: '비용은 얼마나 드나요?',
    a: '1회 10~30만원, 총 50~200만원 이상이 들 수 있습니다. 2026년 8월 기준 참고 범위이며 의료기관에 따라 다릅니다.',
  },
  {
    q: '완전히 원래대로 돌아가나요?',
    a: '완전한 원상복구가 어려울 수 있습니다. 색소가 일부 남거나 피부 상태가 시술 전과 달라질 수 있습니다.',
  },
  {
    q: '제거 대신 덮어서 수정할 수 있나요?',
    a: '기존 색소가 남아 있는 상태에서는 선택지가 제한됩니다. 색과 형태를 크게 바꾸려면 제거가 선행돼야 하는 경우가 있습니다. 판단은 의료기관·시술자와 상의하세요.',
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
    { '@type': 'ListItem', position: 3, name: '제거', item: `${SITE_URL}/semi-permanent/removal` },
  ],
}

export default function RemovalPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/semi-permanent" className="hover:text-stone-700">반영구화장</Link><span>›</span>
        <span className="text-stone-600">제거</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">제거</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">반영구, 지울 수 있나요?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          레이저 제거가 가능하지만 <strong className="text-amber-300">3~8회</strong>,{' '}
          <strong className="text-amber-300">총 50~200만원 이상</strong>이 들 수 있고{' '}
          <strong className="text-amber-300">완전한 원상복구가 어려울 수 있습니다.</strong> 문신 제거는 의료행위 영역이라
          의료기관에서 받아야 합니다.
        </p>
      </div>

      <LawStatusBanner />

      {/* 제거는 의료행위 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">먼저 알아야 할 것 — 제거는 의료행위입니다</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm mb-3">
          <p className="text-[14px] text-stone-600 leading-relaxed">
            2025년 10월 공포된 「문신사법」에서도{' '}
            <strong className="text-stone-800">문신 제거 행위는 문신사의 업무 범위에서 제외</strong>됩니다. 시술은
            문신사법의 적용을 받게 되지만, 제거는 여전히 의료 영역입니다. 제거를 원한다면 의료기관에서 상담받으세요.
          </p>
        </div>
        <p className="text-xs text-stone-500">
          시술 쪽 자격 체계는 별도로 정리했습니다 —{' '}
          <Link href="/semi-permanent/legal" className="text-rose-700 font-semibold underline decoration-2 decoration-rose-300 underline-offset-2 hover:decoration-rose-600 transition-colors">
            반영구화장 자격과 문신사법
          </Link>
        </p>
      </section>

      {/* 비용 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">비용과 횟수</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm mb-3">
          <dl className="divide-y divide-stone-50 text-sm">
            {removalCost.map((r) => (
              <div key={r.item} className="flex py-2.5">
                <dt className="w-28 shrink-0 text-stone-400 font-medium">{r.item}</dt>
                <dd className="text-stone-700 font-medium">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="text-[11px] text-stone-400">
          2026년 8월 기준 참고 범위입니다. 실제 비용과 횟수는 색소 종류·주입 깊이·부위에 따라 크게 달라지며, 의료기관
          상담에서 확인해야 합니다.
        </p>
      </section>

      <AdUnit slot="1591000951" />

      {/* 시술 vs 제거 비교 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">시술과 제거를 비교하면</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">구분</th>
                <th className="text-center px-4 py-3 font-bold">시술</th>
                <th className="text-center px-4 py-3 font-bold">제거</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['비용', '20~70만원', '50~200만원 이상'],
                ['횟수', '1회 + 리터치', '3~8회'],
                ['수행 주체', '문신사 (시행 후 면허 필요)', '의료기관'],
                ['결과 예측', '상담으로 조율 가능', '완전 복구가 어려울 수 있음'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 text-center text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-center text-[13px] font-semibold text-rose-700">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-rose-50 border border-rose-100 rounded-xl p-4">
          <p className="text-xs text-rose-800 leading-relaxed">
            <strong>제거가 시술보다 훨씬 비싸고 어렵습니다.</strong> 그래서 가격보다 디자인 상담이 중요합니다. 저렴하다고
            서둘러 결정하면 몇 배의 비용을 치를 수 있습니다. <strong>시술 전 디자인 합의가 최선의 예방입니다.</strong>
          </p>
        </div>
      </section>

      {/* 예방 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">제거까지 가지 않으려면</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <ol className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li>
              <strong className="text-stone-800">디자인을 그려보고 사진으로 남기세요.</strong> 말로만 합의하면 결과가
              달라졌을 때 근거가 없습니다.
            </li>
            <li>농도는 낮게 시작하는 편이 안전합니다. 진하게 하는 것은 쉽고, 옅게 되돌리는 것은 어렵습니다.</li>
            <li>색소 성분과 알레르기 가능성, 사전 패치 테스트 여부를 확인하세요.</li>
            <li>
              유행하는 형태보다 본인 얼굴에 맞는 형태를 우선하세요. 1~3년간 유지됩니다.{' '}
              <Link href="/semi-permanent/eyebrow" className="text-rose-700 font-semibold underline decoration-2 decoration-rose-300 underline-offset-2 hover:decoration-rose-600 transition-colors">
                종류별 차이 보기
              </Link>
            </li>
            <li>딱지 탈락 직후의 색으로 판단하지 마세요. 4~8주 후 정착한 색을 기준으로 리터치를 논의합니다.</li>
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
          <Link href="/semi-permanent/price" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">비용</p>
            <p className="font-bold text-stone-900">시술 가격 →</p>
          </Link>
          <Link href="/semi-permanent/aftercare" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">시술 후</p>
            <p className="font-bold text-stone-900">회복과 관리 →</p>
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
