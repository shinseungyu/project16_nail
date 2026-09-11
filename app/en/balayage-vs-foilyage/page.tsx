import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { balayageVsFoilyage as page } from '@/data/en/balayage-vs-foilyage'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
