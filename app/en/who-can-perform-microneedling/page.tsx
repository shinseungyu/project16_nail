import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whoCanPerformMicroneedling as page } from '@/data/en/who-can-perform-microneedling'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
