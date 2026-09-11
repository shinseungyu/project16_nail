import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, EXTENSIONS_TENSION_NOTE } from './common'

export const tapeInExtensions: EnPage = {
  path: '/en/tape-in-extensions',
  title: 'Tape-In Extensions: Cost, Wear Time, Care',
  h1: 'Tape-In Hair Extensions: Cost, How Long They Last, and How to Care for Them',
  description:
    'Tape-in hair extensions cost $400 to $1,200 to install, move up every 6 to 8 weeks for $150 to $350, and the hair itself lasts 6 to 12 months.',
  keywords: [
    'tape-in extensions',
    'tape-in hair extensions cost',
    'tape-in extensions move up',
    'how long do tape-in extensions last',
    'tape-in extensions aftercare',
  ],
  category: 'Hair Treatments',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**Tape-in extensions use adhesive tabs to sandwich thin sections of your own hair, and they typically cost $400 to $1,200 to install.** They sit in for 6 to 8 weeks before needing a move-up, and the hair itself can be reused for 6 to 12 months across two to four reapplication cycles if it is cared for properly.',
  blocks: [
    { t: 'note', tone: 'warn', text: EXTENSIONS_TENSION_NOTE },
    { t: 'h2', id: 'what-they-are', text: 'What tape-in extensions actually are' },
    {
      t: 'p',
      text: 'Wefts of hair are pre-attached to thin, double-sided adhesive tabs. A stylist sections your natural hair and sandwiches a thin layer between two tabs, so the natural hair sits glued between two pieces of tape rather than glued directly to a single surface.',
    },
    { t: 'h2', id: 'cost', text: 'Cost' },
    {
      t: 'table',
      head: ['Stage', 'Typical cost'],
      rows: [
        ['Full install', '$400 - 1,200'],
        ['Move-up (every 6 - 8 weeks)', '$150 - 350'],
        ['Removal', '$50 - 200'],
        ['Removal + new install same visit', 'Often discounted versus paying for both separately - ask'],
      ],
      note: 'Prices vary by region and amount of hair.',
    },
    {
      t: 'p',
      text: 'The install price depends mainly on how much hair is used and the salon\'s hourly rate for the time it takes. A move-up is cheaper than a full install because the hair itself is reused — you are paying for labour and new tape, not new hair.',
    },
    { t: 'h2', id: 'annual-cost', text: 'What a year of tape-ins actually costs' },
    {
      t: 'p',
      text: 'Because tape-ins need a move-up roughly every 6 to 8 weeks to stay wearable, the real cost of the method is the year of appointments, not the first install.',
    },
    {
      t: 'table',
      head: ['Item', 'Frequency', 'Annual estimate'],
      rows: [
        ['Initial install', 'Once', '$400 - 1,200'],
        ['Move-ups', 'Every 6 - 8 weeks (roughly 6 - 8 times a year)', '$900 - 2,800'],
        ['New hair, periodically', 'Every 6 - 12 months', 'Rolled into a fresh install cost'],
      ],
    },
    {
      t: 'note',
      text: 'Combined, most people spend roughly $1,700 to $2,600 a year on tape-in extensions worn continuously. Spreading that across 12 months puts it closer to a recurring monthly service than a one-time purchase.',
    },
    { t: 'h2', id: 'wear-time', text: 'Why 6 to 8 weeks, specifically' },
    {
      t: 'p',
      text: 'The tape does not fail at 6 to 8 weeks — your hair simply grows past it. As natural hair grows, the tape moves down the strand away from the scalp. Past roughly 8 weeks, the gap between the scalp and the tape becomes noticeable, the tabs can start to slip closer together or bunch, and the weight sits further from the root than it did on day one.',
    },
    {
      t: 'table',
      head: ['Week', 'What is happening'],
      rows: [
        ['0 - 2', 'Tape sits close to the scalp, most secure period'],
        ['2 - 5', 'Normal growth, tape moves down gradually'],
        ['6 - 8', 'Typical move-up window - gap becoming visible'],
        ['8+', 'Tabs can bunch or slip, weight sits further from the root'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      text: 'Pushing past 8 weeks to save on a move-up is a common way people end up unhappy with tape-ins. The tape itself does not get more damaging with time, but a slipped, bunched, or unevenly weighted set is more likely to pull.',
    },
    { t: 'h2', id: 'hair-lifespan', text: 'How long the hair itself lasts' },
    {
      t: 'p',
      text: 'Good-quality human hair tape-ins are designed to be taken down, cleaned up, and reapplied — the hair is reusable, even though the tape itself is replaced at every move-up.',
    },
    {
      t: 'table',
      head: ['With', 'Expect'],
      rows: [
        ['Good care and gentle handling', '6 - 12 months, roughly 2 - 4 reapplication cycles'],
        ['Heavy heat styling, harsh products, or rough brushing', 'Shorter lifespan, more shedding and tangling between cycles'],
        ['Synthetic hair instead of human hair', 'Usually a shorter usable life overall'],
      ],
    },
    { t: 'h2', id: 'move-up-vs-new', text: 'Move-up vs a fresh install' },
    {
      t: 'p',
      text: 'A move-up reuses your existing wefts and simply reapplies new tape closer to the scalp. A fresh install uses new hair. Most people do several move-ups before eventually replacing the hair.',
    },
    {
      t: 'table',
      head: ['', 'Move-up', 'Fresh install'],
      rows: [
        ['Uses', 'Your existing wefts', 'New wefts'],
        ['Cost', '$150 - 350', '$400 - 1,200'],
        ['Time in chair', 'Shorter', 'Longer'],
        ['When', 'Every 6 - 8 weeks, for 2 - 4 cycles', 'When the existing hair is too worn, tangled, or shed to reuse'],
      ],
    },
    { t: 'h2', id: 'who-they-suit', text: 'Who tape-ins tend to suit best' },
    {
      t: 'table',
      head: ['Situation', 'Fit'],
      rows: [
        ['Medium to thick hair, wanting a natural continuous look', 'Good fit - tabs sit flat and blend easily'],
        ['Very fine or sparse hair', 'Possible, but usually needs smaller sections and fewer tabs - see the guide on extensions for fine hair'],
        ['Wanting the flattest possible attachment for wearing hair up', 'Good fit - tape lies flatter than beads or bonds'],
        ['Wanting the longest stretch between salon visits', 'Consider micro-link or keratin bond instead, at 2 - 4 months'],
        ['A first-time extension wearer', 'Often recommended as a starting point - quicker install and removal than micro-link or keratin bond'],
      ],
    },
    { t: 'h2', id: 'colour-matching', text: 'Getting the colour match right' },
    {
      t: 'p',
      text: 'Tape-in wefts are visible where hair is parted or pulled back, so an accurate colour match matters more for this method than for one with smaller, more scattered attachment points. Most suppliers offer numbered shade systems, and an experienced stylist will often blend two adjacent shades rather than relying on a single "closest" match, particularly if your hair has any dimension or highlights.',
    },
    {
      t: 'note',
      text: 'Bring your hair in its normal, unwashed state to a colour-matching consultation if possible - freshly washed hair can look a shade lighter or darker than it settles to a day or two later.',
    },
    { t: 'h2', id: 'first-appointment', text: 'If it is your first tape-in appointment' },
    {
      t: 'ol',
      items: [
        '**Wash your hair the day before**, not the morning of - tape bonds better to hair with a small amount of natural oil than to freshly stripped, product-free hair.',
        '**Avoid conditioner and leave-in products** on the day of your appointment, especially near the roots.',
        '**Ask to see the colour match against a dry section of your hair** before the stylist commits to a full set.',
        '**Ask how many wefts are planned and where**, so you know what to expect when you look in the mirror.',
        '**Book your move-up before you leave** - it is easier to get the 6 - 8 week slot you want if you book it on the spot.',
      ],
    },
    { t: 'h2', id: 'care', text: 'Care that extends both the wear time and the hair itself' },
    {
      t: 'p',
      text: 'The same handful of habits protect the tape bond and the hair fibre at the same time.',
    },
    {
      t: 'table',
      head: ['Do', 'Do not'],
      rows: [
        ['Brush starting at the ends, working up toward the tape', 'Brush straight down from the root through the tape'],
        ['Keep conditioner and oil away from the tape itself', 'Apply conditioner, oil, or dry shampoo directly at the bond'],
        ['Loosely braid or tie hair back before bed', 'Sleep with hair down and unsecured'],
        ['Wash a little less often than before', 'Wash daily out of habit if you did not need to'],
      ],
    },
    {
      t: 'p',
      text: 'Conditioner and oil at the tape line are the single most common cause of tape-ins slipping early, because they are designed to break down the very kind of bond adhesive relies on.',
    },
    { t: 'h2', id: 'sleeping-swimming', text: 'Sleeping, swimming, and heat' },
    {
      t: 'ul',
      items: [
        '**Sleeping:** a loose braid or low ponytail before bed reduces friction and tangling at the tape line overnight.',
        '**Swimming:** chlorine and salt water dry out both the tape and the hair - rinse with fresh water before and after, and tie hair back in the water.',
        '**Heat styling:** most human hair tape-ins tolerate normal styling heat, but keep hot tools away from the tape itself, since heat can soften adhesive.',
      ],
    },
    { t: 'h2', id: 'signs-of-a-move-up', text: 'Signs it is time for a move-up' },
    {
      t: 'ol',
      items: [
        '**You can see a visible gap** between the scalp and the top of the tape.',
        '**The tabs feel like they are sliding or bunching together** rather than lying flat.',
        '**It has been 6 to 8 weeks**, even if nothing looks obviously wrong yet.',
        '**Styling feels different** - extra weight noticeably lower than where it started.',
      ],
    },
    {
      t: 'p',
      text: 'Booking on a schedule rather than waiting for a visible problem is the more comfortable way to wear tape-ins, and it is usually the cheaper one too, since a slipped set sometimes needs more correction than a routine move-up would have.',
    },
    { t: 'h2', id: 'when-to-see-a-doctor', text: 'When it is more than a maintenance issue' },
    {
      t: 'p',
      text: 'Tape-ins should not hurt. Mild awareness of weight is normal; persistent pulling, soreness, or a headache that traces back to the extensions is not.',
    },
    {
      t: 'table',
      head: ['What you notice', 'What to do'],
      rows: [
        ['Awareness of weight, no pain', 'Normal - monitor'],
        ['Persistent pulling or soreness at the tape line', 'Have a stylist check tension, or remove and rest'],
        ['Increased shedding concentrated at the tape', 'Ask your stylist, and see a doctor if it continues after removal'],
        ['A receding hairline or thinning at the temples', 'See a doctor or dermatologist'],
      ],
    },
    { t: 'h2', id: 'bottom-line', text: 'The short version' },
    {
      t: 'p',
      text: 'Tape-ins run $400 to $1,200 to install, $150 to $350 for a move-up every 6 to 8 weeks, and $50 to $200 to remove — roughly $1,700 to $2,600 a year worn continuously. **The tape and the wear schedule are what most people ask about; the details of care and removal are what actually determine how your hair looks afterward.**',
    },
  ],
  faq: [
    {
      q: 'How much do tape-in extensions cost?',
      a: 'A full install runs $400 to $1,200. Move-ups cost $150 to $350 every 6 to 8 weeks, and removal is $50 to $200. Prices vary by region and amount of hair.',
    },
    {
      q: 'How long do tape-in extensions last before a move-up?',
      a: '6 to 8 weeks. Past that window the tape has grown further from the scalp and can start to bunch or slip.',
    },
    {
      q: 'How long does the hair itself last?',
      a: 'With good care, 6 to 12 months across roughly 2 to 4 reapplication cycles, since the wefts are reused at each move-up.',
    },
    {
      q: 'Can I wash and style my hair normally with tape-ins?',
      a: 'Mostly yes, but keep conditioner, oil, and heat tools away from the tape line itself, since they can weaken the bond and cause early slipping.',
    },
    {
      q: 'Is it cheaper to do a move-up or start fresh?',
      a: 'A move-up is cheaper because it reuses your existing wefts. A fresh install with new hair costs more but is needed once the existing hair is too worn or shed to reuse.',
    },
  ],
  related: [
    { href: '/en/tape-in-extensions-removal', label: 'Tape-In Extension Removal: How It Works' },
    { href: '/en/hair-extensions-cost', label: 'How Much Do Hair Extensions Cost? Full Breakdown' },
    { href: '/en/hair-extensions-care', label: 'How to Care for Hair Extensions' },
  ],
}
