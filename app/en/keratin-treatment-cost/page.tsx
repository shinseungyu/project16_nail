import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { keratinTreatmentCost as page } from '@/data/en/keratin-treatment-cost'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
