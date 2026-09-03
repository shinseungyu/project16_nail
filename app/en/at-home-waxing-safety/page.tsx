import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { atHomeWaxingSafety as page } from '@/data/en/at-home-waxing-safety'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
