import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { backFacialCost as page } from '@/data/en/back-facial-cost'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
