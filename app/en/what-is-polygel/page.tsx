import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whatIsPolygel as page } from '@/data/en/what-is-polygel'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
