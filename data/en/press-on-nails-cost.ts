import type { EnPage } from './types'
import { EN_UPDATED_BATCH7, EN_UPDATED_BATCH7_ISO } from './common'

export const pressOnNailsCost: EnPage = {
  path: '/en/press-on-nails-cost',
  title: 'Press On Nails Cost vs Salon Manicure',
  h1: 'Press On Nails Cost vs a Salon Manicure',
  description:
    'A realistic annual comparison of press ons against gel, acrylic, Gel X and polygel, including the supplies people forget to count.',
  keywords: ['press on nails cost', 'are press on nails cheaper than salon', 'press on nails vs salon manicure cost'],
  category: 'Nails',
  stage: 16,
  updated: EN_UPDATED_BATCH7,
  updatedIso: EN_UPDATED_BATCH7_ISO,
  lead:
    '**Press ons cost a fraction of salon enhancements over a year** — roughly $60 to $250 reusing sets, against $520 or more for gel. The gap is large enough that it is the main reason people switch. The honest caveat is that wear time is shorter and the labour is yours, so the comparison is not purely about price.',
  blocks: [
    { t: 'h2', id: 'upfront', text: 'What it costs to start' },
    {
      t: 'table',
      head: ['Item', 'Typical'],
      rows: [
        ['Basic press on set', '$5 - 15'],
        ['Mid-range set', '$15 - 30'],
        ['Premium or handmade set', '$30 - 80+'],
        ['Nail glue', '$2 - 8'],
        ['Adhesive tabs', '$3 - 10'],
        ['Prep kit (file, buffer, cuticle pusher)', '$8 - 20'],
        ['Cuticle oil', '$5 - 12'],
        ['First-time setup, all in', '$25 - 70'],
      ],
      note: 'Prices vary by retailer and region.',
    },
    {
      t: 'p',
      text: 'Most sets people buy sit in the $5 to $30 band. Premium handmade sets are a separate tier, and they only make financial sense once you know your sizes and plan to reuse them — which is the thread running through everything below.',
    },
    { t: 'h2', id: 'annual', text: 'The annual comparison' },
    {
      t: 'table',
      head: ['Option', 'Per application', 'Frequency', 'Annual'],
      rows: [
        ['Press ons, reusing sets', 'A few dollars in adhesive', 'Every 10 - 14 days', 'approx. $60 - 250'],
        ['Press ons, new set each time', '$5 - 30', 'Every 10 days', 'approx. $180 - 730'],
        ['Gel manicure', '$30 - 60', 'Every 3 weeks', 'approx. $520 - 1,040'],
        ['Acrylic, set plus fills', 'Set $40 - 90, fills $35 - 65', 'Fill every 3 - 4 weeks', 'approx. $500 - 1,200'],
        ['Polygel, set plus fills', 'Set $50 - 100, fills $35 - 70', 'Fill every 3 - 4 weeks', 'approx. $700 - 1,300'],
        ['Gel X', 'Set $60 - 120, fills $50 - 90', 'Fill every 3 weeks', 'approx. $950 - 1,600'],
      ],
      note: 'Salon figures are before tips and removal fees, and vary substantially by region and salon.',
    },
    {
      t: 'p',
      text: 'Reusing sets is what makes the economics work. Buy a new set every time and the gap narrows considerably — still cheaper than any salon option, but not dramatically so once you are buying from the premium end. The gel comparison on its own, including wear time and damage, is in [Press On Nails vs Gel](/en/press-on-nails-vs-gel).',
    },
    { t: 'h2', id: 'hidden-costs', text: 'What people forget to count' },
    {
      t: 'table',
      head: ['Hidden cost', 'Why it adds up'],
      rows: [
        ['Replacement glue', 'It runs out, and it degrades once opened'],
        ['Sets that do not fit', 'Sizing is the most common wasted purchase'],
        ['Acetone and removal supplies', 'A small but recurring cost'],
        ['Sets damaged during removal', 'Avoidable with a longer soak'],
        ['Your time', '20 - 30 min to apply, 15 - 25 min to remove'],
      ],
    },
    {
      t: 'p',
      text: 'The time row decides it for many people. Across 25 to 36 applications a year, that is roughly 10 to 18 hours of your own labour — hours a salon client spends sitting down. [Press On Nails Sizing](/en/press-on-nails-sizing) deals with the second row, which is the easiest money to stop wasting.',
    },
    { t: 'h2', id: 'not-purely-price', text: 'Where the comparison is not purely price' },
    {
      t: 'table',
      head: ['Press ons', 'Salon enhancements'],
      rows: [
        ['Shorter wear', 'Longer wear'],
        ['You do the work', 'Someone else does'],
        ['Fit can be imperfect', 'Fitted to your nail'],
        ['Change the style any time', 'Committed until removal'],
        ['No appointment needed', 'Appointment required'],
        ['No salon experience', 'Some people value the experience itself'],
      ],
    },
    {
      t: 'note',
      tone: 'info',
      title: 'The fairest framing',
      text: 'Press ons trade wear time and fit for cost and flexibility. If durability or a custom fit matters most to you, the salon price is buying something real.',
    },
    { t: 'h2', id: 'saving-more', text: 'Saving more' },
    {
      t: 'ol',
      items: [
        '**Buy sets you can reuse.** This is the single biggest factor.',
        '**Get sizing right first** — use a sizing kit if one is available.',
        '**Remove carefully so sets survive** — soak rather than pry, as covered in [Reusing Press On Nails](/en/reusing-press-on-nails).',
        '**Buy glue and tabs separately** rather than as part of kits.',
        '**Keep leftover sizes** — they fill gaps in future sets.',
        '**Do not buy premium sets until you know your sizes.**',
      ],
    },
    {
      t: 'p',
      text: 'Tabs also tend to win on cost for regular wearers, because glue gives longer wear per application but often ends the set. [Press On Nails: Glue vs Adhesive Tabs](/en/press-on-nails-glue-vs-tabs) covers that trade-off in full.',
    },
  ],
  faq: [
    { q: 'How much do press on nails cost?', a: 'Most sets are $5 to $30, with premium handmade sets at $30 to $80 or more. A first-time setup with glue, tabs and a prep kit runs $25 to $70.' },
    { q: 'Are press ons cheaper than a salon manicure?', a: 'Substantially, especially if you reuse sets — roughly $60 to $250 a year against $520 or more for gel.' },
    { q: 'What does a year of press ons cost?', a: 'About $60 to $250 reusing sets, or $180 to $730 buying a new set every time.' },
    { q: 'What is the most common waste of money with press ons?', a: 'Buying sets that do not fit. Get your sizing right before spending on premium sets.' },
    { q: 'Is it only about price?', a: 'No. Press ons trade wear time, fit and your own time for cost and flexibility.' },
  ],
  related: [
    { href: '/en/press-on-nails-sizing', label: 'Press On Nails Sizing' },
    { href: '/en/reusing-press-on-nails', label: 'Reusing Press On Nails' },
    { href: '/en/press-on-nails-vs-gel', label: 'Press On Nails vs Gel' },
  ],
}
