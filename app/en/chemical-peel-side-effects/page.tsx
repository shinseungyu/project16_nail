import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { chemicalPeelSideEffects as page } from '@/data/en/chemical-peel-side-effects'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
