import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, US_PAY_NOTE } from './common'

export const lashTechSalary: EnPage = {
  path: '/en/lash-tech-salary',
  title: 'Lash Tech Salary: What Lash Artists Really Earn',
  h1: 'How Much Do Lash Techs Make?',
  description:
    'Lash income depends on fill retention, not new clients. The math on full sets versus fills, and what a booked lash artist actually clears.',
  keywords: ['how much do lash techs make', 'lash tech salary', 'lash artist income', 'lash extension pricing'],
  category: 'Careers & Pay',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'Employed lash techs commonly earn **$18 to $28 an hour**; independent lash artists with full books earn considerably more. The variable that decides income is not new clients — it is how many of them come back for fills every two to three weeks.',
  blocks: [
    { t: 'note', text: US_PAY_NOTE },
    { t: 'h2', id: 'fills', text: 'The fill is the business' },
    { t: 'p', text: 'New full sets get the attention. Fills pay the bills, because they occupy less chair time for a meaningful share of the price.' },
    {
      t: 'table',
      caption: 'Revenue per hour by service',
      head: ['Service', 'Price', 'Time', 'Per hour'],
      rows: [
        ['Classic full set', '$110', '120 min', '$55'],
        ['Volume full set', '$160', '150 min', '$64'],
        ['Classic fill', '$60', '60 min', '$60'],
        ['Volume fill', '$85', '75 min', '$68'],
        ['Lash lift', '$75', '50 min', '$90'],
        ['Removal', '$25', '25 min', '$60'],
      ],
    },
    {
      t: 'p',
      text: '**Fills out-earn full sets per hour.** Shorter appointment, less product, same chair. A book weighted toward fills is a more profitable book than one weighted toward new sets.',
    },
    { t: 'h3', text: 'What a full book actually looks like' },
    {
      t: 'p',
      text: 'A lash artist with **40 regular clients on a two-and-a-half-week cycle** sees roughly 21 fills per client per year. At a $75 average fill, that is about **$63,000 from retention alone**, before new-client full sets and lifts.',
    },
    {
      t: 'note',
      title: 'The entire model is keeping those 40 people on schedule',
      text: 'Almost every other lever in this job is secondary to retention. A lash artist who loses a third of their regulars each quarter is running a marketing business, not a lash business.',
    },
    { t: 'h2', id: 'structures', text: 'Pay structures' },
    {
      t: 'table',
      head: ['Structure', 'Typical', 'Notes'],
      rows: [
        ['Employed hourly', '$18 - 28/hr', 'Studio or salon'],
        ['Commission', '40 - 60%', 'Common in lash studios'],
        ['Booth or suite rent', '$200 - 500/week', 'Most independent lash artists'],
        ['Home studio', 'Low overhead', 'Check local zoning and licensing rules first'],
      ],
    },
    {
      t: 'p',
      text: '**Lash work suits independent operation** more than most beauty services. The space requirement is small, equipment costs are low, and appointments are long and pre-booked, which makes a solo schedule manageable.',
    },
    { t: 'h2', id: 'increase', text: 'What increases income' },
    {
      t: 'ol',
      items: [
        '**Retention.** Book the next fill before the client leaves the room. Everything else is secondary.',
        '**Add a lash lift menu.** Highest per-hour service on most lash menus, and it converts clients who will not commit to extensions.',
        '**Speed.** Volume artists who fan efficiently fit more appointments in without cutting quality.',
        '**Reduce no-shows.** A deposit policy and reminder system protect a schedule built on long appointments.',
        '**Retail.** Lash cleanser and brushes are small tickets, and they improve retention, which pays twice.',
      ],
    },
    { t: 'h2', id: 'downsides', text: 'The realistic downsides' },
    {
      t: 'ul',
      items: [
        '**Eyes are unforgiving.** Adverse reactions are uncommon but consequential. Insurance and a documented consultation form matter more here than in most beauty work.',
        '**It is physically demanding.** Hours under magnification doing precision hand work. Eye strain and neck problems are common complaints.',
        '**Ventilation matters.** Adhesive fumes accumulate in small rooms, and a home studio is usually the smallest room of all.',
        '**Income drops with the schedule.** Long appointments mean a cancellation costs one and a half to two and a half hours you cannot refill on short notice.',
      ],
    },
    { t: 'h2', id: 'startup', text: 'What it costs to start' },
    { t: 'p', text: 'Lash work has one of the lowest equipment barriers in the industry, which is why so many artists go independent early. The costs are real but small relative to a salon fit-out.' },
    {
      t: 'table',
      head: ['Item', 'Typical', 'Note'],
      rows: [
        ['Training course', 'Varies widely', 'Live-model hours matter more than price'],
        ['Bed or reclining chair', '$200 - 800', 'Client comfort affects retention directly'],
        ['Lighting and magnification', '$100 - 400', 'Protects your eyes as much as your work'],
        ['Adhesives, lashes, tools', '$200 - 500 initial', 'Adhesive has a short shelf life'],
        ['Hygrometer', 'Low', 'Adhesive cures within a humidity range'],
        ['Insurance', 'A few hundred a year', 'Usually requires proper licensure'],
      ],
    },
    { t: 'note', title: 'The hygrometer is not optional equipment', text: 'Adhesive cure behaviour changes with humidity, and a room outside the working range weakens every bond in the set. Retention problems that look like technique are often environmental.' },
    { t: 'h2', id: 'pricing', text: 'Pricing a lash menu' },
    { t: 'p', text: 'Because income comes from fills, the fill price is the number that decides your annual revenue. It is also the one most artists set carelessly, by copying a competitor.' },
    {
      t: 'ol',
      items: [
        '**Price fills by time, not as a fraction of the full set.** A 60-minute fill and a 75-minute fill should not cost the same, because the constraint is your chair rather than the product.',
        '**Set the fill window explicitly.** Two to three weeks at fill price, beyond that a full set. Publishing this prevents the awkward conversation and protects your schedule.',
        '**Charge for removal.** It occupies the chair and produces no set.',
        '**Add a lift menu.** It is usually the highest per-hour service you can offer, and it converts people who will not commit to extensions.',
        '**Review annually.** Adhesive and lash costs rise; a static price list is a slow pay cut.',
      ],
    },
    { t: 'h2', id: 'schedule', text: 'Why the schedule is the business' },
    { t: 'p', text: 'A lash book is unusually fragile because appointments are long and pre-booked. One cancellation at short notice removes one and a half to two and a half hours that cannot realistically be refilled.' },
    { t: 'p', text: 'This is why deposit policies and reminder systems are standard among established lash artists rather than an unfriendly extra. **Protecting the schedule is protecting the income**, and the artists earning near the top of the range are usually the ones with the firmest booking policies rather than the fastest hands.' },
  ],
  faq: [
    {
      q: 'How much do lash techs make?',
      a: 'Employed roles commonly pay $18 to $28 an hour. Independents with consistent bookings earn more, driven mainly by fill volume rather than by new clients.',
    },
    {
      q: 'Are fills or full sets more profitable?',
      a: 'Fills, per hour. They take a shorter appointment and less product for a meaningful share of the full-set price.',
    },
    {
      q: 'Do I need certification?',
      a: 'Requirements vary by state, and many require a cosmetology or esthetics licence rather than a certificate alone. Check your state board before paying for a course.',
    },
    {
      q: 'Can I work from home?',
      a: 'Sometimes, but licensing and zoning rules vary by jurisdiction, and homeowner insurance generally does not cover business activity. Verify both before setting up.',
    },
    {
      q: 'Is lash work sustainable long term?',
      a: 'Many artists report eye strain and neck issues over time. Good lighting, adjustable seating, and scheduled breaks make a measurable difference to how long people last in the job.',
    },
    {
      q: 'How many clients do I need to go full-time?',
      a: 'Around 40 regulars on a two-to-three-week cycle produces a full-time schedule from fills alone. Building to that number is the hard part, not maintaining it.',
    },
  ],
  related: [
    { href: '/en/lash-certification', label: 'Lash Certification vs License: The Difference' },
    { href: '/en/how-long-do-lash-extensions-last', label: 'How Long Do Lash Extensions Last?' },
    { href: '/en/salon-business-costs', label: 'Salon Business Costs: Booth Rent, Insurance & Pricing' },
  ],
}
