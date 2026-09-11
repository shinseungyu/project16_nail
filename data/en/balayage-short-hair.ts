import type { EnPage } from './types'
import { EN_UPDATED_BATCH7, EN_UPDATED_BATCH7_ISO } from './common'

export const balayageShortHair: EnPage = {
  path: '/en/balayage-short-hair',
  title: 'Balayage on Short Hair: Does It Work?',
  h1: 'Balayage on Short Hair',
  description:
    'Balayage works on short hair, but placement matters far more because there is less length for the gradient to develop.',
  keywords: ['balayage short hair', 'balayage on short hair', 'short hair balayage', 'balayage bob'],
  category: 'Hair Colour',
  stage: 16,
  updated: EN_UPDATED_BATCH7,
  updatedIso: EN_UPDATED_BATCH7_ISO,
  lead:
    '**Yes, but placement matters much more.** Balayage relies on a gradient, and short hair gives that gradient less length to develop — so the result depends on precise placement rather than on length doing the blending for you.',
  blocks: [
    { t: 'h2', id: 'why-different', text: 'Why short hair is different' },
    {
      t: 'table',
      head: ['', 'Long hair', 'Short hair'],
      rows: [
        ['Length for the gradient', 'Plenty', 'Limited'],
        ['Margin for error', 'More', 'Less — mistakes are visible'],
        ['Root-to-end blend', 'Gradual', 'Compressed'],
        ['Grow-out', 'Forgiving', 'Shows sooner'],
        ['Colourist skill required', 'High', 'Higher'],
      ],
    },
    {
      t: 'p',
      text: 'On short hair the transition happens over a few inches rather than a foot. That compression is the whole story: every placement decision is visible, and there is no length further down to soften a section painted slightly too high. It is also why [Balayage vs Highlights](/en/balayage-vs-highlights) notes that very short hair gives balayage less canvas to work with.',
    },
    { t: 'h2', id: 'what-works', text: 'What works on short hair' },
    {
      t: 'table',
      head: ['Approach', 'Note'],
      rows: [
        ['Face-framing brightness', 'The most reliable result on short hair'],
        ['Lightening the ends and tips', 'Works well on bobs and lobs'],
        ['Placement that follows the cut', 'The lightness should echo the shape of the haircut'],
        ['Subtle, closer-toned lightening', 'Reads as dimension rather than stripes'],
        ['Brightness through the surface layers', 'Where movement shows it off'],
      ],
    },
    { t: 'h2', id: 'whats-harder', text: 'What is harder' },
    {
      t: 'table',
      head: ['', 'Why'],
      rows: [
        ['Dramatic dark-to-light gradients', 'Not enough length for the fade'],
        ['Very high contrast', 'Can look striped rather than blended'],
        ['Hiding grow-out', 'Less length to blend a root into'],
        ['Pixie cuts', 'A very limited canvas — possible, but a different technique conversation'],
      ],
    },
    {
      t: 'p',
      text: 'If your hair is dark as well as short, both limits apply at once. [Balayage on Dark Hair](/en/balayage-dark-hair) explains why going much lighter takes several sessions regardless of length.',
    },
    { t: 'h2', id: 'by-length', text: 'By length' },
    {
      t: 'table',
      head: ['Cut', 'How it typically goes'],
      rows: [
        ['Lob (long bob)', 'The easiest short length'],
        ['Classic bob', 'Works well with good placement'],
        ['Chin-length', 'Placement-critical'],
        ['Pixie', 'A different technique conversation — ask a colourist directly'],
      ],
    },
    { t: 'h2', id: 'cost', text: 'Cost and maintenance' },
    {
      t: 'table',
      head: ['Item', 'Typical'],
      rows: [
        ['Short-hair balayage', '$120 - 250'],
        ['Toner or gloss', '$30 - 80'],
        ['Refresh interval', 'Every 8 - 16 weeks'],
      ],
      note: 'Prices vary by region and salon.',
    },
    {
      t: 'p',
      text: 'Short hair usually costs less per service — less product, less time — but needs refreshing sooner, because the same half-inch of regrowth is a far larger share of a bob than of hair past the shoulders. Over a year the two can land closer together than the per-visit price suggests. [How Much Does Balayage Cost?](/en/balayage-cost) has the full breakdown.',
    },
    { t: 'h2', id: 'colourist', text: 'Finding the right colourist' },
    {
      t: 'ol',
      items: [
        '**Look for short-hair balayage specifically** in their portfolio, not just balayage.',
        '**Ask how they handle the compressed gradient** on your length.',
        '**Bring reference photos of a similar cut length.** Long-hair photos are not useful for a short-hair appointment.',
        '**Ask what it will look like growing out** at six and ten weeks.',
        '**Ask about refresh frequency** for your length before you book.',
      ],
    },
    { t: 'h2', id: 'damage', text: 'On damage' },
    {
      t: 'p',
      text: 'Lightening is lightening at any length, and no balayage is damage-free. On short hair the total amount of lightened hair is smaller, and short cuts are trimmed more often, so older lightened ends leave sooner — but the same principles apply: aftercare, glossing, and an honest conversation about your hair’s condition. See [Does Balayage Damage Your Hair?](/en/balayage-damage).',
    },
  ],
  faq: [
    { q: 'Does balayage work on short hair?', a: 'Yes, though placement matters much more because there is less length for the gradient to develop.' },
    { q: 'Which short cut works best for balayage?', a: 'A lob is generally the easiest; bobs work well with good placement.' },
    { q: 'Is short-hair balayage cheaper?', a: 'Usually, because it uses less product and less time in the chair.' },
    { q: 'How often does short-hair balayage need redoing?', a: 'Typically every 8 to 16 weeks — sooner than long hair, since grow-out shows more.' },
    { q: 'Can you do balayage on a pixie cut?', a: 'It is a different technique conversation. Discuss it with a colourist directly.' },
  ],
  related: [
    { href: '/en/balayage-cost', label: 'How Much Does Balayage Cost?' },
    { href: '/en/balayage-maintenance', label: 'Balayage Maintenance' },
    { href: '/en/partial-vs-full-balayage', label: 'Partial vs Full Balayage' },
  ],
}
