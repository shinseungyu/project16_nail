// 콘솔 환경설정 (서버 전용 — 토큰은 브라우저로 보내지 않는다)
import path from 'node:path'

const apiBase = (process.env.BLOG_API_BASE_URL || 'https://www.nailstartup.com/api/studio').replace(/\/+$/, '')
const apiOrigin = (() => {
  try {
    return new URL(apiBase).origin
  } catch {
    return ''
  }
})()

export const env = {
  apiBase,
  /**
   * 미리보기에서 /images/blog/… 를 어디서 불러올지.
   * 올린 이미지는 글을 발행해야 사이트에 배포되므로, 그 전에는 레포 원본(공개 레포)에서 보여준다.
   * 내 PC 사이트(localhost)로 테스트할 때는 그 서버에서.
   */
  previewImageBase:
    process.env.PREVIEW_IMAGE_BASE ||
    (/localhost|127\.0\.0\.1/.test(apiOrigin) ? apiOrigin : 'https://raw.githubusercontent.com/shinseungyu/project16_nail/master/public'),
  apiToken: process.env.BLOG_API_TOKEN || '',
  siteUrl: (process.env.SITE_URL || (/localhost|127\.0\.0\.1/.test(apiOrigin) ? apiOrigin : 'https://www.nailstartup.com')).replace(/\/+$/, ''),
  chromeHeadless: (process.env.CHROME_HEADLESS ?? 'true').toLowerCase() !== 'false',
  dfs: {
    enabled: (process.env.DATAFORSEO_ENABLED ?? 'false').toLowerCase() === 'true',
    login: process.env.DATAFORSEO_LOGIN || '',
    password: process.env.DATAFORSEO_PASSWORD || '',
    /** 하루(한국 날짜) 사용액 한도. 기본 $1 */
    dailyBudgetUsd: Number(process.env.DATAFORSEO_DAILY_BUDGET_USD || '1') || 1,
  },
}

/** 캐시·기록 폴더 (git 에 안 올라감) */
export const DATA_DIR = path.join(process.cwd(), '.data')

/** 한국 날짜 YYYY-MM-DD */
export function kstDate(d = new Date()): string {
  return new Date(d.getTime() + 9 * 3600_000).toISOString().slice(0, 10)
}
