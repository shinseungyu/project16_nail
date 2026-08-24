import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { choosingAMicrobladingArtist as page } from '@/data/en/choosing-a-microblading-artist'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
