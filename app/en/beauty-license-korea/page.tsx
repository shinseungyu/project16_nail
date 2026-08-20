import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { beautyLicenseKorea as page } from '@/data/en/beauty-license-korea'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
