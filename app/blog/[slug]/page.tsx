import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AdUnit from '@/components/AdUnit'
import BlogArticle from '@/components/blog/BlogArticle'
import { getPublishedPost, getPublishedPosts, relatedPosts } from '@/lib/blog/store'
import { parseArticle } from '@/lib/blog/markdown'
import { categoryOf } from '@/lib/blog/config'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'
const DEFAULT_IMAGE = '/images/thumb.webp'

// 발행본만 정적으로 만든다. 목록에 없는 주소는 404 (초안이 새어 나가지 않게).
export const dynamicParams = false

export function generateStaticParams() {
  return getPublishedPosts().map((p) => ({ slug: p.slug }))
}

const abs = (src: string) => (src.startsWith('http') ? src : `${SITE_URL}${src}`)

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPublishedPost(params.slug)
  if (!post) return {}
  const image = post.cover?.src ?? DEFAULT_IMAGE
  return {
    title: { absolute: post.seoTitle || post.title },
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `/blog/${post.slug}`,
      siteName: '네일샵 창업',
      locale: 'ko_KR',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: image,
          ...(post.cover?.width ? { width: post.cover.width, height: post.cover.height } : { width: 1200, height: 630 }),
          alt: post.cover?.alt || post.title,
        },
      ],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [image] },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPublishedPost(params.slug)
  if (!post) notFound()

  const parsed = parseArticle(post.markdown)
  const url = `${SITE_URL}/blog/${post.slug}`
  const cat = categoryOf(post.category)
  const related = relatedPosts(post)

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: post.title,
      description: post.description,
      image: [abs(post.cover?.src ?? DEFAULT_IMAGE)],
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      inLanguage: 'ko-KR',
      articleSection: post.category,
      keywords: post.tags.join(', '),
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      author: { '@type': 'Organization', name: '네일샵 창업 편집팀', url: `${SITE_URL}/` },
      publisher: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: '네일샵 창업',
        url: `${SITE_URL}/`,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}${DEFAULT_IMAGE}` },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: '블로그', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ]
  if (parsed.faq.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: parsed.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.aText },
      })),
    })
  }
  const jsonLd = { '@context': 'https://schema.org', '@graph': graph }

  return (
    <div className="max-w-[820px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link>
        <span>›</span>
        <Link href="/blog" className="hover:text-stone-700">블로그</Link>
        <span>›</span>
        <span className="text-stone-600">{post.category}</span>
      </nav>

      <BlogArticle
        post={post}
        parsed={parsed}
        renderAd={() => <AdUnit slot="3886825955" format="fluid" layout="in-article" />}
      />

      {/* 함께 보면 좋은 정보 — 카테고리별 허브 페이지로 내부링크 */}
      <section className="mt-10 mb-9">
        <h2 className="text-base font-extrabold text-stone-800 mb-3 flex items-center gap-2">
          <span className="w-1 h-4 rounded-full bg-brand" aria-hidden />
          함께 보면 좋은 정보
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {cat.hubs.map((h) => (
            <Link
              key={h.href}
              href={h.href}
              className="group flex items-center justify-between rounded-xl border border-stone-200 bg-white px-4 py-3 text-[14px] font-bold text-stone-700 hover:border-brand hover:text-brand-dark transition-colors"
            >
              <span className="break-keep">{h.label}</span>
              <span className="text-stone-300 group-hover:translate-x-0.5 transition-transform" aria-hidden>→</span>
            </Link>
          ))}
        </div>
      </section>

      <AdUnit slot="1591000951" />

      {related.length > 0 && (
        <section className="mb-9">
          <h2 className="text-base font-extrabold text-stone-800 mb-3 flex items-center gap-2">
            <span className="w-1 h-4 rounded-full bg-brand" aria-hidden />
            이런 글도 많이 봐요
          </h2>
          <ul className="divide-y divide-stone-100 border-y border-stone-100">
            {related.map((r) => (
              <li key={r.id}>
                <Link href={`/blog/${r.slug}`} className="flex items-center gap-3 py-3.5 px-1 hover:bg-stone-50 transition-colors">
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${categoryOf(r.category).color}`}>
                    {r.category}
                  </span>
                  <span className="flex-1 text-[14px] font-semibold text-stone-800 break-keep">{r.title}</span>
                  <span className="text-stone-300" aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/blog" className="mt-4 inline-block text-sm font-bold text-brand-dark hover:underline">
            블로그 전체 글 보기 →
          </Link>
        </section>
      )}

      <AdUnit slot="3291145762" format="autorelaxed" responsive={false} />
    </div>
  )
}
