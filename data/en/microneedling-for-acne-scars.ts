import type { EnPage } from './types'
import { EN_UPDATED_BATCH7, EN_UPDATED_BATCH7_ISO, MED_DISCLAIMER, MED_STATE_SCOPE } from './common'

export const microneedlingForAcneScars: EnPage = {
  path: '/en/microneedling-for-acne-scars',
  title: 'Microneedling for Acne Scars: What to Know',
  h1: 'Microneedling for Acne Scars',
  description:
    'Scar type determines whether microneedling is even the right option. What it may help, what it won’t, and why a doctor should assess first.',
  keywords: ['microneedling for acne scars', 'microneedling acne scars', 'does microneedling help acne scars'],
  category: 'Skin Treatments',
  stage: 16,
  updated: EN_UPDATED_BATCH7,
  updatedIso: EN_UPDATED_BATCH7_ISO,
  lead:
    '**Scar type matters more than the treatment you choose.** Different kinds of acne scarring respond differently, and some are not addressed by microneedling at all. A licensed medical provider should assess what you actually have before you book anything.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_DISCLAIMER },
    { t: 'h2', id: 'scar-types', text: 'Scar types are not interchangeable' },
    {
      t: 'table',
      head: ['Type', 'What it looks like'],
      rows: [
        ['Atrophic (depressed)', 'Indented — often described as ice pick, boxcar or rolling'],
        ['Hypertrophic or keloid (raised)', 'Raised above the surrounding skin'],
        ['Post-inflammatory hyperpigmentation', 'Dark marks — not scarring at all'],
        ['Post-inflammatory erythema', 'Red or pink marks — also not scarring'],
      ],
    },
    {
      t: 'p',
      text: 'The last two rows are very commonly mistaken for scars. They are discolouration rather than a change in the skin’s structure, they often fade on their own over months, and they are a different problem with different approaches.',
    },
    {
      t: 'note',
      tone: 'info',
      title: 'This distinction alone can save a lot of money',
      text: 'Booking a course of a structural treatment for marks that would have faded anyway is one of the more expensive misunderstandings in this category. A provider should identify what you have before proposing anything.',
    },
    { t: 'h2', id: 'raised-scars', text: 'Why raised scars are different' },
    {
      t: 'p',
      text: 'Approaches used for depressed scarring are not automatically appropriate for raised or keloid scarring, and in some cases may be counterproductive. Anyone with a history of keloid scarring should raise it explicitly before any procedure — it is one of the conditions listed in [Microneedling Side Effects](/en/microneedling-side-effects) that changes the risk assessment.',
    },
    { t: 'h2', id: 'honest-expectations', text: 'What to expect, honestly' },
    {
      t: 'table',
      head: ['Reality', 'Why it matters'],
      rows: [
        ['Removal is not a realistic outcome', 'Scarring is a structural change in the skin'],
        ['Improvement in appearance is what gets discussed', 'And it varies considerably between people'],
        ['Multiple sessions are typical', 'Commonly a course of three to six, weeks apart'],
        ['Results differ by scar type and depth', 'Two people with “acne scars” may have different problems'],
        ['Some scarring responds poorly', 'An honest provider will say so at assessment'],
      ],
    },
    {
      t: 'p',
      text: 'No treatment removes scars, and any provider or article that promises removal is overselling. [How Many Microneedling Sessions Do You Need?](/en/how-many-microneedling-sessions) covers how to evaluate a recommended course, and [Microneedling Cost](/en/microneedling-cost) what that course typically totals.',
    },
    { t: 'h2', id: 'other-approaches', text: 'Other approaches exist' },
    {
      t: 'p',
      text: 'Depending on scar type, a medical provider may discuss other options. Which one is appropriate is a medical judgement rather than a consumer choice — which is exactly why it makes sense to be assessed first rather than booking a procedure based on an article, including this one.',
    },
    { t: 'h2', id: 'before-you-book', text: 'Before you book' },
    {
      t: 'table',
      head: ['Do', 'Why'],
      rows: [
        ['See a licensed medical provider for assessment', 'The single most important step'],
        ['Ask what scar type you actually have', 'It decides whether this is the right option at all'],
        ['Disclose any history of keloid scarring', 'Changes the risk assessment'],
        ['Disclose isotretinoin use', 'Consult your prescriber about timing'],
        ['Ask about your state’s scope rules for the provider', 'Who may perform it varies by state'],
        ['Ask what realistic improvement looks like', 'Sets an expectation you can measure'],
        ['Treat active acne first', 'Treating scarring over active acne is generally not the sequence'],
      ],
    },
    {
      t: 'p',
      text: 'Who is permitted to perform microneedling, and at what depth, is set state by state — see [Who Can Perform Microneedling?](/en/who-can-perform-microneedling) before booking.',
    },
    { t: 'h2', id: 'red-flags', text: 'Red flags' },
    {
      t: 'table',
      head: ['Claim or behaviour', 'Why it is a flag'],
      rows: [
        ['“Removes acne scars”', 'Not a realistic outcome'],
        ['“Guaranteed results”', 'Results vary by scar type and by person'],
        ['No assessment of scar type before booking', 'Walk away'],
        ['No mention of how many sessions', 'Ask before paying anything'],
        ['Pressure to buy a package immediately', 'A sales tactic, not a treatment plan'],
        ['No questions about your medical history', 'A safety gap'],
      ],
    },
    {
      t: 'p',
      text: 'Acne scarring is a medical concern. The most useful thing this page can do is send you to a licensed medical provider with better questions than you would otherwise have had.',
    },
    { t: 'note', tone: 'info', text: MED_STATE_SCOPE },
  ],
  faq: [
    { q: 'Does microneedling help acne scars?', a: 'It may improve the appearance of some types of scarring. Scar type determines whether it is appropriate at all.' },
    { q: 'Will it remove my scars?', a: 'No treatment removes scarring. Improvement in appearance is what is realistically discussed.' },
    { q: 'What if my “scars” are actually dark marks?', a: 'Post-inflammatory hyperpigmentation is discolouration rather than scarring, and a different issue. A provider can tell you which you have.' },
    { q: 'I get keloid scars — is microneedling safe for me?', a: 'Raise this explicitly with a medical provider before any procedure. It changes the risk assessment.' },
    { q: 'What should I do first?', a: 'Get assessed by a licensed medical provider, and address active acne before treating scarring.' },
  ],
  related: [
    { href: '/en/microneedling-side-effects', label: 'Microneedling Side Effects' },
    { href: '/en/who-can-perform-microneedling', label: 'Who Can Perform Microneedling?' },
    { href: '/en/how-many-microneedling-sessions', label: 'How Many Microneedling Sessions Do You Need?' },
  ],
}
