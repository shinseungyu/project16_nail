import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, MED_DISCLAIMER, MED_STATE_SCOPE } from './common'

export const whoCanPerformMicroneedling: EnPage = {
  path: '/en/who-can-perform-microneedling',
  title: 'Who Can Legally Perform Microneedling? State Rules',
  h1: 'Who Can Perform Microneedling? It Depends on Your State',
  description:
    'Whether estheticians may perform microneedling depends on your state, and depth limits often apply. How the rules are typically structured.',
  keywords: ['who can perform microneedling', 'can estheticians do microneedling', 'microneedling scope of practice'],
  category: 'Skin Treatments',
  stage: 1,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Rules vary significantly by state.** Some permit licensed estheticians to perform microneedling within depth limits; others restrict it to medical professionals or require physician supervision. Check your state board and medical board, because both may be relevant.',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_STATE_SCOPE },
    { t: 'h2', id: 'models', text: 'How rules are typically structured' },
    {
      t: 'table',
      head: ['Model', 'Description'],
      rows: [
        ['Esthetician permitted, depth-limited', 'Superficial depths only'],
        ['Medical supervision required', 'Under a physician’s delegation'],
        ['Medical professionals only', 'Restricted from esthetics scope'],
        ['Additional certification required', 'On top of base licensure'],
      ],
    },
    { t: 'p', text: '**The depth threshold is often the dividing line.** Below a certain depth the treatment may fall within esthetics scope; above it, it may be considered a medical procedure. That is why the same word describes services governed very differently.' },
    { t: 'h2', id: 'as-a-client', text: 'Why this matters to you as a client' },
    {
      t: 'ul',
      items: [
        'Ask who is performing your treatment and under what credential.',
        'Ask what depth will be used.',
        '**A provider who cannot answer clearly is a signal.**',
      ],
    },
    { t: 'h2', id: 'as-a-professional', text: 'Why this matters if you are a professional' },
    {
      t: 'table',
      head: ['Consideration', 'Note'],
      rows: [
        ['Scope of practice', 'Working outside it risks your licence'],
        ['Insurance', 'Policies typically exclude out-of-scope work'],
        ['Employer requirements', 'May be stricter than the state minimum'],
        ['Training certification', 'Necessary but not sufficient if scope does not permit it'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'A training certificate does not expand your legal scope of practice',
      text: 'Training companies sell courses. State boards define scope. Those are different things, and conflating them is the most expensive mistake available in this area.',
    },
    { t: 'h2', id: 'what-to-check', text: 'What to check, in order' },
    {
      t: 'ol',
      items: [
        'Your **state board of cosmetology** for esthetics scope.',
        'Your **state medical board** for delegation rules.',
        'Whether depth limits are specified.',
        'Whether supervision is required, and what supervision means in practice.',
        'Your insurer’s position on this specific procedure.',
      ],
    },
    { t: 'p', text: 'The insurer step is the one professionals skip. A policy that excludes out-of-scope work leaves you personally exposed on precisely the treatment where you most want cover.' },
    { t: 'h2', id: 'why-varies', text: 'Why the rules vary so much' },
    { t: 'p', text: 'Microneedling sits on a boundary. At shallow depths it resembles an aggressive exfoliation; at greater depths it is a procedure that breaks the skin barrier deliberately. States have drawn the line in different places, and some have moved it.' },
    {
      t: 'table',
      head: ['Question a state has to answer', 'Why it produces different rules'],
      rows: [
        ['Is this a cosmetic or medical procedure?', 'Determines which board governs it'],
        ['Does depth change the answer?', 'Most states say yes; the threshold varies'],
        ['Can a physician delegate it?', 'Delegation frameworks differ'],
        ['What supervision is required?', 'On-site, available, or none'],
        ['Does device type matter?', 'Some rules are written around devices'],
      ],
    },
    { t: 'p', text: 'Because the answers differ, **what is routine in one state can be out of scope in the next one.** Advice from a colleague elsewhere is not a substitute for checking your own board.' },
    { t: 'h2', id: 'if-unsure', text: 'If you are a professional and unsure' },
    {
      t: 'ol',
      items: [
        '**Write to your state board** and keep the reply. Verbal guidance is hard to rely on later.',
        '**Ask your insurer in writing** whether this procedure is covered under your licence.',
        '**Do not rely on a training provider’s assurance** about legality.',
        '**Check whether the rule references depth**, and if so, what happens on either side of it.',
        '**Re-check periodically.** Rules in this area have changed in several states.',
      ],
    },
    { t: 'note', tone: 'warn', text: 'Operating out of scope typically puts your licence and your insurance cover at risk simultaneously, which is why this is worth the time it takes to confirm properly.' },
    { t: 'h2', id: 'client-checklist', text: 'A short checklist before you book' },
    { t: 'p', text: 'You do not need to know your state’s rules in detail. You need to ask a few questions and notice whether they are answered comfortably.' },
    {
      t: 'table',
      head: ['Ask', 'A good answer sounds like'],
      rows: [
        ['Who will perform my treatment?', 'A name and a credential'],
        ['What licence do they hold?', 'Stated plainly, without deflection'],
        ['Is there physician oversight here?', 'Yes or no, and how it works'],
        ['What depth will be used?', 'A number and a reason'],
        ['Is that within their scope in this state?', 'A clear yes, ideally with reference to the rule'],
      ],
    },
    { t: 'p', text: 'Nobody is expected to interrogate a clinic. But a provider who cannot say who is treating you and under what authority has told you something either way.' },
    { t: 'h2', id: 'changing-rules', text: 'The rules have moved, and may again' },
    { t: 'p', text: 'Several states have revisited how this procedure is classified as devices and practice have changed. That has two practical consequences.' },
    {
      t: 'ul',
      items: [
        '**For clients:** what was true when a clinic opened may not be true now, and long-standing practice is not proof of current compliance.',
        '**For professionals:** a scope answer you obtained years ago is worth re-confirming rather than assuming.',
        '**For both:** the board’s current published rule is the authority, not custom, not a course, and not an article.',
      ],
    },
  ],
  faq: [
    { q: 'Can estheticians do microneedling?', a: 'In some states within depth limits, in others not at all. Check your state board rather than relying on what is common elsewhere.' },
    { q: 'Do I need extra certification?', a: 'Training is often expected, but certification alone does not grant scope your licence does not include.' },
    { q: 'Is a certificate enough to work legally?', a: 'No. Scope is set by the state, not by the training provider.' },
    { q: 'Does insurance cover out-of-scope work?', a: 'Generally not, which is the practical reason the scope question matters beyond regulation.' },
    { q: 'Where do I check?', a: 'Your state board of cosmetology and, where relevant, your state medical board.' },
  ],
  related: [
    { href: '/en/cosmetology-license-requirements', label: 'Cosmetology License Requirements & Reciprocity' },
    { href: '/en/esthetician-salary', label: 'Esthetician Salary: Why Sources Disagree' },
    { href: '/en/microneedling-side-effects', label: 'Microneedling Side Effects' },
  ],
}
