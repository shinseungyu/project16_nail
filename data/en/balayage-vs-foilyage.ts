import type { EnPage } from './types'
import { EN_UPDATED_BATCH7, EN_UPDATED_BATCH7_ISO } from './common'

export const balayageVsFoilyage: EnPage = {
  path: '/en/balayage-vs-foilyage',
  title: 'Balayage vs Foilyage: What’s the Difference?',
  h1: 'Balayage vs Foilyage',
  description:
    'Foilyage applies balayage-style placement, then wraps the sections in foil for more lift. When each technique suits.',
  keywords: ['balayage vs foilyage', 'foilyage', 'what is foilyage', 'foilyage dark hair'],
  category: 'Hair Colour',
  stage: 16,
  updated: EN_UPDATED_BATCH7,
  updatedIso: EN_UPDATED_BATCH7_ISO,
  lead:
    '**Foilyage is balayage placement plus foil.** The hand-painted, blended placement is the same; wrapping the painted sections in foil traps heat and generally produces more lift. It is most often used on darker hair, where freehand balayage alone lifts less than the client has in mind.',
  blocks: [
    { t: 'h2', id: 'comparison', text: 'Side by side' },
    {
      t: 'table',
      head: ['', 'Balayage', 'Foilyage'],
      rows: [
        ['Placement', 'Hand-painted, freehand', 'Hand-painted, then foiled'],
        ['Foil used', 'No', 'Yes'],
        ['Lift achieved', 'Less', 'More'],
        ['Best on', 'Lighter to mid tones', 'Darker hair'],
        ['Blend', 'Very soft', 'Soft, slightly more defined'],
        ['Time in the chair', '2 - 3 hrs', '2.5 - 4 hrs'],
        ['Cost', 'Commonly $150 - 400', 'Usually somewhat higher — it takes longer'],
        ['Processing', 'Open air', 'Foil traps heat'],
      ],
      note: 'Costs vary widely by region, salon and hair length.',
    },
    {
      t: 'p',
      text: 'Both are priced by time and hair length far more than by name. [How Much Does Balayage Cost?](/en/balayage-cost) breaks down what actually drives the number.',
    },
    { t: 'h2', id: 'why-foil', text: 'Why the foil matters' },
    {
      t: 'p',
      text: 'Foil traps heat and keeps lightener from drying out on the hair, which generally allows more lift than painting in open air. Freehand balayage gives a gentler lift and the softest possible blend; foiling the same placement trades a little of that softness for more lift.',
    },
    {
      t: 'p',
      text: 'On dark hair, freehand balayage often does not lift far enough to reach what the client pictured — which is the main reason foilyage exists as a term at all.',
    },
    { t: 'h2', id: 'which-suits', text: 'Which suits you' },
    {
      t: 'table',
      head: ['You have or want', 'Consider'],
      rows: [
        ['Dark brown or black hair, wanting noticeable lift', 'Foilyage'],
        ['Light brown to blonde, wanting subtle dimension', 'Balayage'],
        ['The softest possible blend', 'Balayage'],
        ['Previously coloured dark hair', 'Foilyage — discuss it at consultation'],
        ['A sun-kissed, barely-there effect', 'Balayage'],
        ['A bigger change in one session', 'Foilyage'],
      ],
    },
    { t: 'h2', id: 'terminology', text: 'The terminology problem' },
    {
      t: 'p',
      text: 'Salons use these words inconsistently. Some use “balayage” as a catch-all for any hand-painted lightening, foiled or not, and many colourists mix freehand and foiled sections in a single appointment. So the word you use may not mean what the colourist hears.',
    },
    {
      t: 'table',
      head: ['Say', 'Rather than'],
      rows: [
        ['“I want it noticeably lighter, softly blended”', '“Give me foilyage”'],
        ['“I want subtle, sun-kissed dimension”', '“Give me balayage”'],
        ['“How much lighter can we get in one session?”', 'Assuming it is achievable'],
        ['“What will the grow-out look like?”', 'Finding out in three months'],
      ],
    },
    {
      t: 'p',
      text: 'Bring reference photos. They communicate far more reliably than technique names, for exactly the reason above.',
    },
    { t: 'h2', id: 'dark-hair', text: 'Realistic expectations on dark hair' },
    {
      t: 'table',
      head: ['Reality', 'Why'],
      rows: [
        ['Going very light from very dark usually takes two to three sessions', 'Lifting passes through warm tones that take time to get past safely'],
        ['One session has limits, with or without foil', 'A colourist promising otherwise is a warning sign'],
        ['More lift means more effect on the hair', 'The trade-off is real'],
        ['Toning is usually needed afterwards', 'Budget for a gloss at each session'],
      ],
    },
    {
      t: 'p',
      text: 'A colourist who tells you it will take two or three sessions is being honest with you, not underselling. [Balayage on Dark Hair](/en/balayage-dark-hair) covers what each stage looks like and what the whole plan costs.',
    },
    { t: 'h2', id: 'damage', text: 'On damage' },
    {
      t: 'p',
      text: 'Both techniques lighten, and lightening changes hair. Foilyage generally achieves more lift, and more lift means more effect on the hair’s structure. Neither is damage-free. What reduces the risk is an experienced colourist, realistic session planning, bond-building products where appropriate, and aftercare — see [Does Balayage Damage Your Hair?](/en/balayage-damage).',
    },
    { t: 'h2', id: 'vs-highlights', text: 'Comparing with traditional highlights instead?' },
    {
      t: 'p',
      text: 'Foilyage borrows foil from traditional highlights but keeps balayage’s painted placement, so it sits between the two. If what you are really deciding is freehand painting versus sectioned foil highlights, see [Balayage vs Highlights](/en/balayage-vs-highlights).',
    },
  ],
  faq: [
    { q: 'What is the difference between balayage and foilyage?', a: 'Foilyage uses balayage-style hand-painted placement, then wraps the painted sections in foil for more lift.' },
    { q: 'Which is better for dark hair?', a: 'Foilyage generally achieves more lift on darker hair.' },
    { q: 'Is foilyage more expensive than balayage?', a: 'Usually somewhat, because it takes longer.' },
    { q: 'Can I go very light from black hair in one session?', a: 'Realistically no. It usually takes two to three sessions spaced weeks apart.' },
    { q: 'What should I ask my colourist for?', a: 'Describe the result you want and bring reference photos, rather than naming a technique.' },
  ],
  related: [
    { href: '/en/balayage-vs-highlights', label: 'Balayage vs Highlights' },
    { href: '/en/balayage-dark-hair', label: 'Balayage on Dark Hair' },
    { href: '/en/balayage-damage', label: 'Does Balayage Damage Your Hair?' },
  ],
}
