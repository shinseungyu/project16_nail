import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, PMU_TATTOO_NOTE } from './common'

export const lipBlushCost: EnPage = {
  path: '/en/lip-blush-cost',
  title: 'Lip Blush Cost: What Is Included and What Is Not',
  h1: 'How Much Does Lip Blush Cost?',
  description:
    'Lip blush runs $500 to $1,200 including the required touch-up. Why quotes vary, and what correction or removal would cost.',
  keywords: ['lip blush cost', 'how much is lip blush', 'lip blush price', 'lip tattoo touch up cost'],
  category: 'Permanent Makeup',
  stage: 0,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**$500 to $1,200 including the 6 to 8 week touch-up.** If a quote does not mention the touch-up, ask — it is typically $150 to $350 separately, and it explains most apparent price differences.',
  blocks: [
    { t: 'note', tone: 'warn', text: PMU_TATTOO_NOTE },
    { t: 'h2', id: 'pricing', text: 'Typical pricing' },
    {
      t: 'table',
      head: ['Item', 'Typical'],
      rows: [
        ['Initial plus touch-up', '$500 - 1,200'],
        ['Initial alone', '$400 - 900'],
        ['Touch-up separately', '$150 - 350'],
        ['Colour refresh, 1 - 2 years later', '$250 - 500'],
        ['Major metro or highly experienced artist', '$900 - 1,800'],
        ['Correction of previous work', '$600 - 1,500+'],
        ['Removal', '$200 - 500 per session, multiple needed'],
      ],
      note: 'Typical US pricing. Varies by artist and region.',
    },
    { t: 'p', text: 'Read the bottom two rows before the top one. **Correcting or removing existing work costs more than having it done well the first time**, which is the whole argument against choosing on price.' },
    { t: 'h2', id: 'what-changes-the-price', text: 'What changes the price' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Artist experience', 'The largest variable by a distance'],
        ['Region', 'Metro premiums'],
        ['Touch-up included or not', 'Frequently the entire difference between two quotes'],
        ['Correcting existing pigment', 'Substantially higher'],
        ['Studio type', 'Private studio versus a larger premises'],
      ],
    },
    { t: 'h2', id: 'ask-this', text: 'The one question that clarifies everything' },
    { t: 'p', text: '**"Does that include the touch-up?"**' },
    { t: 'p', text: 'A $600 quote including the touch-up and an $850 quote including it are comparable. A $600 quote that excludes it is really $750 to $950. **Most confusing price gaps between artists disappear once you ask this**, and asking takes one sentence.' },
    { t: 'h2', id: 'unbudgeted', text: 'Costs people do not budget for' },
    {
      t: 'table',
      head: ['Item', 'Reality'],
      rows: [
        ['Antiviral medication if prescribed', 'Discuss with your doctor'],
        ['Aftercare products', '$20 - 60'],
        ['Time off around the peeling phase', 'Not on any invoice, but real'],
        ['Colour refresh every 2 - 3 years', '$250 - 500'],
        ['Correction or removal', 'More than the original'],
      ],
    },
    { t: 'h2', id: 'cheap-pricing', text: 'On very cheap pricing' },
    { t: 'p', text: 'Lips are vascular and heal differently from brows. **Technique matters considerably here**, and unusually low prices warrant questions rather than an immediate booking.' },
    {
      t: 'table',
      head: ['Ask', 'Why'],
      rows: [
        ['What registration do you hold?', 'In many states this is tattoo-regulated'],
        ['How long have you been doing lips specifically?', 'Brow experience does not transfer directly'],
        ['Can I see healed photos of lips?', 'Not day-one photos'],
        ['What pigments do you use?', 'A reasonable question, asked routinely'],
        ['Is the touch-up included?', 'The usual explanation for a low quote'],
        ['What happens if I am not happy with the colour?', 'Better answered before than after'],
      ],
    },
    { t: 'p', text: '**Healed photographs are the only ones worth judging.** Day-one images show swollen lips with wet pigment sitting on the surface, and every artist looks good in those.' },
    { t: 'h2', id: 'value-over-time', text: 'What it costs per year' },
    { t: 'p', text: 'Framed annually, it compares differently than the headline number suggests.' },
    {
      t: 'table',
      head: ['Scenario', 'Rough cost per year'],
      rows: [
        ['$800 initial, refreshed at year 3 for $350', 'Around $290'],
        ['$1,200 initial, lasting 5 years', '$240'],
        ['$600 initial, refreshed every 2 years at $300', 'Around $300'],
      ],
      note: 'Illustrative arithmetic, not quotes.',
    },
    { t: 'p', text: 'The figures land close together, which is the point. **The variable that matters is not the price — it is whether the work is good**, because correction costs more than the original and removal costs more still.' },
  ],
  faq: [
    { q: 'How much is lip blush?', a: 'Around $500 to $1,200 including the touch-up, and more with a highly experienced artist or in a major metro.' },
    { q: 'Is the touch-up extra?', a: 'Sometimes. Always ask — it is typically $150 to $350 separately and explains most price differences.' },
    { q: 'How often do I need a refresh?', a: 'Every two to three years typically, at $250 to $500.' },
    { q: 'What does removal cost?', a: 'Multiple sessions at $200 to $500 each — more than the original procedure.' },
    { q: 'Why is it more than microblading?', a: 'A longer appointment, more surface area, and lips are technically more demanding to work on.' },
  ],
  related: [
    { href: '/en/what-is-lip-blush', label: 'What Is Lip Blush Tattoo?' },
    { href: '/en/lip-blush-healing', label: 'Lip Blush Healing, Day by Day' },
    { href: '/en/choosing-a-microblading-artist', label: 'Choosing a PMU Artist' },
  ],
}
