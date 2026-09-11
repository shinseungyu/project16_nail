import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { clearGlossVirginHair as page } from '@/data/en/clear-gloss-virgin-hair'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
