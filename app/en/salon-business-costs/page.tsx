import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { salonBusinessCosts as page } from '@/data/en/salon-business-costs'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
