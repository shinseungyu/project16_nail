import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howLongDoGelNailsLast as page } from '@/data/en/how-long-do-gel-nails-last'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
