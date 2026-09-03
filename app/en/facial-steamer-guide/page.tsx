import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { facialSteamerGuide as page } from '@/data/en/facial-steamer-guide'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
