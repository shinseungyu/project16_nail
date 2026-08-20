import type { Metadata } from 'next'
import RelatedQna from '@/components/RelatedQna'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import HairCta from '@/components/HairCta'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '프리랜서 미용사 | 수입 구조와 창업과의 비교' },
  description:
    '프리랜서 헤어 디자이너의 수입 구조를 정리했습니다. 매출 배분율 50~70%, 부담하는 비용, 1인 창업과 비교해 어느 쪽이 유리한지 확인하세요.',
  keywords: ['프리랜서 디자이너', '프리랜서 미용사', '프리랜서 미용사 수입', '1인 미용실 vs 프리랜서'],
  alternates: { canonical: '/hair/career/freelance' },
}

const shareTypes = [
  ['기본형', '50~55%', '없음 (매장이 재료·자스 제공)'],
  ['중간형', '55~65%', '재료비 일부'],
  ['자리값형', '65~70%', '재료비 + 월 자리값 (30~80만원)'],
]

const netCompare = [
  ['50% 기본형', '400만원', '0원', '400만원'],
  ['60% 중간형', '480만원', '재료비 50만원', '430만원'],
  ['70% 자리값형', '560만원', '재료비 60만 + 자리값 60만', '440만원'],
]

const byRevenue = [
  ['500만원', '250만원', '275만원'],
  ['800만원', '400만원', '440만원'],
  ['1,200만원', '600만원', '700만원'],
  ['1,500만원', '750만원', '890만원'],
]

const vsStartup = [
  ['초기 자금', '0~100만원', '800~3,000만원'],
  ['월 고정비', '0~80만원', '140~280만원'],
  ['매출 800만 시 수입', '400~440만원', '약 590만원'],
  ['매출 400만 시 수입', '200~220만원', '약 180만원'],
  ['리스크', '낮음', '높음'],
  ['고객 자산', '매장과 공유', '본인'],
  ['자유도', '중간', '높음'],
]

const risks = [
  { t: '고객이 내 것이 아닐 수 있습니다', d: '매장 이름으로 온 고객은 내가 나가면 따라오지 않을 수 있습니다. 계약 시 고객 정보 활용 범위를 확인하세요.' },
  { t: '4대 보험이 없습니다', d: '사업소득으로 처리되는 경우가 많아 국민연금·건강보험을 본인이 부담합니다.' },
  { t: '매출이 없으면 수입이 0입니다', d: '기본급이 없습니다. 비수기나 아플 때 대비가 필요합니다.' },
  { t: '계약서를 꼭 쓰세요', d: '배분율, 부담 항목, 정산 주기, 해지 조건, 고객 정보 처리를 문서로 남기세요.' },
]

const faqs = [
  { q: '프리랜서 배분율이 보통 얼마인가요?', a: '50~70%이며 재료비·자리값 부담 여부에 따라 달라집니다.' },
  {
    q: '창업과 프리랜서 중 뭐가 나은가요?',
    a: '개인 월 매출 500~600만원이 분기점입니다. 그 아래는 프리랜서, 위는 창업이 유리한 편입니다.',
  },
  { q: '4대 보험은요?', a: '사업소득 처리되는 경우가 많아 본인 부담입니다. 계약 전 확인하세요.' },
  { q: '내 고객을 데려갈 수 있나요?', a: '계약 내용에 따라 다릅니다. 반드시 문서로 확인하세요.' },
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
    { '@type': 'ListItem', position: 3, name: '프리랜서', item: `${SITE_URL}/hair/career/freelance` },
  ],
}

export default function FreelancePage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span>
        <span className="text-stone-600">프리랜서</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">진로</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">프리랜서 미용사, 실제로 얼마나 남나요?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          <strong className="text-amber-300">매출의 50~70%</strong>를 가져가는 구조입니다. 다만 재료비·자리값을 본인이
          부담하는 경우가 있어 실수령은 배분율보다 낮아집니다. 초기 자금이 거의 안 든다는 것이 최대 장점입니다.
        </p>
      </div>

      {/* 배분 구조 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">배분 구조</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">유형</th>
                <th className="text-center px-4 py-3 font-bold">배분율</th>
                <th className="text-left px-4 py-3 font-bold">부담 항목</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {shareTypes.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-center font-semibold">{r[1]}</td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>배분율만 보면 안 됩니다.</strong> 70%인데 재료비와 자리값을 내면 실수령이 55%형보다 낮을 수 있습니다.
          </p>
        </div>
      </section>

      {/* 실수령 비교 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">실수령 비교</h2>
        <p className="text-sm text-stone-500 mb-4">개인 월 매출 800만원 가정</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">유형</th>
                <th className="text-center px-4 py-3 font-bold">배분</th>
                <th className="text-left px-4 py-3 font-bold">부담</th>
                <th className="text-center px-4 py-3 font-bold">실수령</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {netCompare.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td>
                  <td className="px-4 py-3 text-[12px] text-stone-500">{r[2]}</td>
                  <td className="px-4 py-3 text-center font-extrabold text-stone-900 whitespace-nowrap">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 매출별 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">매출이 커지면 어느 쪽이 유리한가</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[400px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">월 매출</th>
                <th className="text-center px-4 py-3 font-bold">50% 기본형</th>
                <th className="text-center px-4 py-3 font-bold">70% 자리값형</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {byRevenue.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 text-center">{r[1]}</td>
                  <td className="px-4 py-3 text-center font-bold text-stone-900">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[13px] text-stone-600 leading-relaxed">
          <strong className="text-stone-800">매출이 클수록 자리값형이 유리해집니다.</strong> 자리값은 고정이라 매출이
          늘어도 그대로이기 때문입니다.
        </p>
      </section>

      {/* 창업 비교 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">프리랜서 vs 1인 창업</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[460px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">구분</th>
                <th className="text-center px-4 py-3 font-bold">프리랜서</th>
                <th className="text-center px-4 py-3 font-bold">1인 창업</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {vsStartup.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-center text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-center text-[13px]">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-stone-900 rounded-xl p-5">
          <p className="text-sm text-white leading-relaxed mb-2">
            <strong className="text-amber-300">수익 분기는 월 매출 500~600만원 부근입니다.</strong>
          </p>
          <ul className="space-y-1.5 text-[13px] text-white/70 leading-relaxed">
            <li>• 그 아래면 프리랜서가 안전 (고정비가 없으니까)</li>
            <li>• 그 위면 창업이 유리 (고정비를 넘기면 나머지가 다 본인 것)</li>
          </ul>
          <p className="text-xs text-white/50 mt-3">
            판단 기준: 개인 매출이 3개월 이상 안정적으로 800만원을 넘으면 창업 검토 시점입니다.
          </p>
        </div>
      </section>

      {/* 리스크 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">프리랜서의 실제 리스크</h2>
        <div className="space-y-3">
          {risks.map((r, i) => (
            <div key={r.t} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
              <span className="shrink-0 w-8 h-8 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center text-xs font-extrabold">
                {i + 1}
              </span>
              <div>
                <h3 className="text-sm font-extrabold text-stone-800 mb-1">{r.t}</h3>
                <p className="text-[13px] text-stone-500 leading-relaxed">{r.d}</p>
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

      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/hair/career/salary" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">진로</p>
            <p className="font-bold text-stone-900">연봉 비교 →</p>
          </Link>
          <Link href="/hair/career/how-to" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">진로</p>
            <p className="font-bold text-stone-900">되는법 로드맵 →</p>
          </Link>
        </div>
      </section>

      <HairCta withAcademy />
    <RelatedQna sections={['hair-license']} offset={12} />

    </div>
  )
}
