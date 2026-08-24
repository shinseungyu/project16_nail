import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { chemicalPeelAtHome as page } from '@/data/en/chemical-peel-at-home'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
