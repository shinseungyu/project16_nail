import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { polygelVsGelX as page } from '@/data/en/polygel-vs-gel-x'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
