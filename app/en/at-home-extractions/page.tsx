import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { atHomeExtractions as page } from '@/data/en/at-home-extractions'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
