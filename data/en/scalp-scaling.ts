import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, FX_NOTE } from './common'

export const scalpScaling: EnPage = {
  path: '/en/scalp-scaling',
  title: 'Korean Scalp Scaling Explained: Price and Process (2026)',
  h1: 'Korean Scalp Scaling Explained',
  description:
    'Scalp scaling is the deep scalp cleansing service on every Korean salon menu. What the process involves, what it costs in 2026, what it can and cannot do, and where the line to a medical clinic sits.',
  keywords: [
    'scalp scaling',
    'Korean scalp treatment',
    'scalp care Korea',
    'scalp scaling price',
    'Korean scalp clinic',
    'head spa Korea',
  ],
  category: 'K-Beauty Treatments',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'Scalp scaling is a **deep cleansing service for the scalp**, not the hair — an exfoliating solution plus manual or device-assisted removal of built-up sebum and product residue around the follicle. It costs 30,000-80,000 KRW and takes 30-50 minutes.',
  blocks: [
    {
      t: 'h2',
      id: 'what',
      text: 'What scalp scaling is',
    },
    {
      t: 'p',
      text: 'Ordinary shampoo cleans the hair. It does a much poorer job on the scalp surface itself, where sebum oxidises, dead skin accumulates, and silicone from conditioners and styling product builds up around the follicle opening. Scalp scaling targets that layer specifically.',
    },
    {
      t: 'p',
      text: 'The Korean version has become a routine salon add-on rather than a specialist service, which is why it appears on nearly every menu alongside cuts and colour. It exists at that scale partly because Korean haircare is unusually product-heavy, and heavy product use is exactly what creates the buildup.',
    },
    {
      t: 'h3',
      text: 'The typical sequence',
    },
    {
      t: 'ol',
      items: [
        '**Diagnosis.** Many salons use a magnifying scalp camera and show you the screen. Genuinely informative the first time, and a sales tool every time after.',
        '**Solution application.** An exfoliating or dissolving solution is applied section by section and left for several minutes to soften the buildup.',
        '**Removal.** A scaler tip, a fine brush, or a suction device lifts the softened material away. This step is the actual treatment.',
        '**Shampoo and massage.** A double shampoo followed by a scalp massage — usually the part people remember.',
        '**Ampoule and finish.** A soothing or moisturising ampoule, sometimes with LED or steam.',
      ],
    },
    {
      t: 'h2',
      id: 'cost',
      text: 'What it costs',
    },
    {
      t: 'p',
      text: 'Scalp scaling is priced as an add-on at hair salons and as a standalone service at scalp-focused shops. The head spa format — a longer, spa-style session emphasising massage — sits at the top of the range and is bought for the experience as much as the cleaning.',
    },
    {
      t: 'table',
      caption: 'Scalp services, Seoul 2026',
      head: ['Service', 'KRW', 'Approx. USD', 'Time'],
      rows: [
        ['Basic scalp scaling (salon add-on)', '30,000 - 50,000', '$21 - 36', '30 min'],
        ['Full scalp care session', '50,000 - 80,000', '$36 - 57', '40 - 50 min'],
        ['Head spa (extended massage format)', '80,000 - 200,000', '$57 - 143', '60 - 90 min'],
        ['Scalp care course, 5 sessions', '200,000 - 400,000', '$143 - 286', '—'],
        ['Scalp diagnosis only', 'Usually free', '—', '10 min'],
      ],
      note: FX_NOTE,
    },
    {
      t: 'h2',
      id: 'vs-western',
      text: 'How Korea does this differently',
    },
    {
      t: 'p',
      text: 'Scalp exfoliation exists in most Western markets, but usually as an **add-on** — a scrub before shampooing, or part of a spa scalp facial. In Korea it is a standalone menu item at ordinary hair salons, priced and booked on its own.',
    },
    {
      t: 'table',
      caption: 'Same treatment family, different market position',
      head: ['', 'Korea', 'Typical Western equivalent'],
      rows: [
        ['Availability', 'Standard at most salons', 'Specialty salons and spas'],
        ['Booked as', 'Standalone service', 'Usually an add-on'],
        ['Assessment', 'Magnifier or scalp camera common', 'Less common'],
        ['Frequency', 'Every 2 - 4 weeks is normal', 'Occasional'],
      ],
    },
    {
      t: 'p',
      text: 'If you have had a scalp facial abroad, this is the same family of treatment — just more routine, more accessible, and usually cheaper.',
    },
    {
      t: 'h2',
      id: 'who',
      text: 'Who benefits',
    },
    {
      t: 'ul',
      items: [
        '**Oily scalps** that feel heavy or smell by the end of the day.',
        '**Heavy styling product users** — wax, dry shampoo, hairspray build up faster than shampoo removes them.',
        '**Flaking and itching** from buildup rather than from a skin condition.',
        '**Before a chemical service.** Some salons recommend scaling before colour so the scalp is clean but not sensitised. Ask about timing — immediately before bleach is not always advisable.',
        '**Anyone who has never had it done.** The first session on a neglected scalp produces the most visible difference by a wide margin.',
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'What scalp scaling is not',
      text:
        'It is **not a treatment for hair loss** and it does not regrow hair. A clean follicle opening is a better environment for the hair you have, and that is the honest extent of the claim. Under Korean law a beauty shop cannot advertise hair-loss treatment or regrowth effects at all — pattern hair loss is a medical matter for a dermatologist. If a salon promises regrowth, it is making a claim it is not permitted to make.',
    },
    {
      t: 'h2',
      id: 'medical-line',
      text: 'Where the line to a clinic sits',
    },
    {
      t: 'p',
      text: 'Korea separates beauty shops from medical clinics strictly, and scalp complaints fall on both sides of that line depending on the cause.',
    },
    {
      t: 'table',
      caption: 'Salon or clinic',
      head: ['Symptom', 'Go to'],
      rows: [
        ['Oily, heavy scalp, product buildup', 'Salon — scaling'],
        ['Flaking from dryness or buildup', 'Salon — scaling and moisturising care'],
        ['Persistent dandruff that returns quickly', 'Dermatology clinic'],
        ['Redness, sores, or painful patches', 'Dermatology clinic'],
        ['Thinning hairline or widening part', 'Dermatology clinic'],
        ['Sudden patchy hair loss', 'Dermatology clinic, promptly'],
      ],
      note:
        'Seborrhoeic dermatitis and pattern hair loss are medical diagnoses. Repeated salon treatments for a condition that keeps returning is money spent to delay the appointment that would actually help.',
    },
    {
      t: 'h2',
      id: 'frequency',
      text: 'How often, and what to expect',
    },
    {
      t: 'ul',
      items: [
        '**Oily scalps:** every three to four weeks.',
        '**Normal scalps:** every two to three months.',
        '**Dry or sensitive scalps:** two to three times a year at most — over-scaling strips the barrier and causes the flaking it was meant to fix.',
        '**Immediately after:** the scalp feels notably lighter and hair has more volume at the root for several days. This is real but temporary.',
        '**Do not colour the same day** unless the salon specifically plans it that way; a freshly exfoliated scalp is more reactive to chemical services.',
      ],
    },
    {
      t: 'h2',
      id: 'home',
      text: 'Doing a version of it at home',
    },
    {
      t: 'p',
      text: 'Korean brands sell scalp scaling ampoules and scrubs for 10,000-30,000 KRW that do a partial version of the salon process. They are worth knowing about because the maintenance gap between salon visits is where most of the benefit is lost.',
    },
    {
      t: 'ul',
      items: [
        '**Scalp scrub or scaler ampoule** once every one to two weeks, applied to a dry or damp scalp before shampooing.',
        '**Shampoo the scalp, not the hair.** Fingertips on the scalp, and let the runoff clean the lengths.',
        '**Keep conditioner off the roots** — silicone at the follicle is a large share of what scaling removes.',
        '**Dry the scalp properly.** Going to bed with a wet scalp is a reliable route to smell and irritation.',
      ],
    },
    {
      t: 'p',
      text: 'None of that replaces the mechanical removal step a salon does, but it substantially slows the rate at which buildup returns.',
    },
  ],
  faq: [
    {
      q: 'What is scalp scaling?',
      a: 'A deep cleansing service for the scalp rather than the hair. An exfoliating solution softens oxidised sebum, dead skin and product buildup around the follicle, then a scaler tip, brush or suction device removes it, followed by shampoo, massage and an ampoule. It takes 30-50 minutes.',
    },
    {
      q: 'How much does scalp scaling cost in Korea?',
      a: 'Roughly 30,000-50,000 KRW as a salon add-on, 50,000-80,000 KRW as a full standalone session, and 80,000-200,000 KRW for an extended head spa format. Five-session courses run 200,000-400,000 KRW. Scalp diagnosis with a magnifying camera is usually free.',
    },
    {
      q: 'Does scalp scaling help with hair loss?',
      a: 'No. It cleans the follicle opening, which is a better environment for existing hair, but it does not regrow hair or treat pattern hair loss. Under Korean law a beauty shop cannot advertise hair-loss treatment or regrowth effects — a salon promising regrowth is making a claim it is not permitted to make. Hair loss belongs with a dermatologist.',
    },
    {
      q: 'How often should I get scalp scaling?',
      a: 'Every three to four weeks for oily scalps, every two to three months for normal scalps, and no more than two or three times a year for dry or sensitive scalps. Over-scaling strips the scalp barrier and causes exactly the flaking it was meant to fix.',
    },
    {
      q: 'What is the difference between scalp scaling and a head spa?',
      a: 'Scaling is the cleaning step itself, typically 30 minutes. A head spa is a longer session, 60-90 minutes, built around extended massage, steam and ampoule work with the scaling included. You pay for the experience as much as the cleaning — both are legitimate purchases, but for different reasons.',
    },
    {
      q: 'When should I see a doctor instead?',
      a: 'Persistent dandruff that returns quickly, redness, sores or painful patches, a widening part or thinning hairline, and any sudden patchy loss. Seborrhoeic dermatitis and pattern hair loss are medical diagnoses, and repeated salon sessions for those spend money to delay the appointment that would help.',
    },
      {
      q: 'How is it different from a scalp facial abroad?',
      a: 'It is the same family of treatment. The difference is market position: in Korea it is a routine standalone service at ordinary hair salons rather than a spa add-on, so it is easier to book and generally cheaper.',
    },
  ],
  related: [
    { href: '/en/hair-salon-korea', label: 'Hair Salons in Korea: Perm, Colour, Cut' },
    { href: '/en/korean-perm-guide', label: 'Korean Perm Types Explained' },
    { href: '/en/skin-clinic-vs-salon', label: 'Skin Clinic vs Beauty Salon in Korea' },
    { href: '/en/aqua-peel', label: 'What Is Aqua Peel?' },
  ],
}
