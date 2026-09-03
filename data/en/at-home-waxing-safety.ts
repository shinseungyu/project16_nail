import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, WAX_BURN_NOTE } from './common'

export const atHomeWaxingSafety: EnPage = {
  path: '/en/at-home-waxing-safety',
  title: 'At-Home Waxing: Safety Rules and What to Avoid',
  h1: 'At-Home Waxing Safely',
  description:
    'Home waxing works with the right precautions. Temperature testing, areas to leave to professionals, and contraindications to check.',
  keywords: ['at home waxing safety', 'diy waxing tips', 'waxing at home mistakes', 'waxing contraindications'],
  category: 'Waxing',
  stage: 0,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**Test the temperature every time, never double-dip, and leave certain areas to professionals.** Home waxing is manageable for arms, legs and underarms. Intimate areas and the face carry more risk when you are doing it to yourself.',
  blocks: [
    { t: 'note', tone: 'warn', text: WAX_BURN_NOTE },
    { t: 'h2', id: 'before-you-start', text: 'Before you start' },
    {
      t: 'table',
      head: ['Check', 'Detail'],
      rows: [
        ['Hair length', 'About 0.5 - 1 cm — shorter will not grip'],
        ['Skin condition', 'No cuts, sunburn, irritation or active breakouts'],
        ['Medications', 'Some skin medications contraindicate waxing — check with your doctor'],
        ['Recent exfoliation', 'Wait a few days'],
        ['Patch test', 'Especially with a new product'],
      ],
    },
    { t: 'p', text: 'The medication row is the one people skip. **Several common skin treatments make skin far more likely to lift during waxing**, and the result is not irritation — it is a raw patch that takes over a week to heal.' },
    { t: 'h2', id: 'the-rules', text: 'The rules' },
    {
      t: 'table',
      head: ['Rule', 'Why'],
      rows: [
        ['Wrist-test the temperature every time', 'Burns are the main home waxing injury'],
        ['Never double-dip a spatula', 'Contamination'],
        ['Clean, dry skin', 'Wax will not grip damp skin'],
        ['Apply with growth, remove against', 'Standard for soft wax'],
        ['Hold the skin taut', 'Reduces bruising and improves removal'],
        ['Remove parallel to the skin, not upward', 'Upward pulling causes bruising'],
        ['Do not re-wax the same spot repeatedly', 'Each pass strips surface skin'],
      ],
    },
    { t: 'p', text: 'The last two are where most of the pain comes from, and both are free to fix. **Holding skin taut and pulling flat and fast** changes the experience more than any product you can buy.' },
    { t: 'h2', id: 'leave-to-professionals', text: 'Areas to leave to professionals' },
    {
      t: 'table',
      head: ['Area', 'Why'],
      rows: [
        ['Brazilian and intimate', 'Angle, visibility, skin sensitivity, and the consequences of getting it wrong'],
        ['Eyebrows', 'Shape errors take weeks to grow out'],
        ['Your own back', 'You cannot see or reach it properly'],
        ['Anywhere with a skin condition', 'Needs assessment first'],
      ],
    },
    { t: 'p', text: 'None of this is about capability. **It is about visibility and angle** — you cannot hold skin taut properly on an area you are contorting to reach, and taut skin is the safety mechanism.' },
    { t: 'h2', id: 'do-not-wax-if', text: 'Do not wax if' },
    {
      t: 'ul',
      items: [
        'You are taking certain skin medications — **check with your doctor**.',
        'Skin is **sunburned, broken or irritated**.',
        'You have a suspected skin infection in the area.',
        '**Over moles, warts or raised lesions.**',
        'You have diabetes or a circulation condition — **consult your doctor first**.',
        'You are immunocompromised — consult your doctor.',
      ],
    },
    { t: 'h2', id: 'if-something-goes-wrong', text: 'If something goes wrong' },
    {
      t: 'table',
      head: ['Problem', 'Action'],
      rows: [
        ['Burn', 'Cool running water; do not pull wax off burned skin; seek care for blistering'],
        ['Skin lifted or torn', 'Keep it clean, cover it, watch for infection'],
        ['Severe bruising', 'Monitor; see a doctor if extensive'],
        ['Signs of infection', 'See a doctor — spreading redness, warmth, pus, fever'],
        ['Widespread rash after a new product', 'Stop using it; see a doctor if it spreads'],
      ],
    },
    { t: 'h2', id: 'afterwards', text: 'Afterwards' },
    { t: 'p', text: 'What you do in the next 48 hours decides whether the result is smooth skin or a crop of ingrown hairs and irritation.' },
    {
      t: 'ol',
      items: [
        '**Skip heat for 24 hours** — hot showers, saunas, and strenuous exercise.',
        '**No sun exposure on freshly waxed skin**, and sunscreen after that.',
        '**Wear loose clothing** over the area for the first day.',
        '**Start gentle exfoliation after two to three days**, not before — this is what prevents ingrown hairs.',
        'Moisturise, but avoid heavily fragranced products on freshly waxed skin.',
        '**Do not pick at ingrown hairs.** That is how they become an infection rather than a bump.',
      ],
    },
    { t: 'p', text: 'Step four is the one that gets skipped and then blamed on the wax. **Ingrown hairs come from dead skin trapping regrowth**, and a gentle exfoliating routine a few days later prevents most of them.' },
  ],
  faq: [
    { q: 'Is at-home waxing safe?', a: 'With temperature testing and the right precautions, for suitable areas. Burns are the main risk.' },
    { q: 'Which areas should I not do myself?', a: 'Intimate areas, eyebrows, and your own back — mainly because you cannot hold the skin taut properly.' },
    { q: 'How long does hair need to be?', a: 'About 0.5 to 1 cm. Shorter and the wax will not grip it.' },
    { q: 'What if I lift skin?', a: 'Keep it clean and covered, and watch for signs of infection. See a doctor if redness spreads or there is pus.' },
    { q: 'Can I wax while on medication?', a: 'Some skin medications contraindicate waxing. Check with your doctor before you start.' },
  ],
  related: [
    { href: '/en/wax-warmer-temperature', label: 'Wax Temperature: Getting It Right' },
    { href: '/en/hard-wax-vs-soft-wax', label: 'Hard Wax vs Soft Wax' },
    { href: '/en/how-long-does-waxing-last', label: 'How Long Does Waxing Last?' },
  ],
}
