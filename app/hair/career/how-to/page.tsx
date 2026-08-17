import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import HairCta from '@/components/HairCta'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '헤어 디자이너 되는법 | 자격증부터 독립까지 로드맵' },
  description:
    '헤어 디자이너가 되는 과정을 단계별로 정리했습니다. 자격증 취득, 인턴, 디자이너 승급, 독립까지 걸리는 기간과 각 단계 준비 사항을 확인하세요.',
  keywords: ['헤어 디자이너 되는법', '미용사 되는 과정', '미용실 취업', '미용사 진로'],
  alternates: { canonical: '/hair/career/how-to' },
}

const roadmap = [
  ['1. 자격증', '5~9개월', '미용사(일반) 또는 이용사 취득', '—'],
  ['2. 면허 신청', '1~2주', '시·군·구청에 면허 신청', '—'],
  ['3. 인턴', '1~2년', '샴푸·보조·기본기', '180~230만원'],
  ['4. 주니어', '1~2년', '커트 시작, 고객 확보', '220~320만원'],
  ['5. 디자이너', '2~3년', '단골 형성, 특기 확립', '280~450만원'],
  ['6. 독립 (선택)', '—', '1인 미용실 또는 프리랜서', '500~900만원'],
]

const learnPaths = [
  ['독학', '15~40만원', '8~14개월'],
  ['학원', '150~400만원', '5~9개월'],
  ['국비지원', '자부담 0~30%', '5~9개월'],
  ['학점은행제·전문대', '300만원~', '1~2년'],
]

const shopChecks = [
  ['인턴 평균 기간', '3년 이상이면 재고'],
  ['승급 기준', '명확하지 않으면 위험'],
  ['커트 연습 시간', '별도로 있는지'],
  ['최근 승급자 유무', '실제로 디자이너가 나오는 매장인지'],
  ['4대 보험', '가입 여부'],
  ['매장 규모', '클수록 배울 게 많지만 승급 경쟁도 큼'],
]

const faqs = [
  {
    q: '자격증 없이 미용실에서 일할 수 있나요?',
    a: '면허 없이 미용업에 종사하는 것은 공중위생관리법 제8조 제1항 위반으로 300만원 이하 벌금 대상입니다.',
  },
  { q: '얼마나 걸려야 디자이너가 되나요?', a: '인턴 1~2년 + 주니어 1~2년으로 보통 2~4년입니다.' },
  {
    q: '학원을 꼭 다녀야 하나요?',
    a: '필기는 독학이 가능하지만 실기는 도구·모델 때문에 학원이 유리합니다.',
  },
  { q: '나이 제한이 있나요?', a: '없습니다.' },
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
    { '@type': 'ListItem', position: 3, name: '되는법', item: `${SITE_URL}/hair/career/how-to` },
  ],
}

export default function HowToPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span>
        <span className="text-stone-600">되는법</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">진로</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">헤어 디자이너, 어떻게 시작하나요?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          <strong className="text-amber-300">자격증 취득 5~9개월 → 인턴 1~2년 → 디자이너 승급 → 독립(선택).</strong>{' '}
          시작부터 1인 원장까지 보통 5~8년입니다.
        </p>
      </div>

      {/* 로드맵 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">전체 로드맵</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
          <table className="w-full text-sm min-w-[560px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">단계</th>
                <th className="text-center px-4 py-3 font-bold">기간</th>
                <th className="text-left px-4 py-3 font-bold">할 일</th>
                <th className="text-center px-4 py-3 font-bold">수입</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {roadmap.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-center text-stone-500 whitespace-nowrap">{r[1]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[2]}</td>
                  <td className="px-4 py-3 text-center text-[13px] whitespace-nowrap">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 1단계 자격증 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">1단계 — 어떤 자격증을 딸까</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
          <table className="w-full text-sm min-w-[380px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">목표</th>
                <th className="text-left px-4 py-3 font-bold">자격</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['미용실·헤어샵', '미용사(일반)'],
                ['바버샵 (면도 포함)', '이용사'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 font-bold text-stone-900">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>면도(쉐이빙)를 할 계획이면 이용사입니다.</strong> 공중위생관리법상 이용업과 미용업은 별개입니다.{' '}
            <Link href="/hair/license" className="font-bold underline underline-offset-2">이용사 자격증 보기</Link>
          </p>
        </div>
        <h3 className="text-sm font-extrabold text-stone-800 mb-3">학습 경로</h3>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[380px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">경로</th>
                <th className="text-center px-4 py-3 font-bold">비용</th>
                <th className="text-center px-4 py-3 font-bold">기간</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {learnPaths.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td>
                  <td className="px-4 py-3 text-center text-stone-500 whitespace-nowrap">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500">
          학원비·국비지원 비교는{' '}
          <a href="https://haircost.kr" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline">
            haircost.kr ↗
          </a>
          에서 확인하세요.
        </p>
      </section>

      <AdUnit slot="1591000951" />

      {/* 3단계 매장 선택 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">3단계 — 매장 고르는 기준</h2>
        <p className="text-sm text-rose-600 font-bold mb-4">★ 첫 매장이 이후 5년을 좌우합니다</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
          <table className="w-full text-sm min-w-[440px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">확인 항목</th>
                <th className="text-left px-4 py-3 font-bold">왜 중요한가</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {shopChecks.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4~5단계 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">4~5단계 — 디자이너로 자리 잡기</h2>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-4">
          <strong className="text-stone-800">개인 매출을 만드는 것이 전부입니다.</strong>
        </p>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <ol className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li><strong className="text-stone-800">재방문 관리</strong> — 커트는 3~4주 주기. 이 리듬을 놓치지 않게 관리</li>
            <li><strong className="text-stone-800">지명 예약 만들기</strong> — &ldquo;이 사람에게만&rdquo;이 생기면 단가 저항이 사라짐</li>
            <li><strong className="text-stone-800">특기 하나 확실히</strong> — 남성 커트, 펌, 염색 중 하나에서 인정받기</li>
            <li><strong className="text-stone-800">SNS 포트폴리오</strong> — 결과물이 곧 영업 자산</li>
          </ol>
          <p className="text-xs text-stone-500 mt-3">
            개인 월 매출 <strong className="text-stone-700">1,000만원이 독립을 검토할 기준선</strong>입니다.
          </p>
        </div>
      </section>

      {/* 6단계 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">6단계 — 독립할까, 남을까</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[440px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">구분</th>
                <th className="text-center px-4 py-3 font-bold">프리랜서</th>
                <th className="text-center px-4 py-3 font-bold">1인 창업</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['초기 자금', '거의 없음', '800~3,000만원'],
                ['수입', '매출의 50~70%', '매출 − 고정비'],
                ['리스크', '낮음', '높음'],
                ['자유도', '중간', '높음'],
                ['고객 자산', '매장과 공유', '본인'],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800">{r[0]}</td>
                  <td className="px-4 py-3 text-center text-[13px]">{r[1]}</td>
                  <td className="px-4 py-3 text-center text-[13px]">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500">
          <Link href="/hair/career/freelance" className="text-blue-700 font-semibold hover:underline">프리랜서 배분 구조 자세히</Link>
          {' · '}
          <Link href="/hair/cost" className="text-blue-700 font-semibold hover:underline">창업비용 계산</Link>
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

      <HairCta withAcademy />
    </div>
  )
}
