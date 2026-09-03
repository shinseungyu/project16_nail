import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, BROW_CHEM_NOTE, MED_DISCLAIMER } from './common'

export const whatIsBrowLamination: EnPage = {
  path: '/en/what-is-brow-lamination',
  title: 'What Is Brow Lamination? Process, Cost and Risks',
  h1: 'What Is Brow Lamination?',
  description:
    'Brow lamination uses a chemical relaxer to reshape brow hairs into a brushed-up look for six to eight weeks. What it involves and what to know first.',
  keywords: ['what is brow lamination', 'brow lamination process', 'eyebrow lamination', 'laminated brows'],
  category: 'Brows',
  stage: 9,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**A chemical treatment that softens the bonds in brow hairs so they can be reshaped and set in a brushed-up direction.** It lasts six to eight weeks and costs $50 to $150. It is a chemical process on the hair, so a patch test matters.',
  blocks: [
    { t: 'note', tone: 'warn', text: BROW_CHEM_NOTE },
    { t: 'h2', id: 'process', text: 'The process' },
    {
      t: 'table',
      head: ['Step', 'What happens', 'Roughly'],
      rows: [
        ['Patch test', 'Done 24 - 48 hrs before, at a separate visit', 'A few minutes'],
        ['Cleanse and comb', 'Brows cleaned and brushed into position', '5 min'],
        ['Lifting solution', 'Softens the bonds in the hair', '8 - 12 min'],
        ['Reshaping', 'Hairs combed into the desired direction', '5 min'],
        ['Setting solution', 'Fixes the new shape', '6 - 10 min'],
        ['Nourishing step', 'Conditioning treatment applied', '5 min'],
        ['Optional tint and shaping', 'Often added', '10 - 15 min'],
      ],
    },
    { t: 'p', text: 'Total appointment time is typically 45 to 60 minutes including a tint. **The timings on the two solutions are the part that requires a trained operator** — leaving them on too long is what over-processes hair.' },
    { t: 'h2', id: 'what-it-does', text: 'What it does and does not do' },
    {
      t: 'table',
      head: ['It does', 'It does not'],
      rows: [
        ['Redirect existing hairs upward', 'Create new hair'],
        ['Make sparse areas look fuller', 'Fill genuine gaps'],
        ['Give a fuller, brushed-up shape', 'Add colour, unless you also tint'],
        ['Last 6 - 8 weeks', 'Last permanently'],
        ['Work with what you have', 'Substitute for microblading'],
      ],
    },
    { t: 'p', text: '**If you have very little brow hair, lamination has little to work with.** It redirects hair rather than adding it, which is the main reason expectations sometimes miss.' },
    { t: 'h2', id: 'suitability', text: 'Who it suits' },
    {
      t: 'table',
      head: ['Good fit', 'Discuss first'],
      rows: [
        ['Unruly or downward-growing hairs', 'Very sparse brows'],
        ['Hair that will not stay in place', 'Recent chemical treatments on the brows'],
        ['Wanting a fuller shape without pigment', 'Sensitive or reactive skin'],
        ['Already using brow gel daily', 'Any skin condition in the brow area'],
        ['Comfortable with a 6 - 8 week cycle', 'Previous reaction to hair chemicals'],
      ],
    },
    { t: 'h2', id: 'safety', text: 'The safety basics' },
    { t: 'p', text: 'This is a chemical treatment applied close to the eye, and the standard precautions exist for reasons rather than as formalities.' },
    {
      t: 'ul',
      items: [
        '**Patch test 24 to 48 hours before**, at a separate appointment.',
        '**Do not repeat more often than every six to eight weeks** — over-processing is the main cause of damage.',
        '**Tell your technician about any previous reaction** to hair colour, perms or lash treatments.',
        '**If you get irritation, swelling or anything affecting the eye, see a doctor.**',
      ],
    },
    { t: 'note', tone: 'warn', text: MED_DISCLAIMER },
    { t: 'h2', id: 'tint-and-shaping', text: 'Tinting and shaping alongside it' },
    { t: 'p', text: 'Most people book lamination as part of a fuller brow appointment, and the order the technician works in is not arbitrary.' },
    {
      t: 'table',
      head: ['Add-on', 'When it is done', 'Adds'],
      rows: [
        ['Tint', 'After lamination, same appointment', '$15 - 30'],
        ['Waxing or threading', 'After, so the new shape is visible', '$10 - 25'],
        ['Conditioning treatment', 'Included in most protocols', 'Usually included'],
        ['Henna brows', 'Usually a separate appointment', 'Varies'],
      ],
    },
    { t: 'p', text: '**Shaping is done after lamination rather than before**, because the hairs sit differently once they have been redirected. Waxing to a shape first often means removing hair that would have looked right afterwards.' },
    { t: 'h2', id: 'comparison', text: 'How it compares to the alternatives' },
    {
      t: 'table',
      head: ['Option', 'Lasts', 'Cost'],
      rows: [
        ['Brow gel, daily', 'A day', '$8 - 30 per product'],
        ['Brow lamination', '6 - 8 weeks', '$50 - 150'],
        ['Brow tint alone', '3 - 5 weeks', '$15 - 35'],
        ['Microblading', '1 - 3 years', '$400 - 1,200'],
      ],
    },
    { t: 'h2', id: 'what-to-expect', text: 'What the appointment feels like' },
    { t: 'p', text: 'It is a comfortable service, but it is chemistry near the eye, and knowing what is normal makes it easier to speak up when something is not.' },
    {
      t: 'table',
      head: ['Moment', 'Normal', 'Say something if'],
      rows: [
        ['Solutions applied', 'Cool, slightly tingling', 'It stings or burns'],
        ['During processing', 'Eyes closed, nothing much', 'Any discomfort in the eye'],
        ['Combing and setting', 'Light pulling on the hair', 'It feels sharp'],
        ['After', 'Brows feel stiff for a day', 'Skin is red or itchy'],
        ['Next day', 'Set and holding', 'Anything is swollen'],
      ],
    },
    { t: 'p', text: '**Burning is not part of the process.** If you feel it, say so immediately rather than waiting for the timer — the solution should come off.' },
  ],
  faq: [
    { q: 'What is brow lamination?', a: 'A chemical treatment that softens the bonds in brow hairs so they can be reshaped upward and set for six to eight weeks.' },
    { q: 'How long does it last?', a: 'Six to eight weeks for most people, after which the hairs return to their natural direction as they grow.' },
    { q: 'Does it add hair?', a: 'No. It redirects the hair you already have, which is why very sparse brows see less benefit.' },
    { q: 'Do I need a patch test?', a: 'Yes, 24 to 48 hours beforehand. It is a chemical process and reactions are possible.' },
    { q: 'How much does it cost?', a: '$50 to $150 depending on region and whether a tint is included.' },
  ],
  related: [
    { href: '/en/brow-lamination-cost', label: 'How Much Does Brow Lamination Cost?' },
    { href: '/en/brow-lamination-aftercare', label: 'Brow Lamination Aftercare' },
    { href: '/en/brow-lamination-vs-microblading', label: 'Brow Lamination vs Microblading' },
  ],
}
