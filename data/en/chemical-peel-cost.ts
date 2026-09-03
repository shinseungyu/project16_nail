import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, MED_DISCLAIMER } from './common'

export const chemicalPeelCost: EnPage = {
  path: '/en/chemical-peel-cost',
  title: 'Chemical Peel Cost by Depth: Superficial to Deep',
  h1: 'How Much Does a Chemical Peel Cost?',
  description:
    'Superficial peels run $100 to $250, medium $250 to $600, deep $1,500 and up. Why depth changes the price so dramatically and what is not included.',
  keywords: ['chemical peel cost', 'how much is a chemical peel', 'chemical peel price', 'deep peel cost'],
  category: 'Skin Treatments',
  stage: 10,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**Roughly $100 to $250 for superficial peels, $250 to $600 for medium, and $1,500 to $6,000 or more for deep peels.** That spread reflects genuinely different procedures rather than different pricing of the same thing. Prices vary by provider and region.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_DISCLAIMER },
    { t: 'h2', id: 'by-depth', text: 'Cost by depth' },
    { t: 'p', text: 'Depth is the dominant factor, and it is dominant by an order of magnitude. A superficial peel is a short appointment with a low-strength solution; a deep peel is a physician-performed procedure that may involve sedation and monitored recovery.' },
    {
      t: 'table',
      head: ['Depth', 'Per session', 'Sessions typically', 'Realistic total'],
      rows: [
        ['Superficial', '$100 - 250', '3 - 6 in a series', '$300 - 1,500'],
        ['Medium', '$250 - 600', '1 - 3', '$250 - 1,800'],
        ['Deep', '$1,500 - 6,000+', 'Usually one', '$1,500 - 6,000+'],
      ],
      note: 'Ranges are typical US pricing and vary by provider and region.',
    },
    { t: 'p', text: 'The right-hand column is the one worth reading twice. **A $150 superficial peel recommended six times is a $900 decision**, not a $150 one, and that is the number to compare against alternatives.' },
    { t: 'h2', id: 'what-changes-price', text: 'What changes the price' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Depth', 'The dominant factor by a wide margin'],
        ['Provider setting', 'Medspa, dermatology clinic and day spa price differently'],
        ['Who performs it', 'Physician time costs more than esthetician time'],
        ['Treatment area', 'Face, face plus neck, or body'],
        ['Pre-treatment protocol', 'Some peels require weeks of prep products first'],
        ['Aftercare products', 'Sometimes included, often not'],
        ['Region', 'Metro areas carry a premium'],
      ],
    },
    { t: 'h2', id: 'not-included', text: 'What is often not included' },
    { t: 'p', text: 'The quoted price is usually for the appointment itself. These are the items that turn up afterwards and account for most of the surprise.' },
    {
      t: 'ul',
      items: [
        '**Pre-treatment skincare**, which can run $80 to $250 and is sometimes required before the first appointment.',
        '**Post-procedure products** — a bland cleanser, a barrier moisturiser and a sunscreen you will actually reapply.',
        '**Follow-up appointments**, particularly after medium peels.',
        '**Additional sessions in a series**, which is where superficial peel budgets quietly double.',
        '**Time off**, which is a real cost after a medium peel even though nobody puts it on the invoice.',
      ],
    },
    { t: 'note', title: 'Ask for the total plan cost, in writing', text: 'The single most useful question at a consultation is not "how much is this peel" but "what does the whole plan cost, including products and follow-ups". A provider who can answer that clearly is easier to trust on everything else.' },
    { t: 'h2', id: 'comparison', text: 'How it compares with other treatments' },
    { t: 'p', text: 'Peels sit in the middle of the treatment market. The comparison that matters is usually against whatever else you were considering for the same concern.' },
    {
      t: 'table',
      head: ['Treatment', 'Typical per session'],
      rows: [
        ['Basic facial', '$75 - 200'],
        ['Dermaplaning', '$75 - 200'],
        ['Superficial peel', '$100 - 250'],
        ['Medium peel', '$250 - 600'],
        ['Microneedling', '$200 - 800'],
        ['Deep peel', '$1,500 - 6,000+'],
      ],
    },
    { t: 'p', text: 'Per-session pricing flatters treatments that need repeating. **Compare programmes, not appointments.** Six superficial peels and three microneedling sessions can land within a hundred dollars of each other despite looking very different on a price list.' },
    { t: 'h2', id: 'cheap-peels', text: 'When a low price is worth a second look' },
    { t: 'p', text: 'Low prices are not automatically a warning sign — a superficial peel genuinely is a short appointment with an inexpensive solution. What matters is what the price implies about assessment and depth.' },
    {
      t: 'table',
      head: ['Situation', 'What to ask'],
      rows: [
        ['Deeply discounted package of six', 'Was the number of sessions decided before or after assessing my skin?'],
        ['Peel offered as an add-on with no consultation', 'What depth is it, and what are the contraindications?'],
        ['Medium peel priced like a superficial one', 'What licence does the person performing it hold?'],
        ['Price includes products you must buy', 'Are they required, or recommended?'],
      ],
    },
    { t: 'p', text: 'The pattern to be wary of is a plan sold before an assessment. Sessions decided in advance of looking at your skin are a pricing structure, not a treatment plan.' },
    { t: 'h2', id: 'insurance', text: 'Insurance and payment' },
    { t: 'p', text: 'Cosmetic treatments are generally not covered by insurance. Where a peel is performed for a medical indication, coverage is a question for the clinic and your insurer rather than something to assume in either direction.' },
    { t: 'p', text: 'Many clinics offer payment plans for deeper procedures. If you are considering one, the interest rate is part of the cost of the treatment — a deep peel financed over two years is not the same price as a deep peel paid for outright.' },
  ],
  faq: [
    { q: 'How much is a chemical peel?', a: 'Roughly $100 to $250 for superficial, $250 to $600 for medium, and $1,500 or more for deep peels. Prices vary by provider and region.' },
    { q: 'Why is the range so wide?', a: 'Depth changes the procedure entirely, from a short appointment with a mild solution to a physician-performed procedure with weeks of recovery.' },
    { q: 'How many sessions do I need?', a: 'Superficial peels are usually done as a series; deeper peels are often a single treatment. The number should come from a provider assessment, not a package deal.' },
    { q: 'Is pre-treatment skincare extra?', a: 'Often yes, and it can add a few hundred dollars. Ask whether any prep products are required before you book.' },
    { q: 'Does insurance cover it?', a: 'Cosmetic treatments generally are not covered. Where there is a medical indication, ask the clinic and your insurer directly.' },
  ],
  related: [
    { href: '/en/what-is-a-chemical-peel', label: 'What Is a Chemical Peel?' },
    { href: '/en/chemical-peel-aftercare', label: 'Chemical Peel Aftercare' },
    { href: '/en/facial-vs-chemical-peel', label: 'Facial vs Chemical Peel' },
  ],
}
