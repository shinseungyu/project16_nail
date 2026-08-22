import type { Metadata } from 'next'
import RelatedQna from '@/components/RelatedQna'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import HairCta from '@/components/HairCta'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '이용사 필기 | 출제 범위와 합격 전략 2026' },
  description:
    '이용사 필기시험 구성과 공부 전략을 정리했습니다. 2022년 NCS 기반 개정 내용과 교재 선택 시 주의점까지 확인하세요.',
  keywords: ['이용사 필기', '이용사 필기 기출', '이용사 필기 합격률', '이용사 시험일정'],
  alternates: { canonical: '/hair/license/written' },
}

const checkItems = [
  ['교재 출간 연도', '2022년 이후 개정판만'],
  ['기출 자료', '개정 이후 회차 위주'],
  ['중고 교재', '개정판인지 반드시 확인'],
  ['무료 기출 사이트', '개정 반영 여부 확인'],
]

const faqs = [
  { q: '2022년 이전 교재로 공부해도 되나요?', a: '권장하지 않습니다. 출제 기준이 NCS 기반으로 개정됐습니다.' },
  { q: '몇 점이면 합격인가요?', a: '100점 만점의 60점 이상입니다.' },
  { q: '필기 합격은 얼마나 유효한가요?', a: '2년간 실기 응시가 가능합니다.' },
  { q: '독학으로 가능한가요?', a: '필기는 독학이 충분히 가능합니다. 실기는 도구 때문에 학원이 유리합니다.' },
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
    { '@type': 'ListItem', position: 4, name: '이용사 필기', item: `${SITE_URL}/hair/license/written` },
  ],
}

export default function WrittenPage() {
  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/hair" className="hover:text-stone-700">이용원</Link><span>›</span>
        <Link href="/hair/license" className="hover:text-stone-700">자격증</Link><span>›</span>
        <span className="text-stone-600">이용사 필기</span>
      </nav>

      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">이용사 자격증</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">이용사 필기, 어떻게 준비하나요?</h1>

      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-xs font-extrabold text-white/50 mb-2 tracking-widest">한 줄 답</p>
        <p className="text-[15px] text-white leading-relaxed">
          객관식 CBT, <strong className="text-amber-300">60점 이상이면 합격</strong>입니다. 가장 중요한 것은{' '}
          <strong className="text-amber-300">2022년 1월 NCS 기반으로 개정됐다는 점</strong>이라, 그 이전 교재로
          공부하면 안 됩니다.
        </p>
      </div>

      {/* 개정 사항 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-1">개정 사항</h2>
        <p className="text-sm text-rose-600 font-bold mb-4">★ 이것부터 확인하세요</p>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-4">
          과거 이용사 필기는 이용이론·공중보건학·소독학·피부학·공중위생법규로 구성되어 있었으나,{' '}
          <strong className="text-stone-800">2022년 1월부터 NCS(국가직무능력표준) 기반으로 개정</strong>되었습니다.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-3">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="text-left px-4 py-3 font-bold">확인 항목</th>
                <th className="text-left px-4 py-3 font-bold">조치</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 text-stone-700">
              {checkItems.map((r) => (
                <tr key={r[0]} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3 font-medium text-stone-800 whitespace-nowrap">{r[0]}</td>
                  <td className="px-4 py-3 text-[13px]">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-rose-50 border border-rose-100 rounded-xl p-4">
          <p className="text-xs text-rose-800 leading-relaxed">
            <strong>오래된 자료로 공부하는 것이 초기 탈락의 흔한 원인입니다.</strong>
          </p>
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {/* 시험 구성 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">시험 구성</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <dl className="divide-y divide-stone-50 text-sm">
            {[
              ['형식', '객관식 / CBT'],
              ['합격 기준', '100점 만점 기준 60점 이상'],
              ['유효기간', '합격 후 2년간 실기 응시 가능'],
            ].map(([k, v]) => (
              <div key={k} className="flex py-2.5">
                <dt className="w-28 shrink-0 text-stone-400 font-medium">{k}</dt>
                <dd className="text-stone-700 font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="text-[11px] text-stone-400 mt-2">
          문항 수·시험 시간·응시료는 연도별로 변경될 수 있습니다.{' '}
          <a
            href="http://www.q-net.or.kr/crf005.do?id=crf00503&jmCd=7908"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-700 underline decoration-2 decoration-rose-300 underline-offset-2 hover:decoration-rose-600 transition-colors"
          >
            Q-Net 이용사 종목 정보 ↗
          </a>
          를 확인하세요.
        </p>
      </section>

      {/* 공부 순서 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-stone-900 mb-4">공부 순서</h2>
        <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
          <ol className="space-y-2.5 text-[13px] text-stone-600 leading-relaxed list-decimal pl-4">
            <li>
              <strong className="text-stone-800">공중위생 관련 영역부터</strong> — 패턴이 고정적이고, 다른 미용
              자격에서도 재활용됩니다
            </li>
            <li>
              <strong className="text-stone-800">소독·위생 파트를 확실히</strong> — 실기의 기구 분해·소독과
              직결됩니다. 여기를 제대로 익히면 실기 준비가 수월해집니다
            </li>
            <li><strong className="text-stone-800">이용 이론</strong> — 실무와 연결해서 이해</li>
            <li><strong className="text-stone-800">기출 3회독</strong> — CBT 문제은행 방식이라 반복 출제 비중이 높습니다</li>
          </ol>
          <p className="text-xs text-stone-500 mt-3">예상 준비 기간: 하루 2시간 기준 2~3개월</p>
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
          <Link href="/hair/license/practical" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">다음</p>
            <p className="font-bold text-stone-900">이용사 실기 →</p>
          </Link>
          <Link href="/hair/license/difference" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">비교</p>
            <p className="font-bold text-stone-900">미용사와 차이 →</p>
          </Link>
          <Link href="/hair/license" className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
            <p className="text-xs font-semibold text-stone-400 mb-1">전체</p>
            <p className="font-bold text-stone-900">이용사 자격증 허브 →</p>
          </Link>
        </div>
      </section>

      <HairCta withAcademy />
    <RelatedQna sections={['hair-license']} offset={5} />

    </div>
  )
}
