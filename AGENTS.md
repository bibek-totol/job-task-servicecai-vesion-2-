<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project: Servicechai Website (Reference Handover Assets → Next.js 16)

Servicechai BD Limited is a Bangladesh-based customer experience (CX) management, BPM, and Global Capability Centre (GCC) company.

This repository (`job-task-service-cai`) is the official project to build a modern, high-performance, responsive Next.js 16 web application for Servicechai.

A complete and tested reference handover package is located in `Servicechai Website Asset/`. Your job is to port this reference implementation into a clean, modular, production-ready Next.js 16 App Router application.

---

## 1. Tech Stack & Invariant Rules

These are the exact dependencies installed in `package.json`. Do not change or add packages.

| Tool | Version | Notes |
|---|---|---|
| **Next.js** | `16.3.6` | App Router. Read docs in `node_modules/next/dist/docs/`. |
| **React** | `19.2.8` | React 19 Server Components by default. |
| **Tailwind CSS** | `v4` (`tailwindcss` + `@tailwindcss/postcss`) | CSS-first setup via `@theme` in `app/globals.css`. |
| **TypeScript** | `5.x` | Strict mode. Zero `any`. |
| **ESLint** | `9.x` with `eslint-config-next` `16.3.6` | Flat config. Run `npm run lint`. |

### Invariant Rules
- **No Extra Dependencies:** Do not add npm packages (`clsx`, `tailwind-merge`, `framer-motion`, `lucide-react`, `styled-components`, etc.). Everything must be built with standard Next.js, React 19, Tailwind CSS v4, and native Web APIs.
- **Tailwind v4 Setup:** Tailwind v4 has no `tailwind.config.js`. Design tokens and custom theme values must be declared in `app/globals.css` inside `@theme`. Do not create a `tailwind.config.js` or modify `postcss.config.mjs`.
- **Project Structure:** The project uses `app/` at the project root (not `src/app/`). Component files live in `components/`, content structures in `content/`, and static assets in `public/`.
- **Next.js 16 Conventions:** In Next.js 16, `params` and `searchParams` in pages and layouts are Promises and must be awaited (`await params`).
- **Scripts:** Only use `npm run dev`, `npm run build`, `npm run lint`.

---

## 2. Asset Inventory & Sources of Truth

All source assets live in `Servicechai Website Asset/`:

```
Servicechai Website Asset/
├── Screenshot 2026-09-29 134533.png
├── Servicechai Website Copy.pdf                 # Authoritative written copy document
├── Servicechai Website Revamp.html              # Visual design canvas (1440px desktop, 390px mobile)
├── Servicechai Website Revamp 1.html            # Visual design canvas variant
└── servicechai-website/
    └── servicechai-website/                     # Complete reference website handover
        ├── README.md                            # Code handover guide & testing checklist
        ├── site/                                # 31 canonical production-ready HTML pages
        │   ├── index.html                       # Homepage
        │   ├── solutions/                       # Hub & 5 service detail pages
        │   ├── industries/                      # Hub & 7 industry detail pages
        │   ├── why-bangladesh/                  # Why Bangladesh & cost comparison form
        │   ├── about/, careers/, investors/, insights/
        │   ├── contact/                         # Hub & 3 dedicated contact form pages
        │   ├── privacy-policy/, terms/, 404.html
        │   └── assets/
        │       ├── img/                         # Production logos and marks
        │       ├── css/styles.css               # Complete 593-line CSS design system
        │       └── js/main.js                   # Mega-menus, mobile nav, form logic
        ├── preview/                             # Offline-browsable HTML mirror
        └── source/                              # Python static site generator
            ├── build.py                         # Master builder & navigation definitions
            ├── components.py                    # Reusable HTML/SVG components & form blocks
            ├── pages.py                         # Sitemapped registry of all 31 pages
            ├── pages_home.py                    # Homepage components & content
            ├── pages_offer.py                   # Solutions, industries & Why Bangladesh
            ├── pages_company.py                 # About, Careers, Investors, Insights, Forms
            └── static/                          # Raw CSS, JS, and image assets
```

### Roles of Each Asset
1. **`source/` & `site/` (The Primary Implementation Reference):** Contains the exact HTML structure, component breakdown, copy strings, form field specifications, and SVG icons.
2. **`Servicechai Website Copy.pdf` (Authoritative Copy):** Master reference for all marketing copy, statistics, leadership biographies, and case descriptions.
3. **`styles.css` (Design System):** 593 lines defining color variables, container widths, spacing, typography scales, card variants, and responsive breakpoints.
4. **`Servicechai Website Revamp.html` (Visual Layout Reference):** Visual design board for desktop (1440px) and mobile (390px).

---

## 3. Complete Site Architecture (All 31 Routes)

The site consists of **31 distinct pages** (21 content pages, 7 dedicated form pages, 2 legal pages, and 1 404 page). Every route must be implemented with semantic HTML and appropriate SEO metadata.

| Category | Route | Page Title | Primary CTA |
|---|---|---|---|
| **Home** | `/` | Servicechai \| CX Management, BPM & GCC from Bangladesh | Book a discovery call |
| **Solutions** | `/solutions/` | CX, AI & BPM Solutions \| Servicechai | Talk to our team |
| | `/solutions/omnichannel-cx/` | Omnichannel Customer Experience Management | Request a proposal |
| | `/solutions/agentic-ai/` | Agentic AI Voice & Chat Agents | Book an AI demo |
| | `/solutions/back-office-bpm/` | Back Office & BPM Outsourcing | Request a proposal |
| | `/solutions/global-capability-centres/` | Global Capability Centres in Bangladesh | Explore GCC options |
| | `/solutions/cx-consulting-analytics/` | CX Consulting & Analytics | Request a proposal |
| **Industries** | `/industries/` | Industries We Serve \| Servicechai | Talk to our team |
| | `/industries/telecom/` | Telecom Customer Experience Outsourcing | Request a proposal |
| | `/industries/banking-financial-services/` | Banking & Financial Services CX Outsourcing | Request a proposal |
| | `/industries/insurance/` | Insurance Customer Service Outsourcing | Request a proposal |
| | `/industries/microfinance/` | Microfinance Contact Centre Services | Request a proposal |
| | `/industries/agri-tech/` | Agri-tech Customer Support Services | Request a proposal |
| | `/industries/ed-tech/` | Ed-tech Student Support Outsourcing | Request a proposal |
| | `/industries/e-commerce/` | E-commerce Customer Support Outsourcing | Request a proposal |
| **Why Bangladesh** | `/why-bangladesh/` | Why Bangladesh for Offshore CX | Download cost comparison |
| | `/why-bangladesh/cost-comparison/` | Cost Comparison: Bangladesh vs India & Philippines | Download PDF |
| **Company** | `/about/` | About Servicechai \| CX Management from Bangladesh | Book a site visit |
| | `/careers/` | Careers \| CX Jobs in Dhaka & Chattogram | Apply for a role |
| | `/investors/` | Investors \| Servicechai | Investor enquiry |
| | `/insights/` | Insights: Offshore CX, AI and Bangladesh | Download profile |
| **Contact & Forms** | `/contact/` | Contact Servicechai \| Book a Call or Request a Proposal | Send enquiry |
| | `/contact/book-a-call/` | Book a Discovery Call | Schedule call |
| | `/contact/request-a-proposal/` | Request a Proposal (RFP Upload) | Submit RFP |
| | `/contact/site-visit/` | Book a Site Visit (Dhaka & Chattogram) | Request visit |
| | `/solutions/agentic-ai/demo/` | Book an AI Demo | Request demo |
| | `/careers/apply/` | Apply \| Careers at Servicechai (CV Upload) | Submit application |
| | `/investors/enquiry/` | Investor Enquiry | Submit enquiry |
| **Legal & Utility** | `/privacy-policy/` | Privacy Policy \| Servicechai | — |
| | `/terms/` | Terms of Use \| Servicechai | — |
| | `not-found.tsx` | Page not found \| Servicechai | Return home |

---

## 4. Design Tokens & Styling Guide

Brand styles originate from the logo and `styles.css`. Configure them in `app/globals.css` using Tailwind v4 `@theme`.

### Brand Color Tokens

| CSS Variable | Hex | Tailwind Utility Class | Usage |
|---|---|---|---|
| `--color-night` / `--color-ink-900` | `#02262C` | `bg-night`, `text-night` | Hero, dark sections, header background |
| `--color-night-2` / `--color-ink-800` | `#07333A` | `bg-night-2` | Dark cards on dark background, chart cards |
| `--color-night-3` / `--color-ink-700` | `#0B3F46` | `bg-night-3` | Chips & borders on dark background |
| `--color-deepest` | `#011D22` | `bg-deepest` | Footer background |
| `--color-petrol` | `#004250` | `bg-petrol`, `text-petrol` | Brand wordmark color, stats values, dark cards |
| `--color-deep-teal` | `#035956` | `bg-deep-teal` | Hover for teal buttons & links, decorative stripes |
| `--color-teal` | `#00917C` | `bg-teal` | Decorative accents |
| `--color-teal-ink` / `--color-teal-600`| `#007A68` | `text-teal-ink`, `bg-teal-ink`| High-contrast links, teal buttons on light background |
| `--color-mint` / `--color-mint-500` | `#3ECFB0` | `bg-mint`, `text-mint` | Primary brand accent, primary CTA buttons |
| `--color-mint-hover` / `--color-mint-400`| `#63DDC2` | `hover:bg-mint-hover` | Hover state for mint buttons |
| `--color-mint-soft` / `--color-mint-50` | `#E3F4F0` | `bg-mint-soft` | Soft mint card backgrounds, icon tiles |
| `--color-mint-line` | `#BFE3DA` | `border-mint-line` | Borders for soft mint cards |
| `--color-ground` / `--color-page` | `#F4F7F6` | `bg-ground` | Main site background |
| `--color-white` | `#FFFFFF` | `bg-white` | Standard cards, dropdown menus |
| `--color-line` / `--color-border` | `#DDE7E5` | `border-line` | Card borders on light background |
| `--color-line-2` | `#E1E9E8` | `border-line-2` | Dividers & stats separators |
| `--color-ink` / `--color-text` | `#0E2A30` | `text-ink` | Body text on light background |
| `--color-ink-strong` | `#02262C` | `text-ink-strong` | Headings on light background |
| `--color-muted` | `#4A5F63` | `text-muted` | Secondary body text on light background |
| `--color-on-dark` | `#C6DADB` | `text-on-dark` | Body copy on dark backgrounds |
| `--color-on-dark-2` / `--color-muted-on-dark`| `#A9C4C6`| `text-on-dark-2` | Secondary text and links on dark backgrounds |
| `--color-on-dark-3` | `#8FAFB2` | `text-on-dark-3` | Tertiary text on dark backgrounds |
| `--color-bar` | `#6B8A8E` | `bg-bar` | Attrition comparison bar benchmark |
| `--color-bar-2` | `#45666A` | `bg-bar-2` | Attrition comparison bar benchmark (darker) |

### Typography Setup (`app/layout.tsx` & `app/globals.css`)
- **Display / Headings (`h1`–`h4`):** **Poppins** (weights: `500`, `600`, `700`)
- **Body Text:** **DM Sans** (weights: `400`, `500`, `600`)
- Load via `next/font/google` with `display: 'swap'` and CSS variables `--font-display` and `--font-body`.

### Special Visual Patterns
- **Dot Texture (`.dots`):** `radial-gradient(rgba(255,255,255,.09) 1px, transparent 1.2px)` with background size `22px 22px`.
- **Photo Placeholder Stripes (`.stripes` / `.photo-ph`):** `repeating-linear-gradient(135deg, #E3ECEA 0 12px, #EDF3F1 12px 24px)`.
- **Todo Highlight (`.todo`):** `#FFF3C4` background with `#5A4500` text on light; `#5A4A12` background with `#FFF3C4` text on dark.

### Responsive Breakpoints
- **Desktop Large:** `1200px+` (container max-width: `1200px` + `48px` gutter)
- **Desktop / Tablet Landscape:** `1025px – 1180px` (condensed header navigation)
- **Tablet / Mobile Drawer:** `<= 1024px` (hamburger menu toggle, full-screen nav drawer)
- **Mobile Compact:** `<= 640px` (single column grids, full-width CTA buttons, 2-column stats)

---

## 5. Component Specifications

### 5.1 Layout Components
- **`Header.tsx`:** Sticky navigation with scroll shadow. Features:
  - White wordmark logo linking to `/`.
  - Solutions mega-menu (5 solution links + "New to offshore CX?" teaser card).
  - Industries mega-menu (2-column layout with 7 industry links + "Don't see your industry?" link).
  - About mega-menu (5 links: Story, Leadership, Governance, Delivery centres, Sustainability).
  - Direct links: Why Bangladesh, Agentic AI, Careers, Investors.
  - "Book a call" mint CTA button.
  - Mobile hamburger toggle and drawer navigation with keyboard accessibility (Escape to close, aria-expanded).
- **`Footer.tsx`:** 5-column layout on dark (`#011D22`):
  - Brand description & white logo.
  - Solutions column (5 links).
  - Industries column (7 links).
  - Company column (About, Why Bangladesh, Leadership, Insights, Careers, Investors, Contact).
  - Contact column (Registered office in Gulshan, Dhaka Delivery Centre in Tejgaon, Chattogram Delivery Centre in Agrabad, email, phone).
  - Bottom bar: Copyright 2026, Privacy Policy, Terms, LinkedIn, Facebook.
- **`Breadcrumbs.tsx`:** Accessible `<nav aria-label="Breadcrumb">` with `<ol>` and `aria-current="page"`.

### 5.2 Interactive & Content Components
- **`HubGraphic.tsx`:** Omnichannel circular hub diagram in the Home Hero. Displays central logo mark, concentric rings, and 7 channel chips (Voice, Chat, Email, Social, Back office, Messaging, Agentic AI).
- **`AttritionChart.tsx`:** Interactive/accessible bar chart comparing Servicechai (~10%) against Philippines (31%), India (25–30%), and Global Benchmark (30–45%), citing CCAP, Nasscom-Deloitte, and Insignia Resources.
- **`AiTranscript.tsx`:** Sample conversation card demonstrating humanized AI agent handling a duplicate billing intent and warm hand-off to a human specialist.
- **`LeadershipGrid.tsx`:** Executive committee (4 members) and Delivery leadership (4 members) with avatar initials, roles, and experience summaries.
- **`FaqAccordion.tsx`:** Accessible `<details>` / `<summary>` accordions with smooth open/close indicators.
- **`DataComparisonTable.tsx`:** Responsive table with sticky column headers and high-contrast row striping.
- **`DeliveryCentres.tsx`:** Dhaka (Tejgaon) and Chattogram (Agrabad) cards with address and `PhotoPlaceholder`.

### 5.3 Form Architecture & Specifications
There are **8 distinct forms** (7 dedicated form pages + 2 inline forms):
1. `book-a-call` (`/contact/book-a-call/`)
2. `request-a-proposal` (`/contact/request-a-proposal/` — supports RFP file upload)
3. `site-visit` (`/contact/site-visit/`)
4. `ai-demo` (`/solutions/agentic-ai/demo/`)
5. `cost-comparison` (`/why-bangladesh/cost-comparison/` — offers PDF download upon submit)
6. `job-application` (`/careers/apply/` — supports CV file upload)
7. `investor-enquiry` (`/investors/enquiry/`)
8. Inline forms: `general-enquiry` (on `/contact/`) and `company-profile` (on `/insights/`)

#### Form Implementation Rules
- **Component:** Build a reusable `FormBlock.tsx` client component.
- **Honeypot:** Include a hidden honeypot input field (`company_website`) to stop spam bots.
- **Consent:** Mandatory privacy consent checkbox on every form linking to `/privacy-policy/`.
- **Validation:** Accessible inline error messages and required field validation (`data-required-group` for checkbox groups).
- **Demo Mode:** When no endpoint is configured (`process.env.NEXT_PUBLIC_FORM_ENDPOINT` is blank), simulate successful submission in the UI with a console notice.
- **Success Screen:** In-place transition to a polished confirmation state with green checkmark, personalized next steps, and contextual buttons (e.g., booking calendar link or download link).

---

## 6. Placeholder / TODO Management (The 48 Items)

The handover codebase explicitly marks 48 unresolved facts in yellow highlight `[TODO: ...]`. Maintain these using a dedicated `<Todo>` component (`components/ui/Todo.tsx`):

```tsx
export function Todo({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded px-1.5 py-0.5 text-xs font-semibold bg-[#FFF3C4] text-[#5A4500] dark:bg-[#5A4A12] dark:text-[#FFF3C4]">
      [{children}]
    </span>
  );
}
```

Key placeholders to preserve include:
- Pricing models (per FTE, per productive hour, per transaction)
- Dhaka & Chattogram seat counts and backup power details
- Leadership headshot image URLs and board member names
- Exact SBTi target approval status
- Specific client case studies and metrics
- Legal text reviews on Privacy Policy and Terms of Use

---

## 7. Asset Migration

Copy the brand images from the handover directory into `public/assets/img/`:

| Source Path in Asset Folder | Destination in Next.js Project | Usage |
|---|---|---|
| `servicechai-website/servicechai-website/site/assets/img/logo-wordmark-white.png` | `public/assets/img/logo-wordmark-white.png` | Header & Footer brand logo |
| `servicechai-website/servicechai-website/site/assets/img/logo-wordmark.png` | `public/assets/img/logo-wordmark.png` | Dark wordmark on light backgrounds |
| `servicechai-website/servicechai-website/site/assets/img/logo-mark.png` | `public/assets/img/logo-mark.png` | Hub core icon & subtle hero backdrop |
| `servicechai-website/servicechai-website/site/assets/img/icon-512.png` | `public/assets/img/icon-512.png` | Web app icon / manifest |
| `servicechai-website/servicechai-website/site/assets/img/favicon-32.png` | `public/assets/img/favicon-32.png` | Browser favicon |
| `servicechai-website/servicechai-website/site/assets/img/apple-touch-icon.png` | `public/assets/img/apple-touch-icon.png` | Apple touch icon |

For the delivery centre photos, use `PhotoPlaceholder` with the `.stripes` pattern. Do not insert unapproved stock photography.

---

## 8. Suggested Project Structure

```
job-task-service-cai/
├── app/
│   ├── layout.tsx                     # Root layout, Google Fonts (Poppins & DM Sans), Header & Footer
│   ├── globals.css                    # Tailwind v4 @theme, design tokens, .dots, .stripes
│   ├── page.tsx                       # Homepage
│   ├── not-found.tsx                  # 404 Page
│   ├── solutions/
│   │   ├── page.tsx                   # Solutions Hub
│   │   ├── omnichannel-cx/page.tsx
│   │   ├── agentic-ai/
│   │   │   ├── page.tsx
│   │   │   └── demo/page.tsx          # Form: Book AI demo
│   │   ├── back-office-bpm/page.tsx
│   │   ├── global-capability-centres/page.tsx
│   │   └── cx-consulting-analytics/page.tsx
│   ├── industries/
│   │   ├── page.tsx                   # Industries Hub
│   │   ├── telecom/page.tsx
│   │   ├── banking-financial-services/page.tsx
│   │   ├── insurance/page.tsx
│   │   ├── microfinance/page.tsx
│   │   ├── agri-tech/page.tsx
│   │   ├── ed-tech/page.tsx
│   │   └── e-commerce/page.tsx
│   ├── why-bangladesh/
│   │   ├── page.tsx                   # Why Bangladesh main page
│   │   └── cost-comparison/page.tsx   # Form: Download Cost Comparison
│   ├── about/page.tsx                 # About Servicechai & Leadership
│   ├── careers/
│   │   ├── page.tsx                   # Careers hub
│   │   └── apply/page.tsx             # Form: Apply for a role (CV upload)
│   ├── investors/
│   │   ├── page.tsx                   # Investors hub
│   │   └── enquiry/page.tsx           # Form: Investor enquiry
│   ├── insights/page.tsx              # Insights & Company profile download
│   ├── contact/
│   │   ├── page.tsx                   # Contact hub & general enquiry form
│   │   ├── book-a-call/page.tsx       # Form: 30-min discovery call
│   │   ├── request-a-proposal/page.tsx# Form: RFP upload
│   │   └── site-visit/page.tsx        # Form: Site visit request
│   ├── privacy-policy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── layout/                        # Header, Footer, Container, Breadcrumbs
│   ├── sections/                      # Hero, Stats, BangladeshAdvantage, SolutionsSection, etc.
│   ├── ui/                            # Button, Card, SectionHead, Accordion, Table, StepList, Todo
│   ├── forms/                         # FormBlock, FormField, FormSelect, FormChoices, FormFile
│   └── icons/                         # 40+ SVG icons from source/components.py
├── content/                           # Typed data arrays (navigation, stats, solutions, industries, leadership)
└── public/
    └── assets/
        ├── img/                       # Brand logo PNGs
        └── docs/                      # Destination for PDFs (cost comparison, profile)
```

---

## 9. Workflow & Verification Checklist

1. **Asset Copy:** Copy brand images from `Servicechai Website Asset/servicechai-website/servicechai-website/site/assets/img/` to `public/assets/img/`.
2. **Design Tokens & Fonts:** Setup `@theme` in `app/globals.css` and configure Google Fonts in `app/layout.tsx`.
3. **Core Layout:** Build `Header` (with mega-menus and mobile drawer) and `Footer`.
4. **Shared UI & Icons:** Build reusable `Button`, `Card`, `SectionHead`, `Todo`, and the SVG icons.
5. **Homepage:** Build and compose all 8 homepage sections (`Hero`, `Stats`, `WhyBangladesh`, `Solutions`, `AgenticAI`, `Industries`, `Governance`, `FinalCta`).
6. **Hub Pages & Subpages:** Implement `/solutions`, `/industries`, `/why-bangladesh`, `/about`, `/careers`, `/investors`, `/insights`.
7. **Forms:** Implement `FormBlock` and the 7 dedicated form pages + 2 inline forms.
8. **Responsive Quality Gate:** Test every page at **1440px** (desktop) and **390px** (mobile). Verify no horizontal scrollbars and ensure dropdown menus work with both mouse and keyboard.
9. **Build Verification:** Run `npm run lint` and `npm run build`. Fix any TypeScript or ESLint errors. Ensure clean output.
