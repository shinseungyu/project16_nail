import type { Metadata } from 'next'
import './globals.css'
// 사이트 블로그 본문 스타일을 그대로 가져온다 → 미리보기 = 실제 모양
import '../../../components/blog/blog.css'

export const metadata: Metadata = {
  title: '블로그 콘솔 · 네일샵 창업',
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex h-14 max-w-[1500px] items-center gap-5 px-5">
            <a href="/" className="text-[15px] font-extrabold">
              💅 블로그 콘솔 <span className="text-rose-600">nailstartup.com</span>
            </a>
            <nav className="flex gap-4 text-[13px] font-bold text-stone-500">
              <a href="/" className="hover:text-stone-900">글 쓰기</a>
              <a href="/posts" className="hover:text-stone-900">발행 목록</a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
