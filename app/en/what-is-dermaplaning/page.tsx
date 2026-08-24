import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whatIsDermaplaning as page } from '@/data/en/what-is-dermaplaning'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
