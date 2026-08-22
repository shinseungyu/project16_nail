import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO } from './common'

export const pressOnNailsSizing: EnPage = {
  path: '/en/press-on-nails-sizing',
  title: 'Press On Nail Sizing: How to Get It Right',
  h1: 'How to Size Press On Nails Properly',
  description:
    'Wrong sizing is the top reason press ons lift. How to measure, why to size down rather than up, and what to do when nothing fits.',
  keywords: ['press on nails sizing', 'press on nail size', 'press on nails fit'],
  category: 'Nails',
  stage: 2,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**A correctly sized tip covers your nail sidewall to sidewall without touching skin.** If you are between sizes, go down rather than up — a slightly narrow tip still adheres, while an oversized one lifts at the edges immediately.',
  blocks: [
    { t: 'h2', id: 'how-to-size', text: 'How to size' },
    {
      t: 'ol',
      items: [
        '**Do it nail by nail.** Your ten nails are not the same width, and treating them as one size is the most common error.',
        'Hold candidate tips against each nail.',
        'The tip should reach both sidewalls **without overlapping skin**.',
        'Check that the curve matches your nail’s arch.',
        '**Lay them out in order** before you start applying anything.',
      ],
    },
    { t: 'h2', id: 'rules', text: 'The rules' },
    {
      t: 'table',
      head: ['Rule', 'Why'],
      rows: [
        ['Size down, not up', 'Oversized tips lift at the sidewalls'],
        ['Never let it touch skin', 'Adhesive on skin fails immediately'],
        ['Match the C-curve', 'A flat tip on a curved nail leaves gaps'],
        ['File the sides if slightly wide', 'Better than going a size up'],
      ],
    },
    { t: 'p', text: 'The reason sizing down works is that adhesion depends on contact with the nail plate, not on covering every square millimetre of it. A tip a fraction narrow still bonds across its whole surface. A tip a fraction wide rests partly on skin, and that section starts lifting from the moment you apply it.' },
    { t: 'h2', id: 'nothing-fits', text: 'When nothing fits' },
    {
      t: 'table',
      head: ['Problem', 'Solution'],
      rows: [
        ['Between sizes', 'Size down, file the sidewalls to fit'],
        ['Very curved nails', 'Look for high C-curve sets'],
        ['Very wide nail beds', 'Some ranges offer wide fits'],
        ['One nail always wrong', 'Buy sets with extra sizes, or two kits'],
      ],
    },
    { t: 'p', text: '**Thumbs and little fingers are the usual offenders.** Most kits are weighted toward middle sizes, so if one nail is consistently a problem it is usually one of those two, and buying a second kit for that size is cheaper than a set that keeps failing.' },
    { t: 'h2', id: 'shape-and-curve', text: 'Curve matters as much as width' },
    { t: 'p', text: 'Width is easy to judge by eye. Curve is not, and it is the reason a tip that looks correct still lifts at the centre or the edges.' },
    {
      t: 'table',
      head: ['Symptom', 'Likely cause'],
      rows: [
        ['Gaps at the sidewalls', 'Tip curve flatter than your nail'],
        ['Rocking or a hollow feel', 'Tip curve deeper than your nail'],
        ['Lifts at the free edge first', 'Length or leverage rather than size'],
        ['Lifts at the cuticle first', 'Overlapping skin, or adhesive there'],
        ['One side lifts only', 'Tip slightly off-centre at application'],
      ],
    },
    { t: 'note', title: 'Size once, keep the record', text: 'If you buy press ons regularly, note which size fits each finger. You only have to work it out properly once, and every set afterwards takes five minutes less.' },
    { t: 'h2', id: 'kits', text: 'Sizing kits and what they solve' },
    { t: 'p', text: 'A sizing kit is a set of blank tips in every size, used once to establish your measurements. For anyone buying press ons more than occasionally, it removes the guesswork permanently.' },
    {
      t: 'table',
      head: ['Without a kit', 'With a kit'],
      rows: [
        ['Size each set from scratch', 'Size once, note it down'],
        ['Trial and error with glue involved', 'Trial with nothing at stake'],
        ['Occasional wrong size ruins a set', 'Buy the right sizes deliberately'],
        ['Sets with one unusable nail', 'Buy an extra kit for that one size'],
      ],
    },
    { t: 'p', text: 'Sizes are not standardised between brands, so a kit tells you your nail widths rather than a universal number. Note the measurement, then check each new brand’s chart against it.' },
    { t: 'h2', id: 'filing-to-fit', text: 'Filing to fit, properly' },
    { t: 'p', text: 'Filing the sidewalls is normal and expected. Doing it after application is not, because at that point you are filing next to your own skin.' },
    {
      t: 'ol',
      items: [
        '**File before applying**, with the tip held rather than on your finger.',
        '**Take material off both sides evenly** so the tip stays centred.',
        '**Check the fit repeatedly** rather than filing to a target in one go.',
        '**Smooth the filed edge** so it does not catch.',
        '**Stop when it sits sidewall to sidewall** without pressure.',
      ],
    },
    { t: 'note', tone: 'warn', title: 'A tip that has to be forced on is too small', text: 'Filing solves a tip that is slightly wide. Nothing solves one that is too narrow, and pressing an undersized tip into place puts the bond under tension from the start.' },
    { t: 'h2', id: 'brand-charts', text: 'Reading a brand size chart' },
    { t: 'p', text: 'Sizes run in the opposite direction to what most people assume, and brands number them differently, which is where a lot of wrong orders come from.' },
    {
      t: 'table',
      head: ['Convention', 'What it means'],
      rows: [
        ['Numbered 0 - 9 or 0 - 11', 'Lower number is usually wider'],
        ['Measurements in mm', 'The most reliable format'],
        ['S / M / L only', 'Too coarse for ten different nails'],
        ['Sold as a fixed set', 'Check how many of each size is included'],
        ['Sold with extra sizes', 'Worth the small premium'],
      ],
    },
    { t: 'p', text: '**Buy by millimetre where you can.** Once you know your ten widths, a chart in millimetres transfers between brands and a numbered chart does not.' },
  ],
  faq: [
    { q: 'What if I am between sizes?', a: 'Go down. A slightly narrow tip adheres across its whole surface; a wide one rests on skin and lifts.' },
    { q: 'Can I file press ons to fit?', a: 'Yes. Filing the sidewalls is normal and often necessary, and it is preferable to going up a size.' },
    { q: 'Why does one nail always pop off?', a: 'Usually a sizing mismatch on that specific finger, most often a thumb or a little finger.' },
    { q: 'Should the tip cover my whole nail?', a: 'Sidewall to sidewall, without touching the skin at the cuticle or the sides.' },
    { q: 'Do sizing kits help?', a: 'Yes, especially if you buy press ons regularly, because you size properly once rather than every time.' },
  ],
  related: [
    { href: '/en/how-to-apply-press-on-nails', label: 'How to Apply Press On Nails Properly' },
    { href: '/en/how-long-do-press-on-nails-last', label: 'How Long Do Press On Nails Last?' },
    { href: '/en/press-on-nails-short-nails', label: 'Press On Nails for Short or Bitten Nails' },
  ],
}
