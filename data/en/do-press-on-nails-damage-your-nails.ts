import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO } from './common'

export const doPressOnNailsDamageYourNails: EnPage = {
  path: '/en/do-press-on-nails-damage-your-nails',
  title: 'Do Press On Nails Damage Your Nails?',
  h1: 'Do Press On Nails Damage Your Nails?',
  description:
    'Press ons do not damage nails; removal does. What actually causes thinning and peeling, and how to avoid it.',
  keywords: ['do press on nails damage your nails', 'press on nails damage', 'press ons bad for nails'],
  category: 'Nails',
  stage: 2,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Wearing them does not. Taking them off wrongly does.** Pulling press ons off removes layers of the nail plate along with the adhesive. Soak them off and the damage risk drops close to zero.',
  blocks: [
    { t: 'h2', id: 'causes', text: 'What actually causes damage' },
    {
      t: 'table',
      head: ['Cause', 'Severity'],
      rows: [
        ['Pulling them off', 'The main cause, by a wide margin'],
        ['Over-buffing during prep', 'Moderate'],
        ['Wearing them continuously for months', 'Mild'],
        ['Glue allergy, uncommon', 'Varies'],
        ['Applying over already damaged nails', 'Aggravates what is there'],
      ],
    },
    { t: 'p', text: 'The list is short and the first item dominates it. Almost every account of press ons ruining someone’s nails describes a removal method rather than a wearing experience.' },
    { t: 'h2', id: 'what-it-looks-like', text: 'What damage looks like' },
    {
      t: 'ul',
      items: [
        'Thin, flexible nails that bend more than they used to.',
        'White patches on the surface.',
        'Peeling in layers.',
        'Sensitivity to pressure.',
      ],
    },
    { t: 'p', text: '**None of this is permanent.** Nail plate is not living tissue and cannot be repaired, but it is continuously replaced, so damage grows out over several months.' },
    { t: 'h2', id: 'avoiding', text: 'How to avoid it' },
    {
      t: 'ol',
      items: [
        '**Buff lightly, not aggressively.** You are creating texture, not removing layers.',
        '**Always soak to remove.** This single habit prevents most of the risk.',
        'Take short breaks between sets.',
        'Use cuticle oil daily.',
        'Do not apply over lifting or damaged nails.',
      ],
    },
    { t: 'h2', id: 'recovery', text: 'Recovery timeline' },
    {
      t: 'table',
      head: ['Timeframe', 'What to expect'],
      rows: [
        ['Weeks 1 - 4', 'Nails feel thin, may split'],
        ['Months 2 - 3', 'New growth looks normal'],
        ['Months 4 - 6', 'Fully grown out'],
      ],
    },
    { t: 'p', text: '**Nothing repairs existing nail plate.** Strengtheners and oils improve flexibility and reduce breakage while it grows out, which is genuinely useful, but they are managing the process rather than reversing it.' },
    { t: 'h2', id: 'allergy', text: 'The one that is not about removal' },
    { t: 'p', text: 'Adhesive allergy is uncommon but real, and it presents differently from mechanical damage. It is worth recognising because the answer is to stop rather than to change technique.' },
    {
      t: 'table',
      head: ['Sign', 'Suggests'],
      rows: [
        ['Thin, peeling nail plate', 'Mechanical damage from removal'],
        ['Itching or redness around the nail', 'Possible reaction to the adhesive'],
        ['Swelling of the skin at the sides', 'Possible reaction - stop and see a doctor'],
        ['Discomfort only while wearing', 'Fit or length, or a reaction'],
        ['Discolouration under the nail', 'See a doctor rather than self-treating'],
      ],
    },
    { t: 'note', tone: 'warn', text: 'Redness, swelling, itching, or any sign of infection around the nail warrants a doctor rather than another set. Nail infections are treatable but they are time-sensitive.' },
    { t: 'h2', id: 'buffing', text: 'Over-buffing, the quieter cause' },
    { t: 'p', text: 'Removal gets the blame and deserves most of it, but repeated aggressive buffing is the second contributor and it accumulates silently across sets.' },
    {
      t: 'table',
      head: ['', 'Enough', 'Too much'],
      rows: [
        ['Goal', 'Remove shine', 'Remove layers'],
        ['Appearance', 'Slightly matte', 'Visibly thinned or rough'],
        ['Tool', 'Fine buffer, light pressure', 'Coarse file, pressure'],
        ['Time per nail', 'A few seconds', 'Working at it'],
        ['Feel afterwards', 'Normal', 'Sensitive or warm'],
      ],
    },
    { t: 'p', text: '**Warmth while buffing means stop.** Friction heat is a reliable signal that you are past texturing and into removing material.' },
    { t: 'h2', id: 'wearing-continuously', text: 'Wearing them continuously' },
    { t: 'p', text: 'Continuous wear across months is mild on its own, but it hides the state of the nail underneath, so problems are noticed later than they otherwise would be.' },
    {
      t: 'ul',
      items: [
        '**Look at the nail at each change** rather than reapplying immediately.',
        '**Note thinning, white patches, or tenderness** and act on them.',
        '**Take a short break** if any of those appear.',
        '**Oil daily even while wearing** — the cuticle area still benefits.',
      ],
    },
    { t: 'h2', id: 'growing-out', text: 'What growing out actually looks like' },
    {
      t: 'table',
      head: ['Stage', 'What you see'],
      rows: [
        ['Immediately after a bad removal', 'White patches, thin feel'],
        ['2 - 4 weeks', 'A line where healthy growth meets damage'],
        ['2 - 3 months', 'Healthy section is the majority'],
        ['4 - 6 months', 'Damaged section reaches the free edge and is filed off'],
      ],
    },
    { t: 'p', text: 'Nothing accelerates this. Oils and strengtheners reduce breakage along the way, which matters because a nail that snaps mid-recovery restarts the visible timeline.' },
    { t: 'h2', id: 'compared', text: 'Compared with other systems' },
    { t: 'p', text: 'Press ons sit at the gentler end of the range, and the reason is how little preparation they require rather than anything about the adhesive.' },
    {
      t: 'table',
      head: ['System', 'Prep required', 'Main damage risk'],
      rows: [
        ['Press ons', 'Light buff', 'Pulling them off'],
        ['Gel polish', 'Buff and dehydrate', 'Peeling it off'],
        ['Acrylic', 'More filing', 'Prying or filing at removal'],
        ['Hard gel', 'More filing', 'Filing at removal'],
        ['Dip powder', 'Buff and dehydrate', 'Removal, and shared jars'],
      ],
    },
    { t: 'p', text: 'The pattern across every row is the same. **Removal is the risk in all of them**, which is why the method matters more than the product you choose.' },
  ],
  faq: [
    { q: 'Are press ons bad for your nails?', a: 'Not inherently. Improper removal is the problem, and it is entirely avoidable by soaking rather than pulling.' },
    { q: 'How long until my nails recover?', a: 'Several months for full growth-out. New growth looks normal well before the damaged section has gone.' },
    { q: 'Should I take breaks?', a: 'A short break between sets is sensible, particularly if the nails feel thin or sore.' },
    { q: 'Can I use a strengthener?', a: 'It can reduce breakage while nails grow, but nothing repairs existing nail plate.' },
    { q: 'Are press ons safer than gel?', a: 'A similar risk profile. Both come down to removal, though gel prep involves slightly more buffing.' },
  ],
  related: [
    { href: '/en/how-to-remove-press-on-nails', label: 'How to Remove Press On Nails Without Damage' },
    { href: '/en/press-on-nails-short-nails', label: 'Press On Nails for Short or Bitten Nails' },
    { href: '/en/press-on-nails-vs-gel', label: 'Press On Nails vs Gel' },
  ],
}
