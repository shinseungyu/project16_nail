import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { lashCertification as page } from '@/data/en/lash-certification'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
