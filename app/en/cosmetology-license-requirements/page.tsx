import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { cosmetologyLicenseRequirements as page } from '@/data/en/cosmetology-license-requirements'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
