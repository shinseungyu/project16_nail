import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, MASSAGE_PAY_NOTE } from './common'

export const massageTherapistSalary: EnPage = {
  path: '/en/massage-therapist-salary',
  title: 'Massage Therapist Salary: What You Actually Earn',
  h1: 'Massage Therapist Salary',
  description:
    'Why hourly rate times 40 hours overstates massage therapist income, and what the realistic annual picture looks like by setting.',
  keywords: ['massage therapist salary', 'how much do massage therapists make', 'massage therapist income'],
  category: 'Careers & Pay',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**The standard calculation overstates it.** Most massage therapists cannot physically perform forty hands-on hours a week — twenty to twenty-five is commonly cited as sustainable. Pay is best understood as **hourly rate × realistic weekly sessions**, not as a conventional full-time salary.',
  blocks: [
    { t: 'note', tone: 'info', text: MASSAGE_PAY_NOTE },
    { t: 'h2', id: 'the-calculation-everyone-gets-wrong', text: 'The calculation almost everyone gets wrong' },
    {
      t: 'table',
      head: ['Calculation', 'Result', 'Realistic?'],
      rows: [
        ['$40/hour × 40 hours × 52 weeks', '$83,200', 'No'],
        ['$40/hour × 22 sessions × 48 weeks', '$42,240', 'Closer'],
      ],
    },
    {
      t: 'p',
      text: 'That is not a small discrepancy. It is roughly double, and it is the number that appears in most career content about this profession because the arithmetic is borrowed from salaried work where forty hours is the norm. [Massage Therapist Hourly Rate Explained](/en/massage-therapist-hourly-rate) breaks down where the missing hours actually go.',
    },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Physical limit', 'Hands-on massage is demanding; 20 - 25 hrs/wk is commonly cited as sustainable'],
        ['Unpaid time between clients', 'Setup, turnover, notes'],
        ['No-shows and cancellations', 'Often unpaid'],
        ['Seasonal variation', 'Slower periods are real'],
        ['Time off', 'Unpaid for most self-employed therapists'],
        ['Career longevity', 'Overworking shortens the career itself'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'This is the single most useful thing to understand about the profession',
      text: 'Every downstream decision — whether to go self-employed, whether to specialise, how to price — follows from the fact that billable hours are capped by your body rather than by the calendar. [Massage Therapist Career Longevity](/en/massage-therapist-career-longevity) takes that to its conclusion.',
    },
    { t: 'h2', id: 'ranges-by-setting', text: 'Reported ranges by setting' },
    {
      t: 'table',
      head: ['Setting', 'Structure', 'Note'],
      rows: [
        ['Franchise / chain spa', 'Hourly or per-service', 'Lower per-hour, steady client flow'],
        ['Resort / hotel spa', 'Per-service + gratuity', 'Gratuity can be significant'],
        ['Chiropractic / medical office', 'Hourly or per-service', 'Often steadier, sometimes higher'],
        ['Self-employed / private practice', 'Full session fee', 'Highest per session, all costs yours'],
        ['Sports / athletic teams', 'Contract', 'Specialised, variable'],
        ['Mobile / in-home', 'Session fee + travel', 'Premium pricing, travel time unpaid'],
      ],
      note: 'Reported figures vary widely by state and metro. Check BLS and current local listings for numbers that apply to you.',
    },
    { t: 'h2', id: 'employed-vs-self-employed', text: 'Employed versus self-employed' },
    {
      t: 'table',
      head: ['', 'Employed', 'Self-employed'],
      rows: [
        ['Per session', 'Lower share', 'Full fee'],
        ['Client acquisition', 'Employer’s job', 'Yours'],
        ['Room and supplies', 'Provided', 'Your cost'],
        ['Insurance', 'Sometimes provided', 'Your cost'],
        ['Marketing', 'Provided', 'Your cost and time'],
        ['Admin time', 'Minimal', 'Significant and unpaid'],
        ['Schedule control', 'Limited', 'Full'],
        ['Income stability', 'Higher', 'Variable'],
      ],
    },
    {
      t: 'p',
      text: 'Self-employed therapists keep more per session but absorb rent, supplies, insurance, marketing and unpaid admin. The gap narrows considerably once those are counted — [Self-Employed vs Employed Massage Therapist](/en/massage-therapist-self-employed) works through the actual numbers.',
    },
    { t: 'h2', id: 'gratuity', text: 'Gratuity' },
    {
      t: 'p',
      text: 'In many US settings gratuity is a meaningful part of income, and it varies enormously by setting, region and clientele. Medical and clinical settings frequently have none at all, which means two roles advertising identical hourly rates can pay very differently in practice.',
    },
    {
      t: 'p',
      text: 'Ask about it explicitly when comparing offers. It is a normal question and an employer who is evasive about it is telling you the answer.',
    },
    { t: 'h2', id: 'real-numbers', text: 'Where to get real numbers' },
    {
      t: 'table',
      head: ['Source', 'What it gives you'],
      rows: [
        ['Bureau of Labor Statistics', 'State and metro breakdowns'],
        ['Current local job listings', 'What employers actually offer now'],
        ['State professional associations', 'Local context'],
        ['Therapists working locally', 'The most candid source available'],
        ['School marketing figures', 'Not employment data — compare against BLS'],
      ],
    },
    {
      t: 'p',
      text: 'The fourth row outperforms the rest. A working therapist in your city will tell you in ten minutes what no dataset captures: which employers pay on time, where the turnover is, and how many sessions a week people there actually book.',
    },
  ],
  faq: [
    { q: 'What does a massage therapist earn?', a: 'It varies widely by state and setting. The key point is that realistic weekly hands-on hours are typically 20 to 25, not 40.' },
    { q: 'Why is the usual salary figure misleading?', a: 'It assumes forty hands-on hours a week, which most therapists cannot physically sustain.' },
    { q: 'Which setting pays most?', a: 'Self-employment yields the highest per session but carries all costs; medical settings are often steadier.' },
    { q: 'Does gratuity matter?', a: 'Significantly in some settings and not at all in others. Ask explicitly when comparing roles.' },
    { q: 'Where do I find reliable figures?', a: 'The Bureau of Labor Statistics and current local job listings — not school marketing.' },
  ],
  related: [
    { href: '/en/massage-therapist-hourly-rate', label: 'Massage Therapist Hourly Rate Explained' },
    { href: '/en/massage-therapist-self-employed', label: 'Self-Employed vs Employed Massage Therapist' },
    { href: '/en/how-to-become-massage-therapist', label: 'How to Become a Massage Therapist' },
  ],
}
