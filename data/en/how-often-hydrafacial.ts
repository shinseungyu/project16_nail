import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, HYDRAFACIAL_TM_NOTE } from './common'

export const howOftenHydrafacial: EnPage = {
  path: '/en/how-often-hydrafacial',
  title: 'How Often Should You Get a HydraFacial?',
  h1: 'How Often Should You Get a HydraFacial?',
  description:
    'Providers commonly suggest monthly. What that costs over a year, and how to pick a frequency that actually fits you.',
  keywords: ['how often should you get a hydrafacial', 'hydrafacial frequency', 'how often hydrafacial'],
  category: 'Skin Treatments',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**Providers commonly recommend every four weeks.** That recommendation is standard rather than individualised — the frequency that makes sense for you depends on your skin, your budget, and what you are actually trying to achieve.',
  blocks: [
    { t: 'note', tone: 'info', text: HYDRAFACIAL_TM_NOTE },
    { t: 'h2', id: 'common-schedules', text: 'Common schedules and what they cost' },
    {
      t: 'table',
      head: ['Frequency', 'Annual cost at $250', 'Suits'],
      rows: [
        ['Every 4 weeks', '$3,000', 'The standard recommendation'],
        ['Every 6 weeks', '~$2,150', 'A common compromise'],
        ['Quarterly', '$1,000', 'Maintenance'],
        ['Before events only', '$500 - 1,000', 'Occasional users'],
        ['One-off', '$250', 'Trying it'],
      ],
    },
    {
      t: 'p',
      text: 'The gap between the top and bottom of this table is two and a half thousand dollars a year for the same treatment. That is the real decision, and it gets made by default when someone books a package at their first appointment — before they have seen what [What Is a HydraFacial?](/en/what-is-a-hydrafacial) describes actually happening in a session.',
    },
    { t: 'h2', id: 'why-four-weeks', text: 'Why four weeks?' },
    {
      t: 'p',
      text: 'The interval maps loosely to skin cell turnover cycles, which are often cited as roughly a month. It is a reasonable default rather than a rule, and it also happens to be the interval that fills a provider’s calendar most efficiently. Both things can be true.',
    },
    {
      t: 'note',
      tone: 'info',
      title: 'The question that tells you which it is',
      text: 'Ask directly: "Why this frequency for my skin specifically?" A good answer references something about your skin. A vague answer means it is the standard package, which is fine — you just now know to price it as one.',
    },
    { t: 'h2', id: 'how-to-decide', text: 'How to decide' },
    {
      t: 'table',
      head: ['If you', 'Consider'],
      rows: [
        ['Have specific ongoing concerns', 'Discuss a course with a provider — and see a doctor for medical concerns'],
        ['Want a maintenance glow', 'Every 6 - 8 weeks'],
        ['Are budget-conscious', 'Quarterly, or before events only'],
        ['Have sensitive skin', 'Less frequent, and watch how skin responds'],
        ['Are new to it', 'One session, then decide'],
      ],
    },
    {
      t: 'p',
      text: 'The last row is the one most often skipped. A single session tells you whether you like the sensation, whether your skin reacts, and whether the result justifies the price to you — all things no article can answer.',
    },
    { t: 'h2', id: 'too-often', text: 'Signs you are going too often' },
    {
      t: 'table',
      head: ['Sign', 'What to do'],
      rows: [
        ['Increasing sensitivity', 'Extend the interval'],
        ['Persistent redness between sessions', 'Extend the interval'],
        ['Tightness or dryness that does not resolve', 'Extend the interval'],
        ['Skin feels compromised or reactive to products', 'Pause and speak with a provider'],
      ],
    },
    {
      t: 'p',
      text: 'More exfoliation is not better. Over-exfoliation is a genuinely common problem, and a monthly professional treatment stacked on top of an active home routine is a plausible way to arrive at it. If your skin is worse three months into a package than it was before, the frequency is the first thing to change.',
    },
    {
      t: 'p',
      text: '[HydraFacial Side Effects](/en/hydrafacial-side-effects) covers how to tell a reaction from ordinary purging, which is the other explanation worth ruling out.',
    },
    { t: 'h2', id: 'budget-view', text: 'The honest budget view' },
    {
      t: 'table',
      head: ['', 'Annual cost', 'Effect on skin long-term'],
      rows: [
        ['Monthly sessions', '$1,800 - 4,200', 'Temporary, resets between sessions'],
        ['A good sunscreen and basic routine', '~$150 - 400', 'Compounds over years'],
      ],
    },
    {
      t: 'p',
      text: 'If you have to choose, choose the daily routine. Professional treatments are a good addition to a solid foundation and a poor substitute for one. See [HydraFacial Cost](/en/hydrafacial-cost) for the full price breakdown and the cheaper routes to the same treatment.',
    },
    {
      t: 'ol',
      items: [
        '**Set your annual budget for treatments first.**',
        '**Divide by the local session price** to get your realistic frequency.',
        '**Book that frequency**, rather than the one recommended at the chair.',
        '**Reassess after three sessions** — extend the interval if your skin is getting more reactive, not less.',
      ],
    },
  ],
  faq: [
    { q: 'How often should I get a HydraFacial?', a: 'Providers commonly suggest every four weeks. Every six to eight weeks, or quarterly, are reasonable alternatives that cost considerably less.' },
    { q: 'Can I get one too often?', a: 'Yes. Increasing sensitivity or persistent redness between sessions means extending the interval.' },
    { q: 'Do I need a package?', a: 'Only if you will use every session before it expires.' },
    { q: 'Is monthly necessary?', a: 'It is a standard recommendation rather than an individualised one. Ask why it is right for your skin specifically.' },
    { q: 'What matters more than frequency?', a: 'Daily sunscreen and a consistent home routine, by a wide margin.' },
  ],
  related: [
    { href: '/en/hydrafacial-cost', label: 'How Much Does a HydraFacial Cost?' },
    { href: '/en/hydrafacial-benefits', label: 'HydraFacial Benefits: What It Actually Does' },
    { href: '/en/hydrafacial-side-effects', label: 'HydraFacial Side Effects' },
  ],
}
