import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { waxWarmerGuide as page } from '@/data/en/wax-warmer-guide'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
