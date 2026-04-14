'use client'

import { useState } from 'react'

interface Stats {
  total: number
  today: number
  byLocation: Record<string, number>
}

const locationLabel: Record<string, string> = {
  hero: '메인 히어로',
  mentor_banner: '멘토 상담 배너',
  main_cta: '메인 하단 CTA',
  float_button: '플로팅 버튼',
  cost: '창업비용 페이지',
  guide: '창업가이드 페이지',
  license: '자격증 페이지',
  revenue: '예상수익 페이지',
  calculator: '계산기 페이지',
  qna: 'Q&A 페이지',
  service: '서비스 페이지',
  info: '정보 페이지',
}

export default function AdminPage() {
  const [pw, setPw] = useState('')
  const [data, setData] = useState<Stats | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/kakao-click?pw=${encodeURIComponent(pw)}`)
      if (res.status === 401) {
        setError('비밀번호가 틀렸습니다.')
        setData(null)
      } else {
        setData(await res.json())
      }
    } catch {
      setError('오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  const sortedLocations = data
    ? Object.entries(data.byLocation).sort((a, b) => b[1] - a[1])
    : []

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {!data ? (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">관리자</p>
            <h1 className="text-xl font-extrabold text-stone-900 mb-6">통계 확인</h1>
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="비밀번호 입력"
              className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm mb-3 outline-none focus:border-stone-400"
            />
            {error && <p className="text-xs text-red-500 mb-3">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-stone-900 text-white font-bold py-3 rounded-xl text-sm hover:bg-stone-700 transition-colors disabled:opacity-50"
            >
              {loading ? '확인 중...' : '확인'}
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            {/* 오늘 / 누적 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FEE500] rounded-2xl p-6 text-center">
                <p className="text-xs font-bold text-stone-600 mb-1">오늘 클릭</p>
                <p className="text-5xl font-extrabold text-stone-900">{data.today}</p>
                <p className="text-xs text-stone-500 mt-1">회</p>
              </div>
              <div className="bg-stone-800 rounded-2xl p-6 text-center">
                <p className="text-xs font-bold text-stone-400 mb-1">누적 클릭</p>
                <p className="text-5xl font-extrabold text-white">{data.total}</p>
                <p className="text-xs text-stone-400 mt-1">회</p>
              </div>
            </div>

            {/* 위치별 통계 */}
            {sortedLocations.length > 0 && (
              <div className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm">
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">버튼 위치별 클릭</p>
                <div className="space-y-3">
                  {sortedLocations.map(([loc, count]) => (
                    <div key={loc} className="flex items-center justify-between">
                      <span className="text-sm text-stone-700">{locationLabel[loc] || loc}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-stone-100 rounded-full h-1.5">
                          <div
                            className="bg-[#FEE500] h-1.5 rounded-full"
                            style={{ width: `${Math.min((count / data.total) * 100, 100)}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-stone-900 w-8 text-right">{count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => { setData(null); setPw('') }}
              className="w-full border border-stone-200 text-stone-500 font-semibold py-2.5 rounded-xl text-sm hover:bg-stone-50 transition-colors"
            >
              로그아웃
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
