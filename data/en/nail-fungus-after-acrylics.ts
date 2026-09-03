import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, NAIL_PLATE_NOTE } from './common'

export const nailFungusAfterAcrylics: EnPage = {
  path: '/en/nail-fungus-after-acrylics',
  title: 'Nail Issues After Acrylics: When to See a Doctor',
  h1: 'Nail Problems After Acrylics: What to Do',
  description:
    'Discolouration or separation after acrylics needs medical assessment, not another set. The warning signs and what not to do.',
  keywords: ['nail fungus after acrylics', 'green nail after acrylic', 'nail infection after nails', 'nail separating from bed'],
  category: 'Nail Care',
  stage: 0,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**Green, dark or white discolouration, thickening, separation from the nail bed, or pain after acrylics needs a doctor — not another set and not a home remedy.** Nail conditions are treatable, but they need proper diagnosis first.',
  blocks: [
    { t: 'note', tone: 'warn', text: NAIL_PLATE_NOTE },
    { t: 'h2', id: 'warning-signs', text: 'Warning signs' },
    {
      t: 'table',
      head: ['Sign', 'Action'],
      rows: [
        ['Green discolouration', 'See a doctor'],
        ['White or yellow patches spreading', 'See a doctor'],
        ['Nail separating from the bed', 'See a doctor'],
        ['Thickening or crumbling', 'See a doctor'],
        ['Pain, throbbing or swelling', 'See a doctor promptly'],
        ['Pus or discharge', 'See a doctor promptly'],
        ['Foul odour', 'See a doctor'],
      ],
    },
    { t: 'p', text: '**Do not try to identify this from photographs online.** Several different conditions look similar, they have different causes, and they are treated differently. Getting it wrong wastes months, and nails are slow enough already.' },
    { t: 'h2', id: 'what-not-to-do', text: 'What not to do' },
    {
      t: 'table',
      head: ['Do not', 'Why'],
      rows: [
        ['Cover it with another set', 'Traps moisture and delays diagnosis'],
        ['Apply polish over it', 'Same problem, smaller scale'],
        ['Use a home remedy you read about', 'Delays proper treatment'],
        ['Wait to see if it clears', 'Some conditions progress'],
        ['File or scrape at it', 'Can spread the problem'],
      ],
    },
    { t: 'p', text: '**Covering a problem nail is the single worst response, and it is extremely common.** The impulse is understandable — it looks bad and you want it hidden — but a sealed, damp nail is exactly the environment that made it worse in the first place.' },
    { t: 'h2', id: 'how-problems-develop', text: 'How these problems usually develop' },
    {
      t: 'table',
      head: ['Mechanism', 'Note'],
      rows: [
        ['Moisture trapped under lifted product', 'The most common route by far'],
        ['Trauma during application or removal', 'Aggressive filing, or prying a set off'],
        ['Contaminated implements', 'Sanitation — ask how tools are handled'],
        ['Applying over an already compromised nail', 'Seals in whatever was there'],
      ],
    },
    { t: 'p', text: '**When product lifts, water gets underneath and stays there.** That is why picking at a lifted edge matters, and why lifting should be repaired promptly rather than ignored until the next appointment.' },
    { t: 'h2', id: 'prevention', text: 'Prevention' },
    {
      t: 'ol',
      items: [
        '**Get lifting repaired promptly.** Do not wait, and do not pick at it.',
        '**Ask how implements are sanitised.** It is a reasonable question and a good salon answers it easily.',
        '**Do not apply over damaged or lifting nails.** Have them removed and assessed first.',
        'Take a break if nails are already compromised.',
        'Dry hands thoroughly, especially under the free edge.',
        '**Do not share nail tools**, including at home.',
      ],
    },
    { t: 'h2', id: 'what-to-expect', text: 'What to expect at the appointment' },
    { t: 'p', text: 'People delay seeing a doctor partly because they do not know what will happen. It is usually straightforward.' },
    {
      t: 'ul',
      items: [
        '**Expect the product to be removed** before anything can be assessed properly.',
        '**Expect a possible sample** to identify what is actually there — several conditions look alike.',
        '**Expect a slow timeline.** Nail conditions often take months to resolve because nails grow slowly, not because treatment is failing.',
        '**Expect to be told to leave it uncovered** for a while. That part is not negotiable.',
      ],
    },
    { t: 'h2', id: 'after-treatment', text: 'After treatment' },
    { t: 'p', text: 'If a doctor diagnoses and treats a nail condition, **wait until they clear you before returning to enhancements.** Reapplying early risks recurrence, and you will have spent months for nothing.' },
    { t: 'p', text: 'When you do go back, tell the technician what happened. **A good salon would rather know**, both so they can be gentle with prep and so they can keep an eye on how that nail is behaving.' },
  ],
  faq: [
    { q: 'Is green under my nail an infection?', a: 'Discolouration under a nail can indicate several different conditions. See a doctor for a diagnosis rather than identifying it online.' },
    { q: 'Can I just put another set over it?', a: 'No. That traps moisture, delays diagnosis, and is the most common wrong response.' },
    { q: 'Will it clear on its own?', a: 'Some conditions do not, and some progress. Get it assessed rather than waiting.' },
    { q: 'How long does treatment take?', a: 'It depends on the diagnosis. Nail conditions often take months simply because nails grow slowly.' },
    { q: 'Can I get acrylics again afterwards?', a: 'Once your doctor clears you. Going back early risks recurrence.' },
  ],
  related: [
    { href: '/en/dip-powder-hygiene', label: 'Is Dip Powder Hygienic?' },
    { href: '/en/nail-care-after-gel', label: 'How to Care for Nails After Gel or Acrylic' },
    { href: '/en/why-are-my-nails-peeling', label: 'Why Are My Nails Peeling?' },
  ],
}
