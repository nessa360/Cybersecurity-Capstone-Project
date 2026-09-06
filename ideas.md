# Onyx Global Website Design Directions

## Approach 1

**Theme Name:** Quiet Signal

**Very Brief Intro:** A warm, editorial fintech identity that pairs deep ink with oxidized lime and paper tones. It feels calm, capable, and human rather than aggressively “tech.”

**Probability:** 0.03

## Approach 2

**Theme Name:** Civic Ledger

**Very Brief Intro:** A civic-modern direction inspired by public infrastructure, transit wayfinding, and printed annual reports. Structured navigation and strong numerals make trust feel tangible.

**Probability:** 0.07

## Approach 3

**Theme Name:** Night Relay

**Very Brief Intro:** A dark, high-contrast interface with electric accents and motion trails that evokes always-on global money movement. Energetic and technical, reserved for one intentionally more digital route.

**Probability:** 0.02

## Chosen Direction: Quiet Signal

### Design Movement

Contemporary African editorial modernism with cues from Swiss International Typographic Style: asymmetric composition, disciplined type hierarchy, expressive numerals, and a tactile paper-to-screen palette.

### Core Principles

1. Make trust feel calm, not corporate: use generous breathing room, direct language, and restrained visual signals.
2. Let the number lead: balances, rates, and movement are typographic objects with clear hierarchy.
3. Make every screen feel connected to a real person and a real action, while keeping all project data explicitly fictional.
4. Use asymmetry with intention: offset panels and anchored labels create momentum without clutter.

### Color Philosophy

The foundation is warm parchment and charcoal ink, which makes the platform feel grounded and legible. A signature oxidized-lime green signals activity, access, and forward motion without copying the usual fintech blue. Cobalt appears sparingly as a navigation and link accent, while clay and amber provide soft semantic emphasis. The palette should feel like a printed financial journal brought into a precise digital system.

### Layout Paradigm

Use a split-plane layout: editorial copy and status labels occupy one plane while a functional card, ledger, or diagram anchors the other. On the home page, content should not be vertically centered in a generic hero; instead, the headline sits high-left with a large offset account card and a lower trust strip. Dashboard screens use a persistent left rail on desktop, collapsing into a compact bottom action bar on mobile.

### Signature Elements

1. A slim vertical “signal rail” on major sections with uppercase metadata such as `OG / 01`, `LOCAL DEMO`, or `SECURITY NOTE`.
2. The Onyx mark: a four-point, interlocking loop that resembles an O, a compass, and a transfer path at once.
3. Oversized ledger numerals and thin ruled lines that make data feel transparent and inspectable.

### Interaction Philosophy

Interactions should feel like controlled handoffs. Buttons shift by a few pixels and deepen their shadow, links reveal a short underline, and dashboard cards lift slightly when they become actionable. Never hide essential state behind decorative motion. API-connected states should communicate whether the user is in a local simulation, whether a token exists, and whether a request succeeded or failed.

### Animation

Use 180–260ms ease-out transitions for buttons, navigation, and cards. Stagger home-page entrances by 50ms, with the hero copy arriving before the account-card visual. Keep the account-card data static and crisp; only animate the signal line and small status dot. On mobile, drawer navigation should enter from the right with a slight opacity and translate transition. Respect `prefers-reduced-motion` by disabling non-essential entrance movement.

### Typography System

Use **DM Sans** for interface copy and **Space Grotesk** for headlines, large balances, labels, and wordmark-like display moments. Headings are tight and confident, with selective italic or outlined emphasis only where it clarifies meaning. Body copy stays at a comfortable 1.55 line-height. Use tabular numerals for balances and transaction amounts.

### Brand Essence

**Positioning:** Onyx Global is the calm, clear money layer for people and businesses moving through a connected world—built for clarity, not financial theater.

**Personality:** Grounded, lucid, quietly ambitious.

### Brand Voice

Headlines should be concise, assured, and human. CTAs should name the next action rather than oversell it. Microcopy should explain system status in plain language and call out the local educational context when relevant.

Example headline: **“Move money with less noise.”**

Example CTA: **“See how the account moves”**

### Wordmark & Logo

Use a geometric symbol rather than a default text logo: four rounded lozenges interlock around a small negative-space diamond, implying exchange, direction, and an “O” silhouette. The wordmark is set separately in a custom-tracked Space Grotesk treatment with `ONYX` in ink and `GLOBAL` in oxidized lime. In the UI, use the symbol at a clearly visible size alongside the wordmark.

### Signature Brand Color

**Oxide Lime — `#B6D63A`**. It is bright enough to own attention on parchment and restrained enough to feel like a signal rather than a neon effect. Use it for the primary action, live status, and the brand mark’s active half.

### File-Level Reminder

Every CSS, JSX, and page file should retain a short comment reminding future edits to reinforce Quiet Signal: warm paper, ink, oxide lime, editorial asymmetry, signal rails, and calm motion.

## Style Decisions

- Cobalt remains a small navigation, link, or status accent; it does not occupy dominant card or hero surfaces. Parchment, ink, and Oxide Lime carry the identity.
- Headlines avoid generic fintech claims such as “simple,” “secure,” and “digital finance” unless grounded by a specific human action. Prefer short Onyx-style lines such as “Keep money moving. Keep the signal clear.”
- Dashboard surfaces read as calm ledger/report objects rather than SaaS tiles. Hierarchy comes from oversized numerals, ruled lines, metadata rails, and asymmetry.
- Transfer-path linework and inspectable metadata should appear across marketing and workspace screens, keeping the brand system continuous.
