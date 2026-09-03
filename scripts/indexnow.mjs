#!/usr/bin/env node
/**
 * IndexNow 제출기.
 *
 * IndexNow 는 "이 URL 이 바뀌었다"를 검색엔진에 즉시 알리는 프로토콜이다.
 * Bing · Yandex · Seznam · Naver 가 받는다. **구글은 참여하지 않는다** —
 * 구글은 여전히 사이트맵과 크롤링에 의존하므로 이 스크립트는 구글 색인과 무관하다.
 *
 * 사용법:
 *   node scripts/indexnow.mjs                 최근 7일 내 lastmod 인 URL만 제출
 *   node scripts/indexnow.mjs --since=7       일수 지정
 *   node scripts/indexnow.mjs --all           사이트맵 전체 제출
 *   node scripts/indexnow.mjs --dry-run       전송하지 않고 대상만 출력
 *
 * ⚠️ 바뀌지 않은 URL 을 반복 제출하면 스팸으로 간주되어 429 가 돌아온다.
 *    기본값이 "최근 것만"인 이유다. --all 은 수동으로만 쓸 것.
 *
 * lastmod 는 app/sitemap.ts 의 SITE_UPDATED 상수에서 나온다. 콘텐츠를 실제로
 * 고쳤을 때 그 상수를 올리는 것이 곧 "이것들을 다시 제출하라"는 신호가 된다.
 */

const HOST = 'www.nailstartup.com'
const KEY = 'fbef49b29c0944029986f81c7dfef0bd'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`
const SITEMAP = `https://${HOST}/sitemap.xml`
const ENDPOINT = 'https://api.indexnow.org/IndexNow'

/** IndexNow 응답 코드별 의미. 실패했을 때 원인을 바로 알 수 있게 적어둔다. */
const MEANING = {
  200: 'OK — 제출됨',
  202: '수락됨 — 키 확인 대기 중',
  400: 'Bad request — 요청 형식 오류',
  403: 'Forbidden — 키 파일을 못 찾거나 키가 일치하지 않음',
  422: 'Unprocessable — URL 이 host 에 속하지 않거나 키 스키마 불일치',
  429: 'Too Many Requests — 과다 제출(스팸으로 간주됨)',
}

const args = process.argv.slice(2)
const has = (f) => args.includes(f)
const valueOf = (name, fallback) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`))
  return hit ? hit.split('=')[1] : fallback
}

const submitAll = has('--all')
const dryRun = has('--dry-run')
const sinceDays = Number(valueOf('since', '7'))

async function main() {
  // 키 파일이 살아있지 않으면 무조건 403 이다. 제출 전에 먼저 확인한다.
  const keyRes = await fetch(KEY_LOCATION)
  if (!keyRes.ok) {
    console.error(`✗ 키 파일에 접근할 수 없습니다: ${KEY_LOCATION} (HTTP ${keyRes.status})`)
    console.error('  public/ 에 키 파일을 넣고 배포했는지 확인하세요.')
    process.exitCode = 1
    return
  }
  const keyBody = (await keyRes.text()).trim()
  if (keyBody !== KEY) {
    console.error(`✗ 키 파일 내용이 다릅니다. 기대값 ${KEY}, 실제 "${keyBody.slice(0, 40)}"`)
    process.exitCode = 1
    return
  }
  console.log(`✓ 키 파일 확인: ${KEY_LOCATION}`)

  const xml = await fetch(SITEMAP).then((r) => {
    if (!r.ok) throw new Error(`사이트맵 응답 ${r.status}`)
    return r.text()
  })

  // <url> 블록 단위로 loc 과 lastmod 를 같이 꺼낸다.
  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => {
    const block = m[1]
    const loc = /<loc>([^<]+)<\/loc>/.exec(block)?.[1]
    const lastmod = /<lastmod>([^<]+)<\/lastmod>/.exec(block)?.[1]
    return { loc, lastmod }
  })

  const cutoff = new Date(Date.now() - sinceDays * 86400_000)
  const selected = entries
    .filter((e) => e.loc && e.loc.startsWith(`https://${HOST}/`))
    .filter((e) => submitAll || (e.lastmod && new Date(e.lastmod) >= cutoff))
    .map((e) => e.loc)

  console.log(
    `사이트맵 ${entries.length}개 중 ${selected.length}개 선택 ` +
      (submitAll ? '(--all)' : `(최근 ${sinceDays}일 내 lastmod)`)
  )

  if (selected.length === 0) {
    console.log('제출할 URL이 없습니다. 콘텐츠가 바뀌지 않았다면 정상입니다.')
    return
  }

  if (dryRun) {
    selected.forEach((u) => console.log('  ' + u))
    console.log('\n--dry-run 이라 전송하지 않았습니다.')
    return
  }

  // IndexNow 는 요청당 10,000개까지 받는다. 여유 있게 나눠 보낸다.
  const CHUNK = 1000
  for (let i = 0; i < selected.length; i += CHUNK) {
    const urlList = selected.slice(i, i + CHUNK)
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
    })
    const label = MEANING[res.status] ?? '알 수 없는 응답'
    console.log(`[${i / CHUNK + 1}] ${urlList.length}개 → HTTP ${res.status} · ${label}`)
    if (res.status >= 400) {
      console.error(await res.text().catch(() => ''))
      process.exitCode = 1
      return
    }
  }

  console.log('\n완료. Bing 웹마스터도구 > IndexNow 에서 수신 여부를 확인할 수 있습니다.')
}

main().catch((e) => {
  console.error('✗ 실패:', e.message)
  process.exitCode = 1
})
