import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { whatIsMicroblading as page } from '@/data/en/what-is-microblading'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
