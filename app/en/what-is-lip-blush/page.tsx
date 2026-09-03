import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whatIsLipBlush as page } from '@/data/en/what-is-lip-blush'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
