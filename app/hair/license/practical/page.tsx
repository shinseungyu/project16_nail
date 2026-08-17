import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import HairCta from '@/components/HairCta'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '이용사 실기 | 과제 구성과 감점 포인트 정리' },
  description:
    '이용사 실기시험 과제와 준비물, 자주 떨어지는 이유를 정리했습니다. 기구 분해·소독이 왜 중요한지까지 확인하세요.',
  keywords: ['이용사 실기', '이용사 실기 준비물', '이용사 실기 과제', '이용사 실기 합격률'],
  alternates: { canonical: '/hair/license/practical' },
}

const areas = [
  ['이용 기술', '커트, 정발 등'],
  ['기구 관리', '분해 및 소독, 오일 정비'],
  ['위생', '손 소독, 도구 배치, 정리'],
]

const failReasons = [
  {
    t: '기구 분해·소독을 가볍게 봄',
    d: '커트 연습에만 시간을 쓰다가 여기서 감점이 쌓입니다. 별도 배점 항목이라는 인식이 필요합니다. 실무에서는 매일 하는 일이라 익혀두면 그대로 쓰입니다.',
  },
  {
    t: '시간 배분 실패',
    d: '과제가 여러 개라 하나에서 지체하면 뒤가 전부 밀립니다. 타이머를 켜고 전체 흐름을 통으로 연습하세요.',
  },
  {
    t: '준비물 미비',
    d: '지참 준비물 목록에서 하나만 빠져도 해당 작업이 불가능합니다. 전날 체크리스트로 두 번 확인하세요.',
  },
  {
    t: '위생 절차 누락',
    d: '손 소독, 도구 배치, 정리 순서에서 감점이 누적됩니다. 기술이 좋아도 여기서 떨어집니다.',
  },
]

const prep = [
  ['연습 빈도', '주 2~3회'],
  ['준비 기간', '3~5개월'],
  ['실물 장비', '필수 — 클리퍼 분해는 실물로만 익혀집니다'],
  ['모델', '공고에서 조건 확인'],
]

const faqs = [
  { q: '기구 분해·소독이 왜 중요한가요?', a: '별도 배점 항목이며, 실무에서는 매일 하는 작업입니다.' },
  { q: '독학으로 실기 합격이 가능한가요?', a: '가능하지만 장비와 모델 문제로 난이도가 높습니다.' },
  {
    q: '준비물은 어디서 확인하나요?',
    a: '응시 회차의 Q-Net 공개문제와 수험자 지참 준비물 목록을 확인하세요.',
  },
  { q: '몇 점이면 합격인가요?', a: '60점 이상입니다.' },
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
    { '@type': 'ListItem', position: 3, name: '자격증', item: `${SITE_URL}/hair/license` },
    { '@type': 'ListItem', position: 4, name: '이용사 실기', item: `${SITE_URL}/hair/license/practical` },
  ],
}

export default function PracticalPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span>
        <Link href="/hair/license" className="hover:text-stone-700">자격증</Link><span>›</span>
        <span className="text-stone-600">이용사 실기</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">이용사 자격증</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">이용사 실기, 뭘 준비해야 하나요?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          작업형이며 <strong className="text-amber-300">60점 이상이면 합격</strong>입니다. 이용사 실기의 특징은 커트
          기술뿐 아니라 <strong className="text-amber-300">기구 분해·소독, 오일 정비가 포함된다</strong>는 점입니다.
          도구 관리 능력을 별도로 평가받습니다.
        </p>
      </div>

      {/* 과제 구성 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">과제에 포함되는 것</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[400px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">영역</th>
                <th className="text-left px-4 py-3 font-bold">내용</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {areas.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-bold text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>이게 다른 미용 종목과 가장 다른 점입니다.</strong> 클리퍼를 분해하고 소독한 뒤 오일을 넣어 다시
            조립하는 과정이 채점 대상입니다.{' '}
            <Link href="/hair/license/difference" className="font-bold underline underline-offset-2">
              미용사와 차이 보기
            </Link>
          </p>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 자주 떨어지는 이유 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">자주 떨어지는 이유 4가지</h2>
        <div className="space-y-3">
          {failReasons.map((r, i) => (
            <div key={r.t} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
              <span className="shrink-0 w-8 h-8 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center text-xs font-extrabold">
                {i + 1}
              </span>
              <div>
                <h3 className="text-sm font-extrabold text-stone-800 mb-1">{r.t}</h3>
                <p className="text-[13px] text-stone-500 leading-relaxed">{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 준비 방법 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">준비 방법</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[400px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">항목</th>
                <th className="text-left px-4 py-3 font-bold">권장</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {prep.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-stone-400">
          실기 과제 구성·준비물·모델 조건은 연도별로 변경됩니다. 응시 회차의{' '}
          <a
            href="https://www.q-net.or.kr/cst006.do?id=cst00602&gSite=Q&gId=&brdId=Q006&code=1204&artlSeq=5209203"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Q-Net 공개문제 ↗
          </a>
          를 반드시 확인하세요.
        </p>
      </section>

      {/* 독학이 어려운 이유 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">독학이 어려운 이유</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <ul className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed">
            {[
              '클리퍼·가위 등 실물 장비가 필요합니다',
              '모델을 구해야 합니다',
              '감점 기준을 혼자서는 알기 어렵습니다',
              '시간 배분은 실전 형태로 연습해야 익혀집니다',
            ].map((t) => (
              <li key={t} className="flex gap-2"><span className="text-stone-300 shrink-0">•</span>{t}</li>
            ))}
          </ul>
          <p className="text-xs text-stone-500 mt-3">
            <strong className="text-stone-700">필기 독학 + 실기 학원 병행</strong>이 비용 대비 가장 효율적입니다. 학원비
            비교는{' '}
            <a href="https://haircost.kr" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline">
              haircost.kr ↗
            </a>
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

      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/hair/license/written" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">앞 단계</p>
            <p className="font-bold text-stone-900">이용사 필기 →</p>
          </Link>
          <Link href="/hair/license/issuance" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">다음 단계</p>
            <p className="font-bold text-stone-900">면허증 발급 →</p>
          </Link>
          <Link href="/hair/license" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">전체</p>
            <p className="font-bold text-stone-900">이용사 자격증 허브 →</p>
          </Link>
        </div>
      </section>

      <HairCta withAcademy />
    </div>
  )
}
