import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, MED_ESTHETICIAN_NOTE } from './common'

export const medicalEstheticianVsEsthetician: EnPage = {
  path: '/en/medical-esthetician-vs-esthetician',
  title: 'Medical Esthetician vs Esthetician: Compared',
  h1: 'Medical Esthetician vs Esthetician',
  description:
    'Usually the same license, different setting. What actually changes — oversight, services, pay and daily work.',
  keywords: ['medical esthetician vs esthetician', 'difference between medical esthetician and esthetician'],
  category: 'Careers & Pay',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**In most states they hold the same license.** What differs is the work setting, the level of physician oversight, the services performed and the pay. The job title describes where you work, not a higher credential you earned.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_ESTHETICIAN_NOTE },
    { t: 'h2', id: 'side-by-side', text: 'Side by side' },
    {
      t: 'table',
      head: ['', 'Esthetician', 'Medical setting esthetician'],
      rows: [
        ['License', 'Esthetician', 'Usually the same license'],
        ['Setting', 'Spa, salon, self-employed', 'Dermatology, plastic surgery, med spa'],
        ['Oversight', 'Salon management', 'Often physician oversight'],
        ['Chemical peels', 'Lighter, per state scope', 'Deeper, where scope and supervision permit'],
        ['Device treatments', 'Limited', 'More, where permitted'],
        ['Pre/post-procedure care', 'Rarely', 'A core part of the role'],
        ['Documentation', 'Minimal', 'Clinical records'],
        ['Pace', 'Slower, experience-focused', 'Faster, procedure-focused'],
        ['Pay', 'Generally lower', 'Generally higher'],
      ],
    },
    {
      t: 'p',
      text: 'Read that first row carefully, because it is the one that most career content gets wrong. Moving into a medical setting is usually a change of employer, not a change of credential.',
    },
    { t: 'h2', id: 'scope-of-practice', text: 'Scope of practice — the critical part' },
    {
      t: 'p',
      text: 'What you may perform is set by your state board. Not by your employer, not by your job title, and not by the physician you work under — although supervision rules can narrow what is permitted further.',
    },
    {
      t: 'table',
      head: ['Reality', 'Consequence'],
      rows: [
        ['Scope varies substantially between states', 'A routine service in one state is out of scope in another'],
        ['Some states permit devices others prohibit entirely', 'Certifications do not travel automatically'],
        ['Physician supervision rules differ by state', 'The same service may require oversight in one state and not another'],
        ['"My employer said it was fine" is not a legal defence', 'The license is yours, and so is the exposure'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Verify it yourself',
      text: 'Check your scope directly with your state board. Do not rely on an employer, a school, or an article — including this one. [Esthetician Scope of Practice](/en/esthetician-scope-of-practice) covers how to find the current regulations rather than a summary of them.',
    },
    { t: 'h2', id: 'daily-work', text: 'What the daily work actually feels like' },
    {
      t: 'p',
      text: 'The pay difference gets all the attention, but the day is genuinely different and that matters more for whether you last in the role. A spa day is built around the client experience: longer appointments, massage, low lighting, conversation. A medical day is built around throughput: shorter appointments, protocols, charting between patients, and people who are often anxious rather than relaxed.',
    },
    {
      t: 'table',
      head: ['You prefer', 'Consider'],
      rows: [
        ['Relaxing, experience-led work', 'Spa'],
        ['Building long-term client relationships at your own pace', 'Spa'],
        ['A clinical environment and procedures', 'Medical setting'],
        ['Higher earning potential', 'Medical setting'],
        ['Structured schedules and protocols', 'Medical setting'],
        ['Autonomy and eventually self-employment', 'Spa, then your own business'],
      ],
    },
    {
      t: 'p',
      text: 'Neither is the advanced version of the other. People move in both directions, and estheticians who leave medical settings usually cite pace and charting rather than pay.',
    },
    { t: 'h2', id: 'moving-across', text: 'Moving from spa to medical' },
    {
      t: 'ol',
      items: [
        '**You likely already hold the required license** — confirm with your state board first.',
        '**Check for any advanced or master category** your state may define.',
        '**Add training**: peels, devices, post-procedure care.',
        '**Learn clinical documentation.** This is the skill spa estheticians most often lack, and it is learnable.',
        '**Apply** — many practices train on their own devices and prefer to.',
      ],
    },
    {
      t: 'p',
      text: 'The transition is usually less about new licensing and more about new skills and a new setting. See [How to Become a Medical Esthetician](/en/how-to-become-medical-esthetician) if you are starting from scratch rather than moving across, and [Medical Esthetician Salary](/en/medical-esthetician-salary) for what the move is worth financially.',
    },
  ],
  faq: [
    { q: 'Is a medical esthetician a different license?', a: 'In most states, no — it is the same esthetician license.' },
    { q: 'What is the real difference?', a: 'Setting, physician oversight, services performed and pay.' },
    { q: 'Can a medical esthetician do more?', a: 'Only what state scope of practice permits, which varies substantially by state.' },
    { q: 'Which pays more?', a: 'Medical settings generally report higher pay, driven mostly by setting and commission structure.' },
    { q: 'How do I switch?', a: 'Add relevant training and apply. In most states no new license is required — confirm with your state board.' },
  ],
  related: [
    { href: '/en/what-is-a-medical-esthetician', label: 'What Is a Medical Esthetician?' },
    { href: '/en/medical-esthetician-salary', label: 'Medical Esthetician Salary: Realistic Ranges' },
    { href: '/en/esthetician-scope-of-practice', label: 'Esthetician Scope of Practice: Know Your Limits' },
  ],
}
