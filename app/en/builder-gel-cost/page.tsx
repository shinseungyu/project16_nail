import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { builderGelCost as page } from '@/data/en/builder-gel-cost'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
