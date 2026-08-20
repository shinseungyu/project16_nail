'use client'

import { useEffect } from 'react'

/**
 * <html lang> 전환용.
 *
 * Next 14 App Router는 루트 레이아웃 하나만 <html>을 렌더한다. 한국어 라우트 전체를
 * route group으로 옮기면 서버에서 lang을 바꿀 수 있지만, 살아있는 색인·랭킹을 가진
 * 40여 개 경로를 통째로 이동시키는 리스크가 더 크다. 그래서 /en 레이아웃에서
 * 클라이언트로 lang만 교체한다. hreflang·canonical·og:locale은 전부 서버에서
 * 정상 출력되므로 색인 판단에 필요한 신호는 모두 HTML 소스에 남는다.
 */
export default function LangAttr({ lang }: { lang: string }) {
  useEffect(() => {
    const el = document.documentElement
    const prev = el.lang
    el.lang = lang
    return () => {
      el.lang = prev
    }
  }, [lang])

  return null
}
