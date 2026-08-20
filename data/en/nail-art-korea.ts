import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, FX_NOTE } from './common'

export const nailArtKorea: EnPage = {
  path: '/en/nail-art-korea',
  title: 'Korean Nail Art Styles and Prices Explained (2026)',
  h1: 'Korean Nail Art: Styles, Prices and How to Ask for Them',
  description:
    'Syrup gel, cat-eye, glazed chrome, blooming — what the Korean nail art styles are actually called, what each costs per nail in 2026, and how to ask for the design you saw online.',
  keywords: [
    'Korean nail art',
    'Korean nail designs',
    'syrup nails',
    'cat eye nails Korea',
    'glazed donut nails',
    'Korean nail art prices',
    'jelly nails Korea',
  ],
  category: 'K-Beauty Treatments',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'Korean nail art is priced **per nail on top of a base set**, not as a package. A base gel set is 35,000-60,000 KRW; the design you saw on Instagram usually adds another 20,000-100,000 KRW depending on which of the styles below it is.',
  blocks: [
    {
      t: 'h2',
      id: 'pricing-model',
      text: 'How art is priced — the part that surprises people',
    },
    {
      t: 'p',
      text: 'Almost every Korean studio quotes in two layers: a base service (single colour, French, extensions) plus art charged per finger. A design that covers two accent nails costs a fraction of the same design across all ten. This is why two people can post the same salon and quote wildly different totals.',
    },
    {
      t: 'table',
      caption: 'Art surcharge by complexity, per nail',
      head: ['Tier', 'What it covers', 'KRW per nail', 'Approx. USD'],
      rows: [
        ['Simple', 'Glitter gradient, single line, one small part', '2,000 - 5,000', '$1.5 - 3.5'],
        ['Standard', 'Chrome, cat-eye, marble, small hand-painted motif', '5,000 - 10,000', '$3.5 - 7'],
        ['Detailed', 'Fine linework, florals, character faces, layered art', '10,000 - 20,000', '$7 - 14'],
        ['3D / parts-heavy', 'Sculpted elements, dense pearls and stones, charms', '15,000 - 40,000', '$11 - 29'],
      ],
      note: FX_NOTE,
    },
    {
      t: 'note',
      title: 'Ask for the total, not the tier',
      text:
        'Send your reference photo when you book and ask: "How much in total, including the base?" (전체 얼마인가요?). Any established studio will quote a full figure before you arrive. The awkward conversations happen when the design is decided in the chair.',
    },
    {
      t: 'h2',
      id: 'styles',
      text: 'The styles, with the names Korean salons actually use',
    },
    {
      t: 'p',
      text: 'Overseas these get renamed constantly. If you use the Korean term, the technician knows immediately what you mean — and searching that term on Naver or Instagram surfaces the studios that specialise in it.',
    },
    {
      t: 'h3',
      text: 'Syrup / jelly gel (시럽 네일, 젤리 네일)',
    },
    {
      t: 'p',
      text: 'Sheer tinted gel built in translucent layers so the natural nail shows through. The effect is depth rather than coverage — like tinted glass. It is the default "clean girl" Korean look and one of the cheapest to get, because the colour work is layering rather than painting. Expect little to no art surcharge if left plain.',
    },
    {
      t: 'h3',
      text: 'Magnetic / cat-eye (마그네틱, 캣아이)',
    },
    {
      t: 'p',
      text: 'Gel loaded with metallic particles that a magnet pulls into a moving band of light. Korean studios push this well past the single stripe you see elsewhere — crossed bands, curved shells, galaxy layering over a dark base. Standard tier, roughly 5,000-10,000 KRW per nail.',
    },
    {
      t: 'h3',
      text: 'Glazed and chrome (글레이즈드, 크롬)',
    },
    {
      t: 'p',
      text: 'Powder buffed over cured gel for a mirror or pearl finish. Over a milky base this is the "glazed donut" look; over dark colours it becomes a hard mirror chrome. Technically fast, so it prices at the low end of standard tier.',
    },
    {
      t: 'h3',
      text: 'Blooming gel (블루밍)',
    },
    {
      t: 'p',
      text: 'A clear gel that makes colour bleed outward when dropped into it, producing soft ink-in-water florals. Very common in Korean spring menus. Hand-worked per nail, so it sits in the standard-to-detailed range.',
    },
    {
      t: 'h3',
      text: 'Hand-painted detail (수작업 아트)',
    },
    {
      t: 'p',
      text: 'Fine brush work: single-line drawings, tiny florals, character illustrations, lettering. This is where Korean studios genuinely separate from the global average, and it is also the most expensive tier. A full set of character art is routinely 100,000-200,000 KRW all in.',
    },
    {
      t: 'h3',
      text: 'Parts and 3D (파츠, 입체 아트)',
    },
    {
      t: 'p',
      text: 'Pearls, rhinestones, metal frames and sculpted elements set into or on top of the gel. Beautiful, but the practical cost is snagging and weight — dense parts work catches on clothing and lifts sooner. Most studios will steer you toward accent nails rather than a full set.',
    },
    {
      t: 'h2',
      id: 'asking',
      text: 'How to get the design you actually want',
    },
    {
      t: 'ol',
      items: [
        '**Bring photos, not descriptions.** Three or four reference images beat any amount of explanation across a language gap. Save them to your phone before you go.',
        '**Say which parts matter.** Technicians will adapt a design to your nail length and shape. Point at the one element you care about most — the colour, the linework, the finish — so the adaptation keeps it.',
        '**Name your nail length and shape.** 라운드 (round), 스퀘어 (square), 스퀘어오프 (squoval), 아몬드 (almond), 스틸레토 (stiletto). Length as 짧게 (short) or 길게 (long).',
        '**Send the reference at booking time.** This lets the studio price it, order any parts, and block enough time. Same-day design changes are the main cause of rushed work.',
        '**Ask how long it will last.** Heavy 3D and long extensions have real trade-offs. A good technician will tell you honestly if a design will not survive two weeks of typing.',
      ],
    },
    {
      t: 'note',
      title: 'A useful search trick',
      text:
        'Search the Korean style name plus 네일 on Instagram (for example 캣아이 네일, 블루밍 네일) and look at the geotags. Studios that specialise in a technique post it constantly. That is a far better filter than any English-language "best nail salon in Seoul" list.',
    },
    {
      t: 'h2',
      id: 'longevity',
      text: 'How long it lasts and what to expect afterwards',
    },
    {
      t: 'p',
      text: 'A well-prepped Korean gel set typically holds three to four weeks before the regrowth line becomes obvious. The variable is not the art but the prep — the 15-25 minutes of dry manicure and cuticle work before any product goes on is what prevents lifting.',
    },
    {
      t: 'ul',
      items: [
        '**Weeks 1-2:** no visible movement. Chrome and glazed finishes dull slightly.',
        '**Week 3:** regrowth becomes visible at the cuticle. Most Korean customers rebook here.',
        '**Week 4+:** lifting risk rises sharply, and lifted gel traps moisture underneath. This is the point at which removal stops being optional.',
        '**Removal:** always soak-off, never peeling. Peeling gel takes layers of nail plate with it.',
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Do not let anyone file your natural nail thin',
      text:
        'Heat or tenderness during e-file work means the drill has gone into the nail plate, not just the product. Korean technicians are generally trained conservatively on this, but the risk exists anywhere. Say something immediately if you feel burning — nail plate damage takes about six months of growth to fully replace.',
    },
    {
      t: 'h2',
      id: 'diy',
      text: 'Salon versus semi-cured gel strips',
    },
    {
      t: 'p',
      text: 'Korea is also where semi-cured gel strips came from — pre-made gel sheets you press on and cure under a small lamp at home. They are worth knowing about because the economics are completely different: roughly 5,000-15,000 KRW per set versus 50,000+ in a chair, and around 10 minutes versus 90.',
    },
    {
      t: 'table',
      caption: 'Salon set versus semi-cured strips',
      head: ['', 'Salon gel', 'Semi-cured strips'],
      rows: [
        ['Cost', '35,000 - 150,000 KRW', '5,000 - 15,000 KRW'],
        ['Time', '60 min - 3 hrs', '10 - 15 min'],
        ['Wear', '3 - 4 weeks', '1 - 2 weeks'],
        ['Custom art', 'Unlimited', 'Printed designs only'],
        ['Fit', 'Shaped to your nail', 'Nearest size in the pack'],
        ['Removal', 'Soak-off, needs care', 'Peel or soak, low risk'],
      ],
    },
    {
      t: 'p',
      text: 'For a two-week trip, strips are the sensible option. For a design you actually want photographed, the chair is worth it — the per-nail hand painting is the thing that does not exist in a printed sheet.',
    },
  ],
  faq: [
    {
      q: 'What is Korean nail art, exactly?',
      a: 'Less a single style than a set of technical habits: heavy cuticle prep before product, thin natural-looking builds, sheer layered colour rather than opaque coverage, and per-nail hand painting. The recognisable looks — syrup gel, cat-eye, glazed chrome, blooming florals — all sit on top of that base approach.',
    },
    {
      q: 'How much does Korean nail art cost?',
      a: 'A base gel set is 35,000-60,000 KRW, and art is added per nail: roughly 2,000-5,000 KRW for simple accents, 5,000-10,000 for chrome or cat-eye, 10,000-20,000 for detailed hand painting, and 15,000-40,000 for 3D and parts work. A full set with detailed art commonly lands at 100,000-200,000 KRW total.',
    },
    {
      q: 'What are syrup nails?',
      a: 'Sheer tinted gel applied in translucent layers so the natural nail stays visible underneath, giving depth rather than coverage. It is one of the most requested Korean finishes and, left plain, usually carries no art surcharge at all.',
    },
    {
      q: 'How do I ask for a specific design if I do not speak Korean?',
      a: 'Send reference photos when you book rather than describing anything. Add your preferred length and shape using the Korean terms — 짧게 or 길게 for length, 라운드, 스퀘어, 아몬드 for shape — and ask for a total price including the base set. Sending the reference in advance also lets the studio block enough time and order any parts.',
    },
    {
      q: 'How long does Korean gel last?',
      a: 'Three to four weeks is normal, with regrowth becoming visible around week three. The durability comes from the long dry-manicure prep rather than from the gel brand. Past four weeks, lifted gel starts trapping moisture underneath, so removal stops being optional.',
    },
    {
      q: 'Are semi-cured gel strips worth it instead?',
      a: 'For short trips, yes — 5,000-15,000 KRW and about ten minutes, lasting one to two weeks. What you give up is fit and custom art: strips come in fixed sizes with printed designs, while a salon set is shaped to your nail and hand painted.',
    },
  ],
  related: [
    { href: '/en/nail-salon-korea', label: 'Nail Salons in Korea: Prices and What to Expect' },
    { href: '/en/personal-color-korea', label: 'Personal Colour Analysis in Korea' },
    { href: '/en/aqua-peel', label: 'What Is Aqua Peel?' },
    { href: '/en', label: 'Korea Beauty Guide: start here' },
  ],
}
