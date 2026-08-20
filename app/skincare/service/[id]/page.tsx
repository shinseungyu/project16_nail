import type { Metadata } from 'next'
import { hreflang } from '@/lib/hreflang'
import { notFound } from 'next/navigation'
import ServiceDetail from '@/components/ServiceDetail'
import { skincareServices } from '@/data/skincare-services'

export async function generateStaticParams() {
  return skincareServices.map((s) => ({ id: s.id }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = skincareServices.find((s) => s.id === params.id)
  if (!service) return {}
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/skincare/service/${service.id}`, languages: hreflang(`/skincare/service/${service.id}`) },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/skincare/service/${service.id}`,
      // openGraph를 직접 지정하면 루트 layout의 images를 상속하지 못해 og:image가 사라진다.
      images: [{ url: '/images/thumb.webp', width: 1200, height: 630, alt: service.metaTitle }],
    },
  }
}

export default function SkincareServicePage({ params }: { params: { id: string } }) {
  const service = skincareServices.find((s) => s.id === params.id)
  if (!service) notFound()

  return (
    <ServiceDetail
      service={service}
      siblings={skincareServices}
      basePath="/skincare/service"
      hubHref="/skincare"
      hubLabel="피부관리샵 창업"
      parentCrumb={{ name: '피부관리샵', href: '/skincare' }}
    />
  )
}
