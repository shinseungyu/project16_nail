import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { polygelNailsAtHome as page } from '@/data/en/polygel-nails-at-home'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
