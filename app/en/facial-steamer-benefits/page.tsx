import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { facialSteamerBenefits as page } from '@/data/en/facial-steamer-benefits'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
