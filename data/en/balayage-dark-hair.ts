import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO } from './common'

export const balayageDarkHair: EnPage = {
  path: '/en/balayage-dark-hair',
  title: 'Balayage on Dark Hair: Sessions, Cost and Realism',
  h1: 'Balayage on Dark Hair: What Is Actually Achievable',
  description:
    'Going light from dark hair usually takes two to three sessions. What is realistic in one appointment, what it costs in total, and how to avoid brassiness.',
  keywords: ['balayage dark hair', 'balayage on black hair', 'balayage brunette', 'lightening dark hair'],
  category: 'Hair Colour',
  stage: 3,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Dark hair usually needs two to three sessions to reach a light balayage, spaced weeks apart.** A colourist who promises platinum ends from black hair in one appointment is either overpromising or planning to over-process your hair.',
  blocks: [
    { t: 'h2', id: 'why-sessions', text: 'Why it takes multiple sessions' },
    { t: 'p', text: 'Lifting dark pigment passes through warm underlying tones — red, then orange, then yellow. **Getting past those stages safely takes time and multiple controlled sessions.**' },
    { t: 'p', text: 'Attempting it all at once risks breakage, uneven and patchy lift, persistent brassiness, and hair compromised enough that it cannot hold toner properly. None of those are fixable in the same appointment.' },
    { t: 'h2', id: 'expectations', text: 'Realistic expectations' },
    {
      t: 'table',
      head: ['Starting point', 'Session 1 result', 'Sessions to target'],
      rows: [
        ['Dark brown', 'Caramel or warm brown', '2'],
        ['Black, natural', 'Warm brown', '2 - 3'],
        ['Box-dyed black', 'Unpredictable', '3 - 4, sometimes more'],
        ['Previously coloured, uneven', 'Varies by section', 'Assessment needed'],
      ],
    },
    { t: 'p', text: '**Box dye is the biggest complication.** It deposits unpredictably and can build up over years, and a colourist often cannot tell what is underneath until they start lifting.' },
    { t: 'h2', id: 'cost', text: 'Total cost' },
    {
      t: 'table',
      head: ['Sessions', 'Typical total'],
      rows: [
        ['2', '$400 - 700'],
        ['3', '$600 - 1,000'],
        ['4 or more, correction territory', '$800 - 1,600'],
      ],
    },
    { t: 'p', text: '**Ask for the full plan and total cost at consultation**, not just session one. A colourist who will not estimate the whole journey is either uncertain about your hair or avoiding the conversation, and both are worth knowing.' },
    { t: 'h2', id: 'brassiness', text: 'Managing brassiness' },
    { t: 'p', text: 'Warmth is not a mistake — it is a stage. Understanding that changes how the intermediate results feel.' },
    {
      t: 'ul',
      items: [
        'Toner or gloss at each session to manage the tone you are at.',
        'Blue or purple shampoo at home, about weekly.',
        '**A realistic target.** A warm-toned light brown often looks better on dark hair than a forced ash.',
      ],
    },
    { t: 'h2', id: 'protecting', text: 'Protecting your hair through the process' },
    {
      t: 'table',
      head: ['Measure', 'Why'],
      rows: [
        ['Bond builder during the service', 'Reduces structural damage during lifting'],
        ['Spacing sessions', 'Weeks between, not days'],
        ['Accepting a warmer target', 'Less lift required means less damage'],
        ['Cutting damaged ends first', 'Do not spend money lightening hair you will cut'],
        ['Deep conditioning between sessions', 'Keeps hair in a state that can take the next one'],
      ],
    },
    { t: 'note', title: 'A refusal is expertise, not reluctance', text: 'A good colourist may tell you your hair cannot take it right now. That answer costs them the appointment and saves you the breakage, which is a reasonable indicator of who to book with.' },
    { t: 'h2', id: 'timeline', text: 'How long the whole thing takes' },
    { t: 'p', text: 'People often plan for a day and are surprised it is a season. Mapping it out beforehand makes the intermediate stages easier to live with.' },
    {
      t: 'table',
      head: ['Stage', 'When'],
      rows: [
        ['Consultation', 'Before anything, ideally a separate visit'],
        ['Session 1', 'Day one - expect warm, not light'],
        ['Gap', 'Several weeks, per your colourist'],
        ['Session 2', 'Closer to target'],
        ['Session 3 if needed', 'Several weeks later again'],
        ['Maintenance begins', 'Gloss every 6 - 8 weeks from there'],
      ],
    },
    { t: 'h2', id: 'between-sessions', text: 'Living with the in-between stage' },
    { t: 'p', text: 'The hardest part of a multi-session plan is the weeks in the middle, when your hair is neither what it was nor what you asked for. Knowing that in advance makes it far easier.' },
    {
      t: 'table',
      head: ['Stage', 'How it looks', 'What helps'],
      rows: [
        ['After session 1', 'Warmer than the target, often caramel', 'A gloss at the end of the session'],
        ['Weeks 2 - 6', 'Warmth may creep back as gloss fades', 'Blue or purple shampoo weekly'],
        ['Before session 2', 'Noticeably warm', 'This is expected, not a failure'],
        ['After session 2', 'Close to target for many people', 'Gloss again'],
      ],
    },
    { t: 'p', text: 'Asking your colourist to gloss at the end of each session, rather than leaving the raw lift, is what makes the intermediate stages liveable. It costs a little more per visit and it is usually worth it.' },
    { t: 'h2', id: 'box-dye', text: 'If you have used box dye' },
    { t: 'p', text: 'This is the single most important thing to disclose, and the reason colourists ask about it so insistently.' },
    {
      t: 'table',
      head: ['What box dye does', 'Consequence'],
      rows: [
        ['Deposits more pigment than salon colour', 'Harder to lift through'],
        ['Builds up over repeated applications', 'Uneven density along the strand'],
        ['Can contain metallic salts in some products', 'Unpredictable reactions with lightener'],
        ['Is invisible once grown out at the root', 'A colourist cannot see the history'],
      ],
    },
    { t: 'note', tone: 'warn', title: 'Tell them even if it was years ago', text: 'Box dye on the mid-lengths and ends is still there until it is cut off. A colourist who knows will strand test and plan around it. One who does not may find out mid-service, which is the worst time to find out.' },
  ],
  faq: [
    { q: 'Can I get balayage on black hair?', a: 'Yes, but it usually takes two to three sessions spaced weeks apart to get there safely.' },
    { q: 'Why did mine turn orange?', a: 'That is an intermediate lifting stage rather than a mistake. Toner addresses the appearance; further lightening moves past it.' },
    { q: 'How much does it cost in total?', a: 'Commonly $400 to $1,000 across the full plan, more if correction is involved.' },
    { q: 'Is one-session lightening possible?', a: 'Sometimes from lighter starting points. On black hair it generally is not advisable.' },
    { q: 'Does box dye make it harder?', a: 'Significantly. Tell your colourist about every colour you have used, including how long ago.' },
  ],
  related: [
    { href: '/en/balayage-cost', label: 'How Much Does Balayage Cost?' },
    { href: '/en/balayage-damage', label: 'Does Balayage Damage Your Hair?' },
    { href: '/en/balayage-gone-wrong', label: 'Balayage Gone Wrong: Your Options' },
  ],
}
