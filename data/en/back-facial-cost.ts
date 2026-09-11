import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, BACK_FACIAL_NOTE } from './common'

export const backFacialCost: EnPage = {
  path: '/en/back-facial-cost',
  title: 'How Much Does a Back Facial Cost?',
  h1: 'How Much Does a Back Facial Cost?',
  description:
    'Typically $75 to $180 per session. What drives the price, which add-ons are worth it, and the annual cost of regular treatments.',
  keywords: ['back facial cost', 'how much is a back facial', 'back facial price'],
  category: 'Skin Treatments',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**$75 to $180 for a standard session**, rising to $110 to $250 with add-ons. Packages reduce the per-session cost. Treatments every six weeks total roughly **$650 to $1,550 a year** — a number worth comparing against the alternatives before committing.',
  blocks: [
    { t: 'note', tone: 'warn', text: BACK_FACIAL_NOTE },
    { t: 'h2', id: 'price-by-type', text: 'Price by type' },
    {
      t: 'table',
      head: ['Type', 'Typical'],
      rows: [
        ['Express (30 min)', '$55 - 95'],
        ['Standard (60 min)', '$75 - 180'],
        ['With chemical peel', '$110 - 220'],
        ['With LED', '$100 - 200'],
        ['With dermaplaning', '$120 - 250'],
        ['With extended massage', '$110 - 200'],
        ['Package of 3 - 6', '10 - 20% off per session'],
      ],
    },
    { t: 'h2', id: 'what-drives-price', text: 'What drives the price' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['City', 'The largest variable'],
        ['Setting', 'Med-spa above day spa'],
        ['Session length', 'Express versions cost less'],
        ['Add-ons', '$25 - 80 each'],
        ['Extraction time', 'Heavy congestion takes longer — some charge more'],
        ['Packages and memberships', 'Lower per-session, higher commitment'],
      ],
    },
    {
      t: 'p',
      text: 'The extraction row is worth asking about upfront. If your back needs forty minutes of extraction rather than fifteen, some providers charge for the extra time and some simply run out of time and do a partial job. Either outcome is better known in advance — [What to Expect at a Back Facial](/en/back-facial-what-to-expect) covers how that part of the appointment actually goes.',
    },
    { t: 'h2', id: 'annual-cost', text: 'Annual cost' },
    {
      t: 'table',
      head: ['Frequency', 'Annual at $120'],
      rows: [
        ['Every 4 weeks', '~$1,560'],
        ['Every 6 weeks', '~$1,040'],
        ['Quarterly', '$480'],
        ['Before events only (3x/yr)', '$360'],
      ],
    },
    { t: 'h2', id: 'add-ons', text: 'Are the add-ons worth it?' },
    {
      t: 'table',
      head: ['Add-on', 'Worth considering if'],
      rows: [
        ['Extended extraction time', 'Congestion is your main concern — usually the most useful'],
        ['Chemical peel', 'You want more exfoliation; ask about strength'],
        ['LED', 'Varies — ask what the provider expects it to do'],
        ['Dermaplaning', 'Less commonly relevant on the back'],
        ['Extended massage', 'You want relaxation rather than results'],
      ],
    },
    {
      t: 'p',
      text: 'Extended extraction is usually the add-on that matters most if congestion is why you booked. It is also the least glamorous item on the menu, which is why it rarely gets suggested and usually has to be requested.',
    },
    { t: 'h2', id: 'the-comparison', text: 'The cost comparison worth making' },
    {
      t: 'table',
      head: ['Approach', 'Annual cost'],
      rows: [
        ['Back facials every 6 weeks', '~$1,040'],
        ['A dermatology consultation plus prescribed treatment', 'Often substantially less'],
        ['Body wash and habit changes', 'Under $100'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'If you are spending over $1,000 a year on this for acne',
      text: 'A dermatology consultation is likely the better use of that money. Facials are maintenance; medical care addresses the condition. This is not medical advice — it is a budget comparison worth doing honestly.',
    },
    {
      t: 'p',
      text: 'None of this means back facials are a waste. It means they are priced like a treatment and function like maintenance, and the two get conflated most often by people paying the most. See [Back Facial Benefits](/en/back-facial-benefits) for what the treatment genuinely delivers, and [How to Prevent Back Acne](/en/prevent-back-acne) for the third row of that table.',
    },
    { t: 'h2', id: 'packages', text: 'Before buying a package' },
    {
      t: 'ol',
      items: [
        '**Book one session first.** Extraction on the back is uncomfortable and some people decide once is enough.',
        '**Check the expiry date.** An unused session is a full-price loss.',
        '**Confirm what is included** and whether add-ons are charged separately.',
        '**Ask the cancellation policy** before paying upfront.',
        '**Compare the total against a dermatology visit** if the reason you are booking is acne.',
      ],
    },
  ],
  faq: [
    { q: 'How much is a back facial?', a: '$75 to $180 for a standard session; $110 to $250 with add-ons.' },
    { q: 'Why do prices vary?', a: 'City, setting, session length and add-ons.' },
    { q: 'Which add-on is most useful?', a: 'Extended extraction time, if congestion is your concern.' },
    { q: 'Are packages worth it?', a: 'Only if you use every session before it expires.' },
    { q: 'Is there a better use of the money?', a: 'For persistent acne, a dermatology consultation often costs less annually than regular facials.' },
  ],
  related: [
    { href: '/en/what-is-a-back-facial', label: 'What Is a Back Facial?' },
    { href: '/en/back-facial-benefits', label: 'Back Facial Benefits: What It Does and Doesn’t' },
    { href: '/en/back-facial-what-to-expect', label: 'Back Facial: What to Expect Your First Time' },
  ],
}
