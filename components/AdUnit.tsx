'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

type Props = {
  /** AdSense 광고 단위 슬롯 ID (한 페이지에 같은 슬롯을 2번 쓰지 말 것) */
  slot: string
  /** 광고 포맷. 기본 'auto'(디스플레이). 인아티클 광고는 'fluid' */
  format?: string
  /** 인아티클 광고용 레이아웃 (예: 'in-article'). 있으면 fluid 인아티클로 렌더 */
  layout?: string
  /** auto 포맷일 때 전체 폭 반응형 여부 (기본 true) */
  responsive?: boolean
  /** 광고 로드 전후 레이아웃 밀림(CLS) 방지용 최소 높이 */
  minHeight?: number
}

/**
 * AdSense 광고 단위. 로더 스크립트(adsbygoogle.js)는 app/layout.tsx <head>에 1번만 넣는다.
 * Next.js는 라우트 이동 시 이 컴포넌트가 새로 마운트되어 useEffect가 다시 push 하므로 SPA에서도 광고가 뜬다.
 *
 * 사용 예)
 *   <AdUnit slot="7150499722" />                              // auto 디스플레이(사이드바/배너)
 *   <AdUnit slot="3886825955" format="fluid" layout="in-article" />  // 인아티클
 */
export default function AdUnit({ slot, format = 'auto', layout, responsive = true, minHeight = 280 }: Props) {
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current) return
    try {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
      pushed.current = true
    } catch (e) {
      console.error('adsbygoogle push failed', e)
    }
  }, [])

  const insProps: Record<string, string> = {
    'data-ad-client': 'ca-pub-5378247298190063',
    'data-ad-slot': slot,
    'data-ad-format': format,
  }
  if (layout) {
    insProps['data-ad-layout'] = layout
  } else if (responsive) {
    insProps['data-full-width-responsive'] = 'true'
  }

  return (
    <div style={{ minHeight, margin: '28px 0', overflow: 'hidden', textAlign: 'center' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...(layout ? { textAlign: 'center' } : {}) }}
        {...insProps}
      />
    </div>
  )
}
