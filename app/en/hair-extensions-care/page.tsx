import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { hairExtensionsCare as page } from '@/data/en/hair-extensions-care'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
