#!/usr/bin/env node
/**
 * 예약 발행 — content/blog/drafts 에서 예약 시각이 지난 글을 content/blog/posts 로 옮긴다.
 * GitHub Actions(.github/workflows/blog-scheduled.yml)가 하루 여러 번 돌리고, 바뀐 게 있으면 커밋·푸시한다.
 *
 *   node scripts/blog-publish-due.mjs            옮기기
 *   node scripts/blog-publish-due.mjs --dry-run  대상만 출력
 *
 * 출력 마지막 줄 "PUBLISHED=<개수>" 를 워크플로가 읽는다.
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const DRAFTS = path.join(ROOT, 'content/blog/drafts')
const POSTS = path.join(ROOT, 'content/blog/posts')
const dryRun = process.argv.includes('--dry-run')

const now = new Date()
let count = 0

const files = fs.existsSync(DRAFTS) ? fs.readdirSync(DRAFTS).filter((f) => f.endsWith('.json')) : []
for (const f of files) {
  const src = path.join(DRAFTS, f)
  let post
  try {
    post = JSON.parse(fs.readFileSync(src, 'utf8'))
  } catch {
    console.warn(`읽을 수 없음: ${f}`)
    continue
  }
  if (post.status !== 'scheduled' || !post.scheduledAt) continue
  const when = new Date(post.scheduledAt)
  if (Number.isNaN(when.getTime()) || when > now) continue

  // 같은 주소의 발행본이 이미 있으면 건너뛴다(발행 API 가 막지만 손으로 고친 경우 대비)
  const clash = fs
    .readdirSync(POSTS)
    .filter((x) => x.endsWith('.json'))
    .some((x) => {
      try {
        const p = JSON.parse(fs.readFileSync(path.join(POSTS, x), 'utf8'))
        return p.id !== post.id && p.slug === post.slug
      } catch {
        return false
      }
    })
  if (clash) {
    console.warn(`건너뜀(주소 중복): /blog/${post.slug}`)
    continue
  }

  const t = now.toISOString()
  const next = {
    ...post,
    status: 'published',
    publishedAt: post.publishedAt ?? t,
    updatedAt: t,
    version: (post.version ?? 0) + 1,
  }
  delete next.scheduledAt
  console.log(`발행: /blog/${post.slug} (예약 ${post.scheduledAt})`)
  count++
  if (dryRun) continue
  fs.mkdirSync(POSTS, { recursive: true })
  fs.writeFileSync(path.join(POSTS, `${post.id}.json`), JSON.stringify(next, null, 2) + '\n')
  fs.unlinkSync(src)
}

console.log(`PUBLISHED=${count}`)
