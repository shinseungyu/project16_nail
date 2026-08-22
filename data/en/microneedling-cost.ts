import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, MED_DISCLAIMER, MED_STATE_SCOPE } from './common'

export const microneedlingCost: EnPage = {
  path: '/en/microneedling-cost',
  title: 'Microneedling Cost: Price Per Session and Full Course',
  h1: 'How Much Does Microneedling Cost?',
  description:
    'Microneedling costs $200 to $800 per session, and most providers recommend three to six. What drives the price and what is often left out of the quote.',
  keywords: ['microneedling cost', 'microneedling price', 'microneedling per session', 'microneedling course cost'],
  category: 'Skin Treatments',
  stage: 1,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Most providers charge $200 to $800 per session, and a typical course is three to six sessions.** That puts a full course somewhere between $600 and $4,000. Price varies by provider type, device, treatment area, and whether add-ons such as PRP are included.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_DISCLAIMER },
    { t: 'h2', id: 'by-provider', text: 'Price by provider type' },
    {
      t: 'table',
      head: ['Setting', 'Per session', 'Notes'],
      rows: [
        ['Medical spa', '$250 - 600', 'Most common setting'],
        ['Dermatology clinic', '$400 - 800', 'Physician oversight'],
        ['Licensed esthetician, where permitted', '$200 - 450', 'Depth limits vary by state'],
        ['At-home derma roller', '$15 - 60 for the device', 'Not equivalent - see below'],
      ],
    },
    { t: 'p', text: 'The provider column is not just a price difference. Who may perform the treatment, and at what depth, is set by state rules rather than by the clinic, which is why the same service is offered under different credentials in different places.' },
    { t: 'h2', id: 'what-changes', text: 'What changes the price' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Treatment area', 'Full face vs face and neck vs body'],
        ['Device type', 'Different systems carry different pricing'],
        ['Add-ons such as PRP, serums, RF', 'Often adds $150 - 500'],
        ['Provider credentials', 'Physician-performed generally costs more'],
        ['Location', 'Major metros run higher'],
        ['Package pricing', 'Courses of three to six usually discounted 10 - 20%'],
      ],
    },
    { t: 'h2', id: 'not-included', text: 'What is often not included' },
    {
      t: 'ul',
      items: [
        'Numbing cream, which is sometimes billed separately.',
        'Post-treatment skincare products.',
        'Follow-up visits.',
        'Touch-up sessions beyond the initial course.',
      ],
    },
    {
      t: 'note',
      title: 'Ask for the total course price, not the per-session price',
      text: 'A $250 session becomes $1,500 across six. The per-session figure is the one advertised; the course figure is the one you actually spend, and providers will quote it if asked.',
    },
    { t: 'h2', id: 'packages', text: 'Packages, and when to commit' },
    { t: 'p', text: 'Course packages are usually 10 to 20% cheaper than paying per session, which is a genuine saving if you were going to complete the course anyway.' },
    {
      t: 'table',
      head: ['Situation', 'Sensible approach'],
      rows: [
        ['First time with this provider', 'Pay for one session first'],
        ['You have had a consultation but no treatment', 'Still one session first'],
        ['Second or third course with a provider you trust', 'Package is reasonable'],
        ['Provider pressing for a package at consultation', 'Treat as a signal, not an offer'],
      ],
    },
    { t: 'p', text: 'The reason to wait is not the money. It is that you cannot judge how your skin responds, or how the provider works, until you have been through it once. **A discount on a course you abandon is not a discount.**' },
    { t: 'h2', id: 'insurance', text: 'Insurance and financing' },
    { t: 'p', text: 'Cosmetic treatments are generally not covered by insurance. Some clinics offer payment plans or third-party financing, which is worth reading carefully before signing, because the effective cost can exceed the sticker price.' },
    { t: 'h2', id: 'add-ons', text: 'Add-ons, and whether they are worth it' },
    { t: 'p', text: 'Most of the price variation above the base session comes from add-ons, and they are where quotes diverge most between clinics.' },
    {
      t: 'table',
      head: ['Add-on', 'Typical extra', 'What to ask'],
      rows: [
        ['PRP', '$150 - 500', 'Whether it is drawn and processed on site'],
        ['Radiofrequency', 'Varies widely', 'Whether the device is the same or separate'],
        ['Serums or exosomes', '$50 - 300', 'What specifically, and why for your skin'],
        ['LED after treatment', '$0 - 75', 'Often included; confirm'],
        ['Numbing', '$0 - 50', 'Sometimes billed separately'],
      ],
    },
    { t: 'p', text: 'The useful question is not whether an add-on works in general, but why this provider is recommending it for you. **A specific answer is a good sign; a general one is a menu.**' },
    { t: 'h2', id: 'comparing-quotes', text: 'Comparing quotes between clinics' },
    { t: 'p', text: 'Two clinics quoting $300 and $550 are often not quoting the same thing, and the gap usually resolves once you ask what is inside each number.' },
    {
      t: 'ol',
      items: [
        '**Ask for the full course price**, not the per-session rate.',
        '**Ask what is included** — numbing, aftercare products, follow-up.',
        '**Ask who performs it** and under what credential.',
        '**Ask what depth** and why that depth for your skin.',
        '**Ask about touch-ups** beyond the initial course, and what they cost.',
      ],
    },
    { t: 'note', title: 'Cheapest per session is rarely cheapest per course', text: 'A lower session price with add-ons billed separately, or a shorter recommended course from a provider who then suggests more, both end up above the headline figure. Compare totals.' },
  ],
  faq: [
    { q: 'How much is one microneedling session?', a: 'Commonly $200 to $800 depending on provider type, device, and treatment area. Medical settings sit at the higher end.' },
    { q: 'How many sessions do I need?', a: 'Providers typically recommend three to six, spaced weeks apart. Your provider will advise based on your skin rather than a fixed rule.' },
    { q: 'Is PRP microneedling more expensive?', a: 'Yes. Adding PRP commonly increases the cost by $150 to $500 per session.' },
    { q: 'Is at-home microneedling cheaper?', a: 'The devices cost less, but at-home rollers work at much shallower depths and carry infection risk if not handled properly. They are not equivalent to professional treatment.' },
    { q: 'Does insurance cover it?', a: 'Cosmetic treatments are generally not covered. Check with your insurer if the treatment has been recommended for a medical reason.' },
    { q: 'Are packages worth it?', a: 'They are often 10 to 20% cheaper, but only commit after you have had at least one session with that provider.' },
  ],
  related: [
    { href: '/en/microneedling-aftercare', label: 'Microneedling Aftercare, Day by Day' },
    { href: '/en/microneedling-vs-chemical-peel', label: 'Microneedling vs Chemical Peel' },
    { href: '/en/is-microneedling-worth-it', label: 'Is Microneedling Worth It?' },
  ],
}
