import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { dipPowderVsGel as page } from '@/data/en/dip-powder-vs-gel'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
