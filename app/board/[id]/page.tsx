import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import posts from "@/data/posts.json";
import FormSection from "@/app/test/FormSection";
import AdUnit from "@/components/AdUnit";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nailstartup.com";

interface Post {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  // 목록에 노출되는 summary는 짧아 검색결과 스니펫을 못 채운다.
  // 검색용 설명은 별도 필드로 두고, 없으면 summary로 폴백한다.
  metaDescription?: string;
  content: string;
  tags: string[];
}

const allPosts = posts as Post[];

const categoryColor: Record<string, string> = {
  "창업 준비": "bg-stone-100 text-stone-700",
  "창업비용": "bg-orange-100 text-orange-700",
  "자격증": "bg-blue-100 text-blue-700",
  "수익 분석": "bg-emerald-100 text-emerald-700",
  "마케팅": "bg-violet-100 text-violet-700",
  "시술 정보": "bg-amber-100 text-amber-700",
};

export async function generateStaticParams() {
  return allPosts.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = allPosts.find((p) => p.id === Number(params.id));
  if (!post) return {};
  const desc = post.metaDescription ?? post.summary;
  return {
    title: post.title,
    description: desc,
    keywords: post.tags,
    alternates: { canonical: `/board/${post.id}` },
    openGraph: {
      title: post.title,
      description: desc,
      type: "article",
      publishedTime: post.date,
      // openGraph를 직접 지정하면 루트 layout의 images를 상속하지 못해 og:image가 사라진다.
      images: [{ url: "/images/thumb.webp", width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default function BoardPostPage({ params }: { params: { id: string } }) {
  const post = allPosts.find((p) => p.id === Number(params.id));
  if (!post) notFound();

  const colorClass = categoryColor[post.category] ?? "bg-gray-100 text-gray-600";

  // 본문을 절반으로 나눠 중간에 광고(article-mid)를 삽입
  const lines = post.content.split("\n");
  const mid = Math.ceil(lines.length / 2);

  // 글 페이지인데 구조화 데이터가 없어 리치 결과를 못 받고 있었다.
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription ?? post.summary,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "ko-KR",
    keywords: post.tags.join(", "),
    articleSection: post.category,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/board/${post.id}` },
    image: [`${SITE_URL}/images/thumb.webp`],
    author: { "@type": "Organization", name: "네일샵 창업", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "네일샵 창업",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/thumb.webp` },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "창업 정보", item: `${SITE_URL}/board` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/board/${post.id}` },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* 상담 신청 폼 */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-bold text-stone-800">무료 상담 신청</h2>
          <FormSection />
        </section>

        <Link
          href="/board"
          className="mb-8 inline-flex items-center text-sm font-semibold text-stone-500 hover:text-stone-900 transition-colors"
        >
          ← 목록으로 돌아가기
        </Link>

        <article className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 md:p-10 mt-4">
          <div className="mb-4">
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${colorClass}`}>
              {post.category}
            </span>
          </div>
          <h1 className="mb-5 text-2xl md:text-3xl font-bold text-stone-900 leading-snug">
            {post.title}
          </h1>
          <div className="mb-8 flex flex-wrap gap-4 border-b border-stone-100 pb-6 text-sm text-stone-400">
            <span>📅 {post.date}</span>
            <span>🏷️ {post.tags.join(", ")}</span>
          </div>
          <div className="text-base leading-loose text-stone-700 space-y-3">
            {lines.slice(0, mid).map((line, i) =>
              line.trim() === "" ? <br key={`a${i}`} /> : <p key={`a${i}`}>{line}</p>
            )}
            <AdUnit slot="3886825955" format="fluid" layout="in-article" />
            {lines.slice(mid).map((line, i) =>
              line.trim() === "" ? <br key={`b${i}`} /> : <p key={`b${i}`}>{line}</p>
            )}
          </div>
        </article>

        {/* 멀티플렉스 광고 (관련 콘텐츠) */}
        <AdUnit slot="3291145762" format="autorelaxed" responsive={false} />

        {/* 관련 글 */}
        <section className="mt-12">
          <h2 className="mb-5 text-lg font-bold text-stone-800">이런 글은 어떠세요?</h2>
          <div className="flex flex-col gap-3">
            {allPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 4)
              .map((p) => {
                const c = categoryColor[p.category] ?? "bg-stone-100 text-stone-600";
                return (
                  <Link
                    key={p.id}
                    href={`/board/${p.id}`}
                    className="block bg-white rounded-xl border border-stone-100 p-4 hover:border-stone-300 hover:shadow-sm transition-all"
                  >
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold mb-2 ${c}`}>
                      {p.category}
                    </span>
                    <p className="text-sm font-semibold text-stone-800">{p.title}</p>
                  </Link>
                );
              })}
          </div>
        </section>
      </div>
    </main>
  );
}
