# Portfolio

Personal portfolio built with Next.js, featuring a blog, project showcase, and AI chat.

## Run locally

1. **Install dependencies**
   ```bash
   bun install
   ```

2. **Set up environment** (optional, for AI chat)
   
   Create `.env.local`:
   ```bash
   GEMINI_API_KEY=your_key
   UPSTASH_REDIS_REST_URL=your_url
   UPSTASH_REDIS_REST_TOKEN=your_token
   ```

3. **Start dev server**
   ```bash
   bun run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## Tech

- Next.js 16, React 19, Bun
- Tailwind CSS, Radix UI, Framer Motion
- Velite (MDX content)
- Google Gemini API

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Development server |
| `bun run build` | Production build |
| `bun run start` | Production server |
| `bun run lint` | ESLint |

## License

MIT
