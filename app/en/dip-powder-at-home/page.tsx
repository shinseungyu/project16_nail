import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { dipPowderAtHome as page } from '@/data/en/dip-powder-at-home'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
