import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { massageTherapistCareerLongevity as page } from '@/data/en/massage-therapist-career-longevity'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
