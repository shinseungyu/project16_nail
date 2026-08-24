import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { cosmetologyApprenticeship as page } from '@/data/en/cosmetology-apprenticeship'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
