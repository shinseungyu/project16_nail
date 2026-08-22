import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/hreflang'
import { EN_PAGES } from '@/data/en'
import { EN_UPDATED } from '@/data/en/common'

const TITLE = 'About This Site | Korea Beauty Guide'
const DESC =
  'Who writes Korea Beauty Guide, where the price and legal information comes from, how figures are sourced and dated, and what this site deliberately does not do.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  // 짝이 되는 한국어 페이지가 없다. hreflang을 억지로 넣지 않고 자기 canonical만 둔다.
  alternates: { canonical: '/en/about' },
  openGraph: { title: TITLE, description: DESC, url: '/en/about', locale: 'en_US', type: 'article' },
  robots: { index: true, follow: true },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Korea Beauty Guide', item: `${SITE_URL}/en` },
    { '@type': 'ListItem', position: 2, name: 'About This Site', item: `${SITE_URL}/en/about` },
  ],
}

export default function EnAbout() {
  return (
    <div className="max-w-[720px] mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className="text-xs text-stone-400 mb-5 flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/en" className="hover:text-stone-700">
          Korea Beauty Guide
        </Link>
        <span aria-hidden>&rsaquo;</span>
        <span className="text-stone-600">About</span>
      </nav>

      <h1 className="text-[30px] md:text-[38px] font-extrabold text-stone-900 tracking-tight mb-5">About This Site</h1>
      <p className="text-[17px] leading-[1.8] text-stone-600 mb-12">
        Korea Beauty Guide is the English section of nailstartup.com, a Korean-language publication about the beauty
        trade. It currently holds {EN_PAGES.length} guides covering prices, booking practice, treatments and
        licensing.
      </p>

      <section className="mb-10">
        <h2 className="text-[21px] font-bold text-stone-900 mb-3">Why an English section exists</h2>
        <p className="text-[15.5px] leading-[1.8] text-stone-700 mb-4">
          The Korean side of this site is written for people entering the beauty trade — startup costs, licensing
          routes, facility standards, service-by-service economics for nail, skin, makeup and barber businesses.
          Producing that material means dealing constantly with price data, legal requirements and industry structure.
        </p>
        <p className="text-[15.5px] leading-[1.8] text-stone-700">
          Almost none of that reaches English-language readers. What exists in English about Korean beauty is written
          from the outside: which salon a travel writer liked, what a two-week visitor experienced. The specific
          things people actually need — what a service costs before the surcharges, why a shop cannot legally offer
          you a laser, what happens between booking and paying — are largely absent. This section is an attempt to
          fill that.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-[21px] font-bold text-stone-900 mb-3">Where the information comes from</h2>
        <ul className="space-y-3 text-[15.5px] leading-[1.8] text-stone-700">
          <li className="relative pl-5">
            <span className="absolute left-0 top-[13px] w-1.5 h-1.5 rounded-full bg-rose-400" aria-hidden />
            <strong>Prices</strong> are typical ranges across mid-tier Seoul businesses, drawn from published salon
            menus and the same market research the Korean articles are built on. They are ranges, not quotes, and
            individual shops sit outside them in both directions.
          </li>
          <li className="relative pl-5">
            <span className="absolute left-0 top-[13px] w-1.5 h-1.5 rounded-full bg-rose-400" aria-hidden />
            <strong>Legal statements</strong> cite the governing Korean statute by name and article — most often the
            Public Health Control Act and, for semi-permanent makeup, the Tattooist Act.
            Where a law has been passed but is not yet in force, that is stated explicitly rather than glossed over.
          </li>
          <li className="relative pl-5">
            <span className="absolute left-0 top-[13px] w-1.5 h-1.5 rounded-full bg-rose-400" aria-hidden />
            <strong>Currency</strong> is given in won first, because that is what you pay. Dollar figures are rough
            conversions at approximately 1,400 KRW to the dollar and will drift with the exchange rate.
          </li>
          <li className="relative pl-5">
            <span className="absolute left-0 top-[13px] w-1.5 h-1.5 rounded-full bg-rose-400" aria-hidden />
            <strong>Dates.</strong> Every article carries a last-updated date. Prices and legal requirements move, and
            an undated price is not information.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-[21px] font-bold text-stone-900 mb-3">What this site does not do</h2>
        <ul className="space-y-3 text-[15.5px] leading-[1.8] text-stone-700">
          <li className="relative pl-5">
            <span className="absolute left-0 top-[13px] w-1.5 h-1.5 rounded-full bg-rose-400" aria-hidden />
            <strong>It does not recommend individual salons.</strong> No shop pays to appear here and none is named as
            a recommendation. Naming salons is how a guide becomes an advertisement, and it also goes stale within a
            year.
          </li>
          <li className="relative pl-5">
            <span className="absolute left-0 top-[13px] w-1.5 h-1.5 rounded-full bg-rose-400" aria-hidden />
            <strong>It does not take bookings</strong> or act as an agent. Where booking routes are described, they
            are the ones Korean customers actually use.
          </li>
          <li className="relative pl-5">
            <span className="absolute left-0 top-[13px] w-1.5 h-1.5 rounded-full bg-rose-400" aria-hidden />
            <strong>It does not give medical, legal or immigration advice.</strong> Articles state what the law
            requires and point to the official channel — Q-Net for licensing, Hi Korea and the Immigration Contact
            Center for residence status, a dermatologist for anything medical. Your own case needs to be confirmed
            there.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-[21px] font-bold text-stone-900 mb-3">How it is funded</h2>
        <p className="text-[15.5px] leading-[1.8] text-stone-700">
          Through advertising served by Google AdSense. There is no sponsored placement in the articles and no
          affiliate arrangement with any salon or clinic. The{' '}
          <Link href="/en/privacy" className="text-rose-600 font-semibold hover:underline">
            privacy policy
          </Link>{' '}
          sets out what advertising cookies do and how to opt out.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-[21px] font-bold text-stone-900 mb-3">Corrections</h2>
        <p className="text-[15.5px] leading-[1.8] text-stone-700">
          Prices change, laws take effect, and errors happen. If something here is wrong or out of date — particularly
          a price range or a legal statement — corrections are welcome and will be made with the update date changed.
        </p>
      </section>

      <section>
        <h2 className="text-[21px] font-bold text-stone-900 mb-3">Publisher</h2>
        <p className="text-[15.5px] leading-[1.8] text-stone-700">
          Waya Media Inc.
          <br />
          Business registration number: 105-87-55780
          <br />
          A429, 19 Guryong-gil, Mapo-gu, Seoul, Republic of Korea
        </p>
        <p className="text-[14px] leading-[1.8] text-stone-500 mt-4">
          Korean-language site:{' '}
          <Link href="/" className="text-rose-600 font-semibold hover:underline">
            nailstartup.com
          </Link>
        </p>
        <p className="text-[12.5px] text-stone-400 mt-8">Last updated: {EN_UPDATED}</p>
      </section>
    </div>
  )
}
