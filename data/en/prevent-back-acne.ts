import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, BACK_FACIAL_NOTE } from './common'

export const preventBackAcne: EnPage = {
  path: '/en/prevent-back-acne',
  title: 'How to Prevent Back Acne: What Actually Helps',
  h1: 'How to Prevent Back Acne',
  description:
    'The habit changes most often overlooked — including the order you rinse in the shower — and when to see a doctor instead.',
  keywords: ['how to prevent back acne', 'back acne causes', 'bacne prevention'],
  category: 'Skin Treatments',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**Shower promptly after sweating, rinse hair products off your back last, and wear breathable fabrics.** These cost nothing. **For persistent, painful or cystic acne, see a licensed medical provider** — habits alone will not resolve a medical condition.',
  blocks: [
    { t: 'note', tone: 'warn', text: BACK_FACIAL_NOTE },
    { t: 'h2', id: 'the-overlooked-one', text: 'The overlooked one: shower order' },
    {
      t: 'table',
      head: ['Order', 'What happens'],
      rows: [
        ['Wash body → wash hair → rinse conditioner → get out', 'Conditioner rinses down over skin you just cleaned'],
        ['Rinse hair and conditioner → wash body last', 'Product is washed off rather than left on'],
      ],
    },
    {
      t: 'p',
      text: 'Hair conditioner and styling products rinse down the back at the end of a shower. Changing the order costs nothing, takes no extra time, and some people find it makes a noticeable difference within a few weeks. It is also the single most common thing missing from back acne advice.',
    },
    { t: 'h2', id: 'habits-worth-trying', text: 'Habits worth trying' },
    {
      t: 'table',
      head: ['Habit', 'Why'],
      rows: [
        ['Shower promptly after sweating', 'Sweat plus friction plus time is the combination'],
        ['Wash your back last', 'See above'],
        ['Breathable fabrics', 'Less trapped heat and friction'],
        ['Change gym clothes immediately', 'Do not sit around in them'],
        ['Wash sheets and pillowcases regularly', 'Contact over eight hours a night'],
        ['Loose clothing where possible', 'Reduces friction'],
        ['Rinse sunscreen and heavy lotions off properly', 'Especially after a beach day'],
        ['Avoid heavy body oils on the back', 'Occlusive on already-oily skin'],
        ['Do not pick', 'Marks last far longer than the spot did'],
        ['Use a long-handled brush or sponge', 'So you can actually reach it'],
      ],
    },
    { t: 'h2', id: 'things-that-dont-help', text: 'Things people expect to help but often do not' },
    {
      t: 'table',
      head: ['Approach', 'Why it disappoints'],
      rows: [
        ['Scrubbing harder', 'Irritation, not improvement'],
        ['Very hot water', 'Drying'],
        ['Harsh drying soaps', 'Can make it worse'],
        ['Frequent exfoliating scrubs', 'Over-exfoliation is common'],
        ['Facials alone for persistent acne', 'Maintenance, not treatment'],
      ],
    },
    {
      t: 'p',
      text: 'There is a pattern in that table: every item is an escalation of effort. Back acne responds to removing causes rather than to attacking the result, which is counterintuitive enough that most people try the whole left column first. The same logic explains why [What Is a Back Facial?](/en/what-is-a-back-facial) describes a maintenance service rather than a treatment.',
    },
    { t: 'h2', id: 'when-habits-arent-enough', text: 'When habits are not enough' },
    {
      t: 'table',
      head: ['Sign', 'Note'],
      rows: [
        ['Persistent despite habit changes', 'Give changes a few weeks, then escalate'],
        ['Painful or cystic lesions', 'See a provider'],
        ['Widespread', 'See a provider'],
        ['Scarring or marks developing', 'Earlier care may reduce this'],
        ['Worsening', 'See a provider'],
        ['Affecting how you feel day to day', 'A legitimate reason on its own'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Persistent back acne is a medical issue, not a hygiene failure',
      text: 'A dermatologist has treatment options an esthetician does not. If you have been trying harder for a year and it has not worked, the problem was never that you were not trying hard enough. This is not medical advice — consult a licensed medical provider about any skin concern.',
    },
    { t: 'h2', id: 'what-a-treatment-adds', text: 'What a professional treatment adds' },
    {
      t: 'table',
      head: ['Element', 'Value'],
      rows: [
        ['Extraction you cannot do yourself', 'Real, and the main reason to book'],
        ['Exfoliation of buildup', 'Useful on thicker back skin'],
        ['Habit guidance from someone looking at your skin', 'Often the most useful part'],
        ['A substitute for medical care', 'Not this'],
      ],
    },
    {
      t: 'p',
      text: 'A back facial fits alongside habit changes and, where needed, medical treatment — not in place of either. See [Back Facial Benefits](/en/back-facial-benefits) for where it genuinely helps, and [How Much Does a Back Facial Cost?](/en/back-facial-cost) for the comparison between a year of treatments and a dermatology consultation.',
    },
  ],
  faq: [
    { q: 'How do I prevent back acne?', a: 'Shower promptly after sweating, rinse hair products off last, wear breathable fabrics, and do not pick.' },
    { q: 'Does hair conditioner cause back acne?', a: 'Products rinsing down the back is a commonly overlooked factor. Washing your back last is a free change worth trying.' },
    { q: 'Does scrubbing help?', a: 'Usually not — it tends to irritate rather than improve.' },
    { q: 'Do back facials prevent it?', a: 'They address what is there now. They are not a preventive treatment.' },
    { q: 'When should I see a doctor?', a: 'If it is persistent, painful, cystic, scarring, or affecting how you feel day to day.' },
  ],
  related: [
    { href: '/en/back-facial-benefits', label: 'Back Facial Benefits: What It Does and Doesn’t' },
    { href: '/en/what-is-a-back-facial', label: 'What Is a Back Facial?' },
    { href: '/en/back-facial-cost', label: 'How Much Does a Back Facial Cost?' },
  ],
}
