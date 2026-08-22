import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { microneedlingHealingTime as page } from '@/data/en/microneedling-healing-time'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
