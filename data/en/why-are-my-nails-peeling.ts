import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, NAIL_PLATE_NOTE } from './common'

export const whyAreMyNailsPeeling: EnPage = {
  path: '/en/why-are-my-nails-peeling',
  title: 'Why Are My Nails Peeling? Causes and Fixes',
  h1: 'Why Are My Nails Peeling?',
  description:
    'Peeling nails usually come from moisture cycling, removal damage, or over-buffing. What to change, and when to see a doctor.',
  keywords: ['why are my nails peeling', 'peeling nails causes', 'nails splitting in layers', 'weak peeling nails'],
  category: 'Nail Care',
  stage: 15,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Peeling means the nail plate layers are separating, most often from repeated wetting and drying, improper polish removal, or over-buffing.** It is rarely a nutrition problem, though persistent changes are worth a doctor’s opinion.',
  blocks: [
    { t: 'note', tone: 'warn', text: NAIL_PLATE_NOTE },
    { t: 'h2', id: 'causes', text: 'Common causes, ranked' },
    {
      t: 'table',
      head: ['Cause', 'Note'],
      rows: [
        ['Repeated wetting and drying', 'Dishes, hand-washing, swimming — the most common by far'],
        ['Peeling off gel, dip or press-ons', 'Removes plate layers directly'],
        ['Acetone exposure', 'Frequent removals'],
        ['Over-buffing', 'Thins the surface, and it does not grow back quickly'],
        ['Harsh cleaning products', 'Gloves solve this one entirely'],
        ['Low humidity', 'Winter and heated air'],
        ['Trauma', 'Using nails as tools'],
        ['Medical or nutritional factors', 'Less common, but real'],
      ],
    },
    { t: 'p', text: 'The top two account for most cases people ask about. Both are behavioural, which is genuinely good news — **there is something to change rather than something to accept.**' },
    { t: 'h2', id: 'what-to-change', text: 'What to change' },
    {
      t: 'ol',
      items: [
        '**Gloves for washing up and cleaning.** The single highest-impact change available.',
        '**Cuticle oil twice daily.** Flexibility is what stops layers separating.',
        '**Stop peeling off any nail product.** Soak it off or have it removed.',
        '**Reduce buffing.** Do not buff the peeling smooth — that removes more plate.',
        '**Keep nails shorter while they recover.** Less leverage, less catching.',
        'Hand cream after every wash, which is more often than you think.',
      ],
    },
    { t: 'h2', id: 'timeline', text: 'What to expect, and when' },
    { t: 'p', text: 'This is the part people find hardest, because the fixes work on new growth and the damaged section is still attached to your finger.' },
    {
      t: 'table',
      head: ['Period', 'What to expect'],
      rows: [
        ['Weeks 1 - 2', 'Peeling continues — existing damage is still there'],
        ['Weeks 3 - 6', 'New growth at the base looks better'],
        ['Months 3 - 6', 'Damaged section fully grown out'],
      ],
    },
    { t: 'p', text: '**Fingernails take months to replace completely.** Patience is the main requirement, and any assessment of whether a change is working needs at least three months to be meaningful.' },
    { t: 'h2', id: 'buffing', text: 'The buffing trap' },
    { t: 'p', text: 'A peeling nail looks rough, and a buffer makes it look smooth immediately. That instinct is understandable and it makes the problem worse.' },
    { t: 'p', text: '**Buffing removes surface layers from a plate that is already thin.** The nail looks better for a day, then peels again from a thinner starting point. If the free edge is catching, file it shorter instead — that removes length, not thickness.' },
    { t: 'h2', id: 'see-a-doctor', text: 'See a doctor if' },
    {
      t: 'ul',
      items: [
        '**A nail is separating from the nail bed.**',
        '**Discolouration** — green, dark, or white patches spreading.',
        '**Thickening or crumbling.**',
        '**Pain, swelling or redness** around the nail.',
        '**Pitting or dents** in the nail surface.',
        '**Changes across several nails at once**, rather than one damaged nail.',
      ],
    },
    { t: 'p', text: '**Persistent nail changes can indicate conditions worth diagnosing**, and a dermatologist is the right person. Several different conditions look similar in photographs and are treated differently, so identifying it from images online is not a reliable route.' },
    { t: 'h2', id: 'supplements', text: 'What about supplements?' },
    { t: 'p', text: '**Nutritional deficiencies can affect nails**, and correcting a real deficiency can help. That is a genuine mechanism.' },
    { t: 'p', text: 'But self-diagnosing from nail appearance and self-supplementing is not the right approach. **If you suspect a deficiency, that is a conversation with a doctor and a blood test**, not a guess and a bottle. If you are not deficient, supplementation generally will not do much for your nails.' },
  ],
  faq: [
    { q: 'Why are my nails peeling?', a: 'Most often repeated wetting and drying, or peeling nail products off. Over-buffing is a common third cause.' },
    { q: 'Will they recover?', a: 'Yes, as they grow out — typically three to six months for the damaged section to reach the end.' },
    { q: 'Do supplements help?', a: 'Only if you have an actual deficiency. See a doctor and get tested rather than guessing from how your nails look.' },
    { q: 'Should I stop wearing polish?', a: 'Not necessarily — but stop peeling it off, and use a gentler removal routine.' },
    { q: 'When should I see a doctor?', a: 'Separation from the nail bed, discolouration, thickening, pain, pitting, or changes across several nails at once.' },
  ],
  related: [
    { href: '/en/do-nail-strengtheners-work', label: 'Do Nail Strengtheners Actually Work?' },
    { href: '/en/nail-care-after-gel', label: 'How to Care for Nails After Gel or Acrylic' },
    { href: '/en/nail-fungus-after-acrylics', label: 'Nail Problems After Acrylics: What to Do' },
  ],
}
