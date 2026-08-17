import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import HairCta from '@/components/HairCta'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '헤어 디자이너 현실 | 장단점과 그만두는 이유' },
  description:
    '헤어 디자이너의 실제 근무 환경과 장단점을 정리했습니다. 인턴 이탈 이유, 직업병, 오래 하는 사람들의 공통점까지 솔직하게 담았습니다.',
  keywords: ['헤어 디자이너 현실', '미용사 현실', '미용실 스텝 현실', '미용사 직업병', '헤어 디자이너 장단점'],
  alternates: { canonical: '/hair/career/reality' },
}

const pros = [
  ['정년이 없다', '기술직이라 나이보다 실력이 기준'],
  ['독립 가능', '1인 미용실 창업 문턱이 낮은 편'],
  ['수요가 안정적', '머리는 3~4주마다 반드시 잘라야 함'],
  ['성과가 즉시 보임', '노력이 매출로 바로 연결'],
  ['지역 제약이 적다', '어디서든 일할 수 있음'],
]

const cons = [
  {
    t: '인턴 기간이 길고 힘듭니다',
    d: '1~2년간 샴푸·청소·보조를 하며 180~230만원을 받습니다. 커트 연습은 마감 후입니다. 이 구간에서 가장 많이 그만둡니다.',
  },
  { t: '서서 일합니다', d: '하루 8~11시간 서 있습니다. 다리·허리 부담이 큽니다. 신발과 매트 투자가 실제로 중요합니다.' },
  { t: '손목·어깨 부담', d: '같은 동작이 반복되어 손목과 어깨에 부담이 누적됩니다. 이 업종의 대표적인 직업병입니다.' },
  { t: '주말·공휴일 근무', d: '고객이 쉬는 날이 성수기입니다. 주말 근무가 기본입니다.' },
  { t: '감정 노동', d: '결과가 마음에 안 든다고 해도 손이 즉시 반응합니다. 되돌리기 어려운 시술도 많습니다.' },
  { t: '약품 노출', d: '펌·염모제에 매일 노출됩니다. 손 습진과 호흡기 부담을 호소하는 경우가 있어 환기와 장갑 사용이 중요합니다.' },
]

const faqs = [
  {
    q: '인턴 기간을 꼭 거쳐야 하나요?',
    a: '대부분 거칩니다. 기술과 현장 감각을 익히는 과정입니다. 기간은 매장마다 다릅니다.',
  },
  { q: '나이가 많아도 시작할 수 있나요?', a: '자격 제한은 없습니다. 다만 인턴 기간의 체력·수입을 고려해야 합니다.' },
  { q: '직업병이 심한가요?', a: '손목·허리·다리 부담이 누적되는 편입니다. 예방 관리가 중요합니다.' },
  {
    q: '그만두는 사람이 많나요?',
    a: '인턴 구간의 이탈이 많은 편입니다. 매장 선택과 승급 기준 확인이 중요합니다.',
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
    { '@type': 'ListItem', position: 3, name: '디자이너 현실', item: `${SITE_URL}/hair/career/reality` },
  ],
}

export default function RealityPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span>
        <span className="text-stone-600">디자이너 현실</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">진로</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">헤어 디자이너, 할 만한 일인가요?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          기술이 쌓이면 <strong className="text-amber-300">나이와 무관하게 일할 수 있고 독립도 가능</strong>합니다. 대신{' '}
          <strong className="text-amber-300">인턴 1~2년을 버텨야</strong> 하고, 손목·허리·다리의 부담이 누적됩니다.
        </p>
      </div>

      {/* 장점 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">장점</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
          <table className="w-full text-sm min-w-[440px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">항목</th>
                <th className="text-left px-4 py-3 font-bold">내용</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {pros.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 단점 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">단점</h2>
        <p className="text-sm text-stone-500 mb-4">솔직하게 적습니다. 이 클러스터는 정직함이 신뢰를 만듭니다.</p>
        <div className="space-y-3">
          {cons.map((c, i) => (
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

      {/* 이탈 이유 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">왜 인턴 때 그만두나</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
          <table className="w-full text-sm min-w-[440px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">이유</th>
                <th className="text-left px-4 py-3 font-bold">설명</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['승급 기준이 불투명', '“언제 디자이너 되냐”의 답을 못 듣는 경우'],
                ['수입 대비 근무 시간', '시급으로 환산하면 낮음'],
                ['체력', '서서 하는 장시간 근무'],
                ['배우는 것 없다는 느낌', '청소·샴푸만 반복'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-extrabold text-stone-800 mb-3">매장 선택이 결정적입니다 — 면접에서 물어볼 것</h3>
          <ul className="space-y-2 text-[13px] text-stone-600 leading-relaxed">
            {[
              '인턴 기간이 평균 얼마나 되나요?',
              '승급 기준이 무엇인가요?',
              '커트 연습 시간이 따로 있나요?',
              '현재 인턴이 몇 명이고, 최근 디자이너로 승급한 사람이 있나요?',
            ].map((t) => (
              <li key={t} className="flex gap-2"><span className="text-stone-300 shrink-0">•</span>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 오래 하는 사람 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">오래 하는 사람들의 공통점</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <ol className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li><strong className="text-stone-800">몸을 관리한다</strong> — 스트레칭, 좋은 신발, 매트</li>
            <li><strong className="text-stone-800">단골을 만든다</strong> — 신규 유치보다 재방문 관리</li>
            <li><strong className="text-stone-800">한 가지를 확실히 잘한다</strong> — 남성 커트, 펌, 염색 중 하나에서 인정받기</li>
            <li><strong className="text-stone-800">가격 경쟁에 안 들어간다</strong> — 기술과 서비스로 차별화</li>
            <li><strong className="text-stone-800">독립 시점을 계산한다</strong> — 개인 매출 1,000만원이 하나의 기준</li>
          </ol>
        </div>
      </section>

      {/* 적합성 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">이런 사람에게 맞습니다</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
            <h3 className="text-sm font-extrabold text-emerald-800 mb-3">맞는 경우</h3>
            <ul className="space-y-2 text-[13px] text-emerald-900 leading-relaxed">
              {['손으로 만드는 일에 흥미가 있다', '사람과 대화하는 것이 부담스럽지 않다', '서서 일하는 것이 괜찮다', '장기적으로 독립을 생각한다'].map((t) => (
                <li key={t} className="flex gap-2"><span className="shrink-0">•</span>{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
            <h3 className="text-sm font-extrabold text-stone-700 mb-3">주의할 경우</h3>
            <ul className="space-y-2 text-[13px] text-stone-600 leading-relaxed">
              {['손목·허리에 이미 문제가 있다', '주말 근무가 어렵다', '초기 1~2년 적은 수입을 버티기 어렵다', '클레임 응대가 심리적으로 힘들다'].map((t) => (
                <li key={t} className="flex gap-2"><span className="shrink-0">•</span>{t}</li>
              ))}
            </ul>
          </div>
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
          <Link href="/hair/career/how-to" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">진로</p>
            <p className="font-bold text-stone-900">되는법 로드맵 →</p>
          </Link>
          <Link href="/hair/career/salary" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">진로</p>
            <p className="font-bold text-stone-900">연봉 상세 →</p>
          </Link>
        </div>
      </section>

      <HairCta withAcademy />
    </div>
  )
}
