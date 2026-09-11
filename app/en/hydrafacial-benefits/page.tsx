import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { hydrafacialBenefits as page } from '@/data/en/hydrafacial-benefits'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
