import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { gelXVsAcrylic as page } from '@/data/en/gel-x-vs-acrylic'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
