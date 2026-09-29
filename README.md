# AI Safety Saarland — website

Website for AI Safety Saarland, the student AI safety initiative at Saarland University. Built with Jekyll, which GitHub Pages runs automatically on every change — there's nothing to install.

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

## Editing the website (for team members)

Go to **https://ais-saarland.org/admin/** and sign in with your GitHub account. You can:

- add **event recaps** (Updates page) — with a photo, a short summary and optionally a full write-up that gets its own page
- update **upcoming events** (homepage), the **team**, **contributors** and **current projects**
- change the **homepage texts**

When you save, your change becomes a draft. Move it to **In review** when it's ready. It goes live only after Palash approves it — nothing you do in the editor can break the live site.

You need to be added to the repository as a collaborator first — ask Palash.

## For Palash: approving changes

Each draft appears as a pull request under **Pull requests** on GitHub. Open it, check the changes, then click **Merge pull request**. The site updates about a minute later.

## Files

- `_data/` — the editable content: `home.yml`, `events.yml`, `team.yml`, `contributors.yml`, `projects.yml`
- `_recaps/` — one file per event recap
- `index.html`, `team.html`, `updates.html` — page templates that read from `_data/` and `_recaps/`
- `privacy-notice.html`, `terms-and-conditions.html` — legal pages (edit these directly)
- `_layouts/`, `_includes/` — the shared page frame, header and footer
- `admin/` — the editor (Sveltia CMS) and its settings in `admin/config.yml`
- `assets/` — styles, scripts, fonts, logo; photos uploaded in the editor go to `assets/uploads/`

## Still to do

- Imprint page (required in Germany) — the footer link is a placeholder
- Newsletter service — for now the sign-up form opens an email to info@ais-saarland.org
- Update the Privacy Notice's list of processors (Squarespace → GitHub Pages and the new newsletter tool)
- Add content through the editor: team, events, recaps, contributors, projects, AI Security Afternoon and Research Sprints descriptions, program links
