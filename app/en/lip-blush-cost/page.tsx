import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { lipBlushCost as page } from '@/data/en/lip-blush-cost'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
