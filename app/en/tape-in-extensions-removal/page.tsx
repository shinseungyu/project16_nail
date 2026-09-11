import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { tapeInExtensionsRemoval as page } from '@/data/en/tape-in-extensions-removal'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
