import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { partialVsFullBalayage as page } from '@/data/en/partial-vs-full-balayage'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
