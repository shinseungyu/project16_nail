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
};

export default nextConfig;
