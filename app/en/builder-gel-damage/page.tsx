import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { builderGelDamage as page } from '@/data/en/builder-gel-damage'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
