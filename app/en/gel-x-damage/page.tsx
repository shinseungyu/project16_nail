import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { gelXDamage as page } from '@/data/en/gel-x-damage'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
