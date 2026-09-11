import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whatArePowderBrows as page } from '@/data/en/what-are-powder-brows'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
