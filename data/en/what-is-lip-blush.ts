import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, PMU_TATTOO_NOTE, LIP_BLUSH_HSV_NOTE } from './common'

export const whatIsLipBlush: EnPage = {
  path: '/en/what-is-lip-blush',
  title: 'What Is Lip Blush? Process, Cost and Healing',
  h1: 'What Is Lip Blush Tattoo?',
  description:
    'Lip blush is cosmetic tattooing that adds soft colour to the lips. What is involved, what it costs, and the regulation you should know about.',
  keywords: ['what is lip blush', 'lip blush tattoo', 'lip blushing procedure', 'lip tattoo cost'],
  category: 'Permanent Makeup',
  stage: 17,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**A cosmetic tattoo that deposits soft pigment into the lips, enhancing colour and definition.** It lasts two to five years, costs $500 to $1,200 including the touch-up, and takes two to three weeks to heal. **In many US states it is regulated as tattooing.**',
  blocks: [
    { t: 'note', tone: 'warn', text: PMU_TATTOO_NOTE },
    { t: 'h2', id: 'the-process', text: 'The process' },
    {
      t: 'table',
      head: ['Stage', 'Detail'],
      rows: [
        ['1. Consultation', 'Colour selection, shape mapping, medical history'],
        ['2. Cold sore discussion', 'If you are prone — see below'],
        ['3. Numbing', 'Topical anaesthetic'],
        ['4. Shape mapping', 'Outline drawn and approved before any pigment'],
        ['5. Pigment application', 'Machine, multiple passes'],
        ['6. Aftercare briefing', 'What to expect and what to avoid'],
        ['7. Touch-up at 6 - 8 weeks', 'Part of the procedure, not an upsell'],
      ],
    },
    { t: 'p', text: '**Step 4 is where you have control.** The outline is drawn and shown to you before any pigment goes in, and that is the moment to say if the shape is not what you wanted — not afterwards.' },
    { t: 'h2', id: 'key-facts', text: 'Key facts' },
    {
      t: 'table',
      head: ['Attribute', 'Detail'],
      rows: [
        ['Appointment', '2 - 3 hrs'],
        ['Cost', '$500 - 1,200 including the touch-up'],
        ['Lasts', '2 - 5 years'],
        ['Healing', '7 - 14 days visible; 4 - 6 weeks to settle'],
        ['Result', 'Softer and lighter than it looks immediately after'],
        ['Reversible', 'No — removal is difficult and takes multiple sessions'],
      ],
      note: 'Typical US pricing. Varies by artist and region.',
    },
    { t: 'h2', id: 'cold-sores', text: 'Cold sores — the specific risk' },
    { t: 'note', tone: 'warn', text: LIP_BLUSH_HSV_NOTE },
    { t: 'p', text: '**Lip tattooing can reactivate the herpes simplex virus in people who carry it**, which is most adults. An outbreak during healing is uncomfortable and can affect how the pigment settles.' },
    { t: 'p', text: 'Most artists will ask about your history and may recommend you **discuss antiviral prophylaxis with your doctor** beforehand. **If you have ever had a cold sore, raise it at consultation.** This is not optional detail, and an artist who does not ask is one to think twice about.' },
    { t: 'h2', id: 'regulation', text: 'Regulation' },
    { t: 'p', text: 'Lip blush is cosmetic tattooing. **In many states that falls under tattoo regulation administered by health departments**, not by cosmetology boards.' },
    { t: 'p', text: '**A cosmetology or esthetics licence alone is generally not sufficient.** The framework is the same one that applies to microblading, and the practical step is the same: check both your state or county health department and your state board before booking.' },
    { t: 'h2', id: 'what-it-looks-like', text: 'What the result actually looks like' },
    { t: 'p', text: 'This is where expectations most often go wrong, because the healed result and the day-one result are very different things.' },
    {
      t: 'table',
      head: ['Expectation', 'Reality'],
      rows: [
        ['Looks like lipstick', 'It is a soft tint, not opaque colour'],
        ['The colour I see on day one', 'Heals considerably lighter'],
        ['One appointment and done', 'The touch-up at 6 - 8 weeks completes it'],
        ['Changes lip size', 'It defines the border; it does not add volume'],
        ['Permanent', 'It fades over 2 - 5 years'],
      ],
    },
    { t: 'p', text: '**Judge results from healed photographs only.** Immediately-after photographs show swollen lips with wet pigment on the surface, and they look nothing like what you will have in six weeks.' },
    { t: 'h2', id: 'who-should-wait', text: 'Who should wait or discuss it first' },
    {
      t: 'ul',
      items: [
        '**Anyone with a history of cold sores** — until you have spoken to your doctor.',
        '**Pregnant or breastfeeding** — most artists decline.',
        '**Active skin condition or infection** on or around the lips.',
        '**Recent lip filler** — the shape is still settling, and mapping to a temporary shape is a real risk.',
        '**On certain medications** — including blood thinners and some acne treatments. Raise it at consultation.',
        'Anyone with an event in the next month. Swelling and the peeling phase are not discreet.',
      ],
    },
  ],
  faq: [
    { q: 'What is lip blush?', a: 'Cosmetic tattooing that deposits soft pigment into the lips to enhance colour and definition.' },
    { q: 'Is it a tattoo?', a: 'It deposits pigment into skin, and many states regulate it as tattooing under health department rules.' },
    { q: 'How long does it last?', a: 'Two to five years, with most people refreshing at two to three.' },
    { q: 'How much does it cost?', a: 'Around $500 to $1,200 including the touch-up. Ask whether a quote includes it.' },
    { q: 'Will it look like lipstick?', a: 'No — it is a soft tint rather than opaque colour, and it heals lighter than it first appears.' },
  ],
  related: [
    { href: '/en/lip-blush-cost', label: 'How Much Does Lip Blush Cost?' },
    { href: '/en/lip-blush-healing', label: 'Lip Blush Healing, Day by Day' },
    { href: '/en/microblading-licensing', label: 'Microblading Licensing: Who Regulates It' },
  ],
}
