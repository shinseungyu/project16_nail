import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whatIsARussianManicure as page } from '@/data/en/what-is-a-russian-manicure'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
