import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, US_PAY_NOTE } from './common'

export const nailTechSalary: EnPage = {
  path: '/en/nail-tech-salary',
  title: 'Nail Tech Salary 2026: Hourly, Annual & By Structure',
  h1: 'How Much Do Nail Techs Actually Make?',
  description:
    'Nail technician pay runs about $18 to $26 an hour, averaging near $43,000 a year. Why sources disagree, and what booth renters actually keep.',
  keywords: [
    'how much do nail techs make',
    'nail technician salary',
    'nail tech salary by state',
    'nail tech hourly pay',
  ],
  category: 'Careers & Pay',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'Reported nail technician pay runs roughly **$18 to $26 per hour, with annual averages around $43,000.** As with most beauty roles, the range reflects whether tips and commission are counted. Booth renters and commission techs with full books earn well above the averages. Hourly employees rarely do.',
  blocks: [
    { t: 'note', text: US_PAY_NOTE },
    { t: 'h2', id: 'reported', text: 'The reported figures, and what they mean' },
    {
      t: 'table',
      head: ['Source type', 'Typical hourly', 'Notes'],
      rows: [
        ['PayScale', 'approx. $17.71', 'Skews toward base wage'],
        ['ZipRecruiter', 'approx. $20.74', 'Job posting data'],
        ['Salary.com', 'approx. $26.10', 'Includes broader compensation'],
        ['Glassdoor', 'Substantially higher', 'Self-reported total compensation'],
      ],
    },
    {
      t: 'p',
      text: 'Annual figures around **$43,000** are commonly cited. Treat that as a midpoint rather than a ceiling. It blends part-time and full-time workers, and part-timers are a large share of this workforce.',
    },
    { t: 'h2', id: 'by-structure', text: 'By pay structure' },
    {
      t: 'table',
      head: ['Structure', 'Typical terms', 'Who it fits'],
      rows: [
        ['Hourly', '$15 - 22/hr', 'New techs, high-volume walk-in shops'],
        ['Commission', '40 - 60% of services', 'Techs with returning clients'],
        ['Booth rent', '$150 - 400/week', 'Full books, own product supply'],
        ['Suite rental', '$250 - 600/week', 'Established independents'],
      ],
    },
    { t: 'h3', text: 'Worked example: $7,000 a month in services' },
    {
      t: 'table',
      head: ['Structure', 'Gross', 'Costs', 'Net (pre-tax)'],
      rows: [
        ['Hourly $19 x 160', '$3,040', 'None', '$3,040'],
        ['50% commission', '$3,500', 'None', '$3,500'],
        ['Booth rent $250/wk', '$7,000', 'Rent $1,083, products approx. $700', 'approx. $5,200'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Highest earning and highest risk are the same column',
      text: 'Booth rent produces the best number here, and it is also the only structure where a bad month costs you money instead of just earning you less. The rent does not pause when you are sick, on holiday, or slow.',
    },
    { t: 'h2', id: 'levers', text: 'What actually moves the number' },
    {
      t: 'table',
      head: ['Lever', 'Impact'],
      rows: [
        ['Service mix', 'Full sets and nail art carry far better margins than polish changes'],
        ['Speed without quality loss', 'Five minutes saved per set is roughly one extra client a day'],
        ['Rebooking', 'The single largest predictor of income stability'],
        ['Add-ons', 'Removal, repairs, cuticle care - small tickets that fill gaps'],
        ['Retail', 'Cuticle oil and files, 10 - 20% commission typical'],
      ],
    },
    {
      t: 'p',
      text: '**Removal is the most underrated service on the menu.** It is short, requires almost no product, and brings in clients from other salons, many of whom convert to a full set on the spot.',
    },
    { t: 'h2', id: 'regional', text: 'Regional differences' },
    {
      t: 'p',
      text: 'Higher-cost states report higher averages. Commonly reported leaders include **the District of Columbia, California, and Massachusetts.** But rent is higher, your booth fee is higher, and competition is denser.',
    },
    {
      t: 'note',
      title: 'Compare net, not gross',
      text: 'A tech clearing $4,500 a month in a low-cost metro often keeps more than one grossing $6,000 in a high-cost one. State-level averages tell you almost nothing about what lands in your account.',
    },
    { t: 'h2', id: 'tips', text: 'How tips actually work here' },
    { t: 'p', text: 'Tips are a larger share of nail technician income than of most beauty roles, which is exactly why published salary figures disagree so violently.' },
    {
      t: 'table',
      head: ['Factor', 'Effect on tips'],
      rows: [
        ['Service length', 'Longer appointments tend to tip better in absolute terms'],
        ['Payment method', 'Card terminals with prompts raise average tips'],
        ['Repeat clients', 'Regulars tip more consistently than walk-ins'],
        ['Salon price point', 'Percentage stays similar, so higher tickets mean higher tips'],
        ['Booth rent vs employee', 'Independent techs often see higher tipping'],
      ],
    },
    { t: 'p', text: 'When a job posting quotes a range, ask whether tips are included in it. **A $16 hourly role with strong tipping can out-earn a $22 role without it**, and neither employer is misrepresenting anything. They are describing different things.' },
    { t: 'h2', id: 'first-year', text: 'The first year, realistically' },
    { t: 'p', text: 'Published averages describe established techs. A first-year tech is slower per set, has no rebooking base, and usually takes whatever appointments the schedule assigns.' },
    {
      t: 'table',
      head: ['Stage', 'What changes', 'Effect on income'],
      rows: [
        ['Months 1 - 3', 'Speed and confidence', 'Fewer clients per day'],
        ['Months 4 - 9', 'First regulars appear', 'Income becomes less erratic'],
        ['Months 10 - 18', 'Rebooking becomes habitual', 'Approaches published averages'],
        ['Year 2+', 'Service mix shifts to higher-margin work', 'Exceeds them, or plateaus'],
      ],
    },
    { t: 'note', tone: 'warn', title: 'Do not take booth rent in year one', text: 'It is the highest-earning structure and it requires the one thing a new tech does not have: a book. Rent against an empty schedule is how people leave the industry before they find out whether they would have been good at it.' },
    { t: 'h2', id: 'costs', text: 'What comes out of the number' },
    { t: 'p', text: 'Gross pay is not take-home, and the gap is wider for independents than for employees.' },
    {
      t: 'ul',
      items: [
        '**Self-employment tax** if you rent rather than being employed. Set aside for it from the first week rather than discovering it in April.',
        '**Product.** Gel, acrylic, files, and disposables are yours as a renter. Budget it monthly rather than treating it as an occasional purchase.',
        '**Extraction and ventilation.** Treat this as equipment rather than an optional upgrade.',
        '**Insurance.** Professional liability, commonly a few hundred dollars a year.',
        '**Booking software**, where the salon does not provide it.',
      ],
    },
  ],
  faq: [
    {
      q: 'How much do nail techs make an hour?',
      a: 'Roughly $18 to $26 depending on the source and on what is included. Base-wage datasets sit at the low end and self-reported total compensation at the high end.',
    },
    {
      q: 'What is the average annual nail tech salary?',
      a: 'Commonly reported around $43,000. That figure blends part-time and full-time workers, so treat it as a midpoint rather than a target.',
    },
    {
      q: 'Do nail techs make good money?',
      a: 'It depends entirely on structure and bookings. A booth renter with a full schedule can substantially exceed the averages. An hourly employee at a walk-in shop generally will not.',
    },
    {
      q: 'Is booth rent worth it?',
      a: 'Only with consistent bookings. Model your slowest realistic month before committing, because the rent is fixed and your revenue is not.',
    },
    {
      q: 'Which states pay nail techs the most?',
      a: 'Higher-cost states report higher averages, but living costs and booth fees scale with them. Compare what you would keep, not what you would gross.',
    },
    {
      q: 'Do nail techs get tips?',
      a: 'Yes, commonly, and tips are a significant share of total earnings. This is a major reason reported salary figures disagree with each other.',
    },
  ],
  related: [
    { href: '/en/nail-tech-license', label: 'How to Get a Nail Tech License' },
    { href: '/en/salon-business-costs', label: 'Salon Business Costs: Booth Rent, Insurance & Pricing' },
    { href: '/en/nail-dust-collector', label: 'Nail Dust Collectors: What Actually Matters' },
  ],
}
