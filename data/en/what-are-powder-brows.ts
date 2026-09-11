import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, PMU_TATTOO_NOTE } from './common'

export const whatArePowderBrows: EnPage = {
  path: '/en/what-are-powder-brows',
  title: 'What Are Powder Brows? Process, Cost and Wear',
  h1: 'What Are Powder Brows?',
  description:
    'Powder brows use a machine to shade in a soft, filled brow effect. The process, typical cost, how long it wears, and who it suits.',
  keywords: ['what are powder brows', 'powder brows meaning', 'powder brow tattoo', 'powder ombre brows'],
  category: 'Brows',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**Powder brows use a machine to deposit pigment in a fine pattern of dots, building a soft, shaded fill rather than individual hair-like strokes.** The result looks like well-applied brow powder, and it typically wears for two to three years.',
  blocks: [
    { t: 'note', tone: 'warn', text: PMU_TATTOO_NOTE },
    { t: 'h2', id: 'what-it-is', text: 'What powder brows actually are' },
    {
      t: 'p',
      text: 'A digital machine moves a single needle rapidly up and down, depositing pigment into the upper layers of skin in a stippled pattern. Layered together, the dots read as a soft gradient of colour rather than distinct lines. That is the main difference from [microblading vs powder brows](/en/microblading-vs-powder-brows), which uses a hand-held blade to cut individual hair-like strokes instead.',
    },
    {
      t: 'p',
      text: 'The pigment sits in the dermis, the same layer used for body tattooing. **In many US states, powder brows are regulated as tattooing** and overseen by health departments rather than cosmetology boards, which is why registration and inspection requirements apply to the studio as well as the artist.',
    },
    { t: 'h2', id: 'key-facts', text: 'Key facts at a glance' },
    {
      t: 'table',
      head: ['Attribute', 'Typical'],
      rows: [
        ['Session length', '2 - 3 hrs for the first appointment'],
        ['Cost', '$450 - 1,300, usually including the touch-up'],
        ['Wears for', '2 - 3 years'],
        ['Visible healing', '7 - 14 days'],
        ['Full settling', '4 - 6 weeks'],
        ['Touch-up', '4 - 8 weeks after the first session, not optional'],
      ],
    },
    { t: 'h2', id: 'the-process', text: 'The process' },
    {
      t: 'table',
      head: ['Stage', 'What happens'],
      rows: [
        ['1. Consultation', 'Shape mapping, skin assessment, pigment shade selection'],
        ['2. Numbing', 'Topical anaesthetic applied and left to take effect'],
        ['3. Mapping', 'Brow outline drawn and approved before any pigment goes in'],
        ['4. Shading', 'Pigment deposited in passes, building depth gradually'],
        ['5. Aftercare briefing', 'Written instructions for the healing period'],
        ['6. Touch-up', '4 - 8 weeks later, part of the standard process'],
      ],
    },
    {
      t: 'p',
      text: '**The touch-up is where the result is finished, not where a mistake gets fixed.** Pigment retention is uneven after the first session because skin heals unevenly, and the second visit builds up any lighter patches and adjusts the shape if needed. A quoted price that leaves it out is an incomplete quote rather than a cheaper one.',
    },
    { t: 'h2', id: 'why-not-hair-strokes', text: 'Why it looks different from microblading' },
    {
      t: 'p',
      text: 'A blade cuts a line; a machine deposits a dot. Building thousands of dots close together produces an even, shaded fill instead of a linear stroke, and that fill ages differently too — it tends to soften evenly rather than blur the way a fine line can.',
    },
    {
      t: 'table',
      head: ['', 'Powder brows', 'Microblading'],
      rows: [
        ['Tool', 'Digital machine', 'Hand-held blade'],
        ['Pattern', 'Stippled dots, shaded', 'Individual hair-like lines'],
        ['Best suited to', 'Oily and combination skin', 'Dry to normal skin'],
        ['Ages as', 'Softens evenly', 'Strokes can blur'],
      ],
    },
    { t: 'h2', id: 'why-oily-skin', text: 'Why oily skin does better with this technique' },
    {
      t: 'p',
      text: 'Oil breaks down fine lines faster than it breaks down a shaded fill, so hand-stroke techniques tend to blur and fade unevenly on oilier skin. **Powder brows do not depend on a crisp line holding its shape**, which is why artists commonly steer oily-skinned clients toward this technique or its gradient variant, [ombré brows](/en/ombre-brows).',
    },
    { t: 'h2', id: 'ombre-variant', text: 'Ombré brows: the gradient version' },
    {
      t: 'p',
      text: 'Ombré brows are a stylistic variant of the same powder technique — lighter and more diffuse near the front of the brow, gradually deepening toward the tail. The tool, the pigment depth, the cost range and the wear time are essentially the same; the difference is purely in how the shading is layered. See [Ombré Brows: The Gradient Powder Technique](/en/ombre-brows) for the detail.',
    },
    { t: 'h2', id: 'who-suits', text: 'Who it tends to suit' },
    {
      t: 'table',
      head: ['Reasonable fit', 'Discuss carefully first'],
      rows: [
        ['Oily or combination skin', 'Active skin conditions in the brow area'],
        ['Little to no brow hair to work with', 'Keloid-prone skin'],
        ['Wanting a defined, makeup-like finish', 'Recent isotretinoin use'],
        ['Comfortable with a 2 - 3 year commitment', 'Pregnancy — many artists decline'],
        ['Already have faded microblading', 'Very sparse skin over bone with little padding'],
      ],
    },
    { t: 'h2', id: 'cost-overview', text: 'What it costs' },
    {
      t: 'p',
      text: '**Expect $450 to $1,300 for the initial session plus the touch-up, and treat that as a range rather than a quote** — pricing varies by provider experience, region and what exactly is included. [Powder Brows Cost: Including the Touch-Up](/en/powder-brows-cost) breaks down what typically drives the difference between a $500 quote and a $1,200 one.',
    },
    { t: 'h2', id: 'healing-and-ghosting', text: 'Healing, and the stage that alarms people' },
    {
      t: 'p',
      text: 'Surface healing takes roughly seven to fourteen days, and the full result settles over four to six weeks. Somewhere around days eight to fourteen, the colour often looks like it has faded away almost entirely — a normal stage called ghosting, caused by a layer of healing skin temporarily sitting over the pigment. It is not a sign anything went wrong, and it is not a reason to book an early correction. The full week-by-week pattern is in [Powder Brows Healing: Week by Week](/en/powder-brows-healing).',
    },
    { t: 'h2', id: 'how-long-it-lasts', text: 'How long it lasts' },
    {
      t: 'p',
      text: 'Most people get two to three years before a colour boost is needed, with skin type doing most of the work in where you land in that range. [How Long Do Powder Brows Last?](/en/how-long-do-powder-brows-last) covers the breakdown by skin type and what shortens or extends it.',
    },
    { t: 'h2', id: 'over-old-work', text: 'If you already have brow tattoo or microblading' },
    {
      t: 'p',
      text: 'Powder brows are frequently used to cover faded microblading, since a shaded fill sits more evenly over old, soft residual pigment than a fresh set of strokes would. How well it works depends on how much colour is left, what tone it has faded to, and the condition of the skin. [Powder Brows Over Old Microblading: What to Know](/en/powder-brows-over-microblading) covers when this works well and when the old work needs addressing first.',
    },
    { t: 'h2', id: 'terms', text: 'The terms you will hear' },
    {
      t: 'p',
      text: 'Studios are not consistent with this vocabulary, which makes comparing quotes harder than it should be. Ask which technique is actually being quoted rather than relying on the name alone.',
    },
    {
      t: 'table',
      head: ['Term', 'Usually means'],
      rows: [
        ['Powder brows', 'Machine-shaded fill, even depth throughout'],
        ['Ombré brows', 'The same technique, graduated light-to-dark'],
        ['Microshading', 'Another common name for the same machine technique'],
        ['Combo brows', 'Hair strokes at the front, shading through the body'],
        ['PMU', 'Permanent makeup — the umbrella term for all of the above'],
      ],
    },
    { t: 'h2', id: 'before-booking', text: 'Before you book' },
    {
      t: 'ol',
      items: [
        '**Ask for healed photos**, taken four to eight weeks out, not fresh ones from the day of the appointment.',
        '**Confirm body art or tattoo registration** with your state or county health department.',
        '**Ask whether the touch-up is included** in the quoted price.',
        '**Mention any existing brow tattoo or microblading** at consultation, even if it has mostly faded.',
        '**Discuss your skin type honestly** — it is the single biggest factor in how the result holds.',
        '**Allow at least two weeks of healing** before any event you want to look a particular way for.',
      ],
    },
    { t: 'h2', id: 'discomfort', text: 'What it feels like' },
    {
      t: 'p',
      text: 'Topical numbing is standard practice, and most people describe the sensation as a vibrating scratch rather than sharp pain. Sensitivity varies between individuals and can increase slightly as the numbing wears off partway through a longer session, so ask your artist about reapplying numbing if you need it.',
    },
    { t: 'h2', id: 'summary', text: 'The short version' },
    {
      t: 'p',
      text: 'A machine deposits pigment in a stippled pattern to create a soft, shaded brow fill that generally suits oily and combination skin better than hand-stroke techniques. Budget $450 to $1,300 including the touch-up, expect two to three years of wear, and expect a stage around days eight to fourteen where the colour looks like it has disappeared before it settles.',
    },
    {
      t: 'p',
      text: '**The choice between this and microblading usually comes down to your skin and your hair, not personal preference alone.** [Microblading vs Powder Brows](/en/microblading-vs-powder-brows) walks through that decision in detail if you have not settled on a technique yet.',
    },
  ],
  faq: [
    { q: 'What are powder brows exactly?', a: 'A cosmetic tattooing technique that uses a machine to deposit pigment in a stippled pattern, creating a soft, shaded brow fill rather than individual hair strokes.' },
    { q: 'Is it the same as ombré brows?', a: 'Essentially yes. Ombré brows are the same machine technique styled as a gradient, lighter at the front and deeper toward the tail.' },
    { q: 'How long do powder brows last?', a: 'Typically two to three years, varying mainly by skin type, sun exposure and aftercare.' },
    { q: 'Do powder brows hurt?', a: 'Topical numbing is standard, and most people describe a vibrating scratch rather than sharp pain. It is not a painless procedure.' },
    { q: 'Is the touch-up necessary?', a: 'Yes. It is part of the standard process, scheduled four to eight weeks after the first session to even out retention.' },
  ],
  related: [
    { href: '/en/what-is-microblading', label: 'What Is Microblading?' },
    { href: '/en/microblading-vs-powder-brows', label: 'Microblading vs Powder Brows' },
    { href: '/en/ombre-brows', label: 'Ombré Brows: The Gradient Powder Technique' },
  ],
}
