import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, NAIL_PLATE_NOTE } from './common'

export const nailCareAfterGel: EnPage = {
  path: '/en/nail-care-after-gel',
  title: 'Nail Care After Gel: Recovery Routine That Works',
  h1: 'How to Care for Nails After Gel or Acrylic',
  description:
    'What to do for thin, sensitive nails after removing gel or acrylic. A realistic recovery routine and an honest timeline.',
  keywords: ['nail care after gel', 'nails after acrylic removal', 'thin nails after gel', 'nail recovery routine'],
  category: 'Nail Care',
  stage: 0,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**Cuticle oil twice daily, gloves for wet work, and keep them short.** Recovery is about protecting new growth, not repairing what is already there. Expect three to six months for a full growth-out.',
  blocks: [
    { t: 'note', tone: 'warn', text: NAIL_PLATE_NOTE },
    { t: 'h2', id: 'immediately-after', text: 'Immediately after removal' },
    {
      t: 'table',
      head: ['Do', 'Do not'],
      rows: [
        ['Apply cuticle oil generously', 'Buff to "smooth out" the ridges'],
        ['Hand cream', 'Apply another set immediately if nails feel sore'],
        ['Trim short', 'Keep length that will catch and tear'],
        ['File gently to smooth the edges', 'Use nails as tools while they are fragile'],
      ],
    },
    { t: 'p', text: '**Do not buff away the white patchy texture.** That is thinned nail plate, and buffing removes more of what is left. It looks better for a day and is worse for a month.' },
    { t: 'h2', id: 'daily-routine', text: 'The daily routine' },
    {
      t: 'table',
      head: ['Frequency', 'Action'],
      rows: [
        ['Twice daily', 'Cuticle oil, massaged in properly'],
        ['After every hand wash', 'Hand cream'],
        ['Every wet task', 'Gloves'],
        ['Weekly', 'Trim or file to keep them short'],
      ],
    },
    { t: 'p', text: '**Cuticle oil is the highest-return habit here by a wide margin.** Flexible nails split less, and splitting is what costs you length. It is also the cheapest item on the list.' },
    { t: 'h2', id: 'do-you-need-a-break', text: 'Do you actually need a break?' },
    {
      t: 'table',
      head: ['Situation', 'Recommendation'],
      rows: [
        ['Nails feel thin but not sore', 'A break helps but is not essential'],
        ['Nails sore or sensitive', 'Take a break'],
        ['Visible white patches', 'Break recommended'],
        ['Nails lifting or separating from the bed', 'See a doctor'],
        ['Nails feel completely normal', 'No break needed'],
      ],
    },
    { t: 'h2', id: 'breathing', text: 'On "letting nails breathe"' },
    { t: 'p', text: 'The nail plate is dead tissue and does not respire. **"Letting nails breathe" is not a physiological process** — the nail bed underneath gets everything it needs from blood supply, not from air.' },
    { t: 'p', text: 'The useful idea buried in the phrase is real, though. **A break helps because you stop filing, buffing and soaking**, not because nails need air. If you frame it that way, it also tells you what a useful break looks like: no enhancements, minimal buffing, and gentle removal of anything you do wear.' },
    { t: 'h2', id: 'polish-during-recovery', text: 'Can you wear polish while recovering?' },
    { t: 'p', text: 'Yes, and it can genuinely help — a layer of regular polish protects a fragile free edge and stops layers catching on fabric.' },
    {
      t: 'table',
      head: ['Do', 'Note'],
      rows: [
        ['Regular polish', 'Fine, and protective'],
        ['Non-acetone remover where possible', 'Gentler on already-dry nails'],
        ['A hydrating base coat', 'Reasonable'],
        ['Peel-off polish', 'Avoid — the habit is the problem'],
        ['Another gel or dip set', 'Only once nails feel normal again'],
      ],
    },
    { t: 'h2', id: 'timeline', text: 'The honest timeline' },
    {
      t: 'table',
      head: ['Period', 'What to expect'],
      rows: [
        ['Weeks 1 - 4', 'Thin, may split. This is the frustrating stage'],
        ['Months 2 - 3', 'New growth at the base looks normal'],
        ['Months 4 - 6', 'Fully grown out'],
      ],
    },
    { t: 'p', text: 'Nothing shortens this. **Fingernails grow at a fairly fixed rate**, so the only variable you control is how much of the new growth survives to become length — which is exactly what the routine above is for.' },
    { t: 'h2', id: 'going-back', text: 'Going back to enhancements' },
    { t: 'p', text: 'Most people do go back, and there is nothing wrong with that. A few things make the next round easier on your nails.' },
    {
      t: 'ul',
      items: [
        '**Wait until nails no longer feel sore or sensitive.**',
        '**Ask for light buffing only** during prep, and say why.',
        '**Ask for thinner application** if your nails are still thin.',
        '**Never peel a set off**, even the one that is already lifting at the edges.',
        'Have lifting repaired promptly rather than leaving it for the next appointment.',
        '**If a nail is discoloured, thickened or lifting from the bed, see a doctor before applying anything over it.**',
      ],
    },
  ],
  faq: [
    { q: 'How long until my nails recover after gel?', a: 'Three to six months for a full growth-out. New growth at the base usually looks normal by month two or three.' },
    { q: 'Do nails need to breathe?', a: 'Not physiologically — the nail plate is dead tissue. A break helps by stopping the filing, buffing and soaking cycle.' },
    { q: 'Should I buff the ridges out?', a: 'No. That removes more nail plate from a surface that is already thin.' },
    { q: 'Can I wear regular polish while recovering?', a: 'Yes, and it can protect a fragile free edge. Use a non-acetone remover where possible.' },
    { q: 'What if they are sore?', a: 'Take a break from enhancements, and see a doctor if the soreness persists or a nail is lifting from the bed.' },
  ],
  related: [
    { href: '/en/why-are-my-nails-peeling', label: 'Why Are My Nails Peeling?' },
    { href: '/en/do-nail-strengtheners-work', label: 'Do Nail Strengtheners Actually Work?' },
    { href: '/en/gel-nail-removal-at-home', label: 'Gel Nail Removal at Home' },
  ],
}
