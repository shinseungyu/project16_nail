import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { isMicroneedlingWorthIt as page } from '@/data/en/is-microneedling-worth-it'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
