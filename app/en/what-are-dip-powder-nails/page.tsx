import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whatAreDipPowderNails as page } from '@/data/en/what-are-dip-powder-nails'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
