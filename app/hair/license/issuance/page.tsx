import type { Metadata } from 'next'
import RelatedQna from '@/components/RelatedQna'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import HairCta from '@/components/HairCta'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '미용사 면허증 발급 | 신청 절차와 위생교육 안내' },
  description:
    '미용사 면허증 발급 절차를 정리했습니다. 자격증과 면허의 차이, 신청 서류와 기관, 위생교육 이수와 재발급까지 확인하세요.',
  keywords: ['미용사 면허증 발급', '미용사 면허 신청', '미용사 면허 재발급', '미용업 위생교육'],
  alternates: { canonical: '/hair/license/issuance' },
}

const applyInfo = [
  ['신청처', '시장·군수·구청장'],
  ['필요 서류', '면허 신청서, 국가기술자격증(사본), 사진, 건강진단 관련 서류 등'],
  ['소요 기간', '통상 며칠 ~ 2주'],
  ['수수료', '부과됨'],
]

const reportInfo = [
  ['신청처', '관할 시·군·구청 위생과'],
  ['필수', '면허증 사본 제출'],
  ['사전 조건', '위생교육 이수'],
  ['시설 기준', '공중위생관리법 시행규칙 기준 충족'],
]

const education = [
  ['시점', '영업 신고 전 이수'],
  ['이후', '영업자는 매년 이수'],
  ['비용', '2~3만원 수준'],
  ['방법', '온라인 또는 집합 교육'],
]

const manage = [
  ['영업 중', '면허증을 영업소 안에 게시'],
  ['분실·훼손', '재발급 신청 (신청처 동일)'],
  ['성명·주민번호 변경', '기재사항 변경 신청'],
  ['면허 반납 사유 발생', '관할 구청 안내에 따름'],
]

const faqs = [
  {
    q: '자격증이랑 면허증이 다른 건가요?',
    a: '다릅니다. 자격증은 한국산업인력공단이, 면허는 시장·군수·구청장이 발급합니다. 영업에는 면허가 필요합니다.',
  },
  {
    q: '면허 신청은 어디서 하나요?',
    a: '시장·군수·구청장에게 신청합니다. 필요 서류는 지자체마다 차이가 있을 수 있으니 사전 확인하세요.',
  },
  { q: '위생교육은 언제 받나요?', a: '영업 신고 전에 이수해야 하며, 영업자는 매년 받습니다.' },
  { q: '면허증을 잃어버렸어요.', a: '재발급 신청이 가능합니다. 면허를 발급받은 관할 기관에 문의하세요.' },
  { q: '면허증을 꼭 걸어둬야 하나요?', a: '네. 영업소 안에 게시하도록 규정되어 있습니다.' },
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
    { '@type': 'ListItem', position: 4, name: '면허증 발급', item: `${SITE_URL}/hair/license/issuance` },
  ],
}

function InfoTable({ rows }: { rows: string[][] }) {
  return (
    <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
      <dl className="divide-y divide-stone-50 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex py-2.5 gap-3">
            <dt className="w-28 shrink-0 text-stone-400 font-medium">{k}</dt>
            <dd className="text-stone-700 font-medium">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default function IssuancePage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span>
        <Link href="/hair/license" className="hover:text-stone-700">자격증</Link><span>›</span>
        <span className="text-stone-600">면허증 발급</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">면허 발급</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">자격증은 땄는데, 면허는 어떻게 받나요?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          <strong className="text-amber-300">자격증과 면허는 다릅니다.</strong> Q-Net에서 자격증을 딴 뒤,{' '}
          <strong className="text-amber-300">시장·군수·구청장에게 별도로 면허를 신청</strong>해야 영업할 수 있습니다.
          여기에 미용업 신고와 위생교육까지 마쳐야 완료됩니다.
        </p>
      </div>

      {/* 3단계 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">3단계 절차</h2>
        <div className="space-y-3">
          {[
            { n: '①', t: '국가기술자격 취득', d: 'Q-Net (한국산업인력공단)' },
            { n: '②', t: '미용사 면허 신청', d: '시장·군수·구청장' },
            { n: '③', t: '미용업 신고', d: '관할 시·군·구청 위생과' },
          ].map((s) => (
            <div key={s.n} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-center">
              <span className="shrink-0 w-9 h-9 bg-stone-800 text-white rounded-full flex items-center justify-center text-sm font-extrabold">
                {s.n}
              </span>
              <div>
                <h3 className="text-sm font-extrabold text-stone-800">{s.t}</h3>
                <p className="text-[13px] text-stone-500">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-rose-50 border border-rose-100 rounded-xl p-4">
          <p className="text-xs text-rose-800 leading-relaxed">
            <strong>이 순서를 다 마쳐야 영업할 수 있습니다.</strong> 자격증만 있으면 영업할 수 없습니다.
          </p>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* ② 면허 신청 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">② 면허 신청</h2>
        <InfoTable rows={applyInfo} />
        <div className="mt-3 bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>결격사유 규정이 있습니다.</strong> 정신 질환자, 감염병환자, 마약류 중독자 등에 관한 규정이 있으므로
            해당 여부는 관할 구청에 확인하세요. 필요 서류도 지자체마다 운영에 차이가 있을 수 있어{' '}
            <strong>방문 전 전화로 확인</strong>하는 것이 확실합니다.
          </p>
        </div>
      </section>

      {/* ③ 미용업 신고 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">③ 미용업 신고</h2>
        <InfoTable rows={reportInfo} />
        <div className="mt-3 bg-rose-50 border border-rose-100 rounded-xl p-4">
          <p className="text-xs text-rose-800 leading-relaxed">
            <strong>임대차 계약 전에 해당 물건지로 신고가 가능한지 확인하세요.</strong> 시설·설비 기준을 못 맞추면
            인테리어를 다 하고도 신고가 안 될 수 있습니다. 신고 없이 영업하면 공중위생관리법 제3조 제1항 위반으로 1년
            이하 징역 또는 1천만원 이하 벌금 대상입니다.
          </p>
        </div>
      </section>

      {/* 위생교육 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">위생교육</h2>
        <InfoTable rows={education} />
        <p className="text-[11px] text-stone-400 mt-2">
          교육 시간과 방법은 변경될 수 있으므로 관할 구청 또는 위생 관련 협회에 확인하세요.
        </p>
      </section>

      {/* 면허증 관리 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">면허증 관리</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">상황</th>
                <th className="text-left px-4 py-3 font-bold">조치</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {manage.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 면허가 필요한 부가 상황 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">면허가 필요한 부가 상황</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <ul className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed">
            {[
              '소상공인 정책자금·창업 지원금 신청 시',
              '전문가용 제품 거래 계약 시',
              '상가 임대 계약 시 업종 확인',
              '배상책임보험 가입 시 업종 증빙',
            ].map((t) => (
              <li key={t} className="flex gap-2"><span className="text-stone-300 shrink-0">•</span>{t}</li>
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

      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/hair/license/beautician" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">자격증</p>
            <p className="font-bold text-stone-900">미용사(일반) →</p>
          </Link>
          <Link href="/hair/license" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">전체</p>
            <p className="font-bold text-stone-900">이용사 자격증 허브 →</p>
          </Link>
          <Link href="/hair/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">다음</p>
            <p className="font-bold text-stone-900">창업비용 계산 →</p>
          </Link>
        </div>
      </section>

      <HairCta />
    <RelatedQna sections={['hair-license']} offset={7} />

    </div>
  )
}
