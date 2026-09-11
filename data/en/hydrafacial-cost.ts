import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, HYDRAFACIAL_TM_NOTE } from './common'

export const hydrafacialCost: EnPage = {
  path: '/en/hydrafacial-cost',
  title: 'How Much Does a HydraFacial Cost?',
  h1: 'How Much Does a HydraFacial Cost?',
  description:
    'Typically $150 to $350 per session, plus booster add-ons. What drives the price and what a year of monthly treatments actually totals.',
  keywords: ['hydrafacial cost', 'how much is a hydrafacial', 'hydrafacial price'],
  category: 'Skin Treatments',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**$150 to $350 for a standard session**, rising to $200 to $450 once add-on boosters are included. Packages cut the per-session price. Monthly treatment for a year totals roughly **$1,800 to $4,200** — which is the number worth deciding on before you book the first one.',
  blocks: [
    { t: 'note', tone: 'info', text: HYDRAFACIAL_TM_NOTE },
    { t: 'h2', id: 'price-by-tier', text: 'Price by tier' },
    {
      t: 'table',
      head: ['Tier', 'Typical', 'What it includes'],
      rows: [
        ['Express / short', '$125 - 200', 'Shortened protocol'],
        ['Standard', '$150 - 350', 'Full protocol'],
        ['With boosters', '$200 - 450', 'Targeted serums'],
        ['With LED or other add-ons', '$225 - 500', ''],
        ['Package of 3 - 6', '10 - 20% off per session', ''],
      ],
    },
    {
      t: 'p',
      text: 'The express version is worth knowing about because it is rarely advertised prominently. It runs the same protocol in less time with fewer passes, and for maintenance between full sessions many people find it sufficient.',
    },
    { t: 'h2', id: 'what-drives-price', text: 'What drives the price' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['City', 'Major metros run substantially higher'],
        ['Setting', 'Med-spa and dermatology offices sit above day spas'],
        ['Add-on boosters', '$50 - 150 each'],
        ['Session length', 'Express versions cost less'],
        ['Packages', 'Lower per-session cost, higher upfront commitment'],
        ['Membership plans', 'Monthly fee, discounted sessions'],
      ],
    },
    {
      t: 'p',
      text: 'Boosters are where the quoted price and the final bill separate. A $180 advertised session becomes $280 once a booster is added at the chair, and the conversation about adding one usually happens after you are already lying down. Decide before you arrive — and note that [HydraFacial Side Effects](/en/hydrafacial-side-effects) is a good reason to skip boosters on a first session anyway.',
    },
    { t: 'h2', id: 'the-annual-number', text: 'The annual number' },
    {
      t: 'table',
      head: ['Frequency', 'Per year'],
      rows: [
        ['Monthly at $200', '$2,400'],
        ['Monthly at $300', '$3,600'],
        ['Every 6 weeks at $250', '~$2,150'],
        ['Quarterly at $250', '$1,000'],
        ['One-off before events (3x/yr)', '$600 - 900'],
      ],
    },
    {
      t: 'p',
      text: 'Providers commonly recommend monthly. Whether that is worth it to you is a budget decision rather than a skin-health one, and the difference between monthly and quarterly is well over two thousand dollars a year. [How Often Should You Get a HydraFacial?](/en/how-often-hydrafacial) works through how to pick a frequency honestly.',
    },
    { t: 'h2', id: 'packages', text: 'Packages and memberships' },
    {
      t: 'table',
      head: ['Do', 'Ask first'],
      rows: [
        ['Compare per-session cost after the discount', 'What is the cancellation policy?'],
        ['Check expiry dates on packages', 'Do unused sessions expire?'],
        ['Confirm which boosters are included', 'Are boosters charged separately?'],
        ['Confirm whether it is transferable', 'Can I pause a membership?'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Packages only save money if you use them all',
      text: 'An expiring package is a full-price session you did not get. Before buying six, look honestly at whether you attended the last six appointments you booked for anything.',
    },
    { t: 'h2', id: 'cheaper-alternatives', text: 'Lower-cost alternatives' },
    {
      t: 'table',
      head: ['Option', 'Typical'],
      rows: [
        ['Traditional facial', '$70 - 200'],
        ['Comparable hydradermabrasion on another system', 'Often below the branded price'],
        ['Express version of the branded treatment', '$125 - 200'],
        ['A consistent home routine', 'The highest-value option per dollar'],
      ],
    },
    {
      t: 'p',
      text: 'The second row is the one worth investigating. Because HydraFacial is a trademark rather than a treatment category, other manufacturers make hydradermabrasion devices that work on the same principle. Providers using them often charge less precisely because they cannot use the brand name in their marketing.',
    },
    {
      t: 'p',
      text: 'And the last row is not a throwaway. Occasional facials matter less to how your skin looks than what you do daily, and any provider who tells you otherwise is selling sessions. See [HydraFacial Benefits](/en/hydrafacial-benefits) for where professional treatments realistically rank.',
    },
    { t: 'h2', id: 'budgeting', text: 'How to budget for it sensibly' },
    {
      t: 'ol',
      items: [
        '**Pick your annual number first**, then divide by the session price to get your frequency — not the other way round.',
        '**Book one session before any package.** You may dislike it, or find the express version enough.',
        '**Ask what the price includes** and whether boosters are extra, before the appointment.',
        '**Compare a non-branded hydradermabrasion provider** in your area for the same concern.',
        '**Spend on sunscreen first.** It costs a fraction of one session and does more over a year.',
      ],
    },
  ],
  faq: [
    { q: 'How much is a HydraFacial?', a: '$150 to $350 for a standard session, or $200 to $450 with boosters added.' },
    { q: 'Why do prices vary so much?', a: 'City, setting, session length and add-ons. Med-spas and dermatology offices charge more than day spas.' },
    { q: 'Are packages worth it?', a: 'Only if you will use every session before it expires. An unused session is a full-price loss.' },
    { q: 'Is there a cheaper alternative?', a: 'Traditional facials, express versions, or comparable non-branded hydradermabrasion treatments on other manufacturers’ devices.' },
    { q: 'How often do providers recommend it?', a: 'Commonly monthly, which totals $1,800 to $4,200 a year. That is a budget decision as much as a skincare one.' },
  ],
  related: [
    { href: '/en/what-is-a-hydrafacial', label: 'What Is a HydraFacial?' },
    { href: '/en/hydrafacial-vs-regular-facial', label: 'HydraFacial vs Regular Facial' },
    { href: '/en/how-often-hydrafacial', label: 'How Often Should You Get a HydraFacial?' },
  ],
}
