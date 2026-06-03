# Clinic App — marketing website

Static implementation of the **Clinic App** marketing site (the B2B page that promotes
the branded loyalty/membership app to cosmetic clinics). Recreated from the Lumea
design-system handoff bundle (`ui_kits/website/index.html`), which was a React-via-CDN
prototype. This build is plain HTML/CSS/JS — no build step, no runtime transpilation.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
cd clinic-app-website
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Files

| File | Purpose |
|---|---|
| `index.html` | Full scrolling marketing page, all sections in source order. |
| `styles.css` | Layout + component styles (translated from the prototype's inline styles). |
| `colors_and_type.css` | Design tokens (colors, type scale, spacing, radii, shadows) — copied verbatim from the design system. |
| `app.js` | Nav scroll-blur, interactive revenue calculator, FAQ accordion. |
| `assets/logo-mark.svg` | Brand spark mark (gradient). |

## Page sections (top → bottom)

Nav → Hero (full-viewport, faint grid, gradient membership-card phone mock + callouts,
trust row) → trusted-by strip → Before/After → outcome feature grid → membership showcase
→ revenue calculator → dark 3-step setup → gradient connector → stat band → case study →
FAQ → gradient CTA band → footer.

## Design conventions kept

- **Editorial black & white** with a faint wide background grid; brand gradient used only
  as a small accent (one CTA, the logo, the phone card, the calculator result, the final CTA).
- **Fonts:** Schibsted Grotesk (display), Hanken Grotesk (body), Space Mono (labels/data),
  via Google Fonts.
- **Icons:** Lucide via CDN, 1.6px stroke (matching the design). Footer socials are mono
  text links — Lucide's CDN build omits brand glyphs.

## Notes / substitutions

- The logo mark is the placeholder **spark** glyph from the design system. Drop in a real
  logo at `assets/logo-mark.svg` to replace it everywhere.
- Copy, stats (34% repeat lift, 184 members, 4.9 rating, "600+ clinics") and customer names
  (Aurora Skin, etc.) are illustrative placeholders carried over from the design — swap for
  real data before going live.
- This is the **no-images** version the user landed on (the bundle's
  `index-with-images.html` variant with app screenshots and photo bands was not used).
