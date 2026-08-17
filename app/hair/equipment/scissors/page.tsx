import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import HairCta from '@/components/HairCta'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '미용 가위 종류·가격 | 입문자 선택 기준' },
  description:
    '미용 가위 종류와 가격을 정리했습니다. 커트가위·틴닝가위 차이, 크기 선택법, 입문 예산과 관리법까지 확인하세요.',
  keywords: ['미용 가위', '미용 가위 추천', '미용 가위 가격', '틴닝가위', '커트가위'],
  alternates: { canonical: '/hair/equipment/scissors' },
}

const types = [
  ['커트가위', '기본 자르기', '10~80만원'],
  ['틴닝가위 (숱가위)', '숱 조절', '10~60만원'],
  ['세니징가위', '질감 표현', '15~70만원'],
  ['슬라이드가위', '부드러운 연결', '20~80만원'],
]

const sizes = [
  ['5.0~5.5인치', '세밀한 작업', '손이 작은 편, 디테일'],
  ['5.5~6.0인치', '가장 무난', '대부분'],
  ['6.0~7.0인치', '넓은 면 빠르게', '손이 큰 편, 남성 커트'],
]

const thinning = [
  ['15~20발', '30~40%', '숱을 많이 뺄 때'],
  ['25~30발', '20~30%', '일반적'],
  ['35발 이상', '10~20%', '질감 표현, 미세 조정'],
]

const care = [
  '시술 후 잔모 제거, 마른 천으로 닦기',
  '나사 조절 상태 주기적 점검 — 헐거우면 절삭이 뭉개집니다',
  '오일 도포 (날 사이)',
  '6~12개월마다 연마',
  '떨어뜨리지 않기 — 날 정렬이 틀어지면 회복이 어렵습니다',
]

const faqs = [
  { q: '처음에 얼마짜리를 사야 하나요?', a: '커트+틴닝 2자루 15~40만원이면 충분합니다.' },
  {
    q: '비싼 가위가 정말 다른가요?',
    a: '절삭감과 손목 부담에서 차이가 납니다. 다만 입문 단계에서 최고가가 필요하지는 않습니다.',
  },
  { q: '연마는 얼마나 자주 하나요?', a: '사용량에 따라 6~12개월입니다.' },
  { q: '왼손잡이용도 있나요?', a: '있습니다. 오른손잡이용을 억지로 쓰면 손목에 무리가 갑니다.' },
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
    { '@type': 'ListItem', position: 3, name: '미용 가위', item: `${SITE_URL}/hair/equipment/scissors` },
  ],
}

export default function ScissorsPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span>
        <span className="text-stone-600">미용 가위</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">도구·장비</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">미용 가위, 처음에 뭘 사야 하나요?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          입문용은 <strong className="text-amber-300">커트가위 + 틴닝가위 2자루로 15~40만원</strong> 선입니다. 실무용은
          자루당 20~100만원까지 올라갑니다. 처음부터 고가를 살 필요는 없지만, 너무 저렴한 것은 손목에 무리가 갑니다.
        </p>
      </div>

      {/* 종류 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">종류</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[400px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">종류</th>
                <th className="text-left px-4 py-3 font-bold">용도</th>
                <th className="text-center px-4 py-3 font-bold">가격대</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {types.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[13px] text-stone-600">
          <strong className="text-stone-800">처음엔 커트 + 틴닝 2자루면 됩니다.</strong>
        </p>
      </section>

      {/* 크기 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">크기 선택</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">크기</th>
                <th className="text-left px-4 py-3 font-bold">특징</th>
                <th className="text-left px-4 py-3 font-bold">적합</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {sizes.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>손 크기에 맞는 것이 우선입니다.</strong> 큰 가위가 좋은 것이 아니라, 손에 맞아야 손목 부담이
            적습니다.
          </p>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 틴닝 발수 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">틴닝가위 발수와 절삭률</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[380px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">발수</th>
                <th className="text-center px-4 py-3 font-bold">절삭률</th>
                <th className="text-left px-4 py-3 font-bold">용도</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {thinning.map((r) => (
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
          <strong className="text-stone-800">입문이라면 25~30발</strong>이 무난합니다. 절삭률이 높은 가위는 실수하면
          되돌리기 어렵습니다.
        </p>
      </section>

      {/* 관리 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">관리</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <ul className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed">
            {care.map((t) => (
              <li key={t} className="flex gap-2"><span className="text-stone-300 shrink-0">•</span>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 창업자 관점 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">창업자 관점</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[360px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">항목</th>
                <th className="text-left px-4 py-3 font-bold">권장</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['입문 예산', '15~40만원 (2자루)'],
                ['실무 예산', '50~150만원'],
                ['중고', '비권장'],
                ['연마 비용', '자루당 2~5만원'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-rose-50 border border-rose-100 rounded-xl p-4">
          <p className="text-xs text-rose-800 leading-relaxed">
            <strong>가위는 손목 건강과 직결됩니다.</strong> 무겁거나 손에 안 맞는 가위를 오래 쓰면 손목·엄지에 무리가
            누적됩니다. 이 업종의 대표적인 직업병이라 초기 선택이 중요합니다.{' '}
            <Link href="/hair/career/reality" className="font-bold underline underline-offset-2">
              디자이너 현실 보기
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
          <Link href="/hair/equipment/clipper" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">도구</p>
            <p className="font-bold text-stone-900">클리퍼 →</p>
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
