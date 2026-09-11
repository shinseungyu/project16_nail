import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { hairGlossTreatment as page } from '@/data/en/hair-gloss-treatment'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
