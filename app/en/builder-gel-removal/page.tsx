import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { builderGelRemoval as page } from '@/data/en/builder-gel-removal'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
