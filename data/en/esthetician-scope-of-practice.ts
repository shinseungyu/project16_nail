import type { EnPage } from './types'
import { EN_UPDATED_BATCH6, EN_UPDATED_BATCH6_ISO, MED_STATE_SCOPE } from './common'

export const estheticianScopeOfPractice: EnPage = {
  path: '/en/esthetician-scope-of-practice',
  title: 'Esthetician Scope of Practice: Know Your Limits',
  h1: 'Esthetician Scope of Practice',
  description:
    'What estheticians may and may not perform varies significantly by state. How to verify your own scope and why it matters.',
  keywords: ['esthetician scope of practice', 'what can estheticians do', 'esthetician license limits'],
  category: 'Careers & Pay',
  stage: 15,
  updated: EN_UPDATED_BATCH6,
  updatedIso: EN_UPDATED_BATCH6_ISO,
  lead:
    '**Scope of practice is set by your state board and varies significantly between states.** A treatment that is routine for an esthetician in one state may be out of scope — or require physician supervision — in another. **Your employer’s word is not a legal defence.**',
  blocks: [
    { t: 'note', tone: 'warn', text: MED_STATE_SCOPE },
    { t: 'h2', id: 'why-it-varies', text: 'Why it varies so much' },
    {
      t: 'ul',
      items: [
        '**Licensing is state-by-state, not federal.** There is no national standard to fall back on.',
        '**Each state board sets its own scope**, and they were not written in coordination.',
        '**Device rules differ sharply**, especially for lasers and other energy-based devices.',
        '**Supervision requirements differ** — some services are permitted only under physician oversight.',
        '**Rules change.** Boards update regulations, and what was true when you trained may not be true now.',
      ],
    },
    { t: 'h2', id: 'typically-in-scope', text: 'Typically within scope (verify locally)' },
    {
      t: 'table',
      head: ['Service', 'Note'],
      rows: [
        ['Facials and cleansing', 'Widely permitted'],
        ['Superficial chemical exfoliation', 'Depth and strength limits vary'],
        ['Extractions', 'Widely permitted'],
        ['Waxing and hair removal', 'Widely permitted'],
        ['Makeup application', 'Widely permitted'],
        ['Product recommendations', 'Not medical advice or diagnosis'],
      ],
    },
    { t: 'h2', id: 'commonly-restricted', text: 'Commonly restricted or highly variable' },
    {
      t: 'table',
      head: ['Service', 'Note'],
      rows: [
        ['Laser and IPL', 'Highly state-dependent; often requires separate credentialing or supervision'],
        ['Microneedling', 'Varies substantially — restricted or prohibited in some states'],
        ['Medium and deep peels', 'Often physician-supervised'],
        ['Dermaplaning', 'Permitted in some states, not others'],
        ['Injectables', 'Outside esthetician scope everywhere'],
        ['Diagnosing skin conditions', 'Outside scope everywhere'],
        ['Prescribing', 'Outside scope everywhere'],
      ],
    },
    {
      t: 'p',
      text: 'Chemical peels are the service where the depth question matters most, and where the rules are most granular. [Who Can Legally Perform Chemical Peels?](/en/who-can-perform-chemical-peels) goes through scope by peel depth specifically.',
    },
    { t: 'h2', id: 'lines-that-never-move', text: 'The lines that never move' },
    {
      t: 'table',
      head: ['Never within an esthetician’s scope', 'Why'],
      rows: [
        ['Diagnosing a condition', 'That is the practice of medicine'],
        ['Prescribing', 'Requires prescriptive authority'],
        ['Injectables', 'Outside scope in every state'],
        ['Treating a disease', 'Medical practice regardless of setting'],
        ['Telling a client to stop a prescribed treatment', 'Interfering with medical care'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Where well-meaning advice becomes diagnosis',
      text: '"This looks like X, you should treat it with Y" is diagnosis, even said kindly and even when you turn out to be right. The safe phrasing is: "I would recommend seeing a dermatologist about that."',
    },
    { t: 'h2', id: 'how-to-verify', text: 'How to verify your own scope' },
    {
      t: 'ol',
      items: [
        '**Go directly to your state board’s website** — the only authoritative source.',
        '**Find the current regulations**, not a summary article about them.',
        '**Check the effective date.** Rules change, and outdated summaries circulate for years.',
        '**Contact the board directly** if anything is ambiguous. They answer these questions routinely.',
        '**Re-check when you move states.** Your license and your scope may both change.',
        '**Re-check before adding any new service** to your menu.',
      ],
    },
    {
      t: 'p',
      text: 'Step two is the one people skip. Summaries — including this page — are written at a point in time and cannot account for fifty sets of regulations that update independently. Treat any secondary source as a prompt to go look, not as the answer. The same caution applies to anything a program tells you during enrolment: see [How to Become a Medical Esthetician](/en/how-to-become-medical-esthetician).',
    },
    { t: 'h2', id: 'why-it-matters', text: 'Why it matters' },
    {
      t: 'table',
      head: ['Risk of working outside scope', 'Note'],
      rows: [
        ['License suspension or revocation', 'The career-ending outcome'],
        ['Fines', 'Board-imposed'],
        ['Insurance refusing a claim', 'Coverage typically excludes acts outside scope'],
        ['Civil liability', 'Personal exposure'],
        ['Criminal exposure in some cases', 'Unlicensed practice of medicine'],
      ],
    },
    {
      t: 'p',
      text: 'The insurance row is the one that surprises people. A policy generally will not cover a claim arising from something you were not permitted to do — so the moment you most need coverage is the moment it is most likely to be denied.',
    },
    {
      t: 'p',
      text: '"My employer told me it was fine" has not protected practitioners. The license is yours, the board’s relationship is with you, and the consequences follow you to your next job. See [Medical Esthetician vs Esthetician](/en/medical-esthetician-vs-esthetician) for how this plays out in medical settings, where the pressure to stretch scope is highest.',
    },
  ],
  faq: [
    { q: 'What can an esthetician do?', a: 'It depends on your state — scope varies significantly, and only your state board can answer authoritatively.' },
    { q: 'Can estheticians do microneedling?', a: 'It varies substantially by state. Some restrict it, some prohibit it, some permit it under supervision.' },
    { q: 'Can estheticians use lasers?', a: 'Highly state-dependent, often requiring separate credentialing or physician supervision.' },
    { q: 'Can an esthetician diagnose skin conditions?', a: 'No — that is outside scope everywhere. Refer the client to a dermatologist.' },
    { q: 'Where do I check my scope?', a: 'Your state board’s website, directly, checking the effective date. Summaries including this one are not authoritative.' },
  ],
  related: [
    { href: '/en/what-is-a-medical-esthetician', label: 'What Is a Medical Esthetician?' },
    { href: '/en/medical-esthetician-vs-esthetician', label: 'Medical Esthetician vs Esthetician: Compared' },
    { href: '/en/who-can-perform-chemical-peels', label: 'Who Can Legally Perform Chemical Peels?' },
  ],
}
