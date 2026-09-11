import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { microneedlingBeforeAndAfter as page } from '@/data/en/microneedling-before-and-after'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
