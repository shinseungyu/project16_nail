import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, HYDRAFACIAL_TM_NOTE } from './common'

export const hydrafacialSideEffects: EnPage = {
  path: '/en/hydrafacial-side-effects',
  title: 'HydraFacial Side Effects and Who Should Avoid It',
  h1: 'HydraFacial Side Effects',
  description:
    'Redness, sensitivity and purging are the commonly reported effects. Who should check with a provider first, and when to seek care.',
  keywords: ['hydrafacial side effects', 'hydrafacial breakout', 'who should avoid hydrafacial'],
  category: 'Skin Treatments',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**Most commonly reported: brief redness, mild sensitivity, and occasional breakouts in the days afterwards.** Serious reactions are uncommon but possible. A handful of conditions and medications are worth raising with a provider before you book rather than after.',
  blocks: [
    { t: 'note', tone: 'info', text: HYDRAFACIAL_TM_NOTE },
    { t: 'h2', id: 'commonly-reported', text: 'Commonly reported effects' },
    {
      t: 'table',
      head: ['Effect', 'Typical duration'],
      rows: [
        ['Redness', 'A few hours'],
        ['Mild tightness or sensitivity', '1 - 2 days'],
        ['Breakouts or "purging"', 'Days to a week'],
        ['Dryness or flaking', '1 - 3 days'],
        ['Temporary sensitivity to products', 'A few days'],
      ],
    },
    {
      t: 'p',
      text: 'None of this is universal — many people report none of it. The treatment is on the gentle end of professional exfoliation, which is part of why it gets booked before events, and why [HydraFacial Benefits](/en/hydrafacial-benefits) lists no downtime as one of its genuine advantages.',
    },
    { t: 'h2', id: 'check-first', text: 'When to check with a provider first' },
    {
      t: 'table',
      head: ['Situation', 'Why'],
      rows: [
        ['Recent isotretinoin use', 'Consult your prescriber'],
        ['Active, inflamed acne', 'Suction and acids may aggravate it'],
        ['Rosacea or eczema', 'May not suit'],
        ['Recent chemical peel, laser or microneedling', 'Wait per your provider’s guidance'],
        ['Sunburn or open wounds', 'Postpone'],
        ['Active cold sore or skin infection', 'Postpone'],
        ['Pregnancy or breastfeeding', 'Some serums may not be advised — disclose it'],
        ['Known ingredient allergies', 'Request the ingredient list'],
        ['Recent injectables', 'Ask about timing'],
      ],
    },
    {
      t: 'p',
      text: 'The cold sore row catches people out. A treatment that exfoliates and manipulates the skin around the mouth during an active outbreak can spread it, and most intake forms do not ask. Volunteer it.',
    },
    { t: 'h2', id: 'seek-care', text: 'When to seek medical care' },
    {
      t: 'table',
      head: ['Sign', 'Action'],
      rows: [
        ['Persistent or spreading redness', 'See a doctor'],
        ['Blistering', 'See a doctor'],
        ['Swelling beyond mild', 'See a doctor'],
        ['Signs of infection — heat, pus, increasing pain', 'See a doctor'],
        ['Difficulty breathing, throat or facial swelling', 'Emergency care immediately'],
        ['Any reaction that worsens after 48 hours', 'See a doctor'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Not medical advice',
      text: 'This page describes what people commonly report. If you are concerned about a reaction, consult a licensed medical provider rather than calling the spa back.',
    },
    { t: 'h2', id: 'purging-vs-reaction', text: 'Purging versus a reaction' },
    {
      t: 'table',
      head: ['Likely purging', 'Likely a reaction'],
      rows: [
        ['Small spots where you usually break out', 'New areas you never break out in'],
        ['Clears within about a week', 'Persists or worsens'],
        ['No itching or burning', 'Itching, burning, stinging'],
        ['No swelling', 'Swelling'],
      ],
    },
    {
      t: 'p',
      text: 'The distinction matters because the responses are opposite. Purging is generally waited out. A reaction needs the product identified and avoided — and continuing to book sessions with the same booster will keep reproducing it, which is one argument for the longer intervals discussed in [How Often Should You Get a HydraFacial?](/en/how-often-hydrafacial).',
    },
    {
      t: 'p',
      text: 'The shortest useful rule: **if it itches, burns or spreads, treat it as a reaction** and contact your provider or a doctor rather than assuming your skin is "detoxing".',
    },
    { t: 'h2', id: 'reducing-risk', text: 'Reducing the risk' },
    {
      t: 'ol',
      items: [
        '**Disclose everything** — medications, conditions, recent treatments, pregnancy. Intake forms miss things; you know your history.',
        '**Ask about a patch test** if you have sensitive or reactive skin.',
        '**Start without add-on boosters** on your first session, so that if something reacts you know what it was.',
        '**Ask what acids are used and at what strength.**',
        '**Pause retinoids** for a few days before and after, if your provider advises it.',
        '**Wear sunscreen afterwards** — freshly exfoliated skin is more sun-sensitive.',
        '**Skip strong actives for two to three days** after the session.',
      ],
    },
    {
      t: 'p',
      text: 'Point three does most of the work. Boosters are where unfamiliar ingredients enter the picture, and adding three of them to a first session makes any reaction impossible to attribute. See [What Is a HydraFacial?](/en/what-is-a-hydrafacial) for what the base protocol involves without them.',
    },
  ],
  faq: [
    { q: 'What are the side effects of a HydraFacial?', a: 'Brief redness, mild sensitivity, and occasional breakouts are the commonly reported ones.' },
    { q: 'How long does the redness last?', a: 'Usually a few hours.' },
    { q: 'Is breaking out afterwards normal?', a: 'Some people report it. Spots in unusual areas, or with itching or burning, suggest a reaction rather than purging.' },
    { q: 'Who should avoid it?', a: 'Anyone with an active infection, sunburn, open wounds, or recent isotretinoin use should speak with a provider first.' },
    { q: 'When should I see a doctor?', a: 'Persistent redness, blistering, swelling, or any sign of infection. Facial or throat swelling requires emergency care.' },
  ],
  related: [
    { href: '/en/what-is-a-hydrafacial', label: 'What Is a HydraFacial?' },
    { href: '/en/hydrafacial-benefits', label: 'HydraFacial Benefits: What It Actually Does' },
    { href: '/en/how-often-hydrafacial', label: 'How Often Should You Get a HydraFacial?' },
  ],
}
