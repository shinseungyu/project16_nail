import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whoCanPerformDermaplaning as page } from '@/data/en/who-can-perform-dermaplaning'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
