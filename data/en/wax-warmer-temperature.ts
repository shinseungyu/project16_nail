import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, WAX_BURN_NOTE } from './common'

export const waxWarmerTemperature: EnPage = {
  path: '/en/wax-warmer-temperature',
  title: 'Wax Warmer Temperature: How to Avoid Burns',
  h1: 'Wax Temperature: Getting It Right',
  description:
    'Wax temperature varies by type and manufacturer. Why you must wrist-test every time, and what to do if you get burned.',
  keywords: ['wax warmer temperature', 'wax too hot', 'wax burn', 'safe wax temperature'],
  category: 'Waxing',
  stage: 16,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Follow the temperature range printed on your specific wax — it varies by manufacturer and type.** Regardless of the display, **test on your inner wrist before every application.** Displays can be inaccurate and wax heats unevenly.',
  blocks: [
    { t: 'note', tone: 'warn', text: WAX_BURN_NOTE },
    { t: 'h2', id: 'why-not-the-display', text: 'Why you cannot rely on the display' },
    {
      t: 'table',
      head: ['Issue', 'Effect'],
      rows: [
        ['The display measures pot temperature, not the wax surface', 'They differ'],
        ['Wax heats unevenly', 'Hot spots, especially near the element'],
        ['Thermostats drift', 'Particularly on cheaper units, and worse as they age'],
        ['Wax type changes the safe range', 'Hard and soft differ'],
        ['Room temperature affects cooling rate', 'A pot that was fine ten minutes ago may not be'],
      ],
    },
    { t: 'p', text: 'This is why this page does not give you a single number to aim for. **A number would be wrong for some products and dangerously wrong for others**, and it would encourage exactly the habit that causes burns — trusting a reading instead of testing.' },
    { t: 'h2', id: 'the-wrist-test', text: 'The wrist test' },
    {
      t: 'ol',
      items: [
        '**Stir the wax thoroughly** to even out hot spots.',
        'Apply a small amount to your **inner wrist**.',
        'It should feel **warm, not hot**.',
        '**If it stings at all, it is too hot.** Let it cool and re-test.',
        '**Do this every session**, and again if the warmer has been sitting.',
      ],
    },
    { t: 'p', text: '**This takes five seconds and prevents the main injury in home waxing.** The inner wrist is used because the skin there is thin and sensitive — closer to the areas you are about to wax than the back of your hand is.' },
    { t: 'h2', id: 'too-hot', text: 'Signs it is too hot' },
    {
      t: 'table',
      head: ['Sign', 'Action'],
      rows: [
        ['Stings on the wrist test', 'Turn off and let it cool'],
        ['Runs like water', 'Too hot for most applications'],
        ['Steam or a strong odour', 'Turn off, cool'],
        ['Redness immediately on application', 'Stop'],
      ],
    },
    { t: 'h2', id: 'too-cool', text: 'Signs it is too cool' },
    {
      t: 'table',
      head: ['Sign', 'Result'],
      rows: [
        ['Thick and hard to spread', 'Poor adhesion'],
        ['Sets before you finish spreading', 'Incomplete removal'],
        ['Does not grip the hair', 'Ineffective, and you will be tempted to go over it again'],
      ],
    },
    { t: 'p', text: 'Wax that is too cool is frustrating rather than dangerous — but it leads to repeated passes over the same area, and **repeated passes are their own skin problem.** Reheat rather than pushing through.' },
    { t: 'h2', id: 'if-you-burn-yourself', text: 'If you burn yourself' },
    {
      t: 'ol',
      items: [
        '**Cool the area with cool — not ice-cold — running water** for several minutes.',
        '**Do not pull off wax that is stuck to burned skin.** This can worsen the injury.',
        '**Do not apply ice, butter, or any home remedy.**',
        '**Seek medical attention** for blistering, large areas, or burns to sensitive areas.',
      ],
    },
    { t: 'p', text: '**Burns to the face, genitals, or large areas warrant medical assessment**, even if they look manageable at first. Skin in those areas is thinner and the consequences of getting it wrong are different.' },
    { t: 'h2', id: 'preventing-burns', text: 'Preventing burns' },
    {
      t: 'table',
      head: ['Measure', 'Note'],
      rows: [
        ['Wrist test every time', 'Non-negotiable'],
        ['Stir before testing', 'Evens out hot spots'],
        ['Do not overheat to save time', 'It saves nothing'],
        ['Follow the wax manufacturer’s range', 'It is printed on the product'],
        ['Turn off between clients or sessions', 'Prevents drift'],
        ['Never use a microwave unless the product specifies it', 'Extremely uneven heating'],
      ],
    },
    { t: 'p', text: 'The microwave row deserves emphasis. **Microwaved wax can have a surface that feels fine over a core that is far hotter**, and there is no stirring habit reliable enough to make that safe unless the manufacturer has formulated for it.' },
  ],
  faq: [
    { q: 'What temperature should wax be?', a: 'Follow the range printed on your specific product — it varies by type and manufacturer. Then wrist-test regardless.' },
    { q: 'Can I trust the warmer’s display?', a: 'Not entirely. It measures pot temperature, not the wax surface, and thermostats drift. Wrist-test every time.' },
    { q: 'What if the wax is too hot?', a: 'Turn it off, stir, let it cool, and re-test on your wrist before going near skin.' },
    { q: 'Can I microwave wax?', a: 'Only if the product specifically says so. Microwaves heat very unevenly and the surface can feel deceptively cool.' },
    { q: 'What do I do if I get burned?', a: 'Cool with running water, do not pull stuck wax off burned skin, and seek medical attention for blistering or large areas.' },
  ],
  related: [
    { href: '/en/wax-warmer-guide', label: 'Wax Warmers: How to Choose One' },
    { href: '/en/at-home-waxing-safety', label: 'At-Home Waxing Safely' },
    { href: '/en/how-long-does-waxing-last', label: 'How Long Does Waxing Last?' },
  ],
}
