import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '네일아트 창업비용 총정리 2026 | 항목별 예산 가이드',
  description: '1인 네일샵 창업비용을 항목별로 정리했습니다. 보증금, 인테리어, 장비, 재료비까지 최소~평균 비용을 확인하세요.',
  alternates: { canonical: '/cost' },
}

const OPEN_CHAT_URL = '#'

export default function CostPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">창업비용 가이드</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">네일아트 창업비용 총정리</h1>
      <p className="text-stone-500 mb-10">2026년 기준 1인 네일샵 창업에 드는 모든 비용을 항목별로 정리했습니다.</p>

      {/* 비용 상세 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">항목별 창업비용</h2>
        <div className="space-y-4">
          {[
            { title: '보증금', min: '100만원', avg: '300만원', max: '1,000만원 이상', desc: '상가 규모와 지역에 따라 차이가 크며, 권리금이 추가되는 경우도 있습니다. 소규모 공유 작업실을 이용하면 보증금을 낮출 수 있습니다.' },
            { title: '인테리어', min: '0원 (셀프)', avg: '500만원', max: '2,000만원 이상', desc: '직접 꾸미면 재료비만으로 해결 가능합니다. 업체에 맡길 경우 평당 50~100만원 수준이며, 네일샵 특성상 조명과 위생 설비가 중요합니다.' },
            { title: '네일 장비·기기', min: '150만원', avg: '300만원', max: '500만원', desc: 'UV/LED 젤 램프, 전동 드릴, 에어브러시, 소독기, 네일 테이블이 기본 필수 장비입니다. 중고 장비 활용 시 비용을 절반 이하로 줄일 수 있습니다.' },
            { title: '재료비 초기 구비', min: '50만원', avg: '150만원', max: '300만원', desc: '젤 컬러 (50~100색), 베이스·탑 코트, 팁, 젤리 글루, 파일, 핀셋 등 소모품 초기 세팅 비용입니다. 도매 구매 시 비용을 30~40% 절감할 수 있습니다.' },
            { title: '간판·홍보물', min: '30만원', avg: '100만원', max: '200만원', desc: '간판 제작, 현수막, 명함, 스티커, SNS 프로필 촬영 비용입니다. 초기에는 최소한으로 시작하고 수익이 생기면 추가 투자를 권장합니다.' },
            { title: '가구·소품', min: '50만원', avg: '200만원', max: '500만원', desc: '네일 테이블, 의자(시술용·고객용), 소독기, 수납장, 대기 소파 등입니다. 중고나라·당근마켓 활용 시 비용을 크게 줄일 수 있습니다.' },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-stone-900 mb-3">{item.title}</h3>
              <div className="flex gap-4 mb-3">
                <div className="text-center"><p className="text-xs text-stone-400 mb-1">최소</p><p className="text-sm font-bold text-stone-700">{item.min}</p></div>
                <div className="text-center"><p className="text-xs text-stone-400 mb-1">평균</p><p className="text-sm font-bold text-stone-900">{item.avg}</p></div>
                <div className="text-center"><p className="text-xs text-stone-400 mb-1">최대</p><p className="text-sm font-bold text-stone-700">{item.max}</p></div>
              </div>
              <p className="text-[13px] text-stone-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 rounded-3xl p-10 text-center text-white">
        <h2 className="text-xl font-extrabold mb-2">내 상황에 맞는 창업비용이 궁금하다면?</h2>
        <p className="text-stone-400 mb-5 text-sm">무료 상담으로 정확한 예산을 잡아드립니다.</p>
        <a href={OPEN_CHAT_URL} className="inline-flex items-center gap-2 bg-[#FEE500] hover:bg-[#FADC00] text-[#000000] font-bold px-8 py-3 rounded-full transition-all">
          <Image src="/images/kakao_logo.png" alt="카카오톡" width={18} height={18} />무료 창업 상담
        </a>
      </section>
    </div>
  )
}
