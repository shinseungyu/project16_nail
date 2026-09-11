import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { pressOnNailsLifting as page } from '@/data/en/press-on-nails-lifting'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
