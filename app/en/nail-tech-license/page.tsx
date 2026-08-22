import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { nailTechLicense as page } from '@/data/en/nail-tech-license'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
