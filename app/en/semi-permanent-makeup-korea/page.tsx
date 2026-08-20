import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { semiPermanentMakeupKorea as page } from '@/data/en/semi-permanent-makeup-korea'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
