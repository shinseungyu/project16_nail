import LangAttr from '@/components/en/LangAttr'

/**
 * /en 서브디렉터리 레이아웃.
 *
 * 자동 리다이렉트는 넣지 않는다. IP·브라우저 언어 기반 강제 이동은 크롤러가
 * 한쪽 언어만 보게 만들어 색인을 망가뜨린다. 언어 전환은 헤더의 KO/EN 링크로만 한다.
 */
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LangAttr lang="en" />
      {children}
    </>
  )
}
