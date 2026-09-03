import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, NAIL_PLATE_NOTE } from './common'

export const nailStrengthenerVsHardener: EnPage = {
  path: '/en/nail-strengthener-vs-hardener',
  title: 'Nail Strengthener vs Hardener: Which Do You Need?',
  h1: 'Nail Strengthener vs Hardener',
  description:
    'Hardeners make nails rigid; strengtheners improve flexibility. Using the wrong one makes the problem worse. How to tell which you need.',
  keywords: ['nail strengthener vs hardener', 'brittle vs soft nails', 'nail hardener too brittle', 'which nail treatment'],
  category: 'Nail Care',
  stage: 0,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**If your nails snap and split, you need flexibility — a hydrating strengthener. If they bend and tear like wet paper, you need rigidity — a hardener.** Using the wrong one actively makes things worse, and most people pick wrong.',
  blocks: [
    { t: 'note', tone: 'warn', text: NAIL_PLATE_NOTE },
    { t: 'h2', id: 'diagnose-first', text: 'Work out which problem you have' },
    { t: 'p', text: 'Do this before buying anything. It takes ten seconds and it is the whole decision.' },
    {
      t: 'table',
      head: ['Symptom', 'Problem', 'You need'],
      rows: [
        ['Snap off cleanly', 'Too brittle', 'Hydration and flexibility'],
        ['Split into layers at the edge', 'Too brittle and dry', 'Hydration'],
        ['Bend before breaking', 'Too soft', 'Hardening'],
        ['Tear like wet paper', 'Too soft', 'Hardening'],
        ['Peel at the free edge', 'Usually brittle plus damage', 'Hydration and protection'],
      ],
    },
    { t: 'p', text: '**Brittle is far more common than soft.** Frequent water exposure, acetone, and harsh cleaning products all cause brittleness, and almost everyone is exposed to at least one of those daily.' },
    { t: 'h2', id: 'the-two-categories', text: 'The two categories' },
    {
      t: 'table',
      head: ['', 'Hardener', 'Strengthener (hydrating)'],
      rows: [
        ['Effect', 'Rigid, cross-linked surface', 'Flexible, conditioned'],
        ['Common ingredients', 'Formaldehyde or similar cross-linkers', 'Oils, humectants, proteins'],
        ['Risk of wrong use', 'Makes brittle nails crack more', 'Little downside'],
        ['Usage frequency', 'Often limited by the product', 'Usually safe daily'],
        ['Best for', 'Genuinely soft, bendy nails', 'Brittle, splitting, peeling'],
      ],
    },
    { t: 'p', text: 'Notice the asymmetry in the risk row. **Getting it wrong in one direction is fairly harmless; getting it wrong in the other is not.** If you genuinely cannot tell which you have, start with hydration.' },
    { t: 'h2', id: 'over-hardening-trap', text: 'The over-hardening trap' },
    { t: 'p', text: 'It runs like this. Someone with brittle nails buys a hardener. The nails get harder. They then **crack more dramatically instead of bending**, because rigid things snap. The person concludes their nails are still too weak and uses more hardener.' },
    { t: 'p', text: '**If your nails got worse after starting a hardener, stop and switch to hydration.** That is the signal, and it is a common one — it is not a sign you need a stronger product.' },
    { t: 'h2', id: 'what-causes-brittle', text: 'What actually causes brittle nails' },
    {
      t: 'table',
      head: ['Cause', 'Note'],
      rows: [
        ['Frequent water exposure', 'Repeated wetting and drying cycles'],
        ['Acetone', 'Especially frequent gel or dip removal'],
        ['Harsh cleaning products', 'Gloves help more than any product'],
        ['Low humidity', 'Winter, and heated indoor air'],
        ['Age', 'Nails commonly become more brittle over time'],
        ['Medical or nutritional factors', 'Worth a doctor’s opinion if persistent'],
      ],
    },
    { t: 'p', text: 'The first three are the ones you can change this week, and they matter more than which bottle you buy.' },
    { t: 'h2', id: 'how-to-test', text: 'A simple way to test' },
    { t: 'p', text: 'If the symptom table did not settle it, try this over one month rather than guessing.' },
    {
      t: 'ol',
      items: [
        '**Stop using any hardener** you are currently on.',
        '**Cuticle oil twice daily** and gloves for all wet work, for four weeks.',
        'Keep nails short so breakage does not confuse the picture.',
        '**If they improve**, you were brittle — stay with hydration.',
        '**If they are still bending and tearing**, you are genuinely soft — a hardener is reasonable, used at the stated frequency.',
      ],
    },
    { t: 'p', text: 'Four weeks is long enough to see a direction of travel, and short enough that you will actually do it.' },
    { t: 'h2', id: 'when-to-see-a-doctor', text: 'When it is not a product question' },
    { t: 'p', text: 'Some nail changes are worth a diagnosis rather than a purchase.' },
    {
      t: 'ul',
      items: [
        '**Several nails changing at once**, rather than one damaged one.',
        '**Discolouration** — green, dark, or white patches that spread.',
        '**Thickening or crumbling.**',
        '**A nail separating from the nail bed.**',
        '**Pitting or dents** in the surface.',
        'Pain, swelling or redness around a nail.',
      ],
    },
    { t: 'p', text: 'A dermatologist is the right person for these. **Persistent nail changes can indicate conditions worth identifying**, and no strengthener addresses any of them.' },
  ],
  faq: [
    { q: 'What is the difference between a strengthener and a hardener?', a: 'Hardeners make nails rigid; hydrating strengtheners improve flexibility and condition. They suit opposite problems.' },
    { q: 'How do I know which I need?', a: 'Snapping and splitting means brittle — you need hydration. Bending and tearing means soft — you need hardening.' },
    { q: 'Can a hardener make things worse?', a: 'Yes, on already-brittle nails. Rigid nails crack rather than bend, and that is the most common mistake in this category.' },
    { q: 'Are hardeners safe?', a: 'Follow the usage instructions. Some contain formaldehyde and specify limited rather than continuous use.' },
    { q: 'Which is more common, brittle or soft?', a: 'Brittle, by a wide margin — water exposure and acetone are everywhere.' },
  ],
  related: [
    { href: '/en/do-nail-strengtheners-work', label: 'Do Nail Strengtheners Actually Work?' },
    { href: '/en/why-are-my-nails-peeling', label: 'Why Are My Nails Peeling?' },
    { href: '/en/nail-care-after-gel', label: 'How to Care for Nails After Gel or Acrylic' },
  ],
}
