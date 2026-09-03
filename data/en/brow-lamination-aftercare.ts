import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, BROW_CHEM_NOTE, MED_DISCLAIMER } from './common'

export const browLaminationAftercare: EnPage = {
  path: '/en/brow-lamination-aftercare',
  title: 'Brow Lamination Aftercare: The First 48 Hours and Beyond',
  h1: 'Brow Lamination Aftercare',
  description:
    'Keep brows dry for 24 hours, brush daily, and keep oils off the area. What to do, what to avoid, and when to see a doctor.',
  keywords: ['brow lamination aftercare', 'after brow lamination', 'brow lamination instructions'],
  category: 'Brows',
  stage: 9,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**Keep them completely dry for the first 24 hours, then brush daily and keep oil-based products off them.** Your technician’s instructions take precedence over general guidance including this page.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_DISCLAIMER },
    { t: 'h2', id: 'first-48', text: 'The first 48 hours' },
    {
      t: 'table',
      head: ['Hours', 'Do', 'Avoid'],
      rows: [
        ['0 - 24', 'Nothing - leave them alone', 'Water, steam, sweat, makeup, touching'],
        ['24 - 48', 'Gentle washing around them; brush lightly', 'Oils, scrubs, swimming, sauna'],
        ['48+', 'Normal routine, with the ongoing rules below', 'Oil-based removers on the brows'],
      ],
    },
    { t: 'p', text: '**The first 24 hours is the part people get wrong**, usually by showering normally the same evening. The set needs that time to hold, and water during it is the commonest reason a result drops.' },
    { t: 'h2', id: 'ongoing', text: 'Ongoing care' },
    {
      t: 'ol',
      items: [
        '**Brush them daily** with a clean spoolie, upward and outward.',
        '**Use a conditioning brow serum or oil** if your technician recommended one, from day three.',
        '**Keep oil-based cleansers and makeup removers off the brow area.**',
        '**Do not scrub the brows** when washing your face.',
        '**Use SPF on the area** as you would elsewhere.',
        '**Wait at least six weeks** before the next appointment.',
      ],
    },
    { t: 'h2', id: 'timing', text: 'Timing around your life' },
    {
      t: 'table',
      head: ['If you have', 'Book'],
      rows: [
        ['An event', '3 - 5 days before, so the first 24 hrs is clear'],
        ['A swimming holiday', 'Well before or after, not the day before'],
        ['A gym routine', 'When you can skip one session'],
        ['A first appointment ever', '2 weeks before anything important, patch test included'],
        ['Facial treatments booked', 'Space them apart by a week'],
      ],
    },
    { t: 'h2', id: 'problems', text: 'If something is wrong' },
    { t: 'p', text: 'Most issues are cosmetic and resolve. A small number are not, and the distinction is worth knowing in advance.' },
    {
      t: 'table',
      head: ['Issue', 'What to do'],
      rows: [
        ['Brows feel stiff for a day or two', 'Normal; brush and condition'],
        ['Slight frizz at the ends', 'Condition; mention it next time'],
        ['Dryness or brittleness', 'Pause treatments; condition; extend the interval'],
        ['Itching or redness on the skin', 'Contact your technician; see a doctor if it persists'],
        ['Swelling, or anything affecting the eye', '**See a doctor**'],
        ['Burning during the appointment', 'Say so immediately - do not wait it out'],
      ],
    },
    { t: 'note', tone: 'warn', text: '**Anything involving the eye itself needs medical attention, not a salon call.** These are chemical products used near the eye, and reactions there are the one category not to manage at home.' },
    { t: 'h2', id: 'products', text: 'Products to keep away from the brows' },
    { t: 'p', text: 'Most of the ongoing rules come down to one thing: oil and heavy exfoliation both loosen the set faster than anything else.' },
    {
      t: 'table',
      head: ['Product', 'Why'],
      rows: [
        ['Oil-based cleansers and balms', 'The main culprit - loosens the hold'],
        ['Micellar water with oil', 'Same effect'],
        ['Facial scrubs over the brows', 'Physical disruption'],
        ['Retinoids on the brow area', 'Irritation on treated hair and skin'],
        ['Heavy waterproof brow makeup', 'Needs oil to remove, which defeats the point'],
      ],
    },
    { t: 'p', text: '**You do not have to change your whole routine** — just keep these off the brows specifically. Washing the rest of your face normally is fine from day two.' },
    { t: 'h2', id: 'daily', text: 'The daily routine that keeps them looking right' },
    {
      t: 'ol',
      items: [
        '**Brush upward and outward** with a clean spoolie each morning.',
        '**Apply a conditioning brow oil or serum** in the evening from day three.',
        '**Pat the area dry** rather than rubbing after washing.',
        '**Use SPF** on the area as part of your usual face protection.',
        '**Sleep on your back** where you can, particularly in the first week.',
      ],
    },
    { t: 'h2', id: 'if-it-drops', text: 'If the result drops early' },
    { t: 'p', text: 'A lamination that loses its lift within a fortnight usually has an identifiable cause, and it is worth working out which before rebooking.' },
    {
      t: 'table',
      head: ['Likely cause', 'Fix next time'],
      rows: [
        ['Water in the first 24 hrs', 'Plan the appointment for a quiet evening'],
        ['Oil-based cleanser on the brows', 'Switch products, or work around the area'],
        ['Not brushing them daily', 'Keep a spoolie where you will see it'],
        ['Very fast hair growth', 'Nothing to fix - shorter results are normal'],
        ['Processing timed short', 'Mention it; the technician can adjust'],
      ],
    },
    { t: 'p', text: '**Tell your technician what happened.** Timing is adjustable within safe limits, and they can only account for it if they know.' },
    { t: 'h2', id: 'summary', text: 'The short version' },
    { t: 'p', text: 'Dry for 24 hours, brush daily, keep oils off the brows, and wait at least six weeks before the next appointment. That covers nearly everything.' },
    { t: 'p', text: '**Anything involving swelling or the eye itself is a doctor’s call, not a salon one.** These are chemical products used close to the eye, and that is the one category worth acting on quickly rather than waiting out.' },
  ],
  faq: [
    { q: 'When can I wash my face?', a: 'Around the brows after 24 hours, avoiding oils on the brows themselves.' },
    { q: 'Can I wear makeup?', a: 'Not on the brows for the first 24 hours. After that, avoid oil-based products on the area.' },
    { q: 'Should I brush them?', a: 'Yes, daily with a clean spoolie after the first 24 hours.' },
    { q: 'What if they feel dry or brittle?', a: 'Condition them, extend the interval before your next appointment, and mention it to your technician.' },
    { q: 'When should I see a doctor?', a: 'Any swelling, persistent irritation, or anything affecting the eye itself.' },
  ],
  related: [
    { href: '/en/what-is-brow-lamination', label: 'What Is Brow Lamination?' },
    { href: '/en/brow-lamination-damage', label: 'Does Brow Lamination Damage Your Brows?' },
    { href: '/en/how-long-does-brow-lamination-last', label: 'How Long Does Brow Lamination Last?' },
  ],
}
