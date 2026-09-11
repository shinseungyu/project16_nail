import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { backFacialWhatToExpect as page } from '@/data/en/back-facial-what-to-expect'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
