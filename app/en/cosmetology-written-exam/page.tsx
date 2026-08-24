import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { cosmetologyWrittenExam as page } from '@/data/en/cosmetology-written-exam'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
