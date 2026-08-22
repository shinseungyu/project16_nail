import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { nailTechSalary as page } from '@/data/en/nail-tech-salary'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
