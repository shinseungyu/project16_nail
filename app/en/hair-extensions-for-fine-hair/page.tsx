import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { hairExtensionsForFineHair as page } from '@/data/en/hair-extensions-for-fine-hair'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
