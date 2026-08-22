import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, FX_NOTE } from './common'

export const waxingKorea: EnPage = {
  path: '/en/waxing-korea',
  title: 'Waxing in Korea: Prices by Area and What to Expect (2026)',
  h1: 'Waxing in Korea: Prices by Area',
  description:
    'Full 2026 price list for waxing in Korea by body area, how Korean waxing shops differ from Western salons, hygiene standards to check, booking in English, and aftercare.',
  keywords: [
    'waxing in Korea',
    'Brazilian wax Seoul',
    'waxing Seoul price',
    'Korea waxing salon',
    'wax salon Seoul English',
    'male waxing Korea',
  ],
  category: 'Korea Beauty Guide',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'A Brazilian wax in Seoul costs about **50,000-90,000 KRW (roughly $36-64)**; underarms are 15,000-30,000 KRW. Waxing here is usually done in small appointment-only studios by a licensed skin-care technician, not in a spa back room.',
  blocks: [
    {
      t: 'h2',
      id: 'prices',
      text: 'Prices by area',
    },
    {
      t: 'p',
      text: 'Korean studios price strictly by area, and most publish the full menu on Naver Place. The ranges below reflect mid-tier studios in Seoul in 2026. Specialist waxing-only shops tend to sit at the lower end for common areas and the higher end for intimate work; general skin-care shops that offer waxing as a side menu land in the middle.',
    },
    {
      t: 'table',
      caption: 'Waxing menu, Seoul 2026',
      head: ['Area', 'KRW', 'Approx. USD', 'Time'],
      rows: [
        ['Upper lip / chin', '8,000 - 20,000', '$6 - 14', '10 min'],
        ['Full face', '25,000 - 50,000', '$18 - 36', '20 - 30 min'],
        ['Underarms', '15,000 - 30,000', '$11 - 21', '10 - 15 min'],
        ['Half arm', '20,000 - 35,000', '$14 - 25', '20 min'],
        ['Full arm', '30,000 - 55,000', '$21 - 39', '30 min'],
        ['Half leg', '30,000 - 50,000', '$21 - 36', '30 min'],
        ['Full leg', '50,000 - 90,000', '$36 - 64', '45 - 60 min'],
        ['Bikini line', '30,000 - 55,000', '$21 - 39', '20 - 30 min'],
        ['Brazilian', '50,000 - 90,000', '$36 - 64', '30 - 45 min'],
        ['Back (male)', '40,000 - 80,000', '$29 - 57', '30 - 45 min'],
        ['Male Brazilian', '70,000 - 130,000', '$50 - 93', '45 - 60 min'],
      ],
      note: FX_NOTE,
    },
    {
      t: 'note',
      title: 'Packages change the maths',
      text:
        'Most studios sell 5- or 10-session packages at 20-30% off the single-session price, because hair removal only works across a full growth cycle anyway. If you live in Korea, the package is almost always the right purchase. If you are visiting, it is not.',
    },
    {
      t: 'h2',
      id: 'how-it-works',
      text: 'How Korean waxing shops work',
    },
    {
      t: 'p',
      text: 'Waxing in Korea sits inside the licensed skin-care category, which shapes the experience in ways that surprise visitors from countries where waxing is unregulated.',
    },
    {
      t: 'ul',
      items: [
        '**The technician is licensed.** Waxing is performed as part of licensed beauty (skin) practice, so the person working on you holds a national cosmetology licence and the shop is registered with the district office.',
        '**Appointment only, single room.** Almost all studios are one- or two-room operations with a single technician. Walk-ins are rare.',
        '**Hard wax dominates for intimate areas.** Stripless hard wax is the default for Brazilian and underarm work; soft strip wax is more common on legs and arms.',
        '**Sessions are short and businesslike.** A Brazilian is 30-45 minutes including consultation and aftercare product.',
        '**Men are a normal customer segment,** particularly for back, chest and Brazilian. Many studios have dedicated male menus; some are male-only.',
      ],
    },
    {
      t: 'h2',
      id: 'hygiene',
      text: 'The hygiene questions worth asking',
    },
    {
      t: 'p',
      text: 'Korean shops are inspected, but standards still vary between studios. These are the concrete things to look for rather than vague reassurance.',
    },
    {
      t: 'ul',
      items: [
        '**No double-dipping.** The spatula should go into the wax pot once and then be discarded. A technician who returns a used stick to the pot is contaminating the whole container.',
        '**Fresh bedding per client.** Disposable paper or freshly changed sheets, changed in front of you.',
        '**Gloves throughout.** Non-negotiable for intimate waxing.',
        '**Licence and business report on display.** Beauty businesses are required to file with the local district office; the certificate is usually framed near the reception.',
        '**A patch test if you have sensitive skin.** Reputable studios offer this without being asked when you mention retinoid use or a skin condition.',
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Tell them about retinoids and acids',
      text:
        'If you use tretinoin, adapalene, isotretinoin, or strong AHA/BHA products, say so before the session. Waxing over retinoid-thinned skin can lift the surface layer and cause genuine injury. Most studios ask, but do not assume the question will come up in English. Isotretinoin in particular usually means waiting six months after finishing the course.',
    },
    {
      t: 'h2',
      id: 'booking',
      text: 'Booking without Korean',
    },
    {
      t: 'p',
      text: 'The same routes that work for nail salons work here, with one difference: intimate waxing studios are much more likely to require a phone number for confirmation.',
    },
    {
      t: 'ol',
      items: [
        '**Naver Map.** Search Waksing plus the neighbourhood. Listings carry the full menu and price list. Naver Place reviews are attached to real bookings and are the most reliable signal available.',
        '**Instagram DM.** Most studios post their menu in the bio link. A DM specifying the area you want and your preferred date usually gets a reply within a day.',
        '**KakaoTalk channel.** Where confirmations and deposit requests happen. Some studios operate entirely through it.',
      ],
    },
    {
      t: 'p',
      text: 'Useful terms: Waksing (waxing), Beurajillieon (Brazilian), Gyeodeurangi (underarms), Dari jeonche (full leg), Namseong waksing (male waxing), Yeyak (booking), Yeoseong jeonyong (women only), Namseong jeonyong (men only).',
    },
    {
      t: 'h2',
      id: 'preparing',
      text: 'Before your appointment',
    },
    {
      t: 'ul',
      items: [
        '**Hair length 5-10 mm.** Roughly two to three weeks of growth. Shorter than 5 mm and the wax cannot grip; much longer and it hurts more than it needs to.',
        '**Do not shave in between.** Shaving resets the growth cycle and undoes the point of waxing.',
        '**Exfoliate two days before,** not the same day. Same-day exfoliation leaves skin too sensitised.',
        '**Skip lotion and oil that morning.** Wax needs a dry surface.',
        '**Avoid caffeine beforehand** if you are sensitive to pain; it measurably tightens the response.',
        '**Time it away from your period** if possible. Skin sensitivity peaks in the days before menstruation.',
      ],
    },
    {
      t: 'h2',
      id: 'aftercare',
      text: 'Aftercare and what is normal',
    },
    {
      t: 'p',
      text: 'Redness and small raised bumps for a few hours are expected. Studios usually finish by applying a soothing gel and will sell an aftercare product — you do not have to buy it, but you do need to follow the timeline.',
    },
    {
      t: 'ul',
      items: [
        '**First 24 hours:** no hot showers, no sauna or jjimjilbang, no swimming pool, no gym. Heat and sweat on freshly waxed follicles is the main route to irritation.',
        '**First 48 hours:** no direct sun on the area, no fragranced products.',
        '**From day 3:** gentle exfoliation two or three times a week is what actually prevents ingrown hairs.',
        '**Rebook at 4-6 weeks.** The cycle shortens over time as follicles weaken with repeat waxing.',
      ],
    },
    {
      t: 'h2',
      id: 'alternatives',
      text: 'Waxing versus laser in Korea',
    },
    {
      t: 'p',
      text: 'This is the one place where Korea forces a distinction that many visitors do not expect. Laser hair removal is a medical procedure here and is performed at dermatology clinics under a doctor, not at beauty shops. A beauty salon cannot legally operate medical laser devices.',
    },
    {
      t: 'table',
      caption: 'Choosing between them',
      head: ['', 'Waxing (beauty shop)', 'Laser (dermatology clinic)'],
      rows: [
        ['Where', 'Licensed beauty/skin-care shop', 'Medical clinic, doctor supervised'],
        ['Cost per session', '15,000 - 90,000 KRW', '30,000 - 150,000 KRW by area'],
        ['Sessions needed', 'Ongoing, every 4-6 weeks', '5 - 10, then maintenance'],
        ['Result', 'Temporary, regrows', 'Long-term reduction'],
        ['Works on', 'All hair colours', 'Best on dark hair, light skin'],
        ['Same day', 'Yes, immediate', 'Gradual over months'],
      ],
    },
    {
      t: 'p',
      text: 'For a trip, waxing is the practical choice. For residents, the arithmetic usually favours a laser package after the first year. If a beauty shop offers you "laser hair removal", that is a signal to leave — see our comparison of skin clinics and beauty salons for why the line matters.',
    },
  ],
  faq: [
    {
      q: 'How much is a Brazilian wax in Seoul?',
      a: 'Typically 50,000-90,000 KRW (roughly $36-64) for women and 70,000-130,000 KRW for men at a mid-tier studio in 2026. Bikini line only is cheaper at 30,000-55,000 KRW. Most studios sell 5- or 10-session packages at 20-30% off, which is worth it if you live here.',
    },
    {
      q: 'Do Korean waxing salons speak English?',
      a: 'Studios in Itaewon, Hongdae and Gangnam deal with foreign clients regularly and many advertise English service on Instagram. Elsewhere expect Korean only, which is manageable — book by Instagram DM or Naver so you can use a translation app, and state the area and date clearly.',
    },
    {
      q: 'How long does my hair need to be for waxing?',
      a: 'About 5-10 mm, which is roughly two to three weeks of growth. Below 5 mm the wax cannot grip the hair and the technician may refuse the session. Do not shave in the meantime — shaving resets the growth cycle and defeats the purpose.',
    },
    {
      q: 'Are Korean waxing shops hygienic?',
      a: 'Waxing falls under licensed beauty practice in Korea, so technicians hold a national cosmetology licence and shops are registered and inspected by the local district office. Still check the basics yourself: no double-dipping of spatulas, gloves worn throughout, and fresh bedding changed in front of you.',
    },
    {
      q: 'Can I get laser hair removal at a Korean beauty salon?',
      a: 'No. Laser hair removal is a medical procedure in Korea and must be performed at a dermatology clinic under a doctor. Beauty shops are not permitted to operate medical laser devices, so a salon advertising laser hair removal is operating outside its licence.',
    },
    {
      q: 'What should I avoid after waxing?',
      a: 'For 24 hours: hot showers, saunas and jjimjilbang, swimming pools, and the gym — heat and sweat on open follicles is what causes irritation. For 48 hours: direct sun and fragranced products. From day three, gentle exfoliation two or three times a week is what actually prevents ingrown hairs.',
    },
    {
      q: 'Should I tip after a wax in Korea?',
      a: 'No. There is no tipping culture in Korean salons and the listed price is the full price. If you want to show appreciation, a Naver Place review is far more valuable to a one-person studio.',
    },
  ],
  related: [
    { href: '/en/skin-clinic-vs-salon', label: 'Skin Clinic vs Beauty Salon in Korea' },
    { href: '/en/eyelash-extensions-korea', label: 'Eyelash Extensions in Korea' },
    { href: '/en/aqua-peel', label: 'What Is Aqua Peel?' },
    { href: '/en/nail-salon-korea', label: 'Nail Salons in Korea: Prices and What to Expect' },
  ],
}
