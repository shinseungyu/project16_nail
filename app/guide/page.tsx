import type { Metadata } from 'next'
import KakaoButton from '@/components/KakaoButton'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '네일샵 창업 준비 단계별 가이드 2026 | 사업자 등록부터 오픈까지',
  description: '네일샵 창업 준비 순서를 단계별로 안내합니다. 사업자 등록, 위치 선정, 장비 구매, SNS 마케팅까지 2026년 기준으로 한번에 정리했습니다.',
  alternates: { canonical: '/guide' },
}


export default function GuidePage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업 가이드</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">네일샵 창업 준비 단계별 가이드</h1>
      <p className="text-stone-500 mb-10">처음 창업하는 분도 이 순서대로만 따라가면 빠짐없이 준비할 수 있습니다. 자격증 취득부터 오픈 당일까지 총 6단계로 정리했습니다.</p>

      {/* 단계별 가이드 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-6">네일샵 창업 6단계</h2>
        <div className="space-y-6">
          {[
            {
              step: '01',
              title: '창업 목표 및 예산 설정',
              duration: '창업 결심 직후',
              desc: '월 목표 수익, 초기 투자 가능 금액, 운영 형태(1인/직원 고용)를 먼저 결정하세요. 예산에 따라 규모와 위치가 달라집니다.',
              details: [
                '최소 6개월치 운영비(월세+생활비)는 여유 자금으로 남겨두어야 합니다.',
                '공유 작업실로 시작할지, 독립 매장을 바로 낼지 방향을 결정하세요.',
                '1인 운영 기준 초기 자금 최소 300만원(공유) ~ 1,000만원 이상(독립 매장)을 준비하세요.',
              ],
            },
            {
              step: '02',
              title: '네일 미용사 자격증 취득',
              duration: '준비 기간 3~6개월',
              desc: '합법적인 네일샵 운영을 위해 미용사(네일) 국가기술자격증이 필요합니다. 구청에 미용업 신고를 하려면 이 자격증이 필수입니다.',
              details: [
                '한국산업인력공단(Q-Net)에서 연 4회 시험이 진행됩니다.',
                '필기(네일 개론·피부학·공중보건학 등)와 실기(젤네일·아크릴 시술)로 구성됩니다.',
                '전문 아카데미 수강 시 합격률이 크게 높아집니다. 독학 필기 2~4주, 실기 1~3개월 준비가 필요합니다.',
              ],
            },
            {
              step: '03',
              title: '상권 분석 및 위치 선정',
              duration: '자격증 취득 전후',
              desc: '목표 고객층(직장인·대학생·주부)에 맞는 상권을 분석하세요. 임대료와 유동인구의 균형이 핵심입니다.',
              details: [
                '주차 가능 여부와 대중교통 접근성을 반드시 확인하세요.',
                '경쟁 네일샵 밀집 지역은 피하고, 인근 미용실·피부과와의 시너지를 고려하세요.',
                '네이버 지도로 상권 내 네일샵 수와 리뷰 수를 먼저 파악하세요.',
              ],
            },
            {
              step: '04',
              title: '사업자 등록 및 행정 처리',
              duration: '오픈 4~6주 전',
              desc: '개인사업자로 등록 후, 미용업 신고를 관할 구청에 해야 합니다. 행정 처리는 생각보다 시간이 걸리니 여유 있게 준비하세요.',
              details: [
                '홈택스(hometax.go.kr) 또는 관할 세무서에서 개인사업자 등록을 합니다.',
                '위생교육 이수(8시간)가 반드시 필요합니다. 대한미용사회 또는 온라인에서 이수 가능합니다.',
                '관할 구청 위생과에 미용업 신고 후 시설 검사를 받아야 영업이 가능합니다.',
              ],
            },
            {
              step: '05',
              title: '인테리어 및 장비 세팅',
              duration: '오픈 2~4주 전',
              desc: '네일샵은 청결하고 밝은 이미지가 핵심입니다. 고가 인테리어보다 기능적 공간 구성에 집중하세요.',
              details: [
                '조명(자연광 느낌), 환기 설비, 소독 시설에 우선 투자하세요.',
                '네일 테이블 1개, 고객 의자·시술 의자, UV/LED 램프, 전동 드릴이 최소 필수 장비입니다.',
                '중고 장비 활용 시 초기 장비비를 50% 이하로 줄일 수 있습니다.',
              ],
            },
            {
              step: '06',
              title: 'SNS 마케팅 및 오픈 준비',
              duration: '오픈 1~2주 전부터',
              desc: '오픈 전부터 SNS를 통해 예비 고객을 모아두는 것이 성공적인 출발의 핵심입니다.',
              details: [
                '인스타그램 계정을 미리 개설해 시술 연습 사진을 꾸준히 올리세요.',
                '네이버 플레이스 등록은 오픈 전 완료해야 합니다. 구글 비즈니스 프로필도 함께 등록하세요.',
                '오픈 첫 달 할인 이벤트(10~20% 할인 또는 무료 아트 추가)로 첫 고객을 확보하세요.',
              ],
            },
          ].map((item) => (
            <div key={item.step} className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 bg-stone-800 text-white rounded-full flex items-center justify-center font-extrabold text-sm">{item.step}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-stone-900">{item.title}</h3>
                    <span className="text-[10px] bg-stone-100 text-stone-500 font-semibold px-2 py-0.5 rounded-full">{item.duration}</span>
                  </div>
                  <p className="text-[13px] text-stone-600 leading-relaxed mb-3">{item.desc}</p>
                  <ul className="space-y-1.5">
                    {item.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-[12px] text-stone-500 leading-relaxed">
                        <span className="shrink-0 mt-0.5 text-stone-400">•</span>{d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 창업 전 체크리스트 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">네일샵 오픈 전 최종 체크리스트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { category: '행정·법적 준비', items: ['미용사(네일) 자격증 취득', '개인사업자 등록 완료', '위생교육 8시간 이수', '미용업 신고 및 시설 검사', '사업장 화재보험 가입'] },
            { category: '공간·장비 준비', items: ['네일 테이블 및 의자 세팅', 'UV/LED 젤 램프 작동 확인', '전동 드릴 및 소독기 설치', '환기 시설 확인', '재료·소모품 초기 구비 완료'] },
            { category: '마케팅 준비', items: ['인스타그램 계정 개설·게시물 업로드', '네이버 플레이스 등록 완료', '구글 비즈니스 프로필 등록', '오픈 이벤트 내용 결정', '가격표·메뉴판 제작'] },
            { category: '운영 준비', items: ['예약 관리 방법 결정 (카카오채널 등)', '결제 단말기 신청 완료', '영수증·세금계산서 발행 준비', '고객 관리 장부 또는 앱 준비', '월 매출 목표 및 손익 계획 수립'] },
          ].map((section) => (
            <div key={section.category} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-bold text-stone-900 mb-3">{section.category}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] text-stone-600">
                    <span className="shrink-0 w-4 h-4 border-2 border-stone-300 rounded inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 주의사항 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">네일샵 창업 시 가장 흔한 실수</h2>
        <div className="space-y-3">
          {[
            { title: '자격증 없이 오픈', desc: '미용업 신고 없이 영업하면 최대 300만원 과태료가 부과됩니다. 반드시 미용사(네일) 자격증 취득 후 구청에 미용업 신고를 완료하세요.' },
            { title: '인테리어에 과도한 투자', desc: '초기 인테리어에 너무 많은 돈을 쓰면 운영 자금이 부족해집니다. 처음에는 기능에 집중하고 수익이 안정된 후 리뉴얼하세요.' },
            { title: '오픈 당일부터 SNS 시작', desc: 'SNS는 오픈 최소 2~4주 전부터 시작해야 합니다. 오픈 당일 팔로워 0명이면 아무도 모릅니다.' },
            { title: '운영자금 미확보', desc: '최소 3~6개월치 생활비와 월세를 여유 자금으로 남겨두세요. 오픈 초기 3개월은 매출이 불안정한 것이 정상입니다.' },
          ].map((item) => (
            <div key={item.title} className="bg-red-50 border border-red-100 rounded-2xl p-5 flex gap-3">
              <span className="shrink-0 text-red-400 text-lg mt-0.5">⚠</span>
              <div>
                <p className="text-sm font-bold text-red-800 mb-1">{item.title}</p>
                <p className="text-[13px] text-red-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 내부 링크 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">함께 확인하면 좋은 정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/license" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">자격증 준비</p>
            <p className="font-bold text-stone-900">네일 자격증 취득 방법 →</p>
          </Link>
          <Link href="/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">예산 잡기</p>
            <p className="font-bold text-stone-900">네일샵 창업비용 총정리 →</p>
          </Link>
          <Link href="/revenue" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">수익 확인</p>
            <p className="font-bold text-stone-900">1인 네일샵 예상 수익 →</p>
          </Link>
        </div>
      </section>

      <section className="bg-stone-900 rounded-3xl p-10 text-center text-white">
        <h2 className="text-xl font-extrabold mb-2">네일샵 창업 준비, 혼자 하지 마세요</h2>
        <p className="text-stone-400 mb-5 text-sm">단계별 맞춤 상담을 무료로 받아보세요.</p>
        <KakaoButton location="guide" className="inline-flex items-center gap-2 bg-[#FEE500] hover:bg-[#FADC00] text-[#000000] font-bold px-8 py-3 rounded-full transition-all">
          무료 창업 상담
        </KakaoButton>
      </section>
    </div>
  )
}
