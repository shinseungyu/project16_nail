import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { pressOnNailsCost as page } from '@/data/en/press-on-nails-cost'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
