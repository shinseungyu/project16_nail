import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { microbladingHealingProcess as page } from '@/data/en/microblading-healing-process'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
