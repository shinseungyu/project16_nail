import Link from 'next/link'
import Image from 'next/image'
import NailCalculatorWidget from '@/components/NailCalculatorWidget'
import AdUnit from '@/components/AdUnit'
import { nailServices } from '@/data/services'
import FormSection from './test/FormSection'
import HubQuickLinks from '@/components/HubQuickLinks'

const homeFaqs = [
  { q: '네일샵 창업, 자격증이 정말 필수인가요?', a: '필수입니다. 공중위생관리법 제8조 제1항은 면허 없이 미용업을 개설하거나 그 업무에 종사하는 것을 금지하며, 위반 시 제20조에 따라 300만원 이하의 벌금 대상입니다. 미용업 신고 자체가 면허증 없이는 수리되지 않습니다. 민간 자격증은 법적 효력이 없습니다.' },
  { q: '네일 자격증 따는 데 얼마나 걸리나요?', a: '필기 2~3개월, 실기 2~4개월로 총 3~6개월이 일반적입니다. 연 4회 시행되며 필기 합격은 2년간 유효해 실기를 여러 번 시도할 수 있습니다.' },
  { q: '집에서 홈네일샵을 해도 되나요?', a: '주거 공간에서 영업하려면 해당 건물의 용도와 미용업 신고 가능 여부를 관할 구청 위생과에서 먼저 확인해야 합니다. 신고 없이 영업하면 공중위생관리법 제3조 제1항 위반으로 1년 이하 징역 또는 1천만원 이하 벌금 대상입니다. 시설·설비 기준도 충족해야 하므로 반드시 사전 확인이 필요합니다.' },
  { q: '1인 네일샵 vs 프랜차이즈, 어떤 게 유리한가요?', a: '초기 비용 면에서는 1인 독립샵이 유리합니다. 프랜차이즈는 브랜드 인지도를 활용할 수 있지만 가맹비·로열티가 추가됩니다. 기술 자신감이 있다면 독립샵이 수익률이 더 높습니다.' },
  { q: '네일샵 창업 최소 자본금은 얼마인가요?', a: '공유 작업실 기준 200~400만원, 독립 점포 기준 보증금 포함 최소 500~700만원이 필요합니다.' },
  { q: '창업 후 손익분기점은 언제인가요?', a: '일반적으로 오픈 후 3~6개월이 평균입니다. SNS 마케팅과 후기 관리를 적극적으로 하면 2~3개월로 앞당길 수 있습니다.' },
  { q: '1인 네일샵, 하루 몇 명이나 받을 수 있나요?', a: '기본 젤네일 기준 1인당 1~1.5시간이므로 하루 5~7명이 현실적입니다. 예약제 운영으로 시간 효율을 높이는 것이 중요합니다.' },
  { q: '네일샵과 피부관리샵 중 뭐가 나을까요?', a: '초기 자금이 적다면 네일샵입니다. 창업비용이 1,000~2,000만원으로 피부관리샵(2,000~3,500만원)의 절반 수준입니다. 반면 객단가는 피부관리샵이 2~3배 높아 같은 고객 수에서 매출이 큽니다. 자금 여유가 있고 회원권 상담에 자신 있다면 피부관리샵이 순수익 절대액에서 유리합니다.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '네일샵 창업 준비 5단계',
  step: [
    { '@type': 'HowToStep', position: 1, name: '자격증 취득', text: '미용사(네일) 국가기술자격 취득 후 시장·군수·구청장에게 면허를 신청합니다. 법적 필수 요건이며, 필기+실기 합격까지 3~6개월이 걸립니다.' },
    { '@type': 'HowToStep', position: 2, name: '상권 분석 및 위치 선정', text: '목표 고객층(직장인·주부·대학생)에 맞는 상권 선택. 임대료와 유동인구 균형이 핵심.' },
    { '@type': 'HowToStep', position: 3, name: '사업자 등록 + 미용업 신고', text: '홈택스에서 개인사업자 등록 후, 관할 구청에 미용업 신고. 영업 전 위생교육 이수 필수(교육 시간은 관할 구청 확인).' },
    { '@type': 'HowToStep', position: 4, name: '인테리어 및 장비 세팅', text: '조명·환기·소독 시설 우선 투자. 중고 장비 활용으로 비용 절감 가능.' },
    { '@type': 'HowToStep', position: 5, name: 'SNS 개설 및 오픈 준비', text: '인스타그램·네이버 플레이스 오픈 전 등록 완료. 오픈 이벤트로 초기 고객 확보.' },
  ],
}

export default function Home() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      {/* 히어로 */}
      <section className="relative py-36 border-b border-stone-200 overflow-hidden min-h-[560px] flex items-center">
        <Image src="/images/bg.webp" alt="네일샵 창업" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-[1100px] mx-auto px-4 text-center">
          <p className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">2026 최신 기준</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            1인 네일샵 창업, 비용·자격증·수익<br />
            <span className="text-white/80">2026 최신 기준 총정리</span>
          </h1>
          <p className="text-base text-white/70 mb-5 max-w-xl mx-auto leading-relaxed">
            창업비용부터 자격증, 예상 수익까지 1인 네일샵 창업의 모든 것을 알려드립니다
          </p>
          <HubQuickLinks dark items={[
            { href: '/cost', label: '창업비용', icon: '💰' },
            { href: '/license', label: '자격증', icon: '📜' },
            { href: '/revenue', label: '예상수익', icon: '📈' },
            { href: '/calculator', label: '비용 계산기', icon: '🧮' },
          ]} />
          <div className="relative mt-12 w-full text-left animate-fade-in-up">
            <div className="flex justify-center md:justify-start mb-3">
              <span className="inline-block bg-[#FEE500] text-black text-sm font-extrabold px-4 py-1.5 rounded-full shadow-sm animate-bounce">간편 신청하기 👇</span>
            </div>
            <FormSection />
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-4 py-14 space-y-20">

        {/* 광고 (hero-top, 사이드바/디스플레이 단위) */}
        <AdUnit slot="7150499722" />

        {/* 섹션 0 - 자격증 필수 안내 */}
        <section>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-rose-50 text-rose-600 text-[10px] font-extrabold px-2 py-0.5 rounded tracking-widest uppercase border border-rose-100">가장 많이 묻는 질문 1위</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-3 tracking-tight">네일샵 창업, &apos;자격증&apos;이 꼭 필요한가요?</h2>
          <p className="text-stone-500 text-sm mb-4 leading-relaxed">
            네, <strong className="text-stone-800">법적으로 반드시 필요합니다.</strong>{' '}
            <strong className="text-stone-800">공중위생관리법 제6조</strong>는 미용업에 종사하려는 사람이 미용사 면허를 받도록 정하고 있으며, 같은 법 <strong className="text-stone-800">제8조 제1항</strong>은 면허를 받지 않은 사람이 미용업을 개설하거나 그 업무에 종사하는 것을 금지합니다. 같은 법 시행령 제4조는 미용업을 일반·피부·네일·화장분장·종합 미용업으로 구분하며, <strong className="text-stone-800">네일미용업</strong>(손톱과 발톱을 손질·화장하는 영업)을 영위하려면 <strong className="text-stone-800">미용사(네일) 면허</strong>가 필요합니다.
          </p>
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6">
            <p className="text-xs text-red-800 leading-relaxed flex items-start gap-2 mb-3">
              <span className="text-lg shrink-0">⚠️</span>
              <span><strong>주의:</strong> &ldquo;자격증 없이도 창업할 수 있다&rdquo;는 정보는 잘못된 내용입니다. 다만 위반 유형에 따라 처벌 수위가 다르므로 정확히 알아둘 필요가 있습니다.</span>
            </p>
            <div className="overflow-x-auto rounded-lg border border-red-100 bg-white">
              <table className="w-full text-xs min-w-[440px]">
                <thead className="bg-red-100/50 text-red-900">
                  <tr>
                    <th className="text-left px-3 py-2 font-bold">위반 내용</th>
                    <th className="text-left px-3 py-2 font-bold">근거 조항</th>
                    <th className="text-left px-3 py-2 font-bold">벌칙</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-50 text-stone-700">
                  <tr>
                    <td className="px-3 py-2">면허 없이 미용업 개설·종사</td>
                    <td className="px-3 py-2">제8조 제1항 위반</td>
                    <td className="px-3 py-2 font-bold">300만원 이하 벌금</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">신고 없이 영업</td>
                    <td className="px-3 py-2">제3조 제1항 전단 위반</td>
                    <td className="px-3 py-2 font-bold">1년 이하 징역 또는 1천만원 이하 벌금</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-red-700 mt-2">무면허·미신고 상태로 영업하면 두 가지 모두 문제가 됩니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="bg-stone-50 border-2 border-stone-800 rounded-2xl p-6 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 bg-stone-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-lg">법적 필수</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🏛️</span>
                <h3 className="text-lg font-extrabold text-stone-900">미용사(네일) 국가면허</h3>
              </div>
              <p className="text-xs text-stone-500 font-semibold mb-3 tracking-wide">국가기술자격증 취득 후 시장·군수·구청장 면허 신청</p>
              <ul className="space-y-1.5 text-sm text-stone-700">
                <li className="flex gap-2"><span className="text-green-500 shrink-0">✓</span>한국산업인력공단(Q-Net) 주관 자격시험 합격</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">✓</span>시장·군수·구청장에게 미용사 면허 신청 (자격증 기반)</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">✓</span>관할 구청 위생과에 미용업 신고 완료 후 영업 가능</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">✓</span><strong>공중위생관리법 제6조·제8조 제1항</strong> 근거</li>
              </ul>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm opacity-80">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">📜</span>
                <h3 className="text-lg font-extrabold text-stone-700">민간 자격증</h3>
              </div>
              <p className="text-xs text-stone-400 font-semibold mb-3 tracking-wide">각종 협회/아카데미 발급 자격증</p>
              <ul className="space-y-1.5 text-sm text-stone-500">
                <li className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>법적 효력 없음 — 미용업 신고 서류로 인정 불가</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>이 자격증만으로는 합법적 네일샵 운영 불가</li>
                <li className="flex gap-2"><span className="text-stone-400 shrink-0">△</span>기술 수료 증명·포트폴리오 보완 용도로만 활용</li>
              </ul>
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 flex items-start gap-3">
            <span className="text-lg shrink-0 mt-0.5">💡</span>
            <p className="text-xs text-orange-800 leading-relaxed">
              <strong>노베이스도 가능합니다:</strong> 경험이 전혀 없어도 전문 아카데미 커리큘럼을 따라가면 3~6개월 안에 자격증 취득 후 창업까지 연결됩니다.
            </p>
          </div>
        </section>

        {/* 광고 (article-mid) */}
        <AdUnit slot="1591000951" />

        {/* 섹션 1 - 네일샵 창업이란? */}
        <section id="services">
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">네일샵 창업</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">네일샵 창업이란?</h2>
          <p className="text-stone-500 text-sm mb-8">손발톱을 관리·장식하는 미용 서비스업입니다. 1인 운영이 가능하고 재료비 대비 수익률이 높아 소자본 창업 아이템으로 꾸준히 주목받고 있습니다.</p>

          {/* 시술 종류 */}
          <h3 className="text-base font-extrabold text-stone-800 mb-3">주요 시술 종류</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {nailServices.map((item) => (
              <Link
                key={item.id}
                href={`/service/${item.id}`}
                className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm hover:border-stone-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-extrabold text-stone-800">{item.title}</h3>
                  <span className="text-[10px] bg-stone-100 text-stone-500 font-semibold px-2 py-0.5 rounded-full">{item.tag}</span>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed mb-2">{item.summary}</p>
                <p className="text-xs text-stone-400 leading-relaxed mb-3" style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {item.intro.replace(/\*\*/g, '')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-700">{item.price}</span>
                  <span className="text-xs text-stone-300 group-hover:text-stone-600 transition-colors">자세히 보기 →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* 시술별 수익성 표 */}
          <h3 className="text-base font-extrabold text-stone-800 mb-3">시술별 단가·시간·수익성 한눈에 보기</h3>
          <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
            <table className="w-full text-sm min-w-[640px]">
              <thead className="bg-stone-50 text-stone-600">
                <tr>
                  {['시술', '태그', '소요시간', '가격대', '재료 원가율', '시간당 수익'].map((h) => (
                    <th key={h} className="px-3 py-3 font-bold text-center first:text-left whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50 text-stone-700">
                {[
                  { s: '젤네일', tag: '수요 1위', time: '60~80분', price: '3~8만원', cost: '15~20%', profit: '약 3.6만원', hl: false },
                  { s: '아크릴 연장', tag: '단가 높음', time: '90~120분', price: '6~10만원', cost: '15~20%', profit: '약 3.4만원', hl: false },
                  { s: '네일 아트', tag: 'SNS 인기', time: '80~120분', price: '5~12만원', cost: '15~20%', profit: '약 3.6만원', hl: false },
                  { s: '손·발 케어', tag: '단골 유도', time: '40~60분', price: '2~4만원', cost: '10~15%', profit: '약 3.1만원', hl: false },
                  { s: '젤 제거', tag: '회전율 ↑', time: '20~30분', price: '1~2만원', cost: '5~10%', profit: '약 3.4만원', hl: true },
                  { s: '풀 세트', tag: '객단가 최고', time: '120~150분', price: '8~15만원', cost: '15~20%', profit: '약 4.6만원', hl: false },
                ].map((r) => (
                  <tr key={r.s} className="hover:bg-stone-50/60">
                    <td className="px-3 py-3 text-left font-bold text-stone-800 whitespace-nowrap">{r.s}</td>
                    <td className="px-3 py-3 text-center text-xs text-stone-500 whitespace-nowrap">{r.tag}</td>
                    <td className="px-3 py-3 text-center whitespace-nowrap">{r.time}</td>
                    <td className="px-3 py-3 text-center whitespace-nowrap">{r.price}</td>
                    <td className="px-3 py-3 text-center whitespace-nowrap">{r.cost}</td>
                    <td className={`px-3 py-3 text-center whitespace-nowrap font-bold ${r.hl ? 'text-rose-600' : 'text-stone-800'}`}>{r.profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-stone-50 border border-stone-100 rounded-2xl p-5 mb-10 space-y-2">
            <p className="text-xs font-bold text-stone-500 mb-1">여기서 읽어야 할 것</p>
            <p className="text-[13px] text-stone-600 leading-relaxed"><strong className="text-stone-900">1. 풀 세트가 시간당 수익 1위</strong>입니다. 시간은 오래 걸리지만 단가가 압도적입니다.</p>
            <p className="text-[13px] text-stone-600 leading-relaxed"><strong className="text-stone-900">2. 젤 제거는 단독 메뉴로 저평가</strong>되어 있습니다. 20~30분이면 끝나 시간당 수익이 젤네일과 비슷해 예약 공백을 채우는 데 유용합니다.</p>
            <p className="text-[13px] text-stone-600 leading-relaxed"><strong className="text-stone-900">3. 재료 원가율이 전 시술 15~20%로 낮습니다.</strong> 원가 절감보다 단가 인상이 훨씬 효과적입니다.</p>
          </div>

          {/* 고객층 */}
          <h3 className="text-base font-extrabold text-stone-800 mb-3">네일샵 창업의 고객층</h3>
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm mb-10">
            <p className="text-xs text-stone-500 mb-4">10대부터 60대까지 수요층이 넓습니다. 입지에 따라 주 고객층이 달라지므로 타깃을 먼저 정하고 상권을 선택하는 것이 중요합니다.</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { age: '10~20대', desc: '트렌드 디자인·행사용', color: 'bg-rose-50 text-rose-700' },
                { age: '30~40대 직장인', desc: '단색·프렌치, 정기 방문', color: 'bg-violet-50 text-violet-700' },
                { age: '30~40대 주부', desc: '단골 전환율 가장 높음', color: 'bg-blue-50 text-blue-700' },
                { age: '50대', desc: '손발 케어 관리 목적', color: 'bg-emerald-50 text-emerald-700' },
                { age: '60대 이상', desc: '건강 케어 수요 증가', color: 'bg-amber-50 text-amber-700' },
              ].map((c) => (
                <div key={c.age} className={`${c.color} rounded-xl p-3 text-center`}>
                  <p className="text-xs font-extrabold mb-1">{c.age}</p>
                  <p className="text-[11px] leading-tight">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 수익 구조 */}
          <h3 className="text-base font-extrabold text-stone-800 mb-3">네일샵 창업의 수익 구조</h3>
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm mb-6">
            <p className="text-xs text-stone-500 mb-4">수익 구조는 단순합니다. 고객 수와 단가를 높이고, 고정비를 낮추는 것이 핵심입니다.</p>
            <div className="space-y-3">
              {[
                { label: '매출', formula: '하루 고객 수 × 평균 시술 단가 × 월 영업일', color: 'bg-amber-50 text-amber-800' },
                { label: '고정비', formula: '월세 + 재료비 + 공과금 + 기타 (월 평균 150~200만원)', color: 'bg-stone-50 text-stone-600' },
                { label: '순수익', formula: '매출 − 고정비 (1인 운영 시 인건비 0원)', color: 'bg-emerald-50 text-emerald-800' },
              ].map((r) => (
                <div key={r.label} className={`${r.color} rounded-xl px-4 py-3 flex items-center gap-3`}>
                  <span className="text-xs font-extrabold w-14 shrink-0">{r.label}</span>
                  <span className="text-xs">{r.formula}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-stone-400 mt-3">재료비는 시술 단가의 10~20% 수준으로 낮아 영업이익률이 높은 편입니다.</p>
          </div>

          <div className="mt-2 text-right">
            <Link href="/board/15" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">네일샵 창업 더 자세히 알아보기 →</Link>
          </div>
        </section>

      </div>

      {/* 섹션 2 - 창업 적합도 (풀폭 배경) */}
      <section className="relative py-24 overflow-hidden min-h-[480px] flex items-center">
        <Image src="/images/bg2.webp" alt="창업 적합도 배경" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-[1100px] mx-auto px-4">
          <p className="text-xs font-semibold text-white/60 mb-2 uppercase tracking-widest">창업 적합도</p>
          <h2 className="text-2xl font-extrabold text-white mb-2">네일샵 창업, 나도 할 수 있을까?</h2>
          <p className="text-white/70 text-sm mb-8">학력·나이·경력 제한 없이 누구나 도전할 수 있습니다. 다만 아래 조건에 해당할수록 성공 가능성이 높습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-base font-extrabold text-emerald-400 mb-4">이런 분께 잘 맞아요</h3>
              <ul className="space-y-2.5">
                {[
                  '손재주가 있고 꼼꼼한 성격',
                  '고객과 대화가 편하고 서비스 마인드가 있는 분',
                  'SNS 활동에 거부감이 없는 분',
                  '독립적으로 일하는 환경을 선호하는 분',
                  '월 150~400만원 순수익을 목표로 하는 분',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/90">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-base font-extrabold text-red-400 mb-4">이런 분은 주의하세요</h3>
              <ul className="space-y-2.5">
                {[
                  '기술 연습 없이 바로 수익을 기대하는 경우',
                  '마케팅·홍보를 전혀 하지 않으려는 경우',
                  '초기 자금이 전혀 없는 상태',
                  '장시간 앉아서 집중하는 것이 어려운 경우',
                  '단골 없이 지인 고객만으로 운영하려는 경우',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/90">
                    <span className="text-red-400 font-bold shrink-0">✗</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-4 space-y-20 py-14">

        {/* 본문 4번째 - 창업비용 계산기 배치 */}
        <NailCalculatorWidget />

        {/* 섹션 4(원래 3) - 창업 전 준비해야 할 것들 */}
        <section>
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업 준비</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">네일샵 창업 전 무엇을 준비해야 하나요?</h2>
          <p className="text-stone-500 text-sm mb-8">순서대로 따라가면 빠짐없이 준비할 수 있습니다.</p>
          <div className="space-y-3">
            {[
              { step: '01', title: '자격증 취득', desc: '미용사(네일) 국가기술자격 취득 후 시장·군수·구청장에게 면허를 신청합니다. 법적 필수 요건이며, 필기+실기 합격까지 3~6개월이 걸립니다.' },
              { step: '02', title: '상권 분석 및 위치 선정', desc: '목표 고객층(직장인·주부·대학생)에 맞는 상권 선택. 임대료와 유동인구 균형이 핵심.' },
              { step: '03', title: '사업자 등록 + 미용업 신고', desc: '홈택스에서 개인사업자 등록 후, 관할 구청에 미용업 신고. 영업 전 위생교육 이수 필수(교육 시간은 관할 구청 확인).' },
              { step: '04', title: '인테리어 및 장비 세팅', desc: '조명·환기·소독 시설 우선 투자. 중고 장비 활용으로 비용 절감 가능.' },
              { step: '05', title: 'SNS 개설 및 오픈 준비', desc: '인스타그램·네이버 플레이스 오픈 전 등록 완료. 오픈 이벤트로 초기 고객 확보.' },
            ].map((item) => (
              <div key={item.step} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
                <span className="shrink-0 w-9 h-9 bg-stone-800 text-white rounded-full flex items-center justify-center text-xs font-extrabold">{item.step}</span>
                <div>
                  <h3 className="text-sm font-extrabold text-stone-800 mb-1">{item.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-stone-50 border border-stone-100 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-stone-400 mb-0.5">관련 아티클</p>
              <p className="text-sm font-bold text-stone-800">네일샵 창업 비용·조건·자격증 완전 정리</p>
              <p className="text-xs text-stone-400 mt-0.5">장점·단점·실제 비용·자격증까지 한 번에</p>
            </div>
            <Link href="/board/14" className="shrink-0 text-xs text-stone-600 font-semibold hover:underline ml-4">읽기 →</Link>
          </div>
          <div className="mt-3 text-right">
            <Link href="/guide" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">단계별 상세 가이드 보기 →</Link>
          </div>
        </section>

        {/* 섹션 5 - 네일샵 수익은 얼마나 될까? */}
        <section>
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">예상 수익</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">1인 네일샵 월 수익은 얼마나 될까요?</h2>
          <p className="text-stone-500 text-sm mb-4">하루 고객 수와 시술 단가에 따라 수익이 크게 달라집니다. 아래는 계산 근거를 공개한 현실적인 시뮬레이션입니다.</p>
          <p className="text-xs text-stone-500 bg-stone-50 border border-stone-100 rounded-lg px-3 py-2 mb-6 inline-block">계산 기준: 평균 객단가 5만원 · 월 영업일 24일 · 고정비 175만원</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { case: '보수적', icon: '🌱', customers: '하루 3명', monthly: '월 매출 360만원', net: '약 185만원', color: 'border-stone-200 bg-white' },
              { case: '평균', icon: '💅', customers: '하루 5명', monthly: '월 매출 600만원', net: '약 425만원', color: 'border-stone-800 bg-stone-50' },
              { case: '적극', icon: '🚀', customers: '하루 7명', monthly: '월 매출 840만원', net: '약 665만원', color: 'border-amber-200 bg-amber-50' },
            ].map((item) => (
              <div key={item.case} className={`border-2 ${item.color} rounded-2xl p-5 shadow-sm`}>
                <p className="text-xl mb-2">{item.icon}</p>
                <p className="text-xs font-bold text-stone-400 mb-3">{item.case} 케이스</p>
                <p className="text-xs text-stone-400">고객 수</p>
                <p className="font-bold text-stone-800 mb-1">{item.customers}</p>
                <p className="text-xs text-stone-400">{item.monthly} (24일)</p>
                <p className="text-xs text-stone-400 mt-2">월 순수익</p>
                <p className="font-extrabold text-stone-800 text-lg">{item.net}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
            <span className="text-lg shrink-0 mt-0.5">⚠️</span>
            <p className="text-xs text-amber-800 leading-relaxed">하루 7명은 젤네일 기준 순수 시술 시간만 8시간입니다. 상담·청소·SNS 관리까지 포함하면 11시간 이상이 되어 매일 유지하기는 어렵습니다. <strong>하루 4~5명이 지속 가능한 현실 구간</strong>입니다.</p>
          </div>

          {/* 객단가별 수익 */}
          <h3 className="text-base font-extrabold text-stone-800 mt-8 mb-3">객단가를 올렸을 때 (하루 5명 고정)</h3>
          <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-stone-50 text-stone-600">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">평균 객단가</th>
                  <th className="text-center px-4 py-3 font-bold">월 매출</th>
                  <th className="text-center px-4 py-3 font-bold">월 순수익</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50 text-stone-700">
                {[
                  { price: '4만원', sales: '480만원', net: '305만원' },
                  { price: '5만원', sales: '600만원', net: '425만원' },
                  { price: '6만원', sales: '720만원', net: '545만원' },
                  { price: '7만원', sales: '840만원', net: '665만원' },
                ].map((r) => (
                  <tr key={r.price} className="hover:bg-stone-50/60">
                    <td className="px-4 py-3 font-medium text-stone-800">{r.price}</td>
                    <td className="px-4 py-3 text-center">{r.sales}</td>
                    <td className="px-4 py-3 text-center font-bold text-stone-900">{r.net}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mt-3">같은 고객 수에서 <strong className="text-stone-800">객단가 1만원을 올리면 월 순수익이 120만원 늘어납니다.</strong> 고객을 하루 1명 더 받는 것과 같은 효과인데 체력 부담은 없습니다.</p>

          <div className="mt-5 text-right">
            <Link href="/revenue" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">시술 단가별 수익 계산 보기 →</Link>
          </div>
        </section>

        {/* 섹션 6 - 자격증 없이도 창업할 수 있나요? */}
        <section>
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자격증</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">자격증 없이도 네일샵 창업할 수 있나요?</h2>
          <p className="text-stone-500 text-sm mb-8">결론부터 말하면 <strong className="text-stone-800">불가능합니다.</strong> 공중위생관리법상 미용업은 면허 없이 운영할 수 없으며, 위반 시 형사 처벌 대상입니다. 자격증 취득이 선택이 아닌 법적 의무입니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-extrabold text-stone-800">네일 미용사 자격증이란?</h3>
              <p className="text-xs text-stone-500 leading-relaxed">한국산업인력공단(Q-Net)에서 주관하는 국가기술자격증입니다. 연 4회 시험이 있으며 필기(객관식 60문항)와 실기(젤·아크릴 시술)로 구성됩니다.</p>
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { label: '시험 횟수', value: '연 4회' },
                  { label: '필기 합격률', value: '약 60%' },
                  { label: '실기 합격률', value: '약 50%' },
                ].map((s) => (
                  <div key={s.label} className="bg-stone-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-stone-400 mb-1">{s.label}</p>
                    <p className="text-sm font-bold text-stone-800">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-extrabold text-stone-800 mb-4">면허 취득 절차 및 효과</h3>
              <ul className="space-y-2.5">
                {[
                  '① Q-Net 국가기술자격 합격 → ② 보건복지부 미용사 면허 신청 → ③ 구청 미용업 신고',
                  '면허증 원본은 영업장 내 게시 의무 (공중위생관리법 시행규칙 제19조)',
                  '무면허 적발 시 영업장 폐쇄 명령 및 형사 처벌 (동법 제11조·제20조)',
                  '소상공인 창업 지원금·저금리 대출 신청 시 면허증 제출 필요',
                  '공유 작업실·상가 건물 임대 계약 시 면허증 요구하는 경우 많음',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-xs text-stone-600">
                    <span className="text-stone-400 shrink-0">✓</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 text-right">
            <Link href="/license" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">자격증 취득 방법 자세히 보기 →</Link>
          </div>
        </section>

        {/* 섹션 7 - 네일샵 운영, 현실은 어떤가요? */}
        <section>
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업 현실</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">네일샵 운영, 현실은 어떤가요?</h2>
          <p className="text-stone-500 text-sm mb-8">장밋빛 기대만큼 현실도 알아야 제대로 준비할 수 있습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: '오픈 초기에는 고객이 없을 수 있다', a: '첫 1~3개월은 인스타그램, 네이버 플레이스 등록, 오픈 이벤트로 첫 고객을 끌어야 합니다. 이 기간 생활비는 여유 자금에서 충당해야 합니다.' },
              { q: '단골 고객이 수익의 70%를 책임진다', a: '신규 고객 유입도 중요하지만, 재방문 고객이 안정적인 수익의 핵심입니다. 예약 관리, 고객 카드, 감사 메시지로 단골을 만들어야 합니다.' },
              { q: '하루 5~6시간 집중 시술은 체력 소모가 크다', a: '손목·허리·눈에 부담이 오는 직업입니다. 스트레칭 루틴, 인체공학적 의자, 충분한 조명 투자가 장기 운영의 핵심입니다.' },
              { q: '가격 경쟁보다 품질로 승부해야 한다', a: '주변 가격을 따라 낮추기 시작하면 수익 구조가 무너집니다. 기술력과 서비스로 차별화하고, 적정 단가를 유지하는 것이 장기 생존 전략입니다.' },
            ].map((item) => (
              <div key={item.q} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
                <h3 className="text-sm font-extrabold text-stone-800 mb-2 flex items-start gap-2">
                  <span className="text-amber-500 shrink-0">💡</span>{item.q}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed pl-5">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 섹션 8 - 성공 포인트 7가지 */}
        <section>
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">전문가 가이드</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">네일샵 창업 성공 포인트 7가지</h2>
          <p className="text-stone-500 text-sm mb-8">기술력만으로는 창업 성공을 담보할 수 없습니다. 오래 살아남는 네일샵에는 공통된 전략이 있습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { num: '01', title: '기술력보다 중요한 고객 경험 설계', desc: '재방문을 이끄는 건 기술이 아닙니다. 청결함, 친절함, 예약 편의성이 고객 기억에 남습니다.' },
              { num: '02', title: '상권 분석은 타깃 동선 중심으로', desc: '유동인구가 많은 곳이 정답이 아닙니다. 내 고객이 다니는 동선을 먼저 파악해야 합니다.' },
              { num: '03', title: '차별화된 콘셉트가 곧 브랜드', desc: '감성 공간, 클리닉형, 프라이빗 - 명확한 정체성이 있는 매장이 브랜드로 기억됩니다.' },
              { num: '04', title: '가격 경쟁보다 가치 제안이 우선', desc: '저가 전략은 단기엔 통하지만 장기 수익 구조를 무너뜨립니다. 가치를 높이는 것이 답입니다.' },
              { num: '05', title: '마케팅은 자동화와 지속성이 핵심', desc: '예약 알림, 후기 요청 등 반복 업무는 자동화 도구로 해결해야 혼자서도 운영이 됩니다.' },
              { num: '06', title: '트렌드 감각은 꾸준히 업그레이드', desc: '먼저 트렌드를 제안할 수 있는 네일리스트가 고객 만족도와 재방문율을 높입니다.' },
              { num: '07', title: '사장만의 스토리가 브랜드를 만든다', desc: '왜 시작했는지, 어떤 가치를 주고 싶은지 - 그 이야기를 쌓으면 팬 고객이 생깁니다.' },
            ].map((item) => (
              <div key={item.num} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
                <span className="shrink-0 w-8 h-8 bg-stone-100 text-stone-600 rounded-full flex items-center justify-center text-xs font-extrabold">{item.num}</span>
                <div>
                  <h3 className="text-sm font-extrabold text-stone-800 mb-1">{item.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            <Link
              href="/board/13"
              className="bg-stone-100 border-2 border-stone-200 rounded-2xl p-5 shadow-sm flex gap-4 items-center hover:bg-stone-200 transition-colors"
            >
              <span className="shrink-0 w-8 h-8 bg-stone-800 text-white rounded-full flex items-center justify-center text-lg">→</span>
              <div>
                <h3 className="text-sm font-extrabold text-stone-700 mb-1">7가지 포인트 전문 아티클 읽기</h3>
                <p className="text-xs text-stone-500">각 포인트의 구체적인 실행 방법을 확인하세요</p>
              </div>
            </Link>
          </div>
        </section>

        {/* 섹션 9 - FAQ */}
        <section>
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자주 묻는 질문</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-8">네일샵 창업 Q&A</h2>
          <div className="space-y-3">
            {homeFaqs.map((item) => (
              <div key={item.q} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
                <h3 className="text-[14px] font-bold text-stone-800 mb-2 flex items-start gap-2">
                  <span className="text-stone-500 font-extrabold shrink-0">Q.</span>{item.q}
                </h3>
                <p className="text-[13px] text-stone-600 leading-relaxed pl-5"><span className="font-bold">A.</span> {item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right">
            <Link href="/qna" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">더 많은 Q&A 보기 →</Link>
          </div>
        </section>

        {/* 다른 미용 업종 창업 */}
        <section>
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">다른 업종 비교</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">다른 미용 업종 창업도 알아보고 계신가요?</h2>
          <p className="text-stone-500 text-sm mb-6">객단가가 높은 피부관리샵, 최소 자본으로 시작하는 메이크업샵 창업 정보도 준비했습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/skincare" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
              <p className="text-xs font-semibold text-stone-400 mb-1">객단가 2~3배</p>
              <p className="font-bold text-stone-900">피부관리샵 창업 →</p>
            </Link>
            <Link href="/makeup" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
              <p className="text-xs font-semibold text-stone-400 mb-1">300만원부터 시작</p>
              <p className="font-bold text-stone-900">메이크업샵 창업 →</p>
            </Link>
            <Link href="/hair" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
              <p className="text-xs font-semibold text-stone-400 mb-1">재방문 주기 최단</p>
              <p className="font-bold text-stone-900">이용원·바버샵 창업 →</p>
            </Link>
          </div>
        </section>

        {/* nailhakwon.com 배너 */}
        <section className="rounded-3xl overflow-hidden mb-6" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <a href="https://nailhakwon.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', padding: '28px 32px' }}>
            <p style={{ color: '#f43f5e', fontWeight: 800, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>NAIL ART ACADEMY</p>
            <p style={{ color: 'white', fontWeight: 800, fontSize: 20, lineHeight: 1.4, marginBottom: 8 }}>
              네일아트 학원비, 얼마나 드는지 알아보셨나요?
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
              2026년 최신 기준 국비지원·학원비·해외취업까지 한눈에 비교해드립니다.<br />무료 상담으로 내게 맞는 정보를 바로 확인하세요!
            </p>
            <span style={{ display: 'inline-block', background: '#f43f5e', color: 'white', fontWeight: 700, fontSize: 14, padding: '10px 22px', borderRadius: 50 }}>
              네일아트 학원비 비교사이트 바로가기 →
            </span>
          </a>
        </section>

        {/* haircost.kr 배너 */}
        <section className="rounded-3xl overflow-hidden mb-6" style={{ background: 'linear-gradient(135deg, #1A4A9E 0%, #2563C8 100%)' }}>
          <a href="https://haircost.kr" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', padding: '28px 32px' }}>
            <p style={{ color: '#93c5fd', fontWeight: 800, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>HAIR ACADEMY</p>
            <p style={{ color: 'white', fontWeight: 800, fontSize: 20, lineHeight: 1.4, marginBottom: 8 }}>
              이용사(헤어)학원 수강료, 국비지원 얼마나 받을 수 있나요?
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
              2026년 최신 기준 이용사 자격증·학원비·국비지원 정보를 한눈에 비교해드립니다.<br />무료 상담으로 내게 맞는 학원과 과정을 바로 확인하세요!
            </p>
            <span style={{ display: 'inline-block', background: 'white', color: '#1A4A9E', fontWeight: 700, fontSize: 14, padding: '10px 22px', borderRadius: 50 }}>
              이용사학원 수강료 비교사이트 바로가기 →
            </span>
          </a>
        </section>

        {/* 멀티플렉스 광고 (관련 콘텐츠) */}
        <AdUnit slot="3291145762" format="autorelaxed" responsive={false} />

      </div>
    </div>
  )
}
