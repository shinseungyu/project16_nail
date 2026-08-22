import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, US_STATE_NOTE } from './common'

export const cosmetologyLicenseRenewal: EnPage = {
  path: '/en/cosmetology-license-renewal',
  title: 'Cosmetology License Renewal: Deadlines, CE Hours & Fees',
  h1: 'Cosmetology License Renewal: What You Need to Know',
  description:
    'How cosmetology license renewal works: cycle lengths, continuing education, typical fees, and what happens if you let it lapse. Varies by state.',
  keywords: ['cosmetology license renewal', 'cosmetology CE hours', 'renew cosmetology license', 'lapsed cosmetology license'],
  category: 'Licensing & Training',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'Most states renew cosmetology licences **every one to two years, with fees commonly in the $40 to $150 range.** Some require continuing education hours and others do not. Requirements vary by state, so check your state board before your deadline rather than after it.',
  blocks: [
    { t: 'note', tone: 'warn', text: US_STATE_NOTE },
    { t: 'h2', id: 'how-it-works', text: 'How renewal generally works' },
    {
      t: 'table',
      head: ['Element', 'Typical pattern'],
      rows: [
        ['Cycle length', '1 - 2 years, varies by state'],
        ['Renewal fee', 'Roughly $40 - 150'],
        ['Continuing education', 'Required in some states, not others'],
        ['Renewal method', 'Usually online through the state board portal'],
        ['Notice', 'Many boards email or mail a reminder, but not all'],
      ],
    },
    {
      t: 'note',
      title: 'The most common mistake is assuming you will be reminded',
      text: 'Notice practices differ by board, and a missed notice does not extend your deadline. Set your own calendar alert 60 days out and treat any board reminder as a bonus rather than the system.',
    },
    { t: 'h2', id: 'ce', text: 'Continuing education, the part that catches people' },
    {
      t: 'p',
      text: 'Where CE is required, hour counts and approved-provider rules differ significantly by state. Some specify subject areas such as sanitation, infection control, or state law.',
    },
    { t: 'h3', text: 'Two things to verify before paying for any CE course' },
    {
      t: 'ol',
      items: [
        '**Is the provider approved by your state board?** An unapproved course does not count, and you generally will not find out until you try to renew.',
        '**Do the hours apply to your specific licence type?** Cosmetology, esthetics, nail technology, and barbering may carry separate requirements.',
      ],
    },
    { t: 'h2', id: 'lapsed', text: 'If your licence has already lapsed' },
    {
      t: 'table',
      head: ['Situation', 'Typical path'],
      rows: [
        ['Recently expired', 'Late renewal with a penalty fee'],
        ['Expired longer', 'Reinstatement process, possibly additional CE'],
        ['Expired well beyond the reinstatement window', 'May require re-examination or re-education'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Stop working until it is resolved',
      text: 'Working on a lapsed licence is generally treated as unlicensed practice, which can carry penalties for both you and your employer, and may void professional liability coverage for anything that happens in the meantime.',
    },
    { t: 'h2', id: 'moving', text: 'Moving states' },
    {
      t: 'p',
      text: 'A licence issued in one state does not automatically transfer. Some states have reciprocity agreements or endorsement pathways; others require additional hours or examination. Renewal and relocation are separate questions — you can usually renew from anywhere, but practising elsewhere is a licensing matter.',
    },
    { t: 'h2', id: 'checklist', text: 'Renewal checklist' },
    {
      t: 'ul',
      items: [
        'Confirm your exact expiry date on the state board portal, not from memory.',
        'Check whether CE is required this cycle — it can change between cycles.',
        'Verify any CE provider is board-approved **before** paying.',
        'Update your address with the board; missed notices usually start here.',
        'Renew early, because portals get congested near deadlines.',
        'Save the confirmation and the updated licence document.',
      ],
    },
    { t: 'h2', id: 'ce-topics', text: 'What continuing education usually covers' },
    { t: 'p', text: 'Where CE is required, boards commonly specify subject areas rather than leaving the choice entirely open. The recurring themes are the ones tied to public safety.' },
    {
      t: 'table',
      head: ['Topic', 'Why boards require it'],
      rows: [
        ['Infection control and sanitation', 'The most frequently inspected area in practice'],
        ['State law and rules', 'Rules change between cycles, and you are held to the current version'],
        ['Chemical safety', 'Product formulations and handling requirements change'],
        ['Bloodborne pathogens', 'Required in some states, particularly where services break skin'],
        ['Business or ethics', 'Less common, and often optional within a total hour count'],
      ],
    },
    { t: 'p', text: 'Hours are usually counted per cycle rather than per year, so a two-year cycle requiring eight hours does not mean four hours annually. Check how your board counts them before assuming you are halfway through.' },
    { t: 'h2', id: 'records', text: 'Keep your own records' },
    { t: 'p', text: 'Boards audit CE claims, and the burden of proof sits with the licensee rather than the provider. Keeping your own file is a small habit that prevents an expensive problem.' },
    {
      t: 'ul',
      items: [
        '**Certificates of completion** for every course, saved digitally as well as on paper.',
        '**Provider approval numbers**, which is what an audit actually checks.',
        '**Dates completed**, because hours generally must fall inside the cycle.',
        '**Renewal confirmations** and each updated licence document.',
        '**Receipts**, which also matter for tax purposes if you are self-employed.',
      ],
    },
    { t: 'note', title: 'A certificate is not proof on its own', text: 'What an audit verifies is that the provider was board-approved at the time you took the course. Save the approval number alongside the certificate, because providers occasionally lose approval and their older certificates become difficult to validate.' },
    { t: 'h2', id: 'timing', text: 'Timing the renewal' },
    { t: 'p', text: 'The practical failure mode is not forgetting entirely. It is leaving it late enough that something goes wrong with no time to fix it.' },
    {
      t: 'table',
      head: ['When', 'What to do'],
      rows: [
        ['60 days out', 'Confirm expiry date and whether CE is required this cycle'],
        ['45 days out', 'Complete any outstanding CE with an approved provider'],
        ['30 days out', 'Renew through the board portal'],
        ['After renewing', 'Save confirmation and the updated licence document'],
        ['Expired', 'Stop working and follow the late renewal or reinstatement process'],
      ],
    },
  ],
  faq: [
    {
      q: 'How often do I renew my cosmetology license?',
      a: 'Most states use a one- or two-year cycle, but it varies. Your state board portal shows your exact expiry date.',
    },
    {
      q: 'How much does renewal cost?',
      a: 'Commonly $40 to $150 depending on the state and licence type, before any late penalty.',
    },
    {
      q: 'Do I need continuing education?',
      a: 'Some states require it and others do not. Where required, the number of hours and the approved subjects vary, and courses must usually come from a board-approved provider.',
    },
    {
      q: 'What if I forget to renew?',
      a: 'Late renewal with a penalty is usually possible. Longer lapses may require reinstatement or re-examination. Do not keep working in the meantime.',
    },
    {
      q: 'Can I renew from another state?',
      a: 'Renewal is typically done online, so your location is not usually an obstacle. Practising in a different state is a separate question involving reciprocity.',
    },
    {
      q: 'Does my license transfer if I move?',
      a: 'Not automatically. Some states offer reciprocity or endorsement, others require additional hours or exams. Check the destination state before you move.',
    },
  ],
  related: [
    { href: '/en/cosmetology-license-requirements', label: 'Cosmetology License Requirements & Reciprocity' },
    { href: '/en/nail-tech-license', label: 'How to Get a Nail Tech License' },
    { href: '/en/esthetician-salary', label: 'Esthetician Salary: Why Sources Disagree' },
  ],
}
