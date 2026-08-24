import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whatIsAKeratinTreatment as page } from '@/data/en/what-is-a-keratin-treatment'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
