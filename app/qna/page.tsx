import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import FormSection from '../test/FormSection'
import { QNA_SECTIONS, QNA_ITEMS, itemsBySection, isPublished, PUBLISHED_SLUGS } from '@/data/qna'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export const metadata: Metadata = {
  title: { absolute: '뷰티 자주 묻는 질문 93선 | 네일·메이크업·스킨케어·헤어' },
  description:
    '네일·메이크업·스킨케어·헤어 시술부터 자격증·창업까지, 가장 많이 나오는 질문 93개를 카테고리별로 정리했습니다.',
  keywords: ['뷰티 자주 묻는 질문', '네일 질문', '미용 자격증 질문', '뷰티 창업 Q&A', '미용실 창업 질문'],
  alternates: { canonical: '/qna' },
  openGraph: { type: 'website' },
}

/**
 * 스키마: BreadcrumbList + ItemList
 * ★ FAQPage는 넣지 않는다 — 상세 페이지가 FAQPage를 갖기 때문에 중복이 된다 (원고 지시)
 */
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: '자주 묻는 질문', item: `${SITE_URL}/qna` },
  ],
}

// 발행된 상세만 ItemList에 담는다 (미발행 항목은 URL이 없으므로)
const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: '뷰티 자주 묻는 질문',
  numberOfItems: PUBLISHED_SLUGS.length,
  itemListElement: QNA_ITEMS.filter((i) => isPublished(i.slug)).map((i, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    url: `${SITE_URL}/qna/${i.slug}`,
    name: i.question,
  })),
}

export default function QnaHubPage() {
  const total = QNA_ITEMS.length
  const published = PUBLISHED_SLUGS.length

  return (
    <div className="max-w-[860px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <span className="text-stone-600">자주 묻는 질문</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">자주 묻는 질문</h1>
      <p className="text-[15px] text-stone-600 leading-relaxed mb-5">
        네일·메이크업·스킨케어·헤어 네 개 분야에서 가장 많이 나오는 질문을 모았습니다. 시술 종류와 가격, 유지 기간부터
        자격증 취득, 학원 선택, 창업 준비까지 카테고리별로 찾아보실 수 있습니다.
      </p>

      {/* 기준 정보 바 */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['2026년 최신 기준', `총 ${total}개 질문`, '최종 업데이트 2026.08.17'].map((t) => (
          <span key={t} className="text-[11px] font-bold text-stone-500 bg-stone-100 rounded-full px-3 py-1.5">
            {t}
          </span>
        ))}
      </div>

      {/* 카테고리에서 찾기 */}
      <section className="mb-8">
        <h2 className="text-base font-extrabold text-stone-800 mb-3">카테고리에서 찾기</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {QNA_SECTIONS.map((s) => {
            const count = itemsBySection(s.key).length
            return (
              <a
                key={s.key}
                href={`#${s.key}`}
                className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 flex items-center justify-between hover:border-stone-400 hover:bg-white transition-colors"
              >
                <span className="text-sm font-bold text-stone-800 flex items-center gap-2">
                  <span>{s.icon}</span>
                  {s.label}
                </span>
                <span className="text-xs font-bold text-stone-400 shrink-0">{count}</span>
              </a>
            )
          })}
        </div>
      </section>

      {/* 상담 신청 폼 — 카테고리 목록 바로 아래 1회. min-height로 CLS 방지 */}
      <section className="mb-10" style={{ minHeight: 320 }}>
        <h2 className="text-base font-extrabold text-stone-800 mb-3">무료 상담 신청</h2>
        <FormSection />
      </section>

      <AdUnit slot="1591000951" />

      {/* 8개 섹션 */}
      <div className="mt-8">
        {QNA_SECTIONS.map((s) => {
          const items = itemsBySection(s.key)
          return (
            <section key={s.key} id={s.key} className="mb-10 scroll-mt-20">
              <h2 className="text-xl font-bold text-stone-900 mb-1 flex items-center gap-2">
                <span>{s.icon}</span>
                {s.label}
              </h2>
              <p className="text-xs text-stone-400 mb-4">{items.length}개 질문</p>

              <ul className="divide-y divide-stone-100 border-y border-stone-100">
                {items.map((i) =>
                  isPublished(i.slug) ? (
                    <li key={i.slug}>
                      <Link
                        href={`/qna/${i.slug}`}
                        className="group flex items-center gap-3 py-3.5 hover:bg-stone-50 transition-colors"
                      >
                        <span className="text-stone-300 shrink-0 text-sm">Q</span>
                        <span className="text-[14px] text-stone-700 font-medium leading-snug break-keep group-hover:text-stone-900">
                          {i.question}
                        </span>
                        <span className="ml-auto shrink-0 text-stone-300 group-hover:text-stone-700 transition-colors">→</span>
                      </Link>
                    </li>
                  ) : (
                    // 원고 미작성분 — 링크를 걸면 404가 되므로 제목만 노출한다
                    <li key={i.slug} className="flex items-center gap-3 py-3.5">
                      <span className="text-stone-200 shrink-0 text-sm">Q</span>
                      <span className="text-[14px] text-stone-400 leading-snug break-keep">{i.question}</span>
                      <span className="ml-auto shrink-0 text-[10px] font-bold text-stone-300 bg-stone-50 rounded-full px-2 py-0.5">
                        준비 중
                      </span>
                    </li>
                  )
                )}
              </ul>
            </section>
          )
        })}
      </div>

      <p className="text-xs text-stone-400 mb-8">
        현재 {published}개 질문의 상세 답변이 공개되어 있습니다. 나머지는 순차적으로 작성해 공개합니다.
      </p>

      {/* 면책 */}
      <section className="mb-8">
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4">
          <p className="text-[11px] text-stone-500 leading-relaxed">
            본 내용은 일반적인 정보이며, 실제 비용·효과·소요 기간은 지역과 개인에 따라 다릅니다. 법령 관련 사항은 관할
            기관에 확인하시기 바랍니다.
          </p>
        </div>
      </section>

      {/* 다른 사일로 — 허브끼리만 상호 링크 (원고 지시) */}
      <section className="mb-8">
        <p className="text-xs font-semibold text-stone-400 mb-3">업종별 창업 정보</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { href: '/', label: '네일샵 창업' },
            { href: '/skincare', label: '피부관리샵 창업' },
            { href: '/makeup', label: '메이크업샵 창업' },
            { href: '/hair', label: '이용원 창업' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-stone-50 border border-stone-200 rounded-2xl p-4 hover:border-stone-400 transition-colors"
            >
              <p className="text-[13px] font-bold text-stone-800">{l.label} →</p>
            </Link>
          ))}
        </div>
      </section>

      <AdUnit slot="3291145762" format="autorelaxed" responsive={false} />
    </div>
  )
}
