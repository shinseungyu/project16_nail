import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, EXTENSIONS_TENSION_NOTE } from './common'

export const doHairExtensionsDamageHair: EnPage = {
  path: '/en/do-hair-extensions-damage-hair',
  title: 'Do Hair Extensions Damage Your Hair?',
  h1: 'Do Hair Extensions Damage Your Hair?',
  description:
    'Extensions themselves are not the variable — weight, attachment tightness, and how they are removed are. What actually affects hair and scalp health.',
  keywords: [
    'do hair extensions damage your hair',
    'are hair extensions bad for your hair',
    'hair extensions and hair loss',
    'traction alopecia extensions',
    'hair extensions scalp damage',
  ],
  category: 'Hair Treatments',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**"Extensions" is not really the variable. Weight, how tightly they are attached, and how they are eventually removed are the three things that actually determine what happens to your hair and scalp.** A light, properly fitted, correctly removed set and a heavy, too-tight, forcibly removed set can be the same method with very different outcomes.',
  blocks: [
    { t: 'note', tone: 'warn', text: EXTENSIONS_TENSION_NOTE },
    { t: 'h2', id: 'three-variables', text: 'The three variables that actually matter' },
    {
      t: 'p',
      text: 'Almost every question about extensions and hair health comes back to one of three things. Method choice affects each of these, but does not replace the need to get them right.',
    },
    {
      t: 'table',
      head: ['Variable', 'Why it matters'],
      rows: [
        ['Weight', 'More hair added means more pull on the natural strands and follicles it is attached to, all day, every day it is worn'],
        ['Tightness', 'How snugly a bead is clamped, a bond is placed, or a braid is done determines how much sustained tension reaches the scalp'],
        ['Removal', 'How the attachment is broken down and taken out determines whether natural hair comes away with it'],
      ],
    },
    { t: 'h2', id: 'weight', text: 'Weight' },
    {
      t: 'p',
      text: 'Every method adds some weight to the hair it is attached to. The question is whether that weight is proportional to how much hair you actually have to support it. **A large amount of extension hair on fine, sparse natural hair is a different situation than the same amount on thick, dense hair** — the strands doing the holding are simply not built the same in both cases.',
    },
    {
      t: 'ul',
      items: [
        'A good stylist assesses your natural hair density before recommending how much hair to add, not after.',
        'More hair is not automatically a better result if your natural hair cannot comfortably support it.',
        'Weight-related strain tends to show up gradually, over weeks, rather than immediately in the chair.',
      ],
    },
    { t: 'h2', id: 'tightness', text: 'Tightness' },
    {
      t: 'p',
      text: 'This is the variable most directly discussed in connection with traction alopecia — hair loss linked to prolonged pulling on the follicle. It is not about which method you chose; it is about how snugly that method was applied and how it changes as your hair grows.',
    },
    {
      t: 'table',
      head: ['Method', 'Where tightness shows up'],
      rows: [
        ['Tape-in', 'How close the tabs sit and whether they are placed evenly, without pulling neighbouring sections'],
        ['Micro-link', 'How firmly each bead is clamped - too tight increases sustained tension at that strand'],
        ['Keratin bond', 'Whether each bond is sized appropriately for the strand it is fused to'],
        ['Weave', 'The tightness of the braid the wefts are sewn onto - widely discussed as the largest single tension factor for this method'],
        ['Clip-in / halo', 'How snugly clips grip, and whether the same section is clipped repeatedly in the same spot over time'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      text: 'Extensions should not hurt. Persistent pulling, soreness, or a headache that traces back to your scalp is not a normal part of wearing them — it is a sign they need adjusting or removing, not something to push through until the next scheduled appointment.',
    },
    { t: 'h2', id: 'removal', text: 'Removal - where most of the actual damage happens' },
    {
      t: 'p',
      text: 'Across the methods discussed in this cluster, **removal is where problems most often occur, more than the weeks the extensions were actually worn.** Every method is designed to be reversed by breaking down the attachment - dissolving adhesive with a solvent, opening a bead, melting a keratin bond with a specific tool, or carefully unpicking a braid. Force is the failure mode, not the method.',
    },
    {
      t: 'table',
      head: ['If removal is done by', 'What tends to happen'],
      rows: [
        ['A trained stylist, with the right solvent/tool, unhurried', 'Attachment releases cleanly, natural hair intact'],
        ['Anyone, rushed or without the right product/tool', 'Attachment is pulled or forced rather than released, natural hair can come away with it'],
        ['You, at home, without guidance', 'Higher risk of forcing a bond that has not fully broken down'],
      ],
    },
    {
      t: 'p',
      text: 'This is true across every method in this cluster: **if removal requires noticeable force, it means the bond has not actually released yet** — pulling harder does not finish the job faster, it just pulls on hair that is still attached to something.',
    },
    { t: 'h2', id: 'traction-alopecia', text: 'About traction alopecia, specifically' },
    {
      t: 'p',
      text: 'Sustained tension on hair follicles has been discussed in connection with traction alopecia, a form of hair loss linked to prolonged pulling. This is not unique to extensions - it is the same mechanism discussed with tight ponytails, tight braids worn without extensions, and other hairstyles that hold hair under continuous tension for long periods.',
    },
    {
      t: 'p',
      text: 'What this means in practice: **the amount of tension and how long it is sustained matter more than the specific product or method name.** A weave with an overly tight braid base, a micro-link set with beads clamped too firmly, or even a habitually tight ponytail can all put the same kind of sustained pull on the same follicles.',
    },
    {
      t: 'ul',
      items: [
        'It is not a diagnosis you can make yourself from a search result - only a doctor or dermatologist can assess what is actually happening with your hair and scalp.',
        'It is discussed as being more associated with repeated, sustained tension over a long period than with a single set worn for the recommended amount of time.',
        'Early attention tends to matter - which is why the signs below are worth acting on rather than monitoring indefinitely.',
      ],
    },
    { t: 'h2', id: 'warning-signs', text: 'Signs worth seeing a doctor about' },
    {
      t: 'table',
      head: ['What you notice', 'What to do'],
      rows: [
        ['Awareness of weight, no pain, hair looks normal once removed', 'Normal - continue monitoring'],
        ['Persistent pulling, soreness, or a headache traced to attachment points', 'Have a stylist check and loosen or remove - do not wait it out'],
        ['Increased shedding concentrated specifically at former attachment points', 'See a doctor or dermatologist, particularly if it continues after removal'],
        ['A receding hairline, or thinning at the temples or hairline', 'See a doctor or dermatologist'],
        ['Small bumps, scabbing, or tenderness at the scalp along attachment points', 'See a doctor or dermatologist'],
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      text: 'These are signs to raise with a professional, not a self-diagnosis checklist. A doctor or dermatologist can tell you what is actually happening and whether it is related to extensions, styling habits, or something else entirely.',
    },
    { t: 'h2', id: 'what-reduces-risk', text: 'What actually reduces risk, across every method' },
    {
      t: 'ol',
      items: [
        '**Choose an amount of hair proportional to your natural density** - more is not automatically better.',
        '**Speak up in the chair if anything pulls during application** - tightness should be corrected then, not endured.',
        '**Follow the recommended wear schedule for your method** rather than stretching it to save on a maintenance visit.',
        '**Have extensions removed by someone trained in that specific method**, with the correct solvent or tool, rather than forcing them out yourself.',
        '**See a doctor promptly for persistent pulling, increased shedding at attachment points, or a changing hairline** - do not wait for it to resolve on its own.',
      ],
    },
    { t: 'h2', id: 'method-does-not-remove-risk', text: 'No method removes these three variables entirely' },
    {
      t: 'p',
      text: 'Clip-in and halo are generally discussed as the gentler end of the spectrum because they add no adhesive, beads, or heat-fused points to individual strands, and they come out every night rather than staying attached continuously. But weight still applies while they are worn, and a heavy set clipped or looped the same way every single day can still create a concentrated pull point over time.',
    },
    {
      t: 'p',
      text: 'Tape-in, micro-link, keratin bond, and weave all involve a period of continuous, sustained attachment measured in weeks rather than hours, which is exactly the condition tension-related hair loss is discussed in connection with. That does not mean any of them causes it - it means tightness, weight, and wear duration are the details worth getting right, for any of them.',
    },
    { t: 'h2', id: 'myths', text: 'A few claims worth being precise about' },
    {
      t: 'table',
      head: ['You will often see', 'What is more accurate'],
      rows: [
        ['"Extensions cause hair loss."', 'Sustained tension has been discussed in connection with traction alopecia. Weight, tightness, and duration are the actual variables - not the product category itself.'],
        ['"[Method] is damage-free."', 'No method is. Every method adds some weight, and the semi-permanent ones involve sustained attachment for weeks at a time.'],
        ['"If it does not hurt during application, it is fine."', 'Tension-related strain often builds gradually over hours or days, not necessarily felt the moment a set goes in.'],
        ['"A little bit of pulling is just part of wearing extensions."', 'Persistent pulling or soreness is a sign to adjust or remove, not a normal part of the experience.'],
        ['"Removal is quick and simple, nothing to worry about."', 'Removal is where most reported issues occur, specifically when it is rushed or forced rather than allowed to fully release.'],
      ],
    },
    { t: 'h2', id: 'after-tension-resolves', text: 'What happens after tension is addressed' },
    {
      t: 'p',
      text: 'This is general information, not a prediction about any individual case. Broadly, hair and scalp health discussions distinguish between tension that is identified and addressed early, and tension that continues over a long period without being addressed - but whether a specific case improves, and how quickly, is something only a doctor or dermatologist examining you can assess. This is exactly why the guidance throughout this page is to raise concerns promptly rather than to wait and see.',
    },
    { t: 'h2', id: 'everyday-comparison', text: 'How this compares to everyday hairstyles' },
    {
      t: 'p',
      text: 'None of this is unique to salon extensions. A tight ponytail, a tight bun, or tight braids worn without any added hair put a comparable kind of sustained tension on the same follicles, over the same kind of timeframe, and are discussed in the same context. If you already know a tight ponytail leaves your hairline sore by the end of the day, that same sensitivity is worth mentioning at an extensions consultation, since it says something real about how your scalp responds to sustained pull.',
    },
    { t: 'h2', id: 'talking-to-your-stylist', text: 'Questions worth asking before your appointment' },
    {
      t: 'table',
      head: ['Ask', 'Why it matters'],
      rows: [
        ['How much hair (weight) do you recommend for my density?', 'Checks that the amount is proportional, not just what looks fullest'],
        ['How will you check that nothing is too tight before I leave?', 'Confirms tightness is actually assessed, not assumed'],
        ['What does removal involve, and how long does it take?', 'A stylist who explains removal clearly usually does it carefully too'],
        ['What should I do if something feels tight after I get home?', 'You want a clear answer, not "that is normal, give it time"'],
      ],
    },
    { t: 'h2', id: 'bottom-line', text: 'The short version' },
    {
      t: 'p',
      text: 'Extensions are not inherently harmful, and they are not risk-free either. **Weight, tightness, and removal are the three things that determine the outcome**, and all three are things you and your stylist have real control over - unlike "which method," which only shapes the range those three variables operate in. Persistent pulling, soreness, or a change in shedding or hairline is never something to just wait out.',
    },
  ],
  faq: [
    {
      q: 'Do hair extensions cause hair loss?',
      a: 'Extensions themselves are not established as a direct cause. Sustained tension on follicles has been discussed in connection with traction alopecia, which is why weight, how tightly extensions are attached, and how long they are worn continuously matter more than the method name.',
    },
    {
      q: 'Which type of extensions is least likely to cause damage?',
      a: 'Clip-in and halo are generally considered gentler since they add no adhesive, beads, or heat-fused points and come out nightly. But weight still matters, and no method removes risk entirely if fitted too heavy or too tight.',
    },
    {
      q: 'Is removal the most damaging part of wearing extensions?',
      a: 'It is widely discussed as the point where problems most often occur, more than the weeks they were worn. Every method is designed to release cleanly when the attachment is properly broken down - forcing removal is what causes natural hair to come away with it.',
    },
    {
      q: 'What are the warning signs I should not ignore?',
      a: 'Persistent pulling or soreness, increased shedding concentrated at attachment points, a receding hairline, or scalp bumps and tenderness. See a doctor or dermatologist rather than waiting for these to resolve on their own.',
    },
    {
      q: 'Are extensions safe if I have fine or thin hair?',
      a: 'They can be, with an amount of hair proportional to your density and close attention to tightness - see the dedicated guide on extensions for fine hair for specifics on which methods and placements are usually recommended.',
    },
  ],
  related: [
    { href: '/en/tape-in-extensions-removal', label: 'Tape-In Extension Removal: How It Works' },
    { href: '/en/hair-extensions-for-fine-hair', label: 'Hair Extensions for Fine Hair: What Works' },
    { href: '/en/hair-extensions-care', label: 'How to Care for Hair Extensions' },
  ],
}
