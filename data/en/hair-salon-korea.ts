import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, FX_NOTE } from './common'

export const hairSalonKorea: EnPage = {
  path: '/en/hair-salon-korea',
  title: 'Hair Salons in Korea: Perm, Colour and Cut Prices (2026)',
  h1: 'Hair Salons in Korea: Perm, Colour, Cut',
  description:
    'What a cut, colour, perm or treatment costs in Korean salons in 2026, how the designer ranking system changes your bill, booking in English, and the two licence categories Korea splits hair work into.',
  keywords: [
    'hair salon Korea',
    'Korean hair salon English',
    'hair salon Seoul price',
    'Korean perm price',
    'hair colour Seoul',
    'Seoul hair salon booking',
  ],
  category: 'Korea Beauty Guide',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'A women’s cut in Seoul runs about **20,000-50,000 KRW (roughly $14-36)**, a setting perm 100,000-250,000 KRW, and full colour 70,000-150,000 KRW. The number that actually moves your bill is not the service — it is the rank of the stylist you book.',
  blocks: [
    {
      t: 'h2',
      id: 'prices',
      text: 'Prices by service',
    },
    {
      t: 'p',
      text: 'Korean salon menus are unusually granular, and almost everything is quoted before length surcharges. The ranges below are mid-tier Seoul salons in 2026; premium salons in Cheongdam and Apgujeong sit well above them, and neighbourhood shops well below.',
    },
    {
      t: 'table',
      caption: 'Salon menu, Seoul 2026',
      head: ['Service', 'KRW', 'Approx. USD', 'Time'],
      rows: [
        ['Men’s cut', '15,000 - 40,000', '$11 - 29', '30 - 45 min'],
        ['Women’s cut', '20,000 - 50,000', '$14 - 36', '40 - 60 min'],
        ['Shampoo and blow-dry', '10,000 - 30,000', '$7 - 21', '30 min'],
        ['Root colour', '50,000 - 90,000', '$36 - 64', '1 - 1.5 hrs'],
        ['Full colour', '70,000 - 150,000', '$50 - 107', '1.5 - 2.5 hrs'],
        ['Bleach (per round)', '80,000 - 200,000', '$57 - 143', '2 - 4 hrs'],
        ['Setting perm', '100,000 - 250,000', '$71 - 179', '2 - 3 hrs'],
        ['Digital / volume perm', '120,000 - 280,000', '$86 - 200', '2.5 - 3.5 hrs'],
        ['Magic straight', '120,000 - 250,000', '$86 - 179', '3 - 5 hrs'],
        ['Hair clinic / treatment', '50,000 - 150,000', '$36 - 107', '30 - 60 min'],
        ['Scalp scaling', '30,000 - 80,000', '$21 - 57', '30 - 50 min'],
      ],
      note: FX_NOTE,
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Length surcharges are real money',
      text:
        'Menu prices assume short hair. Salons add a length charge — commonly 20,000-50,000 KRW for shoulder length and 50,000-100,000 KRW for waist length — on chemical services. On a perm or bleach this can be a third of the total. Ask for the all-in figure for **your** hair length when you book.',
    },
    {
      t: 'h2',
      id: 'designer-rank',
      text: 'The designer ranking system',
    },
    {
      t: 'p',
      text: 'Every mid-size Korean salon runs an internal hierarchy, and the same haircut costs different amounts depending on who does it. This is not upselling — it is the published pricing structure, and it is the thing most visitors do not know to ask about.',
    },
    {
      t: 'table',
      caption: 'Typical rank structure and price multiplier',
      head: ['Rank', 'Korean (romanised)', 'Relative price'],
      rows: [
        ['Junior designer', 'Dijaineo', 'Base'],
        ['Senior designer', 'Siljang', '1.3 - 1.6x base'],
        ['Director', 'Buwonjang / Wonjang', '1.6 - 2.5x base'],
        ['Named / celebrity stylist', 'Daepyo-wonjang', '2.5x and up'],
      ],
      note:
        'Booking a specific person rather than "whoever is free" can also carry a small designation fee. It is usually worth it: continuity matters more than rank for colour and perms.',
    },
    {
      t: 'p',
      text: 'For a straightforward cut, a junior designer at a good salon is generally better value than a director at an average one. For bleach, correction work, or a perm on damaged hair, pay for the rank.',
    },
    {
      t: 'h2',
      id: 'perms',
      text: 'Perms — the thing Korea is actually known for',
    },
    {
      t: 'p',
      text: 'Korean perm technique diverged from the Western tradition, and the vocabulary reflects that. Asking for "a perm" gets you a follow-up question about which kind.',
    },
    {
      t: 'ul',
      items: [
        '**Setting perm** — heat rods, produces defined springy curls that hold their shape when dry. The most common women’s perm.',
        '**Digital perm** — temperature-controlled rods; loose curls that show most when the hair is dry, low maintenance.',
        '**Volume magic** — straightens the mid-lengths and ends while lifting the roots. Extremely popular and specifically Korean.',
        '**Magic straight** — full chemical straightening, poker straight.',
        '**Down perm** — flattens hair that sticks out, especially around the ears. A men’s staple, often added to a cut for 10,000-30,000 KRW.',
        '**Bangs perm** — a 20-minute service just for the fringe, around 20,000-40,000 KRW.',
      ],
    },
    {
      t: 'p',
      text: 'If you are choosing between volume magic and a straight perm, that comparison has its own page — the two get confused constantly and the wrong choice on fine hair is hard to reverse.',
    },
    {
      t: 'h2',
      id: 'licence',
      text: 'Two licences, two kinds of shop',
    },
    {
      t: 'p',
      text: 'Korea splits hair work into two legally separate business categories, and it explains why some shops cut men’s hair only.',
    },
    {
      t: 'ul',
      items: [
        '**Beauty business** — the standard salon, licensed under the cosmetology (hair) national licence. Cuts, colour, perms for all customers.',
        '**Barber business** — a separate licence and a separate business category, historically men’s grooming, and the only category permitted to offer a traditional razor shave.',
      ],
    },
    {
      t: 'p',
      text: 'The two are not interchangeable: a cosmetology licence does not authorise operating a barber business, and vice versa. In practice this means a barbershop is where you go for a straight-razor shave, and a standard salon is where you go for chemical services.',
    },
    {
      t: 'h2',
      id: 'booking',
      text: 'Booking and getting understood',
    },
    {
      t: 'ol',
      items: [
        '**Naver Booking.** Most salons take reservations through Naver Place, which shows the menu, the individual designers, and their rank. This is where the actual availability lives.',
        '**Kakao channel or phone.** Larger salons take phone bookings; smaller ones prefer Kakao.',
        '**Instagram.** Individual designers maintain their own accounts and take DMs. If you want a specific person’s work, this is the direct route.',
        '**Walk in for cuts.** Unlike nail and lash studios, larger hair salons do accept walk-ins for cuts, though not usually for chemical services.',
      ],
    },
    {
      t: 'note',
      title: 'Bring photos, and bring two',
      text:
        'One photo of the result you want and one of your hair now. Korean stylists are direct about feasibility — if your hair cannot take the bleach level a photo implies, they will say so, which is more useful than a stylist who agrees and then damages your hair. Salons in Itaewon, Hongdae and Gangnam are the most likely to have English-speaking designers.',
    },
    {
      t: 'h2',
      id: 'etiquette',
      text: 'What is different from a Western salon',
    },
    {
      t: 'ul',
      items: [
        '**No tipping.** None, at any rank.',
        '**Shampooing is a separate step with its own charge** at some salons, and the head massage that comes with it is genuinely good.',
        '**Treatments are pushed, but they are also cheap.** A 50,000 KRW clinic treatment after bleach is a reasonable purchase, not a scam.',
        '**Sessions run long.** A perm plus colour is a half-day. Bring something to do.',
        '**Products are sold, not forced.** A simple "Gwaenchanayo" (I am fine) closes the conversation.',
        '**Membership and prepaid cards** are common and offer real discounts — only relevant if you live here.',
      ],
    },
  ],
  faq: [
    {
      q: 'How much does a haircut cost in Seoul?',
      a: 'Roughly 15,000-40,000 KRW for men and 20,000-50,000 KRW for women at a mid-tier salon in 2026. The bigger variable is the stylist’s rank: a senior designer charges 1.3-1.6 times the base price and a director 1.6-2.5 times, for the same service.',
    },
    {
      q: 'Why is my quote higher than the menu price?',
      a: 'Two reasons, both standard. Menu prices assume short hair, and chemical services carry a length surcharge — commonly 20,000-50,000 KRW for shoulder length and up to 100,000 KRW for very long hair. And the price varies by the rank of the designer you booked. Ask for the all-in figure for your hair length and your chosen stylist.',
    },
    {
      q: 'Do Korean hair salons speak English?',
      a: 'Salons in Itaewon, Hongdae, Gangnam and Apgujeong frequently have English-speaking designers and some advertise it explicitly. Elsewhere, bring two reference photos — the result you want and your hair as it is now. Korean stylists are direct about what is achievable, which is more useful than agreement.',
    },
    {
      q: 'What is a Korean setting perm?',
      a: 'A perm done on heated rods that produces defined, springy curls holding their shape when dry, at 100,000-250,000 KRW. It differs from a digital perm, which uses temperature-controlled rods for looser curls that show most when dry, and from volume magic, which straightens the lengths while lifting the roots.',
    },
    {
      q: 'Can I get a razor shave at a Korean hair salon?',
      a: 'Not at a standard salon. Korea licenses barber businesses separately from beauty businesses, and the traditional razor shave belongs to the barber category. A cosmetology licence does not authorise it, so go to a barbershop for a shave.',
    },
    {
      q: 'Should I tip at a Korean hair salon?',
      a: 'No. Korea has no tipping culture in salons at any price level, and the quoted price is complete. A Naver Place review is worth far more to the designer.',
    },
    {
      q: 'Can I walk in without an appointment?',
      a: 'For a cut at a larger salon, often yes. For colour, bleach, perms or straightening, book ahead — those take two to five hours and salons block the time in advance. Small one-designer studios are appointment-only regardless of service.',
    },
  ],
  related: [
    { href: '/en/korean-perm-guide', label: 'Korean Perm Types Explained' },
    { href: '/en/volume-magic-perm', label: 'Volume Magic vs Straight Perm' },
    { href: '/en/scalp-scaling', label: 'Korean Scalp Scaling Explained' },
    { href: '/en/work-beauty-industry-korea', label: 'Working in Korea’s Beauty Industry' },
  ],
}
