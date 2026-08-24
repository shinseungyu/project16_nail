import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howLongDoesABrazilianBlowoutLast as page } from '@/data/en/how-long-does-a-brazilian-blowout-last'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
