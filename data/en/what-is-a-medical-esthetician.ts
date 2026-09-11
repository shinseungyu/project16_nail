import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, MED_ESTHETICIAN_NOTE } from './common'

export const whatIsAMedicalEsthetician: EnPage = {
  path: '/en/what-is-a-medical-esthetician',
  title: 'What Is a Medical Esthetician? The Honest Answer',
  h1: 'What Is a Medical Esthetician?',
  description:
    'In most US states there is no separate medical esthetician license. It is an industry term for estheticians working in medical settings.',
  keywords: ['medical esthetician', 'what is a medical esthetician', 'medical esthetician license'],
  category: 'Careers & Pay',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**In most US states, "medical esthetician" is not a separate license.** It is an industry term for a licensed esthetician who works in a medical setting — a dermatology practice, a plastic surgery office or a medical spa — usually with additional training and under physician oversight. **Your scope of practice is set by your state board, not by the job title.**',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_ESTHETICIAN_NOTE },
    { t: 'h2', id: 'what-schools-dont-lead-with', text: 'What schools do not lead with' },
    {
      t: 'p',
      text: 'Search this term and most of the first page is school marketing. That matters, because the way those pages are written implies a credential that in most states does not exist — and a program is being sold on the strength of that implication.',
    },
    {
      t: 'table',
      head: ['Common claim', 'Reality in most states'],
      rows: [
        ['"Get your medical esthetician license"', 'There is usually no such license'],
        ['"A higher-level certification"', 'Additional training, not a separate credential'],
        ['"Required to work in a med spa"', 'Requirements are set by the state and the employer'],
      ],
    },
    {
      t: 'p',
      text: 'What actually exists in most states is a stack rather than a ladder: a state esthetician license, plus whatever additional training you have accumulated, plus a job in a medical setting. Put those together and people call you a medical esthetician. Take away the job and the term stops applying, which tells you it was describing employment rather than a credential.',
    },
    {
      t: 'note',
      tone: 'info',
      title: 'Some states do have additional categories',
      text: 'A small number of states define advanced or master esthetician categories with their own requirements. Whether yours does, and what it covers, is a question only your state board can answer.',
    },
    { t: 'h2', id: 'what-the-role-involves', text: 'What the role usually involves' },
    {
      t: 'table',
      head: ['Common duties', 'Note'],
      rows: [
        ['Pre- and post-procedure skincare', 'Supporting physician-performed procedures'],
        ['Chemical peels', 'Depth and strength limited by state scope'],
        ['Dermaplaning', 'Where permitted'],
        ['Device-based treatments', 'Varies substantially by state'],
        ['Client education and product guidance', 'Not diagnosis'],
        ['Patient intake and documentation', 'More clinical than a spa role'],
      ],
    },
    {
      t: 'p',
      text: 'Two estheticians with identical training, working in different states, can have meaningfully different permitted scopes. That is not a quirk — licensing is state-by-state rather than federal, and each board sets its own boundaries. [Esthetician Scope of Practice](/en/esthetician-scope-of-practice) goes through how to verify yours.',
    },
    { t: 'h2', id: 'vs-spa', text: 'How it differs from a spa esthetician' },
    {
      t: 'table',
      head: ['', 'Spa esthetician', 'Medical setting esthetician'],
      rows: [
        ['License', 'Esthetician', 'Usually the same esthetician license'],
        ['Setting', 'Spa, salon', 'Dermatology, plastic surgery, med spa'],
        ['Oversight', 'Salon management', 'Often physician oversight'],
        ['Typical services', 'Facials, waxing, brows', 'Peels, pre/post-procedure care, devices'],
        ['Additional training', 'Optional', 'Usually expected'],
        ['Pay', 'Generally lower', 'Generally higher'],
      ],
    },
    {
      t: 'p',
      text: 'The license row is the surprising one, and it is the reason this cluster exists. See [Medical Esthetician vs Esthetician](/en/medical-esthetician-vs-esthetician) for the full comparison of what actually changes when you move settings.',
    },
    { t: 'h2', id: 'getting-into-the-field', text: 'Getting into the field' },
    {
      t: 'table',
      head: ['Step', 'Note'],
      rows: [
        ['1', 'Esthetician license — required hours and exams vary by state'],
        ['2', 'Check your state board for any advanced category'],
        ['3', 'Additional training in peels, devices, post-procedure care'],
        ['4', 'Employment in a medical setting'],
        ['5', 'Employer-specific device and protocol training'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'The question to ask any school, in writing',
      text: '"Does completing this program result in a state license, or a certificate issued by your school?" Those are different things, and the distinction is not always made clearly in marketing. A school that will not answer it plainly has told you something.',
    },
    {
      t: 'p',
      text: '[How to Become a Medical Esthetician](/en/how-to-become-medical-esthetician) covers the full list of questions worth asking before paying for a program, and what the red flags look like.',
    },
  ],
  faq: [
    { q: 'What is a medical esthetician?', a: 'A licensed esthetician working in a medical setting. In most US states it is not a separate license.' },
    { q: 'Do I need a special license?', a: 'Usually not — but requirements vary by state. Check your state board, which is the only authoritative source.' },
    { q: 'What can a medical esthetician do?', a: 'Scope of practice is set by your state board and often by physician supervision rules, not by the job title.' },
    { q: 'How is it different from a spa esthetician?', a: 'Setting, oversight, typical services and pay — not usually the license itself.' },
    { q: 'How do I become one?', a: 'Get your esthetician license, add relevant training, and seek employment in a medical setting.' },
  ],
  related: [
    { href: '/en/medical-esthetician-salary', label: 'Medical Esthetician Salary: Realistic Ranges' },
    { href: '/en/medical-esthetician-vs-esthetician', label: 'Medical Esthetician vs Esthetician: Compared' },
    { href: '/en/how-to-become-medical-esthetician', label: 'How to Become a Medical Esthetician' },
  ],
}
