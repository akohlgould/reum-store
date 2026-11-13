# Reum.store — Curved 3D VHS Archive & Whimsical Storefront

> Designed for [reum.store](https://reum.store).

## Features

- **Kinetic 3D Curved VHS Arc**: 36 tapes standing on a non-linear receding curved shelf using pure CSS 3D transforms (`preserve-3d`) and analytical integral depth scaling.
- **Active 90° Cover Facing**: The focused tape smoothly pivots in 3D to face the camera, with real-time cursor-tracking perspective tilt.
- **SVG Ink Bleed Morph**: Clicking the active film expands a full-screen detail sheet using `clip-path` morphing directly from the tape's projected bounding rectangle, with 7 displaced SVG ink bleed circle masks.
- **Timeline & Scrubbing**: Interactive 1955–1990 year ruler with inertia-driven dot tracking and drag / wheel scrubbing.
- **Pure Zero-Dependency Architecture**: Built in vanilla HTML, CSS, and JavaScript. 100% free to host forever on Cloudflare Pages.

## Local Development

```bash
# Serve locally
npx serve .
# or
python3 -m http.server 8080
```

## Cloudflare Pages Deployment

Deploy directly via Cloudflare CLI (`cf`):

```bash
cf deploy
```

