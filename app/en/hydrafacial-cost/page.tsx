import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { hydrafacialCost as page } from '@/data/en/hydrafacial-cost'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
