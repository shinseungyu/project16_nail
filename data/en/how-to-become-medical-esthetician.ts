import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, MED_ESTHETICIAN_NOTE, SCHOOL_NOTE } from './common'

export const howToBecomeMedicalEsthetician: EnPage = {
  path: '/en/how-to-become-medical-esthetician',
  title: 'How to Become a Medical Esthetician: Steps',
  h1: 'How to Become a Medical Esthetician',
  description:
    'The realistic path, what schools do not tell you about licensing, and the questions to ask before paying for a program.',
  keywords: ['how to become a medical esthetician', 'medical esthetician requirements', 'medical esthetician school'],
  category: 'Careers & Pay',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**Get your state esthetician license, add training relevant to medical settings, and get hired into one.** In most states there is no separate "medical esthetician" license to obtain — which means some of the programs marketed as leading to one are selling something other than what the name suggests.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_ESTHETICIAN_NOTE },
    { t: 'h2', id: 'the-path', text: 'The path' },
    {
      t: 'table',
      head: ['Step', 'What is involved'],
      rows: [
        ['1. Esthetician program', 'Required hours vary by state'],
        ['2. State exams', 'Written and usually practical'],
        ['3. State license', 'Issued by your state board'],
        ['4. Additional training', 'Peels, devices, post-procedure care'],
        ['5. Check your state board', 'For any advanced or additional category'],
        ['6. Employment', 'Medical spa, dermatology, plastic surgery'],
        ['7. Employer training', 'Device-specific and protocol-specific'],
        ['8. Renewals', 'Continuing education requirements vary'],
      ],
    },
    {
      t: 'p',
      text: 'Steps one through three are the licensed part and are set by your state. Steps four onward are the part that turns a licensed esthetician into someone a dermatology practice will hire, and none of it is a credential — it is a résumé. What you may then actually perform is a separate question, covered in [Esthetician Scope of Practice](/en/esthetician-scope-of-practice).',
    },
    { t: 'h2', id: 'before-you-pay', text: 'Before you pay for any program' },
    {
      t: 'p',
      text: 'Ask these in writing. A program that answers them plainly is one worth considering; a program that deflects on the first and last has told you what you needed to know.',
    },
    {
      t: 'ol',
      items: [
        '**"Does completing this program result in a state license, or a certificate issued by your school?"**',
        '"What are my state’s required hours, and does this program meet them?"',
        '"What is the total cost — tuition, kit, books, exam fees?"',
        '"What is your exam pass rate, and can you show me the data?"',
        '"What is your job placement rate, and how is it measured?"',
        '**"Is this program approved by my state board?"**',
        '"Are the advertised salary figures from the Bureau of Labor Statistics, or from your own marketing?"',
      ],
    },
    { t: 'h2', id: 'red-flags', text: 'The red flags' },
    {
      t: 'table',
      head: ['Claim', 'Why it is a flag'],
      rows: [
        ['"Get your medical esthetician license here"', 'Usually no such license exists'],
        ['"Guaranteed job placement"', 'Rarely enforceable'],
        ['Salary figures with no source', 'Compare against BLS instead'],
        ['Pressure to enrol today', 'A deadline on a decision this size is a sales tactic'],
        ['Vague about state board approval', 'The single most important thing to verify'],
        ['"Certification" used interchangeably with "license"', 'These are different things'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Certification is not licensure',
      text: 'A certificate says a school taught you something. A license says your state permits you to practise. Only one of them is required to work, and only one of them is issued by a state board.',
    },
    { t: 'h2', id: 'costs', text: 'Costs to budget for' },
    {
      t: 'table',
      head: ['Item', 'Note'],
      rows: [
        ['Tuition', 'Varies enormously — compare several programs'],
        ['Kit and supplies', 'Often several hundred to over a thousand'],
        ['Textbooks', 'Sometimes bundled, sometimes not'],
        ['Exam fees', 'State-set'],
        ['License fee and renewals', 'State-set'],
        ['Additional certifications', 'After licensing'],
        ['Liability insurance', 'Often required'],
      ],
    },
    {
      t: 'p',
      text: 'Get the all-in number in writing before enrolling. Tuition is the figure that gets advertised and frequently not the majority of what you will spend in year one.',
    },
    { t: 'h2', id: 'getting-hired', text: 'Getting hired into a medical setting' },
    {
      t: 'table',
      head: ['What helps', 'Why'],
      rows: [
        ['Additional training beyond the minimum', 'Signals you will invest in the role'],
        ['Understanding clinical documentation', 'The skill spa-trained applicants most often lack'],
        ['Familiarity with common devices', 'Even without hands-on certification'],
        ['Professional communication', 'Medical settings weigh this heavily'],
        ['Willingness to start in a support role', 'A common and effective entry point'],
      ],
    },
    {
      t: 'p',
      text: 'That last row is worth taking seriously. Many practices prefer to train their own people on their own devices and protocols, which means a support role is often a faster route in than another certificate. See [Medical Esthetician vs Esthetician](/en/medical-esthetician-vs-esthetician) for what the work is actually like once you are there, and [Medical Esthetician Salary](/en/medical-esthetician-salary) for what to negotiate.',
    },
    { t: 'note', tone: 'info', text: SCHOOL_NOTE },
  ],
  faq: [
    { q: 'How do I become a medical esthetician?', a: 'Get your state esthetician license, add relevant training, and get hired into a medical setting.' },
    { q: 'Is there a medical esthetician license?', a: 'In most states, no. Check your state board for any advanced category it may define.' },
    { q: 'How long does it take?', a: 'Esthetician program length varies by state; additional training adds time after licensure.' },
    { q: 'What should I ask a school?', a: 'Whether the program leads to a state license and whether it is board-approved — in writing.' },
    { q: 'Do I need extra certifications?', a: 'Not always required, but they help with both hiring and pay — within what your state permits you to perform.' },
  ],
  related: [
    { href: '/en/what-is-a-medical-esthetician', label: 'What Is a Medical Esthetician?' },
    { href: '/en/medical-esthetician-salary', label: 'Medical Esthetician Salary: Realistic Ranges' },
    { href: '/en/esthetician-scope-of-practice', label: 'Esthetician Scope of Practice: Know Your Limits' },
  ],
}
