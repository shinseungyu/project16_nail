import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, SMOOTHING_CHEM_NOTE } from './common'

export const keratinTreatmentSafety: EnPage = {
  path: '/en/keratin-treatment-safety',
  title: 'Keratin Treatment Safety: Formaldehyde Explained',
  h1: 'Keratin Treatments and Formaldehyde: What to Know',
  description:
    'Some keratin products contain formaldehyde or release it when heated. What that means for clients and stylists, and the questions worth asking.',
  keywords: ['keratin treatment safety', 'keratin treatment formaldehyde', 'is keratin treatment safe', 'formaldehyde free keratin'],
  category: 'Hair Treatments',
  stage: 11,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**Some keratin smoothing products contain formaldehyde, or ingredients that release it when heated.** This has been the subject of regulatory attention, including workplace safety guidance for salons in the US. **Ask what product is being used, ask about ventilation, and ask to see the safety data sheet.**',
  blocks: [
    { t: 'note', tone: 'warn', text: SMOOTHING_CHEM_NOTE },
    { t: 'h2', id: 'why-it-comes-up', text: 'Why this comes up with this treatment specifically' },
    { t: 'p', text: 'The flat-iron stage involves **high heat applied to the product while it sits on the hair**, over a long appointment, in a small room. Some formulations release formaldehyde gas at those temperatures, which is why ventilation and product transparency matter here more than in most salon services.' },
    { t: 'p', text: 'That is the whole mechanism, and it is worth understanding rather than memorising a verdict. The concern is not that a smoothing product is inherently dangerous to touch. It is that heat can turn an ingredient in the bottle into something in the air.' },
    { t: 'h2', id: 'whats-been-raised', text: 'What has actually been raised' },
    {
      t: 'table',
      head: ['Point', 'Detail'],
      rows: [
        ['Product content', 'Some formulations contain formaldehyde or releasing agents'],
        ['Heat activation', 'Releasing agents can produce formaldehyde when heated'],
        ['Labelling', 'Products marketed as "formaldehyde-free" have been the subject of scrutiny over what is released during heating'],
        ['Worker exposure', 'Stylists have repeated occupational exposure — a different risk profile from a client’s occasional visit'],
        ['Regulatory attention', 'US workplace safety authorities have issued guidance for salons'],
      ],
    },
    { t: 'p', text: 'The labelling row is the one that causes the most confusion, and it is why "it says formaldehyde-free" is not the end of the conversation. **The question is what the product releases when heated**, and the safety data sheet is where that is documented.' },
    { t: 'h2', id: 'questions-to-ask', text: 'Questions to ask your salon' },
    {
      t: 'ol',
      items: [
        '**What product are you using?**',
        '**Can I see the safety data sheet?**',
        '**How is the space ventilated during the service?**',
        'Do you offer an alternative formulation?',
        'Do stylists here use any protective equipment for this service?',
      ],
    },
    { t: 'p', text: '**A salon that handles this openly is demonstrating competence.** Deflection is informative in the other direction. You are not asking anyone to justify themselves — you are asking a product question that any stylist doing this service regularly should be able to answer from memory.' },
    { t: 'h2', id: 'ventilation-signs', text: 'Signs of inadequate ventilation' },
    {
      t: 'table',
      head: ['Sign', 'What it indicates'],
      rows: [
        ['Eyes watering or burning', 'An airborne irritant'],
        ['Throat irritation or coughing', 'Same'],
        ['Strong chemical odour', 'Air is not being exchanged fast enough'],
        ['Nose or sinus irritation', 'Same'],
      ],
    },
    { t: 'note', tone: 'warn', title: 'If you notice these during a treatment, say so', text: 'You can ask for a window or extraction, and you can ask to stop. Sitting through eye irritation because you do not want to make a fuss is the wrong trade.' },
    { t: 'h2', id: 'who-should-be-cautious', text: 'Who should be cautious' },
    {
      t: 'table',
      head: ['Group', 'Note'],
      rows: [
        ['Pregnant or breastfeeding', 'Discuss with your doctor first. Many salons decline'],
        ['Asthma or respiratory conditions', 'Discuss with your doctor'],
        ['Known chemical sensitivities', 'Raise it before booking, not on the day'],
        ['Stylists', 'Occupational exposure is repeated — a different question entirely'],
      ],
    },
    { t: 'h2', id: 'for-stylists', text: 'For stylists specifically' },
    { t: 'p', text: 'Occupational exposure is a different question from client exposure. A client might have three of these a year; a stylist might do three in a week, in the same room, for years.' },
    {
      t: 'table',
      head: ['Measure', 'Note'],
      rows: [
        ['Ventilation', 'The primary control'],
        ['Local exhaust at the station', 'Where feasible'],
        ['Read the SDS for every product you use', 'Not just the ones you suspect'],
        ['Follow workplace safety guidance', 'Consult OSHA resources and your state requirements'],
        ['Personal protective equipment', 'Per the safety data sheet'],
        ['Track how many you perform', 'Cumulative exposure is the whole point'],
      ],
    },
    { t: 'p', text: '**If you perform these regularly, the workplace safety guidance is worth reading directly** rather than relying on manufacturer marketing. Manufacturers describe their product; regulators describe your working conditions, and those are different documents with different purposes.' },
    { t: 'h2', id: 'balanced-view', text: 'Holding both things at once' },
    { t: 'p', text: 'It is possible to state this accurately without either dismissing it or catastrophising, and most coverage manages neither.' },
    {
      t: 'table',
      head: ['Accurate', 'Not accurate'],
      rows: [
        ['Some products contain or release formaldehyde when heated', 'All smoothing treatments are dangerous'],
        ['Ventilation and product choice are the key variables', 'It is completely safe, do not worry'],
        ['"Formaldehyde-free" labelling has been scrutinised', 'Any product labelled free of it is fine'],
        ['Occupational exposure differs from occasional client exposure', 'Clients and stylists face the same risk'],
        ['Ask, and decide with the information', 'Avoid the entire category on principle'],
      ],
    },
    { t: 'p', text: 'The practical position for a client is straightforward: ask what is being used, make sure the room is ventilated, speak to your doctor first if you are pregnant or have a respiratory condition, and say something if your eyes start watering. **That is a reasonable amount of care for a three-hour appointment.**' },
  ],
  faq: [
    { q: 'Do keratin treatments contain formaldehyde?', a: 'Some products do, and some contain ingredients that release it when heated. Formulations vary, so ask which product is being used.' },
    { q: 'Are "formaldehyde-free" products safe?', a: 'That labelling has been the subject of scrutiny regarding what is released during heating. Ask to see the safety data sheet rather than relying on the front of the bottle.' },
    { q: 'Is it safe while pregnant?', a: 'Discuss it with your doctor. Many salons decline to perform smoothing treatments during pregnancy and breastfeeding.' },
    { q: 'Should I be worried as a client?', a: 'Occasional client exposure is a different question from repeated occupational exposure. Ventilation and product choice are the key variables — ask about both.' },
    { q: 'What about stylists?', a: 'Repeated occupational exposure warrants following workplace safety guidance directly and reading the safety data sheet for every product used.' },
  ],
  related: [
    { href: '/en/what-is-a-keratin-treatment', label: 'What Is a Keratin Treatment?' },
    { href: '/en/brazilian-blowout-vs-keratin', label: 'Brazilian Blowout vs Keratin Treatment' },
    { href: '/en/keratin-treatment-alternatives', label: 'Alternatives to a Keratin Treatment' },
  ],
}
