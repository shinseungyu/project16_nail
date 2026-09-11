import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { doHairExtensionsDamageHair as page } from '@/data/en/do-hair-extensions-damage-hair'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
