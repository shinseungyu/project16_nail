import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { personalColorKorea as page } from '@/data/en/personal-color-korea'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
