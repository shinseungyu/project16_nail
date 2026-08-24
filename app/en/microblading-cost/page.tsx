import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { microbladingCost as page } from '@/data/en/microblading-cost'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
