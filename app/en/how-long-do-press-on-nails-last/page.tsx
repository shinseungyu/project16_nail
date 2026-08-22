import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howLongDoPressOnNailsLast as page } from '@/data/en/how-long-do-press-on-nails-last'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
