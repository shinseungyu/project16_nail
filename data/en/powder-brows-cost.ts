import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, PMU_TATTOO_NOTE } from './common'

export const powderBrowsCost: EnPage = {
  path: '/en/powder-brows-cost',
  title: 'Powder Brows Cost: Including the Touch-Up',
  h1: 'How Much Do Powder Brows Cost?',
  description:
    'Powder brows run $450 to $1,300 including the touch-up. Why quotes vary, what is often left out, and the five-year total to expect.',
  keywords: ['powder brows cost', 'powder brows price', 'ombre brows cost', 'powder brows touch up cost'],
  category: 'Brows',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**$450 to $1,300 in most US markets, and that figure should include the four to eight week touch-up.** Prices vary by provider experience and region, so treat any single number you see quoted as a starting point rather than a fixed price.',
  blocks: [
    { t: 'note', tone: 'warn', text: PMU_TATTOO_NOTE },
    { t: 'h2', id: 'pricing', text: 'Pricing' },
    {
      t: 'table',
      head: ['Item', 'Typical'],
      rows: [
        ['Initial session plus touch-up', '$450 - 1,300'],
        ['Initial session alone', '$350 - 1,000'],
        ['Touch-up if billed separately', '$150 - 350'],
        ['Colour refresh, every 1 - 2 years', '$200 - 450'],
        ['Major metro or highly experienced artist', '$900 - 2,000'],
        ['Correction of previous work', '$600 - 1,500+'],
        ['Laser or saline removal', '$200 - 500 per session, multiple needed'],
      ],
    },
    {
      t: 'p',
      text: '**These are ranges, not quotes — the actual price varies by provider and region, sometimes considerably.** Because this procedure is regulated as tattooing in many states, pricing also reflects local licensing and facility costs, which is one reason a studio two states over can charge quite differently for what looks like the same service.',
    },
    { t: 'h2', id: 'why-vary', text: 'Why quotes vary so much' },
    {
      t: 'table',
      head: ['Factor', 'Effect'],
      rows: [
        ['Artist experience', 'The largest variable by far'],
        ['Region', 'Metro premiums are significant'],
        ['Whether the touch-up is included', 'Frequently the entire difference between two quotes'],
        ['Studio vs medspa setting', 'Overhead differs'],
        ['Flat powder vs ombré styling', 'Little to no effect — priced the same in most studios'],
        ['Pigment brand and equipment', 'Smaller effect'],
      ],
    },
    {
      t: 'p',
      text: '**The single most useful question at any consultation is whether the price includes the touch-up.** That resolves most of the apparent gap between a $500 quote and a $1,100 quote for what is otherwise a similar service.',
    },
    { t: 'h2', id: 'not-budgeted', text: 'Costs people do not budget for' },
    {
      t: 'table',
      head: ['Item', 'Reality'],
      rows: [
        ['Colour refresh', '$200 - 450 every 1 - 2 years to maintain the result'],
        ['Correction', 'More expensive than the original procedure'],
        ['Removal', 'Multiple sessions, often costing more than the original overall'],
      ],
    },
    {
      t: 'p',
      text: '**Correction and removal both cost more than getting it right the first time.** That is the practical argument for choosing an experienced artist over the cheapest available one, independent of how the result looks.',
    },
    { t: 'h2', id: 'cheap-pricing', text: 'On unusually cheap pricing' },
    {
      t: 'p',
      text: 'A price well below the local range is worth questioning rather than simply welcoming. **This is a procedure that breaks the skin barrier**, and cost differences at the low end are sometimes explained by training, sterilisation practice or facility registration rather than by a genuine bargain.',
    },
    {
      t: 'table',
      head: ['Ask', 'Why'],
      rows: [
        ['Are you registered for body art or tattooing?', 'Often a health department requirement'],
        ['Is this facility registered and inspected?', 'The premises are regulated too'],
        ['Do you hold current bloodborne pathogen certification?', 'Commonly required'],
        ['Are single-use needles used?', 'Non-negotiable'],
        ['Does the price include the touch-up?', 'The commonest hidden cost'],
      ],
    },
    { t: 'h2', id: 'five-year-total', text: 'What it costs over five years' },
    {
      t: 'table',
      head: ['Item', 'Cost'],
      rows: [
        ['Initial session plus touch-up', '$450 - 1,300'],
        ['Colour refreshes, roughly 2 - 3 over 5 years', '$400 - 900'],
        ['Five-year total', 'approx. $850 - 2,200'],
        ['If correction is needed', 'Add $600 - 1,500'],
        ['If removal is needed', 'Add $600 - 2,500'],
      ],
    },
    {
      t: 'p',
      text: 'The bottom two rows are the reason artist selection matters more than the headline price. **Saving a few hundred dollars upfront can cost several times that** if the result needs correcting or removing later.',
    },
    { t: 'h2', id: 'deposits', text: 'Deposits, cancellations and rebooking' },
    {
      t: 'p',
      text: 'Booking terms are part of the real cost and rarely appear in the headline price, which is why they catch people out at the point of paying rather than at the point of booking.',
    },
    {
      t: 'table',
      head: ['Item', 'Typical'],
      rows: [
        ['Deposit', '$50 - 250, usually non-refundable'],
        ['Cancellation window', '48 - 72 hrs'],
        ['Late rescheduling', 'Deposit often forfeited'],
        ['Missing the touch-up window', 'May be charged as a new session'],
        ['Consultation', 'Often free, sometimes credited against the booking'],
      ],
    },
    {
      t: 'p',
      text: '**The fourth row catches the most people out.** The touch-up is scheduled at four to eight weeks for a reason — turning up several months late usually means paying close to full price again.',
    },
    { t: 'h2', id: 'budgeting', text: 'How to budget for it properly' },
    {
      t: 'ol',
      items: [
        '**Budget the all-in figure including the touch-up**, not the headline price alone.',
        '**Add a maintenance line** of $200 to $450 every one to two years.',
        '**Do not stretch for the cheapest quote in your area** without asking what is different about it.',
        '**Keep a contingency** — correction costs more than the original procedure.',
        '**Confirm the deposit terms in writing** before paying anything.',
      ],
    },
    { t: 'h2', id: 'quote-checklist', text: 'What a complete quote looks like' },
    {
      t: 'p',
      text: 'A quote you can genuinely compare against another should answer all of the following without you having to chase it down afterward.',
    },
    {
      t: 'table',
      head: ['Line item', 'Should be stated'],
      rows: [
        ['Initial session', 'Yes'],
        ['Touch-up at 4 - 8 weeks', 'Yes — included or priced separately'],
        ['Deposit and whether it is refundable', 'Yes'],
        ['Technique being quoted', 'Yes — flat powder, ombré or combo'],
        ['What happens if a third session is needed', 'Ideally'],
        ['Maintenance pricing going forward', 'Ideally'],
      ],
    },
    {
      t: 'p',
      text: '**Get it in writing.** Verbal quotes are where the touch-up quietly disappears from the price, and that is the single most common billing dispute in this category of service.',
    },
    { t: 'h2', id: 'bottom-line', text: 'The bottom line on price' },
    {
      t: 'p',
      text: 'Two figures are worth carrying into any consultation: the all-in price including the touch-up, and the maintenance cost roughly every one to two years afterward. Everything else in a quote is detail worth confirming but not worth losing time comparing between studios.',
    },
    {
      t: 'p',
      text: '**A third figure — what correction or removal would cost — is the one that should actually shape the decision.** It typically runs several times the cost of choosing carefully at the outset, which is the reason the cheapest quote is rarely the cheapest outcome. See [How Long Do Powder Brows Last?](/en/how-long-do-powder-brows-last) for how the maintenance schedule that drives these ongoing costs actually plays out.',
    },
  ],
  faq: [
    { q: 'How much do powder brows cost?', a: '$450 to $1,300 in most US markets, ideally including the four to eight week touch-up.' },
    { q: 'Is the touch-up included in the price?', a: 'Sometimes. Always ask directly, since it is the most common reason two quotes for the same service look different.' },
    { q: 'Why is one artist twice the price of another?', a: 'Experience is the main driver, along with region and exactly what the quote includes.' },
    { q: 'How much does yearly maintenance cost?', a: 'A colour refresh typically runs $200 to $450 every one to two years to keep the result looking fresh.' },
    { q: 'What does correction or removal cost?', a: 'Correction runs $600 to $1,500 or more; removal is typically $200 to $500 per session across several sessions — both cost more than the original procedure.' },
  ],
  related: [
    { href: '/en/what-are-powder-brows', label: 'What Are Powder Brows?' },
    { href: '/en/microblading-cost', label: 'How Much Does Microblading Cost?' },
    { href: '/en/how-long-do-powder-brows-last', label: 'How Long Do Powder Brows Last?' },
  ],
}
