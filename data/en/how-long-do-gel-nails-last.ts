import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO } from './common'

export const howLongDoGelNailsLast: EnPage = {
  path: '/en/how-long-do-gel-nails-last',
  title: 'How Long Do Gel Nails Last? And Why Yours Lift Early',
  h1: 'How Long Do Gel Nails Last, and Why Yours Lift Early',
  description:
    'Gel nails last 2 to 3 weeks before regrowth shows, up to 4 with thorough prep. What causes lifting, and how often you actually need a fill.',
  keywords: ['how long do gel nails last', 'how often should you get a fill', 'gel nails lifting', 'gel manicure duration'],
  category: 'Treatment Guide',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Gel manicures typically last two to three weeks before regrowth is visible, and up to four weeks if prep was thorough.** Lifting before two weeks almost always traces back to preparation rather than to the product.',
  blocks: [
    { t: 'h2', id: 'determines', text: 'What actually determines it' },
    {
      t: 'table',
      head: ['Factor', 'Impact'],
      rows: [
        ['Prep quality', 'The single biggest variable'],
        ['Nail growth rate', 'Faster growth means visible regrowth sooner'],
        ['Water exposure', 'Frequent hand-washing, dishes, swimming'],
        ['Nail flexibility', 'More flexible nails stress the gel bond'],
        ['Design', 'Some finishes show regrowth far faster than others'],
      ],
    },
    { t: 'h2', id: 'prep', text: 'Why prep matters more than product' },
    {
      t: 'p',
      text: 'Gel bonds to a clean, dehydrated, correctly buffed nail plate. If any of that is skipped, the bond fails regardless of how good the polish is. This is why the same brand of gel lasts three weeks with one technician and five days with another.',
    },
    { t: 'h3', text: 'Proper prep includes' },
    {
      t: 'ol',
      items: [
        'Cuticle work — pushing back and removing non-living tissue from the plate.',
        'Light surface buffing.',
        'Dehydrating and removing oils.',
        'Correct base coat application.',
        'Capping the free edge.',
      ],
    },
    {
      t: 'note',
      title: 'A useful signal at the salon',
      text: '**If your technician goes straight from filing to colour in under ten minutes, expect lifting.** That is the trade-off in a very cheap or very fast service, and it is a scheduling decision rather than a skill one.',
    },
    { t: 'h2', id: 'lifting', text: 'Why yours lift early' },
    {
      t: 'table',
      head: ['Cause', 'Fix'],
      rows: [
        ['Insufficient prep', 'Different technician, or raise it directly'],
        ['Cuticle oil applied before the set', 'Oil before application blocks adhesion'],
        ['Product on the skin', 'Gel touching skin lifts almost immediately'],
        ['Thick application', 'Too much product in one layer cures unevenly'],
        ['Picking at a lifted edge', 'Water gets under and it spreads - get it repaired instead'],
        ['Frequent hot water', 'Hands swell and contract, stressing the bond'],
        ['Using nails as tools', 'Opening cans, scraping labels'],
      ],
    },
    { t: 'h2', id: 'finishes', text: 'How different finishes wear' },
    {
      t: 'table',
      head: ['Style', 'Wear', 'Regrowth visibility'],
      rows: [
        ['Gradient / ombre', '3 - 4 weeks', 'Least visible - no hard line'],
        ['Marble', '3 - 4 weeks', 'Low'],
        ['Single colour', '3 - 4 weeks', 'Moderate'],
        ['French', '2 - 3 weeks', 'Most visible - the tip line makes regrowth obvious within 2 weeks'],
        ['Glitter, embellishments', '2 - 3 weeks', 'Pieces may detach'],
      ],
    },
    {
      t: 'p',
      text: '**If you cannot get back to the salon often, gradient outperforms French by a clear margin.** The wear time is similar; what differs is how quickly the grow-out becomes obvious.',
    },
    { t: 'h2', id: 'fill-vs-removal', text: 'Fill vs full removal' },
    {
      t: 'table',
      head: ['', 'Fill / rebalance', 'Soak off and redo'],
      rows: [
        ['When', '2 - 3 weeks, gel still adhered', '4+ weeks, or lifting widely'],
        ['What happens', 'Regrowth area filled, surface rebalanced', 'Everything removed, fresh application'],
        ['Time', '45 - 60 min', '75 - 90 min'],
        ['Cost', 'Less', 'Full price'],
      ],
    },
    {
      t: 'p',
      text: '**Every two to three weeks is the standard interval.** Going longer means the regrowth gap becomes structurally weak, and the nail is more likely to catch and tear.',
    },
    { t: 'h2', id: 'make-it-last', text: 'Making a set last' },
    {
      t: 'ul',
      items: [
        '**Cuticle oil daily** — flexible nails and cuticles chip less. The single highest-return habit.',
        'Gloves for washing up and cleaning.',
        'Do not use your nails as tools.',
        '**Do not pick at lifted edges.** Book a repair; most salons charge a few dollars per nail.',
        'Keep them shorter if you are hard on your hands.',
      ],
    },
    { t: 'h2', id: 'vs-others', text: 'Gel vs other systems' },
    {
      t: 'table',
      head: ['System', 'Typical wear'],
      rows: [
        ['Gel polish', '2 - 3 weeks'],
        ['Builder gel / hard gel', '3 - 4 weeks'],
        ['Acrylic', '3 - 4 weeks, fills every 2 - 3'],
        ['Dip powder', '3 - 4 weeks'],
        ['Regular polish', '3 - 7 days'],
      ],
    },
    { t: 'h2', id: 'nail-condition', text: 'What your nails do to the set' },
    { t: 'p', text: 'Two people can leave the same salon on the same day and get very different wear, because the nail plate underneath is not the same surface.' },
    {
      t: 'table',
      head: ['Nail characteristic', 'Effect on wear', 'What helps'],
      rows: [
        ['Naturally oily plate', 'Bond struggles from day one', 'Thorough dehydration, a base coat suited to oily nails'],
        ['Very flexible nails', 'Gel flexes with them and separates', 'Shorter length, thinner application'],
        ['Fast growth', 'Regrowth shows sooner regardless of adhesion', 'Gradient or French avoided, shorter interval'],
        ['Damaged surface from past peeling', 'Uneven bond', 'A break, or a rebuilding base'],
        ['Frequent water contact', 'Repeated swell and contract at the edges', 'Gloves, and capping the free edge'],
      ],
    },
    { t: 'p', text: 'If your sets consistently fail early across different salons while other people get three weeks from the same technician, the variable is more likely your nail plate or routine than the salon. That is worth saying out loud at the consultation, because it changes the prep.' },
    { t: 'h2', id: 'value', text: 'Cost per week, not cost per set' },
    { t: 'p', text: 'The cheapest appointment is rarely the cheapest outcome, because a fast service and a thorough one do not last the same length of time.' },
    {
      t: 'table',
      head: ['Scenario', 'Price', 'Lasts', 'Cost per week'],
      rows: [
        ['Fast service, minimal prep', '$35', '1 week before lifting', '$35'],
        ['Standard service', '$50', '3 weeks', 'approx. $17'],
        ['Thorough prep, capped edge', '$60', '4 weeks', '$15'],
      ],
    },
    { t: 'p', text: '**Prep time is the variable you are actually paying for.** A salon that spends fifteen minutes before colour touches the nail is not being slow; it is producing the version of the service that lasts.' },
  ],
  faq: [
    { q: 'How long do gel nails last?', a: 'Two to three weeks before regrowth shows, and up to four weeks with thorough preparation.' },
    { q: 'How often should I get a fill?', a: 'Every two to three weeks. Beyond that the regrown area weakens and the nail is more likely to catch and tear.' },
    { q: 'Why do my gel nails lift after a week?', a: 'Usually inadequate prep — insufficient cuticle work, oils not removed, or product touching the skin. Very oily nail plates and frequent hot water also contribute.' },
    { q: 'Does French last as long as other styles?', a: 'It lasts about the same but looks grown out faster, because the tip line makes regrowth obvious within two weeks.' },
    { q: 'Can I fix a lift myself?', a: 'Do not pick at it — water gets underneath and the lift spreads. Most salons repair individual nails cheaply.' },
    { q: 'Do gel nails damage your nails?', a: 'The application generally does not; improper removal does. Peeling gel off takes layers of nail plate with it.' },
  ],
  related: [
    { href: '/en/gel-nail-removal-at-home', label: 'Gel Nail Removal at Home Without Damage' },
    { href: '/en/nail-tech-salary', label: 'How Much Do Nail Techs Actually Make?' },
    { href: '/en/acrylic-nail-application', label: 'How Acrylic Nails Are Applied, Step by Step' },
  ],
}
