import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { massageTherapistSalary as page } from '@/data/en/massage-therapist-salary'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
