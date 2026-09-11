import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, MASSAGE_PAY_NOTE } from './common'

export const massageTherapistHourlyRate: EnPage = {
  path: '/en/massage-therapist-hourly-rate',
  title: 'Massage Therapist Hourly Rate Explained',
  h1: 'Massage Therapist Hourly Rate',
  description:
    'Why the advertised hourly rate rarely matches take-home pay, and the questions that reveal what a role actually pays.',
  keywords: ['massage therapist hourly rate', 'massage therapist pay per hour', 'how much per hour massage therapist'],
  category: 'Careers & Pay',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**The advertised rate usually applies to hands-on time only.** Setup, turnover, notes, no-shows and gaps between clients are frequently unpaid. Ask how many sessions a week are realistic at that workplace — that number matters more than the rate itself.',
  blocks: [
    { t: 'note', tone: 'info', text: MASSAGE_PAY_NOTE },
    { t: 'h2', id: 'three-rates', text: 'The three rates that get confused' },
    {
      t: 'table',
      head: ['Rate', 'Meaning'],
      rows: [
        ['Service price', 'What the client pays'],
        ['Your per-service rate', 'Your share of that'],
        ['Effective hourly', 'Your earnings ÷ all hours you are at work'],
      ],
    },
    {
      t: 'p',
      text: 'Effective hourly is the only one of the three that pays your rent, and it is the only one that never appears in a job listing.',
    },
    {
      t: 'table',
      caption: 'A worked example',
      head: ['Element', 'Value'],
      rows: [
        ['Client pays', '$100'],
        ['Your share', '$40'],
        ['Session', '60 min'],
        ['Turnover', '15 min'],
        ['Unbooked gap after', '45 min'],
        ['Time at work', '2 hours'],
        ['Effective hourly', '$20'],
      ],
    },
    {
      t: 'p',
      text: 'The advertised figure in that example is $40. The real figure is $20, and nothing dishonest happened — the gap is simply where the unpaid time went. Scale that across a year and you get the discrepancy described in [Massage Therapist Salary](/en/massage-therapist-salary).',
    },
    { t: 'h2', id: 'usually-unpaid', text: 'What is usually unpaid' },
    {
      t: 'ul',
      items: [
        '**Setup and room turnover** — 10 to 20 minutes per client.',
        '**Documentation**, especially in clinical settings.',
        '**No-shows and late cancellations** — policy varies, so ask.',
        '**Gaps between bookings**, which are the largest item on this list.',
        '**Laundry**, in some arrangements.',
        '**Continuing education**, required for renewal.',
        '**All admin and marketing**, if self-employed.',
      ],
    },
    { t: 'h2', id: 'questions', text: 'Questions that reveal the real number' },
    {
      t: 'ol',
      items: [
        '**"How many sessions a week does a typical therapist here book?"**',
        '"Am I paid for time between clients?"',
        '**"What happens if a client no-shows?"**',
        '"Is turnover time paid?"',
        '"What is the gratuity situation?"',
        '"Who supplies linens, oils and laundry?"',
        '"Is there a minimum guaranteed pay?"',
        '**"What is the average tenure of therapists here?"**',
      ],
    },
    {
      t: 'note',
      tone: 'info',
      title: 'Question eight tells you more than the other seven',
      text: 'High turnover usually means the economics do not work for the people already doing the job. No pay structure explains as much as the fact that nobody stays.',
    },
    { t: 'h2', id: 'session-length', text: 'How session length changes the maths' },
    {
      t: 'table',
      head: ['Session', 'Note'],
      rows: [
        ['30 min', 'Higher rate per hour, but more turnovers per hour'],
        ['60 min', 'The standard'],
        ['90 min', 'Better effective hourly — fewer turnovers'],
        ['120 min', 'Best effective hourly, physically demanding'],
      ],
    },
    {
      t: 'p',
      text: 'Longer sessions generally pay better per hour worked because the fixed turnover cost is spread across more billable minutes. The catch is the physical load, which is exactly the trade-off covered in [Massage Therapist Career Longevity](/en/massage-therapist-career-longevity).',
    },
    { t: 'h2', id: 'raising-effective-rate', text: 'Raising your effective rate' },
    {
      t: 'table',
      head: ['Lever', 'Note'],
      rows: [
        ['Reduce unpaid gaps — a full schedule', 'The biggest single factor'],
        ['Favour longer sessions', 'Fewer turnovers per billable hour'],
        ['Specialise — sports, prenatal, clinical', 'Commands higher rates'],
        ['Build returning clients', 'Fewer no-shows, more rebooking'],
        ['Negotiate the split, not just the rate', 'Often the larger number'],
        ['Move toward self-employment eventually', 'Higher share, more costs'],
      ],
    },
    {
      t: 'p',
      text: 'The first row does more than the rest combined and is the one least within your control as an employee — which is itself a good argument for evaluating employers on booking volume rather than on headline rate. See [Massage Therapist Salary](/en/massage-therapist-salary) for how this rolls up into an annual figure.',
    },
  ],
  faq: [
    { q: 'What is a massage therapist’s hourly rate?', a: 'It varies by region and setting — and the advertised rate usually covers hands-on time only.' },
    { q: 'Is turnover time paid?', a: 'Often not. Ask directly before accepting a role.' },
    { q: 'What about no-shows?', a: 'Policies vary. Some employers pay a partial rate, many pay nothing at all.' },
    { q: 'Which session length pays best?', a: 'Longer sessions, because turnover time is spread across more billable minutes.' },
    { q: 'What is the best question to ask an employer?', a: 'How long the current therapists have been there. Tenure reveals more than any pay figure.' },
  ],
  related: [
    { href: '/en/massage-therapist-salary', label: 'Massage Therapist Salary: What You Actually Earn' },
    { href: '/en/massage-therapist-self-employed', label: 'Self-Employed vs Employed Massage Therapist' },
    { href: '/en/massage-therapist-career-longevity', label: 'Massage Therapist Career Longevity' },
  ],
}
