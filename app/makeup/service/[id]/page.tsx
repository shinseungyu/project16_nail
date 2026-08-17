import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceDetail from '@/components/ServiceDetail'
import { makeupServices } from '@/data/makeup-services'

export async function generateStaticParams() {
  return makeupServices.map((s) => ({ id: s.id }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = makeupServices.find((s) => s.id === params.id)
  if (!service) return {}
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/makeup/service/${service.id}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/makeup/service/${service.id}`,
      // openGraph를 직접 지정하면 루트 layout의 images를 상속하지 못해 og:image가 사라진다.
      images: [{ url: '/images/thumb.webp', width: 1200, height: 630, alt: service.metaTitle }],
    },
  }
}

export default function MakeupServicePage({ params }: { params: { id: string } }) {
  const service = makeupServices.find((s) => s.id === params.id)
  if (!service) notFound()

  return (
    <ServiceDetail
      service={service}
      siblings={makeupServices}
      basePath="/makeup/service"
      hubHref="/makeup"
      hubLabel="메이크업샵 창업"
      parentCrumb={{ name: '메이크업샵', href: '/makeup' }}
    />
  )
}
