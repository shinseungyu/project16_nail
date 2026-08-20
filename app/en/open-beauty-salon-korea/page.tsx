import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { openBeautySalonKorea as page } from '@/data/en/open-beauty-salon-korea'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
