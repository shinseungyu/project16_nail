import Link from 'next/link'

type Item = { href: string; label: string; icon: string }

// 허브 히어로에 넣는 "같은 업종" 핵심 내부링크 칩 (창업비용·자격증·예상수익·계산기)
export default function HubQuickLinks({ items, dark = false }: { items: Item[]; dark?: boolean }) {
  const cls = dark
    ? 'inline-flex items-center gap-1.5 bg-white/15 border border-white/25 rounded-full px-4 py-2 text-[13px] font-bold text-white hover:bg-white/25 transition-colors backdrop-blur-sm'
    : 'inline-flex items-center gap-1.5 bg-white/90 border border-stone-200 rounded-full px-4 py-2 text-[13px] font-bold text-stone-700 hover:border-stone-400 hover:text-stone-900 shadow-sm transition-colors'
  return (
    <div className={`flex flex-wrap gap-2 ${dark ? 'justify-center' : ''}`}>
      {items.map((it) => (
        <Link key={it.href} href={it.href} className={cls}>
          <span aria-hidden>{it.icon}</span>{it.label}
        </Link>
      ))}
    </div>
  )
}
