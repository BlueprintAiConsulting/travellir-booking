---
name: Travellir — Premier Rentals
description: Curated vacation rental brand built on navy, ivory, gold, and a growing red accent — designed to feel like arriving, not searching.
colors:
  navy-deepest: "#070E1A"
  navy-deep: "#0B1526"
  navy: "#111E35"
  navy-mid: "#182844"
  navy-muted: "#1E3254"
  navy-medium: "#254068"
  navy-light: "#3A5A8A"
  navy-pale: "#5A7FAD"
  gold: "#C9A84C"
  gold-light: "#D9BF70"
  gold-deep: "#B8922A"
  gold-dark: "#8C6914"
  gold-wash: "#EBD8A0"
  gold-tint: "#F7F0DA"
  ivory: "#FEFCF7"
  cream: "#FAF8F3"
  cream-warm: "#F5F0E5"
  champagne: "#F2E8C9"
  white: "#FFFFFF"
  dark: "#0E0E0E"
  red-brand: "#C94040"
  success: "#2A8A56"
typography:
  display:
    fontFamily: "Cormorant Garamond, DM Serif Display, Georgia, serif"
    fontSize: "clamp(3rem, 6vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cormorant Garamond, DM Serif Display, Georgia, serif"
    fontSize: "clamp(2.2rem, 4vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Cormorant Garamond, DM Serif Display, Georgia, serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    letterSpacing: "0.18em"
rounded:
  xs: "2px"
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "18px"
  2xl: "28px"
  3xl: "40px"
  full: "9999px"
spacing:
  2xs: "2px"
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
  5xl: "128px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy-deep}"
    rounded: "{rounded.full}"
    padding: "15px 36px"
  button-primary-hover:
    backgroundColor: "{colors.gold-light}"
  button-navy:
    backgroundColor: "{colors.navy-mid}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "15px 36px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "15px 36px"
  button-ghost-gold:
    backgroundColor: "rgba(201,168,76,0.10)"
    textColor: "{colors.gold-deep}"
    rounded: "{rounded.full}"
    padding: "15px 36px"
  property-card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.2xl}"
    padding: "32px"
---

# Design System: Travellir — Premier Rentals

## 1. Overview

**Creative North Star: "The Art of Arrival"**

Travellir's design system is built around one feeling: the moment you arrive somewhere you chose wisely. Not the anxiety of the search, not the hedge of the booking confirmation — the exhale of walking through a door and knowing you got it right. Every screen should carry that certainty. The guest isn't comparing options; they've arrived.

The visual language is navy, ivory, and gold — the colors of a private club, a ship's logbook, a well-worn nautical chart. But the palette is directionally expanding: red joins white, navy, and gold to build a palette that reads as quintessentially American without waving a flag. Four colors with specific jobs. Red is a brand accent in development — currently used only as an error utility, it should be elevated to a deliberate role alongside gold in future iterations.

The tone throughout is confident restraint. Luxury isn't decorated here; it's expressed through generous spacing, photographic quality, and the absence of pressure. The guest should never feel sold to. They should feel discovered.

**This system explicitly rejects:** the anonymous OTA marketplace (Airbnb browse, VRBO grids, price-comparison pressure), the corporate hotel playbook (Marriott-stiff, loyalty-program cold, generic room photography), and the startup-SaaS aesthetic (purple gradients, glassmorphism as decoration, dashboard UI applied to hospitality).

**Key Characteristics:**
- Deep navy grounds the brand in depth and trust; gold warms it into approachability
- Serif display type (Cormorant Garamond) carries the weight of curation; Inter carries the utility without competing
- Pill-shaped buttons throughout — rounded, unhurried, tactile
- Property cards with dramatic hover lift (-8px + shadow-xl) — each card feels like an invitation
- Cinematic noise texture and radial gold glows on dark surfaces; subtle, not decorative
- Ornament dividers (✦ flanked by gold gradient lines) as the brand's signature decorative device

## 2. Colors: The Arrival Palette

A four-color brand system — navy as the foundation, gold as warmth and invitation, ivory as the resting surface, and red as an emerging accent. Together they aim at confident Americana, not corporate hospitality.

### Primary
- **Midnight Navy** (`#111E35` / `--navy`): The dominant surface color for dark backgrounds, hero sections, the footer, and sidebar. Conveys depth, trust, and permanence. Never use pure black in its place.
- **Deep Navy** (`#0B1526` / `--navy-deep`): Darkest surface — hero overlays, card text contrast. The page's anchor.
- **Near-Black Navy** (`#070E1A` / `--navy-deepest`): Reserved for the hero background and footer base. The most saturated version of the brand's dark.

### Secondary
- **Champagne Gold** (`#C9A84C` / `--gold`): The primary brand accent. Used on CTA buttons, active nav underlines, status indicators, ornament dividers, and hover glows. The warmth in an otherwise cool-dark palette.
- **Gold Light** (`#D9BF70` / `--gold-light`): Button hover state, decorative accents on dark backgrounds.
- **Gold Deep** (`#B8922A` / `--gold-deep`): Text-weight gold — used in label typography on light surfaces where `--gold` would be too pale. Minimum contrast on ivory.
- **Gold Dark** (`#8C6914` / `--gold-dark`): Heaviest gold, for text on pale surfaces requiring WCAG AA.

### Tertiary
- **Brand Red** (`#C94040` / `--red-brand`): Currently assigned as an error utility. **Directional intent: elevate to brand status.** Should appear as an intentional accent alongside gold — for geographic markers, availability indicators, and high-emphasis CTAs. Never use as pure decoration.

### Neutral
- **Ivory** (`#FEFCF7` / `--ivory`): Default page background on the public site. Warm, not cream — just perceptibly warmer than white.
- **Cream** (`#FAF8F3` / `--cream`): Section backgrounds that need slight distinction from ivory.
- **Champagne Wash** (`#F2E8C9` / `--champagne`): Tinted washes inside gold-accent areas.
- **Dark** (`#0E0E0E` / `--dark`): Primary body text on light surfaces. Never pure `#000`.
- **Dark-60** (`rgba(14,14,14,0.60)`): Body copy on ivory — check contrast; it clears AA on ivory but is close.

### Named Rules

**The Warmth Rule.** Gold never appears without navy nearby. Used alone, gold reads as decoration. Anchored against deep navy, it reads as warmth. Never float a gold button on an ivory background without a dark text or surface counterpart in the same region.

**The Arrival Rule.** The palette transitions throughout a page: dark navy hero → ivory mid-sections → navy footer. The guest "arrives in the light" and "departs into depth." Invert this sequence (light → dark → light) only with intention.

## 3. Typography

**Display Font:** Cormorant Garamond (with DM Serif Display as secondary serif)
**Body Font:** Inter

**Character:** A classic serif-plus-sans pairing chosen for editorial weight — Cormorant's high contrast and slight fragility signals curation and taste; Inter grounds it in legibility and modern utility. The serif never appears in body copy; Inter never appears in hero headlines.

### Hierarchy

- **Display** (weight 600, `clamp(3rem, 6vw, 5rem)`, line-height 1.05, tracking -0.02em): Hero headlines only. Cormorant Garamond. Italic variant used for the accent line of the hero title.
- **Headline** (weight 600, `clamp(2.2rem, 4vw, 3.4rem)`, line-height 1.12, tracking -0.01em): Section headings. Cormorant Garamond. Color: `--navy-800` on light surfaces, `--white` on dark.
- **Title** (weight 600, `1.35rem`, line-height 1.3): Card headings, modal titles. Cormorant Garamond.
- **Body** (weight 400, `1rem`, line-height 1.75): All prose. Inter. Color: `--dark-60` on ivory, `rgba(255,255,255,0.60)` on navy. Max line length: 65–75ch.
- **Label** (weight 600, `0.7rem`, letter-spacing 0.18em, ALL CAPS): Section kickers, badge text, nav links, stat labels. Inter. Color: `--gold-deep` on light surfaces, `--gold-400` on dark. Used sparingly — one per section max, not above every heading.

### Named Rules

**The One Serif Rule.** Cormorant Garamond is the editorial voice. It appears in headlines only — never in body text, captions, nav, or form labels. Mixing Inter and Cormorant at the same size or in the same paragraph destroys the voice contrast that makes each one work.

**The Label Ceiling.** Uppercase tracked labels (`text-label`) are the brand's single allowed kicker pattern. They may appear once per section as a named, deliberate system. Placing a `.text-label` above every section heading is AI scaffolding. Use it for "Featured Properties," "West Virginia," "From the owners" — not "About," "Services," "Contact."

## 4. Elevation

The system uses a layered shadow vocabulary: ambient shadows for at-rest depth, lifted shadows for interactive states, and colored glows (gold, navy) as brand-specific elevation signals. Surfaces are not flat; depth is expressed through shadow, not tonal background shifts.

**Philosophy:** Flat at rest is a baseline; shadows activate only with state. The exception: hero backgrounds always carry ambient depth via radial gradients — depth is part of the scene-setting, not a response to user action.

### Shadow Vocabulary

- **xs** (`0 1px 2px rgba(0,0,0,0.06)`): Hairline elevation — thin borders, inline elements. Rarely needed.
- **sm** (`0 2px 8px rgba(0,0,0,0.08)`): Cards at rest. The default surface elevation.
- **md** (`0 6px 20px rgba(0,0,0,0.10)`): Modals, dropdowns. Stepped above cards.
- **lg** (`0 12px 40px rgba(0,0,0,0.14)`): Panels, sidesheets.
- **xl** (`0 24px 60px rgba(0,0,0,0.18)`): Property cards on hover. The "invitation" state.
- **2xl** (`0 40px 80px rgba(0,0,0,0.24)`): Hero overlays, full-page dark scenes.
- **Gold glow** (`0 6px 30px rgba(185,146,42,0.30)`): Primary gold CTA buttons at rest. Warm, not generic.
- **Gold glow (lg)** (`0 16px 60px rgba(185,146,42,0.22)`): Gold buttons on hover. Broader and softer.
- **Navy glow** (`0 6px 30px rgba(11,21,38,0.40)`): Navy buttons at rest.

### Named Rules

**The State-Only Rule.** Shadows escalate with interaction; they never appear on static decorative elements. A card goes from shadow-sm → shadow-xl on hover. A button goes from shadow-gold → shadow-gold-lg. Shadow growth is reserved for state change — not for hierarchy decoration.

## 5. Components

### Buttons

Tactile, confident, and unhurried. Every button is pill-shaped (radius-full / 9999px), uppercase, letter-spaced, and responds to hover with a vertical lift. The system has five button variants with distinct jobs.

- **Shape:** Pill (radius-full / 9999px), 15px top/bottom × 36px side padding, `0.875rem` text, weight 600, tracking 0.06em, all-caps
- **Primary (Gold):** `background: linear-gradient(135deg, #C9A84C, #D9BF70)`, text: `--navy-deep`, `box-shadow: shadow-gold`. Hover: `translateY(-2px)`, `shadow-gold-lg`. The booking CTA.
- **Navy:** `background: linear-gradient(135deg, --navy-mid, --navy)`, text: white, `shadow-navy`. Secondary importance, dark-on-dark contexts.
- **Outline (on dark):** Transparent, `border: 1px solid rgba(255,255,255,0.35)`, `backdrop-filter: blur(12px)`. Hero secondary action.
- **Outline (on light):** Transparent, `border: 1.5px solid rgba(14,14,14,0.20)`, text: `--navy-mid`. Light-surface secondary.
- **Ghost Gold:** `background: rgba(201,168,76,0.10)`, `border: 1px solid rgba(201,168,76,0.25)`, text: `--gold-deep`. Tertiary actions on light.

### Property Cards

Each card is an invitation. Drama happens on hover; rest state is calm and confident.

- **Corner style:** Generously rounded (radius-2xl / 28px). Softness signals hospitality.
- **Background:** White (`#FFFFFF`) on ivory page background.
- **Shadow:** `shadow-sm` at rest → `shadow-xl` on hover; `translateY(-8px)` on hover — a pronounced, unmistakable lift.
- **Border:** `1px solid rgba(14,14,14,0.06)` at rest; disappears on hover (`border-color: transparent`) as shadow takes over.
- **Image region:** 260px tall (full-width cards), with `object-fit: cover` and `scale(1.06)` on hover. A gradient overlay darkens the bottom third.
- **Featured card** (spans 2 columns): side-by-side grid with 1.4:1 image-to-body ratio. Image min-height 340px.
- **Badges on image:** Dark-glass pill (`rgba(7,14,26,0.75)`, `backdrop-filter: blur(12px)`, gold border), gold text. "Popular" badge inverts to gold-filled.

### Inputs / Forms

Form inputs appear primarily on dark (navy) surfaces — the search widget and contact form.

- **Style:** `background: rgba(255,255,255,0.08)`, `border: 1px solid rgba(255,255,255,0.12)`, `border-radius: --radius-lg` (12px), white text, 12px × 16px padding.
- **Focus:** `border-color: --gold`, `box-shadow: 0 0 0 3px rgba(201,168,76,0.15)`. Gold ring, not blue.
- **Placeholder:** `rgba(255,255,255,0.30)` — check contrast on mobile.

### Navigation

Transparent on load; a dark-glass bar on scroll. Designed for image-led hero sections where the header lives over photography.

- **Default state:** Transparent background, `--white-70` link color. Links uppercase, 0.82rem, tracking 0.08em.
- **Scrolled state:** `rgba(7,14,26,0.88)`, `backdrop-filter: blur(28px) saturate(200%)`. Height collapses 88px → 72px.
- **Link hover / active:** Color shifts to white; a gold gradient underline grows from 0 to 100% width.
- **Mobile:** Hamburger toggle with three 1.5px bars; full-screen overlay on open.

### Ornament Divider (Signature Component)

The brand's decorative flourish — used between section label and section heading throughout the public site.

```html
<div class="ornament-divider">
  <span class="ornament-divider__line"></span>
  <span class="ornament-divider__icon">✦</span>
  <span class="ornament-divider__line"></span>
</div>
```

Lines are 80px max, 1px, using `linear-gradient(90deg, transparent, #C9A84C, transparent)`. The ✦ icon is 1rem, `--gold-deep`. Appears between `.text-label` and `.heading-section`. Do not use this pattern more than once per section.

## 6. Do's and Don'ts

### Do:
- **Do** use navy (`#111E35` or deeper) as the dark surface — not charcoal, not true black. The warm blue-navy is the brand's identity.
- **Do** let imagery do the emotional work in hero sections. One decisive, place-specific photograph beats five generic ones.
- **Do** use Cormorant Garamond for all headings and Inter for all body text and UI. Never swap.
- **Do** give gold (`#C9A84C`) a warm shadow — `shadow-gold` (the rgba(185,146,42,0.30) version). Gold on a navy background with no shadow reads flat.
- **Do** write property copy as if a trusted friend is recommending the place. Specific, warm, first-person plural. "You'll have the beach to yourself by 7am."
- **Do** elevate red (`#C94040`) to a brand accent alongside gold — geographic markers, availability badges, high-emphasis moments. Do not leave it stranded as an error-only utility color.
- **Do** use pill buttons (radius-full) for all primary CTAs. Rounded = unhurried = premium.
- **Do** vary section spacing for rhythm. `--space-5xl` (128px) between major sections; tighter inside sections.

### Don't:
- **Don't** design any screen that looks like it belongs on Marriott.com, Hilton.com, or any loyalty-program hotel site. If it feels institutional, it's wrong.
- **Don't** design any screen that looks like an Airbnb or VRBO browse page. No stock-photo grids, no review-count anxiety, no price-comparison pressure.
- **Don't** use gradient text (`-webkit-background-clip: text`) outside the hero display headline — the hero italic accent is an established brand moment; applying it elsewhere reads as decoration.
- **Don't** use a `.text-label` (uppercase tracked kicker) above more than one section heading on any given page. It's a brand device, not section grammar.
- **Don't** use side-stripe borders (`border-left > 1px`) as colored card accents. Never intentional.
- **Don't** place identical card grids (same size, same layout, icon + heading + text) on any brand surface. Feature cards asymmetrically; use the featured-card (2-column span) pattern.
- **Don't** use Inter in hero headlines or Cormorant Garamond in nav, labels, or form fields.
- **Don't** use a warm cream/sand/beige body background — `--ivory` (`#FEFCF7`) is the correct page ground. It's perceptibly warmer than white without reading as warm-neutral beige.
- **Don't** let red appear without intention. `--red-brand` (`#C94040`) is reserved for error states and, directionally, as a deliberate brand accent. Never use it decoratively.

---

*Generated by /impeccable document — 2026-06-13*
