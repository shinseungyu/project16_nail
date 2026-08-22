import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { balayageVsOmbre as page } from '@/data/en/balayage-vs-ombre'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
