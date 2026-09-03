import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, MED_DISCLAIMER, PMU_TATTOO_NOTE, US_STATE_NOTE } from './common'

export const microbladingLicensing: EnPage = {
  path: '/en/microblading-licensing',
  title: 'Microblading Licensing: What US States Require',
  h1: 'Microblading Licensing Requirements',
  description:
    'In many US states microblading is regulated as tattooing under health departments, not cosmetology boards. What that means for practitioners and clients.',
  keywords: ['microblading licensing', 'microblading license requirements', 'microblading certification', 'permanent makeup license'],
  category: 'Brows',
  stage: 8,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**In many US states microblading is regulated as tattooing, administered by health departments rather than cosmetology boards.** A cosmetology or esthetics licence alone is generally not sufficient. Requirements differ by state and sometimes by county.',
  blocks: [
    { t: 'note', tone: 'warn', text: PMU_TATTOO_NOTE },
    { t: 'h2', id: 'two-agencies', text: 'Two agencies, not one' },
    { t: 'p', text: 'This is the part that catches people out. Cosmetology boards license cosmetologists and estheticians; **body art and tattooing are frequently regulated separately**, often by a state or county health department.' },
    {
      t: 'table',
      head: ['Agency', 'Typically covers'],
      rows: [
        ['State cosmetology board', 'Cosmetology, esthetics, nails - scope of practice'],
        ['State or county health department', 'Body art, tattooing, facility registration, inspection'],
        ['Local health authority', 'Premises permits in some jurisdictions'],
      ],
    },
    { t: 'p', text: '**Check both.** An answer from your cosmetology board that says nothing about microblading does not mean it is unregulated - it more often means the rule lives with the other agency.' },
    { t: 'h2', id: 'common-requirements', text: 'What is commonly required' },
    {
      t: 'table',
      head: ['Requirement', 'Notes'],
      rows: [
        ['Body art or tattoo practitioner registration', 'Common where PMU is treated as tattooing'],
        ['Bloodborne pathogen training', 'Very widely required, often annual'],
        ['Training hours in the technique', 'Varies widely by state'],
        ['Facility registration and inspection', 'The premises are regulated as well as the person'],
        ['First aid or CPR', 'Required in some jurisdictions'],
        ['Sharps disposal compliance', 'A public health requirement'],
      ],
    },
    { t: 'note', tone: 'warn', text: US_STATE_NOTE },
    { t: 'h2', id: 'certificates', text: 'Certificates are not licences' },
    { t: 'p', text: 'Private academies issue certificates on completing a course. **A certificate is evidence of training; it is not government authorisation to practise.** Those are different things, and a course provider is not the one who decides which you need.' },
    {
      t: 'table',
      head: ['Claim', 'Treat with care'],
      rows: [
        ['"Certified in 3 days"', 'Certified by whom, and does your state accept it?'],
        ['"Licensed and certified"', 'Ask which licence, issued by which agency'],
        ['"Your cosmetology licence covers it"', 'Frequently not true - verify with the health department'],
        ['"It is semi-permanent so it is not a tattoo"', 'Regulators generally disagree'],
        ['"Nationally certified"', 'There is no single national licence for this'],
      ],
    },
    { t: 'h2', id: 'how-to-check', text: 'How to check your state' },
    {
      t: 'ol',
      items: [
        '**Search your state health department** for body art or tattoo regulations.',
        '**Search your state cosmetology board** for permanent makeup or microblading.',
        '**Check county and city requirements** - premises permits are often local.',
        '**Ask in writing and keep the reply.**',
        '**Re-check periodically** - several states have revised these rules as the service has grown.',
      ],
    },
    { t: 'h2', id: 'for-clients', text: 'What clients can ask' },
    { t: 'p', text: 'You do not need to know your state rules in detail to ask useful questions. Five will tell you most of what matters.' },
    {
      t: 'ul',
      items: [
        '**Are you registered to perform body art in this state or county?**',
        '**Is this facility registered and inspected?**',
        '**Is your bloodborne pathogen certification current?**',
        '**Are needles and blades single-use?**',
        '**Can I see healed photos of your work?**',
      ],
    },
    { t: 'p', text: 'A practitioner operating properly will answer all five without hesitation. Hesitation on the first three is the meaningful signal.' },
    { t: 'h2', id: 'training-hours', text: 'On training hours' },
    { t: 'p', text: 'Required hours vary widely, and the number a course advertises is not necessarily the number your state accepts. The two are set by different parties.' },
    {
      t: 'table',
      head: ['Question', 'Who answers it'],
      rows: [
        ['How many hours does the course run?', 'The academy'],
        ['How many hours does my state require?', 'The regulator'],
        ['Does my state accept this course?', 'The regulator'],
        ['What must my facility meet?', 'The health department'],
        ['What does my insurer require?', 'The insurer'],
      ],
    },
    { t: 'p', text: '**Only the middle rows are binding.** Verify the requirement with the agency before paying for a course, rather than after — course fees are rarely refundable on a scope misunderstanding.' },
    { t: 'h2', id: 'why-it-matters', text: 'Why the distinction has consequences' },
    { t: 'p', text: 'Scope questions read like paperwork until something goes wrong, at which point they decide who is accountable and whether anyone is covered.' },
    {
      t: 'table',
      head: ['For', 'What is at stake'],
      rows: [
        ['The client', 'Whether the practitioner is trained and accountable'],
        ['The client', 'Whether the premises meet public health standards'],
        ['The practitioner', 'Their licence, and possible enforcement action'],
        ['The practitioner', 'Whether insurance would respond to a claim'],
        ['The studio', 'Facility registration and inspection status'],
      ],
    },
    { t: 'p', text: '**This is a procedure that breaks the skin barrier.** The registration and inspection requirements exist for infection control rather than as administrative overhead.' },
  ],
  faq: [
    { q: 'Do I need a cosmetology licence to microblade?', a: 'It varies, but a cosmetology licence alone is generally not sufficient. Many states require separate body art or tattoo registration through a health department.' },
    { q: 'Which agency regulates microblading?', a: 'Frequently a state or county health department under body art rules, rather than the cosmetology board. Check both.' },
    { q: 'Is a training certificate enough?', a: 'No. A certificate documents training; a licence or registration is government authorisation. They are separate things.' },
    { q: 'Is there a national microblading licence?', a: 'No. Requirements are set state by state and sometimes locally.' },
    { q: 'How do I check my state?', a: 'Contact your state health department and your state cosmetology board in writing, and keep the replies.' },
  ],
  related: [
    { href: '/en/what-is-microblading', label: 'What Is Microblading?' },
    { href: '/en/choosing-a-microblading-artist', label: 'How to Choose a Microblading Artist' },
    { href: '/en/microblading-cost', label: 'How Much Does Microblading Cost?' },
  ],
}
