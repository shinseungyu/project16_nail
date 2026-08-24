import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, SCHOOL_NOTE } from './common'

export const cosmetologySchoolLength: EnPage = {
  path: '/en/cosmetology-school-length',
  title: 'How Long Is Cosmetology School? By License Type',
  h1: 'How Long Is Cosmetology School?',
  description:
    'Programme length depends on your state’s required hours and licence type. How full-time and part-time schedules compare, and the gap after graduating.',
  keywords: ['how long is cosmetology school', 'cosmetology hours required', 'beauty school length', 'nail tech school length'],
  category: 'Licensing & Training',
  stage: 13,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**It depends on your state’s required hours and which licence you are pursuing.** Cosmetology requires substantially more hours than esthetics or nail technology, and full-time programmes finish in a fraction of the time part-time ones do.',
  blocks: [
    { t: 'note', tone: 'warn', text: SCHOOL_NOTE },
    { t: 'h2', id: 'hours-by-licence', text: 'Hours by licence type' },
    { t: 'p', text: 'Required hours are set by each state, and the specific figures vary meaningfully. **The relative ordering, however, is consistent everywhere.**' },
    {
      t: 'table',
      head: ['Licence', 'Relative hours', 'Scope'],
      rows: [
        ['Cosmetology', 'Highest', 'Hair, skin and nails'],
        ['Barbering', 'High', 'Hair and shaving services'],
        ['Esthetics', 'Moderate', 'Skin only'],
        ['Nail technology', 'Lowest', 'Nails only'],
      ],
    },
    { t: 'p', text: '**Check your state board for the exact figures.** Two neighbouring states can differ by hundreds of hours for the same licence, which is months of your life and a large part of the cost.' },
    { t: 'h2', id: 'full-vs-part-time', text: 'Full-time versus part-time' },
    {
      t: 'table',
      head: ['Schedule', 'Relative duration'],
      rows: [
        ['Full-time', 'Baseline'],
        ['Part-time or evenings', 'Roughly double'],
        ['Weekends only', 'Longer still'],
      ],
    },
    { t: 'p', text: 'The trade is straightforward: part-time lets you keep an income while you train, at the cost of taking roughly twice as long to start earning in the field. Neither answer is wrong, but **the decision is easier if you cost out both** rather than defaulting to whichever the school suggests.' },
    { t: 'h2', id: 'the-gap', text: 'The gap between finishing and working' },
    { t: 'p', text: 'This is the part almost everyone underestimates. Completing your hours and holding a licence are separated by more time than you expect.' },
    {
      t: 'table',
      head: ['Stage', 'Additional time'],
      rows: [
        ['Completing your hours', 'The programme length'],
        ['Scheduling exams', 'Weeks'],
        ['Waiting for results', 'Weeks'],
        ['Board processing', 'Weeks'],
        ['Total gap after finishing', 'Often 1 - 3 months'],
      ],
    },
    { t: 'note', tone: 'warn', title: 'Plan financially for the gap', text: 'You have finished paying for school and cannot yet work in the field. One to three months with no income from the thing you just trained for is a predictable event, and it catches people out every year.' },
    { t: 'h2', id: 'choosing-by-time', text: 'Choosing a licence type by time' },
    {
      t: 'table',
      head: ['If you want', 'Consider'],
      rows: [
        ['The fastest entry to working', 'Nail technology'],
        ['A skin focus', 'Esthetics'],
        ['The broadest scope', 'Cosmetology'],
        ['To specialise later', 'Start with a specialty, add another licence afterwards'],
        ['To keep working while training', 'Part-time, in any of the above'],
      ],
    },
    { t: 'p', text: '**You can add licences later.** Many professionals hold two, and starting with a shorter specialty is a legitimate strategy rather than a compromise — it gets you into a salon, earning and building a client base, considerably sooner.' },
    { t: 'h2', id: 'what-slows-people-down', text: 'What actually slows people down' },
    { t: 'p', text: 'Programme length is the advertised number. These are the things that make real completion times longer than the brochure.' },
    {
      t: 'ul',
      items: [
        '**Missed hours have to be made up**, and catching up is harder than keeping up.',
        '**Attendance requirements are usually strict**, because hours are a legal requirement rather than a school policy.',
        '**Clinic floor availability** can bottleneck the practical portion.',
        '**Exam scheduling** depends on test dates, not on when you are ready.',
        '**A failed practical** adds a fee and weeks of waiting.',
        'Changing schedule partway from full-time to part-time restarts the arithmetic.',
      ],
    },
    { t: 'p', text: 'The first two are the ones within your control, and they are worth taking seriously from week one. **Hours are a legal count, not a target** — a school cannot waive them for you even if it wanted to.' },
    { t: 'h2', id: 'moving-states', text: 'If you might move states' },
    { t: 'p', text: 'This is worth settling before enrolling rather than after graduating, because the options narrow considerably once the hours are already banked somewhere.' },
    {
      t: 'table',
      head: ['Question', 'Why it matters'],
      rows: [
        ['Does the destination state accept out-of-state hours?', 'Some do, some partially, some not at all'],
        ['Does it require more hours than where you studied?', 'You may need to make up the difference'],
        ['Is there a reciprocity or endorsement route?', 'Terms and requirements vary'],
        ['Does it require a period of licensed work experience?', 'Common in endorsement pathways'],
        ['Will you need to retake exams?', 'Sometimes, depending on the route'],
      ],
    },
    { t: 'p', text: '**Ask both boards, in writing, before you enrol.** Schools can tell you what usually happens; only the board you will be licensed by can tell you what will happen to you.' },
    { t: 'h2', id: 'planning-your-timeline', text: 'Building a realistic timeline' },
    { t: 'p', text: 'Most people plan to the graduation date and stop there. A useful timeline runs to the first paycheque instead.' },
    {
      t: 'ol',
      items: [
        '**Find your state’s required hours** for the licence you want.',
        '**Divide by the weekly hours** of the schedule you can realistically sustain — not the one you would like to.',
        '**Add the exam and processing gap**, usually one to three months.',
        '**Add the clientele-building period**, commonly a year or more before income is steady.',
        'Check the total against how long your savings or other income actually last.',
      ],
    },
    { t: 'p', text: 'The second step is where optimism does the damage. **A schedule you cannot sustain becomes missed hours**, and missed hours are the most common reason a programme takes longer than the brochure said.' },
  ],
  faq: [
    { q: 'How long is cosmetology school?', a: 'It depends on your state’s required hours and whether you study full- or part-time. Cosmetology requires substantially more hours than esthetics or nails.' },
    { q: 'Is nail tech school shorter?', a: 'Yes, substantially. Nail technology requires the fewest hours of the main licence types.' },
    { q: 'How long after finishing until I can work?', a: 'Often one to three months, covering exam scheduling, results and board processing. Plan financially for that gap.' },
    { q: 'Can I work while studying?', a: 'Part-time and evening programmes exist, but they take roughly twice as long to complete.' },
    { q: 'Should I do cosmetology or a specialty?', a: 'Cosmetology has the broadest scope; specialties are faster and cheaper to enter. You can add another licence later.' },
  ],
  related: [
    { href: '/en/cosmetology-school-costs', label: 'What Does Cosmetology School Actually Cost?' },
    { href: '/en/cosmetology-license-requirements', label: 'Cosmetology License Requirements' },
    { href: '/en/nail-tech-license', label: 'Nail Tech License Requirements' },
  ],
}
