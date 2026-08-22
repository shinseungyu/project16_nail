import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { microneedlingSideEffects as page } from '@/data/en/microneedling-side-effects'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
