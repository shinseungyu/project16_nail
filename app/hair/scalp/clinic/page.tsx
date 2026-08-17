import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import { MedicalScopeNotice, ScalpCta } from '@/components/ScalpNotice'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '헤어 클리닉 가격·종류 | 손상모 관리와 주기' },
  description:
    '헤어 클리닉 가격 3~15만원. 손상 정도별 종류와 주기, 집에서 하는 트리트먼트와 뭐가 다른지 정리했습니다.',
  keywords: ['헤어 클리닉', '헤어 클리닉 가격', '헤어 클리닉 효과', '머리 손상', '손상모 관리'],
  alternates: { canonical: '/hair/scalp/clinic' },
}

const faqs = [
  {
    q: '손상된 머리가 회복되나요?',
    a: '이미 손상된 모발이 원래대로 돌아가지는 않습니다. 표면을 보강해 진행을 늦추고 감촉을 개선하는 관리입니다.',
  },
  { q: '얼마나 자주 받아야 하나요?', a: '종류에 따라 2~5주입니다. 시술이 잦으면 더 자주 필요할 수 있습니다.' },
  { q: '갈라진 끝도 붙나요?', a: '붙지 않습니다. 잘라내야 합니다.' },
  { q: '펌이랑 같이 해도 되나요?', a: '대부분 시술 전후에 함께 진행합니다. 손상 완화 목적으로 권장됩니다.' },
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
    { '@type': 'ListItem', position: 4, name: '헤어 클리닉', item: `${SITE_URL}/hair/scalp/clinic` },
  ],
}

const types = [
  ['기본 트리트먼트', '표면 보습·매끄러움', '20~30분', '3~6만원', '1~2주'],
  ['단백질 클리닉', '손상 부위 보강', '40~60분', '6~12만원', '2~4주'],
  ['앰플·시스테인 클리닉', '집중 관리', '50~80분', '8~15만원', '3~5주'],
  ['시술 전후 클리닉', '펌·염색 손상 최소화', '20~40분', '3~8만원', '—'],
]

export default function ClinicPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span>
        <Link href="/hair/scalp" className="hover:text-stone-700">두피</Link><span>›</span>
        <span className="text-stone-600">헤어 클리닉</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">모발 관리</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">헤어 클리닉, 받을 만한가요?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          헤어 클리닉은 <strong className="text-amber-300">3만원부터 15만원까지</strong>입니다. 기본 트리트먼트가
          3~6만원, 손상모 집중 관리가 8~15만원입니다.{' '}
          <strong className="text-amber-300">
            끊어진 모발을 되살리는 것이 아니라 표면을 코팅·보강해 손상 진행을 늦추는 관리
          </strong>
          입니다.
        </p>
      </div>

      <MedicalScopeNotice />

      {/* 종류와 가격 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">종류와 가격</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[560px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">종류</th>
                <th className="text-left px-4 py-3 font-bold">목적</th>
                <th className="text-center px-4 py-3 font-bold">소요시간</th>
                <th className="text-center px-4 py-3 font-bold">가격</th>
                <th className="text-center px-4 py-3 font-bold">유지</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {types.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{r[1]}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{r[2]}</td>
                  <td className="px-4 py-3 text-center font-semibold whitespace-nowrap">{r[3]}</td>
                  <td className="px-4 py-3 text-center text-stone-500 whitespace-nowrap">{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-stone-400">2026년 8월 기준 참고 범위입니다.</p>
      </section>

      {/* 언제 받나 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">언제 받으면 좋나</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">상황</th>
                <th className="text-left px-4 py-3 font-bold">권장</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['탈색·펌·염색 직후', '시술과 함께 받는 것이 효율적'],
                ['끝이 심하게 갈라짐', '클리닉보다 커트가 먼저'],
                ['머릿결이 푸석함', '적합'],
                ['시술 예정', '사전 클리닉으로 손상 완화'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>갈라진 끝은 클리닉으로 붙지 않습니다.</strong> 잘라내는 것이 유일한 해법입니다. 클리닉은 그 아래
            구간의 손상 진행을 늦추는 역할입니다.
          </p>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 홈케어 비교 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">집에서 하는 트리트먼트와 차이</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">구분</th>
                <th className="text-center px-4 py-3 font-bold">샵 클리닉</th>
                <th className="text-center px-4 py-3 font-bold">홈 트리트먼트</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['성분 침투', '열·기기 활용', '자연 흡수'],
                ['유지 기간', '2~5주', '3~7일'],
                ['1회 비용', '3~15만원', '0.3~2만원'],
                ['손상 진단', '가능', '불가'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 text-center text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-center text-[13px] text-stone-500">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[13px] text-stone-600 leading-relaxed">
          <strong className="text-stone-800">둘 다 필요합니다.</strong> 샵 클리닉으로 잡고, 홈케어로 유지하는 구조가
          비용 대비 효율이 좋습니다.
        </p>
      </section>

      {/* 창업자 관점 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">창업자 관점</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {[
            ['단가', '7만원'],
            ['소요시간', '50분'],
            ['시간당 수익', '약 7.9만원'],
            ['재료 원가율', '약 10~15%'],
          ].map(([k, v]) => (
            <div key={k} className="bg-stone-50 rounded-xl p-3 text-center">
              <p className="text-[11px] text-stone-400 mb-1">{k}</p>
              <p className="text-[13px] font-bold text-stone-800">{v}</p>
            </div>
          ))}
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm space-y-3">
          <p className="text-[13px] text-stone-600 leading-relaxed">
            <strong className="text-stone-800">시간당 수익이 두피 스케일링 다음으로 높습니다.</strong>
          </p>
          <p className="text-[13px] text-stone-600 leading-relaxed">
            핵심은 <strong className="text-stone-800">시술과 묶어 파는 것</strong>입니다. 펌·염색·탈색 고객에게
            사전·사후 클리닉을 제안하면 객단가가 3~8만원 올라갑니다. 이미 앉아 있는 고객이라 추가 유치 비용이 0원입니다.
          </p>
        </div>
        <div className="mt-3 bg-rose-50 border border-rose-100 rounded-xl p-4">
          <p className="text-xs text-rose-800 leading-relaxed">
            <strong>단, 과장하지 마세요.</strong> &ldquo;손상 복구&rdquo;, &ldquo;원래대로&rdquo; 같은 표현은 사실과
            다릅니다. <strong>&ldquo;손상 진행을 늦추고 표면을 정돈한다&rdquo;</strong>가 정확한 설명이고, 이렇게 말해도
            팔립니다.
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
          <Link href="/hair/scalp" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">두피</p>
            <p className="font-bold text-stone-900">두피 스케일링 →</p>
          </Link>
          <Link href="/hair/scalp/hairloss" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">두피</p>
            <p className="font-bold text-stone-900">탈모 관리 →</p>
          </Link>
          <Link href="/hair/service/perm" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">시술</p>
            <p className="font-bold text-stone-900">펌 →</p>
          </Link>
        </div>
      </section>

      <ScalpCta />
    </div>
  )
}
