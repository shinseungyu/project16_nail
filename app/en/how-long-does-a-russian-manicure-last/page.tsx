import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howLongDoesARussianManicureLast as page } from '@/data/en/how-long-does-a-russian-manicure-last'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
