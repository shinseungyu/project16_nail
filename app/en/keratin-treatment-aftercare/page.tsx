import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { keratinTreatmentAftercare as page } from '@/data/en/keratin-treatment-aftercare'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
