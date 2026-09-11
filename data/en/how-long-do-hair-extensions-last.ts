import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, EXTENSIONS_TENSION_NOTE } from './common'

export const howLongDoHairExtensionsLast: EnPage = {
  path: '/en/how-long-do-hair-extensions-last',
  title: 'How Long Do Hair Extensions Last?',
  h1: 'How Long Do Hair Extensions Last?',
  description:
    'Wear time before a service is due ranges from daily (clip-in) to 3 to 4 months (keratin bond). The hair itself can last 6 to 12 months with care.',
  keywords: [
    'how long do hair extensions last',
    'hair extensions wear time',
    'how long do tape-in extensions last',
    'how long do micro-link extensions last',
    'hair extensions lifespan',
  ],
  category: 'Hair Treatments',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**There are two different clocks running: how long a set sits in before it needs a salon visit, and how long the hair itself stays usable across multiple installs.** Wear time before a service ranges from daily wear (clip-in, halo) to 3 to 4 months (keratin bond). The hair itself, cared for well, typically lasts 6 to 12 months across several reapplication cycles.',
  blocks: [
    { t: 'note', tone: 'warn', text: EXTENSIONS_TENSION_NOTE },
    { t: 'h2', id: 'two-clocks', text: 'Two different questions, often confused' },
    {
      t: 'p',
      text: '"How long do they last" usually means one of two things, and the answer is different for each. **Wear time** is how long a set stays in before it needs a move-up, tightening, or refill. **Hair lifespan** is how many times that same hair can be reused across install cycles before it needs replacing.',
    },
    { t: 'h2', id: 'wear-time-by-method', text: 'Wear time by method' },
    {
      t: 'table',
      head: ['Method', 'Typical wear before a service is due'],
      rows: [
        ['Clip-in', 'Daily - put in and taken out each time'],
        ['Halo', 'Daily - put in and taken out each time'],
        ['Tape-in', '6 - 8 weeks'],
        ['Weave (sew-in)', '6 - 10 weeks'],
        ['Micro-link', '2 - 3 months'],
        ['Keratin bond (fusion)', '3 - 4 months'],
      ],
    },
    {
      t: 'p',
      text: 'The pattern is fairly consistent: **methods with fewer, larger attachment points (tape, braid tracks) need attention sooner than methods with many small, individual points (beads, bonds)** — as hair grows, a large flat attachment shows the gap faster than dozens of small ones.',
    },
    { t: 'h2', id: 'why-wear-time-ends', text: 'Why wear time has a limit at all' },
    {
      t: 'p',
      text: 'None of these methods "wear out" on a clock. What actually happens is that your natural hair keeps growing, and every attachment point moves further from the scalp as it does. Past a certain distance, the extension sits lower, can shift or tangle more, and looks less natural — that is the real reason for a scheduled service, not the tape or bead failing.',
    },
    { t: 'h2', id: 'growth-rate', text: 'How your own hair growth rate factors in' },
    {
      t: 'p',
      text: 'Hair grows at roughly half an inch a month on average, though this varies by person. That growth rate is the actual clock behind every "wear time" figure in this article — a faster grower may need a move-up slightly sooner than the low end of a range, and a slower grower can sometimes stretch slightly past the high end without much visible gap.',
    },
    {
      t: 'table',
      head: ['Growth pattern', 'Effect on wear time'],
      rows: [
        ['Faster than average', 'May need service closer to the shorter end of the typical range'],
        ['Average', 'Fits the typical ranges given for each method'],
        ['Slower than average', 'May comfortably reach the longer end of the typical range'],
      ],
    },
    { t: 'h2', id: 'first-set-vs-experienced', text: 'First set vs an experienced wearer' },
    {
      t: 'p',
      text: 'People new to extensions sometimes get shorter wear time from their first set than the ranges above suggest, and that is not necessarily a sign of a bad install. A first set is often a smaller amount of hair while everyone - client and stylist - gets a feel for what suits your hair and scalp, and smaller, lighter sets can show growth gaps a little sooner simply because there is less hair to disguise it. Wear time on a second or third set, once your stylist has calibrated the amount and placement to your hair, tends to land more predictably within the typical range.',
    },
    { t: 'h2', id: 'stylist-skill', text: 'How stylist skill affects how long a set lasts' },
    {
      t: 'p',
      text: 'Two sets of the same method, on the same hair, can have noticeably different wear time depending on how evenly the attachment points were placed and sized. Attachment points placed too close together, too large, or unevenly across the head tend to show gaps and shifting sooner than a carefully placed, evenly sized set - which is part of why extension-specific experience is worth asking about at consultation, beyond just years of general styling experience.',
    },
    { t: 'h2', id: 'hair-lifespan', text: 'How long the hair itself lasts' },
    {
      t: 'p',
      text: 'Extension hair - especially good-quality human hair - is designed to be removed, cleaned, and reapplied multiple times rather than thrown away at the first service.',
    },
    {
      t: 'table',
      head: ['Method', 'Typical hair lifespan'],
      rows: [
        ['Tape-in', '6 - 12 months, roughly 2 - 4 reapplication cycles'],
        ['Micro-link', 'Several reinstall cycles, depending on care'],
        ['Keratin bond', 'Several refill cycles, depending on care'],
        ['Clip-in / halo', '6 - 12 months of regular use with care, no reinstall needed'],
        ['Weave', 'Depends heavily on hair quality and how gently it is handled between installs'],
      ],
    },
    { t: 'h2', id: 'what-shortens-it', text: 'What shortens the hair\'s usable life' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Heavy or frequent heat styling', 'Dries and roughens the hair fibre faster than it would age untreated'],
        ['Harsh shampoo, especially sulphates', 'Strips the cuticle and shortens shine and smoothness'],
        ['Chlorine and salt water without rinsing', 'Dries out both hair and adhesive over repeated exposure'],
        ['Rough brushing, especially at attachment points', 'Causes tangling, matting, and breakage at the weakest point'],
        ['Sun exposure', 'Can gradually change colour and texture, similar to natural hair'],
        ['Sleeping with hair loose and unsecured', 'Increases friction and tangling overnight'],
      ],
    },
    {
      t: 'note',
      text: 'Synthetic hair generally has a shorter usable life than human hair regardless of care, and it usually cannot tolerate heat styling at all.',
    },
    { t: 'h2', id: 'what-extends-it', text: 'What extends both wear time and hair lifespan' },
    {
      t: 'ul',
      items: [
        '**Washing a little less often** than you might otherwise, using a sulphate-free, extension-safe shampoo.',
        '**Brushing from the ends first**, working up toward the attachment point rather than pulling a brush straight through from the root.',
        '**Loosely braiding or tying hair back before bed**, which reduces overnight friction and tangling.',
        '**Keeping conditioner and oil away from the attachment point itself** - at the tape line, the beads, or the bonds.',
        '**Rinsing after swimming** in chlorinated or salt water before it dries in.',
      ],
    },
    { t: 'h2', id: 'signs-service-due', text: 'Signs a service is due, by method' },
    {
      t: 'table',
      head: ['Method', 'Look for'],
      rows: [
        ['Tape-in', 'Visible gap at the scalp, tabs bunching or sliding'],
        ['Micro-link', 'Beads sitting noticeably further from the scalp, or feeling loose'],
        ['Keratin bond', 'Bonds visibly lower, or starting to feel gritty or uneven'],
        ['Weave', 'The track or braid base loosening, or new growth visible at the part'],
      ],
    },
    {
      t: 'p',
      text: 'Booking on the typical schedule for your method rather than waiting for an obvious problem is usually the more comfortable option, and often the cheaper one, since a badly overdue set sometimes needs more correction than a routine appointment would have.',
    },
    { t: 'h2', id: 'troubleshooting', text: 'Troubleshooting: mine did not last as long as expected' },
    {
      t: 'table',
      head: ['What happened', 'Likely reason'],
      rows: [
        ['Slipped or loosened well before the typical window', 'Product (conditioner or oil) reached the attachment point, or it was placed too close to the hairline'],
        ['Tangled and matted quickly', 'Rough brushing, sleeping with hair loose, or not brushing daily'],
        ['Hair looked dry and dull faster than expected', 'Heavy heat styling or a non-sulphate-free shampoo not actually being sulphate-free'],
        ['Felt uncomfortable or heavy from early on', 'Too much hair added for your density - worth raising at the next appointment'],
      ],
    },
    { t: 'h2', id: 'reinstall-vs-replace', text: 'When to reinstall vs when to replace the hair' },
    {
      t: 'p',
      text: 'A stylist can usually tell at a maintenance appointment whether the existing hair has more cycles left in it or is due for replacement.',
    },
    {
      t: 'table',
      head: ['Sign', 'Usually means'],
      rows: [
        ['Hair still smooth, minimal shedding, good sheen', 'Reinstall - reuse the existing wefts'],
        ['Noticeable tangling, matting, or dryness that brushing does not fix', 'Consider replacing the hair at the next cycle'],
        ['Visible thinning of the wefts themselves', 'Replace - continuing to reuse it will look sparse'],
      ],
    },
    { t: 'h2', id: 'seasonal-factors', text: 'Does the season make a difference' },
    {
      t: 'p',
      text: 'Humidity and dryness affect extension hair the same way they affect natural hair, and can shift wear time slightly at the margins. High humidity can make some adhesive-based attachments feel less secure toward the end of their wear window, while very dry winter air can leave both natural and extension hair more prone to static and tangling, which shows up as a rougher-feeling set even if the attachment itself is fine.',
    },
    { t: 'h2', id: 'quick-answer', text: 'Quick answer by what you are actually asking' },
    {
      t: 'ol',
      items: [
        '**"How long until I need a salon visit?"** Daily for clip-in/halo, 6 - 8 weeks for tape-in, 6 - 10 weeks for weave, 2 - 3 months for micro-link, 3 - 4 months for keratin bond.',
        '**"How long can I keep using this same hair?"** Roughly 6 - 12 months with good care, across several reapplication cycles.',
        '**"Why did mine not last as long as I expected?"** Usually heat, harsh products, rough handling, or going past the recommended service window.',
      ],
    },
  ],
  faq: [
    {
      q: 'How long do hair extensions last before a move-up or refill?',
      a: 'Daily for clip-in and halo (removed each time), 6 to 8 weeks for tape-in, 6 to 10 weeks for weave, 2 to 3 months for micro-link, and 3 to 4 months for keratin bond.',
    },
    {
      q: 'How long does the actual hair last?',
      a: 'With good care, 6 to 12 months across roughly 2 to 4 reapplication cycles for methods like tape-in. Heavy heat styling, harsh shampoo, and rough handling shorten this.',
    },
    {
      q: 'Why do extensions need a service at all if the attachment has not failed?',
      a: 'Your natural hair keeps growing, so every attachment point moves further from the scalp over time. The service resets that distance rather than fixing a failure.',
    },
    {
      q: 'Do synthetic extensions last as long as human hair?',
      a: 'Generally no. Synthetic hair tends to tangle and lose its look faster, and usually cannot tolerate heat styling the way human hair can.',
    },
    {
      q: 'Can I make my extensions last longer?',
      a: 'Yes - washing a little less often, brushing from the ends up, loosely braiding hair at night, and keeping conditioner and oil away from the attachment point all extend wear and hair lifespan.',
    },
  ],
  related: [
    { href: '/en/hair-extensions-types-compared', label: 'Hair Extension Types Compared: Cost and Damage' },
    { href: '/en/tape-in-extensions', label: 'Tape-In Extensions: Cost, Wear Time, Care' },
    { href: '/en/hair-extensions-care', label: 'How to Care for Hair Extensions' },
  ],
}
