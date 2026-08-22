import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO } from './common'

export const gelXDamage: EnPage = {
  path: '/en/gel-x-damage',
  title: 'Do Gel X Nails Damage Your Nails?',
  h1: 'Do Gel X Nails Damage Your Nails?',
  description:
    'Gel X is often called gentler than acrylic. What is true, what is not, and where the actual damage risk sits.',
  keywords: ['gel x damage', 'do gel x nails damage nails', 'gel x safe for nails'],
  category: 'Nails',
  stage: 4,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Application generally does not. Removal does, if done wrong.** Gel X is often marketed as damage-free — it is not, but its soak-off removal is genuinely more forgiving than acrylic’s filing-based removal.',
  blocks: [
    { t: 'h2', id: 'where-damage', text: 'Where damage actually comes from' },
    {
      t: 'table',
      head: ['Cause', 'Risk'],
      rows: [
        ['Popping or prying them off', 'Highest'],
        ['Over-buffing during prep', 'Moderate'],
        ['Excessive e-file use at removal', 'Moderate'],
        ['Wearing continuously for many months', 'Mild'],
        ['Application itself', 'Low'],
      ],
    },
    { t: 'h2', id: 'damage-free', text: 'Why "damage-free" is overstated' },
    { t: 'p', text: 'Any system bonded to the nail plate requires some surface preparation and some removal process. **The claim usually means gentler than acrylic, which is fair — but it is not zero.**' },
    { t: 'p', text: 'The honest version is that Gel X moves the risk from a step requiring skill, filing, to a step requiring patience, soaking. Patience is easier to supply than skill, which is why outcomes tend to be better.' },
    { t: 'h2', id: 'reducing', text: 'Reducing risk' },
    {
      t: 'ol',
      items: [
        '**Always soak off. Never pop off.**',
        'Ask for light buffing rather than aggressive filing at prep.',
        'Take a break between sets if nails feel thin.',
        'Cuticle oil daily.',
        'Do not reapply over lifting product.',
      ],
    },
    { t: 'h2', id: 'what-it-looks-like', text: 'What damage looks like' },
    { t: 'p', text: 'Thin, flexible nails; white surface patches; peeling layers; sensitivity to pressure. **All of it grows out** over several months, because nail plate is replaced continuously rather than repaired.' },
    {
      t: 'table',
      head: ['Timeframe', 'What to expect'],
      rows: [
        ['Weeks 1 - 4', 'Nails feel thin, may split'],
        ['Months 2 - 3', 'New growth looks normal'],
        ['Months 4 - 6', 'Damage reaches the free edge and is filed off'],
      ],
    },
    { t: 'h2', id: 'signals', text: 'Signals at the salon' },
    { t: 'p', text: 'Most of the controllable risk sits with how the technician works, and a few things are visible from the chair.' },
    {
      t: 'table',
      head: ['Good sign', 'Worth asking about'],
      rows: [
        ['Soaks product off', 'Files everything off quickly'],
        ['Light buffing at prep', 'Aggressive filing of the natural nail'],
        ['Sizes each tip', 'Uses one size across several fingers'],
        ['Checks the nail before reapplying', 'Reapplies without looking'],
        ['E-file used on product only', 'E-file taken down to the natural nail'],
      ],
    },
    { t: 'note', title: 'Heat means stop', text: 'Whether filing by hand or with an e-file, warmth on the nail is a reliable signal that the work has moved from product into nail. It is worth saying so immediately rather than afterwards.' },
    { t: 'h2', id: 'prep-detail', text: 'Prep is where the avoidable damage happens' },
    { t: 'p', text: 'Removal gets the attention and deserves it, but the prep step at the start of every single set is the one that accumulates quietly.' },
    {
      t: 'table',
      head: ['', 'Appropriate', 'Excessive'],
      rows: [
        ['Purpose', 'Remove shine, create grip', 'Remove nail plate'],
        ['Tool', 'Fine buffer or light e-file pass', 'Coarse grit, pressure'],
        ['Result', 'Slightly matte', 'Thinned, sometimes warm'],
        ['Frequency effect', 'Negligible over time', 'Cumulative across sets'],
      ],
    },
    { t: 'p', text: 'One over-buffed set is recoverable. Twelve over-buffed sets a year is why some people conclude that enhancements ruined their nails when the removal was actually fine.' },
    { t: 'h2', id: 'breaks', text: 'Taking a break, and what it does' },
    { t: 'p', text: 'Breaks are frequently recommended and rarely explained. The mechanism is simply that nail plate grows out and nothing is being done to the new growth.' },
    {
      t: 'table',
      head: ['Break length', 'What it achieves'],
      rows: [
        ['A week', 'Little structurally - mostly a look at the nail'],
        ['A month', 'Visible new growth, some improvement in feel'],
        ['3 months', 'Most of the visible nail is new'],
        ['6 months', 'Essentially fully replaced'],
      ],
    },
    { t: 'note', title: 'A break is not required if the process is right', text: 'Correct prep and soak-off removal do not create damage that needs recovering from. Breaks matter when something in the cycle has been too aggressive, which is worth identifying rather than working around.' },
    { t: 'h2', id: 'expectations', text: 'What healthy nails under enhancements look like' },
    { t: 'p', text: 'It is worth knowing the baseline, because nails under a set look different from bare nails even when nothing is wrong.' },
    {
      t: 'table',
      head: ['Observation', 'Normal?'],
      rows: [
        ['Slightly pale immediately after removal', 'Yes - colour returns within hours'],
        ['Feels dry straight after soaking', 'Yes - acetone dehydration'],
        ['Slightly rough surface', 'Yes, if lightly buffed'],
        ['Thin and bendy', 'No - this is over-buffing or forced removal'],
        ['White chalky patches', 'No'],
        ['Tender to press', 'No - raise it with your technician'],
      ],
    },
    { t: 'p', text: 'The first three resolve within a day or two. The last three do not, and they are the ones worth acting on rather than covering with the next set.' },
    { t: 'h2', id: 'talking', text: 'Raising it with your technician' },
    { t: 'p', text: 'This conversation is easier than people expect, and technicians generally prefer to hear it than to lose a client without knowing why.' },
    {
      t: 'ul',
      items: [
        '**Say what you noticed**, not what you think caused it.',
        '**Ask what they would change** for the next set.',
        '**Ask for lighter prep** specifically, if buffing seemed heavy.',
        '**Ask them to soak rather than file** at removal.',
      ],
    },
  ],
  faq: [
    { q: 'Is Gel X damage-free?', a: 'No system is. It is gentler than acrylic at removal, which is the main damage point, but that is not the same as zero.' },
    { q: 'Is it safer than acrylic?', a: 'The removal process is more forgiving. Application risk is broadly similar.' },
    { q: 'How long do nails take to recover?', a: 'Several months to fully grow out, with new growth looking normal well before that.' },
    { q: 'Should I take breaks?', a: 'If nails feel thin or sore, yes. Continuous wear for many months is mild on its own but hides the state of the nail.' },
    { q: 'Can I strengthen damaged nails?', a: 'Products reduce breakage while nails grow. Nothing repairs existing nail plate.' },
  ],
  related: [
    { href: '/en/gel-x-removal', label: 'How to Remove Gel X Nails' },
    { href: '/en/how-long-do-gel-x-nails-last', label: 'How Long Do Gel X Nails Last?' },
    { href: '/en/gel-x-vs-acrylic', label: 'Gel X vs Acrylic' },
  ],
}
