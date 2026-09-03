import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { dipPowderRemoval as page } from '@/data/en/dip-powder-removal'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
