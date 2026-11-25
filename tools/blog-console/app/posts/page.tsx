'use client'
// 발행 목록 — 사이트에 저장된 글 전체(초안·예약·발행). 편집 / 발행 취소 / 예약 취소 / 사이트에서 보기.
//  + 발행 캘린더(주별 편수·과다 경고) + 구글 색인 요청 대기열 + 검색 캐시 관리 (project15 발행 후 패널 대응)
import { useEffect, useState } from 'react'
import type { BlogPostSummary } from '@site/lib/blog/types'
import { PACING, fmtKst, weekPlan } from '@/lib/pacing'

interface QueueItem {
  slug: string
  title: string
  url: string
  publishedAt: string
  ageDays: number
  requestedAt: string | null
  stale: boolean
  inspectUrl: string
}

interface CacheItem {
  keyword: string
  provider: string
  fetchedAt: string
  expired: boolean
  count: number
}

function AfterPublish({ posts }: { posts: BlogPostSummary[] }) {
  const [queue, setQueue] = useState<{ items: QueueItem[]; gscProperty: string } | null>(null)
  const [qErr, setQErr] = useState('')
  const [cache, setCache] = useState<CacheItem[]>([])

  async function loadQueue() {
    setQErr('')
    try {
      const r = await fetch('/api/index-queue')
      const b = await r.json()
      if (!r.ok) throw new Error(b.error ?? `오류 ${r.status}`)
      setQueue(b)
    } catch (e) {
      setQErr((e as Error).message)
    }
  }
  const loadCache = () =>
    fetch('/api/cache')
      .then((r) => r.json())
      .then((b) => setCache(b.items ?? []))
      .catch(() => undefined)

  useEffect(() => {
    loadQueue()
    loadCache()
  }, [posts.length])

  async function mark(slug: string, done: boolean) {
    await fetch('/api/index-queue', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug, done }) })
    loadQueue()
  }

  async function dropCache(keyword: string) {
    await fetch(`/api/cache?keyword=${encodeURIComponent(keyword)}`, { method: 'DELETE' })
    loadCache()
  }

  const plan = weekPlan(posts)
  const pending = queue?.items.filter((i) => !i.requestedAt) ?? []
  const stale = queue?.items.filter((i) => i.stale) ?? []

  return (
    <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
      <section className="card">
        <h2 className="mb-1 text-[15px] font-extrabold">발행 캘린더</h2>
        <p className="mb-3 text-[12px] text-stone-500">
          주 {PACING.maxPerWeek}편 이하 · 같은 카테고리 주 {PACING.maxPerCategoryPerWeek}편 이하 · 글 사이 {PACING.minGapHours}시간 이상 권장 (config/publish-pacing.json)
        </p>
        <ul className="space-y-2 text-[13px]">
          {plan.map((w) => (
            <li key={w.label} className={`rounded-lg px-3 py-2 ${w.over ? 'bg-amber-50' : 'bg-stone-50'}`}>
              <b>{w.label}</b> <span className="text-[11px] text-stone-500">{w.items.length}편{w.over && ' ⚠️ 많음'}</span>
              {w.items.length > 0 && (
                <ul className="mt-1 space-y-0.5 text-[12px] text-stone-600">
                  {w.items.map(({ p, t }) => (
                    <li key={p.id}>
                      {p.status === 'scheduled' ? '⏰' : '✅'} {fmtKst(t)} · <span className="text-stone-400">{p.category}</span> · {p.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className="mb-1 text-[15px] font-extrabold">
          구글 색인 요청 대기열{' '}
          {queue && (
            <span className="text-[12px] font-semibold text-stone-500">
              미처리 {pending.length}
              {stale.length > 0 && <span className="text-red-600"> · {PACING.indexQueueStaleDays}일 넘음 {stale.length}</span>}
            </span>
          )}
        </h2>
        <p className="mb-3 text-[12px] leading-relaxed text-stone-500">
          구글은 블로그 글 색인 요청을 API 로 받지 않습니다. "URL 검사"를 눌러 Search Console 에서 <b>색인 생성 요청</b>을 누른 뒤 체크하세요. Bing·네이버 등은 IndexNow 로 자동 제출됩니다.
          {queue && <span className="mono block text-[11px] text-stone-400">속성: {queue.gscProperty} (다르면 .env.local 의 GSC_PROPERTY)</span>}
        </p>
        {qErr && <p className="rounded-lg bg-red-50 px-3 py-2 text-[12px] text-red-700">{qErr}</p>}
        {queue && queue.items.length === 0 && <p className="text-[13px] text-stone-400">발행된 글이 없습니다.</p>}
        <ul className="space-y-1.5 text-[13px]">
          {queue?.items.map((i) => (
            <li key={i.slug} className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${i.stale ? 'bg-red-50' : ''}`}>
              <input type="checkbox" checked={!!i.requestedAt} onChange={(e) => mark(i.slug, e.target.checked)} title="색인 요청 완료" />
              <span className="min-w-0 flex-1 truncate">
                {i.title} <span className="text-[11px] text-stone-400">· {Math.floor(i.ageDays)}일 전</span>
              </span>
              <a className="btn-line shrink-0" href={i.inspectUrl} target="_blank" rel="noreferrer">
                URL 검사
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="card lg:col-span-2">
        <h2 className="mb-1 text-[15px] font-extrabold">검색 캐시 (7일)</h2>
        <p className="mb-2 text-[12px] text-stone-500">같은 키워드는 7일 동안 크롬·DataForSEO 를 다시 안 부릅니다. 지우면 다음 검색 때 새로 가져옵니다.</p>
        {cache.length === 0 ? (
          <p className="text-[13px] text-stone-400">저장된 검색이 없습니다.</p>
        ) : (
          <ul className="flex flex-wrap gap-1.5 text-[12px]">
            {cache.map((c) => (
              <li key={c.keyword} className={`flex items-center gap-1 rounded-full px-2.5 py-1 ${c.expired ? 'bg-stone-100 text-stone-400' : 'bg-stone-100 text-stone-700'}`}>
                {c.keyword} <span className="text-[10px] text-stone-400">{c.provider === 'chrome' ? '크롬' : 'DFS'} · {new Date(c.fetchedAt).toLocaleDateString('ko-KR')}</span>
                <button className="ml-1 text-stone-400 hover:text-red-600" onClick={() => dropCache(c.keyword)} title="캐시 삭제">
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

const LABEL: Record<string, { text: string; cls: string }> = {
  draft: { text: '초안', cls: 'bg-stone-100 text-stone-600' },
  scheduled: { text: '예약', cls: 'bg-amber-100 text-amber-800' },
  published: { text: '발행됨', cls: 'bg-emerald-100 text-emerald-700' },
}

const fmt = (iso?: string) => (iso ? new Date(iso).toLocaleString('ko-KR', { dateStyle: 'short', timeStyle: 'short' }) : '-')

export default function PostsPage() {
  const [posts, setPosts] = useState<BlogPostSummary[] | null>(null)
  const [siteUrl, setSiteUrl] = useState('https://www.nailstartup.com')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState('')

  async function load() {
    setError('')
    try {
      const res = await fetch('/api/site/blog/posts')
      const body = await res.json()
      if (!res.ok) throw new Error(body.error ?? `오류 ${res.status}`)
      setPosts(body.data.posts)
    } catch (e) {
      setError((e as Error).message)
      setPosts([])
    }
  }

  useEffect(() => {
    load()
    fetch('/api/budget')
      .then((r) => r.json())
      .then((s) => s?.site?.siteUrl && setSiteUrl(s.site.siteUrl))
      .catch(() => undefined)
  }, [])

  async function unpublish(p: BlogPostSummary) {
    const what = p.status === 'published' ? '발행을 취소(사이트에서 내림)' : '예약을 취소'
    if (!confirm(`"${p.title}" ${what}할까요? 초안으로 돌아갑니다.`)) return
    setBusy(p.id)
    try {
      const res = await fetch(`/api/site/blog/posts/${p.id}/unpublish`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ version: p.version }),
      })
      const body = await res.json()
      if (!res.ok) throw new Error(body.error ?? `오류 ${res.status}`)
      await load()
    } catch (e) {
      alert((e as Error).message)
    } finally {
      setBusy('')
    }
  }

  const counts = (posts ?? []).reduce<Record<string, number>>((m, p) => ((m[p.status] = (m[p.status] ?? 0) + 1), m), {})

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-6">
      <div className="mb-4 flex items-center gap-3">
        <h1 className="text-[18px] font-extrabold">발행 목록</h1>
        <span className="text-[12px] text-stone-500">
          발행 {counts.published ?? 0} · 예약 {counts.scheduled ?? 0} · 초안 {counts.draft ?? 0}
        </span>
        <button className="btn-line ml-auto" onClick={load}>
          새로고침
        </button>
        <a className="btn-dark" href="/">
          새 글 쓰기
        </a>
      </div>
      {error && <p className="mb-3 rounded-xl bg-red-50 px-4 py-2.5 text-[13px] font-semibold text-red-700">{error}</p>}
      {posts === null ? (
        <p className="text-[13px] text-stone-400">불러오는 중…</p>
      ) : posts.length === 0 ? (
        <p className="card text-center text-[13px] text-stone-500">아직 글이 없습니다.</p>
      ) : (
        <div className="card overflow-x-auto p-0">
          <table className="w-full text-[13px]">
            <thead className="bg-stone-50 text-left text-[12px] text-stone-500">
              <tr>
                <th className="px-4 py-3">상태</th>
                <th className="px-4 py-3">제목 / 주소</th>
                <th className="px-4 py-3">카테고리</th>
                <th className="px-4 py-3">발행·예약</th>
                <th className="px-4 py-3">수정</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {posts.map((p) => (
                <tr key={p.id} className="hover:bg-stone-50/60">
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${LABEL[p.status]?.cls}`}>{LABEL[p.status]?.text}</span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-semibold text-stone-800">{p.title}</p>
                    <p className="mono text-[11px] text-stone-400">/blog/{p.slug}</p>
                  </td>
                  <td className="px-4 py-3 text-stone-600">{p.category}</td>
                  <td className="px-4 py-3 text-stone-600">{p.status === 'scheduled' ? `⏰ ${fmt(p.scheduledAt)}` : fmt(p.publishedAt)}</td>
                  <td className="px-4 py-3 text-stone-500">
                    {fmt(p.updatedAt)} · v{p.version}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-right">
                    <a className="btn-line mr-1" href={`/?id=${p.id}`}>
                      편집
                    </a>
                    {p.status === 'published' && (
                      <a className="btn-line mr-1" href={`${siteUrl}/blog/${p.slug}`} target="_blank" rel="noreferrer">
                        보기
                      </a>
                    )}
                    {p.status !== 'draft' && (
                      <button className="btn-line text-red-600" disabled={busy === p.id} onClick={() => unpublish(p)}>
                        {p.status === 'published' ? '내리기' : '예약 취소'}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <AfterPublish posts={posts ?? []} />
    </main>
  )
}
