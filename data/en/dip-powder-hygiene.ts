import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, DIP_HYGIENE_NOTE } from './common'

export const dipPowderHygiene: EnPage = {
  path: '/en/dip-powder-hygiene',
  title: 'Is Dip Powder Sanitary? The Shared Jar Question',
  h1: 'Is Dip Powder Hygienic? What to Ask Your Salon',
  description:
    'Dipping fingers into shared powder jars has been raised as a hygiene concern and restricted in some states. What to ask your salon.',
  keywords: ['is dip powder sanitary', 'dip powder hygiene', 'shared dip powder jar', 'dip powder infection risk'],
  category: 'Nails',
  stage: 0,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**Dipping a client’s finger into a shared powder jar has been raised as a hygiene concern, and some state boards restrict or prohibit it.** The alternative — pouring powder over the nail so it never returns to the jar — addresses it entirely. **Ask which method your salon uses.**',
  blocks: [
    { t: 'note', tone: 'warn', text: DIP_HYGIENE_NOTE },
    { t: 'h2', id: 'the-issue', text: 'What the issue actually is' },
    { t: 'p', text: 'The traditional dip method has clients place their fingers into a jar of powder. **That jar is then used for the next client, and the one after.**' },
    { t: 'p', text: 'Unlike implements, powder cannot be disinfected between uses. You can autoclave a pusher; you cannot autoclave a jar of powder and still have usable powder.' },
    {
      t: 'table',
      head: ['Concern', 'Note'],
      rows: [
        ['Cross-contamination between clients', 'The core issue'],
        ['Broken skin, cuts or hangnails', 'Raises the concern significantly'],
        ['An existing nail infection', 'Same, in the other direction'],
        ['Powder cannot be effectively disinfected', 'Unlike metal implements'],
        ['Nobody can see who used it before you', 'Which is why the method matters more than the salon’s appearance'],
      ],
    },
    { t: 'p', text: 'It is worth being precise here: **this is a plausible route for contamination, not a demonstration that dip powder causes infections.** The sensible response is to use a method that removes the route, and that method already exists and costs nothing.' },
    { t: 'h2', id: 'the-alternatives', text: 'The alternatives' },
    {
      t: 'table',
      head: ['Method', 'How it works'],
      rows: [
        ['Pour method', 'Powder is poured over the nail; excess is discarded'],
        ['Individual decanting', 'A portion is separated for each client and thrown away after'],
        ['A jar per regular client', 'Kept and labelled for that person only'],
      ],
    },
    { t: 'p', text: '**All three address the concern.** The pour method is the most common, and many salons advertise it precisely because clients have started asking.' },
    { t: 'h2', id: 'what-to-ask', text: 'What to ask' },
    {
      t: 'ol',
      items: [
        '**"Do you dip, or pour?"**',
        'If they dip — is that powder used for other clients?',
        'Do you decant an individual portion?',
        '**What is your policy if a client has a cut or hangnail?**',
        'How are implements sanitised between clients?',
      ],
    },
    { t: 'p', text: '**A salon using safe practice answers immediately, and often mentions it before you ask.** Hesitation or defensiveness is the signal — not the specific answer.' },
    { t: 'h2', id: 'do-not-get-it-if', text: 'Do not get dip powder if you have' },
    {
      t: 'ul',
      items: [
        '**Cuts, hangnails or broken skin** around the nails.',
        '**Any suspected nail infection.**',
        'Recently damaged or lifting nails.',
        'Compromised immunity — discuss it with your doctor first.',
        'A nail you were already planning to ask a doctor about.',
      ],
    },
    { t: 'p', text: 'Rescheduling over a hangnail feels excessive until you consider that the alternative is putting broken skin into a shared container. **Most salons would rather move your appointment than take that on.**' },
    { t: 'h2', id: 'state-rules', text: 'State rules' },
    { t: 'p', text: '**Some state boards have addressed this specifically**, and the positions differ — some prohibit dipping outright, some require single-use decanting, some are silent.' },
    { t: 'p', text: 'If you want to know the rule where you live, your **state board of cosmetology** publishes it. For clients, though, the practical answer does not depend on the regulation: ask which method the salon uses, and pick a salon that pours.' },
    { t: 'h2', id: 'see-a-doctor', text: 'See a doctor if' },
    { t: 'p', text: 'After any nail service, these warrant medical attention rather than another appointment.' },
    {
      t: 'table',
      head: ['Sign', 'Why it matters'],
      rows: [
        ['Increasing redness, swelling or warmth', 'Signs of infection'],
        ['Pus or discharge', 'Same'],
        ['Throbbing pain', 'Same'],
        ['The nail separating from the bed', 'Needs diagnosis'],
        ['Discolouration that spreads', 'Several conditions look alike'],
      ],
    },
    { t: 'p', text: '**Do not cover a problem nail with another set.** It traps moisture, delays diagnosis, and is the most common wrong response to every one of the signs above.' },
  ],
  faq: [
    { q: 'Is dip powder sanitary?', a: 'It depends on the method. Dipping into shared jars has been raised as a concern; pouring the powder over the nail addresses it.' },
    { q: 'How do I know which my salon does?', a: 'Ask directly. It is a fair and increasingly common question, and salons using the pour method usually say so unprompted.' },
    { q: 'Can I get an infection from dip powder?', a: 'Any service involving shared product and broken skin carries some risk. Safe practice and intact skin reduce it substantially.' },
    { q: 'Is dipping banned?', a: 'Some state boards restrict or prohibit it and others do not address it. Check your state board for the rule where you live.' },
    { q: 'What if I have a hangnail?', a: 'Reschedule, or ask for a method that avoids contact with broken skin. Most salons will prefer that too.' },
  ],
  related: [
    { href: '/en/what-are-dip-powder-nails', label: 'What Are Dip Powder Nails?' },
    { href: '/en/nail-fungus-after-acrylics', label: 'Nail Problems After Acrylics: What to Do' },
    { href: '/en/salon-business-costs', label: 'Salon Business Costs' },
  ],
}
