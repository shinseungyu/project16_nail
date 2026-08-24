import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, SMOOTHING_CHEM_NOTE } from './common'

export const keratinTreatmentAftercare: EnPage = {
  path: '/en/keratin-treatment-aftercare',
  title: 'Keratin Treatment Aftercare: First 72 Hours and Beyond',
  h1: 'Keratin Treatment Aftercare',
  description:
    'What to do in the critical first days after a keratin treatment, and the ongoing routine that decides how long it lasts.',
  keywords: ['keratin treatment aftercare', 'after keratin treatment', 'keratin 72 hours', 'keratin treatment washing'],
  category: 'Hair Treatments',
  stage: 11,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**The first 48 to 72 hours decide how well it sets: no washing, no tying up, nothing that creases the hair.** After that, sulphate-free products decide how long it lasts. Protocols vary by product, so ask your stylist for theirs.',
  blocks: [
    { t: 'note', tone: 'warn', text: SMOOTHING_CHEM_NOTE },
    { t: 'h2', id: 'first-72', text: 'The first 48 to 72 hours' },
    { t: 'p', text: 'Protocols differ between products — some are considerably more relaxed than others — so treat this as the common pattern and your stylist’s instruction as the actual rule.' },
    {
      t: 'table',
      head: ['Avoid', 'Why'],
      rows: [
        ['Washing', 'The product is still setting'],
        ['Hair ties, clips, headbands', 'Creases can set semi-permanently'],
        ['Tucking behind the ears', 'Same — and it is the easiest one to do without noticing'],
        ['Hats and sunglasses pushed back', 'Same'],
        ['Sweating heavily', 'Moisture, and hair sticking to the neck'],
        ['Getting caught in rain', 'Moisture'],
        ['Sleeping with hair bunched up', 'Use a silk pillowcase and keep hair loose'],
      ],
    },
    { t: 'note', tone: 'warn', title: 'The crease issue is the one people underestimate', text: 'A ponytail in the first two days can leave a bend you are stuck with for months. It does not brush out and it does not wash out. If you need hair off your face, plan for that before the appointment.' },
    { t: 'h2', id: 'ongoing', text: 'The ongoing routine' },
    {
      t: 'table',
      head: ['Do', 'Do not'],
      rows: [
        ['Sulphate-free shampoo', 'Sulphate shampoos'],
        ['Sulphate-free conditioner', 'Clarifying shampoo, ever'],
        ['Wash 2 - 3 times a week', 'Wash daily'],
        ['Rinse with clean water before swimming', 'Swim without rinsing first'],
        ['Cool to lukewarm water', 'Very hot water'],
        ['Heat protectant when you do style', 'Daily high-heat styling you no longer need'],
      ],
    },
    { t: 'p', text: 'You do not have to buy the salon’s brand. **You do have to buy something sulphate-free**, and reading the ingredient list once is cheaper than losing two months of wear.' },
    { t: 'h2', id: 'swimming', text: 'Swimming' },
    { t: 'p', text: 'Swimming is not off limits, but chlorine and salt water are two of the three fastest ways to shorten a treatment. The trick is making sure your hair is already full of clean water before it meets either.' },
    {
      t: 'table',
      head: ['Step', 'Why'],
      rows: [
        ['Wet hair with clean water first', 'Saturated hair absorbs less pool or sea water'],
        ['Add a leave-in conditioner', 'Acts as a barrier'],
        ['Rinse immediately afterwards', 'Do not let it dry in'],
        ['Avoid prolonged salt water', 'Cumulative and harsh'],
        ['Tie it up loosely if you must', 'After the first 72 hours only'],
      ],
    },
    { t: 'h2', id: 'colouring', text: 'Colour timing' },
    { t: 'p', text: '**Sequencing matters.** Many stylists colour before the keratin treatment, or wait a period afterwards. The order is not arbitrary — smoothing affects how the hair takes colour, and colour services affect the hair that smoothing then heats.' },
    { t: 'p', text: '**Ask your stylist for their recommended sequence** rather than booking colour independently somewhere else. If two different salons are involved, tell both what the other is doing. Overlapping chemical services on the same hair without anyone having the full picture is where damage happens.' },
    { t: 'h2', id: 'styling', text: 'Styling after a treatment' },
    { t: 'p', text: 'The point of the treatment is that you need to do less. People often keep their old routine out of habit and then wonder why their hair feels over-processed by month three.' },
    {
      t: 'ul',
      items: [
        '**Try air-drying first.** For many people this is the whole change — hair that took forty minutes now dries acceptably on its own.',
        'If you blow-dry, use **lower heat and fewer passes** than you used to need.',
        'Skip the flat iron unless you genuinely want it. The treatment already did that once.',
        'Use a **heat protectant** whenever you do apply heat.',
        'A **microfibre towel or cotton t-shirt** beats terry cloth for reducing friction frizz.',
      ],
    },
    { t: 'h2', id: 'troubleshooting', text: 'If something seems wrong' },
    {
      t: 'table',
      head: ['Problem', 'Likely cause', 'What to do'],
      rows: [
        ['A visible bend or crease', 'Hair creased in the setting window', 'Speak to your stylist — options are limited'],
        ['Hair feels greasy or flat', 'Product still on the hair, or over-conditioning', 'Follow the wash protocol, then reassess'],
        ['Frizz returned within weeks', 'Sulphates, or frequent washing', 'Check your shampoo ingredients'],
        ['Result uneven across the head', 'Application or porosity', 'Raise it with the salon within the first two weeks'],
        ['Scalp irritation', 'Product contact or sensitivity', 'Speak to a doctor if it persists'],
      ],
    },
    { t: 'p', text: 'The fourth row has a time limit worth knowing. **Most salons would rather hear about an uneven result in week one than in month three**, when it can no longer be distinguished from normal fading.' },
  ],
  faq: [
    { q: 'When can I wash my hair?', a: 'Follow the protocol for the product used — commonly 48 to 72 hours, but some products allow washing considerably sooner.' },
    { q: 'Can I tie my hair up?', a: 'Not during the first 48 to 72 hours. Creases made while the treatment is setting can last for months.' },
    { q: 'Do I need sulphate-free shampoo?', a: 'Yes. Sulphates strip the treatment. It does not need to be the salon brand, just genuinely sulphate-free.' },
    { q: 'Can I colour my hair?', a: 'Ask your stylist about sequencing — usually colour goes before the treatment, or after a wait. Do not book it independently without telling them.' },
    { q: 'Can I swim?', a: 'Yes, with precautions. Rinse with clean water before and immediately after, and use a leave-in conditioner as a barrier.' },
  ],
  related: [
    { href: '/en/how-long-does-a-keratin-treatment-last', label: 'How Long Does a Keratin Treatment Last?' },
    { href: '/en/keratin-treatment-cost', label: 'How Much Does a Keratin Treatment Cost?' },
    { href: '/en/keratin-treatment-safety', label: 'Keratin Treatments and Formaldehyde' },
  ],
}
