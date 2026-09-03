import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, MED_STATE_SCOPE } from './common'

export const whoCanPerformChemicalPeels: EnPage = {
  path: '/en/who-can-perform-chemical-peels',
  title: 'Who Can Perform Chemical Peels? Scope by Depth',
  h1: 'Who Can Legally Perform Chemical Peels?',
  description:
    'Superficial peels often fall within esthetics scope; medium and deep generally do not. How the rules are structured and where to verify them.',
  keywords: ['who can perform chemical peels', 'can estheticians do chemical peels', 'chemical peel scope of practice'],
  category: 'Skin Treatments',
  stage: 10,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**Superficial peels commonly fall within esthetics scope; medium and deep peels generally require medical qualification.** But the specific line — often defined by acid type and concentration rather than by the word "superficial" — **varies by state.**',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_STATE_SCOPE },
    { t: 'h2', id: 'how-rules-work', text: 'How the rules are typically structured' },
    {
      t: 'table',
      head: ['Depth', 'Common approach'],
      rows: [
        ['Superficial', 'Often within esthetics scope, sometimes with concentration limits'],
        ['Medium', 'Usually restricted to medical professionals, or supervised delegation'],
        ['Deep', 'Physician, often with anaesthesia'],
      ],
    },
    { t: 'p', text: '**Many states define the boundary by acid concentration and pH** rather than by a descriptive word. That means the answer is not intuitive: two products both described as "superficial peels" by their manufacturers can fall on opposite sides of the line in the same state. You have to read the actual rule.' },
    { t: 'h2', id: 'for-clients', text: 'For clients' },
    { t: 'p', text: 'You do not need to research state regulations before booking. You need five questions.' },
    {
      t: 'ol',
      items: [
        '**What depth is this peel?**',
        '**What licence do you hold?**',
        'Is this within your scope in this state?',
        'Who supervises, if supervision is required?',
        'What happens if I react — who do I call, and when?',
      ],
    },
    { t: 'p', text: 'None of these are rude, and a competent provider answers them in about thirty seconds. **Hesitation is the signal**, not the content of the answer.' },
    { t: 'h2', id: 'for-professionals', text: 'For professionals' },
    {
      t: 'table',
      head: ['Consideration', 'Note'],
      rows: [
        ['Acid type and concentration limits', 'The usual regulatory mechanism'],
        ['Scope of practice', 'Exceeding it puts your licence at risk'],
        ['Insurance', 'Out-of-scope work is generally excluded from cover'],
        ['Medical director agreements', 'Required in some settings and states'],
        ['Training certificates', 'Necessary, not sufficient'],
        ['Product manufacturer restrictions', 'Some products are professional-only by tier'],
      ],
    },
    { t: 'note', tone: 'warn', title: 'A manufacturer selling you a product does not confirm you may legally use it', text: 'Manufacturers sell; state boards regulate. Professional tiering in a product catalogue is a commercial decision, and it does not map onto your scope of practice.' },
    { t: 'h2', id: 'where-to-verify', text: 'Where to verify' },
    {
      t: 'ol',
      items: [
        '**Your state board of cosmetology** — esthetics scope and any concentration limits.',
        '**Your state medical board** — delegation and supervision rules, where they apply.',
        'Your insurer, on this specific service.',
        'Your employer or medical director policy, which may be stricter than the state rule.',
      ],
    },
    { t: 'p', text: 'Boards publish scope, but it is often inside a rule rather than an FAQ, and search results tend to surface training providers before regulators. **A written enquiry to the board is the reliable route**, and keeping the reply is worth the few minutes it takes.' },
    { t: 'h2', id: 'grey-areas', text: 'The grey areas that cause problems' },
    { t: 'p', text: 'Most scope disputes are not about someone knowingly working outside their licence. They are about situations where the rule does not obviously apply.' },
    {
      t: 'table',
      head: ['Situation', 'Why it is difficult'],
      rows: [
        ['The state rule does not mention peels by name', 'Silence is not permission'],
        ['A product marketed as "esthetician-safe"', 'A marketing term, not a legal category'],
        ['Layering superficial peels to go deeper', 'Depth achieved may exceed what scope allows'],
        ['Working under a physician who is rarely on site', 'Delegation rules often specify supervision level'],
        ['Practice moved from another state', 'Scope does not travel with you'],
        ['A rule that changed since you trained', 'Boards revisit these as services become common'],
      ],
    },
    { t: 'p', text: 'The third row is worth dwelling on. **Depth is a function of the treatment, not the label on the bottle.** Repeated layers and extended contact time can take a nominally superficial product past superficial, and the regulatory question follows the depth achieved.' },
    { t: 'h2', id: 'why-it-matters', text: 'What is actually at stake' },
    {
      t: 'table',
      head: ['For', 'What is at stake'],
      rows: [
        ['The client', 'Whether the person treating them is trained for that depth'],
        ['The client', 'Whether there is insurance behind an adverse outcome'],
        ['The professional', 'Their licence'],
        ['The professional', 'Whether a claim would be covered at all'],
        ['The business', 'Premises requirements and medical director obligations'],
      ],
    },
    { t: 'p', text: 'Scope questions read like paperwork, and they decide something concrete: who answers for it if something goes wrong. That question only has a good answer if it was settled before the appointment.' },
  ],
  faq: [
    { q: 'Can estheticians do chemical peels?', a: 'Superficial peels, commonly yes. Medium and deep peels generally not. The specific line varies by state and is often set by acid concentration.' },
    { q: 'What defines the limit?', a: 'Often acid type, concentration and pH rather than a descriptive term like "superficial". That is why the answer is not intuitive.' },
    { q: 'Is a certification enough?', a: 'No. Training is necessary but scope is set by your state board, not by the provider of a course.' },
    { q: 'Do I need a medical director?', a: 'In some settings and states, yes. Verify with your state board and, where relevant, the state medical board.' },
    { q: 'Where do I check?', a: 'Your state board of cosmetology and your state medical board. Ask in writing and keep the reply.' },
  ],
  related: [
    { href: '/en/what-is-a-chemical-peel', label: 'What Is a Chemical Peel?' },
    { href: '/en/cosmetology-license-requirements', label: 'Cosmetology License Requirements' },
    { href: '/en/who-can-perform-microneedling', label: 'Who Can Legally Perform Microneedling?' },
  ],
}
