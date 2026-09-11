import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, NAIL_PLATE_NOTE } from './common'

export const whatIsPolygel: EnPage = {
  path: '/en/what-is-polygel',
  title: 'What Is Polygel? How It Compares to Acrylic',
  h1: 'What Is Polygel?',
  description:
    'Polygel is a putty-like enhancement shaped over dual forms and cured under a lamp. How it differs from acrylic, hard gel and Gel X.',
  keywords: ['what is polygel', 'polygel nails', 'polygel vs acrylic', 'polygel nail system', 'polygel meaning'],
  category: 'Nails',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**Polygel is a putty-like nail enhancement that a technician shapes by hand over a dual form, then cures under a UV/LED lamp — it sits between acrylic and hard gel rather than replacing either one.** It does not self-level like gel polish, and it does not start hardening the moment it hits air like acrylic, which is exactly what gives it its working time.',
  blocks: [
    { t: 'note', tone: 'warn', text: NAIL_PLATE_NOTE },
    { t: 'h2', id: 'what-it-is', text: 'What it actually is' },
    {
      t: 'table',
      head: ['Attribute', 'Detail'],
      rows: [
        ['Consistency', 'Thick putty - does not self-level or drip'],
        ['Cure', 'UV/LED lamp'],
        ['Odour', 'Minimal - no monomer liquid involved'],
        ['Working time', 'Effectively unlimited until it goes under the lamp'],
        ['Shaping', 'A dual form, or over a tip, sculpted by hand'],
        ['Weight', 'Lighter than acrylic at a comparable length'],
      ],
    },
    { t: 'p', text: 'That working-time row is the point most people miss. Acrylic starts setting within a couple of minutes of being mixed, so a technician works against a clock. Polygel stays workable indefinitely because nothing happens to it until it is placed under a lamp — the clock only starts when they choose.' },
    { t: 'h2', id: 'family', text: 'Where it sits in the nail-system family' },
    {
      t: 'table',
      head: ['', 'Gel polish', 'Hard gel', 'Acrylic', 'Polygel'],
      rows: [
        ['Thickness', 'Thin', 'Thick', 'Thick', 'Thick'],
        ['Self-levelling', 'Yes', 'Partially', 'No', 'No'],
        ['Structural', 'No', 'Yes', 'Yes', 'Yes'],
        ['Cures', 'Lamp', 'Lamp', 'Air', 'Lamp'],
        ['Odour', 'Minimal', 'Minimal', 'Noticeable', 'Minimal'],
        ['Removal', 'Soak-off', 'Usually filed', 'Usually filed', 'Filed then soak-off'],
      ],
    },
    { t: 'p', text: '**Polygel borrows the strength of acrylic and the lamp cure of gel, without matching either one exactly.** It needs hand-shaping like acrylic because it will not level itself, but it will not set on you mid-sculpt because it only cures on command. See [Polygel vs Acrylic](/en/polygel-vs-acrylic) for the full trade-off.' },
    { t: 'h2', id: 'application', text: 'How a set is built' },
    {
      t: 'ol',
      items: [
        'Consultation, shape and length agreed.',
        'Natural nail prepped - cuticle work, light buff, dehydrate.',
        'A dual form fitted under the free edge, or a tip applied.',
        '**Polygel placed and shaped by hand**, using slip solution and a silicone-tipped brush to move it before it cures.',
        'Cured under the lamp.',
        'Form removed, or the shape refined over the tip.',
        'Filed and shaped, then finished with a top coat.',
      ],
    },
    { t: 'h2', id: 'slip-solution', text: 'What slip solution is for' },
    { t: 'p', text: 'Polygel is tacky and will stick to a brush, a tool, or a finger on contact. Slip solution is brushed lightly onto the tool and the product to let it be moved and smoothed before curing, the way water lets you shape wet clay without it clinging to your hands.' },
    { t: 'note', title: 'More is not better here', text: 'A little slip solution goes a long way. Overusing it thins and softens the product before it cures, which is one of the more common [home mistakes](/en/polygel-nails-at-home) with this system.' },
    { t: 'h2', id: 'forms', text: 'Dual forms, briefly' },
    { t: 'p', text: 'A dual form is a curved guide, usually disposable and adhesive-backed, fitted under the free edge to support the shape while the polygel is placed and sculpted on top. It is removed once the product is cured, leaving a shaped extension rather than a flat overlay.' },
    {
      t: 'table',
      head: ['Approach', 'Result'],
      rows: [
        ['Dual form only', 'Fully custom length and curve, built from nothing'],
        ['Over a pre-shaped tip', 'Faster, closer to how Gel X is applied'],
        ['Overlay, no extension', 'Strength added to the natural nail length'],
      ],
    },
    { t: 'h2', id: 'who-it-suits', text: 'Who it suits' },
    {
      t: 'ul',
      items: [
        'People who want acrylic-level strength without the smell.',
        'Anyone who wants a fully custom curve or length the tray of tip sizes cannot match.',
        'People sensitive to strong monomer odour.',
        'Those who want something lighter than acrylic at length.',
      ],
    },
    { t: 'h2', id: 'characteristics', text: 'Key characteristics' },
    {
      t: 'table',
      head: ['Attribute', 'Detail'],
      rows: [
        ['First full set', '3 hours or more'],
        ['A later fill, once the technician knows your hands', '60 - 90 minutes'],
        ['Cost, full set', '$50 - 100, varies by salon and region'],
        ['Fill', '$35 - 70'],
        ['Fill cycle', 'Every 3 - 4 weeks'],
      ],
    },
    { t: 'p', text: 'That first-set time is longer than most systems, and it catches people off guard. Sculpting a custom shape from a form takes real time on each finger; a tip system skips that step entirely, which is the trade you are making for the customisation.' },
    { t: 'h2', id: 'first-time', text: 'If it is your first set' },
    {
      t: 'table',
      head: ['Decision', 'For a first set'],
      rows: [
        ['Length', 'Moderate - very long is harder on a first attempt for both of you'],
        ['Shape', 'A common one - square, almond, coffin - rather than an unusual curve'],
        ['Time to book', 'Allow the full 3 hours, do not schedule tightly after'],
        ['Ask about removal', 'Confirm it soaks off with a filed seal, not a pure file-down'],
      ],
    },
    { t: 'p', text: 'That last row matters more than it sounds. Knowing the removal method before you need it is what keeps a first-time wearer from reaching for a metal tool three weeks later. See [How to Remove Polygel Nails](/en/polygel-removal) for the full method.' },
    { t: 'h2', id: 'myths', text: 'A couple of things it is not' },
    {
      t: 'table',
      head: ['Claim', 'Reality'],
      rows: [
        ['"It cannot lift or crack"', 'It can, like any enhancement, mostly from skin contact during application - see Why Polygel Lifts'],
        ['"It is odourless"', 'Minimal odour, not zero, since it still contains a resin'],
        ['"Any technician can do it without training"', 'Hand-sculpting a dual form has a real learning curve'],
        ['"It fixes your natural nails underneath"', 'It protects them while they grow - no overlay changes the nail plate itself, which is dead tissue'],
      ],
    },
  ],
  faq: [
    { q: 'What is polygel made of?', a: 'A hybrid resin that combines properties of acrylic and gel - putty-like and structural like acrylic, but cured under a lamp like gel rather than hardening in air.' },
    { q: 'Does polygel smell?', a: 'Minimal odour. There is no monomer liquid involved, so it does not carry the strong smell associated with acrylic.' },
    { q: 'Is polygel the same as acrylic?', a: 'No. It shares the structural strength but cures under a lamp instead of air-drying, and it has far less odour.' },
    { q: 'Can polygel be used without a form?', a: 'Yes, over a pre-shaped tip, or as an overlay on the natural nail without adding length at all.' },
    { q: 'How long does a full set take?', a: 'Three hours or more the first time, dropping to about 60 to 90 minutes once the technician is familiar with your hands.' },
  ],
  related: [
    { href: '/en/polygel-vs-acrylic', label: 'Polygel vs Acrylic Nails' },
    { href: '/en/polygel-vs-gel-x', label: 'Polygel vs Gel X' },
    { href: '/en/what-is-builder-gel', label: 'What Is Builder Gel?' },
  ],
}
