import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { estheticianSalary as page } from '@/data/en/esthetician-salary'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
