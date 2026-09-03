import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, STEAM_CLAIMS_NOTE } from './common'

export const howToUseAFacialSteamer: EnPage = {
  path: '/en/how-to-use-a-facial-steamer',
  title: 'How to Use a Facial Steamer Correctly',
  h1: 'How to Use a Facial Steamer',
  description:
    'Distance, duration, frequency, and what to do before and after steaming. Plus the mistakes that cause irritation.',
  keywords: ['how to use a facial steamer', 'facial steamer how long', 'steaming face routine', 'facial steamer distance'],
  category: 'Skin Treatments',
  stage: 18,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Cleanse first, steam 8 to 12 inches away for 5 to 10 minutes, then follow with your treatment step.** More time is not better — over-steaming irritates skin and compromises the barrier.',
  blocks: [
    { t: 'note', tone: 'warn', text: STEAM_CLAIMS_NOTE },
    { t: 'h2', id: 'step-by-step', text: 'Step by step' },
    {
      t: 'table',
      head: ['Step', 'Detail'],
      rows: [
        ['1. Cleanse', 'Steaming over makeup just pushes debris around'],
        ['2. Fill with distilled water', 'Prevents mineral buildup and sputtering'],
        ['3. Let it heat fully', 'Sputtering during warm-up is the burn risk'],
        ['4. Position 8 - 12 inches away', 'Or per the manufacturer'],
        ['5. Steam 5 - 10 minutes', 'Set a timer — this is the step people overdo'],
        ['6. Pat dry gently', 'Do not rub'],
        ['7. Follow with your next step', 'Mask, serum, or moisturiser'],
      ],
    },
    { t: 'p', text: 'Step 5 is the one that needs a timer rather than a judgement call. **Warm steam is pleasant, and pleasant things run long** — which is exactly how a useful preparation step becomes a barrier problem.' },
    { t: 'h2', id: 'frequency', text: 'How often' },
    {
      t: 'table',
      head: ['Skin type', 'Frequency'],
      rows: [
        ['Oily', '1 - 2 times weekly'],
        ['Normal', 'Weekly'],
        ['Dry or sensitive', 'Every two weeks or less'],
        ['Rosacea-prone', 'Generally avoid — consult a professional'],
      ],
    },
    { t: 'p', text: '**Over-steaming is a real problem**, not a theoretical one. It leaves skin dehydrated and reactive, and the usual response — more moisturiser, more actives — makes it worse before it gets better.' },
    { t: 'h2', id: 'common-mistakes', text: 'Common mistakes' },
    {
      t: 'table',
      head: ['Mistake', 'Result'],
      rows: [
        ['Too close', 'Burns and redness'],
        ['Too long', 'Barrier disruption, dehydration'],
        ['Too often', 'Ongoing sensitivity'],
        ['Steaming over makeup', 'Pointless and messy'],
        ['Tap water', 'Mineral buildup, then sputtering'],
        ['Not moisturising afterwards', 'Skin feels tight'],
        ['Strong actives straight after', 'More irritation than usual'],
      ],
    },
    { t: 'h2', id: 'after-steaming', text: 'After steaming' },
    { t: 'p', text: 'Skin is more receptive after steaming, and also more vulnerable. Those are the same fact viewed from two directions.' },
    { t: 'p', text: '**Follow with something gentle** — a hydrating serum, a mask, or a plain moisturiser. **Avoid strong actives immediately afterwards.** Warm, softened skin absorbs more, which can mean considerably more irritation from a product you normally tolerate fine.' },
    {
      t: 'table',
      head: ['Straight after steaming', 'Verdict'],
      rows: [
        ['Hydrating serum or essence', 'Good use of the window'],
        ['Sheet mask or clay mask', 'Common and reasonable'],
        ['Plain moisturiser', 'Always fine'],
        ['Retinoids', 'Wait — absorption is increased'],
        ['Strong acids or peels', 'Wait'],
        ['Nothing at all', 'Skin will feel tight. Put something on'],
      ],
    },
    { t: 'h2', id: 'maintenance', text: 'Keeping the unit working' },
    { t: 'p', text: 'Most steamer complaints — spitting, weak output, a burning smell — trace back to water and cleaning.' },
    {
      t: 'ol',
      items: [
        '**Use distilled water only.** This prevents most problems before they start.',
        '**Empty the tank after each use** rather than leaving water sitting in it.',
        '**Descale periodically** if you have used tap water, following the manufacturer’s method.',
        '**Wipe the nozzle** — buildup there is what makes the spray uneven.',
        'Let it cool fully before emptying or cleaning.',
      ],
    },
    { t: 'p', text: 'If a unit starts spitting hot water, **stop using it until you have descaled it.** That symptom is the one that actually burns people, and it is fixable rather than something to work around.' },
  ],
  faq: [
    { q: 'How long should I steam for?', a: 'Five to ten minutes. Longer is not better and leads to barrier disruption.' },
    { q: 'How often should I use it?', a: 'Weekly for most skin, once or twice weekly for oily skin, and less for dry or sensitive skin.' },
    { q: 'Should I cleanse first?', a: 'Yes. Steaming over makeup just moves debris around.' },
    { q: 'Can I use actives after steaming?', a: 'Go gentle. Absorption increases after steaming, and so can irritation. Save retinoids and acids for another day.' },
    { q: 'Why does mine spit hot water?', a: 'Usually mineral buildup from tap water, or using it during warm-up. Descale it and switch to distilled water.' },
  ],
  related: [
    { href: '/en/facial-steamer-guide', label: 'Facial Steamers: What They Actually Do' },
    { href: '/en/facial-steamer-benefits', label: 'Facial Steamer Benefits: What Is Real' },
    { href: '/en/at-home-extractions', label: 'At-Home Extractions: What Is Safe' },
  ],
}
