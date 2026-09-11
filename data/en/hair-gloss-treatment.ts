import type { EnPage } from './types'
import { EN_UPDATED_BATCH5, EN_UPDATED_BATCH5_ISO, GLOSS_TONER_NOTE } from './common'

export const hairGlossTreatment: EnPage = {
  path: '/en/hair-gloss-treatment',
  title: 'Hair Gloss Treatment: What It Does and Costs',
  h1: 'Hair Gloss Treatment: What It Does and Costs',
  description:
    'What a salon gloss treatment actually does, how the appointment goes, how much it costs, and who benefits most from booking one.',
  keywords: ['hair gloss treatment', 'gloss treatment hair', 'hair gloss cost', 'what does a hair gloss do'],
  category: 'Hair Colour',
  stage: 14,
  updated: EN_UPDATED_BATCH5,
  updatedIso: EN_UPDATED_BATCH5_ISO,
  lead:
    '**A gloss treatment is a quick, low-commitment salon service that adds shine and a light tone shift without lightening or lifting your natural color.** It typically takes 15 to 40 minutes, lasts 4 to 6 weeks, and costs $30 to $80 depending on salon and region.',
  blocks: [
    { t: 'note', tone: 'info', text: GLOSS_TONER_NOTE },
    { t: 'h2', id: 'what-it-is', text: 'What a gloss treatment actually is' },
    {
      t: 'p',
      text: 'A gloss is a demi-permanent, deposit-only color service. It sits on top of your existing color rather than changing its underlying level, which is why it can be added to almost any hair without much risk. Salons sometimes call the same service a “glaze” — see [Gloss vs Glaze vs Demi-Permanent](/en/gloss-vs-glaze-vs-demi) if the terminology is what brought you here.',
    },
    { t: 'h2', id: 'what-it-does', text: 'What it does to your hair' },
    {
      t: 'table',
      head: ['Effect', 'Why it happens'],
      rows: [
        ['Visible shine', 'The formula smooths the outer cuticle layer, so light reflects more evenly'],
        ['Subtle tone shift', 'A small amount of pigment deposits into the hair shaft'],
        ['A slightly richer, more “finished” look', 'Evens out any dullness or unevenness in existing color'],
      ],
    },
    { t: 'h2', id: 'what-it-does-not', text: 'What it doesn’t do' },
    {
      t: 'ul',
      items: [
        'It does not lighten or lift your natural color or previous dye.',
        'It does not repair damage that has already happened to the hair.',
        'It does not permanently or completely cover grey — it blends rather than blankets it.',
        'It is not a substitute for a full color or highlight service.',
      ],
    },
    { t: 'h2', id: 'the-appointment', text: 'What happens during the appointment' },
    {
      t: 'ol',
      items: [
        '**A short consultation** about the tone or shine you want.',
        '**Hair is shampooed** and towel-dried to the right level of dampness for the product being used.',
        '**The gloss is applied** section by section, similar to a color application but usually faster.',
        '**Processing, typically 10 to 20 minutes** under the salon’s standard conditions.',
        '**Rinse, and sometimes a quick conditioning step**, followed by styling.',
      ],
    },
    { t: 'h2', id: 'how-long-takes', text: 'How long the appointment takes' },
    {
      t: 'table',
      head: ['Booking type', 'Typical time'],
      rows: [
        ['Standalone gloss appointment', '20 - 45 minutes'],
        ['Added onto a color or highlight appointment', 'An extra 15 - 25 minutes on top of the color service'],
      ],
    },
    { t: 'h2', id: 'cost', text: 'Cost breakdown' },
    {
      t: 'table',
      head: ['Where you get it', 'Typical price'],
      rows: [
        ['Standalone salon gloss', '$30 - 80'],
        ['Added onto a color service', 'Often $20 - 40 on top of the color price'],
        ['At-home gloss product', '$10 - 30'],
      ],
    },
    {
      t: 'p',
      text: 'Region and salon tier move that range more than the product itself does — a high-end salon in a major city and a neighborhood salon can differ by $30 or more for essentially the same service.',
    },
    { t: 'h2', id: 'candidates', text: 'Who benefits most from a gloss' },
    {
      t: 'ul',
      items: [
        'Color-treated hair whose tone or shine has started to fade between full appointments.',
        'Virgin hair that never had a chemical service, wanting extra shine for an event.',
        'Balayage or highlighted hair between full color visits — see [Balayage Maintenance](/en/balayage-maintenance) for how this fits into a full upkeep routine.',
        'Hair going into a photo, wedding or other occasion where extra shine matters that week.',
      ],
    },
    { t: 'h2', id: 'clear-vs-tinted', text: 'Clear vs tinted gloss' },
    {
      t: 'table',
      head: ['Type', 'What it adds'],
      rows: [
        ['Clear gloss', 'Shine and cuticle smoothness only, no pigment'],
        ['Tinted gloss', 'Shine plus a deliberate tone shift or correction'],
      ],
    },
    {
      t: 'p',
      text: 'See [Clear Gloss on Virgin Hair](/en/clear-gloss-virgin-hair) for a deeper look at when the no-pigment version is the right call.',
    },
    { t: 'h2', id: 'diy-vs-salon', text: 'At-home gloss products vs a salon treatment' },
    {
      t: 'table',
      head: ['', 'At-home product', 'Salon treatment'],
      rows: [
        ['Cost', '$10 - 30', '$30 - 80'],
        ['Application evenness', 'Depends on your own technique', 'Sectioned and controlled by a professional'],
        ['Custom tone correction', 'Limited — usually one shade option', 'Can be mixed to your specific undertone'],
        ['Typical duration', 'Often shorter, 3 - 5 weeks', '4 - 6 weeks'],
      ],
    },
    { t: 'h2', id: 'by-hair-type', text: 'How results vary by hair type' },
    {
      t: 'table',
      head: ['Hair type', 'What to expect'],
      rows: [
        ['Virgin, never colored', 'Subtle shine boost, shortest-lasting result of the group'],
        ['Previously highlighted or balayaged', 'Refreshes tone and shine, the most common use case'],
        ['Recently lightened', 'Often doubles as the toner step — see the difference below'],
        ['Grey or greying', 'Blends grey with the surrounding color rather than covering it fully'],
        ['Dry or porous', 'Tends to absorb more deposit, sometimes needing shorter processing time'],
      ],
    },
    { t: 'h2', id: 'gloss-or-toner', text: 'Is this the same as a toner?' },
    {
      t: 'p',
      text: 'Often, yes — many salons use “gloss” and “toner” for the same demi-permanent service, splitting the words by context rather than chemistry. If your main concern is a warm or brassy cast after lightening specifically, see [Hair Gloss vs Toner](/en/hair-gloss-vs-toner) for how the two labels actually map onto each other.',
    },
    { t: 'h2', id: 'common-mistakes', text: 'Common mistakes that shorten the result' },
    {
      t: 'table',
      head: ['Mistake', 'Better approach'],
      rows: [
        ['Washing hair the same day right after', 'Wait until your stylist’s recommended window before the first wash'],
        ['Switching to a sulfate-heavy shampoo', 'Stick with a sulfate-free, color-safe formula'],
        ['Skipping the refresh until it looks obviously faded', 'Book on a 4 - 6 week schedule rather than reactively'],
        ['Using purple shampoo daily to “boost” the effect', 'Once a week is enough — daily use over-deposits'],
      ],
    },
    { t: 'h2', id: 'questions-to-ask', text: 'Questions worth asking before you book' },
    {
      t: 'ol',
      items: [
        '**Is this clear or tinted?** Confirms whether any color is being deposited.',
        '**Will this replace or add to my regular color appointment?** Sets expectations on timing and price.',
        '**How long should I expect this to last on my hair specifically?** Porosity and hair type both affect it.',
        '**What aftercare do you recommend for my hair?** Salons sometimes have product-specific guidance.',
      ],
    },
    { t: 'h2', id: 'frequency', text: 'How often to book one' },
    {
      t: 'p',
      text: 'Every 4 to 6 weeks is the usual rhythm, timed as a refresh between full color appointments rather than a replacement for them. See [How Long Does a Hair Gloss Last?](/en/how-long-does-hair-gloss-last) for what actually shortens or extends that window.',
    },
    { t: 'h2', id: 'aftercare', text: 'Aftercare that actually extends it' },
    {
      t: 'ul',
      items: [
        '**Wash less often** — frequent washing is the single biggest factor in how fast a gloss fades.',
        '**Rinse in cool to lukewarm water**, not hot.',
        '**Use a sulfate-free shampoo** rather than a stripping everyday formula.',
        '**Skip clarifying shampoos** unless you specifically need to remove buildup.',
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Purple shampoo, once a week',
      text: 'If you are using a purple or blue shampoo to manage tone between glosses, keep it to about once a week. Overuse shows up as dull, flat, grey or faintly lavender hair — if that happens, stop and let it fade rather than adding more.',
    },
    { t: 'h2', id: 'combining', text: 'Combining gloss with other services' },
    {
      t: 'p',
      text: 'A gloss is commonly added onto a color, highlight or balayage appointment as a finishing step, or booked entirely on its own between those bigger appointments. Both are normal — which one makes sense depends on how your color is fading and how much time is left before your next full service.',
    },
    { t: 'h2', id: 'sensitivity', text: 'If you have a sensitive scalp' },
    {
      t: 'p',
      text: 'A gloss uses little to no ammonia and is generally well tolerated, but any product applied near the scalp carries some chance of irritation. Mention known sensitivities at consultation, and ask your salon about a patch test if you have a history of reacting to hair color products.',
    },
    { t: 'h2', id: 'bottom-line', text: 'The bottom line' },
    {
      t: 'p',
      text: 'A gloss treatment is a low-risk, short appointment that refreshes shine and tone without touching your underlying color. It is not a repair service and not a replacement for a full color visit — it is the maintenance step that keeps the months between those visits looking finished.',
    },
  ],
  faq: [
    { q: 'How long does a gloss treatment take?', a: 'Roughly 20 to 45 minutes as a standalone service, or 15 to 25 extra minutes added onto a color appointment.' },
    { q: 'Does a gloss treatment damage hair?', a: 'It is a low-damage, deposit-only service — it does not lighten or chemically lift hair the way color or bleach does.' },
    { q: 'Can I get a gloss on hair that has never been colored?', a: 'Yes. A clear or lightly tinted gloss on virgin hair adds shine without any color history required.' },
    { q: 'How much does it cost?', a: 'Roughly $30 to $80 at a salon as a standalone service, or $10 to $30 for an at-home product.' },
    { q: 'Will it cover my grey hair?', a: 'It blends grey into the surrounding color rather than covering it completely — it is not a full grey-coverage service.' },
  ],
  related: [
    { href: '/en/hair-gloss-vs-toner', label: 'Hair Gloss vs Toner: What’s the Actual Difference' },
    { href: '/en/how-long-does-hair-gloss-last', label: 'How Long Does a Hair Gloss Last?' },
    { href: '/en/balayage-maintenance', label: 'Balayage Maintenance: How to Keep It Looking Fresh' },
  ],
}
