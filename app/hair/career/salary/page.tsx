import type { Metadata } from 'next'
import RelatedQna from '@/components/RelatedQna'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import HairCta from '@/components/HairCta'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '헤어 디자이너 연봉 | 인턴부터 원장까지 단계별' },
  description:
    '헤어 디자이너 연봉을 단계별로 정리했습니다. 인턴 월 180~230만원, 디자이너 250~450만원, 원장 500~900만원. 지역·급여 구조별 차이까지 확인하세요.',
  keywords: ['헤어 디자이너 연봉', '미용실 스텝 월급', '미용사 월급', '헤어 디자이너 초봉', '미용실 원장 수입'],
  alternates: { canonical: '/hair/career/salary' },
}

const stages = [
  ['인턴 (스텝)', '1~2년', '180~230만원', '고정급'],
  ['주니어 디자이너', '2~4년차', '220~320만원', '기본급 + 인센티브'],
  ['디자이너', '4~7년차', '280~450만원', '기본급 + 인센티브'],
  ['실장·부원장', '7~10년차', '350~600만원', '인센티브 비중↑'],
  ['프리랜서 디자이너', '경력 무관', '250~700만원', '매출 배분 (50~70%)'],
  ['1인 원장', '—', '500~900만원', '매출 − 고정비'],
  ['다체어 원장', '—', '700~1,500만원', '매출 − 고정비 − 인건비'],
]

const faqs = [
  { q: '미용실 스텝 월급이 얼마인가요?', a: '180~230만원이 일반적이며 지역과 매장 규모에 따라 다릅니다.' },
  {
    q: '디자이너가 되면 얼마나 버나요?',
    a: '280~450만원 수준이며 개인 매출에 따른 인센티브 편차가 큽니다.',
  },
  { q: '인턴 기간이 얼마나 되나요?', a: '1~2년이 일반적입니다. 매장마다 승급 기준이 다르니 면접에서 확인하세요.' },
  {
    q: '프리랜서가 더 버나요?',
    a: '매출 배분율이 높아 고매출자는 유리하지만, 재료비·자리값을 부담하는 경우가 있어 실수령을 따져봐야 합니다.',
  },
  {
    q: '원장이 되면 확실히 나은가요?',
    a: '예상수익은 높지만 고정비 리스크와 4대 보험·세금을 본인이 부담합니다.',
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
    { '@type': 'ListItem', position: 3, name: '진로', item: `${SITE_URL}/hair/career/salary` },
  ],
}

export default function SalaryPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span>
        <span className="text-stone-600">연봉</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">진로·연봉</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">헤어 디자이너, 실제로 얼마나 버나요?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          인턴 월 <strong className="text-amber-300">180~230만원</strong>, 디자이너{' '}
          <strong className="text-amber-300">250~450만원</strong>, 1인 원장{' '}
          <strong className="text-amber-300">500~900만원</strong> 수준입니다. 다만 디자이너부터는{' '}
          <strong className="text-amber-300">인센티브 구조</strong>라 개인 매출에 따라 편차가 큽니다.
        </p>
      </div>

      {/* 단계별 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">단계별 수입</h2>
        <p className="text-sm text-rose-600 font-bold mb-4">★ 핵심표</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[560px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">단계</th>
                <th className="text-center px-4 py-3 font-bold">기간</th>
                <th className="text-center px-4 py-3 font-bold">월 수입</th>
                <th className="text-left px-4 py-3 font-bold">급여 구조</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {stages.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-center text-stone-500 whitespace-nowrap">{r[1]}</td>
                  <td className="px-4 py-3 text-center font-semibold whitespace-nowrap">{r[2]}</td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-stone-400">
          2026년 8월 기준 참고 범위. 지역·매장 규모·개인 매출에 따라 편차가 큽니다.
        </p>
      </section>

      <AdUnit slot="1591000951" />

      {/* 인센티브 구조 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">인센티브 구조 이해하기</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[480px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">유형</th>
                <th className="text-left px-4 py-3 font-bold">구조</th>
                <th className="text-left px-4 py-3 font-bold">특징</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['고정급', '매달 동일', '인턴 단계'],
                ['기본급 + 인센', '예: 기본 180만 + 매출 25%', '가장 흔함'],
                ['순수 인센', '매출의 35~45%', '고매출자에게 유리'],
                ['프리랜서 배분', '매출의 50~70%', '재료비·자리값 본인 부담인 경우 있음'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>같은 &ldquo;월 300만원&rdquo;도 구조가 다릅니다.</strong> 기본급 비중이 높으면 안정적이고, 인센
            비중이 높으면 상한이 큽니다. 면접에서 반드시 확인하세요.
          </p>
        </div>
      </section>

      {/* 매출과 수입 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">월 매출과 수입의 관계</h2>
        <p className="text-sm text-stone-500 mb-4">디자이너 기준 (기본급 180만 + 인센 25% 가정)</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[400px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">개인 월 매출</th>
                <th className="text-center px-4 py-3 font-bold">인센티브</th>
                <th className="text-center px-4 py-3 font-bold">월 수입</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['400만원', '100만원', '280만원'],
                ['600만원', '150만원', '330만원'],
                ['800만원', '200만원', '380만원'],
                ['1,000만원', '250만원', '430만원'],
                ['1,500만원', '375만원', '555만원'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 text-center text-stone-500">{r[1]}</td>
                  <td className="px-4 py-3 text-center font-bold text-stone-900">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[13px] text-stone-600 leading-relaxed">
          <strong className="text-stone-800">개인 매출 1,000만원이 하나의 기준선</strong>입니다. 여기를 안정적으로
          넘기면 독립(창업)을 검토할 시점이 됩니다.
        </p>
      </section>

      {/* 지역별 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">지역별 차이</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">지역</th>
                <th className="text-center px-4 py-3 font-bold">인턴</th>
                <th className="text-center px-4 py-3 font-bold">디자이너</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['서울 강남·주요 상권', '200~250만원', '320~500만원'],
                ['서울 그 외 / 수도권', '185~230만원', '270~420만원'],
                ['광역시', '175~215만원', '240~380만원'],
                ['중소도시', '170~205만원', '220~330만원'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[13px] text-stone-600">
          단가가 높은 상권일수록 인센티브 총액이 커집니다. 다만 경쟁도 심하고 생활비도 높습니다.
        </p>
      </section>

      {/* 인턴 현실 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">인턴 기간의 현실</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[400px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">항목</th>
                <th className="text-left px-4 py-3 font-bold">내용</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['기간', '1~2년 (매장에 따라 3년)'],
                ['주 업무', '샴푸, 청소, 시술 보조, 재료 준비'],
                ['근무 시간', '하루 10~12시간이 흔함'],
                ['커트 연습', '영업 시간 외 (마감 후)'],
                ['수입', '180~230만원'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>&ldquo;언제 디자이너가 되는지&rdquo;가 명확하지 않은 매장은 피하세요.</strong> 승급 기준(테스트
            여부, 예상 기간)을 면접에서 물어보는 것이 중요합니다.
          </p>
        </div>
      </section>

      {/* 1인 원장 착시 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">1인 원장의 착시</h2>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-4">
          매출이 아니라 <strong className="text-stone-800">순수익</strong>으로 봐야 합니다.
        </p>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <dl className="divide-y divide-stone-50 text-sm">
            {[
              ['매출 (하루 9명 × 3.5만 × 26일)', '819만원'],
              ['− 고정비 (임대·재료·공과금 등)', '220만원'],
              ['= 순수익', '약 600만원'],
            ].map(([k, v], i) => (
              <div key={k} className="flex py-2.5 justify-between">
                <dt className={`text-stone-500 ${i === 2 ? 'font-extrabold text-stone-800' : ''}`}>{k}</dt>
                <dd className={`font-medium ${i === 2 ? 'font-extrabold text-stone-900' : 'text-stone-700'}`}>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-stone-500 mt-3 leading-relaxed bg-stone-50 border border-stone-100 rounded-xl p-3">
            여기서 <strong className="text-stone-700">4대 보험·세금·휴직 대비</strong>를 본인이 부담합니다. 직장인 월급
            600만원과 단순 비교하면 안 됩니다.{' '}
            <Link href="/hair/revenue" className="text-blue-700 font-semibold hover:underline">
              수익 구조 자세히
            </Link>
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
          <Link href="/hair/career/reality" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">진로</p>
            <p className="font-bold text-stone-900">디자이너 현실 →</p>
          </Link>
          <Link href="/hair/career/how-to" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">진로</p>
            <p className="font-bold text-stone-900">되는법 로드맵 →</p>
          </Link>
          <Link href="/hair/career/freelance" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">진로</p>
            <p className="font-bold text-stone-900">프리랜서 배분 →</p>
          </Link>
        </div>
      </section>

      <HairCta withAcademy />
    <RelatedQna sections={['hair-license']} offset={9} />

    </div>
  )
}
