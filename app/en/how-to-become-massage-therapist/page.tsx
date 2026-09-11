import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howToBecomeMassageTherapist as page } from '@/data/en/how-to-become-massage-therapist'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
