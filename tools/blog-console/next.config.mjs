/**
 * 콘솔은 사이트 레포 안(tools/blog-console)에 있지만 따로 돈다(npm run dev → localhost:3060).
 * 사이트의 블로그 틀·마크다운 렌더러·발행 검증을 레포 밖 경로(@site/…)로 그대로 가져다 쓴다
 * → 콘솔 미리보기 = 실제 발행 모양, 콘솔 검사 = 발행 API 검사.
 */
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
    serverComponentsExternalPackages: ['jsdom', '@mozilla/readability', 'playwright-core'],
  },
  webpack(config) {
    // 사이트 폴더의 파일이 react 를 찾을 때도 콘솔 것 하나만 쓰게 고정(리액트 두 벌 방지)
    config.resolve.alias = {
      ...config.resolve.alias,
      '@site': path.resolve(here, '../..'),
    }
    config.resolve.modules = [path.resolve(here, 'node_modules'), 'node_modules']
    return config
  },
}

export default nextConfig
