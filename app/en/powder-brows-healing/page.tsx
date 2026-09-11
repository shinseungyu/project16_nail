import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { powderBrowsHealing as page } from '@/data/en/powder-brows-healing'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
