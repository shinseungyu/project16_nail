import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { koreanPermGuide as page } from '@/data/en/korean-perm-guide'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
