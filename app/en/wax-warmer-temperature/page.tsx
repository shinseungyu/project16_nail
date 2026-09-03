import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { waxWarmerTemperature as page } from '@/data/en/wax-warmer-temperature'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
