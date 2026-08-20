import type { Metadata } from 'next'
import Link from 'next/link'
import { hreflang } from '@/lib/hreflang'
import { EN_UPDATED } from '@/data/en/common'

const TITLE = 'Privacy Policy | Korea Beauty Guide'
const DESC =
  'How this site handles access logs, cookies and third-party advertising data, how long information is retained, and how to exercise your rights.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: {
    canonical: '/en/privacy',
    languages: hreflang('/en/privacy'),
  },
  openGraph: { title: TITLE, description: DESC, url: '/en/privacy', locale: 'en_US', type: 'article' },
  robots: { index: true, follow: true },
}

// 한국어 /privacy 와 같은 내용을 영문으로 제공한다. 법적 기준은 한국 법령이므로
// 근거 법령명은 원문 그대로 병기한다.
export default function EnPrivacy() {
  return (
    <div className="max-w-[720px] mx-auto px-4 py-16">
      <nav className="text-xs text-stone-400 mb-5 flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/en" className="hover:text-stone-700">
          Korea Beauty Guide
        </Link>
        <span aria-hidden>&rsaquo;</span>
        <span className="text-stone-600">Privacy Policy</span>
      </nav>

      <h1 className="text-[30px] md:text-[38px] font-extrabold text-stone-900 tracking-tight mb-4">Privacy Policy</h1>
      <p className="text-[15px] text-stone-500 mb-10 leading-relaxed">
        This policy applies to the English section of nailstartup.com. It mirrors the Korean-language policy, which is
        the governing version where the two differ. Last updated {EN_UPDATED}.
      </p>

      <section className="mb-10">
        <h2 className="text-[20px] font-bold text-stone-900 mb-3">1. What we process, and why</h2>
        <p className="text-[15.5px] leading-[1.8] text-stone-700 mb-3">
          This site publishes reference articles. It does not require registration, and it does not ask you for a name,
          email address, phone number or payment details. The information processed is limited to what is generated
          automatically when you visit:
        </p>
        <ul className="space-y-2 text-[15.5px] leading-[1.8] text-stone-700">
          <li className="relative pl-5">
            <span className="absolute left-0 top-[11px] w-1.5 h-1.5 rounded-full bg-rose-400" aria-hidden />
            Access logs, IP address, browser and device type
          </li>
          <li className="relative pl-5">
            <span className="absolute left-0 top-[11px] w-1.5 h-1.5 rounded-full bg-rose-400" aria-hidden />
            Cookies and similar identifiers set by this site and by third-party services
          </li>
          <li className="relative pl-5">
            <span className="absolute left-0 top-[11px] w-1.5 h-1.5 rounded-full bg-rose-400" aria-hidden />
            Aggregate usage measurement — which pages are read, and for how long
          </li>
        </ul>
        <p className="text-[15.5px] leading-[1.8] text-stone-700 mt-3">
          This is used to operate and improve the site and to serve advertising. It is not used for any other purpose,
          and any change of purpose would be notified in advance.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-[20px] font-bold text-stone-900 mb-3">2. Retention</h2>
        <p className="text-[15.5px] leading-[1.8] text-stone-700">
          Personal information is destroyed without delay once the purpose of processing has been achieved. Access
          logs, cookies and IP information are retained for <strong>three months</strong> under the Protection of
          Communications Secrets Act (통신비밀보호법).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-[20px] font-bold text-stone-900 mb-3">3. Advertising and analytics</h2>
        <p className="text-[15.5px] leading-[1.8] text-stone-700 mb-3">
          This site carries advertising served by <strong>Google AdSense</strong>. Google and its partners may use
          cookies to serve ads based on your prior visits to this and other sites. Google&rsquo;s use of advertising
          cookies enables it and its partners to serve ads to you based on your visit to this site and other sites on
          the internet.
        </p>
        <ul className="space-y-2 text-[15.5px] leading-[1.8] text-stone-700">
          <li className="relative pl-5">
            <span className="absolute left-0 top-[11px] w-1.5 h-1.5 rounded-full bg-rose-400" aria-hidden />
            You can opt out of personalised advertising through{' '}
            <a
              href="https://www.google.com/settings/ads"
              className="text-rose-600 font-semibold hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Ads Settings
            </a>
            .
          </li>
          <li className="relative pl-5">
            <span className="absolute left-0 top-[11px] w-1.5 h-1.5 rounded-full bg-rose-400" aria-hidden />
            Third-party vendor opt-outs are available at{' '}
            <a
              href="https://www.aboutads.info/choices/"
              className="text-rose-600 font-semibold hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              aboutads.info
            </a>
            .
          </li>
          <li className="relative pl-5">
            <span className="absolute left-0 top-[11px] w-1.5 h-1.5 rounded-full bg-rose-400" aria-hidden />
            Aggregate traffic measurement is provided by Vercel Analytics, which does not use cookies to track
            individuals across sites.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-[20px] font-bold text-stone-900 mb-3">4. Cookies</h2>
        <p className="text-[15.5px] leading-[1.8] text-stone-700">
          You can refuse or delete cookies at any time through your browser settings. Blocking all cookies will not
          prevent you from reading this site, since no feature here depends on being recognised between visits.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-[20px] font-bold text-stone-900 mb-3">5. Your rights</h2>
        <p className="text-[15.5px] leading-[1.8] text-stone-700">
          As a data subject you may request access to, correction of, or deletion of your personal information, and
          may request that processing be suspended. Requests are handled without delay. Because this site does not
          collect identifying information directly, most requests concern cookie and advertising identifiers, which
          are controlled through the browser and vendor settings described above.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-[20px] font-bold text-stone-900 mb-3">6. Third-party links</h2>
        <p className="text-[15.5px] leading-[1.8] text-stone-700">
          Articles here link to external sites and services. This policy does not apply to them, and we have no
          control over how they handle your information.
        </p>
      </section>

      <section>
        <h2 className="text-[20px] font-bold text-stone-900 mb-3">7. Operator</h2>
        <p className="text-[15.5px] leading-[1.8] text-stone-700">
          Waya Media Inc. (주식회사 와야미디어)
          <br />
          Business registration number: 105-87-55780
          <br />
          A429, 19 Guryong-gil, Mapo-gu, Seoul, Republic of Korea
        </p>
        <p className="text-[14px] leading-[1.8] text-stone-500 mt-4">
          The Korean-language policy is available at{' '}
          <Link href="/privacy" className="text-rose-600 font-semibold hover:underline">
            /privacy
          </Link>
          .
        </p>
      </section>
    </div>
  )
}
