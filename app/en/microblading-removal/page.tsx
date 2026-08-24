import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { microbladingRemoval as page } from '@/data/en/microblading-removal'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
