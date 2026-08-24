import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { estheticianStateBoardExam as page } from '@/data/en/esthetician-state-board-exam'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
