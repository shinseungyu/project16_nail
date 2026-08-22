import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whatAreGelXNails as page } from '@/data/en/what-are-gel-x-nails'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
