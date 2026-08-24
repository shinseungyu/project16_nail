import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { dermaplaningHairGrowth as page } from '@/data/en/dermaplaning-hair-growth'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
