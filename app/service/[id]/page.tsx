import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceDetail from '@/components/ServiceDetail'
import { nailServices } from '@/data/services'

export async function generateStaticParams() {
  return nailServices.map((s) => ({ id: s.id }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = nailServices.find((s) => s.id === params.id)
  if (!service) return {}
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/service/${service.id}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/service/${service.id}`,
      // openGraph를 직접 지정하면 루트 layout의 images를 상속하지 못해 og:image가 사라진다.
      images: [{ url: '/images/thumb.webp', width: 1200, height: 630, alt: service.metaTitle }],
    },
  }
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = nailServices.find((s) => s.id === params.id)
  if (!service) notFound()

  return (
    <ServiceDetail
      service={service}
      siblings={nailServices}
      basePath="/service"
      hubHref="/"
      hubLabel="네일샵 창업 홈"
      parentCrumb={{ name: '시술', href: '/#services' }}
    />
  )
}
