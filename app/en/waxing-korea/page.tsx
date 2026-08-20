import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { waxingKorea as page } from '@/data/en/waxing-korea'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
