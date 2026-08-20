import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { eyelashExtensionsKorea as page } from '@/data/en/eyelash-extensions-korea'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
