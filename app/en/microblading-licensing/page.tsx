import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { microbladingLicensing as page } from '@/data/en/microblading-licensing'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
