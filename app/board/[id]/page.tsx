import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import posts from "@/data/posts.json";

interface Post {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
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
  return {
    title: post.title,
    description: post.summary,
    keywords: post.tags,
    alternates: { canonical: `/board/${post.id}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BoardPostPage({ params }: { params: { id: string } }) {
  const post = allPosts.find((p) => p.id === Number(params.id));
  if (!post) notFound();

  const colorClass = categoryColor[post.category] ?? "bg-gray-100 text-gray-600";

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
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
            {post.content.split("\n").map((line, i) =>
              line.trim() === "" ? <br key={i} /> : <p key={i}>{line}</p>
            )}
          </div>
        </article>

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
