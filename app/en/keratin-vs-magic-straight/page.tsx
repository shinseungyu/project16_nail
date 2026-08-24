import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { keratinVsMagicStraight as page } from '@/data/en/keratin-vs-magic-straight'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
