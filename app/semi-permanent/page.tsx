import type { Metadata } from 'next'
import { hreflang } from '@/lib/hreflang'
import RelatedQna from '@/components/RelatedQna'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import HubQuickLinks from '@/components/HubQuickLinks'
import { LawStatusBanner, SourcesAndDisclaimer, OtherCategories } from '@/components/SemiPermanentNotice'
import { procedures } from '@/data/semi-permanent'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '반영구화장·눈썹문신 | 자격·시술 종류·가격 총정리 2026' },
  description:
    '반영구화장 눈썹문신 가격 20~60만원. 시술 종류별 차이와 유지 기간, 그리고 문신사법 시행으로 달라지는 자격·법적 요건을 2026년 8월 기준으로 정리했습니다.',
  keywords: ['반영구화장', '눈썹문신', '눈썹문신 가격', '반영구 눈썹', '반영구화장 자격', '눈썹문신 종류', '문신사법'],
  alternates: { canonical: '/semi-permanent', languages: hreflang('/semi-permanent') },
}

const faqs = [
  {
    q: '미용사 자격증이 있으면 반영구 시술을 할 수 있나요?',
    a: '아닙니다. 반영구화장은 「문신사법」상 ‘문신행위’로 규정되어 미용사 면허와는 별도의 문신사 면허 체계입니다. 2027년 10월 29일 시행 예정이며, 2026년 8월 기준입니다. 보건복지부와 관할 보건소에서 최신 기준을 확인하세요.',
  },
  {
    q: '민간 반영구 자격증은 효력이 없나요?',
    a: '기술 교육 이수 증명으로서의 의미는 있지만 국가 면허가 아닙니다. 문신사법 시행 후에는 국가시험 면허가 기준이 됩니다.',
  },
  {
    q: '문신사법은 언제 시행되나요?',
    a: '2025년 10월 28일 공포됐고, 2027년 10월 29일 정식 시행됩니다. 시행일 전까지는 종전 법령이 그대로 적용됩니다.',
  },
  { q: '눈썹문신은 얼마나 가나요?', a: '종류에 따라 1~3년입니다. 개인 피부와 관리에 따라 편차가 큽니다.' },
  {
    q: '리터치는 꼭 해야 하나요?',
    a: '대부분 1~2개월 후 리터치가 기본 과정에 포함됩니다. 첫 시술만으로는 색이 고르게 자리 잡지 않는 경우가 많습니다.',
  },
  {
    q: '잘못되면 지울 수 있나요?',
    a: '레이저 제거가 가능하지만 여러 회차가 필요하고 비용이 많이 들며, 완전한 원상복구가 어려울 수 있습니다. 시술 전 디자인 합의가 그만큼 중요합니다. 문신 제거는 의료행위 영역입니다.',
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
  ],
}

const beforeCare = [
  '시술자의 자격과 시설을 확인하세요.',
  '색소 성분과 알레르기 가능성을 확인하세요. 사전 패치 테스트 여부도 물어보세요.',
  '원하는 디자인을 사전에 그려보고 합의하세요. 되돌리기 어렵습니다.',
  '리터치가 포함인지, 몇 회인지, 기간 제한이 있는지 확인하세요.',
]

const afterCare = [
  '딱지가 생기고 떨어지는 과정에서 색이 옅어집니다. 정상적인 과정입니다.',
  '1~2주간 사우나·수영장·과도한 자외선 노출을 피하는 것이 권장됩니다.',
  '붓기·통증·진물이 지속되면 즉시 의료기관 진료를 받으세요.',
]

const subPages = [
  { href: '/semi-permanent/legal', tag: '★ 가장 중요', label: '자격과 문신사법', desc: '판례 변경부터 시행 일정, 면허 제도까지' },
  { href: '/semi-permanent/law-timeline', tag: '일정', label: '문신사법 시행 일정', desc: '공포·시행·유예 기간을 시점별로' },
  { href: '/semi-permanent/temp-registration', tag: '기존 종사자', label: '임시등록 특례', desc: '~2029.10.28. 무엇을 해야 하나' },
  { href: '/semi-permanent/eyebrow', tag: '검색 최다', label: '눈썹문신 종류', desc: '자연·섀도우·콤보 차이와 선택 기준' },
  { href: '/semi-permanent/price', tag: '비용', label: '눈썹문신 가격', desc: '종류별·지역별 시세와 숨은 비용' },
  { href: '/semi-permanent/aftercare', tag: '시술 후', label: '시술 후 관리', desc: '회복 과정과 색 정착까지' },
  { href: '/semi-permanent/removal', tag: '제거', label: '반영구 제거', desc: '레이저 제거 비용과 한계' },
]

export default function SemiPermanentHubPage() {
  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* 히어로 */}
      <section
        className="rounded-3xl overflow-hidden mb-6 px-6 py-14 text-center"
        style={{ background: 'linear-gradient(135deg, #3f2d20 0%, #241812 100%)' }}
      >
        <p className="text-xs font-extrabold text-amber-300 mb-3 tracking-widest uppercase">Semi-Permanent Makeup</p>
        <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-snug mb-4">
          반영구화장, 자격과 시술을
          <br />
          <span className="text-white/80">정확히 알아보기</span>
        </h1>
        <p className="text-base text-white/70 mb-6 max-w-xl mx-auto leading-relaxed">
          2025년 「문신사법」 공포로 법 체계가 완전히 바뀌었습니다. 시점별 정확한 현황과 시술·가격 정보를 정리했습니다.
        </p>
        <HubQuickLinks
          dark
          items={[
            { href: '/semi-permanent/legal', label: '자격·법', icon: '⚖️' },
            { href: '/semi-permanent/law-timeline', label: '시행일정', icon: '🗓️' },
            { href: '/semi-permanent/price', label: '가격', icon: '💰' },
            { href: '/semi-permanent/removal', label: '제거', icon: '🧴' },
          ]}
        />
      </section>

      <div className="max-w-[820px] mx-auto px-4 pb-12">
        <AdUnit slot="7150499722" />

        <div className="mt-8">
          <LawStatusBanner />
        </div>

        {/* 1. 반영구화장이란 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-stone-900 mb-4">반영구화장이란</h2>
          <p className="text-[15px] text-stone-600 leading-relaxed mb-4">
            색소를 피부 표층에 주입해 눈썹·아이라인·입술 등의 형태와 색을 일정 기간 유지시키는 시술입니다. 완전히
            지워지지 않는 문신과 달리 <strong className="text-stone-800">1~3년에 걸쳐 옅어집니다.</strong>
          </p>
          <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-stone-50 text-stone-600">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">시술</th>
                  <th className="text-left px-4 py-3 font-bold">방식</th>
                  <th className="text-center px-4 py-3 font-bold">소요시간</th>
                  <th className="text-center px-4 py-3 font-bold">가격대</th>
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
          <p className="text-xs text-stone-500 bg-stone-50 border border-stone-100 rounded-xl p-3 leading-relaxed">
            대부분 <strong className="text-stone-700">1~2개월 후 리터치</strong>가 기본 과정에 포함됩니다. 1회로 끝나지
            않습니다. 위 금액은 2026년 8월 기준 참고 범위이며 지역·시술자에 따라 달라집니다.
          </p>
        </section>

        <AdUnit slot="1591000951" />

        {/* 2. 법적 현황 요약 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-stone-900 mb-1">시술 자격 — 정확한 현황</h2>
          <p className="text-sm text-rose-600 font-bold mb-4">★ 가장 중요</p>
          <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
            <table className="w-full text-sm min-w-[460px]">
              <thead className="bg-stone-50 text-stone-600">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">보유 자격</th>
                  <th className="text-left px-4 py-3 font-bold">시행 후(2027.10.29.) 시술 가능 여부</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50 text-stone-700">
                {[
                  ['문신사 면허 (국가시험)', '가능 — 문신사법이 정한 면허 체계'],
                  ['미용사(피부/메이크업) 면허', '해당 없음 — 별개 체계'],
                  ['민간 반영구 자격증', '해당 없음 — 국가 면허가 아님'],
                ].map((r) => (
                  <tr key={r[0]} className="hover:bg-stone-50/60">
                    <td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td>
                    <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-stone-600 leading-relaxed mb-4">
            반영구화장(미용문신)은 서화문신과 함께 <strong className="text-stone-800">‘문신행위’로 통합 규정</strong>
            됐습니다. 시행 후에는 등록된 문신업소 안에서만 시술이 가능하고, 업소 외 출장 시술은 금지됩니다.
          </p>
          <Link
            href="/semi-permanent/legal"
            className="inline-block bg-stone-900 text-white text-sm font-bold rounded-full px-6 py-3 hover:bg-stone-700 transition-colors"
          >
            자격과 문신사법 자세히 보기 →
          </Link>
        </section>

        {/* 3. 소비자가 알아야 할 것 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-stone-900 mb-4">소비자가 알아야 할 것</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-extrabold text-stone-800 mb-3">시술 전</h3>
              <ul className="space-y-2 text-[13px] text-stone-600 leading-relaxed">
                {beforeCare.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-stone-300 shrink-0">•</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-extrabold text-stone-800 mb-3">시술 후</h3>
              <ul className="space-y-2 text-[13px] text-stone-600 leading-relaxed">
                {afterCare.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-stone-300 shrink-0">•</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-rose-50 border border-rose-100 rounded-xl p-4">
            <p className="text-xs text-rose-800 leading-relaxed">
              <strong>제거는 훨씬 어렵습니다.</strong> 잘못된 시술을 지우려면 레이저 제거가 필요하고, 여러 회차와 상당한
              비용이 듭니다. 완전히 원상복구되지 않을 수도 있습니다. <strong>시술보다 제거가 더 어렵다는 점</strong>을
              반드시 인지하세요.{' '}
              <Link href="/semi-permanent/removal" className="font-bold underline underline-offset-2">
                제거 비용 보기
              </Link>
            </p>
          </div>
        </section>

        {/* 4. 하위 페이지 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-stone-900 mb-4">주제별로 자세히</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {subPages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm hover:border-stone-400 transition-colors"
              >
                <p className="text-xs font-semibold text-stone-400 mb-1">{p.tag}</p>
                <p className="font-bold text-stone-900 mb-1">{p.label} →</p>
                <p className="text-[12px] text-stone-500 leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 5. FAQ */}
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

        <OtherCategories />

        <div className="mt-6">
          <RelatedQna sections={['makeup-care']} limit={8} />

        <AdUnit slot="3291145762" format="autorelaxed" responsive={false} />
        </div>
      </div>
    </div>
  )
}
