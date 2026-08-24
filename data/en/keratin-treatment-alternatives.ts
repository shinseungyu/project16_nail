import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, SMOOTHING_CHEM_NOTE } from './common'

export const keratinTreatmentAlternatives: EnPage = {
  path: '/en/keratin-treatment-alternatives',
  title: 'Keratin Treatment Alternatives for Frizz',
  h1: 'Alternatives to a Keratin Treatment',
  description:
    'Options for smoother hair without a keratin treatment — glosses, bond treatments, styling changes, and their realistic limits.',
  keywords: ['keratin treatment alternatives', 'frizz treatment without keratin', 'formaldehyde free smoothing', 'reduce frizz salon'],
  category: 'Hair Treatments',
  stage: 11,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Nothing else gives three to five months of smoothing in a single service.** But if the chemistry concerns you or the cost does not fit, several options reduce frizz meaningfully with much lower commitment — and one of them is free.',
  blocks: [
    { t: 'note', tone: 'warn', text: SMOOTHING_CHEM_NOTE },
    { t: 'h2', id: 'options', text: 'The options' },
    {
      t: 'table',
      head: ['Option', 'Lasts', 'Cost', 'Frizz reduction'],
      rows: [
        ['Gloss or glaze treatment', '3 - 6 weeks', '$30 - 80', 'Moderate'],
        ['Bond-building treatment', '2 - 6 weeks', '$25 - 60', 'Some — improves condition'],
        ['Deep conditioning series', 'Ongoing', '$20 - 50 each', 'Moderate over time'],
        ['Formaldehyde-free smoothing systems', '6 - 12 weeks', '$150 - 300', 'Moderate, less than keratin'],
        ['A better styling routine', 'Ongoing', 'Product cost only', 'Varies, often underestimated'],
        ['Regular trims', 'n/a', '$40 - 80', 'Reduces split-end frizz'],
        ['Silk pillowcase, microfibre towel', 'Ongoing', '$20 - 60 one-off', 'Modest but real'],
      ],
      note: 'Typical US pricing. Varies by salon and region.',
    },
    { t: 'h2', id: 'honest-ranking', text: 'The honest ranking' },
    {
      t: 'ol',
      items: [
        '**Nothing matches keratin for duration.** Accept that as the baseline and the rest of the list makes sense.',
        '**Formaldehyde-free smoothing systems** get closest, with shorter and less dramatic results.',
        '**Gloss treatments** improve smoothness and shine for a few weeks at low cost, and they are a good low-risk trial.',
        '**Routine changes** — cooler water, microfibre towel, silk pillowcase, heat protectant — produce a genuine cumulative difference that people consistently underestimate.',
        '**Bond treatments** improve condition rather than smoothing directly, which is useful but is answering a different question.',
      ],
    },
    { t: 'p', text: 'Ranking them by duration hides the point. **Ranked by cost of finding out whether they help you, the order reverses completely** — and the bottom of the list is where you should start.' },
    { t: 'h2', id: 'styling-changes', text: 'Styling changes worth trying first' },
    { t: 'p', text: 'These cost almost nothing, and for a meaningful number of people they solve enough of the problem that the $300 service stops being necessary.' },
    {
      t: 'table',
      head: ['Change', 'Why it works'],
      rows: [
        ['Microfibre towel or a cotton t-shirt', 'Terry cloth creates frizz through friction'],
        ['Squeeze, do not rub', 'Same reason'],
        ['Apply product to soaking wet hair', 'Better distribution, less handling later'],
        ['Cool water for the final rinse', 'Helps the cuticle lie flat'],
        ['Silk pillowcase', 'Less overnight friction'],
        ['Lower heat, fewer passes', 'Cumulative heat damage shows up as frizz'],
        ['Do not touch it while it dries', 'Handling wet hair sets frizz in'],
      ],
    },
    { t: 'p', text: '**Give these four weeks before judging them.** Frizz is partly cumulative damage, so changes that reduce ongoing damage take a while to become visible — which is exactly why people abandon them after three days and book a treatment instead.' },
    { t: 'h2', id: 'smoothing-systems', text: 'Formaldehyde-free smoothing systems' },
    { t: 'p', text: 'These are the closest substitute, and the honest summary is that they do less for less time. What you are buying is a different trade-off, not an equivalent result.' },
    {
      t: 'table',
      head: ['', 'Keratin treatment', 'Formaldehyde-free system'],
      rows: [
        ['Lasts', '3 - 5 months', '6 - 12 weeks'],
        ['Effect', 'Stronger smoothing', 'Moderate'],
        ['Appointment', '2.5 - 4 hrs', 'Often shorter'],
        ['Cost per month', 'Lower', 'Higher'],
        ['Ingredient question', 'Ask about the specific product', 'Still ask about the specific product'],
      ],
    },
    { t: 'note', title: 'The last row is not a formality', text: 'Formulations vary within every category, and a product name is not a safety data sheet. Ask which product is being used and how the space is ventilated regardless of what the service is called on the menu.' },
    { t: 'h2', id: 'what-none-do', text: 'What none of these do' },
    { t: 'p', text: 'Being clear about the ceiling saves money. No product on this page rebuilds hair, and none of them make frizz permanently go away.' },
    {
      t: 'ul',
      items: [
        '**None of them are permanent.** Every option here fades, including the expensive ones.',
        '**None of them repair damage.** They coat, condition or smooth — damaged hair stays damaged until it grows out.',
        '**None of them straighten.** If straight hair is the goal, this is the wrong page.',
        '**None of them beat a cut** for split-end frizz. Sometimes the answer really is a trim.',
      ],
    },
    { t: 'p', text: 'If you have tried the routine changes, had a gloss, and still find frizz is the thing that ruins your morning, then a smoothing treatment is a reasonable decision made with good information — which is a much better place to buy one from than frustration.' },
  ],
  faq: [
    { q: 'What is the best alternative to keratin?', a: 'Formaldehyde-free smoothing systems come closest, though results are shorter-lived and less dramatic. Gloss treatments are the cheapest way to test whether you like smoother hair.' },
    { q: 'Do glosses reduce frizz?', a: 'They improve smoothness and shine for a few weeks. It is a modest effect, but it is cheap and low risk.' },
    { q: 'Can styling changes really help?', a: 'Yes, more than most people expect — particularly towel choice, water temperature and reducing heat. Give them about four weeks before judging.' },
    { q: 'Is there a permanent solution to frizz?', a: 'No. Chemical straightening is the most lasting change, but that is a different commitment and a different service entirely.' },
    { q: 'Are formaldehyde-free systems as good?', a: 'Generally less dramatic and shorter-lasting. Ask which specific product is used and about ventilation regardless of the category name.' },
  ],
  related: [
    { href: '/en/keratin-treatment-safety', label: 'Keratin Treatments and Formaldehyde' },
    { href: '/en/smoothing-treatment-damage', label: 'Do Smoothing Treatments Damage Hair?' },
    { href: '/en/keratin-vs-magic-straight', label: 'Keratin vs Chemical Straightening' },
  ],
}
