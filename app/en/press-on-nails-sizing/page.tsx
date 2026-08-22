import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { pressOnNailsSizing as page } from '@/data/en/press-on-nails-sizing'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
