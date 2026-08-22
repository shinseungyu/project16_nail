import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, US_STATE_NOTE } from './common'

export const nailTechLicense: EnPage = {
  path: '/en/nail-tech-license',
  title: 'How to Get a Nail Tech License: Steps, Time & Cost',
  h1: 'How to Get a Nail Tech License',
  description:
    'The path to a nail technician license: required training hours, exams, costs, and how long it realistically takes. Requirements vary by state.',
  keywords: [
    'how to get a nail tech license',
    'how long does it take to become a nail tech',
    'nail technician license requirements',
    'is being a nail tech worth it',
  ],
  category: 'Licensing & Training',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'The typical path is: **complete a state-approved training program, pass written and practical exams, then apply to your state board.** Required hours vary considerably by state, and most people finish training in a few months full-time or roughly twice that part-time.',
  blocks: [
    { t: 'note', tone: 'warn', text: US_STATE_NOTE },
    { t: 'h2', id: 'steps', text: 'The four steps' },
    {
      t: 'table',
      head: ['Step', 'What is involved'],
      rows: [
        ['1. Meet prerequisites', 'Minimum age and education requirements, set by state'],
        ['2. Complete approved training', 'Hours vary by state; must be at a board-approved school'],
        ['3. Pass the exams', 'Usually a written theory exam plus a practical assessment'],
        ['4. Apply for the licence', 'Application, fee, and any required documentation'],
      ],
    },
    { t: 'h2', id: 'how-long', text: 'How long it takes' },
    {
      t: 'table',
      head: ['Study mode', 'Typical range'],
      rows: [
        ['Full-time', 'A few months'],
        ['Part-time or evenings', 'Roughly double'],
        ['Plus exam scheduling and board processing', 'Several additional weeks'],
      ],
    },
    {
      t: 'note',
      title: 'Build in buffer time',
      text: 'Exam dates and board processing are not instant. The gap between finishing school and actually holding a licence surprises people, and you cannot legally work in it.',
    },
    { t: 'h2', id: 'cost', text: 'Cost components' },
    {
      t: 'table',
      head: ['Item', 'Note'],
      rows: [
        ['Tuition', 'The largest component; varies widely'],
        ['Student kit', 'Often not included in tuition'],
        ['Textbooks', ''],
        ['Written exam fee', ''],
        ['Practical exam fee', ''],
        ['Licence application fee', ''],
        ['Retake fees', 'Budget for the possibility'],
      ],
    },
    {
      t: 'p',
      text: '**Ask for an all-in figure in writing.** Advertised tuition frequently excludes kit and exam fees, which are the components that vary most between schools.',
    },
    { t: 'h2', id: 'worth-it', text: 'Is it worth it? The honest version' },
    { t: 'h3', text: 'Reasons it works for people' },
    {
      t: 'ul',
      items: [
        'Relatively short training compared with most licensed professions.',
        'Clear path to independent work — booth rent has a low barrier to entry.',
        'Portable skill; demand exists in most markets.',
        'Income scales directly with speed and rebooking rather than with seniority.',
      ],
    },
    { t: 'h3', text: 'Reasons people leave' },
    {
      t: 'ul',
      items: [
        'Early income is low while you are building a client base.',
        'Physically demanding on hands, wrists, neck, and back.',
        '**Product exposure.** Dust and vapours are a real occupational consideration; ventilation and extraction matter.',
        'Booth rent is due whether or not you are booked.',
      ],
    },
    { t: 'h2', id: 'before-enrol', text: 'Before you enrol, verify these' },
    {
      t: 'ul',
      items: [
        'School is **approved by your state board** — check on the board’s site, not the school’s.',
        'Required hours for **nail technology specifically**, not general cosmetology.',
        'Exam structure: written, practical, or both.',
        'All-in cost in writing.',
        'Job placement or licensure pass rates.',
        'Whether hours transfer if you relocate mid-program.',
      ],
    },
    { t: 'h2', id: 'practical-exam', text: 'What the practical exam involves' },
    { t: 'p', text: 'Formats differ by state, but the structure is consistent enough to prepare for. The exam assesses procedure and sanitation as much as the finished nail.' },
    {
      t: 'table',
      head: ['Area assessed', 'What examiners look for'],
      rows: [
        ['Setup and sanitation', 'Station arrangement, disinfection, implement handling'],
        ['Client protection', 'Correct procedure order, safe handling'],
        ['Manicure procedure', 'Steps performed in sequence within a time limit'],
        ['Polish or enhancement application', 'Evenness, cuticle margin, finish'],
        ['Clean-up and disposal', 'Assessed, and frequently where marks are lost'],
      ],
    },
    { t: 'p', text: '**Sanitation is scored throughout, not at the end.** Candidates who are technically strong but casual about implement handling lose marks steadily across the whole exam rather than in one place, which makes the loss hard to notice until the result arrives.' },
    { t: 'h2', id: 'after-passing', text: 'After you pass' },
    { t: 'p', text: 'Passing the exam gives you the qualification. Several steps still sit between that and legally taking a client.' },
    {
      t: 'ol',
      items: [
        '**Apply for the licence itself**, with the application fee and any required documents. The exam result alone is not authorisation to work.',
        '**Wait for processing**, which is usually weeks rather than days.',
        '**Display the licence** where your state requires it.',
        '**Arrange insurance**, which generally requires the licence to be in place first.',
        '**Diarise the renewal date** immediately, before it becomes something you rely on remembering.',
      ],
    },
    { t: 'h2', id: 'kit', text: 'The kit question' },
    { t: 'p', text: 'Student kits are one of the larger hidden costs and one of the more variable ones between schools.' },
    {
      t: 'table',
      head: ['Question to ask', 'Why it matters'],
      rows: [
        ['Is the kit included in tuition?', 'Often it is not, and it is not optional'],
        ['Does it meet exam requirements?', 'Some exams specify implements you must bring'],
        ['Can I use my own equivalent items?', 'Sometimes yes, which lowers the cost'],
        ['What is consumable and will run out?', 'Product replacement during training adds up'],
      ],
    },
    { t: 'note', text: 'Ask whether the kit meets your state exam requirements specifically. A general professional kit is not automatically an exam-compliant one, and discovering the difference on exam day is not recoverable.' },
  ],
  faq: [
    {
      q: 'How long does it take to become a nail tech?',
      a: 'A few months full-time, roughly double part-time, plus exam scheduling and board processing. Required hours vary by state.',
    },
    {
      q: 'What are the license requirements?',
      a: 'Generally minimum age and education, completion of a board-approved program, and passing written and practical exams. Specific hour requirements differ substantially by state.',
    },
    {
      q: 'Can I do it online?',
      a: 'No. Practical hours must be completed in person at an approved facility, though some theory may be delivered online in hybrid programs.',
    },
    {
      q: 'How much does it cost?',
      a: 'Tuition plus kit, books, exam fees, and licence fees. Request an all-in estimate rather than comparing advertised tuition.',
    },
    {
      q: 'Is being a nail tech worth it?',
      a: 'It depends on structure and bookings. Independent techs with full schedules do well; early-career hourly work pays modestly. It is also physically demanding, which is the part career pages tend to skip.',
    },
    {
      q: 'Do I need a separate license for gel or acrylic?',
      a: 'Usually these fall under a nail technology licence, but scope-of-practice rules vary. Check your state board if you plan to offer enhancements.',
    },
  ],
  related: [
    { href: '/en/nail-tech-salary', label: 'How Much Do Nail Techs Actually Make?' },
    { href: '/en/nail-dust-collector', label: 'Nail Dust Collectors: What Actually Matters' },
    { href: '/en/cosmetology-license-requirements', label: 'Cosmetology License Requirements & Reciprocity' },
  ],
}
