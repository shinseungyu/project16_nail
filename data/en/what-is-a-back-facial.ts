import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, BACK_FACIAL_NOTE } from './common'

export const whatIsABackFacial: EnPage = {
  path: '/en/what-is-a-back-facial',
  title: 'What Is a Back Facial? Steps, Cost, Results',
  h1: 'What Is a Back Facial?',
  description:
    'A back facial is a cleansing, exfoliating and extraction treatment for the back. What happens, what it costs, and realistic results.',
  keywords: ['back facial', 'what is a back facial', 'back facial treatment'],
  category: 'Skin Treatments',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**A facial treatment applied to the back** — cleansing, exfoliation, extraction, a mask and hydration, following the same steps as a face treatment. It takes 45 to 75 minutes and typically costs **$75 to $180**. It is a cosmetic treatment, not a medical treatment for back acne.',
  blocks: [
    { t: 'note', tone: 'warn', text: BACK_FACIAL_NOTE },
    { t: 'h2', id: 'why-the-back', text: 'Why the back gets its own treatment' },
    {
      t: 'table',
      head: ['Reason', 'Note'],
      rows: [
        ['Thicker skin, larger oil glands', 'The back produces more sebum than most facial areas'],
        ['You cannot reach it', 'The practical reason most people book one'],
        ['Sweat and friction from clothing', 'A different set of conditions to the face'],
        ['Hair products rinse down the back', 'A commonly overlooked factor'],
        ['Sunscreen is often missed there', 'Especially the upper back'],
      ],
    },
    {
      t: 'p',
      text: 'The second row is the honest answer to why this service exists. Whatever else a back facial does, it addresses an area you physically cannot see or reach properly, which is not true of any other part of a skincare routine.',
    },
    { t: 'h2', id: 'the-steps', text: 'The steps' },
    {
      t: 'table',
      head: ['Step', 'What happens'],
      rows: [
        ['1. Cleanse', 'Often a steam or warm towel first'],
        ['2. Steam', 'Softens debris before extraction'],
        ['3. Exfoliation', 'Physical, enzyme or mild acid'],
        ['4. Extraction', 'The part most people book it for'],
        ['5. Mask', 'Clay, calming or hydrating'],
        ['6. Massage', 'Often included'],
        ['7. Hydration and SPF advice', 'Finishing step'],
      ],
    },
    {
      t: 'p',
      text: 'Step four is where the value is concentrated. If congestion is why you booked, ask for extended extraction time when you make the appointment — it is usually the add-on that matters most, and it needs to be built into the booking rather than requested on the table.',
    },
    { t: 'h2', id: 'cost-and-timing', text: 'Cost and timing' },
    {
      t: 'table',
      head: ['Item', 'Typical'],
      rows: [
        ['Standard back facial', '$75 - 180'],
        ['With add-ons (LED, peel, dermaplaning)', '$110 - 250'],
        ['Duration', '45 - 75 min'],
        ['Downtime', 'Usually none; possible brief redness'],
        ['Suggested frequency', 'Every 4 - 6 weeks'],
      ],
      note: 'Prices vary by city and by setting — med-spas sit above day spas.',
    },
    {
      t: 'p',
      text: '[How Much Does a Back Facial Cost?](/en/back-facial-cost) breaks down which add-ons are worth paying for and what a year of regular treatments totals — including a cost comparison worth doing before you commit to a schedule.',
    },
    { t: 'h2', id: 'realistic-results', text: 'What to realistically expect' },
    {
      t: 'table',
      head: ['Commonly reported', 'Not a realistic expectation'],
      rows: [
        ['Cleaner, smoother-feeling skin', 'Treating or curing back acne'],
        ['Appearance of congestion improved', 'Permanent clearance'],
        ['Removal of surface buildup', 'Removing scars or marks'],
        ['Temporary redness that settles', 'One session solving a persistent problem'],
        ['A pleasant, relaxing hour', 'Replacing medical treatment'],
      ],
    },
    {
      t: 'p',
      text: 'A back facial is a cleaning and maintenance treatment, not a treatment for a condition. That distinction is the whole of it, and spa marketing in this category routinely blurs it because "deep cleansing treatment for problem skin" sells better than "we will clean an area you cannot reach". [Back Facial Benefits](/en/back-facial-benefits) sets out what it genuinely delivers and what actually addresses persistent congestion.',
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'When to see a doctor instead',
      text: 'Persistent, painful, cystic or widespread back acne is a medical issue. A dermatologist has treatment options an esthetician does not. This is not medical advice.',
    },
    { t: 'h2', id: 'when-to-postpone', text: 'When to postpone' },
    {
      t: 'table',
      head: ['Situation', 'Action'],
      rows: [
        ['Active infection or open lesions', 'Postpone and see a doctor'],
        ['Sunburn', 'Postpone'],
        ['Recent isotretinoin use', 'Consult your prescriber'],
        ['Recent back waxing', 'Wait'],
        ['Cystic, painful lesions', 'See a doctor first'],
        ['Unexplained rash or skin changes', 'See a doctor'],
      ],
    },
    {
      t: 'p',
      text: 'If you have never had one and are unsure what the appointment involves — including the draping and how extraction feels — [What to Expect at a Back Facial](/en/back-facial-what-to-expect) walks through it step by step.',
    },
  ],
  faq: [
    { q: 'What is a back facial?', a: 'A cleansing, exfoliating and extraction treatment for the back, following the same steps as a facial.' },
    { q: 'How much does it cost?', a: 'Typically $75 to $180, more with add-ons.' },
    { q: 'Does it cure back acne?', a: 'No — it is a cosmetic treatment. For persistent acne, consult a licensed medical provider.' },
    { q: 'How long does it take?', a: '45 to 75 minutes.' },
    { q: 'How often should I get one?', a: 'Providers commonly suggest every four to six weeks.' },
  ],
  related: [
    { href: '/en/back-facial-benefits', label: 'Back Facial Benefits: What It Does and Doesn’t' },
    { href: '/en/back-facial-cost', label: 'How Much Does a Back Facial Cost?' },
    { href: '/en/back-facial-what-to-expect', label: 'Back Facial: What to Expect Your First Time' },
  ],
}
