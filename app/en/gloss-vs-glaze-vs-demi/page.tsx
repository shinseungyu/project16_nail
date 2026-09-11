import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { glossVsGlazeVsDemi as page } from '@/data/en/gloss-vs-glaze-vs-demi'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
