import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, BACK_FACIAL_NOTE } from './common'

export const backFacialWhatToExpect: EnPage = {
  path: '/en/back-facial-what-to-expect',
  title: 'Back Facial: What to Expect Your First Time',
  h1: 'What to Expect at a Back Facial',
  description:
    'What you wear, how extraction feels, how long it takes, and what your skin looks like afterwards.',
  keywords: ['back facial what to expect', 'does a back facial hurt', 'first back facial'],
  category: 'Skin Treatments',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**You lie face down, undressed from the waist up with a towel or drape covering you.** The treatment takes 45 to 75 minutes. **Extraction is the uncomfortable part** — everything else is relaxing. Expect some redness afterwards that settles within hours.',
  blocks: [
    { t: 'note', tone: 'warn', text: BACK_FACIAL_NOTE },
    { t: 'h2', id: 'before-you-go', text: 'Before you go' },
    {
      t: 'table',
      head: ['Do', 'Do not'],
      rows: [
        ['Shower beforehand', 'Apply body oil or lotion'],
        ['Mention any medications or conditions', 'Withhold recent treatments'],
        ['Tie long hair up', 'Wax your back in the days before'],
        ['Wear a loose top for afterwards', 'Wear a tight bra straight after'],
        ['Mention if you are pregnant', 'Assume the intake form covers everything'],
        ['Mention isotretinoin use', ''],
      ],
    },
    {
      t: 'p',
      text: 'The lotion line matters more than it sounds. Product sitting on the skin changes how the exfoliant behaves and has to be cleaned off first, which eats into the extraction time you are paying for — and extraction is the part of [What Is a Back Facial?](/en/what-is-a-back-facial) that most people are actually booking.',
    },
    { t: 'h2', id: 'the-setup', text: 'The setup' },
    {
      t: 'table',
      head: ['Element', 'What happens'],
      rows: [
        ['Undressing', 'From the waist up, with privacy to change'],
        ['Position', 'Lying face down with a face cradle'],
        ['Draping', 'A towel or sheet; only the treatment area is exposed'],
        ['Bra', 'Removed, or straps moved out of the way'],
      ],
    },
    {
      t: 'note',
      tone: 'info',
      title: 'If the draping makes you uncomfortable, say so',
      text: 'A professional will adjust it without any awkwardness. Draping is a standard part of training, and asking for more coverage is a normal request rather than a difficult one.',
    },
    { t: 'h2', id: 'how-it-feels', text: 'How it feels, step by step' },
    {
      t: 'table',
      head: ['Step', 'Sensation'],
      rows: [
        ['Cleanse', 'Pleasant'],
        ['Steam or warm towels', 'Warm, relaxing'],
        ['Exfoliation', 'Mild scratchiness or tingling'],
        ['Extraction', 'Pressure, pinching — the uncomfortable part'],
        ['Mask', 'Cool, sometimes tightening'],
        ['Massage', 'Relaxing'],
        ['Finish', 'Hydration and SPF advice'],
      ],
    },
    {
      t: 'p',
      text: 'Extraction discomfort is normal. Sharp pain is not — say something if it is too much, and a good esthetician will reduce pressure or stop on that area. Working through it silently does not produce a better result, it just produces more marking.',
    },
    { t: 'h2', id: 'afterwards', text: 'Afterwards' },
    {
      t: 'table',
      head: ['Expect', 'Timing'],
      rows: [
        ['Redness', 'A few hours'],
        ['Slight tenderness where extraction happened', 'About a day'],
        ['Small marks at extraction sites', '1 - 3 days'],
        ['Smoother texture', 'Immediately'],
        ['Occasional purging', 'Several days'],
      ],
    },
    {
      t: 'p',
      text: 'Plan the timing around this. Booking a back facial the day before a backless dress is a common mistake — the extraction marks need a couple of days, so a week ahead is the better window.',
    },
    { t: 'h2', id: 'aftercare', text: 'Aftercare' },
    {
      t: 'table',
      head: ['Do', 'Do not'],
      rows: [
        ['Loose, breathable clothing', 'Tight bra straps straight after'],
        ['Shower after sweating', 'Heavy workout the same day'],
        ['Sunscreen on exposed back skin', 'Sun exposure'],
        ['Use a gentle cleanser', 'Harsh scrubs for a few days'],
        ['Wash your bedding', 'Sleep on unwashed sheets'],
        ['', 'Pick at extraction sites'],
      ],
    },
    { t: 'h2', id: 'contact-provider', text: 'When to contact a provider' },
    {
      t: 'table',
      head: ['Sign', 'Action'],
      rows: [
        ['Redness lasting beyond a day or two', 'Contact the provider'],
        ['Increasing pain, heat or swelling', 'See a doctor'],
        ['Signs of infection', 'See a doctor'],
        ['Blistering', 'See a doctor'],
      ],
    },
    {
      t: 'p',
      text: 'If this is your first one and you are still deciding whether it is worth booking, [Back Facial Benefits](/en/back-facial-benefits) covers what it realistically achieves and [How Much Does a Back Facial Cost?](/en/back-facial-cost) covers what to budget.',
    },
  ],
  faq: [
    { q: 'What do I wear for a back facial?', a: 'You undress from the waist up and are draped; only the treatment area is exposed.' },
    { q: 'Does it hurt?', a: 'Extraction is uncomfortable — pressure and pinching. The rest is relaxing. Sharp pain is not normal, so speak up.' },
    { q: 'How long does it take?', a: '45 to 75 minutes.' },
    { q: 'Will my back be red afterwards?', a: 'Usually for a few hours, with possible small marks at extraction sites for a day or two.' },
    { q: 'Can I work out afterwards?', a: 'Better to wait a day — sweat on freshly extracted skin is not ideal.' },
  ],
  related: [
    { href: '/en/what-is-a-back-facial', label: 'What Is a Back Facial?' },
    { href: '/en/back-facial-benefits', label: 'Back Facial Benefits: What It Does and Doesn’t' },
    { href: '/en/prevent-back-acne', label: 'How to Prevent Back Acne: What Actually Helps' },
  ],
}
