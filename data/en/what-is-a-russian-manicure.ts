import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, MED_STATE_SCOPE } from './common'

export const whatIsARussianManicure: EnPage = {
  path: '/en/what-is-a-russian-manicure',
  title: 'What Is a Russian Manicure? Dry Technique Explained',
  h1: 'What Is a Russian Manicure?',
  description:
    'A Russian manicure uses an e-file to work the cuticle area dry, producing a very close finish. What it involves, and the safety discussion around it.',
  keywords: ['what is a russian manicure', 'russian manicure explained', 'dry manicure e-file'],
  category: 'Nails',
  stage: 5,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**A dry manicure technique using an electric file with fine bits to work the cuticle area precisely, allowing polish to be applied very close to the skin.** The result is a notably clean look with longer-looking nail beds. It is also the subject of ongoing discussion about safety and scope in the US.',
  blocks: [
    { t: 'h2', id: 'different', text: 'What makes it different' },
    {
      t: 'table',
      head: ['', 'Russian manicure', 'Standard manicure'],
      rows: [
        ['Water soak', 'None - a dry technique', 'Often soaked'],
        ['Cuticle work', 'E-file with fine bits', 'Pusher and nippers'],
        ['Closeness of polish', 'Very close to the skin', 'A small margin left'],
        ['Time', '90 - 150 min', '45 - 70 min'],
        ['Cost', '$70 - 150', '$30 - 70'],
        ['Perceived wear', 'Often reported longer', 'Standard'],
      ],
    },
    { t: 'h2', id: 'why-sought', text: 'Why people seek it out' },
    {
      t: 'ul',
      items: [
        'A very clean finish at the cuticle line.',
        'Nail beds appear longer.',
        'Polish lasts longer without a visible regrowth line at the base.',
        'A precision aesthetic that is hard to achieve otherwise.',
      ],
    },
    { t: 'h2', id: 'safety-discussion', text: 'The safety discussion' },
    { t: 'p', text: 'The technique works close to the **eponychium** — living tissue that acts as a seal against bacteria. That proximity is the whole reason the discussion exists, and it is worth presenting both sides.' },
    { t: 'h3', text: 'Concerns raised' },
    {
      t: 'ul',
      items: [
        'Risk of cutting or thinning living tissue.',
        'Infection risk if that seal is compromised.',
        'It requires substantial e-file skill.',
        '**Scope-of-practice questions in some US states.**',
      ],
    },
    { t: 'h3', text: 'Points made in favour' },
    {
      t: 'ul',
      items: [
        'It is practised widely in some countries with formal training pathways.',
        'Performed correctly, it works on non-living tissue only.',
        'The skill level of the technician is the determining factor.',
      ],
    },
    { t: 'note', text: 'This page presents both positions rather than resolving them. Choose a technician with demonstrable training and ask direct questions, which is the part within your control.' },
    { t: 'h2', id: 'terms', text: 'A note on the name' },
    { t: 'p', text: 'The term describes a technique associated with training traditions in Russia and Eastern Europe, and salons use it loosely. Some advertise it for any dry manicure; others mean the full e-file cuticle method.' },
    {
      t: 'table',
      head: ['If a salon says', 'Ask'],
      rows: [
        ['Russian manicure', 'Do you use an e-file at the cuticle?'],
        ['Dry manicure', 'Is any e-file work done near the skin?'],
        ['Combination manicure', 'Which parts use the e-file?'],
        ['E-file manicure', 'What bits, and how are they sterilised?'],
      ],
    },
    { t: 'p', text: 'The answers tell you what you are actually booking, which matters more than the label because the label is not standardised.' },
    { t: 'h2', id: 'appointment', text: 'What the appointment involves' },
    { t: 'p', text: 'The length of the service surprises people who have only had standard manicures, and most of the extra time goes into one stage.' },
    {
      t: 'table',
      head: ['Stage', 'Roughly', 'Note'],
      rows: [
        ['Consultation and shape', '5 - 10 min', 'Length and shape agreed'],
        ['Dry prep of the nail plate', '15 - 20 min', 'No soaking'],
        ['Cuticle area work', '30 - 60 min', 'The bulk of the time'],
        ['Base, colour, cure', '20 - 30 min', 'As any gel service'],
        ['Finish and oil', '10 min', ''],
      ],
    },
    { t: 'p', text: 'The third row is the service. Everything else is a normal gel manicure, which is why the price difference tracks the time difference so closely.' },
    { t: 'h2', id: 'sensation', text: 'What it feels like' },
    { t: 'p', text: 'People are often nervous about the e-file near the skin, and knowing what is normal makes it easier to recognise what is not.' },
    {
      t: 'table',
      head: ['Sensation', 'Normal?'],
      rows: [
        ['Vibration or a tickling feeling', 'Yes'],
        ['Mild warmth briefly', 'Yes, if it passes quickly'],
        ['Sustained heat', 'No - say so'],
        ['Sharp pain', 'No - stop the service'],
        ['Bleeding', 'No'],
        ['Tenderness afterwards for hours', 'Mild is possible; persistent is not'],
      ],
    },
    { t: 'note', title: 'Speak up during, not after', text: 'A technician can adjust bit, angle, or pressure immediately. Feedback given at the end of the appointment cannot change what already happened, and most people wait far too long to say something.' },
    { t: 'h2', id: 'who-suits', text: 'Who tends to like it' },
    { t: 'p', text: 'The finish is distinctive, and people either notice the difference immediately or wonder what they paid for. Which group you fall into is fairly predictable.' },
    {
      t: 'table',
      head: ['Tends to be worth it', 'Tends not to be'],
      rows: [
        ['You notice the cuticle line on a normal manicure', 'You have never thought about it'],
        ['You have short nail beds', 'You have long nail beds already'],
        ['You stretch appointments to 4 - 5 weeks', 'You rebook every 2 weeks'],
        ['You want a precise, groomed look', 'You want low fuss and low cost'],
        ['You have found a verified technician', 'You would be booking on price'],
      ],
    },
    { t: 'p', text: 'The last row is doing real work. Because the outcome depends so heavily on the technician, booking the cheapest available version of this service is the one approach that reliably disappoints.' },
  ],
  faq: [
    { q: 'What is a Russian manicure?', a: 'A dry manicure using an electric file for precise cuticle work, allowing polish to be applied very close to the skin.' },
    { q: 'Why is it discussed so much?', a: 'It works near living tissue, so technique and training matter considerably. Scope rules also vary by state.' },
    { q: 'How long does it take?', a: '90 to 150 minutes, which is two to three times a standard manicure.' },
    { q: 'Does it hurt?', a: 'It should not. Pain is a signal to speak up immediately rather than to wait until the end.' },
    { q: 'Is it available everywhere?', a: 'No. Availability varies, partly because state rules differ on what is permitted.' },
  ],
  related: [
    { href: '/en/russian-manicure-safety', label: 'Is a Russian Manicure Safe?' },
    { href: '/en/russian-manicure-cost', label: 'How Much Does a Russian Manicure Cost?' },
    { href: '/en/russian-vs-regular-manicure', label: 'Russian vs Regular Manicure' },
  ],
}
