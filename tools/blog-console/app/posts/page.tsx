'use client'
// 발행 목록 — 사이트에 저장된 글 전체(초안·예약·발행). 편집 / 발행 취소 / 예약 취소 / 사이트에서 보기.
import { useEffect, useState } from 'react'
import type { BlogPostSummary } from '@site/lib/blog/types'

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
    </main>
  )
}
