// 상위글 HTML 가져오기 (서버 전용)
//  - 네이버 블로그는 PC 주소가 프레임이라 본문이 없다 → 모바일 주소(m.blog.naver.com)로 바꿔서 받는다.
//  - EUC-KR 페이지도 깨지지 않게 문자셋을 읽어 디코딩한다.

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
const MAX_BYTES = 4 * 1024 * 1024

export function normalizeUrl(raw: string): string {
  try {
    const u = new URL(raw.trim())
    if (u.hostname === 'blog.naver.com' || u.hostname === 'm.blog.naver.com') {
      const blogId = u.searchParams.get('blogId')
      const logNo = u.searchParams.get('logNo')
      if (blogId && logNo) return `https://m.blog.naver.com/${blogId}/${logNo}`
      const m = u.pathname.match(/^\/([^/]+)\/(\d+)/)
      if (m) return `https://m.blog.naver.com/${m[1]}/${m[2]}`
    }
    u.hash = ''
    return u.toString()
  } catch {
    return raw.trim()
  }
}

function charsetOf(contentType: string | null, head: string): string {
  const fromHeader = contentType?.match(/charset=([\w-]+)/i)?.[1]
  const fromMeta = head.match(/<meta[^>]+charset=["']?([\w-]+)/i)?.[1]
  const cs = (fromHeader || fromMeta || 'utf-8').toLowerCase()
  return cs === 'ks_c_5601-1987' || cs === 'euc_kr' ? 'euc-kr' : cs
}

export async function fetchHtml(rawUrl: string): Promise<{ url: string; html: string; ok: boolean; error?: string }> {
  const url = normalizeUrl(rawUrl)
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': UA, 'Accept-Language': 'ko-KR,ko;q=0.9', Accept: 'text/html,application/xhtml+xml' },
      redirect: 'follow',
      signal: AbortSignal.timeout(20_000),
    })
    if (!res.ok) return { url, html: '', ok: false, error: `HTTP ${res.status}` }
    const buf = new Uint8Array(await res.arrayBuffer()).slice(0, MAX_BYTES)
    const head = new TextDecoder('latin1').decode(buf.slice(0, 4096))
    let html: string
    try {
      html = new TextDecoder(charsetOf(res.headers.get('content-type'), head)).decode(buf)
    } catch {
      html = new TextDecoder('utf-8').decode(buf)
    }
    return { url: res.url || url, html, ok: true }
  } catch (e) {
    return { url, html: '', ok: false, error: e instanceof Error ? e.message : String(e) }
  }
}
