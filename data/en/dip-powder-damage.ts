import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, NAIL_PLATE_NOTE } from './common'

export const dipPowderDamage: EnPage = {
  path: '/en/dip-powder-damage',
  title: 'Does Dip Powder Damage Your Nails?',
  h1: 'Does Dip Powder Damage Your Nails?',
  description:
    'The application rarely damages nails; removal and over-buffing do. What actually causes the thinning people blame on dip powder.',
  keywords: ['does dip powder damage nails', 'dip powder thin nails', 'dip nails damage', 'nails after dip powder'],
  category: 'Nails',
  stage: 14,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Correctly applied and soaked off properly, the damage risk is low.** The thinning and peeling people attribute to dip powder is almost always caused by peeling a set off, or by aggressive buffing during prep. The product is rarely the culprit.',
  blocks: [
    { t: 'note', tone: 'warn', text: NAIL_PLATE_NOTE },
    { t: 'h2', id: 'risk-factors', text: 'Ranked by how much they actually matter' },
    {
      t: 'table',
      head: ['Cause', 'Risk'],
      rows: [
        ['Peeling or prying a set off', 'Highest, by a distance'],
        ['Aggressive buffing during prep', 'High'],
        ['Applying too many layers', 'Moderate — brittle and harder to remove'],
        ['Back-to-back sets with no break', 'Mild'],
        ['The application itself', 'Low'],
      ],
    },
    { t: 'p', text: 'The bottom row is the point of the page. **Nothing about laying powder onto a nail plate damages it.** Everything above it is something a person does with a tool or with impatience.' },
    { t: 'h2', id: 'why-thickness-matters', text: 'Why thickness is the hidden variable' },
    { t: 'p', text: 'Dip powder is applied thicker than gel polish. **Thicker product takes longer to soak off**, and the extra ten minutes is precisely when people lose patience and start levering.' },
    { t: 'p', text: '**Ask for fewer, thinner layers** if your nails are already thin. Extra layers do not add strength proportionally — they add removal time and brittleness, which is the wrong trade in both directions.' },
    {
      t: 'table',
      head: ['Layers', 'Effect'],
      rows: [
        ['2 thin layers', 'Adequate for most nails, fastest removal'],
        ['3 layers', 'Standard, more durable'],
        ['4+ layers', 'Brittle, noticeably thick, slow to remove'],
        ['Uneven layers', 'Lifts at the thin points'],
      ],
    },
    { t: 'h2', id: 'signs', text: 'What damage actually looks like' },
    { t: 'p', text: 'Thin, flexible nails. A white patchy surface. Peeling in layers at the free edge. Sensitivity to pressure. **All of it grows out** over several months — none of it is permanent.' },
    { t: 'p', text: 'The white patchiness is worth naming specifically, because the instinctive response makes it worse. **That texture is thinned nail plate**, and buffing it smooth removes more of what is left.' },
    { t: 'h2', id: 'reducing-risk', text: 'Reducing the risk' },
    {
      t: 'ol',
      items: [
        '**Always soak off. Never peel.** Everything else on this list is secondary.',
        '**Ask for light buffing only** during prep — the surface needs to be dull, not stripped.',
        '**Request thinner application** if your nails are already thin.',
        'Take a break between sets if nails feel compromised.',
        'Cuticle oil daily — flexible nails split less.',
        '**Do not reapply over lifting product.** Have it removed properly first.',
      ],
    },
    { t: 'h2', id: 'recovery', text: 'Recovery timeline' },
    { t: 'p', text: 'If a set has already been peeled off and your nails look rough, the arithmetic is simple: fingernails grow slowly, and you are waiting for the damaged section to reach the end.' },
    {
      t: 'table',
      head: ['Timeframe', 'What to expect'],
      rows: [
        ['Weeks 1 - 4', 'Nails feel thin and may split. Frustrating stage'],
        ['Months 2 - 3', 'New growth at the base looks normal'],
        ['Months 4 - 6', 'Fully grown out'],
      ],
    },
    { t: 'p', text: '**Nothing repairs the existing nail plate — it grows out.** Strengtheners reduce breakage while that happens, which is genuinely useful and is a different claim from repair.' },
    { t: 'h2', id: 'should-you-take-a-break', text: 'Do you need to take a break?' },
    { t: 'p', text: 'Not automatically. "Letting nails breathe" is not a physiological process — the nail plate is dead tissue and does not respire. The useful idea underneath that phrase is real, though: a break means you stop filing, buffing and soaking for a while.' },
    {
      t: 'table',
      head: ['Situation', 'Recommendation'],
      rows: [
        ['Nails feel fine, no thinning', 'No break needed'],
        ['Nails feel thin but not sore', 'A break helps, not essential'],
        ['Visible white patches', 'Break recommended'],
        ['Nails sore or sensitive', 'Take a break'],
        ['Nail lifting from the bed, or discoloured', 'See a doctor rather than deciding this yourself'],
      ],
    },
  ],
  faq: [
    { q: 'Is dip powder bad for your nails?', a: 'Not inherently. Removal technique is the main factor, and peeling a set off is what causes most of the damage people describe.' },
    { q: 'Why are my nails thin after dip?', a: 'Usually because a set was peeled off, or because of over-buffing during prep.' },
    { q: 'Is it worse than gel?', a: 'Not inherently, though the extra thickness makes removal slower and prying more tempting.' },
    { q: 'Should I take breaks between sets?', a: 'If nails feel thin or sore, yes. There is no physiological need for nails to "breathe", but a break stops the filing and soaking cycle.' },
    { q: 'Can I fix thin nails?', a: 'Products reduce breakage while they grow out. Nothing repairs the nail plate itself — it is dead tissue.' },
  ],
  related: [
    { href: '/en/dip-powder-removal', label: 'How to Remove Dip Powder Nails' },
    { href: '/en/do-nail-strengtheners-work', label: 'Do Nail Strengtheners Actually Work?' },
    { href: '/en/dip-powder-vs-gel', label: 'Dip Powder vs Gel Nails' },
  ],
}
