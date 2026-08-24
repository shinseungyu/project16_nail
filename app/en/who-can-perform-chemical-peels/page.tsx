import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whoCanPerformChemicalPeels as page } from '@/data/en/who-can-perform-chemical-peels'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
