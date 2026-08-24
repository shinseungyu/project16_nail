import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { builderGelForWeakNails as page } from '@/data/en/builder-gel-for-weak-nails'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
