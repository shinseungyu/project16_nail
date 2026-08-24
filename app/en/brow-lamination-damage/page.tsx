import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { browLaminationDamage as page } from '@/data/en/brow-lamination-damage'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
