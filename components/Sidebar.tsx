import Link from "next/link";
import posts from "@/data/posts.json";

const recentPosts = (posts as { id: number; title: string; date: string }[])
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 5);

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-[260px] shrink-0 self-start sticky top-24">
      <div className="space-y-5">
        {/* 최근 게시글 */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-gray-800">최근 게시글</h3>
            <Link href="/board" className="text-xs text-blue-500 hover:underline">전체 보기</Link>
          </div>
          <ul className="space-y-2.5">
            {recentPosts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/board/${post.id}`}
                  className="text-xs text-gray-600 hover:text-blue-500 transition-colors line-clamp-2 block leading-relaxed"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
