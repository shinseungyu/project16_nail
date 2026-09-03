import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { facialSteamerVsProfessionalFacial as page } from '@/data/en/facial-steamer-vs-professional-facial'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
