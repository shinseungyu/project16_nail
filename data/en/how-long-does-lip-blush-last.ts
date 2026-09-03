import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, PMU_TATTOO_NOTE } from './common'

export const howLongDoesLipBlushLast: EnPage = {
  path: '/en/how-long-does-lip-blush-last',
  title: 'How Long Does Lip Blush Last?',
  h1: 'How Long Does Lip Blush Last?',
  description:
    'Lip blush lasts two to five years depending on skin, sun exposure and lifestyle. What fades it faster, and when to refresh.',
  keywords: ['how long does lip blush last', 'lip blush fading', 'lip blush refresh', 'lip tattoo longevity'],
  category: 'Permanent Makeup',
  stage: 0,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**Two to five years, with most people refreshing every two to three.** Lips exfoliate naturally and are constantly exposed, so lip pigment generally fades faster than brow pigment does.',
  blocks: [
    { t: 'note', tone: 'warn', text: PMU_TATTOO_NOTE },
    { t: 'h2', id: 'what-affects-longevity', text: 'What affects longevity' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Sun exposure', 'The biggest fading factor'],
        ['Natural lip turnover', 'Lips shed faster than other skin'],
        ['Smoking', 'Associated with faster fading'],
        ['Exfoliating lip products', 'Strips pigment along with dead skin'],
        ['Pigment colour', 'Lighter shades fade sooner'],
        ['Individual immune response', 'Varies considerably between people'],
        ['Retinoids or acids near the lips', 'Fades faster'],
      ],
    },
    { t: 'p', text: 'Two of those are within your control and one of them costs almost nothing. **Daily SPF lip balm and leaving scrubs alone** account for most of the difference between two years and four.' },
    { t: 'h2', id: 'timeline', text: 'A realistic timeline' },
    {
      t: 'table',
      head: ['Time', 'What to expect'],
      rows: [
        ['0 - 6 months', 'Fullest colour'],
        ['6 - 18 months', 'Gradually softening'],
        ['2 - 3 years', 'The typical refresh point'],
        ['3 - 5 years', 'Substantially faded'],
      ],
    },
    { t: 'p', text: 'It fades gradually and evenly rather than patchily, which means there is no awkward stage — **you simply have progressively less colour** until you decide to do something about it.' },
    { t: 'h2', id: 'extending-it', text: 'Extending it' },
    {
      t: 'ol',
      items: [
        '**SPF lip balm daily.** The single highest-impact habit by a wide margin.',
        '**Avoid exfoliating lip scrubs**, which remove pigment along with dead skin.',
        '**Keep retinoids and acids away from the lip area.**',
        '**Refresh before it has faded completely** — cheaper than starting over.',
        'Follow the aftercare properly the first time. Retention is largely decided in the first fortnight.',
        'Do not skip the touch-up. A well-completed result fades from a higher starting point.',
      ],
    },
    { t: 'h2', id: 'refresh-vs-new', text: 'Refresh versus starting again' },
    {
      t: 'table',
      head: ['', 'Cost', 'When it applies'],
      rows: [
        ['Colour refresh', '$250 - 500', 'While pigment still remains'],
        ['Full new procedure', '$500 - 1,200', 'After substantial fading'],
        ['Correction of unwanted colour', '$600 - 1,500+', 'When the existing result needs changing, not topping up'],
      ],
      note: 'Typical US pricing. Varies by artist and region.',
    },
    { t: 'p', text: '**Refreshing while colour remains is meaningfully cheaper**, and it is the practical reason to book at the two to three year mark rather than waiting until it has gone entirely.' },
    { t: 'h2', id: 'why-brows-last-longer', text: 'Why brows last longer than lips' },
    { t: 'p', text: 'People who have had both often expect similar longevity and are surprised. There are three reasons, and none of them reflect on the artist.' },
    {
      t: 'ul',
      items: [
        '**Lips exfoliate faster** than the skin on your brow area — it is a mucosal surface with rapid turnover.',
        '**Lips are more exposed.** They are rarely covered, rarely shaded, and get sun year-round.',
        '**Lips are subject to constant friction** — eating, drinking, talking, lip products.',
        'Together these mean **a lip result that lasts three years is doing well**, where the same expectation for brows would be modest.',
      ],
    },
    { t: 'h2', id: 'when-not-to-refresh', text: 'When to wait rather than refresh' },
    { t: 'p', text: 'A few situations where the answer is to hold off rather than book.' },
    {
      t: 'table',
      head: ['Situation', 'Why wait'],
      rows: [
        ['You are within 6 weeks of the original', 'That is the touch-up, not a refresh'],
        ['You have recently had lip filler', 'Let the shape settle before mapping to it'],
        ['You are pregnant or breastfeeding', 'Most artists decline'],
        ['You have an active cold sore', 'Wait until fully healed and speak to your doctor'],
        ['You want a different colour entirely', 'That is a correction conversation, priced differently'],
      ],
    },
  ],
  faq: [
    { q: 'How long does lip blush last?', a: 'Two to five years, with most people refreshing at two to three.' },
    { q: 'Why does it fade faster than brows?', a: 'Lips exfoliate more quickly, are more exposed to sun, and are subject to constant friction.' },
    { q: 'Does smoking affect it?', a: 'It is associated with faster fading.' },
    { q: 'How do I make it last?', a: 'Daily SPF lip balm is the main thing, plus avoiding exfoliating lip scrubs.' },
    { q: 'Is a refresh cheaper than a new procedure?', a: 'Yes — around $250 to $500 against $500 to $1,200, provided you refresh before it has faded completely.' },
  ],
  related: [
    { href: '/en/lip-blush-cost', label: 'How Much Does Lip Blush Cost?' },
    { href: '/en/lip-blush-aftercare', label: 'Lip Blush Aftercare' },
    { href: '/en/lip-blush-vs-lip-filler', label: 'Lip Blush vs Lip Filler' },
  ],
}
