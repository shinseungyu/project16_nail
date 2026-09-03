import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whyAreMyNailsPeeling as page } from '@/data/en/why-are-my-nails-peeling'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
