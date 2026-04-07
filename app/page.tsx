import Link from 'next/link'
import NailCalculatorWidget from '@/components/NailCalculatorWidget'
import { nailServices } from '@/data/services'

const OPEN_CHAT_URL = 'https://open.kakao.com/o/sIOxvlZh'

export default function Home() {
  return (
    <div>
      {/* 히어로 */}
      <section className="bg-gradient-to-br from-pink-50 to-white py-16 border-b border-pink-100">
        <div className="max-w-[1100px] mx-auto px-4 text-center">
          <p className="inline-block bg-pink-100 text-pink-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4">2026 최신 기준</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            네일아트 창업<br />
            <span className="text-pink-500">이것만 알면 됩니다</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            창업비용부터 자격증, 예상 수익까지 1인 네일샵 창업의 모든 것을 알려드립니다
          </p>
          <a href={OPEN_CHAT_URL} className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-base px-8 py-4 rounded-full shadow-md transition-all">
            💬 무료 창업 상담 받기
          </a>
        </div>
      </section>

      {/* 멘토 상담 배너 */}
      <section className="bg-gradient-to-r from-yellow-50 to-pink-50 border-b border-yellow-100 py-10">
        <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="shrink-0 w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-3xl shadow-md">
            💅
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-1">1:1 무료 창업 멘토링</p>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1">
              실제 네일샵 창업 경험자가 직접 도와드립니다
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              비용이 얼마나 들지, 어디서 시작해야 할지 막막하셨죠?<br className="hidden md:block" />
              창업부터 운영까지 직접 겪은 멘토가 카카오 오픈채팅으로 무료 상담해드립니다.
            </p>
          </div>
          <a
            href={OPEN_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-sm px-7 py-3.5 rounded-full shadow-md transition-all whitespace-nowrap"
          >
            💬 멘토에게 무료 상담받기
          </a>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-4 py-14 space-y-20">

        {/* 섹션 1 - 네일아트 사업이란? */}
        <section>
          <p className="text-xs font-bold text-pink-400 mb-2 uppercase tracking-widest">네일아트 사업</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">네일아트 사업이란?</h2>
          <p className="text-gray-500 text-sm mb-8">손발톱을 관리·장식하는 미용 서비스업입니다. 1인 운영이 가능하고 재료비 대비 수익률이 높아 소자본 창업 아이템으로 꾸준히 주목받고 있습니다.</p>

          {/* 시술 종류 */}
          <h3 className="text-base font-extrabold text-gray-800 mb-3">주요 시술 종류</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {nailServices.map((item) => (
              <Link
                key={item.id}
                href={`/service/${item.id}`}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:border-pink-200 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-extrabold text-gray-800">{item.title}</h3>
                  <span className="text-[10px] bg-pink-50 text-pink-500 font-bold px-2 py-0.5 rounded-full">{item.tag}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">{item.summary}</p>
                <p className="text-xs text-gray-400 leading-relaxed mb-3" style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {item.sections[0].body}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-pink-400">{item.price}</span>
                  <span className="text-xs text-gray-300 group-hover:text-pink-400 transition-colors">자세히 보기 →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* 고객층 */}
          <h3 className="text-base font-extrabold text-gray-800 mb-3">네일아트 사업의 고객층</h3>
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm mb-10">
            <p className="text-xs text-gray-500 mb-4">10대부터 60대까지 수요층이 넓습니다. 입지에 따라 주 고객층이 달라지므로 타깃을 먼저 정하고 상권을 선택하는 것이 중요합니다.</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { age: '10~20대', desc: '트렌드 디자인·행사용', color: 'bg-pink-50 text-pink-600' },
                { age: '30~40대 직장인', desc: '단색·프렌치, 정기 방문', color: 'bg-violet-50 text-violet-600' },
                { age: '30~40대 주부', desc: '단골 전환율 가장 높음', color: 'bg-blue-50 text-blue-600' },
                { age: '50대', desc: '손발 케어 관리 목적', color: 'bg-green-50 text-green-600' },
                { age: '60대 이상', desc: '건강 케어 수요 증가', color: 'bg-orange-50 text-orange-600' },
              ].map((c) => (
                <div key={c.age} className={`${c.color} rounded-xl p-3 text-center`}>
                  <p className="text-xs font-extrabold mb-1">{c.age}</p>
                  <p className="text-[11px] leading-tight">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 수익 구조 */}
          <h3 className="text-base font-extrabold text-gray-800 mb-3">네일아트 사업의 수익 구조</h3>
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm mb-6">
            <p className="text-xs text-gray-500 mb-4">수익 구조는 단순합니다. 고객 수와 단가를 높이고, 고정비를 낮추는 것이 핵심입니다.</p>
            <div className="space-y-3">
              {[
                { label: '매출', formula: '하루 고객 수 × 평균 시술 단가 × 월 영업일', color: 'bg-pink-50 text-pink-700' },
                { label: '고정비', formula: '월세 + 재료비 + 공과금 + 기타 (월 평균 150~200만원)', color: 'bg-gray-50 text-gray-600' },
                { label: '순수익', formula: '매출 − 고정비 (1인 운영 시 인건비 0원)', color: 'bg-green-50 text-green-700' },
              ].map((r) => (
                <div key={r.label} className={`${r.color} rounded-xl px-4 py-3 flex items-center gap-3`}>
                  <span className="text-xs font-extrabold w-14 shrink-0">{r.label}</span>
                  <span className="text-xs">{r.formula}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-400 mt-3">재료비는 시술 단가의 10~20% 수준으로 낮아 영업이익률이 높은 편입니다.</p>
          </div>

          <div className="mt-2 text-right">
            <Link href="/board/15" className="text-sm text-pink-500 font-bold hover:underline">네일아트 사업 더 자세히 알아보기 →</Link>
          </div>
        </section>

        {/* 섹션 2 - 네일샵 창업, 나도 할 수 있을까? */}
        <section>
          <p className="text-xs font-bold text-pink-400 mb-2 uppercase tracking-widest">창업 적합도</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">네일샵 창업, 나도 할 수 있을까?</h2>
          <p className="text-gray-500 text-sm mb-8">학력·나이·경력 제한 없이 누구나 도전할 수 있습니다. 다만 아래 조건에 해당할수록 성공 가능성이 높습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <h3 className="text-base font-extrabold text-green-700 mb-4">이런 분께 잘 맞아요</h3>
              <ul className="space-y-2.5">
                {[
                  '손재주가 있고 꼼꼼한 성격',
                  '고객과 대화가 편하고 서비스 마인드가 있는 분',
                  'SNS 활동에 거부감이 없는 분',
                  '독립적으로 일하는 환경을 선호하는 분',
                  '월 150~400만원 순수익을 목표로 하는 분',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-green-800">
                    <span className="text-green-500 font-bold shrink-0">✓</span>{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <h3 className="text-base font-extrabold text-red-600 mb-4">이런 분은 주의하세요</h3>
              <ul className="space-y-2.5">
                {[
                  '기술 연습 없이 바로 수익을 기대하는 경우',
                  '마케팅·홍보를 전혀 하지 않으려는 경우',
                  '초기 자금이 전혀 없는 상태',
                  '장시간 앉아서 집중하는 것이 어려운 경우',
                  '단골 없이 지인 고객만으로 운영하려는 경우',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-red-700">
                    <span className="text-red-400 font-bold shrink-0">✗</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 섹션 3 - 창업 전 준비해야 할 것들 */}
        <section>
          <p className="text-xs font-bold text-pink-400 mb-2 uppercase tracking-widest">창업 준비</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">창업 전 무엇을 준비해야 하나요?</h2>
          <p className="text-gray-500 text-sm mb-8">순서대로 따라가면 빠짐없이 준비할 수 있습니다.</p>
          <div className="space-y-3">
            {[
              { step: '01', title: '자격증 취득', desc: '네일 미용사 국가기술자격증 (Q-Net). 법적 필수는 아니지만 강력 권장. 필기+실기 합격까지 3~6개월.' },
              { step: '02', title: '상권 분석 및 위치 선정', desc: '목표 고객층(직장인·주부·대학생)에 맞는 상권 선택. 임대료와 유동인구 균형이 핵심.' },
              { step: '03', title: '사업자 등록 + 미용업 신고', desc: '홈택스에서 개인사업자 등록 후, 관할 구청에 미용업 신고. 위생교육 8시간 이수 필수.' },
              { step: '04', title: '인테리어 및 장비 세팅', desc: '조명·환기·소독 시설 우선 투자. 중고 장비 활용으로 비용 절감 가능.' },
              { step: '05', title: 'SNS 개설 및 오픈 준비', desc: '인스타그램·네이버 플레이스 오픈 전 등록 완료. 오픈 이벤트로 초기 고객 확보.' },
            ].map((item) => (
              <div key={item.step} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
                <span className="shrink-0 w-9 h-9 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-extrabold">{item.step}</span>
                <div>
                  <h3 className="text-sm font-extrabold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-gray-50 border border-gray-100 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">관련 아티클</p>
              <p className="text-sm font-bold text-gray-800">네일아트 창업 비용·조건·자격증 완전 정리</p>
              <p className="text-xs text-gray-400 mt-0.5">장점·단점·실제 비용·자격증까지 한 번에</p>
            </div>
            <Link href="/board/14" className="shrink-0 text-xs text-pink-500 font-bold hover:underline ml-4">읽기 →</Link>
          </div>
          <div className="mt-3 text-right">
            <Link href="/guide" className="text-sm text-pink-500 font-bold hover:underline">단계별 상세 가이드 보기 →</Link>
          </div>
        </section>

        {/* 섹션 4 - 창업비용 계산기 */}
        <NailCalculatorWidget />

        {/* 섹션 5 - 네일샵 수익은 얼마나 될까? */}
        <section>
          <p className="text-xs font-bold text-pink-400 mb-2 uppercase tracking-widest">예상 수익</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">1인 네일샵 월 수익은 얼마나 될까요?</h2>
          <p className="text-gray-500 text-sm mb-8">하루 고객 수와 시술 단가에 따라 수익이 크게 달라집니다. 고정비 약 150~200만원 제외 기준입니다.</p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { case: '보수적', icon: '🌱', customers: '하루 3명', monthly: '월 300만원', net: '순수익 100~150만', color: 'border-gray-200 bg-white' },
              { case: '평균', icon: '💅', customers: '하루 5명', monthly: '월 500만원', net: '순수익 250~350만', color: 'border-pink-200 bg-pink-50' },
              { case: '적극', icon: '🚀', customers: '하루 7명', monthly: '월 700만원', net: '순수익 400~500만', color: 'border-yellow-200 bg-yellow-50' },
            ].map((item) => (
              <div key={item.case} className={`border-2 ${item.color} rounded-2xl p-5 shadow-sm`}>
                <p className="text-xl mb-2">{item.icon}</p>
                <p className="text-xs font-bold text-gray-400 mb-3">{item.case} 케이스</p>
                <p className="text-xs text-gray-400">고객 수</p>
                <p className="font-bold text-gray-800 mb-1">{item.customers}</p>
                <p className="text-xs text-gray-400">월 매출 (20일)</p>
                <p className="font-bold text-gray-800 mb-2">{item.monthly}</p>
                <p className="font-extrabold text-pink-500">{item.net}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right">
            <Link href="/revenue" className="text-sm text-pink-500 font-bold hover:underline">시술 단가별 수익 계산 보기 →</Link>
          </div>
        </section>

        {/* 섹션 6 - 자격증 없이도 창업할 수 있나요? */}
        <section>
          <p className="text-xs font-bold text-pink-400 mb-2 uppercase tracking-widest">자격증</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">자격증 없이도 네일샵 창업할 수 있나요?</h2>
          <p className="text-gray-500 text-sm mb-8">결론부터 말하면 법적으로는 가능합니다. 하지만 현실적으로는 자격증 취득이 훨씬 유리합니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-extrabold text-gray-800">네일 미용사 자격증이란?</h3>
              <p className="text-xs text-gray-500 leading-relaxed">한국산업인력공단(Q-Net)에서 주관하는 국가기술자격증입니다. 연 4회 시험이 있으며 필기(객관식 60문항)와 실기(젤·아크릴 시술)로 구성됩니다.</p>
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { label: '시험 횟수', value: '연 4회' },
                  { label: '필기 합격률', value: '약 60%' },
                  { label: '실기 합격률', value: '약 50%' },
                ].map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-400 mb-1">{s.label}</p>
                    <p className="text-sm font-bold text-gray-800">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-extrabold text-gray-800 mb-4">자격증 취득의 실질적 장점</h3>
              <ul className="space-y-2.5">
                {[
                  '고객이 "자격증 있어요?" 라고 물을 때 자신 있게 대답 가능',
                  '미용업 신고 서류에 자격증 사본 제출로 신뢰도 상승',
                  '공유 작업실·건물 입점 시 자격증 요구하는 경우 대비',
                  '향후 직원 채용 시 교육 기준이 됨',
                  '보험·대출 등 창업 지원 시 가점 요소',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="text-pink-400 shrink-0">✓</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 text-right">
            <Link href="/license" className="text-sm text-pink-500 font-bold hover:underline">자격증 취득 방법 자세히 보기 →</Link>
          </div>
        </section>

        {/* 섹션 7 - 네일샵 운영, 현실은 어떤가요? */}
        <section>
          <p className="text-xs font-bold text-pink-400 mb-2 uppercase tracking-widest">창업 현실</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">네일샵 운영, 현실은 어떤가요?</h2>
          <p className="text-gray-500 text-sm mb-8">장밋빛 기대만큼 현실도 알아야 제대로 준비할 수 있습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: '오픈 초기에는 고객이 없을 수 있다', a: '첫 1~3개월은 인스타그램, 네이버 플레이스 등록, 오픈 이벤트로 첫 고객을 끌어야 합니다. 이 기간 생활비는 여유 자금에서 충당해야 합니다.' },
              { q: '단골 고객이 수익의 70%를 책임진다', a: '신규 고객 유입도 중요하지만, 재방문 고객이 안정적인 수익의 핵심입니다. 예약 관리, 고객 카드, 감사 메시지로 단골을 만들어야 합니다.' },
              { q: '하루 5~6시간 집중 시술은 체력 소모가 크다', a: '손목·허리·눈에 부담이 오는 직업입니다. 스트레칭 루틴, 인체공학적 의자, 충분한 조명 투자가 장기 운영의 핵심입니다.' },
              { q: '가격 경쟁보다 품질로 승부해야 한다', a: '주변 가격을 따라 낮추기 시작하면 수익 구조가 무너집니다. 기술력과 서비스로 차별화하고, 적정 단가를 유지하는 것이 장기 생존 전략입니다.' },
            ].map((item) => (
              <div key={item.q} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <h3 className="text-sm font-extrabold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-pink-400 shrink-0">💡</span>{item.q}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed pl-5">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 섹션 8 - 성공 포인트 7가지 */}
        <section>
          <p className="text-xs font-bold text-pink-400 mb-2 uppercase tracking-widest">전문가 가이드</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">네일아트 창업 성공 포인트 7가지</h2>
          <p className="text-gray-500 text-sm mb-8">기술력만으로는 창업 성공을 담보할 수 없습니다. 오래 살아남는 네일샵에는 공통된 전략이 있습니다.</p>
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
              <div key={item.num} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
                <span className="shrink-0 w-8 h-8 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center text-xs font-extrabold">{item.num}</span>
                <div>
                  <h3 className="text-sm font-extrabold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            <Link
              href="/board/13"
              className="bg-pink-50 border-2 border-pink-200 rounded-2xl p-5 shadow-sm flex gap-4 items-center hover:bg-pink-100 transition-colors"
            >
              <span className="shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-lg">→</span>
              <div>
                <h3 className="text-sm font-extrabold text-pink-600 mb-1">7가지 포인트 전문 아티클 읽기</h3>
                <p className="text-xs text-pink-400">각 포인트의 구체적인 실행 방법을 확인하세요</p>
              </div>
            </Link>
          </div>
        </section>

        {/* 섹션 9 - FAQ */}
        <section>
          <p className="text-xs font-bold text-pink-400 mb-2 uppercase tracking-widest">자주 묻는 질문</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">네일아트 창업 Q&A</h2>
          <div className="space-y-3">
            {[
              { q: '1인 네일샵 vs 프랜차이즈, 어떤 게 유리한가요?', a: '초기 비용 면에서는 1인 독립샵이 유리합니다. 프랜차이즈는 브랜드 인지도를 활용할 수 있지만 가맹비·로열티가 추가됩니다. 기술 자신감이 있다면 독립샵이 수익률이 더 높습니다.' },
              { q: '네일샵 창업 최소 자본금은 얼마인가요?', a: '공유 작업실 기준 200~400만원, 독립 점포 기준 보증금 포함 최소 500~700만원이 필요합니다.' },
              { q: '창업 후 손익분기점은 언제인가요?', a: '일반적으로 오픈 후 3~6개월이 평균입니다. SNS 마케팅과 후기 관리를 적극적으로 하면 2~3개월로 앞당길 수 있습니다.' },
              { q: '1인 네일샵, 하루 몇 명이나 받을 수 있나요?', a: '기본 젤네일 기준 1인당 1~1.5시간이므로 하루 5~7명이 현실적입니다. 예약제 운영으로 시간 효율을 높이는 것이 중요합니다.' },
            ].map((item) => (
              <div key={item.q} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <h3 className="text-[14px] font-bold text-gray-800 mb-2 flex items-start gap-2">
                  <span className="text-pink-500 font-extrabold shrink-0">Q.</span>{item.q}
                </h3>
                <p className="text-[13px] text-gray-600 leading-relaxed pl-5"><span className="font-bold">A.</span> {item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right">
            <Link href="/qna" className="text-sm text-pink-500 font-bold hover:underline">더 많은 Q&A 보기 →</Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-pink-500 to-pink-400 rounded-3xl p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold mb-2">창업 준비, 혼자 하지 마세요</h2>
          <p className="text-pink-100 mb-6 text-sm">실제 창업자에게 직접 물어보세요. 비용·자격증·수익까지 무료로 상담해드립니다.</p>
          <a href={OPEN_CHAT_URL} className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3.5 rounded-full transition-all shadow-md">
            💬 카카오 오픈챗 무료 상담
          </a>
        </section>

      </div>
    </div>
  )
}
