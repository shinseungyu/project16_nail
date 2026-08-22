import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, US_STATE_NOTE } from './common'

export const cosmetologyLicenseRequirements: EnPage = {
  path: '/en/cosmetology-license-requirements',
  title: 'Cosmetology License Requirements & Reciprocity Explained',
  h1: 'Cosmetology License Requirements: The Structure Behind the Rules',
  description:
    'What cosmetology licensing requires, how license types differ, and how reciprocity works when you move states. Verify with your state board.',
  keywords: [
    'cosmetology license requirements',
    'cosmetology license reciprocity',
    'do you need a license to do waxing',
    'esthetics vs cosmetology license',
  ],
  category: 'Licensing & Training',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Requirements are set state by state, not federally.** The common structure is: meet age and education prerequisites, complete a board-approved program of a specified number of hours, pass written and practical exams, then apply. Hours, exams, and fees differ substantially between states.',
  blocks: [
    { t: 'note', tone: 'warn', text: US_STATE_NOTE },
    { t: 'h2', id: 'types', text: 'License types are not interchangeable' },
    { t: 'p', text: 'This is where most confusion starts. A broader licence is not simply a better one — it takes more hours, and a narrower speciality licence may be the faster route to the work you actually want.' },
    {
      t: 'table',
      head: ['License', 'Typical scope'],
      rows: [
        ['Cosmetology', 'Broadest - hair, skin, nails'],
        ['Esthetics', 'Skin only'],
        ['Nail technology', 'Nails only'],
        ['Barbering', 'Hair, often including shaving'],
        ['Master esthetics', 'Advanced skin services, where offered'],
        ['Instructor', 'Teaching'],
      ],
    },
    {
      t: 'p',
      text: '**A cosmetology licence generally covers the widest scope; speciality licences are narrower but require fewer hours.** Which one you need depends entirely on what you intend to do, so decide the services first and the licence second.',
    },
    { t: 'h2', id: 'path', text: 'The general path' },
    {
      t: 'table',
      head: ['Step', 'Note'],
      rows: [
        ['1. Prerequisites', 'Minimum age, education level'],
        ['2. Approved program', 'Hours vary by state and licence type'],
        ['3. Written exam', 'Theory, safety, state law'],
        ['4. Practical exam', 'Hands-on assessment'],
        ['5. Application and fee', 'To the state board'],
        ['6. Ongoing renewal', 'Cycle length and CE vary by state'],
      ],
    },
    { t: 'h2', id: 'reciprocity', text: 'Reciprocity — moving states' },
    { t: 'p', text: 'A licence does **not** automatically transfer. Four patterns exist, and which one applies to you depends on the destination state rather than your current one.' },
    {
      t: 'table',
      head: ['Pathway', 'How it works'],
      rows: [
        ['Reciprocity', 'State recognises your licence, often with an application and fee'],
        ['Endorsement', 'Recognition if your original requirements met or exceeded theirs'],
        ['Additional requirements', 'Extra hours, exams, or both'],
        ['Full re-licensure', 'Where requirements differ substantially'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Check before you move, not after',
      text: 'If the destination state requires more hours than you completed, you may need to make up the difference — and finding that out after relocating is an expensive surprise, because you cannot work in the meantime.',
    },
    { t: 'h3', text: 'What to gather in advance' },
    {
      t: 'ul',
      items: [
        'Official transcript of training hours.',
        'Proof of licensure in good standing from your current state.',
        'Exam score records where available.',
        'Work experience documentation, if the destination state accepts it.',
      ],
    },
    { t: 'h2', id: 'specific-services', text: 'Waxing, lashes, and other specific services' },
    { t: 'p', text: 'Whether a specific service requires a licence — and which licence — varies more than people expect.' },
    {
      t: 'table',
      head: ['Service', 'Typical treatment'],
      rows: [
        ['Waxing and hair removal', 'Commonly requires esthetics or cosmetology licensure'],
        ['Lash extensions', 'Commonly esthetics or cosmetology; some states have specific rules'],
        ['Threading', 'Varies notably by state'],
        ['Makeup application', 'Varies; some states exempt it'],
      ],
    },
    {
      t: 'p',
      text: 'On **"do you need a license to do waxing"** — in most states, yes, typically under an esthetics or cosmetology licence. But this is exactly the kind of question where state-level variation is significant, so verify it directly rather than relying on a general summary, including this one.',
    },
    { t: 'h2', id: 'hours-structure', text: 'Why hour requirements differ so much' },
    { t: 'p', text: 'The hour counts that vary between states are not arbitrary. They reflect what each board decided a given scope requires, which is why a broader licence always costs more time.' },
    {
      t: 'table',
      head: ['Licence', 'Relative hours', 'Reason'],
      rows: [
        ['Cosmetology', 'Highest', 'Covers hair, skin, and nails'],
        ['Barbering', 'High', 'Adds shaving and its safety requirements'],
        ['Esthetics', 'Middle', 'Skin only, but includes chemistry and contraindications'],
        ['Nail technology', 'Lowest of the main four', 'Narrowest scope'],
        ['Master esthetics', 'Additional on top', 'Advanced modalities where the state offers it'],
      ],
    },
    { t: 'p', text: '**Choose by scope, not by hours.** The nail technology licence is the fastest route, and it is the wrong choice if you intend to offer facials. Working outside your licensed scope is treated the same as working unlicensed.' },
    { t: 'h2', id: 'instructor', text: 'The instructor licence' },
    { t: 'p', text: 'Teaching is a separate credential rather than a seniority level, and it is a common second act for experienced professionals.' },
    {
      t: 'table',
      head: ['Element', 'Typical pattern'],
      rows: [
        ['Prerequisite', 'An active licence in the subject you will teach'],
        ['Experience', 'Some states require a minimum period of practice'],
        ['Training', 'An instructor program, with its own hour requirement'],
        ['Exam', 'Usually separate from the original licence exam'],
        ['Renewal', 'Its own cycle and CE, alongside your practising licence'],
      ],
    },
    { t: 'h2', id: 'common-mistakes', text: 'Where people get caught out' },
    {
      t: 'ul',
      items: [
        '**Assuming a certificate is a licence.** Private training and state authorisation are different things, and only one of them lets you work.',
        '**Working slightly outside scope.** Adding one service that sits under a different licence is still unlicensed practice for that service.',
        '**Letting a licence lapse while employed.** The exposure usually extends to the employer as well.',
        '**Relying on a school on the question of approval.** Verify approval on the board site rather than the school site.',
        '**Moving without checking reciprocity.** Requirements are set by the destination state, not the one that trained you.',
      ],
    },
    { t: 'note', tone: 'warn', text: 'Scope questions are the ones most often answered wrongly by well-meaning colleagues. If a service sits near a boundary — threading, lash extensions, skin needling, anything that breaks the skin — get the answer from the board rather than from the salon.' },
  ],
  faq: [
    {
      q: 'What are cosmetology license requirements?',
      a: 'Generally age and education prerequisites, a board-approved training program, written and practical exams, and an application. Specific hours and fees vary by state.',
    },
    {
      q: 'What is the difference between cosmetology and esthetics?',
      a: 'Cosmetology covers hair, skin, and nails. Esthetics covers skin only and typically requires fewer training hours.',
    },
    {
      q: 'Does my license transfer to another state?',
      a: 'Not automatically. Some states offer reciprocity or endorsement, others require additional hours or exams. Confirm with the destination board before relocating.',
    },
    {
      q: 'Do you need a license to do waxing?',
      a: 'In most states, yes, commonly under esthetics or cosmetology licensure. State variation is significant here, so verify with your state board.',
    },
    {
      q: 'Can I hold more than one license?',
      a: 'Yes, and many professionals do — for example esthetics plus nail technology, which widens what you can offer without the full cosmetology hour requirement.',
    },
    {
      q: 'Where do I check my state rules?',
      a: 'Your state board of cosmetology official website. Do not rely on third-party summaries, including this page, as the final word.',
    },
  ],
  related: [
    { href: '/en/cosmetology-license-renewal', label: 'Cosmetology License Renewal: Deadlines, CE & Fees' },
    { href: '/en/nail-tech-license', label: 'How to Get a Nail Tech License' },
    { href: '/en/lash-certification', label: 'Lash Certification vs License: The Difference' },
  ],
}
