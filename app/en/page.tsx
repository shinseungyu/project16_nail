import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import { SITE_URL, hreflang } from '@/lib/hreflang'
import { EN_SECTIONS } from '@/data/en'
import { EN_UPDATED } from '@/data/en/common'

const TITLE = 'Korea Beauty Guide: Prices, Bookings and Treatments (2026)'
const DESC =
  'What beauty services actually cost in Korea, how to book them without Korean, and how treatments like aqua peel, volume magic and scalp scaling really work. Written from inside the Korean industry.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: [
    'Korea beauty guide',
    'nail salon Seoul',
    'hair salon Korea English',
    'waxing in Korea',
    'K-beauty treatments',
    'Korean beauty prices',
    'beauty in Seoul for foreigners',
  ],
  alternates: {
    canonical: '/en',
    languages: hreflang('/en'),
  },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: '/en',
    siteName: 'Korea Beauty Guide',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/thumb.webp', width: 1200, height: 630, alt: 'Korea Beauty Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/images/thumb.webp'],
  },
  robots: { index: true, follow: true },
}

// 첫 화면에서 "이 사이트가 실제로 쓸모 있다"를 증명하는 가격 스냅샷.
// 각 행은 해당 상세 페이지로 들어가는 진입점이기도 하다.
const PRICE_SNAPSHOT: { service: string; price: string; usd: string; href: string }[] = [
  { service: 'Gel manicure', price: '35,000 - 60,000', usd: '$25 - 43', href: '/en/nail-salon-korea' },
  { service: 'Brazilian wax', price: '50,000 - 90,000', usd: '$36 - 64', href: '/en/waxing-korea' },
  { service: 'Classic lash set', price: '30,000 - 55,000', usd: '$21 - 39', href: '/en/eyelash-extensions-korea' },
  { service: 'Women’s haircut', price: '20,000 - 50,000', usd: '$14 - 36', href: '/en/hair-salon-korea' },
  { service: 'Setting perm', price: '100,000 - 250,000', usd: '$71 - 179', href: '/en/korean-perm-guide' },
  { service: 'Aqua peel facial', price: '50,000 - 150,000', usd: '$36 - 107', href: '/en/aqua-peel' },
  { service: 'Semi-permanent brows', price: '200,000 - 500,000', usd: '$143 - 357', href: '/en/semi-permanent-makeup-korea' },
  { service: 'Personal colour analysis', price: '80,000 - 250,000', usd: '$57 - 179', href: '/en/personal-color-korea' },
]

const GROUND_RULES: { title: string; text: string }[] = [
  {
    title: 'Appointments, not walk-ins',
    text:
      'Most Korean beauty businesses are one-person studios. A single practitioner means a single customer at a time, so unbooked slots generally do not exist. Message ahead, even an hour ahead.',
  },
  {
    title: 'Naver, not Google',
    text:
      'Korean salons keep their real information — menus, prices, photos, booking — on Naver Map and Instagram. Google Maps listings for Korean salons are frequently stale or absent.',
  },
  {
    title: 'No tipping, anywhere',
    text:
      'Korea has no tipping culture in salons at any price level. The listed price is complete. A Naver Place review is worth considerably more to a small studio.',
  },
  {
    title: 'Beauty shops and clinics are legally separate',
    text:
      'Lasers, injections and anything described as medical treatment belong to a licensed clinic. A beauty shop offering them is operating outside its licence — which is a reason to leave, not a bargain.',
  },
]

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/en#website`,
  url: `${SITE_URL}/en`,
  name: 'Korea Beauty Guide',
  description: DESC,
  inLanguage: 'en',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Korea Beauty Guide', item: `${SITE_URL}/en` }],
}

export default function EnHub() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section
        className="border-b border-stone-200 py-20 md:py-28"
        style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #f8fafc 55%, #ecfeff 100%)' }}
      >
        <div className="max-w-[1000px] mx-auto px-4">
          <p className="inline-block bg-white text-stone-600 text-[11px] font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase shadow-sm">
            English edition
          </p>
          <h1 className="text-[34px] md:text-[52px] font-extrabold text-stone-900 tracking-tight leading-[1.15] mb-6">
            Korea Beauty Guide
          </h1>
          <p className="text-[17px] md:text-[19px] leading-[1.8] text-stone-600 max-w-[680px]">
            What beauty services actually cost in Korea, how to book them without speaking Korean, and how the
            treatments really work — written from inside the Korean industry rather than from a travel itinerary.
          </p>
          <p className="text-[13px] text-stone-500 mt-6 max-w-[680px] leading-relaxed">
            This is the English section of a Korean-language site about the beauty trade. That is the reason the
            price and licensing detail here goes deeper than a tourism guide: it comes from the same source material.
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {EN_SECTIONS.map((s) => (
              <a
                key={s.key}
                href={`#${s.key}`}
                className="inline-flex items-center gap-1.5 bg-white/90 border border-stone-200 rounded-full px-4 py-2 text-[13px] font-bold text-stone-700 hover:border-stone-400 hover:text-stone-900 shadow-sm transition-colors"
              >
                <span aria-hidden>{s.icon}</span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1000px] mx-auto px-4 py-16">
        <section aria-labelledby="snapshot">
          <h2 id="snapshot" className="text-[26px] md:text-[32px] font-extrabold text-stone-900 tracking-tight mb-2">
            What things cost, at a glance
          </h2>
          <p className="text-[15px] text-stone-500 mb-7 leading-relaxed">
            Typical Seoul prices in 2026. Dollar figures are rough conversions at about 1,400 KRW to the dollar.
          </p>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-[14.5px] border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-stone-50">
                  <th className="text-left font-bold text-stone-900 px-4 py-3 border-b border-stone-200">Service</th>
                  <th className="text-left font-bold text-stone-900 px-4 py-3 border-b border-stone-200">KRW</th>
                  <th className="text-left font-bold text-stone-900 px-4 py-3 border-b border-stone-200">USD</th>
                  <th className="text-left font-bold text-stone-900 px-4 py-3 border-b border-stone-200">Detail</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_SNAPSHOT.map((row) => (
                  <tr key={row.service} className="border-b border-stone-100 last:border-0">
                    <td className="px-4 py-3 font-semibold text-stone-900">{row.service}</td>
                    <td className="px-4 py-3 text-stone-700 whitespace-nowrap">{row.price}</td>
                    <td className="px-4 py-3 text-stone-500 whitespace-nowrap">{row.usd}</td>
                    <td className="px-4 py-3">
                      <Link href={row.href} className="text-rose-600 font-semibold hover:underline">
                        Read more
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <AdUnit slot="7150499722" />

        <section aria-labelledby="ground-rules" className="mt-16">
          <h2 id="ground-rules" className="text-[26px] md:text-[32px] font-extrabold text-stone-900 tracking-tight mb-2">
            Four things that surprise everyone
          </h2>
          <p className="text-[15px] text-stone-500 mb-7 leading-relaxed">
            If you read nothing else on this site, read these.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {GROUND_RULES.map((r, i) => (
              <div key={r.title} className="rounded-xl border border-stone-200 p-6 bg-white">
                <p className="text-[12px] font-bold text-stone-400 mb-2">{String(i + 1).padStart(2, '0')}</p>
                <p className="font-bold text-stone-900 text-[16px] mb-2">{r.title}</p>
                <p className="text-[14.5px] leading-[1.75] text-stone-600">{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="terms" className="mt-16">
          <h2 id="terms" className="text-[26px] md:text-[32px] font-extrabold text-stone-900 tracking-tight mb-2">
            The Korean words worth searching
          </h2>
          <p className="text-[15px] text-stone-500 mb-7 leading-relaxed max-w-[720px]">
            Searching the Korean term on Naver Map or Instagram surfaces the studios that actually specialise in it.
            Searching the English one mostly surfaces travel blogs.
          </p>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-[14.5px] border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-stone-50">
                  <th className="text-left font-bold text-stone-900 px-4 py-3 border-b border-stone-200">Search for</th>
                  <th className="text-left font-bold text-stone-900 px-4 py-3 border-b border-stone-200">Korean</th>
                  <th className="text-left font-bold text-stone-900 px-4 py-3 border-b border-stone-200">Note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Nail salon', 'Neil', 'Add the neighbourhood: Neil Seongsu'],
                  ['Gel extensions', 'Jel yeonjang', 'Soft gel tips are the Korean default'],
                  ['Waxing', 'Waksing', 'Namseong waksing for male menus'],
                  ['Lash extensions', 'Songnunsseop yeonjang', 'Songnunsseop peom for a lash lift instead'],
                  ['Hair salon', 'Miyongsil', 'Beobeosyap for a barbershop and razor shave'],
                  ['Perm', 'Setting-peom / Dijiteol-peom', 'Naming the type avoids a long consultation'],
                  ['Root volume straightening', 'Bollyum-maejik', 'No clean English equivalent'],
                  ['Scalp scaling', 'Dupi seukeilling', 'Hedeuseupa for the longer spa format'],
                  ['Aqua peel facial', 'Aqua-pil', 'Offered by both salons and clinics'],
                  ['Semi-permanent brows', 'Banyeonggu nunsseop', 'Jayeon-nunsseop, Syaedou, Kombo are the styles'],
                  ['Personal colour', 'Peoseoneol keolleo', 'Confirm English service before booking'],
                  ['Booking / appointment', 'Yeyak', 'Yeyakgeum means deposit'],
                ].map(([en, ko, note]) => (
                  <tr key={en} className="border-b border-stone-100 last:border-0">
                    <td className="px-4 py-3 font-semibold text-stone-900">{en}</td>
                    <td className="px-4 py-3 text-stone-700 whitespace-nowrap" lang="ko">
                      {ko}
                    </td>
                    <td className="px-4 py-3 text-stone-500">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="how-to-book" className="mt-16">
          <h2 id="how-to-book" className="text-[26px] md:text-[32px] font-extrabold text-stone-900 tracking-tight mb-2">
            Booking anything, in three steps
          </h2>
          <p className="text-[15px] text-stone-500 mb-7 leading-relaxed max-w-[720px]">
            The same procedure works for nails, lashes, waxing, hair and facials. It is worth learning once.
          </p>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="shrink-0 mt-1 w-7 h-7 rounded-full bg-stone-900 text-white text-[13px] font-bold flex items-center justify-center">
                1
              </span>
              <div>
                <p className="font-bold text-stone-900 text-[16px] mb-1">Find the shop on Naver Map</p>
                <p className="text-[15px] leading-[1.8] text-stone-600">
                  Search the Korean service word plus the neighbourhood
                  listings carry the real menu, real prices and a booking button, and the reviews are attached to
                  actual bookings rather than posted by anyone. Naver Map has an English interface; the salon-written
                  text stays Korean, which a translation app handles.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 mt-1 w-7 h-7 rounded-full bg-stone-900 text-white text-[13px] font-bold flex items-center justify-center">
                2
              </span>
              <div>
                <p className="font-bold text-stone-900 text-[16px] mb-1">Message, do not call</p>
                <p className="text-[15px] leading-[1.8] text-stone-600">
                  Instagram DM or a KakaoTalk channel, both of which most one-person studios run themselves. Text
                  survives a language gap in a way a phone call does not. Say the service, the date, and — for nails
                  or hair — attach a reference photo. A deposit request of 10,000-20,000 KRW in reply is normal
                  practice, not a scam: a no-show costs a single-chair studio an entire booking block.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 mt-1 w-7 h-7 rounded-full bg-stone-900 text-white text-[13px] font-bold flex items-center justify-center">
                3
              </span>
              <div>
                <p className="font-bold text-stone-900 text-[16px] mb-1">Confirm the total before you sit down</p>
                <p className="text-[15px] leading-[1.8] text-stone-600">
                  This is where bills go wrong. Nail art is priced per finger on top of the base set, hair services
                  carry a length surcharge and a designer-rank multiplier, and removal of another salon&rsquo;s work
                  is usually billed separately. Ask for the all-in figure for your specific request. Cards are
                  accepted almost everywhere, and there is no tipping.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {EN_SECTIONS.map((section, si) => (
          <section key={section.key} id={section.key} className="mt-20 scroll-mt-24" aria-labelledby={`${section.key}-h`}>
            <h2
              id={`${section.key}-h`}
              className="text-[26px] md:text-[32px] font-extrabold text-stone-900 tracking-tight mb-2 flex items-center gap-2.5"
            >
              <span aria-hidden>{section.icon}</span>
              {section.title}
            </h2>
            <p className="text-[15px] text-stone-500 mb-7 leading-relaxed max-w-[720px]">{section.blurb}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {section.pages.map((p) => (
                <Link
                  key={p.path}
                  href={p.path}
                  className="group rounded-xl border border-stone-200 p-6 bg-white hover:border-rose-300 transition-colors"
                >
                  <p className="font-bold text-stone-900 text-[17px] leading-snug mb-2 group-hover:text-rose-700 transition-colors">
                    {p.h1}
                  </p>
                  <p className="text-[14px] leading-[1.7] text-stone-600">{p.description}</p>
                </Link>
              ))}
            </div>
            {si === 0 ? <AdUnit slot="1591000951" /> : null}
          </section>
        ))}

        <section className="mt-20 rounded-2xl border border-stone-200 bg-stone-50 p-8">
          <h2 className="text-[20px] font-extrabold text-stone-900 tracking-tight mb-3">Reading the Korean site</h2>
          <p className="text-[15px] leading-[1.8] text-stone-600 mb-4">
            The Korean-language side of this site covers the trade end of the same industry — startup costs, licensing
            routes, and service-by-service breakdowns for nail, skin, makeup and barber businesses. If you read
            Korean, it goes considerably deeper than this section does.
          </p>
          <Link href="/" className="text-[15px] font-bold text-rose-600 hover:underline">
            Go to the Korean site →
          </Link>
        </section>

        <p className="text-[12.5px] text-stone-400 mt-12">Last updated: {EN_UPDATED}</p>

        <AdUnit slot="3291145762" />
      </div>
    </div>
  )
}
