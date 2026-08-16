# Aloha Tea Coffee — website

Launch website for Aloha Tea Coffee, a boba tea and Vietnamese coffee shop with two locations in Arizona.

Built with React 19, Vite, [shadcn/ui](https://ui.shadcn.com), and React Router 7 in framework mode. The build step pre-renders each page to plain HTML, CSS, and JS. The pages are complete before JavaScript loads.

## Development

1. Install [pnpm](https://pnpm.io) and Node 22 or later.
2. Install the dependencies: `pnpm install`
3. Start the dev server: `pnpm dev`

## Build

Run `pnpm build`. The static site is written to `build/client/`:

- `index.html` — the home page, pre-rendered
- `terms/index.html` — the terms page, pre-rendered
- `__spa-fallback.html` — shell for unknown paths; it renders the 404 page in the browser

Run `pnpm preview` to serve the built site on port 4173.

## Deploy

Deploy `build/client/` as the static root of any web host. Map the host's 404 handling to `__spa-fallback.html` so unknown paths show the site's 404 page.

## Project structure

- `src/components/sections/` — one file per page section (navbar, hero, about, gift-loyalty, locations, footer). Add, remove, or replace sections here.
- `src/pages/` — route components (home, terms, not-found)
- `src/routes.ts` — the route table; `src/root.tsx` — the HTML shell and meta tags
- `src/lib/site.ts` — brand data, order URL, and locations
- `src/index.css` — the single source of truth for styling: palette tokens, site tokens, and all section classes
- `src/components/ui/` — components from the shadcn registry; add more with `pnpm dlx shadcn@latest add <name>`

Body text is lorem ipsum placeholder copy. The Scottsdale address is a placeholder. The photos in `public/images/` are placeholders.

## CI

Every push to `main` and every pull request runs `.github/workflows/ci.yml`. The workflow lints the code, builds the static site, and uploads `build/client/` as the `static-site` artifact.

To run CI by hand, open Actions → CI → "Run workflow", or run `gh workflow run CI`.

## Releases

Push a tag that starts with `v` to publish a release:

```sh
git tag v0.1.0
git push origin v0.1.0
```

The release workflow builds the site, zips it, and attaches the zip to a GitHub release. Download the zip, unzip it, and serve the folder with any static server, for example `python3 -m http.server 8000`. You can also start the workflow from the Actions tab with a tag name.
