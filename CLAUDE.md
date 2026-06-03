# CLAUDE.md — Clinic App marketing website

Project baseline for Claude Code. Read this first.

> **What this is:** the **Clinic App** marketing/landing website — the B2B site that sells
> Clinic App's branded loyalty/membership app to cosmetic clinics. Business background:
> `~/Documents/CLINIC APP/clinic app business context.md`. Build/deploy log:
> `~/Documents/CLINIC APP/clinic app website.md`.

---

## Tech stack

- **Single self-contained `index.html`** — a **compiled bundle** exported from Claude
  Design. Fonts, icons, CSS, JS and the logo are all **inlined**; a small client-side
  runtime unpacks and renders it on load. **Zero dependencies, no build step**, works on
  any static host.
- **Hosting:** Vercel (static, project `clinic-app-website`, team `zoe-sety-s-projects`).
- **CI/CD:** GitHub repo `clientapp123/clinic-app-website` → push to `main` auto-deploys to
  production on Vercel.

## Architecture / file map

```
index.html   # THE ENTIRE SITE — a compiled, self-contained bundle (~1.6 MB). Do not hand-edit.
assets/      # brand source asset(s) (logo-mark.svg) — not referenced by the bundle, kept for reference
README.md    # human-facing readme
CLAUDE.md    # this file
handoff.md   # latest session handoff
```

- The site is a marketing page: hero, before/after, feature grid, membership showcase,
  revenue calculator, setup steps, FAQ, CTA, footer. No routing/data/backend.
- Latest design notes: subtle floating aura, FAQ nav, **USD** currency, no fabricated proof.

## Project rules / conventions

1. **Do NOT hand-edit `index.html`.** It is a compiled bundle — edits won't be
   maintainable. Source lives in the Claude Design project (`ui_kits/website/`). To change
   the site, edit the design source and export a fresh bundle, then replace `index.html`.
2. **Deploys are automatic** — replace `index.html`, commit, and `git push` to `main`;
   Vercel ships it. Don't run manual `vercel --prod` unless asked.
3. **Brand name is "Clinic App".** "Lumea" is an old design-system placeholder — never
   surface it.
4. **Brand rules** (for any new design-source work): editorial black & white + faint wide
   grid; brand gradient (pink→magenta→violet→purple) as a sparing accent only; **no serif
   fonts**.
5. **Placeholders to confirm:** logo, `og:image` (1200×630 share image at the placeholder
   path), `canonical`/`og:url` (currently `clinicapp.com` placeholder), and the "Book a
   call" CTAs (visual only — need a real booking/Calendly URL wired in).

## Common commands

```bash
# preview locally
python3 -m http.server 8000        # → http://localhost:8000

# ship a new bundle (auto-deploys via Vercel on push to main)
cp /path/to/new/index.html ./index.html
git add index.html && git commit -m "Publish updated landing page" && git push
```

## Live URLs

- Production: https://demo.clinicapp.com.au  (also `clinic-app-website-gules.vercel.app`)
- Repo: https://github.com/clientapp123/clinic-app-website

## Open / pending

- **Domain swap** (not done): optionally move primary domain `clinicapp.com.au` + `www`
  onto this project; push the separate `clinic-app` Next.js project to `demo.clinicapp.com.au`.
- Wire the **booking URL** into CTAs; add a real **og:image**; finalize logo; set the real
  canonical domain.
