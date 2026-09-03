import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howToUseAFacialSteamer as page } from '@/data/en/how-to-use-a-facial-steamer'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
