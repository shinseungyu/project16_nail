import type { Metadata } from 'next'
import RelatedQna from '@/components/RelatedQna'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import HairCta from '@/components/HairCta'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '미용사와 이용사 차이 | 업무 범위와 면허 구분' },
  description:
    '미용사와 이용사는 별개 면허입니다. 면도(쉐이빙) 가능 여부, 업무 범위, 시험 구성의 차이와 어느 쪽을 따야 하는지 정리했습니다.',
  keywords: ['미용사 이용사 차이', '이용사 미용사', '이용업 미용업 차이', '바버샵 자격증', '면도 자격증'],
  alternates: { canonical: '/hair/license/difference' },
}

const compare = [
  ['근거 법령', '공중위생관리법 (미용업)', '공중위생관리법 (이용업)'],
  ['영업 종류', '미용업', '이용업 — 별개 영업'],
  ['커트', '가능', '가능'],
  ['펌·염색', '가능', '가능'],
  ['면도 (쉐이빙)', '해당 없음', '가능'],
  ['실기 특징', '헤어 시술 중심', '기구 분해·소독 포함'],
  ['면허 대체', '이용업 불가', '미용업 불가'],
]

const scope = [
  ['커트', true, true],
  ['펌', true, true],
  ['염색·탈색', true, true],
  ['머리피부(두피) 손질', true, true],
  ['머리감기', true, true],
  ['면도(쉐이빙)', false, true],
  ['피부관리·제모', false, false],
  ['네일', false, false],
  ['화장·분장', false, false],
]

const faqs = [
  {
    q: '미용사 면허로 바버샵을 열 수 있나요?',
    a: '면도를 하지 않는다면 미용업으로 신고해 운영할 수 있습니다. 면도를 포함하면 이용사 면허와 이용업 신고가 필요합니다. 관할 구청 확인이 필수입니다.',
  },
  {
    q: '이용사 면허로 미용실을 열 수 있나요?',
    a: '이용업과 미용업은 별개 영업이라 서로 대체되지 않습니다. 관할 구청에 확인하세요.',
  },
  {
    q: '둘 다 따는 사람도 있나요?',
    a: '있습니다. 면도까지 포함한 종합적인 서비스를 하려는 경우 두 면허를 모두 취득하기도 합니다.',
  },
  {
    q: '어느 쪽이 시험이 쉬운가요?',
    a: '난이도를 단정하기 어렵습니다. 이용사 실기는 기구 분해·소독이 별도 배점으로 포함되는 것이 특징입니다.',
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
    { '@type': 'ListItem', position: 2, name: '이용원 창업', item: `${SITE_URL}/hair` },
    { '@type': 'ListItem', position: 3, name: '자격증', item: `${SITE_URL}/hair/license` },
    { '@type': 'ListItem', position: 4, name: '미용사와 이용사 차이', item: `${SITE_URL}/hair/license/difference` },
  ],
}

export default function DifferencePage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span>
        <Link href="/hair/license" className="hover:text-stone-700">자격증</Link><span>›</span>
        <span className="text-stone-600">차이</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자격증</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">미용사와 이용사, 뭐가 다른가요?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          <strong className="text-amber-300">이용업과 미용업은 별개 영업이고, 면허도 서로 대체되지 않습니다.</strong>{' '}
          가장 큰 실무 차이는 <strong className="text-amber-300">면도(쉐이빙)</strong>입니다. 바버샵에서 면도를 하려면
          이용사 면허와 이용업 신고가 필요합니다.
        </p>
      </div>

      {/* 비교표 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">한눈에 비교</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">구분</th>
                <th className="text-center px-4 py-3 font-bold">미용사(일반)</th>
                <th className="text-center px-4 py-3 font-bold">이용사</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {compare.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-center text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-center text-[13px]">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 업무 범위 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">업무 범위</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">업무</th>
                <th className="text-center px-4 py-3 font-bold">미용사(일반)</th>
                <th className="text-center px-4 py-3 font-bold">이용사</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {scope.map((r) => (
                <tr key={r[0] as string} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className={`px-4 py-3 text-center font-bold ${r[1] ? 'text-emerald-600' : 'text-stone-400'}`}>
                    {r[1] ? '가능' : '—'}
                  </td>
                  <td className={`px-4 py-3 text-center font-bold ${r[2] ? 'text-emerald-600' : 'text-stone-400'}`}>
                    {r[2] ? '가능' : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed">
          피부관리·네일·화장분장은 각각{' '}
          <Link href="/skincare/license" className="text-rose-700 font-semibold underline decoration-2 decoration-rose-300 underline-offset-2 hover:decoration-rose-600 transition-colors">미용사(피부)</Link>,{' '}
          <Link href="/license" className="text-rose-700 font-semibold underline decoration-2 decoration-rose-300 underline-offset-2 hover:decoration-rose-600 transition-colors">미용사(네일)</Link>,{' '}
          <Link href="/makeup/license" className="text-rose-700 font-semibold underline decoration-2 decoration-rose-300 underline-offset-2 hover:decoration-rose-600 transition-colors">미용사(메이크업)</Link>{' '}
          면허의 영역입니다.
        </p>
      </section>

      {/* 어느 쪽 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">어느 쪽을 따야 하나</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-extrabold text-stone-800 mb-3">미용사(일반)</h3>
            <ul className="space-y-2 text-[13px] text-stone-600 leading-relaxed">
              {['일반 미용실·헤어샵을 목표로 한다', '면도는 하지 않을 계획이다', '여성 고객 비중이 높은 매장을 생각한다'].map((t) => (
                <li key={t} className="flex gap-2"><span className="text-stone-300 shrink-0">•</span>{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-extrabold text-stone-800 mb-3">이용사</h3>
            <ul className="space-y-2 text-[13px] text-stone-600 leading-relaxed">
              {['바버샵을 목표로 한다', '면도(쉐이빙)를 서비스에 포함한다', '남성 전문 매장을 생각한다'].map((t) => (
                <li key={t} className="flex gap-2"><span className="text-stone-300 shrink-0">•</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>영업 신고 전에 관할 구청 위생과에 확인하세요.</strong> 업종 구분과 시설 기준은 지자체 운영에 따라
            해석이 다를 수 있고, 신고 없이 영업하면 공중위생관리법 제3조 제1항 위반으로 1년 이하 징역 또는 1천만원 이하
            벌금 대상이 될 수 있습니다.
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

      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/hair/license/beautician" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">자격증</p>
            <p className="font-bold text-stone-900">미용사(일반) →</p>
          </Link>
          <Link href="/hair/license/written" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">이용사</p>
            <p className="font-bold text-stone-900">필기 준비 →</p>
          </Link>
          <Link href="/hair/license/practical" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">이용사</p>
            <p className="font-bold text-stone-900">실기 준비 →</p>
          </Link>
        </div>
      </section>

      <HairCta withAcademy />
    <RelatedQna sections={['hair-license']} offset={2} />

    </div>
  )
}
