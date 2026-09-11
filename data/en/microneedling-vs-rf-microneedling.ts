import type { EnPage } from './types'
import { EN_UPDATED_BATCH7, EN_UPDATED_BATCH7_ISO, MED_DISCLAIMER, MED_STATE_SCOPE } from './common'

export const microneedlingVsRfMicroneedling: EnPage = {
  path: '/en/microneedling-vs-rf-microneedling',
  title: 'Microneedling vs RF Microneedling: Differences',
  h1: 'Microneedling vs RF Microneedling',
  description:
    'RF microneedling adds radiofrequency energy, which changes cost, downtime, provider requirements and state regulation.',
  keywords: ['microneedling vs rf microneedling', 'rf microneedling', 'radiofrequency microneedling'],
  category: 'Skin Treatments',
  stage: 16,
  updated: EN_UPDATED_BATCH7,
  updatedIso: EN_UPDATED_BATCH7_ISO,
  lead:
    '**RF microneedling adds radiofrequency energy delivered through the needles.** That makes it a different procedure rather than an upgrade — typically higher cost, typically more downtime, and **often different state rules about who may perform it.**',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_DISCLAIMER },
    { t: 'h2', id: 'comparison', text: 'Side by side' },
    {
      t: 'table',
      head: ['', 'Traditional microneedling', 'RF microneedling'],
      rows: [
        ['Mechanism', 'Needles only', 'Needles plus radiofrequency energy'],
        ['Cost per session', 'Commonly $200 - 800', 'Substantially higher'],
        ['Recovery', 'Redness usually 1 - 3 days; normal within about a week', 'Often longer'],
        ['Discomfort', 'Moderate', 'Generally more'],
        ['Numbing', 'Usual', 'Usually required'],
        ['Who may perform it', 'Varies by state', 'Often more restricted'],
        ['Sessions typically discussed', 'A course of three to six', 'Often fewer'],
        ['Devices', 'Wide range', 'Wide range, many branded systems'],
      ],
      note: 'Costs and protocols vary substantially by provider and region.',
    },
    {
      t: 'p',
      text: 'You will sometimes see RF quoted as an add-on to a microneedling session rather than as a separate treatment, and [Microneedling Cost](/en/microneedling-cost) notes that the price depends on whether the device is the same or separate. Either way, it is the energy component that changes the regulation, the recovery and the price.',
    },
    { t: 'h2', id: 'regulation', text: 'The regulation difference' },
    {
      t: 'p',
      text: 'Energy-based devices are frequently regulated more tightly than needling alone. For a consumer that is the single most practical difference between the two procedures, and it is the one least likely to appear in marketing.',
    },
    {
      t: 'table',
      head: ['Point', 'Note'],
      rows: [
        ['Microneedling scope', 'Varies significantly by state'],
        ['Energy-device scope', 'Often more restricted still'],
        ['Supervision requirements', 'Differ by state'],
        ['Some states', 'Restrict or prohibit certain procedures for estheticians'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Ask this before anything else',
      text: '“What is your license, and does my state permit you to perform this procedure?” A provider who cannot answer clearly has given you the answer. Verify independently with your state board.',
    },
    {
      t: 'p',
      text: '[Who Can Perform Microneedling?](/en/who-can-perform-microneedling) covers how those rules are typically structured, including depth limits.',
    },
    { t: 'h2', id: 'is-it-justified', text: 'Is the added cost justified?' },
    {
      t: 'p',
      text: 'That is a medical question rather than a consumer one. The honest answer is that it depends on what is being addressed, and a licensed medical provider is the right person to assess it — not a price list, and not an article.',
    },
    {
      t: 'table',
      head: ['Be sceptical of', 'Why'],
      rows: [
        ['“RF is always better”', 'It depends entirely on the concern'],
        ['Promised outcomes', 'Results vary by person and by concern'],
        ['Skipping assessment', 'The procedure should follow the assessment, not precede it'],
        ['Being steered to the pricier option without an explanation', 'The clearest red flag'],
      ],
    },
    { t: 'h2', id: 'questions', text: 'Questions before booking either' },
    {
      t: 'ol',
      items: [
        '**“What is your license, and what does my state permit you to do?”**',
        '“Why this procedure rather than the other for my concern?”',
        '“What depth and settings, and why?”',
        '“What recovery time should I plan for?”',
        '“How many sessions, and when do we assess?”',
        '**“What are the risks for my skin specifically?”**',
      ],
    },
    {
      t: 'p',
      text: 'For how recovery changes with depth on traditional microneedling — the variable that explains most of the difference in what people report — see [Microneedling Healing Time](/en/microneedling-healing-time).',
    },
    { t: 'h2', id: 'disclose', text: 'What to disclose' },
    {
      t: 'table',
      head: ['Disclose', 'Why'],
      rows: [
        ['All medications, including isotretinoin', 'Consult your prescriber about timing'],
        ['History of keloid scarring', 'Changes the risk assessment'],
        ['Any active infection or cold sore', 'Postpone'],
        ['Pregnancy', 'Affects what is advised'],
        ['Recent treatments or injectables', 'Timing matters'],
        ['Autoimmune conditions', 'Can affect healing'],
      ],
    },
    {
      t: 'p',
      text: 'Both are medical procedures. [Microneedling Side Effects](/en/microneedling-side-effects) covers what is commonly reported, and when a reaction warrants a doctor rather than a call back to the clinic.',
    },
    { t: 'note', tone: 'info', text: MED_STATE_SCOPE },
  ],
  faq: [
    { q: 'What is the difference between microneedling and RF microneedling?', a: 'RF adds radiofrequency energy through the needles, which changes cost, recovery and often who may legally perform it.' },
    { q: 'Which one is better?', a: 'It depends on what is being addressed. A licensed medical provider should assess that.' },
    { q: 'Is RF microneedling more expensive?', a: 'Substantially, per session.' },
    { q: 'Who can perform RF microneedling?', a: 'Rules vary by state, and energy-based devices are often more restricted. Verify with your state board.' },
    { q: 'Is there more downtime with RF?', a: 'Typically yes, though it varies with the settings used and the individual.' },
  ],
  related: [
    { href: '/en/who-can-perform-microneedling', label: 'Who Can Perform Microneedling?' },
    { href: '/en/microneedling-cost', label: 'Microneedling Cost' },
    { href: '/en/microneedling-side-effects', label: 'Microneedling Side Effects' },
  ],
}
