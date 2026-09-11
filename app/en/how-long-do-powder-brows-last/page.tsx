import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howLongDoPowderBrowsLast as page } from '@/data/en/how-long-do-powder-brows-last'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
