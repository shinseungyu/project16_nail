import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { nailCareAfterGel as page } from '@/data/en/nail-care-after-gel'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
