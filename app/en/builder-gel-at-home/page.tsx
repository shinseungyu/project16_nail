import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { builderGelAtHome as page } from '@/data/en/builder-gel-at-home'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
