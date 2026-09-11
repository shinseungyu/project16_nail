import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, HYDRAFACIAL_TM_NOTE } from './common'

export const whatIsAHydrafacial: EnPage = {
  path: '/en/what-is-a-hydrafacial',
  title: 'What Is a HydraFacial? Cost, Steps, Results',
  h1: 'What Is a HydraFacial?',
  description:
    'HydraFacial is a branded hydradermabrasion treatment using suction and serums. What the steps are, what it costs, and what results to expect.',
  keywords: ['what is a hydrafacial', 'hydrafacial', 'hydradermabrasion', 'hydrafacial treatment'],
  category: 'Skin Treatments',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**HydraFacial® is a branded hydradermabrasion treatment** — a device-based facial that uses a vortex suction tip to cleanse, gently exfoliate, extract and apply serums in a single pass. A session runs 30 to 50 minutes and typically costs **$150 to $350**. The results are cosmetic and temporary.',
  blocks: [
    { t: 'note', tone: 'info', text: HYDRAFACIAL_TM_NOTE },
    { t: 'h2', id: 'what-the-name-means', text: 'What the name actually means' },
    {
      t: 'p',
      text: 'This is the part almost every article skips, and it changes how you read a spa menu. HydraFacial is not a type of facial in the way that "a chemical peel" is a type of treatment. It is one company’s device and protocol, protected as a trademark, and only treatments performed on that licensed equipment are HydraFacial treatments.',
    },
    {
      t: 'table',
      head: ['Term', 'What it refers to'],
      rows: [
        ['HydraFacial®', 'A registered trademark — one specific branded device and protocol'],
        ['Hydradermabrasion', 'The general category of treatment this belongs to'],
        ['Other branded systems', 'Several companies make comparable devices under their own names'],
      ],
    },
    {
      t: 'p',
      text: 'A provider advertising "a hydrafacial" on another manufacturer’s machine is offering a comparable hydradermabrasion treatment. That may be perfectly good and sometimes costs less — but it is not the same branded service, and knowing which one you are booking affects what you are paying for.',
    },
    {
      t: 'note',
      tone: 'info',
      title: 'One question worth asking',
      text: '“Is this the branded device, or a similar system?” Either answer is fine. The point is that you know before you pay a branded price.',
    },
    { t: 'h2', id: 'steps', text: 'The standard steps' },
    {
      t: 'table',
      head: ['Step', 'What happens'],
      rows: [
        ['1. Cleanse and exfoliate', 'Surface debris and dead cells are lifted'],
        ['2. Chemical exfoliation', 'Usually a mild acid blend'],
        ['3. Extraction', 'Vortex suction rather than manual squeezing'],
        ['4. Hydration and serum infusion', 'Antioxidant and hydrating serums'],
        ['5. Optional add-ons', 'LED, targeted boosters, lymphatic work'],
      ],
    },
    {
      t: 'p',
      text: 'The suction-based extraction is the genuine differentiator. In a traditional facial, extraction is done by hand — an esthetician applies pressure around a congested pore to clear it. Here a vortex tip does that work with negative pressure, which most people find more comfortable and which leaves less visible marking afterwards.',
    },
    {
      t: 'p',
      text: 'If the mechanism sounds familiar, it is the same idea behind the water-based cleansing facials common in Korean clinics. See [What Is Aqua Peel?](/en/aqua-peel) for how the Korean-market version of this category works and what it costs there.',
    },
    { t: 'h2', id: 'cost-and-timing', text: 'Cost and timing' },
    {
      t: 'table',
      head: ['Item', 'Typical'],
      rows: [
        ['Standard session', '$150 - 350'],
        ['With add-on boosters', '$200 - 450'],
        ['Duration', '30 - 50 min'],
        ['Downtime', 'Usually none'],
        ['Suggested frequency', 'Every 4 weeks (provider-dependent)'],
      ],
      note: 'Prices vary considerably by city and by whether the provider is a day spa, med-spa or dermatology office.',
    },
    {
      t: 'p',
      text: 'The no-downtime part is a real practical advantage rather than marketing. Most people return to normal activity immediately, which is why this treatment gets booked the day before events rather than a week before. See [How Much Does a HydraFacial Cost?](/en/hydrafacial-cost) for what drives the price and what a year of monthly sessions actually totals.',
    },
    { t: 'h2', id: 'what-to-expect', text: 'What to realistically expect' },
    {
      t: 'table',
      head: ['Commonly reported', 'Not a realistic expectation'],
      rows: [
        ['Skin looks brighter and more hydrated', 'Treating or curing acne'],
        ['Smoother texture immediately after', 'Removing scars'],
        ['Temporary improvement in the look of pores', 'Permanently changing pore size'],
        ['Makeup sits better for a few days', 'Replacing medical dermatology'],
        ['Little to no downtime', 'Results lasting months from one session'],
      ],
    },
    {
      t: 'p',
      text: 'Results are cosmetic and temporary, most often described as lasting about a week per session. That is not a criticism of the treatment — it is what a surface treatment does. Problems start when marketing implies otherwise, and this category’s marketing frequently does.',
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'This is not a medical treatment',
      text: 'For acne, pigmentation, rosacea or any skin condition, consult a licensed medical provider. A dermatologist has treatment options that no device facial offers.',
    },
    { t: 'h2', id: 'caution', text: 'Who should be cautious' },
    {
      t: 'table',
      head: ['Situation', 'Note'],
      rows: [
        ['Active, inflamed acne', 'Discuss with a provider before booking'],
        ['Rosacea', 'Suction and acids may not suit — ask'],
        ['Recent isotretinoin use', 'Consult your prescriber'],
        ['Active infection, open wounds, sunburn', 'Postpone'],
        ['Pregnancy', 'Some serums may not be advised — disclose it'],
        ['Known ingredient allergies', 'Ask for the full ingredient list'],
      ],
    },
    {
      t: 'p',
      text: 'None of these are absolute bars; they are reasons to have a conversation first. [HydraFacial Side Effects](/en/hydrafacial-side-effects) covers what people commonly report afterwards and which signs warrant a doctor rather than a follow-up call to the spa.',
    },
    { t: 'h2', id: 'is-it-worth-it', text: 'Is it worth booking?' },
    {
      t: 'ul',
      items: [
        '**If you want a reliable pre-event glow with no downtime** — this is one of the better options available, and the standardised protocol means a consistent result.',
        '**If you find manual extraction uncomfortable** — suction-based extraction is meaningfully gentler for most people.',
        '**If you are treating a skin condition** — see a doctor instead. This is maintenance, not treatment.',
        '**If budget is tight** — a traditional facial costs roughly half, and your daily routine matters more than either.',
      ],
    },
    {
      t: 'p',
      text: 'Read it as a well-executed cosmetic treatment that makes skin look better for about a week, with essentially no recovery time. That is a genuine benefit worth paying for if it fits your budget — it is simply not a treatment for anything.',
    },
  ],
  faq: [
    { q: 'What is a HydraFacial?', a: 'A branded hydradermabrasion treatment that cleanses, exfoliates, extracts with vortex suction, and infuses serums in one session.' },
    { q: 'How much does it cost?', a: 'Typically $150 to $350 for a standard session, rising to $200 to $450 with add-on boosters.' },
    { q: 'Is there downtime?', a: 'Usually none. Most people return to normal activity immediately, which is why it is a common pre-event booking.' },
    { q: 'How long do results last?', a: 'Commonly described as around a week per session. The effects are cosmetic and temporary.' },
    { q: 'Does it treat acne?', a: 'No. It is not a medical treatment. For acne, consult a licensed medical provider.' },
  ],
  related: [
    { href: '/en/hydrafacial-vs-regular-facial', label: 'HydraFacial vs Regular Facial: What’s Different' },
    { href: '/en/hydrafacial-cost', label: 'How Much Does a HydraFacial Cost?' },
    { href: '/en/hydrafacial-benefits', label: 'HydraFacial Benefits: What It Actually Does' },
  ],
}
