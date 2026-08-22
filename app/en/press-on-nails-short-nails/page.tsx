import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { pressOnNailsShortNails as page } from '@/data/en/press-on-nails-short-nails'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
