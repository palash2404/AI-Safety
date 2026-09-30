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

You don't need to know any code. Every change is saved as a draft and only goes live after Palash approves it, so nothing you do in the editor can break the live site.

**Before you start:** you need a free GitHub account, and Palash needs to add you to this repository as a collaborator. Accept the email invitation from GitHub.

### Open the editor

1. Go to **https://ais-saarland.org/admin/** (keep the slash at the end). Bookmark it — there's no link to it on the site.
2. Click **Sign In with GitHub**.
3. The first time, a small window asks you to authorise **AI Safety Saarland editor**. Click **Authorize**.
4. You're in. You'll be asked to sign in again after about 8 hours.

### What you can edit

- **Event recaps** (Updates page): click **New** to add one — title, date, type, photo, a short summary, and optionally a full write-up. If you fill in the full write-up, the event gets its own page with a "Read the recap" link.
- **Site content**:
  - **Upcoming events** — shown on the homepage. Remove events once they've happened and add an event recap instead.
  - **Team** — name, role, photo and an optional LinkedIn link.
  - **Contributors** — people we thank on the Updates page.
  - **Current projects** — what members are working on.
  - **Homepage texts** — About, Why AI safety, Mission, Programs, AI Security and the Join section.
- **AI Security page** — the sub-initiative page: threats, who it's for, and initiatives (reading group, AI Security Afternoon, research sprints) with logistics and application links.
- **Programs** — the Introductory and Advanced Fellowship pages: key dates, prerequisites, schedule, FAQs and the application link. When applications open, paste the form link into **Application link** and an "Apply now" button appears.

Photos: only upload photos of people who agreed to appear online (our Privacy Notice promises this). Landscape photos work best for recaps, square ones for team members.

### Save and send for review

1. Make your changes and click **Save**. This creates a **draft** — nothing is live yet.
2. When it's ready, set the status to **In review**.
3. Palash checks it and publishes it. The site updates about a minute after that.

## For Palash: approving and managing editors

### Approve a change

1. Open the repo on GitHub → **Pull requests** tab. Each draft from the editor shows up here.
2. Open it and check **Files changed**.
3. Click **Merge pull request** → **Confirm merge**. The site rebuilds and goes live in about a minute (watch the **Actions** tab — a green tick means it worked).

To reject a change, click **Close pull request** instead.

### Add or remove editors

- Repo → **Settings → Collaborators → Add people** → enter their GitHub username. They get an email invitation.
- To remove someone, use the same page.
- Recommended safety net: **Settings → Branches → Add rule** for `main`, tick **Require a pull request before merging** and **Require review from Code Owners** (you are the code owner in `.github/CODEOWNERS`). Leave admin bypass allowed so you can still push directly.

### How the sign-in works (one-time setup, already done)

The editor ([Sveltia CMS](https://sveltiacms.app)) signs people in through a small login helper running on Cloudflare:

- **Cloudflare Worker:** `sveltia-cms-auth` at `https://sveltia-cms-auth.pana00002.workers.dev` (code in the `palash2404/sveltia-cms-auth` repo, deployed from [sveltia/sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth)). **Domains → workers.dev** must stay enabled.
- **GitHub OAuth App:** "AI Safety Saarland editor" under GitHub → Settings → Developer settings → OAuth Apps.
  - Homepage URL: `https://ais-saarland.org`
  - Authorization callback URL: `https://sveltia-cms-auth.pana00002.workers.dev/callback`
- **Worker variables** (Cloudflare → sveltia-cms-auth → Settings → Variables and Secrets, all of type **Secret**):
  - `GITHUB_CLIENT_ID` — the OAuth App's Client ID
  - `GITHUB_CLIENT_SECRET` — the OAuth App's client secret (never share it or put it in this repo)
  - `ALLOWED_DOMAINS` — `ais-saarland.org`
- The editor's settings are in `admin/config.yml` (`base_url` points at the Worker).

### If sign-in doesn't work

- The sign-in window shows an error or closes without logging in: check that workers.dev is enabled on the Worker, that all three variables are saved (click **Deploy** after adding them), and that the callback URL on GitHub is exactly the one above.
- "Not found" or no access after signing in: the person isn't a collaborator on this repo yet, or hasn't accepted the invitation.
- To rotate the client secret: generate a new one on the OAuth App page, update `GITHUB_CLIENT_SECRET` in Cloudflare, then delete the old secret on GitHub.

## Files

- `_data/` — the editable content: `home.yml`, `events.yml`, `team.yml`, `contributors.yml`, `projects.yml`, and `ai_security.yml`, and `programs/introductory.yml` + `programs/advanced.yml`
- `_recaps/` — one file per event recap
- `index.html`, `team.html`, `updates.html`, `programs.html` — page templates that read from `_data/` and `_recaps/`
- `ai-security.html` — the AI Security page
- `introductory-fellowship.html`, `advanced-fellowship.html` — the fellowship pages (layout in `_layouts/program.html`)
- `ai-security-1.html`, `get-involved-1.html` — redirects so old Squarespace links still work
- `privacy-notice.html`, `terms-and-conditions.html` — legal pages (edit these directly)
- `_layouts/`, `_includes/` — the shared page frame, header and footer
- `admin/` — the editor (Sveltia CMS) and its settings in `admin/config.yml`
- `assets/` — styles, scripts, fonts, logo; photos uploaded in the editor go to `assets/uploads/`

## Still to do

- Imprint page (required in Germany) — the footer link is a placeholder
- Newsletter service — for now the sign-up form opens an email to info@ais-saarland.org
- Update the Privacy Notice's list of processors (Squarespace → GitHub Pages and the new newsletter tool)
- Add content through the editor: team, events, recaps, contributors, projects, AI Security Afternoon and Research Sprints descriptions, program links
