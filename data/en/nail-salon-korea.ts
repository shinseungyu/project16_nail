import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, FX_NOTE } from './common'

export const nailSalonKorea: EnPage = {
  path: '/en/nail-salon-korea',
  title: 'Nail Salons in Korea: Prices & What to Expect (2026)',
  h1: 'Nail Salons in Korea: Prices and What to Expect',
  description:
    'What a nail appointment in Korea actually costs in 2026, how the appointment-only studio system works, how to book without Korean, and what to check before you sit down.',
  keywords: [
    'nail salon Seoul',
    'nail salon Korea',
    'Korean nail salon prices',
    'gel nails Seoul',
    'nail salon Seoul English',
    'manicure Korea price',
    'Seoul nail appointment',
  ],
  category: 'Korea Beauty Guide',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'A single-colour gel set in Seoul runs about **35,000-60,000 KRW (roughly $25-43)**, takes 60-90 minutes, and almost always requires an appointment booked in advance. Walk-in nail salons barely exist here — that is the single biggest surprise for visitors.',
  blocks: [
    {
      t: 'h2',
      id: 'prices',
      text: 'What a nail appointment actually costs',
    },
    {
      t: 'p',
      text: 'Korean nail salons price by service, not by time, and the base price almost never includes art. The ranges below are what independent one-chair studios and mid-tier shops charge in 2026. Department-store counters and celebrity-adjacent studios in Cheongdam sit above the top of these ranges; residential-neighbourhood shops sit near the bottom.',
    },
    {
      t: 'table',
      caption: 'Typical menu prices, 2026',
      head: ['Service', 'Seoul (KRW)', 'Approx. USD', 'Time'],
      rows: [
        ['Single-colour gel', '35,000 - 60,000', '$25 - 43', '60 - 90 min'],
        ['French / ombre gel', '45,000 - 75,000', '$32 - 54', '80 - 110 min'],
        ['Hand-painted art (per nail)', '3,000 - 15,000', '$2 - 11', '+5 - 20 min each'],
        ['Gel extensions (full set)', '80,000 - 150,000', '$57 - 107', '2 - 3 hrs'],
        ['Care only (cuticle + shape)', '20,000 - 35,000', '$14 - 25', '30 - 40 min'],
        ['Gel removal', '10,000 - 20,000', '$7 - 14', '20 - 30 min'],
        ['Gel pedicure', '50,000 - 90,000', '$36 - 64', '60 - 90 min'],
      ],
      note: FX_NOTE,
    },
    {
      t: 'note',
      title: 'The two charges people forget',
      text:
        'Removal of gel applied at another salon is usually billed separately (10,000-20,000 KRW), though many shops waive it if you are getting a new set the same day. And art is quoted **per nail** — a design you saw on Instagram across all ten fingers can add 30,000-100,000 KRW on top of the base price. Ask for the total before the file touches your nail.',
    },
    {
      t: 'h2',
      id: 'how-it-works',
      text: 'How Korean nail salons actually work',
    },
    {
      t: 'p',
      text: 'The dominant format in Korea is the one-person studio: a single technician, one or two chairs, often on the third or fourth floor of a mixed-use building rather than at street level. This is a direct consequence of how the industry is structured — a licensed technician can open a small shop with relatively modest capital, so the market fragmented into thousands of owner-operated studios instead of consolidating into chains.',
    },
    {
      t: 'p',
      text: 'What that means for you as a customer:',
    },
    {
      t: 'ul',
      items: [
        '**Appointments are mandatory.** One technician means one customer at a time. Turning up unannounced usually means being turned away, politely.',
        '**Sessions are long.** 60-90 minutes for a plain gel set is normal, and nobody rushes. Korean technicians spend a disproportionate amount of that time on cuticle work and surface prep.',
        '**The address is vertical.** Search results will say something like "3F" — the salon is upstairs. Look for the building number, then the floor directory by the entrance.',
        '**Shoes come off.** Many studios have a raised entry with slippers provided.',
        '**It is quiet.** These are not social spaces. Conversation is optional and many customers just watch a screen or nap.',
      ],
    },
    {
      t: 'h2',
      id: 'booking',
      text: 'Booking without speaking Korean',
    },
    {
      t: 'p',
      text: 'Almost no independent studio takes phone bookings in English, but almost all of them take text bookings — and text is far easier to handle with a translation app. Three routes work reliably:',
    },
    {
      t: 'ol',
      items: [
        '**Naver Map.** This, not Google Maps, is where Korean salons actually keep their information. Search Neil plus the neighbourhood name. Listings show real prices, real photos and a booking button. Naver Map has an English interface, though salon-written text stays in Korean.',
        '**Instagram DM.** Most one-person studios run their entire business from Instagram. The bio usually links to a booking page or a KakaoTalk channel. A DM in English asking "Do you have availability on [date] for a single colour gel set?" gets answered more often than not.',
        '**KakaoTalk channel.** If the salon has one, this is where confirmations and deposit requests happen. You will need a Korean phone number or an existing Kakao account.',
      ],
    },
    {
      t: 'note',
      title: 'Deposits are normal, not a scam',
      text:
        'Many studios ask for a 10,000-20,000 KRW deposit by bank transfer to hold a slot, deducted from the final bill. Because a no-show costs a one-person shop an entire booking block, this is standard practice. Cancellation windows are typically 24 hours; cancelling later usually forfeits the deposit.',
    },
    {
      t: 'h2',
      id: 'korean-style',
      text: 'What "Korean nails" actually means technically',
    },
    {
      t: 'p',
      text: 'The phrase gets used loosely overseas. Inside Korea it points at a specific set of technical habits that differ from the US and European norm.',
    },
    {
      t: 'h3',
      text: 'Care before colour',
    },
    {
      t: 'p',
      text: 'Korean technicians spend 15-25 minutes on the nail plate and cuticle before any product goes on — dry manicure with an e-file, cuticle pushed and trimmed, surface dehydrated. This is the main reason a Korean gel set commonly lasts three to four weeks without lifting, and it is also why the appointment takes longer than you expect.',
    },
    {
      t: 'h3',
      text: 'Thin builds, soft gel',
    },
    {
      t: 'p',
      text: 'The default aesthetic is a thin, natural-looking apex rather than a thick sculpted one. Extensions are more often soft gel tips than acrylic. If you specifically want acrylic, check the menu — plenty of studios do not offer it at all.',
    },
    {
      t: 'h3',
      text: 'The finishes people actually come for',
    },
    {
      t: 'ul',
      items: [
        '**Syrup / jelly gel** — sheer, tinted, layered for depth rather than opaque coverage.',
        '**Magnetic (cat-eye) gel** — a magnet pulls metallic particles into a moving band of light.',
        '**Chrome and glazed finishes** — powder-buffed mirror or pearl effects.',
        '**Hand-painted detail** — fine linework, tiny florals, character art. This is where per-nail pricing kicks in.',
        '**Embedded parts** — pearls, stones and charms set under or on top of the gel.',
      ],
    },
    {
      t: 'h2',
      id: 'where',
      text: 'Where to go, by neighbourhood',
    },
    {
      t: 'table',
      caption: 'Seoul areas at a glance',
      head: ['Area', 'Character', 'Price level'],
      rows: [
        ['Cheongdam / Apgujeong', 'High-end studios, elaborate art, longest lead time for bookings', 'Highest'],
        ['Gangnam Station', 'Dense cluster of mid-to-high studios, a business district in southern Seoul', 'High'],
        ['Seongsu', 'Design-led studios, trend-driven finishes, heavy Instagram presence', 'Mid to high'],
        ['Hongdae / Yeonnam', 'Younger clientele, more English exposure, art-forward', 'Mid'],
        ['Myeongdong', 'Tourist-facing, more likely to take short-notice bookings', 'Mid'],
        ['Residential areas', 'One-chair neighbourhood studios, regulars only, cheapest', 'Lowest'],
      ],
    },
    {
      t: 'p',
      text: 'Outside Seoul, Busan (Seomyeon and Haeundae) has the deepest bench of studios, and prices there tend to run 10-20% below Seoul for the same menu.',
    },
    {
      t: 'h2',
      id: 'safety',
      text: 'How to tell a good salon from a risky one',
    },
    {
      t: 'p',
      text: 'Korean beauty shops are licensed and inspected, which gives you a few concrete things to look for that travel guides rarely mention.',
    },
    {
      t: 'ul',
      items: [
        '**The licence should be on the wall.** Beauty businesses file a report with the local district office and are expected to display the business report certificate and the technician licence. A studio that displays neither is worth a second thought.',
        '**Ask about the file bits.** Metal e-file bits should go into a sterilizer between clients; disposable files and buffers should be new out of the packet. Watching the technician open a fresh file in front of you is a good sign.',
        '**Look at the ventilation.** Gel dust and monomer smell should not be hanging in the air.',
        '**Check the price list before sitting.** Reputable studios post the full menu — in the shop, on Naver, or both. A shop that quotes only after starting is the one that surprises you at checkout.',
        '**Read the Naver reviews, not the Instagram feed.** Naver Place reviews are attached to actual bookings and are much harder to stage than a curated grid.',
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'If your nails hurt afterwards, that is not normal',
      text:
        'Thinned, burning or tender nail plates after a session mean the e-file went too deep. Gel should never be filed down to the point of heat or pain. If it happens, stop the session and do not go back — one bad removal can take six months of nail growth to recover.',
    },
    {
      t: 'h2',
      id: 'paying',
      text: 'Paying, tipping and cancelling',
    },
    {
      t: 'ul',
      items: [
        '**No tipping.** Korea has no tipping culture in salons. Leaving extra creates confusion rather than goodwill.',
        '**Cards are accepted almost everywhere,** including in small studios. Foreign-issued Visa and Mastercard generally work; Amex is less reliable.',
        '**Cash discounts exist** at some independent studios but are not something to expect or ask for.',
        '**Cancel through the same channel you booked.** If you booked by Instagram DM, cancel by Instagram DM — a one-person studio may not be checking three inboxes.',
      ],
    },
  ],
  faq: [
    {
      q: 'Can I just walk into a nail salon in Seoul?',
      a: 'Usually not. Most Korean nail salons are one-person studios that run entirely on appointments, and an unbooked slot generally does not exist. Tourist-heavy areas such as Myeongdong and parts of Hongdae are the exception and can sometimes take same-day bookings, but even there a message an hour ahead makes the difference.',
    },
    {
      q: 'How much does a gel manicure cost in Seoul?',
      a: 'Expect 35,000-60,000 KRW (roughly $25-43) for a single-colour gel set at a mid-tier studio in 2026. French or ombre runs 45,000-75,000 KRW, and hand-painted art is added per nail at 3,000-15,000 KRW each. Removal of gel from another salon is typically 10,000-20,000 KRW extra.',
    },
    {
      q: 'Do Korean nail technicians speak English?',
      a: 'Some do, most do not, and it varies far more by neighbourhood than by price level. Studios in Hongdae, Itaewon and Myeongdong deal with foreign customers regularly. Everywhere else, a translation app works fine — the vocabulary you need is small, and bringing reference photos removes most of the ambiguity anyway.',
    },
    {
      q: 'How long does a gel set take in Korea?',
      a: 'Sixty to ninety minutes for a plain single colour, two to three hours for extensions or detailed art. Korean technicians spend an unusually long time on cuticle work and nail prep before applying product, which is the main reason sets tend to last three to four weeks.',
    },
    {
      q: 'Is a deposit required to book?',
      a: 'Often yes — typically 10,000-20,000 KRW transferred to the salon in advance and deducted from your final bill. For a one-chair studio a no-show means a lost booking block, so deposits are standard rather than a red flag. Cancellation windows are usually 24 hours.',
    },
    {
      q: 'Should I tip at a Korean nail salon?',
      a: 'No. Korea does not have a tipping culture, and salon prices are complete as listed. Offering a tip is more likely to cause an awkward exchange than to be appreciated.',
    },
    {
      q: 'Are Korean nail salons hygienic?',
      a: 'Beauty businesses in Korea are licensed under the Public Health Control Act and inspected by the local district office, so baseline standards are enforced. What varies is practice: check that metal e-file bits go into a sterilizer, that files and buffers are opened fresh, and that the business report certificate and technician licence are displayed.',
    },
  ],
  related: [
    { href: '/en/nail-art-korea', label: 'Korean Nail Art Styles and Prices' },
    { href: '/en/waxing-korea', label: 'Waxing in Korea: Prices by Area' },
    { href: '/en/hair-salon-korea', label: 'Hair Salons in Korea: Perm, Colour, Cut' },
    { href: '/en/beauty-license-korea', label: 'Korean Cosmetology Licence Explained' },
  ],
}
