import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whatIsAChemicalPeel as page } from '@/data/en/what-is-a-chemical-peel'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
