import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, MED_DISCLAIMER, PMU_TATTOO_NOTE } from './common'

export const howLongDoesMicrobladingLast: EnPage = {
  path: '/en/how-long-does-microblading-last',
  title: 'How Long Does Microblading Last? Realistic Timeline',
  h1: 'How Long Does Microblading Last?',
  description:
    'Microblading lasts one to three years depending on skin type, sun exposure and aftercare. What shortens it and when to book maintenance.',
  keywords: ['how long does microblading last', 'microblading longevity', 'microblading fading'],
  category: 'Brows',
  stage: 8,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**One to three years, with most people booking a colour boost every twelve to eighteen months.** Oily skin, sun exposure, and certain skincare actives all shorten it.',
  blocks: [
    { t: 'note', tone: 'warn', text: PMU_TATTOO_NOTE },
    { t: 'h2', id: 'longevity', text: 'What affects longevity' },
    {
      t: 'table',
      head: ['Factor', 'Effect on longevity'],
      rows: [
        ['Oily skin', 'Shorter - often 12 months or less'],
        ['Dry to normal skin', 'Longer - up to 2 - 3 years'],
        ['Sun exposure', 'Significantly shortens'],
        ['Retinoids, AHAs near the brows', 'Fades faster'],
        ['Exfoliating facials over the brows', 'Fades faster'],
        ['Pigment colour', 'Lighter shades fade sooner'],
        ['Immune response', 'Varies individually'],
      ],
    },
    { t: 'h2', id: 'by-skin-type', text: 'Realistic expectations by skin type' },
    {
      t: 'table',
      head: ['Skin type', 'Typical'],
      rows: [
        ['Dry', '2 - 3 years'],
        ['Normal', '18 months - 2 years'],
        ['Combination', '12 - 18 months'],
        ['Oily', '12 months or less'],
      ],
    },
    { t: 'p', text: '**Oily skin is the biggest single variable**, and a good artist will tell you this at consultation rather than after the first fade. If nobody mentions your skin type, that is worth raising yourself.' },
    { t: 'h2', id: 'extending', text: 'Extending it' },
    {
      t: 'ol',
      items: [
        '**SPF on the brows daily** — the highest-impact habit by a clear margin.',
        'Keep retinoids and acids away from the brow area.',
        'Avoid exfoliating facials over the brows.',
        '**Book a colour boost before it fades completely** — refreshing is cheaper than starting over.',
        'Follow aftercare properly the first time.',
      ],
    },
    { t: 'h2', id: 'maintenance', text: 'Maintenance' },
    {
      t: 'table',
      head: ['Service', 'Frequency', 'Cost'],
      rows: [
        ['Colour boost', 'Every 12 - 18 months', '$150 - 400'],
        ['Full redo', 'When faded substantially', 'Near original price'],
      ],
    },
    { t: 'h2', id: 'fading', text: 'What happens as it fades' },
    { t: 'p', text: 'Well-executed microblading generally fades softly. **Poorly executed work can fade to unwanted tones** — this is a known outcome of certain pigments and depths, and it is a reason to prioritise artist skill over price.' },
    {
      t: 'table',
      head: ['Fading pattern', 'Suggests'],
      rows: [
        ['Softens evenly, lighter over time', 'Normal'],
        ['Strokes blur into a soft shade', 'Common on oilier skin'],
        ['Shifts to an unwanted tone', 'Pigment or depth choice'],
        ['Patchy, some strokes gone', 'Retention varied - touch-up addresses it'],
        ['Residual outline after years', 'Normal; complete disappearance is not typical'],
      ],
    },
    { t: 'note', text: 'Complete disappearance is not the usual outcome. **Some residual pigment often remains**, which matters if you are thinking of it as fully reversible.' },
    { t: 'h2', id: 'boost-vs-redo', text: 'Colour boost or start again?' },
    { t: 'p', text: 'The distinction is mostly about how much pigment is left, and it decides both the price and how much say you get over the shape.' },
    {
      t: 'table',
      head: ['Situation', 'Usually'],
      rows: [
        ['Faded but shape still clear', 'Colour boost - cheaper and quicker'],
        ['Faded to faint residue', 'Closer to a full session in price'],
        ['Colour has shifted tone', 'Assessment first; correction may be needed'],
        ['You want a different shape', 'Harder - existing pigment constrains the options'],
        ['Years since the last session', 'Treated as new work by most artists'],
      ],
    },
    { t: 'p', text: '**Booking the boost before it fades completely is the cheaper path**, which is the practical reason to keep track of when your last session was rather than waiting until the brows look bare.' },
    { t: 'h2', id: 'planning', text: 'Planning around the cycle' },
    {
      t: 'ol',
      items: [
        '**Note the date** of your first session and the touch-up.',
        '**Reassess at twelve months**, earlier if your skin is oily.',
        '**Book maintenance before an event**, allowing healing time.',
        '**Keep SPF on the brows** - it is the highest-impact habit.',
        '**Stay with the same artist** where possible; they know what pigment they used.',
      ],
    },
    { t: 'h2', id: 'expectations', text: 'Setting expectations before you book' },
    { t: 'p', text: 'A lot of disappointment with this service traces to timeline assumptions made before the first appointment rather than to the work itself.' },
    {
      t: 'table',
      head: ['Assumption', 'Reality'],
      rows: [
        ['It is a one-off', 'It is a maintenance cycle'],
        ['It lasts three years for everyone', 'Skin type moves that considerably'],
        ['It vanishes completely', 'Residual pigment often remains'],
        ['One session and done', 'The touch-up is part of the process'],
        ['It looks the same throughout', 'It fades gradually from the start'],
      ],
    },
    { t: 'p', text: '**Treat it as a commitment with a maintenance schedule**, not a purchase. That framing makes the annual cost and the artist choice both look different.' },
    { t: 'h2', id: 'summary', text: 'The short version' },
    { t: 'p', text: 'One to three years, with oily skin at the short end and dry skin at the long end. Daily SPF on the brows is the single habit that extends it most.' },
    { t: 'p', text: '**Plan for a colour boost every twelve to eighteen months and book it before the work has faded completely.** Refreshing existing pigment costs less than rebuilding from nearly nothing, and it keeps the shape you already approved.' },
  ],
  faq: [
    { q: 'How long does microblading last?', a: 'One to three years, depending mainly on skin type and sun exposure.' },
    { q: 'Why does mine fade faster?', a: 'Oily skin, sun exposure, and facial actives near the brows are the usual causes.' },
    { q: 'Do I need annual touch-ups?', a: 'A colour boost every twelve to eighteen months is typical.' },
    { q: 'Does it disappear completely?', a: 'It fades substantially but may leave some residual pigment. Complete disappearance is not typical.' },
    { q: 'Can it change colour as it fades?', a: 'It can, depending on pigment and depth, which is one reason artist skill matters.' },
  ],
  related: [
    { href: '/en/microblading-cost', label: 'How Much Does Microblading Cost?' },
    { href: '/en/microblading-vs-powder-brows', label: 'Microblading vs Powder Brows' },
    { href: '/en/microblading-removal', label: 'Can Microblading Be Removed?' },
  ],
}
