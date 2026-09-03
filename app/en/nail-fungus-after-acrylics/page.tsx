import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { nailFungusAfterAcrylics as page } from '@/data/en/nail-fungus-after-acrylics'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
