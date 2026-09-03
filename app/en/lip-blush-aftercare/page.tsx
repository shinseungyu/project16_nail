import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { lipBlushAftercare as page } from '@/data/en/lip-blush-aftercare'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
