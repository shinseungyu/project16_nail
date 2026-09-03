import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { hardWaxVsSoftWax as page } from '@/data/en/hard-wax-vs-soft-wax'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
