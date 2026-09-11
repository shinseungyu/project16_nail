import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, BACK_FACIAL_NOTE } from './common'

export const backFacialBenefits: EnPage = {
  path: '/en/back-facial-benefits',
  title: 'Back Facial Benefits: What It Does and Doesn’t',
  h1: 'Back Facial Benefits — Realistically',
  description:
    'What a back facial realistically achieves, why it is not a back acne treatment, and what actually addresses persistent congestion.',
  keywords: ['back facial benefits', 'does a back facial help acne', 'are back facials worth it'],
  category: 'Skin Treatments',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**A back facial cleans, exfoliates and extracts an area you cannot reach yourself.** That is a real, practical benefit. **It is not a treatment for back acne** — persistent congestion needs a medical approach, and most spa marketing blurs that line deliberately.',
  blocks: [
    { t: 'note', tone: 'warn', text: BACK_FACIAL_NOTE },
    { t: 'h2', id: 'genuine-benefits', text: 'The genuine benefits' },
    {
      t: 'table',
      head: ['Benefit', 'Note'],
      rows: [
        ['Reaches what you cannot', 'The core value of the service'],
        ['Professional extraction', 'Rather than picking at what you can reach'],
        ['Exfoliation of buildup', 'Thicker back skin benefits from it'],
        ['Appearance of congestion improved', 'Temporarily'],
        ['Smoother texture for backless clothing', 'A common reason people book'],
        ['Relaxation', 'Often includes massage'],
        ['Guidance on daily habits', 'Often the most valuable part'],
      ],
    },
    {
      t: 'p',
      text: 'That last row is underrated. An esthetician looking at your back for an hour will notice patterns you cannot see — where the congestion sits, whether it tracks with where your hair falls, whether it is worse under bra straps. That observation is worth more than the extraction in many cases.',
    },
    { t: 'h2', id: 'what-it-doesnt-do', text: 'What it does not do' },
    {
      t: 'table',
      head: ['', 'Why'],
      rows: [
        ['Treat or cure back acne', 'Acne is a medical condition'],
        ['Prevent future breakouts', 'It addresses what is there now'],
        ['Remove scarring or marks', 'Surface treatments do not reach textural scarring'],
        ['Produce lasting results from one session', 'Effects are measured in weeks'],
        ['Replace dermatology', 'A doctor has options an esthetician does not'],
      ],
    },
    {
      t: 'p',
      text: 'The second row is the one to hold on to. A back facial clears what has already formed; it does not change the conditions that formed it. That is why the results fade on a predictable schedule and why the recommended interval is four to six weeks — see [What Is a Back Facial?](/en/what-is-a-back-facial) for what each session actually involves.',
    },
    { t: 'h2', id: 'what-actually-helps', text: 'What actually helps persistent back congestion' },
    {
      t: 'table',
      head: ['Rank', 'Factor'],
      rows: [
        ['1', 'Medical treatment, if it is persistent or cystic — see a provider'],
        ['2', 'Showering promptly after sweating'],
        ['3', 'Rinsing hair conditioner off the back last'],
        ['4', 'Breathable fabrics'],
        ['5', 'Washing bedding and gym clothes regularly'],
        ['6', 'A consistent body-skin routine'],
        ['7', 'Professional treatments'],
      ],
    },
    {
      t: 'note',
      tone: 'info',
      title: 'Number three surprises people',
      text: 'Conditioner and styling products rinse down the back at the end of a shower, over skin you have just cleaned. Rinsing hair first and washing your back last costs nothing to try. [How to Prevent Back Acne](/en/prevent-back-acne) covers this and the rest of the habit changes.',
    },
    {
      t: 'p',
      text: 'Professional treatments are seventh on that list. That is not an argument against booking one — it is an argument against booking one *instead of* the six above it, which is the substitution spa marketing quietly encourages.',
    },
    { t: 'h2', id: 'realistic-framing', text: 'A realistic way to frame it' },
    {
      t: 'p',
      text: 'A back facial is a professional deep clean for an area you physically cannot reach. That is worth paying for if it fits your budget and you enjoy the hour.',
    },
    {
      t: 'p',
      text: 'It is not a treatment. Any provider describing it as one is overselling, and any provider who suggests you skip seeing a doctor for persistent acne is giving advice outside their scope.',
    },
    { t: 'h2', id: 'who-benefits-most', text: 'Who gets the most from it' },
    {
      t: 'table',
      head: ['Good fit', 'Consider medical care instead'],
      rows: [
        ['Occasional surface congestion', 'Persistent or cystic acne'],
        ['Buildup before an event', 'Painful lesions'],
        ['General maintenance', 'Scarring'],
        ['Cannot reach your own back', 'Rapidly worsening skin'],
        ['Already seeing a doctor for acne', 'Anything that concerns you'],
      ],
    },
    {
      t: 'p',
      text: 'Note that the left and right columns are not mutually exclusive. Someone under a dermatologist’s care can still book a back facial for the extraction and the maintenance — the mistake is booking it *as* the treatment plan. See [How Much Does a Back Facial Cost?](/en/back-facial-cost) for the budget comparison that makes this concrete.',
    },
  ],
  faq: [
    { q: 'What are the benefits of a back facial?', a: 'Professional cleaning, exfoliation and extraction of an area you cannot reach yourself.' },
    { q: 'Does it help back acne?', a: 'It may temporarily improve the appearance of congestion. It is not a treatment for acne.' },
    { q: 'What actually helps back acne?', a: 'Medical care for persistent cases, plus habits like showering after sweating and rinsing hair products off the back.' },
    { q: 'How long do results last?', a: 'Weeks rather than months — providers commonly suggest returning every four to six weeks.' },
    { q: 'Should I see a dermatologist?', a: 'For persistent, painful or cystic acne, yes.' },
  ],
  related: [
    { href: '/en/what-is-a-back-facial', label: 'What Is a Back Facial?' },
    { href: '/en/prevent-back-acne', label: 'How to Prevent Back Acne: What Actually Helps' },
    { href: '/en/back-facial-cost', label: 'How Much Does a Back Facial Cost?' },
  ],
}
