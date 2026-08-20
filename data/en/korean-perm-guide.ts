import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, FX_NOTE } from './common'

export const koreanPermGuide: EnPage = {
  path: '/en/korean-perm-guide',
  title: 'Korean Perm Types Explained: Setting, Digital, Magic (2026)',
  h1: 'Korean Perm Types Explained',
  description:
    'Setting perm, digital perm, volume magic, down perm, bangs perm — what each Korean perm actually does, what it costs in 2026, which hair type it suits, and how to ask for it.',
  keywords: [
    'Korean perm',
    'Korean perm types',
    'setting perm',
    'digital perm Korea',
    'Korean perm price',
    'down perm',
    'Korean men perm',
  ],
  category: 'K-Beauty Treatments',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'Asking a Korean salon for "a perm" gets you a question back, because there are at least six distinct services under that word. This is what each one does, what it costs, and which hair it actually suits.',
  blocks: [
    {
      t: 'h2',
      id: 'overview',
      text: 'The six perms on a Korean menu',
    },
    {
      t: 'p',
      text: 'Korean perm technique developed along a different line from the Western tradition, largely because East Asian hair tends to be thick, straight and heavy — it resists curl and drops it quickly. The solutions that emerged use heat rather than chemistry alone, and they are aimed at shape and volume rather than tight curl.',
    },
    {
      t: 'table',
      caption: 'Perm menu at a glance, Seoul 2026',
      head: ['Perm', 'Korean', 'Result', 'KRW', 'Time'],
      rows: [
        ['Setting perm', '셋팅펌', 'Defined springy curls', '100,000 - 250,000', '2 - 3 hrs'],
        ['Digital perm', '디지털펌', 'Loose curls, best when dry', '120,000 - 280,000', '2.5 - 3.5 hrs'],
        ['Volume magic', '볼륨매직', 'Straight lengths, lifted roots', '120,000 - 280,000', '3 - 4 hrs'],
        ['Magic straight', '매직', 'Poker straight', '120,000 - 250,000', '3 - 5 hrs'],
        ['Down perm', '다운펌', 'Flattens sticking-out hair', '10,000 - 40,000', '20 - 30 min'],
        ['Bangs perm', '앞머리펌', 'Shapes the fringe only', '20,000 - 40,000', '20 - 30 min'],
      ],
      note: FX_NOTE,
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Length surcharge',
      text:
        'Every price above assumes short hair. Salons add **20,000-50,000 KRW for shoulder length and 50,000-100,000 KRW for waist length** on chemical services. On a perm this can be a third of the bill. Ask for the all-in figure for your length, and for the specific designer you are booking — rank changes the price too.',
    },
    {
      t: 'h2',
      id: 'setting',
      text: 'Setting perm (셋팅펌) — the default',
    },
    {
      t: 'p',
      text: 'Hair is wound onto heated rods after the first perm solution, so the curl is formed under heat and then fixed. The result is a defined, springy curl with real bounce that holds its shape when the hair is dry.',
    },
    {
      t: 'ul',
      items: [
        '**Suits:** medium to long hair, anyone who wants visible curl rather than just movement.',
        '**Holds:** three to six months.',
        '**Daily effort:** low. It looks intentional straight out of bed, which is the point.',
        '**Watch for:** heat damage on hair that has been bleached. Most salons will refuse or require a treatment course first, and they are right to.',
      ],
    },
    {
      t: 'h2',
      id: 'digital',
      text: 'Digital perm (디지털펌) — softer, dry-set',
    },
    {
      t: 'p',
      text: 'Same family as the setting perm but with temperature-controlled rods, giving looser, more natural waves. Its defining characteristic is that the curl shows most when the hair is dry and relaxes when wet — the opposite of a traditional cold perm.',
    },
    {
      t: 'ul',
      items: [
        '**Suits:** medium to long hair; people who want the "just woke up like this" wave rather than defined curl.',
        '**Holds:** four to six months, and grows out gracefully.',
        '**Daily effort:** low, but it needs to be dried with your fingers scrunching upward rather than brushed out.',
        '**Watch for:** the difference from a setting perm is subtle in a photo and obvious in person. Bring a reference and say whether you want it to look curled or just moved.',
      ],
    },
    {
      t: 'h2',
      id: 'volume-magic',
      text: 'Volume magic (볼륨매직) — the specifically Korean one',
    },
    {
      t: 'p',
      text: 'This is the service with no clean Western equivalent, and the one visitors most often end up wanting once it is explained. It straightens the mid-lengths and ends while simultaneously lifting the roots, so the hair falls smooth without going flat against the scalp.',
    },
    {
      t: 'p',
      text: 'It exists because straight Asian hair often has the opposite problem to Western hair: not frizz but weight — the root collapses and the hair sits flat. Plain straightening makes that worse. Volume magic solves both at once.',
    },
    {
      t: 'ul',
      items: [
        '**Suits:** flat roots, hair that gets oily or limp quickly, humid climates.',
        '**Holds:** three to six months at the lengths; the root lift fades faster, in two to four months, because it grows out.',
        '**Watch for:** on very fine hair, over-processing the root lift is a real risk. This is a service where designer rank is worth paying for.',
      ],
    },
    {
      t: 'p',
      text: 'If you are choosing between this and full straightening, that comparison has its own page — picking wrong on fine hair is difficult to reverse.',
    },
    {
      t: 'h2',
      id: 'men',
      text: 'Men’s perms — a whole category of their own',
    },
    {
      t: 'p',
      text: 'Men’s perming is mainstream in Korea in a way it is not in most countries, and the menu reflects that.',
    },
    {
      t: 'ul',
      items: [
        '**Down perm (다운펌)** — chemically flattens hair that sticks out sideways, especially above the ears and at the nape. Twenty minutes, 10,000-40,000 KRW, often added onto a cut. The single most common men’s chemical service in Korea.',
        '**Shadow / see-through perm (쉐도우펌)** — light texture through the top and fringe for movement without obvious curl.',
        '**Swing perm (스윙펌)** — directional wave through the fringe, the standard "Korean boy" look.',
        '**Volume perm (볼륨펌)** — root lift for thinning or flat hair on top.',
        '**Iron perm (아이롱펌)** — straight-iron perm, used to straighten or to create a defined side-swept fringe.',
      ],
    },
    {
      t: 'p',
      text: 'Men’s perms typically run 40,000-120,000 KRW and take 60-90 minutes, well below the women’s menu because the hair is shorter.',
    },
    {
      t: 'h2',
      id: 'choosing',
      text: 'Choosing by problem, not by name',
    },
    {
      t: 'table',
      caption: 'Match the problem to the service',
      head: ['Your problem', 'Ask for'],
      rows: [
        ['Hair is flat at the roots', 'Volume magic, or volume perm'],
        ['Hair is straight and will not hold a curl', 'Setting perm'],
        ['Want soft waves, minimal effort', 'Digital perm'],
        ['Hair is frizzy or unmanageable', 'Magic straight'],
        ['Hair sticks out at the sides (men)', 'Down perm'],
        ['Only the fringe needs shaping', 'Bangs perm'],
        ['Hair is bleached and damaged', 'A treatment course first — then reassess'],
      ],
    },
    {
      t: 'h2',
      id: 'booking',
      text: 'Booking and aftercare',
    },
    {
      t: 'ol',
      items: [
        '**Book ahead.** Perms are two to four hours; walk-in slots for chemical services rarely exist.',
        '**Bring two photos** — the result you want, and your hair as it is now. Korean designers will tell you directly if your hair cannot take it, which is more useful than agreement.',
        '**Do not wash your hair for 48 hours afterwards.** This is the single rule that determines whether the curl holds. Salons are firm about it.',
        '**Do not tie it up tightly** for the first two days; the shape sets during this window.',
        '**Use a curl-friendly conditioner and dry with a diffuser** or by scrunching with your fingers. Brushing a perm out is how it dies.',
        '**Book a treatment** if you are perming previously coloured hair. It is genuinely worth the 50,000-150,000 KRW here, not just an upsell.',
      ],
    },
    {
      t: 'note',
      title: 'Perm and colour on the same day',
      text:
        'Most Korean salons will do both but will space them — perm first, colour a week or two later — because doing both at once compounds the damage. If a salon agrees to same-day perm and bleach without hesitation, that is a reason to book elsewhere.',
    },
  ],
  faq: [
    {
      q: 'What is a Korean setting perm?',
      a: 'Hair is wound onto heated rods so the curl forms under heat and is then fixed, producing defined, springy curls that hold their shape when dry. It runs 100,000-250,000 KRW, takes two to three hours, and lasts three to six months. It is the default women’s perm in Korea.',
    },
    {
      q: 'What is the difference between a setting perm and a digital perm?',
      a: 'Both use heated rods, but a digital perm uses temperature-controlled rods for looser, more natural waves and costs slightly more at 120,000-280,000 KRW. The practical difference is definition: a setting perm reads as curls, a digital perm as movement. A digital perm also shows most when the hair is dry and relaxes when wet.',
    },
    {
      q: 'How much does a perm cost in Korea?',
      a: 'Roughly 100,000-250,000 KRW for a setting perm and 120,000-280,000 KRW for a digital perm or volume magic, before length surcharges of 20,000-100,000 KRW depending on how long your hair is. Men’s perms run 40,000-120,000 KRW. The stylist’s rank also changes the price by up to 2.5 times.',
    },
    {
      q: 'What is a down perm?',
      a: 'A twenty-minute chemical service that flattens hair sticking out sideways, mainly above the ears and at the nape. It costs 10,000-40,000 KRW and is usually added to a men’s cut. It is the most common men’s chemical service in Korea and has no real Western equivalent.',
    },
    {
      q: 'How long does a Korean perm last?',
      a: 'Three to six months for setting perms and volume magic, four to six months for digital perms. Down perms and bangs perms last one to two months since they cover a small area that grows out quickly. Not washing your hair for the first 48 hours makes a measurable difference to how long the curl holds.',
    },
    {
      q: 'Can I perm bleached hair in Korea?',
      a: 'Most reputable salons will refuse, or require a treatment course first, and they are right to — perming already-compromised hair is how it breaks. A salon that agrees to perm heavily bleached hair without hesitation is one to walk away from.',
    },
    {
      q: 'Do I need to book in advance for a perm?',
      a: 'Yes. Perms take two to four hours and salons block that time ahead. Walk-in slots exist for cuts at larger salons but essentially never for chemical services. Naver Booking is where actual availability is shown, including which designer is free.',
    },
  ],
  related: [
    { href: '/en/volume-magic-perm', label: 'Volume Magic vs Straight Perm' },
    { href: '/en/hair-salon-korea', label: 'Hair Salons in Korea: Perm, Colour, Cut' },
    { href: '/en/scalp-scaling', label: 'Korean Scalp Scaling Explained' },
    { href: '/en', label: 'Korea Beauty Guide: start here' },
  ],
}
