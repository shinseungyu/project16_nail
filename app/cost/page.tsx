import type { Metadata } from 'next'
import KakaoButton from '@/components/KakaoButton'
import Link from 'next/link'
import FormSection from '../test/FormSection'

export const metadata: Metadata = {
  title: '네일샵 창업비용 총정리 2026 | 항목별 예산 가이드',
  description: '1인 네일샵 창업비용을 항목별로 정리했습니다. 보증금, 인테리어, 장비, 재료비까지 최소~평균 비용과 창업 형태별 비교, 절약 팁까지 2026년 기준으로 확인하세요.',
  alternates: { canonical: '/cost' },
}


export default function CostPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업비용 가이드</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">네일샵 창업비용 총정리</h1>
      <p className="text-stone-500 mb-8">2026년 기준 1인 네일샵 창업에 드는 모든 비용을 항목별로 정리했습니다. 창업 형태에 따라 최소 200만원부터 3,000만원 이상까지 차이가 나니, 본인 상황에 맞게 예산을 세워보세요.</p>
      
      <div className="mb-14 animate-fade-in-up">
        <div className="flex justify-start mb-3">
          <span className="inline-block bg-[#FEE500] text-black text-sm font-extrabold px-4 py-1.5 rounded-full shadow-sm animate-bounce">간편 신청하기 👇</span>
        </div>
        <FormSection />
      </div>

      {/* 총비용 요약 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">네일샵 창업비용 한눈에 보기</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {[
            { type: '공유 작업실 창업', range: '200 ~ 500만원', color: 'bg-green-50 border-green-200', badge: '소자본 가능', badgeColor: 'bg-green-100 text-green-700' },
            { type: '1인 독립 매장', range: '700 ~ 1,500만원', color: 'bg-blue-50 border-blue-200', badge: '가장 일반적', badgeColor: 'bg-blue-100 text-blue-700' },
            { type: '인테리어 풀 세팅', range: '1,500 ~ 3,000만원+', color: 'bg-rose-50 border-rose-200', badge: '프리미엄', badgeColor: 'bg-rose-100 text-rose-700' },
          ].map((item) => (
            <div key={item.type} className={`${item.color} border rounded-2xl p-5`}>
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${item.badgeColor} mb-2 inline-block`}>{item.badge}</span>
              <p className="text-sm font-bold text-stone-700 mb-1">{item.type}</p>
              <p className="text-2xl font-extrabold text-stone-900">{item.range}</p>
            </div>
          ))}
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
          <span className="text-lg shrink-0 mt-0.5">💡</span>
          <p className="text-xs text-amber-800 leading-relaxed">
            <strong>초보 창업자 추천:</strong> 처음 시작이라면 공유 작업실(네일 공방)로 먼저 고객층을 쌓은 뒤 독립 매장으로 확장하는 것이 리스크를 크게 줄일 수 있습니다.
          </p>
        </div>
      </section>

      {/* 항목별 비용 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">항목별 창업비용 상세</h2>
        <div className="space-y-4">
          {[
            {
              title: '보증금',
              min: '100만원',
              avg: '300만원',
              max: '1,000만원 이상',
              desc: '상가 규모와 지역에 따라 차이가 크며, 권리금이 추가되는 경우도 있습니다. 소규모 공유 작업실을 이용하면 보증금을 낮출 수 있습니다.',
              tip: '공유 작업실은 보증금 없이 월 자리세(30~80만원)만 내는 경우가 많습니다.',
            },
            {
              title: '인테리어',
              min: '0원 (셀프)',
              avg: '500만원',
              max: '2,000만원 이상',
              desc: '직접 꾸미면 재료비만으로 해결 가능합니다. 업체에 맡길 경우 평당 50~100만원 수준이며, 네일샵 특성상 조명과 위생 설비가 중요합니다.',
              tip: '조명·환기·소독 시설에 먼저 투자하고 인테리어 소품은 최소화하는 것이 합리적입니다.',
            },
            {
              title: '네일 장비·기기',
              min: '150만원',
              avg: '300만원',
              max: '500만원',
              desc: 'UV/LED 젤 램프, 전동 드릴, 에어브러시, 소독기, 네일 테이블이 기본 필수 장비입니다. 중고 장비 활용 시 비용을 절반 이하로 줄일 수 있습니다.',
              tip: '중고나라·당근마켓에서 상태 좋은 네일 장비를 30~50% 저렴하게 구할 수 있습니다.',
            },
            {
              title: '재료비 초기 구비',
              min: '50만원',
              avg: '150만원',
              max: '300만원',
              desc: '젤 컬러(50~100색), 베이스·탑 코트, 팁, 젤리 글루, 파일, 핀셋 등 소모품 초기 세팅 비용입니다.',
              tip: '도매 구매(네일 도매 플랫폼 활용) 시 30~40% 절감 가능합니다.',
            },
            {
              title: '간판·홍보물',
              min: '30만원',
              avg: '100만원',
              max: '200만원',
              desc: '간판 제작, 현수막, 명함, 스티커, SNS 프로필 촬영 비용입니다.',
              tip: '초기에는 최소로 시작하고, 인스타그램·네이버 플레이스 등록에 집중하는 것이 더 효과적입니다.',
            },
            {
              title: '가구·소품',
              min: '50만원',
              avg: '200만원',
              max: '500만원',
              desc: '네일 테이블, 의자(시술용·고객용), 소독기, 수납장, 대기 소파 등입니다.',
              tip: '중고나라·당근마켓 활용 시 비용을 크게 줄일 수 있으며, 심미적 소품은 수익 발생 후 추가해도 늦지 않습니다.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-stone-900 mb-3">{item.title}</h3>
              <div className="flex gap-6 mb-3">
                <div className="text-center"><p className="text-xs text-stone-400 mb-1">최소</p><p className="text-sm font-bold text-stone-700">{item.min}</p></div>
                <div className="text-center"><p className="text-xs text-stone-400 mb-1">평균</p><p className="text-sm font-bold text-stone-900">{item.avg}</p></div>
                <div className="text-center"><p className="text-xs text-stone-400 mb-1">최대</p><p className="text-sm font-bold text-stone-700">{item.max}</p></div>
              </div>
              <p className="text-[13px] text-stone-600 leading-relaxed mb-2">{item.desc}</p>
              <p className="text-[12px] text-green-700 bg-green-50 rounded-lg px-3 py-1.5 leading-relaxed">✓ {item.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 창업 형태 비교 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">공유 작업실 vs 독립 매장 비교</h2>
        <div className="bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-5 py-3 font-bold">항목</th>
                <th className="text-center px-4 py-3 font-bold">공유 작업실</th>
                <th className="text-center px-4 py-3 font-bold">1인 독립 매장</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {[
                { label: '초기 비용', shared: '200~500만원', solo: '700~1,500만원' },
                { label: '월 고정비', shared: '30~80만원 (자리세)', solo: '100~200만원 (월세 등)' },
                { label: '자유도', shared: '낮음', solo: '높음' },
                { label: '리스크', shared: '낮음', solo: '중간~높음' },
                { label: '추천 대상', shared: '초보·자금 부족', solo: '고객층 확보 후' },
              ].map((row) => (
                <tr key={row.label} className="hover:bg-stone-50">
                  <td className="px-5 py-3 font-medium">{row.label}</td>
                  <td className="px-4 py-3 text-center text-green-700 font-semibold">{row.shared}</td>
                  <td className="px-4 py-3 text-center text-blue-700 font-semibold">{row.solo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 비용 절약 팁 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">네일샵 창업비용 줄이는 5가지 방법</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { num: '01', title: '중고 장비 활용', desc: '네일 드릴, UV 램프 등 고가 장비는 중고로 구매하면 50% 이상 절감 가능. 위생 관련 소모품만 새것으로 구입하세요.' },
            { num: '02', title: '셀프 인테리어', desc: '페인트칠, 소품 배치는 직접 하고 전기·배관 공사만 업체에 맡기면 인테리어 비용을 70%까지 줄일 수 있습니다.' },
            { num: '03', title: '재료 도매 구입', desc: '젤 컬러, 팁, 파일 등 소모품은 도매 플랫폼에서 구입하면 소매가 대비 30~40% 저렴합니다.' },
            { num: '04', title: '공유 공방으로 시작', desc: '보증금 없이 월 자리세만 내는 공유 네일 공방으로 시작해 고객층을 먼저 확보한 후 독립하세요.' },
            { num: '05', title: '정부 창업 지원 활용', desc: '소상공인진흥공단의 창업 자금 대출(2~3% 저금리) 및 지역별 창업 보조금을 적극 활용하세요.' },
          ].map((item) => (
            <div key={item.num} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4">
              <div className="shrink-0 w-9 h-9 bg-stone-800 text-white rounded-full flex items-center justify-center text-xs font-extrabold">{item.num}</div>
              <div>
                <h3 className="text-sm font-bold text-stone-900 mb-1">{item.title}</h3>
                <p className="text-[13px] text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 내부 링크 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">더 알아보기</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/calculator" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">직접 계산해보기</p>
            <p className="font-bold text-stone-900">네일샵 창업비용 계산기 →</p>
          </Link>
          <Link href="/revenue" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">투자 대비 수익</p>
            <p className="font-bold text-stone-900">1인 네일샵 예상 수익 →</p>
          </Link>
          <Link href="/guide" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">순서 잡기</p>
            <p className="font-bold text-stone-900">네일샵 창업 단계별 가이드 →</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 rounded-3xl p-10 text-center text-white">
        <h2 className="text-xl font-extrabold mb-2">내 상황에 맞는 창업비용이 궁금하다면?</h2>
        <p className="text-stone-400 mb-5 text-sm">무료 상담으로 정확한 예산을 잡아드립니다.</p>
        <KakaoButton location="cost" className="inline-flex items-center gap-2 bg-[#FEE500] hover:bg-[#FADC00] text-[#000000] font-bold px-8 py-3 rounded-full transition-all">
          무료 창업 상담
        </KakaoButton>
      </section>
    </div>
  )
}
