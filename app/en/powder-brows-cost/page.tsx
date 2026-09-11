import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { powderBrowsCost as page } from '@/data/en/powder-brows-cost'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
