# Nova Style Lounge, Kandy

A redesigned, premium marketing site for Nova Style Lounge, Kandy. Private,
appointment-only grooming by Shan. Built with Next.js (App Router) and Tailwind
CSS v4, and exported as a fully static site so it hosts anywhere with no server.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Do not run `npm run build` while `npm run dev` is running. They share the
`.next` folder and running both at once can leave the dev server serving
un-styled pages. Stop dev first, then build.

## Production build (what you deploy)

```bash
npm run build
```

This writes a static site to the `out/` folder. That folder is the deploy
artifact. Nothing server-side is required.

### Deploy to Netlify

- Drag-and-drop: run `npm run build`, then drag the `out/` folder onto the
  Netlify dashboard.
- Git-based: connect the repo. `netlify.toml` already sets the build command
  (`npm run build`) and publish directory (`out`), so Netlify builds it for you.

Security headers, HTTPS redirects, and caching are configured in `netlify.toml`
and `public/_headers`.

## The booking email system

The form posts to [Web3Forms](https://web3forms.com). The existing access key
is set in `lib/content.ts` (`contact.web3formsKey`), so booking requests go to
the same inbox as before. To point them somewhere else, replace that key with a
new one from your own Web3Forms account. No other change is needed.

The form has client-side validation, a loading state, a success screen, and a
WhatsApp fallback if the request fails. A honeypot field blocks basic spam bots.

## Photos

Only two real photographs are in place: the hero interior
(`public/images/hero-interior.jpg`) and Shan's portrait
(`public/images/shan-portrait.jpg`).

The five `portfolio-*.jpg` files and `lounge-detail.jpg` are on-brand
placeholder graphics. To go live with real work, drop real session photos into
`public/images/` using the same file names (portrait orientation, roughly
800x1000px, warm tones). The gallery will pick them up automatically. The
"Follow the work on Instagram" button already links to Shan's account.

## Editing content

All copy, links, service lists, testimonials, and availability live in a single
file: `lib/content.ts`. Edit text there without touching the components.

## Structure

```
app/            layout (fonts, SEO, JSON-LD), page, global styles
components/     one file per section (Hero, Services, Booking, ...)
lib/content.ts all site copy and links
public/         images, favicons, robots.txt, sitemap.xml, _headers
```
