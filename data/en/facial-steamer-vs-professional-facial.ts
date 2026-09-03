import type { EnPage } from './types'
import { EN_UPDATED_BATCH4, EN_UPDATED_BATCH4_ISO, STEAM_CLAIMS_NOTE } from './common'

export const facialSteamerVsProfessionalFacial: EnPage = {
  path: '/en/facial-steamer-vs-professional-facial',
  title: 'Facial Steamer vs Professional Facial: Both?',
  h1: 'Home Steamer vs Professional Facial',
  description:
    'A home steamer handles one step of a facial. What professionals do that you cannot at home, and how to combine both sensibly without wasting money.',
  keywords: ['facial steamer vs facial', 'is a facial steamer worth it', 'home facial vs professional facial', 'how often to get a facial'],
  category: 'Skin Treatments',
  stage: 0,
  updated: EN_UPDATED_BATCH4,
  updatedIso: EN_UPDATED_BATCH4_ISO,
  lead:
    '**A steamer replicates one step of a facial — the softening step.** What it does not replicate is skin assessment, professional extraction technique, and treatment selection. **Both together works better than either alone.**',
  blocks: [
    { t: 'note', tone: 'warn', text: STEAM_CLAIMS_NOTE },
    { t: 'h2', id: 'what-a-facial-includes', text: 'What a facial includes' },
    {
      t: 'table',
      head: ['Step', 'Can you do it at home?'],
      rows: [
        ['Skin assessment', 'Not properly. You cannot see your own skin the way a trained person can'],
        ['Cleansing', 'Yes'],
        ['Steam', 'Yes — this is exactly what a steamer does'],
        ['Exfoliation', 'Gently, yes'],
        ['Extractions', 'Limited — surface blackheads only'],
        ['Mask', 'Yes'],
        ['Massage', 'Partially'],
        ['Product selection for your skin', 'Not with the same information or product range'],
      ],
    },
    { t: 'p', text: 'Read the table honestly and the picture is clear. **A steamer covers one row. It covers it well, but it is one row.** The rows it cannot cover are the ones that need training rather than equipment.' },
    { t: 'h2', id: 'what-professionals-bring', text: 'What professionals bring' },
    {
      t: 'table',
      head: ['Element', 'Why it matters'],
      rows: [
        ['Trained assessment', 'They see what you do not — the sides of the nose, the jawline, the hairline, the back of the neck'],
        ['Extraction technique', 'Trained pressure and angle reduce scarring risk considerably'],
        ['Product access and selection', 'Professional-strength products, chosen for your skin rather than for a shelf'],
        ['Contraindication awareness', 'Knowing when not to treat is a large part of the skill'],
        ['Consistency', 'Repeatable technique, session after session'],
        ['Equipment beyond steam', 'Depending on the provider and state rules, tools a home routine simply does not include'],
      ],
    },
    { t: 'p', text: 'The first two rows are the ones worth paying for. **Assessment and extraction are where amateur and professional results diverge most**, and neither improves by buying a better steamer.' },
    { t: 'h2', id: 'what-a-steamer-replaces', text: 'What the steamer actually replaces' },
    { t: 'p', text: 'At a professional facial, steam runs for a few minutes before extractions and a mask. That is the part a home unit reproduces. It does not reproduce the person deciding whether your skin should be steamed at all today, or what should happen afterwards.' },
    { t: 'p', text: '**Put differently: a steamer replaces the ten minutes, not the appointment.** Anyone selling it as a facial replacement is selling the ten minutes at the price of the appointment.' },
    { t: 'h2', id: 'combining-them', text: 'Combining them' },
    {
      t: 'table',
      head: ['Approach', 'Note'],
      rows: [
        ['Professional facial every four to six weeks', 'Assessment, extractions, and treatment selection'],
        ['Home steaming weekly', 'Maintenance between visits — before a mask, not as a standalone'],
        ['Home masks', 'Between visits, ideally products your esthetician has seen'],
        ['Skip home extractions on anything inflamed', 'Leave it for the professional. That is what you are paying them for'],
        ['Tell your esthetician what you do at home', 'They adjust the treatment around it'],
      ],
    },
    { t: 'p', text: '**This is the sensible split.** The steamer is not a replacement — it is maintenance, and it makes the professional appointment easier because your esthetician is not starting from scratch each time.' },
    { t: 'h2', id: 'cost-comparison', text: 'Cost comparison' },
    {
      t: 'table',
      head: ['Item', 'Typical cost'],
      rows: [
        ['Facial steamer, one-off purchase', '$25–150'],
        ['Professional facial', '$75–200 per visit, varies by provider and region'],
        ['Facials every 4 weeks, one year', 'Around 13 visits'],
        ['Facials every 6 weeks, one year', 'Around 9 visits'],
        ['Combined approach', 'Steamer plus facials every 6 weeks'],
      ],
    },
    { t: 'p', text: 'The arithmetic is simple. **If a modest steamer lets you stretch facials from every four weeks to every six, it pays for itself inside a year** at almost any facial price. If it does not change your visit frequency, it is a comfort purchase — which is fine, as long as you call it that.' },
    { t: 'h2', id: 'when-to-skip-home-steaming', text: 'When to skip home steaming entirely' },
    {
      t: 'ul',
      items: [
        '**Rosacea or easily flushed skin.** Heat commonly aggravates it — ask your esthetician or a doctor before adding steam at all.',
        '**Active inflamed or cystic acne.** Heat can worsen inflammation. This is a doctor conversation, not a steamer one.',
        '**Very dry or compromised skin.** Steam can leave it more dehydrated, not less.',
        '**After a peel, dermaplaning or any resurfacing treatment.** Follow the provider’s timeline before reintroducing heat.',
      ],
    },
    { t: 'p', text: 'In each case the professional facial may still be appropriate, adjusted. **The home steamer is the part to drop first**, because it is the part with no one assessing your skin before it starts.' },
    { t: 'h2', id: 'questions-to-ask', text: 'Questions to ask your esthetician' },
    {
      t: 'ol',
      items: [
        '**Should I be steaming at home at all with my skin?**',
        'How often, and for how long?',
        'What should I do straight after — mask, serum, nothing?',
        'Which of my blackheads are reasonable to extract myself, and which should wait for you?',
        'How far apart should our appointments be if I am maintaining at home?',
      ],
    },
    { t: 'p', text: 'A good esthetician answers all five readily and adjusts the answers to your skin. **That conversation is worth more than any device**, and it costs nothing extra.' },
  ],
  faq: [
    { q: 'Can a steamer replace a facial?', a: 'No — it replicates one step. Assessment and extraction technique are what you are paying a professional for.' },
    { q: 'Should I still get facials if I have a steamer?', a: 'For assessment and extractions, yes. The steamer handles maintenance between visits.' },
    { q: 'How often should I get a professional facial?', a: 'Every four to six weeks is common. Adjust with your provider based on your skin and what you do at home.' },
    { q: 'Can I do extractions myself between facials?', a: 'Surface blackheads that release easily, yes. Leave anything inflamed or deep for the professional.' },
    { q: 'Is a steamer worth it?', a: 'If it extends the time between professional facials, easily. If not, it is a comfort purchase — fine, but call it that.' },
  ],
  related: [
    { href: '/en/facial-steamer-guide', label: 'Facial Steamers: What They Actually Do' },
    { href: '/en/at-home-extractions', label: 'At-Home Extractions: What Is Safe' },
    { href: '/en/facial-vs-chemical-peel', label: 'Facial vs Chemical Peel' },
  ],
}
