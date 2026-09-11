import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, EXTENSIONS_TENSION_NOTE } from './common'

export const hairExtensionsTypesCompared: EnPage = {
  path: '/en/hair-extensions-types-compared',
  title: 'Hair Extension Types Compared: Cost and Damage',
  h1: 'Hair Extension Types Compared: Cost, Wear Time, and Damage Risk',
  description:
    'Clip-in, halo, tape-in, micro-link, keratin bond, and weave hair extensions compared on cost, wear time, and how each one attaches to your hair.',
  keywords: [
    'hair extension types',
    'types of hair extensions compared',
    'tape-in vs micro-link extensions',
    'best hair extensions for fine hair',
    'hair extension methods explained',
  ],
  category: 'Hair Treatments',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**Six methods cover most of the market, and they differ mainly in how they attach — clip, wire, tape, bead, heat-fused bond, or braid-and-sew.** That attachment method drives the cost, the maintenance schedule, and how much weight and tension actually reach your scalp. Clip-in and halo go in and out daily with no adhesive or clamping. Tape-in, micro-link, keratin bond, and weave are semi-permanent and sit in for weeks between appointments.',
  blocks: [
    { t: 'note', tone: 'warn', text: EXTENSIONS_TENSION_NOTE },
    { t: 'h2', id: 'overview', text: 'The six methods at a glance' },
    {
      t: 'table',
      head: ['Method', 'How it attaches', 'Install cost', 'Time between appointments'],
      rows: [
        ['Clip-in', 'Wefts clip onto sections of your own hair', '$100 - 400', 'None - worn daily, removed at night'],
        ['Halo', 'A thin wire sits under your own hair, no clips on strands', '$150 - 500', 'None - daily wear, same as clip-in'],
        ['Tape-in', 'Adhesive tabs sandwich thin sections of natural hair', '$400 - 1,200', '6 - 8 weeks'],
        ['Micro-link', 'Small metal beads clamp extension strands to your own hair', '$600 - 2,000', '2 - 3 months'],
        ['Keratin bond', 'Keratin tips fused to strands with a heat tool', '$800 - 2,500', '3 - 4 months'],
        ['Weave (sew-in)', 'Natural hair braided into tracks, wefts sewn onto the braid', '$300 - 1,500', '6 - 10 weeks'],
      ],
      note: 'Prices vary by region and amount of hair.',
    },
    {
      t: 'p',
      text: 'The install cost is mostly the price of the hair itself plus the stylist time to apply it. **More hair, higher-grade human hair, and a slower, more careful application all push the number up within these ranges** — the method sets the range, not the exact price you pay.',
    },
    { t: 'h2', id: 'cost-year', text: 'Cost over a year' },
    {
      t: 'p',
      text: 'A single install price does not tell you what a method actually costs, because the semi-permanent methods need repeat appointments to stay in and clip-in or halo do not.',
    },
    {
      t: 'table',
      head: ['Method', 'Approx. cost per year', 'What drives it'],
      rows: [
        ['Clip-in', '~$250', 'One purchase, typically replaced roughly once a year with regular use'],
        ['Tape-in', '~$1,700 - 2,600', 'Move-ups every 6 - 8 weeks, plus new tape and occasional new hair'],
        ['Micro-link', '~$2,000 - 2,800', 'Tightening or reinstalling every 2 - 3 months'],
        ['Keratin bond', '~$2,500 - 3,500', 'Refills every 3 - 4 months, with more labour per visit'],
        ['Halo', 'Similar to clip-in', 'No reinstall required - mainly the cost of the piece itself'],
        ['Weave', 'Varies widely', 'No fixed reinstall pricing model - ask your stylist for a maintenance quote'],
      ],
    },
    {
      t: 'note',
      text: 'Annual figures assume continuous wear all year. If you only wear extensions for an event or a season, the actual cost is lower than these totals.',
    },
    { t: 'h2', id: 'attachment', text: 'How each one attaches - and why it matters' },
    {
      t: 'p',
      text: 'Weight and tension are what connect any extension method to hair health, and the attachment mechanism is what determines how that weight and tension reach the scalp.',
    },
    { t: 'h3', text: 'Clip-in and halo' },
    {
      t: 'p',
      text: 'Neither uses adhesive, beads, or heat on individual strands. Clip-in wefts clip on and off; a halo sits on a thin wire under your own hair with no attachment to individual strands at all. **Both come out at night**, so there is no sustained overnight tension — though weight still matters while they are in, since a heavy set pulling on a small clip point can be uncomfortable over a full day.',
    },
    { t: 'h3', text: 'Tape-in' },
    {
      t: 'p',
      text: 'Two adhesive tabs sandwich a thin section of natural hair between them. As your hair grows, the tape moves down and away from the scalp with it, which is why a move-up is scheduled before it grows too far out and starts to slip or tangle.',
    },
    { t: 'h3', text: 'Micro-link' },
    {
      t: 'p',
      text: 'A small metal bead is clamped around your own strands and the extension strand together, with no heat and no adhesive. The bead itself is not the issue — a bead clamped too tightly at installation is.',
    },
    { t: 'h3', text: 'Keratin bond (fusion)' },
    {
      t: 'p',
      text: 'Individual keratin tips are fused onto small sections of natural hair with a heated tool. Because each bond covers a small amount of hair, a full head uses a large number of individual attachment points, and each one is a small heat exposure to the natural hair at that point.',
    },
    { t: 'h3', text: 'Weave (sew-in)' },
    {
      t: 'p',
      text: 'Natural hair is braided into flat tracks first, and wefts are sewn onto the braid rather than attached strand by strand. **The braid is the main tension point for this method, not the wefts** — an overly tight braid is one of the more commonly discussed risk factors for traction on the scalp, independent of what gets sewn onto it afterward.',
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Tightness matters more than which method you pick',
      text: 'A loose, well-fitted install of a method on the more involved end of this list can be gentler than a too-tight install of a method usually described as gentle. Ask your stylist how they judge tightness, and speak up in the chair if anything pulls.',
    },
    { t: 'h2', id: 'wear-time', text: 'Wear time and how long the hair itself lasts' },
    {
      t: 'table',
      head: ['Method', 'Wear before a service is due', 'Reusable hair lifespan'],
      rows: [
        ['Clip-in', 'Daily - put in and taken out each time', '6 - 12 months of regular use with care'],
        ['Halo', 'Daily - put in and taken out each time', '6 - 12 months of regular use with care'],
        ['Tape-in', '6 - 8 weeks per move-up', '6 - 12 months, roughly 2 - 4 reapplication cycles'],
        ['Micro-link', '2 - 3 months', 'Several reinstall cycles, depending on care'],
        ['Keratin bond', '3 - 4 months', 'Several refill cycles, depending on care'],
        ['Weave', '6 - 10 weeks', 'Depends heavily on hair quality and how it is cared for between installs'],
      ],
    },
    { t: 'h2', id: 'human-vs-synthetic', text: 'Human hair vs synthetic' },
    {
      t: 'p',
      text: 'Within any of these six methods, the hair itself can be human hair or synthetic fibre, and that choice affects cost and what you can do with it far more than which attachment method you pick.',
    },
    {
      t: 'table',
      head: ['', 'Human hair', 'Synthetic'],
      rows: [
        ['Cost', 'Higher', 'Lower'],
        ['Heat styling', 'Yes, within the tool limits the seller states', 'Usually no, or heat-safe fibre only'],
        ['Look and blend', 'Closest match to natural hair movement', 'Can look slightly less natural, especially in light'],
        ['Lifespan with care', 'Longest, often reused across several install cycles', 'Shorter, more prone to tangling and frizz over time'],
      ],
    },
    {
      t: 'p',
      text: 'For any semi-permanent method — tape-in, micro-link, keratin bond, weave — **human hair is the standard choice**, since it is what gets reused across the reapplication cycles that make the annual cost worthwhile.',
    },
    { t: 'h2', id: 'choosing', text: 'Choosing between them' },
    {
      t: 'table',
      head: ['If you want', 'Consider'],
      rows: [
        ['Occasional length or volume for events', 'Clip-in or halo'],
        ['No salon visits between appointments', 'Clip-in or halo'],
        ['A natural look worn continuously for weeks', 'Tape-in'],
        ['Fine or thin hair', 'Halo or clip-in first'],
        ['Maximum blend with the smallest individual attachment points', 'Micro-link or keratin bond'],
        ['Full-head coverage installed through braiding', 'Weave, with close attention to braid tightness'],
      ],
    },
    {
      t: 'p',
      text: 'A stylist who specifically does extensions — not just any hairstylist — will assess your hair density, how much your scalp tolerates, and your styling habits before recommending a method. **That consultation is worth more than any comparison table**, including this one.',
    },
    { t: 'h2', id: 'where-the-money-goes', text: 'Where the money actually goes' },
    {
      t: 'p',
      text: 'The gap between a $400 tape-in and a $2,500 keratin bond set is not one method being a "premium version" of the other. It reflects the amount of hair used, the hours of hands-on application time, and how many individual attachment points a stylist has to place and later remove.',
    },
    {
      t: 'ul',
      items: [
        '**More hair used** raises material cost directly.',
        '**More attachment points** (micro-link, keratin bond) means more application time and more removal time later.',
        '**Move-ups and refills** are ongoing labour, not a one-time fee — this is what the annual cost table above is capturing.',
        '**Region and salon level** shift every number in this article up or down.',
      ],
    },
    { t: 'h2', id: 'damage-in-plain-terms', text: 'Damage risk in plain terms' },
    {
      t: 'p',
      text: 'Across all six methods, the same three variables determine how much a set affects your hair and scalp: **how much weight is added, how tight the attachment is, and how the extensions are removed.** Method choice changes the shape of the risk, but it does not remove these three variables — a full breakdown is in the linked guide below.',
    },
    { t: 'h2', id: 'getting-fitted', text: 'Getting fitted properly' },
    {
      t: 'ol',
      items: [
        '**Book a consultation before an install**, not a same-day walk-in appointment for your first set.',
        'Ask the stylist to **assess your hair density and scalp condition** before recommending a method.',
        'Ask **how much hair (in weight) they plan to add** and whether that is appropriate for your hair.',
        'Ask what a **move-up, tightening, or refill appointment costs and how often it is needed** for the method they recommend.',
        'Ask what **removal involves and what it costs**, before you book the install.',
      ],
    },
    {
      t: 'p',
      text: 'That last question is the one people skip and later regret. Removal is where problems most often show up, so a stylist who explains it clearly upfront is a good sign about the whole appointment.',
    },
    { t: 'h2', id: 'bottom-line', text: 'The short version' },
    {
      t: 'p',
      text: 'Clip-in and halo for daily, no-commitment wear. Tape-in for a natural continuous look with a manageable maintenance schedule. Micro-link or keratin bond for the closest blend, at a higher cost and more attachment points. Weave for full coverage, with the braid tightness as the detail to watch. **Whichever you choose, weight, tightness, and removal are the three things worth asking about before you sit in the chair.**',
    },
  ],
  faq: [
    {
      q: 'What is the cheapest type of hair extension?',
      a: 'Clip-in extensions, at roughly $100 to $400 for a set and about $250 a year with normal use, since there is no salon reinstall cost.',
    },
    {
      q: 'Which hair extension method lasts the longest between appointments?',
      a: 'Keratin bond and micro-link, at 2 to 4 months between services. Clip-in and halo need no appointments at all since they are worn daily and removed at night.',
    },
    {
      q: 'Which type of hair extensions is safest for hair health?',
      a: 'No method is risk-free, but clip-in and halo add no adhesive, beads, or heat to individual strands, which is why they are often recommended first for fine or fragile hair.',
    },
    {
      q: 'Are tape-in or micro-link extensions better?',
      a: 'Tape-in tends to lie flatter and is quicker to install and remove. Micro-link avoids heat and adhesive entirely but involves more individual attachment points. Suitability depends on hair density and how you want to maintain them.',
    },
    {
      q: 'Do more expensive hair extensions mean less damage?',
      a: 'Not directly. Price mainly reflects hair quality, amount used, and labour. How much weight is added, how tight the attachment is, and how they are removed matter more for hair health than the price paid.',
    },
  ],
  related: [
    { href: '/en/hair-extensions-cost', label: 'How Much Do Hair Extensions Cost? Full Breakdown' },
    { href: '/en/do-hair-extensions-damage-hair', label: 'Do Hair Extensions Damage Your Hair?' },
    { href: '/en/how-long-do-hair-extensions-last', label: 'How Long Do Hair Extensions Last?' },
  ],
}
