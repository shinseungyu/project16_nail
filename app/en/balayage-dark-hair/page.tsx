import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { balayageDarkHair as page } from '@/data/en/balayage-dark-hair'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
