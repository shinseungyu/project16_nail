import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import { LawStatusBanner, SourcesAndDisclaimer, OtherCategories } from '@/components/SemiPermanentNotice'
import { procedures, regionPrices, removalCost } from '@/data/semi-permanent'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '눈썹문신 가격 | 종류별 비용과 리터치까지 총정리' },
  description:
    '눈썹문신 가격을 종류별로 정리했습니다. 자연눈썹 20~50만원, 콤보 25~60만원. 리터치 포함 여부와 지역별 차이, 제거 비용까지 확인하세요.',
  keywords: ['눈썹문신 가격', '반영구 눈썹 가격', '자연눈썹 가격', '콤보눈썹 가격', '눈썹문신 리터치 비용'],
  alternates: { canonical: '/semi-permanent/price' },
}

const faqs = [
  {
    q: '왜 가격 차이가 이렇게 큰가요?',
    a: '리터치 포함 여부, 지역, 시술자 경력, 색소 종류가 주요 변수입니다. 리터치를 더하면 실제 차이는 줄어듭니다.',
  },
  { q: '얼마나 가나요?', a: '종류에 따라 1~3년입니다. 피부 타입과 관리에 따라 편차가 큽니다.' },
  {
    q: '리터치는 꼭 해야 하나요?',
    a: '대부분 1~2개월 후 보정이 기본 과정입니다. 첫 시술만으로는 색이 고르게 자리 잡지 않는 경우가 많습니다.',
  },
  {
    q: '지울 수 있나요?',
    a: '레이저 제거가 가능하지만 3~8회, 총 50~200만원 이상이 들 수 있고 완전한 복구가 어려울 수 있습니다. 문신 제거는 의료행위 영역입니다.',
  },
  {
    q: '미용사 자격증으로 시술할 수 있나요?',
    a: '아닙니다. 반영구화장은 「문신사법」상 ‘문신행위’로 규정되어 미용사 면허와는 별도 체계입니다. 2027년 10월 29일 시행 예정이며, 자세한 내용은 반영구화장 자격과 법 페이지를 참고하세요. 2026년 8월 기준입니다.',
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
    { '@type': 'ListItem', position: 3, name: '가격', item: `${SITE_URL}/semi-permanent/price` },
  ],
}

const checkBeforeItems = [
  {
    t: '시술자의 자격',
    d: '반영구화장은 문신사법 적용 대상입니다. 2027년 10월 시행 후에는 문신사 면허와 업소 등록 여부가 확인 기준이 됩니다.',
  },
  { t: '디자인 사전 합의', d: '그려보고 사진으로 남기세요. 되돌리기 어렵습니다.' },
  { t: '색소 성분과 알레르기', d: '사전 패치 테스트 여부를 확인하세요.' },
  { t: '리터치 포함 여부와 횟수', d: '몇 회까지 포함인지, 기간 제한이 있는지 확인하세요.' },
  { t: '부작용 발생 시 대응', d: '붓기·통증·진물이 지속되면 즉시 의료기관 진료를 받으세요.' },
]

export default function SemiPermanentPricePage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/semi-permanent" className="hover:text-stone-700">반영구화장</Link><span>›</span>
        <span className="text-stone-600">가격</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">가격 정보</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">눈썹문신 가격, 종류별로 얼마인가요?</h1>

      {/* 한 줄 답 */}
      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          눈썹문신은 종류에 따라 <strong className="text-amber-300">20만원부터 70만원까지</strong>입니다. 자연눈썹(엠보)
          20~50만원, 콤보 25~60만원이며, 대부분 <strong className="text-amber-300">리터치 1회가 포함</strong>되어 있는지가
          실제 가격을 가릅니다.
        </p>
      </div>

      <LawStatusBanner />

      {/* 종류별 가격표 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">종류별 가격표</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[560px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">종류</th>
                <th className="text-left px-4 py-3 font-bold">방식</th>
                <th className="text-center px-4 py-3 font-bold">소요시간</th>
                <th className="text-center px-4 py-3 font-bold">가격 범위</th>
                <th className="text-center px-4 py-3 font-bold">유지 기간</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {procedures.map((p) => (
                <tr key={p.name} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{p.name}</td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{p.method}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{p.time}</td>
                  <td className="px-4 py-3 text-center font-semibold whitespace-nowrap">{p.price}</td>
                  <td className="px-4 py-3 text-center text-stone-500 whitespace-nowrap">{p.keep}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-stone-400">2026년 8월 기준 참고 범위입니다. 개별 매장의 실제 가격은 다를 수 있습니다.</p>
      </section>

      {/* 리터치 구조 ★핵심 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">실제 가격을 가르는 것 — 리터치 포함 여부</h2>
        <p className="text-sm text-rose-600 font-bold mb-4">★ 핵심</p>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-4">
          반영구는 <strong className="text-stone-800">1회로 끝나지 않습니다.</strong> 시술 1~2개월 후 색이 자리 잡는
          과정에서 보정이 필요합니다.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">구성</th>
                <th className="text-center px-4 py-3 font-bold">표기 가격</th>
                <th className="text-center px-4 py-3 font-bold">실제 지출</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              <tr className="hover:bg-stone-50/60">
                <td className="px-4 py-3 font-medium text-stone-800">리터치 포함 패키지</td>
                <td className="px-4 py-3 text-center">40만원</td>
                <td className="px-4 py-3 text-center font-bold">40만원</td>
              </tr>
              <tr className="hover:bg-stone-50/60">
                <td className="px-4 py-3 font-medium text-stone-800">리터치 별도</td>
                <td className="px-4 py-3 text-center">28만원</td>
                <td className="px-4 py-3 text-center font-bold">28만원 + 12만원 = 40만원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>표기 가격이 싸 보여도 리터치를 더하면 비슷해지는 경우가 많습니다.</strong> 예약 전 반드시 “리터치가
            포함인지, 몇 회인지, 기간 제한이 있는지”를 확인하세요.
          </p>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 지역별 시세 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">지역별 시세</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">지역</th>
                <th className="text-center px-4 py-3 font-bold">자연눈썹</th>
                <th className="text-center px-4 py-3 font-bold">콤보</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {regionPrices.map((r) => (
                <tr key={r.region} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r.region}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{r.natural}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{r.combo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-stone-400">2026년 8월 기준 참고 범위입니다.</p>
      </section>

      {/* 제거 비용 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">제거 비용도 알아두세요</h2>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-4">
          잘못된 시술을 지우려면 레이저 제거가 필요합니다.
        </p>
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
        <div className="bg-rose-50 border border-rose-100 rounded-xl p-4">
          <p className="text-xs text-rose-800 leading-relaxed">
            <strong>제거가 시술보다 훨씬 비싸고 어렵습니다.</strong> 그래서 가격보다 디자인 상담이 중요합니다. 저렴하다고
            서둘러 결정하면 몇 배의 비용을 치를 수 있습니다.{' '}
            <Link href="/semi-permanent/removal" className="font-bold underline underline-offset-2">
              제거 자세히 보기
            </Link>
          </p>
        </div>
      </section>

      {/* 시술 전 확인 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">시술 전 반드시 확인할 것</h2>
        <div className="space-y-3">
          {checkBeforeItems.map((c, i) => (
            <div key={c.t} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
              <span className="shrink-0 w-8 h-8 bg-stone-100 text-stone-700 rounded-full flex items-center justify-center text-xs font-extrabold">
                {i + 1}
              </span>
              <div>
                <h3 className="text-sm font-extrabold text-stone-800 mb-1">{c.t}</h3>
                <p className="text-[13px] text-stone-500 leading-relaxed">{c.d}</p>
              </div>
            </div>
          ))}
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
            <p className="text-xs font-semibold text-stone-400 mb-1">자격·법</p>
            <p className="font-bold text-stone-900">문신사법 정리 →</p>
          </Link>
          <Link href="/semi-permanent/eyebrow" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">종류</p>
            <p className="font-bold text-stone-900">눈썹문신 종류 →</p>
          </Link>
          <Link href="/semi-permanent/aftercare" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">시술 후</p>
            <p className="font-bold text-stone-900">시술 후 관리 →</p>
          </Link>
        </div>
      </section>

      <OtherCategories />
    </div>
  )
}
