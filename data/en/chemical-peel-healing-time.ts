import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, MED_DISCLAIMER } from './common'

export const chemicalPeelHealingTime: EnPage = {
  path: '/en/chemical-peel-healing-time',
  title: 'How Long Does a Chemical Peel Take to Heal?',
  h1: 'How Long Does a Chemical Peel Take to Heal?',
  description:
    'Superficial peels settle in 1 to 3 days, medium in 5 to 10, deep in weeks. A realistic day-by-day timeline for each depth.',
  keywords: ['chemical peel healing time', 'chemical peel recovery', 'how long does a chemical peel take to heal', 'chemical peel peeling days'],
  category: 'Skin Treatments',
  stage: 10,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**Superficial: 1 to 3 days. Medium: 5 to 10 days. Deep: several weeks, with redness lasting well beyond that.** Plan around the depth you are actually getting, not the depth you read about.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_DISCLAIMER },
    { t: 'h2', id: 'superficial', text: 'Superficial peel timeline' },
    { t: 'p', text: 'A superficial peel is the one people describe as a lunchtime treatment. There is usually some redness on the day and light flaking a couple of days later, and that is the whole of it.' },
    {
      t: 'table',
      head: ['Day', 'What is typical'],
      rows: [
        ['0', 'Redness, tightness, sometimes mild stinging'],
        ['1', 'Redness settling'],
        ['2 - 4', 'Light flaking, often around the nose and chin first'],
        ['5+', 'Back to normal'],
      ],
    },
    { t: 'p', text: 'Some people barely flake at all after a superficial peel. **That does not mean it did not work.** Visible shedding is a side effect of the depth, not the measure of the result, and providers usually judge a superficial series on how the skin looks after several sessions rather than on how much came off after one.' },
    { t: 'h2', id: 'medium', text: 'Medium peel timeline' },
    { t: 'p', text: 'This is the depth people underestimate. The peeling phase is genuinely visible, and it lands squarely in the middle of the week.' },
    {
      t: 'table',
      head: ['Day', 'What is typical'],
      rows: [
        ['0 - 1', 'Redness, tightness, possible swelling'],
        ['2', 'Skin darkens and feels tight before anything sheds'],
        ['3 - 7', 'Visible peeling — the socially awkward window'],
        ['7 - 10', 'Peeling completes, pink skin underneath'],
        ['2 - 4 weeks', 'Pinkness gradually resolves'],
      ],
    },
    { t: 'p', text: 'Day two catches people out, because the skin looks worse before it looks better and nothing has shed yet. **That darkening phase is normal after a medium peel** and your provider should have described it in advance. If it was not described, ask.' },
    { t: 'h2', id: 'deep', text: 'Deep peel timeline' },
    { t: 'p', text: 'Recovery is measured in **weeks**, with redness often persisting for months afterwards. This is a significant medical procedure requiring dedicated planning and physician management, and the recovery is not something you fit around a normal work schedule.' },
    { t: 'p', text: 'Anyone considering one should be having a detailed conversation with the performing physician about the full recovery arc, not reading a timeline table. The reason this page does not give a day-by-day breakdown for deep peels is that the protocol is specific to the procedure and the person.' },
    { t: 'h2', id: 'planning', text: 'Planning around an event' },
    { t: 'p', text: 'The most common regret with peels is timing, not depth. This table is deliberately conservative.' },
    {
      t: 'table',
      head: ['Event in', 'Safe depth'],
      rows: [
        ['2 days', 'None — do not'],
        ['1 week', 'Superficial'],
        ['2 - 3 weeks', 'Medium'],
        ['2+ months', 'Deep, with physician planning'],
      ],
    },
    { t: 'note', tone: 'warn', title: 'Never book a peel close to a wedding or major event', text: 'Unless you have had that exact peel from that exact provider before and know how your skin responds, the risk is not worth it. Healing varies between people, and the one week where it goes slowly will be the week that matters.' },
    { t: 'h2', id: 'what-affects-healing', text: 'What affects how fast you heal' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Depth', 'Dominant — everything else is secondary'],
        ['Individual healing', 'Varies significantly between people'],
        ['Sun exposure', 'Slows healing and raises pigmentation risk'],
        ['Picking', 'Extends healing and risks scarring'],
        ['Aftercare compliance', 'Particularly moisturising and sun protection'],
        ['Skin type', 'Pigmentation risk varies'],
        ['Smoking', 'Generally associated with slower wound healing'],
      ],
    },
    { t: 'p', text: 'Notice what is not on that list: anything you can buy to accelerate it. **You cannot speed up a peel.** Attempts to — exfoliating, scrubbing, using an active early — reliably make the timeline longer rather than shorter.' },
    { t: 'h2', id: 'when-it-is-slow', text: 'When healing seems slower than expected' },
    { t: 'p', text: 'Some variation is normal, and the ranges above are typical rather than universal. What matters is the direction of travel.' },
    {
      t: 'table',
      head: ['Pattern', 'Reading'],
      rows: [
        ['Peeling starting a day or two late', 'Common, usually fine'],
        ['Pinkness lasting longer than described', 'Ask your provider, especially after a medium peel'],
        ['Discomfort decreasing day by day', 'Expected'],
        ['Pain increasing rather than settling', 'Contact a doctor'],
        ['Spreading redness, warmth, pus or fever', 'Seek medical attention'],
      ],
    },
    { t: 'p', text: 'The distinction that matters is not how long something lasts but whether it is improving. Slow improvement is usually patience; a symptom that is getting worse is a reason to call someone.' },
  ],
  faq: [
    { q: 'How long does a chemical peel take to heal?', a: 'Roughly 1 to 3 days for superficial, 5 to 10 days for medium, and several weeks for deep peels, with redness lasting longer after deeper treatments.' },
    { q: 'When will the peeling start?', a: 'Typically day 2 or 3, depending on depth. After a medium peel the skin often darkens and tightens on day 2 before anything sheds.' },
    { q: 'Can I go to work?', a: 'After a superficial peel, generally yes. After a medium peel, plan for several days where peeling is clearly visible.' },
    { q: 'How long does the redness last?', a: 'Hours to days after a superficial peel, up to a few weeks after a medium one, and longer after a deep peel.' },
    { q: 'Can I speed it up?', a: 'No. Trying to — by picking or exfoliating — extends healing and raises the risk of scarring and pigmentation.' },
  ],
  related: [
    { href: '/en/chemical-peel-aftercare', label: 'Chemical Peel Aftercare' },
    { href: '/en/chemical-peel-cost', label: 'How Much Does a Chemical Peel Cost?' },
    { href: '/en/chemical-peel-side-effects', label: 'Chemical Peel Side Effects' },
  ],
}
