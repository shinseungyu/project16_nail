import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howToRemovePressOnNails as page } from '@/data/en/how-to-remove-press-on-nails'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
