import EnArticle from '@/components/en/EnArticle'
import { enMetadata } from '@/lib/en-meta'
import { dipPowderDamage as page } from '@/data/en/dip-powder-damage'

export const metadata = enMetadata(page)

export default function Page() {
  return <EnArticle page={page} />
}
