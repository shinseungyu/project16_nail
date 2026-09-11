import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, GLOSS_TONER_NOTE } from './common'

export const howLongDoesHairGlossLast: EnPage = {
  path: '/en/how-long-does-hair-gloss-last',
  title: 'How Long Does a Hair Gloss Last?',
  h1: 'How Long Does a Hair Gloss Last?',
  description:
    'A gloss typically lasts four to six weeks. What actually speeds up or slows down that fade, and how to time your next refresh.',
  keywords: ['how long does hair gloss last', 'gloss treatment duration', 'how often to gloss hair', 'gloss fade'],
  category: 'Hair Colour',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**A gloss treatment typically lasts four to six weeks**, fading out gradually rather than washing out all at once. How fast yours fades depends far more on your wash habits and water temperature than on which product your salon used.',
  blocks: [
    { t: 'note', tone: 'info', text: GLOSS_TONER_NOTE },
    { t: 'h2', id: 'typical-duration', text: 'The typical range' },
    {
      t: 'table',
      head: ['Situation', 'Typical duration'],
      rows: [
        ['Average, moderate wash routine', '4 - 6 weeks'],
        ['Frequent washing, hot water, sulfate shampoo', '3 - 4 weeks'],
        ['Infrequent washing, cool water, sulfate-free routine', 'Closer to 6 weeks'],
        ['Clear gloss on virgin hair', 'Often 3 - 5 weeks — see below'],
      ],
    },
    { t: 'h2', id: 'how-fading-works', text: 'How a gloss actually fades' },
    {
      t: 'p',
      text: 'A gloss doesn’t wash out in one wash or disappear on a fixed calendar date — it fades gradually as the deposited pigment rinses out a little at a time. That is why the last week or two before a refresh looks like a slow return of warmth or dullness rather than a sudden change overnight.',
    },
    { t: 'h2', id: 'biggest-factor', text: 'The single biggest factor: wash frequency' },
    {
      t: 'p',
      text: '**Washing more often is the single largest reason a gloss fades faster than expected.** Every wash rinses out a little more of the deposited pigment, so someone washing daily will see fading in half the time of someone washing two to three times a week.',
    },
    {
      t: 'table',
      head: ['Wash frequency', 'Rough expected duration'],
      rows: [
        ['Daily', '2 - 3 weeks'],
        ['Every other day', '3 - 4 weeks'],
        ['2 - 3 times a week', '4 - 6 weeks'],
        ['Once or twice a week', 'Toward the longer end, 5 - 6+ weeks'],
      ],
    },
    { t: 'h2', id: 'other-factors', text: 'Other factors that shorten the fade' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Hot water', 'Opens the hair cuticle, letting deposited pigment escape faster'],
        ['Sulfate shampoo', 'Strips color along with oil and dirt'],
        ['Clarifying treatments', 'Designed to strip buildup — also strips gloss pigment'],
        ['Chlorine', 'Fades color and can pull blonde toward a green cast'],
        ['Sun exposure', 'UV fades pigment over time, same as it fades fabric'],
      ],
    },
    { t: 'h2', id: 'timeline', text: 'A rough week-by-week timeline' },
    {
      t: 'table',
      head: ['Week', 'What you’ll typically notice'],
      rows: [
        ['Week 1', 'Full, vibrant result as applied'],
        ['Week 2 - 3', 'Still strong, subtle softening begins'],
        ['Week 4', 'Warmth or dullness starts becoming noticeable'],
        ['Week 5 - 6', 'Back close to your base tone, ready for a refresh'],
      ],
    },
    { t: 'h2', id: 'extend-it', text: 'How to get closer to six weeks than four' },
    {
      t: 'ol',
      items: [
        '**Wash less often** — the single biggest lever available to you.',
        '**Rinse in cool to lukewarm water**, not hot.',
        '**Use a sulfate-free, color-safe shampoo** day to day.',
        '**Skip clarifying shampoo** unless you specifically need to remove buildup.',
        '**Use purple or blue shampoo about once a week only**, if brassiness is your specific issue.',
        '**Limit chlorine and direct sun exposure** where practical, or rinse and protect immediately after.',
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'More purple shampoo is not the answer',
      text: 'Using purple or blue shampoo more than about once a week over-deposits and can leave hair dull, flat, grey or faintly lavender. If that happens, stop using it and let the effect fade naturally rather than reaching for more.',
    },
    { t: 'h2', id: 'by-hair-type', text: 'Does hair type change how long it lasts' },
    {
      t: 'table',
      head: ['Hair type', 'Tendency'],
      rows: [
        ['Fine hair', 'Tends to fade slightly faster'],
        ['Coarse or thick hair', 'Tends to hold the deposit slightly longer'],
        ['Porous, previously lightened hair', 'Absorbs deposit readily but also releases it faster'],
        ['Virgin, never-colored hair', 'Often on the shorter end, especially for a clear gloss'],
      ],
    },
    {
      t: 'p',
      text: 'These are tendencies, not guarantees — wash habits and water temperature still outweigh hair type for most people. See [Clear Gloss on Virgin Hair](/en/clear-gloss-virgin-hair) for more on that shorter-duration case specifically.',
    },
    { t: 'h2', id: 'toner-fades-differently', text: 'A special case: toner on lightened hair' },
    {
      t: 'p',
      text: 'If the gloss in question is really functioning as a toner on recently lightened hair, it tends to fade a little faster than a shine-only gloss on already-settled color, simply because freshly lightened hair is more porous. That faster fade is also the reason blonde hair goes brassy on a predictable schedule — see [How to Fix Brassy Hair](/en/how-to-fix-brassy-hair) for the full explanation.',
    },
    { t: 'h2', id: 'product-quality', text: 'Does a more expensive product last longer?' },
    {
      t: 'p',
      text: 'Not reliably. Salon tier affects price more than it affects how long a demi-permanent deposit holds — application skill, formula match to your hair, and your own aftercare routine matter more than what the product cost.',
    },
    { t: 'h2', id: 'traveling', text: 'Travel and climate' },
    {
      t: 'p',
      text: 'Humid climates, more frequent swimming on vacation, or switching to a different local water supply can all shift how a gloss holds up compared with your usual routine at home. None of it is cause for concern — it’s the same factors (water, washing, sun, chlorine) behaving differently in a new environment.',
    },
    { t: 'h2', id: 'signs-fading', text: 'Signs it’s fading' },
    {
      t: 'ul',
      items: [
        'Warm, yellow or orange undertones creeping back into blonde or lightened hair.',
        'Shine and richness dropping off compared to right after the appointment.',
        'Color looking a shade or two lighter or duller than when it was fresh.',
      ],
    },
    { t: 'h2', id: 'reglossing', text: 'When to book the next one' },
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
    { t: 'h2', id: 'uneven-fading', text: 'What if it fades unevenly?' },
    {
      t: 'p',
      text: 'Uneven fading — some sections looking warmer or duller than others — usually points to differences in porosity across the head rather than the product itself failing. Ends are typically older and more porous than hair closer to the root, so they release deposit faster and show fading first.',
    },
    {
      t: 'ul',
      items: [
        'Ends fading faster than the rest: normal, and expected — treat with a leave-in or gloss-boosting conditioner between appointments.',
        'One whole section fading much faster than another: worth mentioning to your colorist, since it may reflect a porosity difference worth addressing at the next visit.',
      ],
    },
    { t: 'h2', id: 'cost-per-week', text: 'Thinking about it as a cost per week' },
    {
      t: 'p',
      text: 'At $30 to $80 for roughly 4 to 6 weeks of result, a gloss works out to a modest few dollars a week — often less than what people spend on specialty shampoo trying to stretch a fading color further. That framing helps some people justify staying on schedule rather than skipping refreshes to save money upfront.',
    },
    { t: 'h2', id: 'gloss-vs-permanent', text: 'Gloss duration vs permanent color' },
    {
      t: 'table',
      head: ['Service', 'How long it lasts'],
      rows: [
        ['Gloss / glaze / toner', '4 - 6 weeks'],
        ['Permanent color', 'Until regrowth, typically 4 - 8 weeks for the root line to show'],
      ],
    },
    {
      t: 'p',
      text: 'That shorter window is the trade-off for a gentler, deposit-only service — you get lower commitment and less processing at the cost of needing a refresh more often. See [Hair Gloss Treatment](/en/hair-gloss-treatment) for what a typical appointment involves.',
    },
    { t: 'h2', id: 'bottom-line', text: 'The bottom line' },
    {
      t: 'p',
      text: 'Expect 4 to 6 weeks as your baseline, and treat wash frequency and water temperature as the two things most within your control. If you are trying to figure out why a gloss faded faster than that window, wash habits and hot water explain most cases before the product itself does.',
    },
  ],
  faq: [
    { q: 'How long does a gloss treatment usually last?', a: 'About four to six weeks, fading out gradually rather than all at once.' },
    { q: 'What makes a gloss fade faster?', a: 'Washing frequently is the biggest factor, followed by hot water, sulfate shampoo, clarifying treatments, chlorine and sun exposure.' },
    { q: 'Can I make a gloss last longer than six weeks?', a: 'Not indefinitely, but washing less, using cool water and a sulfate-free routine pushes you toward the longer end of the range.' },
    { q: 'Does a clear gloss last as long as a tinted one?', a: 'Often slightly less, particularly on virgin hair with no prior color processing — see the clear gloss guide for details.' },
    { q: 'How do I know when it’s time for a refresh?', a: 'Warmth returning to blonde tones, reduced shine, or reaching the four to six week mark are the usual signals.' },
  ],
  related: [
    { href: '/en/hair-gloss-treatment', label: 'Hair Gloss Treatment: What It Does and Costs' },
    { href: '/en/hair-gloss-vs-toner', label: 'Hair Gloss vs Toner: What’s the Actual Difference' },
    { href: '/en/balayage-maintenance', label: 'Balayage Maintenance: How to Keep It Looking Fresh' },
  ],
}
