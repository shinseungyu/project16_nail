import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO } from './common'

export const balayageGoneWrong: EnPage = {
  path: '/en/balayage-gone-wrong',
  title: 'Balayage Gone Wrong: What to Do Next',
  h1: 'Balayage Gone Wrong: Your Options',
  description:
    'Brassy, patchy, or too-light balayage. What is fixable, what needs time, and how to raise it with your salon.',
  keywords: ['balayage gone wrong', 'brassy balayage', 'patchy balayage', 'balayage fix'],
  category: 'Hair Colour',
  stage: 3,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Brassiness and tone issues are usually fixable with a toner or gloss. Patchiness and over-lightening are harder and may need time.** Most salons will correct their own work within a couple of weeks, so ask promptly and politely.',
  blocks: [
    { t: 'h2', id: 'by-problem', text: 'By problem' },
    {
      t: 'table',
      head: ['Problem', 'Fixable?', 'How'],
      rows: [
        ['Brassy or orange', 'Usually', 'Toner or gloss'],
        ['Too warm overall', 'Usually', 'Cool-toned gloss'],
        ['Patchy or uneven', 'Sometimes', 'Corrective session; may need more lift'],
        ['Too light', 'Sometimes', 'Colour deposited back - tricky, can go muddy'],
        ['Too subtle', 'Usually', 'An additional session'],
        ['Damaged, brittle', 'Not a colour fix', 'Treatments and cutting; time'],
        ['Bands or stripes', 'Sometimes', 'Corrective work by an experienced colourist'],
      ],
    },
    { t: 'h2', id: 'raising-it', text: 'How to raise it with the salon' },
    {
      t: 'ol',
      items: [
        '**Go back promptly.** Most salons have a correction window of one to two weeks.',
        '**Be specific.** "It is brassier than the photo we discussed" works better than "I hate it".',
        '**Bring the original reference photo** rather than describing it.',
        'Ask what they can adjust and whether there is a charge.',
        '**Do not attempt a home fix first.** Box dye over fresh balayage makes professional correction far harder and more expensive.',
      ],
    },
    { t: 'note', title: 'Prompt and specific gets results', text: 'Colourists generally want to fix their own work, both professionally and because a corrected client returns. What makes that difficult is a vague complaint weeks later, after something has been applied at home.' },
    { t: 'h2', id: 'not-the-salon', text: 'What is not the salon’s fault' },
    {
      t: 'ul',
      items: [
        '**Fading after several weeks** — that is normal toner life, not a failure.',
        '**Warmth on very dark hair after one session** — that is a lifting stage.',
        '**Not achieving platinum from black in one visit** — that was never realistic.',
      ],
    },
    { t: 'p', text: 'Reviewing what was agreed at consultation matters here. A written or photo-confirmed plan protects both sides, and its absence is usually why these conversations become difficult.' },
    { t: 'h2', id: 'preventing', text: 'Preventing it next time' },
    {
      t: 'table',
      head: ['Step', 'Why'],
      rows: [
        ['Bring three reference photos, not one', 'One photo is ambiguous; three show a pattern'],
        ['Disclose every colour you have used', 'Including box dye, including years ago'],
        ['Ask what is realistic in one session', 'Sets the expectation before the appointment'],
        ['Ask about toner maintenance before leaving', 'Prevents the four-week brassiness surprise'],
        ['Book a consultation separately for major changes', 'A rushed consult at the chair is where mismatches start'],
      ],
    },
    { t: 'h2', id: 'if-unhappy-again', text: 'If the correction does not work either' },
    { t: 'p', text: 'Occasionally a second attempt does not resolve it, and at that point the honest options narrow.' },
    {
      t: 'table',
      head: ['Situation', 'Realistic path'],
      rows: [
        ['Tone still off', 'A different colourist for a fresh assessment'],
        ['Hair now too compromised to process', 'Stop, treat, and wait'],
        ['Patchiness persists', 'Corrective specialist, possibly over months'],
        ['You have lost confidence in the salon', 'Take your consultation notes elsewhere'],
      ],
    },
    { t: 'p', text: '**Repeated processing to chase a result is how hair gets damaged.** If two attempts have not worked, the next step is usually a pause rather than a third.' },
    { t: 'h2', id: 'timeline', text: 'What to do in the first 48 hours' },
    { t: 'p', text: 'How you handle the first two days affects how fixable it is, more than most people realise.' },
    {
      t: 'ol',
      items: [
        '**Look at it in daylight** before deciding. Salon lighting is not neutral.',
        '**Wait one wash** if the issue is tone. Freshly glossed hair often settles.',
        '**Photograph it** in daylight, next to your reference photo.',
        '**Contact the salon** rather than posting about it or applying anything.',
        '**Do not put box dye on it.** This is the step that turns a fix into a correction.',
      ],
    },
    { t: 'p', text: 'Salon lighting is warm and flattering by design, and a great many "gone wrong" reactions happen in a car park. That is not a reason to ignore a real problem, but it is a reason to look twice before acting.' },
    { t: 'h2', id: 'reasonable', text: 'What a reasonable correction looks like' },
    { t: 'p', text: 'Knowing what a salon can fairly be expected to do makes the conversation easier for both sides.' },
    {
      t: 'table',
      head: ['Issue', 'Reasonable expectation'],
      rows: [
        ['Tone differs from what was agreed', 'Free correction within their window'],
        ['Placement differs from the reference', 'Free adjustment, usually'],
        ['You changed your mind about the look', 'Chargeable - this is not a fault'],
        ['Hair could not lift as hoped', 'Depends on what was agreed beforehand'],
        ['Damage from over-processing', 'Serious - raise it directly and promptly'],
      ],
    },
    { t: 'note', title: 'The consultation record decides most disputes', text: 'When there is a photo you both looked at and a plan you both agreed, these conversations resolve quickly. When there is not, they come down to two recollections, and nobody wins that.' },
  ],
  faq: [
    { q: 'Can brassy balayage be fixed?', a: 'Usually, with a toner or gloss. It is the most common and most fixable complaint.' },
    { q: 'Will the salon fix it for free?', a: 'Many will within a short window. Ask promptly and politely, and bring the original reference photo.' },
    { q: 'Can I fix it at home?', a: 'Purple shampoo can help mild brassiness. Avoid box dye, which complicates professional correction considerably.' },
    { q: 'What if it is patchy?', a: 'That needs a corrective session with an experienced colourist, and it may take more than one.' },
    { q: 'What if my hair is damaged?', a: 'Colour cannot fix damage. Treatments and cutting are the path, and the rest grows out.' },
  ],
  related: [
    { href: '/en/balayage-dark-hair', label: 'Balayage on Dark Hair' },
    { href: '/en/balayage-damage', label: 'Does Balayage Damage Your Hair?' },
    { href: '/en/balayage-cost', label: 'How Much Does Balayage Cost?' },
  ],
}
