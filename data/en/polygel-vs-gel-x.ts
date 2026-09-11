import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, NAIL_PLATE_NOTE } from './common'

export const polygelVsGelX: EnPage = {
  path: '/en/polygel-vs-gel-x',
  title: 'Polygel vs Gel X: Which Extension System?',
  h1: 'Polygel vs Gel X: Which Should You Choose?',
  description:
    'Gel X uses pre-shaped tips and is fast; polygel is sculpted by hand over a form and fully custom. Cost, time and removal compared.',
  keywords: ['polygel vs gel x', 'polygel or gel x', 'which nail extension is better'],
  category: 'Nails',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**Gel X uses a pre-shaped tip and is fast and consistent. Polygel is sculpted by hand over a dual form and is fully custom.** Gel X wins on speed and easy removal; polygel wins on customisation. Neither is the objectively "better" system.',
  blocks: [
    { t: 'note', tone: 'warn', text: NAIL_PLATE_NOTE },
    { t: 'h2', id: 'comparison', text: 'Comparison' },
    {
      t: 'table',
      head: ['', 'Gel X', 'Polygel'],
      rows: [
        ['Method', 'Pre-formed full-cover soft gel tip', 'Sculpted by hand over a dual form'],
        ['Application time', '30 - 60 min', '3 hours or more the first time; 60 - 90 min at later fills'],
        ['Customisation', 'Limited to available tip shapes and sizes', 'Fully custom curve, length and shape'],
        ['Weight', 'Light', 'Light, slightly heavier than Gel X at length'],
        ['Removal', 'Soaks off quickly', 'Filed seal, then soak-off - a bit more involved'],
        ['Cost, full set', '$60 - 110', '$50 - 100'],
      ],
    },
    { t: 'p', text: 'Prices vary by salon and region. The application-time row is the one that surprises most first-time polygel clients - sculpting each nail from a form takes real time that a pre-shaped tip skips entirely.' },
    { t: 'h2', id: 'when-each', text: 'When each makes sense' },
    {
      t: 'table',
      head: ['Situation', 'Pick'],
      rows: [
        ['You want speed and consistency', 'Gel X'],
        ['You want a specific custom curve or an unusual nail bed shape', 'Polygel'],
        ['This is your first extension ever', 'Gel X - simpler, more forgiving appointment'],
        ['You want the most natural-feeling weight', 'Either - both are light relative to acrylic'],
        ['You want the easiest possible removal', 'Gel X'],
      ],
    },
    { t: 'p', text: '**The customisation gap is the real reason the two coexist.** Gel X tips come in a set of standard sizes and curves; polygel is built from nothing on each finger, which matters if your nail beds are unusually wide, narrow, or curved.' },
    { t: 'h2', id: 'customisation', text: 'The customisation use case in detail' },
    { t: 'p', text: 'A dual form has no fixed size - it supports whatever shape the technician builds on top of it. That is polygel’s clearest advantage over any tip-based system.' },
    {
      t: 'table',
      head: ['If your situation is', 'Which fits better'],
      rows: [
        ['Standard nail bed width and curve', 'Either works - Gel X is faster'],
        ['Unusually wide or narrow nail beds', 'Polygel - no tip size will fit perfectly'],
        ['A dramatic or asymmetric shape request', 'Polygel'],
        ['You want ten nails to look identical fast', 'Gel X - consistency is its strength'],
        ['A single nail needs an odd repair mid-cycle', 'Polygel is easier to blend seamlessly'],
      ],
    },
    { t: 'h2', id: 'removal', text: 'Removal differs' },
    { t: 'p', text: 'Both are largely soak-off systems, but the steps before soaking are not identical, and it is worth knowing which you are wearing before you try removing either at home.' },
    {
      t: 'table',
      head: ['System', 'Before soaking', 'Typical soak time'],
      rows: [
        ['Gel X', 'Length reduced, top filed to matte', '10 - 15 min'],
        ['Polygel', 'Length reduced, top coat filed, bulk filed down', '15 - 25 min'],
      ],
    },
    { t: 'note', title: 'Polygel needs more filing before it soaks', text: 'Because it is a thicker, denser product than soft gel, acetone takes longer to reach it. Skipping the bulk-filing step is the main reason people report polygel "will not soak off." See [How to Remove Polygel Nails](/en/polygel-removal) for the full method.' },
    { t: 'h2', id: 'appointment', text: 'What each appointment involves' },
    {
      t: 'table',
      head: ['', 'Gel X', 'Polygel'],
      rows: [
        ['Sizing step', 'Yes, ten tips fitted', 'Forms fitted per nail, no fixed sizes'],
        ['Sculpting', 'None - the tip provides the shape', 'Yes, on every nail'],
        ['Curing cycles', 'Several', 'Several, often more given the working-time freedom'],
        ['Filing at the end', 'Shape refinement', 'More - the final shape is created here'],
        ['Consistency across ten nails', 'Very high', 'Depends on the technician'],
      ],
    },
    { t: 'p', text: 'Polygel puts more of the outcome in the technician’s hands, for better and worse. A skilled sculptor can produce a shape a tip tray simply does not offer; a rushed one produces unevenness a pre-formed tip would have prevented.' },
    { t: 'h2', id: 'maintenance', text: 'Maintenance compared' },
    {
      t: 'table',
      head: ['', 'Gel X', 'Polygel'],
      rows: [
        ['Fill interval', '2 - 3 weeks', '3 - 4 weeks'],
        ['Fill cost', '$50 - 90', '$35 - 70'],
        ['What a fill involves', 'Regrowth filled, structure rebalanced', 'Regrowth filled, shape re-blended'],
        ['Typical reason to redo entirely', 'Lifting, or a shape change', 'Growth, or a nail cracking underneath'],
      ],
    },
    { t: 'h2', id: 'cost-over-time', text: 'Cost over a year' },
    {
      t: 'table',
      head: ['System, typical fill rhythm', 'Annual'],
      rows: [
        ['Polygel, fills every 3 - 4 weeks', 'approx. $700 - 1,300'],
        ['Gel X, fills every 2 - 3 weeks', 'approx. $900 - 1,650'],
      ],
    },
    { t: 'p', text: '**Polygel tends to be the cheaper habit over a year**, mostly because its fill cycle stretches a week further, not because any single appointment costs dramatically less.' },
    { t: 'h2', id: 'choosing', text: 'A simple way to decide' },
    { t: 'p', text: 'The choice usually comes down to one question: do you want the fastest, most consistent appointment, or a shape built specifically for your nail beds?' },
    {
      t: 'table',
      head: ['What you want', 'System'],
      rows: [
        ['Speed and predictability', 'Gel X'],
        ['A fully custom shape', 'Polygel'],
        ['The lowest annual cost', 'Polygel, at typical fill intervals'],
        ['The easiest at-home removal if you must', 'Gel X'],
        ['A first extension with the least to learn', 'Gel X'],
      ],
    },
    { t: 'p', text: 'Neither is more damaging than the other. Both come down to the same two variables that decide every enhancement system: how well the natural nail was prepped, and how carefully it is removed.' },
  ],
  faq: [
    { q: 'Which lasts longer, polygel or Gel X?', a: 'Similar wear per set, around three to four weeks. Polygel typically stretches to a slightly longer fill cycle.' },
    { q: 'Which is easier to remove at home?', a: 'Gel X, generally, since it needs less filing before soaking. Polygel is denser and needs the bulk filed down first.' },
    { q: 'Which is better for unusual nail shapes?', a: 'Polygel, because it is built from a form rather than fitted from a tray of tip sizes.' },
    { q: 'Which is cheaper over a year?', a: 'Polygel tends to run a little less, roughly $700 to $1,300 versus $900 to $1,650 for Gel X, mainly due to the longer fill interval.' },
    { q: 'Can I switch between them?', a: 'Yes, at a full removal appointment rather than a fill.' },
  ],
  related: [
    { href: '/en/what-is-polygel', label: 'What Is Polygel?' },
    { href: '/en/polygel-vs-acrylic', label: 'Polygel vs Acrylic Nails' },
    { href: '/en/what-are-gel-x-nails', label: 'What Are Gel X Nails?' },
  ],
}
