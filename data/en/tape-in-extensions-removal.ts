import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, EXTENSIONS_TENSION_NOTE } from './common'

export const tapeInExtensionsRemoval: EnPage = {
  path: '/en/tape-in-extensions-removal',
  title: 'Tape-In Extension Removal: How It Works',
  h1: 'Tape-In Extension Removal: How It Actually Works',
  description:
    'A solvent dissolves the tape adhesive over 30 to 60 minutes. If force is needed, it has not fully dissolved yet. What removal costs and involves.',
  keywords: [
    'tape-in extension removal',
    'how to remove tape-in extensions',
    'tape-in extension removal cost',
    'does tape-in removal hurt',
    'hair extension removal process',
  ],
  category: 'Hair Treatments',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**A dedicated adhesive-release solvent is applied to break down the tape bond, which takes roughly 30 to 60 minutes to work before the wefts slide out.** If it takes real force to get a tab out, the adhesive has not actually dissolved yet - that is the single most important thing to understand about how this process is supposed to go.',
  blocks: [
    { t: 'note', tone: 'warn', text: EXTENSIONS_TENSION_NOTE },
    { t: 'h2', id: 'how-it-works', text: 'How the process works' },
    {
      t: 'ol',
      items: [
        '**A solvent made to release tape adhesive** is applied directly to each tab, saturating the tape.',
        '**Time is given for it to work** - typically 30 to 60 minutes, sometimes with a gentle wrap or clip to keep the solvent in contact with the tape.',
        '**The stylist checks a tab periodically** rather than pulling on a fixed schedule, since dissolving time varies slightly by tape and by how much product has built up.',
        '**Once dissolved, the weft slides off** the natural hair with light finger pressure - no pulling required.',
        '**Remaining adhesive residue is combed or washed out** of the natural hair afterward.',
      ],
    },
    { t: 'h2', id: 'the-force-rule', text: 'The rule that matters most: if it needs force, it is not ready' },
    {
      t: 'p',
      text: 'This is the detail worth remembering from this entire page. **Tape-in removal is designed to require no pulling at all once the adhesive has actually broken down.** If a tab will not slide out without noticeable resistance, the solvent has not fully done its job yet - more time or more solvent is the fix, not more force.',
    },
    {
      t: 'table',
      head: ['What is happening', 'What it means'],
      rows: [
        ['Weft slides out with light pressure', 'Adhesive has dissolved - normal, correct outcome'],
        ['Weft comes out with some resistance but no real pull', 'Give it a few more minutes of solvent contact'],
        ['Weft requires a firm tug to come free', 'Not ready - stop and add more solvent rather than pulling harder'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      text: 'Pulling on tape that has not dissolved is how natural hair gets pulled out with it. The fix for resistance is always more time or more solvent, never more force.',
    },
    { t: 'h2', id: 'cost-time', text: 'Cost and time' },
    {
      t: 'table',
      head: ['Item', 'Typical'],
      rows: [
        ['Cost', '$50 - 200'],
        ['Time', '30 - 60 minutes for the solvent to work, plus application and cleanup time'],
        ['Removal + new install same visit', 'Often discounted versus paying for each separately - ask'],
      ],
      note: 'Prices vary by region and amount of hair.',
    },
    { t: 'h2', id: 'the-hair-that-comes-out', text: 'About the hair you see come out' },
    {
      t: 'p',
      text: 'It is common to see a noticeable amount of loose hair during and after removal, and it can look alarming if you were not expecting it. **Most of what you are seeing is not new loss caused by the removal - it is normal shed hair that has been trapped near the tape for the past 6 to 8 weeks.**',
    },
    {
      t: 'p',
      text: 'On average, people naturally shed roughly 50 to 100 hairs a day as part of the normal hair growth cycle, with or without extensions. Ordinarily that hair falls out gradually through brushing, washing, and daily movement. With tape-ins in for 6 to 8 weeks, some of that daily shed hair gets caught near the tape instead of falling away, and it is released all at once during removal rather than a little at a time.',
    },
    {
      t: 'table',
      head: ['What you are seeing', 'Likely explanation'],
      rows: [
        ['A visible clump of loose hair during removal', 'Weeks of normal daily shedding released at once, not new hair loss'],
        ['A few strands still attached to a piece of tape after it slides off', 'Some natural hair genuinely was in that tape section, in normal amounts'],
        ['A noticeably larger amount than you would expect from a normal wash', 'Still consistent with 6 - 8 weeks of accumulated normal shedding'],
      ],
    },
    {
      t: 'p',
      text: 'This does not mean removal never affects natural hair - it can, particularly if it is rushed or forced. It means that **the volume of loose hair on the floor after a removal is, by itself, not a reliable way to judge whether something went wrong.** What matters is whether it came out with the tape sliding off cleanly, or whether it took a pull to get free.',
    },
    { t: 'h2', id: 'what-to-expect', text: 'What to expect at a salon removal appointment' },
    {
      t: 'ol',
      items: [
        '**A short check of your hair and scalp** before starting, particularly if it has been longer than the usual 6 - 8 week window.',
        '**Solvent applied section by section**, often with a plastic cap or clips to keep it in contact with the tape while it works.',
        '**A wait of 30 to 60 minutes**, sometimes with a second solvent application if a section needs more time.',
        '**Each weft checked individually** and only removed once it slides free without resistance.',
        '**A final wash to clear adhesive residue**, followed by a light detangle from the ends up.',
      ],
    },
    { t: 'h2', id: 'removal-other-methods', text: 'How removal differs for other methods' },
    {
      t: 'p',
      text: 'The same principle - break down the attachment fully before anything moves - applies across every method, even though the specific process differs.',
    },
    {
      t: 'table',
      head: ['Method', 'How removal generally works'],
      rows: [
        ['Micro-link', 'Each bead is opened with pliers made for the purpose, then slid off - no solvent needed'],
        ['Keratin bond', 'A specific removal tool softens the keratin, often with heat and a bond-release product, before the bond is gently opened'],
        ['Weave', 'The thread holding the wefts to the braid is carefully cut and removed, then the braid itself is undone'],
      ],
    },
    {
      t: 'note',
      text: 'Whatever the method, the same warning sign applies: if it requires noticeable force, the attachment has not actually been released yet.',
    },
    { t: 'h2', id: 'repeated-removal', text: 'Does repeated removal get harder over time' },
    {
      t: 'p',
      text: 'Not inherently. A tape-in cycle that is removed properly each time - with full solvent contact and no forcing - does not make the next application or removal any harder. What can make removal more involved over successive cycles is product buildup from not fully clearing adhesive residue at a previous removal, which is one reason a thorough final wash matters as much as the removal itself.',
    },
    { t: 'h2', id: 'first-48-hours', text: 'The first 48 hours after removal' },
    {
      t: 'ul',
      items: [
        '**Wash gently** with a normal shampoo and conditioner, focusing conditioner on the length rather than areas that just had adhesive on them.',
        '**Detangle from the ends up**, the same rule as while extensions were in, since hair can feel slightly more prone to knots right after removal.',
        '**Skip heat styling for a day or two** if your hair feels dry, to give it a short break.',
        '**Note any areas that still feel tender**, and mention them at your next appointment if they persist.',
      ],
    },
    { t: 'h2', id: 'salon-vs-diy', text: 'Salon removal vs doing it yourself' },
    {
      t: 'table',
      head: ['', 'Salon removal', 'At-home removal'],
      rows: [
        ['Access', 'Full head, including the back', 'Harder to see and reach the back safely'],
        ['Product', 'Professional-grade solvent, correctly matched to the tape used', 'Depends what you can access, and may not match'],
        ['Risk if rushed', 'Lower - trained to check before pulling', 'Higher - tempting to tug when something feels stuck'],
        ['Cost', '$50 - 200', 'Cost of solvent only, but higher risk'],
      ],
    },
    {
      t: 'p',
      text: 'At-home removal is possible and many people do it, particularly for the front sections they can see clearly. **The back of the head is the harder part to do safely alone**, since you cannot see whether a tab has actually released before you start applying pressure.',
    },
    { t: 'h2', id: 'diy-safely', text: 'If you do remove tape-ins yourself' },
    {
      t: 'ol',
      items: [
        '**Use a solvent specifically made for tape-in adhesive** - not a generic oil or alcohol, which may not fully dissolve the bond.',
        '**Saturate the tape fully and wait the full recommended time** before attempting to slide anything out.',
        '**Test one tab gently before assuming the rest are ready** - dissolving time is not perfectly even across the whole head.',
        '**Stop and reapply solvent if you feel any resistance** - do not increase force to compensate.',
        '**Get help for the back sections** you cannot see clearly, even if you handle the front yourself.',
      ],
    },
    { t: 'h2', id: 'after-removal', text: 'After removal' },
    {
      t: 'p',
      text: 'Once the tape is out and residue is combed or washed away, most people notice their natural hair feels slightly different for a day or two - a bit more texture at the areas where tabs sat, sometimes a little dryness. This typically settles with a normal wash and gentle brushing.',
    },
    {
      t: 'table',
      head: ['After removal', 'Normal or a sign to check in'],
      rows: [
        ['Slight roughness or a faint line where tape sat, settling within a wash or two', 'Normal'],
        ['Mild dryness at former attachment points', 'Normal - a deep conditioner can help'],
        ['Noticeably thinner patches specifically at former tape locations, not improving', 'Worth mentioning to a doctor or dermatologist'],
        ['Ongoing soreness or tenderness at the scalp after removal', 'Worth mentioning to a doctor or dermatologist'],
      ],
    },
    { t: 'h2', id: 'finding-someone-qualified', text: 'Finding someone qualified to do the removal' },
    {
      t: 'p',
      text: 'The salon that installed your tape-ins is usually the safest default for removal, since they know exactly which tape and adhesive were used. If that is not possible - a move, a closed salon, travel - look for a stylist who explicitly lists extension services and ask directly whether they do removal-only appointments, since not every salon offers it as a standalone service.',
    },
    { t: 'h2', id: 'time-pressure', text: 'If you are short on time before an event or a flight' },
    {
      t: 'p',
      text: 'Rushing a removal to fit a schedule is exactly the situation where force gets substituted for the solvent doing its job properly. If you cannot get a full, unhurried appointment, it is better to book removal for after the event or flight than to compress the process - the tape being in a little longer than planned is a much smaller issue than a rushed removal.',
    },
    { t: 'h2', id: 'bottom-line', text: 'The short version' },
    {
      t: 'p',
      text: 'Removal takes 30 to 60 minutes of solvent contact time and costs $50 to $200. **The wefts should slide out with light pressure, not a pull.** Seeing a noticeable amount of loose hair is usually normal shedding that built up over the 6 to 8 weeks the tape was in, not new damage from the removal itself - but if anything requires real force to come free, that is the moment to stop and add more solvent rather than continue.',
    },
  ],
  faq: [
    {
      q: 'How long does tape-in removal take?',
      a: 'The solvent typically needs 30 to 60 minutes of contact time to fully dissolve the adhesive, plus time for application and cleanup.',
    },
    {
      q: 'Does removing tape-in extensions hurt?',
      a: 'It should not, when the adhesive has fully dissolved - the weft slides out with light pressure. Pain or resistance usually means the solvent needs more time before trying again.',
    },
    {
      q: 'Is it normal to see a lot of hair come out during removal?',
      a: 'Yes, usually. Most of it is normal shed hair (people naturally lose 50 to 100 hairs a day) that got trapped near the tape over the 6 to 8 weeks it was worn, released all at once rather than gradually.',
    },
    {
      q: 'Can I remove tape-in extensions myself at home?',
      a: 'Yes, using a solvent made specifically for tape-in adhesive, with patience for the full dissolving time. The back sections are harder to do safely alone since you cannot see whether a tab has released.',
    },
    {
      q: 'How much does professional removal cost?',
      a: 'Typically $50 to $200, and often discounted when paired with a new install at the same visit.',
    },
  ],
  related: [
    { href: '/en/tape-in-extensions', label: 'Tape-In Extensions: Cost, Wear Time, Care' },
    { href: '/en/do-hair-extensions-damage-hair', label: 'Do Hair Extensions Damage Your Hair?' },
    { href: '/en/hair-extensions-care', label: 'How to Care for Hair Extensions' },
  ],
}
