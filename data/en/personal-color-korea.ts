import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, FX_NOTE } from './common'

export const personalColorKorea: EnPage = {
  path: '/en/personal-color-korea',
  title: 'Personal Colour Analysis in Korea: Price and Process (2026)',
  h1: 'Personal Colour Analysis in Korea',
  description:
    'What a Korean personal colour consultation actually involves, what the 4-season and 12-tone systems mean, 2026 prices, how to book one in English, and whether it is worth the money.',
  keywords: [
    'personal color Korea',
    'personal color analysis Seoul',
    'Korean personal color',
    'personal color consultation price',
    'personal color Seoul English',
    '12 tone personal color',
  ],
  category: 'K-Beauty Treatments',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'A personal colour consultation in Seoul costs **80,000-250,000 KRW (roughly $57-179)** and takes 60-120 minutes. A consultant drapes fabric swatches against your bare face under controlled lighting and works out which colour family makes your skin read as even and awake.',
  blocks: [
    {
      t: 'h2',
      id: 'what',
      text: 'What actually happens in a session',
    },
    {
      t: 'p',
      text: 'The method is old — colour draping has existed since the 1980s — but Korea industrialised it. What was a niche image-consulting service elsewhere became a mainstream purchase here, with studios in every major shopping district and a market of dedicated consultants.',
    },
    {
      t: 'ol',
      items: [
        '**Preparation.** Makeup removed completely, hair pulled back and covered with a white cloth or cape, no coloured clothing visible. Any of these left in place distorts the result.',
        '**Controlled lighting.** Sessions run under standardised daylight-balanced lighting, which is the entire methodological point. A consultation by a window is not a consultation.',
        '**Warm versus cool.** Gold and silver drapes first, then broader warm and cool swatch families. This is the split that matters most and it is usually clear within minutes.',
        '**Value and saturation.** Light versus deep, muted versus bright. This narrows a season into a specific tone.',
        '**Confirmation.** The consultant holds your two closest candidates side by side, often with a mirror and photos, so you can see the difference yourself rather than being told.',
        '**Result and materials.** You leave with a season, a swatch fan or card set, and usually recommendations for makeup shades, hair colour and metals.',
      ],
    },
    {
      t: 'note',
      title: 'What "suits you" actually means here',
      text:
        'A flattering drape makes shadows under the eyes recede, evens out redness, and sharpens the jawline. An unflattering one pulls out sallowness or grey, deepens under-eye shadow, and makes the face look tired. It is a real, observable effect on skin appearance — not a personality reading, and not a rule about what you are allowed to wear.',
    },
    {
      t: 'h2',
      id: 'systems',
      text: 'Four seasons, twelve tones, sixteen types',
    },
    {
      t: 'p',
      text: 'Studios advertise different systems and the difference is granularity, not disagreement. All of them start from the same two axes.',
    },
    {
      t: 'table',
      caption: 'The four base seasons',
      head: ['Season', 'Undertone', 'Character', 'Typical best colours'],
      rows: [
        ['Spring', 'Warm', 'Bright, light, clear', 'Coral, peach, warm ivory, light gold'],
        ['Summer', 'Cool', 'Soft, light, muted', 'Rose pink, lavender, soft blue, grey'],
        ['Autumn', 'Warm', 'Deep, muted, rich', 'Camel, olive, rust, deep gold'],
        ['Winter', 'Cool', 'Deep, clear, high contrast', 'True red, navy, black, pure white'],
      ],
    },
    {
      t: 'p',
      text: 'The 12-tone system splits each season into three (for example spring bright, spring light, spring warm), and 16-type systems split further. More subdivision means a more specific palette but also more consultant judgement — the boundary cases genuinely are close calls, which is why two studios can put the same person one tone apart.',
    },
    {
      t: 'h2',
      id: 'vs-western',
      text: 'If you know the Western 12-season system',
    },
    {
      t: 'p',
      text: 'Seasonal colour analysis is not a Korean invention — versions have existed in the West since the 1980s. What Korea did was systematise and commercialise it: dedicated studios, standardised lighting, printed palette cards, and follow-on services are all normal here.',
    },
    {
      t: 'table',
      caption: 'Same theory, different product',
      head: ['', 'Korea', 'Western 12-season'],
      rows: [
        ['Base framework', 'Four seasons, often subdivided', 'Four seasons x three variations'],
        ['Format', 'Usually an in-person studio session', 'In-person or online'],
        ['Typical duration', '40 min - 2 hrs', 'Varies'],
        ['Follow-on services', 'Makeup, shopping, hair colour advice', 'Less standardised'],
      ],
    },
    {
      t: 'h3',
      text: 'Why app results are unreliable',
    },
    {
      t: 'table',
      head: ['Factor', 'Problem'],
      rows: [
        ['Lighting', 'Colour temperature changes apparent skin tone dramatically'],
        ['Camera processing', 'Phones apply automatic colour correction'],
        ['Filters', 'Even switched off, often not fully off'],
        ['Makeup', 'Impossible to assess accurately over foundation'],
        ['Screen calibration', 'Every display renders colour differently'],
      ],
    },
    {
      t: 'p',
      text: 'Treat app results as entertainment. If you want a usable answer, an in-person session under controlled lighting is the only reliable route.',
    },
    {
      t: 'h2',
      id: 'price',
      text: 'Prices and formats',
    },
    {
      t: 'table',
      caption: 'Personal colour consultation, Seoul 2026',
      head: ['Format', 'KRW', 'Approx. USD', 'Time'],
      rows: [
        ['Basic 4-season diagnosis', '80,000 - 130,000', '$57 - 93', '50 - 60 min'],
        ['12-tone diagnosis', '120,000 - 200,000', '$86 - 143', '80 - 100 min'],
        ['Diagnosis + makeup consultation', '150,000 - 250,000', '$107 - 179', '100 - 120 min'],
        ['Diagnosis + styling / body shape', '200,000 - 400,000', '$143 - 286', '2 - 3 hrs'],
        ['Couple or group session (per person)', '70,000 - 150,000', '$50 - 107', '—'],
        ['Add-on: professional photos', '30,000 - 80,000', '$21 - 57', '—'],
      ],
      note: FX_NOTE,
    },
    {
      t: 'p',
      text: 'Areas: Hongdae and Sinchon studios skew younger and cheaper; Gangnam and Apgujeong run premium formats with styling attached; Myeongdong has the highest concentration of studios that market to visitors and are set up to work in English.',
    },
    {
      t: 'h2',
      id: 'english',
      text: 'Booking one as a visitor',
    },
    {
      t: 'p',
      text: 'This is one of the more language-dependent services on a Korean beauty menu, because the value is in the explanation. A consultation you cannot follow is a swatch card you paid a lot for.',
    },
    {
      t: 'ul',
      items: [
        '**Search Peoseoneol keolleo plus the neighbourhood on Naver Map** for the full local list, or search "personal color consultation Seoul English" on Instagram for studios that market to visitors explicitly.',
        '**Confirm English before booking, not on arrival.** Ask directly in your first message. Many studios that say "English OK" mean a printed English result sheet rather than an English session.',
        '**Ask what you leave with.** A swatch fan, a written report, a makeup shade list, photos — this varies more between studios than the diagnosis itself does.',
        '**Book a weekday.** Weekend slots in popular studios fill weeks ahead.',
        '**Arrive with no makeup**, or at least be prepared to remove it. Some studios charge for removal time.',
      ],
    },
    {
      t: 'note',
      title: 'Useful terms',
      text:
        'Peoseoneol keolleo (personal colour), Jindan (diagnosis), Womton (warm tone), Kulton (cool tone), Bom (spring), Yeoreum (summer), Gaeul (autumn), Gyeoul (winter), Yeyak (booking), Yeongeo ganeunghangayo? (do you speak English?).',
    },
    {
      t: 'h2',
      id: 'worth-it',
      text: 'Is it worth the money?',
    },
    {
      t: 'p',
      text: 'An honest answer requires separating two claims. The first — that some colours make a given face look more even and awake than others under controlled light — is straightforwardly observable, and you see it happen during the draping. The second — that this yields a precise, permanent, transferable classification — is a much weaker claim. Consultant judgement, lighting differences and system granularity all introduce variation, and borderline cases really are borderline.',
    },
    {
      t: 'p',
      text: 'What it is genuinely good for:',
    },
    {
      t: 'ul',
      items: [
        '**Foundation and lipstick shopping.** The single most practical return. Knowing your undertone eliminates most of the shelf and most of the wasted money.',
        '**Hair colour decisions,** where a wrong choice is expensive and slow to fix.',
        '**Choosing metals** for glasses, jewellery and watches.',
        '**Building a coherent wardrobe** if you are starting over or minimising.',
      ],
    },
    {
      t: 'p',
      text: 'What it is not good for: being told what you may not wear. A well-run consultation is descriptive — here is the effect this colour has on your skin — not prescriptive. If a consultant is issuing prohibitions rather than showing you differences, the session has drifted from method into sales.',
    },
    {
      t: 'p',
      text: 'If you are combining this with other appointments during a Korea trip, the natural pairing is a makeup consultation on the same day, and hair colour on a later day once you know your palette.',
    },
  ],
  faq: [
    {
      q: 'How much does personal colour analysis cost in Seoul?',
      a: 'A basic four-season diagnosis is 80,000-130,000 KRW, a 12-tone diagnosis 120,000-200,000 KRW, and a session with makeup consultation 150,000-250,000 KRW. Full styling packages run 200,000-400,000 KRW. Group and couple bookings are usually cheaper per person.',
    },
    {
      q: 'What happens during a personal colour consultation?',
      a: 'Your makeup is removed and hair covered, then a consultant drapes fabric swatches against your bare face under daylight-balanced lighting — gold versus silver first, then warm and cool families, then value and saturation. You compare the two closest candidates yourself before receiving a season, a swatch set and shade recommendations. It takes 60-120 minutes.',
    },
    {
      q: 'What is the difference between the 4-season and 12-tone systems?',
      a: 'Granularity, not disagreement. The four seasons split by undertone and character; the 12-tone system divides each season into three for a more specific palette. More subdivision means more consultant judgement at the boundaries, which is why two studios can place the same person one tone apart.',
    },
    {
      q: 'Can I get a personal colour consultation in English?',
      a: 'Yes, but confirm it in advance rather than on arrival — some studios that advertise English mean a printed English result sheet, not an English-language session. Myeongdong has the highest concentration of studios set up for visitors. Since the value of this service is largely in the explanation, language matters more here than for a facial or a manicure.',
    },
    {
      q: 'Is personal colour analysis scientifically valid?',
      a: 'Partly. That some colours make a face look more even and awake under controlled lighting is observable, and you watch it happen during the draping. That the result is a precise, permanent classification is a weaker claim — consultant judgement, lighting and system granularity all introduce variation, and borderline cases genuinely are borderline.',
    },
    {
      q: 'What should I do to prepare?',
      a: 'Arrive with no makeup, or expect to remove it — some studios charge for removal time. Avoid brightly coloured clothing near your face, tie hair back, and book a weekday if you can, since weekend slots at popular studios fill weeks ahead.',
    },
    {
      q: 'What do I actually get out of it?',
      a: 'The most practical return is foundation and lipstick shopping, where knowing your undertone eliminates most of the shelf. After that: hair colour decisions, choosing metals for glasses and jewellery, and building a coherent wardrobe. It is descriptive rather than prescriptive — a consultant issuing prohibitions rather than showing you differences has drifted into sales.',
    },
      {
      q: 'Are free app diagnoses accurate?',
      a: 'Not particularly. Lighting, camera colour correction, filters and screen calibration all distort the result, and none of that is fixable in software. Use them for fun, not for decisions.',
    },
    {
      q: 'Why did two studios give me different results?',
      a: 'Different classification systems and different lighting conditions. Treat the outcome as guidance about which colour families tend to flatter you, not as a fixed fact about yourself.',
    },
  ],
  related: [
    { href: '/en/nail-art-korea', label: 'Korean Nail Art Styles and Prices' },
    { href: '/en/semi-permanent-makeup-korea', label: 'Semi-Permanent Makeup in Korea' },
    { href: '/en/hair-salon-korea', label: 'Hair Salons in Korea: Perm, Colour, Cut' },
    { href: '/en/skin-clinic-vs-salon', label: 'Skin Clinic vs Beauty Salon in Korea' },
  ],
}
