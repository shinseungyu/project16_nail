import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, MASSAGE_PAY_NOTE } from './common'

export const massageTherapistSelfEmployed: EnPage = {
  path: '/en/massage-therapist-self-employed',
  title: 'Self-Employed vs Employed Massage Therapist',
  h1: 'Self-Employed vs Employed Massage Therapist',
  description:
    'Self-employment keeps the full session fee but absorbs rent, supplies, insurance and unpaid admin. The real comparison.',
  keywords: ['self-employed massage therapist', 'massage therapist booth rent', 'massage therapist own business'],
  category: 'Careers & Pay',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**Self-employed therapists keep the full session fee and pay for everything.** Once rent, supplies, insurance, marketing and unpaid admin time are counted, the income gap is smaller than the headline rate suggests — though the ceiling is genuinely higher.',
  blocks: [
    { t: 'note', tone: 'info', text: MASSAGE_PAY_NOTE },
    { t: 'h2', id: 'the-real-comparison', text: 'The real comparison' },
    {
      t: 'table',
      head: ['', 'Employed', 'Self-employed'],
      rows: [
        ['Per session', 'Partial share', 'Full fee'],
        ['Rent / room', 'Employer', 'You'],
        ['Supplies, linens, laundry', 'Employer', 'You'],
        ['Liability insurance', 'Sometimes', 'You'],
        ['Marketing', 'Employer', 'You'],
        ['Booking and admin', 'Employer', 'You — unpaid'],
        ['Client acquisition', 'Employer', 'You'],
        ['Taxes', 'Withheld', 'You — including self-employment tax'],
        ['Income stability', 'Higher', 'Variable'],
        ['Schedule control', 'Limited', 'Full'],
        ['Ceiling', 'Capped', 'Higher'],
      ],
    },
    {
      t: 'p',
      text: 'Six of those eleven rows are costs that move from someone else’s column into yours. That is the trade in one table: you buy a higher ceiling and full schedule control by taking on overhead and risk. [Massage Therapist Salary](/en/massage-therapist-salary) covers how the two models compare once a realistic session count is applied to both.',
    },
    { t: 'h2', id: 'what-it-costs', text: 'What self-employment actually costs' },
    {
      t: 'table',
      head: ['Cost', 'Note'],
      rows: [
        ['Room rent or booth rent', 'Usually the largest fixed cost'],
        ['Table, linens, oils', 'Startup and ongoing'],
        ['Liability insurance', 'Typically required'],
        ['Booking software', 'Monthly'],
        ['Marketing', 'Website, listings, ads'],
        ['Self-employment tax', 'A common first-year surprise'],
        ['Continuing education', 'Required for renewal'],
        ['Unpaid admin time', 'Several hours weekly'],
        ['Unpaid time off', 'No paid leave, no sick pay'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Self-employment tax catches people out',
      text: 'As an employee, part of your payroll tax is paid by your employer. Self-employed, you pay both halves. Budget for it from the first month rather than discovering it at filing.',
    },
    { t: 'h2', id: 'booth-rent', text: 'Booth rent versus employment' },
    {
      t: 'table',
      head: ['Model', 'How it works'],
      rows: [
        ['Employed', 'Wage or per-service share; employer covers overhead'],
        ['Commission', 'Percentage split; employer covers overhead'],
        ['Booth / room rent', 'Fixed rent, you keep everything else'],
        ['Fully independent', 'Own space, all costs'],
      ],
    },
    {
      t: 'p',
      text: 'Booth rent is the usual middle step, and the maths on it is simple enough to do on paper before signing: **rent ÷ your session fee = sessions needed just to break even**. If that number is close to a full week of bookings, the arrangement only works when you are already busy.',
    },
    { t: 'h2', id: 'when-it-makes-sense', text: 'When self-employment makes sense' },
    {
      t: 'table',
      head: ['Ready', 'Not yet'],
      rows: [
        ['You have a returning client base', 'Starting from zero clients'],
        ['You have savings for slow months', 'No financial buffer'],
        ['You are comfortable with admin', 'You dislike bookkeeping'],
        ['You know your local market rate', 'You are guessing at pricing'],
        ['You want schedule control', 'You want stability'],
        ['You have worked employed for a while', 'You just qualified'],
      ],
    },
    {
      t: 'p',
      text: 'Most therapists build a client base while employed first. Going independent from zero clients is the common failure mode — the costs start on day one and the bookings do not.',
    },
    { t: 'h2', id: 'hybrid', text: 'Hybrid approaches' },
    {
      t: 'ul',
      items: [
        '**Part-time employed plus part-time private** — a steady base income with upside.',
        '**Employed while quietly building a small private list**, where your contract allows it.',
        '**Booth rent a few days a week** rather than full-time, to lower the fixed cost.',
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Check your employment contract first',
      text: 'Non-compete and non-solicitation clauses are common in this industry. Seeing private clients you met through your employer is the exact scenario those clauses are written for.',
    },
    {
      t: 'p',
      text: 'Whichever route you take, the ceiling is still set by how many hands-on hours you can sustain — see [Massage Therapist Career Longevity](/en/massage-therapist-career-longevity) and [Massage Therapist Hourly Rate Explained](/en/massage-therapist-hourly-rate).',
    },
  ],
  faq: [
    { q: 'Do self-employed massage therapists earn more?', a: 'Higher per session and a higher ceiling, but they absorb all costs and unpaid admin time.' },
    { q: 'What does self-employment cost?', a: 'Room rent, supplies, insurance, marketing, booking software and self-employment tax.' },
    { q: 'What is booth rent?', a: 'A fixed rent to use a room, with you keeping the rest of your session fee.' },
    { q: 'When should I go independent?', a: 'Generally once you have a returning client base and a financial buffer for slow months.' },
    { q: 'Can I see private clients while employed?', a: 'Check your contract — non-compete and non-solicitation clauses are common in this industry.' },
  ],
  related: [
    { href: '/en/massage-therapist-salary', label: 'Massage Therapist Salary: What You Actually Earn' },
    { href: '/en/massage-therapist-hourly-rate', label: 'Massage Therapist Hourly Rate Explained' },
    { href: '/en/massage-therapist-career-longevity', label: 'Massage Therapist Career Longevity' },
  ],
}
