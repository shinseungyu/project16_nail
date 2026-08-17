import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import { MedicalScopeNotice, SeeDoctorSignals, ScalpCta } from '@/components/ScalpNotice'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '탈모 관리 | 미용실 관리와 병원 진료의 차이' },
  description:
    '탈모 관리에서 미용실이 할 수 있는 것과 없는 것을 구분해 정리했습니다. 초기 신호, 병원에 가야 할 때, 생활 관리까지 확인하세요.',
  keywords: ['탈모 관리', '탈모 초기 증상', '남자 탈모 관리', '탈모 샴푸', '탈모 병원'],
  alternates: { canonical: '/hair/scalp/hairloss' },
}

const faqs = [
  {
    q: '미용실 두피 관리로 탈모가 좋아지나요?',
    a: '미용실은 의료기관이 아니며 탈모를 치료하지 않습니다. 두피 환경을 정돈하는 관리입니다.',
  },
  {
    q: '언제 병원에 가야 하나요?',
    a: '빠지는 양이 늘었거나, 가르마·정수리가 넓어 보이거나, 원형 탈모가 보이면 진료를 받으세요.',
  },
  {
    q: '탈모 샴푸를 쓰면 되나요?',
    a: '두피 환경 관리에는 도움이 될 수 있지만 진행 중인 탈모의 해법으로 보기는 어렵습니다.',
  },
  { q: '스트레스 때문인가요?', a: '원인은 다양하며 자가 판단이 어렵습니다. 진료를 통해 확인하는 것이 정확합니다.' },
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
    { '@type': 'ListItem', position: 3, name: '두피 스케일링', item: `${SITE_URL}/hair/scalp` },
    { '@type': 'ListItem', position: 4, name: '탈모 관리', item: `${SITE_URL}/hair/scalp/hairloss` },
  ],
}

const scopeRows = [
  ['두피 노폐물 정리', true, true],
  ['두피 상태 관찰', true, true],
  ['모발 손상 관리', true, false],
  ['탈모 진단', false, true],
  ['의약품 처방', false, true],
  ['의료기기 시술', false, true],
  ['모발 이식', false, true],
] as const

export default function HairlossPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span>
        <Link href="/hair/scalp" className="hover:text-stone-700">두피</Link><span>›</span>
        <span className="text-stone-600">탈모 관리</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">두피 관리</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">탈모, 미용실에서 해결될까?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          <strong className="text-amber-300">탈모는 의료 영역입니다.</strong> 미용실에서는 두피 환경을 정돈하는 관리만
          가능하며, <strong className="text-amber-300">탈모 자체를 치료하지 않습니다.</strong> 진행이 의심되면 피부과
          진료가 먼저입니다.
        </p>
      </div>

      <MedicalScopeNotice variant="hairloss" />

      {/* 할 수 있는 것 / 없는 것 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">미용실이 할 수 있는 것 / 없는 것</h2>
        <p className="text-sm text-rose-600 font-bold mb-4">★ 핵심</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">구분</th>
                <th className="text-center px-4 py-3 font-bold">미용실</th>
                <th className="text-center px-4 py-3 font-bold">의료기관</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {scopeRows.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td>
                  <td className={`px-4 py-3 text-center font-bold ${r[1] ? 'text-emerald-600' : 'text-rose-500'}`}>
                    {r[1] ? '가능' : '불가'}
                  </td>
                  <td className={`px-4 py-3 text-center font-bold ${r[2] ? 'text-emerald-600' : 'text-stone-400'}`}>
                    {r[2] ? '가능' : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-stone-900 rounded-xl p-4">
          <p className="text-sm text-white font-bold text-center">
            미용실의 역할은 &ldquo;환경 정돈&rdquo;이지 &ldquo;치료&rdquo;가 아닙니다.
          </p>
        </div>
      </section>

      <SeeDoctorSignals />

      <AdUnit slot="1591000951" />

      {/* 탈모 샴푸 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">탈모 샴푸는 효과가 있나</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[400px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">구분</th>
                <th className="text-left px-4 py-3 font-bold">성격</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['일반 화장품 샴푸', '두피 세정·환경 관리 목적'],
                ['기능성 표시 제품', '관련 기준에 따라 표시된 제품'],
                ['의약품', '의사 처방·약국 구매'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[13px] text-stone-600 leading-relaxed">
          <strong className="text-stone-800">샴푸는 씻어내는 제품이라 두피에 머무는 시간이 짧습니다.</strong> 보조
          수단으로 접근하는 것이 현실적이며, 진행 중인 탈모의 해법으로 기대하기는 어렵습니다.
        </p>
      </section>

      {/* 생활 관리 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">생활 관리</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <ul className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed">
            {[
              '두피를 청결하게 유지하되 과하게 씻지 않기',
              '완전히 말리고 자기 (젖은 두피는 세균 번식에 유리)',
              '지나치게 당기는 헤어스타일 피하기',
              '수면·스트레스 관리',
              '과도한 다이어트 주의',
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="text-stone-300 shrink-0">•</span>
                {t}
              </li>
            ))}
          </ul>
          <p className="text-xs text-stone-500 mt-3 leading-relaxed bg-stone-50 border border-stone-100 rounded-xl p-3">
            위 항목은 두피 환경 관리에 관한 일반적인 권장 사항이며, 탈모 치료를 대체하지 않습니다.
          </p>
        </div>
      </section>

      {/* 창업자 관점 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">창업자 관점 — 이 페이지를 만드는 이유</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm space-y-3">
          <p className="text-[13px] text-stone-600 leading-relaxed">
            탈모 관리는 객단가가 높고 재방문이 확실한 영역이지만, <strong className="text-stone-800">표현 리스크가 가장
            큽니다.</strong>
          </p>
          <p className="text-[13px] text-stone-600 leading-relaxed">
            경쟁 글 상당수가 &ldquo;탈모 개선&rdquo;, &ldquo;발모 효과&rdquo; 같은 표현을 씁니다. 반대로{' '}
            <strong className="text-stone-800">&ldquo;우리는 치료를 하지 않습니다. 이건 병원 영역입니다&rdquo;</strong>
            라고 명확히 하는 페이지는 거의 없습니다.
          </p>
          <ol className="space-y-1.5 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li>규제 리스크를 없애고</li>
            <li>오히려 신뢰를 만들고</li>
            <li>두피 스케일링·클리닉 같은 합법적 관리 메뉴로 자연스럽게 연결됩니다</li>
          </ol>
        </div>
        <div className="mt-3 bg-rose-50 border border-rose-100 rounded-xl p-4">
          <p className="text-xs text-rose-800 leading-relaxed">
            <strong>절대 쓰지 말 것:</strong> 탈모 치료, 발모, 모발 재생, 개선 보장, 효과 보장
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/hair/scalp" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">두피</p>
            <p className="font-bold text-stone-900">두피 스케일링 →</p>
          </Link>
          <Link href="/hair/scalp/clinic" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">모발</p>
            <p className="font-bold text-stone-900">헤어 클리닉 →</p>
          </Link>
        </div>
      </section>

      <ScalpCta />
    </div>
  )
}
