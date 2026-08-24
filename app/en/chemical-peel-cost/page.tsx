import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { chemicalPeelCost as page } from '@/data/en/chemical-peel-cost'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
