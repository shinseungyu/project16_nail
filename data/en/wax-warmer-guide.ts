import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, WAX_BURN_NOTE } from './common'

export const waxWarmerGuide: EnPage = {
  path: '/en/wax-warmer-guide',
  title: 'Wax Warmer Buying Guide: Types and What Matters',
  h1: 'Wax Warmers: How to Choose One',
  description:
    'Single-pot, double-pot and roll-on wax warmers compared, plus the specifications that actually matter for home and salon use.',
  keywords: ['wax warmer', 'wax warmer guide', 'best type of wax warmer', 'double pot wax warmer'],
  category: 'Waxing',
  stage: 16,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Single-pot warmers ($25 to $60) suit occasional home use. Double-pot ($60 to $150) suits regular use or two wax types. Professional units ($150 to $400) offer better control and capacity.** The specification that matters most is **temperature stability** — not wattage.',
  blocks: [
    { t: 'note', tone: 'warn', text: WAX_BURN_NOTE },
    { t: 'h2', id: 'types', text: 'The types' },
    {
      t: 'table',
      head: ['Type', 'Capacity', 'Price', 'Best for'],
      rows: [
        ['Single pot', '400 - 500ml', '$25 - 60', 'Occasional home use'],
        ['Double pot', '2 × 400 - 500ml', '$60 - 150', 'Hard plus soft wax, or two colours'],
        ['Roll-on cartridge', 'Cartridge', '$30 - 80', 'Large areas, less mess'],
        ['Professional / salon', '800ml - 2L', '$150 - 400', 'Volume use'],
        ['Mini / travel', '100 - 200ml', '$15 - 35', 'Small areas and touch-ups'],
      ],
      note: 'Typical US pricing. Varies by retailer.',
    },
    { t: 'h2', id: 'what-matters', text: 'What actually matters' },
    {
      t: 'table',
      head: ['Specification', 'Why'],
      rows: [
        ['Temperature stability', 'The most important. Fluctuation is what causes burns'],
        ['Adjustable thermostat', 'Different waxes need different ranges'],
        ['A clear temperature indicator', 'Guessing is how accidents happen'],
        ['Removable inner pot', 'Cleaning is otherwise miserable'],
        ['Wide opening', 'Fits standard beads and blocks'],
        ['Lid', 'Keeps wax usable between sessions'],
        ['Cord length and placement', 'A trip hazard in a work area'],
      ],
    },
    { t: 'p', text: '**Wattage matters far less than people assume.** Higher wattage heats faster; it says nothing about how well the unit holds a temperature once it gets there, and holding is the part that keeps you safe.' },
    { t: 'h2', id: 'hard-vs-soft', text: 'Which wax you plan to use changes the answer' },
    {
      t: 'table',
      head: ['', 'Hard wax', 'Soft wax'],
      rows: [
        ['Removal', 'Peeled off directly', 'With strips'],
        ['Best for', 'Sensitive areas', 'Large areas'],
        ['Temperature', 'Generally higher', 'Generally lower'],
        ['What the warmer needs', 'A higher range', 'A lower range'],
      ],
    },
    { t: 'p', text: '**A double pot lets you run both**, which is why it is the common choice for anyone treating more than one type of area. Running both in a single pot means a full clean-out every time you switch, and that gets old quickly.' },
    { t: 'h2', id: 'home-vs-salon', text: 'Home or salon use' },
    { t: 'p', text: 'The requirements diverge more than the price suggests.' },
    {
      t: 'table',
      head: ['', 'Home', 'Salon'],
      rows: [
        ['Capacity needed', 'Small — wax degrades if it sits', 'Larger, used daily'],
        ['Temperature control', 'Important', 'Critical — many clients per day'],
        ['Cleaning', 'After each session', 'Per your state board’s sanitation rules'],
        ['Liners', 'Nice to have', 'Widely used, saves considerable time'],
        ['Spare unit', 'No', 'Worth having — a failure mid-day is expensive'],
      ],
    },
    { t: 'p', text: '**Salon sanitation requirements are set by your state board** and wax areas are among the most inspected. Check the actual regulation rather than working from what a previous employer did.' },
    { t: 'h2', id: 'safety', text: 'Temperature safety' },
    { t: 'p', text: 'This applies whatever unit you buy, and it is the reason the specification list above puts stability first.' },
    {
      t: 'ul',
      items: [
        '**Always test the wax on your inner wrist before applying** — every time, regardless of what the display says.',
        '**Stir before testing.** Wax heats unevenly and the top can be cooler than what is underneath.',
        '**Never lean over an open pot** to check it.',
        '**Do not overheat to save time.** Nothing about a hotter pot makes the appointment faster.',
        'Turn the unit off between sessions rather than letting it sit at temperature for hours.',
      ],
    },
    { t: 'p', text: 'Displays can be inaccurate, thermostats drift on cheaper units, and the surface temperature of the wax differs from the pot temperature. **The wrist test takes five seconds and it is the only check that measures what actually touches skin.**' },
  ],
  faq: [
    { q: 'What wax warmer should I get?', a: 'A single pot for occasional use, a double pot for regular use with two wax types. Prioritise temperature stability over wattage.' },
    { q: 'Does wattage matter?', a: 'Less than temperature stability. Fast heating is not the same as good control.' },
    { q: 'Do I need a thermostat?', a: 'Yes, if you use different wax types — hard and soft wax want different ranges.' },
    { q: 'Can I use one warmer for hard and soft wax?', a: 'Yes, but cleaning between types is tedious, which is why double pots are popular.' },
    { q: 'How do I know it is the right temperature?', a: 'Stir, then test a small amount on your inner wrist. Do this every time, whatever the display says.' },
  ],
  related: [
    { href: '/en/wax-warmer-temperature', label: 'Wax Temperature: Getting It Right' },
    { href: '/en/how-to-clean-a-wax-warmer', label: 'How to Clean a Wax Warmer' },
    { href: '/en/hard-wax-vs-soft-wax', label: 'Hard Wax vs Soft Wax' },
  ],
}
