# Session Handoff — Clinic App website

_Last updated: 5 June 2026_

## Current status: 🟠 LOCAL EDITS, UNCOMMITTED
This session's changes are **edited directly into `index.html` in the working tree** —
**not committed, not on a feature branch, not pushed.** Production
(demo.clinicapp.com.au) is unchanged.

⚠️ **Deploy gate (standing rule):** never push/merge to `main` without Zoe's explicit
approval. A feature branch + PR is required before anything goes live.

➡️ **Decision still open:** whether to branch + commit + open a PR for this session's work.
Zoe had not given the go-ahead yet when the session ended.

## What we did this session
1. **Fixed the "Keep the tools you already use." integrations section** (`.integ`). It had a
   CSS **grid blowout**: the marquee track (`.mtrack { width: max-content }`, ~1600px) was
   forcing the right grid column past the 1180px container, which squeezed the left column so
   the heading wrapped one word per line and pushed the pills off-screen.
   **Fix:** added `min-width: 0` to `.integ-grid > *`, `.marquee`, and `.mq-window` so the
   track stays contained in its window. (The duplicate "Google Reviews / Apple Pay" pills are
   intentional — two identical sets make the scroll loop seamlessly.)
2. **Added CSS-only animated app mockups** into the three feature media blocks under
   `#features` ("A growth system, not just a pretty app."), each themed to its feature:
   - **01 — Memberships** → floating "GLOW MEMBER" gradient card (shimmer sweep + pulsing
     active dot) + `$80 monthly credit · auto-billed` pill. Classes: `.fx-mem .memcard …`
   - **02 — Push offers** → two app notifications that slide in and cycle ("20% off facials —
     today only", "Members get first access"). Classes: `.fx-push .pushcard .pc1/.pc2 …`
   - **03 — Rewards & referrals** → points ring filling to 250 (uses `@property --rp` +
     conic-gradient) with "+10 / +25 / ★" floaters + "♡ Refer a friend · +50" pill.
     Classes: `.fx-rew .ring / .pop …`
   - Shared: `.appfx` overlay container, `.fx-stack`, `.fx-pill`, `@keyframes fxFloat`.
   - `@media (prefers-reduced-motion: reduce)` disables the animations and sets a static ring.
3. **Removed the gradient photo backdrops behind those animations** so they float on the clean
   page grid (per Zoe's request — she didn't want the peach→violet panel). Done via:
   - `.fmedia:has(.appfx), .fmedia:has(.appfx):hover { background: transparent; box-shadow:
     none; overflow: visible; }`
   - `.fmedia:has(.appfx) .photo { display: none; }`
   - `.fmedia:has(.appfx) .pA/.pB/.pC { background: none; }` (belt-and-suspenders, in case
     `:has()` is unsupported)
   - Deleted the three `<span class="cap">… replace with photo</span>` captions on these blocks.

## Gotcha discovered: stale preview cache
`python3 -m http.server` sends **no cache headers**, so a normal browser refresh kept showing
the OLD page and it looked like edits weren't applying. Use a **no-cache server** instead:

```bash
cd ~/clinic-app-website
python3 -c "
import http.server, socketserver
class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control','no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma','no-cache'); self.send_header('Expires','0')
        super().end_headers()
socketserver.TCPServer(('127.0.0.1',8001), H).serve_forever()
"
# → http://127.0.0.1:8001/   (changing the port also dodges the browser cache)
```
The session ended with this server running on **port 8001** (the old `:8000` server was
stopped). If neither responds, just restart with the command above.

## Standing facts / infra (unchanged)
- `index.html` is a **hand-authored single file** (vanilla HTML/CSS/JS, no build step). The
  old CLAUDE.md "compiled Lumea bundle — do NOT hand-edit" rule is **obsolete**. CLAUDE.md
  still needs updating to reflect this. **Caveat:** if the site is ever re-exported from the
  Claude Design source (`ui_kits/website/`), these hand edits must be mirrored there or
  they'll be lost.
- **Repo:** github.com/clientapp123/clinic-app-website (account `clientapp123`, public).
  Git auth on this machine is `clientapp123` via `gh`. Pushes work from `~/clinic-app-website`.
- **Vercel:** project `clinic-app-website`, team `zoe-sety-s-projects`. Push to `main` → prod
  auto-deploy to demo.clinicapp.com.au; PR branches get isolated preview deploys.
- **Brand:** Schibsted Grotesk (display) / Hanken Grotesk (body) / Space Mono (labels);
  pink→purple gradient as a sparing accent; **no serif**. No fabricated proof / scarcity.

## Next steps (pending)
1. **Decide: branch + commit + PR** for this session's marquee fix + feature animations
   (per the deploy gate). Nothing is committed yet.
2. **Mirror these edits into the Claude Design source** so they survive a re-export.
3. Zoe still needs to say **what to save into `CLAUDE.md`** (we offered: the no-cache preview
   command, the "index.html is editable" correction, and/or the feature-row animations) — she
   asked to clarify and then asked to save the chat instead. Revisit.
4. Older outstanding items: real founder names/headshots, real photos, `og:image`, real
   booking/Calendly URL wired into CTAs; remove obsolete CLAUDE.md bundle rule.

## How to resume this chat in a new terminal
1. `cd ~/clinic-app-website`
2. **`claude --continue`** (continues the most recent session for this directory), OR run
   **`claude`** then **`/resume`** and pick this conversation from the list.
3. Being in `~/clinic-app-website` auto-loads `CLAUDE.md` + this `handoff.md` for context.
