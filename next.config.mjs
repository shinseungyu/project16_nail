/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  // experimental: {
  //   optimizeCss: true,
  // },

  /**
   * non-www → www 영구 리다이렉트.
   *
   * 2026-08-17 커밋 4720bc4 에서 canonical·sitemap·JSON-LD 를 전부 www 로 바꿨는데,
   * 정작 호스트 리다이렉트는 307 Temporary 로 남아 있었다. 307 은 "원래 URL 을 계속 쓰라"는
   * 뜻이라 구글이 www 를 정규로 승격시킬 이유가 없고, 실제로 그 날짜부터 GSC
   * "발견됨 - 현재 색인이 생성되지 않음" 이 15개에서 109개로 튀었다.
   *
   * permanent: true 는 308(=301 과 같은 영구 이전 신호)로 나간다.
   *
   * ⚠️ Vercel 대시보드에서 도메인 리다이렉트가 설정돼 있으면 엣지에서 먼저 처리되어
   *    이 설정까지 오지 않는다. 배포 후 `curl -sI https://nailstartup.com/` 로
   *    308 인지 반드시 확인하고, 여전히 307 이면 Vercel > Settings > Domains 에서
   *    apex 도메인의 리다이렉트를 Permanent 로 바꿔야 한다.
   */
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'nailstartup.com' }],
        destination: 'https://www.nailstartup.com/:path*',
        permanent: true,
      },
    ]
  },

  /**
   * 최적화 이미지(/_next/image) 캐시 수명.
   *
   * 기본값은 60초다. 게다가 Next 의 이미지 최적화는 **원본의 Cache-Control 을 물려받는데**,
   * public/ 파일은 아래 headers() 가 없으면 max-age=0, must-revalidate 로 나간다.
   * 그래서 폭(w=384·640·1080·1920·2048…)마다 만들어지는 변형본이 전부 매번 다시 내려갔다.
   * GSC 크롤링 통계에서 304 가 1% 미만이고 '페이지 리소스 로드'가 29% 를 차지하던 원인이다.
   */
  images: {
    minimumCacheTTL: 2592000, // 30일
  },

  /**
   * public/images 정적 이미지 캐시.
   *
   * /_next/static 은 파일명에 해시가 붙어 Next 가 알아서 immutable 로 내보내지만,
   * public/ 은 파일명이 고정이라 Vercel 이 안전하게 max-age=0 으로 내보낸다.
   * 그 값이 위 이미지 최적화까지 그대로 전파되므로 여기서 한 번에 올린다.
   *
   * ⚠️ 파일명이 고정이라는 뜻은, 같은 이름으로 이미지를 교체하면 30일 동안 옛 이미지가
   *    남는다는 뜻이다. 이미지를 바꿀 때는 파일명을 함께 바꿀 것.
   *    (지금도 검색 노출을 고려한 키워드 파일명을 쓰고 있으니 규칙만 지키면 된다)
   */
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000' }],
      },
    ]
  },
};

export default nextConfig;
