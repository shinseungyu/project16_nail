import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { howToChooseACosmetologySchool as page } from '@/data/en/how-to-choose-a-cosmetology-school'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
