import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, GLOSS_TONER_NOTE } from './common'

export const hairGlossVsToner: EnPage = {
  path: '/en/hair-gloss-vs-toner',
  title: "Hair Gloss vs Toner: What's the Actual Difference",
  h1: 'Hair Gloss vs Toner: What’s the Actual Difference',
  description:
    'Gloss and toner are usually the same demi-permanent product under two names. Where the terms diverge, and what to ask for at the salon.',
  keywords: ['hair gloss vs toner', 'gloss vs toner', 'is gloss the same as toner', 'demi-permanent hair color'],
  category: 'Hair Colour',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**Gloss and toner are usually the same category of product — demi-permanent, deposit-only color — described with two different marketing words.** The real differences come from how one particular salon uses each term, not from an industry-wide rulebook, so it matters more to describe the result you want than to ask for one by name.',
  blocks: [
    { t: 'note', tone: 'info', text: GLOSS_TONER_NOTE },
    { t: 'h2', id: 'short-answer', text: 'The short answer' },
    {
      t: 'p',
      text: 'Chemically, a “gloss” and a “toner” are almost always the same thing: a demi-permanent, deposit-only formula that adds shine and shifts tone without lightening hair. Salons split the two words along habit and context rather than along any fixed chemical line, which is why one stylist’s “toner” is another stylist’s “gloss” on the exact same product.',
    },
    { t: 'h2', id: 'what-they-share', text: 'What gloss and toner have in common' },
    {
      t: 'table',
      head: ['Feature', 'Gloss', 'Toner'],
      rows: [
        ['Product type', 'Demi-permanent', 'Demi-permanent'],
        ['Lightens hair', 'No', 'No'],
        ['Deposits color', 'Yes', 'Yes'],
        ['Typical duration', '4 - 6 weeks', '4 - 6 weeks'],
        ['Ammonia', 'None or trace', 'None or trace'],
        ['Covers grey completely', 'No — blends, does not blanket cover', 'No — blends, does not blanket cover'],
      ],
    },
    {
      t: 'p',
      text: 'On paper, that table is the whole story. Where it gets confusing is that most people never see the product bottle — they only hear the word their stylist used, and stylists were not trained on the same word.',
    },
    { t: 'h2', id: 'where-they-diverge', text: 'Where the two words diverge in practice' },
    {
      t: 'table',
      head: ['Term', 'Typically used for', 'Common context'],
      rows: [
        ['Toner', 'Neutralizing a brassy or yellow/orange undertone', 'Right after lightening, highlights or balayage'],
        ['Gloss / glaze', 'Adding shine and a light overall tone refresh', 'Between color appointments, on virgin hair too'],
      ],
    },
    {
      t: 'p',
      text: 'Historically, “toner” came out of the correction step after bleaching — you lighten, then you tone to knock down the warmth the lightener revealed. “Gloss” grew up as a stand-alone shine service that anyone could book, colored hair or not. In modern salons those two histories have mostly merged back into one shelf of demi-permanent products, but the vocabulary never caught up.',
    },
    { t: 'h2', id: 'why-confusion', text: 'Why the terminology is so inconsistent' },
    {
      t: 'p',
      text: 'There is no industry-wide glossary that every salon is required to follow, so the word you hear reflects one salon’s habits rather than a universal standard.',
    },
    {
      t: 'ul',
      items: [
        'No regulatory body defines “gloss” or “toner” as distinct services.',
        'Product brands market the same formula family under different names.',
        'Regional and generational training habits carry different defaults.',
        'Some salons use “toner” only for post-lightening work and “gloss” for everything else — others use them interchangeably.',
      ],
    },
    { t: 'h2', id: 'chemistry', text: 'What’s actually happening, chemically' },
    {
      t: 'table',
      head: ['Category', 'Lifts color?', 'Deposits color?', 'Typical duration'],
      rows: [
        ['Semi-permanent', 'No', 'Surface only, weak', '4 - 8 washes'],
        ['Demi-permanent (gloss / glaze / toner)', 'No', 'Yes, moderate', '4 - 6 weeks'],
        ['Permanent color', 'Yes', 'Yes', 'Until it grows out'],
      ],
      note: 'Lightener/bleach is its own category — it lifts but does not deposit a color result on its own.',
    },
    {
      t: 'p',
      text: 'That middle row is where gloss, glaze and toner all live. **None of them lift or lighten hair** — that job belongs only to permanent color and lighteners. See [Gloss vs Glaze vs Demi-Permanent](/en/gloss-vs-glaze-vs-demi) for the full breakdown of how the category names map onto that chemistry.',
    },
    { t: 'h2', id: 'color-wheel', text: 'The color-correcting logic behind toner' },
    {
      t: 'p',
      text: 'When a “toner” is doing color-correction work, it is using basic color theory: a pigment cancels out its opposite on the color wheel.',
    },
    {
      t: 'table',
      head: ['Unwanted tone', 'Neutralizing tone'],
      rows: [
        ['Yellow', 'Purple'],
        ['Orange', 'Blue'],
        ['Red', 'Green'],
      ],
    },
    {
      t: 'p',
      text: 'This is also why purple shampoo exists for the exact same reason at a much weaker strength — it is a diluted, at-home version of the same yellow-cancelling logic a salon toner uses.',
    },
    { t: 'h2', id: 'what-neither-does', text: 'What neither one can do' },
    {
      t: 'ul',
      items: [
        '**Lighten your hair.** Only permanent color and lighteners lift.',
        '**Permanently change your color.** Both fade out over roughly 4 to 6 weeks.',
        '**Reliably cover grey.** Demi-permanent formulas blend grey into the surrounding color rather than covering it completely.',
        '**Repair damage.** Both are cosmetic, deposit-only services, not a treatment for hair that is already damaged.',
      ],
    },
    { t: 'h2', id: 'cost', text: 'Cost comparison' },
    {
      t: 'table',
      head: ['Service', 'Typical salon price'],
      rows: [
        ['Toner', '$30 - 70'],
        ['Gloss / glaze', '$30 - 80'],
        ['Clear gloss (no pigment)', '$30 - 60'],
        ['At-home gloss or toning product', '$10 - 30'],
      ],
    },
    {
      t: 'p',
      text: 'Prices are ranges for a reason — salon tier, region and whether the service is added onto a color appointment or booked on its own all move the number. A big-city salon and a small-town one can differ by $20 or more for what is functionally the same service.',
    },
    { t: 'h2', id: 'how-long', text: 'How long each one lasts' },
    {
      t: 'p',
      text: 'Both fade out on roughly the same 4 to 6 week timeline, because they are the same category of product. See [How Long Does a Hair Gloss Last?](/en/how-long-does-hair-gloss-last) for what actually speeds up or slows down that fade.',
    },
    { t: 'h2', id: 'maintenance-schedule', text: 'A realistic maintenance timeline' },
    {
      t: 'table',
      head: ['Timing', 'What happens'],
      rows: [
        ['Month 0', 'Full color, highlight or lightening service'],
        ['~Week 6', 'Gloss or toner refresh'],
        ['~Month 3', 'Second gloss or toner refresh'],
        ['Month 4 - 6', 'Back for the next full color service'],
      ],
    },
    {
      t: 'p',
      text: 'Booking a refresh between full color visits is what keeps blonde and balayage from looking tired by week three. It is a cheaper, shorter appointment than a full color, which is part of why it is worth keeping on the calendar rather than skipping until things look obviously brassy.',
    },
    { t: 'h2', id: 'when-toner', text: 'When you’d specifically want to ask for a “toner”' },
    {
      t: 'ul',
      items: [
        'Right after highlights, balayage or a full lightening service, to knock down yellow or orange.',
        'Correcting brassiness from an at-home box dye or previous lightening that went warm.',
        'Evening out patchy or uneven lightening results before a full color session.',
      ],
    },
    { t: 'h2', id: 'when-gloss', text: 'When you’d specifically want to ask for a “gloss”' },
    {
      t: 'ul',
      items: [
        'Refreshing shine and richness between full color appointments.',
        'A subtle overall tone shift on hair that has never been lightened.',
        'Smoothing the look of ends and cuticle shine before a photo, wedding or event.',
      ],
    },
    { t: 'h2', id: 'what-to-say', text: 'What to actually say at the salon' },
    {
      t: 'ol',
      items: [
        '**Describe the result, not the product.** “I want to knock down the yellow” works regardless of what that salon calls the service.',
        '**Mention your color history** — when you last lightened, colored or toned.',
        '**Ask what they’d call it and what it involves**, so you know what you are booking and paying for.',
        '**Confirm price and processing time upfront**, since both vary more between salons than the name does.',
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Purple shampoo is the same idea, weaker',
      text: 'Use it about once a week, not every wash — over-toning at home shows up as dull, flat, grey or faintly lavender hair. If that happens, stop using it and let the effect fade rather than using more.',
    },
    { t: 'h2', id: 'grey-coverage', text: 'About covering grey' },
    {
      t: 'p',
      text: 'A demi-permanent gloss or toner **blends** grey into the surrounding color by softening the contrast — it does not blanket-cover it the way permanent color can. If full grey coverage is the goal, that is a different conversation with your colorist.',
    },
    { t: 'h2', id: 'bottom-line', text: 'The bottom line' },
    {
      t: 'p',
      text: 'Treat “gloss” and “toner” as two names pointing at the same shelf of product rather than two different services. Walk in describing the tone you want to fix or the shine you want to add, let the stylist tell you what they call it, and confirm cost and duration before you sit down. See [Hair Toner: What It Does and When You Need It](/en/toner-for-hair) and [Hair Gloss Treatment](/en/hair-gloss-treatment) for the deeper dive into each side.',
    },
  ],
  faq: [
    { q: 'Is gloss the same thing as toner?', a: 'Chemically, almost always — both are demi-permanent, deposit-only color. The difference is usually just which word a given salon uses, not a different formula.' },
    { q: 'Which lasts longer, gloss or toner?', a: 'Neither reliably lasts longer than the other. Both fade out over roughly four to six weeks, since they belong to the same product category.' },
    { q: 'Can a toner lighten my hair?', a: 'No. Toner deposits color and neutralizes tone; only permanent color and lighteners lift hair.' },
    { q: 'Do I need a toner if I’ve never colored my hair?', a: 'Rarely. Toner is mainly a correction step after lightening. On virgin hair, a clear or tinted gloss for shine is the more common request.' },
    { q: 'How much should I expect to pay?', a: 'Roughly $30 to $80 at a salon depending on which service and region, or $10 to $30 for an at-home product.' },
  ],
  related: [
    { href: '/en/hair-gloss-treatment', label: 'Hair Gloss Treatment: What It Does and Costs' },
    { href: '/en/toner-for-hair', label: 'Hair Toner: What It Does and When You Need It' },
    { href: '/en/gloss-vs-glaze-vs-demi', label: 'Gloss vs Glaze vs Demi-Permanent: Sorted Out' },
  ],
}
