import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { dipPowderHygiene as page } from '@/data/en/dip-powder-hygiene'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
