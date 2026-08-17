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
- `src/pages/` — route components (home, menu, catering, terms, not-found)
- `src/routes.ts` — the route table; `src/root.tsx` — the HTML shell and meta tags
- `src/lib/site.ts` — brand data, order URL, and locations
- `src/index.css` — the single source of truth for styling: palette tokens, site tokens, and all section classes
- `src/components/ui/` — components from the shadcn registry; add more with `pnpm dlx shadcn@latest add <name>`

The Scottsdale address, the gift card URL, the Facebook URL, and the catering email are placeholders. The photos in `public/images/` are placeholders.

## CI

Every push to `main` and every pull request runs `.github/workflows/ci.yml`. The workflow lints the code, builds the static site, and uploads `build/client/` as the `static-site` artifact.

To run CI by hand, open Actions → CI → "Run workflow", or run `gh workflow run CI`.

## Releases

Every push to `main` rebuilds the rolling `latest` release. Its zip always matches the current state of `main`.

To publish a versioned release, push a tag that starts with `v`:

```sh
git tag v0.1.0
git push origin v0.1.0
```

The release workflow builds the site, zips it, and attaches the zip to a GitHub release. You can also start the workflow from the Actions tab with a tag name.

## Deploy a release zip

The zip on the Releases page is the built site: plain HTML, CSS, JS, and images. It needs no build step and no Node.

Serve the files over HTTP. Do not open `index.html` from the file system — asset paths and ES modules do not work on `file://` URLs.

To run it on your own machine:

```sh
unzip aloha-website-latest.zip -d aloha-site
cd aloha-site
python3 -m http.server 8000 
```

Then open http://localhost:8000. `npx serve` works too.

To deploy it, upload the folder contents (with `index.html` at the web root) to any static host:

- **Cloudflare Workers** — run `npx wrangler deploy` with a `wrangler.jsonc` that points `assets.directory` at the folder. This repo's config file is a working example.
- **Netlify** — drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop).
- **Vercel** — run `npx vercel --prod` inside the folder.
- **nginx, Apache, S3, or cPanel** — copy the folder contents into the server root (for example `public_html`).

Two host settings matter:

1. Map the host's 404 page to `404.html` so unknown URLs show the site's own 404 page.
2. Serve the site from the domain root (`example.com`), not a subfolder. Asset URLs start with `/`, so a subfolder breaks them.

## Run with Docker

Every push to `main` publishes an image to the GitHub Container Registry. It contains the built site behind nginx, with the 404 page and cache headers already configured.

```sh
docker run -p 8080:80 ghcr.io/minardi299/aloha-website:latest
```

Then open http://localhost:8080. Versioned tags are published too, for example `ghcr.io/minardi299/aloha-website:0.1.0`. The image supports amd64 and arm64.

To build the image yourself:

```sh
docker build -t aloha-website .
docker run -p 8080:80 aloha-website
```
