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
