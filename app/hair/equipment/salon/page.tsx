import type { Metadata } from 'next'
import RelatedQna from '@/components/RelatedQna'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import HairCta from '@/components/HairCta'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '미용 의자·샴푸대 가격 | 창업 장비 예산 정리' },
  description:
    '미용 의자 50~250만원, 샴푸대 60~200만원. 창업 전 장비 예산과 설치 비용, 중고 구매 판단 기준까지 정리했습니다.',
  keywords: ['미용 의자', '샴푸대', '샴푸대 가격', '미용실 장비', '미용 재료 도매'],
  alternates: { canonical: '/hair/equipment/salon' },
}

const equipment = [
  ['이발 체어 (유압식)', '50~250만원', '25~120만원', '가능'],
  ['샴푸대', '60~200만원', '30~100만원', '가능'],
  ['클리퍼', '10~40만원', '—', '비권장'],
  ['가위 세트', '20~100만원', '—', '비권장'],
  ['드라이어·아이론', '10~40만원', '5~20만원', '가능'],
  ['자외선 소독기', '10~30만원', '5~15만원', '가능'],
  ['미러·조명', '20~80만원', '10~40만원', '가능'],
  ['타월워머', '15~40만원', '8~20만원', '가능'],
  ['두피 관리 기기', '50~300만원', '25~150만원', '조건부'],
]

const plumbing = [
  ['기존 미용실 자리 인수', '0~100만원'],
  ['일반 상가 (급배수 가능)', '100~400만원'],
  ['급배수 불가 건물', '설치 자체가 불가'],
]

const scale = [
  ['1체어', '150~350만원', '250~750만원'],
  ['2체어', '350~700만원', '450~1,100만원'],
  ['3체어+', '700~1,500만원', '800~1,900만원'],
]

const suppliers = [
  ['온라인 도매몰', '가격 비교 쉬움, 소량 가능'],
  ['지역 미용재료상', '급할 때 바로, 상담 가능'],
  ['브랜드 직거래', '물량 조건 있음, 단가 유리'],
]

const faqs = [
  {
    q: '최소 얼마로 시작할 수 있나요?',
    a: '1체어 기준 장비 150~350만원, 급배수 공사 포함 250~750만원입니다.',
  },
  {
    q: '샴푸대 없이 운영할 수 있나요?',
    a: '커트 전용이라면 가능한 경우도 있지만, 시설 기준은 관할 구청 확인이 필요합니다.',
  },
  { q: '중고를 어디서 사나요?', a: '미용 장비 중고 거래처나 폐업 매장 인수가 일반적입니다. 실물 확인을 권합니다.' },
  { q: '두피 기기는 처음부터 필요한가요?', a: '아닙니다. 수요가 확인된 뒤 도입하는 것이 안전합니다.' },
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
    { '@type': 'ListItem', position: 3, name: '창업 장비', item: `${SITE_URL}/hair/equipment/salon` },
  ],
}

export default function SalonEquipmentPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span>
        <span className="text-stone-600">창업 장비</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업 장비</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">미용실 장비, 얼마나 잡아야 하나요?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          1체어 기준 장비 최소 구성은 <strong className="text-amber-300">150~350만원</strong>입니다. 체어 + 샴푸대 +
          클리퍼 + 가위 + 드라이어 + 소독기. 여기에{' '}
          <strong className="text-amber-300">샴푸대 급배수 공사비 100~400만원이 별도</strong>로 듭니다.
        </p>
      </div>

      {/* 장비별 가격 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">장비별 가격</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">장비</th>
                <th className="text-center px-4 py-3 font-bold">신품</th>
                <th className="text-center px-4 py-3 font-bold">중고</th>
                <th className="text-center px-4 py-3 font-bold">중고 권장</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {equipment.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td>
                  <td className="px-4 py-3 text-center text-stone-500 whitespace-nowrap">{r[2]}</td>
                  <td
                    className={`px-4 py-3 text-center text-[12px] font-bold ${
                      r[3] === '가능' ? 'text-emerald-600' : r[3] === '조건부' ? 'text-amber-600' : 'text-rose-500'
                    }`}
                  >
                    {r[3]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-stone-400">
          2026년 8월 기준 참고 범위입니다. 특정 브랜드·제품을 추천하지 않으며 기준만 제시합니다.
        </p>
      </section>

      <AdUnit slot="1591000951" />

      {/* 중고 판단 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">중고 판단 기준</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
            <h3 className="text-sm font-extrabold text-emerald-800 mb-3">중고 OK</h3>
            <ul className="space-y-2 text-[13px] text-emerald-900 leading-relaxed">
              {['체어', '샴푸대', '미러', '소독기', '타월워머'].map((t) => (
                <li key={t} className="flex gap-2"><span className="shrink-0">•</span>{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-rose-50 border border-rose-100 rounded-2xl p-5">
            <h3 className="text-sm font-extrabold text-rose-800 mb-3">중고 비권장</h3>
            <ul className="space-y-2 text-[13px] text-rose-900 leading-relaxed">
              {['가위', '클리퍼'].map((t) => (
                <li key={t} className="flex gap-2"><span className="shrink-0">•</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-[13px] text-stone-600 leading-relaxed">
          <strong className="text-stone-800">구조가 단순하고 고장 위험이 낮은 것만 중고로 사세요.</strong> 날 붙이는
          도구는 상태 확인이 어렵고 기술 품질에 직결됩니다.
        </p>
      </section>

      {/* 급배수 공사 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">놓치기 쉬운 비용 — 급배수 공사</h2>
        <p className="text-sm text-rose-600 font-bold mb-4">★ 예산에서 가장 많이 누락되는 항목</p>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-4">
          <strong className="text-stone-800">샴푸대는 장비가보다 설치비가 더 나올 수 있습니다.</strong>
        </p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[400px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">상황</th>
                <th className="text-center px-4 py-3 font-bold">공사비</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {plumbing.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 text-center font-semibold whitespace-nowrap">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-rose-50 border border-rose-100 rounded-xl p-4">
          <p className="text-xs text-rose-800 leading-relaxed">
            <strong>임대차 계약 전에 급배수 가능 여부를 반드시 확인하세요.</strong> 계약 후에 알게 되면 손실이 큽니다.
          </p>
        </div>
      </section>

      {/* 규모별 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">규모별 총 장비 예산</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">규모</th>
                <th className="text-center px-4 py-3 font-bold">장비 합계</th>
                <th className="text-center px-4 py-3 font-bold">급배수 공사 포함</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {scale.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td>
                  <td className="px-4 py-3 text-center font-bold text-stone-900 whitespace-nowrap">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500">
          인테리어·보증금까지 포함한 전체 창업비용은{' '}
          <Link href="/hair/cost" className="text-blue-700 font-semibold hover:underline">
            미용실 창업비용
          </Link>{' '}
          페이지에 있습니다.
        </p>
      </section>

      {/* 재료 도매 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">재료 도매</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[380px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">구분</th>
                <th className="text-left px-4 py-3 font-bold">특징</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {suppliers.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[13px] text-stone-600 leading-relaxed">
          <strong className="text-stone-800">초기엔 소량으로 여러 곳을 써보고, 회전이 확인된 품목만 대량 발주하세요.</strong>{' '}
          유통기한이 있는 제품(염모제·펌제)은 대량 구매가 손실로 이어집니다.
        </p>
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
          <Link href="/hair/equipment/clipper" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">도구</p>
            <p className="font-bold text-stone-900">클리퍼 →</p>
          </Link>
          <Link href="/hair/equipment/scissors" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">도구</p>
            <p className="font-bold text-stone-900">미용 가위 →</p>
          </Link>
          <Link href="/hair/equipment/curling-iron" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">도구</p>
            <p className="font-bold text-stone-900">고데기 →</p>
          </Link>
        </div>
      </section>

      <HairCta />
    <RelatedQna sections={['hair-style']} offset={21} />

    </div>
  )
}
