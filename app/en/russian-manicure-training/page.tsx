import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { russianManicureTraining as page } from '@/data/en/russian-manicure-training'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
