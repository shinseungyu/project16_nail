import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { cosmetologySchoolCosts as page } from '@/data/en/cosmetology-school-costs'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
