import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { cosmetologyLicenseRenewal as page } from '@/data/en/cosmetology-license-renewal'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
