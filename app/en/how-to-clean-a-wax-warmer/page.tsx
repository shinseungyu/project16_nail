import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howToCleanAWaxWarmer as page } from '@/data/en/how-to-clean-a-wax-warmer'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
