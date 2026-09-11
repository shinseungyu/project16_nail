import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { microneedlingForAcneScars as page } from '@/data/en/microneedling-for-acne-scars'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
