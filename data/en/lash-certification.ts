import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, US_STATE_NOTE } from './common'

export const lashCertification: EnPage = {
  path: '/en/lash-certification',
  title: 'Lash Extension Certification vs License: What You Need',
  h1: 'Lash Certification vs License: The Difference That Matters',
  description:
    'A lash certification is not a license. Most states require a cosmetology or esthetics license to apply extensions. How to check what yours needs.',
  keywords: ['lash extension certification', 'do you need a license to do lashes', 'lash license requirements', 'lash training course'],
  category: 'Licensing & Training',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**A lash certificate from a training course is not a licence.** Most states require a cosmetology or esthetics licence to legally apply eyelash extensions. Certification demonstrates training; the licence is what makes the work lawful. Rules vary by state, so check yours.',
  blocks: [
    { t: 'note', tone: 'warn', text: US_STATE_NOTE },
    { t: 'h2', id: 'distinction', text: 'The distinction people miss' },
    {
      t: 'table',
      head: ['', 'Certification', 'License'],
      rows: [
        ['Issued by', 'Private training company or brand', 'State board'],
        ['Means', 'You completed a course', 'You are authorised to practise'],
        ['Required to work legally', 'Usually not sufficient on its own', 'Usually yes'],
        ['Regulated', 'No', 'Yes'],
      ],
    },
    {
      t: 'p',
      text: 'Lash training companies market heavily, and it is easy to come away believing a two-day certification is the credential you need. **In most states it is not.**',
    },
    { t: 'h2', id: 'state-patterns', text: 'What states typically require' },
    {
      t: 'table',
      head: ['Pattern', 'Description'],
      rows: [
        ['Esthetics or cosmetology licence required', 'Most common'],
        ['Separate lash-specific licence', 'Exists in some states'],
        ['Additional lash training on top of a licence', 'Some states specify this'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Do not rely on what a training provider tells you',
      text: 'They have a commercial interest in the answer. Verify with the state board directly, and get the requirement in writing from the board rather than from a course sales page.',
    },
    { t: 'h2', id: 'why-it-matters', text: 'Why it matters practically' },
    {
      t: 'p',
      text: 'This is not only a compliance question. Working without required licensure affects four concrete things:',
    },
    {
      t: 'ul',
      items: [
        '**Insurance.** Professional liability policies commonly require you to be properly licensed, and an unlicensed claim may not be covered.',
        '**Salon employment.** Most salons will not hire without a licence, regardless of your portfolio.',
        '**Legal exposure.** Unlicensed practice carries penalties in most jurisdictions.',
        '**Client safety recourse.** Eyes are involved. This is not a low-stakes area to be uninsured in.',
      ],
    },
    { t: 'h2', id: 'good-training', text: 'What good training covers' },
    {
      t: 'p',
      text: 'Certification still matters — it is how you learn the craft. The licence makes it lawful; the training makes it good. A worthwhile course covers:',
    },
    {
      t: 'table',
      head: ['Area', 'Why'],
      rows: [
        ['Isolation technique', 'The core skill; poor isolation damages natural lashes'],
        ['Adhesive chemistry', 'Humidity and temperature change cure behaviour dramatically'],
        ['Retention factors', 'The difference between happy and dissatisfied clients'],
        ['Client consultation and contraindications', 'Allergy history, contact lenses, eye conditions'],
        ['Sanitation and tool disinfection', ''],
        ['Safe removal', 'The main cause of natural lash damage'],
        ['Hands-on practice with live models', 'Mannequin-only training is not enough'],
      ],
    },
    {
      t: 'p',
      text: '**Avoid courses that are theory-only, or a single short day with no live models.** Isolation in particular cannot be learned on a mannequin, because a mannequin does not blink, water, or have lashes at different growth stages.',
    },
    { t: 'h2', id: 'insurance-practice', text: 'How insurance works in practice' },
    { t: 'p', text: 'Insurance is where the certification-versus-licence distinction stops being theoretical, because the policy conditions usually restate the state requirement.' },
    {
      t: 'table',
      head: ['Policy element', 'What it typically requires'],
      rows: [
        ['Licensure condition', 'That you hold the licence your state requires for the service'],
        ['Scope of covered services', 'Named services - lash lifts may need adding separately'],
        ['Consultation records', 'Some insurers expect documented client intake'],
        ['Patch testing', 'Sometimes expected, particularly for adhesive reactions'],
        ['Premises', 'Home studios may need to be declared'],
      ],
    },
    { t: 'p', text: '**Read the licensure condition before assuming you are covered.** A policy issued to someone working on a certificate alone, in a state that requires a licence, may not respond to a claim — which is precisely the situation where you need it to.' },
    { t: 'h2', id: 'choosing-course', text: 'Choosing a course' },
    { t: 'p', text: 'Training quality varies more than price does, and the differences that matter are not the ones most sales pages emphasise.' },
    {
      t: 'table',
      head: ['Compare', 'Better', 'Worse'],
      rows: [
        ['Live models', 'Multiple live models', 'Mannequin only'],
        ['Class size', 'Small, with individual correction', 'Large group demonstration'],
        ['Adhesive teaching', 'Humidity, temperature, cure behaviour', 'One recommended product'],
        ['Removal', 'Taught explicitly', 'Skipped or mentioned briefly'],
        ['Aftercare guidance', 'Provided as client-facing material', 'Left to you'],
        ['Post-course support', 'Follow-up on your early sets', 'None'],
      ],
    },
    { t: 'p', text: 'Isolation is the skill that separates safe lash work from damaging lash work, and it cannot be learned on a mannequin. A mannequin does not blink, water, or have lashes at four different growth stages, which is exactly the difficulty you are training for.' },
    { t: 'h2', id: 'brand-courses', text: 'Brand courses and what they are for' },
    { t: 'p', text: 'Many courses are run by adhesive or lash manufacturers. That is not a problem in itself, and the teaching is often good, but the incentive is worth understanding.' },
    { t: 'p', text: 'A brand course teaches the technique that works with that brand system. **That is useful training and it is not a substitute for the licence**, nor does it usually cover the regulatory question of whether you may perform the service at all in your state.' },
  ],
  faq: [
    {
      q: 'Do you need a license to do lashes?',
      a: 'In most states, yes — typically a cosmetology or esthetics licence. Requirements vary, so confirm with your state board rather than a training provider.',
    },
    {
      q: 'Is a lash certification the same as a license?',
      a: 'No. Certification shows you completed training from a private company. A licence is state authorisation to practise, and only the state board issues one.',
    },
    {
      q: 'Can I do lashes with just a certificate?',
      a: 'Generally not legally, in states that require licensure. It also affects insurance coverage and employability, so the practical cost is higher than the legal risk alone.',
    },
    {
      q: 'How long does lash training take?',
      a: 'Courses range from a couple of days to several weeks. Longer courses with live-model practice produce noticeably better outcomes than short mannequin-based ones.',
    },
    {
      q: 'Do I need insurance?',
      a: 'Strongly advisable. Eye-area work carries meaningful risk, and most policies require proper licensure for a claim to be covered.',
    },
    {
      q: 'Which certification is best?',
      a: 'This page does not recommend providers. Look for substantial hands-on hours with live models and clear coverage of adhesive science and retention.',
    },
  ],
  related: [
    { href: '/en/lash-tech-salary', label: 'How Much Do Lash Techs Make?' },
    { href: '/en/how-long-do-lash-extensions-last', label: 'How Long Do Lash Extensions Last?' },
    { href: '/en/cosmetology-license-requirements', label: 'Cosmetology License Requirements & Reciprocity' },
  ],
}
