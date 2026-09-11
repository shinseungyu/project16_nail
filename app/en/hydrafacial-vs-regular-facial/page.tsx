import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { hydrafacialVsRegularFacial as page } from '@/data/en/hydrafacial-vs-regular-facial'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
