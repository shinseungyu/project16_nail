import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import LinkThumb from '@/components/LinkThumb'
import RelatedQna from '@/components/RelatedQna'
import type { SectionKey } from '@/data/qna'
import type { NailService } from '@/data/services'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nailstartup.com'

// 시술 상세 basePath -> Q&A 섹션. FAQ 상세가 /qna 밖에서 링크를 받도록 연결한다.
const QNA_SECTION_BY_BASE: Record<string, SectionKey> = {
  '/service': 'nail-care',
  '/skincare/service': 'skin-care',
  '/makeup/service': 'makeup-care',
  '/hair/service': 'hair-style',
}

// 같은 섹션을 쓰는 시술 페이지들이 서로 다른 질문을 걸도록 id로 오프셋을 만든다
function qnaOffset(id: string): number {
  let h = 0
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) % 997
  return h
}

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

  /** 본문 중간 "이어서 읽기" 카드를 끼울 소제목 인덱스 — 뒤쪽 60% 지점. */
  const midLinkIndex = (() => {
    const heads = service.blocks.map((b, i) => (b.type === 'h' ? i : -1)).filter((i) => i >= 0)
    return heads.length >= 4 ? heads[Math.floor(heads.length * 0.6)] : -1
  })()

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
            return (
              <div key={i}>
                {/*
                  본문 중간 "이어서 읽기" 카드.
                  하단 관련글은 끝까지 읽은 사람만 본다. 실제 이동은 한 섹션을 다 읽고
                  다음 제목으로 넘어가는 경계에서 가장 많이 일어나므로 그 자리에 둔다.
                */}
                {i === midLinkIndex && service.related[0] ? (
                  <Link
                    href={service.related[0]}
                    className="group mb-8 flex items-center gap-3 rounded-2xl border-2 border-rose-200 bg-rose-50/60 px-5 py-4 hover:border-rose-400 transition-colors"
                  >
                    <LinkThumb
                      seed={service.related[0]}
                      label={labelFor(service.related[0])}
                      className="w-14 rounded-xl shrink-0"
                      sizes="56px"
                    />
                    <span className="text-[15px] font-extrabold text-stone-900 leading-snug break-keep group-hover:text-rose-700 transition-colors">
                      {labelFor(service.related[0])}
                    </span>
                    <span
                      className="ml-auto shrink-0 w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center group-hover:bg-rose-700 group-hover:translate-x-0.5 transition-all"
                      aria-hidden
                    >
                      →
                    </span>
                  </Link>
                ) : null}
                <h2 className="text-lg font-extrabold text-stone-900 pt-3">{block.text}</h2>
              </div>
            )
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

      {/*
        내부링크 — 페이지에서 가장 눈에 띄어야 하는 블록.

        예전에는 aspect-square 정사각 카드였는데 제목이 짧아 가운데가 텅 비고,
        흰 배경 위 흰 카드라 페이지에 묻혔다. 블록 전체를 색이 있는 패널로 감싸
        본문과 분리하고, 화살표를 처음부터 채워진 원형 버튼으로 만들어
        "누를 수 있는 것"으로 읽히게 했다.
      */}
      <section className="mb-10 rounded-3xl border-2 border-rose-100 bg-gradient-to-br from-rose-50/80 via-white to-stone-50 p-6 md:p-8">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-6 rounded-full bg-rose-500 shrink-0" aria-hidden />
          <h2 className="text-xl md:text-2xl font-extrabold text-stone-900">함께 보면 좋은 글</h2>
        </div>
        <p className="text-[13px] text-stone-500 mt-2 mb-6 pl-4">이 글을 읽은 분들이 이어서 많이 봅니다</p>
        {/* 3열 = 각 33.33%, 이미지는 1:1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {service.related.map((href) => (
            <Link
              key={href}
              href={href}
              className="group overflow-hidden rounded-2xl border-2 border-stone-200 bg-white hover:border-rose-400 hover:shadow-lg hover:shadow-rose-900/5 hover:-translate-y-0.5 transition-all"
            >
              <LinkThumb seed={href} label={labelFor(href)} />
              <div className="flex items-center gap-2.5 px-4 py-3.5">
                <span className="text-[15px] font-extrabold text-stone-900 leading-snug break-keep group-hover:text-rose-700 transition-colors">
                  {labelFor(href)}
                </span>
                <span
                  className="ml-auto shrink-0 w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center text-[15px] group-hover:bg-rose-700 group-hover:translate-x-0.5 transition-all"
                  aria-hidden
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 멀티플렉스 광고 (관련 콘텐츠) */}
      {QNA_SECTION_BY_BASE[basePath] && (
        <RelatedQna sections={[QNA_SECTION_BY_BASE[basePath]]} offset={qnaOffset(service.id)} />
      )}

      <AdUnit slot="3291145762" format="autorelaxed" responsive={false} />
    </div>
  )
}
