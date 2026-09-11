import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { medicalEstheticianSalary as page } from '@/data/en/medical-esthetician-salary'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
