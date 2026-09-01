# ModGuard — recovered source (v1.28.0)

This repo was reconstructed from the packaged production build of ModGuard
(`/Applications/ModGuard.app`, version 1.28.0), by unpacking `app.asar` from
`Contents/Resources/app.asar` with [`@electron/asar`](https://www.npmjs.com/package/@electron/asar)
and running the bundled JS through Prettier.

## What's here

- **`raw-dist/`** — the exact contents of `app.asar`, unmodified. This is a
  drop-in replacement if you ever need to repack an `.asar` (e.g. for
  patching or re-signing) — `npx @electron/asar pack raw-dist app.asar`.
- **`beautified/`** — the same JS, reformatted with Prettier for readability:
  - `beautified/main/main.cjs` — Electron main process (window/menu/tray
    management, IPC handlers under the `modguard:*` channel namespace, the
    downloads watcher, prelaunch guard, auto-updater wiring).
  - `beautified/main/checker-worker.cjs` — the actual mod-scanning logic,
    run off the main thread.
  - `beautified/main/preload.cjs` — the `contextBridge` surface exposed to
    the renderer as `window.modguard` (~40 IPC methods — this is the
    cleanest map of the app's whole feature surface).
  - `beautified/renderer/` — the React/Vite frontend bundle (`index.js`),
    plus `index.html` and `index.css`.
- **`assets/`** — app icon and tray icons (idle/watching/armed/threat states).
- **`package.json`** — the packaged app's manifest (name, version, author
  notes on the `electron-updater` dependency).

## Important limitations

This is recovered from a **minified production build**, not the original
repository:

- **No original source layout.** The original TypeScript/JSX files, their
  names, and the project's folder structure are gone — everything was
  bundled into a handful of files by Vite/esbuild.
- **No sourcemaps** were shipped, so there's no way to mechanically recover
  original file boundaries or line mappings.
- **Variable/function names are mangled** (`e`, `t`, `n`, single-letter
  locals) by esbuild's minifier. Prettier restores formatting and structure
  but cannot restore identifiers — that context is gone. Reading it is more
  like reading disassembled-but-still-JS code than the original source.
- **Comments are stripped**, except where they happened to survive in
  `package.json` (not part of the bundling step).
- This is functionally complete (every code path that shipped is here) but
  is best treated as a reference for reconstructing/re-authoring the real
  source, not as something to build on directly.

## Provenance

- Source binary: `/Applications/ModGuard.app` (v1.28.0), extracted 2026-09-01.
- Bundle id: `com.modguardian.modguard`.
- Extraction: `npx @electron/asar extract app.asar ./out`
- Formatting: `npx prettier --parser babel <file>`
