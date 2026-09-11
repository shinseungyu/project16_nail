import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { polygelRemoval as page } from '@/data/en/polygel-removal'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
