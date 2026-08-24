import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { chemicalPeelAftercare as page } from '@/data/en/chemical-peel-aftercare'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
