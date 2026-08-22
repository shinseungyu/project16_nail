import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { microneedlingCost as page } from '@/data/en/microneedling-cost'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
