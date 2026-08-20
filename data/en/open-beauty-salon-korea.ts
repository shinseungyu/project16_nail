import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, FX_NOTE } from './common'

export const openBeautySalonKorea: EnPage = {
  path: '/en/open-beauty-salon-korea',
  title: 'Opening a Beauty Salon in Korea as a Foreigner (2026)',
  h1: 'Opening a Salon in Korea (Foreigners)',
  description:
    'What it costs to open a nail, skin, makeup or hair salon in Korea in 2026, the licence and business report you must file, the deposit and key money system, and the residence status question that comes first.',
  keywords: [
    'open beauty salon Korea',
    'open salon in Korea foreigner',
    'Korea salon startup cost',
    'beauty business Korea',
    'nail salon startup Korea',
    'Korea business visa salon',
  ],
  category: 'Working in Korean Beauty',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'A one-person nail studio in Korea opens for roughly **14-15 million KRW (about $10,000)**; a hair salon needs closer to 28 million and a skin-care shop 31 million. The capital is not usually the obstacle — the licence and your residence status are.',
  blocks: [
    {
      t: 'h2',
      id: 'prerequisites',
      text: 'Three things you need before the money matters',
    },
    {
      t: 'ol',
      items: [
        '**A residence status that permits business activity.** F-series statuses generally allow it. Otherwise, the corporate investment route (D-8) exists but carries a substantial minimum foreign direct investment — commonly cited at 100 million KRW — and its own approval process. Student and visitor statuses do not permit running a business.',
        '**The national cosmetology licence** for the discipline you intend to operate in. The beauty business report will not be accepted without it, so this is a hard gate rather than a preference.',
        '**Functional Korean.** Lease negotiation, the district office filing, tax registration, supplier relationships and customer consultation all happen in Korean. This is the requirement people most consistently underestimate.',
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Confirm the immigration side first',
      text:
        'Investment thresholds, permitted activities and business-status conditions change, and getting them wrong is expensive after you have signed a lease. Verify your specific situation with **Hi Korea** or the Immigration Contact Center (1345, multilingual), and consider a licensed administrative scrivener (행정사) for the filings. Nothing on this page is immigration or legal advice.',
    },
    {
      t: 'h2',
      id: 'cost',
      text: 'What it costs to open',
    },
    {
      t: 'p',
      text: 'Korean startup costs are low by international standards, mainly because the dominant format is a small owner-operated studio rather than a multi-chair salon. The figures below are working baselines for a single-operator shop.',
    },
    {
      t: 'table',
      caption: 'Baseline startup capital by discipline, 2026',
      head: ['Type', 'Total (KRW)', 'Approx. USD', 'Main cost driver'],
      rows: [
        ['Nail studio', 'about 14,800,000', 'about $10,600', 'Lowest equipment load'],
        ['Makeup studio', 'about 15,000,000', 'about $10,700', 'Lighting, products, mirrors'],
        ['Hair salon', 'about 28,000,000', 'about $20,000', 'Chairs, basins, plumbing'],
        ['Skin-care shop', 'about 31,500,000', 'about $22,500', 'Beds, devices, water supply and drainage'],
      ],
      note: FX_NOTE,
    },
    {
      t: 'table',
      caption: 'Where the money goes — a one-person nail studio example',
      head: ['Item', 'KRW', 'Note'],
      rows: [
        ['Deposit (보증금)', '5,000,000 - 20,000,000', 'Refundable; varies hugely by area'],
        ['Key money (권리금)', '0 - 30,000,000+', 'Not refundable. Avoidable in a new unit'],
        ['Interior fit-out', '3,000,000 - 15,000,000', 'Depends on the state of the unit'],
        ['Equipment and furniture', '2,000,000 - 5,000,000', 'Table, lamps, dust collector, sterilizer'],
        ['Initial product stock', '1,500,000 - 4,000,000', 'Gels, tools, consumables'],
        ['Signage and branding', '500,000 - 2,000,000', ''],
        ['Registration and filing', '100,000 - 500,000', 'Business registration, hygiene training, report'],
        ['Operating buffer (3 months)', '3,000,000 - 6,000,000', 'Rent, utilities, living costs before revenue'],
      ],
      note:
        'Monthly rent is separate and typically 800,000-3,000,000 KRW for a small unit depending on area and floor. Upper floors cost substantially less than street level and are the norm for beauty studios.',
    },
    {
      t: 'note',
      title: 'Deposit and key money — the two-part Korean lease',
      text:
        'Korean commercial leases run on a large refundable **deposit (보증금)** plus monthly rent. Separately, an existing tenant may demand **key money (권리금)** — a non-refundable payment for the location, fit-out and existing customer base. Key money is not legally required and is negotiable, but it is customary and can exceed the entire rest of your budget. Taking a raw unit avoids it at the cost of a bigger fit-out.',
    },
    {
      t: 'h2',
      id: 'process',
      text: 'The filing process, in order',
    },
    {
      t: 'ol',
      items: [
        '**Obtain the cosmetology licence.** Pass the Q-Net national exam, then apply to your city, county or district office for issuance.',
        '**Find the unit and check the zoning before signing.** Not every building permits a beauty business, and the facility standards under the Public Health Control Act enforcement rules must be satisfiable in that space. Confirm with the district office hygiene division first — this is the step people skip and regret.',
        '**Sign the lease.** Deposit and any key money settled here.',
        '**Complete the fit-out** to the facility and equipment standards for your discipline, including sanitation provisions.',
        '**Complete hygiene education.** Required before commencing business.',
        '**Register the business (사업자등록)** with the tax office, usually online through Hometax.',
        '**File the beauty business report (미용업 신고)** with the district office hygiene division, submitting the licence certificate, lease, facility documents and hygiene training record.',
        '**Open.** Registration for card payment processing, the Naver Place listing and a booking channel are what actually bring customers.',
      ],
    },
    {
      t: 'p',
      text: 'Total elapsed time from licence in hand to opening is commonly two to four months, with the lease search usually the longest single step.',
    },
    {
      t: 'h2',
      id: 'legal',
      text: 'The legal obligations that carry penalties',
    },
    {
      t: 'ul',
      items: [
        'Operating without filing the business report under **Article 3(1)** of the Public Health Control Act carries up to **1 year imprisonment or a 10 million KRW fine**.',
        'Performing beauty services without a licence, under **Article 8(1)**, carries a fine of up to **3 million KRW** under Article 20.',
        'Facility and sanitation standards are inspected, and violations attract administrative sanctions up to business suspension.',
        'Advertising medical effects from a beauty business — treating, curing, or medical device use — is prohibited and separately enforced.',
        'Employing anyone unlicensed to perform beauty services exposes the business, not just the employee.',
      ],
    },
    {
      t: 'h2',
      id: 'economics',
      text: 'The economics of a one-person studio',
    },
    {
      t: 'p',
      text: 'The reason Korean beauty startups are cheap to open is also the reason they are hard to grow: a single practitioner has a hard ceiling on chargeable hours. The realistic model is not volume, it is repeat customers at a decent average ticket.',
    },
    {
      t: 'table',
      caption: 'Illustrative monthly picture — nail studio, 24 working days',
      head: ['Line', 'Figure', 'Basis'],
      rows: [
        ['Customers per day', '4 - 6', '60 - 90 min per service'],
        ['Average ticket', '50,000 - 70,000 KRW', 'Gel set with light art'],
        ['Monthly revenue', '5,000,000 - 9,000,000 KRW', '24 days at 4-6 clients'],
        ['Rent and utilities', '1,000,000 - 3,500,000 KRW', ''],
        ['Materials', '10 - 15% of revenue', ''],
        ['Net income', '2,500,000 - 4,500,000 KRW', 'Before tax, at a stable client base'],
        ['Time to break even', '3 - 12 months', 'Longer for skin and hair, higher capital'],
      ],
      note:
        'These are modelled figures for planning, not measured results. The first three months typically run well below capacity because a new studio has no repeat book yet — plan the operating buffer around that, not around the steady state.',
    },
    {
      t: 'h2',
      id: 'assessment',
      text: 'Should you actually do this?',
    },
    {
      t: 'p',
      text: 'The honest version has three cases.',
    },
    {
      t: 'ul',
      items: [
        '**F-series status, Korean fluency, licence in hand:** entirely viable. The capital requirement is genuinely low, the regulatory path is clear, and the one-person studio model is proven at scale across the country.',
        '**Overseas, planning to invest your way in:** the D-8 route exists but the investment threshold and approval process make a small salon an awkward fit for it, and the language requirement does not go away. Get specific professional advice before assuming this works.',
        '**Considering it as a way to obtain residence:** this is the case that most often fails. A small beauty business is not a reliable immigration strategy, and building one while your status is uncertain compounds two hard problems instead of solving either.',
      ],
    },
    {
      t: 'p',
      text: 'If you are working through the licence question first, that is the right order — it is covered in detail on our cosmetology licence page, along with what the exam involves and what it costs.',
    },
  ],
  faq: [
    {
      q: 'How much does it cost to open a salon in Korea?',
      a: 'A one-person nail studio opens for roughly 14.8 million KRW (about $10,600) and a makeup studio for about 15 million. A hair salon runs closer to 28 million and a skin-care shop about 31.5 million, driven by chairs, basins, beds and plumbing. Monthly rent of 800,000-3,000,000 KRW is separate.',
    },
    {
      q: 'Can a foreigner open a beauty salon in Korea?',
      a: 'Yes, if your residence status permits business activity — F-series statuses generally do. Otherwise the corporate investment route (D-8) exists but carries a substantial minimum investment, commonly cited at 100 million KRW, and its own approval process. You also need the Korean national cosmetology licence, without which the business report will not be accepted.',
    },
    {
      q: 'What is key money and do I have to pay it?',
      a: 'Key money (권리금) is a non-refundable payment to an existing tenant for the location, fit-out and customer base. It is customary but not legally required, and it is negotiable — it can also exceed your entire remaining budget. Taking a raw unit avoids it, at the cost of a larger fit-out spend.',
    },
    {
      q: 'What do I need to file to open legally?',
      a: 'Business registration with the tax office, and a beauty business report with your district office hygiene division. The report requires your licence certificate, the lease, facility documentation and proof of hygiene education. Operating without filing carries up to 1 year imprisonment or a 10 million KRW fine.',
    },
    {
      q: 'How long does the whole process take?',
      a: 'Two to four months from having the licence in hand to opening, with the lease search usually the longest step. Check zoning and whether the facility standards can be met in that specific unit with the district office before signing anything — that is the step people skip and regret.',
    },
    {
      q: 'How much can a one-person salon actually make?',
      a: 'For a nail studio at a stable client base, roughly 5-9 million KRW monthly revenue and 2.5-4.5 million net before tax, based on four to six clients a day over 24 working days at a 50,000-70,000 KRW average ticket. Break-even commonly falls between three and twelve months, later for hair and skin because the initial capital is higher.',
    },
    {
      q: 'Is opening a salon a route to residence in Korea?',
      a: 'Not reliably. A small beauty business is an awkward fit for the investment visa route, and building one while your residence status is unresolved compounds two difficult problems rather than solving either. Resolve the status question first and treat the business as a separate decision.',
    },
  ],
  related: [
    { href: '/en/beauty-license-korea', label: 'Korean Cosmetology Licence Explained' },
    { href: '/en/work-beauty-industry-korea', label: 'Working in Korea’s Beauty Industry' },
    { href: '/en/nail-salon-korea', label: 'Nail Salons in Korea: Prices and What to Expect' },
    { href: '/en', label: 'Korea Beauty Guide: start here' },
  ],
}
