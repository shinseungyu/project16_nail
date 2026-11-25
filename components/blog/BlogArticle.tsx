/**
 * 블로그 글 본문 틀 — 사이트(/blog/[slug])와 콘솔 미리보기가 같은 컴포넌트를 쓴다.
 *   카테고리 → 제목 → 날짜·읽는 시간 → 대표 이미지 → 핵심 요약 박스 → 도입 → 목차 → 섹션(중간 광고) → FAQ → 면책
 *
 * ⚠️ 콘솔(tools/blog-console)이 레포 밖에서 import 한다.
 *    - '@/…' 별칭 대신 상대 경로만 쓴다.
 *    - 훅·'use client' 없이 순수 컴포넌트로 둔다(광고는 renderAd 로 바깥에서 넣는다).
 */
import type { ReactNode } from 'react'
import type { BlogContent } from '../../lib/blog/types'
import { parseArticle, readingMinutes, formatDate, type ParsedArticle } from '../../lib/blog/markdown'
import { BLOG_DISCLAIMER, categoryOf } from '../../lib/blog/config'

type Props = {
  post: BlogContent & { publishedAt?: string; updatedAt?: string }
  parsed?: ParsedArticle
  /** 'mid' = 두 번째 섹션 뒤 인아티클 광고 */
  renderAd?: (position: 'mid') => ReactNode
}

export default function BlogArticle({ post, parsed, renderAd }: Props) {
  const a = parsed ?? parseArticle(post.markdown)
  const cat = categoryOf(post.category)
  const published = formatDate(post.publishedAt)
  const updated = formatDate(post.updatedAt)
  const adAfter = a.sections.length >= 2 ? 1 : 0

  return (
    <article className="blog-article">
      <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold ${cat.color}`}>{cat.key}</span>

      <h1 className="mt-4 mb-4 text-[26px] md:text-[32px] font-extrabold text-stone-900 leading-snug break-keep">
        {post.title}
      </h1>

      <div className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-stone-400">
        <span>네일샵 창업 편집팀</span>
        {published && (
          <>
            <span aria-hidden>·</span>
            <time dateTime={post.publishedAt}>{published}</time>
          </>
        )}
        {updated && updated !== published && (
          <>
            <span aria-hidden>·</span>
            <span>
              수정 <time dateTime={post.updatedAt}>{updated}</time>
            </span>
          </>
        )}
        <span aria-hidden>·</span>
        <span>읽는 시간 약 {readingMinutes(a.charCount)}분</span>
      </div>

      {post.cover?.src && (
        <figure className="mb-8 overflow-hidden rounded-2xl border border-stone-100 bg-stone-50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.cover.src}
            alt={post.cover.alt}
            width={post.cover.width}
            height={post.cover.height}
            className="w-full h-auto"
          />
        </figure>
      )}

      {a.summary.length > 0 && (
        <div className="mb-8 rounded-2xl bg-stone-900 p-6">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-widest text-rose-300">핵심 요약</p>
          <ul className="space-y-2">
            {a.summary.map((s, i) => (
              <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-white">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300" aria-hidden />
                <span className="blog-summary-item" dangerouslySetInnerHTML={{ __html: s }} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {a.introHtml && <div className="blog-prose mb-8" dangerouslySetInnerHTML={{ __html: a.introHtml }} />}

      {a.sections.length >= 3 && (
        <nav aria-label="목차" className="mb-10 rounded-2xl border border-stone-200 bg-stone-50 p-5">
          <p className="mb-3 text-[13px] font-extrabold text-stone-800">목차</p>
          <ol className="space-y-1.5 text-[14px]">
            {a.sections.map((s, i) => (
              <li key={s.id} className="flex gap-2">
                <span className="w-5 shrink-0 font-bold text-brand-dark">{i + 1}</span>
                <a href={`#${s.id}`} className="text-stone-600 hover:text-stone-900 hover:underline" dangerouslySetInnerHTML={{ __html: s.heading }} />
              </li>
            ))}
            {a.faq.length > 0 && (
              <li className="flex gap-2">
                <span className="w-5 shrink-0 font-bold text-brand-dark">{a.sections.length + 1}</span>
                <a href="#faq" className="text-stone-600 hover:text-stone-900 hover:underline">
                  자주 묻는 질문
                </a>
              </li>
            )}
          </ol>
        </nav>
      )}

      {a.sections.map((s, i) => (
        <section key={s.id} id={s.id} className="mb-10 scroll-mt-24">
          <h2
            className="mb-4 text-[21px] font-bold text-stone-900 leading-snug break-keep"
            dangerouslySetInnerHTML={{ __html: s.heading }}
          />
          <div className="blog-prose" dangerouslySetInnerHTML={{ __html: s.html }} />
          {i === adAfter && renderAd?.('mid')}
        </section>
      ))}

      {a.faq.length > 0 && (
        <section id="faq" className="mb-10 scroll-mt-24">
          <h2 className="mb-4 text-[21px] font-bold text-stone-900">자주 묻는 질문</h2>
          <div className="divide-y divide-stone-100 rounded-2xl border border-stone-200">
            {a.faq.map((f, i) => (
              <details key={i} className="group p-5" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-start gap-3 text-[15px] font-bold text-stone-800">
                  <span className="text-brand-dark">Q.</span>
                  <span className="flex-1 break-keep">{f.q}</span>
                  <span className="text-stone-300 transition-transform group-open:rotate-180" aria-hidden>
                    ▾
                  </span>
                </summary>
                <div className="blog-prose mt-3 pl-7" dangerouslySetInnerHTML={{ __html: f.aHtml }} />
              </details>
            ))}
          </div>
        </section>
      )}

      <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
        <p className="text-[11px] leading-relaxed text-stone-500">
          {BLOG_DISCLAIMER}
          {(updated || published) && <span className="text-stone-400"> | 최종 수정일 {updated || published}</span>}
        </p>
      </div>
    </article>
  )
}
