import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, PMU_TATTOO_NOTE } from './common'

export const powderBrowsOverMicroblading: EnPage = {
  path: '/en/powder-brows-over-microblading',
  title: 'Powder Brows Over Old Microblading: What to Know',
  h1: 'Powder Brows Over Old Microblading',
  description:
    'Covering old microblading with powder brows depends on how much pigment remains, its tone, scarring and the existing shape. What to assess first.',
  keywords: ['powder brows over microblading', 'cover old microblading', 'powder brows over old pmu'],
  category: 'Brows',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**Powder brows can often be applied over faded microblading, but how well it works depends on how much pigment is left, what tone it has faded to, and the condition of the skin underneath.** Adding more pigment cannot lighten what is already there — if the existing work is too dark, too large, or an unwanted colour, that needs to be addressed before anything new goes over it.',
  blocks: [
    { t: 'note', tone: 'warn', text: PMU_TATTOO_NOTE },
    { t: 'h2', id: 'why-it-comes-up', text: 'Why this situation is so common' },
    {
      t: 'p',
      text: 'Microblading fades unevenly, and by the time it looks patchy or soft, many people would rather switch technique than repeat the original one. Powder brows are a frequent choice for this, because a shaded fill sits more evenly over faded, broken-up strokes than a fresh set of hair-like lines would. That does not make it automatic — the assessment matters more here than it does on skin with no existing work.',
    },
    { t: 'h2', id: 'key-limit', text: 'The one rule that limits everything else' },
    {
      t: 'p',
      text: '**New pigment only adds colour — it cannot remove or lighten pigment that is already in the skin.** Because both microblading and powder brows sit in the same skin layer used for body tattooing, and are regulated as tattooing in many US states for exactly that reason, going over old work follows the same physical rule as covering any other tattoo: you can go darker or add a different tone, but you cannot go lighter by tattooing over it again. If the existing work is heavier, larger or a different shape than what you want, lightening or removal has to happen first.',
    },
    { t: 'h2', id: 'what-determines-it', text: 'What determines whether it works well' },
    {
      t: 'table',
      head: ['Factor', 'Why it matters'],
      rows: [
        ['How much pigment remains', 'Heavy residual colour limits how much new pigment can be layered without going too dark'],
        ['The tone it has faded to', 'Cool, ashy or reddish residual tones can show through or mix unpredictably with new pigment'],
        ['Scarring in the area', 'Scar tissue takes pigment unevenly, which can leave patchy retention'],
        ['The existing shape', 'A shape you dislike is harder to change than colour — new work is often mapped around it rather than replacing it'],
        ['Skin condition and thickness', 'Skin that has been tattooed multiple times may hold pigment differently than it did originally'],
      ],
    },
    { t: 'h2', id: 'assessment-table', text: 'What a good assessment looks like' },
    {
      t: 'table',
      head: ['Existing situation', 'Usually'],
      rows: [
        ['Faded microblading, soft and light residual colour', 'Powder brows often cover this evenly'],
        ['Strong residual colour still clearly visible', 'Needs lightening or partial removal first'],
        ['Faded to an unwanted tone (ashy, blue-grey, reddish)', 'Colour correction or removal, assessed case by case'],
        ['Scarring from previous work', 'Assessment of how the area takes pigment before committing'],
        ['A shape you no longer like', 'Shape is the harder problem — often needs removal or significant lightening, not just new shading'],
        ['Well-healed, lightly faded work you are broadly happy with', 'A colour refresh in the original technique may be simpler than switching'],
      ],
    },
    {
      t: 'p',
      text: '**The fourth and fifth rows are where people most often end up disappointed.** A powder brow session cannot correct a shape problem, and heavy scarring is a limitation on retention that no technique fully solves.',
    },
    { t: 'h2', id: 'when-to-remove-first', text: 'When removal or lightening should come first' },
    {
      t: 'ul',
      items: [
        '**The old work is noticeably dark or dense** — new pigment will only add to it, not soften it.',
        '**The shape is significantly larger or different** than what you want the final brow to look like.',
        '**The colour has shifted to an unwanted tone** that would likely show through or blend badly with fresh pigment.',
        '**You want to start meaningfully lighter** than the current result, in any respect.',
      ],
    },
    {
      t: 'p',
      text: 'A qualified artist should tell you this at consultation rather than attempting to shade over a problem that new pigment cannot solve. If an artist offers to go straight to powder brows over heavy, dark existing work without discussing removal or lightening, that is worth a second opinion.',
    },
    { t: 'h2', id: 'removal-options', text: 'If removal or lightening is needed first' },
    {
      t: 'table',
      head: ['Option', 'What it involves'],
      rows: [
        ['Laser removal', 'Multiple sessions spaced 6 - 8 weeks apart; response varies by pigment colour'],
        ['Saline removal', 'Draws pigment out through the skin over several sessions'],
        ['Waiting for further fading', 'No cost, but often leaves residue rather than a clean canvas'],
        ['Colour correction', 'Neutralises an unwanted tone rather than removing pigment outright'],
      ],
    },
    {
      t: 'p',
      text: 'This adds time and cost before the powder brows work can even begin, which is worth budgeting for rather than discovering partway through. [Can Microblading Be Removed?](/en/microblading-removal) covers what removal actually involves, the realistic number of sessions, and what it costs.',
    },
    { t: 'h2', id: 'process-when-suitable', text: 'The process when the old work is suitable to go over' },
    {
      t: 'table',
      head: ['Stage', 'What is different from a fresh session'],
      rows: [
        ['Consultation', 'Includes an honest assessment of the existing pigment and shape, not just a new shape discussion'],
        ['Mapping', 'The new shape is planned around what remains, not drawn as if starting from bare skin'],
        ['Shading', 'Pigment is built up more conservatively to avoid going too dark over residual colour'],
        ['Touch-up', 'Still scheduled at 4 - 8 weeks; retention over old work can be less predictable'],
      ],
    },
    {
      t: 'p',
      text: '**Expect the artist to go lighter and more gradually than they would on skin with no history.** That is a sign of appropriate caution rather than a lesser result — building up pigment slowly is easier to correct than starting too dark on top of existing colour.',
    },
    { t: 'h2', id: 'cost', text: 'Cost considerations' },
    {
      t: 'p',
      text: 'Work over existing microblading is not always priced the same as a first-time session. **Costs vary by provider and region**, and an assessment fee or consultation charge is common practice before a quote is given, precisely because the amount of work depends on what is already there.',
    },
    {
      t: 'table',
      head: ['Scenario', 'Typical cost consideration'],
      rows: [
        ['Light residual colour, straightforward cover', 'Similar to a standard powder brows session'],
        ['Assessment plus cover session', 'May include a separate consultation charge'],
        ['Removal or lightening needed first', 'Add the cost of those sessions before the cover work begins'],
        ['Colour correction needed', 'An additional session on top of the standard price'],
      ],
    },
    { t: 'h2', id: 'questions-to-ask', text: 'Questions worth asking at consultation' },
    {
      t: 'ol',
      items: [
        '**Can you show me healed examples of powder brows done over old microblading**, not just fresh work on bare skin?',
        '**Given what you can see of my existing work, do you recommend covering it directly or lightening it first?**',
        '**How will the new shape relate to my current one?**',
        '**Will you go lighter than usual for the first session, given what is already there?**',
        '**What happens if the result still shows old pigment through the new work?**',
      ],
    },
    {
      t: 'p',
      text: 'The last question matters because it is the outcome people are least prepared for. Residual pigment showing through new shading is a known risk of covering old work, not a rare complication, and a straightforward answer at consultation is a reasonable thing to expect.',
    },
    { t: 'h2', id: 'summary', text: 'The short version' },
    {
      t: 'p',
      text: 'Powder brows can work well over faded microblading when the residual colour is light, the tone is neutral, and the shape is broadly one you like. When the old work is dark, an unwanted tone, or a shape you want to move away from, removal or lightening needs to happen first — new pigment adds colour, it does not take it away.',
    },
    {
      t: 'p',
      text: '**An honest assessment at consultation is worth more here than a portfolio of fresh work on bare skin.** If you are still deciding between techniques generally rather than dealing with old work specifically, [Microblading vs Powder Brows](/en/microblading-vs-powder-brows) covers that broader comparison.',
    },
  ],
  faq: [
    { q: 'Can powder brows go over old microblading?', a: 'Often yes, particularly over light, faded residual pigment. Heavier or unwanted-toned existing work usually needs lightening or removal first.' },
    { q: 'Can new pigment make old microblading lighter?', a: 'No. Pigment only adds colour; it cannot remove or lighten what is already in the skin. Going lighter requires removal or fading treatments, not more tattooing.' },
    { q: 'What if my old microblading has faded to a strange colour?', a: 'An ashy, blue-grey or reddish residual tone can show through or mix unpredictably with new pigment. Colour correction or removal is usually assessed before covering it.' },
    { q: 'Does scarring affect the result?', a: 'Yes. Scar tissue from previous work can take pigment unevenly, which affects how well a new session retains colour.' },
    { q: 'Will the new shape look different from my old brows?', a: 'It can, but shape is usually planned around what already exists rather than freely redesigned, since changing shape significantly often requires removal first.' },
  ],
  related: [
    { href: '/en/what-are-powder-brows', label: 'What Are Powder Brows?' },
    { href: '/en/microblading-removal', label: 'Can Microblading Be Removed?' },
    { href: '/en/choosing-a-microblading-artist', label: 'How to Choose a Microblading Artist' },
  ],
}
