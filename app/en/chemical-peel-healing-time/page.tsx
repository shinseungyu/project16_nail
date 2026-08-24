import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { chemicalPeelHealingTime as page } from '@/data/en/chemical-peel-healing-time'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
