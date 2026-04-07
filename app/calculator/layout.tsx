import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '1인 네일샵 창업 계산기 2026 | 창업비용·예상수익·손익분기점',
  description: '네일샵 창업비용과 예상 수익을 직접 입력해 손익분기점까지 계산해보세요. 슬라이더로 간편하게 시뮬레이션.',
  alternates: { canonical: '/calculator' },
}

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
