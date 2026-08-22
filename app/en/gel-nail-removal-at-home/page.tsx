import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { gelNailRemovalAtHome as page } from '@/data/en/gel-nail-removal-at-home'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
