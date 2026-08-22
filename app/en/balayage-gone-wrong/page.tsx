import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { balayageGoneWrong as page } from '@/data/en/balayage-gone-wrong'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
