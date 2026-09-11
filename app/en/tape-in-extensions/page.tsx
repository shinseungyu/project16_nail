import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { tapeInExtensions as page } from '@/data/en/tape-in-extensions'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
