import type { Metadata } from 'next'

// 관리자 화면 — 색인 대상이 아니다. page.tsx가 'use client'라 layout에서 지정한다.
// noindex를 안 걸면 루트 layout의 홈 metadata를 상속해 홈과 중복 신호를 만든다.
export const metadata: Metadata = {
  title: { absolute: '관리자' },
  description: '관리자 전용 화면입니다.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/admin' },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
