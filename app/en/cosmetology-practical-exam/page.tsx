import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { cosmetologyPracticalExam as page } from '@/data/en/cosmetology-practical-exam'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
