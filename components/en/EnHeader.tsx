'use client'

import { useEffect, useState } from 'react'
import { EN_TO_KO } from '@/lib/hreflang'

/**
 * /en 전용 헤더.
 *
 * 한국어 SiteHeader와 파일을 나눈 이유: 두 언어의 nav 구성이 겹치는 부분이 없고,
 * 한쪽을 손볼 때 다른 쪽이 깨지는 걸 막으려는 것이다. SiteHeader는 /en 경로에서
 * 이 컴포넌트로 위임만 한다.
 */

const NAV: [string, string][] = [
  ['/en#guide', 'Booking'],
  ['/en#treatments', 'Treatments'],
  ['/en#working', 'Working'],
  ['/en/about', 'About'],
]

export default function EnHeader({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false)

  // 짝이 있는 페이지면 그 한국어 페이지로, 없으면 한국어 홈으로 보낸다.
  const koTarget = EN_TO_KO[pathname] ?? '/'

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100/50">
      <div className="max-w-[1100px] mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/en" className="font-bold text-lg text-stone-900 tracking-tight flex items-center gap-2">
          <span className="text-xl" aria-hidden>
            🇰🇷
          </span>
          <span>
            Korea <span className="text-brand">Beauty Guide</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-5 text-[13px] text-stone-500 font-semibold uppercase tracking-wide">
          {NAV.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-brand transition-colors">
              {label}
            </a>
          ))}
          <span className="w-px h-4 bg-stone-200" aria-hidden />
          {/* 언어 전환 — 기획서 지정대로 국기 아이콘 없이 텍스트만 */}
          <a href={koTarget} lang="ko" className="text-brand hover:opacity-70 transition-opacity normal-case">
            한국어
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="en-mobile-nav"
          className="md:hidden -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-xl text-stone-700 hover:bg-stone-100 active:bg-stone-200 transition-colors"
        >
          <span className="relative block h-4 w-6" aria-hidden>
            <span
              className={`absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-200 ${
                open ? 'top-[7px] rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-6 rounded-full bg-current transition-opacity duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-200 ${
                open ? 'top-[7px] -rotate-45' : 'top-[14px]'
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 z-40" role="presentation">
          <div className="absolute inset-0 bg-stone-900/30" onClick={() => setOpen(false)} aria-hidden />
          <nav
            id="en-mobile-nav"
            aria-label="Mobile menu"
            className="relative bg-white border-b border-stone-200 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <ul className="px-4 py-2">
              {NAV.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3.5 text-[15px] font-bold text-stone-800 border-b border-stone-100 active:text-brand"
                  >
                    {label}
                    <span className="text-stone-300" aria-hidden>
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-4 pt-3 pb-5">
              <p className="text-[11px] font-bold text-stone-400 uppercase tracking-widest mb-2">Language</p>
              <a
                href={koTarget}
                lang="ko"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-3.5 py-2 text-[13px] font-bold text-stone-700 active:border-stone-400"
              >
                한국어로 보기
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
