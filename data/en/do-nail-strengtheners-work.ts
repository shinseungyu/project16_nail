import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, NAIL_PLATE_NOTE } from './common'

export const doNailStrengthenersWork: EnPage = {
  path: '/en/do-nail-strengtheners-work',
  title: 'Do Nail Strengtheners Actually Work?',
  h1: 'Do Nail Strengtheners Actually Work?',
  description:
    'Nail strengtheners reduce breakage while nails grow, but they do not repair damage. What they can do, what they cannot, and how to use them.',
  keywords: ['do nail strengtheners work', 'nail strengthener', 'nail hardener', 'weak nails treatment'],
  category: 'Nail Care',
  stage: 15,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**They reduce breakage and improve flexibility while your nails grow out — that is genuinely useful.** But **the nail plate is dead tissue, so nothing repairs existing damage.** Any product claiming to repair or heal nails is overstating what is possible.',
  blocks: [
    { t: 'note', tone: 'warn', text: NAIL_PLATE_NOTE },
    { t: 'h2', id: 'can-and-cannot', text: 'What they can and cannot do' },
    {
      t: 'table',
      head: ['Can', 'Cannot'],
      rows: [
        ['Reduce splitting and peeling', 'Repair the nail plate'],
        ['Improve flexibility', 'Make nails grow faster'],
        ['Add a protective surface layer', 'Cure infection or disease'],
        ['Reduce breakage while nails grow', 'Reverse existing damage'],
        ['Improve appearance', 'Change nail structure permanently'],
      ],
    },
    { t: 'p', text: '**The nail plate you have now is what grows out.** Products help you keep more of it attached in the meantime, which over three months is the difference between length and no length. That is a real benefit — it is just not the benefit the packaging usually describes.' },
    { t: 'h2', id: 'types', text: 'The types' },
    {
      t: 'table',
      head: ['Type', 'How it works', 'Best for'],
      rows: [
        ['Protein or keratin', 'Adds a film containing protein', 'Peeling, splitting'],
        ['Hydrating or oil-based', 'Improves flexibility', 'Brittle, dry nails'],
        ['Hardening (often formaldehyde-based)', 'Cross-links the surface', 'Genuinely soft nails — use with caution'],
        ['Ridge filler', 'Smooths the surface', 'Cosmetic only'],
      ],
    },
    { t: 'h2', id: 'hard-vs-flexible', text: 'Hard versus flexible — the common mistake' },
    { t: 'p', text: '**Most people who think their nails are "weak" have brittle nails, not soft ones.** Those need opposite treatments, and picking wrong actively makes things worse.' },
    {
      t: 'table',
      head: ['Your problem', 'What you need'],
      rows: [
        ['Nails snap and split', 'Hydration — more flexibility'],
        ['Nails bend and tear like paper', 'Hardening — more rigidity'],
      ],
    },
    { t: 'p', text: '**Using a hardener on already-brittle nails makes them more brittle**, which is the most common self-inflicted problem in this category. The nails get harder, then crack more dramatically instead of bending, and the usual conclusion is that more hardener is needed.' },
    { t: 'h2', id: 'formaldehyde', text: 'On formaldehyde-based hardeners' },
    { t: 'p', text: 'Some nail hardeners contain formaldehyde or formaldehyde-releasing ingredients. **Overuse has been associated with nails becoming excessively hard and more prone to cracking**, and some people experience irritation around the nail folds.' },
    { t: 'p', text: '**Follow the product’s stated usage frequency.** More is not better with these — several are specifically not intended for continuous daily use, and the instruction is on the bottle for a reason.' },
    { t: 'h2', id: 'how-to-use', text: 'Getting the most out of one' },
    { t: 'p', text: 'A strengthener is one item in a routine, and it is not the item doing most of the work.' },
    {
      t: 'ol',
      items: [
        '**Work out whether you are brittle or soft first.** Everything else follows from that.',
        '**Apply to clean, dry nails**, including the free edge.',
        '**Follow the stated frequency** — daily for most hydrating types, limited for many hardeners.',
        '**Pair it with cuticle oil**, which does more for flexibility than any polish-format product.',
        '**Give it three months** before judging. That is roughly one full nail growth cycle.',
        'Keep nails shorter while you assess — less leverage, less breakage, clearer signal.',
      ],
    },
    { t: 'h2', id: 'what-else-helps', text: 'What helps more than the product' },
    { t: 'p', text: 'This is worth saying plainly, because the highest-return habits are free or nearly so.' },
    {
      t: 'table',
      head: ['Habit', 'Why it matters'],
      rows: [
        ['Gloves for washing up and cleaning', 'Water cycling is the main cause of brittleness'],
        ['Cuticle oil twice daily', 'Flexible nails split less — the biggest single lever'],
        ['Stop peeling off gel, dip or press-ons', 'Removes plate layers directly'],
        ['Less buffing', 'Buffing thins the surface'],
        ['Filing in one direction', 'Sawing back and forth causes splits'],
        ['Not using nails as tools', 'Obvious, and routinely ignored'],
      ],
    },
    { t: 'p', text: 'If you do all of that and still see no change after three months, **that is the point to ask a doctor** rather than to buy a stronger product.' },
  ],
  faq: [
    { q: 'Do nail strengtheners work?', a: 'They reduce breakage and improve flexibility while nails grow. They do not repair existing damage.' },
    { q: 'Can they repair damaged nails?', a: 'No — the nail plate is dead tissue. Damage grows out over several months.' },
    { q: 'Which type should I use?', a: 'Hydrating for brittle nails that snap and split; hardening for genuinely soft nails that bend and tear.' },
    { q: 'Can I use one every day?', a: 'Follow the product’s instructions. Several hardeners specifically should not be used continuously.' },
    { q: 'How long until I see a difference?', a: 'Reduced breakage can show within weeks; a full growth-out takes several months.' },
  ],
  related: [
    { href: '/en/nail-strengthener-vs-hardener', label: 'Nail Strengthener vs Hardener' },
    { href: '/en/why-are-my-nails-peeling', label: 'Why Are My Nails Peeling?' },
    { href: '/en/how-to-grow-nails-faster', label: 'How to Grow Your Nails Faster' },
  ],
}
