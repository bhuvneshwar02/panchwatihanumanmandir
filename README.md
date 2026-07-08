# Shri Hanuman Mandir — Website

A React + Vite website for the temple, built as a static frontend (no backend/server required).

## What's included
- **Hero** — full-bleed temple photo with Hanuman ji murti, tagline, and WhatsApp community + Timings buttons
- **About** — temple introduction
- **Our Story** — history section
- **Gallery** — lightbox photo grid using your real temple photos
- **Festivals & Events** — Hanuman Jayanti, weekly path, Navratri, Ram Navami
- **Darshan & Aarti Timings**
- **Support the Temple** — donation info card
- **Visit Us** — address, phone, embedded Google Map
- **Floating WhatsApp button** (bottom-right, on every page) + buttons in the hero and contact section — all link to your community: https://chat.whatsapp.com/GyQJlLI1XWsGjRJVvLzJmP

## Before you publish — edit `src/data/content.js`
This one file holds all the text content. Please fill in / correct:
- `location`, `address`, `phone`, `email`
- `mapEmbedQuery` — set to your exact village/town so the map pins the right spot
- `timings.daily` and `timings.note` — confirm real Aarti times with your committee
- `donation.bankDetails` — add UPI ID / bank details if you want to publish them, or leave blank to just show the "contact us to donate" note
- `history` and `about` paragraphs — these are written as reasonable placeholders based on your photos; edit freely to match your temple's real story

## Run it locally
Requires [Node.js](https://nodejs.org) (v18+) installed on your computer.

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for deployment
```bash
npm run build
```
This creates a `dist/` folder of static files you can upload to any static host — Netlify, Vercel, GitHub Pages, or your own web hosting (just upload the contents of `dist/`).

## Images
All your photos are in `public/images/`. To add more, drop the file in that folder and reference it in `src/data/content.js` (gallery/events) or directly in a component with `/images/your-file.jpeg`.
