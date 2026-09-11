import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whatIsABackFacial as page } from '@/data/en/what-is-a-back-facial'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
