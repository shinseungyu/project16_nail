import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { hairGlossVsToner as page } from '@/data/en/hair-gloss-vs-toner'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
