import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO } from './common'

export const howLongDoesBalayageLast: EnPage = {
  path: '/en/how-long-does-balayage-last',
  title: 'How Long Does Balayage Last Before a Retouch?',
  h1: 'How Long Does Balayage Last?',
  description:
    'Balayage needs a retouch every three to four months, but toner fades in four to eight weeks. The difference, and how to stretch it.',
  keywords: ['how long does balayage last', 'balayage retouch', 'balayage toner fading'],
  category: 'Hair Colour',
  stage: 3,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**The balayage itself lasts three to four months before a retouch.** But the toner fades in four to eight weeks, which is why hair that looked perfect starts looking brassy long before you are due back.',
  blocks: [
    { t: 'h2', id: 'two-timelines', text: 'Two different timelines' },
    {
      t: 'table',
      head: ['', 'Lifespan', 'What happens'],
      rows: [
        ['The lightening', '3 - 4 months', 'Grows out softly - that is the point of the technique'],
        ['The toner or gloss', '4 - 8 weeks', 'Fades, revealing warmth underneath'],
      ],
    },
    { t: 'p', text: '**Most people book a full retouch when the toner fades**, assuming the whole service has expired. It has not. A gloss refresh at $30 to $80 buys another six to eight weeks at a fraction of the cost of a full balayage.' },
    { t: 'h2', id: 'schedule', text: 'The maintenance rhythm' },
    {
      t: 'table',
      head: ['Month', 'What you need'],
      rows: [
        ['0', 'Full balayage'],
        ['1.5 - 2', 'Gloss refresh'],
        ['3 - 4', 'Gloss plus partial retouch, or full'],
        ['6', 'Full balayage again'],
      ],
    },
    { t: 'p', text: '**Two glosses between balayages** is the standard rhythm, and it is the cheapest way to keep colour looking fresh. Over a year it costs meaningfully less than treating every fade as a full appointment.' },
    { t: 'h2', id: 'fading', text: 'What makes it fade faster' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Hot water washing', 'Opens the cuticle, colour escapes'],
        ['Washing frequently', 'More exposure, faster fade'],
        ['Sulphate shampoos', 'Strip colour faster'],
        ['Sun exposure', 'Fades and shifts tone warmer'],
        ['Chlorine and salt water', 'Both, and can shift tone dramatically'],
        ['Heat styling', 'Accelerates everything above'],
      ],
    },
    { t: 'h2', id: 'stretching', text: 'Stretching it' },
    {
      t: 'ol',
      items: [
        '**Cooler water.** The single easiest change, and the one with the clearest effect.',
        'Sulphate-free, colour-safe shampoo.',
        'Wash less often, with dry shampoo between.',
        'Purple or blue shampoo once a week if brassiness is the specific issue.',
        'Heat protectant, and lower styling temperatures.',
        'UV protection in summer.',
      ],
    },
    { t: 'h2', id: 'when-to-book', text: 'Reading your own hair' },
    { t: 'p', text: 'Knowing which of the two timelines has run out tells you which appointment to book, and it saves people a great deal of money over a year.' },
    {
      t: 'table',
      head: ['What you see', 'What has happened', 'Book'],
      rows: [
        ['Warm or brassy tone, placement still good', 'Toner has faded', 'A gloss'],
        ['Colour fine, but a line at the root', 'Grow-out', 'A partial retouch'],
        ['Both', 'Both', 'Full appointment'],
        ['Dull overall, no obvious line', 'Buildup or hard water', 'Ask about a clarifying treatment'],
        ['Uneven patches', 'Not a timeline issue', 'Discuss correction'],
      ],
    },
    { t: 'note', title: 'Bring this distinction to the salon', text: 'Saying "I think the toner has gone but the placement is still fine" gives a colourist more to work with than "it needs doing", and it often results in a shorter, cheaper appointment.' },
    { t: 'h2', id: 'gloss-vs-toner', text: 'Gloss, toner, and why the words blur' },
    { t: 'p', text: 'Salons use these terms loosely, which makes it hard to know what you are booking. Functionally they do a similar job for your purposes.' },
    {
      t: 'table',
      head: ['Term', 'Roughly means'],
      rows: [
        ['Toner', 'Adjusts unwanted warmth after lightening'],
        ['Gloss', 'Adds shine and refreshes tone'],
        ['Colour refresh', 'Usually the same thing under a different name'],
        ['Clear gloss', 'Shine without changing tone'],
        ['In-salon treatment', 'May or may not include tone - ask'],
      ],
    },
    { t: 'p', text: 'When booking, describe the outcome rather than the term: "it has gone brassy and I want it cooled down" gets you the right appointment regardless of what the salon calls it.' },
    { t: 'h2', id: 'growth-rate', text: 'Your growth rate changes the interval' },
    { t: 'p', text: 'Hair grows at roughly a centimetre a month on average, but the spread around that average is wide enough to move your retouch schedule by weeks.' },
    {
      t: 'table',
      head: ['If your hair grows', 'Retouch nearer'],
      rows: [
        ['Faster than average', '3 months'],
        ['About average', '3 - 4 months'],
        ['Slower than average', '4 - 5 months'],
        ['With a strong natural root contrast', 'Sooner regardless of speed'],
        ['With little contrast at the root', 'You can stretch further'],
      ],
    },
    { t: 'p', text: '**Contrast matters more than speed.** Someone with dark roots under a light balayage sees grow-out sooner than someone with only a level or two of difference, even if the hair itself grows at the same rate.' },
    { t: 'h2', id: 'stretching-further', text: 'How far you can realistically stretch it' },
    { t: 'p', text: 'Balayage is designed to grow out gently, but there is a point past which stretching stops saving money and starts creating a correction.' },
    {
      t: 'table',
      head: ['Time since', 'Usually still fine?'],
      rows: [
        ['3 - 4 months', 'Yes - the intended interval'],
        ['5 months', 'Often, with glosses in between'],
        ['6 months', 'Depends on contrast and growth rate'],
        ['9 months or more', 'The regrowth becomes a band to blend'],
        ['Over a year', 'Usually a longer appointment than a retouch'],
      ],
    },
    { t: 'p', text: '**The cost of stretching too far is that the next appointment stops being a retouch.** Blending a hard band takes longer and costs more than the appointment you skipped.' },
  ],
  faq: [
    { q: 'How often should I get balayage redone?', a: 'Every three to four months for the lightening. The toner needs refreshing every four to eight weeks, which is a much smaller appointment.' },
    { q: 'Why does my balayage look brassy after a month?', a: 'The toner has faded, revealing the warmth underneath. A gloss refresh addresses it without redoing the balayage.' },
    { q: 'How much is a gloss refresh?', a: 'Commonly $30 to $80, against $150 to $400 for a full balayage.' },
    { q: 'Can I go longer between appointments?', a: 'Balayage is designed for that. The soft grow-out is the whole point of the technique.' },
    { q: 'Does purple shampoo help?', a: 'For cool-toned blondes, once a week can help maintain tone between glosses. More often can over-deposit.' },
  ],
  related: [
    { href: '/en/balayage-maintenance', label: 'How to Maintain Balayage Between Appointments' },
    { href: '/en/balayage-cost', label: 'How Much Does Balayage Cost?' },
    { href: '/en/balayage-vs-highlights', label: 'Balayage vs Highlights' },
  ],
}
