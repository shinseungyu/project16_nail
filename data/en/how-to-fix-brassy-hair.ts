import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, GLOSS_TONER_NOTE } from './common'

export const howToFixBrassyHair: EnPage = {
  path: '/en/how-to-fix-brassy-hair',
  title: 'How to Fix Brassy Hair: Salon and At-Home',
  h1: 'How to Fix Brassy Hair: Salon and At-Home',
  description:
    'Brassiness is usually the toner fading, not damage. What causes it, and the salon and at-home fixes that actually work.',
  keywords: ['how to fix brassy hair', 'brassy hair fix', 'blonde hair turning orange', 'fix brassy blonde'],
  category: 'Hair Colour',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**Brassiness is almost always the toner wearing off before the lightening underneath it does — not a sign anything went wrong.** UV exposure, hard water minerals and chlorine all speed it up, and both salon and at-home fixes exist depending on how far along it is.',
  blocks: [
    { t: 'note', tone: 'info', text: GLOSS_TONER_NOTE },
    { t: 'h2', id: 'what-is-brassy', text: 'What “brassy” actually means' },
    {
      t: 'p',
      text: 'Brassiness is a warm, undesired yellow, orange or copper cast that shows up on lightened or highlighted hair. It happens because lightening reveals your hair’s underlying warm pigment, and the tone applied to neutralize that warmth gradually stops doing its job.',
    },
    { t: 'h2', id: 'main-cause', text: 'The most common cause: your toner fading' },
    {
      t: 'p',
      text: 'By far the most common reason blonde or highlighted hair turns brassy is simply that **the toner has faded out.** A demi-permanent toner lasts roughly 4 to 6 weeks, while the lightening underneath it stays lightened for months — so the warmth was always going to resurface on that shorter timeline. See [Hair Toner: What It Does and When You Need It](/en/toner-for-hair) for exactly why the two fade at different speeds.',
    },
    {
      t: 'p',
      text: 'This matters because it changes what the fix is. If the toner is the cause, the fix is re-toning, not a new product, a different shampoo, or a diagnosis that something has gone wrong with your hair.',
    },
    { t: 'h2', id: 'other-causes', text: 'Other causes worth ruling out' },
    {
      t: 'table',
      head: ['Cause', 'How it shows up'],
      rows: [
        ['UV / sun exposure', 'Gradual warming of tone over weeks, worse with more sun time'],
        ['Hard water minerals', 'A dull, dingy cast that purple shampoo doesn’t seem to fix'],
        ['Chlorine', 'Can pull blonde toward a greenish or brassy tint after swimming'],
        ['Product buildup', 'General dullness that a clarifying wash noticeably improves'],
      ],
    },
    { t: 'h2', id: 'is-it-normal', text: 'Is some brassiness just normal?' },
    {
      t: 'p',
      text: 'For most lightened hair, yes — a little warmth creeping back in by week four or five is the expected pattern, not a failure. The goal of a maintenance routine is keeping it mild and predictable, not eliminating it entirely between every single salon visit.',
    },
    { t: 'h2', id: 'where-it-shows-up', text: 'Where brassiness shows up first' },
    {
      t: 'table',
      head: ['Area', 'Why'],
      rows: [
        ['Ends', 'Most porous section, and the oldest color on the head'],
        ['Around the face', 'Gets the most sun exposure day to day'],
        ['Regrowth line', 'A mix of untreated natural color and toned lengths, so it can look mismatched rather than brassy'],
        ['Overall, evenly', 'Usually a straightforward toner-fade case rather than anything localized'],
      ],
    },
    { t: 'h2', id: 'severity-guide', text: 'How bad is it — a quick guide' },
    {
      t: 'table',
      head: ['What you see', 'Likely severity'],
      rows: [
        ['Faint warmth, only noticeable in direct sun', 'Mild — a scheduled refresh will handle it'],
        ['Clearly yellow or gold overall', 'Moderate — book a toner appointment soon'],
        ['Orange or copper, especially at the ends', 'More advanced — may need a full gloss rather than a light toner'],
        ['Uneven, patchy, or an odd tint like green', 'Needs a colorist consultation, not a home fix'],
      ],
    },
    { t: 'h2', id: 'salon-fixes', text: 'Salon fixes' },
    {
      t: 'table',
      head: ['Situation', 'Fix'],
      rows: [
        ['Mild brassiness, otherwise on schedule', 'A standard toner or gloss refresh'],
        ['Significantly overdue for a refresh', 'A full gloss appointment to fully reset the tone'],
        ['Uneven or patchy brassiness', 'A color correction consultation rather than a quick toner'],
      ],
    },
    { t: 'h2', id: 'at-home-fixes', text: 'At-home fixes' },
    {
      t: 'table',
      head: ['Do', 'Don’t'],
      rows: [
        ['Use purple or blue shampoo about once a week', 'Use it every wash — it over-deposits'],
        ['Leave it on 2 - 5 minutes as directed', 'Leave it on far longer expecting a stronger effect'],
        ['Follow with a regular conditioner', 'Skip conditioner — the formula is drying'],
        ['Stop if hair looks dull, grey or faintly lavender', 'Keep using it regardless of the result'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Over-toning at home is a real risk',
      text: 'If your blonde starts looking dull, flat, grey or faintly lavender, stop using purple shampoo rather than using more. Correcting over-toning takes time and a clarifying wash, which is more effort than avoiding it in the first place.',
    },
    { t: 'h2', id: 'hard-water-fix', text: 'If hard water is the culprit' },
    {
      t: 'ul',
      items: [
        'Install a shower filter to reduce mineral exposure at the source.',
        'Use a chelating or clarifying shampoo occasionally — monthly is reasonable, weekly is too much.',
        'Always deep-condition after clarifying, since it strips more than just minerals.',
      ],
    },
    { t: 'h2', id: 'chlorine-fix', text: 'If chlorine is the culprit' },
    {
      t: 'ol',
      items: [
        '**Wet hair with clean water before swimming** — saturated hair absorbs less pool water.',
        'Apply a leave-in conditioner as a physical barrier beforehand.',
        'Rinse immediately after swimming rather than waiting until you get home.',
        'Clarify occasionally afterward, followed by a deep conditioning treatment.',
      ],
    },
    { t: 'h2', id: 'what-not-to-do', text: 'What not to do' },
    {
      t: 'ul',
      items: [
        '**Don’t re-bleach to “fix” brassiness.** The warmth is a tone issue, not a lightness issue — more lightening adds damage without solving it.',
        '**Don’t mix random products hoping one works.** Layering several toning or clarifying products in one session raises the risk of an uneven or overly ashy result.',
        '**Don’t leave a toning product on longer than directed** expecting a stronger fix — it raises the risk of over-toning instead.',
      ],
    },
    { t: 'h2', id: 'ingredients-to-look-for', text: 'What to look for on a bottle' },
    {
      t: 'table',
      head: ['Ingredient / label', 'What it does'],
      rows: [
        ['Violet or blue pigment', 'Neutralizes yellow or orange tones directly'],
        ['Sulfate-free', 'Slows how fast color and toner wash out day to day'],
        ['Chelating agent', 'Helps remove mineral buildup from hard water'],
        ['UV filter', 'Reduces sun-driven fading between salon visits'],
      ],
    },
    { t: 'h2', id: 'prevention', text: 'Preventing it from coming back' },
    {
      t: 'ol',
      items: [
        '**Book a toner or gloss refresh every 4 to 6 weeks** rather than waiting until brassiness is obvious.',
        '**Wash less often and in cooler water** to slow how fast the toner fades in the first place.',
        '**Use a sulfate-free, color-safe shampoo** day to day.',
        '**Use a UV-protecting hair product** if you spend a lot of time in direct sun.',
      ],
    },
    { t: 'h2', id: 'when-to-see-colorist', text: 'When it needs a professional, not a product' },
    {
      t: 'ul',
      items: [
        'Brassiness showing up unevenly or in patches rather than all over.',
        'A greenish tint that purple shampoo makes look worse rather than better.',
        'Months of buildup rather than a normal few weeks since the last refresh.',
      ],
    },
    { t: 'h2', id: 'natural-hair-brassiness', text: 'Can non-lightened hair go brassy too?' },
    {
      t: 'p',
      text: 'Yes, though less dramatically. Natural brunette or dark blonde hair can pick up a warm cast from sun exposure or hard water over time, even without any lightening history. The fixes are the same — a chelating shampoo for hard water, sun protection for UV, and a colorist visit if it becomes noticeable enough to matter.',
    },
    { t: 'h2', id: 'timeline-to-fix', text: 'How fast a fix actually works' },
    {
      t: 'table',
      head: ['Fix', 'How soon you’ll see a difference'],
      rows: [
        ['Purple shampoo', 'Same day, builds slightly with weekly use'],
        ['Salon toner refresh', 'Immediately after the appointment'],
        ['Clarifying + deep condition for hard water', 'Immediately, with buildup reduced over a few uses'],
        ['Color correction consultation', 'Scheduled over one or more future appointments'],
      ],
    },
    { t: 'h2', id: 'bottom-line', text: 'The bottom line' },
    {
      t: 'p',
      text: 'Assume toner fade first — it explains most brassy blonde. Fix it with a scheduled salon refresh, use purple shampoo sparingly rather than aggressively, and address hard water or chlorine if either applies to your routine. If the result still looks off after a fresh toner, that is the point to book a color consultation rather than trying another home fix.',
    },
  ],
  faq: [
    { q: 'Why does my hair keep going brassy?', a: 'Most commonly because the toner has faded — it wears off on a 4 to 6 week cycle, well before the lightening underneath it does.' },
    { q: 'Does purple shampoo permanently fix brassiness?', a: 'No, it manages it temporarily. Used about once a week it keeps warmth down between salon toner refreshes.' },
    { q: 'Can hard water make hair brassy?', a: 'It contributes to dullness and buildup that can look similar to brassiness, and a shower filter or chelating shampoo helps.' },
    { q: 'How often should I get my hair toned to avoid brassiness?', a: 'Roughly every 4 to 6 weeks keeps most people ahead of noticeable warmth returning.' },
    { q: 'Is brassy hair a sign of damage?', a: 'No — it is a normal, expected fading pattern for lightened hair, not a sign anything went wrong.' },
  ],
  related: [
    { href: '/en/toner-for-hair', label: 'Hair Toner: What It Does and When You Need It' },
    { href: '/en/hair-gloss-vs-toner', label: 'Hair Gloss vs Toner: What’s the Actual Difference' },
    { href: '/en/balayage-damage', label: 'Does Balayage Damage Your Hair?' },
  ],
}
