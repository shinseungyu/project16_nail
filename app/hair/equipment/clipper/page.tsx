import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import HairCta from '@/components/HairCta'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '클리퍼 추천·날 종류 | 바버샵 창업자용 선택 기준' },
  description:
    '클리퍼 선택 기준을 정리했습니다. 날 번호별 길이, 유선·무선 차이, 업무용과 가정용 구분, 관리법까지 확인하세요.',
  keywords: ['클리퍼', '클리퍼 추천', '바리깡', '클리퍼 날', '이발기'],
  alternates: { canonical: '/hair/equipment/clipper' },
}

const blades = [
  ['0 (민날)', '0.5~1mm', '스킨 페이드'],
  ['1', '3mm', '페이 페이드 시작'],
  ['2', '6mm', '페이드 중간'],
  ['3', '10mm', '옆·뒤 기본'],
  ['4', '13mm', '자연스러운 짧음'],
  ['6', '19mm', '크롭 윗경계'],
  ['8', '25mm', '전체 정리'],
]

const proVsHome = [
  ['가격', '10~40만원', '3~10만원'],
  ['모터', '강함. 굵은 모발도 밀림', '약함'],
  ['날 정밀도', '높음', '보통'],
  ['연속 사용', '장시간 가능', '발열로 제한'],
  ['소음', '낮은 편', '큼'],
  ['날 교체', '가능', '제한적'],
]

const care = [
  ['매 시술 후', '브러시로 잔모 제거'],
  ['매일', '날 전용 오일 1~2방울'],
  ['주 1회', '날 분리 후 소독'],
  ['6~12개월', '날 교체 또는 연마'],
]

const faqs = [
  {
    q: '집에서 쓰는 건데 업무용이 필요한가요?',
    a: '아닙니다. 가정용으로 충분합니다. 페이드처럼 정교한 작업을 하려면 업무용이 유리합니다.',
  },
  { q: '날 번호가 뭔가요?', a: '가드 번호이며 숫자가 클수록 머리를 길게 남깁니다.' },
  { q: '오일은 꼭 발라야 하나요?', a: '네. 날 수명과 시술 품질에 직결됩니다.' },
  { q: '중고를 사도 되나요?', a: '권장하지 않습니다. 날 상태를 확인하기 어렵습니다.' },
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
    { '@type': 'ListItem', position: 3, name: '클리퍼', item: `${SITE_URL}/hair/equipment/clipper` },
  ],
}

export default function ClipperPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span>
        <span className="text-stone-600">클리퍼</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">도구·장비</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">클리퍼, 뭘 기준으로 골라야 하나요?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          업무용은 <strong className="text-amber-300">10~40만원</strong>, 가정용은{' '}
          <strong className="text-amber-300">3~10만원</strong>대입니다. 페이드컷을 하려면 날 조절이 세밀한 업무용이
          필요하고, 집에서 간단한 미는 용도라면 가정용으로 충분합니다.
        </p>
      </div>

      {/* 날 번호 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">날 번호와 길이</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">번호 (가드)</th>
                <th className="text-center px-4 py-3 font-bold">남기는 길이</th>
                <th className="text-left px-4 py-3 font-bold">용도</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {blades.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[13px] text-stone-600 leading-relaxed">
          <strong className="text-stone-800">페이드컷은 번호를 순차적으로 올려가며 경계를 지우는 기법</strong>입니다.
          그래서 가드가 이어지는 세트가 필요합니다.
        </p>
      </section>

      <AdUnit slot="1591000951" />

      {/* 업무용 vs 가정용 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">업무용 vs 가정용</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
          <table className="w-full text-sm min-w-[460px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">구분</th>
                <th className="text-center px-4 py-3 font-bold">업무용</th>
                <th className="text-center px-4 py-3 font-bold">가정용</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {proVsHome.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-center text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-center text-[13px] text-stone-500">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 유선 vs 무선 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">유선 vs 무선</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">구분</th>
                <th className="text-left px-4 py-3 font-bold">장점</th>
                <th className="text-left px-4 py-3 font-bold">단점</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['유선', '출력 일정, 배터리 걱정 없음', '선이 걸림'],
                ['무선', '동선 자유', '배터리 저하 시 출력 감소'],
                ['겸용', '둘 다', '무거움, 비쌈'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[13px] text-stone-600">
          <strong className="text-stone-800">바버샵은 무선 또는 겸용을 주로 씁니다.</strong> 고객 주위를 돌며
          작업하기 때문입니다.
        </p>
      </section>

      {/* 관리 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">관리</h2>
        <p className="text-sm text-rose-600 font-bold mb-4">★ 여기서 수명이 갈립니다</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[360px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">주기</th>
                <th className="text-left px-4 py-3 font-bold">할 일</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {care.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>오일 관리를 안 하면 날이 무뎌지고 머리가 뜯겨집니다.</strong> 고객이 아프다고 느끼는 대부분의
            원인이 이것입니다. 이용사 실기에 기구 분해·소독·오일 정비가 포함된 이유이기도 합니다.{' '}
            <Link href="/hair/license/practical" className="font-bold underline underline-offset-2">
              이용사 실기 자세히
            </Link>
          </p>
        </div>
      </section>

      {/* 창업자 관점 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">창업자 관점</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[380px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">항목</th>
                <th className="text-left px-4 py-3 font-bold">권장</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['초기 구매', '메인 1대 + 디테일러 1대'],
                ['예산', '20~50만원'],
                ['중고', '비권장 — 날 상태가 기술 품질에 직결'],
                ['소모품', '날 교체비 연 5~15만원'],
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
          <strong className="text-stone-800">가위와 클리퍼는 아끼면 안 되는 두 항목입니다.</strong> 무딘 도구로는
          아무리 실력이 좋아도 결과가 안 나옵니다.
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
          <Link href="/hair/equipment/scissors" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">도구</p>
            <p className="font-bold text-stone-900">미용 가위 →</p>
          </Link>
          <Link href="/hair/equipment/curling-iron" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">도구</p>
            <p className="font-bold text-stone-900">고데기 →</p>
          </Link>
          <Link href="/hair/equipment/salon" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">창업</p>
            <p className="font-bold text-stone-900">샵 장비 예산 →</p>
          </Link>
        </div>
      </section>

      <HairCta />
    </div>
  )
}
