import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { workBeautyIndustryKorea as page } from '@/data/en/work-beauty-industry-korea'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
