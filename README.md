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

Fonts: Bricolage Grotesque (headings) and Figtree (body), both from Google Fonts.

## Files

- `index.html` — the homepage
- `assets/style.css` — all styling
- `assets/logo.png` — logo (purple export border removed, transparent background)

## Still to do

- Replace placeholders in `[square brackets]` (event dates/titles, AI Security Afternoon and Research Sprints descriptions, blog posts)
- Fill in real links (Instagram, LinkedIn, "Join us" form, fellowship pages)
- Split into separate pages (About, Get involved, AI Security, Events, Blog)
- Set up branch protection so changes go through pull requests
- Connect the ais-saarland.org domain once DNS access is sorted
