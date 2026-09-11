import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, SCHOOL_NOTE } from './common'

export const howToBecomeMassageTherapist: EnPage = {
  path: '/en/how-to-become-massage-therapist',
  title: 'How to Become a Massage Therapist: Steps and Cost',
  h1: 'How to Become a Massage Therapist',
  description:
    'Training hours, licensing, cost and the questions to ask a program before enrolling. Requirements vary by state.',
  keywords: ['how to become a massage therapist', 'massage therapy school', 'massage therapist license'],
  category: 'Careers & Pay',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**Complete an approved program, pass the required exam, and obtain your state license.** Required hours, exams and regulations vary significantly by state, and a small number of states regulate at local level instead. **Check your state board before choosing a program, not after.**',
  blocks: [
    { t: 'note', tone: 'info', text: SCHOOL_NOTE },
    { t: 'h2', id: 'the-path', text: 'The path' },
    {
      t: 'table',
      head: ['Step', 'Note'],
      rows: [
        ['1. Check your state’s requirements', 'Do this before anything else'],
        ['2. Choose a board-approved program', 'Required hours vary by state'],
        ['3. Complete training', 'Anatomy, technique, ethics, business'],
        ['4. Pass the required exam', 'Requirements vary by state'],
        ['5. Apply for licensure', 'Background check is common'],
        ['6. Liability insurance', 'Often required'],
        ['7. Continuing education', 'Renewal requirements vary'],
      ],
    },
    {
      t: 'p',
      text: 'Step one is listed first because doing it second is how people end up with hours that do not transfer. Programs are approved state by state, and a program that satisfies one state’s requirements may leave you short in the state next door.',
    },
    { t: 'h2', id: 'costs', text: 'Costs to budget for' },
    {
      t: 'table',
      head: ['Item', 'Note'],
      rows: [
        ['Tuition', 'Varies enormously — compare several programs'],
        ['Table', 'If not provided'],
        ['Linens, oils, supplies', 'Ongoing'],
        ['Textbooks', 'Sometimes bundled'],
        ['Exam fee', 'Set by the exam body'],
        ['License fee and renewals', 'State-set'],
        ['Liability insurance', 'Annual'],
        ['Continuing education', 'Ongoing'],
      ],
    },
    {
      t: 'p',
      text: 'Get the all-in figure in writing before enrolling. Tuition is what gets advertised and is often not the majority of first-year spending once a table, supplies, exam and licence fees are added.',
    },
    { t: 'h2', id: 'questions-for-programs', text: 'Questions for any program' },
    {
      t: 'ol',
      items: [
        '**"Are you approved by my state board?"**',
        '"Does this meet my state’s required hours?"',
        '"What is the total cost including everything?"',
        '**"What is your exam pass rate, and can you show me the data?"**',
        '"What is your job placement rate and how is it measured?"',
        '"How much hands-on practice is included?"',
        '**"Do you teach business and self-employment skills?"**',
        '"Are the salary figures you advertise sourced from BLS?"',
      ],
    },
    {
      t: 'note',
      tone: 'info',
      title: 'Question seven matters more than people expect',
      text: 'A large share of massage therapists end up self-employed or on booth rent. A program that teaches technique brilliantly and skips pricing, bookkeeping and contracts leaves a real gap — see [Self-Employed vs Employed Massage Therapist](/en/massage-therapist-self-employed).',
    },
    { t: 'h2', id: 'red-flags', text: 'Red flags' },
    {
      t: 'table',
      head: ['Claim or behaviour', 'Why it is a flag'],
      rows: [
        ['Vague about state board approval', 'The most important thing to verify'],
        ['"Guaranteed placement"', 'Rarely enforceable'],
        ['Salary figures with no cited source', 'Compare against BLS'],
        ['Pressure to enrol immediately', 'A sales tactic on a multi-thousand-dollar decision'],
        ['Very short programs claiming full licensure', 'Check against your state’s required hours'],
        ['No hands-on practice hours stated', 'Technique is not learned from slides'],
      ],
    },
    { t: 'h2', id: 'what-the-work-is-like', text: 'What the work is actually like' },
    {
      t: 'table',
      head: ['Reality', 'Note'],
      rows: [
        ['Physically demanding', 'The main career consideration'],
        ['Client-facing — communication matters', 'As much as technique'],
        ['Often self-employed or booth-rent', 'Business skills matter'],
        ['Evenings and weekends are common', 'That is when demand is'],
        ['Building a client base takes time', 'Income ramps slowly at first'],
        ['Emotionally demanding for some', 'Clients disclose a lot on the table'],
      ],
    },
    {
      t: 'p',
      text: 'The first row is the one that determines how long you stay in the profession, and it is worth understanding before you enrol rather than in year four. [Massage Therapist Career Longevity](/en/massage-therapist-career-longevity) covers what the physical load actually looks like and what practitioners do about it.',
    },
    {
      t: 'p',
      text: 'Talk to working therapists in your area before enrolling. They are more candid than any brochure, and they will tell you which local employers keep their people — see [Massage Therapist Salary](/en/massage-therapist-salary) for what to ask about pay.',
    },
  ],
  faq: [
    { q: 'How do I become a massage therapist?', a: 'Complete a board-approved program, pass the required exam, and get licensed. Requirements vary by state.' },
    { q: 'How long does training take?', a: 'Required hours vary by state — check your state board before choosing a program.' },
    { q: 'How much does it cost?', a: 'Tuition varies enormously, and you should budget for supplies, a table, exam fees and licensing on top.' },
    { q: 'Is it licensed everywhere?', a: 'Most states license massage therapists; a few regulate locally instead. Check your state.' },
    { q: 'What should I ask a school?', a: 'Board approval, exam pass rate, total cost, and whether business skills are taught.' },
  ],
  related: [
    { href: '/en/massage-therapist-salary', label: 'Massage Therapist Salary: What You Actually Earn' },
    { href: '/en/massage-therapist-career-longevity', label: 'Massage Therapist Career Longevity' },
    { href: '/en/massage-therapist-self-employed', label: 'Self-Employed vs Employed Massage Therapist' },
  ],
}
