import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, WAX_BURN_NOTE } from './common'

export const hardWaxVsSoftWax: EnPage = {
  path: '/en/hard-wax-vs-soft-wax',
  title: 'Hard Wax vs Soft Wax: Which for Which Area',
  h1: 'Hard Wax vs Soft Wax',
  description:
    'Hard wax grips hair rather than skin, suiting sensitive areas. Soft wax covers large areas faster. How to choose for each body part.',
  keywords: ['hard wax vs soft wax', 'strip wax vs hard wax', 'which wax for face', 'best wax for bikini'],
  category: 'Waxing',
  stage: 0,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**Hard wax adheres mainly to hair and is peeled off without strips — generally gentler, and standard for sensitive areas. Soft wax adheres to skin as well as hair and is removed with strips — faster over large areas.**',
  blocks: [
    { t: 'note', tone: 'warn', text: WAX_BURN_NOTE },
    { t: 'h2', id: 'comparison', text: 'Side by side' },
    {
      t: 'table',
      head: ['', 'Hard wax', 'Soft wax (strip wax)'],
      rows: [
        ['Adheres to', 'Mainly hair', 'Hair and skin'],
        ['Removal', 'Peeled off directly', 'With cloth or paper strips'],
        ['Skin sensitivity', 'Gentler', 'More stripping of the surface'],
        ['Speed on large areas', 'Slower', 'Faster'],
        ['Reapplying to the same spot', 'Generally acceptable', 'Not recommended'],
        ['Cost per use', 'Higher', 'Lower'],
        ['Cleanup', 'Easier', 'Stickier'],
      ],
    },
    { t: 'h2', id: 'by-area', text: 'By body area' },
    {
      t: 'table',
      head: ['Area', 'Recommended'],
      rows: [
        ['Face and upper lip', 'Hard'],
        ['Eyebrows', 'Hard'],
        ['Underarms', 'Hard'],
        ['Bikini and Brazilian', 'Hard'],
        ['Legs', 'Soft'],
        ['Arms', 'Soft'],
        ['Back and chest', 'Soft — large area'],
        ['Sensitive skin anywhere', 'Hard'],
      ],
    },
    { t: 'h2', id: 'why-hard-suits-sensitive', text: 'Why hard wax suits sensitive areas' },
    { t: 'p', text: 'Because it grips hair more than skin, **it removes less of the skin’s surface layer.** That is the entire reason it is standard for facial and intimate waxing, and it is not a marketing distinction.' },
    { t: 'p', text: 'Soft wax’s skin adhesion is also why **repeated passes over the same area are not advised** — each pass strips surface skin, and two or three passes over one spot is how a routine wax turns into raw, weeping skin that takes days to settle.' },
    { t: 'h2', id: 'technique-differences', text: 'The technique differs too' },
    { t: 'p', text: 'People switching between the two often get poor results simply because they apply the same method to both.' },
    {
      t: 'table',
      head: ['', 'Hard wax', 'Soft wax'],
      rows: [
        ['Thickness applied', 'Thicker, like a layer of icing', 'Thin — almost translucent'],
        ['Edge', 'Build a slightly thicker lip to grip', 'Not applicable'],
        ['Timing', 'Wait until set but still pliable', 'Apply strip immediately'],
        ['Removal direction', 'Against growth, parallel to skin', 'Against growth, parallel to skin'],
        ['Most common mistake', 'Removing it too late, when brittle', 'Applying it too thick'],
      ],
    },
    { t: 'p', text: 'Both share the removal rule and it is the one that decides how much it hurts. **Pull parallel to the skin, not upwards** — lifting away from the body is what causes bruising.' },
    { t: 'h2', id: 'sugaring', text: 'Sugaring — the third option' },
    { t: 'p', text: 'Sugar paste is water-soluble, applied against hair growth and removed with it. It is often described as gentler still, and **cleanup is easier because it dissolves in water** rather than needing oil.' },
    { t: 'p', text: 'Availability varies more than wax, both in salons and in what you can buy for home use. If you have reacted badly to both wax types, it is worth asking about.' },
    { t: 'h2', id: 'choosing', text: 'If you are only buying one' },
    { t: 'p', text: 'Most home users end up with hard wax, and the reasoning is straightforward.' },
    {
      t: 'ul',
      items: [
        '**Hard wax handles more areas.** It works on legs, just more slowly.',
        '**It is more forgiving on sensitive skin**, which is where home mistakes hurt most.',
        '**No strips to buy** or run out of.',
        '**Soft wax is the better buy** if legs and arms are all you plan to do — it is faster and cheaper per use.',
        'If you are unsure, hard wax is the safer default.',
      ],
    },
  ],
  faq: [
    { q: 'Which is better, hard or soft wax?', a: 'Neither universally. Hard wax for sensitive areas, soft wax for large ones.' },
    { q: 'Which hurts less?', a: 'Hard wax is generally reported as more comfortable on sensitive areas, because it grips hair rather than skin.' },
    { q: 'Can I use hard wax on legs?', a: 'Yes, but it is slower over large areas. Soft wax is the faster choice there.' },
    { q: 'Can I re-wax the same spot?', a: 'With hard wax, sometimes. With soft wax it is not advised — each pass strips surface skin.' },
    { q: 'What about sugaring?', a: 'A third option, water-soluble and often described as gentle. Availability varies more than wax.' },
  ],
  related: [
    { href: '/en/at-home-waxing-safety', label: 'At-Home Waxing Safely' },
    { href: '/en/how-long-does-waxing-last', label: 'How Long Does Waxing Last?' },
    { href: '/en/wax-warmer-guide', label: 'Wax Warmers: How to Choose One' },
  ],
}
