import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { balayageVsHighlights as page } from '@/data/en/balayage-vs-highlights'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
