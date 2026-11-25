import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import { getPublishedPosts } from '@/lib/blog/store'
import { formatDate } from '@/lib/blog/markdown'
import { BLOG_CATEGORIES, categoryOf } from '@/lib/blog/config'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

export function generateMetadata(): Metadata {
  const empty = getPublishedPosts().length === 0
  return {
    title: '네일샵 창업 블로그 | 비용·자격증·운영 노하우',
    description:
      '네일샵 창업비용, 미용사(네일) 자격증, 매장 운영과 마케팅까지 실제 창업 준비에 필요한 정보를 주제별로 정리한 블로그입니다.',
    alternates: { canonical: '/blog' },
    // 글이 하나도 없을 때는 빈 목록 페이지가 색인되지 않게 막는다
    ...(empty ? { robots: { index: false, follow: true } } : {}),
  }
}

export default function BlogIndexPage() {
  const posts = getPublishedPosts()
  const usedCategories = BLOG_CATEGORIES.filter((c) => posts.some((p) => p.category === c.key))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: '블로그', item: `${SITE_URL}/blog` },
        ],
      },
      {
        '@type': 'ItemList',
        name: '네일샵 창업 블로그 글 목록',
        numberOfItems: posts.length,
        itemListElement: posts.slice(0, 50).map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${SITE_URL}/blog/${p.slug}`,
          name: p.title,
        })),
      },
    ],
  }

  return (
    <div className="max-w-[960px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-stone-700">홈</Link>
        <span>›</span>
        <span className="text-stone-600">블로그</span>
      </nav>

      <h1 className="text-[26px] md:text-3xl font-extrabold text-stone-900 mb-3">네일샵 창업 블로그</h1>
      <p className="text-[15px] text-stone-500 leading-relaxed mb-6 break-keep">
        창업비용·자격증·매장 운영·마케팅까지, 네일샵을 준비하면서 실제로 막히는 지점을 주제별로 정리합니다.
      </p>

      {usedCategories.length > 1 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {usedCategories.map((c) => (
            <a key={c.key} href={`#cat-${encodeURIComponent(c.key)}`} className={`rounded-full px-3 py-1.5 text-[12px] font-bold ${c.color}`}>
              {c.key} {posts.filter((p) => p.category === c.key).length}
            </a>
          ))}
        </div>
      )}

      {posts.length === 0 ? (
        <p className="rounded-2xl border border-stone-200 bg-stone-50 p-8 text-center text-stone-500">첫 글을 준비하고 있습니다.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {posts.map((p, i) => (
            <li key={p.id} id={i === posts.findIndex((x) => x.category === p.category) ? `cat-${encodeURIComponent(p.category)}` : undefined}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white hover:border-stone-300 hover:shadow-premium transition-all"
              >
                {p.cover?.src && (
                  <div className="aspect-[1200/630] overflow-hidden bg-stone-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.cover.src}
                      alt={p.cover.alt}
                      loading={i < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <span className={`self-start rounded-full px-2.5 py-0.5 text-[11px] font-bold ${categoryOf(p.category).color}`}>
                    {p.category}
                  </span>
                  <h2 className="mt-3 text-[17px] font-bold text-stone-900 leading-snug break-keep group-hover:text-brand-dark">
                    {p.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-[14px] text-stone-500 leading-relaxed">{p.description}</p>
                  <span className="mt-auto pt-4 text-[12px] text-stone-400">{formatDate(p.publishedAt)}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {posts.length > 0 && <AdUnit slot="1591000951" />}
    </div>
  )
}
