import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { aquaPeel as page } from '@/data/en/aqua-peel'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
