import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '피부관리 종류·가격 총정리 | 관리실에서 뭘 하나요' },
  description:
    '피부관리 종류를 목적별로 정리했습니다. 기본관리 5~10만원, 여드름 7~15만원, 리프팅 10~20만원. 주기와 병원과의 차이까지 확인하세요.',
  keywords: ['피부관리', '피부관리 종류', '피부관리 가격', '피부관리실', '피부관리 주기', '아쿠아필'],
  alternates: { canonical: '/skincare/guide' },
}

const byConcern = [
  ['전반적으로 칙칙함', '기본 피부관리', '5~10만원', '2~4주'],
  ['모공에 노폐물', '아쿠아필', '3~10만원', '2~4주'],
  ['여드름·트러블', '여드름 관리', '7~15만원', '주 1회~2주'],
  ['탄력·라인', '리프팅·탄력 관리', '10~20만원', '1~2주'],
  ['건조함', '보습·진정 관리', '5~12만원', '2~4주'],
  ['등 트러블', '등 관리', '6~12만원', '2~4주'],
  ['몸 전체 관리', '바디 관리', '8~15만원', '1~2주'],
  ['털 정리', '제모(왁싱)', '2~12만원', '3~5주'],
]

const vsClinic = [
  ['법적 성격', '미용업', '의료기관'],
  ['의료기기 사용', '불가', '가능'],
  ['의약품 사용', '불가', '가능'],
  ['목적', '피부 상태 정돈', '진단과 치료'],
  ['가격대', '3~20만원', '시술별 상이'],
  ['필요 자격', '미용사(피부) 면허', '의사 면허'],
]

const revenue = [
  ['리프팅·탄력', '15만원', '80분', '약 10.1만원'],
  ['바디 관리', '12만원', '80분', '약 7.9만원'],
  ['아쿠아필', '6만원', '45분', '약 7.9만원'],
  ['등 관리', '8만원', '60분', '약 7.1만원'],
  ['여드름 관리', '10만원', '80분', '약 6.6만원'],
  ['기본 관리', '7만원', '70분', '약 5.4만원'],
]

const faqs = [
  {
    q: '피부관리를 얼마나 자주 받아야 하나요?',
    a: '관리 종류에 따라 다르지만 2~4주가 일반적입니다. 여드름 집중 관리는 주 1회를 권하기도 합니다.',
  },
  {
    q: '병원과 관리실 중 어디가 나은가요?',
    a: '목적이 다릅니다. 진단·치료가 필요하면 병원, 정기적인 피부 컨디션 정돈이 목적이면 관리실입니다.',
  },
  { q: '회원권을 꼭 끊어야 하나요?', a: '아닙니다. 1~2회 단건으로 받아보고 결정하세요.' },
  {
    q: '관리를 받으면 피부가 좋아지나요?',
    a: '관리실은 치료 기관이 아니며 효과는 개인차가 큽니다. 주기적인 관리로 컨디션을 유지하는 관점으로 접근하는 것이 현실적입니다.',
  },
  {
    q: '남성도 받나요?',
    a: '가능하며 최근 남성 고객이 늘고 있습니다. 등 관리·제모 문의가 특히 많습니다.',
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
    { '@type': 'ListItem', position: 2, name: '피부관리샵 창업', item: `${SITE_URL}/skincare` },
    { '@type': 'ListItem', position: 3, name: '피부관리 가이드', item: `${SITE_URL}/skincare/guide` },
  ],
}

export default function SkincareGuidePage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/skincare" className="hover:text-stone-700">피부관리샵</Link><span>›</span>
        <span className="text-stone-600">피부관리 가이드</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">소비자 가이드</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">피부관리, 어떤 걸 받아야 할까?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-6">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          피부관리는 목적에 따라 <strong className="text-emerald-300">5만원부터 20만원까지</strong>입니다. 기본 관리가
          5~10만원, 여드름 관리 7~15만원, 리프팅·탄력 10~20만원입니다. 대부분 2~4주 간격으로 받습니다.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
        <p className="text-[13px] text-amber-900 leading-relaxed">
          <strong>피부관리샵은 의료기관이 아닙니다.</strong> 치료 목적의 시술이 아니며 의료기기·의약품을 사용할 수
          없습니다. 피부 질환이 있다면 피부과 진료가 먼저입니다.
        </p>
      </div>

      {/* 고민별 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">고민별로 뭘 받아야 하나</h2>
        <p className="text-sm text-rose-600 font-bold mb-4">★ 핵심표</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">고민</th>
                <th className="text-left px-4 py-3 font-bold">추천 관리</th>
                <th className="text-center px-4 py-3 font-bold">가격</th>
                <th className="text-center px-4 py-3 font-bold">주기</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {byConcern.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-center font-semibold whitespace-nowrap">{r[2]}</td>
                  <td className="px-4 py-3 text-center text-stone-500 whitespace-nowrap">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500">
          관리별 상세는{' '}
          <Link href="/skincare/service/basic" className="text-blue-700 font-semibold hover:underline">기본관리</Link>
          {' · '}
          <Link href="/skincare/service/acne" className="text-blue-700 font-semibold hover:underline">여드름</Link>
          {' · '}
          <Link href="/skincare/service/lifting" className="text-blue-700 font-semibold hover:underline">리프팅</Link>
          {' · '}
          <Link href="/skincare/service/waxing" className="text-blue-700 font-semibold hover:underline">왁싱</Link>
          {' '}페이지에 있습니다.
        </p>
      </section>

      <AdUnit slot="1591000951" />

      {/* 관리실 vs 병원 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">관리실 vs 병원 — 어디로 가야 하나</h2>
        <p className="text-sm text-stone-500 mb-4">가장 많이 헷갈리는 부분입니다.</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
          <table className="w-full text-sm min-w-[460px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">구분</th>
                <th className="text-center px-4 py-3 font-bold">피부관리샵</th>
                <th className="text-center px-4 py-3 font-bold">피부과 (의료기관)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {vsClinic.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-center text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-center text-[13px] text-stone-500">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-rose-50 border border-rose-100 rounded-2xl p-5">
            <h3 className="text-sm font-extrabold text-rose-800 mb-3">이럴 땐 병원으로</h3>
            <ul className="space-y-2 text-[13px] text-rose-900 leading-relaxed">
              {['염증이 심하고 통증이 있을 때', '피부 질환이 의심될 때', '처방약이 필요한 상태일 때', '짧은 기간에 확실한 변화를 원할 때'].map((t) => (
                <li key={t} className="flex gap-2"><span className="shrink-0">•</span>{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
            <h3 className="text-sm font-extrabold text-emerald-800 mb-3">이럴 땐 관리실이 맞습니다</h3>
            <ul className="space-y-2 text-[13px] text-emerald-900 leading-relaxed">
              {['정기적으로 피부 컨디션을 정돈하고 싶을 때', '노폐물·각질 관리가 목적일 때', '다운타임 없이 관리하고 싶을 때'].map((t) => (
                <li key={t} className="flex gap-2"><span className="shrink-0">•</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 첫 방문 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">첫 방문 흐름</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[440px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">단계</th>
                <th className="text-left px-4 py-3 font-bold">내용</th>
                <th className="text-center px-4 py-3 font-bold">소요</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['1. 상담', '피부 고민, 사용 제품, 병력 확인', '10~15분'],
                ['2. 피부 분석', '확대경으로 상태 확인', '5~10분'],
                ['3. 관리 계획 제안', '어떤 관리를 몇 회 받을지', '5~10분'],
                ['4. 관리 진행', '', '40~90분'],
                ['5. 홈케어 안내', '집에서 할 것', '5분'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-center text-stone-500 whitespace-nowrap">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[13px] text-stone-600">
          <strong className="text-stone-800">첫 방문은 상담 포함 90~120분</strong>을 잡으세요.
        </p>
      </section>

      {/* 회원권 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">회원권(정기권) 판단 기준</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">구성</th>
                <th className="text-center px-4 py-3 font-bold">회당 단가</th>
                <th className="text-left px-4 py-3 font-bold">판단</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['단건', '10만원', '부담 없음. 처음엔 이걸로'],
                ['4회권', '9만원 (10% 할인)', '한 번 받아보고 괜찮으면'],
                ['10회권', '8.5만원 (15% 할인)', '확신이 있을 때만'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 text-center">{r[1]}</td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 space-y-2">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>첫 방문에 10회권을 결제하지 마세요.</strong> 관리 방식이 나와 맞는지, 원장 손이 편한지는 1~2회
            받아봐야 압니다. 정상적인 곳은 단건부터 권합니다.
          </p>
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>폐업 위험도 고려하세요.</strong> 선결제한 회차는 매장이 문을 닫으면 돌려받기 어렵습니다. 오래 운영한
            곳인지 확인하는 편이 안전합니다.
          </p>
        </div>
      </section>

      {/* 주기 + 주의사항 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">관리 주기와 주의사항</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
          <table className="w-full text-sm min-w-[460px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">관리</th>
                <th className="text-center px-4 py-3 font-bold">권장 주기</th>
                <th className="text-left px-4 py-3 font-bold">이유</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['기본 관리', '2~4주', '피부 재생 주기'],
                ['아쿠아필', '2~4주', '자극이 적어 자주 가능'],
                ['여드름 관리', '주 1회~2주', '집중 관리 필요'],
                ['리프팅', '1~2주 → 월 1회', '초반 집중 후 유지'],
                ['왁싱', '3~5주', '모주기'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <p className="text-[13px] text-stone-700 font-semibold mb-3">
            과하게 자주 받는 것도 좋지 않습니다. 각질 제거를 너무 자주 하면 피부 장벽이 약해질 수 있습니다.
          </p>
          <ul className="space-y-2 text-[13px] text-stone-600 leading-relaxed">
            {[
              '관리 직후 자외선에 민감해질 수 있어 자외선 차단이 권장됩니다',
              '당일에는 강한 각질 제거 제품 사용을 피하세요',
              '복용·도포 중인 피부 약이 있다면 반드시 사전에 알리세요',
              '시술 부위에 상처나 염증이 있으면 관리가 제한될 수 있습니다',
              '관리 후 지속적인 붉어짐·통증·진물이 있으면 의료기관 진료를 받으세요',
            ].map((t) => (
              <li key={t} className="flex gap-2"><span className="text-stone-300 shrink-0">•</span>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 샵 고르는 기준 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">샵 고르는 기준</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <ol className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li><strong className="text-stone-800">미용사(피부) 면허 게시 여부</strong> — 영업소 안에 게시하게 되어 있습니다</li>
            <li><strong className="text-stone-800">첫 상담에서 피부 분석을 하는지</strong> — 바로 관리부터 시작하는 곳은 피하세요</li>
            <li><strong className="text-stone-800">단건 이용이 가능한지</strong> — 회원권만 강요하면 다시 생각해보세요</li>
            <li><strong className="text-stone-800">위생</strong> — 일회용품 사용, 침구 교체, 도구 소독</li>
            <li><strong className="text-stone-800">효과를 단정하지 않는지</strong> — &ldquo;완치&rdquo;, &ldquo;치료&rdquo; 같은 표현을 쓰는 곳은 주의</li>
          </ol>
        </div>
      </section>

      {/* 창업자 관점 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">창업자 관점 — 관리별 시간당 수익</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[460px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">관리</th>
                <th className="text-center px-4 py-3 font-bold">단가</th>
                <th className="text-center px-4 py-3 font-bold">시간</th>
                <th className="text-center px-4 py-3 font-bold">시간당 수익</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {revenue.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td>
                  <td className="px-4 py-3 text-center text-stone-500 whitespace-nowrap">{r[2]}</td>
                  <td className="px-4 py-3 text-center font-bold whitespace-nowrap">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-stone-400">2026년 8월 기준 참고 범위입니다.</p>
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

      {/* CTA */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/skincare" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">창업</p>
            <p className="font-bold text-stone-900">피부관리샵 창업 →</p>
          </Link>
          <Link href="/skincare/license" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">배워서 직접</p>
            <p className="font-bold text-stone-900">미용사(피부) 자격증 →</p>
          </Link>
          <Link href="/skincare/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">초기 자금</p>
            <p className="font-bold text-stone-900">창업비용 계산 →</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
