import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO } from './common'

export const balayageVsOmbre: EnPage = {
  path: '/en/balayage-vs-ombre',
  title: 'Balayage vs Ombre vs Sombre: Told Apart Simply',
  h1: 'Balayage vs Ombre: They Are Not the Same Thing',
  description:
    'Balayage is a painting technique; ombre is a gradient effect. They are not alternatives to each other. How each looks and grows out.',
  keywords: ['balayage vs ombre', 'ombre vs sombre', 'balayage or ombre'],
  category: 'Hair Colour',
  stage: 3,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Balayage is a technique — hand-painting. Ombre is a result — a gradient from dark roots to light ends.** You can achieve ombre using balayage. Comparing them as alternatives is a category error, though salons use the words loosely.',
  blocks: [
    { t: 'h2', id: 'distinction', text: 'The distinction' },
    {
      t: 'table',
      head: ['', 'Balayage', 'Ombre', 'Sombre'],
      rows: [
        ['What it is', 'Application technique', 'Colour effect', 'Softer ombre'],
        ['Placement', 'Painted throughout, varied', 'Concentrated at the ends', 'Gradual'],
        ['Contrast', 'Low to medium', 'High', 'Low'],
        ['Grow-out', 'Very soft', 'Soft', 'Very soft'],
        ['Look', 'Sun-lit, dimensional', 'Dip-dyed gradient', 'Subtle gradient'],
      ],
    },
    { t: 'p', text: 'Because one is a method and the others are outcomes, a colourist can deliver an ombre by painting freehand, by foiling, or by a combination. The word tells you what it should look like, not how it will be done.' },
    { t: 'h2', id: 'which-to-ask', text: 'Which to ask for' },
    {
      t: 'table',
      head: ['You want', 'Ask for'],
      rows: [
        ['Natural, sun-kissed', 'Balayage'],
        ['An obvious light-to-dark gradient', 'Ombre'],
        ['A barely-there gradient', 'Sombre'],
        ['Brightness near the face', 'Balayage with face-framing'],
        ['Low maintenance', 'Any of them - all grow out softly'],
      ],
    },
    { t: 'note', title: 'Bring a photo', text: 'The vocabulary varies between salons and between countries. The picture does not. Three reference photos communicate more than any of these words, and they remove the argument about what a term meant.' },
    { t: 'h2', id: 'maintenance', text: 'Maintenance comparison' },
    { t: 'p', text: 'All three grow out gently, which is their shared advantage over foil highlights, but they are not identical on this.' },
    {
      t: 'table',
      head: ['', 'Retouch interval'],
      rows: [
        ['Balayage', '3 - 4 months'],
        ['Ombre', '3 - 6 months'],
        ['Sombre', '3 - 5 months'],
      ],
    },
    { t: 'p', text: 'Ombre stretches furthest because the lightest sections sit at the ends, as far from new growth as it is possible to be. That is also why it is the most committing to reverse.' },
    { t: 'h2', id: 'reversing', text: 'Changing your mind later' },
    { t: 'p', text: 'These are not equally easy to move away from, and it is worth knowing that before choosing between them.' },
    {
      t: 'table',
      head: ['From', 'Going back to natural'],
      rows: [
        ['Sombre', 'Easiest - low contrast to blend'],
        ['Balayage', 'Straightforward - grows out or is glossed down'],
        ['Ombre', 'Harder - high contrast at the ends'],
        ['Any of them, if the ends are damaged', 'Cutting is usually part of the answer'],
      ],
    },
    { t: 'p', text: '**Depositing colour back onto lightened ends is unpredictable.** Lightened hair is more porous and can grab pigment unevenly or go muddy, which is why "just put it back" is rarely a single appointment.' },
    { t: 'h2', id: 'face-framing', text: 'Where the light sits, and why it matters' },
    { t: 'p', text: 'The practical difference between these looks is not really the name, it is where the lightest hair ends up relative to your face.' },
    {
      t: 'table',
      head: ['Look', 'Lightest sections', 'Effect'],
      rows: [
        ['Balayage', 'Distributed, often around the face', 'Brightens the face directly'],
        ['Ombre', 'Concentrated at the ends', 'Draws the eye downward'],
        ['Sombre', 'Gently through the lengths', 'Subtle, low contrast'],
        ['Money piece', 'Front sections only', 'Strongest framing effect'],
      ],
    },
    { t: 'p', text: 'If what you actually want is brightness near your face, saying so is more useful than choosing between these words, because all of them can be placed to do it or not to do it.' },
    { t: 'h2', id: 'suits', text: 'What suits what' },
    { t: 'p', text: 'These are tendencies rather than rules, and a colourist will adapt them, but they explain why the same request produces different advice on different heads.' },
    {
      t: 'table',
      head: ['Hair or feature', 'Often suits'],
      rows: [
        ['Long hair', 'Ombre - there is length for the gradient'],
        ['Shoulder length or shorter', 'Balayage or sombre'],
        ['Very dark natural base', 'Sombre first, ombre later'],
        ['Wanting minimal upkeep', 'Any of them'],
        ['Wanting to look brighter in photos', 'Face-framing placement'],
        ['Fine hair', 'Balayage with enough contrast to read'],
      ],
    },
    { t: 'note', title: 'The terms are a starting point, not a spec', text: 'Every colourist adapts placement to the cut, the density, and how the hair falls. Arriving with a word and no photo is how people end up with something technically correct that they did not want.' },
    { t: 'h2', id: 'grow-out', text: 'How each one grows out' },
    { t: 'p', text: 'All three are low-maintenance compared with foils, but they age differently, and that difference shows up around month four.' },
    {
      t: 'table',
      head: ['', 'At 2 months', 'At 4 months', 'At 6 months'],
      rows: [
        ['Balayage', 'Barely changed', 'Softly grown, still reads as intended', 'Ready for a retouch'],
        ['Ombre', 'Unchanged', 'Unchanged', 'Gradient starts lower'],
        ['Sombre', 'Unchanged', 'Softly grown', 'Still subtle'],
      ],
    },
    { t: 'p', text: 'Ombre stretches longest because the transition simply moves down the hair as it grows, and nothing about it depends on where your root is. That is its real advantage over the other two.' },
  ],
  faq: [
    { q: 'What is the difference between balayage and ombre?', a: 'Balayage is a technique for applying colour. Ombre is the gradient effect you end up with. You can produce ombre using balayage.' },
    { q: 'Which is more natural?', a: 'Balayage and sombre. Ombre has higher contrast by design, which is the point of it.' },
    { q: 'Which lasts longest?', a: 'Ombre, since the lightest sections sit furthest from the root and new growth shows least.' },
    { q: 'Can I have both?', a: 'Effectively yes. A balayage-applied ombre is a common request, even though the words sound like alternatives.' },
    { q: 'Which should I ask for?', a: 'Bring a reference photo rather than a term. The words are used loosely; the photo is not.' },
  ],
  related: [
    { href: '/en/balayage-vs-highlights', label: 'Balayage vs Highlights' },
    { href: '/en/balayage-cost', label: 'How Much Does Balayage Cost?' },
    { href: '/en/how-long-does-balayage-last', label: 'How Long Does Balayage Last?' },
  ],
}
