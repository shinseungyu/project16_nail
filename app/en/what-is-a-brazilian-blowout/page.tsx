import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whatIsABrazilianBlowout as page } from '@/data/en/what-is-a-brazilian-blowout'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
