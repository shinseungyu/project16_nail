import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, GLOSS_TONER_NOTE } from './common'

export const glossVsGlazeVsDemi: EnPage = {
  path: '/en/gloss-vs-glaze-vs-demi',
  title: 'Gloss vs Glaze vs Demi-Permanent: Sorted Out',
  h1: 'Gloss vs Glaze vs Demi-Permanent: Sorted Out',
  description:
    'Gloss and glaze are marketing names for the same demi-permanent service. How the terminology maps to the actual product classification.',
  keywords: ['gloss vs glaze', 'demi-permanent hair color', 'what is a glaze hair', 'gloss glaze toner difference'],
  category: 'Hair Colour',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**Gloss and glaze are marketing names for the same demi-permanent, deposit-only service — “demi-permanent” is the actual technical classification underneath both.** Once you know that, salon menus that seem to describe three different services usually turn out to be one.',
  blocks: [
    { t: 'note', tone: 'info', text: GLOSS_TONER_NOTE },
    { t: 'h2', id: 'terminology-map', text: 'The terminology, mapped' },
    {
      t: 'table',
      head: ['Word', 'What it usually means', 'Technical category'],
      rows: [
        ['Gloss', 'A shine and light tone-refresh service', 'Demi-permanent'],
        ['Glaze', 'Same idea as gloss, regional or brand preference', 'Demi-permanent'],
        ['Toner', 'Color-correction, usually after lightening', 'Demi-permanent'],
        ['Demi-permanent', 'The technical classification underneath all three', 'Demi-permanent'],
      ],
    },
    {
      t: 'p',
      text: 'Read that table again and the pattern is obvious: three consumer-facing words point at one underlying category. See [Hair Gloss vs Toner](/en/hair-gloss-vs-toner) for how the gloss/toner split plays out specifically.',
    },
    { t: 'h2', id: 'brand-names', text: 'What about branded product names?' },
    {
      t: 'p',
      text: 'Some salons also mention a specific branded product line by name on top of gloss, glaze or toner. That’s a manufacturer detail layered on top of the same demi-permanent category — worth asking about if you’re curious, but not a fourth type of service you need to evaluate separately.',
    },
    { t: 'h2', id: 'why-three-words', text: 'Why the industry has three words for one thing' },
    {
      t: 'p',
      text: 'No regulatory body or industry association enforces a single glossary for these services, so the word you hear reflects marketing history and regional habit rather than a chemical distinction.',
    },
    {
      t: 'ul',
      items: [
        'Product brands market the identical formula family under different trademarked names.',
        '“Glaze” gained popularity as a specific marketing term in some regions and salon chains.',
        '“Toner” carries over from its original use correcting warmth after bleaching.',
        'Stylists trained in different eras or regions default to whichever word they learned first.',
      ],
    },
    { t: 'h2', id: 'the-real-classification', text: 'The real classification: how hair color products are grouped' },
    {
      t: 'table',
      head: ['Category', 'Lifts?', 'Deposits color?', 'Typical duration', 'Ammonia'],
      rows: [
        ['Temporary color', 'No', 'Surface only, rinses same day', '1 wash', 'None'],
        ['Semi-permanent', 'No', 'Light', '4 - 8 washes', 'None'],
        ['Demi-permanent (gloss / glaze / toner)', 'No', 'Yes, moderate', '4 - 6 weeks', 'None or trace'],
        ['Permanent color', 'Yes', 'Yes', 'Until regrowth', 'Yes'],
        ['Lightener / bleach', 'Yes (lifts only)', 'No color deposit of its own', 'Permanent until cut or grown out', 'Yes'],
      ],
    },
    {
      t: 'p',
      text: 'The key line to remember: **lifting is only done by permanent color and lighteners.** Nothing at the demi-permanent level — gloss, glaze or toner, whatever it’s called — lightens hair.',
    },
    { t: 'h2', id: 'cost-across-names', text: 'Does the name change the price?' },
    {
      t: 'table',
      head: ['Booked as', 'Typical price'],
      rows: [
        ['Gloss', '$30 - 80'],
        ['Glaze', '$30 - 80'],
        ['Toner', '$30 - 70'],
        ['Clear gloss / clear glaze', '$30 - 60'],
      ],
    },
    {
      t: 'p',
      text: 'The overlap in these ranges is itself evidence that the names are not describing meaningfully different services — pricing tracks salon tier and region far more than which word appears on the menu.',
    },
    { t: 'h2', id: 'duration-across-names', text: 'Does the name change how long it lasts?' },
    {
      t: 'p',
      text: 'No. Whatever it’s called, a demi-permanent deposit fades out on roughly the same 4 to 6 week timeline, because the underlying chemistry — not the label — determines how long it holds. See [How Long Does a Hair Gloss Last?](/en/how-long-does-hair-gloss-last) for the factors that actually move that number.',
    },
    { t: 'h2', id: 'does-it-matter', text: 'Does the word actually matter when booking?' },
    {
      t: 'p',
      text: 'Not really, as long as you communicate the outcome you want rather than relying on the label. A stylist who calls something a “glaze” and one who calls the identical service a “gloss” will both understand “I want to knock down the yellow” or “I want more shine.”',
    },
    {
      t: 'ol',
      items: [
        '**Bring a reference photo** of the tone or finish you’re after.',
        '**Describe the undertone concern**, if you have one — “too warm,” “too brassy,” “needs more shine.”',
        '**Ask what they’d call the service** so you understand what’s being booked.',
        '**Confirm cost and processing time** before you sit down, since these vary by salon more than the name does.',
      ],
    },
    { t: 'h2', id: 'regional-differences', text: 'Why your last salon called it something else' },
    {
      t: 'p',
      text: 'Moving to a new city, switching salons, or even switching stylists within the same salon is often enough to hear a different word for a service you already know. That is a vocabulary difference, not a sign the new stylist is offering something unfamiliar or unusual.',
    },
    { t: 'h2', id: 'what-to-listen-for', text: 'What to listen for during the consultation' },
    {
      t: 'table',
      head: ['Phrase you hear', 'Usually means'],
      rows: [
        ['“Let’s cool that down” / “knock down the warmth”', 'A toner-style correction'],
        ['“Add some shine” / “freshen it up”', 'A gloss-style shine service'],
        ['“A glaze over your color”', 'The same demi-permanent refresh, different word'],
        ['“We need to lift it first”', 'A separate lightening step, not a gloss or toner'],
      ],
    },
    { t: 'h2', id: 'ammonia-question', text: 'Why “ammonia-free” gets mentioned so often' },
    {
      t: 'p',
      text: 'Demi-permanent formulas are marketed heavily on being ammonia-free or low-ammonia, because that’s the practical reason they don’t lift hair and process gently compared with permanent color. It’s a real distinction worth knowing, but it describes the demi-permanent category as a whole — not a special feature unique to whichever of gloss, glaze or toner your salon happens to call it.',
    },
    { t: 'h2', id: 'menu-example', text: 'A worked example from a typical salon menu' },
    {
      t: 'p',
      text: 'One salon might list “Gloss Treatment,” “Toner,” and “Glaze Add-On” as three separate line items with three separate prices. In most cases these are the same base service with different framing — a standalone shine refresh, a post-color correction, and an add-on version of either. Asking “what’s the difference between these three?” at check-in is a reasonable, common question, not an awkward one.',
    },
    { t: 'h2', id: 'semi-vs-demi-confusion', text: 'A separate mix-up: semi- vs demi-permanent' },
    {
      t: 'p',
      text: 'These two terms sound alike but are not interchangeable. **Semi-permanent** color sits on the surface of the hair and washes out within about 4 to 8 washes. **Demi-permanent** — the category gloss, glaze and toner belong to — deposits slightly deeper and lasts about 4 to 6 weeks regardless of wash count. If a product or salon uses “semi-permanent” for something that lasted six weeks, that’s a labeling inconsistency, not a sign you misunderstood the chemistry.',
    },
    { t: 'h2', id: 'summary-table', text: 'The condensed version' },
    {
      t: 'table',
      head: ['Question', 'Answer'],
      rows: [
        ['Is gloss the same as glaze?', 'Yes, in almost all cases — different word, same service'],
        ['Is toner a type of gloss?', 'They’re both demi-permanent — toner is usually the correction use case'],
        ['What’s the technical name for all of it?', 'Demi-permanent color'],
        ['Does any of it lighten hair?', 'No — only permanent color and lighteners lift'],
      ],
    },
    { t: 'h2', id: 'glossary', text: 'A quick glossary' },
    {
      t: 'table',
      head: ['Term', 'One-line definition'],
      rows: [
        ['Gloss', 'Shine and light tone refresh, demi-permanent'],
        ['Glaze', 'Same as gloss, different regional or brand name'],
        ['Toner', 'Demi-permanent used to correct undertone after lightening'],
        ['Demi-permanent', 'The technical category all three belong to'],
        ['Semi-permanent', 'A separate, shorter-lasting surface-only category'],
        ['Permanent color', 'Lifts and deposits, lasts until regrowth'],
        ['Lightener / bleach', 'Lifts color, does not deposit its own tone'],
      ],
    },
    { t: 'h2', id: 'bottom-line', text: 'The bottom line' },
    {
      t: 'p',
      text: 'Stop trying to book the “correct” word and start describing the result. Gloss, glaze and toner are dialects of the same demi-permanent service, and any stylist worth booking will translate your description into whatever they call it on their own menu. See [Hair Toner](/en/toner-for-hair) and [Hair Gloss Treatment](/en/hair-gloss-treatment) for the deeper dive into each use case.',
    },
  ],
  faq: [
    { q: 'Is glaze the same as gloss?', a: 'Yes, essentially — both are marketing names for the same demi-permanent, deposit-only service.' },
    { q: 'Is toner a type of gloss?', a: 'They’re in the same demi-permanent category; toner is typically the name used for the color-correction use case after lightening.' },
    { q: 'What’s the actual technical name for these services?', a: 'Demi-permanent color — that’s the classification gloss, glaze and toner all fall under.' },
    { q: 'Does demi-permanent color ever lighten hair?', a: 'No. Lifting is done only by permanent color and lighteners; demi-permanent products deposit color without lightening.' },
    { q: 'Should I ask for “gloss” or “toner” by name at a new salon?', a: 'Either works as a starting point, but describing the result you want gets you a better outcome than the label does.' },
  ],
  related: [
    { href: '/en/hair-gloss-vs-toner', label: 'Hair Gloss vs Toner: What’s the Actual Difference' },
    { href: '/en/toner-for-hair', label: 'Hair Toner: What It Does and When You Need It' },
    { href: '/en/hair-gloss-treatment', label: 'Hair Gloss Treatment: What It Does and Costs' },
  ],
}
