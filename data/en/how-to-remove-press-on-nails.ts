import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO } from './common'

export const howToRemovePressOnNails: EnPage = {
  path: '/en/how-to-remove-press-on-nails',
  title: 'How to Remove Press On Nails Without Damage',
  h1: 'How to Take Off Press On Nails Without Wrecking Your Nails',
  description:
    'The correct removal method for glue and tab press ons, why pulling them off damages your nails, and what to do afterwards.',
  keywords: ['how to remove press on nails', 'press on nail removal', 'take off press on nails'],
  category: 'Nails',
  stage: 2,
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Soak in warm soapy water or acetone depending on the adhesive, then lift gently from the side with a wooden stick.** Never pull them straight off — that is what takes layers of your natural nail with it.',
  blocks: [
    { t: 'h2', id: 'by-adhesive', text: 'Method by adhesive' },
    {
      t: 'table',
      head: ['Adhesive', 'Method', 'Time'],
      rows: [
        ['Tabs', 'Warm soapy water soak, gently lift the edge', '10 - 15 min'],
        ['Glue', 'Acetone soak, or oil and warm water for a gentler approach', '15 - 25 min'],
        ['Gel adhesive', 'Acetone soak, as with gel polish', '15 - 20 min'],
      ],
    },
    { t: 'h2', id: 'steps', text: 'Step by step, for glue' },
    {
      t: 'ol',
      items: [
        '**File the free edge** if the tip extends past your natural nail.',
        '**Soak** fingertips in acetone, or in warm soapy water with a few drops of oil for a gentler approach.',
        '**Wait at least 15 minutes.** Rushing this is where damage happens.',
        '**Lift gently from the side** with a wooden cuticle stick.',
        '**If it resists, soak longer.** Never force it.',
        '**Buff any residue lightly**, then oil generously.',
      ],
    },
    { t: 'h2', id: 'why-pulling', text: 'Why pulling causes damage' },
    { t: 'p', text: 'Press ons bond to the nail plate. Pulling does not break that bond cleanly — **it takes surface layers of nail with it.** That is what produces thin, flexible nails, white patchy texture, splitting and peeling, and sensitivity to pressure.' },
    { t: 'note', tone: 'warn', title: 'The damage almost always happened at removal', text: 'People conclude press ons ruined their nails. In most cases the wearing was fine and the taking off was not, which means the fix is a method change rather than giving up the product.' },
    { t: 'h2', id: 'gentle-option', text: 'The acetone-free option' },
    { t: 'p', text: 'Acetone works fastest but is drying. For tabs, and often for glue, warm soapy water with a little oil will do the job with more patience and less dehydration.' },
    {
      t: 'table',
      head: ['', 'Acetone', 'Warm water and oil'],
      rows: [
        ['Speed', 'Faster', 'Slower'],
        ['Works on glue', 'Reliably', 'Often, with patience'],
        ['Works on tabs', 'Unnecessary', 'Yes'],
        ['Effect on skin', 'Drying', 'Gentle'],
        ['Effect on the tips', 'Can dull or warp', 'Usually fine'],
      ],
    },
    { t: 'p', text: 'If you plan to reuse the set, the water method is the one to start with. Acetone that removes glue efficiently will also remove painted designs.' },
    { t: 'h2', id: 'afterwards', text: 'Afterwards' },
    {
      t: 'ul',
      items: [
        '**Cuticle oil twice daily** for a few days — acetone and soaking both dehydrate.',
        'Give nails a short break if they feel thin.',
        'A strengthener can reduce breakage while they grow out.',
        '**Nothing repairs existing nail plate.** It grows out over months.',
      ],
    },
    { t: 'h2', id: 'if-stuck', text: 'If one will not come off' },
    { t: 'p', text: 'A single stubborn nail is usually one where more adhesive was used, or where the seal is still intact at the sidewalls. The answer is more soaking, not more force.' },
    {
      t: 'table',
      head: ['Situation', 'What to do'],
      rows: [
        ['Resists after one soak', 'Re-wrap or re-soak for 5 - 10 minutes'],
        ['Edge lifted but centre stuck', 'Work solvent under the lifted edge, wait'],
        ['Painful at any point', 'Stop. Soak longer'],
        ['Nail underneath is sore', 'Leave it, oil it, reassess tomorrow'],
        ['Still stuck after two cycles', 'A salon can remove it safely'],
      ],
    },
    { t: 'h2', id: 'tools', text: 'What you need, and what to avoid' },
    {
      t: 'table',
      head: ['Use', 'Avoid'],
      rows: [
        ['Wooden or rubber-tipped cuticle stick', 'Metal tools levered under the tip'],
        ['100% acetone for glue', 'Regular polish remover - it will not work'],
        ['Warm water and a little oil', 'Hot water, which does not help more'],
        ['Cuticle oil afterwards', 'Skipping it - both methods dehydrate'],
        ['Time', 'Force, in any form'],
      ],
    },
    { t: 'p', text: 'A metal pusher is not forbidden, but it magnifies any impatience. If you use one, the angle should be flat against the tip rather than dug under it, and it should never be doing work that soaking has not already done.' },
    { t: 'h2', id: 'protecting-skin', text: 'Protecting your skin during removal' },
    { t: 'p', text: 'Acetone dries skin as effectively as it dissolves adhesive, and repeated removals are where people notice cracked cuticles more than damaged nails.' },
    {
      t: 'ul',
      items: [
        '**Wrap rather than soaking your whole hand** in a bowl, which limits contact to the nail.',
        '**Apply a barrier balm** to the surrounding skin first if you remove sets often.',
        '**Work in a ventilated space**, and keep acetone away from heat.',
        '**Moisturise immediately afterwards**, not later in the day.',
      ],
    },
    { t: 'h2', id: 'between-sets', text: 'Between one set and the next' },
    { t: 'p', text: 'Reapplying immediately is common and usually fine, but there is a case for pausing that has nothing to do with damage from wearing.' },
    {
      t: 'table',
      head: ['Situation', 'Reasonable approach'],
      rows: [
        ['Nails feel normal', 'Reapply straight away if you want to'],
        ['Nails feel thin or tender', 'Wait a few days, oil daily'],
        ['Surface looks white and patchy', 'A break, and gentler removal next time'],
        ['Any redness or swelling at the sides', 'Stop, and see a doctor if it persists'],
      ],
    },
  ],
  faq: [
    { q: 'Can I just pull them off?', a: 'No. That is the main cause of nail damage from press ons, because the adhesive does not release cleanly from the nail plate.' },
    { q: 'Do I need acetone?', a: 'For glue, usually yes, though warm soapy water with oil works with patience. Tabs come off with warm soapy water alone.' },
    { q: 'How long should I soak?', a: 'At least 15 minutes for glue, and longer if the tips resist. Time is what does the work.' },
    { q: 'What if they still will not come off?', a: 'Soak again for another five to ten minutes. Never force it. If two cycles do not work, a salon can remove them safely.' },
    { q: 'Will my nails recover?', a: 'Surface damage grows out over several months with proper care. Nothing repairs the existing nail plate itself.' },
  ],
  related: [
    { href: '/en/how-long-do-press-on-nails-last', label: 'How Long Do Press On Nails Last?' },
    { href: '/en/do-press-on-nails-damage-your-nails', label: 'Do Press On Nails Damage Your Nails?' },
    { href: '/en/reusing-press-on-nails', label: 'Can You Reuse Press On Nails?' },
  ],
}
