import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { hydrafacialSideEffects as page } from '@/data/en/hydrafacial-side-effects'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
