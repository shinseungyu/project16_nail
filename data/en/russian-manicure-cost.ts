import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, MED_STATE_SCOPE } from './common'

export const russianManicureCost: EnPage = {
  path: '/en/russian-manicure-cost',
  title: 'Russian Manicure Cost: Why It Is More Expensive',
  h1: 'How Much Does a Russian Manicure Cost?',
  description:
    'Russian manicures run $70 to $150, roughly double a standard gel manicure. What drives the price and what is usually included.',
  keywords: ['russian manicure cost', 'russian manicure price', 'russian manicure how much'],
  category: 'Nails',
  stage: 5,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**$70 to $150 in most US markets, rising to $180 or more in major metros with highly trained technicians.** That is roughly double a standard gel manicure, and the reason is time — 90 to 150 minutes against about 60.',
  blocks: [
    { t: 'h2', id: 'pricing', text: 'Pricing' },
    {
      t: 'table',
      head: ['Service', 'Typical'],
      rows: [
        ['Russian manicure with gel', '$70 - 150'],
        ['Major metro or specialist', '$120 - 200'],
        ['With extensions', '$110 - 220'],
        ['Removal plus Russian manicure', '$85 - 170'],
        ['Standard gel manicure, for comparison', '$30 - 60'],
      ],
    },
    { t: 'h2', id: 'why-more', text: 'Why it costs more' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Time', '90 - 150 min against about 60'],
        ['Training', 'Specialised e-file skill, often additional courses'],
        ['Bit costs', 'Fine bits, replaced regularly'],
        ['Scarcity', 'Fewer technicians offer it'],
        ['Sanitation', 'Bit sterilisation adds process and equipment'],
      ],
    },
    { t: 'p', text: 'Time dominates the list. A technician can complete two standard manicures in the slot one Russian manicure occupies, and the price reflects that arithmetic more than anything else.' },
    { t: 'h2', id: 'worth-it', text: 'Is it worth the premium?' },
    {
      t: 'table',
      head: ['Worth it if', 'Probably not if'],
      rows: [
        ['You want the very clean cuticle finish', 'A standard gel manicure satisfies you'],
        ['You stretch appointments to 4+ weeks', 'You rebook every 2 weeks anyway'],
        ['Your natural nail beds are short', 'You are on a tight budget'],
        ['You have found a genuinely skilled technician', 'You cannot verify their training'],
      ],
    },
    { t: 'p', text: '**Some clients report longer wear**, which can offset part of the cost across a year. That varies by individual and it is not a reason to book on its own.' },
    { t: 'h2', id: 'per-week', text: 'Cost per week, honestly' },
    { t: 'p', text: 'The extended-wear argument is often made loosely. Working it through, the premium buys fewer appointments rather than a lower running cost.' },
    {
      t: 'table',
      head: ['', 'Price', 'Interval', 'Per week'],
      rows: [
        ['Standard gel', '$50', '3 weeks', 'approx. $16.70'],
        ['Russian manicure', '$110', '4 weeks', 'approx. $27.50'],
        ['Russian manicure', '$110', '5 weeks', '$22'],
      ],
    },
    { t: 'p', text: '**Standard gel remains cheaper per week at every realistic interval.** What the premium actually buys is fewer trips to the salon and a finish that some people prefer, and those are legitimate reasons — they are just not savings.' },
    { t: 'h2', id: 'what-included', text: 'What to confirm is included' },
    {
      t: 'ul',
      items: [
        '**Gel colour** — usually included, but confirm.',
        '**Removal** of existing product, which is often separate.',
        '**Shaping and length adjustment.**',
        '**Any art**, which is almost always extra.',
      ],
    },
    { t: 'h2', id: 'finding', text: 'Finding a technician' },
    { t: 'p', text: 'Availability is uneven, and the search is more about verifying training than about finding the lowest price.' },
    {
      t: 'table',
      head: ['Where to look', 'What to check'],
      rows: [
        ['Instagram portfolios', 'Close-up photos of the cuticle area'],
        ['Salon websites', 'Whether the service is named specifically'],
        ['Booking platforms', 'Service duration - under 90 min is a flag'],
        ['Word of mouth', 'Ask about the technician, not just the salon'],
      ],
    },
    { t: 'p', text: '**Duration is the most useful filter.** A salon offering a Russian manicure in a 60-minute slot is offering something else under the name, and the booking length tells you before you arrive.' },
    { t: 'h2', id: 'first-visit', text: 'Budgeting for a first visit' },
    { t: 'p', text: 'The first appointment often costs more than the headline price, and the reasons are predictable.' },
    {
      t: 'table',
      head: ['Item', 'Typical'],
      rows: [
        ['The service itself', '$70 - 150'],
        ['Removal of existing product', '$20 - 40'],
        ['Any art', '$5 - 40'],
        ['Tip, where customary', '15 - 20%'],
        ['Realistic first-visit total', '$110 - 220'],
      ],
    },
    { t: 'p', text: 'Subsequent visits drop back toward the base price, since removal is usually rolled into a rebooking. Budgeting from the first-visit figure makes the service look more expensive than it settles at.' },
    { t: 'h2', id: 'red-flags', text: 'Price signals worth noticing' },
    { t: 'p', text: 'Price is not a proxy for quality in most services. Here it partly is, because the main input is chair time and there is a floor below which the time cannot have been spent.' },
    {
      t: 'table',
      head: ['What you see', 'What it suggests'],
      rows: [
        ['$40 - 50 for a Russian manicure', 'Not the full technique, whatever it is called'],
        ['A 60-minute booking slot', 'Same'],
        ['No mention of removal pricing', 'Ask before arriving'],
        ['A package deal for several sessions', 'Reasonable, but not on a first visit'],
        ['Price in line with a standard gel', 'Worth asking what is included'],
      ],
    },
    { t: 'p', text: 'None of these mean a salon is bad. They mean the service you book may not be the one you read about, and asking one question at the booking stage resolves it.' },
    { t: 'h2', id: 'tipping', text: 'Tipping and total cost' },
    { t: 'p', text: 'Because the service occupies a long slot, the customary tip is a larger absolute number than on a standard manicure, and it is worth factoring in rather than being surprised by.' },
    {
      t: 'table',
      head: ['Service price', 'Tip at 15%', 'Tip at 20%', 'Total at 20%'],
      rows: [
        ['$70', '$10.50', '$14', '$84'],
        ['$110', '$16.50', '$22', '$132'],
        ['$150', '$22.50', '$30', '$180'],
      ],
    },
    { t: 'p', text: 'Tipping norms vary by market and by whether the technician owns the business. Where you are unsure, asking the salon what is customary is a normal question rather than an awkward one.' },
  ],
  faq: [
    { q: 'How much is a Russian manicure?', a: '$70 to $150 typically, and more in major metros or with specialist technicians.' },
    { q: 'Why so expensive?', a: 'Primarily time. It takes two to three times as long as a standard manicure, plus specialised training and bit sterilisation.' },
    { q: 'Is it worth it?', a: 'It depends on whether the finish and potentially longer intervals matter to you. Per week of wear it is not cheaper.' },
    { q: 'Does it include gel colour?', a: 'Usually yes, but confirm when booking, along with whether removal is included.' },
    { q: 'Are there cheaper options?', a: 'A standard gel manicure with careful cuticle work costs far less and satisfies most people.' },
  ],
  related: [
    { href: '/en/what-is-a-russian-manicure', label: 'What Is a Russian Manicure?' },
    { href: '/en/russian-vs-regular-manicure', label: 'Russian vs Regular Manicure' },
    { href: '/en/russian-manicure-safety', label: 'Is a Russian Manicure Safe?' },
  ],
}
