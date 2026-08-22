import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AdUnit from '@/components/AdUnit'
import FormSection from '@/app/test/FormSection'
import { QnaLinkRow, QnaPendingRow, QnaCardLink, QnaSeeAllLink } from '@/components/QnaLinks'
import {
  QNA_DETAILS,
  QNA_SECTIONS,
  PUBLISHED_SLUGS,
  findItem,
  type QnaBlock,
} from '@/data/qna'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export async function generateStaticParams() {
  return PUBLISHED_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const d = QNA_DETAILS[params.slug]
  if (!d) return {}
  return {
    title: { absolute: d.metaTitle },
    // meta description = 리드 문단 동일 텍스트 (원고의 PGC 방식)
    description: stripMark(d.lead),
    alternates: { canonical: `/qna/${params.slug}` },
    openGraph: {
      title: d.metaTitle,
      description: stripMark(d.lead),
      type: 'article',
      url: `/qna/${params.slug}`,
      images: [{ url: '/images/thumb.webp', width: 1200, height: 630, alt: d.h1 }],
    },
  }
}

/** **강조** 마크를 <strong>으로 변환. meta에는 마크를 제거해서 넣는다. */
function stripMark(s: string) {
  return s.replace(/\*\*/g, '')
}

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i} className="text-stone-900 font-bold">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  )
}

function Block({ block }: { block: QnaBlock }) {
  if (block.type === 'p') {
    return (
      <p className="text-[15px] text-stone-600 leading-relaxed mb-3">
        <RichText text={block.text} />
      </p>
    )
  }
  if (block.type === 'list') {
    return (
      <ul className="space-y-2 mb-3">
        {block.items.map((it) => (
          <li key={it} className="text-[14px] text-stone-600 leading-relaxed flex gap-2">
            <span className="text-stone-300 shrink-0">•</span>
            <span>
              <RichText text={it} />
            </span>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <div className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm mb-4">
      <table className="w-full text-sm" style={{ minWidth: block.headers.length > 3 ? 520 : 380 }}>
        <thead className="bg-stone-50 text-stone-600">
          <tr>
            {block.headers.map((h, i) => (
              <th key={h} className={`px-4 py-3 font-bold ${i === 0 ? 'text-left' : 'text-left'}`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-50 text-stone-700">
          {block.rows.map((r, ri) => (
            <tr key={ri} className="hover:bg-stone-50/60">
              {r.map((c, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-3 ${ci === 0 ? 'font-medium text-stone-800 whitespace-nowrap' : 'text-[13px]'}`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function QnaDetailPage({ params }: { params: { slug: string } }) {
  const d = QNA_DETAILS[params.slug]
  const item = findItem(params.slug)
  if (!d || !item) notFound()

  const section = QNA_SECTIONS.find((s) => s.key === item.section)!

  // 상세는 1질문 = 1페이지이므로 FAQPage에 mainEntity 1개.
  // 허브에 FAQPage를 넣지 않는 이유가 이것과의 중복 방지다.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: d.h1,
        acceptedAnswer: { '@type': 'Answer', text: stripMark(d.lead) },
      },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: '자주 묻는 질문', item: `${SITE_URL}/qna` },
      { '@type': 'ListItem', position: 3, name: d.h1, item: `${SITE_URL}/qna/${params.slug}` },
    ],
  }

  const related = d.relatedQuestions.map((s) => findItem(s)).filter(Boolean)

  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link><span>›</span>
        <Link href="/qna" className="hover:text-stone-700">자주 묻는 질문</Link><span>›</span>
        <span className="text-stone-600">{section.label}</span>
      </nav>

      {/* 카테고리 라벨 → 허브 앵커로 복귀 */}
      <Link
        href={`/qna#${section.key}`}
        className="group inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-dark bg-white border border-brand/40 rounded-full px-3 py-1.5 mb-4 hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-colors"
      >
        <span aria-hidden>{section.icon}</span>
        {section.label}
        <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden>›</span>
      </Link>

      <h1 className="text-[26px] md:text-3xl font-extrabold text-stone-900 leading-snug mb-5 break-keep">{d.h1}</h1>

      {/* ① 리드 = meta description 동일 텍스트 */}
      <div className="bg-stone-900 rounded-2xl p-6 mb-8">
        <p className="text-[15px] text-white leading-relaxed">
          <RichText text={d.lead} />
        </p>
      </div>

      {/* ②③④ 본문 */}
      {d.bodies.map((b, i) => (
        <section key={b.h2} className="mb-9">
          <h2 className="text-xl font-bold text-stone-900 mb-4 break-keep">{b.h2}</h2>
          {b.blocks.map((blk, bi) => (
            <Block key={bi} block={blk} />
          ))}
          {/* 본문 중간에 광고 1회 */}
          {i === 0 && <AdUnit slot="3886825955" format="fluid" layout="in-article" />}
        </section>
      ))}

      {/* ⑤ 관련 정보 */}
      {d.relatedInfo && d.relatedInfo.length > 0 && (
        <section className="mb-9">
          <h2 className="text-base font-extrabold text-stone-800 mb-3 flex items-center gap-2">
            <span className="w-1 h-4 rounded-full bg-brand" aria-hidden />
            관련 정보
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {d.relatedInfo.map((r) => (
              <QnaCardLink key={r.href} href={r.href} label={r.label} />
            ))}
          </div>
        </section>
      )}

      {/* ⑥ CTA — 상담 신청 폼 */}
      <section className="mb-9" style={{ minHeight: 320 }}>
        <h2 className="text-base font-extrabold text-stone-800 mb-3">무료 상담 신청</h2>
        <FormSection />
      </section>

      {/* ⑦ 관련 질문 4개 — 같은 카테고리 안에서만 */}
      <section className="mb-9">
        <h2 className="text-base font-extrabold text-stone-800 mb-3 flex items-center gap-2">
          <span className="w-1 h-4 rounded-full bg-brand" aria-hidden />
          관련 질문
        </h2>
        <ul className="divide-y divide-stone-100 border-y border-stone-100">
          {related.map((r) =>
            r && QNA_DETAILS[r.slug] ? (
              <li key={r.slug}>
                <QnaLinkRow href={`/qna/${r.slug}`} question={r.question} />
              </li>
            ) : r ? (
              <li key={r.slug}>
                <QnaPendingRow question={r.question} />
              </li>
            ) : null
          )}
        </ul>
        <QnaSeeAllLink
          href={`/qna#${section.key}`}
          label={`${section.label} 질문 전체 보기`}
          className="mt-4 text-sm"
        />
      </section>

      {/* ⑨ 면책 */}
      <section className="mb-8">
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4">
          <p className="text-[11px] text-stone-500 leading-relaxed">
            {d.disclaimer} <span className="text-stone-400">| 최종 수정일 {d.updated}</span>
          </p>
        </div>
      </section>

      <AdUnit slot="3291145762" format="autorelaxed" responsive={false} />
    </div>
  )
}
