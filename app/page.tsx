import Link from 'next/link'
import Image from 'next/image'
import NailCalculatorWidget from '@/components/NailCalculatorWidget'
import CourseSwiper from '@/components/CourseSwiper'
import { nailServices } from '@/data/services'

const OPEN_CHAT_URL = 'https://open.kakao.com/o/sIOxvlZh'

export default function Home() {
  return (
    <div>
      {/* 히어로 */}
      <section className="relative py-36 border-b border-stone-200 overflow-hidden min-h-[560px] flex items-center">
        <Image src="/images/bg.png" alt="네일샵 창업" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-[1100px] mx-auto px-4 text-center">
          <p className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">2026 최신 기준</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            네일샵 창업 비용·자격증·수익<br />
            <span className="text-white/80">2026 최신 기준 총정리</span>
          </h1>
          <p className="text-base text-white/70 mb-4 max-w-xl mx-auto leading-relaxed">
            창업비용부터 자격증, 예상 수익까지 1인 네일샵 창업의 모든 것을 알려드립니다
          </p>
          <a href={OPEN_CHAT_URL} className="inline-flex items-center justify-center bg-[#FEE500] hover:bg-[#FADC00] text-[#000000] font-bold text-xl px-12 py-6 rounded-full shadow-md transition-all">
            <Image src="/images/kakao_logo.png" alt="카카오톡" width={30} height={30} className="mr-2" />
            무료 창업 상담 받기
          </a>
        </div>
      </section>

      {/* 멘토 상담 배너 */}
      <section className="bg-white border-b border-stone-100 py-10">
        <div className="max-w-[1100px] mx-auto px-4 flex flex-col items-center gap-6 md:gap-10">
          <div className="flex-1 text-center md:text-left min-w-0 w-full">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">1:1 무료 창업 멘토링</p>
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1 justify-center md:justify-start">
              <span className="inline-block bg-rose-50 text-rose-600 text-[10px] font-extrabold px-2 py-0.5 rounded border border-rose-100 self-center md:self-auto">올댓뷰티 제휴</span>
              <h2 className="text-xl md:text-2xl font-extrabold text-stone-900">
                실전 네일 전문가가 직접 도와드립니다
              </h2>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed mb-3">
              어디서 시작해야 할지 막막하셨죠? <strong>창업 준비생</strong>은 물론, <strong>아직 자격증이 없는 초보자</strong>분들도 모두 상담받으실 수 있습니다. 여러분이 <strong>창조적인 예술작업을 하는 전문가</strong>로 성장할 수 있도록, 대형 아카데미(<strong>올댓뷰티</strong>) 연계 멘토가 카카오 오픈채팅으로 무료 안내해 드립니다.
            </p>
            <CourseSwiper />
          </div>
          <a
            href={OPEN_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center bg-[#FEE500] hover:bg-[#FADC00] text-[#000000] font-bold text-xl px-10 py-5 rounded-full shadow-md transition-all whitespace-nowrap"
          >
            <Image src="/images/kakao_logo.png" alt="카카오톡" width={27} height={27} className="mr-2" />
            멘토에게 무료 상담받기
          </a>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-4 py-14 space-y-20">

        {/* 섹션 0 - 자격증 필수 안내 */}
        <section>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-rose-50 text-rose-600 text-[10px] font-extrabold px-2 py-0.5 rounded tracking-widest uppercase border border-rose-100">가장 많이 묻는 질문 1위</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-3 tracking-tight">네일샵 창업, '자격증'이 꼭 필요한가요?</h2>
          <p className="text-stone-500 text-sm mb-6 leading-relaxed">네, 합법적인 매장 오픈과 영업 신고를 위해서는 <strong className="text-stone-800">무조건 필수</strong>입니다. 자격증은 크게 두 가지로 나뉘니 창업 목표라면 반드시 구분해서 준비하셔야 합니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="bg-stone-50 border-2 border-stone-800 rounded-2xl p-6 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 bg-stone-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-lg">창업에 필수!</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🏛️</span>
                <h3 className="text-lg font-extrabold text-stone-900">국가공인 자격증</h3>
              </div>
              <p className="text-xs text-stone-500 font-semibold mb-3 tracking-wide">미용사(네일) 국가기술자격증</p>
              <p className="text-sm text-stone-700 leading-relaxed">
                한국산업인력공단에서 주관합니다. 구청에 <strong>영업신고를 하고 사업자 등록을 하려면 이 자격증이 100% 필수</strong>입니다. 창업을 생각하신다면 가장 먼저 준비해야 할 첫걸음입니다.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm opacity-80">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">📜</span>
                <h3 className="text-lg font-extrabold text-stone-700">민간 자격증</h3>
              </div>
              <p className="text-xs text-stone-400 font-semibold mb-3 tracking-wide">각종 협회/아카데미 발급 자격증</p>
              <p className="text-sm text-stone-500 leading-relaxed">
                실력을 증명하거나 젤아트, 드릴 등 특정 과정 수료를 증명하는 용도로는 좋지만, <strong>법적 효력이 없어 이 자격증만으로는 네일샵을 창업할 수 없습니다.</strong> 
              </p>
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 flex items-start gap-3">
            <span className="text-lg shrink-0 mt-0.5">💡</span>
            <p className="text-xs text-orange-800 leading-relaxed">
              <strong>초보자 팁:</strong> 자격증이 아예 없는 노베이스 상태라도 걱정하지 마세요. 기초 필기/실기 준비부터 창업 연계까지 <strong>올댓뷰티</strong>와 같은 전문 아카데미의 커리큘럼을 활용하면 생각보다 빠르게 취득할 수 있습니다. 상단의 카카오톡으로 문의하시면 취득 플랜을 잡아드립니다.
            </p>
          </div>
        </section>

        {/* 섹션 1 - 네일샵 창업이란? */}
        <section>
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
                  {item.sections[0].body}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-700">{item.price}</span>
                  <span className="text-xs text-stone-300 group-hover:text-stone-600 transition-colors">자세히 보기 →</span>
                </div>
              </Link>
            ))}
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
        <Image src="/images/bg2.png" alt="창업 적합도 배경" fill className="object-cover" />
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
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">창업 전 무엇을 준비해야 하나요?</h2>
          <p className="text-stone-500 text-sm mb-8">순서대로 따라가면 빠짐없이 준비할 수 있습니다.</p>
          <div className="space-y-3">
            {[
              { step: '01', title: '자격증 취득', desc: '네일 미용사 국가기술자격증 (Q-Net). 법적 필수는 아니지만 강력 권장. 필기+실기 합격까지 3~6개월.' },
              { step: '02', title: '상권 분석 및 위치 선정', desc: '목표 고객층(직장인·주부·대학생)에 맞는 상권 선택. 임대료와 유동인구 균형이 핵심.' },
              { step: '03', title: '사업자 등록 + 미용업 신고', desc: '홈택스에서 개인사업자 등록 후, 관할 구청에 미용업 신고. 위생교육 8시간 이수 필수.' },
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
          <p className="text-stone-500 text-sm mb-8">하루 고객 수와 시술 단가에 따라 수익이 크게 달라집니다. 고정비 약 150~200만원 제외 기준입니다.</p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { case: '보수적', icon: '🌱', customers: '하루 3명', monthly: '월 300만원', net: '순수익 100~150만', color: 'border-stone-200 bg-white' },
              { case: '평균', icon: '💅', customers: '하루 5명', monthly: '월 500만원', net: '순수익 250~350만', color: 'border-stone-800 bg-stone-50' },
              { case: '적극', icon: '🚀', customers: '하루 7명', monthly: '월 700만원', net: '순수익 400~500만', color: 'border-amber-200 bg-amber-50' },
            ].map((item) => (
              <div key={item.case} className={`border-2 ${item.color} rounded-2xl p-5 shadow-sm`}>
                <p className="text-xl mb-2">{item.icon}</p>
                <p className="text-xs font-bold text-stone-400 mb-3">{item.case} 케이스</p>
                <p className="text-xs text-stone-400">고객 수</p>
                <p className="font-bold text-stone-800 mb-1">{item.customers}</p>
                <p className="text-xs text-stone-400">월 매출 (20일)</p>
                <p className="font-bold text-stone-800 mb-2">{item.monthly}</p>
                <p className="font-extrabold text-stone-700">{item.net}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right">
            <Link href="/revenue" className="text-sm text-stone-600 font-semibold hover:text-stone-900 hover:underline">시술 단가별 수익 계산 보기 →</Link>
          </div>
        </section>

        {/* 섹션 6 - 자격증 없이도 창업할 수 있나요? */}
        <section>
          <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자격증</p>
          <h2 className="text-2xl font-extrabold text-stone-900 mb-2">자격증 없이도 네일샵 창업할 수 있나요?</h2>
          <p className="text-stone-500 text-sm mb-8">결론부터 말하면 법적으로는 가능합니다. 하지만 현실적으로는 자격증 취득이 훨씬 유리합니다.</p>
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
              <h3 className="text-sm font-extrabold text-stone-800 mb-4">자격증 취득의 실질적 장점</h3>
              <ul className="space-y-2.5">
                {[
                  '고객이 "자격증 있어요?" 라고 물을 때 자신 있게 대답 가능',
                  '미용업 신고 서류에 자격증 사본 제출로 신뢰도 상승',
                  '공유 작업실·건물 입점 시 자격증 요구하는 경우 대비',
                  '향후 직원 채용 시 교육 기준이 됨',
                  '보험·대출 등 창업 지원 시 가점 요소',
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
            {[
              { q: '1인 네일샵 vs 프랜차이즈, 어떤 게 유리한가요?', a: '초기 비용 면에서는 1인 독립샵이 유리합니다. 프랜차이즈는 브랜드 인지도를 활용할 수 있지만 가맹비·로열티가 추가됩니다. 기술 자신감이 있다면 독립샵이 수익률이 더 높습니다.' },
              { q: '네일샵 창업 최소 자본금은 얼마인가요?', a: '공유 작업실 기준 200~400만원, 독립 점포 기준 보증금 포함 최소 500~700만원이 필요합니다.' },
              { q: '창업 후 손익분기점은 언제인가요?', a: '일반적으로 오픈 후 3~6개월이 평균입니다. SNS 마케팅과 후기 관리를 적극적으로 하면 2~3개월로 앞당길 수 있습니다.' },
              { q: '1인 네일샵, 하루 몇 명이나 받을 수 있나요?', a: '기본 젤네일 기준 1인당 1~1.5시간이므로 하루 5~7명이 현실적입니다. 예약제 운영으로 시간 효율을 높이는 것이 중요합니다.' },
            ].map((item) => (
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

        {/* CTA */}
        <section className="bg-stone-900 rounded-3xl p-10 text-center text-white">
          <h2 className="text-2xl font-extrabold mb-2 tracking-tight">창업 준비, 혼자 하지 마세요</h2>
          <p className="text-stone-400 mb-8 text-sm">실제 창업자에게 직접 물어보세요. 비용·자격증·수익까지 무료로 상담해드립니다.</p>
          <a href={OPEN_CHAT_URL} className="inline-flex items-center justify-center bg-[#FEE500] hover:bg-[#FADC00] text-[#000000] font-bold px-8 py-3.5 rounded-full transition-all shadow-md">
            <Image src="/images/kakao_logo.png" alt="카카오톡" width={20} height={20} className="mr-2" />
            카카오 오픈챗 무료 상담
          </a>
        </section>

      </div>
    </div>
  )
}
