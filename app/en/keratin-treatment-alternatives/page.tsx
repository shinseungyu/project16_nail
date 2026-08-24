import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { keratinTreatmentAlternatives as page } from '@/data/en/keratin-treatment-alternatives'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
