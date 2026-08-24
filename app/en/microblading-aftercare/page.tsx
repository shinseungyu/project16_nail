import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { microbladingAftercare as page } from '@/data/en/microblading-aftercare'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
