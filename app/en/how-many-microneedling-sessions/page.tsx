import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howManyMicroneedlingSessions as page } from '@/data/en/how-many-microneedling-sessions'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
