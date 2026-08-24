import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { browLaminationTraining as page } from '@/data/en/brow-lamination-training'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
