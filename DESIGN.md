# Personal Portfolio — Design System Specification (v3)

> **Source:** Extracted from Stitch MCP project `Personal Portfolio` — Screen 3: *Karan Bhoi | Engineering Portfolio v3* (`projects/6327579466705856576/screens/43bfce2f33444b26bc322ceb97bd13a7`).  
> **Theme Concept:** *Lumina Engineering Monograph* — Modern SaaS / Dark-First Glassmorphism aesthetic engineered for high-performance software engineering portfolios.

---

## 1. Aesthetic Strategy & Creative Concept

The **v3 design** adopts a refined **Modern SaaS Dark Mode** interface featuring sleek typography, glassmorphism, monochrome surfaces with glowing primary accents, and structured technical data layouts.

- **Obsidian & Charcoal Base:** `#121314` base background (`surface`), with low-contrast containers (`#0D0E0F`, `#1F2020`, `#292A2A`).
- **High-Impact Emerald Accent:** Vibrant Emerald Green (`#4EDEA3` / `#10B981`) for interactive elements, status indicators, badges, and CTAs.
- **Glassmorphism:** Sticky top navbar with `bg-surface/60`, `backdrop-filter: blur(12px)`, and translucent borders (`border-outline-variant/30`).
- **Space Grotesk & JetBrains Mono Typography:** Architectural, sharp display typography using **Space Grotesk** for all headings, paired with **Inter** for readable body text, and **JetBrains Mono** for upper-case tracked labels (`label-caps`) and code badges (`label-code`).

---

## 2. Color Palette & Token Architecture

### Primary & Accent Colors
| Token Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| `primary` | `#4EDEA3` / `#10B981` | Brand primary color, active links, logo text, status dot |
| `primary-container` | `#10B981` | Primary CTA background, selection highlight background |
| `on-primary` | `#003824` / `#121314` | Text color on primary filled elements |
| `primary-fixed` | `#6FFBBE` | Highlight accents |
| `secondary` | `#C6C6C7` | Secondary text accents |

### Neutral Surfaces & Backgrounds
| Token Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| `surface` / `background` | `#121314` | Global viewport background |
| `surface-container-lowest` | `#0D0E0F` | Page cards, footer background |
| `surface-container-low` | `#1B1C1C` | Card visual header backgrounds |
| `surface-container` | `#1F2020` | Intermediate card surface |
| `surface-container-high` | `#292A2A` | Floating modules |
| `surface-container-highest` | `#343535` | Scrollbar thumb, highest elevation |

### Foreground & Strokes
| Token Name | Hex Code / RGBA | Purpose / Usage |
| :--- | :--- | :--- |
| `on-surface` | `#E3E2E2` | Primary body text and display headlines |
| `on-surface-variant` | `#BBCABF` / `#A3A3A3` | Muted secondary text, descriptions, sub-headings |
| `outline` | `#86948A` | Icon borders, hover state stroke color |
| `outline-variant` | `#3C4A42` | Container borders (`border-outline-variant/30`) |

---

## 3. Typography System

### Font Families
- **Display & Headlines:** `Space Grotesk`, sans-serif
- **Body & Content:** `Inter`, sans-serif
- **Labels & Code:** `JetBrains Mono`, monospace

### Typography Scale (v3 Specs)

| Token Name | Font Family | Size | Line Height | Weight | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-xl` | Space Grotesk | `80px` (`5.0rem`) | `88px` (`1.1`) | `700` | `-0.04em` |
| `headline-lg` | Space Grotesk | `48px` (`3.0rem`) | `56px` | `600` | `-0.02em` |
| `headline-lg-mobile` | Space Grotesk | `32px` (`2.0rem`) | `40px` | `600` | `-0.01em` |
| `headline-md` | Space Grotesk | `32px` (`2.0rem`) | `40px` | `500` | `normal` |
| `body-lg` | Inter | `18px` (`1.125rem`) | `32px` | `400` | `normal` |
| `body-md` | Inter | `16px` (`1.0rem`) | `24px` | `400` | `normal` |
| `label-caps` | JetBrains Mono | `12px` (`0.75rem`) | `16px` | `600` | `0.1em` (UPPERCASE) |
| `label-code` | JetBrains Mono | `14px` (`0.875rem`) | `20px` | `500` | `0.02em` |

---

## 4. Spacing & Container Metrics (v3)

- **Grid System:** 12-column grid model with 8px base unit spacing.
- `container-max`: `1440px` (Max container width)
- `margin-desktop`: `80px` (Horizontal padding for desktop viewports)
- `margin-mobile`: `24px` (Horizontal padding for mobile viewports)
- `gutter`: `32px` (Grid gap between cards/columns)
- `section-gap`: `160px` (Desktop vertical gap between major sections) / `64px` (Mobile gap)

---

## 5. Components & Structure (v3 Specifications)

### Top Navigation Bar (Header)
- **Positioning:** `fixed top-0 w-full z-50`
- **Height:** `80px` (`h-20`)
- **Background:** Translucent `#121314` with backdrop blur (`bg-surface/60 backdrop-blur-md`) and bottom stroke `border-b border-outline-variant/30`.
- **Brand Logo:** `"KB"` in green `Space Grotesk` (`font-headline-md text-headline-md text-primary tracking-tighter`).
- **Nav Links:** `Summary`, `Projects`, `Tech Stack`, `Education`, `Contact` in `font-label-caps text-label-caps` (12px JetBrains Mono uppercase tracking).
- **Actions:**
  - `"Download Resume"` outline button with `download` icon.
  - Theme Toggle button with `light_mode` Material Symbol icon.
  - Mobile hamburger menu toggle button (`md:hidden`).

### Hero & Summary Section
- **Status Badge:** `"Available for Work"` pill tag (`inline-flex items-center gap-2 font-label-caps text-label-caps text-primary border border-outline-variant px-3 py-1 rounded-full`) with a pulsing green dot (`w-2 h-2 rounded-full bg-primary animate-pulse`).
- **Display Headline:** `Karan Bhoi.` with secondary text `<span class="text-on-surface-variant">Software Engineer.</span>` (`font-display-xl text-headline-lg-mobile md:text-display-xl text-on-surface`).
- **Summary Paragraph:** Border-left accented text (`font-body-lg text-body-lg text-on-surface-variant border-l-2 border-outline-variant/50 pl-6 py-2`).

### Projects Section & Carousel
- **Header:** Section Title `"Projects"` + Navigation Controls (`prev-project`, `next-project` 40x40px square bordered buttons with `arrow_back` / `arrow_forward` icons).
- **Project Cards:**
  - Border: `border border-[#1f1f1f] bg-[#0a0a0a] rounded flex flex-col group`
  - Visual Top Header: `h-64 border-b border-[#1f1f1f] bg-surface relative` with radial grid background pattern and Material Symbol icon (`integration_instructions`, `database`).
  - Title: `Space Grotesk` 32px heading with external link icon (`open_in_new`).
  - Description: Inter 16px body text.
  - Tech Chips: `font-label-code text-label-code border border-outline-variant/50 px-2 py-1 rounded text-on-surface-variant`.

### Tech Stack Section
- **Layout:** Left 4-column column with section title and summary; Right 8-column 2x2 grid of tech categories (`Languages`, `Frameworks`, `Database`, `Tools & VC`).
- **Category Card:** `bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-6`.
- **Category Header:** `font-label-caps text-primary uppercase tracking-wider`.
- **Badges:** `font-label-code bg-surface-variant/30 px-3 py-1.5 rounded text-on-surface`.

### Education Section
- Section Title with `school` Material Symbol icon + "Education".
- Vertical timeline with `border-l border-outline-variant/30`, timeline dot `w-2 h-2 bg-primary rounded-full -left-[4.5px] top-2`.

### Footer
- Headline `"Let's connect."` (`font-display-xl`).
- Description + Email CTA button (`border border-outline-variant text-on-surface px-6 py-3 rounded font-label-caps`).
- Footer bottom bar: Brand logo `"KB"`, Copyright info, and social links (`LinkedIn`, `GitHub`, `Source`).
