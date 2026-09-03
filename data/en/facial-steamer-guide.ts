import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, STEAM_CLAIMS_NOTE } from './common'

export const facialSteamerGuide: EnPage = {
  path: '/en/facial-steamer-guide',
  title: 'Facial Steamers: What They Do and How to Choose',
  h1: 'Facial Steamers: What They Actually Do',
  description:
    'Facial steamers soften surface skin and are used before cleansing or extractions. Types, what specifications matter, and realistic expectations.',
  keywords: ['facial steamer', 'facial steamer guide', 'nano ionic steamer', 'best facial steamer type'],
  category: 'Skin Treatments',
  stage: 0,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**Steam softens the skin’s surface and loosens the debris sitting in pores, which is why it is used before cleansing or extractions.** It does not open pores — pores have no muscles — and it does not detoxify. **What it does do is make the next step easier.**',
  blocks: [
    { t: 'note', tone: 'warn', text: STEAM_CLAIMS_NOTE },
    { t: 'h2', id: 'expectations', text: 'Setting expectations honestly' },
    {
      t: 'table',
      head: ['Claim you will see', 'Reality'],
      rows: [
        ['"Opens your pores"', 'Pores do not open and close. Steam softens the debris inside them'],
        ['"Detoxifies skin"', 'Not a process skin performs this way'],
        ['"Clears acne"', 'Steam is a preparation step, not a treatment'],
        ['"Shrinks pores"', 'Pore size is largely genetic'],
      ],
    },
    { t: 'p', text: '**What steam genuinely does:** hydrates the surface, softens sebum and keratin plugs, and warms the skin — all of which make cleansing and extraction easier and more comfortable.' },
    { t: 'p', text: 'That is useful. It is just not what the marketing says, and knowing the difference is what stops you buying a device to solve a problem it was never going to solve.' },
    { t: 'h2', id: 'types', text: 'The types' },
    {
      t: 'table',
      head: ['Type', 'Price', 'Best for'],
      rows: [
        ['Handheld / compact', '$25 - 60', 'Occasional home use'],
        ['Table-top with arm', '$60 - 150', 'Regular home use'],
        ['Professional, sometimes with an ozone option', '$150 - 500', 'Salon use'],
        ['Nano-ionic', '$40 - 120', 'Finer mist — the term is used loosely in marketing'],
      ],
      note: 'Typical US pricing. Varies by retailer.',
    },
    { t: 'h2', id: 'what-matters', text: 'What actually matters' },
    {
      t: 'table',
      head: ['Specification', 'Why'],
      rows: [
        ['Steam consistency', 'Sputtering units spit hot water — a burn risk'],
        ['Water tank size', 'Determines run time'],
        ['Auto shut-off', 'Safety when the tank empties'],
        ['Adjustable arm', 'Positioning and distance'],
        ['Easy tank cleaning', 'Mineral buildup is the main maintenance issue'],
        ['Distance guidance', 'Too close is how people get burned'],
      ],
    },
    { t: 'p', text: 'The first row is the one that separates a usable unit from an irritating one. **A steamer that spits hot water is not a minor annoyance** — it is the actual injury risk with these devices, and it is usually a symptom of mineral buildup or of using it during warm-up.' },
    { t: 'h2', id: 'safety', text: 'Safety' },
    {
      t: 'ul',
      items: [
        '**Keep 8 to 12 inches away**, or as the manufacturer specifies.',
        '**Never lean directly over the nozzle.**',
        '**Use distilled water** — tap water causes mineral buildup and sputtering.',
        '**Do not use it for longer than recommended**, usually 5 to 10 minutes.',
        '**Stop if the skin feels hot** or uncomfortable at any point.',
        'Let it heat fully before positioning your face near it.',
      ],
    },
    { t: 'h2', id: 'do-not-use-if', text: 'Do not use one if you have' },
    {
      t: 'table',
      head: ['Condition', 'Why'],
      rows: [
        ['Rosacea or easily flushed skin', 'Heat commonly aggravates it'],
        ['Active inflamed or cystic acne', 'Heat can worsen inflammation'],
        ['Sunburn or broken skin', 'Compromised barrier'],
        ['A very dry or damaged barrier', 'Can worsen dehydration'],
        ['Any skin condition you are unsure about', 'Discuss with a doctor first'],
      ],
    },
    { t: 'p', text: 'The rosacea row is not a technicality. **Heat is one of the most commonly reported triggers**, and a device whose entire function is applying warm moisture to the face is a poor fit for skin that flushes easily.' },
  ],
  faq: [
    { q: 'What does a facial steamer do?', a: 'It softens the skin’s surface and the debris in pores, which makes cleansing and extraction easier.' },
    { q: 'Does it open pores?', a: 'No. Pores have no muscles and do not open and close — steam softens what is inside them.' },
    { q: 'How far away should I sit?', a: 'Usually 8 to 12 inches. Check your device’s specific guidance.' },
    { q: 'What water should I use?', a: 'Distilled. Tap water causes mineral buildup, which is what makes units sputter hot water.' },
    { q: 'Can everyone use one?', a: 'No. Rosacea, inflamed or cystic acne, and a compromised barrier are all reasons to skip it or ask a doctor first.' },
  ],
  related: [
    { href: '/en/how-to-use-a-facial-steamer', label: 'How to Use a Facial Steamer' },
    { href: '/en/facial-steamer-benefits', label: 'Facial Steamer Benefits: What Is Real' },
    { href: '/en/at-home-extractions', label: 'At-Home Extractions: What Is Safe' },
  ],
}
