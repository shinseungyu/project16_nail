import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, PMU_TATTOO_NOTE } from './common'

export const howLongDoPowderBrowsLast: EnPage = {
  path: '/en/how-long-do-powder-brows-last',
  title: 'How Long Do Powder Brows Last? By Skin Type',
  h1: 'How Long Do Powder Brows Last?',
  description:
    'Powder brows last two to three years depending mainly on skin type. What shortens or extends it, and when to book a colour refresh.',
  keywords: ['how long do powder brows last', 'powder brows longevity', 'powder brows fading'],
  category: 'Brows',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**Two to three years for most people, with skin type doing most of the work in where you land in that range.** Dry skin tends toward the longer end, oily skin toward the shorter end, and a colour refresh every one to two years keeps the result looking fresh in between.',
  blocks: [
    { t: 'note', tone: 'warn', text: PMU_TATTOO_NOTE },
    { t: 'h2', id: 'by-skin-type', text: 'Realistic expectations by skin type' },
    {
      t: 'table',
      head: ['Skin type', 'Typical wear'],
      rows: [
        ['Dry', '2.5 - 3 years'],
        ['Normal', '2 - 3 years'],
        ['Combination', '2 - 2.5 years'],
        ['Oily', '1.5 - 2.5 years'],
      ],
    },
    {
      t: 'p',
      text: '**Even at the short end, powder brows tend to outlast microblading on the same skin**, because a shaded fill does not rely on a fine line staying crisp. That is the main reason artists commonly steer oilier-skinned clients toward this technique or its gradient variant, [ombré brows](/en/ombre-brows).',
    },
    {
      t: 'p',
      text: 'Longevity behaves the way it does because the pigment sits in the same skin layer as body tattooing — which is why, **in many US states, powder brows are regulated as tattooing** rather than as an ordinary cosmetic treatment, and why fading follows a tattoo-like pattern rather than washing out like makeup.',
    },
    { t: 'h2', id: 'what-affects', text: 'What affects how long it lasts' },
    {
      t: 'table',
      head: ['Factor', 'Effect on longevity'],
      rows: [
        ['Oily skin', 'Shorter — often toward the 1.5 - 2 year end'],
        ['Dry to normal skin', 'Longer — up to 2.5 - 3 years'],
        ['Sun exposure', 'Significantly shortens'],
        ['Retinoids or AHAs near the brows', 'Fades pigment faster'],
        ['Exfoliating facials over the brows', 'Fades pigment faster'],
        ['Pigment depth and colour', 'Lighter or more superficial work fades sooner'],
        ['Individual healing and immune response', 'Varies between people'],
      ],
    },
    { t: 'h2', id: 'extending', text: 'Extending it' },
    {
      t: 'ol',
      items: [
        '**Daily SPF on the brows** — the single highest-impact habit by a clear margin.',
        'Keep retinoids and acids away from the brow area.',
        'Avoid exfoliating facials directly over the brows.',
        '**Book a colour refresh before it fades completely** — refreshing existing pigment is cheaper than rebuilding from almost nothing.',
        'Follow your artist’s aftercare instructions fully during the initial healing period.',
      ],
    },
    { t: 'h2', id: 'maintenance', text: 'Maintenance' },
    {
      t: 'table',
      head: ['Service', 'Frequency', 'Cost'],
      rows: [
        ['Colour refresh', 'Every 1 - 2 years', '$200 - 450'],
        ['Full redo', 'When faded substantially, or after several years', 'Close to the original price'],
      ],
    },
    {
      t: 'p',
      text: 'Costs vary by provider and region, so treat these as a planning range rather than a quote. A fuller breakdown, including the five-year total, is in [Powder Brows Cost: Including the Touch-Up](/en/powder-brows-cost).',
    },
    { t: 'h2', id: 'fading', text: 'What happens as it fades' },
    {
      t: 'p',
      text: 'Well-executed powder brows generally fade evenly, softening toward a lighter version of the same shape. **Poorly executed work, or the wrong pigment for your skin, can fade toward an unwanted tone** — a known outcome of certain pigment and depth choices, which is a practical reason to prioritise an experienced artist over the lowest price.',
    },
    {
      t: 'table',
      head: ['Fading pattern', 'Suggests'],
      rows: [
        ['Softens evenly, lighter over time', 'Normal'],
        ['Front of an ombré fill fades first', 'Expected, since it starts lighter by design'],
        ['Shifts toward an unwanted tone', 'Pigment or depth choice — raise it with your artist'],
        ['Patchy, uneven fading in places', 'Retention varied — a colour refresh evens it out'],
        ['Faint residual shape remains after years', 'Normal; complete disappearance is not typical'],
      ],
    },
    {
      t: 'note',
      text: 'Complete disappearance is not the usual outcome. **Some residual pigment often remains even after years without a refresh**, which matters if you are thinking of the technique as fully reversible on its own.',
    },
    { t: 'h2', id: 'refresh-vs-redo', text: 'Colour refresh or full redo?' },
    {
      t: 'p',
      text: 'The distinction mostly comes down to how much pigment is left, and it affects both the price and how much control you have over adjusting the shape.',
    },
    {
      t: 'table',
      head: ['Situation', 'Usually'],
      rows: [
        ['Faded but shape still clear', 'Colour refresh — cheaper and quicker'],
        ['Faded to a faint residue', 'Closer to a full session in price'],
        ['Colour has shifted tone', 'Assessment first; correction may be needed'],
        ['You want a different shape now', 'Harder — existing pigment constrains the options'],
        ['Several years since the last session', 'Often treated as new work by most artists'],
      ],
    },
    {
      t: 'p',
      text: '**Booking the refresh before it fades completely is the cheaper path**, which is the practical reason to note the date of your last session rather than waiting until the brows look nearly bare.',
    },
    { t: 'h2', id: 'planning', text: 'Planning around the cycle' },
    {
      t: 'ol',
      items: [
        '**Note the date** of your first session and the touch-up.',
        '**Reassess at the one-year mark**, earlier if your skin is oily.',
        '**Book maintenance ahead of an event**, allowing time to heal.',
        '**Keep SPF on the brows daily** — it is the single highest-impact habit here.',
        '**Return to the same artist where possible** — they know what pigment and depth they used.',
      ],
    },
    { t: 'h2', id: 'expectations', text: 'Setting expectations before you book' },
    {
      t: 'p',
      text: 'A lot of disappointment with this category of service traces back to timeline assumptions made before the first appointment, rather than to the quality of the work itself.',
    },
    {
      t: 'table',
      head: ['Assumption', 'Reality'],
      rows: [
        ['It is a one-off purchase', 'It is a maintenance cycle, typically every 1 - 2 years'],
        ['It lasts the same for everyone', 'Skin type moves the range considerably'],
        ['It vanishes completely on its own', 'Residual pigment often remains'],
        ['One session and it is finished', 'The touch-up is part of the standard process'],
        ['It looks the same throughout the cycle', 'It fades gradually from the start'],
      ],
    },
    {
      t: 'p',
      text: '**Treat it as a commitment with a maintenance schedule, not a single purchase.** That framing changes how the ongoing cost and the choice of artist both look before you book.',
    },
    { t: 'h2', id: 'summary', text: 'The short version' },
    {
      t: 'p',
      text: 'Two to three years overall, with oily skin at the shorter end and dry skin at the longer end. Daily SPF on the brows is the single habit that extends it most, and a colour refresh every one to two years keeps the shape and colour looking fresh.',
    },
    {
      t: 'p',
      text: 'If your skin is oily and you already know microblading alone would not last well on it, [What Are Powder Brows?](/en/what-are-powder-brows) covers why this technique tends to hold up better and what the full process involves.',
    },
  ],
  faq: [
    { q: 'How long do powder brows last?', a: 'Two to three years for most people, depending mainly on skin type and sun exposure.' },
    { q: 'Do powder brows last longer than microblading?', a: 'Usually yes, particularly on oily skin, because a shaded fill does not depend on a fine line staying crisp.' },
    { q: 'Do I need a colour refresh every year?', a: 'A refresh every one to two years is typical for keeping the result looking fresh, though the exact timing depends on your skin and sun exposure.' },
    { q: 'Do powder brows disappear completely?', a: 'They fade substantially but often leave some residual pigment. Complete disappearance on their own is not typical.' },
    { q: 'Can the colour change as it fades?', a: 'It can, depending on pigment choice and depth, which is one reason artist experience matters for how the result ages.' },
  ],
  related: [
    { href: '/en/powder-brows-healing', label: 'Powder Brows Healing: Week by Week' },
    { href: '/en/powder-brows-cost', label: 'Powder Brows Cost: Including the Touch-Up' },
    { href: '/en/powder-brows-over-microblading', label: 'Powder Brows Over Old Microblading' },
  ],
}
