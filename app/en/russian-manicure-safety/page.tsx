import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { russianManicureSafety as page } from '@/data/en/russian-manicure-safety'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
