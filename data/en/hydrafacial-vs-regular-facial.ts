import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, HYDRAFACIAL_TM_NOTE } from './common'

export const hydrafacialVsRegularFacial: EnPage = {
  path: '/en/hydrafacial-vs-regular-facial',
  title: 'HydraFacial vs Regular Facial: What’s Different',
  h1: 'HydraFacial vs Regular Facial',
  description:
    'The real difference is device-based suction extraction versus manual work. Cost, consistency, customisation and results compared.',
  keywords: ['hydrafacial vs regular facial', 'hydrafacial vs facial', 'is a hydrafacial better than a facial'],
  category: 'Skin Treatments',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**The core difference is the extraction method: a HydraFacial® uses vortex suction, a traditional facial uses manual extraction by hand.** The branded treatment is more standardised and usually costs roughly double; a traditional facial is more adaptable to whatever your skin is doing that day.',
  blocks: [
    { t: 'note', tone: 'info', text: HYDRAFACIAL_TM_NOTE },
    { t: 'h2', id: 'side-by-side', text: 'Side by side' },
    {
      t: 'table',
      head: ['', 'HydraFacial®', 'Traditional facial'],
      rows: [
        ['Extraction', 'Vortex suction', 'Manual, by hand'],
        ['Cost', '$150 - 350', '$70 - 200'],
        ['Duration', '30 - 50 min', '50 - 90 min'],
        ['Consistency', 'Highly standardised protocol', 'Varies by esthetician'],
        ['Customisation', 'Via booster serums', 'Fully adaptable on the day'],
        ['Massage', 'Usually minimal', 'Often a significant part'],
        ['Downtime', 'Usually none', 'Usually none'],
        ['Relaxation factor', 'Lower — it is a procedure', 'Higher'],
        ['Redness after', 'Possible, brief', 'Possible, brief'],
      ],
    },
    {
      t: 'p',
      text: 'Notice that the two rows people assume will differ — downtime and redness — do not. Both are surface treatments with a brief flush afterwards. The differences that actually matter are extraction method, price, and how predictable the result is.',
    },
    { t: 'h2', id: 'the-consistency-tradeoff', text: 'The consistency trade-off' },
    {
      t: 'p',
      text: 'The branded protocol’s strength is that it is the same everywhere. The device does the same thing in the same order regardless of who is holding it, so your result depends less on which esthetician you happen to book — see [What Is a HydraFacial?](/en/what-is-a-hydrafacial) for the protocol itself. If you have ever had a great facial followed by a mediocre one at the same place, you already know why that matters.',
    },
    {
      t: 'p',
      text: 'A traditional facial’s strength is the exact opposite. A skilled esthetician looks at your skin, decides it is dehydrated rather than oily today, drops the acid strength, spends longer on massage and less on extraction. No protocol does that. The ceiling is higher and so is the variance.',
    },
    {
      t: 'note',
      tone: 'info',
      title: 'Neither is inherently better',
      text: 'The choice is really between predictability and adaptability. If you value knowing exactly what you will get, the branded treatment delivers that. If you have found an esthetician you trust, their judgement is worth more than any protocol.',
    },
    { t: 'h2', id: 'which-suits-what', text: 'Which suits what' },
    {
      t: 'table',
      head: ['You want', 'Consider'],
      rows: [
        ['A consistent, repeatable result', 'HydraFacial®'],
        ['Congestion addressed without manual squeezing', 'HydraFacial®'],
        ['A relaxing experience with massage', 'Traditional facial'],
        ['Treatment adapted to how your skin is today', 'Traditional facial'],
        ['Lower cost', 'Traditional facial'],
        ['A quick treatment before an event', 'Either — both are common pre-event choices'],
      ],
    },
    {
      t: 'p',
      text: 'The relaxation row is worth taking seriously if that is why you book facials. A device treatment is a procedure — efficient, a bit clinical, and over quickly. A traditional facial usually includes a proper massage and runs closer to an hour and a half. Some people find the branded version anticlimactic for exactly that reason.',
    },
    { t: 'h2', id: 'cost-over-a-year', text: 'What the gap looks like over a year' },
    {
      t: 'table',
      head: ['', 'HydraFacial® monthly', 'Traditional facial monthly'],
      rows: [
        ['Per session', '$150 - 350', '$70 - 200'],
        ['12 sessions', '$1,800 - 4,200', '$840 - 2,400'],
      ],
    },
    {
      t: 'p',
      text: 'The annual gap is substantial — often more than a thousand dollars for treatments that address the same concerns. A common compromise is alternating: the branded treatment quarterly, traditional facials in between. That keeps the consistency benefit at roughly half the cost.',
    },
    {
      t: 'p',
      text: '[How Much Does a HydraFacial Cost?](/en/hydrafacial-cost) breaks down what drives the price and where the cheaper alternatives sit.',
    },
    { t: 'h2', id: 'what-neither-is', text: 'What neither one is' },
    {
      t: 'table',
      head: ['', 'Why'],
      rows: [
        ['A medical treatment', 'Neither treats skin conditions'],
        ['A permanent change', 'Both are temporary by design'],
        ['A substitute for daily skincare', 'Your home routine matters more than occasional treatments'],
        ['A replacement for dermatology', 'For acne or pigmentation, see a licensed medical provider'],
      ],
    },
    {
      t: 'p',
      text: 'This comparison gets framed as though one of them is the serious option and the other is the pampering option. Both are cosmetic. If you are choosing between them to solve a skin problem, the honest answer is that neither one is the right tool and a doctor is — [HydraFacial Benefits](/en/hydrafacial-benefits) sets out what the branded treatment realistically delivers and where it stops.',
    },
    { t: 'h2', id: 'how-to-decide', text: 'How to decide in practice' },
    {
      t: 'ol',
      items: [
        '**Decide what you are buying** — a reliable result, or an hour of genuine relaxation. They are different purchases.',
        '**Check whether your provider uses the branded device**, if you are paying a branded price.',
        '**Try one of each** before committing to a package of either. One session tells you more than any comparison article.',
        '**Judge on how your skin looks in three days**, not on how it looks walking out. Both look good walking out.',
      ],
    },
  ],
  faq: [
    { q: 'What is the difference between a HydraFacial and a regular facial?', a: 'Extraction method — vortex suction versus manual extraction by hand — plus standardisation and price.' },
    { q: 'Which one is better?', a: 'Neither universally. The branded treatment is more consistent; a traditional facial is more adaptable to your skin on the day.' },
    { q: 'Which is cheaper?', a: 'A traditional facial, typically by about half.' },
    { q: 'Which is more relaxing?', a: 'A traditional facial — it usually includes massage and runs longer.' },
    { q: 'Can I alternate between them?', a: 'Many people do. Alternating spreads the cost while keeping some of the consistency benefit.' },
  ],
  related: [
    { href: '/en/what-is-a-hydrafacial', label: 'What Is a HydraFacial?' },
    { href: '/en/hydrafacial-cost', label: 'How Much Does a HydraFacial Cost?' },
    { href: '/en/how-often-hydrafacial', label: 'How Often Should You Get a HydraFacial?' },
  ],
}
