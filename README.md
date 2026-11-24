# 跳墙闯关 Wall Hop Obby

A wall-hop learning game for Year 1 (一年级): 数学, 华文, 科学.
Plays in the browser, installs to the home screen, works offline after the first visit.

## Files
- `index.html` — the whole game (3D engine and 1,045 questions built in)
- `manifest.webmanifest` — app name, icon, landscape, full screen
- `sw.js` — offline cache. Change `VERSION` (e.g. wallhop-v13) every time you upload a new `index.html`
- `icons/` — app icons
- `.nojekyll` — tells GitHub Pages to serve files as they are

## Publish on GitHub Pages
1. Create a repository, e.g. `wallhop`.
2. Upload all files in this folder to the repository root (keep the `icons` folder).
3. Settings → Pages → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save.
4. After about a minute the game is at `https://<your-username>.github.io/wallhop/`.
