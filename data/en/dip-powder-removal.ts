import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, NAIL_PLATE_NOTE } from './common'

export const dipPowderRemoval: EnPage = {
  path: '/en/dip-powder-removal',
  title: 'How to Remove Dip Powder Without Damage',
  h1: 'How to Remove Dip Powder Nails',
  description:
    'Dip powder takes 20 to 30 minutes to soak off. The correct method, why filing the surface matters, and what never to do.',
  keywords: ['dip powder removal', 'remove dip nails at home', 'how to soak off dip powder', 'dip powder acetone'],
  category: 'Nails',
  stage: 0,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**File the top layer off, soak in acetone for 20 to 30 minutes wrapped in foil, then push the softened product away gently.** It takes longer than gel because it is thicker. **Never pry it off** — that is the whole of the damage risk.',
  blocks: [
    { t: 'note', tone: 'warn', text: NAIL_PLATE_NOTE },
    { t: 'h2', id: 'step-by-step', text: 'Step by step' },
    {
      t: 'ol',
      items: [
        '**File the top coat and surface until fully matte.** Acetone cannot penetrate a sealed top coat.',
        'Shorten the length first if the nails are long — it cuts soak time.',
        'Saturate cotton in **100% acetone**, not a nail polish remover blend.',
        'Wrap each nail in foil to hold the cotton against the surface.',
        '**Wait 20 to 30 minutes.** Set a timer and leave it alone.',
        'Check one nail — the product should look soft, cloudy and lifted.',
        'Push off gently with a wooden stick, working from the cuticle down.',
        '**Re-wrap anything resistant for another five to ten minutes.** Never force it.',
        'Buff very lightly to smooth, then oil generously.',
      ],
    },
    { t: 'h2', id: 'why-longer-than-gel', text: 'Why it takes longer than gel' },
    { t: 'p', text: 'Dip powder is applied in **multiple thicker layers**. More material means more soak time — there is no way around that, and a product claiming instant removal is worth being sceptical about.' },
    { t: 'p', text: '**Filing the surface thoroughly is the biggest time-saver available.** Skipping it means acetone sits on a sealed top coat doing nothing for twenty minutes, and then people conclude the product "will not come off" and reach for something to lever it.' },
    {
      t: 'table',
      head: ['If removal is dragging', 'Check'],
      rows: [
        ['Nothing has softened after 20 minutes', 'Was the surface filed fully matte?'],
        ['Some nails done, others not', 'Cotton may have dried or shifted'],
        ['Product softening then re-hardening', 'Re-wrap — acetone evaporates fast'],
        ['Only the edges soften', 'Foil not sealed against the nail'],
        ['Using a soak-off bowl instead of wraps', 'Wraps hold contact better and use less acetone'],
      ],
    },
    { t: 'h2', id: 'never', text: 'Never do this' },
    {
      t: 'ul',
      items: [
        '**Pry, pop or peel it off.**',
        '**Use clippers to snap the product.**',
        '**Force product that is still resistant.**',
        '**Skip the surface filing** and then blame the acetone.',
        'Scrape hard with a metal pusher — a wooden stick gives you feedback that metal does not.',
      ],
    },
    { t: 'p', text: '**Peeling dip powder off takes nail plate layers with it.** This is the single most common cause of the thin, white, peeling nails that people then blame on dip powder itself. The product did not do that; the removal did.' },
    { t: 'h2', id: 'salon-vs-home', text: 'Salon or at home?' },
    { t: 'p', text: 'Both work. The difference is mostly whether you will actually wait.' },
    {
      t: 'table',
      head: ['', 'At home', 'Salon'],
      rows: [
        ['Cost', 'Acetone, foil, cotton', 'Often $10 - 20, sometimes free with a new set'],
        ['Time', '30 - 40 min including filing', 'Similar, but not your time'],
        ['Risk', 'Impatience', 'Low, if they soak properly'],
        ['Best when', 'You are removing and taking a break', 'You are having a new set applied'],
      ],
    },
    { t: 'p', text: 'If you are getting a new set anyway, **let the salon do it** — removal is usually bundled and they are not the ones watching a clock at their kitchen table.' },
    { t: 'h2', id: 'aftercare', text: 'Aftercare' },
    { t: 'p', text: 'Nails will feel dry and look dull immediately after. **That is acetone dehydration, not damage**, and it resolves within a day or two.' },
    {
      t: 'table',
      head: ['When', 'Do'],
      rows: [
        ['Immediately', 'Wash hands, apply cuticle oil generously'],
        ['That evening', 'Hand cream, oil again'],
        ['Next few days', 'Cuticle oil twice daily'],
        ['If nails feel thin', 'Consider a break before the next set'],
        ['If nails are sore or sensitive', 'Take a break — and see a doctor if it persists'],
      ],
    },
    { t: 'p', text: 'Resist the urge to buff away any white patchiness. **That texture is thinned nail plate, and buffing removes more of it.** It grows out over a few months on its own.' },
  ],
  faq: [
    { q: 'How long does dip powder removal take?', a: 'Around 20 to 30 minutes of soaking, plus a few minutes of filing beforehand.' },
    { q: 'Can I remove it at home?', a: 'Yes, with 100% acetone, foil, cotton and patience. The patience is the hard part.' },
    { q: 'Why will mine not come off?', a: 'Almost always because the surface was not filed fully matte, so the acetone cannot get through the top coat.' },
    { q: 'Can I peel it off?', a: 'No. Peeling takes nail plate layers with it and is the main cause of the thin, peeling nails people blame on dip.' },
    { q: 'Do I need to file the length down first?', a: 'Not required, but it speeds things up considerably if the nails are long.' },
  ],
  related: [
    { href: '/en/dip-powder-damage', label: 'Does Dip Powder Damage Your Nails?' },
    { href: '/en/how-long-does-dip-powder-last', label: 'How Long Does Dip Powder Last?' },
    { href: '/en/gel-nail-removal-at-home', label: 'Gel Nail Removal at Home' },
  ],
}
