import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { estheticianScopeOfPractice as page } from '@/data/en/esthetician-scope-of-practice'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
