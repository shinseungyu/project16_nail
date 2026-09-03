import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { lipBlushVsLipFiller as page } from '@/data/en/lip-blush-vs-lip-filler'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
