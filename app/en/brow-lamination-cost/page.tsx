import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { browLaminationCost as page } from '@/data/en/brow-lamination-cost'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
