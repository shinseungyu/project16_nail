import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whatIsBuilderGel as page } from '@/data/en/what-is-builder-gel'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
