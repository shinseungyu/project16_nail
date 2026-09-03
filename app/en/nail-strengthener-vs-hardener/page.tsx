import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { nailStrengthenerVsHardener as page } from '@/data/en/nail-strengthener-vs-hardener'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
