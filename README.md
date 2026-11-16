# André Díaz · Portfolio

Professional portfolio built with **Next.js App Router, TypeScript, and plain CSS**, published as a static export on [GitHub Pages](https://wollenmoth.github.io).

The existing design and published content are preserved, including Golden Circle’s production case study and the backend-focused About section. The forest-and-lime **AD monogram** adds matching SVG, multi-size ICO, and Apple touch icons.

## Run locally

Use Node.js 22 (see `.nvmrc`) and npm:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. Dependencies use exact versions and the committed `package-lock.json`; use `npm ci` for reproducible installs.

## Verify and build

```sh
npm run check
```

This runs TypeScript, formatting checks, the production build, and exported-page smoke tests (content, metadata, anchors, asset paths, icons, and 404). Next.js writes the deployable site to `out/`. There is no production Node.js server, database, environment variable, external font, or secret to configure.

To preview the actual export, serve `out/` with any static HTTP server, for example:

```sh
python3 -m http.server 3000 --directory out
```

`next start` is not used with static export. The build selects webpack explicitly for predictable behavior in restricted development environments.

## Structure

- `app/page.tsx`: accessible portfolio content as a React server component
- `app/layout.tsx`: page metadata, document language, icon declarations
- `app/globals.css`: responsive layout, colors, focus states, reduced motion
- `public/`: custom icons and `.nojekyll`
- `scripts/check-export.mjs`: dependency-free export checks
- `.github/workflows/pages.yml`: checked build and Pages deployment

Edit the TSX and CSS files, not generated `out/` files. Run `npx prettier --write app` after content changes, then `npm run check`.

## GitHub Pages

In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. The workflow builds on pushes to `main` and can be rerun with **Run workflow**. Pull requests run checks without deploying. Only successful builds can deploy.

This is a user-site repository hosted at the domain root, so no `basePath` or `assetPrefix` is needed. The workflow uploads only `out/`; repository files, source code, and dependencies are not included in the deployed artifact.
