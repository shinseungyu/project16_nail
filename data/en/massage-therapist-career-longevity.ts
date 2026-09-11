import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, MASSAGE_PAY_NOTE } from './common'

export const massageTherapistCareerLongevity: EnPage = {
  path: '/en/massage-therapist-career-longevity',
  title: 'Massage Therapist Career Longevity: The Real Issue',
  h1: 'Massage Therapist Career Longevity: How Long Do Careers Last?',
  description:
    'Physical demand shortens careers in this profession. What practitioners do to sustain it, and why it is an income question too.',
  keywords: ['massage therapist career longevity', 'how long do massage therapy careers last', 'massage therapist burnout'],
  category: 'Careers & Pay',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**Physical demand is this profession’s central career issue, and career content rarely mentions it.** Hands, wrists, shoulders and back carry cumulative load. How you manage that determines both how long you work and how much you earn across a whole career.',
  blocks: [
    { t: 'note', tone: 'info', text: MASSAGE_PAY_NOTE },
    { t: 'h2', id: 'why-income-question', text: 'Why this is an income question' },
    {
      t: 'table',
      head: ['', 'Therapist A', 'Therapist B'],
      rows: [
        ['Weekly hands-on hours', '30', '22'],
        ['Earnings per year', 'Higher', 'Lower'],
        ['Career length', '~6 years', '~20 years'],
        ['Lifetime earnings', 'Lower', 'Substantially higher'],
      ],
    },
    {
      t: 'p',
      text: 'B earns less each year and far more over a career. Content that frames maximum weekly hours as maximum income has the calculation backwards — **sustainability is the higher-earning strategy**, not the cautious alternative to one.',
    },
    {
      t: 'p',
      text: 'This connects directly to the hours arithmetic in [Massage Therapist Salary](/en/massage-therapist-salary). The reason forty hands-on hours a week is not realistic is the same reason this page exists.',
    },
    { t: 'h2', id: 'physical-demands', text: 'The physical demands' },
    {
      t: 'table',
      head: ['Area', 'Commonly reported strain'],
      rows: [
        ['Hands and thumbs', 'The most commonly discussed'],
        ['Wrists', 'Repetitive load'],
        ['Shoulders', 'Sustained overhead and forward posture'],
        ['Lower back', 'Posture over the table'],
        ['Neck', 'Looking down for long periods'],
      ],
    },
    {
      t: 'p',
      text: 'Repetitive strain is an occupational reality in this field rather than a sign of doing something wrong. That framing matters, because therapists who read early symptoms as a personal failing tend to work through them quietly.',
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Not medical advice',
      text: 'Persistent pain, numbness or weakness warrants seeing a healthcare provider. This page describes what practitioners commonly do, not what is right for your body.',
    },
    { t: 'h2', id: 'what-practitioners-do', text: 'What experienced practitioners do' },
    {
      t: 'table',
      head: ['Approach', 'Why'],
      rows: [
        ['Vary technique — forearms, elbows, body weight', 'Reduces load on hands and thumbs'],
        ['Correct table height', 'Frequently overlooked, cheap to fix'],
        ['Use body weight rather than arm strength', 'Large muscles instead of small joints'],
        ['Cap weekly hands-on hours', '20 - 25 is commonly cited as sustainable'],
        ['Strength and mobility work', 'Off the table'],
        ['Breaks between clients', 'Recovery rather than turnover only'],
        ['Receive bodywork yourself', 'Both maintenance and perspective'],
        ['Rotate modalities through the week', 'Varies the load pattern'],
      ],
    },
    {
      t: 'p',
      text: 'Table height is the one worth checking this week. It costs nothing, most therapists set it once during training and never revisit it, and the wrong height quietly loads the lower back for every session thereafter. Programs vary in how much attention they give this — one of the things worth asking about in [How to Become a Massage Therapist](/en/how-to-become-massage-therapist).',
    },
    { t: 'h2', id: 'warning-signs', text: 'Warning signs' },
    {
      t: 'table',
      head: ['Sign', 'Action'],
      rows: [
        ['Hand or wrist pain that does not resolve overnight', 'Reduce load, monitor'],
        ['Numbness or tingling', 'See a healthcare provider'],
        ['Reduced grip strength', 'See a healthcare provider'],
        ['Pain that begins earlier in each shift', 'Reduce load, get assessed'],
        ['Dreading the physical work', 'A legitimate signal, not a character issue'],
      ],
    },
    {
      t: 'p',
      text: 'Do not work through persistent symptoms. Early attention protects the career, and the cost of taking two weeks off now is small compared with the cost of the alternative.',
    },
    { t: 'h2', id: 'lower-load-paths', text: 'Career paths that reduce hands-on load' },
    {
      t: 'ul',
      items: [
        '**Teaching** at a massage program.',
        '**Supervising or managing** a practice.',
        '**Specialising in less physically demanding modalities.**',
        '**Fewer, higher-priced sessions** — specialisation supports this.',
        '**Spa or clinic management.**',
        '**Continuing education instruction.**',
        '**Product or equipment roles.**',
      ],
    },
    {
      t: 'p',
      text: 'Many experienced therapists shift toward teaching or management, which extends the career and often raises income at the same time. These are not consolation prizes; they are where a lot of the profession’s senior people end up by design.',
    },
    { t: 'h2', id: 'planning-early', text: 'Planning for it from the start' },
    {
      t: 'ol',
      items: [
        '**Cap your hours from the beginning** — do not wait for symptoms to tell you where the limit is.',
        '**Invest in technique that spares your hands**, early, while habits are still forming.',
        '**Build a returning client base** so you can eventually charge more for fewer sessions.',
        '**Specialise** — higher rates mean fewer hours for the same income.',
        '**Save as though the career has a horizon**, because it does.',
        '**Consider disability insurance.** Your hands are your income.',
        '**Develop a secondary path** before you need it.',
      ],
    },
    {
      t: 'p',
      text: 'Point four is where this page and [Self-Employed vs Employed Massage Therapist](/en/massage-therapist-self-employed) meet: raising your rate is the only lever that increases income without increasing physical load.',
    },
  ],
  faq: [
    { q: 'How long do massage therapy careers last?', a: 'Physical demand is the main limiting factor, and career length varies widely with how the workload is managed.' },
    { q: 'How many hours a week is sustainable?', a: '20 to 25 hands-on hours is commonly cited.' },
    { q: 'Which body parts are most affected?', a: 'Hands, thumbs, wrists, shoulders and lower back.' },
    { q: 'How do experienced therapists sustain it?', a: 'Varying technique, capping hours, correct table height, and receiving bodywork themselves.' },
    { q: 'What if I am in pain?', a: 'Persistent pain, numbness or weakness warrants seeing a healthcare provider. Do not work through it.' },
  ],
  related: [
    { href: '/en/massage-therapist-salary', label: 'Massage Therapist Salary: What You Actually Earn' },
    { href: '/en/massage-therapist-self-employed', label: 'Self-Employed vs Employed Massage Therapist' },
    { href: '/en/how-to-become-massage-therapist', label: 'How to Become a Massage Therapist' },
  ],
}
