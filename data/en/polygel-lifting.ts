import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, NAIL_PLATE_NOTE } from './common'

export const polygelLifting: EnPage = {
  path: '/en/polygel-lifting',
  title: 'Why Polygel Lifts and How to Prevent It',
  h1: 'Why Does Polygel Lift?',
  description:
    'Skin and cuticle contact during application is the top cause of polygel lifting, followed by weak prep and moisture. Ranked causes and fixes.',
  keywords: ['polygel lifting', 'why does polygel lift', 'polygel lifting at edges', 'fix lifted polygel'],
  category: 'Nails',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**Lifting almost always starts with something between the product and the nail — skin, cuticle, oil, or moisture — rather than the polygel itself failing.** The lifted product is not what causes damage; picking or prying at it is.',
  blocks: [
    { t: 'note', tone: 'warn', text: NAIL_PLATE_NOTE },
    { t: 'h2', id: 'ranked-causes', text: 'Causes of lifting, ranked' },
    {
      t: 'table',
      head: ['Rank', 'Cause', 'Why it happens'],
      rows: [
        ['1', 'Skin or cuticle contact during application', 'Polygel bonds to the nail plate, not to skin — any product resting on skin never adheres and lifts almost immediately'],
        ['2', 'Insufficient prep', 'Natural oils and shine left on the nail block the bond'],
        ['3', 'Oil or moisture on the nail before application', 'Same mechanism as poor prep — a barrier between nail and product'],
        ['4', 'A surface that was buffed too smooth', 'Some texture helps product grip; an overly glassy surface has less to hold onto'],
        ['5', 'Under-curing', 'A partially cured layer never fully bonds and stays vulnerable at the edges'],
        ['6', 'Applying too thick in one layer', 'The outer surface can cure while the base underneath stays soft'],
      ],
    },
    { t: 'p', text: 'That order is worth internalising. Most people assume a lifted nail means the product was bad or wore too long, when the far more common story is thirty seconds of skin contact during application, weeks earlier.' },
    { t: 'h2', id: 'why-skin-contact-wins', text: 'Why skin contact is the runaway top cause' },
    { t: 'p', text: 'Polygel is designed to bond to the keratin of the nail plate after proper prep. It has no equivalent bond to skin. When product is placed slightly onto the cuticle or sidewall — easy to do with a putty-like material that does not self-level — that edge simply never attaches, and it is often the first place lifting appears, sometimes within days rather than weeks.' },
    {
      t: 'table',
      head: ['Where lifting starts', 'Usual cause'],
      rows: [
        ['At the cuticle line', 'Product was placed on or very near the cuticle'],
        ['At the sidewalls', 'Product touched the skin along the edge'],
        ['Across the whole nail evenly', 'Prep issue or under-curing, rather than skin contact'],
        ['Only on one or two nails', 'Application inconsistency on those specific nails'],
      ],
    },
    { t: 'h2', id: 'signs', text: 'Early signs worth acting on' },
    {
      t: 'table',
      head: ['Sign', 'What it means'],
      rows: [
        ['A small gap or pocket near the cuticle', 'Early lifting — worth addressing before it spreads'],
        ['An edge that catches on fabric or hair', 'Lifting has progressed enough to create a ledge'],
        ['Discolouration under the lifted area', 'Moisture has gotten underneath — see the note below'],
        ['The whole nail feels loose', 'Time for a proper removal, not a patch'],
      ],
    },
    { t: 'note', tone: 'warn', title: 'Discolouration under lifted product needs medical attention', text: 'A pocket of trapped moisture under lifted polygel can allow fungal or bacterial growth, which often shows as a green, yellow, or dark patch. This is not something to cover with a new set — see a doctor rather than diagnosing it yourself.' },
    { t: 'h2', id: 'fixing', text: 'Fixing a lifted nail' },
    {
      t: 'table',
      head: ['Situation', 'Reasonable approach'],
      rows: [
        ['One nail lifting slightly, no discolouration', 'A single-nail repair at the salon is usually enough'],
        ['Several nails lifting', 'Full removal and a fresh set — patching several at once rarely holds'],
        ['Any discolouration or odour under the lift', 'See a doctor before any repair or new product goes on'],
        ['Lifting right after a fresh set', 'Flag it to the technician promptly — most repair a recent set cheaply or free'],
      ],
    },
    { t: 'p', text: '**Never fill nail polish or top coat over a lifted area to "seal" it.** That traps whatever is underneath rather than fixing anything, and it is a common but unhelpful instinct.' },
    { t: 'h2', id: 'prevention', text: 'Preventing it' },
    {
      t: 'ol',
      items: [
        '**Prep thoroughly** — remove oils and shine from the nail plate before anything goes on.',
        '**Keep product off the skin and cuticle**, even at the cost of a slightly slower application.',
        'Leave the surface with a little texture rather than buffing it glassy smooth.',
        '**Cure fully**, matching lamp time to the product — do not estimate by feel.',
        'Apply in thin, even layers rather than one thick pass.',
        'Wear gloves for dishwashing and cleaning, since prolonged water and oil exposure is a slower version of the same problem.',
      ],
    },
    { t: 'h2', id: 'salon-vs-home', text: 'Salon sets versus home sets' },
    { t: 'p', text: 'The same six causes apply in both settings, but they show up differently depending on who is doing the prep and application.' },
    {
      t: 'table',
      head: ['Setting', 'Most common cause'],
      rows: [
        ['Rushed salon appointment', 'Prep shortened to save time'],
        ['Careful salon appointment', 'Rare — usually product-specific or a one-off'],
        ['First home attempt', 'Skin contact, since shaping by hand is unfamiliar'],
        ['Experienced home user', 'Occasional under-curing from lamp positioning'],
      ],
    },
    { t: 'p', text: 'This is why "my polygel keeps lifting" is rarely a reason to switch products entirely. It is usually a reason to look at one specific step — prep, skin contact, or curing — in the next set.' },
    { t: 'h2', id: 'not-the-same-as-damage', text: 'Lifting is not the same thing as damage' },
    { t: 'p', text: 'It is worth separating two different problems that get talked about as one. Lifted product on its own has not hurt the nail underneath — it is simply product that failed to bond, sitting loose.' },
    { t: 'p', text: '**What actually damages the nail plate is picking at a lifted edge, prying it off, or forcing it during removal.** The lifting itself is a cosmetic and hygiene issue to address promptly; the response to it is what determines whether the nail plate is affected. See [How to Remove Polygel Nails](/en/polygel-removal) for the correct way to take a lifted set off rather than picking at it piece by piece.' },
    { t: 'h2', id: 'when-to-see-a-doctor', text: 'When to see a doctor rather than a salon' },
    {
      t: 'ul',
      items: [
        '**Pain, throbbing, or persistent redness** around the nail.',
        '**Discolouration, odour, or discharge** under a lifted area.',
        '**The nail separating from the nail bed** rather than just the product lifting.',
        '**Swelling that does not settle** within a day or two.',
      ],
    },
    { t: 'p', text: 'None of this is something a new set of polygel fixes. It is a signal to stop, remove the product properly, and let a doctor look at the nail bed itself.' },
  ],
  faq: [
    { q: 'What is the number one cause of polygel lifting?', a: 'Product touching the skin or cuticle during application. It bonds to nail plate, not skin, so any overflow onto skin lifts almost immediately.' },
    { q: 'Does lifting mean my nails are damaged?', a: 'Not by itself. Lifted product has simply failed to bond — damage happens if it is picked at or pried off rather than properly removed.' },
    { q: 'Can I fix one lifted nail without a full redo?', a: 'Yes, a single-nail repair is usually enough if only one nail is affected and there is no discolouration underneath.' },
    { q: 'What does discolouration under lifted polygel mean?', a: 'Possible trapped moisture and fungal or bacterial growth. See a doctor rather than covering it with a new set.' },
    { q: 'How do I stop it from lifting again?', a: 'Thorough prep, keeping product off the skin, full curing, and thin even layers address the great majority of cases.' },
  ],
  related: [
    { href: '/en/polygel-removal', label: 'How to Remove Polygel Nails Safely' },
    { href: '/en/polygel-nails-at-home', label: 'Polygel Nails at Home: Kit, Steps, Mistakes' },
    { href: '/en/builder-gel-damage', label: 'Does Builder Gel Damage Nails?' },
  ],
}
