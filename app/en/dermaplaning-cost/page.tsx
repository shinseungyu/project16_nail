import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { dermaplaningCost as page } from '@/data/en/dermaplaning-cost'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
