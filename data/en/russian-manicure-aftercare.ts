import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, MED_STATE_SCOPE } from './common'

export const russianManicureAftercare: EnPage = {
  path: '/en/russian-manicure-aftercare',
  title: 'Russian Manicure Aftercare: What to Do and Watch For',
  h1: 'Russian Manicure Aftercare',
  description:
    'How to care for the cuticle area after a Russian manicure, what is normal, and the warning signs that need a doctor.',
  keywords: ['russian manicure aftercare', 'after russian manicure', 'cuticle care after manicure'],
  category: 'Nails',
  stage: 5,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Keep the cuticle area moisturised and watch it for the first few days.** Because the technique works close to the protective seal, monitoring for signs of irritation or infection matters more than after a standard manicure.',
  blocks: [
    { t: 'note', tone: 'warn', text: 'General information, not medical advice. If you have any condition affecting circulation, immunity, or healing, discuss nail services with your doctor.' },
    { t: 'h2', id: 'normal', text: 'What is normal' },
    {
      t: 'table',
      head: ['What', 'Duration'],
      rows: [
        ['Slight sensitivity at the cuticle', 'Hours'],
        ['Skin feeling tight or dry', '1 - 2 days'],
        ['A very clean appearance', 'Ongoing'],
      ],
    },
    { t: 'h2', id: 'not-normal', text: 'What is not normal' },
    {
      t: 'table',
      head: ['Sign', 'Action'],
      rows: [
        ['Redness increasing over days', 'See a doctor'],
        ['Swelling, warmth, throbbing', 'See a doctor'],
        ['Pus', 'See a doctor'],
        ['Bleeding after leaving the salon', 'Contact the salon and see a doctor'],
        ['Fever', 'See a doctor promptly'],
      ],
    },
    { t: 'p', text: 'The distinction is direction of travel. Mild tightness that fades is expected; anything getting worse over days is not, and nail infections respond well to early treatment.' },
    { t: 'h2', id: 'daily', text: 'Daily care' },
    {
      t: 'ol',
      items: [
        '**Cuticle oil twice daily** — the seal area benefits from consistent moisture, and this matters more here than after a standard manicure.',
        'Hand cream regularly.',
        'Gloves for cleaning and washing up.',
        '**Do not pick at the cuticle area.**',
        'Avoid harsh solvents and heavy sanitiser use in the first days.',
      ],
    },
    { t: 'h2', id: 'between', text: 'Between appointments' },
    {
      t: 'ul',
      items: [
        'Continue oil daily; it is the highest-return habit for this service.',
        '**Do not attempt cuticle work yourself at home**, particularly near the eponychium.',
        'If something lifts, book a repair rather than picking at it.',
      ],
    },
    { t: 'h2', id: 'raise-it', text: 'When to raise it with your salon' },
    {
      t: 'table',
      head: ['What happened', 'Why to mention it'],
      rows: [
        ['Any bleeding during the service', 'It should not happen; technique can be adjusted'],
        ['Pain during the service', 'Same - and say it at the time, not after'],
        ['Persistent soreness afterwards', 'The technician needs to know'],
        ['A hangnail or rough edge appearing after', 'Often a finishing issue, easily fixed'],
      ],
    },
    { t: 'p', text: '**A professional wants to know.** Technique adjustments are possible, and a technician who reacts badly to being told has answered a different question for you.' },
    { t: 'h2', id: 'oil', text: 'Why oil matters more after this service' },
    { t: 'p', text: 'The eponychium is skin, and skin that has been worked on close to its edge does better moisturised than dry. Consistent oil keeps the area supple, reduces hangnails, and makes the next appointment easier.' },
    { t: 'p', text: 'This is the one aftercare habit worth being strict about. It costs a few seconds twice a day and it addresses the specific area this technique concentrates on.' },
    { t: 'h2', id: 'first-days', text: 'The first few days, specifically' },
    { t: 'p', text: 'Most of the monitoring window is short. Knowing what to look for on which day makes it a two-second check rather than a source of anxiety.' },
    {
      t: 'table',
      head: ['When', 'Check for'],
      rows: [
        ['Same evening', 'Any bleeding point, or unusual tenderness'],
        ['Day 1', 'Redness that is fading rather than spreading'],
        ['Day 2 - 3', 'No swelling, warmth, or throbbing'],
        ['Day 4 - 7', 'Skin settled, no hangnails forming'],
        ['Ongoing', 'Cuticle area supple with daily oil'],
      ],
    },
    { t: 'p', text: 'Almost everyone finds nothing at every checkpoint. The purpose is to notice early in the small number of cases where there is something, because that is when it is easiest to treat.' },
    { t: 'h2', id: 'products', text: 'What to use, and what to skip' },
    {
      t: 'table',
      head: ['Use', 'Skip'],
      rows: [
        ['A simple cuticle oil', 'Anything with fragrance on broken skin'],
        ['Plain hand cream', 'Exfoliating hand products for a few days'],
        ['Gloves for wet work', 'Prolonged hot water'],
        ['Nothing on the cuticle if it is sore', 'Antiseptic on a whim - ask a pharmacist'],
      ],
    },
    { t: 'note', title: 'Simple is the whole strategy', text: 'The cuticle area after this service does not need a product routine. Oil, cream, and gloves cover it, and anything more elaborate is more likely to irritate than help.' },
    { t: 'h2', id: 'longer-term', text: 'Over repeated appointments' },
    { t: 'p', text: 'Regular clients sometimes notice the cuticle area changing over months. Some of that is expected and some is worth raising.' },
    {
      t: 'table',
      head: ['Over time', 'Expected?'],
      rows: [
        ['Cuticles look consistently tidier', 'Yes - the area stays maintained'],
        ['Less regrowth of loose skin', 'Commonly reported'],
        ['Skin feels dry without oil', 'Yes - oil daily'],
        ['Recurring hangnails', 'No - raise it with your technician'],
        ['Persistent redness at one nail', 'No - see a doctor'],
        ['Nail plate looking thinner', 'No - discuss e-file pressure'],
      ],
    },
    { t: 'p', text: 'The bottom three are the ones to act on. None are common, and all are easier to address early than after months of the same routine.' },
  ],
  faq: [
    { q: 'Is soreness normal after a Russian manicure?', a: 'Mild sensitivity for a few hours can happen. Persistent pain is not normal and is worth raising.' },
    { q: 'Should I use cuticle oil?', a: 'Yes, twice daily. It matters more here than after a standard manicure because of where the work is concentrated.' },
    { q: 'What if it bleeds?', a: 'It should not. Contact the salon, and see a doctor if there are any signs of infection.' },
    { q: 'Can I do cuticle work at home between visits?', a: 'Not advisable, especially near the eponychium. Oil is the correct home routine.' },
    { q: 'How do I know if it is infected?', a: 'Increasing redness, swelling, warmth, pus, or fever. See a doctor rather than waiting it out.' },
  ],
  related: [
    { href: '/en/russian-manicure-safety', label: 'Is a Russian Manicure Safe?' },
    { href: '/en/what-is-a-russian-manicure', label: 'What Is a Russian Manicure?' },
    { href: '/en/russian-vs-regular-manicure', label: 'Russian vs Regular Manicure' },
  ],
}
