import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { reusingPressOnNails as page } from '@/data/en/reusing-press-on-nails'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
