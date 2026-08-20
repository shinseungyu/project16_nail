import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, FX_NOTE } from './common'

export const beautyLicenseKorea: EnPage = {
  path: '/en/beauty-license-korea',
  title: 'Korean Cosmetology Licence Explained for Foreigners (2026)',
  h1: 'Korean Cosmetology Licence Explained',
  description:
    'The five Korean beauty licence categories, how the national exam works, exam fees and pass rates for 2026, what foreigners need to sit it, and why private certificates carry no legal weight.',
  keywords: [
    'Korean cosmetology license',
    'Korean cosmetology license for foreigners',
    'beauty license Korea',
    'nail license Korea',
    'Korean beautician license exam',
    'Q-Net beauty exam',
  ],
  category: 'Working in Korean Beauty',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'Korea requires a **national technical qualification** to perform beauty services professionally — not a private certificate, and not an academy diploma. The exam is run by HRD Korea four times a year, costs about 41,400 KRW in total, and has no education, age or nationality requirement to sit.',
  blocks: [
    {
      t: 'h2',
      id: 'categories',
      text: 'Five licences, not one',
    },
    {
      t: 'p',
      text: 'Korea does not issue a single "beauty licence". It issues separate national qualifications by discipline, and each one authorises only its own scope of work. This trips people up constantly: a nail licence does not let you cut hair, and a cosmetology licence does not let you run a barber business.',
    },
    {
      t: 'table',
      caption: 'The national qualifications',
      head: ['Licence', 'Korean', 'Covers'],
      rows: [
        ['Cosmetologist (Hair)', '미용사(일반)', 'Cutting, colour, perms — standard salon work'],
        ['Cosmetologist (Skin)', '미용사(피부)', 'Facials, skin care, waxing, body care'],
        ['Cosmetologist (Nail)', '미용사(네일)', 'Manicure, pedicure, gel, extensions, nail art'],
        ['Cosmetologist (Makeup)', '미용사(메이크업)', 'Makeup, character makeup, lash extensions'],
        ['Barber', '이용사', 'Barber business, including the traditional razor shave'],
      ],
      note:
        'The barber licence sits under a legally separate business category (이용업) from the beauty business category (미용업). One does not substitute for the other in either direction.',
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Private certificates have no legal effect',
      text:
        'Academies and associations in Korea and abroad sell nail, lash and skin certificates. None of them satisfy Korean law. Only the national technical qualification issued through Q-Net allows you to file a beauty business report or to be legally employed performing beauty services. A foreign qualification — including a US state cosmetology licence — does not transfer.',
    },
    {
      t: 'h2',
      id: 'exam',
      text: 'How the exam works',
    },
    {
      t: 'p',
      text: 'All five qualifications follow the same structure: a written exam, then a practical exam. Both are administered by the Human Resources Development Service of Korea (한국산업인력공단) and applied for through the Q-Net portal.',
    },
    {
      t: 'table',
      caption: 'Exam structure and 2026 fees',
      head: ['', 'Written (필기)', 'Practical (실기)'],
      rows: [
        ['Format', '60 multiple-choice questions, 4 subjects', 'Hands-on tasks, timed'],
        ['Pass mark', '60 points (36 of 60 correct)', '60 points'],
        ['Fee', '14,500 KRW', '26,900 KRW'],
        ['Typical pass rate', 'About 60%', 'About 50%'],
        ['Held', '4 times a year (quarterly)', '4 times a year'],
        ['Language', 'Korean only', 'Korean only'],
      ],
      note: FX_NOTE,
    },
    {
      t: 'ul',
      items: [
        '**No eligibility bar.** There is no education, age or experience requirement to sit the exam.',
        '**Written validity is two years.** Once you pass the written paper you have two years to pass the practical, or the written result lapses.',
        '**You can sit both in the same round** if you are prepared for it.',
        '**Written subjects** vary by discipline but follow a common shape: the discipline’s theory, dermatology or skin science, public health, and cosmetics science.',
        '**Typical timeline:** one to two months preparing for the written exam, two to four months for the practical — three to six months in total for most candidates.',
      ],
    },
    {
      t: 'h2',
      id: 'foreigners',
      text: 'What foreigners specifically need to know',
    },
    {
      t: 'p',
      text: 'This is the part that is genuinely underserved in English, and where the details matter. Three separate things are often confused: sitting the exam, holding the licence, and being permitted to work.',
    },
    {
      t: 'h3',
      text: '1. Sitting the exam',
    },
    {
      t: 'p',
      text: 'Nationality is not an eligibility criterion. What you practically need is a Korean identity number for the Q-Net application — for foreign residents, the alien registration number issued when you register your residence. The exam itself is conducted **in Korean only**, with no English paper and no interpretation in the practical, so Korean reading ability at a functional level is the real barrier rather than any rule.',
    },
    {
      t: 'h3',
      text: '2. Being issued the licence',
    },
    {
      t: 'p',
      text: 'Passing the exam gives you the qualification. The licence itself (면허) is then applied for at the city, county or district office where you reside. Certain grounds — including specified health conditions and drug-related disqualifications set out in the Public Health Control Act — bar issuance regardless of exam results.',
    },
    {
      t: 'h3',
      text: '3. Being allowed to work',
    },
    {
      t: 'p',
      text: 'A licence is not a work permit. Employment depends entirely on your visa status, and this is where most plans actually stall.',
    },
    {
      t: 'ul',
      items: [
        '**F-series residence statuses** (such as marriage-based, permanent residency, or overseas Korean statuses) generally permit employment without a separate work permit. If you hold one of these, the licence is genuinely the only obstacle.',
        '**E-7 (specific occupation)** requires an employer sponsor and approval for the specific role, and beauty service roles are not straightforward to get approved.',
        '**D-2 student and D-4 language study** statuses do not permit ordinary employment; part-time work requires separate permission and is limited in scope and hours.',
        '**Short-term and tourist statuses** do not permit paid work of any kind.',
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Verify immigration rules at the source',
      text:
        'Visa categories, permitted activities and part-time work rules change, and the consequences of getting them wrong fall on you rather than on your employer. Confirm your specific situation with **Hi Korea** or the Immigration Contact Center (1345, multilingual) before committing time or money to a licence path. Nothing on this page is immigration advice.',
    },
    {
      t: 'h2',
      id: 'why-required',
      text: 'Why the licence is not optional',
    },
    {
      t: 'p',
      text: 'Some visitors assume Korean licensing works like a professional credential — nice to have, competitively useful. It does not. It is a statutory requirement with penalties attached.',
    },
    {
      t: 'ul',
      items: [
        'Under the **Public Health Control Act, Article 8(1)**, performing beauty services without the licence is prohibited, and **Article 20** sets a fine of up to **3 million KRW**.',
        'Operating a shop without filing the business report under **Article 3(1)** carries up to **1 year imprisonment or a 10 million KRW fine**.',
        'A beauty business report will not be accepted without a licence certificate, so opening a shop without one is not administratively possible in the first place.',
        'For a foreign national, an offence of this kind can also carry immigration consequences separate from the fine.',
      ],
    },
    {
      t: 'h2',
      id: 'realistic',
      text: 'A realistic assessment of the path',
    },
    {
      t: 'p',
      text: 'If you already hold an F-series status and read Korean comfortably, this is a three-to-six-month project with a total exam cost of about 41,400 KRW plus academy fees if you use one — a genuinely accessible route into a licensed profession.',
    },
    {
      t: 'p',
      text: 'If you are outside Korea with no residence status and no Korean, the licence is the easiest part of the problem. Immigration status is the constraint that decides whether the rest is possible, and it is worth resolving that question first rather than after passing an exam. The practical sequence for most people is: secure a status that permits employment, reach functional Korean, then take the exam.',
    },
    {
      t: 'p',
      text: 'If your goal is to open your own shop rather than to be employed, the requirements stack — licence, business report, and a status that permits business activity. That path is covered separately in our guide to opening a salon in Korea.',
    },
  ],
  faq: [
    {
      q: 'Can foreigners get a Korean cosmetology licence?',
      a: 'Yes — nationality is not an eligibility criterion for the national exam, and there is no education, age or experience requirement either. What you practically need is a Korean identity number for the Q-Net application. The real barrier is language: the written and practical exams are conducted in Korean only, with no English paper and no interpretation.',
    },
    {
      q: 'How much does the Korean beauty licence exam cost?',
      a: 'In 2026 the written exam is 14,500 KRW and the practical is 26,900 KRW, so about 41,400 KRW in total. Academy tuition, if you use one, is a separate and much larger cost. The exam is held four times a year through Q-Net.',
    },
    {
      q: 'Does a Korean cosmetology licence let me work in Korea?',
      a: 'No — a licence and a work permit are different things. Employment depends on your visa status. F-series residence statuses generally permit work; E-7 requires an employer sponsor and approval for the specific role; student and short-term statuses do not permit ordinary employment. Confirm your own case with Hi Korea or the Immigration Contact Center on 1345.',
    },
    {
      q: 'Is one licence enough for nails, hair and skin?',
      a: 'No. Korea issues separate national qualifications for hair, skin, nails, makeup and barbering, and each authorises only its own scope. A nail licence does not cover hair, and the barber licence sits under a legally separate business category from the beauty category, so neither substitutes for the other.',
    },
    {
      q: 'Will my foreign cosmetology licence be recognised in Korea?',
      a: 'No. Foreign qualifications, including US state cosmetology licences, do not transfer. Neither do private certificates from Korean or international academies and associations. Only the national technical qualification obtained through Q-Net has legal effect for filing a beauty business report or working legally.',
    },
    {
      q: 'How long does it take to get the licence?',
      a: 'Three to six months is typical — one to two months preparing for the written exam and two to four months for the practical. Written pass rates run around 60% and practical around 50%. Once you pass the written paper you have two years to pass the practical before the written result lapses.',
    },
    {
      q: 'What happens if I work without a licence?',
      a: 'Under the Public Health Control Act, Article 8(1), performing beauty services without a licence is prohibited and Article 20 sets a fine of up to 3 million KRW. Operating a shop without filing the business report carries up to 1 year imprisonment or a 10 million KRW fine. For a foreign national there can also be immigration consequences separate from the fine.',
    },
  ],
  related: [
    { href: '/en/work-beauty-industry-korea', label: 'Working in Korea’s Beauty Industry' },
    { href: '/en/open-beauty-salon-korea', label: 'Opening a Salon in Korea (Foreigners)' },
    { href: '/en/skin-clinic-vs-salon', label: 'Skin Clinic vs Beauty Salon in Korea' },
    { href: '/en', label: 'Korea Beauty Guide: start here' },
  ],
}
