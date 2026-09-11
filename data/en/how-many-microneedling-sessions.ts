import type { EnPage } from './types'
import { EN_UPDATED_BATCH7, EN_UPDATED_BATCH7_ISO, MED_DISCLAIMER } from './common'

export const howManyMicroneedlingSessions: EnPage = {
  path: '/en/how-many-microneedling-sessions',
  title: 'How Many Microneedling Sessions Do You Need?',
  h1: 'How Many Microneedling Sessions Do You Need?',
  description:
    'Providers commonly recommend a course spaced four to six weeks apart. What drives the number and how to evaluate the recommendation.',
  keywords: ['how many microneedling sessions', 'microneedling sessions needed', 'how often microneedling'],
  category: 'Skin Treatments',
  stage: 16,
  updated: EN_UPDATED_BATCH7,
  updatedIso: EN_UPDATED_BATCH7_ISO,
  lead:
    '**Providers commonly recommend a course of three to six sessions, spaced weeks apart — often four to six.** The exact number depends on what is being addressed, and it is often a standard recommendation rather than an individualised one, so it is worth asking why that number applies to you.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_DISCLAIMER },
    { t: 'h2', id: 'why-spacing', text: 'Why sessions are spaced out' },
    {
      t: 'table',
      head: ['Point', 'Why it matters'],
      rows: [
        ['Skin needs time between sessions', 'Recovery is not complete in days'],
        ['Four to six weeks is the commonly cited interval', 'Your provider sets the exact gap'],
        ['Too frequent', 'More irritation, not faster results'],
        ['Too spread out', 'Some providers suggest continuity helps'],
      ],
    },
    {
      t: 'p',
      text: 'Spacing is part of the protocol rather than a scheduling convenience, and shortening the gap is not a shortcut — [Microneedling Healing Time](/en/microneedling-healing-time) explains why the skin needs to finish responding before the next session.',
    },
    { t: 'h2', id: 'what-drives-number', text: 'What drives the recommended number' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['What is being addressed', 'Texture, scarring and fine lines differ'],
        ['Severity', 'More pronounced concerns are usually discussed over longer courses'],
        ['Needle depth', 'Deeper treatments mean longer recovery between sessions'],
        ['Your skin’s response', 'Should be reassessed as you go'],
        ['Age and skin condition', 'Affects both response and recovery'],
        ['Maintenance afterwards', 'Changes what the initial course needs to achieve'],
      ],
    },
    { t: 'h2', id: 'questions', text: 'The questions to ask' },
    {
      t: 'ol',
      items: [
        '**“Why this number of sessions for my skin specifically?”**',
        '“What will we check partway through the course?”',
        '“What happens if I see no change?”',
        '**“Is the package refundable if we stop early?”**',
        '“What depth are you using, and why?”',
        '“What maintenance do you expect afterwards?”',
      ],
    },
    {
      t: 'note',
      tone: 'info',
      title: 'Question one separates a plan from a package',
      text: 'A good answer references your skin. A vague answer means it is the default course — not necessarily wrong, but you now know to evaluate it as a standard offer rather than a tailored one.',
    },
    { t: 'h2', id: 'packages', text: 'Packages — read the terms carefully' },
    {
      t: 'table',
      head: ['Check', 'Why'],
      rows: [
        ['Expiry date', 'An expired session is money lost'],
        ['Refund policy if you stop', 'The most important term in the contract'],
        ['Whether numbing is included', 'Often charged as an add-on'],
        ['Whether add-on serums are included', 'Can change the per-session price considerably'],
        ['Transferability', 'Matters if you move or stop'],
        ['What happens if you have a reaction', 'Pausing should not forfeit what you paid'],
      ],
    },
    {
      t: 'p',
      text: 'Courses of three to six are often discounted by 10 to 20%, which makes prepaying tempting. But prepaying for a long course before you know how your skin responds carries real risk. A reasonable middle path is paying for two or three sessions, assessing, then committing. [Microneedling Cost](/en/microneedling-cost) covers what a full course totals.',
    },
    { t: 'h2', id: 'stop-or-reassess', text: 'Signs to stop or reassess' },
    {
      t: 'table',
      head: ['Sign', 'What to do'],
      rows: [
        ['No change after several sessions', 'Reassess with your provider'],
        ['Increasing irritation each time', 'Extend the spacing, or stop'],
        ['Persistent redness between sessions', 'Speak with a provider'],
        ['Skin feels compromised', 'Stop'],
        ['Any reaction that worries you', 'See a doctor'],
      ],
    },
    {
      t: 'p',
      text: 'Pain or redness that grows over days is not part of normal healing — [Microneedling Side Effects](/en/microneedling-side-effects) covers what warrants contacting a provider rather than waiting.',
    },
    { t: 'h2', id: 'maintenance', text: 'Maintenance after the course' },
    {
      t: 'p',
      text: 'Some providers suggest occasional maintenance sessions after an initial course. Whether that is necessary for you is worth asking directly — including what they expect to happen if you stop. [Microneedling Before and After](/en/microneedling-before-and-after) covers how to track whether the course actually changed anything before you commit to more.',
    },
  ],
  faq: [
    { q: 'How many microneedling sessions do I need?', a: 'Providers commonly recommend a course of three to six, spaced weeks apart. The number depends on what is being addressed.' },
    { q: 'How far apart should sessions be?', a: 'Four to six weeks is commonly cited, though your provider sets the exact interval.' },
    { q: 'Can I have sessions closer together?', a: 'More frequent sessions tend to mean more irritation rather than faster results.' },
    { q: 'Should I buy a package?', a: 'Check the expiry and refund terms first. Paying for two or three sessions and reassessing lowers your risk.' },
    { q: 'What if I see no change?', a: 'Reassess with your provider rather than continuing automatically.' },
  ],
  related: [
    { href: '/en/microneedling-before-and-after', label: 'Microneedling Before and After: What to Expect' },
    { href: '/en/microneedling-cost', label: 'Microneedling Cost' },
    { href: '/en/microneedling-healing-time', label: 'Microneedling Healing Time' },
  ],
}
