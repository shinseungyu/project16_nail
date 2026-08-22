import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { onlineEstheticianSchool as page } from '@/data/en/online-esthetician-school'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
