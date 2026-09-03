import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, LIP_BLUSH_HSV_NOTE } from './common'

export const lipBlushAftercare: EnPage = {
  path: '/en/lip-blush-aftercare',
  title: 'Lip Blush Aftercare: What to Do and Avoid',
  h1: 'Lip Blush Aftercare',
  description:
    'Keeping lips clean, moisturised and protected during healing. What to avoid eating, and the warning signs to watch for.',
  keywords: ['lip blush aftercare', 'after lip blush', 'lip blush what not to eat', 'lip tattoo healing care'],
  category: 'Permanent Makeup',
  stage: 0,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**Keep lips clean and lightly moisturised with what your artist recommends, do not pick at the flaking, and avoid anything spicy, salty or acidic for the first several days.** Your artist’s protocol overrides general guidance, including this page.',
  blocks: [
    { t: 'note', tone: 'warn', text: LIP_BLUSH_HSV_NOTE },
    { t: 'h2', id: 'days-one-to-seven', text: 'Days 1 to 7' },
    {
      t: 'table',
      head: ['Do', 'Do not'],
      rows: [
        ['Blot gently as instructed', 'Pick or peel the flaking'],
        ['Apply the recommended ointment', 'Use random lip products'],
        ['Drink through a straw initially', 'Lick your lips excessively'],
        ['Keep lips clean', 'Kiss or share drinks'],
        ['Sleep on your back if you can', 'Sleep face-down into a pillow'],
      ],
    },
    { t: 'p', text: '**A straw is genuinely useful for the first few days**, and it is the single most practical item on this page.' },
    { t: 'h2', id: 'foods', text: 'Foods to avoid for the first several days' },
    {
      t: 'table',
      head: ['Avoid', 'Why'],
      rows: [
        ['Spicy food', 'Irritation'],
        ['Salty food', 'Stings on healing skin'],
        ['Acidic food — citrus, tomato', 'Stings'],
        ['Very hot food and drinks', 'Heat on healing tissue'],
        ['Greasy food requiring lip contact', 'Messy on healing skin'],
      ],
    },
    { t: 'p', text: 'This is a short list and a short window. **Plan meals for the first three days** rather than discovering the problem halfway through something you were looking forward to.' },
    { t: 'h2', id: 'also-avoid', text: 'Also avoid' },
    {
      t: 'table',
      head: ['Item', 'How long'],
      rows: [
        ['Sun exposure', '4 weeks, then SPF lip balm ongoing'],
        ['Swimming and saunas', '2 weeks'],
        ['Exfoliating lip scrubs', '4 weeks'],
        ['Makeup on the lips', '10 - 14 days'],
        ['Retinoids or acids near the lips', '4 weeks'],
        ['Facials or peels', '4 weeks'],
      ],
    },
    { t: 'p', text: 'The last row surprises people who have a facial already booked. **Mention the lip blush when you book anything else on your face** — the four-week gap applies to the treatment being near your lips, not just on them.' },
    { t: 'h2', id: 'the-picking-problem', text: 'Why picking is the main thing to avoid' },
    { t: 'p', text: 'During days four to seven the lips flake, and a partly-attached flake is almost designed to be pulled. **Pulling it removes pigment along with the skin**, and the result is patchy colour that then needs correcting.' },
    { t: 'p', text: 'The practical trick is the same as for any healing skin: keep the recommended ointment within reach and apply it whenever you notice yourself touching your mouth. **The flaking resolves on its own within a few days** and nothing you do speeds it up.' },
    { t: 'h2', id: 'ongoing', text: 'Once healed' },
    { t: 'p', text: '**SPF lip balm meaningfully extends how long the colour lasts.** Sun is the main fading factor, and lips get more of it than almost any other area because they are rarely covered.' },
    {
      t: 'ul',
      items: [
        '**SPF lip balm daily** — the single highest-return habit for longevity.',
        '**Avoid exfoliating lip scrubs**, which strip pigment along with dead skin.',
        '**Keep retinoids and acids away from the lip border.**',
        '**Book the touch-up at 6 to 8 weeks** — it completes the result rather than fixing a fault.',
        'Refresh before the colour has faded completely; a refresh costs less than starting over.',
      ],
    },
    { t: 'h2', id: 'see-a-doctor', text: 'See a doctor if' },
    {
      t: 'table',
      head: ['Sign', 'Action'],
      rows: [
        ['Increasing pain', 'Contact a doctor'],
        ['Spreading redness or warmth', 'Contact a doctor'],
        ['Pus or unusual discharge', 'Contact a doctor promptly'],
        ['Fever', 'Contact a doctor promptly'],
        ['Cold sore blisters', 'Contact your doctor, and tell your artist'],
      ],
    },
  ],
  faq: [
    { q: 'Can I eat normally after lip blush?', a: 'Avoid spicy, salty, acidic and very hot foods for the first several days. A straw helps for drinks.' },
    { q: 'When can I wear lipstick?', a: 'Usually 10 to 14 days, but follow your artist’s specific protocol.' },
    { q: 'Can I pick the flakes?', a: 'No. Picking pulls pigment out with the skin and causes the patchy healing people then ask to have corrected.' },
    { q: 'How do I make it last?', a: 'SPF lip balm daily once healed, and avoid exfoliating lip scrubs.' },
    { q: 'What if I get a cold sore?', a: 'Contact your doctor promptly and tell your artist. Raise any history of cold sores before the appointment, not after.' },
  ],
  related: [
    { href: '/en/lip-blush-healing', label: 'Lip Blush Healing, Day by Day' },
    { href: '/en/how-long-does-lip-blush-last', label: 'How Long Does Lip Blush Last?' },
    { href: '/en/what-is-lip-blush', label: 'What Is Lip Blush Tattoo?' },
  ],
}
