import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import HubQuickLinks from '@/components/HubQuickLinks'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '네일아트 종류·가격 총정리 | 디자인별 비용과 시간' },
  description:
    '네일아트 종류를 디자인별로 정리했습니다. 그라데이션·마블·프렌치·3D 가격 5~15만원, 소요시간과 유지 기간, 셀프와 비교까지 확인하세요.',
  keywords: ['네일아트', '네일아트 종류', '네일아트 가격', '네일 디자인', '심플 네일', '마블 네일', '오로라 네일'],
  alternates: { canonical: '/nail-art' },
}

const designs = [
  ['원톤 (단색)', '한 가지 색으로 깔끔하게', '—', '3~5만원', '하'],
  ['프렌치', '끝부분만 다른 색', '+10~20분', '4~6만원', '중'],
  ['그라데이션', '색이 자연스럽게 번짐', '+10~15분', '4~6.5만원', '하'],
  ['마블', '대리석 무늬', '+20~30분', '5~8만원', '중'],
  ['오로라', '빛에 따라 색이 변함', '+15~25분', '5~8만원', '중'],
  ['자석젤 (캣아이)', '자석으로 결을 만듦', '+15~25분', '5~8만원', '중'],
  ['글리터·스톤', '반짝임·파츠 부착', '+15~30분', '5~9만원', '하'],
  ['핸드페인팅', '손으로 그리는 그림', '+30~60분', '7~12만원', '상'],
  ['3D 조형', '입체 장식', '+40~80분', '8~15만원', '상'],
  ['미러·크롬', '금속 질감', '+15~25분', '5~8만원', '중'],
]

const situations = [
  ['직장·면접', '원톤(누드·베이지), 프렌치', '단정하고 무난'],
  ['결혼식·행사', '글리터, 미러, 3D 포인트', '사진에 잘 나옴'],
  ['웨딩 (신부)', '프렌치 + 파츠', '드레스와 조화'],
  ['데일리', '그라데이션, 자석젤', '관리 편하고 오래감'],
  ['SNS·개성', '핸드페인팅, 마블', '결과물이 눈에 띔'],
  ['손톱이 짧을 때', '원톤, 세로 그라데이션', '길어 보이는 효과'],
]

const durability = [
  ['원톤·프렌치', '3~4주', '자란 부분이 눈에 띔'],
  ['그라데이션·마블', '3~4주', '경계가 자연스러워 자람이 덜 티남'],
  ['글리터·스톤', '2~3주', '파츠가 떨어질 수 있음'],
  ['3D', '2~3주', '걸릴 위험, 생활 불편'],
]

const faqs = [
  {
    q: '네일아트 가격이 왜 이렇게 차이 나나요?',
    a: '디자인 난이도와 소요시간이 다르기 때문입니다. 그라데이션은 15분이면 되지만 3D는 1시간 이상 걸립니다. 손톱당 추가 방식과 패키지 방식이 있으니 예약 시 확인하세요.',
  },
  {
    q: '사진 가져가면 그대로 되나요?',
    a: '손톱 길이와 모양에 따라 조정이 필요할 수 있습니다. 예약 시 미리 공유하면 가능 여부를 확인받을 수 있습니다.',
  },
  { q: '아트만 따로 받을 수 있나요?', a: '기존 젤 위에 포인트 아트를 추가하는 것은 샵에 따라 가능합니다.' },
  { q: '얼마나 가나요?', a: '3~4주가 일반적입니다. 3D나 스톤은 걸릴 위험이 있어 2~3주로 짧습니다.' },
  { q: '직장에서 무난한 디자인은 뭔가요?', a: '누드·베이지 계열 원톤이나 자연스러운 프렌치가 일반적입니다.' },
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
    { '@type': 'ListItem', position: 2, name: '네일아트', item: `${SITE_URL}/nail-art` },
  ],
}

export default function NailArtPage() {
  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section
        className="rounded-3xl overflow-hidden mb-6 px-6 py-14 text-center"
        style={{ background: 'linear-gradient(135deg, #4a2340 0%, #26131f 100%)' }}
      >
        <p className="text-xs font-extrabold text-pink-300 mb-3 tracking-widest uppercase">Nail Art</p>
        <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-snug mb-4">
          네일아트,
          <br />
          <span className="text-white/80">종류가 이렇게 많았나요?</span>
        </h1>
        <p className="text-base text-white/70 mb-6 max-w-xl mx-auto leading-relaxed">
          디자인별 가격과 소요시간, 유지 기간, 셀프와의 차이까지 한 번에 정리했습니다.
        </p>
        <HubQuickLinks
          dark
          items={[
            { href: '#designs', label: '종류·가격', icon: '💅' },
            { href: '#situation', label: '상황별 추천', icon: '🎯' },
            { href: '#self', label: '셀프 비교', icon: '🏠' },
            { href: '/cost', label: '창업비용', icon: '💰' },
          ]}
        />
      </section>

      <div className="max-w-[820px] mx-auto px-4 pb-12">
        <AdUnit slot="7150499722" />

        {/* 한 줄 답 */}
        <div className="bg-stone-900 rounded-2xl p-6 my-8">
          <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
          <p className="text-[15px] text-white leading-relaxed">
            네일아트는 디자인에 따라 <strong className="text-pink-300">5만원부터 15만원까지</strong>입니다.
            그라데이션·프렌치 같은 기본형이 5~7만원, 마블·오로라가 6~9만원, 핸드페인팅과 3D는 8~15만원입니다. 소요시간은
            80~150분입니다.
          </p>
        </div>

        {/* 디자인별 */}
        <section className="mb-10" id="designs">
          <h2 className="text-xl font-bold text-stone-900 mb-4">디자인별 종류·가격</h2>
          <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
            <table className="w-full text-sm min-w-[600px]">
              <thead className="bg-stone-50 text-stone-600">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">디자인</th>
                  <th className="text-left px-4 py-3 font-bold">특징</th>
                  <th className="text-center px-4 py-3 font-bold">추가 시간</th>
                  <th className="text-center px-4 py-3 font-bold">가격대</th>
                  <th className="text-center px-4 py-3 font-bold">난이도</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50 text-stone-700">
                {designs.map((r) => (
                  <tr key={r[0]} className="hover:bg-stone-50/60">
                    <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                    <td className="px-4 py-3 text-[13px] text-stone-500">{r[1]}</td>
                    <td className="px-4 py-3 text-center whitespace-nowrap text-[13px]">{r[2]}</td>
                    <td className="px-4 py-3 text-center font-semibold whitespace-nowrap">{r[3]}</td>
                    <td className={`px-4 py-3 text-center font-bold ${r[4] === '상' ? 'text-rose-600' : 'text-stone-500'}`}>
                      {r[4]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-stone-400">2026년 8월 기준 참고 범위입니다. 지역·샵 등급에 따라 달라집니다.</p>
        </section>

        <AdUnit slot="1591000951" />

        {/* 상황별 추천 */}
        <section className="mb-10" id="situation">
          <h2 className="text-xl font-bold text-stone-900 mb-4">상황별 추천</h2>
          <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
            <table className="w-full text-sm min-w-[520px]">
              <thead className="bg-stone-50 text-stone-600">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">상황</th>
                  <th className="text-left px-4 py-3 font-bold">추천 디자인</th>
                  <th className="text-left px-4 py-3 font-bold">이유</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50 text-stone-700">
                {situations.map((r) => (
                  <tr key={r[0]} className="hover:bg-stone-50/60">
                    <td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td>
                    <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                    <td className="px-4 py-3 text-[13px] text-stone-500">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 유지 기간 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-stone-900 mb-4">유지 기간과 관리</h2>
          <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
            <table className="w-full text-sm min-w-[460px]">
              <thead className="bg-stone-50 text-stone-600">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">디자인</th>
                  <th className="text-center px-4 py-3 font-bold">유지 기간</th>
                  <th className="text-left px-4 py-3 font-bold">주의</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50 text-stone-700">
                {durability.map((r) => (
                  <tr key={r[0]} className="hover:bg-stone-50/60">
                    <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                    <td className="px-4 py-3 text-center whitespace-nowrap">{r[1]}</td>
                    <td className="px-4 py-3 text-[13px] text-stone-500">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
            <p className="text-xs text-amber-900 leading-relaxed">
              <strong>자란 티가 덜 나는 순서:</strong> 그라데이션 &gt; 마블 &gt; 원톤 &gt; 프렌치. 프렌치는 경계선이
              명확해 <strong>2주만 지나도 자란 게 보입니다.</strong> 자주 못 간다면 그라데이션 계열이 유리합니다.
            </p>
          </div>
        </section>

        {/* 셀프 비교 */}
        <section className="mb-10" id="self">
          <h2 className="text-xl font-bold text-stone-900 mb-4">셀프 네일아트와 비교</h2>
          <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-stone-50 text-stone-600">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">구분</th>
                  <th className="text-center px-4 py-3 font-bold">샵</th>
                  <th className="text-center px-4 py-3 font-bold">셀프 (젤 스티커)</th>
                  <th className="text-center px-4 py-3 font-bold">셀프 (젤 도구)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50 text-stone-700">
                {[
                  ['1회 비용', '5~12만원', '0.5~1.5만원', '초기 5~15만원 + 회당 0.5~1.5만원'],
                  ['소요시간', '80~150분', '20~30분', '90~150분'],
                  ['유지', '3~4주', '1~2주', '2~3주'],
                  ['가능한 디자인', '전부', '제한적', '숙련도에 따라'],
                  ['손톱 부담', '관리됨', '낮음', '제거를 잘못하면 손상'],
                ].map((r) => (
                  <tr key={r[0]} className="hover:bg-stone-50/60">
                    <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                    <td className="px-4 py-3 text-center text-[13px]">{r[1]}</td>
                    <td className="px-4 py-3 text-center text-[13px]">{r[2]}</td>
                    <td className="px-4 py-3 text-center text-[13px] text-stone-500">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-stone-600 leading-relaxed">
            <strong className="text-stone-800">복잡한 아트일수록 샵이 유리합니다.</strong> 마블·핸드페인팅은 셀프로
            재현하기 어렵고, 실패하면 지우고 다시 해야 해서 시간과 재료가 더 듭니다.
          </p>
        </section>

        {/* 예약 전 확인 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-stone-900 mb-4">예약 전 확인할 것</h2>
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
            <ol className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
              <li><strong className="text-stone-800">아트 가격 산정 방식</strong> — 손톱당 추가인지, 전체 패키지인지</li>
              <li><strong className="text-stone-800">원하는 디자인 사진 공유</strong> — 예약 시 미리 보내면 가능 여부와 정확한 금액을 알 수 있습니다</li>
              <li><strong className="text-stone-800">젤 제거 비용 포함 여부</strong> — 타 샵 시술물은 2~3만원이 붙습니다</li>
              <li><strong className="text-stone-800">소요시간</strong> — 3D는 2시간 이상 걸립니다. 일정에 여유를 두세요</li>
            </ol>
          </div>
        </section>

        {/* 창업자 관점 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-stone-900 mb-1">창업자 관점</h2>
          <p className="text-sm text-rose-600 font-bold mb-4">★ 네일아트의 진짜 가치</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {[
              ['단가', '7만원 (평균)'],
              ['소요시간', '100분'],
              ['시간당 수익', '약 3.6만원'],
              ['재료 원가율', '15~20%'],
            ].map(([k, v]) => (
              <div key={k} className="bg-stone-50 rounded-xl p-3 text-center">
                <p className="text-[11px] text-stone-400 mb-1">{k}</p>
                <p className="text-[13px] font-bold text-stone-800">{v}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm space-y-3">
            <p className="text-[13px] text-stone-600 leading-relaxed">
              시간당 수익은 젤네일(3.1만원)과 큰 차이가 없습니다.{' '}
              <strong className="text-stone-800">숫자만 보면 아트는 효율이 좋은 메뉴가 아닙니다.</strong>
            </p>
            <p className="text-[13px] text-stone-600 leading-relaxed">
              그럼에도 아트가 중요한 이유는 마케팅입니다. 인스타그램·네이버 플레이스에서 신규 고객을 데려오는 것은 결국
              아트 사진입니다. 원톤 사진으로는 유입이 생기지 않습니다.
            </p>
            <p className="text-[13px] text-stone-600 leading-relaxed">
              즉 <strong className="text-stone-800">아트는 수익 메뉴가 아니라 광고 메뉴</strong>입니다. 예약이 적은
              초기에 아트 포트폴리오를 쌓아두면 광고비를 크게 아낄 수 있습니다.
            </p>
            <p className="text-[13px] text-stone-600 leading-relaxed">
              <strong className="text-stone-800">핸드페인팅·3D는 가격 경쟁에서 벗어나는 유일한 통로</strong>이기도
              합니다. 저가 매장이 따라올 수 없는 영역이라, 단가를 유지하면서 고객을 확보할 수 있습니다.
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

        {/* 내부링크 */}
        <section className="mb-8">
          <p className="text-xs font-semibold text-stone-400 mb-3">시술별 상세와 창업 정보</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              { href: '/service/nail-art', tag: '시술', label: '네일아트 시술 상세 →' },
              { href: '/service/gel-nail', tag: '시술', label: '젤네일 상세 →' },
              { href: '/service/full-set', tag: '시술', label: '풀세트 →' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
                <p className="text-xs font-semibold text-stone-400 mb-1">{l.tag}</p>
                <p className="font-bold text-stone-900">{l.label}</p>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/license" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
              <p className="text-xs font-semibold text-stone-400 mb-1">배워서 직접</p>
              <p className="font-bold text-stone-900">미용사(네일) 자격증 →</p>
            </Link>
            <Link href="/cost" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
              <p className="text-xs font-semibold text-stone-400 mb-1">창업</p>
              <p className="font-bold text-stone-900">네일샵 창업비용 →</p>
            </Link>
          </div>
        </section>

        <AdUnit slot="3291145762" format="autorelaxed" responsive={false} />
      </div>
    </div>
  )
}
