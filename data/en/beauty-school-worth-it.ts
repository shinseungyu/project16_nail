import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, SCHOOL_NOTE, US_PAY_NOTE } from './common'

export const beautySchoolWorthIt: EnPage = {
  path: '/en/beauty-school-worth-it',
  title: 'Is Beauty School Worth It? An Honest Assessment',
  h1: 'Is Beauty School Worth It?',
  description:
    'What beauty school realistically costs, what graduates earn early on, and the questions to answer honestly before enrolling.',
  keywords: ['is beauty school worth it', 'cosmetology career worth it', 'beauty school return on investment', 'should I go to beauty school'],
  category: 'Licensing & Training',
  stage: 13,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**It depends on which licence, what it costs where you are, and whether you understand that early-career income is low.** The training is comparatively short and the path to independent work is real — but the first two years are the hard part, and that is the part people underestimate.',
  blocks: [
    { t: 'note', tone: 'warn', text: SCHOOL_NOTE },
    { t: 'h2', id: 'realistic-picture', text: 'The realistic picture' },
    {
      t: 'table',
      head: ['Stage', 'Reality'],
      rows: [
        ['School', 'Months to a couple of years, depending on licence and schedule'],
        ['Gap after finishing', '1 - 3 months for exams and board processing'],
        ['First 1 - 2 years', 'Building a clientele. Income is low'],
        ['Years 3 - 5', 'Income scales with rebooking and specialisation'],
        ['Independent or booth rent', 'Higher ceiling, higher risk, more admin'],
      ],
    },
    { t: 'p', text: 'Nothing in that table is a reason not to do it. **It is a reason to plan for it**, because the people who struggle are rarely the ones who lacked talent — they are the ones who ran out of runway in month eight.' },
    { t: 'h2', id: 'arithmetic', text: 'Do the arithmetic before enrolling' },
    { t: 'p', text: 'Four numbers, in order. If you cannot fill them in, that is the first task rather than a reason to guess.' },
    {
      t: 'table',
      head: ['Step', 'What to work out'],
      rows: [
        ['1', 'All-in school cost — tuition, kit, books, exam and licence fees'],
        ['2', 'Months of low income while building a clientele'],
        ['3', 'Realistic starting wage in your area for that licence'],
        ['4', 'How long until you have covered step 1'],
      ],
    },
    { t: 'note', tone: 'warn', text: US_PAY_NOTE },
    { t: 'p', text: '**Ask your prospective school for graduate starting-wage data.** If they cannot or will not provide it, that is information too — and it is worth more than any number on the brochure.' },
    { t: 'h2', id: 'what-predicts-success', text: 'What predicts success' },
    {
      t: 'table',
      head: ['Factor', 'Why it matters'],
      rows: [
        ['Rebooking discipline', 'The single biggest income driver'],
        ['Specialisation', 'Higher-ticket services and clearer positioning'],
        ['Willingness to build a portfolio publicly', 'For many, this is client acquisition'],
        ['Physical resilience', 'It is demanding work on your feet, hands and back'],
        ['Business sense', 'Especially if you go independent'],
        ['Staying somewhere long enough', 'A clientele does not transfer easily between towns'],
      ],
    },
    { t: 'p', text: '**Rebooking is the one to internalise early.** The difference between a client who books their next appointment before leaving and one who says they will call is, compounded over two years, the difference between a full column and an empty one.' },
    { t: 'h2', id: 'who-struggles', text: 'Who tends to struggle' },
    {
      t: 'ul',
      items: [
        'Expecting immediate full-time income.',
        'Uncomfortable with client-facing conversations, including recommending services.',
        'Existing wrist, back or shoulder problems.',
        'Unable to sustain a low income during the building phase.',
        '**Waiting for clients rather than actively building.**',
        'Treating social media as optional in a market where competitors do not.',
      ],
    },
    { t: 'h2', id: 'cheaper-paths', text: 'Cheaper paths worth considering' },
    {
      t: 'table',
      head: ['Path', 'Note'],
      rows: [
        ['A specialty licence — nails or esthetics', 'Shorter, cheaper, faster entry to earning'],
        ['Apprenticeship', 'Where available, far lower cost — you earn while training'],
        ['Community college programme', 'Often cheaper than private academies'],
        ['Start specialised, add a licence later', 'Spreads the cost and gets you working sooner'],
      ],
    },
    { t: 'p', text: 'The last row is underrated. **Nothing requires you to buy the most expensive version of this career first.** Starting with a shorter licence, working, and adding to it later is a legitimate route rather than a compromise — and you make the second decision with real experience instead of a brochure.' },
    { t: 'h2', id: 'honest-answer', text: 'The honest answer' },
    { t: 'p', text: 'Beauty school is worth it for people who want the work itself and can survive the building phase. It is a poor investment for people attracted mainly by the idea of it, because the idea does not survive contact with year one.' },
    {
      t: 'table',
      head: ['Good sign', 'Warning sign'],
      rows: [
        ['You have shadowed someone doing this job for a full day', 'You have only seen it on social media'],
        ['You have a plan for 12 months of low income', 'You are assuming it will be quicker for you'],
        ['You enjoy the client conversation, not just the craft', 'You want to work quietly and be left alone'],
        ['You have costed the whole thing in writing', 'You know the tuition figure only'],
        ['You are comfortable asking people to rebook', 'That sentence made you uncomfortable'],
      ],
    },
    { t: 'p', text: 'If the right-hand column describes you, that is not a verdict — it is a list of things to work on before you spend the money. **A day of shadowing costs nothing and answers more than a month of research.**' },
  ],
  faq: [
    { q: 'Is beauty school worth it?', a: 'It depends on the licence type, local costs, and whether you can sustain low income while building a clientele. The training is short; the building phase is the hard part.' },
    { q: 'How long until I earn a full income?', a: 'Commonly one to two years of building, with income scaling after that as rebooking and specialisation develop.' },
    { q: 'Is a specialty licence a better start?', a: 'Often — shorter, cheaper and faster to working. You can add a broader licence later with real experience behind the decision.' },
    { q: 'Can I avoid school entirely?', a: 'In some states, through a registered apprenticeship. Check your state board, since many states do not offer it.' },
    { q: 'What is the biggest predictor of success?', a: 'Rebooking rate. Compounded over two years it is the difference between a full column and an empty one.' },
  ],
  related: [
    { href: '/en/cosmetology-school-costs', label: 'What Does Cosmetology School Actually Cost?' },
    { href: '/en/cosmetology-apprenticeship', label: 'Cosmetology Apprenticeship: How It Works' },
    { href: '/en/esthetician-salary', label: 'Esthetician Salary: What the Numbers Mean' },
  ],
}
