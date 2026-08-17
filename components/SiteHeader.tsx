'use client'

import { usePathname } from 'next/navigation'

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
    nav: [['/skincare/cost', '창업비용'], ['/skincare/license', '자격증'], ['/skincare/revenue', '예상수익'], ['/skincare#calculator', '계산기']],
  },
  {
    key: 'makeup', home: '/makeup', icon: '💄', brand: '메이크업', label: '메이크업',
    nav: [['/makeup/cost', '창업비용'], ['/makeup/license', '자격증'], ['/makeup/revenue', '예상수익'], ['/makeup#calculator', '계산기']],
  },
  {
    key: 'hair', home: '/hair', icon: '💈', brand: '이용원', label: '이용원',
    nav: [['/hair/cost', '창업비용'], ['/hair/license', '자격증'], ['/hair/revenue', '예상수익'], ['/hair#calculator', '계산기']],
  },
  // 반영구화장은 문신사법 적용 대상. 창업 권유가 아닌 정보 제공 클러스터라 nav 구성이 다르다.
  {
    key: 'semi-permanent', home: '/semi-permanent', icon: '🖊️', brand: '반영구화장', label: '반영구화장', suffix: '정보',
    nav: [['/semi-permanent/legal', '자격·법'], ['/semi-permanent/law-timeline', '시행일정'], ['/semi-permanent/price', '가격'], ['/semi-permanent/removal', '제거']],
  },
]

export default function SiteHeader() {
  const pathname = usePathname() || '/'
  const active =
    CATEGORIES.find((c) => c.key !== 'nail' && (pathname === c.home || pathname.startsWith(c.home + '/'))) ?? CATEGORIES[0]
  const others = CATEGORIES.filter((c) => c.key !== active.key)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100/50">
      <div className="max-w-[1100px] mx-auto px-4 h-16 flex items-center justify-between">
        <a href={active.home} className="font-bold text-lg text-stone-900 tracking-tight flex items-center gap-2">
          <span className="text-xl">{active.icon}</span>
          <span>{active.brand} <span className="text-brand">{active.suffix ?? '창업'}</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-5 text-[13px] text-stone-500 font-semibold uppercase tracking-wide">
          {active.nav.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-brand transition-colors">{label}</a>
          ))}
          <span className="w-px h-4 bg-stone-200" aria-hidden />
          {others.map((c) => (
            <a key={c.key} href={c.home} className="text-brand hover:opacity-70 transition-opacity">{c.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
