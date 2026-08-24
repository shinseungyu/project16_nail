import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { browLaminationVsMicroblading as page } from '@/data/en/brow-lamination-vs-microblading'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
