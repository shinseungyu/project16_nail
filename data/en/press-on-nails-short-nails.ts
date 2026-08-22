import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO } from './common'

export const pressOnNailsShortNails: EnPage = {
  path: '/en/press-on-nails-short-nails',
  title: 'Press On Nails for Short or Bitten Nails: What Works',
  h1: 'Do Press On Nails Work on Short or Bitten Nails?',
  description:
    'Press ons can work on very short nails with the right sizing and adhesive. What to look for, and what to avoid.',
  keywords: ['press on nails short nails', 'press on nails bitten nails', 'press ons on short nails'],
  category: 'Nails',
  stage: 2,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Yes, though very short nails give less surface area for adhesion, so wear time is shorter.** Glue outperforms tabs here, and shorter tip lengths hold better than long ones.',
  blocks: [
    { t: 'h2', id: 'challenge', text: 'The challenge' },
    { t: 'p', text: 'Adhesion depends on contact area. A very short nail simply offers less of it, and that is a physical constraint rather than a technique problem.' },
    {
      t: 'table',
      head: ['Nail length', 'Realistic wear with glue'],
      rows: [
        ['Normal length', '1 - 2 weeks'],
        ['Short', '5 - 10 days'],
        ['Very short or bitten', '3 - 7 days'],
      ],
    },
    { t: 'h2', id: 'what-helps', text: 'What helps' },
    {
      t: 'table',
      head: ['Approach', 'Why'],
      rows: [
        ['Use glue, not tabs', 'Stronger bond on limited surface'],
        ['Choose shorter tips', 'Less leverage pulling at the bond'],
        ['Avoid extreme shapes', 'Stiletto and long coffin create leverage'],
        ['Prep meticulously', 'Every bit of surface counts'],
        ['Size precisely', 'No room for error on small nails'],
      ],
    },
    { t: 'p', text: '**Length is the lever with the biggest effect.** A long tip on a short nail is a lever arm working against a small bond every time you use your hands, and no adhesive fully compensates for that.' },
    { t: 'h2', id: 'biting', text: 'If you bite your nails' },
    { t: 'p', text: 'Press ons are often used as a deterrent, and that works for many people. Two cautions apply.' },
    {
      t: 'ul',
      items: [
        '**Do not apply over broken or sore skin.**',
        '**If you pick at the press ons, you will damage the nail underneath** — the habit transfers rather than stopping.',
      ],
    },
    { t: 'p', text: 'If picking is the pattern rather than biting, press ons can make things worse rather than better, because they give the habit something to work on that is bonded to your nail plate.' },
    { t: 'h2', id: 'growing-out', text: 'Using them while nails grow' },
    { t: 'p', text: 'Many people use press ons as cover during a growing-out phase. That works, with one condition: the removal has to be gentle every single time, because the nail underneath is already compromised.' },
    {
      t: 'table',
      head: ['Phase', 'Approach'],
      rows: [
        ['Very short, recovering', 'Short tips, glue, gentle soak-off'],
        ['Some length returning', 'Slightly longer tips, same removal care'],
        ['Nails feel thin or sore', 'Take a break rather than reapplying'],
        ['Skin broken or inflamed', 'Stop, and see a doctor if it persists'],
      ],
    },
    { t: 'note', title: 'A break is not a setback', text: 'Nail plate grows at roughly the same rate whatever you do. Wearing press ons continuously through a recovery phase does not slow it down, but repeated rough removal does undo the progress.' },
    { t: 'h2', id: 'shapes', text: 'Shapes that work on short nails' },
    { t: 'p', text: 'Shape affects both how natural the result looks and how much stress the bond takes, and on short nails the two considerations point the same way.' },
    {
      t: 'table',
      head: ['Shape', 'On short nails'],
      rows: [
        ['Short square or squoval', 'Best - minimal leverage, looks natural'],
        ['Short round', 'Good, forgiving of small sizing errors'],
        ['Short almond', 'Workable at modest length'],
        ['Long coffin or ballerina', 'High leverage, poor retention'],
        ['Stiletto', 'Worst combination'],
      ],
    },
    { t: 'p', text: 'The instinct with short nails is often to go long, because the tips are doing the work the nail cannot. That is exactly the choice that shortens wear the most.' },
    { t: 'h2', id: 'realistic', text: 'Setting a realistic plan' },
    { t: 'p', text: 'On very short nails, press ons are a several-day product rather than a two-week one, and planning around that is more satisfying than fighting it.' },
    {
      t: 'table',
      head: ['Goal', 'Approach'],
      rows: [
        ['A set for a weekend', 'Tabs, short length, no filing needed'],
        ['A working week', 'Glue, short square, meticulous prep'],
        ['Cover while growing out', 'Glue, shortest tips, gentle removal every time'],
        ['Two weeks on bitten nails', 'Not realistic - plan for a mid-week repair'],
      ],
    },
    { t: 'note', title: 'Repairs are normal here', text: 'Losing one nail mid-week on very short nails is expected rather than a failure. Keeping the set and a little glue to hand makes it a two-minute fix instead of the end of the set.' },
    { t: 'h2', id: 'prep-detail', text: 'Prep matters more here than anywhere' },
    { t: 'p', text: 'With less surface area, every square millimetre of the bond carries more load, so the steps that are merely advisable on normal nails become decisive on short ones.' },
    {
      t: 'table',
      head: ['Step', 'Why it matters more on short nails'],
      rows: [
        ['Alcohol wipe', 'A film over a small area is proportionally worse'],
        ['Buffing to matte', 'Texture is doing more of the work'],
        ['Adhesive on both surfaces', 'Maximises what little contact exists'],
        ['Full 30-second press', 'Less area means less margin for a weak set'],
        ['Waiting before water', 'A partial cure fails sooner on a small bond'],
      ],
    },
    { t: 'p', text: 'None of this is different in kind from normal application. It is the same routine with no room to skip a step.' },
  ],
  faq: [
    { q: 'Can I wear press ons on bitten nails?', a: 'Usually yes, though wear time is shorter. Do not apply over broken skin.' },
    { q: 'Which adhesive is better for short nails?', a: 'Glue, because it holds better on limited surface area than adhesive tabs do.' },
    { q: 'Should I pick short or long tips?', a: 'Shorter. Long tips create leverage that pulls them off a small bond.' },
    { q: 'Will they help me stop biting?', a: 'Many people find they do. The caution is picking, which transfers the habit and damages the nail underneath.' },
    { q: 'Do they look obvious on short nails?', a: 'Well-sized tips at moderate lengths look natural. Extreme lengths on very short nails are what looks off.' },
  ],
  related: [
    { href: '/en/press-on-nails-sizing', label: 'How to Size Press On Nails Properly' },
    { href: '/en/do-press-on-nails-damage-your-nails', label: 'Do Press On Nails Damage Your Nails?' },
    { href: '/en/how-to-apply-press-on-nails', label: 'How to Apply Press On Nails Properly' },
  ],
}
