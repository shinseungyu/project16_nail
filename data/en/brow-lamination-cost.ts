import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, BROW_CHEM_NOTE, MED_DISCLAIMER } from './common'

export const browLaminationCost: EnPage = {
  path: '/en/brow-lamination-cost',
  title: 'Brow Lamination Cost: US Prices and What Is Included',
  h1: 'How Much Does Brow Lamination Cost?',
  description:
    'Brow lamination costs $50 to $150 in most US markets. What a tint and shaping add, and what a year of maintenance comes to.',
  keywords: ['brow lamination cost', 'brow lamination price', 'eyebrow lamination cost'],
  category: 'Brows',
  stage: 9,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**$50 to $150 in most US markets, with $70 to $110 the common range.** A tint usually adds $15 to $30, and most people repeat it every six to eight weeks.',
  blocks: [
    { t: 'note', tone: 'warn', text: BROW_CHEM_NOTE },
    { t: 'h2', id: 'pricing', text: 'Pricing' },
    {
      t: 'table',
      head: ['Service', 'Typical'],
      rows: [
        ['Lamination alone', '$50 - 110'],
        ['Lamination with tint', '$70 - 150'],
        ['Lamination, tint and shaping', '$90 - 180'],
        ['Tint added separately', '$15 - 30'],
        ['Waxing or threading added', '$10 - 25'],
        ['Major metro salon', '$110 - 200'],
      ],
    },
    { t: 'h2', id: 'why-vary', text: 'Why quotes differ' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Whether a tint is included', 'The most common reason for a price gap'],
        ['Whether shaping is included', 'Second most common'],
        ['Region', 'Metro premiums are significant'],
        ['Technician experience', 'Moderate'],
        ['Salon setting', 'Moderate'],
      ],
    },
    { t: 'p', text: '**Ask what the price includes before comparing two salons.** A $65 quote for lamination alone and a $95 quote including tint and shaping are not really different prices.' },
    { t: 'h2', id: 'annual', text: 'What a year costs' },
    {
      t: 'table',
      head: ['Pattern', 'Annual'],
      rows: [
        ['Every 6 weeks, lamination only', 'approx. $430 - 950'],
        ['Every 8 weeks, lamination only', 'approx. $325 - 715'],
        ['Every 8 weeks with tint', 'approx. $455 - 975'],
        ['Occasionally, before events', '$150 - 450'],
      ],
    },
    { t: 'p', text: 'That puts it in a similar bracket to regular brow waxing plus tinting, which is a fair comparison since many people are choosing between the two ongoing routines.' },
    { t: 'h2', id: 'value', text: 'Is it worth it?' },
    { t: 'p', text: 'It depends entirely on what you are trying to solve, and the honest answer is that it suits some brows far better than others.' },
    {
      t: 'table',
      head: ['If your brows', 'Value'],
      rows: [
        ['Are unruly and will not stay put', 'High - this is the core use case'],
        ['Grow downward or in odd directions', 'High'],
        ['Need gel every single morning', 'High - it replaces that step'],
        ['Are already neat and behave', 'Low'],
        ['Are very sparse', 'Low - there is little to redirect'],
      ],
    },
    { t: 'h2', id: 'first-time', text: 'On a first appointment' },
    { t: 'p', text: 'Two things are worth confirming when you book, and both affect what you actually pay.' },
    {
      t: 'ul',
      items: [
        '**Is the patch test a separate visit?** Most reputable salons require one 24 to 48 hours ahead, and it may mean two trips.',
        '**Is the tint included in the quoted price?** This is where most of the price variation sits.',
      ],
    },
    { t: 'h2', id: 'vs-alternatives', text: 'Against the alternatives' },
    { t: 'p', text: 'The useful comparison is not lamination against nothing, but lamination against whatever you are currently doing to your brows.' },
    {
      t: 'table',
      head: ['Routine', 'Annual', 'Effort'],
      rows: [
        ['Brow gel every morning', '$30 - 90', 'Daily'],
        ['Brow tint every 4 weeks', '$195 - 455', 'Every month'],
        ['Waxing every 4 weeks', '$130 - 325', 'Every month'],
        ['Lamination every 8 weeks', '$325 - 715', 'Every 2 months'],
        ['Lamination with tint every 8 weeks', '$455 - 975', 'Every 2 months'],
      ],
    },
    { t: 'p', text: '**Lamination costs more than tinting or waxing and replaces a daily step rather than a monthly one.** Whether that trade is worth it depends on how much time your brows currently take each morning.' },
    { t: 'h2', id: 'saving', text: 'Where to save and where not to' },
    {
      t: 'ul',
      items: [
        '**Package deals** are reasonable once you know it suits you - not on a first visit.',
        '**Skipping the tint** is a genuine saving if your brows are already dark.',
        '**Stretching to eight weeks** rather than six saves money and is better for your brows.',
        '**Do not skip the patch test** to save a trip.',
        '**Do not choose on price alone** - solution timing is the skill you are paying for.',
      ],
    },
    { t: 'h2', id: 'booking', text: 'What to confirm when booking' },
    { t: 'p', text: 'Five questions cover everything that affects the price and the appointment, and they take a minute to ask.' },
    {
      t: 'table',
      head: ['Ask', 'Why'],
      rows: [
        ['Is a tint included?', 'The main price variable'],
        ['Is shaping included?', 'The second'],
        ['Is the patch test a separate visit?', 'Affects how many trips'],
        ['How long is the appointment?', 'Usually 45 - 60 min with a tint'],
        ['What is the rebooking interval?', 'Should be 6 - 8 weeks, not sooner'],
      ],
    },
    { t: 'p', text: '**A salon that offers to rebook you at four weeks is worth a second thought**, whatever the price. That interval is where over-processing comes from.' },
    { t: 'h2', id: 'summary', text: 'The short version' },
    { t: 'p', text: '$50 to $150 a session, most commonly $70 to $110, repeated every six to eight weeks. A tint adds $15 to $30 and is where most quote differences come from.' },
    { t: 'p', text: '**Compare on what is included rather than on the headline figure**, and treat a salon willing to rebook you at four weeks as a warning regardless of price. The interval matters more to your brows than the discount does.' },
  ],
  faq: [
    { q: 'How much is brow lamination?', a: '$50 to $150 in most US markets, commonly $70 to $110.' },
    { q: 'Does that include a tint?', a: 'Sometimes. Ask when booking, because it is the most common reason two quotes differ.' },
    { q: 'How often do I need it?', a: 'Every six to eight weeks, not sooner.' },
    { q: 'What does a year cost?', a: 'Roughly $325 to $975 depending on interval and whether you add a tint.' },
    { q: 'Is there a patch test fee?', a: 'Usually not, but it may require a separate visit 24 to 48 hours beforehand.' },
  ],
  related: [
    { href: '/en/what-is-brow-lamination', label: 'What Is Brow Lamination?' },
    { href: '/en/how-long-does-brow-lamination-last', label: 'How Long Does Brow Lamination Last?' },
    { href: '/en/brow-lamination-vs-microblading', label: 'Brow Lamination vs Microblading' },
  ],
}
