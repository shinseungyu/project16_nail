import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howLongDoesBrowLaminationLast as page } from '@/data/en/how-long-does-brow-lamination-last'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
