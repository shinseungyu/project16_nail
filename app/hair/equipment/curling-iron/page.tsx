import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import HairCta from '@/components/HairCta'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '고데기 종류·온도 | 굵기별 선택법과 손상 줄이기' },
  description:
    '고데기 종류를 굵기·형태별로 정리했습니다. 모발별 적정 온도와 손상 줄이는 사용법, 봉고데기·판고데기 차이까지 확인하세요.',
  keywords: ['고데기', '고데기 추천', '고데기 온도', '봉고데기', '판고데기', '고데기 굵기'],
  alternates: { canonical: '/hair/equipment/curling-iron' },
}

const types = [
  ['봉고데기 (컬링)', '원통형', '컬·웨이브', '3~15만원'],
  ['판고데기 (스트레이트)', '평판형', '펴기, C컬', '3~20만원'],
  ['2way', '겸용', '컬 + 펴기', '5~20만원'],
  ['볼륨 매직기', '뿌리 전용', '정수리 볼륨', '3~12만원'],
  ['웨이브 아이론', '물결 판', '잔물결 웨이브', '3~10만원'],
  ['자동 컬링기', '자동 회전', '손이 서툴 때', '8~25만원'],
]

const sizes = [
  ['19~25mm', '잔컬, 또렷함', '단발~어깨'],
  ['32mm', '중간 웨이브 (가장 무난)', '어깨~가슴'],
  ['36~38mm', '굵은 웨이브', '가슴 아래'],
  ['40mm 이상', '아주 완만한 S', '롱헤어'],
]

const temps = [
  ['탈색모·심한 손상모', '140~160도'],
  ['가늘고 얇은 모발', '150~170도'],
  ['보통 모발', '170~190도'],
  ['굵고 건강한 모발', '190~200도'],
]

const materials = [
  ['세라믹', '열이 고르게 퍼짐. 가장 무난', '중'],
  ['토르말린', '정전기 감소', '중상'],
  ['티타늄', '열 전달 빠름. 굵은 모발용', '상'],
  ['테프론 코팅', '저렴. 코팅이 벗겨지면 교체', '하'],
]

const faqs = [
  { q: '몇 도로 쓰는 게 맞나요?', a: '모발 상태에 따라 140~200도입니다. 손상됐다면 낮게 시작하세요.' },
  { q: '32mm면 충분한가요?', a: '하나만 쓴다면 32mm가 가장 무난합니다.' },
  {
    q: '매일 써도 되나요?',
    a: '열보호제를 쓰고 온도를 낮추면 부담이 줄지만, 매일 사용은 손상이 누적됩니다.',
  },
  {
    q: '봉고데기와 판고데기 중 뭘 먼저 사나요?',
    a: '컬을 주로 원하면 봉, 펴는 게 목적이면 판입니다. 2way도 선택지입니다.',
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
    { '@type': 'ListItem', position: 3, name: '도구·장비', item: `${SITE_URL}/hair/equipment/curling-iron` },
  ],
}

export default function CurlingIronPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span>
        <span className="text-stone-600">고데기</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">도구·장비</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">고데기, 어떤 걸 사고 몇 도로 써야 할까?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          모발이 얇거나 손상됐으면 <strong className="text-amber-300">150~170도</strong>, 보통은{' '}
          <strong className="text-amber-300">170~190도</strong>, 굵고 건강하면{' '}
          <strong className="text-amber-300">190~200도</strong>가 일반적인 기준입니다. 굵기는 원하는 컬 크기에 따라
          25mm(잔컬)~38mm(굵은 웨이브)를 고릅니다.
        </p>
      </div>

      {/* 종류 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">종류별 차이</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">종류</th>
                <th className="text-left px-4 py-3 font-bold">형태</th>
                <th className="text-left px-4 py-3 font-bold">용도</th>
                <th className="text-center px-4 py-3 font-bold">가격대</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {types.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{r[1]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[2]}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 굵기 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">굵기 선택</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">굵기</th>
                <th className="text-left px-4 py-3 font-bold">컬 크기</th>
                <th className="text-left px-4 py-3 font-bold">어울리는 길이</th>
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
        <p className="text-[13px] text-stone-600">
          <strong className="text-stone-800">하나만 쓴다면 32mm</strong>입니다. 길이가 바뀌어도 대체로 무난하게 쓸 수
          있습니다.
        </p>
      </section>

      <AdUnit slot="1591000951" />

      {/* 온도 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">온도</h2>
        <p className="text-sm text-rose-600 font-bold mb-4">★ 손상의 대부분이 여기서 생깁니다</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[360px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">모발 상태</th>
                <th className="text-center px-4 py-3 font-bold">권장 온도</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {temps.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 text-center font-bold whitespace-nowrap">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-rose-50 border border-rose-100 rounded-xl p-4">
          <p className="text-xs text-rose-800 leading-relaxed">
            <strong>200도를 넘기면 손상 위험이 크게 올라갑니다.</strong> 온도를 높이면 빨리 잡히지만 모발 단백질에
            부담이 됩니다. <strong>낮은 온도로 한 번 더 통과시키는 편</strong>이 결과적으로 낫습니다.
          </p>
        </div>
      </section>

      {/* 손상 줄이기 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">손상 줄이는 사용법</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <ol className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li><strong className="text-stone-800">완전히 마른 상태에서</strong> — 젖은 머리에 쓰면 손상이 급격히 커집니다</li>
            <li><strong className="text-stone-800">열보호제 필수</strong> — 이거 하나로도 체감 차이가 큽니다</li>
            <li>한 구간에 3초 이상 머무르지 않기</li>
            <li>같은 부위 반복 통과 최소화</li>
            <li>사용 후 완전히 식은 다음 컬 정리</li>
            <li>판 사이 눌어붙은 스타일링 잔여물 닦기 (열전도가 불균일해집니다)</li>
          </ol>
        </div>
        <p className="text-xs text-stone-500 mt-3">
          손상이 이미 진행됐다면{' '}
          <Link href="/hair/scalp/clinic" className="text-blue-700 font-semibold hover:underline">
            헤어 클리닉
          </Link>
          으로 진행을 늦출 수 있습니다.
        </p>
      </section>

      {/* 소재 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">소재별 차이</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">소재</th>
                <th className="text-left px-4 py-3 font-bold">특징</th>
                <th className="text-center px-4 py-3 font-bold">가격</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {materials.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-center text-stone-500">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 창업자 관점 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">창업자 관점 — 업장용 선택</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[400px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">용도</th>
                <th className="text-left px-4 py-3 font-bold">권장</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['미용실 업무용', '세라믹·티타늄, 온도 세밀 조절, 내구성 우선'],
                ['예산', '업무용 8~25만원 (개인용보다 상위)'],
                ['수량', '굵기 2~3종 + 판고데기 1종'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-stone-400">
          2026년 8월 기준 참고 범위입니다. 특정 브랜드·제품을 추천하지 않으며 선택 기준만 제시합니다.
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
