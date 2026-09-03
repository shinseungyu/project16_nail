import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, MED_DISCLAIMER, PMU_TATTOO_NOTE, US_STATE_NOTE } from './common'

export const microbladingRemoval: EnPage = {
  path: '/en/microblading-removal',
  title: 'Can Microblading Be Removed? Options and Costs',
  h1: 'Can Microblading Be Removed?',
  description:
    'Removal is possible through laser or saline but takes multiple sessions, costs more than the original, and may not clear the pigment completely.',
  keywords: ['microblading removal', 'remove microblading', 'microblading laser removal', 'saline removal'],
  category: 'Brows',
  stage: 8,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**Yes, but it takes multiple sessions, costs more than the original procedure, and complete clearance is not guaranteed.** Laser and saline are the two main routes, and both need a qualified provider.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_DISCLAIMER },
    { t: 'h2', id: 'options', text: 'The options' },
    {
      t: 'table',
      head: ['Method', 'Sessions', 'Cost each', 'Notes'],
      rows: [
        ['Laser', '3 - 8+', '$200 - 500', 'Pigment colour affects response'],
        ['Saline', '3 - 8+', '$150 - 400', 'Draws pigment out through the skin'],
        ['Waiting for it to fade', 'n/a', 'Free', 'Fades but often leaves residue'],
        ['Colour correction over the top', '1 - 3', '$300 - 800', 'Covers rather than removes'],
      ],
    },
    { t: 'p', text: '**Total removal cost commonly exceeds the original procedure**, sometimes by several times. That is the practical argument for choosing an artist carefully in the first place.' },
    { t: 'h2', id: 'laser-vs-saline', text: 'Laser vs saline' },
    {
      t: 'table',
      head: ['', 'Laser', 'Saline'],
      rows: [
        ['Mechanism', 'Breaks the pigment down', 'Lifts pigment up through the skin'],
        ['Pigment colours', 'Some respond better than others', 'Less colour-dependent'],
        ['Healing per session', 'Days', 'Similar, with scabbing'],
        ['Spacing', '6 - 8 weeks', '6 - 8 weeks'],
        ['Provider', 'Often a medical or laser-licensed setting', 'Often a PMU artist trained in it'],
      ],
    },
    { t: 'p', text: 'Which is appropriate depends on the pigment, its depth, your skin, and how much needs to come out. **That is an assessment, not a menu choice** - a consultation with a qualified removal provider is the starting point.' },
    { t: 'h2', id: 'expectations', text: 'Realistic expectations' },
    {
      t: 'ul',
      items: [
        '**Complete clearance is not guaranteed.** Some residual pigment often remains.',
        '**It takes months.** Sessions are spaced six to eight weeks apart.',
        '**Pigment can shift colour during removal** before it lightens.',
        '**Scarring is possible**, particularly with aggressive treatment.',
        '**The area may need months to settle** before new work can go over it.',
      ],
    },
    { t: 'note', tone: 'warn', text: '**Do not attempt removal at home.** Products sold for DIY pigment removal can cause burns and scarring. This is a procedure for a qualified provider in an appropriate setting.' },
    { t: 'h2', id: 'alternatives', text: 'Before committing to removal' },
    { t: 'p', text: 'Removal is the right answer less often than people assume. Two alternatives resolve many cases at lower cost and lower risk.' },
    {
      t: 'table',
      head: ['If the problem is', 'Consider'],
      rows: [
        ['Colour is slightly off', 'Colour correction over the top'],
        ['Too dark overall', 'Waiting - it lightens substantially as it heals'],
        ['The shape is wrong', 'Removal or lightening is usually needed'],
        ['Patchy after the first session', 'Wait for the touch-up - this is expected'],
        ['You simply want it gone', 'Removal'],
      ],
    },
    { t: 'p', text: '**The fourth row catches a lot of people.** Patchiness at two to four weeks is the normal healing stage, and the touch-up exists to address it. Booking removal at that point is acting on incomplete information.' },
    { t: 'h2', id: 'finding-provider', text: 'Finding a removal provider' },
    {
      t: 'ol',
      items: [
        '**Ask about their experience with PMU removal specifically**, not tattoo removal generally.',
        '**Ask for healed before-and-after photos** of removal work.',
        '**Confirm their licensing** - laser use is regulated and varies by state.',
        '**Ask how many sessions they estimate**, and what the total would cost.',
        '**Ask what result is realistic**, including whether residue is likely.',
      ],
    },
    { t: 'h2', id: 'timeline', text: 'What the process looks like over time' },
    { t: 'p', text: 'Removal is a course of treatment rather than an appointment, and understanding the shape of it prevents the mid-way discouragement that makes people stop halfway.' },
    {
      t: 'table',
      head: ['Stage', 'What happens'],
      rows: [
        ['Consultation', 'Assessment of pigment, depth and realistic outcome'],
        ['Session 1', 'Some lightening; healing over days'],
        ['Weeks 6 - 8', 'Assess, then session 2'],
        ['Sessions 3 - 5', 'Progressive lightening, diminishing returns'],
        ['Final assessment', 'Decide whether to continue or accept residue'],
        ['If covering with new work', 'Wait months for the area to settle'],
      ],
    },
    { t: 'p', text: '**Stopping partway through leaves a partially lightened result**, which can look worse than either endpoint. Budget for the full course before starting the first session.' },
    { t: 'h2', id: 'avoiding', text: 'Avoiding the situation entirely' },
    { t: 'p', text: 'Removal is expensive, slow and uncertain, which makes prevention worth disproportionate attention at the booking stage.' },
    {
      t: 'table',
      head: ['At the start', 'Prevents'],
      rows: [
        ['Reviewing healed photos', 'Choosing on fresh work that looked good for an hour'],
        ['Approving the mapped shape carefully', 'A shape you dislike for years'],
        ['Going lighter than you think you want', 'Too-dark results - it can be built up later'],
        ['Discussing your skin type honestly', 'A technique that will not hold on your skin'],
        ['Waiting for the touch-up before judging', 'Booking removal during normal healing'],
      ],
    },
    { t: 'p', text: '**Going slightly lighter than your instinct is the most useful of these.** Adding pigment at the touch-up is straightforward; taking it away is this article.' },
  ],
  faq: [
    { q: 'Can microblading be fully removed?', a: 'Often substantially, but complete clearance is not guaranteed and some residual pigment may remain.' },
    { q: 'How much does removal cost?', a: 'Typically $150 to $500 per session across three to eight or more sessions, usually totalling more than the original procedure.' },
    { q: 'How long does removal take?', a: 'Months. Sessions are spaced six to eight weeks apart.' },
    { q: 'Is laser or saline better?', a: 'It depends on the pigment, its depth and your skin. A consultation with a qualified removal provider is the way to decide.' },
    { q: 'Can I remove it at home?', a: 'No. Home removal products can cause burns and scarring.' },
  ],
  related: [
    { href: '/en/how-long-does-microblading-last', label: 'How Long Does Microblading Last?' },
    { href: '/en/microblading-cost', label: 'How Much Does Microblading Cost?' },
    { href: '/en/choosing-a-microblading-artist', label: 'How to Choose a Microblading Artist' },
  ],
}
