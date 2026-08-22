import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, MED_DISCLAIMER, MED_STATE_SCOPE } from './common'

export const microneedlingAftercare: EnPage = {
  path: '/en/microneedling-aftercare',
  title: 'Microneedling Aftercare: Day by Day What to Do',
  h1: 'Microneedling Aftercare, Day by Day',
  description:
    'What to do in the first 24 hours, the first week, and beyond after microneedling, plus what to avoid and when to contact your provider.',
  keywords: ['microneedling aftercare', 'after microneedling', 'microneedling recovery', 'what to do after microneedling'],
  category: 'Skin Treatments',
  stage: 1,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**The first 24 hours matter most: keep skin clean, avoid actives, and do not apply makeup.** Redness for one to three days is expected. Follow your provider’s specific instructions, which override general guidance including this page.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_DISCLAIMER },
    { t: 'h2', id: 'timeline', text: 'The timeline' },
    {
      t: 'table',
      head: ['Period', 'What is typical', 'What to do'],
      rows: [
        ['0 - 24 hrs', 'Redness, warmth, tightness', 'Gentle cleanser only. No makeup. No exercise'],
        ['24 - 72 hrs', 'Redness fading, possible dryness', 'Bland moisturiser, sun protection'],
        ['Days 3 - 7', 'Possible flaking or roughness', 'Do not pick. Resume a gentle routine'],
        ['Week 1 - 2', 'Skin settling', 'Reintroduce actives only when your provider says'],
      ],
    },
    { t: 'h2', id: 'avoid', text: 'What to avoid, and for how long' },
    {
      t: 'table',
      head: ['Item', 'Why', 'How long'],
      rows: [
        ['Retinoids, AHA/BHA, vitamin C', 'Compromised barrier', 'Per provider, often several days'],
        ['Makeup', 'Infection risk on treated skin', '24 hrs minimum'],
        ['Sun exposure', 'Sensitivity is elevated', 'Strict SPF, several weeks'],
        ['Sweating, gym, sauna', 'Sweat on freshly treated skin', '24 - 48 hrs'],
        ['Swimming pools', 'Contamination risk', '48 - 72 hrs'],
        ['Picking or exfoliating', 'Scarring risk', 'Until fully settled'],
      ],
    },
    { t: 'p', text: 'The actives list is the one people underestimate. A routine built around retinol and acids is exactly the routine that needs pausing, and resuming it early is the most common reason recovery takes longer than expected.' },
    { t: 'h2', id: 'what-to-use', text: 'What to actually put on your skin' },
    {
      t: 'ul',
      items: [
        '**A bland, fragrance-free moisturiser.** This is not the week for a new product.',
        '**Sun protection**, once your provider says you may apply it.',
        '**Nothing else**, unless your provider supplied or specified it.',
      ],
    },
    { t: 'note', title: 'Simplicity is the whole strategy', text: 'Post-procedure skin does not need more ingredients, it needs fewer. Providers who send you home with a short list are not withholding anything.' },
    { t: 'h2', id: 'call-provider', text: 'When to contact your provider' },
    {
      t: 'ul',
      items: [
        '**Increasing pain** rather than decreasing.',
        '**Pus, spreading redness, or fever.**',
        '**Blistering.**',
        'Redness lasting well beyond what your provider described.',
      ],
    },
    { t: 'note', tone: 'warn', text: 'Do not wait it out. Post-procedure infection is uncommon but time-sensitive, and the cost of an unnecessary phone call is nothing compared with the cost of a delayed one.' },
    { t: 'h2', id: 'planning', text: 'Planning around the recovery' },
    { t: 'p', text: 'The practical constraint is not pain, it is appearance and the gym. Redness peaks on day one and most people are comfortable in public by day two or three, but the first session is the least predictable.' },
    {
      t: 'table',
      head: ['If you have', 'Book at least'],
      rows: [
        ['A wedding or event', '2 weeks before, and not your first session'],
        ['A normal work week', '1 - 2 days of visible redness to plan around'],
        ['A holiday with sun exposure', 'Well clear - sun sensitivity lasts weeks'],
        ['A regular gym schedule', '24 - 48 hrs off training'],
      ],
    },
    { t: 'h2', id: 'products', text: 'Reading a post-procedure product list' },
    { t: 'p', text: 'Providers vary in how much they supply and how much they expect you to buy. Neither approach is wrong, but it helps to know which you are dealing with.' },
    {
      t: 'table',
      head: ['Approach', 'What it means for you'],
      rows: [
        ['Provider supplies a small kit', 'Use it; it is matched to what they did'],
        ['Provider names product types', 'Buy the type, not necessarily the brand'],
        ['Provider sells a retail line', 'Reasonable, but ask what is essential vs optional'],
        ['No guidance at all', 'Ask - this is a fair question to press on'],
      ],
    },
    { t: 'p', text: 'If you are told simply to keep it bland and protected, that is complete advice rather than an omission. Post-procedure skin genuinely needs less, not more.' },
    { t: 'h2', id: 'mistakes', text: 'The mistakes that actually delay recovery' },
    {
      t: 'table',
      head: ['Mistake', 'Why it matters'],
      rows: [
        ['Resuming actives early', 'The single most common slip'],
        ['Makeup on day one', 'Applied with brushes and sponges onto treated skin'],
        ['Skipping sun protection', 'Sensitivity is elevated for weeks, not days'],
        ['Picking flaking skin', 'Turns a cosmetic phase into a scarring risk'],
        ['A hot shower or sauna on day one', 'Heat and sweat on freshly treated skin'],
        ['Booking a second session too soon', 'Spacing exists for a reason'],
      ],
    },
    { t: 'note', tone: 'warn', text: 'If you are unsure whether something is allowed yet, the answer is to ask your provider rather than to try it and watch. Recovery is short enough that waiting costs almost nothing.' },
    { t: 'h2', id: 'week-two', text: 'Week two onwards' },
    { t: 'p', text: 'Once the visible recovery is over, the question becomes when to resume a normal routine and when to book the next session. Both are provider decisions rather than calendar ones.' },
    {
      t: 'table',
      head: ['Item', 'Typical guidance'],
      rows: [
        ['Retinoids and acids', 'Reintroduce one at a time, when your provider says'],
        ['Vitamin C', 'Same - one product at a time'],
        ['Exfoliation', 'Last thing to return'],
        ['Sun protection', 'Continue strictly regardless'],
        ['Next session', 'On the schedule your provider set'],
      ],
    },
    { t: 'p', text: 'Reintroducing everything at once is the common error. If the skin reacts you will not know which product caused it, and you lose the information as well as the week.' },
    { t: 'h2', id: 'multiple-sessions', text: 'Aftercare across a course' },
    { t: 'p', text: 'A course means repeating this several times, and the aftercare compounds. Skin that has not fully settled from one session going into the next is the situation spacing is designed to prevent.' },
    {
      t: 'ul',
      items: [
        '**Tell your provider how the previous session went**, including anything that surprised you.',
        '**Do not shorten the gap** to fit a deadline.',
        '**Flag any reaction**, even one that resolved, because it may change the plan.',
        '**Keep sun protection consistent throughout the whole course**, not just the days after each session.',
      ],
    },
  ],
  faq: [
    { q: 'How long is the redness?', a: 'Commonly one to three days, though it varies by treatment depth and individual.' },
    { q: 'When can I wear makeup?', a: 'Usually after 24 hours, but follow your provider’s instruction rather than a general rule.' },
    { q: 'When can I use retinol again?', a: 'Ask your provider. It depends on the depth used and how your skin responded.' },
    { q: 'Can I exercise?', a: 'Typically not for 24 to 48 hours. Sweat on freshly treated skin is the concern.' },
    { q: 'Is peeling normal?', a: 'Some flaking can occur in the first week. Do not pull at it.' },
    { q: 'What should I put on my skin?', a: 'A bland, fragrance-free moisturiser and sun protection, unless your provider specifies otherwise.' },
  ],
  related: [
    { href: '/en/microneedling-cost', label: 'How Much Does Microneedling Cost?' },
    { href: '/en/microneedling-healing-time', label: 'How Long Does Microneedling Take to Heal?' },
    { href: '/en/microneedling-side-effects', label: 'Microneedling Side Effects' },
  ],
}
