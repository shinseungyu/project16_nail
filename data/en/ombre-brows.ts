import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, PMU_TATTOO_NOTE } from './common'

export const ombreBrows: EnPage = {
  path: '/en/ombre-brows',
  title: 'Ombré Brows: The Gradient Powder Technique',
  h1: 'Ombré Brows: The Gradient Powder Technique',
  description:
    'Ombré brows are the gradient version of powder brows — lighter at the front, deeper toward the tail. How it differs, and what it costs and lasts.',
  keywords: ['ombre brows', 'ombre powder brows', 'ombre eyebrows', 'gradient eyebrow tattoo'],
  category: 'Brows',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**Ombré brows are the same machine-shaded powder technique as [powder brows](/en/what-are-powder-brows), styled as a gradient — lighter and softer near the front, gradually deepening toward the tail.** Cost, wear time and healing are essentially identical to standard powder brows; only the shading pattern differs.',
  blocks: [
    { t: 'note', tone: 'warn', text: PMU_TATTOO_NOTE },
    { t: 'h2', id: 'what-makes-it-different', text: 'What makes ombré different' },
    {
      t: 'p',
      text: 'Both techniques use a digital machine to deposit pigment in a stippled dot pattern, and both sit in the same skin layer used for body tattooing — which is why, **in many US states, ombré brows are regulated as tattooing** in the same way as microblading and standard powder brows. The distinction is purely stylistic: a flat powder fill applies roughly even depth across the whole brow, while an ombré fill is deliberately built up from light to dark.',
    },
    {
      t: 'table',
      head: ['', 'Flat powder brows', 'Ombré brows'],
      rows: [
        ['Front of the brow', 'Same depth as the rest', 'Lighter, softer, sometimes barely there'],
        ['Body and tail', 'Even shading throughout', 'Progressively deeper'],
        ['Overall look', 'Uniform, defined fill', 'Soft gradient, often described as more natural'],
        ['Tool and technique', 'Digital machine, stippled dots', 'Same machine, same dots, layered differently'],
        ['Cost', '$450 - 1,300', '$450 - 1,300'],
        ['Wear time', '2 - 3 years', '2 - 3 years'],
      ],
    },
    {
      t: 'p',
      text: '**The two are not really different procedures**, which is why an artist who is skilled at one is generally skilled at the other. What varies between artists is how naturally they build the gradient and how well it matches your existing brow shape.',
    },
    { t: 'h2', id: 'why-people-choose-it', text: 'Why people choose the gradient look' },
    {
      t: 'ul',
      items: [
        '**A softer front edge** for people who find a flat, defined fill looks too much like drawn-on makeup.',
        '**Some existing hair at the front** that the light shading blends into rather than competing with.',
        '**A preference that reads as filled-in rather than obviously tattooed** at a glance.',
        '**A style match to how they already fill in their brows** with a pencil or powder, front light and tail defined.',
      ],
    },
    { t: 'h2', id: 'who-suits', text: 'Who tends to suit it' },
    {
      t: 'table',
      head: ['Reasonable fit', 'Discuss carefully first'],
      rows: [
        ['Oily or combination skin', 'Very sparse skin with little padding over bone'],
        ['Some natural hair at the front of the brow', 'Active skin conditions in the area'],
        ['Wanting definition without a flat, drawn look', 'Recent isotretinoin use'],
        ['Already have faded microblading or old PMU', 'Pregnancy — many artists decline'],
      ],
    },
    { t: 'h2', id: 'process', text: 'The process' },
    {
      t: 'p',
      text: 'The appointment structure matches standard powder brows: consultation and shape mapping, topical numbing, pigment application in passes, and a written aftercare briefing. The only technical difference is that the artist deliberately varies pressure and pigment density from front to tail rather than keeping it constant.',
    },
    {
      t: 'table',
      head: ['Stage', 'What happens'],
      rows: [
        ['1. Consultation', 'Shape mapping, skin assessment, discussion of how light the front should be'],
        ['2. Numbing', 'Topical anaesthetic'],
        ['3. Mapping', 'Outline drawn and approved, including where the gradient starts'],
        ['4. Shading', 'Pigment built up in layers, lighter at the front, deeper toward the tail'],
        ['5. Aftercare briefing', 'Written instructions'],
        ['6. Touch-up', '4 - 8 weeks later — part of the process, not optional'],
      ],
    },
    { t: 'h2', id: 'cost', text: 'What it costs' },
    {
      t: 'p',
      text: '**Ombré brows are priced the same as flat powder brows in most studios: $450 to $1,300 including the touch-up**, and that figure varies by provider experience and region rather than by which of the two styles you choose. [Powder Brows Cost: Including the Touch-Up](/en/powder-brows-cost) covers the full pricing breakdown, and it applies equally here.',
    },
    { t: 'h2', id: 'healing', text: 'Healing' },
    {
      t: 'p',
      text: 'Healing follows the same pattern as any powder technique: visible surface healing over roughly seven to fourteen days, with the final gradient settling over four to six weeks. Around days eight to fourteen the colour commonly looks like it has faded away almost completely — a normal stage called ghosting rather than a sign the work failed. [Powder Brows Healing: Week by Week](/en/powder-brows-healing) walks through the full timeline, which applies to ombré exactly as it does to flat powder shading.',
    },
    { t: 'h2', id: 'longevity', text: 'How long it lasts' },
    {
      t: 'table',
      head: ['Skin type', 'Typical wear'],
      rows: [
        ['Dry', '2.5 - 3 years'],
        ['Normal', '2 - 3 years'],
        ['Combination', '2 - 2.5 years'],
        ['Oily', '1.5 - 2.5 years'],
      ],
    },
    {
      t: 'p',
      text: 'Because the front of an ombré brow is deliberately lighter to begin with, it is often the first part to become noticeably faint — worth knowing so a lighter front edge at the one-year mark does not read as a problem. See [How Long Do Powder Brows Last?](/en/how-long-do-powder-brows-last) for what affects the range and when to book a colour refresh.',
    },
    { t: 'h2', id: 'over-old-work', text: 'Ombré over existing brow tattoo or microblading' },
    {
      t: 'p',
      text: 'The gradient style can work well over faded microblading, since a light front edge naturally blends with soft residual strokes rather than competing with them. It works less well over strong, unfaded colour or an unwanted tone, where lightening or removal usually needs to happen first. [Powder Brows Over Old Microblading: What to Know](/en/powder-brows-over-microblading) covers what to assess before booking a cover session.',
    },
    { t: 'h2', id: 'choosing', text: 'Choosing between ombré, flat powder and microblading' },
    {
      t: 'p',
      text: 'Since cost and longevity are the same for ombré and flat powder, the choice between them is really about the look you want rather than a practical trade-off. Choosing between either of those and microblading is a bigger decision involving your skin type and how much brow hair you already have — [Microblading vs Powder Brows](/en/microblading-vs-powder-brows) covers that comparison.',
    },
    {
      t: 'ol',
      items: [
        '**Want a soft, gradient look?** Ombré.',
        '**Want even, defined colour throughout?** Flat powder.',
        '**Oily skin or little brow hair either way?** Powder or ombré over microblading.',
        '**Want to see both styles healed on a similar skin type to yours** before deciding — ask the artist for photos of each.',
      ],
    },
    { t: 'h2', id: 'discomfort-and-safety', text: 'Discomfort and what to ask' },
    {
      t: 'p',
      text: 'Topical numbing is standard, and most people describe a vibrating scratch rather than sharp pain — it is not a painless procedure, and any provider who claims otherwise is overselling it. The safety questions are identical to any brow tattooing appointment.',
    },
    {
      t: 'table',
      head: ['Ask', 'Why'],
      rows: [
        ['Are you registered for body art or tattooing here?', 'Often a health department requirement'],
        ['Are single-use needles used?', 'Non-negotiable'],
        ['Can I see healed ombré work, not just fresh photos?', 'Fresh work looks bold and crisp for everyone'],
        ['Does the price include the touch-up?', 'The most common source of quote confusion'],
      ],
    },
    { t: 'h2', id: 'summary', text: 'The short version' },
    {
      t: 'p',
      text: 'Ombré brows are the same powder machine technique as standard powder brows, styled to fade from light at the front to defined at the tail. Cost ($450 - 1,300), wear time (2 - 3 years) and healing are essentially the same as flat powder shading — the decision between them comes down to look rather than cost or durability.',
    },
    {
      t: 'p',
      text: 'For any infection signs during healing — spreading redness, warmth, pus or fever — contact a doctor rather than waiting to see your artist. That applies to every technique in this category, ombré included.',
    },
  ],
  faq: [
    { q: 'What is the difference between ombré and powder brows?', a: 'They are the same machine-shading technique. Powder brows apply even depth throughout; ombré deliberately fades from light at the front to deeper at the tail.' },
    { q: 'Do ombré brows cost more than powder brows?', a: 'No. Both are typically $450 to $1,300 including the touch-up, since it is the same underlying procedure.' },
    { q: 'How long do ombré brows last?', a: 'Two to three years for most people, with oily skin at the shorter end and dry skin at the longer end.' },
    { q: 'Can ombré brows be done over old microblading?', a: 'Often, particularly over soft, faded residual pigment. Strong or unwanted-toned colour usually needs addressing first.' },
    { q: 'Do ombré brows hurt?', a: 'Topical numbing is standard and most people describe a vibrating scratch rather than sharp pain, though it is not a painless procedure.' },
  ],
  related: [
    { href: '/en/what-are-powder-brows', label: 'What Are Powder Brows?' },
    { href: '/en/powder-brows-healing', label: 'Powder Brows Healing: Week by Week' },
    { href: '/en/how-long-do-powder-brows-last', label: 'How Long Do Powder Brows Last?' },
  ],
}
