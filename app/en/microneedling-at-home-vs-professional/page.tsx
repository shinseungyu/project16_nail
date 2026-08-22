import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { microneedlingAtHomeVsProfessional as page } from '@/data/en/microneedling-at-home-vs-professional'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
