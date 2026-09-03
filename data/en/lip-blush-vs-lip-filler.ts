import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, PMU_TATTOO_NOTE } from './common'

export const lipBlushVsLipFiller: EnPage = {
  path: '/en/lip-blush-vs-lip-filler',
  title: 'Lip Blush vs Lip Filler: Colour vs Volume',
  h1: 'Lip Blush vs Lip Filler',
  description:
    'Lip blush adds colour; filler adds volume. Completely different procedures with different providers, costs and regulation.',
  keywords: ['lip blush vs lip filler', 'lip tattoo or filler', 'difference lip blush filler', 'which lip treatment'],
  category: 'Permanent Makeup',
  stage: 17,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Lip blush is cosmetic tattooing that adds colour. Lip filler is an injectable that adds volume.** They do entirely different things, are performed by different professionals under different regulation, and are not alternatives to each other.',
  blocks: [
    { t: 'note', tone: 'warn', text: PMU_TATTOO_NOTE },
    { t: 'h2', id: 'comparison', text: 'Side by side' },
    {
      t: 'table',
      head: ['', 'Lip blush', 'Lip filler'],
      rows: [
        ['What it does', 'Adds colour and definition', 'Adds volume'],
        ['Method', 'Pigment tattooed into skin', 'Injectable'],
        ['Performed by', 'PMU artist — tattoo-regulated in many states', 'Licensed medical professional'],
        ['Lasts', '2 - 5 years', '6 - 18 months'],
        ['Cost', '$500 - 1,200', 'Varies, typically priced per syringe'],
        ['Downtime', '7 - 14 days', 'Days of swelling'],
        ['Reversible', 'No — removal is difficult', 'Some fillers can be dissolved'],
        ['Regulation', 'Health department / tattoo rules', 'Medical'],
      ],
    },
    { t: 'p', text: 'The reversibility row is the one worth weighing if you are undecided. **Some fillers can be dissolved; lip blush cannot be undone** — removal takes multiple sessions and costs more than the original.' },
    { t: 'h2', id: 'which-addresses-what', text: 'Which addresses what' },
    {
      t: 'table',
      head: ['You want', 'Choose'],
      rows: [
        ['More colour, less reliance on lipstick', 'Lip blush'],
        ['A more defined lip border', 'Lip blush'],
        ['More volume', 'Lip filler'],
        ['A change in shape or proportion', 'Lip filler'],
        ['Both', 'Both — but spaced apart'],
      ],
    },
    { t: 'h2', id: 'sequencing', text: 'Sequencing matters' },
    { t: 'p', text: '**Do not have both close together.** Common guidance is to space them by several weeks, though your providers should advise on the specifics.' },
    { t: 'p', text: 'The reason is concrete: **swelling from filler changes the lip shape**, and lip blush is mapped to the shape in front of the artist on the day. **Doing blush on recently filled lips risks mapping to a temporary shape** — and when the swelling settles, the pigment border does not move with it.' },
    { t: 'p', text: '**Tell each provider about the other procedure**, including anything you had done elsewhere. This is one of the few situations where the order genuinely matters and neither professional can see it from looking.' },
    { t: 'h2', id: 'different-professions', text: 'These are different professions' },
    {
      t: 'table',
      head: ['', 'Lip blush', 'Lip filler'],
      rows: [
        ['Who performs it', 'PMU artist, tattoo-registered in many states', 'Licensed medical professional'],
        ['What to verify', 'Health department registration', 'Medical credentials'],
        ['Where the rules come from', 'State or county health department', 'Medical regulation'],
        ['Training route', 'PMU training plus registration', 'Medical qualification'],
      ],
    },
    { t: 'p', text: '**A PMU artist offering injectables, or a filler provider offering tattooing without appropriate qualification, is a significant warning sign.** The credentials do not overlap, and neither does the training.' },
    { t: 'h2', id: 'cost-over-time', text: 'What each costs over five years' },
    { t: 'p', text: 'The headline prices are misleading because the maintenance rhythms are so different.' },
    {
      t: 'table',
      head: ['', 'Rough five-year picture'],
      rows: [
        ['Lip blush at $800, refreshed once at $350', 'Around $1,150'],
        ['Filler maintained roughly annually', 'Considerably more, depending on syringes and region'],
        ['Lip blush alone, not refreshed', '$800, fading over the period'],
      ],
      note: 'Illustrative only. Filler pricing varies too much to give a meaningful range here.',
    },
    { t: 'p', text: 'Filler is the ongoing commitment; **lip blush is closer to a one-off with an occasional top-up.** That difference matters more than the first invoice.' },
    { t: 'h2', id: 'deciding', text: 'If you are not sure which you want' },
    { t: 'p', text: 'A useful test: look at a photograph of your lips without makeup, then with lipstick.' },
    {
      t: 'ul',
      items: [
        '**If lipstick gets you most of the way there**, colour is what you are missing — that is lip blush.',
        '**If lipstick does not change what bothers you**, it is shape or volume — that is a filler conversation, with a medical provider.',
        '**If the answer is both**, do the volume first and the colour once it has settled.',
        '**If you are unsure and want a reversible option**, filler is the one that can be dissolved.',
      ],
    },
  ],
  faq: [
    { q: 'What is the difference between lip blush and lip filler?', a: 'Blush adds colour and definition through tattooing; filler adds volume through injection. Different procedures, different providers.' },
    { q: 'Can I have both?', a: 'Yes, spaced apart, with both providers informed about the other procedure.' },
    { q: 'Which comes first?', a: 'Providers commonly advise filler first, then blush once the shape has settled — but follow their guidance.' },
    { q: 'Who performs each?', a: 'Lip blush by a PMU artist, tattoo-registered in many states. Filler by a licensed medical professional.' },
    { q: 'Which lasts longer?', a: 'Lip blush, by a wide margin — two to five years against six to eighteen months.' },
  ],
  related: [
    { href: '/en/what-is-lip-blush', label: 'What Is Lip Blush Tattoo?' },
    { href: '/en/lip-blush-cost', label: 'How Much Does Lip Blush Cost?' },
    { href: '/en/microblading-licensing', label: 'Microblading Licensing: Who Regulates It' },
  ],
}
