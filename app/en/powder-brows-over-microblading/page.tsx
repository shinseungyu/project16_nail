import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { powderBrowsOverMicroblading as page } from '@/data/en/powder-brows-over-microblading'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
