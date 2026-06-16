# Contu Construction — Modern Rebuild

Recreate the Contu Construction website (https://www.contubuilder.co.za/) with a modern, polished design. All photography is pulled directly from the original site's CDN (no stock photos, no AI generation).

## Pages (TanStack Start routes)

- `/` — Home (hero, intro, specializations, recent projects gallery, CTA)
- `/about` — About / company story
- `/services` — Services with the 4-step process (Planning → On-Time → Execution → Affordable) and full service descriptions
- `/projects` — Project gallery
- `/contact` — Contact details + quote form (static)

Shared sticky header with logo + nav, footer with phone numbers, social links, and CTA.

## Design direction

Modern construction-firm aesthetic — bold display typography, generous whitespace, dark/neutral palette with a single high-energy accent (warm yellow/amber pulled from the existing logo), large editorial image blocks, subtle motion on scroll. A clear departure from the original Elementor template look while keeping all content and imagery.

- Typography: a strong geometric/condensed display face for headlines + clean grotesque body
- Layout: asymmetric hero with large image, sectioned full-bleed blocks, magazine-style project grid
- Motion: framer-motion fade/slide on section enter, image hover zoom

## Content / images (all sourced from contubuilder.co.za)

Hero & gallery images:
- `/wp-content/uploads/2023/04/WhatsApp-Image-2023-03-31-at-11.27.331.jpeg`
- `/wp-content/uploads/2023/04/WhatsApp-Image-2023-03-31-at-11.20.083.jpeg`
- `/wp-content/uploads/2023/04/WhatsApp-Image-2023-03-31-at-11.20.05.jpeg`
- `/wp-content/uploads/2023/04/WhatsApp-Image-2023-03-31-at-11.37.512-768x576.jpeg`
- `/wp-content/uploads/2023/04/WhatsApp-Image-2023-03-31-at-11.37.511-768x576.jpeg`
- `/wp-content/uploads/2023/04/WhatsApp-Image-2023-03-31-at-11.37.51-768x576.jpeg`
- `/wp-content/uploads/2023/04/WhatsApp-Image-2023-03-31-at-11.22.17.jpeg`
- Plus the three Elementor-thumb hero images referenced on the home page
- Logo + social badges from `/wp-content/uploads/2023/04/`

Strategy: download each from the source URL into `src/assets/` at build time (via a small fetch script run once, or committed directly), then import as ES modules. This guarantees the live site doesn't break if the source CDN changes and avoids hotlinking.

Body copy: lifted verbatim from the original (company description, service descriptions, 4-step process labels). Phone numbers: 067 052 4108 / 072 093 3761. Socials: Instagram `@contulogistics`, Facebook profile link.

Services covered: General Building, Plastering, Plumbing, Electrical, Tiling, Carpentry, Geological Services, Architectural Services, Commercial & Private Buildings.

## Technical

- Routes under `src/routes/` (flat dot convention), each with its own `head()` (unique title, description, og tags)
- Shared `<SiteHeader />` and `<SiteFooter />` in `src/components/`
- Tailwind v4 tokens in `src/styles.css` (`@theme`) — accent color, display font family
- Display font loaded via `<link>` in `__root.tsx` head (e.g. Archivo or Anton + Inter)
- `framer-motion` for entrance animations
- Contact form is presentational only (no backend) — submits to `mailto:` or shows a success state

## Out of scope (this pass)

- No backend / no Lovable Cloud (purely static marketing site)
- No real form submission handler
- No CMS — copy lives in route files
