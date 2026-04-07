import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { nailSections } from '@/data/nail-sections'

export async function generateStaticParams() {
  return nailSections.map((s) => ({ id: s.id }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const section = nailSections.find((s) => s.id === params.id)
  if (!section) return {}
  return {
    title: `${section.title} | 네일창업연구소`,
    description: section.summary,
    alternates: { canonical: `/info/${section.id}` },
  }
}

const OPEN_CHAT_URL = '#'

export default function InfoPage({ params }: { params: { id: string } }) {
  const section = nailSections.find((s) => s.id === params.id)
  if (!section) notFound()

  const currentIndex = nailSections.findIndex((s) => s.id === params.id)
  const prev = nailSections[currentIndex - 1]
  const next = nailSections[currentIndex + 1]

  return (
    <div className="max-w-[800px] mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center text-sm text-pink-500 font-bold hover:underline mb-8">
        ← 메인으로
      </Link>

      <p className="text-xs font-bold text-pink-400 mb-2 uppercase tracking-widest">{section.category}</p>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{section.title}</h1>
      <p className="text-gray-500 text-sm mb-10 leading-relaxed">{section.summary}</p>

      <div className="space-y-10">
        {section.content.map((block, i) => (
          <section key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-extrabold text-gray-900 mb-3">{block.heading}</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{block.body}</p>
            {block.items && (
              <ul className="space-y-3 mt-2">
                {block.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 text-[10px] font-extrabold bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full whitespace-nowrap">{item.label}</span>
                    <span className="text-sm text-gray-600 leading-relaxed">{item.desc}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* 다른 글 */}
      <div className="mt-12 grid grid-cols-2 gap-4">
        {prev ? (
          <Link href={`/info/${prev.id}`} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:border-pink-200 transition-colors">
            <p className="text-xs text-gray-400 mb-1">← 이전 글</p>
            <p className="text-sm font-bold text-gray-800">{prev.title}</p>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/info/${next.id}`} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:border-pink-200 transition-colors text-right">
            <p className="text-xs text-gray-400 mb-1">다음 글 →</p>
            <p className="text-sm font-bold text-gray-800">{next.title}</p>
          </Link>
        ) : <div />}
      </div>

      {/* CTA */}
      <section className="mt-10 bg-gradient-to-r from-pink-500 to-pink-400 rounded-3xl p-8 text-center text-white">
        <h2 className="text-lg font-extrabold mb-2">더 구체적인 상담이 필요하신가요?</h2>
        <p className="text-pink-100 mb-5 text-sm">실제 운영 중인 창업자가 직접 답변해드립니다.</p>
        <a href={OPEN_CHAT_URL} className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-full transition-all">
          💬 무료 창업 상담
        </a>
      </section>
    </div>
  )
}
