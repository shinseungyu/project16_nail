import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { brazilianBlowoutVsKeratin as page } from '@/data/en/brazilian-blowout-vs-keratin'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
