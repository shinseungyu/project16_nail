import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { acrylicNailApplication as page } from '@/data/en/acrylic-nail-application'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
