import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howOftenHydrafacial as page } from '@/data/en/how-often-hydrafacial'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
