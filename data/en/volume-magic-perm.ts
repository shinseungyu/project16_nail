import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, FX_NOTE } from './common'

export const volumeMagicPerm: EnPage = {
  path: '/en/volume-magic-perm',
  title: 'Volume Magic vs Straight Perm: Which One (2026)',
  h1: 'Volume Magic vs Straight Perm',
  description:
    'Volume magic lifts the roots while straightening the lengths; magic straight flattens everything. Which suits your hair, what each costs in Korea in 2026, and why picking wrong on fine hair is hard to undo.',
  keywords: [
    'volume magic perm',
    'volume magic vs magic straight',
    'Korean straight perm',
    'magic straight perm',
    'volume magic price',
    'Korean root volume perm',
  ],
  category: 'K-Beauty Treatments',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'Both services straighten. The difference is the root: **magic straight flattens from scalp to tip, volume magic deliberately lifts the first few centimetres** so the hair does not sit flat against your head. On fine or flat-rooted hair that difference decides whether you like the result.',
  blocks: [
    {
      t: 'h2',
      id: 'difference',
      text: 'The actual difference',
    },
    {
      t: 'p',
      text: 'Magic straight (매직) applies straightening cream and a flat iron along the entire hair shaft, root included. The result is uniformly straight and very smooth. It is the correct choice for genuinely frizzy or wavy hair that you want gone.',
    },
    {
      t: 'p',
      text: 'Volume magic (볼륨매직) treats the hair in two zones. The mid-lengths and ends are straightened the same way, but the root section is worked separately — lifted and set standing away from the scalp rather than pressed flat. The hair falls smooth but keeps height at the top.',
    },
    {
      t: 'table',
      caption: 'Side by side',
      head: ['', 'Magic straight', 'Volume magic'],
      rows: [
        ['Root', 'Flattened', 'Lifted'],
        ['Lengths', 'Straight', 'Straight'],
        ['Overall look', 'Sleek, close to the head', 'Smooth with height on top'],
        ['Best for', 'Frizz, wave, unmanageable volume', 'Flat roots, limp or oily-looking hair'],
        ['Price (KRW)', '120,000 - 250,000', '120,000 - 280,000'],
        ['Time', '3 - 5 hrs', '3 - 4 hrs'],
        ['Lasts', '6 months to permanent on treated hair', '3 - 6 months at lengths, 2 - 4 at root'],
      ],
      note: FX_NOTE,
    },
    {
      t: 'note',
      title: 'Why the root fades faster',
      text:
        'The straightened lengths stay straight until you cut them off — the hair itself is chemically changed. The root lift, by contrast, is on hair that keeps growing, so new growth arrives untreated. Two to four months in, you have lifted mid-shaft and flat new root. This is the normal grow-out, not a failed service.',
    },
    {
      t: 'h2',
      id: 'why-korean',
      text: 'Why this service exists in Korea and not elsewhere',
    },
    {
      t: 'p',
      text: 'Western straightening services solve frizz. The typical Korean hair problem is the opposite one: hair that is thick and heavy but perfectly straight, so it collapses at the root and lies flat against the scalp. Flat roots make hair look thinner than it is, make it look oily sooner, and make any cut fall badly.',
    },
    {
      t: 'p',
      text: 'Straightening that hair makes it worse — you have taken away the only texture holding the root up. Volume magic was the answer to that specific problem, and it is why the service has no clean equivalent on a Western salon menu.',
    },
    {
      t: 'h2',
      id: 'choosing',
      text: 'Which one you actually want',
    },
    {
      t: 'h3',
      text: 'Choose magic straight if',
    },
    {
      t: 'ul',
      items: [
        'Your hair is frizzy, wavy or curly and you want it straight.',
        'Your hair is thick enough that losing root volume is a relief, not a loss.',
        'You want the longest-lasting result — treated hair stays straight permanently and only grows out.',
        'You style with heat daily and want to stop.',
      ],
    },
    {
      t: 'h3',
      text: 'Choose volume magic if',
    },
    {
      t: 'ul',
      items: [
        'Your hair is already fairly straight but sits flat on your head.',
        'Your hair looks oily or unwashed by the second day, largely because flat roots put the scalp in contact with the hair.',
        'Your hair is fine and you cannot afford to lose apparent volume.',
        'You want smoothness without the sleek "ironed" look.',
      ],
    },
    {
      t: 'table',
      caption: 'Pick by hair type',
      head: ['Your hair', 'Volume magic', 'Magic straight'],
      rows: [
        ['Fine, flat at the root', 'Right choice', 'Avoid — reads as thinner'],
        ['Thick, straight, heavy', 'Good', 'Good, if you want it sleek'],
        ['Wavy or frizzy', 'Partial fix', 'Right choice'],
        ['Curly', 'Not enough', 'Right choice'],
        ['Gets oily by day two', 'Right choice', 'Makes it worse'],
        ['Previously bleached', 'Treatment course first', 'Treatment course first'],
        ['Short (above the chin)', 'Root lift still works', 'Often unnecessary'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'The mistake worth avoiding',
      text:
        'Fine hair plus magic straight is the combination people regret. The hair ends up flat to the scalp, looks noticeably thinner, and there is no way to reverse it — you cannot un-straighten hair, only wait for it to grow out or perm over it, which compounds the damage. If a designer suggests volume magic when you asked for magic straight, that recommendation is usually correct.',
    },
    {
      t: 'h2',
      id: 'process',
      text: 'What the appointment is like',
    },
    {
      t: 'ol',
      items: [
        '**Consultation and hair check.** The designer assesses damage level, especially if you have coloured or bleached. Expect a straight answer about whether your hair can take it.',
        '**First solution.** Applied section by section, then processed for 15-30 minutes. Timing is judged by how the hair responds, not by a fixed clock.',
        '**Rinse and dry.**',
        '**Ironing.** The long part. Every section is pressed with a flat iron; for volume magic, the root section is handled separately with the iron held away from the scalp to set the lift.',
        '**Second solution (neutraliser).** Locks the new shape. Another 10-20 minutes.',
        '**Final rinse, treatment and dry.**',
      ],
    },
    {
      t: 'p',
      text: 'Total time is three to five hours. Book with that in mind — this is not a lunch-break service, and rushing the ironing stage is where results go wrong.',
    },
    {
      t: 'h2',
      id: 'aftercare',
      text: 'Aftercare — the 48-hour rule matters here',
    },
    {
      t: 'ul',
      items: [
        '**Do not wash for 48 hours.** The bonds are still settling. This is the single rule that determines whether the result holds.',
        '**Do not tie it up, clip it, or tuck it behind your ears** for two days. A kink set in during this window can become permanent.',
        '**No hats or headbands** for the same period.',
        '**Sleep with it loose and straight,** ideally on a smooth pillowcase.',
        '**Wait two weeks before colouring.** Doing both close together is how hair breaks.',
        '**Use a protein or bond-repair treatment** for the first few weeks. At 50,000-150,000 KRW a session in Korea this is worth doing, not just an upsell.',
      ],
    },
    {
      t: 'h2',
      id: 'damaged',
      text: 'If your hair is already bleached',
    },
    {
      t: 'p',
      text: 'Straightening chemistry on bleached hair is the highest-risk combination on a salon menu, and a good Korean salon will refuse it or require a treatment course first. That refusal is professional judgement, not a lost sale.',
    },
    {
      t: 'p',
      text: 'If a salon agrees immediately to straighten heavily bleached hair without a strand test, book elsewhere. The failure mode here is not a disappointing result — it is hair snapping off at the point of maximum damage, which usually means cutting to that length.',
    },
  ],
  faq: [
    {
      q: 'What is the difference between volume magic and magic straight?',
      a: 'Both straighten the mid-lengths and ends identically. Magic straight also flattens the root, giving a sleek look close to the head. Volume magic deliberately lifts the root section so the hair keeps height at the top while still falling smooth. On fine or flat-rooted hair, that difference decides whether you like the result.',
    },
    {
      q: 'How much does volume magic cost in Korea?',
      a: 'Roughly 120,000-280,000 KRW for volume magic and 120,000-250,000 KRW for magic straight, before length surcharges of 20,000-100,000 KRW depending on hair length. Your designer’s rank also changes the price by up to 2.5 times for the same service.',
    },
    {
      q: 'How long does volume magic last?',
      a: 'The straightened lengths stay straight until cut off, since the hair is chemically changed. The root lift fades in two to four months because new growth arrives untreated. That mismatch — lifted mid-shaft, flat new root — is the normal grow-out rather than a failed service.',
    },
    {
      q: 'Which is better for thin hair?',
      a: 'Volume magic, without much question. Magic straight on fine hair flattens it to the scalp and makes it look noticeably thinner, and there is no way to reverse it short of growing it out. If a designer recommends volume magic when you asked for magic straight, that advice is usually right.',
    },
    {
      q: 'Can I get volume magic on bleached hair?',
      a: 'Most reputable Korean salons will refuse or require a treatment course and a strand test first. Straightening chemistry on bleached hair is the highest-risk combination on the menu, and the failure mode is hair snapping off rather than a disappointing look. A salon that agrees immediately is one to leave.',
    },
    {
      q: 'Why can I not wash my hair for two days afterwards?',
      a: 'The chemical bonds that hold the new shape are still settling for about 48 hours. Washing, tying, clipping or tucking hair behind your ears during that window can set a permanent kink. It is the single rule that most determines whether the result holds.',
    },
  ],
  related: [
    { href: '/en/korean-perm-guide', label: 'Korean Perm Types Explained' },
    { href: '/en/hair-salon-korea', label: 'Hair Salons in Korea: Perm, Colour, Cut' },
    { href: '/en/scalp-scaling', label: 'Korean Scalp Scaling Explained' },
    { href: '/en', label: 'Korea Beauty Guide: start here' },
  ],
}
