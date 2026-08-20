import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { nailSalonKorea as page } from '@/data/en/nail-salon-korea'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
