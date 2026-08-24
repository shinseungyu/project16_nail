import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, MED_DISCLAIMER } from './common'

export const chemicalPeelAtHome: EnPage = {
  path: '/en/chemical-peel-at-home',
  title: 'At-Home Chemical Peels: What Is Actually Safe',
  h1: 'At-Home Chemical Peels vs Professional',
  description:
    'Home peel products are much lower strength than professional ones. What that means, how to use them sensibly, and where the real risks are.',
  keywords: ['at home chemical peel', 'diy chemical peel', 'home peel vs professional', 'at home peel safety'],
  category: 'Skin Treatments',
  stage: 10,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Consumer products are formulated at much lower strengths than professional peels. That is a safety feature, not a shortcoming.** The serious injuries come from professional-strength acids bought online and applied by someone with no training.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_DISCLAIMER },
    { t: 'h2', id: 'comparison', text: 'Home versus professional' },
    {
      t: 'table',
      head: ['', 'At-home', 'Professional'],
      rows: [
        ['Strength', 'Lower, formulated for consumer use', 'Higher'],
        ['Depth', 'Very superficial', 'Provider-controlled'],
        ['Neutralising', 'Usually self-neutralising', 'Provider-managed'],
        ['Assessment', 'None', 'Skin evaluated first'],
        ['Cost', '$15 - 80', '$100 - 600+'],
        ['Risk', 'Lower, but not zero', 'Managed'],
      ],
    },
    { t: 'p', text: 'The assessment row is the one that matters most and the one people discount. A professional peel includes someone looking at your skin, asking what you are using and deciding whether today is a good day for it. **A bottle cannot do that**, which is why consumer formulations are conservative enough to be safe without it.' },
    { t: 'h2', id: 'the-real-danger', text: 'Where the real danger is' },
    { t: 'p', text: '**Buying high-strength acids online and applying them yourself.** These products are sold, they are not intended for untrained use, and chemical burns from them are a documented problem.' },
    { t: 'p', text: 'The reasoning that leads there is understandable — if a mild product does a little, a strong one should do more. What actually happens is that penetration stops being controllable, contact time stops being forgiving, and there is nobody present who knows when to neutralise. **If a product’s strength approaches professional peel concentrations, it belongs in professional hands.**' },
    { t: 'note', tone: 'warn', title: 'Percentage on a label is not the whole story', text: 'Concentration, pH and formulation all change how an acid behaves on skin. Two products listing the same percentage can act very differently, which is another reason comparing numbers on a bottle is not a substitute for training.' },
    { t: 'h2', id: 'using-sensibly', text: 'Using home products sensibly' },
    {
      t: 'ol',
      items: [
        '**Patch test first** — behind the ear or on the jawline, and wait 24 hours.',
        'Start with the lowest strength and the shortest contact time the instructions allow.',
        '**Follow the timing exactly. Longer is not better**, and it is the single most common mistake.',
        'Do not layer with retinoids or other actives on the same day.',
        '**Sunscreen daily.** Non-negotiable after any acid.',
        'Space uses out — weekly at most for most products.',
        'Stop if the skin becomes irritated, and give it time before trying again.',
      ],
    },
    { t: 'h2', id: 'do-not-use', text: 'Do not use one if' },
    {
      t: 'ul',
      items: [
        'Your skin is compromised, sunburned or inflamed.',
        'You are using prescription retinoids without your doctor’s guidance.',
        'You have active cold sores or any infection.',
        'You have had a professional peel recently.',
        'You are pregnant — check with your doctor first.',
        'You are about to have a professional treatment. Tell that provider what you have been using.',
      ],
    },
    { t: 'h2', id: 'overdone-it', text: 'Signs you have overdone it' },
    {
      t: 'table',
      head: ['Sign', 'Action'],
      rows: [
        ['Persistent stinging or burning', 'Rinse thoroughly, stop using it'],
        ['Redness lasting more than a day', 'Pause, moisturise, sunscreen'],
        ['Peeling beyond light flaking', 'Stop entirely and let the barrier recover'],
        ['Skin feels tight, shiny and reactive to everything', 'Barrier disruption — go back to basics for two weeks'],
        ['Blistering, weeping or severe pain', 'See a doctor'],
      ],
    },
    { t: 'p', text: 'The second-to-last row is the most common one and the least recognised. **Over-exfoliated skin often looks good for a week and then reacts to everything.** The fix is not another product; it is a gentle cleanser, a plain moisturiser, sunscreen, and patience.' },
    { t: 'h2', id: 'what-they-can-do', text: 'What home peels realistically do' },
    { t: 'p', text: 'Used sensibly, they are a reasonable maintenance tool. They are not a cheaper version of a professional peel, and expecting them to be is where disappointment and escalation start.' },
    {
      t: 'table',
      head: ['Expectation', 'Realistic'],
      rows: [
        ['Same result as a salon peel, cheaper', 'No — much shallower by design'],
        ['Gradual improvement in surface smoothness', 'Reasonable over weeks'],
        ['Replacing a professional series', 'No'],
        ['Maintaining between professional treatments', 'Reasonable, if your provider agrees'],
        ['Fixing something specific and stubborn', 'That is a consultation, not a bottle'],
      ],
    },
    { t: 'p', text: 'If you find yourself increasing frequency or strength because results have plateaued, that is the moment to stop and book a consultation instead. **Escalating at home is the pathway to every bad outcome on this page.**' },
  ],
  faq: [
    { q: 'Are at-home chemical peels safe?', a: 'Consumer-strength products used as directed are generally low risk. High-strength acids bought online and used without training are not.' },
    { q: 'How often can I use one?', a: 'Weekly at most for most products, and less if your skin reacts. Follow the product instructions rather than a general rule.' },
    { q: 'Do they work as well as professional peels?', a: 'No. They are much more superficial by design, which is exactly what makes them safe to use unsupervised.' },
    { q: 'Can I use one before an event?', a: 'Not within a week, and not at all if you have never used that product before. Test on an ordinary week instead.' },
    { q: 'What if I burn my skin?', a: 'Rinse thoroughly and see a doctor for anything beyond mild transient redness — particularly blistering, weeping or severe pain.' },
  ],
  related: [
    { href: '/en/what-is-a-chemical-peel', label: 'What Is a Chemical Peel?' },
    { href: '/en/chemical-peel-side-effects', label: 'Chemical Peel Side Effects' },
    { href: '/en/chemical-peel-cost', label: 'How Much Does a Chemical Peel Cost?' },
  ],
}
