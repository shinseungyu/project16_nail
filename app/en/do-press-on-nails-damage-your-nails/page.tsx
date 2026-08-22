import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { doPressOnNailsDamageYourNails as page } from '@/data/en/do-press-on-nails-damage-your-nails'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
