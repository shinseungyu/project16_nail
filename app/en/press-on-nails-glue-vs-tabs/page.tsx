import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { pressOnNailsGlueVsTabs as page } from '@/data/en/press-on-nails-glue-vs-tabs'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
