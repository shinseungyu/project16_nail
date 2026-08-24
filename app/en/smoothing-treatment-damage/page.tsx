import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { smoothingTreatmentDamage as page } from '@/data/en/smoothing-treatment-damage'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
