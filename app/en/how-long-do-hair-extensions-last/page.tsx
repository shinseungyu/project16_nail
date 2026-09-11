import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howLongDoHairExtensionsLast as page } from '@/data/en/how-long-do-hair-extensions-last'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
