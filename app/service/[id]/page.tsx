import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { nailServices } from '@/data/services'

const OPEN_CHAT_URL = 'https://open.kakao.com/o/sIOxvlZh'

export async function generateStaticParams() {
  return nailServices.map((s) => ({ id: s.id }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = nailServices.find((s) => s.id === params.id)
  if (!service) return {}
  return {
    title: `${service.title} 시술 완전 정리 | 단가·특징·창업 활용법`,
    description: service.summary,
    alternates: { canonical: `/service/${service.id}` },
  }
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = nailServices.find((s) => s.id === params.id)
  if (!service) notFound()

  const currentIndex = nailServices.findIndex((s) => s.id === params.id)
  const prev = nailServices[currentIndex - 1]
  const next = nailServices[currentIndex + 1]

  return (
    <div className="max-w-[800px] mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center text-sm text-stone-500 font-semibold hover:text-stone-900 hover:underline mb-8">
        ← 메인으로
      </Link>

      {/* 헤더 */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs bg-stone-100 text-stone-600 font-extrabold px-3 py-1 rounded-full">{service.tag}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 mb-3">{service.title}</h1>
        <p className="text-stone-500 text-sm mb-5">{service.summary}</p>
        <div className="flex gap-4">
          <div className="bg-stone-100 rounded-xl px-4 py-2 text-center">
            <p className="text-xs text-stone-400 mb-0.5">평균 단가</p>
            <p className="text-sm font-extrabold text-stone-800">{service.price}</p>
          </div>
          <div className="bg-stone-50 rounded-xl px-4 py-2 text-center">
            <p className="text-xs text-stone-400 mb-0.5">소요 시간</p>
            <p className="text-sm font-extrabold text-stone-700">{service.time}</p>
          </div>
        </div>
      </div>

      {/* 본문 섹션 */}
      <div className="space-y-6">
        {service.sections.map((sec, i) => (
          <section key={i} className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-extrabold text-stone-900 mb-3">{sec.heading}</h2>
            <p className="text-sm text-stone-600 leading-relaxed">{sec.body}</p>
          </section>
        ))}
      </div>

      {/* 다른 시술 보기 */}
      <div className="mt-10">
        <p className="text-xs font-bold text-stone-400 mb-3 uppercase tracking-widest">다른 시술 보기</p>
        <div className="grid grid-cols-2 gap-3">
          {prev && (
            <Link href={`/service/${prev.id}`} className="bg-white border border-stone-100 rounded-2xl p-4 shadow-sm hover:border-stone-300 transition-colors">
              <p className="text-xs text-stone-400 mb-1">← 이전</p>
              <p className="text-sm font-bold text-stone-800">{prev.title}</p>
            </Link>
          )}
          {next && (
            <Link href={`/service/${next.id}`} className="bg-white border border-stone-100 rounded-2xl p-4 shadow-sm hover:border-stone-300 transition-colors text-right">
              <p className="text-xs text-stone-400 mb-1">다음 →</p>
              <p className="text-sm font-bold text-stone-800">{next.title}</p>
            </Link>
          )}
        </div>
      </div>

      {/* CTA */}
      <section className="mt-10 bg-stone-900 rounded-3xl p-10 text-center text-white">
        <h2 className="text-lg font-extrabold mb-2">창업 전 더 궁금한 게 있으신가요?</h2>
        <p className="text-stone-400 mb-5 text-sm">실제 운영 중인 창업자가 직접 답변해드립니다.</p>
        <a href={OPEN_CHAT_URL} className="inline-flex items-center gap-2 bg-[#FEE500] hover:bg-[#FADC00] text-[#000000] font-bold px-8 py-3 rounded-full transition-all">
          <Image src="/images/kakao_logo.webp" alt="카카오톡" width={18} height={18} />무료 창업 상담
        </a>
      </section>
    </div>
  )
}
