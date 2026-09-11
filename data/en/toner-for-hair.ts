import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, GLOSS_TONER_NOTE } from './common'

export const tonerForHair: EnPage = {
  path: '/en/toner-for-hair',
  title: 'Hair Toner: What It Does and When You Need It',
  h1: 'Hair Toner: What It Does and When You Need It',
  description:
    'What a hair toner does, why lightened hair needs it, and why it fades out weeks before your color does — the real reason blonde turns brassy.',
  keywords: ['hair toner', 'toner for hair', 'what does toner do to hair', 'toner for blonde hair'],
  category: 'Hair Colour',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**A hair toner is a demi-permanent, deposit-only product used to neutralize unwanted undertones — most often the yellow or orange left behind after lightening.** It fades out weeks before the lightening or color underneath it does, which is the single most common reason blonde hair turns brassy.',
  blocks: [
    { t: 'note', tone: 'info', text: GLOSS_TONER_NOTE },
    { t: 'h2', id: 'what-toner-does', text: 'What toner actually does' },
    {
      t: 'p',
      text: 'Toner deposits a small amount of pigment to cancel out a tone you don’t want — usually warmth left behind after lightening. It does not lighten hair any further; it only adjusts the color that is already there. See [Hair Gloss vs Toner](/en/hair-gloss-vs-toner) if you are trying to work out whether what your salon calls a “toner” is really a different service.',
    },
    { t: 'h2', id: 'why-blonde-needs-it', text: 'Why lightened hair needs it' },
    {
      t: 'p',
      text: 'Lightening removes your natural pigment in stages, and the underlying warm tones — yellow, then orange, then red — get revealed as it goes. A toner is applied afterward specifically to cancel that warmth so the result reads as the cool, neutral or ashy blonde most people are actually asking for.',
    },
    { t: 'h2', id: 'color-wheel', text: 'The color wheel logic' },
    {
      t: 'table',
      head: ['Unwanted tone', 'Neutralizing tone'],
      rows: [
        ['Yellow', 'Purple'],
        ['Orange', 'Blue'],
        ['Red', 'Green'],
      ],
    },
    {
      t: 'p',
      text: 'A toner pigment sits opposite the unwanted tone on the color wheel and cancels it out. This is the same logic purple shampoo uses at home, just far more diluted than what a salon applies.',
    },
    { t: 'h2', id: 'signs-you-need-one', text: 'Signs you need a toner refresh' },
    {
      t: 'ul',
      items: [
        'A warm or brassy cast creeping back into hair that was cool or ashy when you left the salon.',
        'Hair looking noticeably yellow or gold in direct sunlight.',
        'It has been four or more weeks since your last toner or gloss.',
        'A visible mismatch between freshly grown regrowth and the toned lengths.',
      ],
    },
    { t: 'h2', id: 'toner-fades-first', text: 'Toner fades before your color does' },
    {
      t: 'p',
      text: 'This is the part most people are never told: **the toner is not as durable as the lightening underneath it.** A demi-permanent toner deposits at a shallower level than the structural change lightening makes, so the toner washes out on a 4 to 6 week timeline while the lightened hair itself stays lightened for months. The result is blonde hair that looks perfect for a few weeks and then gradually goes warm again — not because anything went wrong, but because the toner ran its course first.',
    },
    {
      t: 'p',
      text: 'This is also the answer to “why does my blonde keep going brassy no matter what shampoo I use” — the shampoo was never the main event. See [How to Fix Brassy Hair](/en/how-to-fix-brassy-hair) for the full breakdown of causes and fixes.',
    },
    { t: 'h2', id: 'salon-vs-home', text: 'Salon toner vs at-home toning products' },
    {
      t: 'table',
      head: ['', 'Salon toner', 'At-home toning product'],
      rows: [
        ['Control over shade', 'Custom-mixed to your undertone', 'Limited to a few pre-set shades'],
        ['Application evenness', 'Sectioned and professionally applied', 'Depends on your own technique'],
        ['Cost per use', '$30 - 70', '$10 - 30'],
        ['Risk of over-toning', 'Low — professionally timed', 'Higher if overused or left on too long'],
      ],
    },
    { t: 'h2', id: 'diy-risks', text: 'Risks of toning at home' },
    {
      t: 'ul',
      items: [
        '**Over-toning** — too much product or too long a processing time leaves hair looking dull, ashy or faintly purple-grey.',
        '**Uneven application**, especially at the back of the head where it is hard to see what you are doing.',
        '**Leaving it on too long**, since at-home instructions are written for average hair, not yours specifically.',
        '**Picking the wrong shade** for the undertone you actually have.',
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Purple shampoo, once a week',
      text: 'Use it about once a week, not every wash. Overuse over-deposits and leaves hair looking dull, flat, grey, or faintly lavender — if that happens, stop using it and let the tone fade back naturally rather than reaching for more.',
    },
    { t: 'h2', id: 'toner-application' , text: 'How a salon toner is actually applied' },
    {
      t: 'ol',
      items: [
        'A colorist assesses the current undertone against the target shade.',
        'The toner is mixed to the specific correction needed — this is not one-size-fits-all.',
        'It’s applied to damp, towel-dried hair, usually right after lightening or as a standalone refresh.',
        'Processing typically runs 10 to 20 minutes before rinsing.',
      ],
    },
    { t: 'h2', id: 'toning-by-shade' , text: 'Toner needs by target shade' },
    {
      t: 'table',
      head: ['Target shade', 'Typical toning need'],
      rows: [
        ['Platinum / very light blonde', 'Frequent — warmth shows up fastest at this level'],
        ['Beige or golden blonde', 'Moderate — some warmth is often part of the intended look'],
        ['Ash or cool brunette', 'Regular — cool tones drift warm noticeably as toner fades'],
        ['Balayage with a natural base', 'Less frequent — grown-out roots blend more forgivingly'],
      ],
    },
    { t: 'h2', id: 'toner-vs-permanent-correction', text: 'When a toner isn’t enough' },
    {
      t: 'p',
      text: 'A toner corrects tone, not level — if hair is genuinely too warm because it wasn’t lightened enough, or too dark for the desired result, that’s a lightening or color conversation, not a toning one. Toner works on top of a lightening job that already reached roughly the right level.',
    },
    {
      t: 'ul',
      items: [
        'Toner fixes: yellow, orange or red undertones on hair that is already at the right lightness.',
        'Toner does not fix: hair that needs to be lighter, or a color correction from a different starting color entirely.',
      ],
    },
    { t: 'h2', id: 'cost', text: 'Cost' },
    {
      t: 'table',
      head: ['Where', 'Typical price'],
      rows: [
        ['Salon toner', '$30 - 70'],
        ['At-home toning product', '$10 - 30'],
      ],
    },
    {
      t: 'p',
      text: 'Region and salon tier account for most of the spread — a toning refresh at a high-end city salon and one at a smaller neighborhood salon can differ by $20 or more.',
    },
    { t: 'h2', id: 'how-long-lasts', text: 'How long a toner lasts' },
    {
      t: 'p',
      text: 'Roughly 4 to 6 weeks, the same window as a gloss, since both belong to the same demi-permanent category. Wash frequency, hot water and sulfate shampoo all shorten that window — see [How Long Does a Hair Gloss Last?](/en/how-long-does-hair-gloss-last) for the factors in detail.',
    },
    { t: 'h2', id: 'grey-hair', text: 'Toner and grey hair' },
    {
      t: 'p',
      text: 'A toner **blends** grey hair into the surrounding color by softening the contrast between grey and pigmented strands — it does not blanket-cover grey the way permanent color can. If full grey coverage is the actual goal, that needs a different conversation with your colorist.',
    },
    { t: 'h2', id: 'maintenance-schedule', text: 'A realistic maintenance schedule' },
    {
      t: 'table',
      head: ['Timing', 'What happens'],
      rows: [
        ['Month 0', 'Lightening or full color service'],
        ['~Week 6', 'Toner or gloss refresh'],
        ['~Month 3', 'Second toner or gloss refresh'],
        ['Month 4 - 6', 'Back for the next full lightening or color service'],
      ],
    },
    { t: 'h2', id: 'hard-water', text: 'Hard water speeds brassiness up' },
    {
      t: 'p',
      text: 'Mineral buildup from hard water dulls color and accelerates the return of warm tones, independent of the toner itself fading. If you live somewhere with hard water, a shower filter and an occasional chelating or clarifying shampoo — followed by deep conditioning — helps the toner’s effect hold longer.',
    },
    { t: 'h2', id: 'seasonal-note', text: 'Does the season make a difference?' },
    {
      t: 'p',
      text: 'More sun exposure in summer and more chlorine from pools both accelerate toner fade, so some people find they need a refresh closer to the four-week mark in summer and closer to six weeks in winter. It’s a small effect, but worth factoring in if your salon visits have felt inconsistent across the year.',
    },
    { t: 'h2', id: 'bottom-line', text: 'The bottom line' },
    {
      t: 'p',
      text: 'A toner is not a one-time fix for lightened hair — it is a maintenance step that needs repeating every 4 to 6 weeks because it fades faster than the lightening it is correcting. Budgeting for that refresh, rather than being surprised by it, is what keeps blonde looking the way it did on day one.',
    },
  ],
  faq: [
    { q: 'What does hair toner actually do?', a: 'It deposits pigment to neutralize an unwanted undertone, most commonly the yellow or orange left after lightening. It does not lighten hair.' },
    { q: 'Why does my blonde go brassy so fast?', a: 'Most often because the toner has faded, not because of anything else. Toner wears off on a 4 to 6 week cycle, well before the lightening underneath it grows out.' },
    { q: 'Can I tone my hair at home?', a: 'Yes, with a toning product or regular purple shampoo, but a salon toner gives more control and a lower risk of over-toning.' },
    { q: 'How often do I need a toner?', a: 'Roughly every 4 to 6 weeks if you want to maintain the same tone consistently.' },
    { q: 'Does toner cover grey hair?', a: 'It blends grey in rather than covering it completely — it is not a full grey-coverage solution.' },
  ],
  related: [
    { href: '/en/hair-gloss-vs-toner', label: 'Hair Gloss vs Toner: What’s the Actual Difference' },
    { href: '/en/how-to-fix-brassy-hair', label: 'How to Fix Brassy Hair: Salon and At-Home' },
    { href: '/en/how-long-does-balayage-last', label: 'How Long Does Balayage Last?' },
  ],
}
