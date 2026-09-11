import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { balayageShortHair as page } from '@/data/en/balayage-short-hair'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
