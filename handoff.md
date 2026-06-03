# Session Handoff — Clinic App website

_Session: 3 June 2026_

## What we built
- Recreated the **Clinic App marketing website** from the Claude Design "Lumea" handoff
  bundle as a **static HTML/CSS/JS site** (no framework/build): `~/clinic-app-website/`
  (`index.html`, `styles.css`, `colors_and_type.css`, `app.js`, `assets/logo-mark.svg`).
- **Deployed to Vercel** (account dynamicdrivendiva@gmail.com, team `zoe-sety-s-projects`,
  project `clinic-app-website`). Live at **https://demo.clinicapp.com.au**.
- Added the **custom subdomain** `demo.clinicapp.com.au` (auto-provisioned — domain is on
  Vercel nameservers; SSL issued; verified HTTP 200).
- Pushed to **GitHub** `clientapp123/clinic-app-website` and **connected it to Vercel** so
  **pushes to `main` auto-deploy to production** (verified working end-to-end).
- Wrote docs in `~/Documents/CLINIC APP/`: `clinic app website.md` (build/deploy log) and
  `clinic app business context.md`. Added `CLAUDE.md` + this `handoff.md` to the repo root.

## Decisions made
- Built the **no-images** version of the design (not the screenshots/photo-bands variant).
- Static site, **dependency-free**, served as-is — no build step on Vercel.
- Kept brand rules: editorial B&W + faint grid, gradient as a sparing accent, no serifs.
- **Did NOT do the domain swap** — interrupted before executing; still an open decision.
- Used the GitHub PAT via env var only (never persisted); remote is a clean tokenless URL.

## Next 3 steps
1. **Decide the domain swap** — if the marketing site should own the primary domain, move
   `clinicapp.com.au` + `www` onto `clinic-app-website` and push the separate `clinic-app`
   Next.js project to `demo.clinicapp.com.au`. (Open Q: include `www`? Recommended: yes.)
2. **Replace placeholders** — real logo, real stats/testimonials/customer names, and
   reconcile **currency** (£ → A$/AUD for the AU market) in the calculator and copy.
3. **Security & repo hygiene** — revoke the shared Vercel (`vcp_…`) and GitHub (`ghp_…`)
   tokens; decide whether to flip the repo from **public → private**.
