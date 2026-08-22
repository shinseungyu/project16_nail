import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, MED_DISCLAIMER, MED_STATE_SCOPE } from './common'

export const microneedlingAtHomeVsProfessional: EnPage = {
  path: '/en/microneedling-at-home-vs-professional',
  title: 'At-Home Microneedling vs Professional: The Difference',
  h1: 'At-Home Microneedling vs Professional Treatment',
  description:
    'At-home rollers and professional devices differ in depth, sterility and control. What that means practically, and where the actual risks are.',
  keywords: ['at home microneedling', 'derma roller vs professional', 'home microneedling safe'],
  category: 'Skin Treatments',
  stage: 1,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**At-home devices work at much shallower depths than professional systems, and the main practical difference is sterility and depth control.** They are not a cheaper version of the same treatment.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_DISCLAIMER },
    { t: 'h2', id: 'comparison', text: 'Comparison' },
    {
      t: 'table',
      head: ['', 'At-home roller', 'Professional device'],
      rows: [
        ['Depth', 'Very shallow', 'Adjustable, provider-controlled'],
        ['Sterility', 'Your responsibility', 'Single-use sterile cartridges'],
        ['Technique', 'Self-administered', 'Trained provider'],
        ['Cost', '$15 - 60 for the device', '$200 - 800 per session'],
        ['Risk profile', 'Infection, uneven pressure, damage if misused', 'Managed by the provider'],
      ],
    },
    { t: 'h2', id: 'sterility', text: 'The sterility problem' },
    { t: 'p', text: 'A device that punctures skin must be sterile. **Home sanitising is not equivalent to a single-use sterile cartridge.** Reusing an inadequately cleaned roller is the main documented risk with home use, and it is the part that is hardest to verify yourself.' },
    { t: 'p', text: 'This is the structural difference between the two, and it does not narrow with a better home device. A professional cartridge is discarded after one use; a home roller is reused by design.' },
    { t: 'h2', id: 'if-you-use-one', text: 'If you use one anyway' },
    {
      t: 'ul',
      items: [
        '**Never share it** with anyone, under any circumstances.',
        'Replace it regularly per the manufacturer’s guidance.',
        '**Never use over active acne, infection, or broken skin.**',
        'Do not apply pressure to force depth.',
        'Do not follow with actives immediately.',
      ],
    },
    { t: 'note', tone: 'warn', text: 'Stop and see a doctor if you develop signs of infection: increasing redness, warmth, swelling, pus, or fever.' },
    { t: 'h2', id: 'expectations', text: 'Setting expectations honestly' },
    { t: 'p', text: 'The depth difference is not a detail, it is the mechanism. A device operating at a fraction of the depth is doing something different, not a milder version of the same thing.' },
    {
      t: 'table',
      head: ['If your goal is', 'The honest position'],
      rows: [
        ['Trying it before paying for professional treatment', 'They are different treatments, so it is not a trial'],
        ['Saving money on the same outcome', 'The outcome is not the same'],
        ['Product absorption', 'Marketing claim; discuss with a provider'],
        ['Maintenance between professional sessions', 'Ask your provider before doing this'],
      ],
    },
    { t: 'p', text: 'That last row matters most. If you are already under a provider’s care, home rolling between sessions is a question for them rather than a decision to make independently.' },
    { t: 'h2', id: 'marketing', text: 'How home devices are marketed' },
    { t: 'p', text: 'The gap between what these devices do and how they are sold is wide, and recognising the common claims makes the decision clearer.' },
    {
      t: 'table',
      head: ['Claim', 'What to hold in mind'],
      rows: [
        ['Professional results at home', 'Depth and sterility differ structurally'],
        ['Boosts product absorption', 'A claim to discuss with a provider'],
        ['Safe for daily use', 'Frequency claims warrant scepticism'],
        ['Medical-grade', 'Not a regulated description in this context'],
        ['Used by professionals', 'Professionals use different devices'],
      ],
    },
    { t: 'h2', id: 'hygiene', text: 'If you own one, the hygiene routine is the whole job' },
    {
      t: 'ol',
      items: [
        '**Clean skin first**, thoroughly, before anything touches it.',
        '**Follow the manufacturer’s cleaning protocol** for the device, every time.',
        '**Store it dry and covered**, not in a damp bathroom.',
        '**Replace it on schedule**, not when it looks worn — needles dull invisibly.',
        '**Discard it after any skin infection**, without exception.',
      ],
    },
    { t: 'note', tone: 'warn', title: 'Sharing is the one absolute', text: 'A device that punctures skin is not shareable under any circumstances, including with household members. This is the single rule with no nuance attached.' },
    { t: 'h2', id: 'when-to-stop', text: 'When to stop using it' },
    { t: 'p', text: 'Stop and speak to a professional if you notice persistent redness, breakouts that began after you started, any sign of infection, or texture changes you did not have before. **Continuing through those signs is how a cosmetic decision turns into a medical one.**' },
    { t: 'h2', id: 'cost-reality', text: 'The cost comparison people actually make' },
    { t: 'p', text: 'On paper a $40 device against $300 a session looks decisive. The comparison only holds if the two things did the same job, and the depth difference means they do not.' },
    {
      t: 'table',
      head: ['', 'At-home device', 'Professional course'],
      rows: [
        ['Upfront', '$15 - 60', '$600 - 4,000'],
        ['Replacement', 'Regular, per manufacturer', 'Not applicable'],
        ['Depth', 'Very shallow', 'Provider-controlled'],
        ['Assessment of your skin', 'None', 'Included'],
        ['If something goes wrong', 'Your problem', 'Your provider'],
      ],
    },
    { t: 'p', text: 'The last row is the one that rarely appears in the comparison and matters most. **A professional treatment includes someone accountable for the outcome.**' },
    { t: 'h2', id: 'talk-to-provider', text: 'If you already see a provider' },
    { t: 'p', text: 'Using a home device between professional sessions is a specific question with a specific answer, and your provider is the person who has it. Depth, timing, and what you are using on your skin all interact with what they are doing.' },
    {
      t: 'ul',
      items: [
        'Tell them **what device you have** and how often you use it.',
        'Ask whether to pause it during a course.',
        'Ask how long after a session before using anything at home.',
        '**Mention it even if you think they will disapprove** — the information changes their plan.',
      ],
    },
  ],
  faq: [
    { q: 'Are home rollers effective?', a: 'They work far more superficially than professional devices, so expectations should be set accordingly.' },
    { q: 'Are they safe?', a: 'The main risks are infection from inadequate sanitation and damage from excessive pressure.' },
    { q: 'Can I use the same needle depth as a clinic?', a: 'No, and attempting to is not advisable. Depth control is part of what a trained provider manages.' },
    { q: 'What about pen devices sold online?', a: 'The same concerns apply, namely sterility and technique.' },
    { q: 'Is it worth trying before paying for professional treatment?', a: 'They are different treatments, so it does not function as a trial version.' },
  ],
  related: [
    { href: '/en/is-microneedling-worth-it', label: 'Is Microneedling Worth It?' },
    { href: '/en/microneedling-side-effects', label: 'Microneedling Side Effects' },
    { href: '/en/microneedling-cost', label: 'How Much Does Microneedling Cost?' },
  ],
}
