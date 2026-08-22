import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { russianManicureCost as page } from '@/data/en/russian-manicure-cost'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
