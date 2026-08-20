import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { skinClinicVsSalon as page } from '@/data/en/skin-clinic-vs-salon'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
