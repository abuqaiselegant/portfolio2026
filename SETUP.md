# Project setup – what you need

This doc lists everything the project depends on and what you need to configure.

---

## 1. Environment variables

All env vars go in **`.env.local`** (create it from `.env.example`). Never commit `.env.local`.

| Variable | Required? | Purpose |
|----------|-----------|---------|
| **`GEMINI_API_KEY`** | **Yes** (for AI chat) | Google Gemini API key. Without it, the "Ask Gemini" chat on project cards will fail. Get it from [Google AI Studio](https://aistudio.google.com/apikey). |
| **`UPSTASH_REDIS_REST_URL`** | No | Upstash Redis REST URL. Used for: (1) rate limiting the Gemini API, (2) caching GitHub READMEs. If omitted, chat works but with no rate limit and no README cache. |
| **`UPSTASH_REDIS_REST_TOKEN`** | No | Upstash Redis REST token. Only used when `UPSTASH_REDIS_REST_URL` is also set. |

**Minimum to run locally with AI chat:**  
Only `GEMINI_API_KEY` is required.

**Optional:** Set both Upstash vars if you want rate limiting and README caching (see [Upstash setup](#2-optional-upstash-redis)).

---

## 2. Optional: Upstash Redis

- Sign up at [upstash.com](https://upstash.com) → create a Redis database.
- Copy **UPSTASH_REDIS_REST_URL** and **UPSTASH_REDIS_REST_TOKEN** from the database dashboard.
- Add them to `.env.local`. Restart the dev server.

No Redis = app still works; you just won’t have rate limiting or README caching.

---

## 3. Content and assets

- **Blogs:** `content/blogs/*.mdx`
- **Projects:** `content/projects/*.mdx`
- **Project banners:** Each project needs `bannerLight` and `bannerDark` in frontmatter, pointing to images under `content/assets/`. Currently all use `../assets/betternews-light.png` and `../assets/betternews-dark.png`. To use custom images per project, add files to `content/assets/` and update the project’s frontmatter.

Velite builds this at `bun run dev` / `bun run build`; no extra step.

---

## 4. Resume PDF

- **`/resume`** is rewritten to **`/abuqais.pdf`** (see `next.config.ts`).
- You must have **`public/abuqais.pdf`** for the resume link to work. The repo has `resume.tex`; compile it to PDF and save as `public/abuqais.pdf`, or replace with your own PDF.

---

## 5. Site identity and links

**`src/config/site.config.ts`** holds:

- Site name, title, description, origin, OG image URL
- Email and social links (GitHub, X, LinkedIn, Medium, Buy Me a Coffee)

Update these for your own brand and links. No env vars needed; edit the file.

---

## 6. GitHub contributions widget

- Uses the public API `https://github-contributions-api.jogruber.de/v4/{username}`.
- Username is hardcoded as **`abuqaiselegant`** in `src/components/github-contributions.tsx`. Change it there if your GitHub username is different.
- No API key; the third-party service is public (and may have rate limits).

---

## 7. Deployment (e.g. Google Cloud Run)

- **Deploy script:** `bun run deploy` runs `gcloud run deploy` and forwards env vars from `.env.local`. You need the **gcloud CLI** installed and logged in.
- Set the same env vars in your Cloud Run service (e.g. via console or `--set-env-vars`) so production has `GEMINI_API_KEY` and, if you use it, Upstash Redis.

---

## 8. Nothing else required

- **OG images:** `/api/og` uses `@vercel/og`; no extra config.
- **Book a call:** Section is a mailto link using `siteConfig.email`; no Cal.com or other service.
- **Theme:** next-themes; no env.

---

## Quick checklist

- [ ] Copy `.env.example` to `.env.local`
- [ ] Set `GEMINI_API_KEY` in `.env.local`
- [ ] (Optional) Set Upstash Redis URL and token in `.env.local`
- [ ] Ensure `public/abuqais.pdf` exists for the resume link
- [ ] Update `src/config/site.config.ts` (name, origin, email, socials)
- [ ] If not abuqais: change GitHub username in `src/components/github-contributions.tsx`
- [ ] Run `bun install` then `bun run dev`
