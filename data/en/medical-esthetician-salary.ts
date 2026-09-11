import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, MED_ESTHETICIAN_NOTE, US_PAY_NOTE } from './common'

export const medicalEstheticianSalary: EnPage = {
  path: '/en/medical-esthetician-salary',
  title: 'Medical Esthetician Salary: Realistic Ranges',
  h1: 'Medical Esthetician Salary',
  description:
    'Reported pay by setting and experience, why medical settings pay more, and the variables that matter more than the job title.',
  keywords: ['medical esthetician salary', 'medical esthetician pay', 'how much do medical estheticians make'],
  category: 'Careers & Pay',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**Reported ranges run higher than spa esthetician pay, with meaningful variation by state, setting and experience.** Base pay, commission structure and whether services are performed on commission matter more than the title itself. Verify current figures with the Bureau of Labor Statistics and local listings before making decisions.',
  blocks: [
    { t: 'note', tone: 'info', text: US_PAY_NOTE },
    { t: 'h2', id: 'ranges-by-setting', text: 'Typical reported ranges by setting' },
    {
      t: 'table',
      head: ['Setting', 'Commonly reported range'],
      rows: [
        ['Spa / salon esthetician', 'Lower end of the profession'],
        ['Medical spa', 'Mid to upper'],
        ['Dermatology practice', 'Mid to upper'],
        ['Plastic surgery practice', 'Often the highest reported'],
        ['Product or device sales roles', 'Highly variable, commission-weighted'],
      ],
      note: 'These are directional. Figures vary substantially by state and metro area — check the Bureau of Labor Statistics and current local listings for numbers that apply where you are.',
    },
    {
      t: 'p',
      text: 'Worth reading alongside [Esthetician Salary](/en/esthetician-salary), which covers the general profession. The gap between the two is real but smaller than school marketing implies, and it comes mostly from setting and commission rather than from the title.',
    },
    { t: 'h2', id: 'what-drives-pay', text: 'What actually drives pay' },
    {
      t: 'table',
      head: ['Factor', 'Impact'],
      rows: [
        ['Metro area', 'The single largest variable'],
        ['Commission structure', 'Often larger than differences in base pay'],
        ['Retail product commission', 'Significant in many practices'],
        ['Device certifications', 'Laser and device training commands more'],
        ['Years of experience', 'Meaningful but slower-moving'],
        ['Practice volume', 'Busy practices mean more hours billed'],
        ['Building a client following', 'Compounds over time'],
      ],
    },
    {
      t: 'p',
      text: 'Two people with identical licenses in the same city can earn very differently depending on commission structure alone. This is the part worth negotiating, and it is the part most candidates do not ask about because the base rate is what gets advertised.',
    },
    { t: 'h2', id: 'compensation-structures', text: 'Compensation structures' },
    {
      t: 'table',
      head: ['Structure', 'How it works', 'Note'],
      rows: [
        ['Hourly only', 'Fixed rate', 'Predictable, lower ceiling'],
        ['Hourly + service commission', 'Base plus a percentage of services', 'Most common'],
        ['Hourly + service + retail commission', 'Adds product sales', 'Higher ceiling'],
        ['Commission only', 'Percentage of what you perform', 'Higher variance'],
        ['Salaried', 'Fixed annual', 'Less common in this field'],
      ],
    },
    {
      t: 'p',
      text: 'The questions that reveal the real number: What is the base? What is the service commission percentage? Is there retail commission, and are there sales targets attached to it? Who supplies the products? A role with a lower base and a good commission structure frequently pays more than the reverse.',
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Retail targets cut both ways',
      text: 'Retail commission raises earnings, and retail targets can turn a clinical role into a sales role. Ask what happens if targets are missed before you accept a structure built around them.',
    },
    { t: 'h2', id: 'raising-earnings', text: 'Raising your earnings' },
    {
      t: 'table',
      head: ['Lever', 'Note'],
      rows: [
        ['Device and laser certifications', 'Where your state permits them'],
        ['Advanced peel training', 'Within state scope'],
        ['Building a returning client base', 'The most durable lever'],
        ['Moving to a higher-volume practice', 'More billable hours'],
        ['Relocating to a higher-paying metro', 'Weigh against cost of living'],
        ['Negotiating commission, not just base', 'Often the bigger number'],
      ],
    },
    {
      t: 'p',
      text: 'Note that the first two levers are bounded by law, not by ambition. A laser certification is worth nothing in a state where estheticians may not operate lasers — check [Esthetician Scope of Practice](/en/esthetician-scope-of-practice) before paying for training that your state will not let you use.',
    },
    { t: 'h2', id: 'before-training-costs', text: 'Before you commit to training costs' },
    {
      t: 'ol',
      items: [
        '**Read actual local job listings** and what pay they state.',
        '**Check Bureau of Labor Statistics figures for your state**, not national averages.',
        '**Total the program cost** including kit, books and exam fees.',
        '**Ask directly whether the program leads to a state license** — see [What Is a Medical Esthetician?](/en/what-is-a-medical-esthetician) for why this question matters.',
        '**Ask for verifiable placement data**, not placement claims.',
      ],
    },
    {
      t: 'p',
      text: 'School marketing figures are not employment data. They are frequently national, frequently top-of-range, and frequently unsourced. Compare anything you are shown against BLS and real listings in the city you intend to work in.',
    },
    { t: 'note', tone: 'info', text: MED_ESTHETICIAN_NOTE },
  ],
  faq: [
    { q: 'What does a medical esthetician earn?', a: 'Reported ranges typically exceed spa esthetician pay, with wide variation by state and setting. Check BLS for figures where you are.' },
    { q: 'Which setting pays most?', a: 'Plastic surgery and dermatology practices are commonly reported at the higher end.' },
    { q: 'What affects pay most?', a: 'Metro area and commission structure — often more than the job title or years of experience.' },
    { q: 'How do I earn more?', a: 'Device certifications within your state’s scope, and building a returning client base.' },
    { q: 'Where do I find reliable figures?', a: 'The Bureau of Labor Statistics and current local job listings. Not school marketing materials.' },
  ],
  related: [
    { href: '/en/what-is-a-medical-esthetician', label: 'What Is a Medical Esthetician?' },
    { href: '/en/how-to-become-medical-esthetician', label: 'How to Become a Medical Esthetician' },
    { href: '/en/esthetician-salary', label: 'Esthetician Salary: What You Actually Take Home' },
  ],
}
