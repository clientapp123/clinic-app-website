# Clinic App — marketing website

The **Clinic App** marketing site — the B2B page that promotes Clinic App's branded
loyalty/membership app to cosmetic clinics.

This repo holds a **single self-contained `index.html`**: a compiled bundle exported from
Claude Design with fonts, icons, CSS, JS and the logo all inlined. It has **no
dependencies and no build step** and runs on any static host.

## Run it

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deployment

Hosted on Vercel and connected to this GitHub repo — **every push to `main` deploys
automatically to production** (no build step; served as static files).

Production: **https://demo.clinicapp.com.au**

## Updating the site

`index.html` is **compiled — don't hand-edit it.** Make changes in the Claude Design
source (`ui_kits/website/`), export a fresh single-file bundle, then:

```bash
cp /path/to/new/index.html ./index.html
git add index.html && git commit -m "Publish updated landing page" && git push
```

## Notes / to-do

- "Book a call" CTAs are visual only — wire in a real booking/Calendly URL.
- `og:image` and `canonical`/`og:url` use placeholders (`clinicapp.com`) — set real values.
- Logo mark is a placeholder.
