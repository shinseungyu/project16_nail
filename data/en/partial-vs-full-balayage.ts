import type { EnPage } from './types'
import { EN_UPDATED_BATCH7, EN_UPDATED_BATCH7_ISO } from './common'

export const partialVsFullBalayage: EnPage = {
  path: '/en/partial-vs-full-balayage',
  title: 'Partial vs Full Balayage: Cost and Coverage',
  h1: 'Partial vs Full Balayage',
  description:
    'Partial covers the top and face-framing sections for less; full covers all around. How to tell which one you actually need.',
  keywords: ['partial vs full balayage', 'partial balayage', 'full balayage', 'partial balayage cost'],
  category: 'Hair Colour',
  stage: 16,
  updated: EN_UPDATED_BATCH7,
  updatedIso: EN_UPDATED_BATCH7_ISO,
  lead:
    '**Partial balayage covers the top section and around the face. Full balayage covers all around, including the back and underneath.** Partial typically costs 30 to 50% less — and if you wear your hair down most of the time, it is often genuinely enough.',
  blocks: [
    { t: 'h2', id: 'the-difference', text: 'The difference' },
    {
      t: 'table',
      head: ['', 'Partial', 'Full'],
      rows: [
        ['Coverage', 'Top section and face-framing', 'All around, including underneath'],
        ['Typical cost', '$100 - 250', '$150 - 400'],
        ['Time in the chair', '1.5 - 2.5 hrs', '2.5 - 4 hrs'],
        ['Visible with hair down', 'Yes', 'Yes'],
        ['Visible in a ponytail or updo', 'Limited', 'Yes'],
        ['Visible when hair is flipped', 'Limited', 'Yes'],
        ['Maintenance cost', 'Lower', 'Higher'],
        ['Best for', 'First-timers, budgets, subtle dimension', 'Full dimension, frequent updos'],
      ],
      note: 'Prices vary considerably by region, salon and hair length.',
    },
    {
      t: 'p',
      text: 'The row that decides it for most people is the ponytail one. With your hair down, the top layer is what everyone sees — and that is exactly the section a partial covers. Lift it into a ponytail and the untouched hair underneath shows. [How Much Does Balayage Cost?](/en/balayage-cost) covers what pushes either service toward the top of its range.',
    },
    { t: 'h2', id: 'which-you-need', text: 'Which one you actually need' },
    {
      t: 'table',
      head: ['You', 'Consider'],
      rows: [
        ['Wear your hair down most of the time', 'Partial — often genuinely enough'],
        ['Wear it up frequently', 'Full'],
        ['Are trying balayage for the first time', 'Partial'],
        ['Want maximum dimension', 'Full'],
        ['Are budget-conscious', 'Partial'],
        ['Have very thick hair', 'Full often looks more even'],
        ['Have fine hair', 'Partial often reads as enough'],
        ['Post a lot of photos from behind', 'Full'],
      ],
    },
    {
      t: 'note',
      tone: 'info',
      title: 'What many salons will not lead with',
      text: 'If you wear your hair down, a partial often looks the same in everyday life for meaningfully less money. A full service is not the worse choice — it is simply only better in situations you may rarely be in.',
    },
    { t: 'h2', id: 'upgrade-path', text: 'Start partial, add later' },
    {
      t: 'p',
      text: 'You can always add more lightness at the next appointment. You cannot un-lighten: taking out lightness you did not want is a corrective colour service, and it usually costs more than the balayage did. That asymmetry is why starting partial is the lower-risk order.',
    },
    {
      t: 'ol',
      items: [
        '**Book a partial** and live with it for a few weeks — hair up, hair down, in photos.',
        '**Decide what is missing**, if anything. Often the answer is nothing.',
        '**Ask to extend it at your next appointment**, when the colourist can see how the first round settled.',
      ],
    },
    {
      t: 'p',
      text: 'This also gives your colourist information no first appointment can: how your hair lifted, how the tone held, and how quickly it faded. [Balayage Gone Wrong](/en/balayage-gone-wrong) covers what correction involves when a first appointment overshoots.',
    },
    { t: 'h2', id: 'annual-cost', text: 'What each costs over a year' },
    {
      t: 'table',
      head: ['', 'Partial', 'Full'],
      rows: [
        ['Per service', '$100 - 250', '$150 - 400'],
        ['Every 4 months (3 times a year)', '$300 - 750', '$450 - 1,200'],
        ['Gloss between appointments', '$30 - 80 each', '$30 - 80 each'],
      ],
    },
    {
      t: 'p',
      text: 'The gloss row is identical for both, which narrows the percentage gap once toning is counted. [Balayage Maintenance](/en/balayage-maintenance) covers how glosses between appointments stretch the time before either service needs redoing.',
    },
    { t: 'h2', id: 'what-to-ask', text: 'What to ask for' },
    {
      t: 'table',
      head: ['Say', 'Rather than'],
      rows: [
        ['“I mostly wear my hair down — is partial enough?”', '“Give me balayage”'],
        ['“Can we start partial and add next time?”', 'Committing to full immediately'],
        ['“What will this look like in a ponytail?”', 'Assuming'],
        ['“What does maintenance cost either way?”', 'Finding out at the desk'],
      ],
    },
    { t: 'h2', id: 'damage', text: 'On damage' },
    {
      t: 'p',
      text: 'Both are lightening services, and lightening changes the structure of hair — that is what lightening is. A skilled colourist manages how much, and aftercare matters, but no lightening service is damage-free, and anyone describing one that way is overselling it.',
    },
    {
      t: 'p',
      text: 'A partial does lighten less of your hair, which is a genuine consideration if your hair is already compromised. [Does Balayage Damage Your Hair?](/en/balayage-damage) covers what determines how much.',
    },
  ],
  faq: [
    { q: 'What is the difference between partial and full balayage?', a: 'Partial covers the top and face-framing sections; full covers all around, including underneath.' },
    { q: 'How much cheaper is partial balayage?', a: 'Typically 30 to 50% less than a full service at the same salon.' },
    { q: 'Is partial balayage enough?', a: 'If you mostly wear your hair down, often yes. If you wear it up, the difference shows.' },
    { q: 'Can I upgrade to full later?', a: 'Yes. Starting partial and adding at the next appointment is the lower-risk order.' },
    { q: 'Is either one damage-free?', a: 'No. Both are lightening services. Partial simply lightens less of your hair.' },
  ],
  related: [
    { href: '/en/balayage-cost', label: 'How Much Does Balayage Cost?' },
    { href: '/en/balayage-maintenance', label: 'Balayage Maintenance' },
    { href: '/en/balayage-vs-highlights', label: 'Balayage vs Highlights' },
  ],
}
