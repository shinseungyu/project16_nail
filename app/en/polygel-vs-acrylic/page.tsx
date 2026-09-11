import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { polygelVsAcrylic as page } from '@/data/en/polygel-vs-acrylic'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
