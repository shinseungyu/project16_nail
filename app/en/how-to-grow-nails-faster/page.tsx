import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howToGrowNailsFaster as page } from '@/data/en/how-to-grow-nails-faster'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
