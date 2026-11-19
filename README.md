# Dogbajale Muhydeen — Portfolio

A personal portfolio built with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**.
Retro-tech "scrapbook" aesthetic with a sky backdrop, a CRT hero, an interactive terminal, and a
printer-themed résumé page. Deploys to Vercel in a couple of clicks.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The résumé page is at http://localhost:3000/resume.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → **Add New Project** → import that repo.
3. Framework preset auto-detects **Next.js**. Leave the defaults and click **Deploy**.

(Or run `npx vercel` from this folder if you have the Vercel CLI.)

## Where to edit your content

**Everything lives in one file: `lib/data.js`.** Edit text there — name, bio, projects, skills,
experience, résumé — and the whole site updates. No need to touch the components.

## Swapping assets (in the `public/` folder)

| What | File to replace |
|------|-----------------|
| Profile photo (hero CRT) | `public/profile.jpg` |
| Downloadable CV (PDF button) | `public/Dogbajale-Muhydeen-CV.pdf` |
| Floating retro gadgets | drop PNGs into `public/gadgets/` (see below) |

### Floating gadgets
The two floating devices in the hero currently use emoji placeholders inside neon "scanner" frames.
To use real retro-device photos (transparent-background PNGs look best):

1. Put your PNGs in `public/gadgets/` (e.g. `laptop.png`, `meter.png`).
2. In `components/Hero.js`, find the two `<Gadget ... />` lines and add an `img` prop, e.g.
   `img="/gadgets/laptop.png"`. The emoji is used only when `img` is not set.

## Fonts
Fonts load from Google Fonts via a `<link>` in `app/layout.js` (Playfair Display, Inter,
JetBrains Mono). They render live on any deployed site — no build-time font download needed.

## Structure

```
app/
  layout.js        # fonts + metadata
  page.js          # homepage (composes the sections)
  resume/page.js   # /resume page
  globals.css      # theme + custom styles
components/
  Nav.js  Hero.js  Projects.js  Process.js  Terminal.js  Footer.js  ResumeView.js
lib/
  data.js          # ← all your content
public/             # photo, CV, gadget images
```
