import type { Metadata } from 'next'
import RelatedQna from '@/components/RelatedQna'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '이용사 자격증 취득방법 | 시험 구성과 면허 절차 2026' },
  description: '이용사 자격증 필기·실기 시험 구성과 미용사 자격증과의 차이, 면허 신청 3단계 절차를 정리했습니다. 바버샵 창업에 필요한 면허를 확인하세요.',
  keywords: ['이용사 자격증', '이용사 면허', '이용사 미용사 차이', '이용사 실기', '바버샵 자격증'],
  alternates: { canonical: '/hair/license' },
}

const hairLicenseFaqs = [
  { q: '미용사 자격증이 있는데 이용사도 따야 하나요?', a: '운영 계획에 따라 다릅니다. 면도(셰이빙)를 포함한 이용업을 하려면 이용사 면허가 필요합니다. 커트·펌·염색 중심이면 미용업으로 신고할 수 있습니다. 공중위생관리법상 두 영업은 별개이므로, 창업 전 관할 구청에 신고 업종을 확인하세요.' },
  { q: '이용사 시험이 개정됐다는데 뭐가 바뀌었나요?', a: '2022년 1월 필기시험이 NCS 기반으로 개정되었습니다. 2022년 이전 교재와 기출은 현재 출제 기준과 다를 수 있으니 개정판을 사용하세요.' },
  { q: '실기에서 기구 분해·소독이 왜 중요한가요?', a: '별도 배점 항목이기 때문입니다. 커트 기술만 연습하고 도구 관리를 소홀히 하면 감점이 누적되어 탈락합니다.' },
  { q: '응시 자격에 제한이 있나요?', a: '없습니다. 학력·나이·경력 제한 없이 누구나 응시할 수 있습니다.' },
  { q: '필기 합격 후 실기는 언제까지 봐야 하나요?', a: '필기 합격 후 2년간 실기 응시가 가능합니다.' },
  { q: '학원비는 얼마인가요?', a: '학원·과정·지역에 따라 차이가 큽니다. 국비지원 적용 여부에 따라서도 달라집니다. 학원 수강료 비교는 haircost.kr에서 확인할 수 있습니다.' },
]

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: hairLicenseFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
  { '@type': 'ListItem', position: 2, name: '이용원·바버샵 창업', item: `${SITE_URL}/hair` },
  { '@type': 'ListItem', position: 3, name: '자격증', item: `${SITE_URL}/hair/license` },
] }

export default function HairLicensePage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span><span className="text-stone-600">자격증</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자격증 가이드</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">이용사 자격증, 미용사와 뭐가 다른가요?</h1>
      <p className="text-stone-500 mb-8">바버샵이나 이용원을 열려면 이용사 국가기술자격이 필요합니다. 가장 많이 하는 착각이 미용사 자격증으로 대체된다는 것인데, 공중위생관리법상 이용업과 미용업은 별개의 영업입니다.</p>

      {/* 1. 이용사 vs 미용사 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">이용사 vs 미용사</h2>
        <p className="text-sm text-rose-600 font-bold mb-4">★ 가장 중요한 차이</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">구분</th><th className="text-left px-4 py-3 font-bold">영업 정의</th><th className="text-center px-4 py-3 font-bold">필요 면허</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              <tr><td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">이용업</td><td className="px-4 py-3 text-[13px]">손님의 머리카락 또는 수염을 깎거나 다듬는 등의 방법으로 용모를 단정하게 하는 영업</td><td className="px-4 py-3 text-center font-bold text-rose-600 whitespace-nowrap">이용사</td></tr>
              <tr><td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">미용업(일반)</td><td className="px-4 py-3 text-[13px]">파마·머리카락 자르기·모양내기·머리피부 손질·염색·머리감기 등</td><td className="px-4 py-3 text-center font-semibold text-stone-600 whitespace-nowrap">미용사(일반)</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-stone-600 mb-4"><strong className="text-stone-900">핵심은 &ldquo;수염&rdquo;입니다.</strong> 면도(셰이빙)를 포함한 서비스는 이용업의 고유 영역입니다.</p>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm mb-4">
          <h3 className="text-sm font-extrabold text-stone-800 mb-3">어느 쪽을 따야 하나</h3>
          <div className="space-y-2">
            {[
              { plan: '남성 커트 + 면도(셰이빙) 중심 바버샵', rec: '이용사', hl: true },
              { plan: '커트·펌·염색 중심, 남녀 모두 응대', rec: '미용사(일반)', hl: false },
              { plan: '면도와 펌·염색을 모두 취급', rec: '관할 구청 확인 필수', hl: false },
            ].map((r) => (
              <div key={r.plan} className="flex items-center justify-between gap-3 text-[13px] border-b border-stone-50 pb-2">
                <span className="text-stone-600">{r.plan}</span>
                <span className={`shrink-0 font-bold ${r.hl ? 'text-rose-600' : 'text-stone-700'}`}>{r.rec}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-amber-800 leading-relaxed">신고 업종과 면허 요건은 운영 형태와 지자체 해석에 따라 달라질 수 있습니다. <strong>임대차 계약 전에 관할 시·군·구청 위생과에 이런 서비스를 할 예정인데 어떤 업종으로 신고해야 하는지 문의</strong>하세요. 이 확인 하나가 나중에 영업정지 리스크를 막습니다.</p>
        </div>
        <div className="overflow-x-auto rounded-lg border border-red-100 bg-white">
          <table className="w-full text-xs min-w-[440px]">
            <thead className="bg-red-100/50 text-red-900"><tr><th className="text-left px-3 py-2 font-bold">위반 내용</th><th className="text-left px-3 py-2 font-bold">근거 조항</th><th className="text-left px-3 py-2 font-bold">벌칙</th></tr></thead>
            <tbody className="divide-y divide-red-50 text-stone-700">
              <tr><td className="px-3 py-2">면허 없이 이용업·미용업 개설·종사</td><td className="px-3 py-2">제8조 제1항 위반</td><td className="px-3 py-2 font-bold">300만원 이하 벌금</td></tr>
              <tr><td className="px-3 py-2">신고 없이 영업</td><td className="px-3 py-2">제3조 제1항 전단 위반</td><td className="px-3 py-2 font-bold">1년 이하 징역 또는 1천만원 이하 벌금</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. 개요 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">이용사 국가기술자격 개요</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <dl className="divide-y divide-stone-50 text-sm">
            {[['자격명', '이용사'], ['등급', '기능사'], ['주관', '한국산업인력공단 (Q-Net)'], ['응시 자격', '제한 없음 (학력·나이·경력 무관)'], ['시행', '연 정기 시행 (연도별 일정 확인)'], ['필기 유효기간', '합격 후 2년간 실기 응시 가능']].map(([k, v]) => (
              <div key={k} className="flex py-2.5"><dt className="w-32 shrink-0 text-stone-400 font-medium">{k}</dt><dd className="text-stone-700 font-medium">{v}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 3. 필기 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">필기시험</h2>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[['형식', '객관식 / CBT'], ['합격 기준', '60점 이상'], ['출제 기준', '2022.1 NCS 개정']].map(([k, v]) => (
            <div key={k} className="bg-stone-50 rounded-xl p-3 text-center"><p className="text-xs text-stone-400 mb-1">{k}</p><p className="text-sm font-bold text-stone-800">{v}</p></div>
          ))}
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-800 leading-relaxed"><strong>개정 내용이 중요한 이유:</strong> 과거 이용사 필기는 이용이론·공중보건학·소독학·피부학·공중위생법규로 구성되어 있었으나 <strong>2022년 1월부터 NCS(국가직무능력표준) 기반으로 개정</strong>되었습니다. 2022년 이전 기출문제와 교재는 현재 출제 기준과 다를 수 있으니 중고 교재를 구할 때 반드시 개정판인지 확인하세요.</p>
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-extrabold text-stone-800 mb-3">공부 전략</h3>
          <ol className="space-y-2 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li><strong className="text-stone-800">개정 이후 기출·교재만 사용</strong>하세요. 이것이 첫 번째 조건입니다.</li>
            <li>공중위생 관련 영역을 먼저 잡으세요. 출제 패턴이 안정적이고 다른 미용 자격을 딸 때도 재활용됩니다.</li>
            <li>소독·위생 파트는 실기와 직결됩니다. 필기에서 제대로 익히면 실기 준비가 수월해집니다.</li>
            <li>기출 반복이 가장 효율적입니다. CBT 문제은행 방식이기 때문입니다.</li>
          </ol>
          <p className="text-xs text-stone-400 mt-3">예상 준비 기간: 하루 2시간 기준 2~3개월</p>
        </div>
      </section>

      {/* 4. 실기 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">실기시험</h2>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-800 leading-relaxed"><strong>과제에 포함되는 것:</strong> 이용사 실기에는 커트·정발 등 기술 작업과 함께 <strong>기구 분해 및 소독, 오일 정비</strong>가 포함됩니다. 기술만 좋아서는 안 되고, 도구 관리 능력을 별도로 평가받습니다. 클리퍼를 분해하고 소독한 뒤 오일을 넣어 다시 조립하는 과정이 채점 대상입니다.</p>
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-extrabold text-stone-800 mb-3">자주 떨어지는 이유 4가지</h3>
          <ol className="space-y-2 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li><strong className="text-stone-800">기구 분해·소독을 가볍게 봄</strong> — 커트 연습에만 시간을 쓰다가 여기서 감점이 쌓입니다. 별도 배점 항목이라는 인식이 필요합니다.</li>
            <li><strong className="text-stone-800">시간 배분 실패</strong> — 과제가 여러 개라 하나에서 지체하면 전체가 밀립니다. 전체 흐름을 타이머와 함께 통으로 연습하세요.</li>
            <li><strong className="text-stone-800">준비물 미비</strong> — 지참 준비물 목록에서 하나만 빠져도 해당 작업이 불가능합니다. 전날 두 번 확인하세요.</li>
            <li><strong className="text-stone-800">위생 절차 누락</strong> — 손 소독, 도구 배치, 정리 순서에서 감점이 누적됩니다.</li>
          </ol>
          <p className="text-xs text-stone-400 mt-3">예상 준비 기간: 주 2~3회 실습 기준 3~5개월</p>
        </div>
      </section>

      {/* 5. 면허 절차 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">자격증 취득 후 — 면허 신청 절차</h2>
        <div className="space-y-3">
          {[
            { n: '①', t: '국가기술자격 취득', d: 'Q-Net 필기 + 실기 합격' },
            { n: '②', t: '이용사 면허 신청', d: '관할 시장·군수·구청장에게 신청합니다. 면허 신청서, 국가기술자격증 사본, 사진, 건강진단 관련 서류 등이 필요하며, 결격사유 규정이 있으므로 해당 여부는 관할 구청에 확인해야 합니다.' },
            { n: '③', t: '영업 신고', d: '관할 시·군·구청 위생과에 이용업으로 신고합니다. 면허증 사본 제출, 영업 전 위생교육 이수, 시설·설비 기준(샴푸대·소독 설비 등) 충족이 필요합니다.' },
          ].map((s) => (
            <div key={s.n} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
              <span className="shrink-0 w-9 h-9 bg-stone-800 text-white rounded-full flex items-center justify-center text-sm font-extrabold">{s.n}</span>
              <div><h3 className="text-sm font-extrabold text-stone-800 mb-1">{s.t}</h3><p className="text-[13px] text-stone-500 leading-relaxed">{s.d}</p></div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg shrink-0 mt-0.5">⚠️</span>
          <p className="text-xs text-amber-800 leading-relaxed"><strong>신고 업종을 먼저 확정하세요.</strong> 이용업으로 신고할지 미용업으로 신고할지에 따라 필요한 면허와 시설 기준이 달라집니다. 인테리어 공사를 시작하기 전에 확인해야 손실이 없습니다.</p>
        </div>
      </section>

      {/* 6. 진로 + 학습 경로 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">취득 후 진로와 학습 경로</h2>
        <p className="text-[13px] text-stone-600 leading-relaxed mb-4">이용사는 <strong className="text-stone-800">자영업 전환 비율이 높은 직종</strong>입니다. 개인 이용원·바버샵 창업이 가장 일반적이며, 바버샵 근무·호텔/스포츠센터 이용실·방송국 등으로도 진출합니다. 취업으로 시작해도 결국 창업으로 가는 경우가 많아, 처음부터 창업을 염두에 두고 기술과 고객 관리를 익히는 편이 유리합니다.</p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[440px]">
            <thead className="bg-stone-50 text-stone-600"><tr><th className="text-left px-4 py-3 font-bold">경로</th><th className="text-center px-4 py-3 font-bold">소요 기간</th><th className="text-left px-4 py-3 font-bold">특징</th></tr></thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[['독학', '8~14개월', '필기는 가능. 실기는 모델·도구 문제로 난이도 높음'], ['학원', '5~9개월', '실기 도구·모델 해결, 커리큘럼 관리'], ['국비지원 (내일배움카드)', '5~9개월', '비용 절감. 요건 충족 필요'], ['학점은행제 / 전문대', '1~2년', '학위 병행']].map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60"><td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td><td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td><td className="px-4 py-3 text-[12px]">{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
          <p className="text-xs text-emerald-900 leading-relaxed"><strong>현실적인 추천:</strong> 필기는 독학, 실기는 학원. 실기에 기구 분해·소독이 포함되어 있어 실물 장비로 반복 연습이 필요합니다. <strong>학원 수강료와 국비지원 금액 비교는</strong> <a href="https://haircost.kr" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-bold">haircost.kr ↗</a>에서 확인하세요.</p>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">자주 묻는 질문</h2>
        <div className="space-y-3">
          {hairLicenseFaqs.map((f) => (
            <div key={f.q} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-[14px] font-bold text-stone-800 mb-2 flex items-start gap-2"><span className="text-stone-500 font-extrabold shrink-0">Q.</span>{f.q}</h3>
              <p className="text-[13px] text-stone-600 leading-relaxed pl-5"><span className="font-bold">A.</span> {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 출처 */}
      <section className="mb-10">
        <h2 className="text-base font-bold text-stone-700 mb-3">출처</h2>
        <ul className="space-y-1.5 text-xs text-blue-700">
          <li><a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer" className="hover:underline">이용사 국가자격 종목별 상세정보 — 한국산업인력공단 Q-Net ↗</a></li>
          <li><a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer" className="hover:underline">이용사 공개문제 — Q-Net ↗</a></li>
        </ul>
        <p className="text-[11px] text-stone-400 mt-2">시험 일정·수수료·공개문제는 연도별로 변경됩니다. 응시 전 Q-Net 공고를 확인하세요.</p>
      </section>

      {/* 내부링크 */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/hair/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">초기 자금</p><p className="font-bold text-stone-900">창업비용 얼마나 →</p></Link>
          <Link href="/hair/revenue" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">취득 후</p><p className="font-bold text-stone-900">예상 수익 보기 →</p></Link>
          <a href="https://haircost.kr" target="_blank" rel="noopener noreferrer" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors"><p className="text-xs font-semibold text-stone-400 mb-1">외부</p><p className="font-bold text-stone-900">학원비·수강료 비교 ↗</p></a>
        </div>
      </section>
    <RelatedQna sections={['hair-license']} offset={0} />

    </div>
  )
}
