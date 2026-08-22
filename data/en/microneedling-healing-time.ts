import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, MED_DISCLAIMER, MED_STATE_SCOPE } from './common'

export const microneedlingHealingTime: EnPage = {
  path: '/en/microneedling-healing-time',
  title: 'How Long Does Microneedling Take to Heal?',
  h1: 'How Long Does Microneedling Take to Heal?',
  description:
    'Most redness settles in one to three days, with skin looking normal within about a week. The realistic timeline and what affects it.',
  keywords: ['microneedling healing time', 'how long does microneedling take to heal', 'microneedling downtime'],
  category: 'Skin Treatments',
  stage: 1,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Visible redness usually settles within one to three days, and skin generally looks normal within about a week.** Deeper treatments take longer. Your provider’s estimate for your specific treatment is the one to follow.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_DISCLAIMER },
    { t: 'h2', id: 'timeline', text: 'Typical timeline' },
    {
      t: 'table',
      head: ['Time', 'Common experience'],
      rows: [
        ['Immediately after', 'Redness like moderate sunburn, warmth'],
        ['Day 1', 'Redness peaks, possible tightness'],
        ['Day 2 - 3', 'Redness fading, possible dryness'],
        ['Day 4 - 7', 'Flaking or roughness may appear'],
        ['Week 1 - 2', 'Skin appearance settling'],
      ],
    },
    { t: 'h2', id: 'what-affects', text: 'What affects healing time' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Needle depth', 'Deeper treatments take longer'],
        ['Number of passes', 'More passes, more recovery'],
        ['Individual healing', 'Varies significantly between people'],
        ['Aftercare compliance', 'Sun exposure and actives slow it'],
        ['Add-ons such as PRP or RF', 'May change the profile'],
      ],
    },
    { t: 'p', text: 'Depth is the dominant variable, and it is set by your provider based on what they are treating. That is why two people can describe very different recoveries from what sounds like the same procedure.' },
    { t: 'h2', id: 'planning', text: 'Planning around it' },
    {
      t: 'ul',
      items: [
        '**Do not schedule within a week of a major event** if you are new to it.',
        'The first session is the least predictable, so treat its timing conservatively.',
        'Providers often advise allowing time before assessing how the first session settled.',
      ],
    },
    { t: 'h2', id: 'first-vs-later', text: 'Why the first session feels different' },
    { t: 'p', text: 'People often report that later sessions feel more predictable. Part of that is knowing what to expect, and part is that the provider has seen how your skin responded and can adjust.' },
    {
      t: 'table',
      head: ['', 'First session', 'Later sessions'],
      rows: [
        ['Predictability', 'Lowest', 'Higher'],
        ['Depth', 'Often conservative', 'Adjusted to your response'],
        ['Your planning', 'Allow extra buffer', 'You know your own timeline'],
      ],
    },
    { t: 'note', title: 'Increasing pain is not part of healing', text: 'Tightness and sensitivity that fade are expected. Pain that grows over days is not, and it warrants contacting your provider rather than waiting to see.' },
    { t: 'h2', id: 'depth', text: 'Depth is the variable that matters most' },
    { t: 'p', text: 'Almost every difference in reported recovery traces back to depth, which your provider sets based on what they are treating and how your skin responded previously.' },
    {
      t: 'table',
      head: ['Treatment approach', 'Typical recovery pattern'],
      rows: [
        ['Conservative depth, single pass', 'Redness under 24 hrs for many people'],
        ['Moderate depth', 'Redness 1 - 3 days, some flaking'],
        ['Deeper treatment', 'Longer redness, more visible flaking'],
        ['With PRP or RF added', 'May differ - ask your provider directly'],
      ],
    },
    { t: 'p', text: 'This is also why comparing your recovery with someone else’s is unreliable. Unless you know their depth, you are comparing different procedures under one name.' },
    { t: 'h2', id: 'speeding-up', text: 'What helps, and what does not' },
    {
      t: 'table',
      head: ['Action', 'Effect on recovery'],
      rows: [
        ['Following aftercare exactly', 'The main lever you control'],
        ['Sun protection', 'Prevents the complication that lasts longest'],
        ['Bland moisturiser', 'Comfort and barrier support'],
        ['Adding actives to speed it up', 'Counterproductive'],
        ['Exfoliating flaking skin', 'Counterproductive and risky'],
        ['A second session sooner', 'Not a shortcut; spacing exists for a reason'],
      ],
    },
    { t: 'note', title: 'There is no accelerator', text: 'The realistic goal is to avoid extending recovery rather than to shorten it. Everything on the helpful side of that table is about not interfering.' },
    { t: 'h2', id: 'what-people-report', text: 'Why reported timelines vary so widely' },
    { t: 'p', text: 'Search around and you will find recovery described as anything from a few hours to two weeks. Most of that spread is explained by three variables rather than by disagreement.' },
    {
      t: 'table',
      head: ['Variable', 'How much it moves the timeline'],
      rows: [
        ['Depth used', 'The largest factor by some margin'],
        ['Number of passes', 'Meaningful'],
        ['Add-ons such as PRP or RF', 'Can change the profile entirely'],
        ['Individual healing', 'Genuinely variable between people'],
        ['Whether aftercare was followed', 'Extends it when it is not'],
      ],
    },
    { t: 'p', text: 'When someone tells you their recovery took a day, the useful follow-up is what depth they had. Without that, the number does not transfer.' },
    { t: 'h2', id: 'booking-rhythm', text: 'How sessions are usually spaced' },
    { t: 'p', text: 'Providers space sessions to let the skin complete its response before the next one, and that spacing is part of the protocol rather than scheduling convenience.' },
    {
      t: 'ul',
      items: [
        '**Weeks between sessions** is standard; your provider sets the exact interval.',
        '**Shortening the gap does not accelerate results** and increases risk.',
        '**A full course runs over months**, which is worth knowing before you start.',
        '**Assessment happens at the end**, not after session one.',
      ],
    },
    { t: 'note', title: 'Plan the course, not the appointment', text: 'People often book the first session around a date and then find the rest of the course collides with things. Mapping the whole schedule at the start avoids that.' },
  ],
  faq: [
    { q: 'How long is the redness?', a: 'Commonly one to three days, varying with depth and individual response.' },
    { q: 'When can I go back to work?', a: 'Many people return the next day. Whether you are comfortable depends on your redness and your setting.' },
    { q: 'When will I look normal?', a: 'Generally about a week, though this varies between people and with treatment depth.' },
    { q: 'Does it hurt afterwards?', a: 'Tightness and sensitivity are common. Increasing pain is not, and warrants contacting your provider.' },
    { q: 'How long between sessions?', a: 'Providers typically space them by weeks. Follow the schedule they set for your skin.' },
  ],
  related: [
    { href: '/en/microneedling-aftercare', label: 'Microneedling Aftercare, Day by Day' },
    { href: '/en/microneedling-cost', label: 'How Much Does Microneedling Cost?' },
    { href: '/en/is-microneedling-worth-it', label: 'Is Microneedling Worth It?' },
  ],
}
