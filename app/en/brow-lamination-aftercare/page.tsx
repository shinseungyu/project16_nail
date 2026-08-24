import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { browLaminationAftercare as page } from '@/data/en/brow-lamination-aftercare'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
