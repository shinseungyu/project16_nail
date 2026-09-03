import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, NAIL_PLATE_NOTE } from './common'

export const howToGrowNailsFaster: EnPage = {
  path: '/en/how-to-grow-nails-faster',
  title: 'How to Grow Nails Faster: What Actually Helps',
  h1: 'How to Grow Your Nails Faster',
  description:
    'You cannot meaningfully speed up nail growth, but you can stop losing length to breakage. What works, and what does not.',
  keywords: ['how to grow nails faster', 'nail growth', 'nails wont grow', 'grow long nails'],
  category: 'Nail Care',
  stage: 15,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**You cannot meaningfully speed up the growth rate — but most people are not limited by growth. They are limited by breakage.** Nails grow at a fairly fixed pace; length is decided by how much of it you keep.',
  blocks: [
    { t: 'note', tone: 'warn', text: NAIL_PLATE_NOTE },
    { t: 'h2', id: 'the-honest-framing', text: 'The honest framing' },
    {
      t: 'table',
      head: ['What you can control', 'What you cannot'],
      rows: [
        ['Breakage', 'Growth rate'],
        ['Splitting', 'Genetics'],
        ['Snagging and tearing', 'Age-related changes'],
        ['Damage from product removal', ''],
      ],
    },
    { t: 'p', text: '**Someone whose nails "will not grow" is usually losing length as fast as they gain it.** Reframing the problem from growth to retention is the single most useful thing on this page, because retention is entirely within your control.' },
    { t: 'h2', id: 'what-helps', text: 'What actually helps' },
    {
      t: 'ol',
      items: [
        '**Cuticle oil twice daily.** Flexible nails break less. The highest-return habit available.',
        '**Gloves for wet work.** Repeated wetting and drying is the main cause of brittleness.',
        '**Keep them shorter while building strength.** Less leverage means less breakage, and you gain length faster from a short strong nail than a long fragile one.',
        '**Stop peeling off nail products.** Every peel takes plate layers with it.',
        '**File in one direction with a fine file.** Sawing back and forth causes splits at the edge.',
        '**Do not use nails as tools.** Openers, scrapers, prising things apart.',
      ],
    },
    { t: 'p', text: 'Point three is the counterintuitive one and it is the one that works. **Cutting them shorter feels like going backwards** and it is how most people finally get past the cycle of growing a little then snapping one.' },
    { t: 'h2', id: 'what-does-not', text: 'What does not help much' },
    {
      t: 'table',
      head: ['Claim', 'Reality'],
      rows: [
        ['"Growth accelerating" polishes', 'Do not change growth rate; may reduce breakage'],
        ['Supplements without a deficiency', 'Little effect if you are not deficient'],
        ['Frequent buffing', 'Actively harmful — thins the plate'],
        ['"Letting nails breathe"', 'Not a physiological process'],
        ['Cutting cuticles aggressively', 'Removes a protective seal'],
      ],
    },
    { t: 'p', text: 'The first row is worth reading carefully. Those products are not useless — **they may well reduce breakage, which increases the length you keep.** They just do not do it by the mechanism the name implies.' },
    { t: 'h2', id: 'supplements', text: 'Supplements' },
    { t: 'p', text: '**If you have a nutritional deficiency, correcting it can affect nail health.** That is a real mechanism, not a marketing one.' },
    { t: 'p', text: 'If you do not have one, supplementation generally will not do much. **See a doctor rather than guessing** — self-supplementing based on how your nails look is not a reliable way to identify a deficiency, and some supplements are worth being deliberate about rather than stacking.' },
    { t: 'h2', id: 'realistic-expectations', text: 'What a realistic result looks like' },
    { t: 'p', text: 'Fingernails take months to grow out fully. **Any assessment of whether a change is working needs at least three months** — anything shorter is noise.' },
    {
      t: 'table',
      head: ['Period', 'What to look for'],
      rows: [
        ['Weeks 1 - 4', 'Fewer splits and snags. Length may not change'],
        ['Months 2 - 3', 'Length starting to hold'],
        ['Months 3 - 6', 'The damaged section has grown out'],
        ['Beyond', 'Whatever length you can maintain without breakage'],
      ],
    },
    { t: 'p', text: 'That last row is the honest ceiling. **Everyone has a length at which their nails start breaking**, and it differs between people and between hands. Finding yours and staying just under it is more effective than fighting it.' },
    { t: 'h2', id: 'when-to-ask-a-doctor', text: 'When growth is not the question' },
    { t: 'p', text: 'Sometimes slow or abnormal nail growth is worth asking about rather than working around.' },
    {
      t: 'ul',
      items: [
        '**A sudden change** in growth rate or appearance across several nails.',
        '**Ridging, pitting or dents** in the surface.',
        '**Thickening, crumbling or discolouration.**',
        '**A nail separating from the bed.**',
        'Persistent brittleness that does not respond to any of the changes above over three months.',
      ],
    },
  ],
  faq: [
    { q: 'How can I make my nails grow faster?', a: 'You largely cannot change the rate. Reducing breakage is what actually increases the length you keep.' },
    { q: 'Do nail growth serums work?', a: 'They may reduce breakage, which helps. They do not meaningfully change the growth rate.' },
    { q: 'Do supplements help?', a: 'Only if you are deficient. See a doctor and get tested rather than guessing from your nails.' },
    { q: 'How long does it take to grow out a full nail?', a: 'Several months for fingernails, which is why any change needs three months before you judge it.' },
    { q: 'Should I keep them short while growing?', a: 'Yes. Shorter nails break less, which lets you build strength and then gain length.' },
  ],
  related: [
    { href: '/en/do-nail-strengtheners-work', label: 'Do Nail Strengtheners Actually Work?' },
    { href: '/en/why-are-my-nails-peeling', label: 'Why Are My Nails Peeling?' },
    { href: '/en/nail-care-after-gel', label: 'How to Care for Nails After Gel or Acrylic' },
  ],
}
