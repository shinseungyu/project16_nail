import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, PMU_TATTOO_NOTE } from './common'

export const powderBrowsHealing: EnPage = {
  path: '/en/powder-brows-healing',
  title: 'Powder Brows Healing: Week by Week',
  h1: 'Powder Brows Healing, Week by Week',
  description:
    'A week-by-week guide to powder brows healing, including the ghosting stage where colour seems to vanish before the final result settles.',
  keywords: ['powder brows healing', 'powder brows healing process', 'powder brows ghosting'],
  category: 'Brows',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**Visible healing takes seven to fourteen days; the final result settles over four to six weeks.** Around days eight to fourteen the colour commonly looks like it has faded away almost entirely — a normal stage called ghosting, not a sign the work has failed.',
  blocks: [
    { t: 'note', tone: 'warn', text: PMU_TATTOO_NOTE },
    { t: 'h2', id: 'timeline', text: 'The healing timeline' },
    {
      t: 'table',
      head: ['Period', 'What is typical'],
      rows: [
        ['Days 1 - 2', 'Bold and noticeably darker than the final result; mild swelling'],
        ['Days 3 - 5', 'Colour deepens further, then light flaking begins'],
        ['Days 5 - 10', 'Flaking and peeling; the fill can look patchy or uneven'],
        ['Days 10 - 14', 'Looks faded, blotchy or almost gone — the ghosting stage'],
        ['Weeks 3 - 4', 'Colour gradually reappears from underneath'],
        ['Weeks 4 - 6', 'Result settles into something close to final'],
        ['Weeks 4 - 8', 'Touch-up appointment, which finishes the process'],
      ],
    },
    { t: 'h2', id: 'ghosting', text: 'Ghosting: why the colour seems to disappear' },
    {
      t: 'p',
      text: 'As the top layer of skin heals over the deposited pigment, it temporarily forms a slightly cloudy barrier that mutes the colour underneath — sometimes to the point where the brows look almost bare. **The pigment has not gone anywhere; it becomes visible again as the surface layer finishes healing and thins out.**',
    },
    {
      t: 'p',
      text: 'This is the same healing mechanism as any tattoo, because pigment sits in the same skin layer — which is also why, **in many US states, powder brows are regulated as tattooing** rather than treated as a purely cosmetic service, with healing and aftercare expectations that follow accordingly.',
    },
    {
      t: 'p',
      text: '**Ghosting is the single most misunderstood part of powder brow healing**, and it is the reason artists schedule the touch-up at four to eight weeks rather than any earlier. Judging the result during days ten to fourteen means judging the ghosting stage, not the actual outcome.',
    },
    {
      t: 'note',
      title: 'Do not book an early correction because of ghosting',
      text: 'A faded, patchy look between roughly days eight and fourteen is expected. Booking a correction or a second full session at that point is acting on incomplete healing, not on the finished work.',
    },
    { t: 'h2', id: 'day-by-day', text: 'Day by day: what to do' },
    {
      t: 'table',
      head: ['Days', 'What to do'],
      rows: [
        ['1 - 2', 'Blot as instructed; keep the area dry'],
        ['3 - 5', 'Do not pick at the darkening or early flaking'],
        ['5 - 10', 'Let flakes come off on their own — resist touching'],
        ['8 - 14', 'Expect the faded, ghosting look; this is normal'],
        ['Weeks 2 - 4', 'Wait rather than judging the result'],
        ['4 - 8 weeks', 'Attend the touch-up as scheduled'],
      ],
    },
    { t: 'h2', id: 'what-affects-healing', text: 'What affects how healing goes' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Skin type', 'Oilier skin can retain pigment less evenly during healing'],
        ['Aftercare compliance', 'The biggest factor you actually control'],
        ['Picking or scratching', 'Causes patchy retention and can scar'],
        ['Sun exposure', 'Fades pigment during and after healing'],
        ['Individual healing response', 'Varies between people regardless of technique'],
        ['Certain medications', 'Discuss with your artist and doctor beforehand'],
      ],
    },
    { t: 'h2', id: 'avoid', text: 'What to avoid during healing' },
    {
      t: 'table',
      head: ['Item', 'How long', 'Why'],
      rows: [
        ['Water on the area', 'Per your artist, often 7 - 10 days', 'Affects pigment retention'],
        ['Sweating, gym, sauna', '7 - 10 days', 'Same reason'],
        ['Swimming', '2 weeks or more', 'Water and chemical exposure'],
        ['Picking or scratching', 'Always', 'Causes patchy healing and scarring'],
        ['Makeup on the brows', '10 - 14 days', 'Infection risk while the skin barrier is healing'],
        ['Sun exposure', '4 weeks, then daily SPF', 'Fades pigment'],
        ['Exfoliants or retinoids nearby', '4 weeks', 'Fades pigment faster'],
        ['Facials over the brow area', '4 weeks', 'Same reason'],
      ],
    },
    { t: 'h2', id: 'first-vs-touch-up', text: 'Why the touch-up heals differently' },
    {
      t: 'p',
      text: 'People often expect the touch-up appointment to feel like a repeat of the first session. It usually does not, and knowing that beforehand removes most of the anxiety around a second round.',
    },
    {
      t: 'table',
      head: ['', 'First session', 'Touch-up'],
      rows: [
        ['Work involved', 'Full shape and initial pigment pass', 'Filling gaps, evening out colour'],
        ['Duration', '2 - 3 hrs', '1 - 1.5 hrs'],
        ['Healing', 'The full cycle above, including ghosting', 'Usually milder and shorter'],
        ['Result to judge', 'Not yet — wait', 'This is the appointment to judge'],
      ],
    },
    {
      t: 'p',
      text: '**The touch-up is where the result is actually finished.** The first session lays down shape and most of the pigment; the second corrects whatever the healing process revealed, including any unevenness left by ghosting.',
    },
    { t: 'h2', id: 'oily-skin', text: 'If you have oily skin' },
    {
      t: 'p',
      text: 'Powder brows generally heal better on oily skin than fine hair-stroke techniques do, since a shaded fill does not depend on a crisp line holding. That does not mean oily skin heals identically to dry skin — retention can still be somewhat lower, which is one reason oilier skin sits at the shorter end of the wear-time range covered in [How Long Do Powder Brows Last?](/en/how-long-do-powder-brows-last).',
    },
    { t: 'h2', id: 'when-to-call', text: 'When to contact your artist, and when to see a doctor' },
    {
      t: 'p',
      text: 'Most of what feels alarming during healing is normal. A short list is not, and knowing which is which saves both unnecessary worry and a delay in getting real medical care if it is needed.',
    },
    {
      t: 'table',
      head: ['Observation', 'Normal or see a doctor'],
      rows: [
        ['Very dark for the first days', 'Normal'],
        ['Flaking or peeling at days 5 - 10', 'Normal'],
        ['Looks faded or blotchy at day 10 - 14', 'Normal — this is ghosting'],
        ['Patchy after full healing', 'Normal — the touch-up addresses it'],
        ['Increasing pain or spreading redness', 'See a doctor'],
        ['Pus, warmth to the touch, or fever', 'See a doctor'],
      ],
    },
    {
      t: 'p',
      text: '**The top four are what people usually call their artist about; the bottom two are what actually need medical attention.** If anything in the lower half applies to you, contact a doctor rather than waiting to raise it at the touch-up.',
    },
    { t: 'h2', id: 'summary', text: 'The short version' },
    {
      t: 'p',
      text: 'Expect visible healing over seven to fourteen days, a ghosting stage around days eight to fourteen where the colour looks like it has mostly disappeared, gradual colour return over weeks three to four, and a touch-up at four to eight weeks that finishes the result.',
    },
    {
      t: 'p',
      text: '**Judge the result after the touch-up has healed, not before.** Every stage described here as normal is common precisely because it happens to most people, regardless of how carefully the initial session was done.',
    },
  ],
  faq: [
    { q: 'How long does it take for powder brows to heal?', a: 'Visible surface healing takes seven to fourteen days; the final result settles over four to six weeks.' },
    { q: 'Why do my powder brows look like they disappeared?', a: 'Around days eight to fourteen, a temporary healing layer over the pigment makes colour look faded or nearly gone. This is called ghosting and is a normal stage, not a failed result.' },
    { q: 'Should I book a touch-up early if it looks patchy?', a: 'No. The scheduled touch-up at four to eight weeks is designed to address exactly this. Booking earlier means acting before healing is complete.' },
    { q: 'Does oily skin affect healing?', a: 'It can affect retention somewhat, though powder brows generally hold up better on oily skin than fine hair-stroke techniques.' },
    { q: 'What healing signs need a doctor rather than my artist?', a: 'Increasing pain, spreading redness, pus, warmth or fever. Flaking and a faded look during the normal timeline do not need medical attention.' },
  ],
  related: [
    { href: '/en/what-are-powder-brows', label: 'What Are Powder Brows?' },
    { href: '/en/microblading-aftercare', label: 'Microblading Aftercare Day by Day' },
    { href: '/en/how-long-do-powder-brows-last', label: 'How Long Do Powder Brows Last?' },
  ],
}
