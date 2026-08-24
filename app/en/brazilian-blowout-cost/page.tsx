import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { brazilianBlowoutCost as page } from '@/data/en/brazilian-blowout-cost'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
