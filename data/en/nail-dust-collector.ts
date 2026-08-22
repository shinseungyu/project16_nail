import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO } from './common'

export const nailDustCollector: EnPage = {
  path: '/en/nail-dust-collector',
  title: 'Nail Dust Collector: Why You Need One and How to Choose',
  h1: 'Nail Dust Collectors: What Actually Matters',
  description:
    'Nail dust is an occupational exposure, not just a mess. How source capture and downdraft collectors differ, what specs matter, what to budget.',
  keywords: ['nail dust collector', 'nail dust extractor', 'downdraft nail table', 'salon dust extraction'],
  category: 'Equipment & Business',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**A dust collector is not about keeping the table tidy — it is about not breathing acrylic and gel dust for eight hours a day.** Source-capture units pull dust at the point of filing; downdraft tables pull from the surface. Expect roughly $60 to $200 for a portable unit and $300 to $1,200 for a built-in table system.',
  blocks: [
    { t: 'h2', id: 'why', text: 'Why this matters more than people assume' },
    {
      t: 'p',
      text: 'Filing acrylic, hard gel, and dip powder produces fine particulate. A nail technician working full-time is in that environment for thousands of hours a year.',
    },
    {
      t: 'note',
      title: 'This is an occupational exposure question, not a cleanliness one',
      text: 'That framing is why professionals treat extraction as equipment rather than an accessory. Combined with adequate room ventilation and appropriate PPE, dust extraction is standard practice in a well-run station. Consult your state board and occupational safety guidance for requirements that apply to your workplace.',
    },
    { t: 'h2', id: 'types', text: 'The two main types' },
    {
      t: 'table',
      head: ['', 'Source capture (portable)', 'Downdraft table'],
      rows: [
        ['How it works', 'Unit sits near the hand, pulls at the point of filing', 'Extraction built into the table surface'],
        ['Capture efficiency', 'Higher - catches dust at origin', 'Good, but dust travels further first'],
        ['Price', '$60 - 200', '$300 - 1,200'],
        ['Portability', 'Yes - mobile techs, home setups', 'No'],
        ['Noise', 'Varies; can be significant', 'Generally quieter'],
        ['Space', 'Sits on the table', 'Integrated'],
      ],
    },
    {
      t: 'p',
      text: '**Source capture generally outperforms downdraft** for the simple reason that it intercepts dust before it disperses. The closer the intake is to the file, the more it catches. Many stations use both.',
    },
    { t: 'h2', id: 'specs', text: 'What to look for' },
    {
      t: 'table',
      head: ['Spec', 'Why it matters'],
      rows: [
        ['Suction strength', 'Usually stated in CFM or cubic metres per hour. Under-powered units move dust around rather than capturing it'],
        ['Filter type and stage count', 'Multi-stage filtration captures finer particulate than a single mesh screen'],
        ['Filter replacement cost and availability', 'A cheap unit with expensive or discontinued filters is a false economy'],
        ['Noise level', 'You will hear it all day. Check dB if listed'],
        ['Intake position', 'Adjustable arms let you position it close to the work'],
        ['Ease of emptying', 'You will do it constantly'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Filter cost is the spec most people ignore and most regret',
      text: 'Check the replacement price and how often it is needed **before** buying. A $70 unit with $40 filters replaced monthly costs more in year one than a $150 unit with $25 filters replaced quarterly.',
    },
    { t: 'h2', id: 'choosing', text: 'Portable vs built-in — how to decide' },
    { t: 'h3', text: 'Portable if' },
    {
      t: 'ul',
      items: [
        'You are mobile or work from multiple locations.',
        'You rent a booth and cannot modify the table.',
        'You are setting up at home.',
        'Budget is limited.',
      ],
    },
    { t: 'h3', text: 'Built-in table if' },
    {
      t: 'ul',
      items: [
        'You own or control the space.',
        'You work full-time volume.',
        'You want it out of the way visually.',
        'You are outfitting multiple stations.',
      ],
    },
    { t: 'h2', id: 'not-a-replacement', text: 'What a collector does not replace' },
    { t: 'p', text: 'Extraction is one layer of a system, and on its own it addresses only particulate.' },
    {
      t: 'ul',
      items: [
        '**Room ventilation** — vapours from monomer and adhesives are not captured by a dust unit.',
        '**Appropriate mask or respirator** where indicated.',
        'Regular filter maintenance — a clogged filter captures nothing.',
        'Surface cleaning at end of day.',
      ],
    },
    {
      t: 'note',
      text: '**A dust collector with a saturated filter is a noisy paperweight.** Set a replacement schedule rather than waiting to notice reduced suction, because the decline is gradual enough that you will not.',
    },
    { t: 'h2', id: 'budget', text: 'Budget guidance' },
    {
      t: 'table',
      head: ['Setup', 'Range'],
      rows: [
        ['Entry portable', '$60 - 100'],
        ['Quality portable', '$100 - 200'],
        ['Basic downdraft table', '$300 - 600'],
        ['Professional downdraft station', '$600 - 1,200'],
        ['Annual filter replacement', '$30 - 120'],
      ],
    },
    { t: 'h2', id: 'placement', text: 'Placement matters as much as the unit' },
    { t: 'p', text: 'A good collector positioned badly performs like a cheap one. Capture falls away quickly with distance, because dust disperses the moment it leaves the file.' },
    {
      t: 'table',
      head: ['Placement', 'Result'],
      rows: [
        ['Directly under or beside the hand', 'Best capture'],
        ['At the far edge of the table', 'Much of the dust escapes first'],
        ['Behind the client hand', 'Dust travels toward you before capture'],
        ['Blocked by product bottles or a lamp', 'Airflow restricted, capture drops'],
      ],
    },
    { t: 'p', text: '**Set the station up around the extraction, not the other way round.** If the collector ends up wherever there is space left, it is usually in the wrong place.' },
    { t: 'h2', id: 'maintenance', text: 'Maintenance schedule' },
    { t: 'p', text: 'Performance declines gradually enough that you will not notice it, which is why this belongs on a calendar rather than on judgement.' },
    {
      t: 'table',
      head: ['Interval', 'Task'],
      rows: [
        ['Each client', 'Empty or check the collection area'],
        ['Weekly', 'Wipe the housing and intake'],
        ['Monthly', 'Inspect the filter against a light'],
        ['Per manufacturer schedule', 'Replace filters - do not extend it because it looks clean'],
        ['Annually', 'Check motor noise and airflow against when it was new'],
      ],
    },
    { t: 'h2', id: 'home-studio', text: 'Home studios need more, not less' },
    { t: 'p', text: 'A small residential room is the hardest environment to manage, and it is where extraction is most often treated as optional.' },
    {
      t: 'ul',
      items: [
        '**Smaller air volume** means particulate and vapour concentrate faster.',
        '**Residential rooms rarely have mechanical ventilation**, so the window is the system.',
        '**You live in the space**, so exposure continues after the appointment ends.',
        '**Soft furnishings hold dust** in a way a salon floor does not.',
      ],
    },
    { t: 'note', tone: 'warn', text: 'If you work from home, treat source capture plus an open window plus a scheduled filter change as the minimum rather than the upgrade path. The exposure is the same work; the room is simply less able to clear it.' },
  ],
  faq: [
    { q: 'Do I really need a nail dust collector?', a: 'Filing produces fine particulate you would otherwise breathe for hours daily. Professionals treat extraction as standard equipment. Check your state board and workplace safety guidance for any specific requirements.' },
    { q: 'Which is better, portable or downdraft?', a: 'Source-capture portable units generally catch more because they intercept dust at the point of filing. Downdraft tables are tidier and quieter. Many techs use both.' },
    { q: 'How much should I spend?', a: 'Roughly $60 to $200 for a portable unit, and $300 to $1,200 for a downdraft table.' },
    { q: 'How often do filters need replacing?', a: 'It depends on the unit and your volume. Check the manufacturer guidance and factor the ongoing cost in before purchasing.' },
    { q: 'Does it remove vapours too?', a: 'No. Dust collectors handle particulate. Vapours from monomer and adhesives require room ventilation.' },
    { q: 'Do I need one for gel polish only?', a: 'Less critical if you never file gel or acrylic, but any filing produces dust — and if you do removals, you are filing.' },
  ],
  related: [
    { href: '/en/nail-tech-license', label: 'How to Get a Nail Tech License' },
    { href: '/en/salon-business-costs', label: 'Salon Business Costs: Booth Rent, Insurance & Pricing' },
    { href: '/en/acrylic-nail-application', label: 'How Acrylic Nails Are Applied, Step by Step' },
  ],
}
