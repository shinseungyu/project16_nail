import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, WAX_BURN_NOTE, US_STATE_NOTE } from './common'

export const howToCleanAWaxWarmer: EnPage = {
  path: '/en/how-to-clean-a-wax-warmer',
  title: 'How to Clean a Wax Warmer Properly',
  h1: 'How to Clean a Wax Warmer',
  description:
    'Cleaning wax warmers while warm is the easy method. Step by step, plus how often and what to avoid.',
  keywords: ['how to clean a wax warmer', 'wax warmer cleaning', 'remove wax from pot', 'wax pot liners'],
  category: 'Waxing',
  stage: 16,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Clean it while the wax is still warm and soft — cold hardened wax is far harder to remove.** Wipe the pot out with paper towel, then finish the residue with oil, which dissolves wax.',
  blocks: [
    { t: 'note', tone: 'warn', text: WAX_BURN_NOTE },
    { t: 'h2', id: 'the-easy-method', text: 'The easy method' },
    {
      t: 'ol',
      items: [
        '**Turn the warmer off and unplug it.**',
        'While the wax is still soft, **pour out or scoop the reusable wax**.',
        'Wipe the pot with paper towel while it is still warm.',
        '**Finish the residue with oil** — mineral or baby oil on a cloth. Wax dissolves in oil.',
        'Wipe the exterior.',
        'Let it dry fully before the next use.',
      ],
    },
    { t: 'p', text: 'The oil step is the one people do not know about, and it turns a scraping job into a wiping job. **Solvents are not needed and are generally a worse idea** around a heating element.' },
    { t: 'h2', id: 'hardened-wax', text: 'If the wax has already hardened' },
    {
      t: 'table',
      head: ['Method', 'Note'],
      rows: [
        ['Reheat briefly, then wipe', 'Easiest by a distance'],
        ['Oil and patience', 'For thin residue'],
        ['Never scrape with metal', 'Damages the surface and creates hot spots'],
        ['Freezer, for removable pots only', 'Wax contracts and can pop out in one piece'],
      ],
    },
    { t: 'p', text: 'The metal row is a safety point rather than a cosmetic one. **A scratched pot surface heats unevenly afterwards**, which is exactly the fault that leads to hot spots and burns later.' },
    { t: 'h2', id: 'frequency', text: 'How often' },
    {
      t: 'table',
      head: ['Use', 'Clean'],
      rows: [
        ['Home, occasional', 'After each session'],
        ['Home, regular', 'After each session'],
        ['Salon', 'Follow your state board’s sanitation requirements'],
      ],
    },
    { t: 'note', tone: 'warn', text: US_STATE_NOTE },
    { t: 'p', text: '**Salon requirements are set by your state board** and wax areas are typically among the most inspected parts of a premises. Check the actual regulation rather than relying on habit or on what a previous employer did.' },
    { t: 'h2', id: 'never', text: 'Never do this' },
    {
      t: 'table',
      head: ['Do not', 'Why'],
      rows: [
        ['Reuse wax that has touched skin', 'Contamination — and prohibited in many jurisdictions'],
        ['Return a used spatula to the pot', 'Double-dipping, the same problem'],
        ['Submerge the unit in water', 'It is an electrical appliance'],
        ['Scrape with metal tools', 'Damages the pot and creates hot spots'],
        ['Leave wax in indefinitely', 'It degrades and collects debris'],
      ],
    },
    { t: 'p', text: '**Double-dipping is the one that matters most and is the easiest to slip into** when you are working quickly. One spatula, one pass, then it goes in the bin — that is the whole rule.' },
    { t: 'h2', id: 'liners', text: 'Pot liners' },
    { t: 'p', text: '**Disposable pot liners** make cleaning almost trivial and are widely used in salons. They cost little and save real time across a working day.' },
    {
      t: 'table',
      head: ['', 'With liners', 'Without'],
      rows: [
        ['Cleaning time', 'Seconds — lift and bin', 'Several minutes per pot'],
        ['Wax type changes', 'Swap the liner', 'Full clean-out'],
        ['Consumable cost', 'Small ongoing', 'None'],
        ['Pot condition over time', 'Protected', 'Accumulates residue and scratches'],
      ],
    },
    { t: 'p', text: 'For a home user doing one area a fortnight, liners are optional. **For anyone running two wax types or working through a client list, they pay for themselves in time within a week.**' },
  ],
  faq: [
    { q: 'How do I clean a wax warmer?', a: 'Wipe it out while the wax is still warm, then remove the remaining residue with oil on a cloth.' },
    { q: 'What if the wax has gone hard?', a: 'Reheat briefly and wipe. Never scrape with metal — it damages the pot and creates hot spots.' },
    { q: 'How often should I clean it?', a: 'After each session at home. In a salon, follow your state board’s sanitation requirements.' },
    { q: 'Can I reuse wax?', a: 'Not wax that has contacted skin. Reusing it is a contamination issue and is prohibited in many jurisdictions.' },
    { q: 'Do pot liners help?', a: 'Considerably. They are cheap and turn cleaning into lifting a liner out and binning it.' },
  ],
  related: [
    { href: '/en/wax-warmer-guide', label: 'Wax Warmers: How to Choose One' },
    { href: '/en/wax-warmer-temperature', label: 'Wax Temperature: Getting It Right' },
    { href: '/en/salon-business-costs', label: 'Salon Business Costs' },
  ],
}
