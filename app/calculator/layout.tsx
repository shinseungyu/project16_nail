import type { Metadata } from 'next'

// page.tsx가 'use client'라 metadata를 export할 수 없어 layout에서 지정한다.
// 없으면 루트 layout의 canonical('/')을 상속해 홈의 중복이 된다.
export const metadata: Metadata = {
  title: { absolute: '네일샵 창업비용 계산기 | 항목별 입력하고 총액 확인' },
  description:
    '네일샵 창업비용을 항목별로 직접 입력해 총액을 계산합니다. 보증금·인테리어·장비·초도 재료·예비비까지 기본값을 조정해 내 조건에 맞는 금액을 확인하세요.',
  keywords: ['네일샵 창업비용 계산기', '네일샵 창업 비용', '네일샵 창업 자금', '1인 네일샵 창업비용'],
  alternates: { canonical: '/calculator' },
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: '창업비용 계산기', item: `${SITE_URL}/calculator` },
  ],
}

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  )
}
