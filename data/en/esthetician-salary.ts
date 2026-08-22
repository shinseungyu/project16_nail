import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, US_PAY_NOTE } from './common'

export const estheticianSalary: EnPage = {
  path: '/en/esthetician-salary',
  title: 'Esthetician Salary 2026: What You Actually Take Home',
  h1: 'Esthetician Salary: Why Every Source Gives a Different Number',
  description:
    'Esthetician pay runs roughly $21 to $28 an hour, but sources disagree. Why the numbers differ, and what you keep after commission and booth rent.',
  keywords: [
    'esthetician salary',
    'how much do estheticians make an hour',
    'esthetician pay',
    'esthetician hourly rate',
  ],
  category: 'Careers & Pay',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'Reported esthetician pay sits roughly between **$21 and $28 per hour**, or about $45,000 to $58,000 a year. The spread is wide because some sources count only base wage while others fold in tips, retail commission, and service commission. What you take home depends far more on your pay structure than on your state.',
  blocks: [
    { t: 'note', text: US_PAY_NOTE },
    { t: 'h2', id: 'why-disagree', text: 'Why the numbers disagree' },
    {
      t: 'p',
      text: 'This is the question behind the search, and almost nobody answers it. Different datasets measure different things, so the same job produces four different figures.',
    },
    {
      t: 'table',
      caption: 'What each source is actually measuring',
      head: ['Source type', 'What it measures', 'Typical result'],
      rows: [
        ['Government wage data', 'Base wage only', 'Lowest'],
        ['ZipRecruiter, PayScale', 'Posted job listings, self-report', 'Mid'],
        ['Indeed', 'Self-reported, some tips included', 'Mid-high'],
        ['Glassdoor', 'Self-reported total compensation', 'Highest'],
      ],
    },
    {
      t: 'p',
      text: 'An esthetician earning $18/hour base plus $400/week in tips and commission is truthfully reporting both "$18 an hour" and "$65,000 a year." Both are real. They measure different things.',
    },
    {
      t: 'note',
      tone: 'info',
      title: 'When comparing job offers',
      text: 'Ask which components are included. **"We pay $25 an hour" and "our estheticians average $25 an hour" are not the same sentence.** The second usually folds in tips and commission that depend on how busy you are.',
    },
    { t: 'h2', id: 'structures', text: 'Pay structures matter more than your state' },
    {
      t: 'table',
      head: ['Structure', 'How it works', 'Suits'],
      rows: [
        ['Hourly', 'Flat rate regardless of bookings', 'New estheticians, medspa roles'],
        ['Commission', '35 - 50% of service revenue', 'Established client base'],
        ['Hourly + commission', 'Base plus a percentage over a threshold', 'Most common in salons'],
        ['Booth rent', 'You pay rent and keep 100% of revenue', 'High-volume independents'],
        ['Suite rental', 'Private room, higher rent', 'Established with loyal clients'],
      ],
    },
    { t: 'h3', text: 'Worked example: same revenue, different take-home' },
    {
      t: 'p',
      text: 'Assume you generate **$6,000 a month in services.** All figures below are pre-tax.',
    },
    {
      t: 'table',
      head: ['Structure', 'Gross to you', 'Costs you cover', 'Net (pre-tax)'],
      rows: [
        ['Hourly $22 x 160 hrs', '$3,520', 'None', '$3,520'],
        ['45% commission', '$2,700', 'None, products supplied', '$2,700'],
        ['Hourly $16 + 15% over $3k', '$2,560 + $450', 'None', '$3,010'],
        ['Booth rent $900/mo', '$6,000', 'Rent $900, products approx. $600, self-employment tax', 'approx. $3,400 - 3,900'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Booth rent looks best only if you stay busy',
      text: 'A slow month against a fixed $900 rent is the fastest way to lose money in this industry. Model your worst month, not your best. Rent does not pause for illness, holidays, or a quiet January.',
    },
    { t: 'h2', id: 'raise-pay', text: 'What raises pay fastest' },
    {
      t: 'ol',
      items: [
        '**Add a specialty.** Lash extensions, brow shaping, or advanced facials command higher tickets than basic services.',
        '**Retail commission.** Typically 5 - 15% on product sales, and it compounds with no extra chair time.',
        '**Rebooking rate.** Estheticians who rebook clients before they leave the room earn dramatically more than those who do not.',
        '**Medspa versus day spa.** Medical settings generally pay above traditional spas, though the role and the training expected of you differ.',
        '**Build a client list before going independent.** Booth rent without clients is a bill, not an opportunity.',
      ],
    },
    { t: 'h2', id: 'hourly-vs-annual', text: 'Hourly versus annual, read carefully' },
    {
      t: 'p',
      text: 'An average annual salary figure for estheticians is often misleading because **a large share of the workforce is part-time.** A $45,000 annual average can be full-timers earning $60,000 blended with part-timers earning $22,000.',
    },
    {
      t: 'p',
      text: 'Hourly rate is the more useful comparison when you are evaluating a job. Appointment volume is the more useful comparison when you are evaluating a business.',
    },
    { t: 'h2', id: 'by-setting', text: 'Pay by setting' },
    { t: 'p', text: 'Where you work changes the number more than most people expect, because the setting determines the ticket price, the pace, and whether retail is part of your income at all.' },
    {
      t: 'table',
      head: ['Setting', 'Typical pay pattern', 'What drives it'],
      rows: [
        ['Day spa', 'Hourly, or hourly plus commission', 'Steady bookings, moderate tickets, strong retail'],
        ['Medspa', 'Higher hourly, sometimes bonus', 'Higher tickets, more training expected'],
        ['Resort or hotel spa', 'Hourly plus service charge', 'Seasonal swings, guaranteed footfall'],
        ['Solo suite', 'All revenue minus rent', 'You set prices; you also carry every cost'],
        ['Dermatology office', 'Salary or hourly', 'Scope governed differently - check your board'],
      ],
    },
    { t: 'p', text: 'A medspa role usually pays above a day spa for the same hours, but the training expectation is higher and the scope of what you may legally perform is regulated differently. Do not assume a service you performed in one setting is permitted in another.' },
    { t: 'h2', id: 'interview', text: 'What to ask before accepting an offer' },
    { t: 'p', text: 'Most pay disappointments in this field are structural rather than dishonest. They come from a number quoted on one basis and paid on another.' },
    {
      t: 'ol',
      items: [
        '**Is the quoted rate base only, or does it include tips and commission?** This single question explains most of the gap between what you were told and what you receive.',
        '**What is the commission threshold?** Base plus a percentage over $3,000 a month is a very different offer from a percentage on the first dollar.',
        '**Who supplies backbar and retail stock?** In commission roles this is usually the salon. Confirm it, because it is a real monthly cost if it is not.',
        '**What is the retail commission, and is it paid on your clients or all clients?**',
        '**How are no-shows and cancellations handled?** If you are hourly this matters less. On commission it is directly your income.',
        '**Who owns the client list if you leave?** This decides whether the years you spend build an asset for you or for the salon.',
      ],
    },
    { t: 'note', title: 'Ask for a sample pay statement', text: 'A reasonable employer will show you what a mid-range esthetician actually earned last month with the components broken out. An unwillingness to do that is itself an answer.' },
    { t: 'h2', id: 'first-year', text: 'The first year is not the number' },
    { t: 'p', text: 'Almost every published average describes established estheticians. The first year usually pays below it, because income here is a function of a client base that does not exist yet.' },
    { t: 'p', text: 'This is the main reason people conclude the career does not pay, and it is a timing observation rather than a ceiling. What matters in year one is not the hourly rate but how quickly you build rebooking, because that is what the year-three number is made of.' },
  ],
  faq: [
    {
      q: 'How much do estheticians make an hour?',
      a: 'Roughly $21 to $28 depending on the source. Base-wage-only datasets trend lower, and self-reported total compensation trends higher because it includes tips and commission.',
    },
    {
      q: 'Why does Glassdoor show so much more than other sites?',
      a: 'Glassdoor captures self-reported total compensation, which includes tips and commission. Base-wage datasets exclude both, so the same job appears to pay very differently depending on where you look.',
    },
    {
      q: 'Is commission better than hourly?',
      a: 'Commission pays more once you are consistently booked. Hourly is safer while you are building a clientele, because it does not depend on how full your schedule is.',
    },
    {
      q: 'Does booth rent pay more?',
      a: 'It can, but only at consistent volume. Rent is due whether or not you have clients, and you also cover products and self-employment tax.',
    },
    {
      q: 'Do estheticians get tips?',
      a: 'Commonly, yes, in salon and spa settings. Tips are often a meaningful share of total income, which is a large part of why reported figures vary so much.',
    },
    {
      q: 'Does a medspa pay more than a day spa?',
      a: 'Generally yes, though the role and the required training differ. Scope of practice in a medical setting is also governed differently, so check your state board.',
    },
  ],
  related: [
    { href: '/en/online-esthetician-school', label: 'Online Esthetician School: What Is Actually Possible' },
    { href: '/en/salon-business-costs', label: 'Salon Business Costs: Booth Rent, Insurance & Pricing' },
    { href: '/en/nail-tech-salary', label: 'How Much Do Nail Techs Actually Make?' },
  ],
}
