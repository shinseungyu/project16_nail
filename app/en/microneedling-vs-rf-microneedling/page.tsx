import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { microneedlingVsRfMicroneedling as page } from '@/data/en/microneedling-vs-rf-microneedling'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
