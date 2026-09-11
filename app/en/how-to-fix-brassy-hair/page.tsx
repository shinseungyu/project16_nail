import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howToFixBrassyHair as page } from '@/data/en/how-to-fix-brassy-hair'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
