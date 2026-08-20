import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, FX_NOTE } from './common'

export const semiPermanentMakeupKorea: EnPage = {
  path: '/en/semi-permanent-makeup-korea',
  title: 'Semi-Permanent Makeup in Korea: Prices and the New Law (2026)',
  h1: 'Semi-Permanent Makeup in Korea',
  description:
    'Brow, eyeliner and lip semi-permanent makeup prices in Korea for 2026, the styles Korean artists actually work in, healing timelines, and where the Tattooist Act leaves the industry right now.',
  keywords: [
    'semi permanent makeup Korea',
    'Korean eyebrow tattoo',
    'microblading Seoul',
    'semi permanent makeup Seoul price',
    'Korean brow embo',
    'lip tattoo Korea',
  ],
  category: 'Korea Beauty Guide',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'Natural brows in Seoul run about **200,000-500,000 KRW (roughly $143-357)** including the first retouch. The legal position changed substantially in 2025 and is still mid-transition — this page covers both the prices and where the law actually stands as of August 2026.',
  blocks: [
    {
      t: 'h2',
      id: 'law',
      text: 'The legal situation, as of August 2026',
    },
    {
      t: 'p',
      text: 'This matters more than it would in most countries, because Korea spent three decades treating all tattooing — including cosmetic brow work — as a medical act. That changed recently, and the transition is not finished.',
    },
    {
      t: 'ul',
      items: [
        '**Until April 2025** — tattooing, including semi-permanent makeup, was interpreted as a medical procedure. Non-physicians performing it were treated as practising medicine without a licence.',
        '**May 2025** — the Supreme Court reversed its 1992 position, holding that ordinary tattooing by a non-physician does not constitute unlicensed medical practice. A 33-year precedent changed.',
        '**28 October 2025** — the **Tattooist Act (문신사법, Act No. 21070)** was promulgated. It defines tattooing and semi-permanent makeup together as "tattoo practice" and creates a national licensing system.',
        '**2026-2027** — enforcement decrees, examination standards and the registration system are being built.',
        '**29 October 2027** — the Act takes full effect. Licensing and shop registration begin operating from this date.',
        '**Until 28 October 2029** — a transitional window in which existing practitioners can obtain a licence and complete formal registration.',
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'What this means for you as a customer, right now',
      text:
        'The licensing system is **not yet in force**. Until 29 October 2027 the previous rules still apply, and no artist can hold a Tattooist Act licence yet because the exam does not exist. So "licensed tattooist" is not a credential anyone can currently show you. Judge a studio on hygiene practice, portfolio and healed results instead — and expect the market to become considerably easier to verify after 2027.',
    },
    {
      t: 'h2',
      id: 'prices',
      text: 'Prices by procedure',
    },
    {
      t: 'p',
      text: 'Korean pricing almost always bundles the first retouch, which happens one to two months after the initial session once the colour has settled. A quote that excludes the retouch is not comparable to one that includes it, so confirm which you are being given.',
    },
    {
      t: 'table',
      caption: 'Semi-permanent makeup, Korea 2026',
      head: ['Procedure', 'Method', 'KRW', 'Approx. USD', 'Lasts'],
      rows: [
        ['Natural brows (embo)', 'Hair strokes, one at a time', '200,000 - 500,000', '$143 - 357', '1 - 2 yrs'],
        ['Shadow / powder brows', 'Filled as a soft block', '250,000 - 550,000', '$179 - 393', '1.5 - 3 yrs'],
        ['Combo brows', 'Strokes plus shading', '250,000 - 600,000', '$179 - 429', '1.5 - 2.5 yrs'],
        ['Men’s brows', 'Stroke-led, denser', '200,000 - 450,000', '$143 - 321', '1 - 2 yrs'],
        ['Eyeliner', 'Along the lash line', '150,000 - 350,000', '$107 - 250', '2 - 3 yrs'],
        ['Lips', 'Full colour saturation', '300,000 - 700,000', '$214 - 500', '1.5 - 3 yrs'],
        ['First retouch (1-2 months)', 'Colour correction', '0 - 200,000', '$0 - 143', '—'],
        ['Later retouch (after ~1 yr)', 'Colour top-up', '100,000 - 250,000', '$71 - 179', '—'],
      ],
      note: FX_NOTE,
    },
    {
      t: 'table',
      caption: 'Regional variation, natural brows and combo',
      head: ['Region', 'Natural brows', 'Combo'],
      rows: [
        ['Seoul — Gangnam', '350,000 - 600,000', '400,000 - 700,000'],
        ['Seoul (other) and metro area', '250,000 - 450,000', '300,000 - 500,000'],
        ['Major cities', '200,000 - 400,000', '250,000 - 450,000'],
        ['Smaller cities', '180,000 - 350,000', '220,000 - 400,000'],
      ],
    },
    {
      t: 'h2',
      id: 'styles',
      text: 'The styles, and what "Korean brows" means',
    },
    {
      t: 'p',
      text: 'The Korean house style is softer and flatter than the arched, high-contrast brow common in Western semi-permanent work. Two features define it: a gentler arch that follows the natural brow bone, and lower pigment saturation so the healed result reads as hair rather than makeup.',
    },
    {
      t: 'h3',
      text: 'Natural / embo (자연눈썹, 엠보)',
    },
    {
      t: 'p',
      text: 'Individual hair strokes drawn one at a time in the direction the brow grows. Most convincing on normal-to-dry skin. On oily skin the strokes blur as they heal, which is why artists often steer oily skin toward shadow instead — take that advice seriously rather than as an upsell.',
    },
    {
      t: 'h3',
      text: 'Shadow / powder (섀도우, 수지)',
    },
    {
      t: 'p',
      text: 'Pigment applied as a soft graduated fill rather than as strokes. Reads like a lightly pencilled brow, holds up on all skin types including oily, and lasts the longest of the brow options.',
    },
    {
      t: 'h3',
      text: 'Combo (콤보)',
    },
    {
      t: 'p',
      text: 'Strokes at the front of the brow, shading through the body and tail. The most requested option in Korea because it gives definition without a hard edge. Priced at the top of the brow range.',
    },
    {
      t: 'h3',
      text: 'Lips (립)',
    },
    {
      t: 'p',
      text: 'Full-lip colour saturation rather than a lip line. Korean work tends toward a diffuse, blurred-edge tint rather than a defined outline. Note that lip work has the most dramatic healing arc of anything on the menu — the colour immediately after is far more intense than the result.',
    },
    {
      t: 'h2',
      id: 'healing',
      text: 'What healing actually looks like',
    },
    {
      t: 'p',
      text: 'The most common cause of panic is not knowing the timeline. Every procedure on this list goes through the same arc, and the colour you see on day one is not the result.',
    },
    {
      t: 'ol',
      items: [
        '**Days 1-3.** Colour appears 30-50% darker and sharper than the final result. Mild swelling on lips and eyeliner.',
        '**Days 4-7.** Flaking begins. Do not pick — pulling a scab out early takes the pigment with it and creates patches.',
        '**Days 7-14.** The "ghost" phase. Colour looks faded or almost gone as the healed skin layer forms over the pigment. This is normal and it is where people wrongly conclude the work failed.',
        '**Days 14-30.** Colour resurfaces and settles to its true tone.',
        '**Week 4-8.** Retouch appointment. This is where the shape and depth are corrected — the first session is deliberately conservative.',
      ],
    },
    {
      t: 'note',
      title: 'Aftercare that actually matters',
      text:
        'Keep the area dry for the first 5-7 days: no sauna or jjimjilbang, no swimming, no heavy sweating at the gym. No makeup on the area until flaking finishes. Sunscreen once healed — UV is the main cause of premature fading and colour shift. And do not book a semi-permanent procedure within a week of a flight if you can avoid it; cabin dryness makes the flaking phase worse.',
    },
    {
      t: 'h2',
      id: 'choosing',
      text: 'Choosing an artist while the licensing system is still being built',
    },
    {
      t: 'ul',
      items: [
        '**Ask for healed photos, not fresh ones.** Fresh work always looks good. Results at four to six weeks are the only meaningful portfolio. An artist who cannot produce healed photos is telling you something.',
        '**Single-use everything.** Needle cartridges opened in front of you, pigment decanted into a fresh cup, gloves throughout, disposable bed covering.',
        '**Patch test if you have any allergy history.** Pigment reactions are uncommon but not reversible on a schedule.',
        '**Expect a consultation and a drawn shape** before any needle. An artist who does not draw and confirm the shape with you first is not going to give you the shape you wanted.',
        '**Be realistic about correction.** Covering existing old work is harder and more expensive than starting fresh, and blue-grey healed pigment from previous procedures often needs removal first.',
      ],
    },
    {
      t: 'h2',
      id: 'removal',
      text: 'If you want it removed',
    },
    {
      t: 'p',
      text: 'Laser removal is a medical procedure in Korea and belongs to a dermatology clinic, not a beauty studio. Budget realistically: 100,000-300,000 KRW per session, three to eight sessions depending on pigment depth and colour, so 500,000 to over 2,000,000 KRW in total. Complete restoration to untouched skin is not always achievable, and some pigment colours resist laser entirely.',
    },
    {
      t: 'p',
      text: 'This asymmetry — cheap to apply, expensive and uncertain to reverse — is the real argument for choosing conservatively on your first procedure. Softer, lighter and smaller is always easier to build on than to undo.',
    },
  ],
  faq: [
    {
      q: 'Is semi-permanent makeup legal in Korea?',
      a: 'The position changed in 2025. In May 2025 the Supreme Court held that ordinary tattooing by a non-physician is not unlicensed medical practice, and in October 2025 the Tattooist Act (Act No. 21070) was promulgated, creating a national licensing system for tattooing and semi-permanent makeup. That Act takes full effect on 29 October 2027; until then the previous rules still apply.',
    },
    {
      q: 'Can an artist show me a tattooist licence?',
      a: 'Not yet. The Tattooist Act does not take effect until October 2027 and the national examination has not been held, so no one currently holds a licence under it. Anyone presenting a "national tattooist licence" today is misrepresenting a private certificate. Judge studios on healed portfolio work and hygiene practice instead.',
    },
    {
      q: 'How much does semi-permanent eyebrow makeup cost in Seoul?',
      a: 'Natural hair-stroke brows run 200,000-500,000 KRW, shadow brows 250,000-550,000, and combo 250,000-600,000 — usually including the first retouch. Gangnam sits at the top of those ranges; other regions run 20-40% lower. Confirm whether the retouch is included, because quotes differ on this.',
    },
    {
      q: 'How long does semi-permanent makeup last?',
      a: 'Brows one to three years depending on technique, eyeliner two to three years, and lips one and a half to three years. Oily skin, sun exposure and strong exfoliating skincare all shorten it. Shadow and powder techniques outlast hair-stroke work.',
    },
    {
      q: 'Why does the colour disappear a week after the procedure?',
      a: 'That is the normal healing arc, not a failure. Colour looks 30-50% too dark for the first three days, flakes from day four to seven, then appears faded or almost gone from day seven to fourteen as new skin forms over the pigment. It resurfaces between weeks two and four, and the retouch at week four to eight corrects the final shape and depth.',
    },
    {
      q: 'Which brow style suits oily skin?',
      a: 'Shadow or powder. Individual hair strokes blur as they heal on oily skin, so the crisp result you see on day one does not survive. An artist steering you from embo to shadow because of your skin type is giving you correct technical advice, not upselling.',
    },
    {
      q: 'How much does removal cost?',
      a: 'Laser removal is medical and must be done at a dermatology clinic: roughly 100,000-300,000 KRW per session over three to eight sessions, so 500,000 to over 2,000,000 KRW in total. Complete restoration is not guaranteed and some pigment colours resist laser. Choosing lighter and smaller on the first procedure is the practical hedge.',
    },
  ],
  related: [
    { href: '/en/eyelash-extensions-korea', label: 'Eyelash Extensions in Korea' },
    { href: '/en/skin-clinic-vs-salon', label: 'Skin Clinic vs Beauty Salon in Korea' },
    { href: '/en/personal-color-korea', label: 'Personal Colour Analysis in Korea' },
    { href: '/en/beauty-license-korea', label: 'Korean Cosmetology Licence Explained' },
  ],
}
