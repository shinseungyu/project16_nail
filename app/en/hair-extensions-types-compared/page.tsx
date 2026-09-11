import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { hairExtensionsTypesCompared as page } from '@/data/en/hair-extensions-types-compared'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
