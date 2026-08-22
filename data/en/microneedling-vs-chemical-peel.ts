import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, MED_DISCLAIMER, MED_STATE_SCOPE } from './common'

export const microneedlingVsChemicalPeel: EnPage = {
  path: '/en/microneedling-vs-chemical-peel',
  title: 'Microneedling vs Chemical Peel: How to Choose',
  h1: 'Microneedling vs Chemical Peel: What Is the Difference?',
  description:
    'Microneedling works mechanically, chemical peels work chemically. How downtime, cost, session counts and suitability compare between the two.',
  keywords: ['microneedling vs chemical peel', 'chemical peel vs microneedling', 'which is better microneedling or peel'],
  category: 'Skin Treatments',
  stage: 1,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Microneedling creates controlled micro-injuries with fine needles. Chemical peels use acid solutions to remove surface layers.** Different mechanisms, different downtime profiles, different suitability. Neither is universally better, and a licensed provider should assess which fits your skin.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_DISCLAIMER },
    { t: 'h2', id: 'side-by-side', text: 'Side by side' },
    {
      t: 'table',
      head: ['', 'Microneedling', 'Chemical peel'],
      rows: [
        ['Mechanism', 'Mechanical micro-injury', 'Chemical exfoliation'],
        ['Typical downtime', '1 - 3 days redness', 'Varies hugely by depth - hours to weeks'],
        ['Sessions', 'Usually 3 - 6', '1 to a series, depending on depth'],
        ['Cost per session', '$200 - 800', '$100 - 600+'],
        ['Peeling', 'Minimal', 'Often significant'],
        ['Depth control', 'Adjustable needle depth', 'Determined by solution and strength'],
      ],
    },
    { t: 'h2', id: 'peel-depths', text: 'Peel depth changes the comparison entirely' },
    {
      t: 'table',
      head: ['Depth', 'Downtime', 'Notes'],
      rows: [
        ['Superficial', 'Minimal', 'Often a lunchtime treatment'],
        ['Medium', 'Days of peeling', 'More recovery planning needed'],
        ['Deep', 'Extended, medically supervised', 'A significant procedure'],
      ],
    },
    {
      t: 'note',
      title: 'Chemical peel spans an enormous range',
      text: 'Comparing microneedling to a superficial peel and comparing it to a deep peel are two different conversations. When someone tells you a peel had more or less downtime than microneedling, the first question is which depth they mean.',
    },
    { t: 'h2', id: 'skin-tone', text: 'Skin tone considerations' },
    { t: 'p', text: 'Both procedures carry a risk of post-inflammatory hyperpigmentation, and that risk profile differs by skin type. **This is a conversation to have with a licensed provider who can assess your Fitzpatrick type**, not something to decide from an article.' },
    { t: 'p', text: 'The practical step is to ask a prospective provider how much experience they have with your skin type specifically, and what they adjust for it. A provider who treats that as a real question is the one to book with.' },
    { t: 'h2', id: 'both', text: 'Can you do both?' },
    { t: 'p', text: 'Some providers alternate or combine them across a treatment plan. **Not on the same day, and not without professional guidance.** Stacking two barrier-disrupting procedures without spacing is how complications happen.' },
    { t: 'h2', id: 'choosing', text: 'How the decision usually goes' },
    {
      t: 'table',
      head: ['Your situation', 'What providers often weigh'],
      rows: [
        ['Little tolerance for visible downtime', 'Superficial peel or lighter microneedling'],
        ['Concerned about pigmentation risk', 'Depends on skin type - provider assessment'],
        ['Wanting one treatment rather than a course', 'Peels can be single-session; microneedling usually is not'],
        ['Very sensitive or reactive skin', 'Provider assessment first, regardless of technique'],
        ['Active acne or inflammation', 'Neither, until it is addressed'],
      ],
    },
    { t: 'h2', id: 'downtime-planning', text: 'Planning downtime for each' },
    { t: 'p', text: 'Downtime is the practical difference most people are actually choosing between, and it is where the two diverge most.' },
    {
      t: 'table',
      head: ['', 'Microneedling', 'Superficial peel', 'Medium peel'],
      rows: [
        ['Visible day 1', 'Redness', 'Mild redness', 'Redness'],
        ['Visible days 2 - 4', 'Fading', 'Usually settled', 'Peeling'],
        ['Back to normal', 'About a week', 'Days', 'One to two weeks'],
        ['Makeup', 'After 24 hrs typically', 'Often sooner', 'Per provider'],
        ['Plan around an event', 'Two weeks clear', 'One week clear', 'Several weeks clear'],
      ],
    },
    { t: 'h2', id: 'sessions-cost', text: 'Cost across a plan, not per session' },
    { t: 'p', text: 'Per-session pricing favours peels; course pricing narrows the gap, because microneedling is usually prescribed as a course while peels may be single or serial depending on depth and goal.' },
    {
      t: 'table',
      head: ['Scenario', 'Rough total'],
      rows: [
        ['Microneedling, 4 sessions at $350', 'approx. $1,400'],
        ['Superficial peels, 6 sessions at $150', 'approx. $900'],
        ['Medium peel, single', '$400 - 800'],
        ['Either, plus maintenance', 'Ongoing - ask before you start'],
      ],
    },
    { t: 'p', text: '**Ask both questions at consultation: what does a full plan cost, and what does maintaining the result cost afterwards.** The second is the one that gets left out.' },
    { t: 'h2', id: 'questions', text: 'What to ask at a consultation' },
    { t: 'p', text: 'If you are genuinely undecided, the consultation is where it gets resolved. These are the questions that produce a useful answer rather than a menu.' },
    {
      t: 'ol',
      items: [
        '**Given what I want to address, which would you choose and why?**',
        'What depth or strength would you use, and what does that mean for downtime?',
        'How many sessions, and over what period?',
        'What are the risks for my skin type specifically?',
        'What does maintaining the result involve afterwards?',
      ],
    },
    { t: 'h2', id: 'not-either-or', text: 'It is often not either-or' },
    { t: 'p', text: 'Providers frequently use both across a longer plan, choosing between them by season, by what the skin needs at that point, and by how much downtime you can absorb.' },
    {
      t: 'table',
      head: ['Situation', 'Often favours'],
      rows: [
        ['Summer, high sun exposure', 'More conservative options either way'],
        ['A period with no events', 'Whichever needs more downtime'],
        ['Skin currently sensitised', 'Neither, until it settles'],
        ['Wanting to start gently', 'Superficial peel first, commonly'],
      ],
    },
    { t: 'p', text: 'Treating the choice as permanent adds pressure that the decision does not carry. **You are choosing a starting point, not a lifelong category.**' },
  ],
  faq: [
    { q: 'Which is better for me?', a: 'It depends on your skin, your goals, and your tolerance for downtime. A licensed provider should assess you rather than an article deciding it.' },
    { q: 'Which has more downtime?', a: 'It depends on peel depth. Superficial peels often have less than microneedling; medium and deep peels have considerably more.' },
    { q: 'Which is cheaper?', a: 'Superficial peels are usually cheaper per session. Deep peels can cost more than microneedling.' },
    { q: 'Can I do both?', a: 'Some treatment plans alternate them, but never on the same day and never without professional guidance.' },
    { q: 'Are they safe for darker skin tones?', a: 'Both carry pigmentation risks that vary by skin type. Seek a provider experienced with your skin type specifically.' },
  ],
  related: [
    { href: '/en/microneedling-cost', label: 'How Much Does Microneedling Cost?' },
    { href: '/en/microneedling-side-effects', label: 'Microneedling Side Effects' },
    { href: '/en/microneedling-aftercare', label: 'Microneedling Aftercare, Day by Day' },
  ],
}
