import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, FX_NOTE } from './common'

export const skinClinicVsSalon: EnPage = {
  path: '/en/skin-clinic-vs-salon',
  title: 'Skin Clinic vs Beauty Salon in Korea: Which to Book (2026)',
  h1: 'Skin Clinic vs Beauty Salon in Korea',
  description:
    'Korea draws a hard legal line between dermatology clinics and beauty skin-care shops. What each one is allowed to do, what it costs, and how to tell which one your treatment belongs to.',
  keywords: [
    'skin clinic Korea',
    'Korean dermatology clinic',
    'esthetic Korea',
    'Korean skin care salon',
    'dermatology vs esthetician Korea',
    'K-beauty facial Seoul',
  ],
  category: 'Korea Beauty Guide',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'Korea separates skin treatment into two legally distinct worlds: **medical clinics** run by doctors, and **beauty shops** run by licensed skin-care technicians. Lasers, injections and anything described as treatment belong to the first. Knowing which one you need saves both money and trouble.',
  blocks: [
    {
      t: 'h2',
      id: 'the-line',
      text: 'The line, and why it is drawn so hard',
    },
    {
      t: 'p',
      text: 'In many countries a "medi-spa" can sit anywhere on the spectrum between a facial and a laser. Korea does not allow that middle ground. A dermatology clinic is a medical institution operating under medical law with a licensed physician. A skin-care shop is a beauty business operating under the Public Health Control Act with a national cosmetology (skin) licence holder.',
    },
    {
      t: 'p',
      text: 'The practical consequence: a beauty shop cannot legally operate medical devices, break the skin, inject anything, or claim to treat a condition. Not "should not" — cannot. This is enforced, and it is the single most useful thing for a visitor to understand, because it tells you instantly whether a shop advertising a service is operating within its licence.',
    },
    {
      t: 'table',
      caption: 'What belongs where',
      head: ['Treatment', 'Clinic (medical)', 'Beauty shop'],
      rows: [
        ['Laser (toning, resurfacing, hair removal)', 'Yes', 'No'],
        ['Botox, fillers, skin boosters', 'Yes', 'No'],
        ['Medical-grade chemical peel', 'Yes', 'No'],
        ['Microneedling that draws blood', 'Yes', 'No'],
        ['Prescription products', 'Yes', 'No'],
        ['Extraction facial', 'Yes', 'Yes'],
        ['Aqua peel / hydra-type cleansing', 'Yes', 'Yes'],
        ['Massage, lymphatic drainage', 'Rarely', 'Yes'],
        ['Cosmetic-grade peels and enzymes', 'Yes', 'Yes'],
        ['Waxing', 'No', 'Yes'],
        ['Acne care (non-medical)', 'Yes', 'Yes'],
      ],
      note:
        'If a beauty shop offers you a laser, an injection, or anything described as curing a condition, it is operating outside its licence. That is a reason to walk out, not a bargain.',
    },
    {
      t: 'h2',
      id: 'costs',
      text: 'What each one costs',
    },
    {
      t: 'p',
      text: 'Clinics are not uniformly more expensive. Korean dermatology is competitive and high-volume, and entry-level clinic procedures often cost less than a premium salon facial. Where clinics get expensive is packages and repeat courses.',
    },
    {
      t: 'table',
      caption: 'Typical prices, Seoul 2026',
      head: ['Service', 'Where', 'KRW', 'Approx. USD'],
      rows: [
        ['Basic facial (60-90 min)', 'Beauty shop', '50,000 - 120,000', '$36 - 86'],
        ['Aqua peel', 'Either', '50,000 - 150,000', '$36 - 107'],
        ['Acne care course (per session)', 'Beauty shop', '60,000 - 130,000', '$43 - 93'],
        ['Body / lymphatic care', 'Beauty shop', '70,000 - 200,000', '$50 - 143'],
        ['Laser toning (single)', 'Clinic', '30,000 - 100,000', '$21 - 71'],
        ['Skin booster injection', 'Clinic', '100,000 - 400,000', '$71 - 286'],
        ['Botox (per area)', 'Clinic', '50,000 - 200,000', '$36 - 143'],
        ['Consultation', 'Clinic', 'Often free', '—'],
      ],
      note: FX_NOTE,
    },
    {
      t: 'note',
      title: 'Foreigners and clinic pricing',
      text:
        'Cosmetic procedures are not covered by Korean national health insurance for anyone, so residents and visitors pay the same list price. Some clinics do have separate foreigner pricing or agency commissions built in — booking directly rather than through a tour agency generally costs less. Tourists can often claim a VAT refund on cosmetic procedures at participating clinics; ask before you pay.',
    },
    {
      t: 'h2',
      id: 'choosing',
      text: 'How to choose for your actual problem',
    },
    {
      t: 'h3',
      text: 'Go to a beauty shop for',
    },
    {
      t: 'ul',
      items: [
        '**Maintenance and comfort.** Deep cleansing, hydration, massage, relaxation. Beauty shops are far better at the experience side and sessions run 60-90 minutes rather than a clinic’s 15.',
        '**Congestion and blackheads.** Manual extraction and aqua-peel style cleansing is exactly what a skin-care technician is trained for.',
        '**Body work.** Lymphatic drainage, back care, contour massage. Clinics rarely offer these.',
        '**Waxing.** A medical clinic will not do it.',
        '**Ongoing courses.** Packages of 5-10 sessions at 20-30% off are the normal purchase for residents.',
      ],
    },
    {
      t: 'h3',
      text: 'Go to a clinic for',
    },
    {
      t: 'ul',
      items: [
        '**Anything with a diagnosis attached.** Active acne, rosacea, melasma, dermatitis. A technician is not permitted to diagnose or treat, and delaying real treatment makes these worse.',
        '**Pigment and texture.** Laser toning, resurfacing, and pigment work are medical procedures here.',
        '**Injectables and lifting devices.** Botox, fillers, skin boosters, and high-intensity focused ultrasound.',
        '**Permanent hair removal.** Laser is medical only.',
        '**Results on a deadline.** Clinic procedures act faster; salon courses act gradually.',
      ],
    },
    {
      t: 'h2',
      id: 'checking',
      text: 'How to verify what you are walking into',
    },
    {
      t: 'ol',
      items: [
        '**Read the name.** Pibugwa means dermatology and is a medical specialty. Pibu-gwallisil, Eseutetik, Seukinkeeo are beauty shops. A place calling itself Uiwon (clinic) is medical.',
        '**Look for the doctor.** Medical institutions display the physician’s licence and the institution’s opening certificate. Beauty shops display a business report certificate and a cosmetology licence — different documents.',
        '**Check what is being promised.** Language like "treats", "cures", "medical" from a beauty shop is a licensing problem. Korean beauty shops are legally required to avoid medical claims, and the careful ones are visibly careful about wording.',
        '**Ask what device is being used.** Medical device categories cannot be operated by a beauty shop. A vague answer is an answer.',
        '**Prefer clinics that price per procedure.** A clinic quoting only in multi-session packages before examining you is selling, not treating.',
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'The grey-zone shops',
      text:
        'A small number of shops do operate medical devices without medical status. The risk is not just legal — if something goes wrong there is no physician on site and no medical liability chain. If a facial-priced shop offers you laser or injectables, that is the clearest possible signal to leave.',
    },
    {
      t: 'h2',
      id: 'combining',
      text: 'Using both, which is what Koreans actually do',
    },
    {
      t: 'p',
      text: 'The common domestic pattern is not choosing one — it is a clinic for the intervention and a beauty shop for the upkeep between visits. Laser toning every four to six weeks at a clinic, a hydrating or cleansing facial at a salon in between, and prescription topicals from the clinic running throughout.',
    },
    {
      t: 'p',
      text: 'If you are visiting Korea for a short trip and want one appointment, the answer is usually a beauty-shop facial or an aqua peel: no downtime, no aftercare complications on a flight, and no follow-up appointment you cannot attend. Save clinic procedures for a longer stay, since most of them assume a review visit.',
    },
  ],
  faq: [
    {
      q: 'What is the difference between a Korean skin clinic and a beauty salon?',
      a: 'A dermatology clinic is a medical institution run by a licensed physician and can perform lasers, injections, medical peels and anything that breaks the skin. A skin-care shop is a beauty business run by a licensed skin-care technician and is limited to non-medical care: facials, extraction, massage, cosmetic-grade peels and waxing.',
    },
    {
      q: 'Can a Korean beauty salon do laser treatments?',
      a: 'No. Laser procedures, including laser hair removal, are medical in Korea and must be performed at a clinic under a doctor. A beauty shop offering laser is operating outside its licence, and there is no physician on site if something goes wrong.',
    },
    {
      q: 'Is a Korean dermatology clinic more expensive than a salon?',
      a: 'Not necessarily. Korean dermatology is high-volume and competitive, so entry-level clinic procedures such as laser toning start around 30,000-100,000 KRW — often less than a premium salon facial. Clinics get expensive through multi-session packages and injectables, not through single basic procedures.',
    },
    {
      q: 'Do foreigners pay more at Korean skin clinics?',
      a: 'Cosmetic procedures are outside national health insurance for everyone, so the list price is the same. What raises the price is booking through a tour agency, which adds commission. Booking directly is usually cheaper, and tourists can often claim a VAT refund at participating clinics — ask before paying.',
    },
    {
      q: 'Which should I book for a one-off visit to Seoul?',
      a: 'A beauty-shop facial or aqua peel is the safer choice for a short trip: no downtime, nothing that complicates a flight, and no follow-up visit you cannot attend. Most clinic procedures assume a review appointment, so they suit longer stays.',
    },
    {
      q: 'How do I tell whether a place is medical or not?',
      a: 'Read the Korean name. Pibugwa and Uiwon indicate a medical institution; Pibu-gwallisil, Eseutetik and Seukinkeeo indicate a beauty shop. Medical institutions display a physician licence and an institution opening certificate, while beauty shops display a business report certificate and a cosmetology licence. And check the wording — legally, a beauty shop cannot claim to treat or cure anything.',
    },
  ],
  related: [
    { href: '/en/aqua-peel', label: 'What Is Aqua Peel?' },
    { href: '/en/waxing-korea', label: 'Waxing in Korea: Prices by Area' },
    { href: '/en/semi-permanent-makeup-korea', label: 'Semi-Permanent Makeup in Korea' },
    { href: '/en/beauty-license-korea', label: 'Korean Cosmetology Licence Explained' },
  ],
}
