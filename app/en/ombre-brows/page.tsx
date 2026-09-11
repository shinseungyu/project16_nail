import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { ombreBrows as page } from '@/data/en/ombre-brows'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
