import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, US_PAY_NOTE } from './common'

export const barberHairstylistSalary: EnPage = {
  path: '/en/barber-hairstylist-salary',
  title: 'Barber vs Hair Stylist Salary: Which Pays More in 2026?',
  h1: 'Barber vs Hair Stylist Salary: The Numbers and the Reasons',
  description:
    'Barbers average about $25 an hour, stylists about $21. What drives the gap, and how chair rent and colour work change the arithmetic.',
  keywords: ['barber salary', 'hair stylist salary', 'barber vs stylist pay', 'hairdresser salary'],
  category: 'Careers & Pay',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'Barbers report higher average pay than hair stylists — roughly **$25 an hour and $52,000 a year versus about $21 and $43,800.** The gap comes down to service frequency: barbering clients return every two to four weeks, hair salon clients every six to ten.',
  blocks: [
    { t: 'note', text: US_PAY_NOTE },
    { t: 'h2', id: 'side-by-side', text: 'Side by side' },
    {
      t: 'table',
      head: ['', 'Barber', 'Hair stylist'],
      rows: [
        ['Average hourly', 'approx. $25.06', 'approx. $21.06'],
        ['Average annual', 'approx. $52,123', 'approx. $43,797'],
        ['25th - 75th percentile', '$35,500 - 63,500', '$34,000 - 50,000'],
        ['90th percentile', 'approx. $75,000', 'approx. $61,000'],
        ['Client return interval', '2 - 4 weeks', '6 - 10 weeks'],
        ['Typical ticket', 'Lower', 'Higher'],
        ['Chemical services', 'Rare', 'Common'],
      ],
      note: 'Aggregator figures vary by source. Indeed, for example, reports barber pay closer to $29 an hour because of what it includes.',
    },
    { t: 'h2', id: 'why-barbers', text: 'Why barbers edge ahead' },
    {
      t: 'p',
      text: 'It is not the ticket price — barbers typically charge less per visit. It is **frequency.**',
    },
    {
      t: 'table',
      caption: 'Annual value of one regular client',
      head: ['', 'Barber', 'Stylist'],
      rows: [
        ['Ticket', '$35', '$70'],
        ['Visits per year', '15', '7'],
        ['Annual value per client', '$525', '$490'],
      ],
    },
    {
      t: 'p',
      text: 'A barber with 150 regulars sees roughly 2,250 appointments a year. A stylist with 150 regulars sees about 1,050. **Short-interval services build predictable revenue,** and that is the structural advantage.',
    },
    { t: 'h2', id: 'colour', text: 'Where stylists close the gap' },
    { t: 'p', text: 'Chemical services change the arithmetic quickly, because they raise revenue per hour rather than per visit.' },
    {
      t: 'table',
      head: ['Service', 'Ticket', 'Time', 'Per hour'],
      rows: [
        ['Men’s cut', '$35', '40 min', '$52'],
        ['Women’s cut', '$70', '55 min', '$76'],
        ['Colour, root', '$95', '90 min', '$63'],
        ['Balayage', '$180', '150 min', '$72'],
        ['Keratin treatment', '$250', '180 min', '$83'],
      ],
    },
    {
      t: 'note',
      title: 'The dividing line',
      text: '**Stylists who build a colour-heavy book out-earn most barbers. Stylists doing mainly cuts do not.** If you are comparing the two careers, compare the service mix you actually intend to do rather than the job titles.',
    },
    { t: 'h2', id: 'structures', text: 'Pay structures' },
    {
      t: 'p',
      text: 'Both roles use the same models: hourly, commission at typically 40 - 55%, chair rent at $150 - 400 a week, and suite rental.',
    },
    {
      t: 'p',
      text: '**Chair rent suits barbers particularly well** because of the volume. A barber doing 12 cuts a day at $35 grosses about $8,400 a month, and a $250 weekly chair is a small share of that.',
    },
    { t: 'h2', id: 'raise-pay', text: 'What raises pay' },
    { t: 'h3', text: 'Barbers' },
    {
      t: 'ul',
      items: [
        'Add straight-razor shaves — higher ticket, low product cost. Note that shaving is separately regulated in some states.',
        'Scalp and beard services, which fit the short return interval.',
        'Standing appointment slots for regulars, which stabilise the schedule.',
      ],
    },
    { t: 'h3', text: 'Stylists' },
    {
      t: 'ul',
      items: [
        'Move toward colour work, which raises revenue per hour rather than per visit.',
        'Add treatments to existing appointments instead of chasing new clients.',
        'Retail — colour-safe products sell themselves immediately after a service.',
      ],
    },
    { t: 'h2', id: 'chair-rent-math', text: 'Chair rent, worked through' },
    { t: 'p', text: 'Chair rent is where the barber advantage compounds, because a fixed cost is spread over far more appointments. Figures below are pre-tax and before product.' },
    {
      t: 'table',
      caption: 'A $250 a week chair, two different books',
      head: ['', 'Barber, 12 cuts/day at $35', 'Stylist, 5 services/day at $70'],
      rows: [
        ['Weekly gross, 5 days', '$2,100', '$1,750'],
        ['Chair rent', '$250', '$250'],
        ['Rent as share of gross', 'approx. 12%', 'approx. 14%'],
        ['After rent', '$1,850', '$1,500'],
      ],
    },
    { t: 'p', text: 'The shares look similar, but the risk is not. A barber missing one client loses $35 of a $2,100 week. A stylist missing one colour appointment loses $95 to $180 and often cannot refill a 90-minute slot at short notice.' },
    { t: 'h2', id: 'trajectory', text: 'How the two careers age' },
    { t: 'p', text: 'Averages hide the shape of each career, and the shapes are genuinely different.' },
    {
      t: 'table',
      head: ['', 'Barber', 'Hair stylist'],
      rows: [
        ['Time to a full book', 'Faster - short intervals build regulars quickly', 'Slower - six to ten weeks between chances'],
        ['Ceiling', 'Limited by hours in the day', 'Raised by moving into colour'],
        ['Physical load', 'High volume, repetitive', 'Longer appointments, more standing per client'],
        ['Common next step', 'Own shop or chair collective', 'Colour specialist, educator, or salon owner'],
      ],
    },
    { t: 'p', text: '**A barber reaches a full schedule sooner and reaches the ceiling sooner.** A stylist takes longer to fill a book but has a higher ceiling, because colour raises revenue per hour rather than requiring more hours.' },
    { t: 'h2', id: 'licensing-note', text: 'The licence is not interchangeable' },
    { t: 'p', text: 'Barbering and cosmetology are typically separate licences with separate scopes and separate training hours. Straight-razor shaving in particular is restricted to barbering in many states, which matters because it is one of the higher-margin additions on a barber menu.' },
    { t: 'p', text: 'If you are choosing between the two paths, check what each licence permits in your state before comparing salaries, because the service you are counting on may not be included in the one you pick.' },
  ],
  faq: [
    {
      q: 'Do barbers make more than hair stylists?',
      a: 'On average, yes — roughly $52,000 versus $43,800 annually. The main driver is how often clients return rather than what each service costs.',
    },
    {
      q: 'Why do barbers earn more with cheaper services?',
      a: 'Barbering clients return every two to four weeks against six to ten for salons, which produces roughly twice as many appointments per client per year.',
    },
    {
      q: 'What is the top end for each?',
      a: 'Around $75,000 for barbers and $61,000 for stylists at the 90th percentile, before independent operators and salon owners.',
    },
    {
      q: 'Is chair rent better than commission?',
      a: 'At high volume, yes. Rent is fixed, so it favours a busy chair and punishes a quiet one.',
    },
    {
      q: 'Do these figures include tips?',
      a: 'It depends on the source. Self-reported datasets usually include them, base-wage datasets do not, which is why published figures for the same job vary so widely.',
    },
    {
      q: 'Do I need a different license to barber?',
      a: 'Usually yes. Barbering and cosmetology are typically separate licences with separate scopes, and shaving in particular is often restricted to barbering. Check your state board.',
    },
  ],
  related: [
    { href: '/en/cosmetology-license-requirements', label: 'Cosmetology License Requirements & Reciprocity' },
    { href: '/en/salon-business-costs', label: 'Salon Business Costs: Booth Rent, Insurance & Pricing' },
    { href: '/en/esthetician-salary', label: 'Esthetician Salary: Why Sources Disagree' },
  ],
}
