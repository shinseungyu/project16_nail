import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO, FX_NOTE } from './common'

export const workBeautyIndustryKorea: EnPage = {
  path: '/en/work-beauty-industry-korea',
  title: 'Working in Korea’s Beauty Industry: A Realistic Guide (2026)',
  h1: 'Working in Korea’s Beauty Industry',
  description:
    'What beauty work in Korea actually pays, how the assistant-to-designer career ladder works, the visa reality for foreign nationals, and an honest assessment of whether the path is viable.',
  keywords: [
    'work as beautician in Korea',
    'beauty jobs Korea',
    'hairdresser jobs Korea foreigner',
    'beauty visa Korea',
    'Korean salon salary',
    'nail technician jobs Korea',
  ],
  category: 'Working in Korean Beauty',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    'Beauty work in Korea is licensed, competitive, and pays modestly at entry level before rising sharply for those who build a client base. For foreign nationals the licence is rarely the hard part — **visa status is**, and it is worth resolving that question before anything else.',
  blocks: [
    {
      t: 'h2',
      id: 'reality',
      text: 'Start with the constraint that decides everything',
    },
    {
      t: 'p',
      text: 'There is no "beauty visa" in Korea. Whether you can work in a salon comes down to which residence status you already hold, and for most people arriving from abroad specifically to do this work, the answer is that no straightforward route exists.',
    },
    {
      t: 'table',
      caption: 'Status and what it allows, in broad terms',
      head: ['Status', 'Beauty work?', 'Practical note'],
      rows: [
        ['F-2, F-5, F-6 and similar', 'Generally yes', 'Employment permitted without separate sponsorship. This is the realistic route.'],
        ['F-4 (overseas Korean)', 'Generally yes, with limits', 'Broad work rights, some occupational restrictions apply.'],
        ['E-7 (specific occupation)', 'Difficult', 'Needs an employer sponsor and approval for the specific role; beauty service roles are not readily approved.'],
        ['D-10 (job seeking)', 'No', 'Permits job search, not paid work.'],
        ['D-2 / D-4 (study)', 'No', 'Ordinary employment not permitted; limited part-time work needs separate permission.'],
        ['C-3 / K-ETA visitor', 'No', 'No paid work of any kind.'],
      ],
      note:
        'Immigration categories and permitted activities change. Confirm your own situation with **Hi Korea** or the Immigration Contact Center (1345, multilingual). Nothing here is immigration advice.',
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Working outside your status is not a grey area',
      text:
        'Unauthorised employment carries fines, deportation and re-entry bans, and the consequences fall on you rather than on the salon. It also makes any later legitimate application substantially harder. If someone offers you cash-in-hand salon work on a study or tourist status, the risk being transferred to you is much larger than the wage.',
    },
    {
      t: 'h2',
      id: 'licence',
      text: 'The licence, briefly',
    },
    {
      t: 'p',
      text: 'Assuming your status permits employment, you still need the national technical qualification for the discipline you want to work in — hair, skin, nails, makeup, or barbering, each licensed separately. Private certificates and foreign licences carry no legal weight in Korea.',
    },
    {
      t: 'p',
      text: 'The exam costs about 41,400 KRW in total, is held quarterly, has no education or nationality requirement, and is conducted in Korean only. Most candidates take three to six months. The full breakdown is on our cosmetology licence page.',
    },
    {
      t: 'h2',
      id: 'ladder',
      text: 'The career ladder, and why the first two years are hard',
    },
    {
      t: 'p',
      text: 'Korean salons run an apprenticeship structure that is more formalised than in most Western markets. Understanding it explains both the low entry pay and the steep later curve.',
    },
    {
      t: 'ol',
      items: [
        '**Intern / assistant.** Shampooing, prep, cleaning, watching. One to two years is normal. Pay is at or near minimum wage and the hours are long.',
        '**Junior designer.** You take your own clients. Pay shifts from salary toward a commission share on the services you perform.',
        '**Senior designer.** An established client base, higher commission share, and a price multiplier of roughly 1.3 to 1.6 times the base menu.',
        '**Director.** 1.6 to 2.5 times base pricing, and often a stake in the business.',
        '**Owner or freelancer.** Renting a chair, opening a studio, or building an independent client base.',
      ],
    },
    {
      t: 'table',
      caption: 'Indicative monthly earnings, 2026',
      head: ['Stage', 'Monthly (KRW)', 'Approx. USD', 'Structure'],
      rows: [
        ['Intern / assistant', '2,100,000 - 2,600,000', '$1,500 - 1,860', 'Mostly fixed'],
        ['Junior designer', '2,500,000 - 3,500,000', '$1,790 - 2,500', 'Base plus commission'],
        ['Senior designer', '3,500,000 - 6,000,000', '$2,500 - 4,290', 'Commission-led'],
        ['Director / top designer', '6,000,000 - 12,000,000+', '$4,290 - 8,570+', 'Commission plus share'],
        ['Nail / lash technician (employed)', '2,200,000 - 3,500,000', '$1,570 - 2,500', 'Base plus incentive'],
        ['Skin care technician (employed)', '2,300,000 - 3,600,000', '$1,640 - 2,570', 'Base plus incentive'],
      ],
      note:
        FX_NOTE + ' These are indicative ranges, not survey data — actual pay varies widely by region, salon tier and how quickly you build repeat clients.',
    },
    {
      t: 'p',
      text: 'The dispersion at the top is the important feature. Beauty work in Korea pays poorly as a job and well as a practice. Everything depends on whether clients come back for **you** specifically, which is why the industry is structured around named designers rather than salon brands.',
    },
    {
      t: 'h2',
      id: 'conditions',
      text: 'Working conditions, honestly',
    },
    {
      t: 'ul',
      items: [
        '**Hours are long.** Salons commonly open 10:00 to 20:00 or later, six days a week, with one weekday off. Weekends are the busiest days and you will work them.',
        '**Standing all day,** and the physical toll is real. Wrist, shoulder and lower-back problems are the industry’s occupational injuries.',
        '**Hierarchy matters.** The senior-junior structure in Korean salons is more pronounced than most Western workplaces, and the assistant years are genuinely deferential.',
        '**Korean is non-negotiable** for anything beyond a tourist-facing salon. You need it for the exam, for the clients, and for the salon floor.',
        '**Chemical exposure** in hair and nail work is a long-run health consideration. Ventilation quality varies a lot between salons and is worth asking about at interview.',
      ],
    },
    {
      t: 'h2',
      id: 'niches',
      text: 'Where a foreign background is actually an advantage',
    },
    {
      t: 'p',
      text: 'Being a foreign practitioner is mostly a disadvantage in the mainstream market — you are competing against people with native language, local training and existing networks. There are, however, real niches where it inverts.',
    },
    {
      t: 'ul',
      items: [
        '**Foreign-resident clientele.** Itaewon, Hannam, Yongsan and the areas around international schools have a substantial customer base that specifically wants a stylist who understands non-Korean hair and can consult in English.',
        '**Textured and curly hair.** Genuinely underserved in Korea. A stylist trained in textured hair has a differentiated skill rather than a competing one.',
        '**Tourist-facing services.** Studios in Myeongdong, Hongdae and Gangnam that market to visitors value English-language capacity directly.',
        '**Content and instruction.** Explaining Korean technique to an English-speaking audience is a market with more demand than supply, and it does not require you to compete on the salon floor at all.',
        '**Bringing technique home.** Training in Korea and practising elsewhere is the path many people actually take, and it sidesteps the visa problem entirely.',
      ],
    },
    {
      t: 'h2',
      id: 'assessment',
      text: 'An honest assessment',
    },
    {
      t: 'p',
      text: 'If you already hold an F-series status and speak Korean, this is a viable career with a clear ladder, a low licensing cost, and meaningful upside for people who build a following. The industry is not closed to you in any way that matters.',
    },
    {
      t: 'p',
      text: 'If you are outside Korea, hoping the licence will produce a visa, the sequence does not work that way — the qualification does not create a route to residence, and E-7 sponsorship for beauty service roles is not a reliable path. In that case the more realistic versions of the goal are: come for training rather than employment, arrive through a different status route first, or apply Korean technique in a market where you already have the right to work.',
    },
    {
      t: 'p',
      text: 'Whichever version applies, resolve the status question before spending three to six months on an exam conducted in a language you would also need to master. That order saves the most time.',
    },
  ],
  faq: [
    {
      q: 'Is there a beauty visa for Korea?',
      a: 'No. Korea has no visa category for beauty work as such. Whether you can work in a salon depends on the residence status you already hold — F-series statuses generally permit employment, E-7 requires employer sponsorship for a specific approved role and is difficult for beauty service jobs, and student or visitor statuses do not permit ordinary employment.',
    },
    {
      q: 'Can I work in a Korean salon as a foreigner?',
      a: 'Yes, if two conditions are met: your residence status permits employment, and you hold the Korean national technical qualification for that discipline. The licence is usually the easier of the two. Working outside your status carries fines, deportation and re-entry bans, and the consequences fall on you rather than the salon.',
    },
    {
      q: 'How much do hairdressers earn in Korea?',
      a: 'Indicatively, interns and assistants earn around 2.1-2.6 million KRW a month, junior designers 2.5-3.5 million, senior designers 3.5-6 million, and directors 6-12 million or more. The spread at the top is the point — pay is commission-led, so it depends on whether clients return for you specifically.',
    },
    {
      q: 'How long does it take to become a designer in a Korean salon?',
      a: 'One to two years as an intern or assistant is normal before you take your own clients, and pay during that period is at or near minimum wage with long hours. The Korean salon apprenticeship is more formalised than in most Western markets, which explains both the low entry pay and the steeper later curve.',
    },
    {
      q: 'Do I need to speak Korean to work in a Korean salon?',
      a: 'For anything beyond a tourist-facing salon, yes. The licensing exam is in Korean only with no English paper, client consultation happens in Korean, and the salon floor operates in Korean. The exceptions are studios serving foreign residents or visitors, where English is an asset rather than a gap.',
    },
    {
      q: 'Where does a foreign background actually help?',
      a: 'Serving foreign residents around Itaewon, Hannam and international schools; textured and curly hair, which is genuinely underserved in Korea; tourist-facing studios in Myeongdong, Hongdae and Gangnam; and explaining Korean technique to an English-speaking audience, which does not require competing on the salon floor at all.',
    },
  ],
  related: [
    { href: '/en/beauty-license-korea', label: 'Korean Cosmetology Licence Explained' },
    { href: '/en/open-beauty-salon-korea', label: 'Opening a Salon in Korea (Foreigners)' },
    { href: '/en/hair-salon-korea', label: 'Hair Salons in Korea: Perm, Colour, Cut' },
    { href: '/en', label: 'Korea Beauty Guide: start here' },
  ],
}
