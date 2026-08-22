import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO } from './common'

export const howLongDoLashExtensionsLast: EnPage = {
  path: '/en/how-long-do-lash-extensions-last',
  title: 'How Long Do Lash Extensions Last? Retention Explained',
  h1: 'How Long Do Lash Extensions Last, and Why Yours Fall Out Early',
  description:
    'Lash extensions last 2 to 4 weeks with fills every 2 to 3. What controls retention: oil, sleep position, humidity, and application quality.',
  keywords: [
    'how long do lash extensions last',
    'lash extension aftercare',
    'why are my lash extensions falling out',
    'lash fill vs full set',
    'lash retention tips',
  ],
  category: 'Treatment Guide',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**A full set lasts two to four weeks before it needs a fill.** Individual extensions shed with your natural lashes, which have their own growth cycle. Most people book fills every two to three weeks. If yours are falling out in under two weeks, something specific is causing it — and it is usually fixable.',
  blocks: [
    { t: 'h2', id: 'why-shed', text: 'Why they shed at all' },
    {
      t: 'p',
      text: 'Extensions are attached to individual natural lashes. When a natural lash reaches the end of its cycle and sheds, the extension goes with it. **You naturally lose a few lashes a day.** That is normal biology, not a failed set.',
    },
    {
      t: 'table',
      head: ['Timeline', 'What you will see'],
      rows: [
        ['Week 1', 'Looks full'],
        ['Week 2', 'Slight gaps beginning'],
        ['Week 2 - 3', 'Typical fill window'],
        ['Week 4', 'Noticeably sparse'],
        ['Week 5+', 'Too few remain - full removal and new set'],
      ],
    },
    { t: 'h2', id: 'fill-vs-set', text: 'Fill vs full set' },
    {
      t: 'table',
      head: ['', 'Fill', 'Full set'],
      rows: [
        ['What happens', 'Gaps filled on existing extensions', 'Everything applied fresh'],
        ['Time', '45 - 75 min', '120 - 150 min'],
        ['Cost', 'approx. 50 - 70% of a full set', 'Full price'],
        ['When', 'Within 2 - 3 weeks', 'Over 4 weeks, or starting fresh'],
      ],
    },
    {
      t: 'note',
      title: 'Missing the fill window costs you money',
      text: 'Once too few extensions remain, salons charge full price. The two-week habit is cheaper than the five-week one over a year, and your lashes look better throughout. Note that most salons will not fill another salon’s work, because adhesives and application styles differ.',
    },
    { t: 'h2', id: 'falling-out', text: 'Why yours are falling out early' },
    { t: 'p', text: 'This is the real question behind the search. In rough order of frequency:' },
    { t: 'h3', text: '1. Oil — the biggest single cause' },
    {
      t: 'p',
      text: 'Cleansing oils, balms, oil-based makeup removers, and heavy eye creams break down the adhesive. **One cleansing oil in your routine can cost you a week of wear.** Switch to an oil-free foam or gel cleanser.',
    },
    { t: 'h3', text: '2. Sleeping face-down' },
    {
      t: 'p',
      text: 'Pressure and friction for eight hours a night. **If one side always looks worse, this is why.** Sleeping on your back extends wear noticeably, and a silk pillowcase reduces friction if you cannot change position.',
    },
    { t: 'h3', text: '3. Rubbing your eyes' },
    { t: 'p', text: 'Mechanical removal. It also pulls out natural lashes with the extension still attached, which sets retention back further than the single lash you noticed.' },
    { t: 'h3', text: '4. Water in the first hours' },
    { t: 'p', text: 'Adhesive needs time to cure fully. Getting the first four to six hours wet compromises the bond permanently rather than temporarily.' },
    { t: 'h3', text: '5. Application factors — not your fault' },
    {
      t: 'table',
      head: ['Issue', 'Effect'],
      rows: [
        ['Poor isolation', 'Extensions glued to multiple lashes, shed early and damage natural lashes'],
        ['Too much adhesive', 'Creates weight and brittle bonds'],
        ['Too little adhesive', 'Weak attachment'],
        ['Humidity mismatch', 'Adhesive cures at specific humidity ranges; wrong conditions weaken every bond in the set'],
        ['Extension too heavy for the natural lash', 'Premature shedding'],
      ],
    },
    {
      t: 'note',
      title: 'How to tell whose problem it is',
      text: 'If retention is consistently poor across multiple sets at the same salon while your aftercare is solid, **the variable is not you.** Try a different artist before concluding that extensions do not work on your lashes.',
    },
    { t: 'h2', id: 'aftercare', text: 'Aftercare that actually works' },
    { t: 'h3', text: 'First 4 to 6 hours' },
    { t: 'ul', items: ['No water, steam, or sweat.', 'No eye makeup.', 'Do not touch them.'] },
    { t: 'h3', text: 'Daily' },
    {
      t: 'table',
      head: ['Do', 'Do not'],
      rows: [
        ['Cleanse with oil-free foam or gel', 'Cleansing oil or balm'],
        ['Brush with a clean spoolie in the morning', 'Rub or pull'],
        ['Sleep on your back', 'Sleep face-down'],
        ['Air dry or use cool air', 'Rub with a towel'],
      ],
    },
    {
      t: 'p',
      text: '**Clean lashes retain better.** Oil and debris build up at the base and weaken bonds, so gently cleansing them is not optional — it is a retention step. Avoid waterproof mascara entirely, since removing it requires the exact friction that pulls extensions off, and skip eyelash curlers, which snap them.',
    },
    { t: 'h2', id: 'by-style', text: 'What each style typically gets you' },
    {
      t: 'table',
      head: ['Type', 'Typical wear'],
      rows: [
        ['Classic (1:1)', '3 - 4 weeks'],
        ['Volume (2 - 3D)', '3 - 4 weeks'],
        ['Russian volume (4D+)', '2 - 4 weeks - more weight, sometimes shorter'],
        ['Lash lift (no extensions)', '6 - 8 weeks'],
      ],
    },
    { t: 'p', text: 'If you want lower maintenance, **a lash lift lasts roughly twice as long** because there is nothing attached to shed.' },
    { t: 'h2', id: 'doctor', text: 'When to see a doctor' },
    {
      t: 'table',
      head: ['Symptom', 'Action'],
      rows: [
        ['Mild dryness for a day', 'Monitor'],
        ['Redness past 24 hours', 'See an eye doctor'],
        ['Swollen or itchy eyelids', 'See an eye doctor - possible adhesive allergy'],
        ['Pain or vision change', 'Seek care promptly'],
      ],
    },
    { t: 'note', tone: 'warn', text: 'Do not wait it out with eyes. Extensions are generally uneventful, but the downside case is serious enough that early assessment is the right call.' },
  ],
  faq: [
    { q: 'How long do eyelash extensions last?', a: 'Two to four weeks before a fill is needed. Individual extensions shed along with the natural lashes they are attached to.' },
    { q: 'How often should I get fills?', a: 'Every two to three weeks. Past four weeks you will likely need a full set at full price, because too few extensions remain to fill.' },
    { q: 'Why are my lash extensions falling out so fast?', a: 'Most commonly oil-based cleansers, sleeping face-down, rubbing your eyes, or getting them wet in the first few hours. Application quality and adhesive humidity also matter.' },
    { q: 'What is the difference between a fill and a full set?', a: 'A fill tops up existing extensions at roughly 50 to 70% of the price. A full set starts over from bare lashes.' },
    { q: 'Can I wear mascara?', a: 'Skip waterproof mascara, since removing it takes extensions with it. Most people find mascara unnecessary with extensions anyway.' },
    { q: 'Do extensions damage natural lashes?', a: 'The main causes of damage are extensions too heavy for the natural lash and improper removal, not extensions in themselves.' },
    { q: 'Can I get a fill at a different salon?', a: 'Usually not. Most salons will only do a full set on another artist’s work, because they cannot verify the adhesive or application quality.' },
    { q: 'Do lash lifts last longer?', a: 'Yes, six to eight weeks, since there is nothing attached that can shed.' },
  ],
  related: [
    { href: '/en/lash-tech-salary', label: 'How Much Do Lash Techs Make?' },
    { href: '/en/lash-certification', label: 'Lash Certification vs License: The Difference' },
    { href: '/en/how-long-does-waxing-last', label: 'How Long Does Waxing Last?' },
  ],
}
