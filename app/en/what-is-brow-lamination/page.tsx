import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whatIsBrowLamination as page } from '@/data/en/what-is-brow-lamination'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
