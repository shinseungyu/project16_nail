import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, MED_DISCLAIMER, MED_STATE_SCOPE } from './common'

export const whoCanPerformDermaplaning: EnPage = {
  path: '/en/who-can-perform-dermaplaning',
  title: 'Who Can Legally Perform Dermaplaning? State Rules',
  h1: 'Who Can Perform Dermaplaning? It Depends on Your State',
  description:
    'Whether estheticians can perform dermaplaning varies by state, and blade use is regulated differently across jurisdictions. How to check.',
  keywords: ['who can perform dermaplaning', 'dermaplaning scope of practice', 'can estheticians dermaplane'],
  category: 'Skin Treatments',
  stage: 7,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Rules vary significantly.** Some states permit licensed estheticians to perform dermaplaning; others restrict blade use, require medical supervision, or do not address it clearly. Check your state board of cosmetology, and where relevant your state medical board.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_STATE_SCOPE },
    { t: 'h2', id: 'why-regulated', text: 'Why it is regulated differently' },
    { t: 'p', text: 'Dermaplaning involves **a blade on skin**, which sits near the boundary between cosmetic and medical practice. Different states have drawn that line in different places, and some have not drawn it explicitly at all.' },
    {
      t: 'table',
      head: ['Model', 'Description'],
      rows: [
        ['Permitted within esthetics scope', 'With or without additional training requirements'],
        ['Restricted or unclear', 'Not explicitly addressed - risky to assume'],
        ['Medical supervision required', 'Under delegation'],
        ['Medical professionals only', 'Excluded from esthetics scope'],
      ],
    },
    { t: 'p', text: 'The second row is the difficult one. Where a state is silent, providers and boards can reach different conclusions, and "nobody has told me not to" is not the same as authorisation.' },
    { t: 'h2', id: 'for-clients', text: 'For clients' },
    { t: 'p', text: 'Ask before booking:' },
    {
      t: 'ol',
      items: [
        '**What licence does the person performing this hold?**',
        'Is dermaplaning within their scope in this state?',
        'Is a new sterile blade used for every client?',
        'What happens if I have a reaction?',
      ],
    },
    { t: 'p', text: '**A confident, specific answer is what you want.** Vagueness is informative in itself, and none of these are unreasonable questions to ask about a blade being used on your face.' },
    { t: 'h2', id: 'for-professionals', text: 'For professionals' },
    {
      t: 'table',
      head: ['Consideration', 'Note'],
      rows: [
        ['Scope of practice', 'Working outside it puts your licence at risk'],
        ['Insurance', 'Policies generally exclude out-of-scope work'],
        ['Training certificates', 'Necessary, not sufficient'],
        ['Employer policy', 'May be stricter than state rules'],
        ['Blade disposal', 'Sharps handling requirements apply'],
      ],
    },
    { t: 'note', tone: 'warn', title: 'A training certificate does not expand your legal scope', text: 'Training providers sell courses; state boards define scope. Verify with the board rather than the vendor, and get the answer in writing.' },
    { t: 'h2', id: 'what-to-check', text: 'What to check, in order' },
    {
      t: 'ol',
      items: [
        'Your **state board of cosmetology** — esthetics scope and blade use.',
        'Your **state medical board** — if delegation rules are relevant.',
        'Whether additional certification is specified.',
        '**Sharps disposal requirements**, which apply to the blades themselves.',
        'Your insurer’s position on this specific service.',
      ],
    },
    { t: 'p', text: 'The sharps point catches people out. Blades are regulated waste in many jurisdictions, and disposal requirements apply regardless of who is permitted to use them.' },
    { t: 'h2', id: 'checking', text: 'How to actually check' },
    { t: 'p', text: 'Boards publish scope, but it is not always easy to find, and the answer is often in a rule rather than an FAQ. A written enquiry is the reliable route.' },
    {
      t: 'table',
      head: ['Step', 'What to do'],
      rows: [
        ['Search the board site', 'Look for esthetics scope of practice rules'],
        ['Search for the term', 'Some boards address dermaplaning by name'],
        ['Write to the board', 'Ask specifically, and keep the reply'],
        ['Ask about blade type', 'Some rules distinguish guarded from surgical blades'],
        ['Check the medical board', 'Where delegation might apply'],
      ],
    },
    { t: 'p', text: 'The blade-type distinction is worth asking about explicitly. Some jurisdictions treat a guarded cosmetic tool differently from a surgical blade, and the answer changes what you may do.' },
    { t: 'h2', id: 'rules-change', text: 'The rules have moved, and may again' },
    { t: 'p', text: 'Several states have revisited how blade-based treatments are classified as the services have become more common. That has two consequences.' },
    {
      t: 'ul',
      items: [
        '**For clients:** long-standing practice at a salon is not proof of current compliance.',
        '**For professionals:** an answer you obtained years ago is worth re-confirming.',
        '**For both:** the board’s current published rule is the authority — not custom, not a course, and not an article.',
      ],
    },
    { t: 'h2', id: 'why-it-matters', text: 'Why this matters more than it sounds' },
    { t: 'p', text: 'Scope questions can feel like paperwork. In practice they decide two concrete things for both sides of the chair.' },
    {
      t: 'table',
      head: ['For', 'What is at stake'],
      rows: [
        ['The client', 'Whether the person holding the blade is trained and accountable'],
        ['The client', 'Whether there is insurance behind an adverse outcome'],
        ['The professional', 'Their licence'],
        ['The professional', 'Whether a claim would be covered'],
        ['The salon', 'Whether the premises requirements are met'],
      ],
    },
    { t: 'p', text: 'None of this is about the treatment being dangerous — it is generally uneventful. It is about who answers for it if something goes wrong, and that question only has a good answer if the scope question was settled beforehand.' },
  ],
  faq: [
    { q: 'Can estheticians do dermaplaning?', a: 'In some states yes, in others no or only with supervision. Check your state board rather than assuming from practice elsewhere.' },
    { q: 'Do I need a certification?', a: 'Training is expected, but certification alone does not grant scope your licence lacks.' },
    { q: 'Is it a medical procedure?', a: 'Classification varies by state, which is exactly why the rules differ so much.' },
    { q: 'Will insurance cover out-of-scope work?', a: 'Generally not, which is the practical exposure beyond the regulatory one.' },
    { q: 'Where do I verify?', a: 'Your state board of cosmetology, and where relevant your state medical board. Get it in writing.' },
  ],
  related: [
    { href: '/en/what-is-dermaplaning', label: 'What Is Dermaplaning?' },
    { href: '/en/cosmetology-license-requirements', label: 'Cosmetology License Requirements' },
    { href: '/en/who-can-perform-microneedling', label: 'Who Can Legally Perform Microneedling?' },
  ],
}
