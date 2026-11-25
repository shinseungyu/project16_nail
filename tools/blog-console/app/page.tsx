'use client'
// ===========================================================================
//  블로그 콘솔 — project15 블로그 탭과 같은 흐름 (한국 구글 기준)
//   ① 키워드 → 상위글 찾기(크롬 무료 / URL 직접 / DataForSEO 유료·한도) + 지면 강도(이길 수 있나)
//   ② 고른 글 분석 → 검색의도·공통 주제·빈틈(차별화) → (목차 먼저) → 완성 프롬프트 (채팅 AI 에 붙여넣기)
//   ③ AI 결과 붙여넣기 → 제목·설명·주소·카테고리 자동 채움 → 본문 수정·이미지
//   ④ 검수 (발행 조건 + 표현 위험 + 상위글 유사도 + 문체·지난 글 중복·키워드 겹침)
//   ⑤ 사람 확인 체크 → 초안 저장 / 바로 발행 / 예약 발행(페이싱 추천 시각) → 발행 이력 저장
//  오른쪽 미리보기는 사이트와 같은 컴포넌트(BlogArticle)라 발행 모양 그대로다.
// ===========================================================================
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import BlogArticle from '@site/components/blog/BlogArticle'
import { parseArticle } from '@site/lib/blog/markdown'
import { validatePost, type BlogIssue } from '@site/lib/blog/validate'
import { CATEGORY_KEYS } from '@site/lib/blog/config'
import type { BlogContent, BlogCover, BlogPost, BlogPostSummary } from '@site/lib/blog/types'
import { buildOutlinePrompt, buildPrompt } from '@/lib/prompt'
import { parsePasted } from '@/lib/parse-pasted'
import { reviewContent, type ReviewFinding } from '@/lib/review'
import { closingSentences, styleReview, topPhrases, type HistoryEntry } from '@/lib/style-review'
import { checkPacing, fmtKst, suggestSlot, toLocalInput, effectiveSlot } from '@/lib/pacing'
import { SOURCE_LABEL } from '@/lib/gap'
import { toWebp } from '@/lib/image'
import type { AnalyzeResponse, Candidate, InternalLink, SerpProvider, SerpResponse } from '@/lib/types'

type Provider = SerpProvider | 'manual'

interface Form {
  title: string
  seoTitle: string
  description: string
  slug: string
  category: string
  tagsText: string
  keyword: string
  markdown: string
  cover?: BlogCover
}

const EMPTY_FORM: Form = { title: '', seoTitle: '', description: '', slug: '', category: '', tagsText: '', keyword: '', markdown: '' }
const LS_KEY = 'nailstartup-blog-console:v1'

interface Status {
  dfs: { date: string; usd: number; calls: number; budget: number; enabled: boolean }
  site: { apiBase: string; tokenSet: boolean; siteUrl: string; previewImageBase: string }
}

class ApiErr extends Error {
  constructor(message: string, public status: number, public details?: { issues?: { field: string; message: string }[] }) {
    super(message)
  }
}

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(path, {
    ...init,
    headers: init?.body ? { 'Content-Type': 'application/json' } : undefined,
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok) throw new ApiErr(body.error ?? `오류 ${res.status}`, res.status, body.details)
  return body as T
}

const toContent = (f: Form): BlogContent => ({
  title: f.title.trim(),
  seoTitle: f.seoTitle.trim() || undefined,
  description: f.description.trim(),
  slug: f.slug.trim().toLowerCase(),
  category: f.category,
  tags: f.tagsText.split(/[,，]/).map((t) => t.trim()).filter(Boolean),
  keyword: f.keyword.trim() || undefined,
  markdown: f.markdown,
  cover: f.cover,
})

const fromPost = (p: BlogPost): Form => ({
  title: p.title,
  seoTitle: p.seoTitle ?? '',
  description: p.description,
  slug: p.slug,
  category: p.category,
  tagsText: p.tags.join(', '),
  keyword: p.keyword ?? '',
  markdown: p.markdown,
  cover: p.cover,
})

const STATUS_LABEL: Record<string, string> = { draft: '초안', scheduled: '예약', published: '발행됨' }

export default function ConsolePage() {
  const [status, setStatus] = useState<Status | null>(null)
  const [notice, setNotice] = useState<{ kind: 'ok' | 'err' | 'info'; text: string; issues?: { field: string; message: string }[] } | null>(null)

  // ① 검색
  const [keyword, setKeyword] = useState('')
  const [provider, setProvider] = useState<Provider>('chrome')
  const [serp, setSerp] = useState<SerpResponse | null>(null)
  const [selected, setSelected] = useState<string[]>([])
  const [manualUrls, setManualUrls] = useState('')
  const [busy, setBusy] = useState<string>('')

  // ② 분석·프롬프트
  const [analysis, setAnalysis] = useState<AnalyzeResponse | null>(null)
  const [links, setLinks] = useState<InternalLink[]>([])
  const [linkOff, setLinkOff] = useState<string[]>([])
  const [facts, setFacts] = useState('')
  /** 사람이 고른 빈틈(차별화 포인트) key — null 이면 추천 1순위 */
  const [gapPicks, setGapPicks] = useState<string[] | null>(null)
  // 목차 먼저: ① 목차 프롬프트 → 받은 목차를 고쳐 확정 → ② 본문 프롬프트에 들어간다
  const [outlineFirst, setOutlineFirst] = useState(true)
  const [outline, setOutline] = useState('')

  // 지난 글 대조용 (발행 이력 · 사이트 글 목록)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [sitePosts, setSitePosts] = useState<BlogPostSummary[]>([])

  // ③ 원고
  const [pasted, setPasted] = useState('')
  const [form, setForm] = useState<Form>(EMPTY_FORM)
  const [titleCands, setTitleCands] = useState<string[]>([])
  const [post, setPost] = useState<BlogPost | null>(null)
  const [savedKey, setSavedKey] = useState('')
  const [localImages, setLocalImages] = useState<Record<string, string>>({})
  const mdRef = useRef<HTMLTextAreaElement>(null)

  // ⑤ 발행
  const [approve, setApprove] = useState({ facts: false, wording: false, read: false, images: false })
  const [scheduleAt, setScheduleAt] = useState('')
  const [restored, setRestored] = useState(false)

  const set = <K extends keyof Form>(k: K, v: Form[K]) => setForm((f) => ({ ...f, [k]: v }))

  // ── 처음: 상태 + (?id= 이면 그 글 불러오기 / 아니면 작업 백업 복원) ──
  const loadContext = useCallback(() => {
    api<{ history: HistoryEntry[] }>('/api/history')
      .then((r) => setHistory(r.history))
      .catch(() => undefined)
    api<{ data: { posts: BlogPostSummary[] } }>('/api/site/blog/posts')
      .then((r) => setSitePosts(r.data.posts))
      .catch(() => undefined)
  }, [])

  useEffect(() => {
    api<Status>('/api/budget').then(setStatus).catch(() => undefined)
    loadContext()
    const id = new URLSearchParams(window.location.search).get('id')
    if (id) {
      api<{ data: { post: BlogPost } }>(`/api/site/blog/posts/${id}`)
        .then(({ data }) => {
          setPost(data.post)
          setForm(fromPost(data.post))
          setKeyword(data.post.keyword ?? '')
          setSavedKey(JSON.stringify(toContent(fromPost(data.post))))
          setNotice({ kind: 'info', text: `"${data.post.title}" (${STATUS_LABEL[data.post.status]}, v${data.post.version}) 을 불러왔습니다.` })
        })
        .catch((e) => setNotice({ kind: 'err', text: `글을 불러오지 못했습니다: ${e.message}` }))
        .finally(() => setRestored(true))
      return
    }
    try {
      const raw = localStorage.getItem(LS_KEY)
      if (raw) {
        const s = JSON.parse(raw)
        setKeyword(s.keyword ?? '')
        setProvider(s.provider ?? 'chrome')
        setSerp(s.serp ?? null)
        setSelected(s.selected ?? [])
        setManualUrls(s.manualUrls ?? '')
        setAnalysis(s.analysis ?? null)
        setLinks(s.links ?? [])
        setLinkOff(s.linkOff ?? [])
        setFacts(s.facts ?? '')
        setPasted(s.pasted ?? '')
        setForm({ ...EMPTY_FORM, ...(s.form ?? {}) })
        setPost(s.post ?? null)
        setSavedKey(s.savedKey ?? '')
        setTitleCands(s.titleCands ?? [])
        setGapPicks(s.gapPicks ?? null)
        setOutlineFirst(s.outlineFirst ?? true)
        setOutline(s.outline ?? '')
      }
    } catch {
      /* 백업 없음 */
    }
    setRestored(true)
  }, [])

  // ── 작업 백업(브라우저) — 새로고침해도 이어서 ──
  useEffect(() => {
    if (!restored) return
    const t = setTimeout(() => {
      const s = { keyword, provider, serp, selected, manualUrls, analysis, links, linkOff, facts, pasted, form, post, savedKey, titleCands, gapPicks, outlineFirst, outline }
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(s))
      } catch {
        try {
          localStorage.setItem(LS_KEY, JSON.stringify({ ...s, analysis: analysis ? { ...analysis, sourceTexts: [] } : null }))
        } catch {
          /* 용량 초과 — 백업 생략 */
        }
      }
    }, 600)
    return () => clearTimeout(t)
  }, [restored, keyword, provider, serp, selected, manualUrls, analysis, links, linkOff, facts, pasted, form, post, savedKey, titleCands, gapPicks, outlineFirst, outline])

  // ── 파생 값 ──
  const content = useMemo(() => toContent(form), [form])
  const contentKey = useMemo(() => JSON.stringify(content), [content])
  const dirty = contentKey !== savedKey
  const parsed = useMemo(() => parseArticle(form.markdown), [form.markdown])
  const issues: BlogIssue[] = useMemo(() => validatePost(content, { parsed }), [content, parsed])
  const review = useMemo(
    () => reviewContent({ title: form.title, description: form.description, markdown: form.markdown, keyword: form.keyword }, analysis?.sourceTexts ?? [], parsed),
    [form.title, form.description, form.markdown, form.keyword, analysis, parsed]
  )
  const style = useMemo(
    () =>
      styleReview(
        { title: form.title, markdown: form.markdown, keyword: form.keyword, faqQuestions: parsed.faq.map((f) => f.q), postId: post?.id },
        { history, posts: sitePosts }
      ),
    [form.title, form.markdown, form.keyword, parsed, post?.id, history, sitePosts]
  )
  const allFindings: ReviewFinding[] = useMemo(
    () =>
      [...issues.map((i) => ({ level: i.level, category: i.field, message: i.message }) as ReviewFinding), ...review.findings, ...style].sort((a, b) =>
        a.level === b.level ? 0 : a.level === 'block' ? -1 : 1
      ),
    [issues, review.findings, style]
  )
  const blockCount = allFindings.filter((f) => f.level === 'block').length
  const warnCount = allFindings.filter((f) => f.level === 'warn').length
  const hasImages = !!form.cover || parsed.images.length > 0
  const approved = approve.facts && approve.wording && approve.read && (!hasImages || approve.images)
  const activeLinks = links.filter((l) => !linkOff.includes(l.href))

  // 빈틈: 사람이 안 골랐으면 추천 1순위
  const pickedGapKeys = gapPicks ?? (analysis?.gap?.recommended ? [analysis.gap.recommended] : [])
  const pickedGaps = (analysis?.gap?.gaps ?? []).filter((g) => pickedGapKeys.includes(g.key))
  const promptInput = useMemo(
    () => ({
      keyword: keyword.trim(),
      summary: analysis?.summary ?? null,
      links: activeLinks,
      facts,
      intent: analysis?.intent ?? null,
      gap: analysis?.gap ?? null,
      gapPicks: pickedGaps,
      features: serp?.features ?? null,
      guides: serp?.strength?.guides ?? [],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [keyword, analysis, links, linkOff, facts, gapPicks, serp]
  )
  const outlinePrompt = useMemo(() => (keyword.trim() ? buildOutlinePrompt(promptInput) : ''), [keyword, promptInput])
  const prompt = useMemo(
    () => (keyword.trim() ? buildPrompt({ ...promptInput, outline: outlineFirst ? outline : '' }) : ''),
    [keyword, promptInput, outlineFirst, outline]
  )

  // 예약 페이싱: 고른 시각 점검 + 추천 시각
  const pacing = useMemo(() => {
    const t = scheduleAt ? new Date(scheduleAt).getTime() : NaN
    return Number.isFinite(t) ? { at: effectiveSlot(t), ...checkPacing(t, form.category, sitePosts, post?.id) } : null
  }, [scheduleAt, form.category, sitePosts, post?.id])

  // 내용이 바뀌면 사람 확인을 다시 받는다
  useEffect(() => {
    setApprove({ facts: false, wording: false, read: false, images: false })
  }, [contentKey])

  // 미리보기: /images/blog/… 를 방금 올린 이미지(브라우저 사본) 또는 레포 원본으로
  const previewBase = status?.site.previewImageBase ?? ''
  const resolveImg = useCallback((src: string) => localImages[src] ?? (src.startsWith('/images/') ? previewBase + src : src), [localImages, previewBase])
  const previewParsed = useMemo(() => {
    const fix = (html: string) => html.replace(/src="(\/images\/[^"]+)"/g, (_m, s: string) => `src="${resolveImg(s)}"`)
    return {
      ...parsed,
      introHtml: fix(parsed.introHtml),
      sections: parsed.sections.map((s) => ({ ...s, html: fix(s.html) })),
      faq: parsed.faq.map((f) => ({ ...f, aHtml: fix(f.aHtml) })),
    }
  }, [parsed, resolveImg])

  // ── ① 상위글 찾기 ──
  async function runSearch(fresh = false) {
    if (!keyword.trim()) return setNotice({ kind: 'err', text: '키워드를 입력하세요.' })
    if (provider === 'dataforseo' && !confirm(`DataForSEO(유료)로 검색합니다. 오늘 사용 $${status?.dfs.usd.toFixed(3) ?? '?'} / 한도 $${status?.dfs.budget ?? 1}. 계속할까요?`)) return
    setBusy(provider === 'chrome' ? '크롬으로 구글 검색 중… 결과 주소 확인까지 30초~1분 걸립니다 (캡차가 뜨면 창에서 풀어 주세요)' : 'DataForSEO 검색 중…')
    setNotice(null)
    try {
      const r = await api<SerpResponse>('/api/serp', { method: 'POST', body: JSON.stringify({ keyword: keyword.trim(), provider, fresh }) })
      setSerp(r)
      setSelected(r.candidates.filter((c) => c.recommended).slice(0, 5).map((c) => c.url))
      if (!form.keyword) set('keyword', keyword.trim())
      setNotice({ kind: 'ok', text: `${r.candidates.length}개 결과${r.fromCache ? ' (7일 캐시 — 새로 검색하려면 "새로 검색")' : ''}.` })
    } catch (e) {
      setNotice({ kind: 'err', text: (e as Error).message })
    } finally {
      setBusy('')
      api<Status>('/api/budget').then(setStatus).catch(() => undefined)
    }
  }

  // ── ② 분석 ──
  async function runAnalyze() {
    const manual = manualUrls.split(/\s+/).filter((u) => /^https?:\/\//.test(u))
    const urls = Array.from(new Set([...(provider === 'manual' ? [] : selected), ...manual]))
    if (!urls.length) return setNotice({ kind: 'err', text: '분석할 글을 고르거나 주소를 붙여넣으세요.' })
    setBusy(`${urls.length}개 글 분석 중…`)
    setNotice(null)
    try {
      const [a, l] = await Promise.all([
        api<AnalyzeResponse>('/api/analyze', { method: 'POST', body: JSON.stringify({ keyword: keyword.trim(), urls, features: serp?.keyword === keyword.trim() ? serp.features : undefined }) }),
        api<{ links: InternalLink[]; blogError?: string }>(`/api/links?keyword=${encodeURIComponent(keyword.trim())}`),
      ])
      setAnalysis(a)
      setGapPicks(null)
      setOutline('')
      setLinks(l.links)
      setLinkOff([])
      if (!form.keyword) set('keyword', keyword.trim())
      const failed = a.perBlog.filter((p) => !p.ok).length
      setNotice({
        kind: failed ? 'info' : 'ok',
        text: `분석 완료 — 평균 ${a.summary.avgLength.toLocaleString()}자${failed ? `, ${failed}개는 본문을 못 읽음` : ''}${l.blogError ? ` (발행 글 목록 못 불러옴: ${l.blogError})` : ''}`,
      })
    } catch (e) {
      setNotice({ kind: 'err', text: (e as Error).message })
    } finally {
      setBusy('')
    }
  }

  async function loadLinksOnly() {
    if (!keyword.trim()) return setNotice({ kind: 'err', text: '키워드를 입력하세요.' })
    try {
      const l = await api<{ links: InternalLink[] }>(`/api/links?keyword=${encodeURIComponent(keyword.trim())}`)
      setLinks(l.links)
      if (!form.keyword) set('keyword', keyword.trim())
    } catch (e) {
      setNotice({ kind: 'err', text: (e as Error).message })
    }
  }

  // ── ③ 붙여넣기 ──
  function applyPaste() {
    const p = parsePasted(pasted)
    if (!p.markdown) return setNotice({ kind: 'err', text: '붙여넣은 내용이 없습니다.' })
    setForm((f) => ({
      ...f,
      markdown: p.markdown,
      title: p.title ?? parseArticle(p.markdown).h1 ?? f.title,
      description: p.description ?? f.description,
      slug: p.slug ?? f.slug,
      category: p.category && CATEGORY_KEYS.includes(p.category) ? p.category : f.category,
      tagsText: p.tags?.join(', ') ?? f.tagsText,
      keyword: f.keyword || keyword.trim(),
    }))
    setTitleCands(p.titleCandidates)
    const miss = [!p.title && '제목', !p.description && '설명', !p.slug && '주소', !p.category && '카테고리'].filter(Boolean)
    setNotice({ kind: miss.length ? 'info' : 'ok', text: miss.length ? `불러왔습니다. 자동으로 못 찾은 칸: ${miss.join(', ')} — 직접 채워 주세요.` : '원고를 불러왔습니다. 오른쪽 미리보기를 확인하세요.' })
  }

  async function upload(file: File, maxWidth: number) {
    const img = await toWebp(file, maxWidth)
    const r = await api<{ data: { media: { url: string } } }>('/api/site/blog/media', { method: 'POST', body: JSON.stringify({ dataUrl: img.dataUrl }) })
    const url = r.data.media.url
    setLocalImages((m) => ({ ...m, [url]: img.dataUrl }))
    return { url, width: img.width, height: img.height }
  }

  async function onCover(file?: File) {
    if (!file) return
    setBusy('대표 이미지 올리는 중…')
    try {
      const u = await upload(file, 1600)
      set('cover', { src: u.url, alt: form.cover?.alt || form.title, width: u.width, height: u.height })
    } catch (e) {
      setNotice({ kind: 'err', text: `이미지 업로드 실패: ${(e as Error).message}` })
    } finally {
      setBusy('')
    }
  }

  async function onBodyImage(file?: File) {
    if (!file) return
    const marker = form.markdown.match(/^\s*\[\s*이미지\s*[:：]([^\]]*)\]\s*$/m)
    const alt = window.prompt('이미지 설명(대체텍스트) — 검색·접근성에 쓰입니다', marker?.[1].trim() || form.title)
    if (alt === null) return
    setBusy('본문 이미지 올리는 중…')
    try {
      const u = await upload(file, 1600)
      const line = `![${alt.replace(/[[\]]/g, '')}](${u.url})`
      setForm((f) => {
        if (marker) return { ...f, markdown: f.markdown.replace(marker[0], line) }
        const ta = mdRef.current
        const pos = ta ? ta.selectionStart : f.markdown.length
        return { ...f, markdown: f.markdown.slice(0, pos) + `\n\n${line}\n\n` + f.markdown.slice(pos) }
      })
      setNotice({ kind: 'ok', text: marker ? `"[이미지:${marker[1]}]" 자리에 넣었습니다.` : '커서 위치에 넣었습니다.' })
    } catch (e) {
      setNotice({ kind: 'err', text: `이미지 업로드 실패: ${(e as Error).message}` })
    } finally {
      setBusy('')
    }
  }

  // ── ⑤ 저장·발행 ──
  async function save(): Promise<BlogPost | null> {
    setNotice(null)
    try {
      const r = post
        ? await api<{ data: { post: BlogPost } }>(`/api/site/blog/posts/${post.id}`, { method: 'PUT', body: JSON.stringify({ version: post.version, content }) })
        : await api<{ data: { post: BlogPost } }>('/api/site/blog/posts', { method: 'POST', body: JSON.stringify({ content }) })
      setPost(r.data.post)
      setSavedKey(JSON.stringify(toContent(fromPost(r.data.post))))
      return r.data.post
    } catch (e) {
      const err = e as ApiErr
      setNotice({ kind: 'err', text: err.message, issues: err.details?.issues })
      return null
    }
  }

  /** 발행·예약한 글의 결말 문장·자주 쓴 표현을 이 PC 에 남긴다(다음 글 문투 중복 검사용) */
  function recordHistory(p: BlogPost) {
    const entry: HistoryEntry = {
      id: p.id,
      slug: p.slug,
      keyword: p.keyword ?? '',
      title: p.title,
      at: p.publishedAt ?? p.scheduledAt ?? new Date().toISOString(),
      closingSentences: closingSentences(p.markdown),
      topPhrases: topPhrases(p.markdown, p.keyword ?? '', 8).map((t) => t.phrase),
    }
    api('/api/history', { method: 'POST', body: JSON.stringify(entry) })
      .catch(() => undefined)
      .finally(loadContext)
  }

  async function onSaveDraft() {
    // 발행글 수정 가드: 저장 즉시 사이트에 반영되므로 한 번 더 묻는다 (project15 edit-guard 대응)
    if (post?.status === 'published' && !confirm(`이미 발행된 글 "/blog/${post.slug}" 을 수정합니다. 저장하면 1~3분 뒤 사이트에 바로 반영됩니다. 계속할까요?`)) return
    setBusy('저장 중…')
    const p = await save()
    setBusy('')
    if (p && p.status !== 'draft') recordHistory(p)
    if (p) setNotice({ kind: 'ok', text: p.status === 'published' ? '발행된 글을 수정했습니다 — 1~3분 뒤 사이트에 반영됩니다.' : `초안 저장 완료 (v${p.version}). 사이트에는 아직 안 나갑니다.` })
  }

  async function onPublish(scheduled: boolean) {
    let when: string | undefined
    if (scheduled) {
      if (!scheduleAt) return setNotice({ kind: 'err', text: '예약 시각을 고르세요.' })
      const d = new Date(scheduleAt)
      if (d.getTime() < Date.now() + 5 * 60_000) return setNotice({ kind: 'err', text: '예약은 5분 이후로 잡으세요.' })
      when = d.toISOString()
    }
    const pace = checkPacing(scheduled && when ? Date.parse(when) : Date.now(), form.category, sitePosts, post?.id)
    const paceMsg = pace.warnings.length ? `\n\n⚠️ 발행 간격 경고\n- ${pace.warnings.join('\n- ')}` : ''
    const msg =
      (scheduled
        ? `${scheduleAt.replace('T', ' ')} 이후 첫 예약 발행 시간(07·10·13·19시 5분)에 공개됩니다. 예약할까요?`
        : 'nailstartup.com 에 바로 공개합니다. 발행할까요?') + paceMsg
    if (!confirm(msg)) return
    setBusy(scheduled ? '예약 중…' : '발행 중…')
    try {
      const saved = dirty || !post ? await save() : post
      if (!saved) return
      const r = await api<{ data: { post: BlogPost; publicPath: string } }>(`/api/site/blog/posts/${saved.id}/publish`, {
        method: 'POST',
        body: JSON.stringify({ version: saved.version, ...(when ? { scheduledAt: when } : {}) }),
      })
      setPost(r.data.post)
      setSavedKey(JSON.stringify(toContent(fromPost(r.data.post))))
      recordHistory(r.data.post)
      const url = `${status?.site.siteUrl ?? ''}${r.data.publicPath}`
      setNotice({
        kind: 'ok',
        text:
          r.data.post.status === 'scheduled'
            ? `예약 완료 — ${new Date(r.data.post.scheduledAt!).toLocaleString('ko-KR')} 이후 공개. 주소: ${url}`
            : `발행 요청 완료 — 1~3분 뒤 ${url} 에서 보입니다(배포 후 IndexNow 자동 제출).`,
      })
    } catch (e) {
      const err = e as ApiErr
      setNotice({ kind: 'err', text: err.message, issues: err.details?.issues })
    } finally {
      setBusy('')
    }
  }

  function newPost() {
    if (dirty && !confirm('저장하지 않은 내용이 있습니다. 새 글을 시작할까요?')) return
    setKeyword('')
    setSerp(null)
    setSelected([])
    setManualUrls('')
    setAnalysis(null)
    setLinks([])
    setLinkOff([])
    setFacts('')
    setPasted('')
    setForm(EMPTY_FORM)
    setPost(null)
    setSavedKey('')
    setTitleCands([])
    setGapPicks(null)
    setOutline('')
    setLocalImages({})
    setNotice(null)
    window.history.replaceState(null, '', '/')
  }

  const toggle = (arr: string[], v: string) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v])

  return (
    <main className="mx-auto max-w-[1500px] px-5 py-6">
      {/* 상태 바 */}
      <div className="mb-4 flex flex-wrap items-center gap-3 text-[12px]">
        <span className={`rounded-full px-3 py-1 font-bold ${status?.site.tokenSet ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
          발행 API {status?.site.tokenSet ? '토큰 있음' : '토큰 없음(.env.local)'} · {status?.site.apiBase ?? '…'}
        </span>
        <span className={`rounded-full px-3 py-1 font-bold ${status?.dfs.enabled ? 'bg-amber-100 text-amber-800' : 'bg-stone-200 text-stone-600'}`}>
          DataForSEO {status?.dfs.enabled ? `켜짐 · 오늘 $${status.dfs.usd.toFixed(3)} / $${status.dfs.budget}` : '꺼짐'}
        </span>
        {post && (
          <span className="rounded-full bg-stone-900 px-3 py-1 font-bold text-white">
            {STATUS_LABEL[post.status]} · v{post.version} · /blog/{post.slug}
            {dirty && ' · 저장 안 됨'}
          </span>
        )}
        <button className="btn-line ml-auto" onClick={newPost}>
          새 글
        </button>
      </div>

      {busy && <div className="mb-3 rounded-xl bg-stone-900 px-4 py-2.5 text-[13px] font-bold text-white">⏳ {busy}</div>}
      {notice && (
        <div
          className={`mb-3 rounded-xl px-4 py-2.5 text-[13px] font-semibold ${
            notice.kind === 'ok' ? 'bg-emerald-50 text-emerald-800' : notice.kind === 'err' ? 'bg-red-50 text-red-700' : 'bg-sky-50 text-sky-800'
          }`}
        >
          {notice.text}
          {notice.issues && (
            <ul className="mt-1 list-disc pl-5 font-normal">
              {notice.issues.map((i, k) => (
                <li key={k}>
                  [{i.field}] {i.message}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,820px)]">
        {/* ─────────── 왼쪽: 작업 ─────────── */}
        <div className="space-y-5">
          {/* ① */}
          <section className="card">
            <h2 className="step-title">
              <span className="step-no">1</span> 키워드 · 상위글
            </h2>
            <div className="flex gap-2">
              <input className="input" placeholder="예: 네일샵 창업비용" value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && provider !== 'manual' && runSearch()} />
              {provider !== 'manual' && (
                <>
                  <button className="btn-dark shrink-0" disabled={!!busy} onClick={() => runSearch(false)}>
                    검색
                  </button>
                  <button className="btn-line shrink-0" disabled={!!busy} onClick={() => runSearch(true)} title="7일 캐시 무시">
                    새로 검색
                  </button>
                </>
              )}
            </div>
            <div className="mt-3 flex flex-wrap gap-4 text-[13px]">
              <label className="flex items-center gap-1.5">
                <input type="radio" checked={provider === 'chrome'} onChange={() => setProvider('chrome')} /> 내 PC 크롬으로 구글 검색 <b className="text-emerald-700">무료</b>
              </label>
              <label className="flex items-center gap-1.5">
                <input type="radio" checked={provider === 'manual'} onChange={() => setProvider('manual')} /> URL 직접 입력 <b className="text-emerald-700">무료</b>
              </label>
              <label className={`flex items-center gap-1.5 ${status?.dfs.enabled ? '' : 'opacity-40'}`}>
                <input type="radio" disabled={!status?.dfs.enabled} checked={provider === 'dataforseo'} onChange={() => setProvider('dataforseo')} /> DataForSEO <b className="text-amber-700">유료 · 하루 ${status?.dfs.budget ?? 1} 한도</b>
              </label>
            </div>

            {provider !== 'manual' && serp && (
              <div className="mt-4">
                <p className="mb-2 text-[12px] text-stone-500">
                  {serp.provider === 'chrome' ? '구글(크롬)' : 'DataForSEO'} · {new Date(serp.fetchedAt).toLocaleString('ko-KR')}
                  {serp.fromCache && ' · 캐시'} — 분석할 글을 3~5개 고르세요(블로그·칼럼 추천 자동 체크).
                </p>
                <ul className="max-h-[340px] space-y-1 overflow-y-auto pr-1">
                  {serp.candidates.map((c: Candidate) => (
                    <li key={c.url} className={`flex items-start gap-2 rounded-lg px-2 py-1.5 text-[13px] ${c.excluded ? 'opacity-40' : 'hover:bg-stone-50'}`}>
                      <input type="checkbox" className="mt-1" disabled={c.excluded} checked={selected.includes(c.url)} onChange={() => setSelected((s) => toggle(s, c.url))} />
                      <span className="w-5 shrink-0 text-stone-400">{c.position}</span>
                      <span className="min-w-0 flex-1">
                        <a href={c.url} target="_blank" rel="noreferrer" className="block truncate font-semibold text-stone-800 hover:underline">
                          {c.title}
                        </a>
                        <span className="block truncate text-[11px] text-stone-400">{c.url}</span>
                      </span>
                      <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${c.recommended ? 'bg-emerald-100 text-emerald-700' : 'bg-stone-100 text-stone-500'}`} title={c.reasons.join(', ')}>
                        {c.excluded ? '제외' : `${c.score}점`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {provider !== 'manual' && serp?.strength && (
              <div className="mt-4 rounded-xl border border-stone-200 p-3 text-[13px]">
                <div className="flex flex-wrap items-center gap-2">
                  <b>지면 강도</b>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                      serp.strength.verdict === 'GO' ? 'bg-emerald-100 text-emerald-700' : serp.strength.verdict === 'HARD' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {serp.strength.verdict === 'GO' ? '도전 가능' : serp.strength.verdict === 'HARD' ? '어려움' : '보통'}
                  </span>
                  <span className="text-[11px] text-stone-400">
                    약한 지면 {Math.round(serp.strength.weakShare * 100)}% · 강한 지면 {Math.round(serp.strength.strongShare * 100)}% (유료 도메인 지표 없이 유형으로 본 잠정 판정)
                  </span>
                </div>
                <p className="mt-1 text-stone-600">{serp.strength.verdictText}</p>
                {serp.strength.ownPosition && (
                  <p className="mt-1.5 rounded-lg bg-sky-50 px-3 py-2 text-sky-800">
                    우리 사이트가 이미 {serp.strength.ownPosition}위에 있습니다 ({serp.strength.ownUrl}). 새 글을 쓰면 서로 순위를 깎을 수 있으니, 그 글을 보강하는 쪽을 먼저 검토하세요.
                  </p>
                )}
                <p className="mt-1.5 flex flex-wrap gap-1 text-[11px]">
                  {serp.strength.rows.map((r) => (
                    <span
                      key={r.url}
                      title={`${r.host} · ${r.reason}`}
                      className={`rounded px-1.5 py-0.5 ${r.strength === 'STRONG' ? 'bg-red-50 text-red-700' : r.strength === 'WEAK' ? 'bg-emerald-50 text-emerald-700' : r.strength === 'OWN' ? 'bg-sky-100 text-sky-800' : 'bg-stone-100 text-stone-600'}`}
                    >
                      {r.position}. {r.label}
                    </span>
                  ))}
                </p>
                {serp.strength.altKeywords.length > 0 && (
                  <p className="mt-2 text-[12px]">
                    더 구체적인 키워드:{' '}
                    {serp.strength.altKeywords.map((k) => (
                      <button key={k} className="mr-1 rounded-full bg-stone-100 px-2 py-0.5 hover:bg-stone-200" onClick={() => setKeyword(k)}>
                        {k}
                      </button>
                    ))}
                  </p>
                )}
                {serp.strength.guides.filter((g) => g.present && g.meaning).length > 0 && (
                  <ul className="mt-2 space-y-1 text-[12px]">
                    {serp.strength.guides
                      .filter((g) => g.present && g.meaning)
                      .map((g) => (
                        <li key={g.key} className={g.tone === 'warn' ? 'text-amber-800' : 'text-stone-600'}>
                          <b>{g.label}</b> — {g.meaning} {g.action}
                        </li>
                      ))}
                  </ul>
                )}
                {(serp.features.peopleAlsoAsk.length > 0 || serp.features.relatedSearches.length > 0) ? (
                  <div className="mt-2 grid grid-cols-1 gap-2 text-[12px] text-stone-600 md:grid-cols-2">
                    {serp.features.peopleAlsoAsk.length > 0 && (
                      <div>
                        <b>함께 찾는 질문</b>
                        <ul className="mt-0.5 list-disc pl-4">
                          {serp.features.peopleAlsoAsk.map((q) => (
                            <li key={q}>{q}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {serp.features.relatedSearches.length > 0 && (
                      <div>
                        <b>관련 검색어</b>
                        <p className="mt-0.5">{serp.features.relatedSearches.join(' · ')}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="mt-2 text-[11px] text-stone-400">함께 찾는 질문·관련 검색어를 읽지 못했습니다(검색 화면 구조 차이 또는 예전 캐시). 검색의도·빈틈은 상위글만으로 판정합니다.</p>
                )}
              </div>
            )}

            <div className="mt-4">
              <label className="label">{provider === 'manual' ? '분석할 글 주소 (한 줄에 하나, 3~5개)' : '추가로 분석할 주소 (선택)'}</label>
              <textarea className="input mono h-20 text-[12px]" value={manualUrls} onChange={(e) => setManualUrls(e.target.value)} placeholder="https://blog.naver.com/…&#10;https://….tistory.com/…" />
            </div>
          </section>

          {/* ② */}
          <section className="card">
            <h2 className="step-title">
              <span className="step-no">2</span> 분석 · 완성 프롬프트
            </h2>
            <div className="flex flex-wrap gap-2">
              <button className="btn-dark" disabled={!!busy} onClick={runAnalyze}>
                고른 글 분석하기
              </button>
              <button className="btn-line" disabled={!!busy} onClick={loadLinksOnly} title="상위글 없이 프롬프트만">
                분석 없이 프롬프트만
              </button>
            </div>

            {analysis && (
              <details className="mt-4 rounded-xl border border-stone-200 p-3 text-[13px]" open>
                <summary className="cursor-pointer font-bold">
                  분석 결과 — 평균 {analysis.summary.avgLength.toLocaleString()}자 · {analysis.summary.titlePattern}
                </summary>
                <div className="mt-2 space-y-2 text-stone-600">
                  <p>
                    <b>상위 제목</b>: {analysis.summary.topTitles.join(' / ') || '-'}
                  </p>
                  <p>
                    <b>공통 소제목</b>: {analysis.summary.commonHeadings.join(' / ') || '-'}
                  </p>
                  <p>
                    <b>FAQ 질문</b>: {analysis.summary.faqQuestions.slice(0, 8).join(' / ') || '-'}
                  </p>
                  <p>
                    <b>비교 대상</b>: {analysis.summary.comparisonTargets.join(', ') || '-'} · <b>주제</b>: {analysis.summary.faqThemes.join(', ') || '-'}
                  </p>
                  <ul className="mt-2 space-y-0.5 text-[12px]">
                    {analysis.perBlog.map((b) => (
                      <li key={b.url} className="truncate">
                        {b.ok ? '✅' : '⚠️'} {b.ok ? `${b.length.toLocaleString()}자` : b.error} · <a href={b.url} target="_blank" rel="noreferrer" className="underline">{b.title || b.url}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            )}

            {analysis?.intent && (
              <div className="mt-3 rounded-xl border border-stone-200 p-3 text-[13px]">
                <p>
                  <b>검색 의도</b>{' '}
                  <span className={`ml-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${analysis.intent.mixed ? 'bg-amber-100 text-amber-800' : 'bg-violet-100 text-violet-800'}`}>
                    {analysis.intent.mixed ? '혼재' : analysis.intent.label}
                  </span>
                </p>
                <p className="mt-1 text-stone-600">{analysis.intent.summary}</p>
                <p className="mt-1 text-[11px] text-stone-400">
                  {analysis.intent.scores.map((s) => `${s.label} ${s.score}`).join(' · ')}
                  {analysis.intent.evidence.length > 0 && ` — 근거: ${analysis.intent.evidence.map((e) => `[${e.source}] ${e.text}`).join(' / ')}`}
                </p>
              </div>
            )}

            {analysis?.gap && (
              <div className="mt-3 rounded-xl border border-violet-200 bg-violet-50/40 p-3 text-[13px]">
                <p className="font-bold">빈틈(GAP) — 이 글의 차별화 포인트 고르기</p>
                <p className="mt-0.5 text-[12px] text-stone-500">
                  상위글 공통 주제만 모으면 "평균적인 글"이 됩니다. 아무도 안 다룬 것 1~2개를 골라 깊게 쓰면 이길 이유가 생깁니다. (안 고르면 1순위 자동)
                </p>
                {analysis.gap.gaps.length === 0 ? (
                  <p className="mt-2 text-[12px] text-stone-400">빈틈 후보가 없습니다 — 분석한 글 수를 늘리거나 함께 찾는 질문이 있는 검색 결과로 다시 분석해 보세요.</p>
                ) : (
                  <ul className="mt-2 space-y-1">
                    {analysis.gap.gaps.map((g) => (
                      <li key={g.key}>
                        <label className="flex items-start gap-2">
                          <input type="checkbox" className="mt-1" checked={pickedGapKeys.includes(g.key)} onChange={() => setGapPicks(toggle(pickedGapKeys, g.key))} />
                          <span>
                            <b>{g.label}</b>{' '}
                            <span className="rounded bg-white px-1 text-[10px] font-bold text-violet-700">{SOURCE_LABEL[g.source]}</span>{' '}
                            <span className="text-[11px] text-stone-400">
                              상위 {g.coverage}/{g.coverageTotal}
                              {g.evidence.length > 0 && ` · ${g.evidence.slice(0, 2).join(' / ')}`}
                            </span>
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
                {analysis.gap.core.length + analysis.gap.common.length > 0 && (
                  <p className="mt-2 text-[12px] text-stone-600">
                    <b>반드시 다룰 공통 주제</b>: {[...analysis.gap.core, ...analysis.gap.common].map((t) => `${t.label}(${t.coverage}/${t.coverageTotal})`).join(' · ')}
                  </p>
                )}
              </div>
            )}

            {links.length > 0 && (
              <details className="mt-3 rounded-xl border border-stone-200 p-3 text-[13px]">
                <summary className="cursor-pointer font-bold">
                  내부 링크 후보 {activeLinks.length}/{links.length}개 (프롬프트에 넣을 것만 체크)
                </summary>
                <ul className="mt-2 grid grid-cols-1 gap-1 md:grid-cols-2">
                  {links.map((l) => (
                    <li key={l.href}>
                      <label className="flex items-start gap-1.5">
                        <input type="checkbox" className="mt-1" checked={!linkOff.includes(l.href)} onChange={() => setLinkOff((s) => toggle(s, l.href))} />
                        <span>
                          <span className="mr-1 rounded bg-stone-100 px-1 text-[10px] font-bold text-stone-500">{l.kind}</span>
                          {l.label}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </details>
            )}

            <div className="mt-3">
              <label className="label">직접 확인한 사실 (선택 — 실제 견적·지역 시세·공식 기준 등. 넣으면 AI 가 우선 반영)</label>
              <textarea className="input h-16 text-[13px]" value={facts} onChange={(e) => setFacts(e.target.value)} placeholder="예: 2026년 서울 강서구 10평 상가 보증금 1,000만 원 / 월세 80만 원 (직접 확인)" />
            </div>

            {prompt && (
              <div className="mt-3 rounded-xl border border-stone-200 p-3">
                <label className="flex items-center gap-2 text-[13px] font-bold">
                  <input type="checkbox" checked={outlineFirst} onChange={(e) => setOutlineFirst(e.target.checked)} />
                  목차 먼저 설계 (권장 — 끄면 한 번에 본문까지)
                </label>
                {outlineFirst && (
                  <>
                    <p className="mt-1 text-[12px] text-stone-500">구조가 틀린 글 5,000자를 고치는 것보다 목차 한 줄 고치는 게 훨씬 쌉니다. ① 목차 프롬프트 → 받은 목차를 고쳐 아래에 붙여넣기 → ② 본문 프롬프트.</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        className="btn-dark"
                        onClick={() => navigator.clipboard.writeText(outlinePrompt).then(() => setNotice({ kind: 'ok', text: '목차 프롬프트를 복사했습니다.' }))}
                      >
                        ① 목차 프롬프트 복사
                      </button>
                      <span className="text-[11px] text-stone-400">{outlinePrompt.length.toLocaleString()}자</span>
                    </div>
                    <textarea
                      className="input mono mt-2 h-36 text-[12px]"
                      value={outline}
                      onChange={(e) => setOutline(e.target.value)}
                      placeholder={'# 제목\n## 핵심 요약\n## 본문 소제목 1 〔약 600자〕\n   - ### 세부\n## …\n## 자주 묻는 질문\n## 마치며'}
                    />
                    <p className={`mt-1 text-[11px] ${outline.trim() ? 'text-emerald-700' : 'text-amber-700'}`}>
                      {outline.trim() ? `✅ 목차 확정 (${outline.trim().split('\n').length}줄) — ② 본문 프롬프트에 들어갑니다.` : '⚠️ 목차를 넣기 전까지 ② 본문 프롬프트는 구조 지시 없이 나갑니다.'}
                    </p>
                  </>
                )}
              </div>
            )}

            {prompt && (
              <div className="mt-3">
                <div className="mb-1 flex items-center justify-between">
                  <label className="label">{outlineFirst ? '② 본문 프롬프트' : '완성 프롬프트'} — 복사해서 채팅 AI(Claude 등)에 붙여넣으세요</label>
                  <button
                    className="btn-brand"
                    onClick={() => navigator.clipboard.writeText(prompt).then(() => setNotice({ kind: 'ok', text: '프롬프트를 복사했습니다.' }))}
                  >
                    프롬프트 복사
                  </button>
                </div>
                <textarea readOnly className="input mono h-40 text-[11px]" value={prompt} />
              </div>
            )}
          </section>

          {/* ③ */}
          <section className="card">
            <h2 className="step-title">
              <span className="step-no">3</span> 원고
            </h2>
            <label className="label">AI 결과 전체를 붙여넣기 (본문 + ===META=== 포함)</label>
            <textarea className="input mono h-28 text-[12px]" value={pasted} onChange={(e) => setPasted(e.target.value)} />
            <button className="btn-dark mt-2" onClick={applyPaste} disabled={!pasted.trim()}>
              원고 불러오기
            </button>

            <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="label">제목 ({form.title.length}자 · 40자 이내 권장)</label>
                <input className="input" value={form.title} onChange={(e) => set('title', e.target.value)} />
                {titleCands.length > 0 && (
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {titleCands.map((c) => {
                      const t = c.split('←')[0].trim()
                      return (
                        <button key={c} className="rounded-full bg-stone-100 px-2.5 py-1 text-[11px] text-stone-600 hover:bg-stone-200" onClick={() => set('title', t)} title={c}>
                          {t}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="label">설명 meta description ({form.description.length}자 · 80~150자)</label>
                <textarea className="input h-16 text-[13px]" value={form.description} onChange={(e) => set('description', e.target.value)} />
              </div>
              <div>
                <label className="label">주소 slug → /blog/{form.slug || '…'}</label>
                <input className="input mono text-[13px]" value={form.slug} disabled={post?.status === 'published'} onChange={(e) => set('slug', e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))} />
              </div>
              <div>
                <label className="label">카테고리</label>
                <select className="input" value={form.category} onChange={(e) => set('category', e.target.value)}>
                  <option value="">선택</option>
                  {CATEGORY_KEYS.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">태그 (쉼표로 구분)</label>
                <input className="input text-[13px]" value={form.tagsText} onChange={(e) => set('tagsText', e.target.value)} />
              </div>
              <div>
                <label className="label">목표 키워드 (검수용 · 화면엔 안 나감)</label>
                <input className="input text-[13px]" value={form.keyword} onChange={(e) => set('keyword', e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <label className="label">SEO 제목 (선택 — 비우면 제목과 같음)</label>
                <input className="input text-[13px]" value={form.seoTitle} onChange={(e) => set('seoTitle', e.target.value)} />
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-dashed border-stone-300 p-3">
              <div className="flex flex-wrap items-center gap-2">
                <label className="btn-line cursor-pointer">
                  대표 이미지 올리기
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => onCover(e.target.files?.[0])} />
                </label>
                <label className="btn-line cursor-pointer">
                  본문 이미지 넣기
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => onBodyImage(e.target.files?.[0])} />
                </label>
                <span className="text-[11px] text-stone-400">webp 로 줄여서 올립니다. [이미지: …] 표시가 있으면 그 자리에 들어갑니다.</span>
              </div>
              {form.cover && (
                <div className="mt-3 flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={resolveImg(form.cover.src)} alt="" className="h-16 w-28 rounded-lg object-cover" />
                  <input className="input text-[13px]" placeholder="대표 이미지 설명(alt)" value={form.cover.alt} onChange={(e) => set('cover', { ...form.cover!, alt: e.target.value })} />
                  <button className="btn-line shrink-0" onClick={() => set('cover', undefined)}>
                    빼기
                  </button>
                </div>
              )}
            </div>

            <div className="mt-4">
              <label className="label">
                본문 마크다운 — 공백 제외 {parsed.charCount.toLocaleString()}자 · 소제목 {parsed.sections.length} · FAQ {parsed.faq.length} · 표 {parsed.tables} · 내부링크 {parsed.links.filter((l) => l.href.startsWith('/')).length}
              </label>
              <textarea ref={mdRef} className="input mono h-[520px] text-[12.5px] leading-relaxed" value={form.markdown} onChange={(e) => set('markdown', e.target.value)} />
            </div>
          </section>

          {/* ④ */}
          <section className="card">
            <h2 className="step-title">
              <span className="step-no">4</span> 검수
              <span className={`ml-2 rounded-full px-2.5 py-0.5 text-[11px] ${blockCount ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                🔴 {blockCount} · 🟡 {warnCount}
              </span>
              {analysis && <span className="text-[11px] font-semibold text-stone-400">상위글 유사도 {Math.round(review.similarity * 100)}%</span>}
            </h2>
            {!form.markdown.trim() ? (
              <p className="text-[13px] text-stone-400">원고를 불러오면 검수 결과가 나옵니다.</p>
            ) : blockCount + warnCount === 0 ? (
              <p className="text-[13px] font-semibold text-emerald-700">자동 검수에서 지적할 것이 없습니다. 그래도 사실관계는 직접 확인하세요.</p>
            ) : (
              <ul className="space-y-1.5 text-[13px]">
                {allFindings.map((f, k) => (
                    <li key={k} className={`rounded-lg px-3 py-2 ${f.level === 'block' ? 'bg-red-50 text-red-800' : 'bg-amber-50 text-amber-900'}`}>
                      <b>
                        {f.level === 'block' ? '🔴' : '🟡'} {f.category}
                      </b>{' '}
                      {f.message}
                      {f.evidence && <span className="mt-0.5 block text-[12px] opacity-80">→ {f.evidence}</span>}
                    </li>
                  ))}
              </ul>
            )}
          </section>

          {/* ⑤ */}
          <section className="card">
            <h2 className="step-title">
              <span className="step-no">5</span> 확인 · 발행
            </h2>
            <div className="space-y-1.5 text-[13px]">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-0.5" checked={approve.facts} onChange={(e) => setApprove((a) => ({ ...a, facts: e.target.checked }))} />
                비용·기간·자격 요건 등 숫자와 사실을 직접 확인했다 (지어낸 통계·출처 없음)
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-0.5" checked={approve.wording} onChange={(e) => setApprove((a) => ({ ...a, wording: e.target.checked }))} />
                수익 보장·과장·광고 클릭 유도·겪지 않은 경험담이 없다
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-0.5" checked={approve.read} onChange={(e) => setApprove((a) => ({ ...a, read: e.target.checked }))} />
                미리보기로 처음부터 끝까지 읽어 봤고, 독자에게 도움이 되는 글이다
              </label>
              {hasImages && (
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-0.5" checked={approve.images} onChange={(e) => setApprove((a) => ({ ...a, images: e.target.checked }))} />
                  이미지: 직접 찍었거나 AI 로 만들었거나 상업 이용 가능한 것이고, 글자·로고·워터마크가 없고, 글 내용과 맞으며, 설명(alt)을 넣었다
                </label>
              )}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button className="btn-line" disabled={!!busy || !form.title || !form.slug} onClick={onSaveDraft}>
                {post?.status === 'published' ? '수정 저장(바로 반영)' : '초안 저장'}
              </button>
              <button className="btn-brand" disabled={!!busy || blockCount > 0 || !approved || post?.status === 'published'} onClick={() => onPublish(false)}>
                바로 발행
              </button>
              <input type="datetime-local" className="input w-auto text-[13px]" value={scheduleAt} onChange={(e) => setScheduleAt(e.target.value)} />
              <button
                className="btn-line"
                title="발행 간격·주간 편수·같은 카테고리 편수 규칙을 지키는 가장 빠른 예약 시각"
                onClick={() => {
                  const t = suggestSlot(form.category, sitePosts, post?.id)
                  if (t) setScheduleAt(toLocalInput(t))
                  else setNotice({ kind: 'info', text: '60일 안에 규칙을 지키는 예약 슬롯이 없습니다. 직접 고르세요.' })
                }}
              >
                추천 시각
              </button>
              <button className="btn-dark" disabled={!!busy || blockCount > 0 || !approved || post?.status === 'published'} onClick={() => onPublish(true)}>
                예약 발행
              </button>
            </div>
            {pacing && (
              <div className={`mt-2 rounded-lg px-3 py-2 text-[12px] ${pacing.ok ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-900'}`}>
                실제 공개: {fmtKst(pacing.at)} (한국시간){pacing.ok ? ' — 발행 간격 규칙 OK' : ''}
                {pacing.warnings.map((w) => (
                  <p key={w}>⚠️ {w}</p>
                ))}
              </div>
            )}
            <p className="mt-2 text-[11px] leading-relaxed text-stone-400">
              🔴 가 0개이고 확인 항목을 모두 체크해야 발행 버튼이 열립니다. 발행 = 레포 커밋 → Vercel 재배포(1~3분) → IndexNow 자동 제출. 예약 글은 07·10·13·19시 5분에 공개됩니다.
              하루에 몰아서 여러 편 올리기보다 예약으로 나눠 올리는 편이 검색엔진에 자연스럽습니다.
            </p>
          </section>
        </div>

        {/* ─────────── 오른쪽: 미리보기 ─────────── */}
        <aside className="xl:sticky xl:top-20 xl:max-h-[calc(100vh-6rem)] xl:overflow-y-auto">
          <div className="rounded-2xl border border-stone-200 bg-white px-4 py-10 shadow-sm md:px-10">
            <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-widest text-stone-300">미리보기 — 사이트와 같은 틀</p>
            {form.markdown.trim() ? (
              <BlogArticle
                post={{ ...content, cover: content.cover ? { ...content.cover, src: resolveImg(content.cover.src) } : undefined, publishedAt: post?.publishedAt ?? new Date().toISOString(), updatedAt: post?.updatedAt }}
                parsed={previewParsed}
                renderAd={() => <div className="my-7 rounded-xl border border-dashed border-stone-300 py-8 text-center text-[12px] text-stone-400">인아티클 광고 자리</div>}
              />
            ) : (
              <p className="py-20 text-center text-[13px] text-stone-400">원고를 불러오면 여기에 실제 모양으로 보입니다.</p>
            )}
          </div>
        </aside>
      </div>
    </main>
  )
}
