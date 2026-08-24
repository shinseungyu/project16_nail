import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { keratinTreatmentSafety as page } from '@/data/en/keratin-treatment-safety'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
