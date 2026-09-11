import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, EXTENSIONS_TENSION_NOTE } from './common'

export const hairExtensionsCost: EnPage = {
  path: '/en/hair-extensions-cost',
  title: 'How Much Do Hair Extensions Cost? Full Breakdown',
  h1: 'How Much Do Hair Extensions Cost? A Full Breakdown by Method',
  description:
    'Hair extension install costs range from $100 (clip-in) to $2,500 (keratin bond), plus ongoing maintenance. A full breakdown by method and by year.',
  keywords: [
    'hair extensions cost',
    'how much do hair extensions cost',
    'hair extensions price',
    'tape-in extensions cost',
    'micro-link extensions cost',
  ],
  category: 'Hair Treatments',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**Install costs run from about $100 for clip-in wefts to $2,500 for a full keratin bond set, and the method you choose determines both the upfront price and the ongoing maintenance bill.** Semi-permanent methods — tape-in, micro-link, keratin bond, weave — cost far more over a year than the install price alone suggests, because they need repeat appointments to stay in.',
  blocks: [
    { t: 'note', tone: 'warn', text: EXTENSIONS_TENSION_NOTE },
    { t: 'h2', id: 'install-cost', text: 'Install cost by method' },
    {
      t: 'table',
      head: ['Method', 'Install cost'],
      rows: [
        ['Clip-in', '$100 - 400'],
        ['Halo', '$150 - 500'],
        ['Weave (sew-in)', '$300 - 1,500'],
        ['Tape-in', '$400 - 1,200'],
        ['Micro-link', '$600 - 2,000'],
        ['Keratin bond (fusion)', '$800 - 2,500'],
      ],
      note: 'Prices vary by region and amount of hair.',
    },
    {
      t: 'p',
      text: 'These ranges are wide because each one covers a small amount of hair at a budget salon through a full head at a high-end one. **The amount of hair used moves the price more than almost any other single factor.**',
    },
    { t: 'h2', id: 'what-drives-price', text: 'What actually drives the price' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Amount of hair (weight/volume)', 'The single biggest driver - more hair, higher cost'],
        ['Human hair vs synthetic', 'Human hair costs substantially more but styles and lasts better'],
        ['Number of attachment points', 'Micro-link and keratin bond involve more individual placements, more labour'],
        ['Stylist experience level', 'Extension specialists price above general stylists'],
        ['Region and salon tier', 'Metro and high-end salons run above the low end of every range here'],
        ['Colour matching and custom blending', 'Adds cost when your natural colour needs a bespoke match'],
      ],
    },
    { t: 'h2', id: 'maintenance-cost', text: 'Ongoing maintenance by method' },
    {
      t: 'p',
      text: 'Clip-in and halo need no salon maintenance at all — they go in and out at home. The other four methods do, on a schedule that is part of what you are paying for.',
    },
    {
      t: 'table',
      head: ['Method', 'Maintenance', 'Typical cost'],
      rows: [
        ['Tape-in', 'Move-up every 6 - 8 weeks', '$150 - 350 per visit'],
        ['Micro-link', 'Tightening or reinstall every 2 - 3 months', 'Similar range to a partial reinstall'],
        ['Keratin bond', 'Refill every 3 - 4 months', 'Similar range to a partial reinstall'],
        ['Weave', 'Reinstall every 6 - 10 weeks', 'Varies by salon - ask for a maintenance quote'],
      ],
      note: 'Maintenance pricing varies more by salon than install pricing does. Ask at consultation.',
    },
    { t: 'h2', id: 'annual-totals', text: 'What a full year actually costs' },
    {
      t: 'p',
      text: 'This is the number that matters if you plan to wear extensions continuously rather than for a single event.',
    },
    {
      t: 'table',
      head: ['Method', 'Approx. annual cost'],
      rows: [
        ['Clip-in', '~$250'],
        ['Halo', 'Similar to clip-in - no reinstall required'],
        ['Tape-in', '~$1,700 - 2,600'],
        ['Micro-link', '~$2,000 - 2,800'],
        ['Keratin bond', '~$2,500 - 3,500'],
        ['Weave', 'Varies widely by reinstall frequency and salon pricing'],
      ],
    },
    {
      t: 'note',
      text: 'These totals assume continuous wear for 12 months. Someone who only wears extensions for a few months a year pays proportionally less.',
    },
    { t: 'h2', id: 'removal-cost', text: 'Removal cost' },
    {
      t: 'p',
      text: 'Removal is often quoted separately from install and maintenance, and it is easy to forget to budget for it.',
    },
    {
      t: 'table',
      head: ['Method', 'Typical removal cost'],
      rows: [
        ['Clip-in / halo', 'Free - remove at home'],
        ['Tape-in', '$50 - 200'],
        ['Micro-link', 'Similar range - varies by salon'],
        ['Keratin bond', 'Often the most time-consuming to remove, priced accordingly'],
        ['Weave', 'Varies by salon'],
      ],
    },
    {
      t: 'p',
      text: 'Many salons discount removal when it is paired with a new install in the same visit, since some of the chair time overlaps. Ask about this rather than assuming it is automatic.',
    },
    { t: 'h2', id: 'how-much-hair', text: 'Full head vs partial - how much hair changes the number' },
    {
      t: 'p',
      text: 'Salons usually quote by the amount of hair (in wefts, bundles, or grams) rather than a flat per-head price, and this is the single biggest lever inside any of the ranges above.',
    },
    {
      t: 'table',
      head: ['Coverage', 'Typical use case', 'Effect on price'],
      rows: [
        ['Partial (crown or top sections only)', 'Adding volume without much extra length', 'Lower end of the method\'s range'],
        ['Half head', 'Moderate length and volume throughout', 'Middle of the range'],
        ['Full head', 'Maximum length and volume, all-over coverage', 'Upper end of the range'],
      ],
    },
    {
      t: 'p',
      text: '**Asking for "a full head" without discussing your actual density can lead to more hair than your natural hair comfortably supports** - see the guide on damage risk for why that matters beyond just the price.',
    },
    { t: 'h2', id: 'hidden-costs', text: 'Costs people forget to budget for' },
    {
      t: 'ul',
      items: [
        '**Sulphate-free or extension-safe shampoo and conditioner**, which most stylists recommend to protect both the hair and the attachment.',
        '**A loop brush or extension-specific brush**, designed to be gentler at the attachment points than a regular brush.',
        '**Colour touch-ups on the extension hair itself**, if your natural colour shifts (from sun, for example) and the two no longer match as closely.',
        '**A consultation fee**, which some salons charge separately and credit toward the install if you book.',
      ],
    },
    { t: 'h2', id: 'correcting-mistakes', text: 'The cost of correcting a set that is not right' },
    {
      t: 'p',
      text: 'A set that is too heavy, badly colour-matched, or installed with attachment points spaced unevenly is not just a cosmetic annoyance — fixing it usually means paying for a partial or full removal and reinstall, on top of what you already spent.',
    },
    {
      t: 'table',
      head: ['Problem', 'Typical fix', 'Added cost'],
      rows: [
        ['Colour mismatch', 'Partial removal and reinstall of the mismatched wefts', 'Roughly a partial install price'],
        ['Too much hair added', 'Removal of some wefts to reduce weight', 'Removal cost, sometimes waived if done quickly after install'],
        ['Uneven or poorly placed attachment points', 'Full removal and reinstall, often at a different salon', 'Removal plus a full new install'],
      ],
    },
    {
      t: 'note',
      text: 'This is the financial case for a proper consultation and for choosing a stylist with specific extension experience, rather than the lowest quote available. Correcting a bad set typically costs more than the difference between a budget quote and a mid-range one.',
    },
    { t: 'h2', id: 'quote-questions', text: 'Getting a quote that will actually hold' },
    {
      t: 'ol',
      items: [
        '**Ask for a price after they see your hair**, not a number quoted over the phone or from a menu.',
        '**Ask exactly what is included** - hair, application, a cut or blend afterward, and aftercare products.',
        '**Ask what the maintenance schedule costs**, not just the install, before you book.',
        '**Ask what happens if you are unhappy with the colour match or the amount of hair** once it is in.',
        '**Get it in writing** if the salon offers a written estimate, so the number you agreed to is the number you pay.',
      ],
    },
    { t: 'h2', id: 'value-comparison', text: 'What else the money buys' },
    {
      t: 'p',
      text: 'Comparing extensions against other things you could do with the same budget puts the number in perspective.',
    },
    {
      t: 'table',
      head: ['Option', 'Approx. cost', 'What you get'],
      rows: [
        ['Clip-in set', '$100 - 400', 'Occasional length/volume, worn on your own schedule'],
        ['One tape-in cycle (install + 1 move-up)', '$550 - 1,550', 'A few months of continuous natural-looking length'],
        ['A year of tape-ins', '$1,700 - 2,600', 'Continuous wear with scheduled maintenance'],
        ['A year of keratin bond', '$2,500 - 3,500', 'Continuous wear, closer blend, more attachment points'],
      ],
      note: 'Prices vary by region and amount of hair.',
    },
    { t: 'h2', id: 'budgeting', text: 'Budgeting for extensions realistically' },
    {
      t: 'ol',
      items: [
        '**Price out a full year, not just the install**, for any of the four semi-permanent methods.',
        '**Ask for a written estimate that separates install, maintenance, and removal**, so nothing is a surprise later.',
        '**Ask whether the quote assumes your hair length and density**, or a generic amount - it usually needs adjusting once the stylist sees your hair.',
        '**Budget for extension-safe hair products** as a recurring line item, not a one-time purchase.',
        '**Decide upfront whether you are testing the method or committing to a year**, since that changes whether clip-in, halo, or a semi-permanent method makes more financial sense.',
      ],
    },
    { t: 'h2', id: 'cheapest-safest', text: 'Cheapest is not always the best value' },
    {
      t: 'p',
      text: 'A very low quote for a semi-permanent method is worth asking about rather than simply taking. It can mean less hair than you expected, a less experienced stylist, or attachment points placed further apart than is comfortable for your hair density. **A price well below the ranges here is a reason to ask more questions, not a reason to book faster.**',
    },
    { t: 'h2', id: 'bottom-line', text: 'The short version' },
    {
      t: 'p',
      text: 'Clip-in and halo cost the least overall because there is no maintenance appointment. Tape-in sits in the middle. Micro-link and keratin bond cost the most per year because of how often they need attention and how many attachment points they involve. **Whatever method you pick, ask for the annual number before you commit to the first appointment.**',
    },
  ],
  faq: [
    {
      q: 'What is the cheapest hair extension option?',
      a: 'Clip-in extensions, at $100 to $400 for a set and roughly $250 a year with normal use, since there is no ongoing salon maintenance.',
    },
    {
      q: 'What is the most expensive hair extension method?',
      a: 'Keratin bond (fusion), which runs $800 to $2,500 to install and $2,500 to $3,500 a year with quarterly refills, reflecting the number of individual attachment points involved.',
    },
    {
      q: 'Do hair extension prices include removal?',
      a: 'Usually not. Removal is typically a separate cost, commonly $50 to $200 for tape-in and similar for other semi-permanent methods, sometimes discounted when paired with a new install.',
    },
    {
      q: 'Why is there such a wide price range for the same method?',
      a: 'The amount of hair used is the biggest factor, followed by human hair versus synthetic, stylist experience, and regional salon pricing.',
    },
    {
      q: 'Are clip-in extensions worth it if I only wear them occasionally?',
      a: 'Often yes. Without a maintenance schedule to pay for, clip-in and halo are the lowest-cost options for occasional wear, and the hair itself can last 6 to 12 months with care.',
    },
  ],
  related: [
    { href: '/en/hair-extensions-types-compared', label: 'Hair Extension Types Compared: Cost and Damage' },
    { href: '/en/tape-in-extensions', label: 'Tape-In Extensions: Cost, Wear Time, Care' },
    { href: '/en/how-long-do-hair-extensions-last', label: 'How Long Do Hair Extensions Last?' },
  ],
}
