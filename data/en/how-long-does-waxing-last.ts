import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO } from './common'

export const howLongDoesWaxingLast: EnPage = {
  path: '/en/how-long-does-waxing-last',
  title: 'How Long Does Waxing Last? Plus Ingrown Hair Prevention',
  h1: 'How Long Does Waxing Last, and How to Make It Last Longer',
  description:
    'Waxing lasts 3 to 6 weeks depending on the area and your hair cycle. What to avoid afterwards, how to prevent ingrowns, and which wax suits you.',
  keywords: [
    'how long does waxing last',
    'how to prevent ingrown hairs after waxing',
    'best wax for sensitive skin',
    'what not to do after waxing',
  ],
  category: 'Treatment Guide',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Waxing lasts three to six weeks depending on the area and where your hair is in its growth cycle.** The first few sessions often feel shorter-lived because your hair is not yet on a synchronised cycle. Regular waxing on schedule produces longer, more consistent results.',
  blocks: [
    { t: 'h2', id: 'by-area', text: 'By area' },
    {
      t: 'table',
      head: ['Area', 'Typical duration', 'Return interval'],
      rows: [
        ['Upper lip, face', '2 - 4 weeks', '3 - 4 weeks'],
        ['Underarms', '3 - 4 weeks', '3 - 4 weeks'],
        ['Bikini / Brazilian', '3 - 4 weeks', '3 - 4 weeks'],
        ['Arms', '4 - 5 weeks', '4 - 5 weeks'],
        ['Legs', '4 - 6 weeks', '4 - 6 weeks'],
        ['Back, chest', '4 - 5 weeks', '4 - 5 weeks'],
      ],
    },
    { t: 'h2', id: 'first-waxes', text: 'Why your first few waxes seem to last less' },
    {
      t: 'p',
      text: 'Hair grows in three phases, and at any moment your hairs are spread across all of them. Waxing removes what is currently visible, but hairs still below the surface will emerge within days.',
    },
    {
      t: 'p',
      text: '**After three to four consistent sessions**, more of your hair falls into a synchronised cycle and results become noticeably longer-lasting. This is why "waxing did not work for me" is usually a judgement made too early. Give it three cycles before deciding.',
    },
    { t: 'h2', id: 'what-shortens', text: 'What shortens it' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Shaving between appointments', 'Resets the cycle entirely - the single worst thing for results'],
        ['Going too long between sessions', 'Hair desynchronises again'],
        ['Hair too short at appointment', 'Wax cannot grip; patchy removal'],
        ['Hormonal factors', 'Can affect growth rate'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Shaving between waxes undoes the cycle benefit',
      text: 'It is the one habit that guarantees you never reach the synchronised phase where waxing starts paying off. Grow it out instead, even through the awkward stretch.',
    },
    { t: 'h2', id: 'aftercare', text: 'What not to do after waxing' },
    { t: 'h3', text: 'First 24 hours' },
    {
      t: 'ul',
      items: [
        'No sauna, steam room, hot tub, or swimming pool.',
        'No intense exercise — sweat and friction on freshly waxed skin.',
        'No hot showers; lukewarm only.',
        'No heavily fragranced body products.',
        'Loose, breathable clothing.',
      ],
    },
    { t: 'h3', text: 'First 48 hours' },
    { t: 'ul', items: ['No sunbeds or heavy sun exposure.', 'No exfoliation.'] },
    { t: 'h2', id: 'ingrowns', text: 'Preventing ingrown hairs' },
    { t: 'p', text: 'Ingrowns are the most common complaint and largely preventable, but the timing matters as much as the method.' },
    {
      t: 'table',
      head: ['Timing', 'Action'],
      rows: [
        ['First 2 days', 'Nothing - let skin settle'],
        ['From day 3', 'Gentle exfoliation, 2 - 3x weekly'],
        ['Daily', 'Moisturise'],
        ['Always', 'Do not squeeze or pick - that is how they become infected'],
      ],
    },
    {
      t: 'p',
      text: 'Physical and chemical exfoliation both work. Chemical exfoliants such as salicylic or glycolic acid are often gentler on freshly waxed areas than scrubs. **If you get persistent ingrowns in the same spot**, mention it at your next appointment — technique and hair growth direction can be adjusted.',
    },
    { t: 'h2', id: 'wax-types', text: 'Wax types and sensitive skin' },
    {
      t: 'table',
      head: ['Type', 'Best for', 'Notes'],
      rows: [
        ['Hard wax', 'Sensitive areas - face, bikini, underarms', 'Adheres to hair, not skin. Generally less irritating'],
        ['Soft wax (strip wax)', 'Large areas - legs, arms, back', 'Faster over big areas; adheres to skin as well as hair'],
        ['Sugar paste', 'Sensitive skin', 'Water-soluble, removed in the direction of growth'],
        ['Film wax', 'Sensitive areas', 'A hard wax variant'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Tell your technician about medication and actives',
      text: 'Retinoids, acids, and some prescription medications affect the skin in ways that can contraindicate waxing entirely. This is not a formality — skin lifting is the failure mode, and it is avoidable with disclosure.',
    },
    { t: 'h2', id: 'before', text: 'Before your appointment' },
    {
      t: 'table',
      head: ['Requirement', 'Detail'],
      rows: [
        ['Hair length', 'About 0.5 - 1 cm. Shaved too recently and it will not grip'],
        ['Exfoliation', '2 - 3 days before, not the same day'],
        ['Sun exposure', 'Avoid for 2 - 3 days prior'],
        ['Alcohol', 'Skip on the day - increases sensitivity'],
        ['Timing', 'Avoid the days just before your period, when skin is more sensitive'],
      ],
    },
    {
      t: 'note',
      text: 'Redness and small bumps for a day or two are normal. **Blistering, spreading rash, severe pain, or discharge are not** — see a doctor.',
    },
  ],
  faq: [
    { q: 'How long does waxing last?', a: 'Three to six weeks depending on the area. Legs last longest; face and underarms are shortest.' },
    { q: 'Why did my hair grow back in a week?', a: 'Hairs that were below the surface at the time of waxing emerge within days. This evens out after three to four consistent sessions.' },
    { q: 'What should I not do after waxing?', a: 'Avoid saunas, pools, intense exercise, hot showers, and fragranced products for 24 hours. Do not exfoliate for 48 hours.' },
    { q: 'How do I prevent ingrown hairs?', a: 'Start gentle exfoliation from day three, two to three times a week, and moisturise daily. Never squeeze them.' },
    { q: 'What is the best wax for sensitive skin?', a: 'Hard wax or sugar paste on sensitive areas, both generally gentler than strip wax. Tell your technician about any sensitivities or actives you use.' },
    { q: 'Can I shave between waxes?', a: 'It is the main thing that undermines results, because shaving resets the growth cycle you are trying to synchronise.' },
    { q: 'Does it get less painful?', a: 'Most people find it does, as hair regrows finer with regular sessions.' },
    { q: 'How long does hair need to be?', a: 'About 0.5 to 1 cm. If you shaved, wait two to three weeks before booking.' },
  ],
  related: [
    { href: '/en/esthetician-salary', label: 'Esthetician Salary: Why Sources Disagree' },
    { href: '/en/cosmetology-license-requirements', label: 'Do You Need a License to Do Waxing?' },
    { href: '/en/how-long-do-lash-extensions-last', label: 'How Long Do Lash Extensions Last?' },
  ],
}
