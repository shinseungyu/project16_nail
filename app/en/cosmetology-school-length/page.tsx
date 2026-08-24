import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { cosmetologySchoolLength as page } from '@/data/en/cosmetology-school-length'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
