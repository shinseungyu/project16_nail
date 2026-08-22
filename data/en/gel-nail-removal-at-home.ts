import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO } from './common'

export const gelNailRemovalAtHome: EnPage = {
  path: '/en/gel-nail-removal-at-home',
  title: 'Gel Nail Removal at Home Without Damaging Your Nails',
  h1: 'How to Remove Gel Polish at Home Without Wrecking Your Nails',
  description:
    'The correct at-home gel removal method step by step, why peeling causes damage, and when to leave it to a salon. Takes about 30 minutes.',
  keywords: ['gel nail removal at home', 'how to remove gel polish without damage', 'soak off gel polish', 'acetone gel removal'],
  category: 'Treatment Guide',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**File off the shiny top layer, soak cotton in acetone, wrap each nail in foil for 10 to 15 minutes, then gently push the softened gel off.** Never peel or scrape. The whole process takes about 30 minutes. Peeling gel off is what damages nails — not the gel itself.',
  blocks: [
    { t: 'h2', id: 'why-peeling', text: 'Why peeling is the actual problem' },
    {
      t: 'p',
      text: 'When you peel gel off, it does not come away cleanly. **It takes layers of the nail plate with it.** That is what causes thin, bendy nails, white patchy surface texture, peeling and splitting, and sensitivity.',
    },
    {
      t: 'note',
      title: 'The damage usually happened at removal',
      text: 'People blame gel for ruining their nails. In most cases the damage occurred during removal, not during application or wear. This distinction matters because it means the fix is a method change, not giving up gel.',
    },
    { t: 'h2', id: 'what-you-need', text: 'What you need' },
    {
      t: 'table',
      head: ['Item', 'Note'],
      rows: [
        ['100% acetone', 'Regular polish remover will not work'],
        ['Coarse nail file (100/180 grit)', 'For the top layer only'],
        ['Cotton pads or balls', ''],
        ['Aluminium foil, cut into squares', 'Or purpose-made clips'],
        ['Cuticle pusher (wood or metal)', ''],
        ['Cuticle oil', 'For afterwards'],
        ['Buffer', 'Optional, for smoothing'],
      ],
    },
    { t: 'h2', id: 'steps', text: 'Step by step' },
    {
      t: 'ol',
      items: [
        '**File off the shine (2 - 3 min).** Remove only the glossy top coat — you are breaking the seal so acetone can penetrate. **Stop when it looks matte.** Filing into the colour layer means you are getting close to your natural nail.',
        '**Soak the cotton.** Saturate it, not damp. Dry cotton will not work.',
        '**Wrap.** Cotton on the nail, foil wrapped firmly around the fingertip to hold it in place and trap the acetone.',
        '**Wait 10 to 15 minutes.** Do not rush this. The gel should look wrinkled or lifted when you check.',
        '**Push off gently.** Remove one wrap at a time and push the softened gel off with a cuticle pusher. **It should slide off with light pressure.** If it resists, re-wrap for another five minutes.',
        '**Buff lightly and oil.** Smooth any residue with a fine buffer, then apply cuticle oil generously. Acetone is drying.',
      ],
    },
    { t: 'h2', id: 'rules', text: 'The rules' },
    {
      t: 'table',
      head: ['Do', 'Do not'],
      rows: [
        ['Use 100% acetone', 'Use regular remover - it will not work'],
        ['File only the top coat', 'File into your natural nail'],
        ['Re-soak if resistant', 'Scrape or force it'],
        ['Oil afterwards', 'Skip the oil - acetone dehydrates'],
        ['Work in a ventilated space', 'Soak your whole hand in a bowl for long periods'],
      ],
    },
    { t: 'h2', id: 'when-not', text: 'When not to do it yourself' },
    {
      t: 'table',
      head: ['Situation', 'Why'],
      rows: [
        ['Builder gel, hard gel, or acrylic', 'These do not soak off the same way and often need filing down'],
        ['Extensions with tips', 'Same reason'],
        ['Already damaged or painful nails', 'Get them assessed first'],
        ['You cannot tell which product is on', 'Ask the salon that applied it'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Gel polish soaks off. Hard gel and acrylic generally do not.',
      text: 'Applying the soak-off method to the wrong product means long acetone exposure with no result, followed by the temptation to force it. That sequence is how the worst at-home damage happens.',
    },
    { t: 'h2', id: 'aftercare', text: 'Aftercare' },
    {
      t: 'p',
      text: 'Your nails will feel dry and slightly thin immediately after removal. That is normal dehydration, not damage, provided you did not peel.',
    },
    {
      t: 'ul',
      items: [
        'Cuticle oil twice daily for a few days.',
        'A hydrating hand cream.',
        'If they feel weak, consider a break before the next set.',
        'A nail strengthener can help, but nothing repairs nail plate — it grows out.',
      ],
    },
    { t: 'h2', id: 'common-mistakes', text: 'The mistakes that cause damage' },
    { t: 'p', text: 'Almost all at-home removal damage comes from four errors, and each has an easy correction.' },
    {
      t: 'table',
      head: ['Mistake', 'What happens', 'Instead'],
      rows: [
        ['Filing past the top coat', 'You thin the natural nail before soaking even starts', 'Stop when the surface goes matte'],
        ['Not enough acetone in the cotton', 'Gel softens unevenly, so you push harder', 'Saturate it, not damp'],
        ['Unwrapping too early', 'Product is still bonded and resists', 'Re-wrap for five more minutes'],
        ['Scraping with a metal pusher at an angle', 'Gouges the plate under the gel', 'Light pressure, flat angle, no force'],
      ],
    },
    { t: 'note', title: 'If it resists, it is not ready', text: 'That single rule prevents nearly all of the damage people attribute to gel. Softened gel slides. Anything that needs force is telling you the acetone has not finished, or that the product on your nails is not a soak-off system at all.' },
    { t: 'h2', id: 'safety', text: 'Working with acetone safely' },
    { t: 'p', text: 'Acetone is effective precisely because it is aggressive, and a few habits keep that manageable at a kitchen table.' },
    {
      t: 'ul',
      items: [
        '**Ventilate the room.** Open a window rather than working in a closed bathroom.',
        '**Keep it away from heat and flame.** Acetone is flammable.',
        '**Wrap rather than soaking your hands in a bowl.** Foil wraps limit skin contact to the nail area.',
        '**Protect the surrounding skin** with a barrier balm if you do this often.',
        '**Moisturise afterwards.** The dryness you feel is the point at which acetone stopped being selective.',
      ],
    },
    { t: 'h2', id: 'how-often', text: 'How often is too often' },
    { t: 'p', text: 'Back-to-back removal every two weeks is harder on the nail than the gel itself. The plate does not regenerate between sessions, it only grows out.' },
    { t: 'p', text: 'If you notice persistent white patchiness, thinning at the tips, or sensitivity when you press the nail, take a break of a few weeks rather than reaching for a strengthener. **Nothing repairs nail plate — it grows out**, and the only variable you control is whether you damage it again in the meantime.' },
  ],
  faq: [
    { q: 'How do I remove gel polish at home?', a: 'File off the shine, wrap acetone-soaked cotton in foil for 10 to 15 minutes, then gently push the softened gel off. Never peel.' },
    { q: 'Can I use regular nail polish remover?', a: 'No. Gel requires 100% acetone; acetone-free removers will not break it down.' },
    { q: 'How long does it take?', a: 'About 30 minutes for all ten nails, most of which is waiting for the acetone to work.' },
    { q: 'Does removing gel damage nails?', a: 'Correct removal does not. Peeling or scraping does, because it takes nail plate layers with it.' },
    { q: 'What if the gel will not come off?', a: 'Re-wrap for another five minutes. Never force it. If it still resists, you may have hard gel or acrylic, which needs a salon.' },
    { q: 'Do I need a break between gel sets?', a: 'Not strictly, if application and removal are done properly. If your nails feel thin or sore, a break is reasonable.' },
    { q: 'Can I remove acrylic the same way?', a: 'Generally not. Acrylic and hard gel usually need to be filed down by a professional rather than soaked off.' },
  ],
  related: [
    { href: '/en/how-long-do-gel-nails-last', label: 'How Long Do Gel Nails Last?' },
    { href: '/en/acrylic-nail-application', label: 'How Acrylic Nails Are Applied, Step by Step' },
    { href: '/en/nail-tech-license', label: 'How to Get a Nail Tech License' },
  ],
}
