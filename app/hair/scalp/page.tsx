import type { Metadata } from 'next'
import { hreflang } from '@/lib/hreflang'
import RelatedQna from '@/components/RelatedQna'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import { MedicalScopeNotice, ScalpCta } from '@/components/ScalpNotice'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '두피 스케일링 가격·주기 | 효과와 관리법 총정리' },
  description:
    '두피 스케일링 가격 3~8만원, 권장 주기 2~4주. 관리 과정과 어떤 사람에게 맞는지, 병원 진료와의 차이까지 정리했습니다.',
  keywords: ['두피 스케일링', '두피 스케일링 가격', '두피 스케일링 주기', '두피 스케일링 효과', '두피 관리'],
  alternates: { canonical: '/hair/scalp', languages: hreflang('/hair/scalp') },
}

const faqs = [
  {
    q: '탈모에 효과가 있나요?',
    a: '두피 스케일링은 의료 행위가 아니며 탈모를 치료하지 않습니다. 두피 상태를 정돈하는 관리입니다. 탈모가 걱정된다면 피부과 진료를 받으세요.',
  },
  { q: '얼마나 자주 받아야 하나요?', a: '두피 상태에 따라 2~6주입니다. 지성일수록 짧고 건성일수록 깁니다.' },
  { q: '아픈가요?', a: '대체로 시원한 느낌입니다. 두피에 상처가 있으면 따가울 수 있으니 미리 알리세요.' },
  { q: '커트와 같이 받을 수 있나요?', a: '대부분 가능하며 패키지로 운영하는 곳이 많습니다.' },
  {
    q: '집에서 하는 두피 스케일링 제품은 어떤가요?',
    a: '보조 수단으로는 쓸 수 있지만, 두피를 직접 보지 못해 과하게 하기 쉽습니다.',
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
    { '@type': 'ListItem', position: 3, name: '두피 스케일링', item: `${SITE_URL}/hair/scalp` },
  ],
}

const careSteps = [
  ['1. 두피 진단', '확대경·두피 카메라로 상태 확인', '5분'],
  ['2. 용액 도포', '각질·피지 연화', '5~10분'],
  ['3. 스케일링', '기구 또는 손으로 노폐물 정리', '10~15분'],
  ['4. 세정', '전용 샴푸로 세척', '10분'],
  ['5. 영양·진정', '앰플·마사지', '10분'],
  ['6. 마무리', '드라이', '5~10분'],
]

const compare = [
  ['성격', '미용업', '미용업', '의료기관'],
  ['의료기기·의약품', '불가', '불가', '가능'],
  ['가격', '3~8만원', '5~15만원', '시술별 상이'],
  ['강점', '커트와 함께', '두피 집중, 기기 다양', '진단·처방'],
  ['필요 자격', '미용사·이용사', '미용사', '의사'],
]

export default function ScalpPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span>
        <span className="text-stone-600">두피 스케일링</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">두피 관리</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">두피 스케일링, 받을 필요가 있을까?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          두피 스케일링은 <strong className="text-amber-300">3만원부터 8만원까지, 2~4주 간격</strong>이 일반적입니다.
          두피에 쌓인 피지·각질·잔여물을 정리하는 관리이며, <strong className="text-amber-300">탈모 치료가 아닙니다.</strong>
        </p>
      </div>

      <MedicalScopeNotice />

      {/* 개요 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">두피 스케일링이란</h2>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-4">
          두피에 쌓인 피지, 각질, 스타일링 제품 잔여물을 전용 용액과 기구로 정리하는 관리입니다. 얼굴 각질 관리의 두피
          버전이라고 보면 이해가 빠릅니다.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            ['소요시간', '30~50분'],
            ['가격대', '3~8만원'],
            ['권장 주기', '2~4주'],
            ['커트 병행 시', '7~11만원'],
          ].map(([k, v]) => (
            <div key={k} className="bg-stone-50 rounded-xl p-3 text-center">
              <p className="text-xs text-stone-400 mb-1">{k}</p>
              <p className="text-sm font-bold text-stone-800">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 관리 과정 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">관리 과정</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
          <table className="w-full text-sm min-w-[460px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">단계</th>
                <th className="text-left px-4 py-3 font-bold">내용</th>
                <th className="text-center px-4 py-3 font-bold">소요</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {careSteps.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-center text-stone-500 whitespace-nowrap">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 어떤 사람에게 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">어떤 사람에게 맞나</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-extrabold text-stone-800 mb-3">받아볼 만한 경우</h3>
            <ul className="space-y-2 text-[13px] text-stone-600 leading-relaxed">
              {[
                '감아도 하루 만에 기름지는 편',
                '두피에 각질이 눈에 띄게 일어남',
                '스타일링 제품을 매일 쓰는 편',
                '두피에서 냄새가 신경 쓰임',
                '커트할 때 두피가 답답하다는 느낌',
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-emerald-500 shrink-0 font-bold">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-extrabold text-stone-800 mb-3">병원부터 가야 하는 경우</h3>
            <ul className="space-y-2 text-[13px] text-stone-600 leading-relaxed">
              {[
                '탈모가 진행 중이거나 의심될 때',
                '두피에 염증·진물·심한 가려움이 있을 때',
                '원형으로 머리가 빠질 때',
                '지루성 두피염이 의심될 때',
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-rose-500 shrink-0 font-bold">!</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>이 구분이 가장 중요합니다.</strong> 관리실에서 해결되지 않는 문제를 관리로 미루면 시간만 지납니다.{' '}
            <Link href="/hair/scalp/hairloss" className="font-bold underline underline-offset-2">
              탈모 관리 자세히 보기
            </Link>
          </p>
        </div>
      </section>

      {/* 비교 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">미용실 vs 두피 전문점 vs 병원</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[560px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">구분</th>
                <th className="text-center px-4 py-3 font-bold">미용실</th>
                <th className="text-center px-4 py-3 font-bold">두피 전문 관리샵</th>
                <th className="text-center px-4 py-3 font-bold">피부과</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {compare.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-center text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-center text-[13px]">{r[2]}</td>
                  <td className="px-4 py-3 text-center text-[13px] text-stone-500">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed">
          <strong className="text-stone-700">&ldquo;두피관리사 자격증&rdquo;은 민간 자격입니다.</strong> 국가기술자격이
          아니며, 영업에는 미용사 또는 이용사 면허가 필요합니다.{' '}
          <Link href="/hair/license" className="text-rose-700 font-semibold underline decoration-2 decoration-rose-300 underline-offset-2 hover:decoration-rose-600 transition-colors">
            이용사 자격증 보기
          </Link>
        </p>
      </section>

      {/* 주기 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">주기와 집에서 할 관리</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
          <table className="w-full text-sm min-w-[320px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">상태</th>
                <th className="text-center px-4 py-3 font-bold">권장 주기</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[['지성 두피', '2~3주'], ['보통', '3~4주'], ['건성 두피', '4~6주']].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 text-center">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <p className="text-[13px] text-stone-700 font-semibold mb-3">
            너무 자주 하면 오히려 좋지 않습니다. 각질을 과하게 제거하면 두피 장벽이 약해질 수 있습니다.
          </p>
          <h3 className="text-sm font-extrabold text-stone-800 mb-2">집에서 할 것</h3>
          <ul className="space-y-2 text-[13px] text-stone-600 leading-relaxed">
            {[
              '미지근한 물로 감기 (뜨거운 물은 유분을 과하게 제거)',
              '손톱이 아니라 지문으로 문지르기',
              '컨디셔너·트리트먼트는 두피가 아니라 모발에',
              '완전히 말리고 자기',
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="text-stone-300 shrink-0">•</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 창업자 관점 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">창업자 관점</h2>
        <p className="text-sm text-rose-600 font-bold mb-4">★ 헤어 메뉴 중 시간당 수익 1위</p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-4">
          {[
            ['단가', '5.5만원'],
            ['소요시간', '45분'],
            ['재료 원가', '6,000원'],
            ['시간당 수익', '약 6.5만원'],
            ['초기 투자', '50~300만원'],
          ].map(([k, v]) => (
            <div key={k} className="bg-stone-50 rounded-xl p-3 text-center">
              <p className="text-[11px] text-stone-400 mb-1">{k}</p>
              <p className="text-[13px] font-bold text-stone-800">{v}</p>
            </div>
          ))}
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm space-y-3">
          <p className="text-[13px] text-stone-600 leading-relaxed">
            <strong className="text-stone-800">커트(5.1만원)보다 높습니다.</strong> 그리고 커트와 묶으면 객단가가 3.5만원
            → 8.5만원으로 뜁니다.
          </p>
          <p className="text-[13px] text-stone-600 leading-relaxed">
            <strong className="text-stone-800">성장 시장입니다.</strong> 30~40대 남성의 두피 관심이 늘고 있는데, 이걸
            제대로 다루는 미용실·바버샵이 아직 적습니다.
          </p>
          <p className="text-[13px] text-stone-600 leading-relaxed">
            <strong className="text-stone-800">표현 관리가 핵심입니다.</strong> &ldquo;탈모 치료&rdquo;, &ldquo;발모
            효과&rdquo; 같은 표현은 의료 행위를 연상시켜 규제 대상이 될 수 있습니다. 관리의 범위를 명확히 하고 필요 시
            병원 진료를 안내하는 것이 오히려 신뢰를 만듭니다.
          </p>
        </div>
        <p className="text-[11px] text-stone-400 mt-3">2026년 8월 기준 참고 범위입니다. 지역·매장에 따라 달라집니다.</p>
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

      {/* 클러스터 내부링크 */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/hair/scalp/hairloss" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">두피</p>
            <p className="font-bold text-stone-900">탈모 관리 →</p>
          </Link>
          <Link href="/hair/scalp/clinic" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">모발</p>
            <p className="font-bold text-stone-900">헤어 클리닉 →</p>
          </Link>
          <Link href="/hair/service/cut" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">시술</p>
            <p className="font-bold text-stone-900">커트 →</p>
          </Link>
        </div>
      </section>

      <ScalpCta />

      <div className="mt-6">
        <AdUnit slot="3291145762" format="autorelaxed" responsive={false} />
      </div>
    <RelatedQna sections={['hair-style']} offset={4} />

    </div>
  )
}
