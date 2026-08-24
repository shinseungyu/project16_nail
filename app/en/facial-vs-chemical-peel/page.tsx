import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { facialVsChemicalPeel as page } from '@/data/en/facial-vs-chemical-peel'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
