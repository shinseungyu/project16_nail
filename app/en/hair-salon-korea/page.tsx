import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { hairSalonKorea as page } from '@/data/en/hair-salon-korea'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
