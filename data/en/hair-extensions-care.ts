import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, EXTENSIONS_TENSION_NOTE } from './common'

export const hairExtensionsCare: EnPage = {
  path: '/en/hair-extensions-care',
  title: 'How to Care for Hair Extensions',
  h1: 'How to Care for Hair Extensions',
  description:
    'Four habits protect both the attachment and the hair: wash less often, brush from the ends up, braid loosely at night, and avoid product at the bond.',
  keywords: [
    'hair extensions aftercare',
    'how to care for hair extensions',
    'how to brush hair extensions',
    'sleeping with hair extensions',
    'tape-in extensions care',
  ],
  category: 'Hair Treatments',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**Four habits do most of the work: wash a little less often than you might otherwise, brush starting from the ends rather than the root, loosely braid or tie hair back before bed, and keep conditioner and oil away from the attachment point itself.** These apply across tape-in, micro-link, keratin bond, and weave, with a few method-specific details below.',
  blocks: [
    { t: 'note', tone: 'warn', text: EXTENSIONS_TENSION_NOTE },
    { t: 'h2', id: 'four-habits', text: 'The four habits that matter most' },
    {
      t: 'table',
      head: ['Habit', 'Why it works'],
      rows: [
        ['Wash a little less often', 'Reduces how often the attachment point gets wet and manipulated, which is when bonds are most vulnerable'],
        ['Brush from the ends up, not root-down', 'Working out tangles at the ends first means the brush never has to force through a knot right at the attachment point'],
        ['Loosely braid or tie back before bed', 'Cuts down on overnight friction and tangling, which is when most matting happens'],
        ['No conditioner or oil at the attachment point', 'These products are designed to break down exactly the kind of bond that holds extensions in place'],
      ],
    },
    { t: 'h2', id: 'washing', text: 'Washing' },
    {
      t: 'p',
      text: 'How often you wash and what you use both matter more with extensions in than they usually do otherwise.',
    },
    {
      t: 'ul',
      items: [
        '**Wash a little less frequently** than your normal routine - roughly every 2 to 3 days rather than daily, unless your stylist tells you otherwise for your specific method.',
        '**Use a sulphate-free, extension-safe shampoo**, since sulphates strip both natural hair and any bond adhesive faster than a gentler formula.',
        '**Let water run through length-first, tipping your head back** rather than forward, so the flow of water and shampoo does not push directly against the attachment points.',
        '**Apply conditioner from mid-length to ends only**, keeping it away from the tape line, beads, or bonds specifically.',
        '**Pat dry rather than rubbing** with a towel, which can tangle the hair right at the attachment points.',
      ],
    },
    { t: 'h2', id: 'brushing', text: 'Brushing' },
    {
      t: 'p',
      text: 'The order you brush in matters as much as how often. Starting at the root and pulling a brush all the way down forces any tangle in the length to bunch up against the attachment point on its way through.',
    },
    {
      t: 'ol',
      items: [
        '**Hold the section just above the attachment point** with one hand to take the tension off it.',
        '**Start brushing from the very ends**, working out small sections of tangles first.',
        '**Gradually move the brush upward** in sections, only reaching close to the attachment point once everything below it is already smooth.',
        '**Use a loop brush or extension-specific brush** if your stylist recommends one - the looped bristles are gentler at the attachment points than standard bristles.',
        '**Brush at least once a day**, even on days you do not wash, to prevent tangles from building up.',
      ],
    },
    { t: 'h2', id: 'sleeping', text: 'Sleeping' },
    {
      t: 'p',
      text: 'Eight hours of movement against a pillow is a lot of friction concentrated in one place if hair is left completely loose.',
    },
    {
      t: 'table',
      head: ['Do', 'Do not'],
      rows: [
        ['Loosely braid hair, or tie it in a low, loose ponytail', 'Sleep with hair completely loose and unsecured'],
        ['Use a silk or satin pillowcase if you have one', 'Sleep on a rough cotton pillowcase night after night without adjustment'],
        ['Keep any tie or braid loose enough that it does not pull at the scalp', 'Tie hair back tightly at the root before bed'],
      ],
    },
    { t: 'h2', id: 'styling', text: 'Heat styling and products' },
    {
      t: 'table',
      head: ['Situation', 'Guidance'],
      rows: [
        ['Heat tools on human hair extensions', 'Generally tolerated within the temperature range your stylist or the hair supplier states - avoid going higher than you would on your own hair'],
        ['Heat tools on synthetic extensions', 'Usually not safe unless specifically labelled heat-friendly - check before applying any heat'],
        ['Heat tools directly at the attachment point', 'Avoid regardless of hair type - heat can soften adhesive and affect keratin bonds'],
        ['Styling products in general', 'Fine on the length - just keep them away from the attachment point itself, the same rule as conditioner and oil'],
      ],
    },
    { t: 'h2', id: 'swimming-sweat', text: 'Swimming, sweat, and humidity' },
    {
      t: 'ul',
      items: [
        '**Tie hair back before swimming**, and rinse with fresh water before getting in chlorinated or salt water if possible, since dry hair absorbs more chlorine or salt than pre-wet hair.',
        '**Rinse again with fresh water immediately after swimming**, rather than letting chlorine or salt water dry in.',
        '**Sweat during exercise is generally fine** - treat it the same as any other time hair gets damp, and brush gently from the ends once dry.',
        '**Humidity affects extension hair the same way it affects natural hair** - frizz-control products are fine on the length, away from the attachment point.',
      ],
    },
    { t: 'h2', id: 'product-ingredients', text: 'What to check on a product label' },
    {
      t: 'p',
      text: 'You do not need salon-branded products specifically, but the ingredient category matters more than the brand.',
    },
    {
      t: 'table',
      head: ['Look for', 'Avoid, or use only away from the attachment point'],
      rows: [
        ['Sulphate-free shampoo', 'Sulphates - strip both hair and bond adhesive faster'],
        ['Lightweight leave-in conditioner, applied mid-length to ends', 'Heavy silicone or oil-based conditioners near the root'],
        ['A loop brush or wide-tooth comb', 'Fine-tooth brushes that catch and pull at attachment points'],
        ['Alcohol-free styling products', 'Dry shampoo or oil sprayed directly at the attachment point'],
      ],
    },
    { t: 'h2', id: 'travel', text: 'Travel care' },
    {
      t: 'ul',
      items: [
        '**Pack a travel-size version of your usual sulphate-free shampoo** rather than relying on whatever a hotel provides.',
        '**Braid or tie hair back for flights and long car journeys**, the same logic as sleeping - hours of friction against a headrest adds up.',
        '**Rinse promptly after a swim or a day at the beach**, even while travelling, rather than letting it wait until you are home.',
        '**Bring your loop brush or extension-specific brush**, since it is easy to forget and hard to replace on the road.',
      ],
    },
    { t: 'h2', id: 'by-method', text: 'A few details by method' },
    {
      t: 'table',
      head: ['Method', 'Specific care note'],
      rows: [
        ['Tape-in', 'Keep the tape line completely product-free - even a small amount of oil there is the most common cause of early slipping'],
        ['Micro-link', 'Avoid twisting or spinning the beads with your fingers out of habit - it can loosen them ahead of schedule'],
        ['Keratin bond', 'Be gentle around bonds when they are new, since they can feel slightly firm until you are used to them - this settles, it is not a sign of a problem'],
        ['Weave', 'Keep the braided base clean and dry underneath, since moisture trapped against the scalp under a tight braid is uncomfortable and harder to manage'],
        ['Clip-in / halo', 'Store flat or on a hanger between wears rather than balled up, to prevent the wefts from tangling in storage'],
      ],
    },
    { t: 'h2', id: 'common-mistakes', text: 'Common mistakes that shorten wear time' },
    {
      t: 'table',
      head: ['Mistake', 'Effect'],
      rows: [
        ['Conditioner or oil applied at the root out of habit', 'Weakens tape, loosens micro-link beads over time, can affect keratin bonds'],
        ['Brushing root-first through a tangle', 'Pulls directly on the attachment point rather than releasing the knot gradually'],
        ['Sleeping with hair completely loose', 'Increases matting and friction concentrated near the scalp overnight'],
        ['Skipping the recommended wash frequency (too often or too rarely)', 'Either strips the bond faster, or lets product and oil build up at the attachment point'],
        ['Going past the recommended service window "because it still looks fine"', 'The attachment has moved further from the scalp regardless of how it looks day to day'],
      ],
    },
    { t: 'h2', id: 'weekly-checklist', text: 'A simple weekly checklist' },
    {
      t: 'ol',
      items: [
        '**Brushed at least once a day**, from the ends up.',
        '**Washed on your recommended schedule**, not daily out of habit and not skipped for too long either.',
        '**Slept with hair braided or tied back loosely**, most nights.',
        '**No conditioner, oil, or heat applied directly at the attachment point**, all week.',
        '**Checked in with how your scalp actually feels** - not just how the extensions look.',
      ],
    },
    { t: 'h2', id: 'when-something-feels-wrong', text: 'When to stop and check in, rather than push through' },
    {
      t: 'p',
      text: 'Good aftercare reduces problems, but it does not eliminate the need to pay attention to how your scalp actually feels.',
    },
    {
      t: 'table',
      head: ['What you notice', 'What to do'],
      rows: [
        ['General awareness of weight, no pain', 'Normal - continue your care routine'],
        ['Persistent pulling or soreness at any attachment point', 'Contact your stylist promptly rather than waiting for the next scheduled visit'],
        ['Increased shedding concentrated at attachment points, or a changing hairline', 'See a doctor or dermatologist'],
      ],
    },
    { t: 'h2', id: 'maintenance-reinforces-care', text: 'How maintenance appointments and home care work together' },
    {
      t: 'p',
      text: 'Home care extends wear time and protects the hair between appointments, but it does not replace the scheduled maintenance itself. A stylist checking tightness and attachment condition at each move-up, tightening, or refill catches things that are hard to assess on your own, such as whether tension has crept up unevenly across the head as hair has grown. Treat the two as complementary rather than one substituting for the other.',
    },
    { t: 'h2', id: 'bottom-line', text: 'The short version' },
    {
      t: 'p',
      text: 'Wash a little less often with an extension-safe shampoo, brush from the ends up, braid or tie hair loosely before bed, and keep every product - conditioner, oil, styling products - away from the attachment point itself. **These four habits protect the hair and the attachment at the same time, across every method in this cluster.**',
    },
  ],
  faq: [
    {
      q: 'How often should I wash my hair with extensions?',
      a: 'Roughly every 2 to 3 days rather than daily, using a sulphate-free, extension-safe shampoo, unless your stylist recommends otherwise for your specific method.',
    },
    {
      q: 'Why can\'t I put conditioner near the roots with extensions?',
      a: 'Conditioner and oil are designed to break down the kind of bond that holds tape, beads, and keratin bonds in place, so keeping them on the length only helps the attachment last its full wear time.',
    },
    {
      q: 'What is the correct way to brush extensions?',
      a: 'Start at the very ends and work tangles out in small sections, moving gradually up toward the attachment point rather than pulling a brush straight down from the root.',
    },
    {
      q: 'Should I braid my hair before bed with extensions?',
      a: 'Yes, a loose braid or low ponytail reduces overnight friction and tangling, which is when most matting happens. Keep it loose enough that it does not pull at the scalp.',
    },
    {
      q: 'Can I use heat tools on my extensions?',
      a: 'Usually yes on human hair, within the temperature range your stylist recommends, but avoid direct heat at the attachment point itself. Synthetic hair usually cannot tolerate heat unless labelled heat-friendly.',
    },
  ],
  related: [
    { href: '/en/do-hair-extensions-damage-hair', label: 'Do Hair Extensions Damage Your Hair?' },
    { href: '/en/tape-in-extensions-removal', label: 'Tape-In Extension Removal: How It Works' },
    { href: '/en/how-long-do-hair-extensions-last', label: 'How Long Do Hair Extensions Last?' },
  ],
}
