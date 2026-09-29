# AI Safety Saarland — website

Static website for AI Safety Saarland, the student AI safety initiative at Saarland University. Plain HTML + CSS, no build step — it runs directly on GitHub Pages.

## Colour palette

Every colour is a shade of the two greens in the logo (forest `#0d2a1e` and leaf `#5ea248`). They're defined as CSS variables at the top of `assets/style.css`.

| Name | Hex | Used for |
|---|---|---|
| Forest 950 | `#0d2a1e` | Logo dark green — headings, dark sections, footer |
| Forest 900 | `#143a29` | Cards on dark backgrounds |
| Forest 800 | `#1d4d35` | Hover states, chips |
| Leaf 700 | `#3a7a2e` | Buttons and links (white text stays readable) |
| Leaf 500 | `#5ea248` | Logo light green — dots and small accents |
| Leaf 300 | `#9bc58d` | Headings on dark backgrounds |
| Mint 100 | `#e3efdd` | Panels and highlights |
| Mint 50 | `#f4f8f1` | Page background |

Fonts: Bricolage Grotesque (headings) and Figtree (body). They're self-hosted in `assets/fonts/` (SIL Open Font License), so the site makes no requests to Google Fonts — a GDPR issue in Germany.

## Files

- `index.html` — homepage: About → Why AI safety → Mission → Programs → AI Security → Events → Join
- `team.html` — Meet the team
- `privacy-notice.html` — Privacy Notice
- `terms-and-conditions.html` — Terms & Conditions
- `assets/style.css` — all styling
- `assets/main.js` — mobile menu and newsletter form
- `assets/logo.png`, `assets/favicon.png`, `assets/apple-touch-icon.png` — logo and icons

The header and footer are repeated in each page, so a change to them needs to be made in all four files.

## Adding a team member

In `team.html`, replace a placeholder card's `<svg>` with `<img src="assets/team/firstname.jpg" alt="Full name">` (square-ish photos work best), then fill in `[Name]` and `[Role]`. Copy a whole `<div class="member">` block to add more people.

## Still to do

- Imprint page (required in Germany) — the footer link is a placeholder
- Newsletter service — for now the sign-up form opens an email to info@ais-saarland.org
- Update the Privacy Notice's list of processors (Squarespace → GitHub Pages and the new newsletter tool)
- Replace placeholders in `[square brackets]` (events, AI Security Afternoon and Research Sprints, team)
- Fill in links still set to `#` (Blog, fellowship "Find out more", "Learn more", "View all events", "Join the team")
- Connect the ais-saarland.org domain once the registrar hold is cleared
