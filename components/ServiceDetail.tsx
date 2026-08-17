import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import type { NailService } from '@/data/services'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

// **볼드** 마크다운을 <strong>으로 렌더링
export function renderText(text: string): React.ReactNode {
  return text.split('**').map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold text-stone-900">{part}</strong>
    ) : (
      part
    )
  )
}

interface ServiceDetailProps {
  service: NailService
  siblings: NailService[]
  basePath: string // 예: '/service' | '/skincare/service'
  hubHref: string // 예: '/' | '/skincare'
  hubLabel: string // 관련 링크에서 허브를 가리킬 때 표시할 이름
  parentCrumb: { name: string; href: string } // 브레드크럼 중간 항목
}

export default function ServiceDetail({ service, siblings, basePath, hubHref, hubLabel, parentCrumb }: ServiceDetailProps) {
  // 클러스터 밖 경로는 siblings로 라벨을 찾을 수 없어 명시 매핑이 필요하다.
  const CROSS_LABELS: Record<string, string> = {
    '/hair/license': '이용사 자격증',
    '/hair/license/beautician': '미용사(일반) 자격증',
    '/hair/license/difference': '미용사와 이용사 차이',
    '/hair/cost': '미용실 창업비용',
    '/hair/revenue': '헤어 수익 구조',
    '/hair/scalp': '두피 스케일링',
    '/hair/scalp/clinic': '헤어 클리닉',
    '/hair/career/salary': '헤어 디자이너 연봉',
  }

  const labelFor = (href: string) =>
    href === hubHref
      ? hubLabel
      : siblings.find((s) => `${basePath}/${s.id}` === href)?.title ?? CROSS_LABELS[href] ?? href

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: parentCrumb.name, item: `${SITE_URL}${parentCrumb.href}` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE_URL}${basePath}/${service.id}` },
    ],
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* 브레드크럼 */}
      <nav className="text-xs text-stone-400 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-700">홈</Link>
        <span>›</span>
        <Link href={parentCrumb.href} className="hover:text-stone-700">{parentCrumb.name}</Link>
        <span>›</span>
        <span className="text-stone-600">{service.title}</span>
      </nav>

      {/* 헤더 */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs bg-stone-100 text-stone-600 font-extrabold px-3 py-1 rounded-full">{service.tag}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-3 leading-tight">{service.h1}</h1>
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

      {/* 리드 문단 */}
      <p className="text-[15px] text-stone-700 leading-relaxed mb-8">{renderText(service.intro)}</p>

      {/* 본문 블록 */}
      <div className="space-y-5">
        {service.blocks.map((block, i) => {
          if (block.type === 'h') {
            return <h2 key={i} className="text-lg font-extrabold text-stone-900 pt-3">{block.text}</h2>
          }
          if (block.type === 'p') {
            return <p key={i} className="text-sm text-stone-600 leading-relaxed">{renderText(block.text)}</p>
          }
          if (block.type === 'note') {
            const warn = block.tone !== 'info'
            return (
              <div key={i} className={`rounded-xl p-4 flex items-start gap-3 border ${warn ? 'bg-amber-50 border-amber-100' : 'bg-stone-50 border-stone-100'}`}>
                <span className="text-lg shrink-0 mt-0.5">{warn ? '⚠️' : '💡'}</span>
                <p className={`text-xs leading-relaxed ${warn ? 'text-amber-800' : 'text-stone-600'}`}>{renderText(block.text)}</p>
              </div>
            )
          }
          if (block.type === 'list') {
            return (
              <ul key={i} className="space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                    <span className="text-stone-300 shrink-0 mt-0.5">•</span>
                    <span>{renderText(item)}</span>
                  </li>
                ))}
              </ul>
            )
          }
          // table
          return (
            <div key={i} className="overflow-x-auto rounded-2xl border border-stone-100 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-stone-50 text-stone-600">
                  <tr>
                    {block.headers.map((h, j) => (
                      <th key={j} className={`px-4 py-3 font-bold ${j === 0 ? 'text-left' : 'text-center'}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-50 text-stone-700">
                  {block.rows.map((row, r) => (
                    <tr key={r} className="hover:bg-stone-50/60">
                      {row.map((cell, c) => (
                        <td key={c} className={`px-4 py-3 align-top ${c === 0 ? 'text-left font-medium text-stone-800' : 'text-center'}`}>
                          {renderText(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        })}
      </div>

      {/* 광고 (인아티클) */}
      <div className="my-10">
        <AdUnit slot="3886825955" format="fluid" layout="in-article" />
      </div>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-lg font-extrabold text-stone-900 mb-4">자주 묻는 질문</h2>
        <div className="space-y-3">
          {service.faq.map((f) => (
            <div key={f.q} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-[14px] font-bold text-stone-800 mb-2 flex items-start gap-2">
                <span className="text-stone-500 font-extrabold shrink-0">Q.</span>{f.q}
              </h3>
              <p className="text-[13px] text-stone-600 leading-relaxed pl-5"><span className="font-bold">A.</span> {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 내부링크 */}
      <div className="mb-10">
        <p className="text-xs font-bold text-stone-400 mb-3 uppercase tracking-widest">함께 보면 좋은 글</p>
        {/* 1:1 정사각 카드 — 모바일 2열, sm 이상 3열 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {service.related.map((href) => (
            <Link
              key={href}
              href={href}
              className="group aspect-square bg-stone-50 border border-stone-200 rounded-2xl p-5 flex flex-col justify-between hover:border-stone-400 hover:bg-white hover:shadow-md transition-all"
            >
              <p className="text-[15px] sm:text-base font-extrabold text-stone-800 leading-snug break-keep">
                {labelFor(href)}
              </p>
              <span className="self-end text-lg text-stone-300 group-hover:text-stone-700 transition-colors">→</span>
            </Link>
          ))}
        </div>
      </div>

      {/* 멀티플렉스 광고 (관련 콘텐츠) */}
      <AdUnit slot="3291145762" format="autorelaxed" responsive={false} />
    </div>
  )
}
