import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO } from './common'

export const gelXCost: EnPage = {
  path: '/en/gel-x-cost',
  title: 'Gel X Nails Cost: New Set, Fills and Removal',
  h1: 'How Much Do Gel X Nails Cost?',
  description:
    'Gel X sets run $60 to $120 with fills at $50 to $90. What is included, what is extra, and what a year of maintenance costs.',
  keywords: ['gel x cost', 'gel x nails price', 'gel x fill cost'],
  category: 'Nails',
  stage: 4,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**A full Gel X set runs $60 to $120, with fills at $50 to $90 every two to three weeks.** Nail art, extreme length, and removal of previous product are usually charged on top.',
  blocks: [
    { t: 'h2', id: 'pricing', text: 'Pricing' },
    {
      t: 'table',
      head: ['Service', 'Typical'],
      rows: [
        ['Full set, plain', '$60 - 120'],
        ['Full set with art', '$85 - 180'],
        ['Fill or rebalance', '$50 - 90'],
        ['Removal only', '$20 - 40'],
        ['Removal of another salon’s product', '$30 - 50'],
        ['Single nail repair', '$8 - 20'],
        ['Extra length', '+$10 - 25'],
      ],
    },
    { t: 'h2', id: 'regional', text: 'Regional variation' },
    {
      t: 'table',
      head: ['Area', 'Full set'],
      rows: [
        ['Major metro, upscale', '$95 - 160'],
        ['Major metro, standard', '$70 - 110'],
        ['Suburban', '$60 - 95'],
        ['Smaller markets', '$55 - 85'],
      ],
    },
    { t: 'h2', id: 'annual', text: 'Annual cost' },
    {
      t: 'table',
      head: ['Pattern', 'Annual'],
      rows: [
        ['Fill every 2 weeks', 'approx. $1,400 - 2,400'],
        ['Fill every 3 weeks', 'approx. $950 - 1,600'],
        ['New set every 4 weeks', 'approx. $780 - 1,560'],
      ],
    },
    { t: 'p', text: '**Fills are cheaper than repeated new sets**, so staying on a three-week schedule is the economical rhythm. Letting a set grow out and starting fresh each time is the most expensive pattern available.' },
    { t: 'h2', id: 'why-more', text: 'Why it costs more than acrylic' },
    { t: 'p', text: 'The gap is not a premium for being newer. It comes from two concrete things.' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Product cost', 'Soft gel tips cost more than powder and monomer'],
        ['Application time', 'Sizing ten full-cover tips takes longer'],
        ['Removal time', 'Soak-off occupies the chair'],
        ['Technician training', 'Fewer technicians offer it in some markets'],
      ],
    },
    { t: 'h2', id: 'what-to-ask', text: 'What to ask when booking' },
    {
      t: 'ol',
      items: [
        '**Is removal of my current product included** or charged separately?',
        '**Is this a fill price or a new set price?** They are quoted differently.',
        '**Does the price include shaping and a top coat**, or are those extras?',
        '**What does art cost**, if you want any?',
        '**What is the repair policy** if a nail lifts in the first week?',
      ],
    },
    { t: 'note', title: 'The repair question is the useful one', text: 'A salon confident in its application will repair a single nail cheaply or free within a few days. One that charges full price for a nail that lifted after three days is telling you something about how often that happens.' },
    { t: 'h2', id: 'art', text: 'What art actually adds' },
    { t: 'p', text: 'Art pricing is the least standardised part of any nail menu, and it is where quotes diverge most between salons.' },
    {
      t: 'table',
      head: ['Art', 'Typical extra'],
      rows: [
        ['Single accent nail', '$3 - 10'],
        ['French tips across all ten', '$10 - 25'],
        ['Chrome or cat-eye finish', '$10 - 20'],
        ['Hand-painted detail per nail', '$5 - 20'],
        ['3D or embellishments', '$5 - 25 per nail'],
        ['Full custom set', '$40 - 80 over the base'],
      ],
    },
    { t: 'p', text: '**Send your reference photo when you book and ask for a total.** Art quoted per nail adds up quickly, and the difference between a $70 set and a $140 set is usually the art rather than the extensions.' },
    { t: 'h2', id: 'budget', text: 'Budgeting realistically' },
    { t: 'p', text: 'The useful number is what a year costs at the rhythm you will actually keep, not the price of one appointment.' },
    {
      t: 'table',
      head: ['If you', 'Budget roughly'],
      rows: [
        ['Get nails done for occasions only', '$60 - 120 per occasion plus removal'],
        ['Maintain a set continuously, plain', '$950 - 1,600 a year'],
        ['Maintain with art each time', '$1,300 - 2,400 a year'],
        ['Alternate on and off through the year', 'Half the continuous figure, plus removals'],
      ],
    },
    { t: 'note', title: 'Removals belong in the budget', text: 'People plan for sets and fills and forget that taking a set off between cycles is a paid appointment. Two removals a year is $40 to $80 that does not appear on any price comparison.' },
    { t: 'h2', id: 'comparing', text: 'Comparing salons fairly' },
    { t: 'p', text: 'Two salons quoting $70 and $110 are often quoting different services, and the gap usually resolves once you ask three questions.' },
    {
      t: 'ol',
      items: [
        '**Does the price include removal** of what I am currently wearing?',
        '**Does it include shaping and top coat**, or are those separate lines?',
        '**What does a fill cost**, since that is what I will pay most often?',
      ],
    },
    { t: 'p', text: 'The fill price is the one that determines your annual spend, and it is the one least often advertised. A cheap new set with an expensive fill is the more costly salon over a year.' },
    { t: 'h2', id: 'value', text: 'Where the money goes' },
    {
      t: 'table',
      head: ['Component', 'Roughly'],
      rows: [
        ['Technician time', 'The largest share'],
        ['Product', 'Tips, gel, top coat'],
        ['Chair and overhead', 'Rent, utilities, equipment'],
        ['Skill premium', 'Experience and demand'],
      ],
    },
    { t: 'p', text: 'This is why a very cheap set is usually a fast set. The product cost does not vary that much between salons; the time does, and time is what prep and sizing consume.' },
  ],
  faq: [
    { q: 'How much is a Gel X set?', a: '$60 to $120 for a plain set, and more with art or extra length.' },
    { q: 'How much are fills?', a: '$50 to $90, typically every two to three weeks.' },
    { q: 'Is removal included?', a: 'Usually not, if you are not getting a new set that day. Removal alone runs $20 to $40.' },
    { q: 'Why is Gel X more than acrylic?', a: 'Product cost and application time are both higher, and removal occupies the chair as well.' },
    { q: 'Can I save money?', a: 'Stay on schedule for fills rather than letting sets grow out and starting fresh, which is the most expensive pattern.' },
  ],
  related: [
    { href: '/en/gel-x-vs-acrylic', label: 'Gel X vs Acrylic' },
    { href: '/en/gel-x-removal', label: 'How to Remove Gel X Nails' },
    { href: '/en/how-long-do-gel-x-nails-last', label: 'How Long Do Gel X Nails Last?' },
  ],
}
