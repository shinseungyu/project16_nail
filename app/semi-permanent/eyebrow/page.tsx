import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import { LawStatusBanner, SourcesAndDisclaimer, OtherCategories } from '@/components/SemiPermanentNotice'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '눈썹문신 종류 | 자연·섀도우·콤보 차이와 선택 기준' },
  description:
    '눈썹문신은 자연눈썹(엠보)·섀도우·콤보로 나뉩니다. 시술 방식과 유지 기간, 피부 타입별로 어떤 종류가 맞는지 차이를 정리했습니다.',
  keywords: ['눈썹문신 종류', '자연눈썹', '엠보눈썹', '섀도우눈썹', '콤보눈썹', '반영구 눈썹 차이'],
  alternates: { canonical: '/semi-permanent/eyebrow' },
}

const types = [
  {
    name: '자연눈썹 (엠보)',
    how: '결을 한 올씩 그려 넣는 수적 방식',
    price: '20~50만원',
    time: '90~150분',
    keep: '1~2년',
    fit: '눈썹이 어느 정도 있고 자연스러운 결을 원하는 경우',
    caution: '지성 피부에서는 결이 번져 유지 기간이 짧아질 수 있습니다.',
  },
  {
    name: '섀도우 (수지)',
    how: '점을 찍어 면으로 채우는 방식',
    price: '25~55만원',
    time: '90~150분',
    keep: '1.5~3년',
    fit: '눈썹이 적고 화장한 듯한 음영을 원하는 경우',
    caution: '결 표현이 없어 또렷한 인상이 됩니다. 원하는 농도를 사전에 합의하세요.',
  },
  {
    name: '콤보',
    how: '결(엠보) + 면(섀도우) 조합',
    price: '25~60만원',
    time: '100~160분',
    keep: '1.5~2.5년',
    fit: '앞머리는 자연스럽게, 뒤쪽은 채워진 형태를 원하는 경우',
    caution: '두 기법이 섞여 시술 시간이 가장 깁니다.',
  },
  {
    name: '남성 눈썹',
    how: '결 중심, 각을 살린 디자인',
    price: '20~45만원',
    time: '90~150분',
    keep: '1~2년',
    fit: '눈썹 숱이 적거나 형태를 정리하고 싶은 경우',
    caution: '지나치게 짙으면 어색해집니다. 농도를 낮게 시작하는 편이 안전합니다.',
  },
]

const faqs = [
  {
    q: '자연눈썹과 콤보 중 뭐가 나을까요?',
    a: '눈썹 숱과 피부 타입에 따라 다릅니다. 숱이 어느 정도 있고 자연스러움을 원하면 자연눈썹, 앞은 자연스럽고 뒤는 채워진 형태를 원하면 콤보가 선택지가 됩니다. 시술자와 사전 상담에서 결정하세요.',
  },
  {
    q: '지성 피부인데 어떤 종류가 맞나요?',
    a: '지성 피부에서는 결 방식(엠보)이 번지기 쉬워 유지 기간이 짧아질 수 있습니다. 섀도우나 콤보를 권하는 경우가 많지만, 실제 판단은 피부 상태를 직접 확인한 시술자와 상의해야 합니다.',
  },
  { q: '종류에 따라 유지 기간이 다른가요?', a: '네. 대체로 면으로 채우는 방식이 결 방식보다 오래 유지됩니다. 다만 개인 피부와 관리에 따라 편차가 큽니다.' },
  {
    q: '리터치는 종류마다 다른가요?',
    a: '종류와 무관하게 대부분 1~2개월 후 보정이 기본 과정에 포함됩니다. 포함 여부와 횟수는 예약 전 확인하세요.',
  },
  {
    q: '중간에 종류를 바꿀 수 있나요?',
    a: '기존 색소가 남아 있는 상태에서는 선택지가 제한됩니다. 색과 형태를 크게 바꾸려면 제거가 필요할 수 있고, 제거는 시술보다 어렵고 비용이 많이 듭니다.',
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
    { '@type': 'ListItem', position: 3, name: '눈썹문신 종류', item: `${SITE_URL}/semi-permanent/eyebrow` },
  ],
}

export default function EyebrowPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/semi-permanent" className="hover:text-stone-700">반영구화장</Link><span>›</span>
        <span className="text-stone-600">눈썹문신 종류</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">시술 종류</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">눈썹문신, 종류가 어떻게 다른가요?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          크게 <strong className="text-amber-300">결을 그리는 자연눈썹(엠보)</strong>,{' '}
          <strong className="text-amber-300">면을 채우는 섀도우</strong>, 둘을 섞은{' '}
          <strong className="text-amber-300">콤보</strong>로 나뉩니다. 결 방식은 자연스럽지만 지성 피부에서 번질 수 있고,
          면 방식은 또렷하고 대체로 더 오래 유지됩니다.
        </p>
      </div>

      <LawStatusBanner />

      {/* 종류별 상세 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">종류별로 보면</h2>
        <div className="space-y-4">
          {types.map((t) => (
            <div key={t.name} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-base font-extrabold text-stone-900 mb-2">{t.name}</h3>
              <p className="text-[13px] text-stone-600 leading-relaxed mb-3">{t.how}</p>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[
                  ['가격', t.price],
                  ['소요시간', t.time],
                  ['유지 기간', t.keep],
                ].map(([k, v]) => (
                  <div key={k} className="bg-stone-50 rounded-xl p-2.5 text-center">
                    <p className="text-[10px] text-stone-400 mb-0.5">{k}</p>
                    <p className="text-[12px] font-bold text-stone-800">{v}</p>
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-stone-600 leading-relaxed mb-2">
                <strong className="text-stone-800">이런 경우에</strong> — {t.fit}
              </p>
              <p className="text-xs text-amber-800 bg-amber-50 border border-amber-100 rounded-xl p-3 leading-relaxed">
                <strong>참고</strong> — {t.caution}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-stone-400 mt-3">
          가격·유지 기간은 2026년 8월 기준 참고 범위이며 지역·시술자에 따라 달라집니다. 어떤 종류가 맞는지는 피부 상태를
          직접 확인한 시술자와 상의해 결정하세요.
        </p>
      </section>

      <AdUnit slot="1591000951" />

      {/* 비교표 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">한눈에 비교</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
          <table className="w-full text-sm min-w-[560px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">종류</th>
                <th className="text-left px-4 py-3 font-bold">인상</th>
                <th className="text-center px-4 py-3 font-bold">유지</th>
                <th className="text-center px-4 py-3 font-bold">시술 시간</th>
                <th className="text-left px-4 py-3 font-bold">주의</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['자연눈썹', '자연스러움', '1~2년', '짧음', '지성 피부 번짐'],
                ['섀도우', '또렷함', '1.5~3년', '보통', '농도 사전 합의'],
                ['콤보', '중간', '1.5~2.5년', '가장 김', '비용 상단'],
                ['남성 눈썹', '정돈된 각', '1~2년', '짧음', '농도 낮게 시작'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-center text-[13px] whitespace-nowrap">{r[2]}</td>
                  <td className="px-4 py-3 text-center text-[13px] text-stone-500">{r[3]}</td>
                  <td className="px-4 py-3 text-[12px] text-stone-500">{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 공통 주의 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">종류와 무관하게 공통인 것</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <ul className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed">
            {[
              '1~2개월 후 리터치가 기본 과정에 포함됩니다. 1회로 끝나지 않습니다.',
              '딱지가 생기고 떨어지는 과정에서 색이 옅어집니다. 정상적인 과정입니다.',
              '디자인은 시술 전에 그려보고 합의하세요. 되돌리기 어렵습니다.',
              '색소 성분과 알레르기 가능성, 사전 패치 테스트 여부를 확인하세요.',
              '붓기·통증·진물이 지속되면 즉시 의료기관 진료를 받으세요.',
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="text-stone-300 shrink-0">•</span>
                {t}
              </li>
            ))}
          </ul>
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
          <Link href="/semi-permanent/price" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">비용</p>
            <p className="font-bold text-stone-900">종류별 가격 →</p>
          </Link>
          <Link href="/semi-permanent/aftercare" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">시술 후</p>
            <p className="font-bold text-stone-900">회복과 관리 →</p>
          </Link>
          <Link href="/semi-permanent/legal" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">자격·법</p>
            <p className="font-bold text-stone-900">문신사법 정리 →</p>
          </Link>
        </div>
      </section>

      <OtherCategories />
    </div>
  )
}
