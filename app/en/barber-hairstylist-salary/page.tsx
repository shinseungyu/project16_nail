import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { barberHairstylistSalary as page } from '@/data/en/barber-hairstylist-salary'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
