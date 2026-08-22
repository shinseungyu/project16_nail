import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { pressOnNailsVsGel as page } from '@/data/en/press-on-nails-vs-gel'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
