import type { EnPage } from './types'
import { EN_UPDATED_BATCH7, EN_UPDATED_BATCH7_ISO, MED_DISCLAIMER } from './common'

export const microneedlingBeforeAndAfter: EnPage = {
  path: '/en/microneedling-before-and-after',
  title: 'Microneedling Before and After: Realistic Timeline',
  h1: 'Microneedling Before and After: What to Expect',
  description:
    'What changes week by week after microneedling, why immediate photos mislead, and when results actually become visible.',
  keywords: ['microneedling before and after', 'microneedling results timeline', 'when will I see microneedling results'],
  category: 'Skin Treatments',
  stage: 16,
  updated: EN_UPDATED_BATCH7,
  updatedIso: EN_UPDATED_BATCH7_ISO,
  lead:
    '**The photos you see online are the problem.** Straight after a session, skin looks flushed and plump from inflammation — that is not the result. Meaningful change, where it happens, is gradual and typically discussed across **a course of sessions over several months**.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_DISCLAIMER },
    { t: 'h2', id: 'why-photos-mislead', text: 'Why “after” photos mislead' },
    {
      t: 'table',
      head: ['When the “after” was taken', 'What you are actually seeing'],
      rows: [
        ['Immediately after', 'Inflammation and temporary swelling — skin looks plump'],
        ['Day 1 - 3', 'Redness, possibly dryness'],
        ['Day 4 - 7', 'Possible flaking as skin settles'],
        ['Week 4 - 6', 'The earliest point worth judging a single session'],
        ['After a full course', 'Where gradual change is usually discussed'],
      ],
    },
    {
      t: 'p',
      text: 'A before-and-after taken twenty minutes apart shows swelling, not results. The plumpness fades within days, which is exactly why those photos are so persuasive and so unreliable. When a provider shows you their gallery, ask when each “after” was taken and under what lighting.',
    },
    { t: 'h2', id: 'results-timeline', text: 'The results timeline, as distinct from healing' },
    {
      t: 'p',
      text: 'Healing and results run on different clocks. Healing is the first week or so — redness, then possible flaking — and it is covered day by day in [Microneedling Healing Time](/en/microneedling-healing-time). Results are what is left once healing is over, and they are measured in weeks and months.',
    },
    {
      t: 'table',
      head: ['Time', 'Commonly reported'],
      rows: [
        ['Days 0 - 7', 'Recovery: redness first, then possible flaking — not a result'],
        ['Week 1 - 2', 'Skin appearance settling back toward baseline'],
        ['Week 2 - 4', 'Texture may feel smoother'],
        ['Week 4 - 6', 'The earliest fair point to judge how one session settled'],
        ['Across a course', 'Gradual change, if any — assessed at the end'],
      ],
    },
    {
      t: 'note',
      tone: 'info',
      title: 'Assessment belongs at the end of the course',
      text: 'Judging after session one is the most common way people misread this treatment, in both directions — writing it off too early, or crediting swelling as a result.',
    },
    { t: 'h2', id: 'what-results-means', text: 'What “results” honestly means' },
    {
      t: 'table',
      head: ['May improve the appearance of', 'Does not'],
      rows: [
        ['Surface texture', 'Remove scars'],
        ['Fine lines', 'Cure any condition'],
        ['Overall evenness', 'Produce the same result for everyone'],
        ['The look of some scarring', 'Replace medical treatment'],
      ],
    },
    {
      t: 'p',
      text: 'Results vary substantially between individuals and depend on your skin, the concern being addressed, needle depth, the provider’s skill and how many sessions are done. If acne scarring is the reason you are looking, scar type changes the picture entirely — see [Microneedling for Acne Scars](/en/microneedling-for-acne-scars).',
    },
    { t: 'h2', id: 'photographing-progress', text: 'Photographing your own progress' },
    {
      t: 'ol',
      items: [
        '**Take a “before” photo before your first session.** Most people forget, and memory is an unreliable comparison.',
        '**Same lighting and same time of day, every time.** Window light at a fixed hour works well.',
        '**No makeup, no filters.**',
        '**Same angle and distance** — mark where you stand.',
        '**Bare skin, at least 48 hours after a session**, so you are not photographing swelling.',
        '**Compare at four-to-six-week intervals**, not daily. Gradual change is invisible day to day.',
      ],
    },
    {
      t: 'p',
      text: 'This is the same point made in [Is Microneedling Worth It?](/en/is-microneedling-worth-it): a consistent photo at the start beats memory, because gradual change is hard to notice from the inside in either direction.',
    },
    { t: 'h2', id: 'red-flags', text: 'Red flags in provider photos' },
    {
      t: 'table',
      head: ['Flag', 'What it suggests'],
      rows: [
        ['Different lighting between before and after', 'The lighting is doing the work'],
        ['Makeup in the “after” only', 'Not a like-for-like comparison'],
        ['Different angle or expression', 'Changes how texture and lines read'],
        ['No timeframe stated', 'Ask — it may be same-day swelling'],
        ['Results that look immediate', 'Likely inflammation, not change'],
        ['No mention of how many sessions', 'Ask before assuming one session did it'],
      ],
    },
    {
      t: 'p',
      text: 'None of these mean a provider is being dishonest; clinic galleries are often put together casually. They do mean the photos cannot tell you what to expect. [How Many Microneedling Sessions Do You Need?](/en/how-many-microneedling-sessions) covers what to ask about the course behind any result you are shown.',
    },
  ],
  faq: [
    { q: 'When will I see results from microneedling?', a: 'A fair assessment is generally not before four to six weeks after a session, and meaningful change is usually judged after a full course.' },
    { q: 'Why does my skin look better right after a session?', a: 'Temporary swelling from inflammation. It fades within days and is not a result.' },
    { q: 'Do before-and-after photos online reflect reality?', a: 'Often they are taken too soon or under different lighting. Ask when the “after” was taken.' },
    { q: 'How do I track my own progress?', a: 'Same lighting, same angle, bare skin, compared at four-to-six-week intervals — starting with a photo before your first session.' },
    { q: 'Will microneedling work for me?', a: 'Results vary considerably. Consult a licensed medical provider about your specific skin.' },
  ],
  related: [
    { href: '/en/how-many-microneedling-sessions', label: 'How Many Microneedling Sessions Do You Need?' },
    { href: '/en/microneedling-cost', label: 'Microneedling Cost' },
    { href: '/en/is-microneedling-worth-it', label: 'Is Microneedling Worth It?' },
  ],
}
