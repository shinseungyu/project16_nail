import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { nailDustCollector as page } from '@/data/en/nail-dust-collector'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
