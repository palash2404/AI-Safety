# Design: AI Safety Saarland

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: editorial
- Shape of the first page: Manifesto (homepage); Long Document (program and legal pages); Catalogue (programs, team, updates)
- Theme: Ink, with the logo greens in place of Ink's teal
- Axes: light/grotesk-sans/chromatic-green · posture: restrained

## Tokens
`assets/tokens.css` is the source of truth. The roles:
```css
:root {
  --color-paper: oklch(99.5% 0.003 100);  --color-paper-2: oklch(97% 0.004 100);  --color-paper-3: oklch(94% 0.006 100);
  --color-ink: oklch(16% 0 0);  --color-ink-2: oklch(28% 0 0);  --color-muted: oklch(44% 0 0);  --color-rule: oklch(89% 0.004 100);
  --color-brand: oklch(64.5% 0.15 139);       /* #5ea248, logo leaf: only on the black band */
  --color-brand-deep: oklch(26% 0.045 163);   /* #0d2a1e, logo forest */
  --color-accent: oklch(48% 0.12 142);  --color-accent-ink: oklch(99.5% 0.003 100);  --color-focus: oklch(48% 0.12 142);
  --color-accent-soft: oklch(93% 0.055 138);  /* the green "open" pill, under forest text */
  --font-display: "Epilogue", ui-sans-serif, system-ui, sans-serif;  --font-body: var(--font-display);
  --radius-card: 12px;  --radius-pill: 999px;  --rule-hair: 1px;  --shadow-card: 0 20px 40px oklch(20% 0 0 / 0.16);
}
```
Epilogue is self-hosted in `assets/fonts/` (no Google Fonts requests). The spacing scale, type scale, easings and durations live in `tokens.css`.

## Composition
- Hairline rules in black open every list and table; greys rule between rows.
- One black band per page at most (the About band on the homepage, "What you take away" on program pages).
- Page heads: a breadcrumb, a big black title, the lead, and the action and facts to the right.

## Controls
- Primary: black fill · 10px radius · 48px tall
- Secondary: paper fill with a hairline border · same radius and height
- Pills: green (open now), outlined (later), black (fixed)

## Motion
- Character: still. The header tucks away on scroll down; nothing else moves. Under reduced motion everything ends at once.

## Exports
`assets/tokens.css` in this project.
