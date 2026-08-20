import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { volumeMagicPerm as page } from '@/data/en/volume-magic-perm'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
