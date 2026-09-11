import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { polygelLifting as page } from '@/data/en/polygel-lifting'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
