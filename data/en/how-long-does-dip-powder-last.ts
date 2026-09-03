import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, DIP_HYGIENE_NOTE } from './common'

export const howLongDoesDipPowderLast: EnPage = {
  path: '/en/how-long-does-dip-powder-last',
  title: 'How Long Does Dip Powder Last?',
  h1: 'How Long Does Dip Powder Last?',
  description:
    'Dip powder lasts three to four weeks. What causes early lifting, and how to get the full wear out of a set.',
  keywords: ['how long does dip powder last', 'dip powder lifting', 'dip nails wear time', 'dip powder fills'],
  category: 'Nails',
  stage: 0,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**Three to four weeks, slightly longer than gel polish.** Lifting before two weeks almost always traces back to preparation rather than the product — which is good news, because prep is fixable.',
  blocks: [
    { t: 'note', tone: 'warn', text: DIP_HYGIENE_NOTE },
    { t: 'h2', id: 'timeline', text: 'Week by week' },
    {
      t: 'table',
      head: ['Week', 'What you will see'],
      rows: [
        ['1', 'Looks new'],
        ['2', 'Slight regrowth visible at the cuticle'],
        ['3', 'Regrowth noticeable — the typical redo window'],
        ['4', 'Gap obvious, lifting risk rises'],
        ['5+', 'Structural weakness, catching and snagging'],
      ],
    },
    { t: 'p', text: 'Week five is where problems start. **Product that has grown out is levered by everything you touch**, and once an edge lifts, water gets underneath and stays there.' },
    { t: 'h2', id: 'why-yours-lift', text: 'Why yours lifted early' },
    { t: 'p', text: 'Early lifting is nearly always one of these, and most of them are technique rather than luck.' },
    {
      t: 'table',
      head: ['Cause', 'Fix'],
      rows: [
        ['Oils not removed during prep', 'Dehydrator before the base coat'],
        ['Product touching cuticle or sidewalls', 'Leave a hairline margin off the skin'],
        ['Too many layers', 'Thicker is not stronger — it is more brittle'],
        ['Activator applied too soon or too late', 'Technique; raise it with your technician'],
        ['Water exposure in the first couple of hours', 'Wait before washing up'],
        ['Very flexible natural nails', 'Fewer, thinner layers'],
      ],
    },
    { t: 'p', text: 'The second row is the most common and the easiest to spot. **If the product reaches your skin anywhere, it will lift there first** — skin moves, product does not.' },
    { t: 'h2', id: 'fills-vs-redo', text: 'Fills versus a full redo' },
    { t: 'p', text: '**Dip powder is typically redone rather than filled.** Some salons offer fills, but the layered structure makes a full soak-off and reapplication more common, and the result is usually cleaner.' },
    {
      t: 'table',
      head: ['', 'Fill', 'Full redo'],
      rows: [
        ['Availability', 'Some salons only', 'Standard'],
        ['Appointment length', 'Shorter', 'Longer — includes removal'],
        ['Cost', 'Lower', 'Full price'],
        ['Build-up over time', 'Accumulates', 'Reset each time'],
        ['Best for', 'Stretching one extra cycle', 'The normal rhythm'],
      ],
    },
    { t: 'p', text: '**Ask when booking**, because it changes both the price and how long you will be there. A salon that does not offer fills is not being awkward — for a layered system it is often the better call.' },
    { t: 'h2', id: 'making-it-last', text: 'Making it last' },
    { t: 'p', text: 'None of this is exotic. It is the same short list that decides how long any enhancement lasts.' },
    {
      t: 'ol',
      items: [
        '**Cuticle oil daily.** Flexible nails and skin flex with the product instead of levering it off.',
        '**Gloves for washing up and cleaning.** Water cycling is what breaks the seal.',
        '**Do not use your nails as tools.** Openers, scrapers, keyboard shortcuts with a fingernail edge.',
        '**Keep the length moderate.** Longer nails are longer levers.',
        '**Do not pick at a lifted edge.** Book a repair instead — picking takes nail plate with it.',
      ],
    },
    { t: 'h2', id: 'when-to-go-back', text: 'When to book the next appointment' },
    { t: 'p', text: 'Booking on a fixed rhythm beats waiting until it looks bad, because by the time it looks bad the lifting has usually already started.' },
    {
      t: 'table',
      head: ['Situation', 'Timing'],
      rows: [
        ['Normal wear, nails in good condition', 'Every 3 - 4 weeks'],
        ['Fast nail growth', 'Closer to 3 weeks'],
        ['Any lifting appearing', 'Book sooner — do not wait'],
        ['Nails feel thin or sore', 'Take a break before the next set'],
        ['A single nail has lifted', 'Ask for a repair rather than picking it'],
      ],
    },
    { t: 'p', text: 'The third row is the one to act on. **A lifted edge is not a cosmetic problem, it is a moisture trap**, and leaving it for another fortnight is how a nail issue starts.' },
  ],
  faq: [
    { q: 'How long does dip powder last?', a: 'Three to four weeks, with the typical redo window at around week three.' },
    { q: 'Can I get fills?', a: 'Some salons offer them, but many prefer a full soak-off and reapplication because of the layered structure. Ask when booking.' },
    { q: 'Why did mine lift after a week?', a: 'Usually prep — oils not fully removed, or product touching the cuticle and sidewalls where skin moves.' },
    { q: 'Does it last longer than gel?', a: 'Usually by about a week.' },
    { q: 'How can I make it last longer?', a: 'Cuticle oil daily and gloves for wet work make the biggest difference by a wide margin.' },
  ],
  related: [
    { href: '/en/dip-powder-removal', label: 'How to Remove Dip Powder Nails' },
    { href: '/en/dip-powder-vs-gel', label: 'Dip Powder vs Gel Nails' },
    { href: '/en/what-are-dip-powder-nails', label: 'What Are Dip Powder Nails?' },
  ],
}
