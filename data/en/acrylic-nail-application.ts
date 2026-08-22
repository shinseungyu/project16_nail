import type { EnPage } from './types'
import { EN_UPDATED, EN_UPDATED_ISO } from './common'

export const acrylicNailApplication: EnPage = {
  path: '/en/acrylic-nail-application',
  title: 'Acrylic Nail Application: Step by Step Explained',
  h1: 'How Acrylic Nails Are Applied, Step by Step',
  description:
    'The acrylic application process from prep to finish, why bead consistency matters, and the mistakes that cause lifting. For students and clients.',
  keywords: ['acrylic nail application steps', 'how are acrylic nails applied', 'acrylic bead consistency', 'why do acrylics lift'],
  category: 'Equipment & Business',
  updated: EN_UPDATED,
  updatedIso: EN_UPDATED_ISO,
  lead:
    '**Acrylic is created by combining a powder polymer with a liquid monomer to form a bead, which is shaped on the nail and hardens in air.** The process runs prep, form or tip, bead application, shaping, filing, finish. Most failures trace back to prep or bead consistency, not product quality.',
  blocks: [
    { t: 'h2', id: 'steps', text: 'The steps' },
    {
      t: 'table',
      head: ['Step', 'What happens', 'Why it matters'],
      rows: [
        ['1. Prep', 'Push back cuticles, remove non-living tissue from the plate, light buff, dehydrate', 'The most common failure point. Oils and residue prevent adhesion'],
        ['2. Primer', 'Applied per product system', 'Improves bond; follow manufacturer guidance'],
        ['3. Tip or form', 'Tip glued and blended, or a form placed for sculpting', 'Determines length and shape structure'],
        ['4. Bead pickup', 'Brush dipped in monomer, then into powder, forming a bead', 'Consistency here determines everything downstream'],
        ['5. Placement', 'Bead placed and guided into shape, working in zones', 'Apex placement gives structural strength'],
        ['6. Curing', 'Air hardens the product', 'No lamp required'],
        ['7. Filing and shaping', 'Contour refined, surface smoothed', ''],
        ['8. Finish', 'Buff, top coat or polish, cuticle oil', ''],
      ],
    },
    { t: 'h2', id: 'bead', text: 'Bead consistency — the thing that separates good from bad' },
    { t: 'p', text: 'The ratio of monomer to polymer in each bead controls how the product behaves on the nail.' },
    {
      t: 'table',
      head: ['Bead', 'Behaviour', 'Result'],
      rows: [
        ['Too wet', 'Runs, floods cuticles and sidewalls', 'Lifting, sensitivity, mess'],
        ['Correct', 'Holds shape, self-levels slowly', 'Even structure, good adhesion'],
        ['Too dry', 'Crumbly, does not self-level', 'Bubbles, weak spots, poor bond'],
      ],
    },
    {
      t: 'note',
      title: 'What a correct bead does',
      text: 'It should **hold its shape for a moment, then settle smoothly.** This is the single hardest thing for students to learn and it cannot be shortcut — no amount of product quality compensates for the wrong ratio.',
    },
    { t: 'h2', id: 'lifting', text: 'Where lifting comes from' },
    {
      t: 'table',
      head: ['Cause', 'Fix'],
      rows: [
        ['Insufficient prep', 'More thorough cuticle work and dehydration'],
        ['Product touching skin', 'Leave a hairline gap at the cuticle and sidewalls'],
        ['Wet bead flooding the cuticle', 'Adjust ratio'],
        ['Too thick in one layer', 'Build in thinner layers'],
        ['Client picking at edges', 'Client education; offer repairs'],
        ['Wrong primer for the system', 'Follow the manufacturer pairing'],
      ],
    },
    {
      t: 'p',
      text: '**Product touching skin lifts almost immediately.** The margin at the cuticle is not cosmetic — it is structural, and it is the difference between a three-week set and a three-day one.',
    },
    { t: 'h2', id: 'apex', text: 'Apex and structure' },
    { t: 'p', text: 'The apex is the highest point of the nail arch, usually over the stress area.' },
    { t: 'h3', text: 'Correct apex placement' },
    {
      t: 'ul',
      items: [
        'Distributes force across the nail.',
        'Prevents cracking at the stress point.',
        'Creates the visual curve people associate with a well-made set.',
      ],
    },
    { t: 'h3', text: 'Common errors' },
    {
      t: 'ul',
      items: [
        'Apex too far forward — the nail cracks near the cuticle.',
        'Apex too far back — weak free edge.',
        'No apex at all — flat, brittle, snaps.',
      ],
    },
    { t: 'h2', id: 'safety', text: 'Safety and workspace' },
    {
      t: 'table',
      head: ['Item', 'Why'],
      rows: [
        ['Ventilation', 'Monomer produces vapours that dust extraction does not capture'],
        ['Dust extraction', 'Filing acrylic creates fine particulate'],
        ['Appropriate mask where indicated', 'Combined with the above, not instead of it'],
        ['Closed monomer containers', 'Reduces evaporation and exposure'],
        ['Implement disinfection', 'Per state board requirements'],
      ],
    },
    { t: 'h2', id: 'removal', text: 'Removal' },
    {
      t: 'p',
      text: 'Acrylic generally **does not soak off like gel polish.** Standard practice is filing down the bulk, then soaking the remainder, or filing off entirely.',
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Never pry, snap, or lever acrylic off',
      text: 'It takes nail plate with it. This is the single most common cause of the thin, damaged nails people attribute to enhancements themselves.',
    },
    { t: 'h2', id: 'systems', text: 'Systems and how they differ' },
    { t: 'p', text: 'Acrylic is one enhancement system among several, and the differences matter mainly at removal, which is where most nail damage originates.' },
    {
      t: 'table',
      head: ['System', 'Cures with', 'Removal', 'Typical use'],
      rows: [
        ['Acrylic (liquid and powder)', 'Air', 'Filed down, or filed then soaked', 'Strength, sculpting, length'],
        ['Hard gel', 'UV or LED lamp', 'Filed down - does not soak off', 'Natural look with strength'],
        ['Gel polish', 'UV or LED lamp', 'Soaks off', 'Colour on the natural nail'],
        ['Dip powder', 'Resin activator', 'Soaks off, usually with filing first', 'Speed'],
        ['Polygel', 'UV or LED lamp', 'Filed down', 'Hybrid handling'],
      ],
    },
    { t: 'p', text: '**Knowing which system is on the nail decides how it comes off.** Applying a soak-off method to a system that does not soak off produces long acetone exposure, no result, and then the temptation to force it — which is the sequence that damages the nail plate.' },
    { t: 'h2', id: 'fills', text: 'Fills and rebalancing' },
    { t: 'p', text: 'Acrylic is maintained rather than replaced. A fill addresses the regrowth area and restores the structure, which is why the apex has to be reconsidered each time.' },
    {
      t: 'table',
      head: ['Step', 'What happens'],
      rows: [
        ['Assess', 'Check for lifting, cracks, and whether the apex has migrated'],
        ['Remove lifted product', 'Anything not bonded has to come off'],
        ['Blend the ledge', 'The line between old and new product is filed smooth'],
        ['Prep the regrowth area', 'Same prep discipline as a new set'],
        ['Apply and rebalance', 'New product placed, apex re-established'],
        ['Refine and finish', 'Shape, buff, finish'],
      ],
    },
    { t: 'p', text: 'Fills are typically every two to three weeks. Left longer, the apex sits too far forward as the nail grows out, which shifts the stress point and makes cracking near the cuticle more likely.' },
    { t: 'h2', id: 'client-side', text: 'What clients can reasonably expect' },
    {
      t: 'ul',
      items: [
        '**A hairline gap at the cuticle is correct**, not sloppy work. Product touching skin is what lifts.',
        '**Some thickness over the stress area is structural.** A perfectly flat set is a weak set.',
        '**Lifting within days is a prep or application issue**, and worth raising rather than absorbing.',
        '**Removal takes time.** A salon that removes acrylic in ten minutes is filing aggressively or prying.',
        '**Repairs are normal.** A single cracked nail is a repair appointment, not a full rebalance.',
      ],
    },
  ],
  faq: [
    { q: 'What are the steps for applying acrylic nails?', a: 'Prep, primer, tip or form, bead application, shaping, air curing, filing, and finish.' },
    { q: 'Why do my acrylics lift?', a: 'Most often inadequate prep or product touching the skin. Bead consistency and layer thickness also contribute.' },
    { q: 'What is the right bead consistency?', a: 'It should hold its shape briefly then settle smoothly. Too wet floods the cuticle; too dry creates bubbles and weak spots.' },
    { q: 'Do acrylics need a UV lamp?', a: 'No. Acrylic air-cures. Gel systems are the ones that require a lamp.' },
    { q: 'How long do acrylics last?', a: 'Three to four weeks, with fills typically every two to three.' },
    { q: 'Can I remove acrylic at home?', a: 'It is not recommended. Acrylic usually needs filing down rather than soaking off, and forcing it damages the nail plate.' },
    { q: 'Is acrylic worse for nails than gel?', a: 'Neither is inherently damaging when applied and removed properly. Improper removal causes most of the damage attributed to both.' },
  ],
  related: [
    { href: '/en/nail-dust-collector', label: 'Nail Dust Collectors: What Actually Matters' },
    { href: '/en/how-long-do-gel-nails-last', label: 'How Long Do Gel Nails Last?' },
    { href: '/en/nail-tech-license', label: 'How to Get a Nail Tech License' },
  ],
}
