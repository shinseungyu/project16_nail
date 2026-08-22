import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, US_STATE_NOTE } from './common'

export const onlineEstheticianSchool: EnPage = {
  path: '/en/online-esthetician-school',
  title: 'Online Esthetician School: What Is Actually Possible',
  h1: 'Online Esthetician School: What You Can and Cannot Do Remotely',
  description:
    'You cannot get an esthetics license fully online. What hybrid programs actually cover, and what to verify with your state board before enrolling.',
  keywords: ['online esthetician school', 'esthetician license requirements', 'hybrid esthetics program', 'esthetics training hours'],
  category: 'Licensing & Training',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**You cannot complete an esthetics licence entirely online.** Every state requires supervised hands-on hours. What exists are hybrid programs — theory delivered online, practical hours completed in person at an approved facility.',
  blocks: [
    { t: 'note', tone: 'warn', text: US_STATE_NOTE },
    { t: 'h2', id: 'before-enrol', text: 'The thing to understand before you enrol' },
    {
      t: 'p',
      text: 'Searching for online esthetician school surfaces a lot of programs. Many are legitimate hybrid programs. Some are **continuing education or unaccredited certificate courses that will not lead to a licence.**',
    },
    {
      t: 'table',
      head: ['Program type', 'Leads to a licence?'],
      rows: [
        ['State-board-approved hybrid program', 'Yes, if you complete the in-person hours'],
        ['Fully online "certification"', 'No'],
        ['Continuing education course', 'No - these are for already-licensed pros'],
        ['International online diploma', 'Generally not recognised for US licensure'],
      ],
    },
    {
      t: 'note',
      title: 'One question settles it',
      text: '**Is this program approved by the state board where I intend to be licensed?** If the school cannot answer that clearly and in writing, that is your answer. Verify it on the board’s own website rather than the school’s.',
    },
    { t: 'h2', id: 'hybrid', text: 'How hybrid programs work' },
    {
      t: 'table',
      head: ['Component', 'Delivery'],
      rows: [
        ['Theory - anatomy, skin science, chemistry, sanitation', 'Online, self-paced or scheduled'],
        ['Practical hours', 'In person, at an approved facility'],
        ['Clinic floor and supervised client work', 'In person'],
        ['State board exam prep', 'Usually both'],
      ],
    },
    {
      t: 'p',
      text: '**The in-person portion is the fixed constraint.** If you do not live within reasonable travelling distance of an approved facility, a hybrid program may not actually work for you no matter how flexible the online half is.',
    },
    { t: 'h2', id: 'hours', text: 'Required hours vary by state' },
    {
      t: 'p',
      text: 'Esthetics program hour requirements differ substantially between states. Some require several hundred hours, others require significantly more. Master esthetician or advanced licences, where they exist, require additional hours beyond the basic credential.',
    },
    { t: 'h3', text: 'Check your specific state board for' },
    {
      t: 'ul',
      items: [
        'Required training hours for esthetics.',
        'Whether the board recognises hybrid delivery at all.',
        'The approved school list.',
        'Exam structure — written, practical, or both.',
        'Minimum age and prior education prerequisites.',
      ],
    },
    { t: 'h2', id: 'verify', text: 'What to verify before paying' },
    {
      t: 'table',
      head: ['Check', 'Why'],
      rows: [
        ['State board approval', 'The only thing that matters for licensure'],
        ['Where the practical hours happen', 'And whether you can realistically get there'],
        ['Total cost including kit and exam fees', 'Advertised tuition often excludes both'],
        ['Financial aid eligibility', 'Requires accreditation'],
        ['Completion and licensure pass rates', 'Ask directly - good schools share them'],
        ['What happens if you move mid-program', 'Hours may not transfer'],
      ],
    },
    { t: 'h2', id: 'cost', text: 'Realistic cost components' },
    { t: 'p', text: 'Tuition varies widely. Budget beyond it for the items schools usually quote separately:' },
    {
      t: 'ul',
      items: [
        'Student kit and supplies.',
        'Textbooks.',
        'State board application fee.',
        'Written and practical exam fees.',
        'Licence issuance fee.',
        'Retake fees, if needed.',
      ],
    },
    {
      t: 'note',
      title: 'Ask for a written all-in estimate',
      text: 'Schools that quote only tuition are quoting the smaller number. A program that looks $2,000 cheaper on tuition can end up costing more once kit and exam fees are counted.',
    },
    { t: 'h2', id: 'red-flags', text: 'Red flags in school marketing' },
    { t: 'p', text: 'Most of the risk in this decision is not fraud. It is programs that are legitimate as courses but do not lead where you assumed they lead.' },
    {
      t: 'table',
      head: ['What you see', 'What it often means'],
      rows: [
        ['"Get certified online in weeks"', 'A certificate, not a licence'],
        ['"Nationally recognised"', 'Not a licensing term - licensure is state level'],
        ['Vague answer on board approval', 'Usually the answer is no'],
        ['Tuition quoted without kit or exam fees', 'The real total is higher'],
        ['No named practical location', 'The in-person hours may not be arranged'],
        ['Pressure to enrol before a deadline', 'Unrelated to your licensing timeline'],
      ],
    },
    { t: 'p', text: '**"Nationally recognised" is the phrase worth pausing on.** There is no national esthetics licence in the United States. Licensure is issued state by state, so a national claim describes reputation at best and nothing at all at worst.' },
    { t: 'h2', id: 'timeline', text: 'A realistic timeline' },
    { t: 'p', text: 'The online portion is flexible; everything after it is not. Building the schedule backwards from the exam avoids the most common surprise.' },
    {
      t: 'table',
      head: ['Stage', 'Typical duration', 'Flexible?'],
      rows: [
        ['Theory coursework', 'Self-paced within program limits', 'Yes'],
        ['Practical hours at an approved facility', 'Fixed by the school schedule', 'No'],
        ['Supervised clinic work', 'Fixed', 'No'],
        ['Exam application and scheduling', 'Weeks', 'No'],
        ['Board processing after passing', 'Weeks', 'No'],
      ],
    },
    { t: 'note', tone: 'warn', title: 'You cannot work in the gap', text: 'Finishing the program is not the same as holding a licence, and the weeks between the two are unpaid. Factor that into the budget rather than the calendar alone.' },
    { t: 'h2', id: 'if-you-move', text: 'If you might move mid-program' },
    { t: 'p', text: 'Hours completed under one state approval do not automatically satisfy another state, and this is the single most expensive thing to discover late.' },
    { t: 'p', text: 'If a move is even possible during your training, ask both boards before enrolling. The answer occasionally makes it worth choosing a program approved in the destination state rather than the one you are living in now.' },
  ],
  faq: [
    {
      q: 'Can I become an esthetician entirely online?',
      a: 'No. Every state requires supervised hands-on hours. Online programs cover theory only, and the practical portion must be completed in person.',
    },
    {
      q: 'What is a hybrid esthetician program?',
      a: 'Theory delivered online with practical hours completed in person at an approved facility. It is the only remote-friendly route that leads to licensure.',
    },
    {
      q: 'How many hours do I need?',
      a: 'It varies by state, sometimes substantially. Check your state board for the exact requirement for esthetics licensure where you intend to work.',
    },
    {
      q: 'Is an online certificate enough to work?',
      a: 'Not for licensure. A certificate shows you completed a course; a licence is state authorisation to practise, and practising without one is generally prohibited.',
    },
    {
      q: 'How do I know if a school is legitimate?',
      a: 'Ask whether it is approved by the state board where you intend to be licensed, then verify that claim on the board’s own website rather than the school’s marketing pages.',
    },
    {
      q: 'What are the total costs?',
      a: 'Tuition plus kit, books, application, exam, and licence fees. Request an all-in written estimate before enrolling.',
    },
  ],
  related: [
    { href: '/en/esthetician-salary', label: 'Esthetician Salary: Why Sources Disagree' },
    { href: '/en/cosmetology-license-requirements', label: 'Cosmetology License Requirements & Reciprocity' },
    { href: '/en/lash-certification', label: 'Lash Certification vs License: The Difference' },
  ],
}
