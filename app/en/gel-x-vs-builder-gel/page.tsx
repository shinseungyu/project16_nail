import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { gelXVsBuilderGel as page } from '@/data/en/gel-x-vs-builder-gel'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
