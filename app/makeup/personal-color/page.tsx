import type { Metadata } from 'next'
import RelatedQna from '@/components/RelatedQna'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '퍼스널컬러 진단 | 4계절 유형과 비용 총정리' },
  description:
    '퍼스널컬러 진단 비용 3~15만원. 봄웜·여름쿨·가을웜·겨울쿨 4계절 유형별 특징과 진단 방식 차이, 셀프 진단 한계까지 정리했습니다.',
  keywords: ['퍼스널컬러', '퍼스널컬러 진단', '퍼스널컬러 비용', '봄웜톤', '여름쿨톤', '가을웜톤', '겨울쿨톤', '피부톤 진단'],
  alternates: { canonical: '/makeup/personal-color' },
}

const seasons = [
  ['봄 웜', '따뜻·밝음', '화사하고 생기 있음', '코랄, 살구, 연노랑, 아이보리', '무거운 검정, 회색'],
  ['여름 쿨', '차가움·부드러움', '은은하고 차분함', '라벤더, 파스텔 핑크, 하늘색', '강한 오렌지, 골드'],
  ['가을 웜', '따뜻·깊음', '차분하고 성숙함', '카키, 브라운, 머스터드, 벽돌', '형광, 아이스톤'],
  ['겨울 쿨', '차가움·선명함', '또렷하고 강함', '블랙, 화이트, 버건디, 로열블루', '탁한 베이지, 카멜'],
]

const methods = [
  ['간단 진단', '드레이핑 천 일부, 톤만 구분', '30~50분', '3~6만원'],
  ['전문 진단', '드레이핑 풀세트, 4계절 세분', '60~120분', '8~15만원'],
  ['진단 + 메이크업', '진단 후 실제 적용', '120~180분', '12~25만원'],
  ['진단 + 쇼핑동행', '옷·화장품 함께 고름', '3~5시간', '20~40만원'],
  ['온라인·앱 진단', '사진 기반', '즉시', '무료~2만원'],
]

const faqs = [
  {
    q: '퍼스널컬러 진단 비용이 얼마인가요?',
    a: '간단 진단 3~6만원, 전문 진단 8~15만원입니다. 메이크업이나 쇼핑동행이 포함되면 더 높아집니다.',
  },
  {
    q: '무료 앱 진단은 믿을 만한가요?',
    a: '참고 정도로 보세요. 조명·카메라 보정·화면 차이 때문에 정확도가 떨어집니다.',
  },
  {
    q: '진단 결과가 기관마다 다르던데요?',
    a: '분류 체계와 조명 환경이 달라 생길 수 있습니다. 결과를 절대 기준으로 보기보다 참고로 활용하세요.',
  },
  { q: '태닝하면 결과가 바뀌나요?', a: '일시적으로 톤이 달라 보일 수 있습니다. 태닝 직후는 피하는 것이 좋습니다.' },
  {
    q: '진단받으면 뭘 알 수 있나요?',
    a: '어울리는 색 계열, 피해야 할 색, 메이크업·염색·의상 색상 방향 정도입니다.',
  },
  {
    q: '염색 색상도 알려주나요?',
    a: '대부분 헤어 컬러 방향까지 제안합니다. 실제 시술은 미용실에서 상담이 필요합니다.',
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
    { '@type': 'ListItem', position: 2, name: '메이크업샵 창업', item: `${SITE_URL}/makeup` },
    { '@type': 'ListItem', position: 3, name: '퍼스널컬러', item: `${SITE_URL}/makeup/personal-color` },
  ],
}

export default function PersonalColorPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/makeup" className="hover:text-stone-700">메이크업샵</Link><span>›</span>
        <span className="text-stone-600">퍼스널컬러</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">퍼스널컬러</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">퍼스널컬러, 진단받을 가치가 있을까?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-6">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          퍼스널컬러 진단은 <strong className="text-fuchsia-300">3만원부터 15만원까지</strong>입니다. 간단 진단이
          3~6만원, 전문 진단(드레이핑 포함)이 8~15만원입니다. 소요시간은 40분~2시간입니다.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
        <p className="text-[13px] text-amber-900 leading-relaxed">
          퍼스널컬러는 <strong>미용 목적의 색채 컨설팅이며, 의학적 진단이 아닙니다.</strong> 진단 결과는 진단사·조명·컨디션에
          따라 달라질 수 있습니다.
        </p>
      </div>

      {/* 퍼스널컬러란 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">퍼스널컬러란</h2>
        <p className="text-[15px] text-stone-600 leading-relaxed">
          피부·눈동자·모발의 색조에 따라 <strong className="text-stone-800">어울리는 색 계열을 찾는 것</strong>입니다.
          웜톤/쿨톤으로 크게 나누고, 여기서 4계절(봄·여름·가을·겨울)로 세분합니다.
        </p>
      </section>

      {/* 4계절 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">4계절 유형</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[640px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">유형</th>
                <th className="text-left px-4 py-3 font-bold">톤</th>
                <th className="text-left px-4 py-3 font-bold">특징</th>
                <th className="text-left px-4 py-3 font-bold">어울리는 색</th>
                <th className="text-left px-4 py-3 font-bold">피할 색</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {seasons.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px] whitespace-nowrap">{r[1]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[2]}</td>
                  <td className="px-4 py-3 text-[12px]">{r[3]}</td>
                  <td className="px-4 py-3 text-[12px] text-stone-500">{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed">
          각 유형은 다시 라이트·브라이트·뮤트·딥 등으로 세분되기도 합니다. 진단 기관마다 분류 체계가 조금씩 다릅니다.
        </p>
      </section>

      <AdUnit slot="1591000951" />

      {/* 진단 방식 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">진단 방식과 비용</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">방식</th>
                <th className="text-left px-4 py-3 font-bold">내용</th>
                <th className="text-center px-4 py-3 font-bold">소요시간</th>
                <th className="text-center px-4 py-3 font-bold">비용</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {methods.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px] text-stone-500">{r[1]}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">{r[2]}</td>
                  <td className="px-4 py-3 text-center font-semibold whitespace-nowrap">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-stone-400">2026년 8월 기준 참고 범위입니다.</p>
      </section>

      {/* 셀프 진단 한계 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">셀프 진단의 한계</h2>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-4">
          무료 앱이나 사진 진단이 많지만 <strong className="text-stone-800">정확도가 떨어집니다.</strong>
        </p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">요인</th>
                <th className="text-left px-4 py-3 font-bold">문제</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                ['조명', '색온도에 따라 피부톤이 완전히 다르게 보임'],
                ['사진 보정', '카메라·필터가 색을 왜곡'],
                ['메이크업', '화장한 상태로는 정확한 판별 불가'],
                ['화면 차이', '기기마다 색 재현이 다름'],
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
          참고 정도로만 쓰고, 확실히 알고 싶다면 자연광에 가까운 조명에서 대면 진단을 받는 편이 정확합니다.
        </p>
      </section>

      {/* 진단 전 준비 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">진단 전 준비</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <ul className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed">
            {[
              '메이크업을 하지 않고 방문 (또는 현장에서 클렌징)',
              '머리는 묶거나 넘겨 얼굴이 드러나게',
              '밝은 색 옷 또는 진단용 가운 착용',
              '렌즈(특히 컬러렌즈)는 빼는 것이 정확합니다',
              '태닝 직후는 피하세요. 일시적으로 톤이 달라집니다',
            ].map((t) => (
              <li key={t} className="flex gap-2"><span className="text-stone-300 shrink-0">•</span>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 가치 판단 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">진단받을 가치가 있나</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
            <h3 className="text-sm font-extrabold text-emerald-800 mb-3">있는 경우</h3>
            <ul className="space-y-2 text-[13px] text-emerald-900 leading-relaxed">
              {['화장품을 사면 자꾸 안 맞아서 버리는 편', '옷 색을 고르는 데 늘 고민이 많음', '취업·결혼 등 이미지가 중요한 이벤트를 앞둠'].map((t) => (
                <li key={t} className="flex gap-2"><span className="shrink-0">•</span>{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
            <h3 className="text-sm font-extrabold text-stone-700 mb-3">굳이 필요 없는 경우</h3>
            <ul className="space-y-2 text-[13px] text-stone-600 leading-relaxed">
              {['이미 어울리는 색을 대체로 알고 있음', '색보다 디자인·핏을 중시함', '결과를 절대 기준처럼 받아들일 성향이라면 오히려 선택지가 좁아질 수 있습니다'].map((t) => (
                <li key={t} className="flex gap-2"><span className="shrink-0">•</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>진단 결과는 참고 기준이지 규칙이 아닙니다.</strong> &ldquo;가을웜이라 파란색은 절대 안 된다&rdquo;가
            아니라, &ldquo;이런 톤이 더 잘 맞더라&rdquo; 정도로 활용하는 것이 현실적입니다.
          </p>
        </div>
      </section>

      {/* 창업자 관점 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">창업자 관점</h2>
        <p className="text-sm text-rose-600 font-bold mb-4">★ 메이크업샵의 보조 메뉴</p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-4">
          {[
            ['단가', '10만원'],
            ['소요시간', '90분'],
            ['시간당 수익', '약 6.6만원'],
            ['재료 원가', '거의 없음'],
            ['계절성', '없음'],
          ].map(([k, v]) => (
            <div key={k} className="bg-stone-50 rounded-xl p-3 text-center">
              <p className="text-[11px] text-stone-400 mb-1">{k}</p>
              <p className="text-[13px] font-bold text-stone-800">{v}</p>
            </div>
          ))}
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-extrabold text-stone-800 mb-3">메이크업샵에 붙이기 좋은 메뉴입니다</h3>
          <ol className="space-y-2 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li><strong className="text-stone-800">초기 투자가 거의 없습니다.</strong> 드레이핑 천 세트(20~80만원)와 조명이면 시작 가능합니다.</li>
            <li><strong className="text-stone-800">계절을 타지 않습니다.</strong> 웨딩 비수기(1~2월, 7~8월)를 메우는 데 유용합니다.</li>
            <li><strong className="text-stone-800">메이크업으로 연결됩니다.</strong> 진단 후 &ldquo;그럼 이 색으로 화장하면?&rdquo;이 자연스럽게 이어집니다.</li>
            <li><strong className="text-stone-800">취업 시즌 수요</strong>가 있습니다 (2~3월, 9~10월).</li>
          </ol>
        </div>
        <div className="mt-3 bg-rose-50 border border-rose-100 rounded-xl p-4 space-y-2">
          <p className="text-xs text-rose-800 leading-relaxed">
            <strong>단점:</strong> 진단 결과에 대한 불만이 생길 수 있습니다. 진단 기관마다 결과가 다를 수 있다는 점을
            사전에 안내하고, <strong>&ldquo;절대적 기준이 아니다&rdquo;</strong>라고 명확히 하는 것이 분쟁을 막습니다.
          </p>
          <p className="text-xs text-rose-800 leading-relaxed">
            <strong>표기 주의:</strong> &ldquo;정확한 진단&rdquo;, &ldquo;100% 판별&rdquo; 같은 표현은 쓰지 마세요. 색채
            컨설팅이지 검사가 아닙니다.
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

      {/* CTA */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/makeup/license" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">배워서 직접</p>
            <p className="font-bold text-stone-900">미용사(메이크업) 자격증 →</p>
          </Link>
          <Link href="/makeup/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">초기 자금</p>
            <p className="font-bold text-stone-900">창업비용 계산 →</p>
          </Link>
          <Link href="/makeup" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">창업</p>
            <p className="font-bold text-stone-900">메이크업샵 창업 →</p>
          </Link>
        </div>
      </section>
    <RelatedQna sections={['makeup-care']} offset={2} />

    </div>
  )
}
