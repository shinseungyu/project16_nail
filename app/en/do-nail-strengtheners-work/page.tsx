import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { doNailStrengthenersWork as page } from '@/data/en/do-nail-strengtheners-work'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
