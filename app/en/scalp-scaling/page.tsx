import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { scalpScaling as page } from '@/data/en/scalp-scaling'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
