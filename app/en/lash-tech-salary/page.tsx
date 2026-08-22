import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { lashTechSalary as page } from '@/data/en/lash-tech-salary'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
