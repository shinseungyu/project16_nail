import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import { SITE_URL } from '@/lib/hreflang'
import type { EnBlock, EnPage } from '@/data/en/types'
import { EN_SECTIONS, isReleased } from '@/data/en'

/**
 * 같은 클러스터의 형제 글.
 *
 * related 3개만으로는 클러스터 안쪽 글이 내부링크 1~2개에 그쳐서 크롤러가
 * 잘 도달하지 못한다(GSC "발견됨 - 색인 생성 안 됨"). 섹션 전체를 걸어주면
 * 모든 글이 형제 수만큼 링크를 받고 클러스터가 실제로 하나의 사일로가 된다.
 *
 * 공개된 글에서 미공개(noindex) 글로는 링크하지 않는다 — 크롤 예산을
 * 색인되지 않을 URL 로 흘려보내지 않기 위해서다.
 */
function clusterSiblings(page: EnPage) {
  const section = EN_SECTIONS.find((s) => s.pages.some((p) => p.path === page.path))
  if (!section) return null
  const alreadyLinked = new Set(page.related.map((r) => r.href))
  const siblings = section.pages.filter(
    (p) => p.path !== page.path && !alreadyLinked.has(p.path) && (isReleased(p) || !isReleased(page))
  )
  return siblings.length > 0 ? { title: section.title, siblings } : null
}

/** **bold** 마크다운만 지원. 한국어 ServiceDetail과 같은 규칙이다. */
function rich(text: string): React.ReactNode {
  return text.split('**').map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-bold text-stone-900">{part}</strong> : part
  )
}

function Block({ b }: { b: EnBlock }) {
  switch (b.t) {
    case 'h2':
      return (
        <h2
          id={b.id}
          className="scroll-mt-24 text-[26px] md:text-[30px] font-extrabold text-stone-900 tracking-tight mt-16 mb-5 pb-3 border-b border-stone-200"
        >
          {b.text}
        </h2>
      )
    case 'h3':
      return <h3 className="text-[19px] md:text-[21px] font-bold text-stone-900 mt-10 mb-3">{b.text}</h3>
    case 'p':
      return <p className="text-[16px] leading-[1.85] text-stone-700 mb-5">{rich(b.text)}</p>
    case 'ul':
      return (
        <ul className="mb-6 space-y-2.5">
          {b.items.map((it, i) => (
            <li key={i} className="relative pl-6 text-[16px] leading-[1.8] text-stone-700">
              <span className="absolute left-0 top-[11px] w-1.5 h-1.5 rounded-full bg-rose-400" aria-hidden />
              {rich(it)}
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="mb-6 space-y-3">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-[16px] leading-[1.8] text-stone-700">
              <span className="shrink-0 mt-1 w-6 h-6 rounded-full bg-stone-900 text-white text-[12px] font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span>{rich(it)}</span>
            </li>
          ))}
        </ol>
      )
    case 'table':
      return (
        <figure className="my-8">
          {b.caption ? (
            <figcaption className="text-[13px] font-bold text-stone-500 uppercase tracking-wider mb-2.5">
              {b.caption}
            </figcaption>
          ) : null}
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-[14px] border-collapse min-w-[520px]">
              <thead>
                <tr className="bg-stone-50">
                  {b.head.map((h, i) => (
                    <th
                      key={i}
                      className="text-left font-bold text-stone-900 px-4 py-3 border-b border-stone-200 whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((row, i) => (
                  <tr key={i} className="border-b border-stone-100 last:border-0">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={
                          j === 0
                            ? 'px-4 py-3 align-top leading-[1.7] font-semibold text-stone-900'
                            : 'px-4 py-3 align-top leading-[1.7] text-stone-700'
                        }
                      >
                        {rich(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {b.note ? <p className="text-[12.5px] text-stone-500 mt-2.5 leading-relaxed">{rich(b.note)}</p> : null}
        </figure>
      )
    case 'note': {
      const warn = b.tone === 'warn'
      return (
        <aside
          className={
            warn
              ? 'my-7 rounded-xl border p-5 bg-amber-50 border-amber-200'
              : 'my-7 rounded-xl border p-5 bg-stone-50 border-stone-200'
          }
        >
          {b.title ? (
            <p className={warn ? 'font-bold text-[14px] mb-1.5 text-amber-900' : 'font-bold text-[14px] mb-1.5 text-stone-900'}>
              {b.title}
            </p>
          ) : null}
          <p className={warn ? 'text-[14.5px] leading-[1.75] text-amber-900' : 'text-[14.5px] leading-[1.75] text-stone-600'}>
            {rich(b.text)}
          </p>
        </aside>
      )
    }
  }
}

/**
 * 영문 가이드 아티클 렌더러.
 * 광고 슬롯은 한국어 시술 페이지와 동일 단위를 재사용한다(인아티클 3886825955 / 하단 3291145762).
 */
export default function EnArticle({ page }: { page: EnPage }) {
  const url = `${SITE_URL}${page.path}`
  const toc = page.blocks.filter((b): b is Extract<EnBlock, { t: 'h2' }> => b.t === 'h2')

  // 본문 중간 광고 위치 — 두 번째 h2 이후 첫 문단 뒤
  const midIndex = (() => {
    let seen = 0
    for (let i = 0; i < page.blocks.length; i++) {
      if (page.blocks[i].t === 'h2') seen++
      if (seen === 2 && page.blocks[i].t === 'p') return i
    }
    return -1
  })()

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Korea Beauty Guide', item: `${SITE_URL}/en` },
      { '@type': 'ListItem', position: 2, name: page.h1, item: url },
    ],
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.h1,
    description: page.description,
    inLanguage: 'en',
    dateModified: page.updatedIso,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: 'Korea Beauty Guide', url: `${SITE_URL}/en` },
    publisher: { '@type': 'Organization', name: 'Korea Beauty Guide', url: `${SITE_URL}/en` },
  }

  const faqJsonLd = page.faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      ) : null}

      <section
        className="border-b border-stone-200 py-14 md:py-20"
        style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #f8fafc 55%, #ecfeff 100%)' }}
      >
        <div className="max-w-[820px] mx-auto px-4">
          <nav className="text-xs text-stone-400 mb-5 flex items-center gap-1.5" aria-label="Breadcrumb">
            <Link href="/en" className="hover:text-stone-700">
              Korea Beauty Guide
            </Link>
            <span aria-hidden>&rsaquo;</span>
            <span className="text-stone-600">{page.category}</span>
          </nav>
          <h1 className="text-[30px] md:text-[42px] font-extrabold text-stone-900 tracking-tight leading-[1.25] mb-5">
            {page.h1}
          </h1>
          <p className="text-[17px] leading-[1.8] text-stone-600">{rich(page.lead)}</p>
          <p className="text-[12.5px] text-stone-400 mt-6">Last updated: {page.updated}</p>
        </div>
      </section>

      <article className="max-w-[820px] mx-auto px-4 py-12">
        {toc.length > 2 ? (
          <nav className="mb-12 rounded-xl border border-stone-200 bg-stone-50 p-5" aria-label="On this page">
            <p className="text-[12px] font-bold text-stone-500 uppercase tracking-widest mb-3">On this page</p>
            <ol className="space-y-1.5">
              {toc.map((h, i) => (
                <li key={h.id} className="text-[14.5px] text-stone-700">
                  <a href={`#${h.id}`} className="hover:text-rose-600 transition-colors">
                    <span className="text-stone-400 mr-2">{String(i + 1).padStart(2, '0')}</span>
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {page.blocks.map((b, i) => (
          <div key={i}>
            <Block b={b} />
            {i === midIndex ? <AdUnit slot="3886825955" format="fluid" layout="in-article" /> : null}
          </div>
        ))}

        {page.faq.length > 0 ? (
          <section className="mt-16">
            <h2
              id="faq"
              className="scroll-mt-24 text-[26px] md:text-[30px] font-extrabold text-stone-900 tracking-tight mb-6 pb-3 border-b border-stone-200"
            >
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {page.faq.map((f, i) => (
                <details key={i} className="rounded-xl border border-stone-200 bg-white p-5">
                  <summary className="cursor-pointer list-none font-bold text-stone-900 text-[16px] flex items-start gap-3">
                    <span className="text-rose-400 shrink-0">Q.</span>
                    <span>{f.q}</span>
                  </summary>
                  <p className="mt-3 pl-7 text-[15.5px] leading-[1.8] text-stone-600">{rich(f.a)}</p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        {page.related.length > 0 ? (
          <section className="mt-16 pt-10 border-t border-stone-200">
            <p className="text-[12px] font-bold text-stone-500 uppercase tracking-widest mb-4">Keep reading</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {page.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="rounded-xl border border-stone-200 px-5 py-4 text-[15px] font-semibold text-stone-800 hover:border-rose-300 hover:text-rose-700 transition-colors"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {(() => {
          const cluster = clusterSiblings(page)
          if (!cluster) return null
          return (
            <nav className="mt-12 pt-10 border-t border-stone-200" aria-label="More in this series">
              <p className="text-[12px] font-bold text-stone-500 uppercase tracking-widest mb-4">
                More on {cluster.title.toLowerCase()}
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {cluster.siblings.map((p) => (
                  <li key={p.path} className="relative pl-5">
                    <span className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full bg-stone-300" aria-hidden />
                    <Link
                      href={p.path}
                      className="text-[15px] leading-[1.7] text-stone-600 hover:text-rose-700 transition-colors"
                    >
                      {p.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )
        })()}

        <AdUnit slot="3291145762" />
      </article>
    </div>
  )
}
