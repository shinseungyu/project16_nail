import type { Metadata } from "next";
import Link from "next/link";
import posts from "@/data/posts.json";

export const metadata: Metadata = {
  title: "네일샵 창업 정보 게시판 | 창업비용·수익·마케팅 총정리",
  description: "1인 네일샵 창업비용, 자격증 취득, 수익 분석, 마케팅 전략까지 네일샵 창업에 필요한 모든 정보를 모았습니다.",
  keywords: ["네일샵 창업", "네일샵 창업비용", "1인 네일샵", "네일 자격증", "네일샵 수익", "네일샵 마케팅"],
  alternates: { canonical: "/board" },
};

interface Post {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  metaDescription?: string;
  content: string;
  tags: string[];
}

const allPosts = posts as Post[];

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nailstartup.com";

// 목록 페이지에도 구조화 데이터가 없어 위치 신호가 없었다.
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "창업 정보", item: `${SITE_URL}/board` },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "네일샵 창업 정보 글 목록",
  numberOfItems: allPosts.length,
  itemListElement: allPosts.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE_URL}/board/${p.id}`,
    name: p.title,
  })),
};

export default function BoardPage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-xl font-bold text-gray-900 mb-1">네일샵 창업 정보</h1>
        <p className="text-xs text-gray-400 mb-6">총 {allPosts.length}개의 글</p>

        <div className="border-t border-gray-200">
          {allPosts.map((post, i) => (
            <Link
              key={post.id}
              href={`/board/${post.id}`}
              className="flex items-center gap-4 py-3.5 border-b border-gray-100 hover:bg-gray-50 transition-colors px-1"
            >
              <span className="text-xs text-gray-300 w-6 text-center shrink-0">{allPosts.length - i}</span>
              <div className="flex-1 min-w-0">
                <span className="text-sm text-gray-800 hover:text-blue-600 truncate block">{post.title}</span>
              </div>
              <span className="text-xs text-gray-400 shrink-0">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
