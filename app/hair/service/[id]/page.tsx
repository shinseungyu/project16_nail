import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceDetail from '@/components/ServiceDetail'
import { hairServices } from '@/data/hair-services'

export async function generateStaticParams() {
  return hairServices.map((s) => ({ id: s.id }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = hairServices.find((s) => s.id === params.id)
  if (!service) return {}
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/hair/service/${service.id}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/hair/service/${service.id}`,
    },
  }
}

export default function HairServicePage({ params }: { params: { id: string } }) {
  const service = hairServices.find((s) => s.id === params.id)
  if (!service) notFound()

  return (
    <ServiceDetail
      service={service}
      siblings={hairServices}
      basePath="/hair/service"
      hubHref="/hair"
      hubLabel="이용원 창업"
      parentCrumb={{ name: '이용원', href: '/hair' }}
    />
  )
}
