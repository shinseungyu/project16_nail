import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, FX_NOTE } from './common'

export const eyelashExtensionsKorea: EnPage = {
  path: '/en/eyelash-extensions-korea',
  title: 'Eyelash Extensions in Korea: Prices and Types (2026)',
  h1: 'Eyelash Extensions in Korea',
  description:
    'What lash extensions cost in Seoul in 2026, the difference between classic, volume and Russian volume sets, lash perms, refill cycles, how to book in English, and the safety checks that matter.',
  keywords: [
    'eyelash extensions Seoul',
    'eyelash extensions Korea',
    'lash extensions Seoul price',
    'Korean lash perm',
    'lash lift Korea',
    'volume lashes Seoul',
  ],
  category: 'Korea Beauty Guide',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'A classic lash set in Seoul costs about **30,000-55,000 KRW (roughly $21-39)** and takes 60-90 minutes — considerably cheaper than in most of North America and Europe. Volume sets run 50,000-90,000 KRW, and refills every three weeks are about half the full-set price.',
  blocks: [
    {
      t: 'h2',
      id: 'prices',
      text: 'Prices by set type',
    },
    {
      t: 'p',
      text: 'Korean studios price by lash type and density, and most publish the full menu on Naver Place. The main reason prices are low relative to Western markets is density of supply: lash work is a licensed beauty service performed in thousands of small owner-operated studios, and the competition holds prices down.',
    },
    {
      t: 'table',
      caption: 'Lash menu, Seoul 2026',
      head: ['Service', 'KRW', 'Approx. USD', 'Time'],
      rows: [
        ['Classic / natural set', '30,000 - 55,000', '$21 - 39', '60 - 90 min'],
        ['Volume set (2D-4D)', '50,000 - 90,000', '$36 - 64', '90 - 120 min'],
        ['Russian volume (5D+)', '70,000 - 130,000', '$50 - 93', '2 - 2.5 hrs'],
        ['YY / hybrid lashes', '50,000 - 90,000', '$36 - 64', '90 - 120 min'],
        ['Refill (within 3 weeks)', '25,000 - 55,000', '$18 - 39', '45 - 70 min'],
        ['Lash perm / lift', '30,000 - 60,000', '$21 - 43', '45 - 60 min'],
        ['Lash lift + tint', '45,000 - 80,000', '$32 - 57', '60 - 75 min'],
        ['Removal', '10,000 - 20,000', '$7 - 14', '20 - 30 min'],
      ],
      note: FX_NOTE,
    },
    {
      t: 'h2',
      id: 'types',
      text: 'Classic, volume, Russian — what the numbers mean',
    },
    {
      t: 'p',
      text: 'The "D" numbers you see on Korean menus refer to how many extension fibres are fanned onto each natural lash. This is the single most useful thing to understand before booking, because it determines both the look and the price.',
    },
    {
      t: 'h3',
      text: 'Classic (1D) — Naechureol',
    },
    {
      t: 'p',
      text: 'One extension per natural lash. The result is length and definition without added density — it reads as "your lashes, but better" and is what most people actually want for daily wear. If you have naturally dense lashes, classic is usually the correct choice.',
    },
    {
      t: 'h3',
      text: 'Volume (2D-4D) — Bollyum',
    },
    {
      t: 'p',
      text: 'A hand-made fan of two to four ultra-fine fibres per natural lash. Because the fibres are thinner, the total weight stays similar to classic while the visual density roughly doubles. This is the most popular Korean set and the best value in the menu.',
    },
    {
      t: 'h3',
      text: 'Russian volume (5D and above) — Reosian bollyum',
    },
    {
      t: 'p',
      text: 'Five or more fibres per lash, producing dense, dark, obviously-there lashes. It requires the finest fibres and the most skill, hence the price and the two-hour-plus session. Not suitable if your natural lashes are fine or sparse — the weight will cause premature shedding.',
    },
    {
      t: 'h3',
      text: 'YY and hybrid — Wai(Y)Raesi',
    },
    {
      t: 'p',
      text: 'Y-shaped pre-made fibres, or a mix of classic and volume across the lash line. Gives a textured, feathered look rather than a uniform wall. Common in Korean menus and priced with volume.',
    },
    {
      t: 'note',
      title: 'Curl and length codes',
      text:
        'Korean menus use the same international curl codes: **J** (barely curled), **B**, **C** (the Korean default), **CC**, and **D** (most dramatic). Lengths run 8-14 mm, usually mixed across the eye. If you have monolids or hooded eyes, C or CC curl at 9-11 mm is the standard recommendation — D curl on hooded eyes can press against the lid.',
    },
    {
      t: 'h2',
      id: 'perm',
      text: 'Lash perm — the Korean alternative to extensions',
    },
    {
      t: 'p',
      text: 'Lash perming is far more popular in Korea than in most Western markets, and for a lot of people it is the better option. A perming solution curls your own lashes upward from the root; nothing is glued on.',
    },
    {
      t: 'table',
      caption: 'Extensions versus lash perm',
      head: ['', 'Extensions', 'Lash perm'],
      rows: [
        ['Cost', '30,000 - 130,000 KRW', '30,000 - 60,000 KRW'],
        ['Lasts', '3 - 4 weeks, refills needed', '6 - 10 weeks, no refills'],
        ['Adds length', 'Yes', 'No, lifts what you have'],
        ['Maintenance', 'Refill every 3 weeks', 'None'],
        ['Oil restrictions', 'Yes, oil dissolves adhesive', 'None after 24 hrs'],
        ['Best for', 'Sparse or short lashes', 'Long but straight or downward lashes'],
      ],
    },
    {
      t: 'p',
      text: 'Korean and other East Asian lashes are commonly long but grow straight down, which is exactly the case a perm solves. If your lashes already have length, a perm at 30,000-60,000 KRW every two months costs a fraction of a refill cycle.',
    },
    {
      t: 'h2',
      id: 'safety',
      text: 'Safety and what to check',
    },
    {
      t: 'p',
      text: 'Lash work happens millimetres from the eye, so this is the one beauty service where the hygiene checks are genuinely worth being fussy about.',
    },
    {
      t: 'ul',
      items: [
        '**Ask about the adhesive.** Cyanoacrylate is standard and safe when applied correctly, but sensitivity exists. Low-fume or sensitive adhesives are available at most studios — mention any history of reaction when you book, not when you arrive.',
        '**Nothing should touch your eye.** Extensions attach to the lash 0.5-1 mm from the lid, never to the skin. Stinging during the session is a signal to speak up immediately.',
        '**Tweezers should be sanitised between clients,** and eye pads opened fresh from the packet.',
        '**Licence on display.** Lash extensions fall under licensed beauty practice, so the shop should hold a filed business report and the technician a national licence.',
        '**Contact lenses out** before the session. Bring a case.',
        '**No mascara on the day.** Residue prevents the adhesive from bonding, and the technician will have to clean it off out of your appointment time.',
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Redness that lasts is not normal',
      text:
        'Mild dryness for a few hours can happen. Swelling, persistent redness, or itching a day later suggests an adhesive reaction — go to an ophthalmologist rather than back to the salon, and have the set removed. Repeated reactions rule out extensions permanently; a lash perm does not use adhesive and is the usual fallback.',
    },
    {
      t: 'h2',
      id: 'aftercare',
      text: 'Making a set last',
    },
    {
      t: 'ol',
      items: [
        '**No water for 24 hours.** The adhesive cures fully over the first day. This includes steam — skip the sauna and jjimjilbang.',
        '**No oil-based products near the eyes, ever.** Oil dissolves cyanoacrylate. Check your cleanser, makeup remover and eye cream. This is the single biggest cause of premature shedding.',
        '**Do not sleep face-down.** Compression bends and snaps extensions faster than anything else.',
        '**Brush daily with the spoolie** the studio gives you, gently and from mid-length outward.',
        '**No mechanical eyelash curler.** It will crush the extensions at the base.',
        '**Book the refill at week three.** Waiting past four weeks usually means paying for a full set again, because too few extensions remain to build on.',
      ],
    },
    {
      t: 'h2',
      id: 'booking',
      text: 'Booking in Seoul',
    },
    {
      t: 'p',
      text: 'Search Songnunsseop yeonjang (lash extensions) or Songnunsseop peom (lash perm) plus the neighbourhood on Naver Map — for example Songnunsseop Hongdae. Instagram DM works for most studios, and specifying the set type, curl and length in your first message saves a round trip.',
    },
    {
      t: 'p',
      text: 'Useful terms: Songnunsseop yeonjang (extensions), Naechureol (classic), Bollyum (volume), Reosian bollyum (Russian volume), Riteochi (refill), Jegeo (removal), Songnunsseop peom (lash perm), Keol (curl), Giri (length).',
    },
  ],
  faq: [
    {
      q: 'How much are eyelash extensions in Seoul?',
      a: 'A classic set is roughly 30,000-55,000 KRW (about $21-39), volume 50,000-90,000 KRW, and Russian volume 70,000-130,000 KRW. Refills within three weeks are about half the full-set price. This is substantially cheaper than most North American and European markets.',
    },
    {
      q: 'What is the difference between classic and volume lashes?',
      a: 'Classic attaches one extension to each natural lash for length and definition; volume attaches a hand-made fan of two to four ultra-fine fibres, roughly doubling visual density at a similar total weight. Volume is the most popular Korean set. Russian volume goes to five or more fibres and needs healthy natural lashes to carry it.',
    },
    {
      q: 'How long do lash extensions last?',
      a: 'Three to four weeks, following your natural lash shedding cycle. Most people refill at week three. Waiting past four weeks usually means paying full price again because too few extensions remain to build on.',
    },
    {
      q: 'Is a lash perm better than extensions?',
      a: 'It depends on your lashes. If they are already long but grow straight down — very common in Korea — a perm lifts them for six to ten weeks with no refills, no oil restrictions, and no adhesive, at 30,000-60,000 KRW. If your lashes are short or sparse, only extensions add length.',
    },
    {
      q: 'Are lash extensions safe?',
      a: 'Yes when applied correctly. Extensions attach to the lash itself, 0.5-1 mm from the lid, never to skin, and nothing should sting during the session. Cyanoacrylate adhesive is standard; sensitivity exists, so mention any past reaction at booking so the studio can use a low-fume adhesive. Swelling or itching a day later means removal and an eye doctor, not a return visit.',
    },
    {
      q: 'What ruins lash extensions fastest?',
      a: 'Oil-based products near the eyes — cleansers, makeup removers, eye creams — because oil dissolves the adhesive. After that: sleeping face-down, mechanical eyelash curlers, and water or steam in the first 24 hours before the adhesive has fully cured.',
    },
  ],
  related: [
    { href: '/en/semi-permanent-makeup-korea', label: 'Semi-Permanent Makeup in Korea' },
    { href: '/en/waxing-korea', label: 'Waxing in Korea: Prices by Area' },
    { href: '/en/personal-color-korea', label: 'Personal Colour Analysis in Korea' },
    { href: '/en/nail-salon-korea', label: 'Nail Salons in Korea: Prices and What to Expect' },
  ],
}
