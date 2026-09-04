import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import LinkThumb from '@/components/LinkThumb'
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

/** **bold** 를 노드 배열로. rich() 내부에서만 쓴다. */
function bold(text: string, keyPrefix: string): React.ReactNode[] {
  return text
    .split('**')
    .map((part, i) =>
      i % 2 === 1 ? (
        <strong key={`${keyPrefix}-b${i}`} className="font-bold text-stone-900">
          {part}
        </strong>
      ) : (
        <span key={`${keyPrefix}-t${i}`}>{part}</span>
      )
    )
}

/** 본문 안 링크: [라벨](/en/경로). 사이트 내부 경로만 허용한다. */
const INLINE_LINK = /\[([^\]]+)\]\((\/[^)\s]+)\)/g

/**
 * **bold** 와 [라벨](/경로) 인라인 링크를 지원한다.
 *
 * 본문 중간 링크는 하단 관련글 블록보다 훨씬 많이 클릭된다. 문맥 안에 있어서
 * 독자가 "지금 궁금한 것"에 바로 대응하기 때문이다. SEO 측면에서도 보일러플레이트
 * 링크보다 문맥 링크의 가중치가 높다. 그래서 블록 모델에 링크를 넣을 수 있게 했다.
 */
function rich(text: string): React.ReactNode {
  const out: React.ReactNode[] = []
  let last = 0
  let m: RegExpExecArray | null
  INLINE_LINK.lastIndex = 0
  while ((m = INLINE_LINK.exec(text)) !== null) {
    if (m.index > last) out.push(...bold(text.slice(last, m.index), `s${last}`))
    out.push(
      <Link
        key={`l${m.index}`}
        href={m[2]}
        className="font-semibold text-rose-700 underline decoration-rose-300 underline-offset-2 hover:decoration-rose-600 transition-colors"
      >
        {bold(m[1], `l${m.index}i`)}
      </Link>
    )
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(...bold(text.slice(last), `s${last}`))
  return out
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

  /**
   * 본문 중간 관련글 카드 위치 — 뒤쪽 h2 직전.
   *
   * 하단 "Keep reading" 블록은 끝까지 읽은 사람만 본다. 실제로 다음 글로 넘어가는
   * 클릭은 본문 중간, 그것도 한 섹션을 다 읽고 다음 제목으로 넘어가는 경계에서 나온다.
   * 광고 자리(midIndex)와 겹치지 않도록 충분히 뒤쪽에 둔다.
   */
  const linkCardIndex = (() => {
    const h2s = page.blocks.map((b, i) => (b.t === 'h2' ? i : -1)).filter((i) => i >= 0)
    if (h2s.length < 4) return -1
    const at = h2s[Math.floor(h2s.length * 0.6)]
    return at > midIndex + 2 ? at : -1
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
            {i === linkCardIndex && page.related.length > 0 ? (
              <aside className="my-10 rounded-2xl border-2 border-rose-200 bg-rose-50/60 p-5 md:p-6">
                <p className="text-[11.5px] font-bold text-rose-500 uppercase tracking-widest mb-2.5">
                  Read next
                </p>
                <Link href={page.related[0].href} className="group flex items-center gap-3.5">
                  <LinkThumb
                    seed={page.related[0].href}
                    label={page.related[0].label}
                    className="w-14 rounded-xl shrink-0"
                    sizes="56px"
                  />
                  <span className="text-[17px] md:text-[19px] font-extrabold text-stone-900 leading-snug group-hover:text-rose-700 transition-colors">
                    {page.related[0].label}
                  </span>
                  <span
                    className="ml-auto shrink-0 w-9 h-9 rounded-full bg-rose-600 text-white flex items-center justify-center text-[17px] group-hover:bg-rose-700 group-hover:translate-x-0.5 transition-all"
                    aria-hidden
                  >
                    &rarr;
                  </span>
                </Link>
              </aside>
            ) : null}
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
          <section className="mt-16 rounded-3xl border-2 border-rose-100 bg-gradient-to-br from-rose-50/80 via-white to-stone-50 p-6 md:p-8">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-6 rounded-full bg-rose-500 shrink-0" aria-hidden />
              <h2 className="text-xl md:text-2xl font-extrabold text-stone-900">Keep reading</h2>
            </div>
            <p className="text-[13px] text-stone-500 mt-2 mb-6 pl-4">What people read next after this page</p>
            <div className="grid sm:grid-cols-2 gap-3.5">
              {page.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group overflow-hidden rounded-2xl border-2 border-stone-200 bg-white hover:border-rose-400 hover:shadow-lg hover:shadow-rose-900/5 hover:-translate-y-0.5 transition-all"
                >
                  <LinkThumb seed={r.href} label={r.label} sizes="(max-width: 640px) 100vw, 50vw" />
                  <div className="flex items-center gap-2.5 px-4 py-3.5">
                    <span className="min-w-0 text-[15px] font-extrabold text-stone-900 leading-snug group-hover:text-rose-700 transition-colors">
                      {r.label}
                    </span>
                    <span
                      className="ml-auto shrink-0 w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center text-[15px] group-hover:bg-rose-700 group-hover:translate-x-0.5 transition-all"
                      aria-hidden
                    >
                      &rarr;
                    </span>
                  </div>
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
