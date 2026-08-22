import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { gelXRemoval as page } from '@/data/en/gel-x-removal'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
