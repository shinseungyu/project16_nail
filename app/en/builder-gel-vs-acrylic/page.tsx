import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { builderGelVsAcrylic as page } from '@/data/en/builder-gel-vs-acrylic'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
