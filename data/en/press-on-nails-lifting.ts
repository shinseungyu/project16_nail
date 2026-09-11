import type { EnPage } from './types'
import { EN_UPDATED_BATCH7, EN_UPDATED_BATCH7_ISO, NAIL_PLATE_NOTE } from './common'

export const pressOnNailsLifting: EnPage = {
  path: '/en/press-on-nails-lifting',
  title: 'Why Press On Nails Lift and How to Fix It',
  h1: 'Why Are My Press On Nails Lifting?',
  description:
    'Lifting is almost always prep, sizing or hold time. The causes ranked, plus what to do when one lifts mid-wear.',
  keywords: ['press on nails lifting', 'why do my press on nails lift', 'press on nails keep falling off'],
  category: 'Nails',
  stage: 16,
  updated: EN_UPDATED_BATCH7,
  updatedIso: EN_UPDATED_BATCH7_ISO,
  lead:
    '**Three causes account for most lifting: oil or moisture on the nail, the wrong size, and not holding long enough.** All three are fixed in the application, not with more glue.',
  blocks: [
    { t: 'note', tone: 'info', text: NAIL_PLATE_NOTE },
    { t: 'h2', id: 'causes-ranked', text: 'The causes, ranked' },
    {
      t: 'table',
      head: ['Rank', 'Cause', 'Fix'],
      rows: [
        ['1', 'Oil or moisture on the nail', 'Wash, dry fully, wipe with alcohol'],
        ['2', 'Wrong size', 'Slightly wide is better than narrow'],
        ['3', 'Not holding long enough', '30 seconds, firm pressure'],
        ['4', 'Lotion or cuticle oil before applying', 'Apply oil afterwards, on the skin only'],
        ['5', 'Nail surface too smooth', 'A very light buff'],
        ['6', 'Adhesive on only one surface', 'Glue both the nail and the press on'],
        ['7', 'Water too soon', 'Wait one to two hours'],
        ['8', 'Curved nail under a flat press on', 'Choose a shape that matches your curve'],
        ['9', 'Adhesive touching the cuticle skin', 'Keep it on the nail plate only'],
      ],
    },
    {
      t: 'p',
      text: 'Number one outranks the rest by a wide margin. Hands produce oil constantly, hand cream leaves it behind, and a rinse under the tap does not remove it — which is why the alcohol wipe does more than any other single step. [How to Apply Press On Nails](/en/how-to-apply-press-on-nails) has the full prep sequence.',
    },
    { t: 'h2', id: 'sizing', text: 'The sizing mistake' },
    {
      t: 'table',
      head: ['Choice', 'What happens'],
      rows: [
        ['Too narrow', 'The sides lift almost immediately'],
        ['Slightly wide', 'File the edges down to fit'],
      ],
    },
    {
      t: 'p',
      text: 'A too-narrow nail is the most common sizing error, because people choose by eye and underestimate how wide their nail bed is. If you are between two sizes, go up and file down. [Press On Nails Sizing](/en/press-on-nails-sizing) covers measuring each finger rather than guessing.',
    },
    { t: 'h2', id: 'fixing-mid-wear', text: 'Fixing one mid-wear' },
    {
      t: 'table',
      head: ['Situation', 'What to do'],
      rows: [
        ['Just started lifting', 'Remove it fully, clean both surfaces, reapply'],
        ['Partially lifted', 'Do not add glue underneath — remove and redo'],
        ['Popped off cleanly and intact', 'Clean both surfaces and reapply'],
        ['Lifted and caught on something', 'Remove it and check the natural nail'],
        ['Pain, discolouration, or the nail feels loose', 'See a doctor — this is not a cosmetic issue'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Glue under a lifted nail makes it worse',
      text: 'Adding glue beneath a partly lifted press on seals moisture into the gap instead of fixing the bond. Take it off, clean both surfaces, and apply it again.',
    },
    { t: 'h2', id: 'why-it-matters', text: 'Why lifting is worth dealing with straight away' },
    {
      t: 'table',
      head: ['Effect', 'Why it matters'],
      rows: [
        ['Traps moisture between the press on and the nail', 'The gap stays damp'],
        ['Catches on things', 'A snag can pull the natural nail with it'],
        ['Gets worse, not better', 'A lifted edge only has one direction to go'],
      ],
    },
    {
      t: 'p',
      text: 'A lifted press on that snags is how people tear the natural nail plate, which then takes months to grow out. [Do Press On Nails Damage Your Nails?](/en/do-press-on-nails-damage-your-nails) covers why the damage people blame on press ons almost always happens at moments like this, or at removal.',
    },
    { t: 'h2', id: 'prevention', text: 'Prevention checklist' },
    {
      t: 'ul',
      items: [
        'Wash your hands and **dry them completely**.',
        'No lotion or oil beforehand.',
        'Push cuticles back gently.',
        '**Light buff only.**',
        'Wipe with alcohol.',
        '**Correct size — slightly wide, then file.**',
        'Adhesive on **both** surfaces, kept off the skin.',
        '**Hold for 30 seconds.**',
        'No water for one to two hours.',
        'Cuticle oil afterwards, on the skin only.',
      ],
    },
    { t: 'h2', id: 'always-lift', text: 'If they always lift' },
    {
      t: 'table',
      head: ['Possibility', 'What to try'],
      rows: [
        ['Naturally oily nail plates', 'Wipe with alcohol immediately before applying'],
        ['Strongly curved nails', 'Look for sets that match your curve'],
        ['Very short nail beds', 'Smaller sizes, careful placement'],
        ['Frequent hand washing', 'Glue rather than tabs'],
        ['Old glue', 'It degrades once opened — replace it'],
      ],
    },
    {
      t: 'p',
      text: 'If none of these fit and every set still fails the same day, the symptom-by-symptom table in [How Long Do Press On Nails Last?](/en/how-long-do-press-on-nails-last) narrows it down by where each nail lifts. And if the adhesive itself is the question, see [Press On Nails: Glue vs Adhesive Tabs](/en/press-on-nails-glue-vs-tabs).',
    },
  ],
  faq: [
    { q: 'Why do my press on nails keep lifting?', a: 'Most often oil or moisture on the nail, the wrong size, or not holding long enough.' },
    { q: 'Should I size up or down?', a: 'Up. A slightly wide nail can be filed to fit; a narrow one lifts at the sides.' },
    { q: 'Can I glue a lifted nail back down?', a: 'Better to remove it, clean both surfaces and reapply. Adding glue underneath traps moisture.' },
    { q: 'How long should I press each nail?', a: 'About 30 seconds with firm pressure.' },
    { q: 'When should I see a doctor?', a: 'Pain, discolouration, or the natural nail separating are not cosmetic issues.' },
  ],
  related: [
    { href: '/en/press-on-nails-glue-vs-tabs', label: 'Press On Nails: Glue vs Adhesive Tabs' },
    { href: '/en/press-on-nails-sizing', label: 'Press On Nails Sizing' },
    { href: '/en/how-to-apply-press-on-nails', label: 'How to Apply Press On Nails' },
  ],
}
