# Session Handoff — Clinic App website

_Last updated: 4 June 2026_

## Current status: 🟡 IN REVIEW (not yet live)
All work this session is on branch **`feature/interactive-hero`** → **PR #1 (OPEN)**.
**Nothing has been merged to `main`, so production (demo.clinicapp.com.au) is unchanged.**
- **PR #1:** https://github.com/clientapp123/clinic-app-website/pull/1
- **Live preview (Vercel, safe, isolated):**
  https://clinic-app-website-git-feature-inter-08208a-zoe-sety-s-projects.vercel.app
- Branch is **47 commits ahead of `main`**. Latest: `ec576f4`.

⚠️ **Deploy gate (standing rule):** never push/merge to `main` without Zoe's explicit
approval. Merging PR #1 to `main` is what triggers the Vercel production deploy.

## IMPORTANT correction to old docs
`index.html` is now a **hand-authored single file** (vanilla HTML/CSS/JS, no build step).
The old "compiled Lumea bundle — do NOT hand-edit" rule in `CLAUDE.md` is **obsolete** — we
replaced that bundle earlier and now edit `index.html` directly. (CLAUDE.md still needs
updating to reflect this.)

## What we did this session
1. **Rebuilt the hero** as a two-column showcase: left = eyebrow + headline ("Your patients
   already trust you. / Bring them back every month.") + lead + gradient "Book a demo" CTA +
   "See the revenue math ↓" + 4 feature pills; right = tilted realistic iPhone running the
   app demo (auto-cycling Home/Shop/Rewards/Book screens) surrounded by **3 floating cards**
   (Memberships, Rebooking, Revenue +28%) + halo glow. Phone home screen matches the mockup
   (gold points, recommended treatments, Glow Membership card, rebook bar).
2. **Fixed hero issues:** floating cards overlapping the phone (shrunk phone to 55% of
   column, pushed cards to edges, `overflow-x: clip`); simplified from 5 cards → 3.
3. **Full psychology pass (GrowthDesign "106 Cognitive Biases" cheat sheet, #1–106):**
   applied #1–20 as distinct changes (Hick's Law nav trim, Confirmation-Bias problem band,
   Priming, Cognitive-Load before/after → side-by-side, Anchoring annual-first, Nudge
   calculator CTA, Progressive-Disclosure moved integrations later, Fitts mobile CTAs,
   Attentional-Bias eyebrows, Empathy Gap, Visual Anchors, Von Restorff featured membership,
   Visual Hierarchy, Selective Attention, Survivorship FAQ, Banner Blindness, Juxtaposition,
   Signifiers sliders, Contrast, Decoy-ethical). #21–106: implemented the high-value ones
   (Spark/Reciprocity/Feedforward/Fresh-Start/Peak-End on final CTA; Authority/Noble-Edge
   "Built in Australia"); the rest are already embodied, N/A to a landing page, or
   **ethically declined** (no fake social proof / scarcity / bandwagon).
4. **Visual polish pass:** staggered scroll-reveals, fading gradient section dividers,
   tactile button hover/active depth, hover life on feature media + membership rows.
5. **Bug fix (`ec576f4`):** founders section was overlapping the "How it works" timeline —
   founder cards shared `.fcard` with the hero floating cards and inherited
   `position:absolute`. Renamed founder cards to **`.founder-card`** (HTML + CSS + reveal JS).
6. **Full collision scan:** clean — no other class collisions, duplicate IDs, broken JS refs
   (the `baToggle` ref is intentionally guarded), or absolute-positioning collapse risks.

## Key facts / infra
- **Repo:** github.com/clientapp123/clinic-app-website (account `clientapp123` =
  dynamicdrivendiva@gmail.com, public).
- **Git auth on this machine:** now authenticated as **`clientapp123`** via `gh auth login`
  + `gh auth setup-git` (global credential helper). Pushes work from `~/clinic-app-website`.
- **Vercel:** project `clinic-app-website`, team `zoe-sety-s-projects`. Push to `main` →
  prod auto-deploy to demo.clinicapp.com.au. PR branches get isolated preview deploys.
- **Brand:** fonts Schibsted Grotesk (display) / Hanken Grotesk (body) / Space Mono (labels);
  pink→purple gradient as sparing accent; **no serif** (per CLAUDE.md — kept the headline
  sans even though a mockup showed serif). AUD currency. Compliance: no before/after imagery,
  never a prescription treatment (Botox/filler) named with a price; "scan a barcode / keep
  your booking system" framing; stats labelled illustrative; no fabricated proof.

## Next steps (pending)
1. **Zoe reviews PR #1 on the preview → approve/merge** (that deploys to production). Do NOT
   merge without her go-ahead.
2. **Real content (needs assets):** founder names + headshots (currently "[Founder name]" +
   gradient placeholders), real feature/clinic photos (gradient placeholders captioned
   "replace with photo"), real `og:image` (1200×630), real **booking/Calendly URL** wired
   into all "Book a demo" CTAs (currently `#book`).
3. **Ethically-deferred persuasion:** add real social proof (testimonials/clients/logos) once
   it genuinely exists — left honest hooks in place.
4. **Housekeeping:** update `CLAUDE.md` (remove the obsolete "compiled bundle / don't
   hand-edit" rule); optional domain swap (`clinicapp.com.au` + `www`); revoke any old
   shared Vercel/GitHub tokens; decide repo public → private.

## How to resume this chat in a new terminal
1. Open a terminal and go to the project:  `cd ~/clinic-app-website`
2. Reopen this exact conversation:  **`claude --continue`**  (continues the most recent
   session for this directory), OR run **`claude`** then **`/resume`** and pick this
   conversation ("clinic app website" hero/psychology work) from the list.
3. Being in `~/clinic-app-website` auto-loads `CLAUDE.md` + this `handoff.md` for context.
