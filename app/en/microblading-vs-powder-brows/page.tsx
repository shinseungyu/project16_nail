import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { microbladingVsPowderBrows as page } from '@/data/en/microblading-vs-powder-brows'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
