import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howToBecomeMedicalEsthetician as page } from '@/data/en/how-to-become-medical-esthetician'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
