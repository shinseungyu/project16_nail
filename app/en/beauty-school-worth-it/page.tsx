import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { beautySchoolWorthIt as page } from '@/data/en/beauty-school-worth-it'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
