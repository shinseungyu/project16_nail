'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import EnHeader from '@/components/en/EnHeader'
import { KO_TO_EN } from '@/lib/hreflang'

type Cat = {
  key: string
  home: string
  icon: string
  brand: string // 로고에 표시 (뒤에 suffix가 붙음)
  label: string // 업종 스위처에 표시
  suffix?: string // 로고 접미사. 기본 '창업'. 반영구화장은 창업 권유를 하지 않아 '정보'
  nav: [string, string][]
}

// 순서 주의: nail은 기본값(fallback). 나머지는 경로 prefix로 매칭
const CATEGORIES: Cat[] = [
  {
    key: 'nail', home: '/', icon: '💅', brand: '네일아트', label: '네일',
    nav: [['/cost', '창업비용'], ['/guide', '창업가이드'], ['/license', '자격증'], ['/revenue', '예상수익'], ['/calculator', '계산기'], ['/qna', 'Q&A']],
  },
  {
    key: 'skincare', home: '/skincare', icon: '✨', brand: '피부관리', label: '피부관리샵',
    nav: [['/skincare/cost', '창업비용'], ['/skincare/license', '자격증'], ['/skincare/revenue', '예상수익'], ['/skincare#calculator', '계산기'], ['/qna#skin-care', 'Q&A']],
  },
  {
    key: 'makeup', home: '/makeup', icon: '💄', brand: '메이크업', label: '메이크업',
    nav: [['/makeup/cost', '창업비용'], ['/makeup/license', '자격증'], ['/makeup/revenue', '예상수익'], ['/makeup#calculator', '계산기'], ['/qna#makeup-care', 'Q&A']],
  },
  {
    key: 'hair', home: '/hair', icon: '💈', brand: '이용원', label: '이용원',
    nav: [['/hair/cost', '창업비용'], ['/hair/license', '자격증'], ['/hair/revenue', '예상수익'], ['/hair#calculator', '계산기'], ['/qna#hair-style', 'Q&A']],
  },
  // 반영구화장은 문신사법 적용 대상. 창업 권유가 아닌 정보 제공 클러스터라 nav 구성이 다르다.
  // Q&A는 눈썹 문신·반영구 질문이 모여 있는 메이크업 시술 섹션으로 보낸다.
  {
    key: 'semi-permanent', home: '/semi-permanent', icon: '🖊️', brand: '반영구화장', label: '반영구화장', suffix: '정보',
    nav: [['/semi-permanent/legal', '자격·법'], ['/semi-permanent/law-timeline', '시행일정'], ['/semi-permanent/price', '가격'], ['/semi-permanent/removal', '제거'], ['/qna#makeup-care', 'Q&A']],
  },
]

export default function SiteHeader() {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)
  // 모바일 패널에서 펼쳐진 업종 (기본값은 현재 업종)
  const [expanded, setExpanded] = useState('')

  const active =
    CATEGORIES.find((c) => c.key !== 'nail' && (pathname === c.home || pathname.startsWith(c.home + '/'))) ?? CATEGORIES[0]
  const others = CATEGORIES.filter((c) => c.key !== active.key)

  // 다른 페이지로 이동하면 패널을 닫고, 펼침 상태를 현재 업종으로 되돌린다
  useEffect(() => {
    setOpen(false)
    setExpanded(active.key)
  }, [pathname, active.key])

  // 패널이 열려 있는 동안 배경 스크롤을 막고, Esc로 닫는다
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

  // /en 경로는 영문 헤더로 위임한다. 훅 순서를 깨지 않으려고 훅 호출을 모두 마친 뒤 분기한다.
  if (pathname.startsWith('/en')) return <EnHeader pathname={pathname} />

  // 언어 전환 목적지 — 짝이 등록된 페이지면 그 짝으로, 없으면 영문 허브로.
  const enTarget = KO_TO_EN[pathname] ?? '/en'

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100/50">
      <div className="max-w-[1100px] mx-auto px-4 h-16 flex items-center justify-between">
        <a href={active.home} className="font-bold text-lg text-stone-900 tracking-tight flex items-center gap-2">
          <span className="text-xl">{active.icon}</span>
          <span>{active.brand} <span className="text-brand">{active.suffix ?? '창업'}</span></span>
        </a>

        {/* 데스크톱 네비 */}
        <nav className="hidden md:flex items-center gap-5 text-[13px] text-stone-500 font-semibold uppercase tracking-wide">
          {active.nav.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-brand transition-colors">{label}</a>
          ))}
          <span className="w-px h-4 bg-stone-200" aria-hidden />
          {others.map((c) => (
            <a key={c.key} href={c.home} className="text-brand hover:opacity-70 transition-opacity">{c.label}</a>
          ))}
          {/* 언어 전환 — 국기 아이콘 없이 텍스트만 */}
          <a href={enTarget} lang="en" className="text-stone-400 hover:text-stone-900 transition-colors">EN</a>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          aria-controls="mobile-nav"
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

      {/* 모바일 패널 — 현재 업종뿐 아니라 다른 업종 메뉴도 펼쳐서 바로 갈 수 있다 */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 z-40" role="presentation">
          {/* 배경 — 탭하면 닫힌다 */}
          <div className="absolute inset-0 bg-stone-900/30" onClick={() => setOpen(false)} aria-hidden />
          <nav
            id="mobile-nav"
            aria-label="모바일 메뉴"
            className="relative bg-white border-b border-stone-200 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain"
          >
            <ul>
              {CATEGORIES.map((c) => {
                const isActive = c.key === active.key
                const isOpen = expanded === c.key
                return (
                  <li key={c.key} className="border-b border-stone-100 last:border-b-0">
                    <div className="flex items-center">
                      <a
                        href={c.home}
                        onClick={() => setOpen(false)}
                        className={`flex-1 flex items-center gap-2 px-4 py-3.5 text-[15px] font-extrabold ${
                          isActive ? 'text-stone-900' : 'text-stone-600'
                        }`}
                      >
                        <span className="text-lg" aria-hidden>{c.icon}</span>
                        {c.label}
                        {isActive && (
                          <span className="ml-1 rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-bold text-stone-500">
                            현재
                          </span>
                        )}
                      </a>
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? '' : c.key)}
                        aria-expanded={isOpen}
                        aria-controls={`mobile-nav-${c.key}`}
                        aria-label={`${c.label} 메뉴 ${isOpen ? '접기' : '펼치기'}`}
                        className="mr-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-stone-400 active:bg-stone-100"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          aria-hidden
                        >
                          <path d="M5 8l5 5 5-5" />
                        </svg>
                      </button>
                    </div>

                    {isOpen && (
                      <ul id={`mobile-nav-${c.key}`} className="bg-stone-50 px-4 pb-2">
                        {c.nav.map(([href, label]) => (
                          <li key={href}>
                            <a
                              href={href}
                              onClick={() => setOpen(false)}
                              className="flex items-center justify-between border-b border-stone-200/60 py-3 text-[14px] font-bold text-stone-600 last:border-b-0 active:text-brand"
                            >
                              {label}
                              <span className="text-stone-300" aria-hidden>→</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* 언어 전환 — 국기 아이콘 없이 텍스트만 */}
            <div className="px-4 pt-4 pb-5">
              <p className="text-[11px] font-bold text-stone-400 uppercase tracking-widest mb-2">Language</p>
              <a
                href={enTarget}
                lang="en"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-3.5 py-2 text-[13px] font-bold text-stone-700 active:border-stone-400"
              >
                English
              </a>
            </div>
          </nav>
        </div>
      )}

    </header>
  )
}
