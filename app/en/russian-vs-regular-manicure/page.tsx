import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { russianVsRegularManicure as page } from '@/data/en/russian-vs-regular-manicure'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
