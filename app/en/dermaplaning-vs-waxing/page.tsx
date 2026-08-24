import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { dermaplaningVsWaxing as page } from '@/data/en/dermaplaning-vs-waxing'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
